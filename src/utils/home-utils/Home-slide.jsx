import React, { useEffect, useState } from "react";
import Slide from "@mui/material/Slide";
import image from "../../assets/img/unsplash_.png";
import Carousel from "react-multi-carousel";
import { apiStore } from "../../service/api";
import { categoryStore } from "../../store/Category.store";
import { useLocation } from "react-router-dom";

const slides = [
    image, image, image, image, image
];

function Category() {

    const {categories, setCategories} = categoryStore()
    const { api } = apiStore()
    const url = useLocation()

    useEffect(() => {
        api.get("/categories/get-all").then(res => {
            const result = res.data
            setCategories(result.categories)
        })
    }, [url.pathname])

    return (
        <div className="flex gap-x-6 w-full justify-center">
            {categories.map((category, index) => {
                const { id, name, img } = category
                return (
                    <div className="w-auto h-max relative flex justify-center items-center" key={index}>
                        <div
                            className="relative z-[1] flex justify-center items-center bg-blur-[1px]"
                            style={{
                                backgroundImage: `url(${img})`,
                                width: "250px",
                                height: "300px",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div className="w-full h-full bg-[rgba(1,1,1,0.63)] flex flex-col items-center justify-center spaxe-y-4">
                                <img src="" alt="" />
                                <h1 className="text-white">{name}</h1>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Category;
