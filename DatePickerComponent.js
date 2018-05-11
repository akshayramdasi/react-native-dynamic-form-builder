'use-strict';

import React, {Component} from 'react'
import{
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Dimensions,DatePickerAndroid

}from 'react-native';

import DatePicker from 'react-native-datepicker';
var {width,height} = Dimensions.get('window');

export default class DatePickerComponent extends Component {

  constructor(props) {
  super(props);
  this.state = {

  date_in: '2016-05-01',
  date_out: '2016-05-01',
    
 };
}

 render(){
return(
  <View>
  <DatePicker
      style ={{padding:10}}
      date={this.state.date_in}
      mode="date"
      format="DD-MM-YYYY"
      showIcon={false}
      customStyles={{
       dateInput: {
          alignItems : 'flex-start',
          padding:10
      },
     }}
    onDateChange={(date_in) => {this.setState({date_in: date_in});}} />

  </View>
);
}
}


var styles = StyleSheet.create({
  picker: {
   width: 100,
   height:100,
  },
 });
