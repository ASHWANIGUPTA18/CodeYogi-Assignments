import React, { Children, memo } from "react";

function Button(props) {
    const { className = "", children, ...rest } = props;

    return (
        <button
            {...rest}
            className={`px-4 py-2 bg-blue-500 text-white rounded ${className}`.trim()}
        >
            {Children.toArray(children)}
        </button>
    );
}

const goodButton = memo(Button);
export default goodButton;