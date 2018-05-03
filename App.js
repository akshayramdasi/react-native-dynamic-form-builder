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
	"type": "textinput",
	"id":4
}];
const TextComponent = () => {
	return(<View>
		{data.map(function(row){
			if(row.type == "text")
				return(
					<Text key={row.id}> {row.name} </Text>	
				)
			})}	
	</View>)
	}
const ButtonComponent = () => {
		return(<View>
			{data.map(function(row){
				if(row.type == "button")
					return(
						<Button
		 key={row.id}
 		 title={row.name}
 		 color="#841584"
  		accessibilityLabel="Learn more about this purple button"
/>
					)
				})}	
		</View>)
		}
const TextInputComponent = () => {
		return(
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
		</View>)
		
			}		
export default class App extends Component {
	constructor(props){
		super(props);	
		this.state={
				name: [],
				type:[]
		}
	}
	 render() {
		return (
			<View>
				<Text> New Data from json </Text>
				<TextComponent />
				<ButtonComponent />
				<TextInputComponent />
			</View>
		);
	}
}

