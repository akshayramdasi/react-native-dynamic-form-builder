/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,Button,
	Text,
	View
} from 'react-native';

const data =[{
	"name": "abc",
	"age": 31,
	"city": "New York",
	"type": "text"
},
{
	"name": "Akshay",
	"age": 25,
	"city": "Pune",
	"type": "button"
}];

export default class App extends Component {
	constructor(props){
		super(props);
		
		this.state={
				name: [],
				type:[]
		}
	}
	
	componentDidMount(){
		let self = this;
		data.map((row) => {
		console.log(row);	
		console.log(row.type);
		switch(row.type) {
			case "text":
			console.log("Text Type")
				break;
			case "button":
			console.log("Button Type")
				break;
			default:
				Console.log("not a mentioned type")
		}
		});		
 	}

	 render() {
		return (
			<View>
				<Text> New Data from json </Text>
			</View>
		);
	}
}

