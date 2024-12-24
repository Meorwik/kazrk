let question_1 = {
  number: 1,
  question: "Вячеслав Ким қай қалада дүниеге келген?",
  answers: [
      "A) Нұр-Сұлтан",
      "B) Алматы",
      "C) Қарағанды",
      "D) Шымкент",
  ],
   correct_answer: "B) Алматы"
};

let question_2 = {
  number: 2,
  question: "Вячеслав Ким қай оқу орнын тәмамдады?",
  answers: [
      "A) Қазақ ұлттық университеті",
      "B) Алматы халық шаруашылығы институты",
      "C) Назарбаев Университеті",
      "D) Қазақстан экономика университеті",
  ],
   correct_answer: "B) Алматы халық шаруашылығы институты"
};

let question_3 = {
  number: 3,
  question: "Вячеслав Ким Kaspi.kz директорлар кеңесінің төрағасы болған жыл?",
  answers: [
      "A) 2004",
      "B) 2005",
      "C) 2006",
      "D) 2010",
  ],
   correct_answer: "C) 2006"
};

let question_4 = {
  number: 4,
  question: "1990 жылдары Вячеслав Ким құрған компаниялар?",
  answers: [
      "A) ALTAIR және Asia Technics",
      "B) Kaspi Bank және Halyk Bank",
      "C) Technodom және Sulpak",
      "D) Kcell және Beeline",
  ],
   correct_answer: "A) ALTAIR және Asia Technics"
};

let question_5 = {
  number: 5,
  question: "Kaspi.kz қай жылы Лондон қор биржасында IPO өткізді?",
  answers: [
      "A) 2018",
      "B) 2019",
      "C) 2020",
      "D) 2021",
  ],
   correct_answer: "C) 2020"
};

let question_6 = {
  number: 6,
  question: "Kaspi.kz-тағы Вячеслав Кимнің рөлі қандай?",
  answers: [
      "A) Бас директор",
      "B) Негізін қалаушы және директорлар кеңесінің төрағасы",
      "C) Қаржы директоры",
      "D) IT бөлімінің басшысы",
  ],
   correct_answer: "B) Негізін қалаушы және директорлар кеңесінің төрағасы"
};

let question_7 = {
  number: 7,
  question: "2024 жылы Вячеслав Кимнің байлығы қанша миллиард доллар болды?",
  answers: [
      "A) 3",
      "B) 4",
      "C) 5",
      "D) 6",
  ],
   correct_answer: "C) 5"
};

let question_8 = {
  number: 8,
  question: "Вячеслав Ким қандай салаларды қолдайды?",
  answers: [
      "A) Денсаулық сақтау және спорт",
      "B) Білім беру және қайырымдылық",
      "C) Өнер және архитектура",
      "D) Экология және ауыл шаруашылығы",
  ],
   correct_answer: "B) Білім беру және қайырымдылық"
};

let question_9 = {
  number: 9,
  question: "Kaspi.kz компаниясының негізгі стратегиясы қандай?",
  answers: [
      "A) Оффлайн қызметтерге басымдық беру",
      "B) Клиенттерге ыңғайлы цифрлық шешімдер ұсыну",
      "C) Халықаралық нарықтарға шығу",
      "D) Технология шығындарын азайту",
  ],
   correct_answer: "B) Клиенттерге ыңғайлы цифрлық шешімдер ұсыну"
};

let question_10 = {
  number: 10,
  question: "Вячеслав Ким Қазақстан жастарына қалай әсер етеді?",
  answers: [
      "A) Жеке үлгісімен көшбасшылық пен кәсіпкерлікті насихаттау",
      "B) Саясатқа қатысу арқылы",
      "C) Спорттық командаларды қолдау арқылы",
      "D) Эмиграцияны насихаттау арқылы",
  ],
   correct_answer: "A) Жеке үлгісімен көшбасшылық пен кәсіпкерлікті насихаттау"
};

let assessment_data = [
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

let correctAnswer;
for (let i = 0; i < assessment_data.length; i++) {
    let answers = [];
    for (let j = 0; j < 4; j++) {
        answers.push(
            new Answer(assessment_data[i].answers[j])
        );
    }
    let question = new Question(
        text = assessment_data[i].question,
        answers = answers,
        correctAnswer = assessment_data[i].correct_answer
    );

    questions.push(question);
}


const quiz = new Quiz(questions);
Init();
Update();
