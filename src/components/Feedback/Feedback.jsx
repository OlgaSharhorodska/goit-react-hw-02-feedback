export default function Feedback({ onClickButtons }) {
  return (
    <div className="btn-wrapper">
      <button
        className="btn"
        type="button"
        onClick={evt => onClickButtons(evt.target.textContent)}
      >
        Good
      </button>
      <button
        className="btn"
        type="button"
        onClick={evt => onClickButtons(evt.target.textContent)}
      >
        Neutral
      </button>
      <button
        className="btn"
        type="button"
        onClick={evt => onClickButtons(evt.target.textContent)}
      >
        Bad
      </button>
    </div>
  );
}