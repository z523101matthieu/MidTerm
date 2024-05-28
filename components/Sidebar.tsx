import {AiFillFacebook, AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import {GoLocation} from "react-icons/go";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
    

    return (
        <>
            <Image
                src="/images/me.jpg"
                alt="avatar"
                className=" mx-auto border rounded-full "
                height="128"
                width="128"
                // quality="100"
            />
            <h3 className="my-4 text-3xl font-medium tracking-wider">
                <span className="text-yellow-400 ">Matthieu</span> Daumas
            </h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-lg dark:bg-dark-200 dark:bg-black-500">
                Software Developer
            </p>

            {/* Socials */}
            <div className="flex justify-around w-9/12 mx-auto my-5 text-yellow-400 md:w-full ">
                <Link href="https://www.facebook.com/profile.php?id=100005592077601">
                    <AiFillFacebook className="w-8 h-8 cursor-pointer"/>
                </Link>
                <Link href="https://www.linkedin.com/in/matthieu-daumas-bb4067211/">
                    <AiFillLinkedin className="w-8 h-8 cursor-pointer"/>
                </Link>
                <Link href="https://github.com/jj136975">
                    <AiFillGithub className="w-8 h-8 cursor-pointer"/>{" "}
                </Link>
            </div>

            {/* Contacts */}
            <div
                className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
                style={{marginLeft: "-1rem", marginRight: "-1rem"}}
            >
                <div className="flex items-center justify-center">
                    <GoLocation className="mr-2"/> <span>Waterloo, Belgium</span>
                </div>
                <p className="my-2 "> mattdaumas@hotmail.com </p>
                <p className="my-2"> +32486624338 </p>
            </div>

            {/* Email Button */}
            <button
                className="w-8/12 px-5 py-2 text-white bg-black rounded-lg cursor-pointer bg-gradient-to-r from-yellow-400 to-yellow-600 hover:scale-105 focus:outline-none"
                onClick={() => window.open("mailto:mattdaumas@hotmail.com")}
            >
                Email me
            </button>
        </>
    );
};

export default Sidebar;
