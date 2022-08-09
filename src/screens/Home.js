/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View, Image } from 'react-native';
import { gStyle } from '../constants';

import yeelelogo from '../assets/images/yeelelogo.png'; 

// components
import Touch from '../components/Touch';

const Home = ({ navigation }) => {
  const theme = 'dark';

  return (
    <View style={gStyle.container[theme]}>
      <ScrollView contentContainerStyle={gStyle.contentContainer}>

      
        <Text style={gStyle.text[theme]}>YEELE QR CODE</Text>

        <View style={gStyle.spacer64} />

        <Image source={yeelelogo} style={{ width: 305, height: 159 }} /> 

        <Touch
          onPress={() => navigation.navigate('login')}
          text="Se connecter"
        />

      
      </ScrollView>
    </View>
  );
};

Home.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default Home;
