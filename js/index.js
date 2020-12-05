let english = ['Hello, Hi','very good','What`s your name?','My name is...','I am...','Nice to meet you','Goodbye','Bye','See you on Friday','a house','a bike','a tree','tomorrow','instructions','read','listen','say','repeat','write','days of the week','monday','tuesday','wednesday','thursday','friday','saturday','sunday','a country','Where are you from?','I am from...','point to','nationality','in','a city',`I don't know`,'I think...',`It's`,'fantastic','match','nice','ask','a question','got it','Well done!'];
let randomNumber;
let answerIsCorrect;
let ukraine = ['Привіт','дуже добре','як тебе звати?','мене звати...','я...','радий знайомству','до побачення','па',"до зустрічі в п'ятницю",'будинок','велосипед','дерево','завтра','інструкції','читати','слухати','казати','повторювати','писати','дні тижня','понеділок','вівторок','середа','четвер',"п'ятниця",'субота','неділя','країна','Звідки ти?','Я з...','показувати','національність','в\nу','місто','Я не знаю','Я думаю, що...','Це(є)','фантастично','співставляти','класно','запитувати','запитання','зрозуміло','Молодець!'];

let onEnglish = confirm("Запитувати на англійській мові?");
console.log(`${english.length}\n${ukraine.length}`);
if (onEnglish) {
  askInEnglish();
} else {
  askInUkraine();
}
alert("Вітаємо, ви вивчили всі слова!\nСongratulations, you have learned all the words!");

function askInEnglish() {
  while (english.length > 0) {
    randomNumber = Math.floor(Math.random() * english.length);
    alert(english.length + "\n" + english[randomNumber]);
    answerIsCorrect = confirm(english.length + "\n" + english[randomNumber] + "\n" + ukraine[randomNumber]);
    if (answerIsCorrect) {
      english.splice(randomNumber, 1);
      ukraine.splice(randomNumber, 1);
    }
  }
}

function askInUkraine() {
    while (ukraine.length > 0) {
        randomNumber = Math.floor(Math.random() * ukraine.length);
        alert(english.length + "\n" + ukraine[randomNumber]);
        answerIsCorrect = confirm(english.length + "\n" + ukraine[randomNumber] + "\n" + english[randomNumber]);
        if (answerIsCorrect) {
          english.splice(randomNumber, 1);
          ukraine.splice(randomNumber, 1);
        }
      }
};
