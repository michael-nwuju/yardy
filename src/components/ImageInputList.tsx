import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ImageInput from "./ImageInput";
import { ImagePickerAsset } from "expo-image-picker";

export interface ImageInputListProps {
  uris?: string[];
  onAddImage?: (asset: ImagePickerAsset) => any;
  onRemoveImage?: (uri: string) => any;
}

const ImageInputList: React.FC<ImageInputListProps> = ({
  uris = [],
  onAddImage,
  onRemoveImage,
}) => {
  const scrollRef = useRef<ScrollView>();

  return (
    <View>
      <ScrollView
        ref={scrollRef as any}
        horizontal
        onContentSizeChange={() => scrollRef.current?.scrollToEnd()}
      >
        <View style={styles.container}>
          {uris.map(uri => (
            <View key={uri} style={styles.image}>
              <ImageInput
                uri={uri}
                onChangeImage={() => onRemoveImage && onRemoveImage(uri)}
              />
            </View>
          ))}
          <ImageInput
            onChangeImage={([asset]) => onAddImage && onAddImage(asset)}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});

export default ImageInputList;
