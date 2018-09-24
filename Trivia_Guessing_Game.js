let questions = [
  {
  question: 'Who is Clark Kent?',
  answers: ['Batman','Superman','Spiderman'],
  correctAnswer:'Superman'
},
  {
  question: 'Who is Bruce Wayne?',
  answers: ['Superman','Spiderman', 'Batman'],
  correctAnswer:'Batman'
 },
  {
  question: 'Who is Peter Parker?',
  answers: ['Batman','Superman','Spiderman'],
  correctAnswer:'Spiderman'
  },
  {
  question: 'What channel shows Game of Thrones?',
  answers: ['Netflix','HBO','Amazon Prime'],
  correctAnswer:'HBO'
  }
]

function triviaGame() {
  questions.forEach(function(val) {
   let q =  prompt(`${val.question} \n ${val.answers}`)
   q === val.correctAnswer ? alert('Correct!') : alert('Incorrect');
  })
}

triviaGame()
