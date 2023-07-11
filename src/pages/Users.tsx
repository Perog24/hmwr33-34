import { useState, useEffect } from "react";

import '../scss/Users.css.scss'

interface IUser {
   id: number;
   name: string;
   username: string;
   email: string;
   website?: string;
   phone?: string;
   [key: string]: any;

}

const Users = () => {
const [usersList, setUsersList] = useState<IUser[]>([]);

useEffect(()=>{
   fetch("https://jsonplaceholder.typicode.com/users")
   .then(response=> response.json())
   .then(data =>{setUsersList(data)})
})


   return (
      <div>
         <h3> Users list:</h3>
         <div className="usersWrapper">
         {usersList.length > 0 && usersList.map((user, index)=>{
            return(<div key={index} className="user">
               <h3>ID:{user.id}</h3>
               <h4>Login:{user?.username}</h4>
               <h5>Name:{user?.name}</h5>
               <p>Email:{user.email}</p>

            </div>)})}
         </div>
      </div>
   )
}
export default Users;