import React from 'react'
import FieldBox from './Field'
import { userDataStore } from '../../store/User-store'
import { Button } from '@mui/material'

function LoginComponenta() {

    const fields = ["email", "password"]
    const { userData, setUserData } = userDataStore()

    const setValue = (field, value) => {
        const key = value
        return setUserData(field, value)
    }

    const handLeSubmit = () => {
        console.log(userData)
    }

    const handleKeyDown = (e, field) => {
        const key = e.key
        if ("0123456789qwertyuiopasdfghjklzxcvbnm@._".includes(key)) {
            if (field === "phone") {
                if (
                    !/[0-9]/.test(key)
                ) {
                    e.preventDefault();
                    alert("Faqat raqam kiritish mumkin!");
                }
            }
        }
    }
    return (
        <div className='w-[600px] h-[600px] flex flex-col items-center'>
            <h1 className='text-4xl'>Sign In</h1>
            {
                fields.map((el,index) => <><FieldBox field={el} setValue={setValue} value={userData[el]} validation={handleKeyDown} key={index}/></>)
            }
            <Button>Submit</Button>
        </div>
    )
}

export default LoginComponenta