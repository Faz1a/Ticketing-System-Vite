import React, {useState, useEffect}  from "react"
import httpClient from "../httpClient"



export function Home(){
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            try{
                const resp = await httpClient.get("//localhost:5000/@me");
                setUser(resp.data);
            }catch (error){
                console.log("Not Authenticated");
            }
        }) ();
    }, []);

    const logoutUser = async () => {
        const resp = await httpClient.post("//localhost:5000/logout");
        window.location.href = "/"
    }

    return (
        <div>
            {user != null ? (
                <div>
                <h1>HOME</h1>
                <h2>{user.id}</h2>
                <h2>{user.email}</h2>
                <button onClick={logoutUser}>Logout</button>
                </div>
            ) : (
                <h1>You are not logged in</h1>
            )}
        </div>
    )
}