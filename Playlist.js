const request = require("request");
const cheerio = require("cheerio");

request("https://www.youtube.com/playlist?list=PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME",function(error,response,data){
    let ch = cheerio.load(data);
    let mp = ch(".style-scope.yt-formatted-string");
    console.log(mp);
})