import React from 'react'
import discord from "../../assets/img/discord.png"

function HomePreview({isDark=false}) {
    return (
        <section className={`w-full h-[400px] ${isDark ? "bg-violet-950" : "bg-gray-200"} mt-20 shadow-2xl`}>
            <div className="container mx-auto flex flex-col items-center space-y-[25px]">
                <h1>Why Choose Us</h1>
                <p>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
                <div className="flex justify-between w-full space-x-1">
                    <div className="flex flex-col items-center">
                        <img src={discord} alt="" />
                        <h3>Trusted By Thousands</h3>
                        <p>With over 1 million+ homes <br />
                            for sale available on the <br />
                            website, Trulia can match <br />
                            you with a house you will <br />
                            want to call home.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={discord} alt="" />
                        <h3>Trusted By Thousands</h3>
                        <p>With over 1 million+ homes <br />
                            for sale available on the <br />
                            website, Trulia can match <br />
                            you with a house you will <br />
                            want to call home.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={discord} alt="" />
                        <h3>Trusted By Thousands</h3>
                        <p>With over 1 million+ homes <br />
                            for sale available on the <br />
                            website, Trulia can match <br />
                            you with a house you will <br />
                            want to call home.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={discord} alt="" />
                        <h3>Trusted By Thousands</h3>
                        <p>With over 1 million+ homes <br />
                            for sale available on the <br />
                            website, Trulia can match <br />
                            you with a house you will <br />
                            want to call home.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePreview