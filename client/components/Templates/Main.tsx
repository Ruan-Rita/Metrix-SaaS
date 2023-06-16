import Header from "../Header";
import SideBar from "../SideBar";

export default function MainTemplate({ children, title }) {

    return (
        <main className="flex">
            <SideBar />
            <div className="flex-grow flex flex-col">
                <Header title={title} />
                <section className="bg-slate-100 flex-grow pt-6 px-6">
                    {children}
                </section>
            </div>
        </main>
    )
}