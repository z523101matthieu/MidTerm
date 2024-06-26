import {FunctionComponent} from "react";

import {Skill} from "../types";

const Bar: FunctionComponent<{ value: Skill }> = (
    {
        value: {Icon, level, name},
    }) => {
    const bar_width = `${level}%`;
    return (
        <div className="my-2 text-white rounded-2xl bg-dark-300 bg-black-500">
            <div
                className="flex items-center px-4 py-1 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-200"
                style={{
                    width: bar_width,
                }}
            >
                <Icon className="mr-3"/> {name}
            </div>
        </div>
    );
};
export default Bar;
