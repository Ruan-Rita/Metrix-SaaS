import Header from "../Header";
import SideBar from "../SideBar/Index";

export default function MainTemplate ({children, title}) {

    return (
        <main className="flex">
            <SideBar />
            <div className="flex-grow flex flex-col">
                <Header title={title} />
                <section className="bg-slate-100 flex-grow">
                    {children}
                </section>
            </div>
        </main>
    )
}