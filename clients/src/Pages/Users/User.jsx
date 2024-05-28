// import React from 'react';
// import Avatar from '../../components/Avatar/Avatar';
// import './Users.css';

// const User = ({ user }) => {
//   return (
//     <tr className='user-row'>
//       <td>
//         <Avatar backgroundColor="purple" color="black" fontSize="20px" px='20px' py='20px'>
//           {user?.name.charAt(0).toUpperCase()}
//         </Avatar>
//       </td>
//       <td>{user?.name}</td>
//       <td>{user?.reputation}</td>
//     </tr>
//   );
// }

// export default User;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import Avatar from '../../components/Avatar/Avatar';
// import moment from 'moment';
// import './Users.css';

// const User = ({ user }) => {
//   return (
//     <tr className='user-row'>
//       <td>
//         <Link to={`/users/${user._id}`}>
//           <Avatar backgroundColor="purple" color="black" fontSize="20px" px='20px' py='20px'>
//             {user?.name.charAt(0).toUpperCase()}
//           </Avatar>
//         </Link>
//       </td>
//       <td>
//         <Link to={`/users/${user._id}`} className='user-link'>
//           {user?.name}
//         </Link>
//       </td>
//       <td>{moment(user?.joinedOn).format('MMMM Do, YYYY')}</td>
//       <td>

//       </td>
//     </tr>
//   );
// }

// export default User;


// User.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import Avatar from '../../components/Avatar/Avatar';
import moment from 'moment';
import './Users.css';

const User = ({ user, isLoggedIn }) => {
  const currentUser = useSelector((state) => state.currentUserReducer);

  return (
    <tr className='user-row'>
      <td>
        <Link to={`/users/${user._id}`}>
          <Avatar backgroundColor="purple" color="black" fontSize="20px" px='20px' py='20px'>
            {user?.name.charAt(0).toUpperCase()}
          </Avatar>
        </Link>
      </td>
      <td>
        <Link to={`/users/${user._id}`} className='user-link'>
          {user?.name}
        </Link>
      </td>
      <td>{moment(user?.joinedOn).format('MMMM Do, YYYY')}</td>
      <td>
        {/* {isLoggedIn && currentUser?.result?._id === user._id && (
         <button
         type="button"
         onClick={() =>(true)}
         className="edit-profile-btn"
       >
         <FontAwesomeIcon icon={faPen} /> Edit Profile
       </button>
        )} */}


         </td>
    </tr>
  );
}

export default User;


