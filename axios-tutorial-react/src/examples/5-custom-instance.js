import { useEffect } from 'react';
import authFetch from '../axios/custom';
import axios from 'axios';


const randomUserUrl = 'https://randomuser.me/api';
//when you want to add the headers to a specific requests then it makes more sense to use
const CustomInstance = () => {
  const fetchData = async () => {
    try {
        const resp1 = await authFetch('/react-store-products')
        const resp2 = await authFetch(randomUserUrl)
    } catch (error) {
      console.log()
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>custom instance</h2>;
};
export default CustomInstance;
