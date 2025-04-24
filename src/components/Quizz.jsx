import React from "react";
import IconCorrect from "../svg/IconCorrect";
import IconError from "../svg/IconError";

export default function Quizz ( { data, subject, setRightAnswers, setCurrentPageDisplay }) {

    const [count, setCount] = React.useState(0)

    const [selectedAnswer, setSelectedAnswer] = React.useState("")
    const [isRight, setIsRight] = React.useState({
        answer: "",
        isTrue: null,
        alreadyChosen : false,
    })

    const [error, setError] = React.useState(false)

    const handleChange= (e) => {
        const { value } = e.target
        setSelectedAnswer(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        //Check if an answer has already been provided
        if(selectedAnswer && !isRight.alreadyChosen){
            if(selectedAnswer===data.questions[count].answer){
                setIsRight(prevState => ({...prevState, answer: selectedAnswer,isTrue: "true", alreadyChosen: true}))
                setRightAnswers(prevCount => prevCount+1)
            }
            else{
                setIsRight(prevState => ({...prevState, answer: selectedAnswer,isTrue: "false", alreadyChosen: true}))
            }
            setError(false)
        }
        //if yes then jump to next question
        else if(isRight.alreadyChosen){
            setSelectedAnswer("")
            setIsRight({answer: "", isTrue: null})
            setError(false)
            if(count<9){
                setCount(prevCount => prevCount+1)
            }else{
                setCount(0)
                setCurrentPageDisplay("ending-menu")
            }
       
            
        }
        else{
            setError(true)
        }

    }



    const handleQuestionsDisplay = () => {

        const options = []
        const letters = ["A", "B", "C", "D"]

        let lettersTrackingCount = 0

        let answerDisplay = ""


        if(isRight.isTrue==="true"){
            answerDisplay={
                element:   <div className="checkmark"><IconCorrect/></div>,
                classToAdd: "answer-true"
            }
          
        }
        if(isRight.isTrue==="false"){
            answerDisplay={
                element: <div className="checkmark"><IconError/></div>,
                classToAdd: "answer-false"
            }
        }



        for(let option of  data.questions[count].options){
            options.push(
                <label 
                className={
                `rectangle text-preset-4 
                ${subject.colorClass} 
                ${isRight.answer===option? answerDisplay.classToAdd:""}
                `} 
                htmlFor={`quizz-input-${lettersTrackingCount}`}
                >
                    <input 
                    disabled={isRight.alreadyChosen}
                    type="radio" 
                    className="quizz-input" 
                    id={`quizz-input-${lettersTrackingCount}`} 
                    name="radio-input"
                    value={option}
                    checked={selectedAnswer===option}
                    onChange={handleChange}
                    />
                    <p className="option-marker">{letters[lettersTrackingCount]}</p>
                    <p className="option-text">{option}</p>
                    {(data.questions[count].answer===option && isRight.alreadyChosen && selectedAnswer!= option)? <div className="checkmark"><IconCorrect/></div>:""}
                    {isRight.answer===option? answerDisplay.element:""}
                </label>
            )

            lettersTrackingCount++
        }

        return(
            <form id="quizz-questions-container">
                <div className="quizz-questions">
                    {options}
                </div>
                <button 
                className="submit-btn text-preset-4"
                style={({backgroundColor: `${subject.subjectColorBold}`})}
                onClick={handleSubmit}
                >{!isRight.answer? "Submit Answer":"Next Question"}</button>
                {error? 
                    <div className="error-div">
                        <IconError/>
                        <p className="text-preset-5">Please select an answer</p>
                    </div>
                :""    
                }
            </form>
        )
    }

    return(
        <div id="quizz" className="menu">
            <div id="quizz-left-panel">
                <div id="quizz-text">
                    <p className="text-preset-6">{`Question ${count+1} of 10`}</p>
                    <h1 className="text-preset-3">{data.questions[count].question}</h1>
                </div>
                <div className="progression-bar-container">
                    <div 
                    className={`progression-bar ${subject.colorClass}`}
                    style={({width: `${(count+1)*10}%`})}
                    ></div>
                </div>
            </div>
            {handleQuestionsDisplay()}
        </div>
    )
}