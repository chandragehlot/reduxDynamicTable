import React from 'react';
import {Dispatcher} from 'flux';
import TableReduceStore from '../utility/reducestore';


class Table extends React.Component{
	constructor(){
		super()
		this.state = {}
		this.AppDispatcher = new Dispatcher()
		this.store = new TableReduceStore(this.AppDispatcher)
	}
	componentDidMount(){
		this.token = this.store.addListener(this.handleStoreChange.bind(this))	
	}
	componentWillUnmount(){
		this.token.remove()
	}
	handleStoreChange(){
		this.setState(this.store.getState())
	}
	handleClick(){
		var xhr  = new XMLHttpRequest()
		xhr.onreadystatechange = function (){
			if(xhr.readyState === 4 || xhr.readyState == XMLHttpRequest.DONE){
				if(xhr.status === 200){
					this.AppDispatcher.dispatch({
						payload : 'load',
						data : xhr.responseText
					})
				} 
			} 
		}.bind(this); 
		xhr.open('GET','/gettabledata',true);
		xhr.send(null);
		
	}
	render(){
		return(
			<div>
			<h1 className="counter" onClick={this.handleClick.bind(this)}>Load data</h1>
			 	{this.state.aa}
			 	{this.state.tabledata}
			</div>
		)
	}
}

export default Table;

