import { Text, TouchableOpacity } from "react-native";
import { selectContentData, useAppSelector } from "state";

export const ButtonsTest = () => {
  const contentData = useAppSelector(selectContentData);
  return (
    <TouchableOpacity
      style={{ backgroundColor: contentData?.currentTheme.colors.primary }}
    >
      <Text style={{ color: contentData?.currentTheme.colors.text }}>
        Button
      </Text>
    </TouchableOpacity>
  );
};
