import React, { useState } from 'react';
import axios from "axios";
import { loginUser } from '../../../_actions/user_action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function LoginPage(){
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const onEmailHandler = (e) => {
        setEmail(e.target.value)
    }

    const onPasswordHandler = (e) => {
        setPassword(e.target.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefalut();
        let body = {
            email: Email,
            password: Password
        }
        
        dispatch(loginUser(body)).then((res) => {
            if(res.payload.loginSuccess){
                navigate('/');
            }else{
                alert(res.payload.message);
            }
        })

        
    }
    
    return(
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100vh'
        }}>
            <form style={{
                display: 'flex',
                flexDirection: 'column'
            }}
            onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <br />
                <button>
                    Login
                </button>
            </form>
        </div>
    )
}

export default LoginPage