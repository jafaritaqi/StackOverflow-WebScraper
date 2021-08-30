const puppeteer = require('puppeteer');
const fs = require('fs');

const waitUntil = { waitUntil: 'networkidle2' };
const { firstReqUrl, secondReqUrl, getQuestionLink, getQuestionInfo } = require('./crawlHelper');

(async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(firstReqUrl, waitUntil);
    let quest1 = await page.evaluate(getQuestionLink);

    await page.goto(secondReqUrl, waitUntil);
    let quest2 = await page.evaluate(getQuestionLink);
    let questionData = quest1.concat(quest2);

    let questionInfos = [];

    for (let i = 0; i < questionData.length; i++) {
        const go = questionData[i];

        await page.goto(go, waitUntil);

        let questionInfo = await page.evaluate(getQuestionInfo);

        questionInfos.push(questionInfo);

    }
    await browser.close()

    fs.writeFile("../../data/questions.json", JSON.stringify(questionInfos), () => {
        console.log("file successfully created!");
    });

})();