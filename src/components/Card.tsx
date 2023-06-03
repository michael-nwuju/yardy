import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
  ViewProps,
} from "react-native";
import { colors } from "../constants/colors";
import Text from "./Text";

export interface CardProps extends ViewProps {
  title?: string;
  subTitle?: string;
  image: ImageSourcePropType;
}

const Card: React.FC<CardProps> = ({ title = "", subTitle = "", image }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.subTitle} numberOfLines={1}>
          {subTitle}
        </Text>
      </View>
    </View>
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
