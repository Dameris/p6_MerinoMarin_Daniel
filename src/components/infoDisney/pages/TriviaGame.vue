<template>
	<div class="trivia__Container">
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
					<h2>Your final score is: {{ userScore }} / {{ totalQuestions }}</h2>
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
			<h2>CHOOSE A TEST:</h2>
			<ul class="trivia__test--list">
				<li
					class="trivia__test--item"
					v-for="(test, index) in tests"
					:key="index"
					@click="startTest(test)"
				>
					{{ test.name }}
				</li>
			</ul>
		</template>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tests: [],

				// Inicialización de las variables del juego
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
	.trivia__Container {
		max-width: 50em;
		margin: 0 auto;
		padding-top: 1em;
		text-align: center;
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
		cursor: pointer;
		border: none;
		border-radius: 0.4em;
		color: #fff;
		background-color: #ff5757;
	}

	.trivia__next--btn:hover {
		background-color: #ffafaf;
	}

	.trivia__test--list {
		padding: 0;
		list-style-type: none;
	}

	.trivia__test--item {
		padding: 1em;
		margin-bottom: 0.5em;
		cursor: pointer;
		border-radius: 0.4em;
		color: #fff;
		background-color: #ff5757;
	}

	.trivia__test--item:hover {
		background-color: #ffafaf;
	}
</style>
