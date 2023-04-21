import Link from "next/link";
import React from "react";

const Navbar = () => {
    return(
        <>
            <div className="flex justify-around fixed z-10 p-8 w-full">
                <h1 className="text-6xl font-extrabold">
                    <Link href='/'>VR</Link>
                </h1>
                <button className="main-button hover:text-yellow-400 hover:border-yellow-400">Menu</button>
            </div>
        </>
    )
}

export default Navbar