import {io} from "socket.io-client"
const Socket=io('http://localhost:3000/api',{
    auth: {
        token: "Token",
    }
})

export default Socket