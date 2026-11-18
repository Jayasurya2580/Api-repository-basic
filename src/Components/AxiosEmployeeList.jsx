import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AxiosEmployeeList() {
  const [employee, setEmployee] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setEmployee(response.data);
        setLoading(false);
      })
      .catch((requestError) => {
        setError(requestError.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading Employee Details.........,</h2>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
        <h2>Employee Details List</h2>
        {employee.map(emp=>(
            <div key={emp.id}>
                <h3>Employee Name : {emp.name}</h3>
                <p>Employee Email : {emp.email}</p>
                <p>Employee Phone : {emp.name}</p>
                </div>
        ))}
      
    </div>
  );
}
