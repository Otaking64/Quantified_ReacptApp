import firebaseConfig from "./config";
import app from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'



class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth()
        this.db = app.firestore();
    }

    //register function that also stores name
    async register(name, email, password){
        const newUser = await this.auth.createUserWithEmailAndPassword(
            email,
            password
        )
        //add user info to user profile
        return await newUser.user.updateProfile({
            displayName: name
        });
    }

    //login function that signs in with email and password
    async login(email, password){
        return this.auth.signInWithEmailAndPassword(email, password)
    }

    async resetPassword(email){
        await this.auth.sendPasswordResetEmail(email)
    }

}

const firebase = new Firebase();

//firebase object that gets returned (holds both auth functions)
export default firebase;