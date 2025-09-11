import React, { useState } from "react";
import Slide from "@mui/material/Slide";
import image from "../../assets/img/unsplash_.png";
import Carousel from "react-multi-carousel";

const slides = [
    image, image, image, image, image
];

function Category() {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (
        <div className="flex gap-x-6 w-full border-2 justify-center">
            {slides.map((img, index) => {
                return (
                    <div className="w-auto h-max" key={index}>
                        <div
                            style={{
                                backgroundImage: `url(${img})`,
                                width: "250px",
                                height: "300px",
                                border: "2px solid black",
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}
                        />
                    </div>
                )
            })}
        </div>
    );
}

export default Category;
