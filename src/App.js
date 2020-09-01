import React, { Component, Fragment } from "react";
import previousIcon from "./assets/icons/left-icon.png";
import nextIcon from "./assets/icons/right_icon.png";
import thumb1 from "./assets/images/thumb/mobile1.png";
import thumb2 from "./assets/images/thumb/mobile2.png";
import thumb3 from "./assets/images/thumb/mobile3.png";
import thumb4 from "./assets/images/thumb/mobile4.png";
import image1 from "./assets/images/mobile1.png";
import image2 from "./assets/images/mobile2.png";
import image3 from "./assets/images/mobile3.png";
import image4 from "./assets/images/mobile4.png";

import "./App.css";
import Viewer from "./components/Viewer";
import Thumbs from "./components/Thumbs";

const catalogs = [
  {
    thumb: thumb1,
    image: image1,
  },
  {
    thumb: thumb2,
    image: image2,
  },
  {
    thumb: thumb3,
    image: image3,
  },
  {
    thumb: thumb4,
    image: image4,
  },
];

class App extends Component {
  state = {
    title: "Catalog Viewer",
    catalogs: [...catalogs],
    currentIndex: 0,
    catalogSelected: catalogs[0],
    slideActive: false,
  };

  selectedCatalog = (index) => {
    console.log(index);
    this.setState({
      catalogSelected: catalogs[index],
    });
  };

  previousClick = async () => {
    const { currentIndex } = this.state;
    if (currentIndex > 0) {
      let newCurrentIndex = currentIndex - 1;
      await this.setState({
        currentIndex: newCurrentIndex,
        catalogSelected: catalogs[newCurrentIndex],
      });
    } else {
      let newCurrentIndex = catalogs.length - 1;
      await this.setState({
        currentIndex: newCurrentIndex,
        catalogSelected: catalogs[newCurrentIndex],
      });
    }
    console.log(this.state.currentIndex);
  };

  nextClick = async () => {
    const { currentIndex } = this.state;
    if (currentIndex >= catalogs.length - 1) {
      await this.setState({
        currentIndex: 0,
        catalogSelected: catalogs[0],
      });
    } else {
      let newCurrentIndex = currentIndex + 1;
      await this.setState({
        currentIndex: newCurrentIndex,
        catalogSelected: catalogs[newCurrentIndex],
      });
      console.log(this.state.currentIndex);
    }
  };

  render() {
    return (
      <Fragment>
        <div className="title" data-testid="app-title">
          {" "}
          {this.state.title}{" "}
        </div>
        <div className="catalog-outer">
          <div className="catalog-view">
            <div className="text-center">
              <div className="view-outter text-center">
                {console.log(this.state.catalogSelected)}
                <Viewer catalog={this.state.catalogSelected.image} />
              </div>
            </div>
          </div>
          <div className="catalog-items">
            <div
              className="previous"
              onClick={this.previousClick}
              data-testid="prev-icon"
            >
              <img src={previousIcon} alt="Previous" />
            </div>
            <div
              className="next"
              onClick={this.nextClick}
              data-testid="next-icon"
            >
              <img src={nextIcon} alt="Next" />
            </div>
            <Thumbs
              items={this.state.catalogs}
              currentIndex={this.state.currentIndex}
              selectedCatalog={this.selectedCatalog}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
