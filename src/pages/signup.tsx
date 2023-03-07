import React, {useEffect, useState} from "react";
import axios from "axios";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";


export default function SignUpPage () {
    const [username, setUsername] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const navigate = useNavigate()


    return (
        <div style={{padding: "5rem 0"}}>
            <form onSubmit={e => {
                e.preventDefault();
                axios
                    .get("/api/csrf")
                    .then(() => axios.post("/api/users", {
                        username,
                        password
                    }, {
                        headers: { "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN") }
                    })).then(() => {
                    navigate("/sign-in");
                }).catch(err => {
  //                  alert(err.response.data.error);
                });
            }}>
                <div>
                    <label>
                        Username
                        <input
                            type="text"
                            value={username}
                            onChange={e => setUsername(e.currentTarget.value)}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Password
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.currentTarget.value)}
                        />
                    </label>
                </div>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}