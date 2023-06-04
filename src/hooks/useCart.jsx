import { useQuery } from '@tanstack/react-query'
import useAxios from './useAxios';
import useAuth from './useAuth';

const useCart = () => {
    const {user, loading} = useAuth()
    const [AXIOS] = useAxios();
    // const token = localStorage.getItem('access_token');
    const { refetch, isLoading, data:cart = []} = useQuery({
        queryKey: ['cart', user?.email],
        enabled: !loading,
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