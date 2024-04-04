<template>
	<div>
		<h1>{{ question }}</h1>
		<ul>
			<li
				v-for="option in options"
				:key="option"
				@click="checkAnswer(option)"
			>
				{{ option }}
			</li>
		</ul>
		<div v-if="showResult">
			<p>{{ result }}</p>
			<button @click="nextQuestion">Siguiente pregunta</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				questions: [
					{
						question: "¿En qué película de Disney aparece Simba?",
						options: ["El Rey León", "La Sirenita", "Blancanieves y los siete enanitos"],
						correctAnswer: "El Rey León"
					}
					// Agrega más preguntas aquí
				],
				currentQuestionIndex: 0,
				showResult: false,
				result: ""
			}
		},
		computed: {
			question() {
				return this.questions[this.currentQuestionIndex].question
			},
			options() {
				return this.questions[this.currentQuestionIndex].options
			}
		},
		methods: {
			checkAnswer(option) {
				if (option === this.questions[this.currentQuestionIndex].correctAnswer) {
					this.result = "¡Respuesta correcta!"
				} else {
					this.result =
						"Respuesta incorrecta. La respuesta correcta es: " + this.questions[this.currentQuestionIndex].correctAnswer
				}
				this.showResult = true
			},
			nextQuestion() {
				if (this.currentQuestionIndex < this.questions.length - 1) {
					this.currentQuestionIndex++
					this.showResult = false
				} else {
					// Si ya no hay más preguntas, podrías mostrar un mensaje de fin de juego o regresar al inicio.
					// Por ejemplo: this.currentQuestionIndex = 0;
				}
			}
		}
	}
</script>

<style scoped>
	/* Estilos opcionales */
	ul {
		list-style-type: none;
		padding: 0;
	}
	li {
		cursor: pointer;
		margin-bottom: 10px;
	}
</style>
