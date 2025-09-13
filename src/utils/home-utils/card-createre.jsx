import { Box, Button, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import BedIcon from '@mui/icons-material/Bed';
import GarageIcon from '@mui/icons-material/Garage';
import BathroomIcon from '@mui/icons-material/Bathroom';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import { Edit, ViewAgenda, ViewArrayTwoTone, ViewCarousel, ViewComfy, ViewHeadline } from '@mui/icons-material';

function CustomCardComponenta({ data }) {
    const { id, owner, name, address, img, garage, beds, baths, squareFoot, price, discount, isSale, status } = data

    return (
        <Card sx={{ position : "relative"}} className='border-2 !rounded-2xl'>
            <CardMedia image={img} sx={{ height: 300, borderRadius: 1 }} className='!shadow-2xl' />
            <CardContent sx={{ height: 250, padding: 2 }} gap={2}>
                <Typography sx={{ fontSize: 24, textTransform: "capitalize" }} className='!font-extrabold'>{name}</Typography>
                <Typography sx={{ fontSize: 20 }} className='!text-gray-600'>{owner.fullName}</Typography>
                <Typography sx={{ fontSize: 12 }} className='!text-gray-600'>{address}</Typography>
                <Box display="flex" gap="5px" mt={2} justifyContent="space-between">
                    <Typography sx={{ fontSize: 12 }} display="flex" flexDirection="column" justifyItems="flex-start" alignItems="flex-start" className='!text-gray-500 items-start' >
                        <BathroomIcon />
                        <span>Baths {baths % 10 || 0}</span>
                    </Typography>
                    <Typography sx={{ fontSize: 12 }} display="flex" flexDirection="column" justifyItems="flex-start" alignItems="flex-start" className='!text-gray-500' >
                        <BedIcon />
                        <span>Beds {beds % 10 || 0}</span>
                    </Typography>
                    <Typography sx={{ fontSize: 12 }} display="flex" flexDirection="column" justifyItems="flex-start" alignItems="flex-start" className='!text-gray-500' >
                        <GarageIcon color='info' />
                        <span>{garage % 10 || 0} Garage</span>
                    </Typography>
                    <Typography sx={{ fontSize: 12 }} display="flex" flexDirection="column" justifyItems="flex-start" alignItems="flex-start" className='!text-gray-500'>
                        <SquareFootIcon color='error' />
                        <span>{squareFoot || 0} Sq Ft</span>
                    </Typography>
                </Box>
                <Box mt={1} mb={2}>
                    <div className="flex flex-col pb-2">
                        <div className="flex space-x-3">
                            <span className='line-through text-red-500'>{price}/mo</span>
                            <span className='text-green-700'>{discount} % off</span>
                        </div>
                        <span className="font-extrabold text-blue-700">{price - (price * (discount / 100))}/mo</span>
                    </div>
                    <Edit></Edit>
                    <ViewHeadline></ViewHeadline>
                </Box>
            </CardContent>
            <CardMedia image={owner.avatar} sx={{ height: 50, width: 50, borderRadius: "50%", position: "absolute", top: 275, right: 25, }} className='border-4' />
            <div className="flex fixed justify-between w-full z-[10000] top-[25px] px-6">
                <Button variant='contained'>{isSale ? "ACTIVE" : "NOT ACTIVE"}</Button>
                <Button variant='contained'>FOR {status}</Button>
            </div>
        </Card>
    )
}

export default CustomCardComponenta


/*
                    <div className='w-[450px] h-max my-10 mx-8 relative rotate-180' key={id}>
                        <Card sx={{ marginLeft: "50px" }}>
                            <CardMedia image={img} sx={{ height: 300, borderRadius: 1 }} className='!shadow-2xl' />
                            <CardContent sx={{ height: 250, padding: 2 }}>
                                <Typography sx={{ fontSize: 24, textTransform: "capitalize" }} className='!font-extrabold'>{name}</Typography>
                                <Typography sx={{ fontSize: 12 }} className='!text-gray-600'>{owner}</Typography>
                                <Typography sx={{ fontSize: 12 }} className='!text-gray-600'>{address}</Typography>
                                <Box display="flex" gap="10px" justifyContent="space-between">
                                    <Typography sx={{ fontSize: 12 }} display="flex" flexDirection="column" className='!text-gray-500 items-start' alignItems="center">
                                        <BathroomIcon />
                                        <span>Baths {baths || 0}</span>
                                    </Typography>
                                    <Typography sx={{ fontSize: 12 }} display="flex" flexDirection="column" className='!text-gray-500' alignItems="center">
                                        <BedIcon />
                                        <span>Beds {beds || 0}</span>
                                    </Typography>
                                    <Typography sx={{ fontSize: 12 }} display="flex" flexDirection="column" className='!text-gray-500' alignItems="center">
                                        <GarageIcon />
                                        <span>{garage || 0} Garage</span>
                                    </Typography>
                                    <Typography sx={{ fontSize: 12 }} display="flex" flexDirection="column" className='!text-gray-500' alignItems="center">
                                        <SquareFootIcon />
                                        <span>{squareFoot || 0} Sq Ft</span>
                                    </Typography>
                                </Box>
                                <Box mt={1} mb={2}>
                                    <div className="flex flex-col pb-2">
                                        <span className='line-through text-red-500'>2200/mo</span> {/* Bu ham static, agar data bor bo'lsa dynamic qilish mumkin }
                                    <span className="font-extrabold text-blue-700">7200/mo</span>
                                    </div>
                                </Box>
                            </CardContent>
                        </Card>
                    </div>
*/