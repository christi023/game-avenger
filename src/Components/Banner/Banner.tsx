import React from "react";
import "./Banner.css";

type BannerProps = {
  title: string;
  subtitle: string;
};

const Banner = ({ title, subtitle }: BannerProps) => {
  return (
    <div className="banner">
      <h1 className="animate">{title}</h1>
      <div />
      <p className="flipY">{subtitle}</p>
    </div>
  );
};

export default Banner;
