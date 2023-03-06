import React, {useState, useEffect} from 'react'

export default function MainQuestion() {
  // States
  const [arr, setArr] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('""');
  const [answerInp, setAnswerInp] = useState(false);
  const [answerId, setAnswerId] = useState(null);
  const [editInp, setEditInp] = useState(false);
  const [editId, setEditId] = useState(null);
  const [show, setShow] = useState(true)
  const [owner, setOwner] = useState('')
  const [deleteName, setDeleteName] = useState('')
  const [deleteId, setDeleteId] = useState(null)
  const [deleteInp, setDeleteInp] = useState(false)
  
  // Functions
  const addQuestion = () => {
  const newQuestion = {
  Question: question,
  Answer: answer,
  id: Math.floor(Math.random() * 100000),
  Owner: owner
  };
  setArr(prevArr => [...prevArr, newQuestion]);
  console.log(arr);
  }
  
  const takeQuestion = (e) => {
  setQuestion(e.target.value);
  
  }
  
  const handleAnswer = (id) => {
  setAnswerInp(true);
  setAnswerId(id);
  }
  
  const handleAnswering = (e) => {
  setAnswer(e.target.value);
  }
  
  const handleSubmitAns = (id) => {
  setArr(prevArr => prevArr.map(q => {
  if (q.id === id) {
  return {
  ...q,
  Answer: answer
  }
  } else {
  return q;
  }
  }));
  setAnswerInp(false);
  setAnswer('');
  setAnswerId(null);
  console.log(arr);
  }
  
  const handleEdit = (id) => {
  setEditInp(true);
  setEditId(id);
  }
  
  const handleEditing = () => {
  setArr(prevArr => prevArr.map(q => {
  if (q.id === editId) {
  return {
  ...q,
  Question: question
  }
  } else {
  return q;
  }
  }));
  setEditInp(false);
  setQuestion('');
  setEditId(null);
  console.log(arr);
  }

  let hideQuestions = ()=>{
 setShow(false)
  }
  const showQuestions = () => {
    setShow(true);
  };
  let addName = (e)=>{
   setOwner(e.target.value)
  }
  let handleDelete = (id)=>{
    setDeleteInp(true)
    setDeleteId(id)
    setDeleteName('')
    console.log(545);
  }
  let takeName = (e)=>{
    setDeleteName(e.target.valeu)
  }
  let handleDeleting = ( id,name) => {
    setArr(prevArr => prevArr.filter(item => item.Owner !== name && item.id !== id))
    
    setDeleteInp(false)
  };
  
  useEffect(() => {
  console.log('arr has changed');
  }, [arr]);
  
  return (
    <div>
      <div id='takeInp'>
        <h1>Write your Questions</h1>
        <span>
          <h1 id='labQuestion'>Add your name:</h1>
          <span>
            <input type="text" placeholder='Add Name (optional)...' value={owner} onChange={addName}/>
          </span>
        </span>
        <span>
          <h1 id='labQuestion'>Question:</h1>
          <span>
            <input id='questionInp' placeholder='Add Question...' type="text" value={question} onChange={takeQuestion} />
          </span>
        </span>
      </div>
      <button id='addQuestionBtn' onClick={addQuestion}>Add Question</button>
      <button id='hideQuestionsBtn' onClick={hideQuestions}>Hide Questions</button>
      <button id="showQuestionsBtn" onClick={showQuestions}>Show Questions</button>
     
      {show && arr.map((item) =>
      
     <div id='displayQuestions' key={item.id}>
         
          <p>Question: {item.Question}?</p>
          <p>Answer: {item.Answer}</p>
          <p>Created By: {item.Owner}</p>
          <button id='answerBtn' onClick={() => handleAnswer(item.id)}>Answer</button>
         
          {answerInp && answerId === item.id &&
            <>
              <h3>Answer the Question</h3>
              <input type="text" onChange={handleAnswering} value={answer} />
              <button onClick={() => handleSubmitAns(item.id)}>Submit</button>
            </>
          }
          <button id='editBtn' onClick={() => handleEdit(item.id)}>Edit</button>
          {editInp && editId === item.id &&
            <>
              <h3>Edit the Question</h3>
              <input type="text" onChange={takeQuestion} value={question} />
              <button onClick={() => handleEditing(item.id)}>Submit</button>
            </>
          }
          <button id='deleteBtn' onClick={() => handleDelete(item.id, )}>Delete</button>
         
    {deleteInp && deleteId === item.id && (
      <>
        <h3>Confirm Name to delete the Question</h3>
        <input type="text" onChange={takeName} value={deleteName} />
        <button onClick={() => handleDeleting(item.id,item.Owner)}>Submit</button>
      </>
    )}
        </div>
       
      )}
     
    </div>
  )}