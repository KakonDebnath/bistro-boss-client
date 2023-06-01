import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxios from './useAxios';

const useCart = () => {
    const {user} = useContext(AuthContext);
    const AXIOS = useAxios();
    // const token = localStorage.getItem('access_token');
    const { refetch, isLoading, data:cart = []} = useQuery({
        queryKey: ['cart', user?.email],
        // queryFn: async () => {
        //     const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`,{
        //         headers: {
        //             authorization: `bearer ${token}`,
        //         }
        //     })
        //     return response.json()
        //   },
        queryFn: async ()=>{
            const response = await AXIOS(`/carts?email=${user?.email}`)
            // console.log(response);
            return response.data;
        }
      })
      return [cart, refetch, isLoading]
};

export default useCart;