import { io } from "socket.io-client";
const token=localStorage.getItem("Token");

const Socket=io("http://localhost:8080/user-namespace",{
    auth:{
       token: token,
    }
})

export default Socket