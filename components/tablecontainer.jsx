import React from 'react';
import {Dispatcher} from 'flux';
import TableReduceStore from '../utility/reducestore';
import Table from './table';


class TableContainer extends React.Component{
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
					var response = eval(xhr.responseText);
					this.AppDispatcher.dispatch({
						payload : 'load',
						data : response
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
			<button type="button" className="counter" onClick={this.handleClick.bind(this)}>Click to load table</button>
				{ this.state.fooddata ? <Table items={this.state.fooddata} /> : ''}
			</div>
		)
	}
}

export default TableContainer;

