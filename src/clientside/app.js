const express = require('express');
const fs = require('fs');
const app = express();
const mainRouter = require('./routers/mainRouter');

app.set('view engine', 'pug');
app.use('/', mainRouter);
app.use('/static', express.static('public'))
let liveData;

(async () => {

    const readQuestions = await fs.readFileSync('../../data/questions.json', { encoding: "utf8" });
    await console.log("questions ready");

    if (await fs.existsSync("../../data/questions.json")) {
        const read = await fs.readFileSync('../../data/questions.json', { encoding: "utf8" });
        liveData = await JSON.parse(read);

        app.locals.variable_you_need = liveData;
    }
})();

app.listen(5000, () => {
    console.log("client listening 5000");
});
