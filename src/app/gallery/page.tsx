"use client";
import "./gallery.css";

const images = [
  "/assets/house.jpg",
  "/assets/new_construction.jpg",
  "/assets/san-diego.jpg",
];

export default function Gallery() {
  return (
    <div className="main-container">
      <div className="image-section">
        <img
          src="/home_image.webp"
          alt="Remodeled kitchen"
          className="big-image"
        />
        <div className="bottom">
          <img
            src="/home_image.webp"
            alt="Remodeled kitchen"
            className="small-image"
          />
          <img
            src="/home_image.webp"
            alt="Remodeled kitchen"
            className="small-image"
          />
        </div>
      </div>
      <div className="image-section">
        <img
          src="/home_image.webp"
          alt="Remodeled kitchen"
          className="big-image"
        />
        <div className="bottom">
          <img
            src="/home_image.webp"
            alt="Remodeled kitchen"
            className="small-image"
          />
          <img
            src="/home_image.webp"
            alt="Remodeled kitchen"
            className="small-image"
          />
        </div>
      </div>
      <div className="image-section">
        <img
          src="/home_image.webp"
          alt="Remodeled kitchen"
          className="big-image"
        />
        <div className="bottom">
          <img
            src="/home_image.webp"
            alt="Remodeled kitchen"
            className="small-image"
          />
          <img
            src="/home_image.webp"
            alt="Remodeled kitchen"
            className="small-image"
          />
        </div>
      </div>
      <div className="image-section">
        <img
          src="/home_image.webp"
          alt="Remodeled kitchen"
          className="big-image"
        />
        <div className="bottom">
          <img
            src="/home_image.webp"
            alt="Remodeled kitchen"
            className="small-image"
          />
          <img
            src="/home_image.webp"
            alt="Remodeled kitchen"
            className="small-image"
          />
        </div>
      </div>
      <div className="image-section">
        <img
          src="/home_image.webp"
          alt="Remodeled kitchen"
          className="big-image"
        />
        <div className="bottom">
          <img
            src="/home_image.webp"
            alt="Remodeled kitchen"
            className="small-image"
          />
          <img
            src="/home_image.webp"
            alt="Remodeled kitchen"
            className="small-image"
          />
        </div>
      </div>
    </div>
  );
}
