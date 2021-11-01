import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";

const Selector = () => {
  const [selectedValue, setSelectedValue] = useState("OutDoor");
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="OutDoor" value="outdoor" />
        <Picker.Item label="Garden" value="garden" />
        <Picker.Item label="Drills" value="Carpentry" />
        <Picker.Item label="Water Preasure" value="water" />
        <Picker.Item label="Electric" value="electric" />
        <Picker.Item label="Leadders" value="Leadder" />
        <Picker.Item label="Plumber" value="Pumbler" />

     </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  }
});

export default Selector;