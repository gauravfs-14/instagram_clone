import React from 'react'
import styled from 'styled-components'
import profile from "../img/profile.jpg"
import post from "../img/post.jpg"


function Postcard() {
    return (
        <>
            <PostCardStyled>
                <div className="header">
                    <div className="account">
                        <img src={profile} alt="" />
                        <p>user_name</p>
                    </div>
                    <i class="fas fa-ellipsis-h"></i>
                </div>
                <img src={post} alt="" />
                <div className="feedback">
                    <div className="icons">
                        <i class="far fa-heart"></i>
                        <i class="far fa-comment"></i>
                        <i class="fas fa-location-arrow"></i>
                    </div>
                    <div className="desc">
                        <p className="likes">111,111 likes</p>
                        <div className="imgDesc">
                            <p>user_name</p>
                            <span>Unlesah the beauty.</span>
                        </div>
                        <p className="time">2 HOURS AGO</p>
                    </div>
                </div>
            </PostCardStyled>
        </>
    )
}

export default Postcard

const PostCardStyled = styled.div`
    margin-left: 15vw;
    margin-right: 5vw;
    width: calc(100% - 20vw);
    margin-top: 30px;
    border: 1px solid rgb(219, 219, 219);
    margin-bottom: 20px;
    .header{
        padding: 0 20px;
        height: 60px;
        background-color: white;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .account{
            display: flex;
            align-items: center;
            img{
                height: 50px;
                width: 50px;
                border-radius: 50%;
                margin-right: 10px;
                border: 2px solid rgb(222, 57, 115);
                padding: 2px;
            }
        }
    }
    img{
    width: 100%;
height: auto;
    }
    .feedback{
        padding: 20px 20px;
        height: auto;
        background-color: white;
        width: 100%;
        .icons{
            display: flex;
            margin-bottom: 10px;
            i{
                font-size: 2rem;
                margin-right: 30px;
            }
        }
        .desc{
            .likes{
                font-weight: bold;
                font-size: 0.9rem;
                margin-bottom: 5px;
            }
            .imgDesc{
                display: flex;
                align-items: center;
                margin-bottom: 20px;
                p{
                    margin-right: 10px;
                    font-weight: bold;
                }
                span{
                    font-size: 0.9rem;
                }
            }
            .time{
                font-size: 0.8rem;
                color: rgb(168, 168, 168);
            }
        }
    }

`
