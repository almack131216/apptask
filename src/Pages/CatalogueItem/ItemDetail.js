import React, { Component } from "react";
import ReactLoading from "react-loading";
import axios from "axios";
import { setDocumentTitle, apiGetItemDetails } from "../../Assets/Helpers";

class ItemDetail extends Component {
  constructor(props) {
    super(props);

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
    const { itemName } = this.props.match.params;
    const { fromCatalogue, parentPage } = this.props.location.state;

    this.itemName = itemName ? itemName : null;
    this.parentPage = parentPage ? parentPage : null;
    this.apiPath = apiGetItemDetails(this.itemName);
    setDocumentTitle(this.itemName);

    console.log(
      "[ItemDetail] this.itemName: " +
        this.itemName +
        " / " +
        fromCatalogue +
        " / " +
        parentPage
    );

    this.incrementer =
      this.state.isLoading &&
      setInterval(
        () =>
          this.setState({
            msElapsed: this.state.msElapsed + this.timeIncrementMs
          }),
        this.timeIncrementMs
      );
    axios
      .get(this.apiPath)
      .then(result => {
        this.setState({
          appData: result.data.message,
          isLoading: false,
          msElapsed: 0
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

    const content = this.state.appData.slice(0, 4).map((imgSrc, index) => (
      <div
        className={"css-grid__item css-grid__item--" + (index + 1)}
        key={index}
      >
        <img
          className="css-grid__img"
          src={imgSrc}
          alt={this.itemName + " " + index}
        />
      </div>
    ));

    return (
      <div>
        {this.itemName ? <h2>{this.itemName}</h2> : ""}
        {/* {this.parentPage ? <a href={this.parentPage}>back</a> : ""} */}
        <div className="css-grid portfolio">{content}</div>
      </div>
    );
  }
}

export default ItemDetail;
