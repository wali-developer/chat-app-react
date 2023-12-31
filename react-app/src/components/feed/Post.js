import React, { useState } from "react";
import { BsX } from "react-icons/bs";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";

const Post = ({ data }) => {
    const [liked, setLiked] = useState(false);
    return (
        <div className="w-full bg-[#222222] rounded-xl py-4 px-4 mb-5">
            {/* Post header */}
            <div className="w-full flex justify-between items-start">
                <div className="flex gap-x-3 items-center">
                    <div className="w-[42px] h-[42px] rounded-full overflow-hidden">
                        <img src={data?.user?.profile} alt="Profile" className="w-full h-full object-cover object-top" />
                    </div>
                    <div>
                        <p className="leading-tight text-sm text-white/80 font-medium">{data?.user?.name}</p>
                        <p className="text-xs text-white/80 ">{data?.posted_date}</p>
                    </div>
                </div>
                <button className="w-7 h-7 rounded-lg flex justify-center items-center hover:bg-[#3a3a3a]">
                    <BsX className="w-6 h-6 font-bold text-[#8f8f8f]" />
                </button>
            </div>

            {/* Post body */}
            <div className="mb-1">
                <p className="text-sm text-white/80 mt-5 mb-3">{data?.caption}</p>
                <div className="w-full h-[400px] rounded-xl overflow-hidden">
                    <img src={data?.img} alt="Profile" className="w-full h-full object-cover object-top rounded-xl" />
                </div>
                <div className="px-3 py-1.5 w-[85px] mt-3.5 rounded-3xl cursor-pointer bg-black flex gap-x-1.5 items-center" onClick={() => setLiked(!liked)}>
                    {liked ?
                        <AiOutlineLike className="w-5 h-5 text-white/80" />
                        :
                        <AiFillLike className="w-5 h-5 text-white/80" />
                    }
                    <span className="text-white/80 text-sm">100</span>
                </div>
            </div>
        </div>
    )
}

export default Post;
