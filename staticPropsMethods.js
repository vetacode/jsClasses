//Static properties and methods
class User {
  static staticMethod() {
    console.log(this === User);
  }
}

User.staticMethod(); // true

//function comparing articles
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

// usage
let articles = [
  new Article('HTML', new Date(2019, 1, 1)),
  new Article('CSS', new Date(2019, 0, 1)),
  new Article('JavaScript', new Date(2019, 11, 1)),
];

articles.sort(Article.compare);

console.log(articles[0].title); // CSS

{
  //Create todays articles update
  class Article {
    constructor(title, date) {
      this.title = title;
      this.date = date;
    }

    static createTodays() {
      // remember, this = Article
      return new this("Today's digest", new Date().toLocaleDateString('id-ID'));
    }
  }

  let article = Article.createTodays();

  console.log(article.title); // Today's digest
  console.log(article.date); // Today's digest
}
