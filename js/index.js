let english = ["nested","another","indented","inside","outside","place","second","first","third","destination","into","own","existing","employee","describing","character","highlighted","remove","missing","would","those","below","underneath","nest","called"];
let randomNumber;
let answerIsCorrect;
let ukraine = ["вкладений","iнший","з відступом","всередині","зовні","місце","другий","перший","третій","пункт призначання","в","власний","існуючі","працівник","описуючи","характер","виділено","видалити","відсутній","би","ті","нижче","нижче","гніздо","званий"];

let onEnglish = confirm("Запитувати на англійській мові?");

if (onEnglish) {
  askInEnglish();
} else {
  askInUkraine();
}
alert("Вітаємо, ви вивчили всі слова!\nСongratulations, you have learned all the words!")

function askInEnglish() {
  while (english.length > 0) {
    randomNumber = Math.floor(Math.random() * english.length);
    alert(english[randomNumber]);
    answerIsCorrect = confirm(english[randomNumber] + "\n" + ukraine[randomNumber]);
    if (answerIsCorrect) {
      english.splice(randomNumber, 1);
      ukraine.splice(randomNumber, 1);
    }
  }
}

function askInUkraine() {
    while (ukraine.length > 0) {
        randomNumber = Math.floor(Math.random() * ukraine.length);
        alert(ukraine[randomNumber]);
        answerIsCorrect = confirm(ukraine[randomNumber] + "\n" + english[randomNumber]);
        if (answerIsCorrect) {
          english.splice(randomNumber, 1);
          ukraine.splice(randomNumber, 1);
        }
      }
};
