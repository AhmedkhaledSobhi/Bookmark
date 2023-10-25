import React, {useState ,useEffect} from 'react';
import './Navbar.css'


export default function Navbar()
{

    const [navbarBackGround,setNavbarBackground]=useState("transparent");

    useEffect(()=>{

        const handleScroll =()=>{
            if(window.scrollY > 10){
                setNavbarBackground('steelblue')
            }
            else{
                setNavbarBackground("transparent")
            }
        }
        window.addEventListener("scroll",handleScroll)
        return()=>{
            window.addEventListener("scroll",handleScroll)
        }
    },[])

    return(
        <>
            <nav style={{ backgroundColor: navbarBackGround }}  className= 'navbar navbar-expand-lg flex-column fixed-top'>
                <div className="container justify-content-center">
                    <a className="navbar-brand"><i className="fa-regular fa-bookmark fs-1"></i></a>
                    <h1>Bookmark</h1>
                </div>
                <h2> <i className=" fa-solid fa-bookmark fs-2"></i> Hello Bookmark your favorite sites <i className=" fa-solid fa-bookmark fs-2"></i> </h2>
            </nav>
        </>
    )
}