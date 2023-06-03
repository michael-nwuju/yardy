import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableHighlight,
  TouchableHighlightProps,
  View,
} from "react-native";
import Text from "./Text";
import { colors } from "../constants/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { SwipeableProps } from "react-native-gesture-handler/lib/typescript/components/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export interface AvatarProps extends SwipeableProps {
  image?: ImageSourcePropType;
  title: string;
  subTitle?: string;
  IconComponent?: React.ReactElement;
  onPress?: TouchableHighlightProps["onPress"];
}

const Avatar: React.FC<AvatarProps> = ({
  image,
  title,
  subTitle,
  onPress,
  IconComponent,
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
            {subTitle && (
              <Text style={styles.subTitle} numberOfLines={1}>
                {subTitle}
              </Text>
            )}
          </View>
          <MaterialCommunityIcons
            size={25}
            name="chevron-right"
            color={colors.medium}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
  },
  detailContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
});

export default Avatar;
