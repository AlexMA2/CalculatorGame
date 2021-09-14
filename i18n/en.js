const en = {
  index: {
    input: {
      label: 'Nick',
      placeholder: 'Your Nick:'
    },
    selector: {
      label: 'Language',
      detail: 'Select a Language'
    },
    buttons: {
      start: 'Start Game',
      instructions: 'Instructions',
      ranking: 'Ranking'
    },
    footer: {
      developer: 'Developed by Alex Mamani 2021',
      code: 'Code in GitHub'
    }
  },
  instructions: {
    title: 'Instructions',
    paragraphs: [
      `The <span class="highlight">objective</span> of this game is for you to solve as many math problems
    as you can in <span class="highlight">60 seconds</span>.
    Then, when the time is up, you will see your <span class="highlight">results</span>, that is, the
    number of problems you solve and
    the number of correct and incorrect answers.`,
    `First, you need to click on <span class="btn"> Start Game </span>. Then you will see a screen that
    says <span class="highlight">Starting in : </span>. When
    the counter reaches 0, the game will start.

    In the game, you can use the number keys on your keyboard to type the answer.
    <span class="keybo">0</span>
    <span class="keybo">1</span>
    <span class="keybo">2</span>
    <span class="keybo">3</span>
    <span class="keybo">4</span>
    <span class="keybo">5</span>
    <span class="keybo">6</span>
    <span class="keybo">7</span>
    <span class="keybo">8</span>
    <span class="keybo">9</span>
    <br>
    You can use the backspace key or the delete key to erase the last number you typed.
    <span class="keybo double"> &#129044; </span>
    <span class="keybo"> Supr </span>
    You can use the Enter key to submit the answer and solve the following math problem.
    <span class="keybo double"> Enter </span>`,
    `Also, you can use the <span class="highlight">buttons</span>, on the screen to do all of the above.
    However, we recommend that you
    only use the buttons on the screen on devices without a keyboard, such as a <span
        class="highlight">tablet or mobile device</span>.
    Typing with the keyboard is <span class="highlight">faster</span> than typing with the buttons.`,
    `When the game is over, you will see a <span class="highlight">Total number of questions</span>
    section, here you will see the
    number of math problems you solved.
    You will see a <span class="highlight">Number of questions correct</span> section, here you will see
    the number of math problems you solved and they are correct.
    You will see a <span class="highlight">Number of incorrect questions</span> section, here you will
    see the number of math problems you solve and it is incorrect.`,
    `Finally, in the <span class="highlight">Final score</span> section, you will see your final score
    here. This is <span class="highlight">affected by </span>the
    number of correct and incorrect answers, the time spent solving each problem and your streak of correct answers.
    In the game, you will see two buttons at the top. The <span class="btn"> Back to main page </span>
    button is to go back to the page you first viewed.
    The <span class="btn"> Start Again </span>&nbsp;button is used to restart the game. Helpful when you
    think you have a lot of wrong answers.`
    ]
  },
  game: {
    start: 'Starting in: ',
    calculator: {
      btnReturn: 'Return to the Main Page',
      btnStartAgain: 'Start Again',
      btnEnter: 'Enter',
      btnErase: 'Erase'
    },
    results: {
      details: {
        title: 'Details',
        details: [
          'Math Problem',
          'Your Answer',
          'Correct Answer',
          'Result'
        ]
      },
      ranking: {
        title: 'Ranking',
        ranking: [
          'Position',
          'Name',
          'Score'
        ]
      },
      explanation: [
        'Total Number of Questions',
        'Correct Number of Questions',
        'Incorrect Number of Questions',
        'Final Score'
      ]
    }
  }
}

export default en
