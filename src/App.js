
import './App.css';
import React, { useEffect, useState } from 'react';
import { UserProfiles } from './components/UserProfiles';
function App() {
   const [data, setData] = useState([]);


useEffect(() => {
  const fetchData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const newData = await response.json();
    console.log(newData)
     setData(newData);
  };

  fetchData();
},[]);

// useEffect(() => {
//  fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{
//   return  res.json();
//  }).then((resdata)=>{
//    console.log(resdata)
//    setData(resdata);
//  })
// }, [])

  return (
    <>
     <h1 className='heading'>
       Users Profile
     </h1>
    <div className="container">
        
       {data.map((profile)=>{
      return(
        <div key={profile.id }  >
          <UserProfiles  profile={profile}/>
        </div>
      )
    })} 
    </div>
    </>
  );
}

export default App;
