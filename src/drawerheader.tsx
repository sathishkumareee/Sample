import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


interface dHeaderProps {
    navigation: any; // Change the type according to your navigation type
  }
const Drawerheader:FC<dHeaderProps>=({navigation})=>{
    return(
        <View style={styles.drawerHeader}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Text>jh</Text>
        </TouchableOpacity>
        {/* You can add more elements to your custom drawer header */}
      </View>
    )
}

export default Drawerheader;

const styles = StyleSheet.create({
    drawerHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 20,
    },
  });