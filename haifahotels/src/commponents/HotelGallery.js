import React from "react";
import { Link } from "react-router-dom";
import { kebabCase } from "../helpers/kebabCase";
import HotelCard from "./HotelCard";
import HotelPage from "./HotelPage";
import { hotelData } from "../assets/hotelData";
import "../style/HotelGallery.css";

export default class HotelGallery extends React.Component {
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
              return (
                <Link className="linked" to={"/" + kebabCase(hotel.name)}>
                  <HotelCard hotelData={hotel} />
                </Link>
              );
            })}
          </div>
          <div className="rightCol">
            {right.map((hotel) => {
              return (
                <Link className="linked" to={"/" + kebabCase(hotel.name)}>
                  <HotelCard hotelData={hotel} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
