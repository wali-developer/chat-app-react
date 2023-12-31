import { Server } from "socket.io";

const io = new Server(3000, {
    cors: {
        origin: 'http://localhost:8000'
    }
});

let users = [];

const getUser = (userId) => {
    const user = users?.find(u => u?.userId === userId)
    return user
}

const addUser = (userId, socketId) => {
    const checkUser = users.some((user) => user?.userId === userId)
    if (!checkUser) {
        users.push({ userId, socketId })
    }
}

const removeUser = (socket) => {
    users = users?.filter(user => user?.socketId !== socket)
}

io.on("connection", (socket) => {

    socket.on('addUser', (userId) => {

        addUser(userId, socket?.id)
        io.emit('users', users)
    })

    socket.on('disconnect', () => {
        removeUser(socket?.id)
    })
});