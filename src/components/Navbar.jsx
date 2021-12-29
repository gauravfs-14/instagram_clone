import React from 'react'
import styled from 'styled-components'
import logo from "../img/insta.png"
import profile from "../img/profile.jpg"

function Navbar() {
    return (
        <>
            <NavbarStyled>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="search">
                    <input type="search" name="" id="" placeholder="Search" />
                </div>
                <div className="menu">
                    <i className="fa fa-home"></i>
                    <i class="far fa-comment"></i>
                    <i class="far fa-plus-square"></i>
                    <i class="far fa-compass"></i>
                    <i class="far fa-heart"></i>
                    <img src={profile} alt="" />
                </div>
            </NavbarStyled>
        </>
    )
}

export default Navbar

const NavbarStyled = styled.nav`
    background-color: rgb(255, 255, 255);
    height: 50px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    padding: 0 15vw;
    align-items: center;
    border-bottom: 1px solid rgb(219, 219, 219);
    position: fixed;
    top: 0;
    left: 0;
    .logo{
        margin-right: 70px;
        img{
            width: auto;
            height: 40px;
            padding-top: 5px;
        }
    }
    .search{
        input{
            outline: none;
            border: 1px solid rgb(219, 219, 219);
            background-color: rgb(250, 250, 250);
            text-align: center;
            height: 30px;
            width: 200px;
        }
    }
        .menu{
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 25%;
            i{
                font-size: 1.3rem;
            }
            img{
                height: 30px;
                width: 30px;
                border-radius: 50%;
            }
        }

`