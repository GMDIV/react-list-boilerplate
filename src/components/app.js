import React from 'react';
import List from '../containers/list';
import Info from '../containers/info';
import Data from '../data/data.js';


export default class App extends React.Component {
	constructor(props){
		super()	

		this.state= {
			items: props,
			activeItem: null 
		}
	}

	pickThisOne(part){
		this.setState(this.state.activeItem = part)
	}

	render(){
		return (
			<div>
				<List items={this.state.items} selectItem={this.pickThisOne.bind(this)} />
				<Info data = {this.state.activeItem} />
			</div>
		)
	}
}