import React from "react";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

function Card({ card }) {
  const { imgSrc, title, rating, desc, date, price } = card;

  return (
    <div className="card-box">
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        loop={true}
        mousewheel={true}
        cssMode={true}
        
        pagination={{ clickable: true }}
        // navigation={true}
        className="swiper-container"
      >
        {imgSrc.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} className="card-img" alt={`Slide ${i + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="card-info-flex">
        <h3 className="card-title">{title}</h3>
        <div className="card-rating">
          <StarRateRoundedIcon />
          <p>{rating}</p>
        </div>
      </div>
      <p style={{ margin: 0, color: "var(--font-grey)" }}>{desc}</p>
      <p style={{ margin: 0, color: "var(--font-grey)" }}>{date}</p>
      <p style={{ margin: "0.2rem", fontSize: "1rem", color: "var(--black)" }}>
        <span style={{ fontWeight: "600" }}>₹{price}</span> night
      </p>
    </div>
  );
}

export default Card;
