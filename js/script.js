var quotes = [
  {
    quote:"Sometimes when you win, you really lose, and sometimes when you lose, you really win, and sometimes when you win or lose, you actually tie, and sometimes when you tie, you actually win or lose.", 
    movie:"White Men Can't Jump"
  }, 
  {
    quote:"Frankly, my dear, I don't give a damn.", 
    movie:"Gone with the Wind"
  },
  {
  	quote:"You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am.",
  	movie:"On the Waterfront"
  },
  {
  	quote:"May the Force be with you.",
  	movie:"Star Wars"
  },
  {
  	quote:"I love the smell of napalm in the morning.",
  	movie:"Apocalype Now"
  },
  {
  	quote:"Show me the money!",
  	movie:"Jerry Maguire"
  },
  {
  	quote:"My mama always said, life was like a box of chocolates.  You never know what you're gonna get.",
  	movie:"Forrest Gump"
  },
  {
  	quote:"I see dead people.",
  	movie:"The Sixth Sense"
  },
  {
  	quote:"There's no crying in baseball!",
  	movie:"A League of Their Own"
  },
  {
  	quote:"Nobody puts baby in a corner.",
  	movie:"Dirty Dancing"
  }, 
  {
  	quote:"They may take our lives, but they will never take away our freedom!",
  	movie:"Braveheart"
  },
   {
  	quote:"I'm just one stomach flu away from my goal weight!",
  	movie:"The Devil Wears Prada"
  },
   {
  	quote:"Magic mirror on the wall, who is the fairest one of all?",
  	movie:"Snow White and the Seven Dwarves"
  },
   {
  	quote:"Wax on, wax off.",
  	movie:"The Karate Kid"
  },
   {
  	quote:"Good morning, Vietnam!",
  	movie:"Good Morning, Vietnam"
  },
   {
  	quote:"Help me, Obi-Wan Kenobi. You're my only hope.",
  	movie:"Star Wars"
  },
   {
  	quote:"You is kind. You is smart. You is important.",
  	movie:"The Help"
  },
   {
  	quote:"Everytime a bell rings, an angel gets his wings.",
  	movie:"It's a Wonderful Life"
  },
   {
  	quote:"The greatest trick the devil ever pulled was convincing the world he didn't exist.",
  	movie:"The Usual Suspects"
  },
   {
  	quote:"Mother, very peculiar things have happened since I started to wear this suit. I can't seem to make these clothes do anything Father wouldn't do.",
  	movie:"Life with Father"
  }
 ];
var currentQuote, currentMovie, index;
var usedIndex = [];
/* test length of usedIndex array to see if all quotes have been used;
reset usedIndex if full and call randomIndex() again */
function testLength(){
  if(usedIndex.length === quotes.length){
    usedIndex = [];
    randomIndex();
  }
}
/* Set index to random number if the number is not found in the usedindex
array. If index is not set, call randomIndex again. */
function setIndex(){
  if(!usedIndex.includes(randomNum)){
    index = randomNum;
    usedIndex.push(randomNum); 
  }else{
    randomIndex();
  }
}
// find random index number to use in newQuote()
function randomIndex(){
  testLength();
  var randomNum = Math.floor(Math.random() * quotes.length);
  setIndex();
}
// display new quote 
function newQuote(){
  randomIndex();
  currentQuote = quotes[index].quote;
  currentMovie = quotes[index].movie;

  $('#quote').html(currentQuote);
  $('#movie').html(currentMovie); 
};
// display tweet
function tweetQuote(){
  var tweetLength = currentQuote.length + currentMovie.length + 3;
  var endQuote = currentQuote.length - (tweetLength - 140) - 4;
  var shortQuote = currentQuote.slice(0, endQuote);

  currentQuote = encodeURI(currentQuote);
  currentMovie = encodeURI(currentMovie);

  return tweetLength > 140 ? window.open("https://twitter.com/intent/tweet?text=" + shortQuote + "... " + " - " + currentMovie) : window.open("https://twitter.com/intent/tweet?text=" + currentQuote + " - " + currentMovie);
};

$(document).ready(function(){
  newQuote();
  $('#getQuote').on("click", function(){
  	newQuote();
  });
  $('#shareQuote').on("click", function(){
  	tweetQuote();
  });
});