import React from 'react'
import Table from 'react-bootstrap/Table'

const QuestionHistory = ({ question }) => {
    let questions = [...question]
  return (
    <div className='historyTable'>
        <Table striped bordered hover variant='dark'>
            <thead>
                <tr>
                    <th>Questions</th>
                    <th>Result</th>
                </tr>
            </thead>
            <tbody>
                {questions.map( (q) => {
                    console.log(q);
                        return(
                            <tr>
                                <td>{q.question}</td>
                                <td>{q.reply}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    </div>
  )
}

export default QuestionHistory