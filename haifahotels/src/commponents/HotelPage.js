import React from "react";
import "../style/HotelPage.css";

export default class HotelPage extends React.Component {
  render() {
    console.log(this.props.hotelData);
    return (
      <div className="hotelPage">
        <h1>{this.props.hotelData.name}</h1>
        <img
          className="hotelImage"
          src={this.props.hotelData.img}
          alt="Hotel Image"
        />
        <h2>
          {this.props.hotelData.number +
            " " +
            this.props.hotelData["street name"]}
        </h2>
        <CallNowButton phone={this.props.hotelData.phone} />
      </div>
    );
  }
}

class CallNowButton extends React.Component {
  render() {
    return <button>{"CALL NOW  " + this.props.phone}</button>;
  }
}
