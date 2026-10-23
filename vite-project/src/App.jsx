import { useState, useEffect } from 'react'

import './App.css'
import First from './assets/Component/First'
import Second from './assets/Component/Second'
import {data} from './assets/Component/container/data'



function App() {
const [first, setfirst] = useState(0)
  useEffect(() => {
    alert("Hello World")
  }, [])

  const [count, setCount] = useState(100)
  console.log(data);
function clickHandle()
{
      console.log("hello Nomi Ch****")
    }

  return (
    
    <>
    <button onClick={() => setfirst(first + 1)}>Click Me</button> 
    <p>First: {first}</p>

      <First name="Ali" specs="Engineer"  clickHandle={clickHandle}/>
      <br />

      <Second props={{ name: 'Ali' }} />
      <br />

      <div className="container">
        The Count is {count}
      </div>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <br />

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <br />

      <button onClick={() => setCount(count / 6)}>
        Division
      </button>
      <br />

      <button onClick={() => setCount(count ** 1)}>
        Same
      </button>
      <br />

      
      {data.map((student) => (
        <div key={student.name}>
          <First name={student.name} age={student.age} clickHandle={clickHandle} />
        </div>
      ))}


    <button onClick={clickHandle}>
      Click Me
      </button>  
    </>
  )
}

export default App
