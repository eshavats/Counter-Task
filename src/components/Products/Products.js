import React from "react";
import "./styles/Products.css";
import Menubar from "../../constants/Menubar";

class Products extends React.Component {
  state = {
    count1: 0,
    count2: 0,
    count3: 0,
    count4: 0,
    cartItems: 0,
    visible1: true,
    visible2: true,
    visible3: true,
    visible4: true,
  };

  incrementCount = (count) => {
    count++;
    const total = 1 + this.state.cartItems;
    this.setState({ cartItems: total });
    return count;
  };

  incrementCount1(count) {
    const newCount = this.incrementCount(count);
    this.setState({ count1: newCount });
  }
  incrementCount2(count) {
    const newCount = this.incrementCount(count);
    this.setState({ count2: newCount });
  }
  incrementCount3(count) {
    const newCount = this.incrementCount(count);
    this.setState({ count3: newCount });
  }
  incrementCount4(count) {
    const newCount = this.incrementCount(count);
    this.setState({ count4: newCount });
  }

  render() {
    return (
      <>
        <Menubar cartItems={this.state.cartItems} />
        <div className="product-container">
          <div
            className={
              this.state.visible1
                ? "ui huge labels product-visible"
                : "ui huge labels product-invisible"
            }
          >
            <div
              className={
                this.state.count1 === 0 ? "ui label yellow" : "ui label blue"
              }
            >
              {this.state.count1 === 0 ? "Zero" : this.state.count1}
            </div>
            <button
              onClick={() => this.incrementCount1(this.state.count1)}
              className="ui grey button"
            >
              Increment
            </button>
            <button
              onClick={() => this.setState({ visible1: false })}
              className="ui red button"
              data-tooltip="Delete Product from Cart"
              data-position="right center"
              data-inverted=""
            >
              Delete
            </button>
          </div>

          <div
            className={
              this.state.visible2
                ? "ui huge labels product-visible"
                : "ui huge labels product-invisible"
            }
          >
            <div
              className={
                this.state.count2 === 0 ? "ui label yellow" : "ui label blue"
              }
            >
              {this.state.count2 === 0 ? "Zero" : this.state.count2}
            </div>
            <button
              onClick={() => this.incrementCount2(this.state.count2)}
              className="ui grey button"
            >
              Increment
            </button>
            <button
              onClick={() => this.setState({ visible2: false })}
              className="ui red button"
              data-tooltip="Delete Product from Cart"
              data-position="right center"
              data-inverted=""
            >
              Delete
            </button>
          </div>

          <div
            className={
              this.state.visible3
                ? "ui huge labels product-visible"
                : "ui huge labels product-invisible"
            }
          >
            <div
              className={
                this.state.count3 === 0 ? "ui label yellow" : "ui label blue"
              }
            >
              {this.state.count3 === 0 ? "Zero" : this.state.count3}
            </div>
            <button
              onClick={() => this.incrementCount3(this.state.count3)}
              className="ui grey button"
            >
              Increment
            </button>
            <button
              onClick={() => this.setState({ visible3: false })}
              className="ui red button"
              data-tooltip="Delete Product from Cart"
              data-position="right center"
              data-inverted=""
            >
              Delete
            </button>
          </div>

          <div
            className={
              this.state.visible4
                ? "ui huge labels product-visible"
                : "ui huge labels product-invisible"
            }
          >
            <div
              className={
                this.state.count4 === 0 ? "ui label yellow" : "ui label blue"
              }
            >
              {this.state.count4 === 0 ? "Zero" : this.state.count4}
            </div>
            <button
              onClick={() => this.incrementCount4(this.state.count4)}
              className="ui grey button"
            >
              Increment
            </button>
            <button
              onClick={() => this.setState({ visible4: false })}
              className="ui red button"
              data-tooltip="Delete Product from Cart"
              data-position="right center"
              data-inverted=""
            >
              Delete
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Products;
