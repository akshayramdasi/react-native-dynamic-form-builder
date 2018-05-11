import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,Button,
	Text,TextInput,
	View,Image
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
	"name": "jaojgpojgpoj",
	"age": 35,
	"city": "jlkalgn",
	"type": "floattext",
	"id":310
	
}];
	
export default class FloatTextBox extends Component {
    render() {
		return (
			<View>
			{data.map(function(row){
				if(row.type == "floattext")
					return(	
                       
                          <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
				
                    )
				})}	
	   
</View>
		);
	}
}

