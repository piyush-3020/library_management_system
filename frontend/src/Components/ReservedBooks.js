import React from 'react'
import './ReservedBooks.css'

function ReservedBooks() {
    return (
        <div className='reservedbooks-container'>
            <h2 className='reservedbooks-title'>Books On Hold</h2>
            <table className='reservedbooks-table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Book</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Pranav</td>
                        <td>Introduction to Algorithms</td>
                        <td>10/04/2025</td>
                    </tr>
                    <tr>
                        <td>Sneha</td>
                        <td>Artificial Intelligence: A Modern Approach</td>
                        <td>09/04/2025</td>
                    </tr>
                    <tr>
                        <td>Ravi</td>
                        <td>Clean Code</td>
                        <td>08/04/2025</td>
                    </tr>
                    <tr>
                        <td>Aisha</td>
                        <td>The Art of Computer Programming</td>
                        <td>07/04/2025</td>
                    </tr>
                    <tr>
                        <td>Manish</td>
                        <td>Structure and Interpretation of Computer Programs</td>
                        <td>06/04/2025</td>
                    </tr>
                    <tr>
                        <td>Divya</td>
                        <td>Computer Networking: A Top-Down Approach</td>
                        <td>05/04/2025</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ReservedBooks
