import React from "react";
import "../style/HotelPage.css";
import { Link } from "react-router-dom";

export default class HotelPage extends React.Component {
  render() {
    console.log(this.props.hotelData);
    return (
      <div className="hotelPage">
        <h1>{this.props.hotelData.name}</h1>
        <img
          className="hotelImage onPage"
          src={this.props.hotelData.img}
          alt="Hotel Image"
        />
        <h2>
          {this.props.hotelData.number +
            " " +
            this.props.hotelData["street name"]}
        </h2>
        <Link className="linked" to={"/"}>
          <button className="button-56">חזרה לדף הבית</button>
        </Link>
        <CallNowButton phone={"+972" + this.props.hotelData.phone} />
      </div>
    );
  }
}

class CallNowButton extends React.Component {
  render() {
    return (
      <button className="button-56">{"CALL NOW  " + this.props.phone}</button>
    );
  }
}
