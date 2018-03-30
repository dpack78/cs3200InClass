import React, { Component } from 'react';
import {
		Platform,
		StyleSheet,
		Text,
		View,
		FlatList,
		ImageBackground
} from 'react-native';
import Styles from '../styles/Styles'
import UtilityFunctions from './UtilityFunctions'
import ApiService from './ApiService'

export default class DeathsScreen extends Component {
	constructor(props) {
        super(props);
        this.state = {
            data: null,     //Will contain all events retrieved from the api.
          }
	}

	componentDidMount() {
		this._getDeaths(); //Populate this.state.data with data from api when component mounts
	}

	render() {
		return (
			<View>
				<ImageBackground style={Styles.imageBack} source={{uri: "https://images.pexels.com/photos/5412/water-blue-ocean.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}}>
					<Text style={Styles.headerText}>
						Famous people who died on {UtilityFunctions.getCurrentDate()}
					</Text>
					{this.state.data != null ? this._renderDeaths() : <Text>Loading...</Text>}
				</ImageBackground>
				
			</View>
		);
	}

	//Populate this.state.data with api call
	_getDeaths() {
		ApiService.getTodaysDeaths()
		.then(results =>{
			this.setState({data: results});
		  })
		  .catch((error) => {
			console.error(error);
			reject(error);
		})
	}

	//Put data from api into a FlatList to be rendered
	_renderDeaths() {
		return (<FlatList
			data = {this.state.data}
			keyExtractor = {(item, index) => item.text} //TODO: Change item.something
			renderItem={this._renderItem}
	/>);
	}

	// Set how each item inside this.state.data is displayed. Used as the FlatList's renderItem method.
    _renderItem = ({item}) => {
        return (
			<View style={[Styles.listElementView, Styles.TextOnImage]}>
				<Text style={Styles.whiteText} >{item.year}</Text>
				<Text style={Styles.whiteText} >{item.text}</Text>
			</View>
			);
      }
}