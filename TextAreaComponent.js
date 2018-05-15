import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,TextInput,
	View,} from 'react-native';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
const data =[{
	"name": "abc",
	"age": 31,
	"city": "New",
	"type": "text",
	"id":1
},
{
	"name": "text area starts here",
	"age": 30,
	"city": "Mumbai",
	"type": "textarea",
	"id":3
}];
	
export default class TextAreaComponent extends Component {
    render() {
		return (
			<View>
			{data.map(function(row){
				if(row.type == "textarea")
					return(
						<View>
				<AutoGrowingTextInput
				placeholder={row.name}/>		
	</View>
					) 
				})}	
		</View>
		);
	}
}
						 
const styles = StyleSheet.create({
	textAreaContainer: {
	  borderWidth: 1,
	  padding: 5
	},
	textArea: {
	  height: 150,
	  justifyContent: "flex-start"
	}
  })                   