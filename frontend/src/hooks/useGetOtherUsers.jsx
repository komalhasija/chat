import react, { useEffect } from 'react'
import axios from 'axios'
import { SetotherUsers } from '../redux/userSlice';
import { useDispatch } from 'react-redux';

const useGetOtherUsers = () => {
    const dispatch = useDispatch();
    useEffect(()=>{

        const fetchOtherUsers=async()=>{
            try{
                axios.defaults.withCredentials=true;
                const res = await axios.get("http://localhost:8000/api/v1/user/");
                dispatch(SetotherUsers(res.data.otherUsers));
                console.log(res);
            }
            catch(error){
                console.log(error);
            }
        }
        fetchOtherUsers();
    },[dispatch])
}

export default useGetOtherUsers
