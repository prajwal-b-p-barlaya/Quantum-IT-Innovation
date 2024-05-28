// import React from 'react';
// import './ProfileBio.css';

// const ProfileBio = ({ currentProfile }) => {
//   return (
//     <div className="profile-bio">
//       <table className="profile-bio-table">
//         <tbody>
//           <tr>
//             <td><strong>Tags Interested</strong></td>
//             <td>
//               {currentProfile?.tags.length !== 0 ? (
//                 currentProfile?.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)
//               ) : (
//                 <span>0 Tags watched</span>
//               )}
//             </td>
//           </tr>
//           <tr>
//             <td><strong>About</strong></td>
//             <td>
//               {currentProfile?.about ? (
//                 <span>{currentProfile?.about}</span>
//               ) : (
//                 <span>No Bio Found</span>
//               )}
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ProfileBio;


import React from 'react';
import './ProfileBio.css';
import moment from 'moment';

const ProfileBio = ({ currentProfile }) => {
  return (
    <div className="profile-bio">
      <table className="profile-bio-table">
        <tbody>
          <tr>
            <td><strong>Tags Interested</strong></td>
            <td>
              {currentProfile?.tags.length !== 0 ? (
                currentProfile?.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)
              ) : (
                <span>0 Tags watched</span>
              )}
            </td>
          </tr>
          <tr>
            <td><strong>About</strong></td>
            <td>
              {currentProfile?.about ? (
                <span>{currentProfile?.about}</span>
              ) : (
                <span>No Bio Found</span>
              )}
            </td>
          </tr>
          <tr>
            <td><strong>Joined</strong></td>
            <td>
              {currentProfile?.joinedOn ? (
                <span>{moment(currentProfile?.joinedOn).format('MMMM Do, YYYY')}</span>
              ) : (
                <span>No Join Date Found</span>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProfileBio;
