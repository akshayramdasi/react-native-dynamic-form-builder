import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,View
} from 'react-native';
import CheckBox from 'react-native-checkbox';

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
	"name": "CheckBox Component",
	"age": 39,
	"city": "jabekgb",
	"type": "check",
	"id":5
}];
	
export default class CheckboxComponent extends Component {
    render() {
		return (
		
			<View>
			{data.map(function(row){
				if(row.type == "check")
					return(	
                        <View> 
                        <CheckBox
                        label={row.name}
                        onChange={(checked) => console.log('I am checked', checked)}
                        />
                        </View>
                    )
				})}	
	   
</View>
		);
	}
}

