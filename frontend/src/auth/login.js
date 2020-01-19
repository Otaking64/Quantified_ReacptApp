import React from "react";
import validateLogin from "./validateLogin";
import useFormValidation from "./useFormValidation";
import TopMenuBar from "../components/TopMenuBar";
import firebase from "../firebase";
import useAuth from "./useAuth";



const INITIAL_STATE ={
    name: "",
    email: "",
    password: ""
}

function Login(props) {
    const {handleSubmit, handleBlur, handleChange, values, errors, isSubmitting} = useFormValidation(
        INITIAL_STATE,
        validateLogin,
        authenticateUser
    );

    const[login, setLogin] = React.useState(true);
    const [firebaseError, setFirebaseError] = React.useState(null)
    
    async function authenticateUser() {
        const {name, email, password} = values

        try{
            login
                ? await firebase.login(email, password)
                : await firebase.register(name, email, password)
            props.history.push("/")
        } catch (err) {
           console.error("Authentication error", err)
            setFirebaseError(err.message)
        }


    }
    return (

        <div>
            <TopMenuBar block pageName="Login" hamburgerMenu={false} closeButtonOnly={false} closeWithPrompt={false} backButton={false} backRoutePage="/"/>
            <h2 className="mv3">{login ? "login" : "Create Account"}</h2>
            <form  onSubmit={handleSubmit} className="flex flex-column">
                {!login && (<input
                    onChange={handleChange}
                    value={values.name}
                    name="name"
                    type="text"
                    placeholder="Your name"
                    autoComplete="on"
                />)}
                <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="email"
                    value={values.email}
                    type="email"
                    className={errors.email && 'error-input'}
                    placeholder="Your email"
                    autoComplete="on"
                />
                {errors.email && <p className="error-text">{errors.email}</p>}
                <input
                    onChange={handleChange}
                    name="password"
                    onBlur={handleBlur}
                    value={values.password}
                    type="password"
                    className={errors.password && 'error-input'}
                    placeholder="Choose a secure password"

                />
                {errors.password && <p className="error-text">{errors.password}</p>}
                {firebaseError && <p className="error-text">{firebaseError}</p> }
                <div className="flex mt3">
                    <button type="submit" className="button pointer mr2" disabled={isSubmitting} style={{ background : isSubmitting ? "grey" : "orange"}}>
                        Submit
                    </button>
                    <button type="button" className="pointer button"
                            onClick={() => setLogin(prevLogin => !prevLogin)}>
                        {login ? "Register" : "Already have an account?"}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;