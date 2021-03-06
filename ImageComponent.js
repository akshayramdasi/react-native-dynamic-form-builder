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
},
{
	"name": "kjbakgb",
	"age": 30,
	"city": "jabekgb",
	"type": "image",
	"id":15
	"url": "https://images.freeimages.com/images/large-previews/5c1/beer-1326297.jpg"
}];
	
export default class ImageComponent extends Component {
    render() {
		return (
		
			<View>
			{data.map(function(row){
				if(row.type == "currency")
					return(	
                        <View>
                            <Image source={require('./Images/rupee-indian.png')} />
                            <TextInput
                            editable = {true}
                            maxLength = {40}
                            />
                        </View>
						<View style = { styles.container }>
						<Image source = {{ uri: 'https://tutorialscapital.com/wp-content/uploads/2017/06/android-logo.png' }} />
					</View>
                    )
				})}	
	   
</View>
		);
	}
}

