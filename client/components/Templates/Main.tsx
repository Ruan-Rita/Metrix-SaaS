import { Main } from "next/document";
import Header from "../Header";
import SideBar from "../SideBar/Index";

export default function MainTemplate ({children}) {

    return (
        <main className="flex">
            <SideBar />
            <div className="flex-grow">
                <Header />
                {children}
            </div>
        </main>
    )
}