const Discord = require('discord.js')
const client = new Discord.Client();
triviaCount = 0;
lastQuestion = -1;
scores = [];
const { prefix, token } = require("./config.json");
const questionPool = require('./questionPool')

const skipCount = []




questions = [...questionPool]


client.on("ready", () => {
  console.log("Connected as " + client.user.tag);

  client.user.setActivity("$yarışma", { type: "PLAYING" });

  client.guilds.cache.forEach((guild) => {
    guild.channels.cache.forEach((channel) => {});

  });

});

client.on("message", (receivedMessage) => {
  if (receivedMessage.author == client.user) {
    return;
  }
  if (receivedMessage.content.startsWith(prefix)) {
    processCommand(receivedMessage);
  }
});

function processCommand(receivedMessage) {
  let fullCommand = receivedMessage.content.substr(1);
  let splitCommand = fullCommand.split(" ");
  let primaryCommand = splitCommand[0];
  let arguments = splitCommand.slice(1);

  if (primaryCommand === "yarışma" ) {
    triviaCommand(arguments, receivedMessage);
    trivia = true;
  }else{
    receivedMessage.channel
    .send(`Ne diyon birader? ${receivedMessage.author}`)
  }
}

function triviaCommand(arguments, receivedMessage) {
 trivia = false

  if (arguments.length == 0) {
    trivia = true;
    receivedMessage.channel
      .send(`Yarışma başlıyor!!!! ⚽⚽⚽ :three:`)
      .then((msg) => {
        setTimeout(function () {
          msg.edit(`Yarışma başlıyor!!!! ⚽⚽ :two:`);
        }, 1000);
        setTimeout(function () {
          msg.edit(`Yarışma başlıyor!!!! ⚽ :one:`);
        }, 2000);
        setTimeout(function () {
          msg.edit(
            `Yarışma başladı!!!! @everyone İyi şanslar... :four_leaf_clover:  `
          );
        }, 3000);
      });

      receivedMessage.channel
      .send(' `Her soru 5 puandır. Eğer iki kişi "geç" yazarsa mevcut soru geçilir. Geçilen sorular haricinde toplam 10 soru sorulacaktır. Görselli sorularda, görselin yüklenmesi zaman alabilir. Yarışmayı en çok soruya doğru cevap veren kazanır, eğer iki kişi aynı sayıda soru bildiyse, yüce bot kimin kazandığına karar verir. `' + `Toplam soru sayısı ${questions.length}`)
  }

  setTimeout(function () {
    if (trivia) {
        triviaCount = 0;

        questions = [...questionPool];
        scores = [];
      askQuestion(receivedMessage);
    }
    else {
        receivedMessage.channel.send(
            `Yarışmamız burada bitiyor, katılan herkese +rep... `
          );
  
          triviaCount = 0;
  
          questions = [...questionPool];
          scores = [];
    }
  }, 3500);
}




const askQuestion = function (receivedMessage) {
   
  skipCount.splice(0, skipCount.length)


  let questionNumber = Math.floor(Math.random() * Math.floor(questions.length));
  if(questions[questionNumber].photo){


 let questionPhoto = new Discord.MessageAttachment(questions[questionNumber].photo)



 receivedMessage.channel.send(questionPhoto)

  }
  receivedMessage.channel.send(`${questions[questionNumber].question} `);
  answer = questions[questionNumber].answer;

  questions.splice(questionNumber, 1);

  client.on("message", (receivedMessage) => {
    if (receivedMessage.author == client.user) {
   return }

    if (receivedMessage.content.toLowerCase() == `geç`){

      if(skipCount.length === 0) {
    skipCount.push(`${receivedMessage.author.username}`)
     receivedMessage.channel.send(`Geçme sayacı ${skipCount.length}/2 (${skipCount}) `)
     receivedMessage.content = `${Math.random()}`
      }else{
        skipCount.filter(person=> {
          if(person != receivedMessage.author.username ){
            skipCount.push(`${receivedMessage.author.username}`)
            receivedMessage.channel.send(`Geçme sayacı ${skipCount.length}/2 (${skipCount})`)
        
          }
        })
       

      }



      
    

      if(skipCount.length > 1){

        askQuestion(receivedMessage)
      }
    
    }

    

    if (receivedMessage.content.toLowerCase() == `${answer.toLowerCase()}`) {
      receivedMessage.channel.send(
        `${receivedMessage.author} vurdu gol oldu! :clap:  Doğru cevap, ${answer}... (+5 puan) `
      );

      scoreTable(receivedMessage.author.username);

     

      answer = '';

      if (triviaCount < 7) {
        receivedMessage.channel
          .send(`${triviaCount + 2}. soru geliyor... ⚽⚽⚽ :three:`)
          .then((msg) => {
            setTimeout(function () {
              msg.edit(`${triviaCount + 2}. soru geliyor... ⚽⚽ :two:`);
            }, 1000);
            setTimeout(function () {
              msg.edit(`${triviaCount + 2}. soru geliyor... ⚽ :one:`);
            }, 2000);
            setTimeout(function () {
              msg.edit(`${triviaCount + 2}. soru ⚽ :point_down:`);
            }, 3000);
            setTimeout(function () {
              askQuestion(receivedMessage);
              triviaCount++;
            }, 3000);
          });
      } else {
        Array.prototype.sortBy = function(p) {
            return this.slice(0).sort(function(a,b) {
              return (a[p] > b[p]) ? -1 : (a[p] < b[p]) ? 1 : 0;
            });
          }

          const result = scores.sortBy('score')

        receivedMessage.channel.send(
            ':trophy: :trophy: :trophy: Yarışmanın kazananı :trophy: :trophy: :trophy:' + ' ```HTTP\n' +  result[0].name + '```' + '  Helaaaal!! '
          );
        receivedMessage.channel.send(
          `Yarışmamız burada bitiyor, katılan herkese +rep... `
        );

        triviaCount = 0;

        questions = [...questionPool];
        scores = [];
 trivia = false

      }
    }
  });
};

const scoreTable = function (uName) {

if(scores.length == 0) {
    scores.push({ name: uName, score: 5 });
}else{
   
    function findSame(person) {
        return person.name == uName;
    }

    let result = scores.findIndex(findSame)

if(result > -1){
    scores[result].score += 5
}else {
    scores.push({ name: uName, score: 5 });
}

}



  

};

client.login(process.env.BOT_TOKEN);