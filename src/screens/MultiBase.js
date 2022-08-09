/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View, SafeAreaView, FlatList } from 'react-native';
import { gStyle } from '../constants';

// components
import Touch from '../components/Touch';
import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native-web';
import { isLoading } from 'expo-font';

const movieURL = "https://reactnative.dev/movies.json" ;


const MultiBase = ({ navigation }) => {
  const theme = 'dark';

  const [isLoading, setloading] = React.useState(true);
  const [data, setData] = useState([]) ;

useEffect (()  => {
fetch(movieURL)
.then((response)  => response.json())
.then((json)  => setData(json.movies))
.catch((error)  => alert(error))
.finally (setloading(false));
 });


  return (
    
    <SafeAreaView style= {gStyle.container} >
      <Text style={gStyle.text[theme]}>listage des evenements par utilisateur</Text>

      <View style={gStyle.spacer64} />

      {isLoading ? ( 
      <ActivityIndicator/>
       ): ( 
        <FlatList 
        
        data={data} 
        keyExtrator={({id}, index) => id }


        renderItem= {({item})  => (

         
            <Text>
              {item.title}
              {item.releaseYear}
            
              </Text>
                
          )}

        />

       )}
       </SafeAreaView>
        );
      }; 

   
MultiBase.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default MultiBase;
