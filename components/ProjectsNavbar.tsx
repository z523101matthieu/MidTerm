import {FunctionComponent} from "react";
import {Category} from "../types";

export const NavItem: FunctionComponent<{
    value: Category | "all";
    handlerFilterCategory: Function;
    active: string;
}> = ({value, handlerFilterCategory, active}) => {
    let className = "capitalize cursor-pointer hover:text-blue-200";
    if (active === value) className += " text-blue-400";

    return (
        <li className={className} onClick={() => handlerFilterCategory(value)}>
            {value}
        </li>
    );
};

const ProjectsNavbar: FunctionComponent<{
    handlerFilterCategory: Function;
    active: string;
}> = (props) => {
    return (
        <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
            <NavItem value="all" {...props} />
            <NavItem value="C/C++" {...props} />
            <NavItem value="Java" {...props} />
            <NavItem value="Python" {...props} />
            <NavItem value="Rust" {...props} />
        </div>
    );
};

export default ProjectsNavbar;
