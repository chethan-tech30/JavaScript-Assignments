
var quotesArray = [
    "Don’t take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "You have to dream before your dreams can come true.",
    "I wake up every morning and think to myself, ‘how far can I push this company in the next 24 hours.",
    "Man needs difficulties in life because they are necessary to enjoy the success.",
    "If people are doubting how far you can go, go so far that you can’t hear them anymore.",
    "Books become permanent companions. Sometimes, they are born before us; they guide us during our life journey and continue for many generations.",
    "The secret of getting ahead is getting started.",
    "Its very easy to defeat someone, but it is very hard to win someone.",
    "Do one thing every day that scares you.",
    "All Birds find shelter during a rain. But Eagle avoids rain by flying above the Clouds. Problems are common,but attitude makes the difference.",
    "Whatever you are, be a good one.",
    "While children are struggling to be unique, the world around them is trying all means to make them look like everybody else.",
    "Do what you feel in your heart to be right – for you’ll be criticized anyway.",
    "LIFE always offers you a second chance. Its called tomorrow.",
    "Happiness is not something ready made. It comes from your own actions.",
    "The best revenge is to improve yourself.",
    "Hold the vision, trust the process.",
    "Silence and Smile are two powerful tools. Smile to slove problems and silence to avoid problems.",
    "No one is to blame for your future situation but yourself. If you want to be successful, then become Successful."];

function randomQuotesGenerator() {
    var randomQuotes = Math.floor(Math.random() * (quotesArray.length));
    document.getElementById('quotesDisplay').innerHTML = quotesArray[randomQuotes];
}