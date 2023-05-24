import { useState, useEffect } from "react";
import InputComponent from "../components/inputComponent";
import SubmitButton from "../components/submitButton";
import PreviousAttempt from "../components/previousAttempt";
import AlphabetComponent from "../components/alphabetComponent";

export default function Game() {
  //words array
  const words = [
    "hello",
    "world",
    "close",
    "codes",
    "clear",
    "house",
    "mouse",
    "learn",
    "error",
    "basic",
    "exist",
    "exits",
  ];

  //functions
  const resetAttempt = () => {
    setCurrentAttempt({
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
    });
  };
  const checkWord = (word) => {
    let wordIsFinished = true;
    for (let letter of Object.values(word)) {
      if (!letter) {
        wordIsFinished = false;
      }
    }
    if (wordIsFinished) {
      updateAlphabet(Object.values(word));
      setAttempts([...attempts, Object.values(word)]);
      resetAttempt();
    }
  };
  const pickRandomWord = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };
  const resetGame = () => {
    resetAttempt();
    setSelectedWord(pickRandomWord(words));
    setAttempts([]);
    setPlayerHasWon(false);
    setAlphabet({
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
      j: false,
      k: false,
      l: false,
      m: false,
      n: false,
      o: false,
      p: false,
      q: false,
      r: false,
      s: false,
      t: false,
      u: false,
      v: false,
      w: false,
      x: false,
      y: false,
      z: false,
    });
  };
  const updateAlphabet = (letters) => {
    setAlphabet({
      ...alphabet,
      [letters[0]]: true,
      [letters[1]]: true,
      [letters[2]]: true,
      [letters[3]]: true,
      [letters[4]]: true,
    });
  };

  //state
  const [currentAttempt, setCurrentAttempt] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
  });
  const [attempts, setAttempts] = useState([]);
  const [selectedWord, setSelectedWord] = useState(pickRandomWord(words));
  const [playerHasWon, setPlayerHasWon] = useState(false);
  const [playerHasLost, setPlayerHasLost] = useState(false);
  const [limitedToTen, setLimitedToTen] = useState(false);
  const [alphabet, setAlphabet] = useState({
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false,
    h: false,
    i: false,
    j: false,
    k: false,
    l: false,
    m: false,
    n: false,
    o: false,
    p: false,
    q: false,
    r: false,
    s: false,
    t: false,
    u: false,
    v: false,
    w: false,
    x: false,
    y: false,
    z: false,
  });
  const [showAlphabet, setShowAlphabet] = useState(false);

  //side effects
  useEffect(() => {
    if (!limitedToTen) {
      return;
    }
    if (attempts.length > 9) {
      setPlayerHasLost(true);
    }
  }, [attempts]);

  //render
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>Word Game Challenge</h2>
      <label class="switch">
        Limit to ten
        <input
          type="checkbox"
          value={limitedToTen}
          onChange={() => {
            setLimitedToTen(!limitedToTen);
          }}
        />
        <span class="slider round"></span>
      </label>
      {limitedToTen && (
        <h3>You have {10 - attempts.length} moves remaining.</h3>
      )}
      <label class="switch">
        Show alphabet
        <input
          type="checkbox"
          value={showAlphabet}
          onChange={() => {
            setShowAlphabet(!showAlphabet);
          }}
        />
        <span class="slider round"></span>
      </label>
      {showAlphabet && (
        <AlphabetComponent alphabet={alphabet}></AlphabetComponent>
      )}
      {attempts.length ? (
        attempts.map((item, index) => {
          return (
            <PreviousAttempt
              playerHasWon={playerHasWon}
              setPlayerHasWon={setPlayerHasWon}
              key={index}
              attempt={item}
              word={{
                1: selectedWord[0],
                2: selectedWord[1],
                3: selectedWord[2],
                4: selectedWord[3],
                5: selectedWord[4],
              }}
            ></PreviousAttempt>
          );
        })
      ) : (
        <></>
      )}
      {!playerHasWon && !playerHasLost && (
        <>
          {" "}
          <InputComponent
            word={currentAttempt}
            setWord={setCurrentAttempt}
            checkWord={checkWord}
            currentAttempt={currentAttempt}
          ></InputComponent>
          <SubmitButton
            handleClick={() => {
              checkWord(currentAttempt);
            }}
          ></SubmitButton>
        </>
      )}

      {playerHasWon && (
        <div
          style={{
            display: "flex",
            flexDirection: " row",
            alignItems: "center",
            margin: "10px",
          }}
        >
          You won in {attempts.length} moves!{" "}
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => {
              resetGame();
            }}
          >
            Restart
          </button>
        </div>
      )}
      {playerHasLost && (
        <div
          style={{
            display: "flex",
            flexDirection: " row",
            alignItems: "center",
            margin: "10px",
          }}
        >
          Sorry, you ran out of tries!
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => {
              resetGame();
            }}
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
}
