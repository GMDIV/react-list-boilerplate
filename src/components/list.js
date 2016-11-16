import React from 'react';

function List (props) {

	renderList() {
		return props.items.map((item)=>
			return (
				<li
					onClick={ ()=> props.selectItem(item)}
					key={item.name}
					className="list-group-item">
					{item.name}
				</li>
			)
		)
	}

	render(){
		return (

			<ul className = 'list-group col-sm-4'>
				{renderList()}
			</ul>	
		)
	}

}

