let english = ['Hello, Hi','very good','What`s your name?','My name is...','I am...','Nice to meet you','Goodbye','Bye','See you on Friday','a house','a bike','a tree','tomorrow','instructions','read','listen','say','repeat','write','days of the week','monday','tuesday','wednesday','thursday','friday','saturday','sunday','a country','Where are you from?','I am from...','point to','nationality','in','a city',`I don't know`,'I think...',`It's`,'fantastic','match','nice','ask','a question','got it','Well done!','then','hold on','a chair','the board','the door','a coat','a laptop','a window','a table','a dictionary','a piece of paper','a pen','how do you spell it?','Can you repeat please?','I don`t understand.','I don`t know.','Sorry, I`m late.','late','study','look at...','too','at the park','who','good-looking','married','single','age','later','when','how','what`s your address?','what`s your email?','hear','an application form','a postcode','personal information','divorced / separated','a street','at','dot','what time...?','small','a key','an umbrella','a credit card','a debit card','a watch','glasses','an ID card','a passport','a wallet','a purse','a notebook','a camera','a brush','a tablet','singular','plural','a jacket','a magazine','a piece','in my bag','I have','a letter','difference','between','what','spell','How do you spell it?','the board','the door','a chair','a coat','a dictionary','open','close','stand up','sit down','please','go to page 10','can','Excuse me','What`s "телефон" in English?','I don`t understand','I don`t know','Sorry, I am late.','an artist','a journalist','on holiday','for work','have a reservation','surname','today','a restaurant','How can I help you?','That`s right.','the pair of glases','take out','switch off','electronic devices','I like it very much','sure','a souvenir','a flag','a hat','a T-shirt','a map','a postcard','a key ring','a mug','How much...?','expensive','You are welcome!','this','that','these','those','a fish','a market stall','cheap','quite','expensive','prefer','How would you like to pay?','in cash','by card','tips','Have a good one','pounds','pence (p)','dollars','euros','cents','a memory card','a one-way ticket','sure','a tourist','buy lunch','just','wait for me','together','in the park','a menu','a burger','chicken','a sandwich','cheese','tuma','an egg','a salad','a drink','mineral water','orange juice','coke / diet coke','beer','coffee / tea','order on the menu','next','Can I have a sandwich, please?','Anything else?','ice and lemon','There you go','Here you are','change','a barman','deli'];
let randomNumber;
let answerIsCorrect;
let ukraine = ['Привіт','дуже добре','як тебе звати?','мене звати...','я...','радий знайомству','до побачення','па',"до зустрічі в п'ятницю",'будинок','велосипед','дерево','завтра','інструкції','читати','слухати','казати','повторювати','писати','дні тижня','понеділок','вівторок','середа','четвер',"п'ятниця",'субота','неділя','країна','Звідки ти?','Я з...','показувати','національність','в\nу','місто','Я не знаю','Я думаю, що...','Це(є)','фантастично','співставляти','класно','запитувати','запитання','зрозуміло','Молодець!','тоді\nпотім','зачекай','стілець','дошка','двері','пальто','ноутбук','вікно','стіл','словник','аркуш паперу','ручка','можеш сказати це по літерах?','Можеш повторити, будь ласка?','Я не розумію.','Я не знаю.','Вибач за запізнення.','пізно','вчитися','дивитись / подивитись на...','також','в парку','хто','красивий','одружений / заміжня','самотній(я)','вік','пізніше','коли','як','яка твоя адреса?','яка в тебе електронна пошта?','чути','анкета','поштовий індекс','особиста інформація','розлучений(а)','вулиця','собака(@)','крапка','в котрій годині...?','маленький','ключ','парасоля','кредитна карта','дебетова карта','наручний годинник','окуляри','ID карта','паспорт','гаманець','жіночий гаманець / клатч','блокнот','фотоапарат','щітка для волосся','планшет','однина','множина','куртка','журнал','шматок','в моїй сумці','я маю / в мене є','буква','різниця / відмінність','між','що / який','вимовляти по буквах','як ти це вимовляєш по буквах?','дошка','двері','крісло','пальто','словник','відкрити','закрити','встати','сісти','будь ласка','перейти до сторінки 10','могти / вміти','Вибачте','Як "телефон" англійською?','Я не розумію','Я не знаю','Вибачте, я спізнився','художник','журналіст','в відпустці','по роботі','мати бронь','прізвище','сьогодні','ресторан','Чим я можу вам допомогти?','Вірно / Точно','одні окуляри','виймати','виключати','електронні прилади','мені це дуже подобається','звичайно','сувенір','прапор','капелюх / шапка','футболка','карта','листівка','брилок','чашка','Скільки...?','дорогий','Будь ласка!','цей','той','ці','ті','риба','прилавок на ринку','дешево','досить','дорого','надавати перевагу','як би ви хотіли оплатити?','готівкою','картою','чайові','гарного дня','фунти','пенси','долари','євро','центи',"карта пам'яті",'квиток в одну сторону','звичайно','турист','купляти обід','просто, лише','зачекай на мене','разом','в парку','меню','бургер','курка','бутер','сир','тунець','яйце','салат','напій','мінеральна вода','апельсиновий сік','кола / дієтична кола','пиво','кава / чай','замовляти в меню','наступний','Можна мені бутер, будь ласка?','Щось ще?','лід та лимон','Ось тримайте','Ось','здача','бармен','гастрономія, делікатеси'];

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
    console.log(`${english.length}\n${ukraine.length}`);
  }
}

function askInUkraine() {
    while (ukraine.length > 0) {
      randomNumber = Math.floor(Math.random() * ukraine.length);
      alert(`${english.length} || ${ukraine.length}` + "\n" + ukraine[randomNumber]);
      answerIsCorrect = confirm(english.length + "\n" + ukraine[randomNumber] + "\n" + english[randomNumber]);
      if (answerIsCorrect) {
        english.splice(randomNumber, 1);
        ukraine.splice(randomNumber, 1);
      }
      console.log(`${english.length}\n${ukraine.length}`);
    }
};
