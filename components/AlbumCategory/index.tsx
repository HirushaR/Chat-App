import React from 'react';
import { Text, View } from 'react-native';
import {Album} from '../../types';

export  type AlbumCategory = {
    title: string,
    albums : [Album]
}
const AlbumCategory = (props: AlbumCategory) => (
    <View>
        

    </View>
)

export  default AlbumCategory;