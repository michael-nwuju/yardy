import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { colors } from "../constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

export interface ImageInputProps {
  uri?: string;
  onChangeImage?: (assets: ImagePicker.ImagePickerAsset[]) => any;
}

const ImageInput: React.FC<ImageInputProps> = ({ uri, onChangeImage }) => {
  const requestPermission = async () => {
    try {
      const { granted } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!granted) {
        alert("You'd need to allow this app access your media");
      }
    } catch (error) {
      console.log("Error requesting permission", error);
    }
  };

  const handlePress = async () => {
    try {
      if (onChangeImage) {
        if (!uri) {
          const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.5,
          });

          if (!result.canceled) {
            onChangeImage(result.assets);
          }
        } else {
          Alert.alert("Delete", "Are you sure you want to delete this image?", [
            {
              text: "Yes",
              onPress: () => onChangeImage([{ uri: null } as any]),
            },
            { text: "No" },
          ]);
        }
      }
    } catch (error) {
      console.log("Error handling press event", error);
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {uri ? (
          <Image style={styles.image} source={{ uri }} />
        ) : (
          <MaterialCommunityIcons
            name="camera"
            size={40}
            color={colors.medium}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 15,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.light,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default ImageInput;
