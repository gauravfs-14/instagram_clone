import React from 'react'
import styled from 'styled-components'
import profile from "../img/profile.jpg"


function Profile() {
    return (
        <>
            <ProfileStyled>
                <div className="profilecard">
                    <img src={profile} alt="" />
                    <div className="name">
                        <p>user_name</p>
                        <span>This is the bio of...</span>
                    </div>
                </div>
                <div className="suggestion">
                    <div className="heading">
                        Suggestions For You
                    </div>
                    <div className="suggestedProfile">
                        <img src={profile} alt="" />
                        <div className="name">
                            <p>user_name</p>
                            <span>New to instagram</span>
                        </div>
                    </div>
                    <div className="suggestedProfile">
                        <img src={profile} alt="" />
                        <div className="name">
                            <p>user_name</p>
                            <span>New to instagram</span>
                        </div>
                    </div>
                    <div className="suggestedProfile">
                        <img src={profile} alt="" />
                        <div className="name">
                            <p>user_name</p>
                            <span>New to instagram</span>
                        </div>
                    </div>
                    <div className="suggestedProfile">
                        <img src={profile} alt="" />
                        <div className="name">
                            <p>user_name</p>
                            <span>New to instagram</span>
                        </div>
                    </div>
                    <div className="suggestedProfile">
                        <img src={profile} alt="" />
                        <div className="name">
                            <p>user_name</p>
                            <span>New to instagram</span>
                        </div>
                    </div>
                </div>
            </ProfileStyled>
        </>
    )
}

export default Profile

const ProfileStyled = styled.div`
position: fixed;
.profilecard{
    padding-right: 15vw;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 90px;
    height: 120px;
    width: 100%;
    img{
        height: 70px;
        width: 70px;
        border-radius: 50%;
        margin-right: 20px;
    }
    .name{
        p{
            font-weight: bold;
            letter-spacing: 1px;
            font-size: 1.05rem;
        }
        span{
            font-weight: lighter;
            font-size: .9rem;
        }
    }
}
.suggestion{
    .heading{
        color: rgb(152, 152, 152);
        margin-bottom: 20px;
    }
    .suggestedProfile{
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        img{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-right: 10px;
        }
        p{
            font-size: 1rem;
            font-weight: bold;
        }
        span{
            font-size: .7rem;
        }
    }
}
`
