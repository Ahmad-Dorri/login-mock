import React, { useState } from 'react';
import axios from 'axios';
import ResourcesPage from '../pages/resources-page';
interface RequestBody {
  username: string;
  password: string;
}
const SignInForm = () => {
  const [status, setStatus] = useState(0);
  const [username, setUsername] = useState('kminchelle');
  const [password, setPassword] = useState('0lelplR');
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const requestBody: RequestBody = {
      username: username,
      password: password,
    };
    const response = await axios.post(
      'https://dummyjson.com/auth/login',
      requestBody
    );
    const user = await response.data;
    document.cookie = `accessToken=${user?.token}`;
    const status = await response.status;

    setStatus(status);
    // console.log(response);
    console.log(user, status);
  };
  if (status === 0) {
    return (
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          type="text"
          // required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          type="text"
          // required
        />
        <button type="submit">Login</button>
      </form>
    );
  }
  if (status === 200) {
    return <ResourcesPage />;
  }
};

export default SignInForm;
