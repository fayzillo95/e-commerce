import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Person } from '@mui/icons-material';
import { accessTokenStore, isAuthStore, refreshTokenStore } from '../store/IsAuth-store';
import { useNavigate } from 'react-router-dom';

export default function MenuProfile() {

    const { setAccessToken } = accessTokenStore()
    const { setRefreshToken } = refreshTokenStore()
    const navigate = useNavigate()
    const {setIsAuth} = isAuthStore()
    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <React.Fragment>
                    <Button variant="contained" {...bindTrigger(popupState)}>
                        <Person></Person>
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={popupState.close}>Profile</MenuItem>
                        <MenuItem onClick={popupState.close}>My account</MenuItem>
                        <MenuItem onClick={(e) => {
                            setAccessToken(null)
                            setRefreshToken(null)
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
