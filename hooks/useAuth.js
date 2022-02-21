import React, {createContext, useContext, useEffect, useMemo, useState} from "react";
import * as Google from "expo-google-app-auth";
import {
    GoogleAuthProvider,
    signInWithCredential,
    onAuthStateChanged,
    signOut
} from "firebase/auth"
import {auth} from "../firebase";


const AuthContext = createContext({})

const config = {
    androidClientId: "637577734809-aqj3cu5prbl6kgagr7efebvsv0jbkr7u.apps.googleusercontent.com",
    scopes: ["profile", "email"],
    permissions: ["public_profile", "email", "gender", "location"]
}

export const AuthProvider = ({children}) => {
    const [error, setError] = useState(null)
    const [user, setUser] = useState(null)
    const [loadingInitial, setLoadingInitial] = useState(true)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user)=> {
            if (user) {
                setUser(user)
            } else {
                setUser(null)
            }
            setLoadingInitial(false)
        })

        return unsub()
    },[]);

    const logout = async () => {
        setLoading(true)

        signOut(auth)
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    }


    const signInWithGoogle = async () => {
        setLoading(true)
        await Google.logInAsync(config).then(async(logInResult) => {
            if (logInResult.type === 'success') {
                //login
                const { idToken, accessToken } = logInResult;
                const credential = GoogleAuthProvider.credential(idToken, accessToken);

                await signInWithCredential(auth, credential)
            }
            return Promise.reject()
        }).catch(error => setError(error))
            .finally(() => setLoading(false))
    }

    const memoedValue = useMemo(() => ({
            user,
            loading,
            error,
            signInWithGoogle,
            logout
    }), [user, loading, error])

    return (
        <AuthContext.Provider
            value={memoedValue}>
            {!loadingInitial && children}
        </AuthContext.Provider>
    )
}

export default function useAuth() {
    return useContext(AuthContext)
}
