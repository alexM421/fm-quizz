import React from "react";

import Data from "../../data.json"

export default function EndingMenu ( {rightAnswers, subject, setRightAnswers, handleIcon, setCurrentPageDisplay, setSubject}) {



    const handleClick = () => {
        setRightAnswers(0)
        setSubject({
            selectedSubject: null,
            index: null,
            subjectColor: "white",
            subjectColorBold: "white",
            colorClass:"",
          })
        setCurrentPageDisplay("main-menu")
    }

    return(
        <div id='ending-menu' className="menu">
            <div className="ending-menu-text">
                <h1 className="text-preset-2">Quizz completed</h1>
                <h1 className="text-preset-2-medium">You scored...</h1>
            </div>
            <div className="ending-menu-result-tab">
                <div className="results">
                    <div className="result-type">
                        {handleIcon()}
                    </div>
                    <div className="result-text">
                        <h2 className="result text-preset-1">{rightAnswers}</h2>
                        <p className="text-preset-5">out of 10</p>
                    </div>
                </div>
                <button 
                className="submit-btn text-preset-4"
                onClick={handleClick}
                >Play Again</button>
            </div>
        </div>
    )
}