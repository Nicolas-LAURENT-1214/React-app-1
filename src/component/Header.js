import React from "react";
import List from "./List.js";

export default function Header() {
    return (
        <header>
            <h1 id='headerContent'>Task finished = {List.getNbChecked()} / {List.getLength()}</h1>
        </header>
        );
}