export default function AlphabetComponent({ alphabet }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: " row",
        alignItems: "center",
        margin: "10px",
        width: "50%",
        justifyContent: "center",
      }}
    >
      {Object.keys(alphabet).map((item, index) => {
        if (alphabet[item]) {
          return (
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
          );
        }
        return (
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              width: "60px",
              height: "30px",
              backgroundColor: "blue",
              alignItems: "center",
              border: "1px solid cyan",
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}
