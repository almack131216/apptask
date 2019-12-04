import React, { Component } from "react";
import ReactLoading from "react-loading";
import axios from "axios";
import { setDocumentTitle } from "../../Assets/Helpers";

class ItemDetail extends Component {
  constructor(props) {
    super(props);
    this.itemName = this.props.match.params.name;
    setDocumentTitle(this.itemName);
    this.timeIncrementMs = 50;
    this.showSpinnerIfReturnGreaterThanMs = 200;
    this.state = {
      isLoading: true,
      msElapsed: 0
    };
  }

  componentWillUnmount() {
    clearInterval(this.incrementer);
  }

  componentDidMount() {
    let url = `https://dog.ceo/api/breed/${this.itemName}/images`;
    console.log("API:" + url);

    this.incrementer = setInterval(
      () =>
        this.setState({
          msElapsed: this.state.msElapsed + this.timeIncrementMs
        }),
      this.timeIncrementMs
    );
    axios
      .get(url)
      .then(result => {
        this.setState({
          appData: result.data.message,
          isLoading: false
        });
      })
      .catch(error => {
        if (error.response) {
          console.log(error.responderEnd);
        }
      });
  }

  render() {
    if (
      this.state.isLoading &&
      this.state.msElapsed > this.showSpinnerIfReturnGreaterThanMs
    ) {
      return (
        <ReactLoading
          type={"spin"}
          color={"black"}
          height={"100px"}
          width={"100px"}
        />
      );
    } else if (
      this.state.isLoading &&
      this.state.msElapsed <= this.showSpinnerIfReturnGreaterThanMs
    ) {
      return null;
    }

    const content = this.state.appData.slice(0, 6).map((imgSrc, index) => (
      <li key={index}>
        <img src={imgSrc} alt={this.itemName + " " + index} width="100px" />
      </li>
    ));

    return (
      <div>
        <h2>{this.itemName}</h2>
        <ul>{content}</ul>
      </div>
    );
  }
}

export default ItemDetail;
