const KEYS = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];



export function Keyboard({ disabledLetters, activeLetters, inactiveLetters, onClick }: KeyboardProps) {
    return (
        <div className="grid grid-cols-9 gap-2">
            {KEYS.map((key) => {
                const isActive = activeLetters.includes(key);
                const isInactive = inactiveLetters.includes(key);
                const isDisabled = disabledLetters.includes(key);

                return (
                    <button
                        key={key}
                        disabled={isDisabled}
                        onClick={() => onClick?.(key)}
                        className={`
              border-2 p-2 rounded
              ${isActive ? "bg-blue-500 text-white" : ""}
              ${isInactive ? "bg-gray-400 text-white" : ""}
              ${isDisabled ? "bg-gray-500 cursor-not-allowed" : "hover:bg-blue-400"}
            `}
                    >
                        {key.toUpperCase()}
                    </button>
                );
            })}
        </div>
    );
}
