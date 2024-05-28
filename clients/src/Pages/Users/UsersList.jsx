// import React from 'react';
// import { useSelector } from 'react-redux';
// import './Users.css';
// import User from './User';

// const UsersList = () => {
//   const users = useSelector((state) => state.usersReducer);
  

//   return (
//     <div className='user-list-container'>
//       <table className="users-table">
//         <thead>
//           <tr>
//             <th>Logo</th>
//             <th>Username</th>
//             <th>Joined</th>
//            <th>
//             ACTION & STATUS
//            </th>
           
//           </tr>

//         </thead>
//         <tbody>
//           {
//             users.map((user) => (
//               <User user={user} key={user?._id} />
              
//             ))
//           }
        
//         </tbody>
       
       
//       </table>
//     </div>
//   );
// }

// export default UsersList;

// UsersList.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import './Users.css';
import User from './User';

const UsersList = () => {
  const users = useSelector((state) => state.usersReducer);
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);

  return (
    <div className='user-list-container'>
      <table className="users-table">
        <thead>
          <tr>
            <th>Logo</th>
            <th>Username</th>
            <th>Joined</th>
            <th style={{textAlign: 'center'}}>
  Action & Status
              <br>
              </br>
            <p style={{color:'red'}}> Dear Recruiter, The EDIT section  = (Those who have loggedIn they can go thier profile and edit the details )=
        The ACTION which you told to make it as active or not active , I could not complete due to lack of time as I had an exam today morning at college and I have done changes such that only THE PERSON WHO HAS LOGGED IN or STATUS AS ACTIVE Can Only EDIT his profile.
        </p> 
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <User key={user?._id} user={user} isLoggedIn={isLoggedIn} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersList;

