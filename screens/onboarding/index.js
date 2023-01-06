import React, { useRef, useState, useEffect } from "react";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StatusHeader  from "../../components/StatusHeader";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
  SafeAreaViewBase,
  SafeAreaView,
} from "react-native";
import {
  borderRadius,
  colors,
  fontWeights,
  margin,
  padding,
  textSizes,
} from "../../theme/config";
import Button from "../../components/Buttons";
const ENTRIES1 = [
  {
    title: "Algorithm",
    subtitle:
      "Users going through a vetting process to ensure you never match with bots.",
    illustration:
      "https://res.cloudinary.com/evergreenx/image/upload/v1666403512/girl2_c8dfmp.png",
  },
  {
    subtitle:
      "We match you with people that have a large array of similar interests.",
    title: "Matches",
    illustration:
      "https://res.cloudinary.com/evergreenx/image/upload/v1666403511/girl2_1_dc3bc0.png",
  },
  {
    title: "Premium",
    subtitle:
      "Sign up today and enjoy the first month of premium benefits on us. ",
    illustration:
      "https://res.cloudinary.com/evergreenx/image/upload/v1666403510/girl2_2_mjdhdp.png",
  },
];
const { width: screenWidth } = Dimensions.get("window");

const MyCarousel = ({ navigation }) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    // carouselRef.current.snapToNext();
    navigation.navigate("signup");
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View style={styles.item}>
        <StatusHeader />
        <ParallaxImage
          source={{ uri: item.illustration }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.subtitle} numberOfLines={2}>
          {item.subtitle}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Carousel
          ref={carouselRef}
          sliderWidth={screenWidth}
          sliderHeight={screenWidth}
          itemWidth={screenWidth - 60}
          data={entries}
          renderItem={renderItem}
          hasParallaxImages={true}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          text="Create an account"
          onPress={goForward}
          type="filled"
          bordered={true}
          size="large"
        />
      </View>

      <View style={styles.signintext}>
        <Text>
          Already have an account?{" "}
          <Text style={styles.signinlink}>Sign In </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    height: "100%",
    margin: "auto",
    width: "100%",
    padding: 22,
  },
  item: {
    width: "100%",
    height: "80%",
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "contain",
  },

  title: {
    fontSize: textSizes["2xl"],
    fontWeight: fontWeights.bold,
    color: colors["brand-red"],
    textAlign: "center",
    marginTop: margin[10],
  },

  subtitle: {
    fontSize: textSizes["base"],
    fontWeight: fontWeights.normal,
    textAlign: "center",
    margin: margin["5"],
    color: colors["brand-text"],
  },
  signintext: {
    marginTop: margin["5"],
    textAlign: "center",
    color: colors["black"],
    fontSize: textSizes.sm,
    fontWeights: fontWeights.normal,
  },

  signinlink: {
    color: colors["brand-red"],
  },
});
