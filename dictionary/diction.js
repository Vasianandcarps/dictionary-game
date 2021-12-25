function Diction(languageInput) {    
    this.ball = 0;
    this.errors = 0;
    this.languageInput = languageInput;
    this.languageCheck = function (languageInput) {
        let language = ["enRu", "ruEn"];
        if (languageInput == language[0]) {
            alert("from english to  russian");
            this.enRu();
          } else {
            alert("from russian to english");
            this.ruEn();
          }
        },
    this.enRu = function(){
        let translate;
        for (word in this.words) {
          alert("Word: " + word);
          translate = prompt("Input translation or -'!'");
          if (translate == "!") break;
          if (translate == this.words[word]) {
            alert("Right!");
            this.ball++;
          } else {
            alert("Wrong!");
           this.errors++;
          }
        }
        this.yourscore();
    },
    this.ruEn = function(){
        let translate;
        for (word1 in this.words1) {
          alert("Word: " + word1);
          translate = prompt("Input translation or -'!'");
          if (translate == "!") break;
          if (translate == this.words1[word1]) {
            alert("Right!");
    this.ball++;
          } else {
            alert("Wrong!");
   this.errors++;
          }
        }
        this.yourscore();
      },
this.yourscore= function () {
        document.write(`Your score: ${this.ball} <br>`);
        document.write(`Your mistakes: ${this.errors}`);
      },
this.allwords = function () {
    for (word in this.dictianary()) {
      document.write(`${key} : ${arr[key]}`);
    }
  },
  this.toString = function () {
    return document.write(`  xc <br>`);
  
},
this.words =  {
  apple: "яблоко",
  house: "дом",
  mouse: "мышь",
},
this.words1 =  {
  яблоко: "apple",
  дом: "house",
  мышь: "mouse",
}
};

  
    let first = new Diction(prompt("input language"));
    first.languageCheck();
