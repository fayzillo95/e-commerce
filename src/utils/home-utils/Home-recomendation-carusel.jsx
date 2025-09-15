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
import { apiStore } from '../../service/api';


function PropertyRender({ url = "http://localhost:15975/api/properties/get-all" }) {
    const [data, setData] = useState([
    ]);
    const { isLoadingModal, setIsLoadingModal } = isLoadingStore();
    const {api} = apiStore()
    const property = {
        "title": "Beautiful 3-bedroom apartment",
        "additionals": [
            {
                "id": "e753b4c6-8269-4f48-909d-55442152bc02",
                "propertyId": "49e4fb41-109e-4f93-ad84-7f8af260d21d",
                "label": "Modern House",
                "material": "Modern House",
                "rooms": 5,
                "beds": 5,
                "baths": 5,
                "garages": 5,
                "garageSize": 5,
                "year_build": 5,
                "homeArea": 5,
                "lotDimensions": "120x100",
                "lotArea": 1200,
                "buildTypeId": "53802dde-969e-439e-ae6c-c0605288abf6"
            }
        ],
        "owner": {
            "fullName": "Fayzillo Ummatov",
            "email": "example@gmail.com",
            "avatar": "https://www.w3schools.com/howto/img_avatar.png",
            "role": "USER"
        },
        "locationUrl": "https://maps.app.goo.gl/nhEkVzyhhrwTa5Lk8",
        "address": "Andijon,Andijon Viloyati, Oʻzbekiston",
        "category": {
            "id": 6,
            "name": "Villa",
            "img": "http://localhost:15975/api/image/1757523835553-857629266.png"
        },
        "description": "Spacious apartment with modern amenities",
        "price": 500000,
        "isSale": true,
        "status": "SALE",
        "PropertyMedia": [
            {
                "id": "b0bc1ed0-8166-4f30-8f99-b23ec958acc3",
                "features": [
                    "http://localhost:15975/api/image/1757787044412-178137231.png"
                ],
                "gallery": [
                    "http://localhost:15975/api/image/1757787044433-100550741.png"
                ],
                "attachments": [
                    "http://localhost:15975/api/image/1757787044434-687495185.png"
                ],
                "propertyId": "49e4fb41-109e-4f93-ad84-7f8af260d21d"
            }
        ],
        "features": null,
        "discount": 25.5,
        "id": "49e4fb41-109e-4f93-ad84-7f8af260d21d",
        "ownerId": "69eccdcd-f02b-495e-b730-88c4623ac6fe"
    }

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
        api.get("/properties/get-all")
            .then(res => {
                // console.log(res.data.data)
                setData(res.data.data);
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
                {data.slice(0, 12).map((property) => {

                    const { additionals, owner, PropertyMedia, ownerId } = property
                    const { baths, beds, buildTypeId, garages : garage, garageSize, homeArea, lotArea: squareFoot, rooms, year_build, label, lotDimensions } = additionals[0]
                    const { features, gallery, attachments } = PropertyMedia[0]
                    const { locationUrl, title : name, isSale, status, price, discount, address, description, id} = property
                    const { avatar, fullName, email, role } = owner
                    return <div className='w-[450px] h-max my-10 mx-8 relative rotate-180' key={id}>
                        <CustomCardComponenta data={{ id, owner, name, address, img : gallery[0], garage, beds, baths, squareFoot,price,discount,isSale,status }} />
                    </div>
                })}
            </Slider>
        </div>
    );
}

export default PropertyRender;
