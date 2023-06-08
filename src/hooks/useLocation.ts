import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";
import { useEffect, useState } from "react";

export default function useLocation() {
  const [location, setLocation] = useState<{
    latitude: number | null;
    longitude: number | null;
  }>({ latitude: null, longitude: null });

  const getLocation = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();

      if (!granted) return;

      const result = await getCurrentPositionAsync();

      setLocation({
        latitude: result?.coords.latitude || null,
        longitude: result?.coords.longitude || null,
      });
    } catch (error) {
      console.log("Error getting location - ", { error });
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
}
