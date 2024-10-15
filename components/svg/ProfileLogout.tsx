// Logout.js
import React from "react";
import Svg, { G, Path, Rect, Defs, ClipPath } from "react-native-svg";

export default function ProfileLogout() {
  return (
    <Svg width="27.5" height="27.5" viewBox="-2.4 -2.4 28.8 28.8" fill="none">
      <G clipPath="url(#clip0)">
        
        <Path
          d="M15 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H15M8 8L4 12M4 12L8 16M4 12L16 12"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
