import { useState } from 'react';
import './App.css';
import QuestionFrom from './components/QuestionForm';
import EightBall from './components/EightBall';
import QuestionHistory from './components/QuestionHistory';

function App() {

  const [responses, setResponses] = useState([])
  const [currentResponse, setCurrentResponse] = useState('')

  const getResponse = (question) => {
    let params = encodeURIComponent(`${question}`);
    let uri = `https://8ball.delegator.com/magic/JSON/${params}`;
    fetch(uri)
      .then(resp => resp.json())
      .then(json => {
        let newResponse = {
          question: json.magic.question,
          reply: json.magic.answer
        }
        setResponses([...responses, {...newResponse}])
        setCurrentResponse({...newResponse})
      })
  }


  return (
    <div className="App">
      <QuestionFrom getResponse={getResponse} />
      <EightBall message={currentResponse.reply} />
      <QuestionHistory question={responses}/>
    </div>
  );
}

export default App;
