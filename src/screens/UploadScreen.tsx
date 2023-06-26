import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import * as Progress from "react-native-progress";
import { colors } from "../constants/colors";
import LottieView from "lottie-react-native";

export interface UploadScreenProps {
  progress?: number;
  visible?: boolean;
  onAnimationFinish?: (isCancelled: boolean) => void;
}

const UploadScreen: React.FC<UploadScreenProps> = ({
  progress = 0,
  visible = true,
  onAnimationFinish,
}) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            color={colors.primary}
            progress={progress}
            width={200}
          />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={onAnimationFinish}
            style={styles.doneAnimation}
            source={require("../animations/done.json")}
          />
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  doneAnimation: {
    width: 150,
  },
});

export default UploadScreen;
