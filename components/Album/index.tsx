import React from 'react';
import { View,Text,Image} from 'react-native';
import Style from './style'

export  type AlbumProps = {
    album:{
        id:string;
        imageUrl: string;
        artistsHeadline: string;
    }
  
}

const Album = (props: AlbumProps) => (
    <View style={Style.container}>
         <Image source={{uri: props.album.imageUrl}} style={Style.image} />
        <Text style={Style.text}>{props.album.artistsHeadline}</Text>
    </View>
)

export default Album;