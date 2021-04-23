const Controls = ({ onIncremet, onDecrement }) => (
  <div className="Counter__controls">
    <button className="button" onClick={onIncremet}>
      Увеличить на 1
    </button>
    <button className="button" onClick={onDecrement}>
      Уменьшить на 1
    </button>
  </div>
);

export default Controls;
