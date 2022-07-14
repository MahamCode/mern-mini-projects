import { useEffect } from 'react';
import authFetch from '../axios/interceptors';

const url = 'https://course-api.com/react-store-products';

/*it is the functions that axios calls for every request
and we can use them to transform the request before
it leaves the request
as well as add some custom logic when we handle the response
basically if it is for authentication purpose
*/
const Interceptors = () => {
  const fetchData = async () => {
  try {
     const resp = await authFetch('/react-store-products')
  } catch (error) {
    
  }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>interceptors</h2>;
};
export default Interceptors;
