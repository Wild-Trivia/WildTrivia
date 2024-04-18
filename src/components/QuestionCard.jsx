import AskBox from "./AskBox";
import AnswerBox from "./AnswerBox";
import QuestionCount from "./QuestionCount";
import QuizCheckText from "./QuizCheckText";
import { useState } from "react";

const answers = [
    {id: 1, text: "Banana", isCorrect: false},
    {id: 2, text: "Apple", isCorrect: false},
    {id: 3, text: "Tangerine", isCorrect: false},
    {id: 4, text: "Kiwi", isCorrect: true}]

function QuestionCard() {
    const [questionStatus, setQuestionStatus] = useState("Pending")
    
    const borderStyle = () => {
        switch(questionStatus) {
            case "Pending":
              return {border: "solid 1px rgba(179, 179, 179, 0.7)"};
            case "CORRECT!":
              return {border: "solid 1px #00ff38"};
            case "WRONG!":
              return {border: "solid 1px #e92d21"};
                }  
    }

    const handleClick = () => {
        setQuestionStatus("Pending");
    }

    return (<div id="question-card" style={borderStyle()}>
        <div id="card-header">
            <QuestionCount />
            <QuizCheckText questionStatus={questionStatus}/>
        </div>
        <AskBox />
        <div id="answer-zone">
            {answers.map((answer) => {
                return <AnswerBox key={answer.id} answer={answer} questionStatus={questionStatus} setQuestionStatus={setQuestionStatus}/>
            })}
        </div>
        <div id="void-foot"><button onClick={handleClick}>Reset</button></div>
    </div>)
    }
    
export default QuestionCard;