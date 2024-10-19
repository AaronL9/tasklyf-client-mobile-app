import Svg, { Path } from "react-native-svg";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type Props = {
  color: string;
};

export default function Star({ color }: Props) {
  return (
    <Svg width="15" height="15" viewBox="0 0 10 10" fill="none">
      <Path
        d="M5 0.5L6.12257 3.95492H9.75528L6.81636 6.09017L7.93893 9.54508L5 7.40983L2.06107 9.54508L3.18364 6.09017L0.244718 3.95492H3.87743L5 0.5Z"
        fill={color}
      />
    </Svg>
  );
}
