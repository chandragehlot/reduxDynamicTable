import React from 'react';
import {ReduceStore} from 'flux/utils';

class TableReduceStore extends ReduceStore{
	getInitialState(){
		return{
			aa:0,
			tabledata:''
		}
	}
	reduce(state,action){
		switch(action.payload){
			case 'load':
		    state.aa = state.aa+1; 
		    state.tabledata = action.data
		}
		return Object.assign({},state)
	}
}

export default TableReduceStore;