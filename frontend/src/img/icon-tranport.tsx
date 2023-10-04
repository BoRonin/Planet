import React from "react";
import logo from './logo_1.svg'

function IconTransport({...props}: React.SVGProps<SVGSVGElement>, SVGSVGElement: React.FunctionComponent<React.SVGAttributes<SVGElement>> ) {

    return (
        <>{SVGSVGElement}
        </>
    );
}

export default IconTransport;

// console.log(IconTransport(logo));
// function IconTransport(jsx: React.FunctionComponent<React.SVGAttributes<SVGElement>>) {
