import React, {useState, useEffect} from 'react'

function App() {
  const [backendData, setBackendData] = useState([{}])

  //useEffect is used to fetch API
  useEffect(()=>{
    fetch("/api").then(
      response=>response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, []) //[] means it only runs on the first render of the component
  return (
    <div>
     {(typeof backendData.users === 'undefined') ? (
       <p>Loading ...</p>
     ): (
       backendData.users.map((user, i) =>(
         <p key={i}>{user}</p>
       ))
     )}
    </div>
  )
}

export default App