import React from 'react';
import List from '../components/list';
import Info from '../components/info';
import Data from '../data/data.js';


export default class App extends React.Component {
	constructor(props){
		super(props)	

		this.state= {
			items: this.props.data,
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