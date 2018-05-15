import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,Button,
	View, ScrollView
} from 'react-native';
import TextComponent from "./TextComponent";
import ButtonComponent from "./ButtonComponent";
import TextAreaComponent from "./TextAreaComponent";
import CurrencyComponent from "./Currency";
import CheckboxComponent from "./CheckboxComponent";
import LinkComponent from "./LinkComponent";
import FloatTextBox from "./FloatTextBox";
import DateTimePickerTester from "./DatePickerComponent";
import TextInputComponent from "./TextInputComponent"
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
			<ScrollView>
				<TextComponent />
				<ButtonComponent />
				<TextAreaComponent />
				<CurrencyComponent />
				<CheckboxComponent />
				<LinkComponent />
				<DateTimePickerTester />
				<TextInputComponent />
			</ScrollView>
		);
	}
}

