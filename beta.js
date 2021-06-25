let pupp = require("puppeteer");

(async function(){
    const browser = await pupp.launch({
        headless : false,
        // slowMo : 100,
        defaultViewport : null,
        args : ["--start-maximized"],
    });

    const page = await browser.newPage();

    await page.goto("https://www.youtube.com/");
    await page.click("#search-input #search");
    await page.type("#search-input #search","Python Playlist");

    //   to press the search button
    await page.evaluate( function(){
        let search = document.querySelectorAll(".style-scope.ytd-searchbox");
        search[9].click();
    })
    await page.waitForSelector("#view-more a");

    // now to get all links of top 5 playlist;
    let impPlayLinks = await page.evaluate( function(){
        let allPlaylistLinks = document.querySelectorAll("#view-more a");
        let l = [];
        for( let i = 0; i<5; i++ ){
            let iLink = allPlaylistLinks[i].href;
            l.push(iLink);
        }
        return l;
    })
    console.log(impPlayLinks);

})();