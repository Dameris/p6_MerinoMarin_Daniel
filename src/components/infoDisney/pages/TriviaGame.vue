<template>
	<div class="trivia__container">
		<template v-if="showTestsExplanation && !currentTest">
			<div class="trivia__explanation">
				<h2>WELCOME TO THE TRIVIA SECTION!</h2>
				<p>THIS SECTION OFFERS A VARIETY OF QUIZZES TO TEST YOUR KNOWLEDGE ABOUT THE DISNEY WORLD.</p>
				<button
					@click="showTestsExplanation = false"
					class="trivia__next--btn"
				>
					START
				</button>
			</div>
		</template>
		<template v-if="!showTestsExplanation">
			<template v-if="currentTest">
				<h1>{{ currentTest.name }}</h1>
				<template v-if="!showResult">
					<h2>{{ currentQuestion.question }}</h2>
					<ul>
						<li
							class="trivia__option"
							v-for="(option, index) in currentQuestion.options"
							:key="index"
							@click="checkAnswer(option)"
						>
							{{ option }}
						</li>
					</ul>
					<p class="trivia__timeRemaning">{{ timeRemaining }}</p>
				</template>
				<div
					v-else
					class="trivia__resultContainer"
				>
					<p>{{ result }}</p>
					<template v-if="currentQuestionIndex < currentTest.questions.length - 1">
						<button
							class="trivia__next--btn"
							@click="nextQuestion"
						>
							NEXT QUESTION
						</button>
					</template>
					<template v-else>
						<h2>YOUR FINAL SCORE IS: {{ userScore }} / {{ totalQuestions }}</h2>
						<button
							class="trivia__next--btn"
							@click="restartQuiz"
						>
							FINISH
						</button>
					</template>
				</div>
			</template>
			<template v-else>
				<div class="trivia__test--container">
					<h2>CHOOSE A TEST:</h2>
					<ul class="trivia__test--list">
						<li
							class="trivia__test--item"
							v-for="(test, index) in tests"
							:key="index"
							@click="startTest(test)"
							:style="{ backgroundImage: `url(${test.backgroundImage})` }"
						>
							{{ test.name }}
						</li>
					</ul>
					<button
						@click="showTestsExplanation = true"
						class="trivia__next--btn"
					>
						BACK
					</button>
				</div>
			</template>
		</template>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tests: [],

				// Inicialización de las variables del juego
				showTestsExplanation: true,
				currentTestIndex: null,
				currentQuestionIndex: null,
				showResult: false,
				result: "",
				userScore: 0,
				totalQuestions: 0,
				timer: null,
				timeRemaining: 10,
				history: []
			}
		},

		mounted() {
			this.fetchTests()
		},

		computed: {
			// Calcula el test actual
			currentTest() {
				return this.currentTestIndex !== null ? this.tests[this.currentTestIndex] : null
			},

			// Calcula la pregunta actual
			currentQuestion() {
				return this.currentTest && this.currentQuestionIndex !== null
					? this.currentTest.questions[this.currentQuestionIndex]
					: null
			}
		},

		methods: {
			// Fetch de los test
			async fetchTests() {
				try {
					const response = await fetch("/testsTrivia.json")
					if (!response.ok) {
						throw new Error("Failed to fetch tests")
					}
					this.tests = await response.json()
				} catch (error) {
					console.error(error)
				}
			},

			// Inicia el test seleccionado
			startTest(test) {
				this.currentTestIndex = this.tests.indexOf(test)
				// Clona el test actual para no modificar el original
				this.currentTest = JSON.parse(JSON.stringify(test))
				this.currentTest.questions = this.shuffleArray(this.currentTest.questions)
				this.currentQuestionIndex = 0
				this.showResult = false
				this.result = ""
				this.userScore = 0
				this.totalQuestions = this.currentTest.questions.length

				this.startTimer()
			},

			shuffleArray(array) {
				// Función para mezclar un array usando el algoritmo de Fisher-Yates
				for (let i = array.length - 1; i > 0; i--) {
					const j = Math.floor(Math.random() * (i + 1))
					;[array[i], array[j]] = [array[j], array[i]]
				}
				return array
			},

			startTimer() {
				this.timer = setInterval(() => {
					if (this.timeRemaining > 0) {
						this.timeRemaining--
					} else {
						this.nextQuestion()
						this.checkAnswer("")
					}
				}, 1000)
			},

			checkAnswer(option) {
				this.timeRemaining = 1000

				if (option === this.currentQuestion.correctAnswer) {
					this.result = "CORRECT ANSWER!"
					this.userScore++
				} else if (option !== this.currentQuestion.correctAnswer || option === "") {
					this.result = "INCORECT ANSWER! The correct answer is: " + this.currentQuestion.correctAnswer
				}
				this.showResult = true

				// Guardar el historial después de cada test
				this.history.push({
					test: this.currentTest,
					score: this.userScore,
					timestamp: new Date().toISOString()
				})
			},

			nextQuestion() {
				this.timeRemaining = 10

				if (this.currentQuestionIndex < this.currentTest.questions.length - 1) {
					this.currentQuestionIndex++
					this.showResult = false
				} else {
					this.currentTestIndex = null
					this.currentQuestionIndex = null
				}
			},

			restartQuiz() {
				this.currentTestIndex = null
				this.currentQuestionIndex = null
			}
		}
	}
</script>

<style scoped>
	.trivia__container {
		position: relative;
	}

	.trivia__explanation {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		color: #fff;
		background-image: url("../../img/trivia_bg.jpg");
		background-size: cover;
		background-position: center;
	}

	.trivia__option {
		padding: 0.8em;
		margin-bottom: 0.5em;
		border-radius: 0.4em;
		cursor: pointer;
		list-style: none;
		color: #fff;
		background-color: #ffafaf;
	}

	.trivia__option:hover {
		background-color: #ff5757;
	}

	.trivia__timeRemaning {
		font-size: 5em;
		font-weight: bold;
		color: #ff5757;
	}

	.trivia__resultContainer {
		margin-top: 1em;
	}

	.trivia__next--btn {
		padding: 1em 2em;
		margin-top: 1em;
		margin-bottom: 1em;
		cursor: pointer;
		border: none;
		border-radius: 0.4em;
		color: #fff;
		background-color: #ff5757;
	}

	.trivia__next--btn:hover {
		background-color: #ffafaf;
	}

	.trivia__test--container {
		padding: 1em;
		min-height: 100vh;
		color: #fff;
		text-align: center;
		background-image: url("../../img/trivia_bg.jpg");
		background-size: cover;
		background-position: center;
	}

	.trivia__test--list {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		list-style-type: none;
	}

	.trivia__test--item {
		display: flex;
		align-items: flex-start;
		padding: 1em;
		margin: 1em;
		width: calc(30em - 1em);
		height: calc(30em - 1em);
		cursor: pointer;
		border: 0.1em solid #fff;
		border-radius: 0.4em;
		color: #fff;
		background-size: cover;
		background-position: center;
		filter: grayscale(100%);
		transition: filter 0.3s ease;
	}

	.trivia__test--item:hover {
		filter: grayscale(0%);
	}
</style>
