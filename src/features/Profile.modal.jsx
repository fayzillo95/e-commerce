import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Person } from '@mui/icons-material';
import { accessTokenStore, isAuthStore, refreshTokenStore } from '../store/IsAuth-store';
import { useNavigate } from 'react-router-dom';
import { userDataStore } from '../store/User-store';

export default function MenuProfile() {

    const { setAccessToken } = accessTokenStore()
    const { setRefreshToken } = refreshTokenStore()
    const { resetUserData,userData } = userDataStore();
    const navigate = useNavigate()
    const {setIsAuth} = isAuthStore()
    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <React.Fragment>
                    <Button variant="text" {...bindTrigger(popupState)}>
                        {
                            userData.avatar ? (
                                <div className='flex space-x-2.5 items-end'>
                                    <img src={userData.avatar} alt="" className='block size-[30px] rounded-full' /> <p>{userData.fullName}</p>
                                </div>
                            ) : <Person></Person>
                        }
                        
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={popupState.close}>Profile</MenuItem>
                        <MenuItem onClick={popupState.close}>My account</MenuItem>
                        <MenuItem onClick={(e) => {
                            setAccessToken(null)
                            setRefreshToken(null)
                            resetUserData()
                            popupState.close()
                            navigate("/sign")
                            setIsAuth(false)
                        }}>Logout</MenuItem>
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    );
}
