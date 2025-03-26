"use client";
import "./gallery.css";

const images = [
  "/assets/new_construction.jpg",
  "/home_image.webp",
  "/assets/house.jpg",
  "/assets/new_construction.jpg",
  "/assets/house.jpg",
  "/assets/house.jpg",
  "/home_image.webp",
];

// Group the images into chunks: [big, small1, small2]
function chunkImages(images: string[]) {
  const chunks = [];
  for (let i = 0; i < images.length; i += 3) {
    const group = images.slice(i, i + 3);
    chunks.push(group);
  }
  return chunks;
}

export default function Gallery() {
  const imageGroups = chunkImages(images);

  return (
    <div className="main-container">
      <h1>Gallery</h1>

      {imageGroups.map((group, idx) => (
        <div className="image-section" key={idx}>
          <img
            src={group[0]}
            alt={`Main project ${idx + 1}`}
            className="big-image"
          />
          <div className="bottom">
            {group.slice(1).map((src, subIdx) => (
              <img
                key={subIdx}
                src={src}
                alt={`Small project ${idx + 1}.${subIdx + 1}`}
                className="small-image"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
