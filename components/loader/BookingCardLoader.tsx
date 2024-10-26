import React from "react";
import ContentLoader, { Rect } from "react-content-loader/native";

const BookingCardLoader = (props: { width: number; height: number }) => (
  <ContentLoader
    speed={2}
    width={props.width}
    height={props.height}
    viewBox="0 0 420 330"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <Rect x="0" y="0" rx="16" ry="16" width="420" height="330" />
  </ContentLoader>
);

export default BookingCardLoader;
