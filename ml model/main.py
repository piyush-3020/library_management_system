from flask import Flask, jsonify, request
import pandas as pd
import joblib

app = Flask(__name__)

# load required files
tfidf = joblib.load('tfidf_vectorizer.pkl')
cosine_sim = joblib.load('cosine_sim.pkl')
indices = joblib.load('title_indices.pkl')
df = pd.read_pickle('books_df.pkl')

# route for health check
@app.route('/')
def home():
    return jsonify({"message": "Welcome to the Book Recommendation API!"})

# recommendation route
@app.route('/recommend', methods=['POST'])
def recommend_books():
    data = request.get_json()
    read_books = data.get('read_books', [])

    book_indices = [indices[title] for title in read_books if title in indices]
    if not book_indices:
        return jsonify({"error": "None of the input books found in dataset"}), 400

    # average the similarity scores of all read books
    sim_scores = sum(cosine_sim[i] for i in book_indices) / len(book_indices)
    sim_scores = list(enumerate(sim_scores))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)

    recommended_indices = [
        i for i, _ in sim_scores if df.iloc[i]['title'] not in read_books
    ][:10]      # top 10 responses

    # full metadata response
    columns = [
        'isbn13', 'isbn10', 'title', 'subtitle', 'authors', 'categories',
        'thumbnail', 'description', 'published_year', 'average_rating',
        'num_pages', 'ratings_count'
    ]
    recommendations = df.iloc[recommended_indices][columns]

    return jsonify(recommendations.to_dict(orient='records'))

if __name__ == '__main__':
    app.run(debug=True)
