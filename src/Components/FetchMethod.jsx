import React, {useState} from 'react'

export default function FetchMethod() {
    const [users, setUsers]=useState([]);
        const [message, setMessage]=useState("");
        const url="https://jsonplaceholder.typicode.com/users";

        //Get Method

        const getData=async()=>{
            try{
                const response=await fetch(url);
                if(!response.ok){
                    throw new Error("Failed to fetch the data");
                }
                const data=await response.json();
                setUsers(data);
                setMessage("Data Fetched successfully");
            }
            catch(error){
                setMessage(error.message);
            }
        }

        //Post Method
        const postData=async()=>{
            try{
                const response=await fetch(url,{
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify({
                        name:"Jaya surya",
                        email:"jayasurya@gmail.com"
                    })
                });
                if(!response.ok){
                    throw new Error("Failed to post the data");
                }
                const data=await response.json();
                setUsers(data);
                setMessage("New data added Successfully");
            }
            catch (error) {
                setMessage(error.message);
            }
        }

        //Put Method
        const putData=async()=>{
            try{
                const response=await fetch(`${url}/1`,{
                    method:"PUT",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify({
                        name:"Jaya surya",
                        email:"jayasurya@gmail.com"
                    })
                });
                if(!response.ok){
                    throw new Error("Failed to PUT the data");
                }
                await response.json();
                setMessage("Data replaced Successfully");
            }
            catch (error) {
                setMessage(error.message);
            }
        }

        //Patch Method
        const patchData=async()=>{
            try{
                const response=await fetch(`${url}/1`,{
                    method:"PATCH",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify({
                        name:"Jaya surya",
                        email:"jayasurya@gmail.com"
                    })
                });
                if(!response.ok){
                    throw new Error("Failed to PATCH the data");
                }
                const data=await response.json();
                setUsers(data);
                setMessage("Data updated Successfully");
            }
            catch (error) {
                setMessage(error.message);
            }
        }


        //Delete Method

        const delData=async()=>{
            try{
                const response=await fetch(url,{
                    method:"DELETE"
                });
                if(!response.ok){
                    throw new Error("Failed to Delete the data");
                }
                const data=await response.json();
                setUsers(data);
                setMessage("Data Deleted successfully");
            }
            catch(error){
                setMessage(error.message);
            }
        }




        
  return (
    <div>
      <h3>Fetch Method</h3>
      <button onClick={getData}>Fetch Data</button><br></br>
      <button onClick={postData}>Post Data</button><br></br>
      <button onClick={putData}>Put Data</button><br></br>
      <button onClick={patchData}>Patch Data</button><br></br>
      <button onClick={delData}>Delete Data</button><br></br>


      <p>{message}</p>
      {users.map((user)=>(
        <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.id}</p>
            <p>{user.email}</p>
        </div>     
     ))}
    </div>
  )
}
