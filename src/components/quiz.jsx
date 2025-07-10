import { useState } from "react";
import Result from "./result";
import './quiz.css'

function Quiz() {
	const [optionSelect, setOptionSelect] = useState("None")
	const [userAnswers, setUserAnswers] = useState([null, null, null])
	const [currentQuestion, setCurrentQuestion] = useState(0)
	const [isFinished, setIsFinished] = useState(false)

	const questionBank = [
		{
			question: "What is the capital of India?",
			answer: "New Delhi",
			options: ["New Delhi", "Mumbai", "Chennai", "Kolkata"]
		},
		{
			question: "Which planet is known as the Red Planet?",
			answer: "Mars",
			options: ["Earth", "Venus", "Mars", "Jupiter"]
		},
		{
			question: "Who wrote 'Romeo and Juliet'?",
			answer: "William Shakespeare",
			options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"]
		}
	]

	function handleSelectOption(option) {
		const newUserAnswers = [...userAnswers]
		newUserAnswers[currentQuestion] = option
		setUserAnswers(newUserAnswers)

		setOptionSelect(option)
	}

	function handleNext() {
		if (currentQuestion < questionBank.length - 1) {
			setCurrentQuestion(currentQuestion + 1)
		} else {
			setIsFinished(true)
		}
	}

	function handlePrev() {
		setCurrentQuestion(currentQuestion - 1)
	}

	function handleRestart() {
		setCurrentQuestion(0);
		setUserAnswers([null, null, null]);
		setOptionSelect("None");
		setIsFinished(false);
	}

	function calculateScore() {
		let count = 0;
		for (let i = 0; i < questionBank.length; i++) {
			if (userAnswers[i] === questionBank[i].answer) {
				count++;
			}
		}
		return count;
	}

	if (isFinished) {
		const score = calculateScore();
		return <Result score={score} totalQuestions={questionBank.length} restart={handleRestart} />
	}
	else {
		return (
			<div>
				<h1>QUIZZZ!!</h1>
				<h2>Question {currentQuestion + 1}</h2>
				<p className="question">{questionBank[currentQuestion].question}</p>

				<div className="optionList">
					{questionBank[currentQuestion].options.map((option) => (
						<button className={"option" + (optionSelect === option ? "Selected" : "")} onClick={() => handleSelectOption(option)}>{option}</button>
					))}
				</div>



				<button className="navBtn" onClick={handlePrev} disabled={currentQuestion === 0}>Previous</button>
				<button className="navBtn" onClick={handleNext} >
					{currentQuestion === questionBank.length - 1 ? "Finish Quiz" : "Next"}
				</button>
				<div id="result" className="result"></div>
			</div>
		);
	}
}

export default Quiz;