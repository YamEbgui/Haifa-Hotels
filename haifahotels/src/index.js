import * as React from "react";
import * as ReactDOM from "react-dom";
import { kebabCase } from "./helpers/kebabCase";
import { hotelData } from "./assets/hotelData";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/HotelPage.css";
import HotelGallery from "./commponents/HotelGallery";
import HotelPage from "./commponents/HotelPage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HotelGallery />}></Route>
        {hotelData.map((hotel) => (
          <Route
            exact
            path={"/" + encodeURIComponent(kebabCase(hotel.name))}
            element={<HotelPage hotelData={hotel} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
