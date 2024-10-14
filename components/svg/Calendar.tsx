import Svg, { Path } from "react-native-svg";

type Props = {
  color: string;
};

export default function Calendar({ color }: Props) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path d="M8.5 2V5Z" fill={color} fillOpacity="0.25" />
      <Path
        d="M8.5 2V5"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M16.5 2V5Z" fill={color} fillOpacity="0.25" />
      <Path
        d="M16.5 2V5"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M4 9.08997H21Z" fill={color} fillOpacity="0.25" />
      <Path
        d="M4 9.08997H21"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.5 8.5V17C21.5 20 20 22 16.5 22H8.5C5 22 3.5 20 3.5 17V8.5C3.5 5.5 5 3.5 8.5 3.5H16.5C20 3.5 21.5 5.5 21.5 8.5Z"
        fill={color}
        fillOpacity="0.25"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M16.1947 13.7H16.2037Z" fill={color} fillOpacity="0.25" />
      <Path
        d="M16.1947 13.7H16.2037"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M16.1947 16.7H16.2037Z" fill={color} fillOpacity="0.25" />
      <Path
        d="M16.1947 16.7H16.2037"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M12.4955 13.7H12.5045Z" fill={color} fillOpacity="0.25" />
      <Path
        d="M12.4955 13.7H12.5045"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M12.4955 16.7H12.5045Z" fill={color} fillOpacity="0.25" />
      <Path
        d="M12.4955 16.7H12.5045"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M8.79431 13.7H8.80329Z" fill={color} fillOpacity="0.25" />
      <Path
        d="M8.79431 13.7H8.80329"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M8.79431 16.7H8.80329Z" fill={color} fillOpacity="0.25" />
      <Path
        d="M8.79431 16.7H8.80329"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
