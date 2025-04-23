"use client";
import { useState } from "react";
import "./gallery.css";

const images = [
  "/assets/pictures/living-room.jpg",
  "/assets/pictures/night-picture.jpg",
  "/assets/pictures/pp-home.jpg",
  "/assets/pictures/remodeling.jpg",
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
      <h1 className="heading">Our Work</h1>

      {imageGroups.map((group, idx) => (
        <div className="image-section" key={idx}>
          {group.map((src, subIdx) => (
            <img
              key={subIdx}
              src={src}
              alt={`Project ${idx + 1}.${subIdx + 1}`}
              className={subIdx === 0 ? "big-image" : "small-image"}
              loading="lazy"
              onClick={() => setSelectedImage(src)}
            />
          ))}
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
