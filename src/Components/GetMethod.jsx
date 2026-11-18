import React, {useState, useEffect} from 'react'

export default function GetMethod() {
    const [users, setUsers]=useState([]);

    const getData=async()=>{
        const response=await fetch("https://jsonplaceholder.typicode.com/users");
        const data=await response.json();
        setUsers(data);
    }

    useEffect(()=>{
        getData();
    });

  return (
    <div>
      <h2>Get Method</h2>
      {users.map((user)=>(
        <div key={user.id}>
            <h4>{user.name}</h4>
            <p>{user.id}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
        </div>
      ))}
    </div>
  )
}
