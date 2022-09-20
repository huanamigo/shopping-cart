class Cart extends React.Component {
  state = {
    availability: 10,
    cart: 1,
  };

  handleAddButton = () => {
    this.setState({
      cart: this.state.cart + 1,
    });
  };

  handleRemoveButton = () => {
    this.setState({
      cart: this.state.cart - 1,
    });
  };

  handleBuyButton = () => {
    this.setState({
      availability: this.state.availability - this.state.cart,
      cart: 0,
    });
  };

  render() {
    return (
      <>
        <button
          disabled={this.state.cart <= 0 ? true : false}
          onClick={this.handleRemoveButton}
        >
          -
        </button>
        <span> {this.state.cart} </span>
        <button
          disabled={this.state.cart < this.state.availability ? false : true}
          onClick={this.handleAddButton}
        >
          +
        </button>
        <br />
        {this.state.cart > 0 && (
          <button
            style={{ position: 'absolute' }}
            onClick={this.handleBuyButton}
          >
            &nbsp;Kup&nbsp;
          </button>
        )}
      </>
    );
  }
}

ReactDOM.render(<Cart />, document.getElementById('root'));
