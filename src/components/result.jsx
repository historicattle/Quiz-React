import { useEffect } from "react";

function Result({ score, totalQuestions, restart }) {
	useEffect(() => {
		document.title = "Result"
	}, [])

	return (
		<div>
			<h1>Quiz Completed!</h1>
			<h2>Your Score: {score}/{totalQuestions}</h2>
			
			<button id="restart-btn" onClick={restart}>Restart Quiz</button>

		</div>
	);
}

export default Result