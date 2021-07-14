import socketClient from 'socket.io-client';

const Socket = () => {
    const io = socketClient ('http://localhost:5000',{
        reconnectionDelay: 1000,
        reconnection: true,
        reconnectionAttemps: 10,
        transports: ['websocket'],
        agent: false,
        upgrade: false,
       
               rejectUnauthorized: false
    });

    io.emit("message", "hi rahul here")
    io.on("respond", (data)=>{
        console.log(data)
    })
    return (
        <div>
            socket
        </div>
    )
}

export default Socket;