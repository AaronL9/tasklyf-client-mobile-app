// GreaterThan.js
import React from "react";
import Svg, { G, Path, Rect, ClipPath, Defs } from "react-native-svg";

export default function GreaterThan() {
  return (
    <Svg width="64" height="64" viewBox="-5.6 -5.6 67.2 67.2" fill="none">
      <G clipPath="url(#clip0)">
        <Rect
          x="-5.6"
          y="-5.6"
          width="67.2"
          height="67.2"
          rx="8"
          fill="#ebeaea"
        />
        <Path
          d="M13.832 43.5625C14.4883 43.5625 14.9336 43.3516 15.4258 43.1172L41.7695 31.2813C43.1055 30.6484 44.1602 29.6172 44.1602 28.1172C44.1602 26.6406 43.1289 25.5625 41.7461 24.9532L15.4258 12.8359C14.957 12.6016 14.5351 12.4375 13.9258 12.4375C12.707 12.4375 11.8398 13.2813 11.8398 14.5235C11.8398 15.6016 12.4023 16.211 13.3867 16.6797L38.6055 27.8125V28.0703L13.3867 39.2969C12.4023 39.7656 11.8398 40.375 11.8398 41.4531C11.8398 42.7422 12.6836 43.5625 13.832 43.5625Z"
          fill="#787878"
          stroke="#787878"
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Rect width="64" height="64" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
