import React from 'react';

function Info (props){


	render(){
		if(!props.item){
			return (
				<div className='details'>
					<h1>Select Item for Information</h1>
				</div>
			)
		}

		return (
			<div className = 'details'>
				<h3>Details for: </h3>
				<div>
					<h2>{props.item.name}</h2>
				</div>
				<div>{props.item.piece}</div>
			</div>
		)
	};
};

