import React from "react";
import {
  ImageURISource,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  View,
} from "react-native";

import { colors } from "../constants/colors";
import Text from "./Text";
import { Image } from "react-native-expo-image-cache";

export interface CardProps extends TouchableWithoutFeedbackProps {
  title?: string;
  subTitle?: string;
  thumbnail?: string;
  image: ImageURISource;
}

const Card: React.FC<CardProps> = ({
  title = "",
  subTitle = "",
  image,
  thumbnail,
  onPress,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          tint="light"
          style={styles.image}
          uri={image.uri || ""}
          preview={{ uri: thumbnail }}
        />
        <View style={styles.detailContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.subTitle} numberOfLines={1}>
            {subTitle}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default Card;
