import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>To do</Text>
        </View>
    );
}


  const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flex:0.1,
        left: 0,
        right: 0,
        top: -10,
        backgroundColor:'green',
        flexDirection:'row',
        height:90,
        alignItems:'center',
      },
    title: {
        color: 'white',
        height:90,
        fontSize: 30,
        fontWeight: "900",
        padding: "38%",
        textTransform: 'uppercase'
    }
  });

  export default Header;
