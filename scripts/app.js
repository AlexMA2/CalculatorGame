$(function () {
    let counterStart = 5;
    let time = 60;
    let numQuestion = 1;

    let questions = [];
    let correctAnswers = [];
    let answers = [];
    let resultsOfAnswers = [];

    let startingGame;
    let gameTime;
    const oper = ['+', '-', 'x', '÷']

    const fillArrayQuestions = () => {

        for (let i = 0; i < 999; i++) {
            const ques = createQuestion();
            questions.push(ques[0]);
            correctAnswers.push(ques[1]);
        }

        startingGame = setInterval(decreasing, 1000);
    }

    const createQuestion = () => {
        let operRandom = Math.floor(Math.random() * 4);
        const operator = oper[operRandom];
        let num1 = 0;
        let num2 = 0;
        let result = 0;
        if (operRandom == 0) {
            num1 = Math.floor(Math.random() * 199 + 1);
            num2 = Math.floor(Math.random() * 199 + 1);
            result = num1 + num2;
        }
        else if (operRandom == 1) {
            num2 = Math.floor(Math.random() * 199 + 1);
            result = Math.floor(Math.random() * 199 + 1);
            num1 = num2 + result;
        }
        else if (operRandom == 2) {
            num1 = Math.floor(Math.random() * 29 + 1);
            num2 = Math.floor(Math.random() * 29 + 1);
            result = num1 * num2;
        }
        else if (operRandom == 3) {
            num2 = Math.floor(Math.random() * 18 + 2);
            num1 = num2 * Math.floor(Math.random() * 18 + 2);
            result = num1 / num2;
        }

        const ques = num1.toString() + " " + operator.toString() + " " + num2.toString() + " = ";

        return [ques, result];
    }

    const decreasing = () => {
        if (counterStart > 1) {
            counterStart -= 1;
            $(".counter-start").text(counterStart);
        }
        else {
            clearInterval(startingGame);
            $(".start").removeClass("active");
            $(".calculator-game").addClass("active");
            $('.question-number').text('#' + numQuestion);
            $('#problem').text(questions[numQuestion - 1]);
            $(".counter-time").text(time);
            gametime = setInterval(decreasingTimeGame, 1000);
        }

    }

    const decreasingTimeGame = () => {
        if (time > 0) {
            time -= 1;
            $(".counter-time").text(time);
        }
        else if (time == 0) {
            time -= 10;
            clearInterval(gameTime);
            $(".calculator-game").removeClass("active");
            $(".results").addClass("active");
            finishGame();
        }
    }

    const sendAnswer = (ans) => {
        answers.push(ans);
        numQuestion += 1;
        $('.question-number').text('#' + numQuestion);
        $('#problem').text(questions[numQuestion - 1]);
        $('#response').text('');
    }

    $('#btn-enter').on('click', function () {
        if ($('#response').text().length != 0) {
            sendAnswer($('#response').text());
        }
    });

    $('body').on('keydown', function (ev) {

        if (!isNaN(ev.key)) {
            if ($('#response').text().length < 4) {
                $('#response').text($('#response').text() + ev.key);
            }

        }
        else if (ev.key === "Enter") {
            if ($('#response').text().length != 0) {
                sendAnswer($('#response').text());
            }
        }
        else if (ev.key === "Backspace" || ev.key === "Delete") {
            let texto = $('#response').text();
            $('#response').text(texto.substring(0, texto.length - 1));
        }

    });

    const checkAnswers = () => {
        let counterCorrects = 0;
        for (let i = 0; i < numQuestion - 1; i++) {
            if (correctAnswers[i] == answers[i]) {
                counterCorrects = counterCorrects + 1;
                resultsOfAnswers[i] = 1;
            }
            else {
                resultsOfAnswers[i] = 0;
            }
        }

        return [counterCorrects, numQuestion - 1 - counterCorrects];
    }

    const finishGame = () => {
        $("#total").text(numQuestion - 1);

        const res = checkAnswers();
        createTableDetails();        

        $("#corrects").text(res[0]);
        $("#incorrects").text(res[1]);
        loadResults(res[0], res[1]);
        $(".paper").slideDown('slow');
    }

    fillArrayQuestions();

    $(".start-again").on('click', function () {
        window.location.reload();
    });

    $(".return").on('click', function () {
        window.location.assign('index.html');
    });

    const loadResults = (ac, ai) => {

        setTimeout(() => {
            $("#first").animate({
                height: '56px',
            }, 1000);

        }, 100);

        setTimeout(() => {
            $("#second").animate({
                height: '56px',
            }, 1000);
        }, 1100);

        setTimeout(() => {
            $("#third").animate({
                height: '56px',
            }, 1000);
        }, 2100);

        setTimeout(() => {
            $(".score").animate({
                height: '120px',
            }, 1000);
        }, 3100);

        let counter = 0;

        setTimeout(() => {
            let points = calcPoints(ac, ai);
            let inte = setInterval(() => {
                if (counter < 10) {
                    counter++;
                    $("#score-id").text(Math.floor(Math.random() * 20 - 10));
                }
                else {
                    clearInterval(inte);
                    $("#score-id").text(points);
                }

            }, 100);
        }, 3800);
    }

    const calcPoints = (ac, ai) => {
        // Improve the calc
        return ac * 5 - ai * 0.5;

    }

    const createRowInTable = (number, problem, yourAnswer, correctAnswer, result) => {
        //<tr><td>1</td><td>5 x 3 = </td><td> 11</td><td>15</td><td>X</td></tr>
        let rowString = "";
        rowString += "<tr><td>" + number;
        rowString += "</td><td>" + problem;
        rowString += "</td><td>" + yourAnswer;
        rowString += "</td><td>" + correctAnswer;
        rowString += "</td><td>" + result + "</td></tr>";

        return rowString;
    }

    const createTableDetails = () => {
        let tbody = "";
        let check = '<i class="fas fa-check"></i>';
        let wrong = '<i class="fas fa-times"></i>';
        for (let i = 0; i < numQuestion - 1; i++) {
            if (resultsOfAnswers[i] == 0) {
                tbody += createRowInTable(i + 1, questions[i].slice(0, -2), parseInt(answers[i]), correctAnswers[i], wrong);
            }
            else if (resultsOfAnswers[i] == 1) {
                tbody += createRowInTable(i + 1, questions[i].slice(0, -2), parseInt(answers[i]), correctAnswers[i], check);
            }

        }
        $(tbody).appendTo("#table-details");
    }

    const createTableRanking = async () => {
        let res = await fetch();
        let data = await res.json();
        console.log(data);
    }



})