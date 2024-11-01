import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom'; 
import logo from '../../public/bloc.png';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate('/home')   
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('https://notes-app-drab-nine.vercel.app/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ Email: email, Password: password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }

            console.log('Login successful:', data);
            handleClick()
        } catch (err) {
            setError(err.message);
            console.error(err);
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            {error && <p className="error">{error}</p>}
            <div className="contenedor__logo">
                <img id='logo' src={logo} alt=""/>
                <h1 id='name'>Notes app ui</h1>
            </div>
            <div className="flex-column">
                <label>Email</label>
            </div>
            <div className="inputForm">
                <input
                    type="text"
                    className="input"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            <div className="flex-column">
                <label>Password</label>
            </div>
            <div className="inputForm">
                <input
                    type="password"
                    className="input"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            <div className="flex-row">
                <div>
                    <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                    />
                    <label>Remember me</label>
                </div>
                <span className="span">Forgot password?</span>
            </div>
            <button className="button-submit">Sign In</button>
            <p className="p">
                Don't have an account?
                <a href="/">
                    <span className="span">Sign Up</span>
                </a>
            </p>
            <p className="p line">Or With</p>
            <div className="flex-row">
                <button className="btn google">Google</button>
                <button className="btn apple">Apple</button>
            </div>
        </form>
    );
};

export default Login;
