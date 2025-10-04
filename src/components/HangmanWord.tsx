export function HangmanWord({guessedLetter, wordToGuess}: HangmanWordProps) {
 
    return (
        <div className="flex gap-5 text-2xl font-bold uppercase font-mono">
            {wordToGuess.split("").map((letter, index) => (
                <span key={index} className="border-b-4 border-black">
                    <span className={guessedLetter.includes(letter) ? "visible" : "invisible"}>{letter}</span>
                </span>
            ))}
        </div>
    )
}