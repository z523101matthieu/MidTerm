import {RiComputerLine} from "react-icons/ri";
import {FaServer} from "react-icons/fa";
import {AiOutlineApi} from "react-icons/ai";
import {IProject, Service, Skill} from "./types";

import {BsCircleFill} from "react-icons/bs";
import {SiCyberdefenders} from "react-icons/si";

export const services: Service[] = [
    {
        Icon: RiComputerLine,
        title: "Software Development",
        about:
            "I'm used to create production ready Software in C/C++, Java, Python or Rust",
    },
    {
        Icon: FaServer,
        title: "Backend Development",
        about:
            "handle database, server, api using <b>Axum </b> & other popular frameworks",
    },
    {
        Icon: AiOutlineApi,
        title: "API Development",
        about:
            "I can develop robust  REST API using any framework",
    },
    {
        Icon: SiCyberdefenders,
        title: "Cyber Security",
        about: "3 years of training on HackTheBox and participating to a lot of CTF events",
    }
];

export const languages: Skill[] = [
    {
        Icon: BsCircleFill,
        name: "Python",
        level: "90",
    },
    {
        Icon: BsCircleFill,
        name: "Java",
        level: "85",
    },
    {
        Icon: BsCircleFill,
        name: "Rust",
        level: "65",
    },
    {
        Icon: BsCircleFill,
        name: "C/C++",
        level: "99",
    },
    {
        Icon: BsCircleFill,
        name: "Java Script",
        level: "50",
    },
    {
        Icon: BsCircleFill,
        name: "Brainf*ck",
        level: "100",
    },
];

export const tools: Skill[] = [
    {
        Icon: BsCircleFill,
        name: "Figma",
        level: "65",
    },
    {
        Icon: BsCircleFill,
        name: "Adobe Premier",
        level: "45",
    },
    {
        Icon: BsCircleFill,
        name: "IDA Pro",
        level: "80",
    },
    {
        Icon: BsCircleFill,
        name: "GDB / Radar 2",
        level: "69",
    },
];

export const projects: IProject[] = [
    {
        name: "Audio Visualizer",
        description:
            "An app to show the sound waves of a music",
        image_path: "/MidTerm/images/audio visualizer.png",
        deployed_url: "https://github.com/jj136975/Audio-Visualizer",
        github_url: "https://github.com/jj136975/Audio-Visualizer",
        category: ["C/C++"],
        key_techs: ["C", "Audio", "Math"],
    },
    {
        name: "Corewar",
        description:
            "An app that emulate a VM where several programs fight each others",
        image_path: "/MidTerm/images/corewar.png",
        deployed_url: "https://github.com/EpitechIT2020/B-CPE-201-BRU-2-1-corewar-guillaume.janssens",
        github_url: "https://github.com/EpitechIT2020/B-CPE-201-BRU-2-1-corewar-guillaume.janssens",
        category: ["C/C++"],
        key_techs: ["C", "Graphical", "VM"],
    },
    {
        name: "Bomberman",
        description:
            "A 3D game where the objective is to explode other players",
        image_path: "/MidTerm/images/bomberman.png",
        deployed_url: "https://github.com/EpitechPromo2025/B-YEP-400-BRU-4-1-indiestudio-victor.vindevogel",
        github_url: "https://github.com/EpitechPromo2025/B-YEP-400-BRU-4-1-indiestudio-victor.vindevogel",
        category: ["C/C++"],
        key_techs: ["C", "Game", "3D"],
    },
    {
        name: "Ray Caster",
        description:
            "A program that render a fake 3D scene through 2D raycast",
        image_path: "/MidTerm/images/raycaster.png",
        deployed_url: "https://github.com/jj136975/3D-Chasing-Game",
        github_url: "https://github.com/jj136975/3D-Chasing-Game",
        category: ["Java"],
        key_techs: ["Java", "Game", "3D", "Math"],
    },
];
