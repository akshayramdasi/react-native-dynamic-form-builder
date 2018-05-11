import React from 'react';

import {StyleSheet, ListView, Text, TextInput, TouchableHighlight, View} from 'react-native';

const adresses = [
    {
        street: "English",
        city: "Sydney",
        country: "Australia"
    },{
        street: "Estonian",
        city: "Sydney",
        country: "Australia"
    },{
        street: "Esperanto",
        city: "Sydney",
        country: "Australia"
    }
];

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class LinkComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchedAdresses: []
        };
    }
    submit() {
      
    }
    searchedAdresses = (searchedText) => {
        let searchedAdresses = adresses.filter(function(adress) {
            return adress.street.toLowerCase().indexOf(searchedText.toLowerCase()) > -1;
        });
        this.setState({searchedAdresses: searchedAdresses});
    };

    renderAdress = (adress) => {
        return (
            <TouchableHighlight onPress={() => this.submit()}>
            <View>
                <Text>{adress.street}</Text>
            </View>
               </TouchableHighlight>
        );
    };
    render() {
        return (
             <View>
                 <View>
                <TextInput
                    onChangeText={this.searchedAdresses}
                    placeholder="Type your language here"
                    value={this.searchedAdresses} />
                <ListView
                    dataSource={ds.cloneWithRows(this.state.searchedAdresses)}
                    renderRow={this.renderAdress} />
            </View>  
              </View>
        );
    }
}

