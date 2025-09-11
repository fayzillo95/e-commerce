import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { isLoadingStore } from '../../store/isLoading-store';
import Slider from 'react-slick';
import BedIcon from '@mui/icons-material/Bed';
import GarageIcon from '@mui/icons-material/Garage';
import BathroomIcon from '@mui/icons-material/Bathroom';
import SquareFootIcon from '@mui/icons-material/SquareFoot';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomCardComponenta from './card-createre';


function PropertyRender({ url = "https://689e30493fed484cf8769099.mockapi.io/api/v11/properties" }) {
    const [data, setData] = useState([]);
    const { isLoadingModal, setIsLoadingModal } = isLoadingStore();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        canterMode: true,
        centerPadding: "25px",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    useEffect(() => {
        setIsLoadingModal(true);
        axios.get(url)
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                console.error("Xatolik yuz berdi:", err);
            })
            .finally(() => setIsLoadingModal(false));
    }, [url, setIsLoadingModal]);

    if (isLoadingModal) {
        return <div>Loading...</div>;  // Yoki spinner qo'yish mumkin
    }

    return (
        <div className='rotate-z-180'>
            <Slider {...settings} centerMode={true} centerPadding='50px'>
                {data.slice(0, 12).map(({ id, owner, name, address, img, garage, beds, baths, squareFoot }) => (
                    <div className='w-[450px] h-max my-10 mx-8 relative rotate-180' key={id}>
                        <CustomCardComponenta data={{ id, owner, name, address, img, garage, beds, baths, squareFoot }} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default PropertyRender;
