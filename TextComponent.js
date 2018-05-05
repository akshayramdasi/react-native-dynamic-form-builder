import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,Button,
	Text,TextInput,
	View
} from 'react-native';


const data =[{
	"name": "abc",
	"age": 31,
	"city": "New York",
	"type": "text",
	"id":1
},
{
	"name": "Akshay",
	"age": 25,
	"city": "Pune",
	"type": "button",
	"id":2
},
{
	"name": "Shubham",
	"age": 30,
	"city": "Mumbai",
	"type": "textinput",
	"id":3
},
{
	"name": "kjbakgb",
	"age": 30,
	"city": "jabekgb",
	"type": "currency",
	"id":4
}];
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

