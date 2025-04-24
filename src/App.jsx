import React from 'react'

import './App.css'

import Data from "../data.json"

import PatternBackgroundDesktop from './svg/PatternBackgroundDesktop'
import ThemeToggle from './components/ThemeToggle'
import MainMenu from './components/MainMenu'
import Quizz from './components/Quizz'
import EndingMenu from './components/EndingMenu'

function App() {

  React.useEffect(() => {document.body.classList.add("lightMode")},[])

  const [currentPageDisplay, setCurrentPageDisplay] = React.useState("main-menu")
  const [subject, setSubject] = React.useState({
    selectedSubject: null,
    index: null,
    subjectColor: "white",
    subjectColorBold: "white",
    colorClass:"",
  })
  const [rightAnswers, setRightAnswers] = React.useState(0)

  const handleIcon = () => {

    if(!subject.selectedSubject){
      return ""
    }

    const data = Data.quizzes[subject.index]

    return(
      <div className='nav-icon'>
        <div className='nav-icon-container' style={({backgroundColor: subject.subjectColor})}>
          <img src={data.icon}/>
        </div>
        <p className='text-preset-4'>{data.title}</p>
      </div>
    )
  }

  const handleDisplay = () => {

  switch ( currentPageDisplay ) {
      case "ending-menu":
        return(<EndingMenu 
          handleIcon={handleIcon}
          subject={subject}
          rightAnswers={rightAnswers}
          setRightAnswers={setRightAnswers}
          setCurrentPageDisplay={setCurrentPageDisplay}
          setSubject={setSubject}
          />)
      case "quizz":
        return(<Quizz 
          data={Data.quizzes[subject.index]} 
          subject={subject}
          setRightAnswers={setRightAnswers}
          setCurrentPageDisplay={setCurrentPageDisplay}
          />)
      default:
        return(<MainMenu setCurrentPageDisplay={setCurrentPageDisplay} setSubject={setSubject}/>)
    }

  }

 

  return (
    <div id="app">
      <div id="app-container">
        <div id="toggle-container">
          {handleIcon()}
          <ThemeToggle/>
        </div>
        {handleDisplay()}
      </div>
      <PatternBackgroundDesktop/>
    </div>
  )
}

export default App
