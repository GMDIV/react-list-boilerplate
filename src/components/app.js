import React from 'react';
import List from '../containers/list';
import Info from '../containers/info';
import Data from '../data/data.js';


export default class App extends React.Component {
	constructor(props){
		super(props)	

		this.state= {
			items: props
			activeItem: props[0]
		}
	}

	render(){
		return (
			<div>
				<List items={this.state.items} />
				<Info data = {this.state.activeItem} />
			</div>
		)
	}
}