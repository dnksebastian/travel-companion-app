import './Signup.css';

import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [displayName, setDisplayName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    console.log('signed up');
  };

  return (
    <div id='signup-page'>
      <h1>Create new user</h1>
      <div className="signup-info-box">
      <p>It is possible to delete user later!</p>
      </div>
      <form className='signup-form auth-form form' onSubmit={handleSignup}>
        <label>
          <span>Display name:</span>
          <input
          required
          className='signup-input'
          type="text"
          value={displayName}
          onChange={({ target }) => setDisplayName(target.value)}
          />
        </label>
        <label>
          <span>Username:</span>
          <input
          required
          className='signup-input'
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
          />
        </label>
        <label>
          <span>Password:</span>
          <input
          required
          className='signup-input'
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          />
        </label>
        <button type='submit' className='btn btn-signup'>Signup!</button>
      </form>
      <div className="login-box">
        <h2>Already registered? Login here:</h2>
        <Link className='login-link auth-link' to={'/login'}>Login</Link>
      </div>
    </div>
  )
};

export default Signup