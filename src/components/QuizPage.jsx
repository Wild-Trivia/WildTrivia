import QuitButton from "./QuitButton";
import ScoreBoard from "./ScoreBoard";
import QuizTimer from "./QuizTimer";
import QuestionCard from "./QuestionCard";

function QuizPage() {
return (<div id="quiz-page-container">
<div id="quiz-info-container">
    <QuitButton />
    <ScoreBoard />
    <QuizTimer />
</div>
<QuestionCard />
<div id="void-bottom"></div>
</div>)
}

export default QuizPage;