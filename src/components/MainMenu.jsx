import React from "react";
import Rectangle from "./Rectangle";
import IconHtml from "../svg/IconHtml";
import IconCSS from "../svg/IconCSS";
import IconJs from "../svg/IconJs";
import IconA11y from "../svg/IconA11y";


export default function MainMenu ( { setCurrentPageDisplay, setSubject } ) {

    const handleClick = (e) => {
        const { value } = e.currentTarget

        let index = null;
        let hexColor = "white"
        let hexColorBold = "white"
        let colorClass = ""
        switch(value){
            case "html":
                index= 0
                hexColor="#FFF5ED"
                hexColorBold="#FF7E35"
                colorClass="html-container"
                break;
            case "css":
                index=1
                hexColor="#E0FDEF"
                hexColorBold="#2FD887"
                colorClass="css-container"
                break;
            case "js":
                index=2
                hexColor="#EBF0FF"
                hexColorBold="#3064FF"
                colorClass="js-container"
                break;
            case "a11y":
                index=3
                hexColor="#F6E7FF"
                hexColorBold="#A729F5"
                colorClass="a11y-container"
                break;
            default:
                console.log("ERROR")
        }

        setCurrentPageDisplay("quizz")
        setSubject(prevSubject => ({ 
            ...prevSubject,
            selectedSubject: value,
            index: index,
            subjectColor: hexColor,
            subjectColorBold: hexColorBold,
            colorClass: colorClass
            }))
    }

    

    return(
        <div id="main-menu" className="menu">
            <div id="main-menu-header">
                <h1 className="text-preset-2">Welcome to the<br/><span className="text-preset-2-medium">Frontend Quiz!</span></h1>
                <p className="text-preset-6"><i>Pick a subject to get started.</i></p>
            </div>
            <div id="main-menu-subjects">
                <button 
                className="rectangle html-container"
                name="html"
                value="html"
                onClick={handleClick}
                >
                    <div className="svg-container" style={({backgroundColor: "#FFF5ED"})}>
                        <IconHtml/> 
                    </div>
                    <h2 className="text-preset-4">HTML</h2>
                </button>
                <button 
                className="rectangle css-container"
                name="css"
                value="css"
                onClick={handleClick}
                >
                    <div className="svg-container" style={({backgroundColor:"#E0FDEF"})}> 
                        <IconCSS/>
                    </div>
                    <h2 className="text-preset-4">CSS</h2>
                </button>
                <button 
                className="rectangle js-container"
                name="js"
                value="js"
                onClick={handleClick}
                >
                    <div className="svg-container" style={({backgroundColor: "#EBF0FF"})}>
                        <IconJs/>
                    </div>
                    <h2 className="text-preset-4">Javascript</h2>
                </button>
                <button 
                className="rectangle a11y-container"
                name="a11y"
                value="a11y"
                onClick={handleClick}
                >
                    <div className="svg-container" style={({backgroundColor:"#F6E7FF"})}>
                        <IconA11y/>
                    </div>
                    <h2 className="text-preset-4">Accessibility</h2>
                </button>
            </div>
        </div>
    )
}