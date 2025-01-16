"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import classes from "./carousel.module.css";



const images = [
  "https://res.cloudinary.com/property-rent/image/upload/v1718682846/resume/Coursera_34YJ4FMNP7KD_gd4gv5.jpg",
  "https://res.cloudinary.com/property-rent/image/upload/v1713158191/resume/khrrwv98c5unbh4x3h87.jpg",
  "https://res.cloudinary.com/property-rent/image/upload/v1713158475/resume/gtvlsguc6elqzlviveqa.jpg",
  "https://res.cloudinary.com/property-rent/image/upload/v1713158466/resume/p0jknppfp90vbfhrmmc1.jpg",
  "https://res.cloudinary.com/property-rent/image/upload/v1713158455/resume/ynth0shfugofbxdd5hwd.jpg",
  "https://res.cloudinary.com/property-rent/image/upload/v1713158393/resume/rsefg4hzqez0g8hq8boa.jpg",
];
export default function CarouselImage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex < images.length - 1 ? prevIndex + 1 : 0
        );
      }, 5000);

      return () => clearInterval(interval);
    }, []);
  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          className={index === currentImageIndex ? classes.active : ""}
              alt="carousel image"
               fill
        />
      ))}
    </div>
  );
}
