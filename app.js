var questions = [
  {
    question: "What does HTML stand for?",
    option1: "Hyperlinks and Text Markup Language",
    option2: "Hypertext Markup Language",
    option3: "Home Tool Markup Language",
    correctOption: "Hypertext Markup Language",
  },
  {
    question: "Who is making the Web standards?",
    option1: "Google",
    option2: "The World Wide Web Consortium",
    option3: "Microsoft",
    correctOption: "The World Wide Web Consortium",
  },
  {
    question: "Choose the correct HTML element for the largest heading:",
    option1: "<heading>",
    option2: "<h6>",
    option3: "<h1>",
    correctOption: "<h1>",
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    option1: "<linebreak>",
    option2: "<br>",
    option3: "<break>",
    correctOption: "<br>",
  },
  {
    question: "What is the correct HTML for adding a background color?",
    option1: '<body bg="yellow">',
    option2: "<background>yellow</background>",
    option3: '<body style="background-color:yellow;">',
    correctOption: '<body style="background-color:yellow;">',
  },
  {
    question: "Choose the correct HTML element to define important text:",
    option1: "<strong>",
    option2: "<b>",
    option3: "<i>",
    correctOption: "<strong>",
  },
  {
    question: "Choose the correct HTML element to define emphasized text:",
    option1: "<italic>",
    option2: "<i>",
    option3: "<em>",
    correctOption: "<em>",
  },
  {
    question: "What is the correct HTML for creating a hyperlink?",
    option1: "<a>http://www.w3schools.com</a>",
    option2: '<a href="http://www.w3schools.com">W3Schools</a>',
    option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
    correctOption: '<a href="http://www.w3schools.com">W3Schools</a>',
  },
];

const getQuest = document.getElementById("quest");
const getQues = document.getElementById("ques");
const getOpt1 = document.getElementById("opt1");
const getOpt2 = document.getElementById("opt2");
const getOpt3 = document.getElementById("opt3");
const getInp = document.getElementsByTagName("input");
const getLabel = document.getElementsByTagName("label");
const getBtn = document.getElementById("btn");

let index = 0;
let score = 0;

const nextQuestion = () => {
  checkAns();
  
  for (let i = 0; i < getInp.length; i++) {
    getInp[i].checked = false;
  }

  if (index > questions.length - 1) {
    Swal.fire({
      title: "Good job!",
      text: `Your score is ${score} out of ${questions.length}`,
      icon: "success",
    });
    reset();
  } else {
    getQues.innerText = questions[index].question;
    getOpt1.innerText = questions[index].option1;
    getOpt2.innerText = questions[index].option2;
    getOpt3.innerText = questions[index].option3;
    index++;
    getQuest.innerText = `Question ${index} of ${questions.length}`;
  }

  getBtn.disabled = true;
  getBtn.style.backgroundColor = " #818181";
  getBtn.style.color = " #e1e1e1";
  getBtn.style.cursor = "not-allowed";
};

function checkAns() {
  for (let i = 0; i < getInp.length; i++) {
    if (getInp[i].checked) {
      if (index == 0) return;
      let sndHtm = getLabel[i].innerText 
      let coreectOpt = questions[index - 1].correctOption
      if (sndHtm == coreectOpt) {
        score++;
      }
    }
  }
}
console.log(score);

const btnWork = () => {
  getBtn.disabled = false;
  getBtn.style.backgroundColor = " #333";
  getBtn.style.color = " #f6f6f6";
  getBtn.style.cursor = "pointer";
};

function reset() {
  index = 0;
  score = 0;
  nextQuestion();
}

nextQuestion();