const firstReqUrl = "https://stackoverflow.com/questions?tab=votes&pagesize=50";
const secondReqUrl = "https://stackoverflow.com/questions?tab=votes&page=2";

getQuestionLink = () => {
    let questions = [];
    document.querySelectorAll("#questions .question-hyperlink").forEach((q) => { questions.push(q.href) });
    return questions;
}

getQuestionInfo = () => {

    let info = {};
    info.id = document.getElementById("question").dataset.questionid;
    info.href = document.querySelector("h1 > a").href;
    info.title = document.querySelector(".question-hyperlink").textContent;
    info.description = document.querySelector(".s-prose").textContent;
    info.questionComments = Array.from(document.querySelectorAll('.question .comment-copy')).map(el => el.innerText);
    let answersCount = document.getElementsByClassName('answer').length;//creates an array of answers along with their comments 
    info.answers = [];

    for (let i = 0; i < answersCount; i++) {
        let answer = document.getElementsByClassName('answercell')[i].innerText;
        let answersComments = Array.from(document.getElementsByClassName('answer')[i].getElementsByClassName('comment-copy'))
            .map(el => el.innerText)
        info.answers.push({ answer: answer, comments: answersComments });
    }


    return info;

};



exports.firstReqUrl = firstReqUrl;
exports.secondReqUrl = secondReqUrl;
exports.getQuestionLink = getQuestionLink;
exports.getQuestionInfo = getQuestionInfo;