//  Composant navigation et sera rappeller partout

import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <div className="navigation">
                <ul>
                    {/* on fait une ternaire pour indiquer la navigation,en indiquant une barre bleue */}
                    <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li> Accueil </li>
                    </NavLink>
                    <NavLink to="/about"  className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li> A propos </li>
                    </NavLink>
                    <NavLink to="/blog"  className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li> Blog </li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;