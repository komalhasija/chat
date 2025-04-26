import React from 'react'
import useGetOtherUsers from '../../hooks/useGetOtherUsers';
import { useSelector } from 'react-redux';
import OtherUser from './OtherUser';
import './LeftSidebar.css'

const OtherUsers = () => {
    useGetOtherUsers();
    const otherUsers = useSelector(store => store.user?.otherUsers) ?? [];

    if (!Array.isArray(otherUsers)) {
        console.error("Error: otherUsers is not an array", otherUsers);
        return <p>Error loading users.</p>;
    }
  return (
    <div style={{ overflow: "auto", flex: "1" }}>
       {otherUsers?.map((user)=>{
          return(
            <OtherUser key={user._id} user={user}/>
          )
        })
       }
    </div>
  )
}

export default OtherUsers
