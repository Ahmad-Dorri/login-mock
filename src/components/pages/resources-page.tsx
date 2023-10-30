import axios from 'axios';
import { getCookie } from '../../lib/get-cookie.js';

const ResourcesPage = () => {
  const getResources = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/auth/RESOURCE', {
        headers: {
          Authorization: getCookie('accessToken'),
        },
      });
      return await response.data;
    } catch (error) {
      return error?.message;
    }
  };

  return (
    <div>
      resources page
      <button onClick={getResources}>onclick</button>
    </div>
  );
};

export default ResourcesPage;
