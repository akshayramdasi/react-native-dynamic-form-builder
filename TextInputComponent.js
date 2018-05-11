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
	"name": "Shubham",
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
						<TextInput
						editable = {true}
						maxLength = {40}
						placeholder={row.name}
					  />
					) 
				})}	
		</View>
		);
	}
}
						 
                   