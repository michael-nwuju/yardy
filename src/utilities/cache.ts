import dayjs from "dayjs";
import AsyncStorage from "@react-native-async-storage/async-storage";

const prefix = "cache";

export const store = async (key: string, value: any) => {
  try {
    const item = { value, timeStamp: Date.now() };

    await AsyncStorage.setItem(`${prefix}${key}`, JSON.stringify(item));
  } catch (error) {
    console.log({ error });
  }
};

const isExpired = (item: { value: any; timeStamp: Date }) => {
  const now = dayjs();

  const storedTime = dayjs(item.timeStamp);

  return now.diff(storedTime, "minutes") > 5;
};

export const get = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(`${prefix}${key}`);

    if (!value) {
      return null;
    }

    const item = JSON.parse(value) as { value: any; timeStamp: Date };

    if (isExpired(item)) {
      await AsyncStorage.removeItem(`${prefix}${key}`);
      return null;
    }

    return item.value;
  } catch (error) {
    console.log({ error });
  }
};
