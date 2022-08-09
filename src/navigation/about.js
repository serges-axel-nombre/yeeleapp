import React, { useState } from 'react';
import { Text, StyleSheet, Image } from 'react-native';
import { gStyle} from '../constants';

const about = () => {
  const [titleText, setTitleText] = useState("A propos");
  const bodyText = useState('Yeele vous permet de gérer les inscriptions en ligne pour tous types d’événements, activités et services. Organisez des sessions de formations en ligne, présentiel ou en hybride selon vos désirs. Planifiez des rendez-vous, des convocations datées ou limitez l’accès à des services, seront possible en créant vos formulaires d’inscriptions sur la plateforme.');

  const onPressTitle = () => {
    setTitleText("Yeele vous remercie");
  };

  return (
    <Text style={styles.baseText}>
      <Text style={styles.titleText} onPress={onPressTitle}>
        {titleText}
        {'\n'}
        {'\n'}
      </Text>

      <Text numberOfLines={5}>{bodyText}</Text>
    
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontSize: 30,
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 50,
    fontWeight: 'bold',
    backgroundColor: '#bb9457'


  },
});

export default about;