import React from "react";
import { BsFillBellFill } from "react-icons/bs";
import Dropdown from "../Drodown";
import { Link } from 'react-router-dom'

const Notification = () => {
    return (
        <>
            <Dropdown
                button={
                    <NotificationButton />
                }
                childrens={
                    <div className="flex h-32 w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
                        <div className="mt-3 ml-4">
                            <div className="flex items-center gap-2">
                                <p className="text-sm font-bold text-navy-700 dark:text-white">
                                    Notifications
                                </p>
                            </div>
                        </div>
                        <div className="mt-3 h-px w-full bg-gray-200 dark:bg-white/20 " />
                        <div className="mt-3 ml-4 flex flex-col">
                            <Link
                                href="#"
                                className="text-sm text-gray-800 mb-1 dark:text-white hover:dark:text-white"
                            >
                                <span className="font-medium">Rashid khan</span> like your post
                            </Link>
                            <Link
                                href="#"
                                className="text-sm text-gray-800 mb-1 dark:text-white hover:dark:text-white"
                            >
                                <span className="font-medium">Rashid khan</span> like your post
                            </Link>
                        </div>
                    </div>
                }
                classNames={"py-2 top-8 -left-[180px] w-max"}
            />
        </>
    )
};

const NotificationButton = () => {
    return (
        <button className="w-[35px] h-[35px] bg-[#3a3a3a] rounded-lg flex justify-center items-center relative hover:bg-[#494949]">
            <BsFillBellFill className="w-4 h-4 text-[#8f8f8f]" />
            <span className="w-2.5 h-2.5 bg-[#00D5FA] rounded-full absolute -top-0.5 -right-0.5"></span>
        </button>
    )
}

export default Notification;
