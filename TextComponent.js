import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,Button,
	Text,TextInput,
	View
} from 'react-native';

export default class TextComponent extends Component {
    render() {
		return (
			<View>
		{data.map(function(row){
			if(row.type == "text")
				return(
					<Text key={row.id}> {row.name} </Text>	
				)
			})}	
	</View>
		);
	}
}

