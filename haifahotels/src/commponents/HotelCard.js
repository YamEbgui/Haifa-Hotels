import React from "react";
import "../style/HotelCard.css";

export default class HotelCard extends React.Component {
  render() {
    console.log(this.props.hotelData);
    return (
      <div className="hotelCard">
        <img
          className="hotelImage"
          src={this.props.hotelData.img}
          alt="Hotel Image"
        />
        <h3>{this.props.hotelData.name}</h3>
      </div>
    );
  }
}
