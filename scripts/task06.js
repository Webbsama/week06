
//Create my subjects list for the sentences.
const subjects = ["Freddy", "Daphne", "Velma", "Shaggy", "Scooby", "Monte", "Roxy", "Chica", "Kira", "JoJo", "Samantha"];

//Create my verb list for the sentences.
const verbs = ["yeet", "jump", "pushed", "walked", "ran", "talked", "laughs", "made", "bakes", "crawls", "sang"];

//Create my nouns list for the sentences.
const nouns = ["robot", "flashlight", "pants", "golf", "bowling", "dog", "chair", "pizza", "karoke", "racecar", "jacket"];

//Blank variables for my functions to return things into. 
let subject;
let verb;
let noun;

//Create three functions that grabs random words from each of my arrays.
//Starting with subjects.
function getRandomSubject() {
    //get the random value
    const randomIndex1 = Math.floor(Math.random() * subjects.length);

    //get random subject
    const subject = subjects[randomIndex1];

    //pass the subject back through
    return subject;
}

function getRandomVerb() {
    
    const randomIndex2 = Math.floor(Math.random()* verbs.length);

    const verb = verbs[randomIndex2];

    return verb;
}

function getRandomNoun() {

    const randomIndex3 = Math.floor(Math.random()*nouns.length);

    const noun = nouns[randomIndex3];

    return noun;
}

//Create a function that brings my sentence together. 
function createSentence() {

    //Sentence is subject + verb + noun.
    const sentence = subject + verb + noun;

    return sentence;
}

document.querySelector("#sentence").addEventListener('click', createSentence());