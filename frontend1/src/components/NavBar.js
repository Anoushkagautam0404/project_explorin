// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { logout } from '../api/auth';  // Import logout API

// const NavBar = () => {
//   const navigate = useNavigate();  // Use useNavigate instead of useHistory
//   const token = localStorage.getItem('token');
//   const role = localStorage.getItem('role');

//   const handleLogout = () => {
//     logout();  // Remove token and user info from localStorage
//     navigate('/login');  // Redirect to login page after logout
//   };

//   return (
//     <nav className="navbar">
//       <div className="nav-logo">
//         <Link to="/">Project Management Tool</Link>
//       </div>
      
//       <ul className="nav-links">
//         {/* If user is not logged in, show Login and Signup */}
//         {!token ? (
//           <>
//             <li>
//               <Link to="/login">Login</Link>
//             </li>
//             <li>
//               <Link to="/signup">Signup</Link>
//             </li>
//           </>
//         ) : (
//           <>
//             {/* If user is logged in, show Dashboard link based on role */}
//             {role === 'team leader' && (
//               <li>
//                 <Link to="/dashboard/team-leader">Dashboard</Link>
//               </li>
//             )}
//             {role === 'team member' && (
//               <li>
//                 <Link to="/dashboard/team-member">Dashboard</Link>
//               </li>
//             )}
//             {role === 'admin' && (
//               <li>
//                 <Link to="/dashboard/admin">Admin Dashboard</Link>
//               </li>
//             )}
//             <li>
//               <button onClick={handleLogout} className="logout-button">Logout</button>
//             </li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default NavBar;




import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../api/auth';  // Import logout API
import './NavBar.css';  // Importing the CSS file

const NavBar = () => {
  const navigate = useNavigate();  // Use useNavigate instead of useHistory
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  const handleLogout = () => {
    logout();  // Remove token and user info from localStorage
    navigate('/login');  // Redirect to login page after logout
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">Project Management Tool</Link>
      </div>
      
      <ul className="nav-links">
        {/* If user is not logged in, show Login and Signup */}
        {!token ? (
          <>
            <li>
              <Link to="/login" className="nav-button">Login</Link>
            </li>
            <li>
              <Link to="/signup" className="nav-button">Signup</Link>
            </li>
            <li>
              <Link to="/about" className="nav-button">AboutUs</Link>
            </li>

          </>
        ) : (
          <>
            {/* If user is logged in, show Dashboard link based on role */}
            {role === 'team leader' && (
              <li>
                <Link to="/dashboard/team-leader" className="nav-button">Dashboard</Link>
              </li>
            )}
            {role === 'team member' && (
              <li>
                <Link to="/dashboard/team-member" className="nav-button">Dashboard</Link>
              </li>
            )}
            {role === 'admin' && (
              <li>
                <Link to="/dashboard/admin" className="nav-button">Admin Dashboard</Link>
              </li>
            )}
            <li>
              <button onClick={handleLogout} className="nav-button logout-button">Logout</button>
            </li>
            <li>
              <Link to="/about" className="nav-button">AboutUs</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;