import React, { useState } from 'react'
import FieldBox from './Field';
import { userDataStore } from '../../store/User-store';
import { Button } from '@mui/material';

function RegisterComponent() {

    const allowedFields = ["firstName", "lastName", "email", "password", "repeatPassword", "phone",];
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
        <div className='w-[600px] h-[600px] flex flex-col justify-center items-center'>
            <h1 className='text-4xl'>Sign Up</h1>
            {
                allowedFields.map((el, index) => (
                    <FieldBox field={el} value={userData[el]} setValue={setValue} key={index} validation={handleKeyDown} />
                ))
            }
            <Button onClick={() => handLeSubmit()} className='!bg-green-400'> Submit </Button>
        </div>
    )
}

export default RegisterComponent