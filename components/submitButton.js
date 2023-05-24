export default function SubmitButton({ handleClick }) {
  return (
    <div style={{ margin: "10px" }}>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}
