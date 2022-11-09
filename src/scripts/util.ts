import React from "react";

export function constructClass (arr: any[]) {
    // remove all empty strings or non-strings
    // then return the result as a string
    // with classes separated by space
    arr = arr.filter(f => f && typeof f == "string");
    return arr.join(" ");
}

export function isInView (elem: React.MutableRefObject<any>) {
    // returns true if the element is visible on screen 
    // in terms of y position
    const screenY = elem.current?.getBoundingClientRect().y ?? 0;
    return screenY > 0 && screenY < window.innerHeight;
}