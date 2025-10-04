import { useEffect, useState } from "react";
import words from './wordList.json';
import { HangmanDrawing } from "./components/HangmanDrawing";
import { HangmanWord } from "./components/HangmanWord";
import { Keyboard } from "./components/Keyboard";
const App = () => {
  const [wordToGuess, setWordToGuess] = useState(() => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    return randomWord;
  });
  const [guessLetter, setGuessLetter] = useState<string[]>([]);
  console.log(wordToGuess);
  const incorrectLetters = guessLetter.filter(
    (letter) => !wordToGuess.includes(letter)
  );
  

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      setGuessLetter((currentLetters) =>
        currentLetters.includes(key)
          ? currentLetters
          : [...currentLetters, key]
      );
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);
  return (
    <div className="max-w-2xl flex flex-col gap-2 items-center m-auto">
      <div className="text-2xl text-center">Lose Win</div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord guessedLetter={guessLetter} wordToGuess={wordToGuess} />
      <Keyboard
        activeLetters={guessLetter}
        inactiveLetters={incorrectLetters}
        disabledLetters={[]}
        onClick={(letter) => {
          setGuessLetter((current) =>
            current.includes(letter) ? current : [...current, letter]
          );
        }}
      />

    </div>
  );
};

export default App;
