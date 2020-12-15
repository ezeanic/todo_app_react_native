import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Header!</Text>
        </View>
    );
}


  const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // height: 60,
        // width: '100%',
        // justifyContent: 'center',
      },
    title: {
        // color: 'white',
        // fontSize :20,
        // fontWeight: 900,
        // backgroundColor: 'black',
        // textTransform: 'uppercase'
    }
  });

  export default Header;
