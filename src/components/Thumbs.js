import React, { Component, Fragment } from "react";
import "./Thumbs.css";

class Thumbs extends Component {
  onImageSelect = (event) => {
    this.props.selectedCatalog(event);
  };

  render() {
    return (
      <Fragment>
        {this.props.items.map((catalog, id) => (
          <span
            className="catalog item thumb-select"
            onClick={() => {
              this.onImageSelect(id);
            }}
            id={id}
            key={id}
          >
            <span
              className={
                "thumb-outer " +
                (id === this.props.currentIndex ? "thumb-selected" : " ")
              }
            >
              <span
                className="thumb"
                id={id}
                style={{ backgroundImage: "url(" + catalog.thumb + ")" }}
              />
            </span>
          </span>
        ))}
      </Fragment>
    );
  }
}

export default Thumbs;
