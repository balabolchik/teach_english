let english = ["nested","another","indented","inside","outside","place","second","first","third","destination","into","own","existing","employee","describing","character","highlighted","remove","missing","would","those","below","underneath","nest","called","unordered","bulleted","item","stand","between","just","useful","spot","point","assemble","snippet","contain","more","also","give","even","such","simple","empty","same","way","them","does","will","bullet","before","put","sign","right","which","goes","appear"];
let randomNumber;
let answerIsCorrect;
let ukraine = ["вкладений","iнший","з відступом","всередині","зовні","місце","другий","перший","третій","пункт призначання","в","власний","існуючі","працівник","описуючи","характер","виділено","видалити","відсутній","би","ті","нижче","нижче","гніздо","званий","невпорядкований","маркований","пункт","стояти","між","просто","корисний","місце\n пляма","точка","зібрати\n збирати","фрагмент","містять\n містити","більше","також","дати","навіть","такі","простий","порожній\n спорожнити","те саме\n то ж","шлях","їх","робить","буде","куля","раніше\nперед тим","поставити\nставити","знак","правильно\nправо","який\nкотрий","йде","з'являються\nз'явиться"];

let onEnglish = confirm("Запитувати на англійській мові?");
console.log(`${english.length}\n${ukraine.length}`);
if (onEnglish) {
  askInEnglish();
} else {
  askInUkraine();
}
alert("Вітаємо, ви вивчили всі слова!\nСongratulations, you have learned all the words!")

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
