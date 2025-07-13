import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import { LampContainer } from "./ui/lamp";

export default function Layout({ children }) {
    return (
        <div className="w-full max-w-lg mx-auto px-4 mb-10">
            <Navbar />
            <LampContainer />
            <Outlet />
        </div>
    )
}