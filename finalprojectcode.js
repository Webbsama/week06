var subjects, verbs, nouns;
subjects = ["Freddy", "Daphne", "Velma", "Shaggy", "Scooby", "Monte", "Roxy", "Chica", "Kira", "JoJo", "Samantha"];
verbs = ["yeet", "jump", "pushed", "walked", "ran", "talked", "laughs", "made", "bakes", "crawls", "sang"];
nouns = ["robot", "flashlight", "pants", "golf", "bowling", "dog", "chair", "pizza", "karoke", "racecar", "jacket"];

function randGen(){
    return Math.floor(Math.random()*5);
}

function sentence(){
    var rand = Math.floor(Math.random() * 10);
    var content = "The" + subjects[rand] + "" + verbs[rand] + "" + nouns[rand] + ".";
    document.getElementById('sentence').innerHTML = "&quot;" + content + "&quot";
};
sentence();