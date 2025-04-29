"use client";
import { useState } from "react";
import "./gallery.css";

// Group images into sets of [big, small1, small2]
function chunkImages(images: string[]) {
  const chunks = [];
  for (let i = 0; i < images.length; i += 3) {
    chunks.push(images.slice(i, i + 3));
  }
  return chunks;
}

// Categorized image data
const categorizedImages: { [category: string]: string[] } = {
  Kitchens: [
    "/assets/pictures/kitchen.jpg",
    "/assets/pictures/kitchen2.jpeg",
    "/assets/pictures/kitchen3.jpeg",
  ],
  Livingrooms: [
    "/assets/pictures/living_room.jpg",
    "/assets/pictures/living_room2.jpg",
    "/assets/pictures/remodeling.jpg",
  ],
  Bathrooms: [
    "/assets/pictures/bathroom.jpg",
    "/assets/pictures/bathroom2.jpg",
    "/assets/pictures/bathroom3.jpeg",
    "/assets/pictures/bathroom4.jpeg",
    "/assets/pictures/bathroom5.jpeg",
  ],
  // Bedrooms: [
  //   "/assets/pictures/bedroom1.jpg",
  //   "/assets/pictures/bedroom2.jpg",
  //   "/assets/pictures/bedroom3.jpg",
  // ],
  // Outdoors: [
  //   "/assets/pictures/outdoor1.jpg",
  //   "/assets/pictures/outdoor2.jpg",
  //   "/assets/pictures/outdoor3.jpg",
  // ],
};

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="main-container">
      <h1 className="heading">Our Work</h1>

      {Object.entries(categorizedImages).map(([category, images]) => {
        const chunks = chunkImages(images);

        return (
          <div className="category-block" key={category}>
            <h1 className="category-block-title">{category}</h1>
            <div className="scroll-row">
              {chunks.map((chunk, i) => (
                <div className="image-section" key={i}>
                  <img
                    src={chunk[0]}
                    alt={`${category} ${i + 1}.1`}
                    className="big-image"
                    onClick={() => setSelectedImage(chunk[0])}
                  />
                  <div className="right-column">
                    {chunk[1] && (
                      <img
                        src={chunk[1]}
                        alt={`${category} ${i + 1}.2`}
                        onClick={() => setSelectedImage(chunk[1])}
                      />
                    )}
                    {chunk[2] && (
                      <img
                        src={chunk[2]}
                        alt={`${category} ${i + 1}.3`}
                        onClick={() => setSelectedImage(chunk[2])}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Full size preview" />
        </div>
      )}
    </div>
  );
}
