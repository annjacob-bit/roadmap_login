/* // import React, { useState } from 'react';

// const Login: React.FC = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState<string | null>(null);

//   const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     // Validation
//     if (!email || !password) {
//       setError('Both fields are required');
//       return;
//     }

//     // Dummy authentication
//     if (email === 'admin@example.com' && password === 'password') {
//       setError(null);
//       alert('Login Successful!');
//       // You can navigate to another page after successful login
//     } else {
//       setError('Invalid email or password');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="input-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={handleEmailChange}
//             required
//           />
//         </div>
//         <div className="input-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={handlePasswordChange}
//             required
//           />
//         </div>
//         {error && <div className="error">{error}</div>}
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!email || !password) {
      setError('Both fields are required');
      return;
    }

    // Dummy authentication
    if (email === 'admin@example.com' && password === 'password') {
      setError(null);
      alert('Login Successful!');
      // You can navigate to another page after successful login
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          {error && <div className="error">{error}</div>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
 */

/*rt React from "react";
import "./Login.css";
import roadmapImage from "./assets/roadmap-pic-login.png";

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <p>
          Don't have an account yet? <a href="#">Sign Up</a>
        </p>
        <form>
          <label>Email Address</label>
          <input type="email" placeholder="you@example.com" required />

          <label>Password</label>
          <input type="password" placeholder="Enter 6 characters or more" required />
          
          <div className="options">
            <div>
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="login-btn">Login</button>

          <p className="or-text">Or login with</p>
          <div className="social-login">
            <button className="google-btn">Google</button>
            <button className="facebook-btn">Facebook</button>
          </div>
        </form>
      </div>

      {/* Correct placement of the image }
      <div className="image-section">
        <img src={roadmapImage} alt="Login Illustration" />
      </div>
    </div>
  );
};

export default Login;
 */
import React from "react";
import "./Login.css"; 
import roadmapImage from "./assets/roadmap-pic-login.png"; 

const Login: React.FC = () => {
  return (
    <div className="login-container">
      {/* Left: Image Section */}
      <div className="image-section">
        <img src={roadmapImage} alt="Login Illustration" />
      </div>

      {/* Right: Login Form */}
      <div className="login-box">
        <h2>Login</h2>
        <p>Don't have an account yet? <a href="#">Sign Up</a></p>
        <form>
          <label>Email Address</label>
          <input type="email" placeholder="you@example.com" required />

          <label>Password</label>
          <input type="password" placeholder="Enter 6 characters or more" required />
          
          <div className="options">
            <div>
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="login-btn">Login</button>

          <p className="or-text">Or login with</p>
          <div className="social-login">
            <button className="google-btn">Google</button>
            <button className="facebook-btn">Facebook</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
