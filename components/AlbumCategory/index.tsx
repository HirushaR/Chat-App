import React from 'react';
import { Text, View,FlatList } from 'react-native';
import {Album} from '../../types';
import AlbumComponent from '../Album';
import styles  from './style';

export  type AlbumCategory = {
    title: string,
    albums : [Album]
}
const AlbumCategory = (props: AlbumCategory) => (
    <View>
        {/* title */}
        <Text style={styles.title}>{props.title}</Text>
        {/* List of albums */}
        <FlatList data={props.albums}
         renderItem={({item}) => <AlbumComponent album={item}/>}
         keyExtractor= {(item) => item.id }
         horizontal
         /> 

        
    </View>
)

export  default AlbumCategory;