const timeRemaining = 24;

function QuizTimer() {
    return (
    <div id="quiz-timer">
        {timeRemaining}
        <img id="hourglass" src="src/assets/hourglass.svg" width="35px" />
    </div>
    
    )
    }
    
    export default QuizTimer;