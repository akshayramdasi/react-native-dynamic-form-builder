import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,Button,
	Text,TextInput,
	View, ScrollView
} from 'react-native';
import TextComponent from "./TextComponent";
import ButtonComponent from "./ButtonComponent";
import TextInputComponent from "./TextInputComponent";
import CurrencyComponent from "./Currency";
import CheckboxComponent from "./CheckboxComponent";
import LinkComponent from "./LinkComponent";
import FloatTextBox from "./FloatTextBox";
import DateTimePickerTester from "./DatePickerComponent";
import SampleComponent from "./SampleComponent";

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
				<Text> New Data from json </Text>
				<TextComponent />
				<ButtonComponent />
				<TextInputComponent />
				<CurrencyComponent />
				<CheckboxComponent />
				<LinkComponent />
				<DateTimePickerTester />
				<SampleComponent />
			</ScrollView>
		);
	}
}

