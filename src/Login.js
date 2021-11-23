import React from 'react'
import { useState } from 'react';
import './Login.css'
function Login() {
    return (
        <div className="Login">
            <form >
                <p id="inputtext">Email</p>
                <input type="text" >
                </input>
                <p id="inputtext">Password</p>
                <input></input>
                <h1></h1>

                <a href='/home'><input  type="button" value="Submit" ></input> </a>
            </form>
        </div>
    )
}

export default Login

