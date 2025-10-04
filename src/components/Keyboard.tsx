const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];
export function Keyboard() {
    return (
        <div className="grid grid-cols-9 gap-2 focus:disabled:bg-gray-600">
            {KEYS.map((key) => (
                <button
                    key={key}
                    className="disabled:bg-gray-500 active:bg-blue-500 hover:bg-blue-400 focus:bg-blue-700 border-2 border-blue-500 p-2 "
                >
                    {key.toUpperCase()}
                </button>
            ))}
        </div>
    );
}
