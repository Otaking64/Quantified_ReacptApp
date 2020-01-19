import React from "react";
import { useState } from 'react';
import TopMenuBar from "../components/TopMenuBar";
import firebase from "../firebase/";

function ForgotPassword(){
    const [resetPasswordEmail, setResetPasswordEmail] = React.useState('')
    const [isPasswordReset, setIsPasswordReset] = React.useState(false)
    const [passwordResetError, setPasswordResetError] = React.useState(null)

    async function handleResetPassword(){
    try{
        await firebase.resetPassword(resetPasswordEmail)
        setIsPasswordReset(true)
    } catch (err) {
        console.log("Error sending email", err)
        setPasswordResetError(err.message)
        setIsPasswordReset(false)
    }
    }

    return(
        <div>
            <TopMenuBar block pageName="Login" hamburgerMenu={false} closeButtonOnly={false} closeWithPrompt={false} backButton={false} backRoutePage="/"/>

            <h2>Forgot your password?</h2>
            <p> We got you! Fill in your e-mail address and we send you an email to reset it.</p>
            <input
            type="email"
            className='input'
            placeholder="Your email"
            onChange={event => setResetPasswordEmail(event.target.value)}
            />
            <div>
                <button className="button" onClick={handleResetPassword}>
                    Reset Password
                </button>
            </div>
            {isPasswordReset && <p>Check your email to reset your password</p>}
            {passwordResetError && <p className="error-text">{passwordResetError}</p>}
        </div>
    )

}

export default(ForgotPassword)