import { Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
import { Rating } from "react-native-ratings";

type Props = {
  id: string;
  profileUrl: string;
  providerName: string;
  profession: string;
  numberOfRatings: number;
  avgRatings: number;
};

export default function TopProviderCard(props: Props) {
  return (
    <Link href={{ pathname: "/provider", params: { providerId: props.id } }}>
      <View style={styles.topProviderCardContainer}>
        <Image style={styles.topProviderCardImage} source={{ uri: props.profileUrl }} />

        <Text style={{ fontFamily: "Poppins-Medium" }}>{props.providerName}</Text>
        <Text style={{ fontFamily: "Poppins-Light", fontSize: 12, marginBottom: 12 }}>
          {props.profession}
        </Text>

        <View style={styles.topProviderCardRatingsWrapper}>
          <Text style={{ color: Colors.ratings }}>{props.avgRatings}</Text>
          <Rating
            showRating={false}
            imageSize={15}
            startingValue={props.avgRatings}
            readonly={true}
            fractions={5}
          />
          <Text>({props.numberOfRatings})</Text>
        </View>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  topProviderCardContainer: {
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors["tertiary-grey"],
    paddingVertical: 18,
    borderRadius: 10,
  },
  topProviderCardImage: { width: 40, height: 40, borderRadius: 80, marginBottom: 8 },
  topProviderCardRatingsWrapper: { flexDirection: "row", alignItems: "center", columnGap: 5 },
});
