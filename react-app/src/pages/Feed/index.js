import { BsFillChatLeftTextFill } from "react-icons/bs";
import Notification from "../../components/feed/Notification";
import Post from "../../components/feed/Post";
import { useEffect, useState } from "react";
import { POSTS } from "../../utils/postData";
const { io } = require("socket.io-client");

const Feed = () => {
    const [socket, setSocket] = useState(null);
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : ''

    useEffect(() => {
        const socket = io('http://localhost:3000');
        setSocket(socket)
    }, [])

    useEffect(() => {
        socket?.emit('addUser', user?.id)
        socket?.on('users', (users) => {
            console.log('Users', users);
        })
    }, [socket, user])

    return (
        <section className="max-w-full w-[425px] mx-auto bg-black px-5 py-5">
            <div className="w-full bg-[#222222] rounded-xl h-[55px] flex justify-between items-center px-3">
                <div className="flex gap-x-2 items-center">
                    <div className="w-[35px] h-[35px] rounded-full overflow-hidden cursor-pointer">
                        <img src="/images/profile.jpg" alt="Profile" className="w-full h-full object-cover object-top flex-1" />
                    </div>
                    <p className="leading-tight text-sm text-white/80 font-medium">{user?.name}</p>
                </div>
                <div className="flex gap-x-3 items-center">
                    <Notification />
                    <ChatButton />
                </div>
            </div>
            <div className="mt-7">
                {POSTS.map((post, index) => (
                    <Post key={index + ""} data={post} />
                ))}
            </div>
        </section>
    )
};

const ChatButton = () => {
    return (
        <button className="w-[35px] h-[35px] bg-[#3a3a3a] rounded-lg flex justify-center items-center relative hover:bg-[#494949]">
            <BsFillChatLeftTextFill className="w-4 h-4 text-[#8f8f8f]" />
            <span className="w-2.5 h-2.5 bg-[#00D5FA] rounded-full absolute -top-0.5 -right-0.5"></span>
        </button>
    )
}
export default Feed;
