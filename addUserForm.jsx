import { useEffect, useState } from "react";

const AddUserForm = ({data}) => {

  const [data1, setData1] = useState([]);

  const getUsers = () => { 
      
    fetch('http://localhost:8080/addUsers')
      .then(res => res.json())
      .then(data => {
        setData1(data)
        console.log(data)
      }) 
  }
  // useEffect(() => {
  //    getUsers()
    
  // })
    const addUser = async (e) => {
      e.preventDefault();

      const user = {
        photo: e.target.photo.value,
        username: e.target.username.value
      } 
      await fetch('http://localhost:5000/addUsers', {
        method: 'post',
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(user)
      })
      .then(getUsers())
  }
  
  
  console.log(data);
  return (
    <div>
      <form onClick={addUser}>
        <input type="url" name="photo" placeholder="photo"/>
        <input type="text" name="username" placeholder="username"/>
       
        <button type="submit">Add User</button>
        </form>

        {data.map((user, i ) => (
           <div key={i}>
           <h1>{user.username}</h1> 
           <img src={user.photo} alt="kate" />
         </div>
        )) }
        
    </div>
  )
}

export default AddUserForm;