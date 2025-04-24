import React from "react";
import IconSun from "../svg/IconSun";
import IconMoon from "../svg/IconMoon";

export default function ThemeToggle () {

    const [darkMode, setDarkMode] = React.useState(false)

    const handleChange = (e) => {
        setDarkMode(e.target.checked)
    }


    React.useEffect(() => {
        document.body.classList.toggle("lightMode")
        document.body.classList.toggle(`darkMode`)
    },[darkMode])

    return(
        <div id="themeToggle">
            <IconSun/>
            <label htmlFor="toggle-btn" className="toggle-btn">
                <input 
                type="checkbox" 
                id="toggle-btn"
                checked={darkMode}
                onChange={handleChange}
                />
            </label>
            <IconMoon/>
        </div>
    )
}