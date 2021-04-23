import { Component } from 'react';
import Value from './Value';
import Controls from './Controls';

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    //
  };

  state = { value: this.props.initialValue };

  handleIncremet = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    return (
      <div className="Counter">
        {/* <span className="Counter__value">{this.state.value}</span> */}

        <Value value={this.state.value} />
        <Controls
          onIncremet={this.handleIncremet}
          onDecrement={this.handleDecrement}
        />
        {/* Controls inside class can be with this */}
        {/* <div className="Counter__controls">
          <button className="button" onClick={this.handleIncremet}>
            Увеличить на 1
          </button>
          <button className="button" onClick={this.handleDecrement}>
            Уменьшить на 1
          </button>
        </div> */}
      </div>
    );
  }
}

export default Counter;
