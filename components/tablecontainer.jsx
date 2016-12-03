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
		this.handleClick = this.handleClick.bind(this)
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
		//serverCall('GET','/gettabledata',this.callDispatch)

		serverCall('GET','/gettabledata').then(function(response){
				this.AppDispatcher.dispatch({
					payload : 'load',
					data : response
				})
			}.bind(this),function(error){
				this.AppDispatcher.dispatch({
					payload : 'error',
					data : error
				})
			console.log(error)
		}.bind(this))
	}
	render(){
		return(
			<div>
			{this.state.error ? <div className="error"> There is some error of server please tryAgain later </div>:''}			
			<button type="button" className="counter" onClick={this.handleClick.bind(this)}>Click to load table</button>
				{ (this.state.fooddata && !this.state.error) ? <Table items={this.state.fooddata} /> : ''}

			</div>
		)
	}
}

export default TableContainer;

