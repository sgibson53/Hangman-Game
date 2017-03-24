var wins = 0;
var losses = 0;

var game = {
    guessesRemaining: 10,
    wordBank: [
        "Sound of Silence",
        "Homeward Bound",
        "Like a Rock",
        "Mrs Robinson",
        "Bridge Over Troubled Water",
        "Richard Cory",
        "For Emily Wherever I May Find Her",
        "America",
        "The Boxer",
        "Cecilia",
        "April Come She Will",
        "A Hazy Shade of Winter",
        "At the Zoo",
        "Leaves That Are Green",
        "Scarborough Fair",
        "Song for the Asking"
    ],
    currentWord: this.newWord(),
    newWord: function() {
        return this.wordBank[Math.floor(Math.random()*(this.wordBank.length-1)+0)]
    },
    reset: function() {
        this.guessesRemaining = 10;
        this.newWord();
    }
}