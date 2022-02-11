import { useState } from "react"
import  Button  from "react-bootstrap/Button";


const QuestionFrom = ({getResponse}) => {

    const [question, setQuestion] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        if(!question){
            alert('Please Ask a Question')
        }
        getResponse(question);
    }

    return(
        <div className='question'>
            <form>
                <input 
                    type="text"
                    placeholder="Ask the Magic 8ball"
                    value={question}
                    onChange={e => setQuestion(e.target.value)}
                />
                {/* <button className="ask" type="submit" onClick={e => handleClick(e)}>Submit</button> */}
                <Button 
                    className="ask" 
                    type="submit" 
                    onClick={e => handleClick(e)}
                    variant='outline-light' 
                    >
                    Submit
                </Button>
            </form>
        </div>
    );
}

export default QuestionFrom