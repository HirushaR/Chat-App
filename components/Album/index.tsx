import React from 'react';
import { View,Text,Image} from 'react-native';
import Style from './style'
import {Album} from '../../types';

export  type AlbumProps = {
    album: Album,
  
}

const AlbumComponent = (props: AlbumProps) => (
    <View style={Style.container}>
         <Image source={{uri: props.album.imageUrl}} style={Style.image} />
        <Text style={Style.text}>{props.album.artistsHeadline}</Text>
    </View>
)

export default AlbumComponent;