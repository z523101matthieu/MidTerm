import {
    NextPage,
} from "next";
import ServiceCard from "../components/ServiceCard";
import {services} from "../data";

const About: NextPage = () => {
    // console.log(services);

    return (
        <div className="flex flex-col flex-grow px-6 pt-1 ">
            <h6 className="my-3 text-base font-medium">
                Hey, I'm Matthieu Daumas, I'm a first year Master Degree of Computer Science student at Epitech.<br/>
                I'm passionated with all kind of development, AI and Cyber Security.<br/>
                Enjoy my portfolio!
            </h6>
            <div
                className="flex-grow p-4 mt-5 bg-dark-100 "
                style={{marginLeft: "-1.5rem", marginRight: "-1.5rem"}}
            >
                <h4 className="my-3 text-xl font-semibold tracking-wide">
                    What I am doing
                </h4>

                <div className="grid gap-6 my-3 md:grid-cols-2">
                    {/* children's initial and animate property should be same as the parent during a stagger effect  */}
                    {services.map((service) => (
                        <div
                            className="col-span-2 p-2 rounded-lg bg-dark-200 md:col-span-1 "
                            key={service.title}
                        >
                            <ServiceCard service={service}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
