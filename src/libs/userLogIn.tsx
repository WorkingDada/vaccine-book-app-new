import Credentials from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";

export async function userLogIn(username:string,password:string) {
    try {
        const response = await fetch('http://localhost:5000/api/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Credentials),
        })
    }
}