book = {
    title: "Teenage Mutant Ninja Turtles: The Last Ronin",
    author: "Kevin Eastman",
    year: 2020,
    getSummary: function () {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`
    }
}

book.genre = "Action/Adventure";
delete book.year;

console.log(book.getSummary());
console.log(book);