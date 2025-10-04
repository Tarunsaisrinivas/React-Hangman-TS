type HangmanDrawingProps = {
  numberOfGuesses: number;
};

type HangmanWordProps = {
  guessedLetter: string[];
  wordToGuess: string;
};

type KeyboardProps = {
    disabledLetters: string[];
    activeLetters: string[];
    inactiveLetters: string[];
    onClick?: (key: string) => void;
};
