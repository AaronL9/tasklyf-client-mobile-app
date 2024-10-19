import React from "react";
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native";

const CardLoader = () => (
  <ContentLoader
    rtl
    speed={2}
    width={200}
    height={122}
    viewBox="0 0 200 122"
    backgroundColor="#cfcfcf"
    foregroundColor="#ecebeb"
  >
    <Circle cx="100" cy="20" r="20" />
    <Rect x="42" y="54" rx="5" ry="5" width="116" height="10" />
    <Rect x="41" y="78" rx="6" ry="6" width="118" height="11" />
    <Rect x="0" y="112" rx="5" ry="5" width="200" height="10" />
  </ContentLoader>
);

export default CardLoader;
