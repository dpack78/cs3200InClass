import React, { Component } from 'react';
import {
		Platform,
		StyleSheet,
		Text,
		View
} from 'react-native';
import Styles from '../Styles/Styles'
import UtilityFunctions from './UtilityFunctions'
import ApiService from './ApiService'

export default class Events extends Component {
	constructor(props) {
        super(props);
        this.state = {
            data: null,     //Will contain all events retrieved from the api.
          }
	}
	
	componentDidMount() {
		this._getEvents(); //Populate this.state.data with data from api when component mounts
	}

	render() {
		return (
			<View>
				<Text style={Styles.headerText}>
					Important Events that occurred on {UtilityFunctions.getCurrentDate()}
				</Text>
				{this.state.data != null ? this._renderEvents() : <Text>Loading...</Text>} {/* Display loading text while data from api is being retrieved */}
			</View>
		);
	}

	//Populate this.state.data with api call
	_getEvents() {
		ApiService.getTodaysEvents()
		.then(results =>{
			this.setState({data: results});
		  })
		  .catch((error) => {
			console.error(error);
			reject(error);
		})
	}

	//Put data from api into a FlatList to be rendered
	_renderEvents() {
		return (<FlatList
			data = {this.state.data}
			//keyExtractor = {(item, index) => item.something} //TODO: Change item.something
			renderItem={this._renderItem}
	/>);
	}

	// Set how each item inside this.state.data is displayed. Used as the FlatList's renderItem method.
    _renderItem = ({item}) => {
        return (
        <View style={Styles.listElementView}>
			<Text>{item.year} or whatever the api returns</Text>
            <Text>{item.eventSummary}</Text>
        </View>
        );
      }
}