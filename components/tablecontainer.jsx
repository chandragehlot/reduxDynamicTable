import React from 'react';
import {Dispatcher} from 'flux';
import TableReduceStore from '../utility/reducestore';
import Table from './table';
import serverCall from '../utility/httpRequest.js';

class TableContainer extends React.Component{
	constructor(){
		super()
		this.state = {}
		this.AppDispatcher = new Dispatcher()
		this.store = new TableReduceStore(this.AppDispatcher)
		this.callDispatch = this.callDispatch.bind(this)
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
		//serverCall(method,url,responsehandler)
		serverCall('GET','/gettabledata',this.callDispatch)
	}
	callDispatch(response){
		this.AppDispatcher.dispatch({
			payload : 'load',
			data : response
		})		
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

