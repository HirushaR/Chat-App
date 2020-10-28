import * as React from 'react';
import { StyleSheet,Text, View } from 'react-native';

import Album from '../components/Album';

const album = {
  id: '1',
  imageUrl: 'https://i0.wp.com/www.unitedbypop.com/wp-content/uploads/2020/09/LaFf841gwmRNaqrj95Q1FkqfqMc3XSeC7l1P-YcmGU.png?fit=1280%2C720&ssl=1',
  artistsHeadline : 'Taylor Swift, Ed Sheeran'
}

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <Album album={album}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
