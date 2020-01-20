import React from "react";
import TopMenuBar from "../components/TopMenuBar";
import firebase from "../firebase/";
import Firebase from "firebase";

function ForgotPassword(props){
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

    Firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log("User is signed in");
            props.history.push("/")
        } else {
            console.log("User is not signed in");

        }
    });

    return(
        <div>
            <TopMenuBar block pageName="Forgot password" hamburgerMenu={false} closeButtonOnly={false} closeWithPrompt={false} backButton={true} backRoutePage="/login"/>

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