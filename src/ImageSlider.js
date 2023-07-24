import { useState } from "react";

const slideStyles = {
  display:"flex",
  width: "85%",
  height: "75%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
   minWidth:"350px",
  marginLeft:"35px",

};

const rightArrowStyles = {
  position: "absolute",
  top: "39%",
  transform: "translate(0, -50%)",
  right: "52px",
  fontSize: "45px",
  color: "#000",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "37%",
  transform: "translate(0, -50%)",
  left: "48px",
  fontSize: "45px",
  color: "#000",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "250px",
  };

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",

};

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
   ...slideStyles, 
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div className="sliderStyles" style={sliderStyles} >
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div className="slideStyles"  style={slideStylesWidthBackground}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
