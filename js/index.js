let english = ['Hello, Hi','very good','What`s your name?','My name is...','I am...','Nice to meet you','Goodbye','Bye','See you on Friday','a house','a bike','a tree','tomorrow','instructions','read','listen','say','repeat','write','days of the week','monday','tuesday','wednesday','thursday','friday','saturday','sunday','a country','Where are you from?','I am from...','point to','nationality','in','a city',`I don't know`,'I think...',`It's`,'fantastic','match','nice','ask','a question','got it','Well done!','then','hold on','a chair','the board','the door','a coat','a laptop','a window','a table','a dictionary','a piece of paper','a pen','how do you spell it?','Can you repeat please?','I don`t understand.','I don`t know.','Sorry, I`m late.','late','study','look at...','too','at the park','who','good-looking','married','single','age','later','when','how','what`s your address?','what`s your email?','hear','an application form','a postcode','personal information','divorced / separated','a street','at','dot','what time...?'];
let randomNumber;
let answerIsCorrect;
let ukraine = ['Привіт','дуже добре','як тебе звати?','мене звати...','я...','радий знайомству','до побачення','па',"до зустрічі в п'ятницю",'будинок','велосипед','дерево','завтра','інструкції','читати','слухати','казати','повторювати','писати','дні тижня','понеділок','вівторок','середа','четвер',"п'ятниця",'субота','неділя','країна','Звідки ти?','Я з...','показувати','національність','в\nу','місто','Я не знаю','Я думаю, що...','Це(є)','фантастично','співставляти','класно','запитувати','запитання','зрозуміло','Молодець!','тоді\nпотім','зачекай','стілець','дошка','двері','пальто','ноутбук','вікно','стіл','словник','аркуш паперу','ручка','можеш сказати це по літерах?','Можеш повторити, будь ласка?','Я не розумію.','Я не знаю.','Вибач за запізнення.','пізно','вчитися','дивитись / подивитись на...','також','в парку','хто','красивий','одружений / заміжня','самотній(я)','вік','пізніше','коли','як','яка твоя адреса?','яка в тебе електронна пошта?','чути','анкета','поштовий індекс','особиста інформація','розлучений(а)','вулиця','собака(@)','крапка','в котрій годині...?'];

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
