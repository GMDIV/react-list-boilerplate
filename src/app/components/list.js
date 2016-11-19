import React from 'react';

export default function List (props) {
	//renderList() {
	//return (
		console.log("list props", props)
		//<ul className = 'list-group col-sm-4'>
	
		return props.items.map((item)=> {return (
				<li
					onClick={ ()=> props.selectItem(item)}
					//key={item.name}
					className="list-group-item">
					{item.name}
				</li>
			)}
		)
	
		//</ul>	
	//)
//}
	//render(){
		
			
		
	//}

}

