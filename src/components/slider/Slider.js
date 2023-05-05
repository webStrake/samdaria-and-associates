/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-undef */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable lines-between-class-members */
import React from 'react'
import "./Slider.css";
import classNames from 'classnames/bind'


class CitySlider extends React.Component {

    constructor(props) {
      super(props);
      this.imageParts = 4;
      this.changeTo = null;
      this.autoTime = 3000;
      this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
    }
 
    componentDidMount() {
      this.runAutoChange();
      setTimeout(() => {
        this.setState({ activeSlide: 0, sliderReady: true });
      }, 0);
    }
     
    componentWillUnmount() {
        window.clearTimeout(this.changeTo);
      }
    
  
    runAutoChange() {
      this.changeTo = setTimeout(() => {
        this.changeSlides(1);
        this.runAutoChange();
      }, this.autoTime);
    }
  
    changeSlides(change) {
      window.clearTimeout(this.changeTo);
      const { length } = this.props.slides;
      const prevSlide = this.state.activeSlide;
      let activeSlide = prevSlide + change;
      if (activeSlide < 0) activeSlide = length - 1;
      if (activeSlide >= length) activeSlide = 0;
      this.setState({ activeSlide, prevSlide });
    }
  
    render() {
      const { activeSlide, prevSlide, sliderReady } = this.state;
      return (
        <div className={classNames("slider", { "s--ready": sliderReady })}>
          {/* <h1 className='galleryHead'>Gallery</h1> */}
          {/* <p className="slider__top-heading">Travelers</p> */}
          <div className="slider__slides">
            {this.props.slides.map((slide, index) => (
              <div
                className={classNames("slider__slide", {
                  "s--active": activeSlide === index,
                  "s--prev": prevSlide === index
                })}
                key={slide.city}
              >
                <div className="slider__slide-content">
                  <h3 className="slider__slide-subheading">
                    {/* {slide.country || slide.city} */}
                  </h3>
                  <h2 className="slider__slide-heading">
                    {slide.quote.split("").map((l) => (
                      <span>{l}</span>
                    ))}
                  </h2>
                  {/* <p className="slider__slide-readmore">{slide.text}</p> */}
                </div>
                <div className="slider__slide-parts">
                  {[...Array(this.imageParts).fill()].map((x, i) => (
                    <div className="slider__slide-part" key={i}>
                      <div
                        className="slider__slide-part-inner"
                        style={{ backgroundImage: `url(${slide.img})` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div
            className="slider__control"
            onClick={() => this.changeSlides(-1)}
          />
          <div
            className="slider__control slider__control--right"
            onClick={() => this.changeSlides(1)}
          />
        </div>
      );
    }
  }
      
export default CitySlider;

   
    
    



