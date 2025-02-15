const express = require('express');
const cors = require('cors');

// Initialize the app
const app = express();
const port = process.env.PORT || 3000; 

// Enable CORS
app.use(cors());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});


// Middleware to parse JSON bodies from requests
app.use(express.json());

const corsOptions = {
  origin: '*', // Replace with your domain or use "*" to allow all domains
  methods: ['GET', 'POST']
};
app.use(cors(corsOptions));


// Magic 8-Ball responses
const responses = [
    "Yes, definitely",
    "No way",
    "Can't predict now",
    "Try again",
    "Definitely not",
    "You may rely on it",
    "Outlook not so good",
    "Yes",
    "Most likely",
    "Very doubtful",
    "Signs point to yes",
    "Yes, in the future",
    "No",
    "Maybe",
    "It is certain",
    "Don't count on it",
    "Better not tell you now",
    "Absolutely",
    "Ask again later, please",
    "Concentrate and ask again",
    "Yes, but not soon",
    "Cannot predict now",
    "Certainly not",
    "The future is hazy",
    "Most likely not",
    "Without a doubt",
    "No answer for now",
    "Very likely",
    "Outlook is unclear",
    "Ask someone else",
    "It seems so",
    "Unlikely",
    "My sources say no",
    "Chances are good",
    "Don't hold your breath",
    "I have my doubts",
    "The answer is hazy",
    "Future looks bright",
    "Cannot say",
    "All signs point to yes",
    "I wouldn’t bet on it",
    "Sure thing",
    "The answer is yes",
    "Try again later",
    "Hard to say",
    "No, try again",
    "The stars say yes",
    "The answer is unclear",
    "Don't ask me",
    "You can count on it",
    "Try again in a moment",
    "It’s very likely",
    "It’s not looking good",
    "Ask again after some time",
    "The outlook is favorable",
    "Not likely",
    "It will happen soon",
    "Chances are slim",
    "It’s too early to tell",
    "Yes, but proceed with caution",
    "Most definitely",
    "It seems uncertain",
    "Definitely, yes",
    "Not in the near future",
    "It's a no for now",
    "Maybe later",
    "You are on the right track",
    "It looks good",
    "I’m afraid not",
    "Ask again in a week",
    "Yes, absolutely",
    "It’s looking doubtful",
    "All signs point to no",
    "Everything points to yes",
    "It's possible",
    "It’s going to be tricky",
    "Things are unclear",
    "The outlook is bright",
    "Only time will tell",
    "The answer is probably yes",
    "It’s unclear right now",
    "It could go either way",
    "There’s a strong possibility",
    "Don't make assumptions yet",
    "The chance is low",
    "It’s going to take time",
    "Most likely, yes",
    "The outlook is unclear",
    "You’re on the right path",
    "Don’t bet on it",
    "It’s not going to happen",
    "I can't say for sure",
    "The signs are not promising",
    "It’s highly possible",
    "Better luck next time",
    "The situation is still evolving",
    "The answer is in doubt"
];

// API endpoint for Magic 8-Ball (GET method)
app.get('/magic8ball', (req, res) => {
  const randomResponse = responses[Math.floor(Math.random() * responses.length)];
  res.json({ answer: randomResponse });
});

// API endpoint for Magic 8-Ball (POST method)
app.post('/magic8ball', (req, res) => {
    const userQuestion = req.body.question; 
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    res.json({
      question: userQuestion,
      answer: randomResponse
    });
});
  
// Start the server
app.listen(port, () => {
  console.log(`Magic 8-Ball API is running at http://localhost:${port}`);
});
