import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({ pageTitle, pageHeading, children }) => {

    return (
        <main>
            <title>{pageTitle}</title>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
            <h2>{pageHeading}</h2>
            {children}
        </main>
    )
}

export default Layout