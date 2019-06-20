// Starts game
$("#start").on('click', function () {
    game.start();
})

$(document).on('click', '#end', function(){
    game.done();
})

// Trivia questions
let questions = [{
    question: "In the 'Thundergun Express' episode, the gang is determined to make it to the movie theater in time to see the show. Who is the only member of the gang who never makes it?",
    answers: ["Dee", "Mac", "Frank", "Dennis"],
    correctAnswer: "Frank"
}, {
    question: "In the episode titled 'The Gang Gets Invincible', a Donovan McNabb impostor speaks to the group trying out for the Philadelphia Eagles. Realizing the impostor is not Donovan McNabb and that his speech is basically a McDonald's plug, Dennis and Mac believe the impostor to have also portrayed which character on 'The Cosby Show'?",
    answers: ["Tiger Woods", "Elvin Tibideaux", "Denise", "Theo"],
    correctAnswer: "Elvin Tibideaux"
}, {
    question: "When the waitress is taking Charlie's coffee order in episode 1, what name does she use to identify Charlie?",
    answers: ["Dayman", "Greenman", "The Boy", "Hitler"],
    correctAnswer: "Hitler"
}, {
    question: "In the episode 'Underage Drinking: A National Concern', what was the plan to protect the new underage patrons of Paddy's pub?",
    answers: ["Snitches get stiches", "3 drink maximum", "We'll figure it out later", "There was no plan"],
    correctAnswer: "3 drink maximum"
}, {
    question: "Dee walks into Paddy's Pub and announces to the gang that she got a part in a movie. Who is the director of this movie that she will be in?",
    answers: ["M. Night Shyamalan", "Steven Spielberg", "Quintin Tarantino", "Christopher Nolan"],
    correctAnswer: "M. Night Shyamalan"
}, {
    question: "According to Dennis, what does the D in the D.E.N.N.I.S. System stand for?",
    answers: ["Dance", "Dramatize", "Die", "Demonstrate your value"],
    correctAnswer: "Demonstrate your value"
}, {
    question: "At the beginning of the episode 'Mac and Dennis go to Dee's apartment together'. What is it that they went there to get?",
    answers: ["Milksteak", "Glue", "A big bowl", "Money"],
    correctAnswer: "A big bowl"
}, {
    question: "Which 'Sunny' character does Dennis hit with his car, halting the gang's trip to the strip club?",
    answers: ["Charlie", "Mac", "Cricket", "Frank"],
    correctAnswer: "Charlie"
}, {
    question: "Paddy's Pub hosts a modeling contest for a promotional billboard. Which member of the gang is determined to win the contest himself?",
    answers: ["Dennis", "Mac", "Charlie", "Frank"],
    correctAnswer: "Dennis"
}];


let game = {
    correct: 0,
    incorrect: 0,
    counter: 60,
    countdown: function () {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            console.log("Time is up");
            game.done();
        }
    },
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter"</span>60</h2>');
        $('#start').remove();
        for (let i = 0; i < questions.length; i++) {
            $('#subwrapper').append('<h2>' + questions[i].question + '</h2>')
            for (let j = 0; j < questions[i].answers.length; j++) {
                $('#subwrapper').append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }
        }
        $('#subwrapper').append('<br><button id="end">DONE</button>')
    },

    // checks your answers then adds your results to the results screen
    done: function () {
        $.each($('input[name="question-0"]:checked'), function () {
            if ($(this).val() == questions[0].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-1"]:checked'), function () {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-2"]:checked'), function () {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-3"]:checked'), function () {
            if ($(this).val() == questions[3].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-4"]:checked'), function () {
            if ($(this).val() == questions[4].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-5"]:checked'), function () {
            if ($(this).val() == questions[5].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-6"]:checked'), function () {
            if ($(this).val() == questions[6].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-7"]:checked'), function () {
            if ($(this).val() == questions[7].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-8"]:checked'), function () {
            if ($(this).val() == questions[8].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-9"]:checked'), function () {
            if ($(this).val() == questions[9].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        this.result();
    },

    // results function     
    result: function(){
        clearInterval(timer);
        $('#subwrapper h2').remove();
        $('#subwrapper').html('<h2>Times up!</h2>');
        $('#subwrapper').append('<h3>Correct answers: '+this.correct+'</h3>');
        $('#subwrapper').append('<h3>incorrect answers: '+this.incorrect+'</h3>');
        $('#subwrapper').append('<h3>Unanswered: '+(questions.length-(this.correct+this.incorrect))+'</h3>');
    }
};