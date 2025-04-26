import React from 'react'
import './LeftSidebar.css'
import { useDispatch, useSelector } from 'react-redux'
import { SetselectedUsers } from '../../redux/userSlice'
const OtherUser = ({ user }) => {
    const dispatch = useDispatch();
    const {selectedUsers} = useSelector(store => store.user?.selectedUsers) ?? [];

    const selectedUserHandler = (user) => {
        console.log(user);
        dispatch(SetselectedUsers(user));
    };
    return (
        <div onClick={() => selectedUserHandler(user)} className="friends" >
            <div>
                <img src={user?.profilePhoto} alt="" />
            </div>
            <div>
                <p>{user?.name}</p>
            </div>

        </div>
    )
}
export default OtherUser