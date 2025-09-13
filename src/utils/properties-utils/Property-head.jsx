import { FormControl, InputLabel, MenuItem, Select, TextareaAutosize } from '@mui/material'
import Input from '@mui/material/Input'
import TextField from '@mui/material/TextField'
import { useEffect, useState } from 'react'
import { PropertyStore, SaleTypes } from '../../store/Property-store'

function PropertyHead() {
    const [typeSale, setTypeSale] = useState(SaleTypes[0])
    const { propertyData, setPropertyData, resetPropertyData } = PropertyStore()
    const p = {
        "title": "",
        "description": "",
        "price": "1500000000",
        "discount": "22",
        "locationUrl": "https://www.google.com/maps?q=40.7487812,71.7058631",
        "address": "Andijon, Ulugʻnor District, Andijan Region, Uzbekistan",
        "status": "SALE",
        "isSale": true,
        "categoryId": "",
        "ownerId": ""
    }

    useEffect(() => {
        setPropertyData("status",typeSale)
    },[typeSale])

    return (
        <div className='container mx-auto flex flex-col gap-y-5 py-5 px-1.5 rounded-[5px] shadow-2xl mt-6'>
            <div className='grid grid-cols-2 w-full gap-x-10'>
                <TextField label="title" fullWidth value={propertyData.title} onChange={(e) => setPropertyData("title",e.target.value)}></TextField>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select
                        aria-placeholder='Enter Value'
                        label="type"
                        autoWidth={true}
                        value={typeSale}
                        onChange={e => setTypeSale(e.target.value)}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select">
                        {
                            SaleTypes.map((el, index) => (
                                <MenuItem value={el} key={"type-sale" + index}>{el}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>

            </div>
            <div>
                <TextareaAutosize
                    minRows={3}
                    aria-label='Description'
                    placeholder="Description..."
                    value={propertyData.description}
                    onChange={(e) => setPropertyData("description",e.target.value)}
                    style={{
                        width: '100%',
                        fontSize: '16px',
                        padding: '16.5px 14px',
                        borderRadius: '4px',
                        border: '1px solid #c4c4c4',
                        fontFamily: 'Roboto, sans-serif',
                        lineHeight: '1.4375em',
                        maxHeight: "70px"
                    }}
                />

            </div>
        </div>
    )
}

export default PropertyHead