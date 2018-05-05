import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,Button,
	Text,TextInput,
	View
} from 'react-native';
import TextComponent from "./TextComponent";
import ButtonComponent from "./ButtonComponent";
import TextInputComponent from "./TextInputComponent";
import CurrencyComponent from "./Currency";
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
				<CurrencyComponent />
			</View>
		);
	}
}

