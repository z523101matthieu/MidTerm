import Bar from "../components/Bar";
import {languages, tools} from "../data";

const Resume = () => {
    return (
        <div className="px-6 py-2">
            {/* //! Education & Experience */}
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold">Education</h5>
                    <div className="">
                        <h5 className="my-2 text-xl font-bold">
                            Computer Science
                        </h5>
                        <p className="font-semibold">Ongoing (2020-2025)</p>
                        <p className="my-3">
                            I am currently learning Computer Science at Epitech
                        </p>
                    </div>
                </div>
                <div>
                    <h5 className="my-3 text-2xl font-bold">Experience</h5>
                    <div className="">
                        <h5 className="my-2 text-xl font-bold">Software Developer</h5>
                        <p className="font-semibold">IOTA Foundation (6 months internship)</p>
                        <p className="font-semibold">Thales Belgium (6 months internship)</p>
                    </div>
                </div>
            </div>

            {/*Languages & Tools */}
            <div className="grid gap-9 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
                    <div className="my-2">
                        {languages.map((language, i) => (
                            <Bar value={language} key={i}/>
                        ))}
                    </div>
                </div>

                <div>
                    <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
                    <div className="my-2">
                        {tools.map((tool, i) => (
                            <Bar value={tool} key={i}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
