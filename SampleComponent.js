import {
    MKTextField, MKColor, MKCheckbox, MKRadioButton
  } from 'react-native-material-kit';
  import {
	Platform,
	StyleSheet,Button,
	Text,TextInput,Image,
	View
} from 'react-native';
  import React, { Component } from 'react';
  
  export default class SampleComponent extends Component {
    render() {
		return (
            <View>
            <MKTextField
            tintColor={MKColor.Lime}
            textInputStyle={{color: MKColor.Orange}}
            placeholder="mdc text field"
          />
            <MKCheckbox
                checked={false}
            />
          </View>
		);
	}
}

