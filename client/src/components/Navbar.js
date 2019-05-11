import React, { useContext } from 'react';
import { Context } from '../context';
import { Link } from 'react-router-dom';
import API from '../utils/API';
// import { UserContext } from '../context';

const Navbar = () => {
  // 16.8 useContext
  const {
    state: { currentUser },
  } = useContext(Context);

  console.log(currentUser);
  return (
    <div>
      {!currentUser && (
        <>
          <Link to="/signup">
            <button>Sign Up</button>{' '}
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </>
      )}
      {currentUser && (
        <button onClick={() => localStorage.removeItem('current_user_token')}>
          Log out
        </button>
      )}
      {currentUser && <span>{currentUser.email}</span>}
    </div>
  );
  // }
};

export default Navbar;
