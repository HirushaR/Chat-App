import React from 'react';
import { Text, View } from 'react-native';
import {Album} from '../../types';
import styles  from './style';

export  type AlbumCategory = {
    title: string,
    albums : [Album]
}
const AlbumCategory = (props: AlbumCategory) => (
    <View>
        {/* title */}
        <Text style={styles.title}>{props.title}</Text>

    </View>
)

export  default AlbumCategory;