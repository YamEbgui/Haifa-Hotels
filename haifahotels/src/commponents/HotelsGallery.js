import React from "react";
import HotelCard from "./HotelCard";
import HotelPage from "./HotelPage";
import { hotelData } from "../assets/hotelData";
import "../style/HotelGallery.css";

export default class HotelsGallery extends React.Component {
  render() {
    let right = [];
    let left = [];
    for (let i = 0; i < hotelData.length; i++) {
      i % 2 === 0 ? left.push(hotelData[i]) : right.push(hotelData[i]);
    }
    return (
      <div className="hotelGallery">
        <h1>מלונות בעיר חיפה</h1>
        <div className="hotelGalleryTable">
          <div className="leftCol">
            {left.map((hotel) => {
              return <HotelCard hotelData={hotel} />;
            })}
          </div>
          <div className="rightCol">
            {right.map((hotel) => {
              return <HotelCard hotelData={hotel} />;
            })}
          </div>
          <HotelPage hotelData={hotelData[0]} />
        </div>
      </div>
    );
  }
}
