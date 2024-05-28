import React, { useState } from 'react';
import './Auth.css';
import { signup, login } from '../../actions/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import user from '../../components/assets/download.png';
import image from '../../components/assets/image.png';
import main from '../../components/assets/1144760.png';

const Auth = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSwitch = () => {
        setIsSignup(!isSignup);
        setName('');
        setEmail('');
        setPassword('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email && !password) {
            alert("Dear User, Please enter your email ID and password to continue!");
        }
        if (isSignup) {
            if (!name) {
                alert("Dear User, Please enter your name to continue!");
            }
            dispatch(signup({ name, email, password }, navigate));
        } else {
            dispatch(login({ email, password }, navigate));
        }
    };

    return (
        <section className="auth-section">
            <div className="auth-container-2">
                <div className="auth-header">
                    
                </div>
                <form onSubmit={handleSubmit}>
                <h1 className="auth-title">{isSignup ? 'SIGN UP' : 'SIGN IN'}</h1>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src={main} alt="admin" className="main-logo" style={{alignItems:"center"}} />
                   
                    {isSignup && (
                        <label htmlFor="name" className="input-label" >
                            <img src={user} alt="user" className="icon" style={{alignItems:"center"}}/>
                            <input
                                type="text"
                                id="name"
                                placeholder="username"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="input-field"
                            />
                        </label>
                    )}
                    <label htmlFor="email" className="input-label">
                    <img src={user} alt="user" className="icon" style={{alignItems:"center"}}/>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input-field"
                        />
                    </label>
                    <br />
                    <label htmlFor="password"  className="input-label">
                        <div className="password-container">
                       
                            <input
                                type="password"
                                id="password"
                                placeholder="password"
                                name="password"
                                className="input-field"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {!isSignup && <h4 className="forgot-password">Remember Me</h4>}
                        {!isSignup && <h4 className="forgot-password">Forgot Password?</h4>}
                        {isSignup && (
                            <p className="password-hint">
                                Passwords must contain at least eight characters, including a capital letter, small letters, a number, and a special character.
                            </p>
                        )}
                    </label>

                    {isSignup && (
                        <label htmlFor="check" className="checkbox-container">
                            <input type="checkbox" id="check" className="checkbox" />
                            <p className="checkbox-text">
                                Opt-in to receive occasional product updates, user research invitations, and company announcements.
                            </p>
                        </label>
                    )}

                    <button type="submit" className="auth-btn">
                        {isSignup ? 'Sign up' : 'Log In'}
                    </button>

                    {isSignup && (
                        <p className="terms-text">
                            By clicking "Sign Up", you agree to our{' '}
                            <span className="terms-link">terms of service</span>,{' '}
                            <span className="terms-link">privacy policy</span>, and{' '}
                            <span className="terms-link">cookie policy</span>.
                        </p>
                    )}
                </form>

                <p className="switch-text">
                    {isSignup ? 'Already have an account?' : "Don't have an account?"}
                    <button type="button" className="handle-switch-btn" onClick={handleSwitch}>
                        {isSignup ? 'Log In' : 'Sign up'}
                    </button>
                </p>
            </div>
        </section>
    );
};

export default Auth;

