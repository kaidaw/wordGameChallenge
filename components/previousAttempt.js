import { useState } from "react";

export default function PreviousAttempt({ attempt, word, setPlayerHasWon }) {
  const checkLetter = (givenLetter, correctLetter, word) => {
    if (givenLetter === correctLetter) {
      return "correct";
    }
    if (Object.values(word).includes(givenLetter)) {
      return "close";
    } else {
      return "wrong";
    }
  };
  const verifyAttempt = (currentWord) => {
    if (currentWord[1] !== "correct") {
      return false;
    }
    if (currentWord[2] !== "correct") {
      return false;
    }
    if (currentWord[3] !== "correct") {
      return false;
    }
    if (currentWord[4] !== "correct") {
      return false;
    }
    if (currentWord[5] !== "correct") {
      return false;
    }
    return true;
  };
  const [checkedWord, setCheckedWord] = useState({
    1: checkLetter(attempt[0], word[1], word),
    2: checkLetter(attempt[1], word[2], word),
    3: checkLetter(attempt[2], word[3], word),
    4: checkLetter(attempt[3], word[4], word),
    5: checkLetter(attempt[4], word[5], word),
  });
  setPlayerHasWon(verifyAttempt(checkedWord));
  return (
    <div
      style={{
        display: "flex",
        flexDirection: " row",
        alignItems: "center",
        margin: "10px",
      }}
    >
      {attempt.length ? (
        attempt.map((item, index) => {
          return checkedWord[index + 1] === "correct" ? (
            <div
              style={{
                justifyContent: "center",
                display: "flex",
                width: "60px",
                height: "30px",
                backgroundColor: "green",
                alignItems: "center",
                border: "1px solid cyan",
              }}
            >
              {item}
            </div>
          ) : checkedWord[index + 1] === "close" ? (
            <div
              style={{
                justifyContent: "center",
                display: "flex",
                width: "60px",
                height: "30px",
                backgroundColor: "orange",
                alignItems: "center",
                border: "1px solid cyan",
              }}
            >
              {item}
            </div>
          ) : checkedWord[index + 1] === "wrong" ? (
            <div
              style={{
                justifyContent: "center",
                display: "flex",
                width: "60px",
                height: "30px",
                backgroundColor: "grey",
                alignItems: "center",
                border: "1px solid cyan",
              }}
            >
              {item}
            </div>
          ) : (
            <></>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}
