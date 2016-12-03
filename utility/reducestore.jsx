import React from 'react';
import {ReduceStore} from 'flux/utils';

class TableReduceStore extends ReduceStore{
	getInitialState(){
		return{
			fooddata:''
		}
	}
	reduce(state,action){
		switch(action.payload){
			case 'load':
		    state.fooddata = action.data
		    break;
		    case 'error':
		    state.error = action.data
		    break;
		}
		return Object.assign({},state)
	}
}
export default TableReduceStore;