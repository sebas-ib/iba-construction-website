"use client";
import { useState } from "react";
import "./gallery.css";

const images = [
  "/assets/pictures/in-progress.jpeg",
  "/assets/pictures/kitchen.jpg",
  "/assets/pictures/living-room.jpg",
  "/assets/pictures/new_construction.jpg",
  "/assets/pictures/night-picture.jpg",
  "/assets/pictures/outdoor-painting.jpeg",
  "/assets/pictures/outdoor-pathway.jpeg",
  "/assets/pictures/outdoor-remodeling.jpeg",
  "/assets/pictures/pp-home.jpg",
  "/assets/pictures/remodeling.jpg",
  "/assets/pictures/san-diego.jpg",
  "/assets/pictures/water-damage.jpg",
];

// Group images into sets of [big, small1, small2]
function chunkImages(images: string[]) {
  const chunks = [];
  for (let i = 0; i < images.length; i += 3) {
    chunks.push(images.slice(i, i + 3));
  }
  return chunks;
}

export default function Gallery() {
  const imageGroups = chunkImages(images);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="main-container">
      <h1>Our Work</h1>

      {imageGroups.map((group, idx) => (
        <div className="image-section" key={idx}>
          <img
            src={group[0]}
            alt={`Main project ${idx + 1}`}
            className="big-image"
            loading="lazy"
            onClick={() => setSelectedImage(group[0])}
          />
          <div className="bottom">
            {group.slice(1).map((src, subIdx) => (
              <img
                key={subIdx}
                src={src}
                alt={`Small project ${idx + 1}.${subIdx + 1}`}
                className="small-image"
                loading="lazy"
                onClick={() => setSelectedImage(src)}
              />
            ))}
          </div>
        </div>
      ))}

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Full size preview" />
        </div>
      )}
    </div>
  );
}
