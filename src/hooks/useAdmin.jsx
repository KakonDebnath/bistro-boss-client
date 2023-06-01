import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useAdmin = () => {
    const { user } = useAuth();
    const [AXIOS] = useAxios();
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async ()=>{
            const result = await AXIOS.get(`users/admin/${user?.email}`);
            // console.log(result.data.admin);
            return result.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
}

export default useAdmin;