import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState('');

    const handleLogin = (e) => {
        e.preventDefault()
        const id = Math.floor(Math.random() * 2000);
        const payload = {
            id: id,
            name: user
        }

        if (!user) {
            alert('Enter your name to continue!')
            return
        }

        localStorage.setItem('user', JSON.stringify(payload))
        navigate('/feed')
    }
    return (
        <div className="w-full h-screen bg-black flex justify-center items-center">
            <div className="w-[425px] px-5">
                <h1 className="text-white/80 text-[15px] font-medium text-left">Enter your name to Login</h1>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Your Name..."
                        className="w-full h-[45px] mt-2 px-5 text-[15px] text-white/70 outline-none bg-[#222222] rounded-xl"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />
                    <div className="flex justify-center mt-5">
                        <button
                            className="w-[100px] h-[45px] rounded-3xl text-white/70 bg-[#222222] hover:bg-[#181818]"
                            type="submit"
                        >Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Login;
