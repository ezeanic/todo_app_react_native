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
        fontSize: 30,
        top: 10,
        fontWeight: "900",
        padding: 100,
        textTransform: 'uppercase',
        flex: 1,
        textAlign: 'center',
    }
  });

  export default Header;
