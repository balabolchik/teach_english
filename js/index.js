let english = ["nested","another","indented","inside","outside","place","second","first","third","destination","into","own","existing","employee","describing","character","highlighted","remove","missing","would","those","below","underneath","nest","called","unordered","bulleted","item","stand","between","just","useful","spot","point","assemble","snippet","contain","more","also","give","even","such","simple","empty","same","way","them","does","will","bullet","before","put","sign","right","which","goes","appear","want","know","highest","learn","so","far","access","usually","keep","lowercase","hyphen","each","typically","visible","most","common","given","take","takes","quotes","happens","multiple","space","instead","fine","both","value","lead","linking","broken","slice","splice","replace","awesome","only","move","make","making","great","excellent","since","something","made","property","there","change","set","semicolon","along","equal","assembling","important","lot","size","thickness","measure","specify","precise","follow","font","kind","possible","italicize","bold","weight","belong","thicker"];
let randomNumber;
let answerIsCorrect;
let ukraine = ["вкладений","iнший","з відступом","всередині","зовні","місце","другий","перший","третій","пункт призначання","в","власний","існуючі","працівник","описуючи","характер","виділено","видалити","відсутній","би","ті","нижче","нижче","гніздо","званий","невпорядкований","маркований","пункт","стояти","між","просто","корисний","місце\nпляма","точка","зібрати\nзбирати","фрагмент","містять\nмістити","більше","також","дати","навіть","такі","простий","порожній\nспорожнити","те саме\nто ж","шлях","їх","робить","буде","куля","раніше\nперед тим","поставити\nставити","знак","правильно\nправо","який\nкотрий","йде","з'являються\nз'явиться","хочуть\nхотіти","знати","найвищий","вчитися","тому\nтак\nотже","далеко","доступ","зазвичай","тримати","мала літера","дефіс","кожен","типово","видно\nвидимий","більшість\nнайбільш","загальний","дано","приймати\nбрати\nвзяти","бере\nприймає","лапки","трапляється\nвідбувається","множинні\nмножинний","простору\nпростір","замість","чудово","обидва","значення","вести","зв'язування\nзшивання","зламаний\nзламані","скибочка","зрощення, зрощування","заміщати, заміщувати","дивовижний, страхітливий","тільки","рух, рухатися","зробити","виготовлення","чудово","чудовий","оскільки","щось","зроблений, зроблено","властивість","там","змінити","встановити","крапка з комою","разом","рівний","складання","важливо","багато","розмір","товщина","міра","вкажіть","точний","слідувати","шрифт","вид","можливо","курсивом","сміливий, напівжирний","вага","належати, належать","товстіший"];

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
