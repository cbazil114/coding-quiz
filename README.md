# coding-quiz

## Description

For this assignment, you will be creating a multiple choice quiz where you can enter your high scores with your initials to the local storage so you can access them later. You also have the choice to clear them if you wish. Whether or not you choose to, you can return and take the quiz again!

The point of the assignment is to combine HTML, CSS, and our newly acquired knowledge in JavaScript to create a dynamic yet simple quiz application. 

No installation required other than a source code editer.

## User Story

* **AS A** coding boot camp student
* **I WANT** to take a timed quiz on JavaScript fundamentals that stores high scores
* **SO THAT** I can gauge my progress compared to my peers

## Acceptance Criteria

* **GIVEN** I am taking a code quiz
* **WHEN** I click the start button
* **THEN** a timer starts and I am presented with a question
* **WHEN** I answer a question
* **THEN** I am presented with another question
* **WHEN** I answer a question incorrectly
* **THEN** time is subtracted from the clock
* **WHEN** all questions are answered or the timer reaches 0
* **THEN** the game is over
* **WHEN** the game is over
* **THEN** I can save my initials and my score


## Assignment Completion

There is a LOT to consider with this assignment, and is a big challenge for a student in the UNH Coding Bootcamp. 

After setting up a fairly basic HTML, as most of our work will be in JavaScript, and linking the relevant CSS/JS assets, I set up a few Ids and Classes that may be necessary. One thing in particular that is different between this and previous assignments is that I have also connected another HTML file - the highscores. It is a different page that you can access on the top left of the page (one of the few CSS choices you should make).

Following the acceptance criteria:

* The start button has an Id on the HTML, and we can create a variable from it. We then attach it to an EventListener that starts the time, as well as rendering our question along with choices. It is important to note, that it is helpful to create your array of questions, choices, and answers first to test these functions via devtools. 

* The timer starts when you click the start button, but for the question and answers, you need to fill out your function. Now, after speaking with a learning assistant, I realized I chose a more complicated route for solving this, but I start by clearing the container of all the homepage display, and replacing it with a list created from the array. That way, it functions as a clickable list (buttons also work). Now, when you click an answer, it calls another function called checkAnswer. This will display either correct or wrong depending on your answer, and it will also log the change in score if correct (score++). Also in the checkAnswer function is, if the answer is incorrect, the penalty of 10 seconds will be subtracted from the secondsRemain. 


* If the quiz ends due to a time out, you will get a message saying you failed the quiz and scored a zero. If you finish the quiz on time, you will get a message telling you well done, and will tell you what you scored out of 5. This is all associated to the endOfRound function, which requires a lot of created elements to create a functioning completion page that connects to your high scores. 

* When you get your score, you can enter two characters to log it into the localStorage. An optional choice I made was to return an alert if you try to submit something that is not two characters. Lastly, an EventListener is added that logs your score and initials, along with changing your location to the highscores page. 

## URL

## Screenshot

## Credits

Credits to Natasha Mann for being a wonderful tutor, along with the many learning assistants who guided me along the way. 