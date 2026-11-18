import React, {useState} from 'react'
import axios from 'axios'

export default function AxiosMethod() {
    const [users, setUsers]=useState([]);
    const [message, setMessage]=useState("");
    const url="https://jsonplaceholder.typicode.com/users";

    //Get Method
    const getData=async()=>{
        try{
            const response=await axios.get(url);

            console.log(response.data);
            setUsers(response.data);
            setMessage("Data fetched Succesfully");

            
        } catch (error) {
          setMessage(error.message)
        }
    };

    //Post Method
    const postData=async()=>{
      try{
        const responce=await axios.post(url,{
          name:"Jaya Surya",
          email:"jayasurya@gmail.com"
        });

        setMessage("New Data Added Successfully  " + responce.data.name);
      } catch (error) {
        setMessage(error.message);
      }
    }

    //Put Method
    const putData=async()=>{
      try{
        const responce=await axios.put(url+"/1",{
          name:"Jaya Surya",
          email:"jayasurya@gmail.com"
        });

        setMessage("Data Updated Successfully  " + responce.data.name);
      } catch (error) {
        setMessage(error.message);
      }
    }

    //Delete Method
    const delData=async()=>{
      try{
        const responce=await axios.delete(url+"/1");
        setMessage("Data Deleted successfully " + responce.status );
      }
      catch(error){
        setMessage(error.message);
      }
    }

    //Patch method
    const patchData=async()=>{
      try{
        const responce=await axios.put(url+"/1",{
          name:"Jaya Surya",
          email:"jayasurya@gmail.com"
        });

        setMessage("Data Updated Successfully  " + responce.data.name);
        
      }
      catch(error){
        setMessage(error.message);
      }
    }

  return (
    <div>
      <h2>Axios Get Method</h2>
      <button onClick={getData}>Get data</button><br></br>
      <button onClick={postData}>Post data</button><br></br>
      <button onClick={putData}>Put data</button><br></br>
      <button onClick={delData}>Delete data</button><br></br>
      <button onClick={patchData}>Patch data</button><br></br>
      
      <p>{message}</p>
      {users.map((user)=>(
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.id}</p>
        </div>
      ))}

    </div>
  )
}
