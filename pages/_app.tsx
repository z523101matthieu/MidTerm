import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

import {ThemeProvider} from "next-themes";

function MyApp({Component, pageProps}) {
    return (
        // @ts-ignore
        <ThemeProvider attribute="class">
            <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48 ">
                {/* // do this div style later (after putting the content) */}
                <div
                    className="h-full col-span-12 p-4 text-base text-center bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-dark ">
                    {/* //!sidebar */}
                    <Sidebar/>
                </div>
                <div
                    className="flex flex-col col-span-12 overflow-hidden shadow-custom-dark rounded-2xl lg:col-span-9 bg-dark-500">
                    {/* //!navbar */}
                    <Navbar/>
                    {/* //!about */}
                    <Component {...pageProps} />
                </div>
            </div>
        </ThemeProvider>
    );
}

export default MyApp;
