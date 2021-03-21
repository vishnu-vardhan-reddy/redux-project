import React, { Component } from "react";
import formatCurrency from "./util";

export default class Products extends Component {
  render() {
    return (
      <div className="products">
        <ul>
          {this.props.products.map((product) => (
            <li key={product.id}>
              <div className="product">
                <a href={"#" + product.id}>
                  <img src={product.image} alt="product" />
                  <p>{product.title}</p>
                </a>
                <div className="product-price">
                  <div>{formatCurrency(product.price)}</div>
                  <button className="button primary">Add to Cart</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
