import React from "react";
import firebase from "../firebase";

function useAuth(){
    const [authUser, setAuthUser] = React.useState(null)

    //hook for firebase auth
React.useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged(user => {
        if (user){
            setAuthUser(user)
        } else {
            setAuthUser(null)
        }
    })

    return () => unsubscribe()

}, [])

    return authUser;
}

export default useAuth;