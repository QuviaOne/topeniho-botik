const token = process.argv[2];
const Discord = require('discord.js');
const client = new Discord.Client();
const responses = require('./responses.json');


client.on("message", msg => {
    for (var a in responses.matches) {
        if (msg.content == a) msg.channel.send(responses.mathes[a]).catch(e => {
            console.log(e);
        });
    }
    for (a in responses.includes) {
        if (msg.content.includes(a)) msg.channel.send(responses.matches[a]).catch(e => {
            console.log(e);
        });
    }
    for (a in responses.startsWith) {
        if (msg.content.startsWith(a)) msg.channel.send(responses.startsWith[a]).catch(e => {
            console.log(e);
        });
    }
    for (a in responses.endsWith) {
        if (msg.content.endsWith(a)) msg.channel.send(responses.endsWith[a]).catch(e => {
            console.log(e);
        });
    }
    for (a in responses.matchesUser) {
        if (msg.author.username == a) msg.channel.send(responses.matchesuser[a]).catch(e => {
            console.log(e);
        });
    }
})

client.on("ready", () => {
    console.log("Logged in.")
})

client.login(token);