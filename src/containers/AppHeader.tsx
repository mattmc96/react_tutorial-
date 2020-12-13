import React from 'react'

import "./AppHeader.css"
import AppHeaderNavLink, { NavLink } from '../components/AppHeaderNavLink'

// Define our AppHeader properties that will be passed into the component
export type AppHeaderProps = {
    title: string;
    description: string;
    links: NavLink[];
}

// Create React Functional Component variable that will render our code for our header
// React.FC takes a type of the props that can be passed into the component
const AppHeader: React.FC<AppHeaderProps> = React.memo(({ title, description, links }) => {
        return (
            <header className="app-header">
                <section className="app-header">
                    <h1>{title}</h1>
                    <small>{description}</small>
                </section>
                <span className="fill-space">
                    <section className="app-links">
                        {links &&
                        links.map(( link: NavLink) => (
                            <AppHeaderNavLink
                            label={link.label}
                            route={link.route}
                            key={link.label}
                            />
                        ))}
                    </section>
                </span>
            </header>
        )
   }
)

export default AppHeader
