import axios from "axios"
import { redirect } from "next/navigation"
// import { redirect } from "next/navigation"

export default async function (){
    try {
        await axios.post("/api/auth/signout")
        redirect("/")
    } catch (error: any) {
        console.error(error)

    }
}