import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,TextInput,
    View,} from 'react-native';
    
const data =[{
	"name": "abc",
	"age": 31,
	"city": "New",
	"type": "text",
	"id":1
},
{
	"name": "text input component",
	"age": 30,
	"city": "Mumbai",
	"type": "textinput",
	"id":3
}];
	
export default class TextInputComponent extends Component {
    render() {
		return (
			<View>
			{data.map(function(row){
				if(row.type == "textinput")
					return(
						<View>
				<TextInput placeholder={row.name} />		
	</View>
					) 
				})}	
		</View>
		);
	}
}
						 