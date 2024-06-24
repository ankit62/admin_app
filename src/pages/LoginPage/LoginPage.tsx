import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import axios from 'axios';
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const signIn = useSignIn();
  const[ isLoggedIn, set ] = useState(useIsAuthenticated());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (signIn({
      auth: {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0Ijo4MDA4NjA1MTk1fQ.E0EVT_4KVJHPEnC8XmukxiRRcAIo31U9wWW99RVQumA',
        type: 'Bearer'
      },
      userState: {name: 'React User', uid: 123456}
    })) {
      // If Login Successfull, then Redirect the user to secure route
      console.log('abc')
      navigate('/home')
    } else {
      // Else, there must be some error. So, throw an error
      alert("Error Occoured. Try Again")
    }
  };

  const loginHandler = () => {
    if(signIn({
      auth: {
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9zYXNlIiwiZXhwIjoxODE5MjQ4NDYyfQ._r5RDualG6HaNeQU7N1TkTWz0GgZLaVfXmHyn_NIO2E',
          type: 'Bearer'
      },
      userState: {name: 'React User', uid: 123456}
  })){ // Only if you are using refreshToken feature
      console.log('here')
      navigate('/home')
  }else {
      //Throw error
  }
  }

  return (
    
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <button onClick={loginHandler}>LOGIN</button>
    </div>
  );
};

export default Login;
