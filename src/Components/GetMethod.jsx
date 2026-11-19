import React, {useState, useEffect} from 'react'

export default function GetMethod() {
    const [users, setUsers]=useState([]);

    const getData=async()=>{
        const response=await fetch("http://localhost:3000/users");
        const data=await response.json();
        setUsers(data);
    }

    useEffect(()=>{
        getData();
    });

  return (
    <div className="get-method">
      <h2>Get Method</h2>
      <ul className="get-header">
        <li><h2>User ID</h2></li>
        <li><h2>Name</h2></li>
        <li><h2>Age</h2></li>
        <li><h2>Action 1</h2></li>
        <li><h2>Action 2</h2></li>
      </ul>
      {users.map((user)=>(
        <div key={user.id} className="get-table">
            <ul className="get-row">
              <li>{user.id}</li>
              <li>{user.name}</li>
              <li>{user.age}</li>
              <li><button>Delete</button></li>
              <li><button>Edit</button></li>
            </ul>
        </div>
      ))}
    </div>
  )
}
