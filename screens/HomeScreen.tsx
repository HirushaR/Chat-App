import * as React from 'react';
import { StyleSheet,Text, View } from 'react-native';

import AlbumCategory from '../components/AlbumCategory';

const albumCategory = {
  id: '1',
  title: 'Happy Vibes',
  albums: [
    {
      id: '1',
      imageUrl: 'https://i0.wp.com/www.unitedbypop.com/wp-content/uploads/2020/09/LaFf841gwmRNaqrj95Q1FkqfqMc3XSeC7l1P-YcmGU.png?fit=1280%2C720&ssl=1',
      artistsHeadline : 'Taylor Swift, Ed Sheeran'
    },
    {
      id: '2',
      imageUrl: 'https://i0.wp.com/www.unitedbypop.com/wp-content/uploads/2020/09/LaFf841gwmRNaqrj95Q1FkqfqMc3XSeC7l1P-YcmGU.png?fit=1280%2C720&ssl=1',
      artistsHeadline : 'Taylor Swift, Ed Sheeran'
    },
    {
      id: '3',
      imageUrl: 'https://i0.wp.com/www.unitedbypop.com/wp-content/uploads/2020/09/LaFf841gwmRNaqrj95Q1FkqfqMc3XSeC7l1P-YcmGU.png?fit=1280%2C720&ssl=1',
      artistsHeadline : 'Taylor Swift, Ed Sheeran'
    },
    {
      id: '4',
      imageUrl: 'https://i0.wp.com/www.unitedbypop.com/wp-content/uploads/2020/09/LaFf841gwmRNaqrj95Q1FkqfqMc3XSeC7l1P-YcmGU.png?fit=1280%2C720&ssl=1',
      artistsHeadline : 'Taylor Swift, Ed Sheeran'
    },
  ]
  
};

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <AlbumCategory
            title={albumCategory.title} 
            albums={albumCategory.albums}
        />
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
