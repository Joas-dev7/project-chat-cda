import { GoogleAuthProvider } from "firebase/auth";
import { auth, db } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { collection, doc, getDoc, setDoc, Timestamp } from "firebase/firestore";

const googleProvider : GoogleAuthProvider = new GoogleAuthProvider();

class AuthClass {

    authFire;
    dbFire;

    constructor() {
        this.authFire = auth;
        this.dbFire = db;
    }

    connexionGoogle = async () => {

        const result = await signInWithPopup(this.authFire, googleProvider);
        console.log("result", result)

        if(result!= null){//si user est connecté
            //preparation de la requete
            const docRefUser = doc(this.dbFire, "users", result.user.uid);
            //lancement de la requete
            const snapUser = await getDoc(docRefUser);

            //si l utilisateur existe pas
            if(!snapUser.exists()){
                await setDoc(docRefUser , {
                    name : result.user.displayName
                })
            }
        }

    }

}

export default AuthClass;