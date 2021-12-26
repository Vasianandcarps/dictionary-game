function Diction(arr) {    
    this.ball = 0;
    this.errors = 0;
    this.translation = function(arr){
        let translate;
        for (word in arr) {
          alert("Word: " + word);
          translate = prompt("Input translation or -'!'");
          if (translate == "!") break;
          if (translate == arr[word]) {
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
this.allwords = function (arr) {
    for (word in arr) {
      document.write(`${word} : ${arr[word]} <br>`);
    }
  }

};
let words =  {
  apple: "яблоко",
  house: "дом",
  mouse: "мышь",
};
let words1 =  {
  яблоко: "apple",
  дом: "house",
  мышь: "mouse",
};
    let first = new Diction(words);
    let second = new Diction(words1)
