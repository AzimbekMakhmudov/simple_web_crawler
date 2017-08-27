var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

request("https://championat.asia/oz/uzb/", function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }
  console.log("Status code: " + response.statusCode);

  var bod = cheerio.load(body);

  bod('.news-list > .news-list-item').each(function( index ) {
    var title = bod(this).find('a.main-link').text().trim();
    var summary = bod(this).find('.summary').text().trim();
    console.log("Title: " + title);
    console.log("Summary: " + summary);
    fs.appendFileSync('crawlerData.txt', title + '\n' + summary + '\n');
  });

});