import React from 'react'
import styled from 'styled-components'
import profile from "../img/profile.jpg"

function Stories() {
    return (
        <>
            <StoriesSytled>
                <div className="img">
                    <img src={profile} alt="" />
                    <p>user_name</p>
                </div>
                <div className="img">
                    <img src={profile} alt="" />
                    <p>user_name</p>
                </div>
                <div className="img">
                    <img src={profile} alt="" />
                    <p>user_name</p>
                </div>
                <div className="img">
                    <img src={profile} alt="" />
                    <p>user_name</p>
                </div>
                <div className="img">
                    <img src={profile} alt="" />
                    <p>user_name</p>
                </div>
                <div className="img">
                    <img src={profile} alt="" />
                    <p>user_name</p>
                </div>
                <div className="img">
                    <img src={profile} alt="" />
                    <p>user_name</p>
                </div>
                <div className="img">
                    <img src={profile} alt="" />
                    <p>user_name</p>
                </div>
            </StoriesSytled>
        </>
    )
}

export default Stories

const StoriesSytled = styled.div`
    margin-top: 90px;
    margin-left: 15vw;
    margin-right: 5vw;
    height: 120px;
    width: calc(100% - 20vw);
    background-color: #ffffff;
    display: flex;
    align-items: center;
    border: 1px solid rgb(219, 219, 219);
    overflow: auto;

    .img{
        margin-left: 20px;
img{
    height: 70px;
    width: 70px;
    border-radius: 50%;
    border: 2px solid rgb(222, 57, 115);
    padding: 2px;
}
p{
    font-size: .8rem;
}
    }
`