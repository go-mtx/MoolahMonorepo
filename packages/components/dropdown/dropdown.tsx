import { useState } from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
// import {Icon} from '@rneui/themed'
import Ionicons from "@expo/vector-icons/Ionicons";

export interface DropdownData<T> {
  label: string;
  value: T;
}
interface MoolahDropdownProps<T> {
  data: DropdownData<T>[];
  value: DropdownData<T>;
  setValue: (value: DropdownData<T>) => void;
  containerStyle?: StyleProp<ViewStyle>;
}

export function MoolahDropdown<T>({
  value,
  data,
  setValue,
  containerStyle,
}: MoolahDropdownProps<T>) {
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "blue" }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        // search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Select item" : "..."}
        // searchPlaceholder="Search..."
        // renderItem={(item) => {}}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item);
          setIsFocus(false);
        }}
        renderRightIcon={() => (
          <Ionicons size={30} name='cash-outline' style={styles.headerImage} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  headerImage: {
    color: "green",
  },
});
