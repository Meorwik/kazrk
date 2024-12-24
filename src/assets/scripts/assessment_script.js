const question_1 = {
  number: 1,
  question: "1.Сколько лет в Москве автор наблюдает чудесное время?",
  answers: [
      "A) ровно 35",
      "B) больше 40",
      "C) больше 30",
      "D) меньше 33",
  ],
   correct_answer: "C) больше 30"
};

const question_2 = {
  number: 2,
  question: "2.Какую птицу автор упоминает в тексте?",
  answers: [
      "A) синицу",
      "B) снегиря",
      "C) воробья",
      "D) жаворонка",
  ],
   correct_answer: "C) воробья"
};

const question_3 = {
  number: 3,
  question: "3. Какие два тепловых процесса упоминает автор?",
  answers: [
      "A) кристаллизация и плавление",
      "B) плавление и таяние",
      "C) сила тока и звука",
      "D) сила притяжения и кристаллизация",
  ],
   correct_answer: "A) кристаллизация и плавание"
};

const question_4 = {
  number: 4,
  question: "4.К какому стилю относится текст?",
  answers: [
      "A) научному",
      "B) официально-деловому",
      "C) публицистическому",
      "D) художественной литературы",
  ],
   correct_answer: "C) публицистическому"
};

const question_5 = {
  number: 5,
  question: "5. Определите жанр текста",
  answers: [
      "A) рассказ",
      "B) статья",
      "C) фельетон",
      "D) очерк",
  ],
   correct_answer: "B) статья"
};

const question_parts = [
  "6. В какой последовательности следует повествование?",
  "1. Физические явления постоянно присутствуют в художественной литературе.",
  "2. Капитан Врунгель, вернувшись из очередного кругосветного путешествия,",
  "3. В жизни физика и литература тесно переплетаются.",
  "4. Произведения художественной литературы, богатые описанием тех или иных физических явлений природы ",
];
let res = "";
for (let i=0; i<5; i++) { res += question_parts[i] + "\n" }
const question_6 = {
  number: 6,
  question: res,
  answers: [
      "A) 3,1,4,2",
      "B) 1,3,2,4",
      "C) 2,3,4,1",
      "D) 4,2,1,3",
  ],
   correct_answer: "D) 4,2,1,3"
};

const question_7 = {
  number: 7,
  question: "7.Определите художественно-изобразительное средство «Желоб высунет из себя ледяной язык»",
  answers: [
      "A) сравнение",
      "B) эпитет",
      "C) метафора",
      "D) олицетворение",
  ],
   correct_answer: "C) метафора"
};

const question_8 = {
  number: 8,
  question: "8. Какого литературного жанра, по мнению автора, не было бы без физики?",
  answers: [
      "A) баллада",
      "B) научно-фантастического романа",
      "C) роман - эпопеи",
      "D) элегии",
  ],
   correct_answer: "B) научно-фантастического романа"
};

const question_9 = {
  number: 9,
  question: "9.Какими физическими открытиями XIX века был вдохновлен Жюль Верн?",
  answers: [
      "A) строительствами железных дорог, открытиями новых земель, полярными исследованиями",
      "B) таянием ледников и инерциями",
      "C) испарением и конденсацией воды",
      "D) электромагнитными явлениями",
  ],
   correct_answer: "A) строительствами железных дорог, открытиями новых земель, полярными исследованиями"
};

const question_10 = {
  number: 10,
  question: "10.Какова цель текста?",
  answers: [
      "A) рассказать о физических явлениях",
      "B) показать, что физические явления действительно имеют место в литературе и влияют на ее сюжеты",
      "C) описать некоторые физические явления",
      "D) воспитать интерес к изучению физики",
  ],
   correct_answer: "B) показать, что физические явления действительно имеют место в литературе и влияют на ее сюжеты"
};

const assessment_data = [
  question_1,
  question_2,
  question_3,
  question_4,
  question_5,
  question_6,
  question_7,
  question_8,
  question_9,
  question_10,
];




class Quiz
{
  constructor(questions)
  {
    this.questions = questions;
    this.currentQuestion = 0;
    this.score = 0;
    this.result = null;
  }

  ClickCheck(question, answer)
  {

    // console.log(this.questions[this.currentQuestion].correctAnswer)
    if (this.questions[this.currentQuestion].correctAnswer === answer)
    {
      this.NextQuestion();
      this.score += 1;
      return true;
    }
    this.NextQuestion();
    return false;
  }

  NextQuestion()
  {
    ++this.currentQuestion;
    if (this.currentQuestion === this.questions.length)
    {
      this.GetResults();
    }
  }

  GetResults()
  {
    this.result = `Вы ответили на ${this.score} из ${this.questions.length} вопросов`;
  }
}

class Question
{
  constructor(text, answers, correctAnswer)
  {
    this.text = text;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }
}

class Answer
{
  constructor(text)
  {
    this.text = text;
  }
}

function Update()
{
  console.log('new update. Current question:', quiz.currentQuestion)

  let headElem = document.querySelector("#head");
  let buttonsElem = document.querySelectorAll(".button-quiz");
  let pagesElem = document.querySelector("#pages");

  for (let i = 0; i < buttonsElem.length; i++)
  {
    buttonsElem[i].className = "button-quiz button_common";
  }

  if(quiz.currentQuestion < quiz.questions.length)
  {
    headElem.innerHTML = quiz.questions[quiz.currentQuestion].text;

    for (let i=0; i<quiz.questions[quiz.currentQuestion].answers.length; i++)
    {
      buttonsElem[i].textContent = quiz.questions[quiz.currentQuestion].answers[i].text;
    }
    pagesElem.innerHTML = (quiz.currentQuestion + 1) + " / " + quiz.questions.length;
  }
  else
  {
    buttonsElem.innerHTML = "";
    headElem.innerHTML = quiz.result;
    for (let i = 0; i < buttonsElem.length; i++)
    {
      if (i !== 1)
      {
        buttonsElem[i].className = "disabled";
      } else {
        buttonsElem[i].className = "back";
        buttonsElem[i].textContent = "Перейти к призу ✨";
        buttonsElem[i].onclick = () => window.open("/api/prize", "_self");
      }
    }
  }
}

function Init()
{
  let btns = document.querySelectorAll(".button-quiz");

  for (let i = 0; i < btns.length; i++)
  {
    btns[i].addEventListener("click", e => {
      // console.log(quiz.questions[quiz.currentQuestion].text)
      console.log(e.target.textContent, i)
      Click(
        quiz.questions[quiz.currentQuestion].text,
        e.target.textContent,
        i
      );
     });
  }
}

function Click(currentQuetion, answerValue, i)
{
  let isCorrect = quiz.ClickCheck(currentQuetion, answerValue);
  let btns = document.querySelectorAll(".button-quiz");

  console.log(btns[i])

  if (isCorrect)
  {
    btns[i].className = "button-quiz button_correct";
  }
  else
    btns[i].className = "button-quiz button_wrong";

  setTimeout(Update, 1000);
}

const questions = []

for (let i=0; i<assessment_data.length; i++)
{
  let answers = [];
  for (let j=0; j<4; j++)
  {
    answers.push(
      new Answer(assessment_data[i].answers[j])
    );
  }
  let question = new Question(
    text=assessment_data[i].question,
    answers=answers,
    correctAnswer=assessment_data[i].correct_answer
  );

  questions.push(question);
}


const quiz = new Quiz(questions);
Init();
Update();
