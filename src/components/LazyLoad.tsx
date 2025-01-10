import React from "react";
import LazyLoad from "react-lazyload";

interface LazyLoadProps {
  height?: number;
  width?:number
  src: string;
  alt?: string;
  placeholder?: React.ReactNode;
  [key: string]: any; 
}

const LazyLoadImage: React.FC<LazyLoadProps> = ({ height,width, src, alt = "", placeholder, ...rest }) => {
  return (
    <LazyLoad
      height={height}
      offset={100}
      placeholder={
        placeholder || (
          <div style={{ height: `${height}px`, backgroundColor: "#ccc`" }}>
            Loading...
          </div>
        )
      }
    >
      <img src={src} height={height} width={width} alt={alt} {...rest} />
    </LazyLoad>
  );
};

export default LazyLoadImage;
