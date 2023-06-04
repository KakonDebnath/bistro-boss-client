import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
const useMenu = () => {
    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch("http://localhost:5000/menu")
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenu(data);
    //             setLoading(false)
    //         })
    //         .catch(err => console.error(err))
    // }, [])
    const [AXIOS] = useAxios();
    const { data: menu = [], refetch, isLoading: loading } = useQuery({
        queryKey: ['menus'],
        queryFn: async () => {
            const result = await AXIOS.get('/menu');
            return result.data;
        },
    })
    return [menu, loading, refetch]
};

export default useMenu;