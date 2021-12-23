let diction = {
  words: {
    apple: "яблоко",
    house: "дом",
    mouse: "мышь",
  },
  words1: {
    яблоко: "apple",
    дом: "house",
    мышь: "mouse",
  },
  ball: 0,
  errors: 0,
  languag: function () {
    lan = prompt("Input enRu or ruEn ");
  },
  language: (language = ["enRu", "ruEn"]),
  langua: function () {
    this.languag();
    this.languagecheck();
  },
  languagecheck: function () {
    if (lan == language[0]) {
      alert("from english to  russian");
      this.enRu();
    } else {
      alert("from russian to english");
      this.ruEn();
    }
  },
  enRu: function () {
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
  ruEn: function () {
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
  allwords: function () {
    for (word in this.dictianary()) {
      document.write(`${key} : ${arr[key]}`);
    }
  },
  yourscore: function () {
    document.write(`Your score: ${this.ball} <br>`);
    document.write(`Your mistakes: ${this.errors}`);
  },
};
diction.langua();
