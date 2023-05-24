export default function InputComponent({
  word,
  setWord,
  checkWord,
  currentAttempt,
}) {
  function testLetters(str) {
    return /^[A-Za-z]*$/.test(str);
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: " row",
        alignItems: "center",
        margin: "10px",
      }}
    >
      <input
        style={{
          justifyContent: "center",
          display: "flex",
          width: "60px",
          height: "30px",
          alignItems: "center",
          paddingLeft: "25px",
          border: "1px solid cyan",
        }}
        value={word[1] ? word[1] : ""}
        maxLength={1}
        onChange={(e) => {
          testLetters(e.target.value) &&
            setWord({ ...word, 1: e.target.value });
        }}
      ></input>
      <input
        style={{
          justifyContent: "center",
          display: "flex",
          width: "60px",
          height: "30px",
          alignItems: "center",
          paddingLeft: "25px",
          border: "1px solid cyan",
        }}
        value={word[2] ? word[2] : ""}
        maxLength={1}
        onChange={(e) => {
          testLetters(e.target.value) &&
            setWord({ ...word, 2: e.target.value });
        }}
      ></input>
      <input
        style={{
          justifyContent: "center",
          display: "flex",
          width: "60px",
          height: "30px",
          alignItems: "center",
          paddingLeft: "25px",
          border: "1px solid cyan",
        }}
        value={word[3] ? word[3] : ""}
        maxLength={1}
        onChange={(e) => {
          testLetters(e.target.value) &&
            setWord({ ...word, 3: e.target.value });
        }}
      ></input>
      <input
        style={{
          justifyContent: "center",
          display: "flex",
          width: "60px",
          height: "30px",
          alignItems: "center",
          paddingLeft: "25px",
          border: "1px solid cyan",
        }}
        value={word[4] ? word[4] : ""}
        maxLength={1}
        onChange={(e) => {
          testLetters(e.target.value) &&
            setWord({ ...word, 4: e.target.value });
        }}
      ></input>
      <input
        style={{
          justifyContent: "center",
          display: "flex",
          width: "60px",
          height: "30px",
          alignItems: "center",
          paddingLeft: "25px",
          border: "1px solid cyan",
        }}
        value={word[5] ? word[5] : ""}
        maxLength={1}
        onChange={(e) => {
          testLetters(e.target.value) &&
            setWord({ ...word, 5: e.target.value });
        }}
        onKeyDown={(e) => {
          if (!e.code === "Enter") {
            return;
          }
          checkWord(currentAttempt);
        }}
      ></input>
    </div>
  );
}
