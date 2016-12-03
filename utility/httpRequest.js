/*var serverCall = function(method,url,responsehandler){
	var xhr  = new XMLHttpRequest()
	xhr.onreadystatechange = function(){
			if(xhr.readyState == 4 && xhr.status == 200 ){
				responsehandler(JSON.parse(xhr.response))
			}
	}
	xhr.open(method,url,true);
	xhr.send(null);
}

export default serverCall;
*/

//using promise

var serverCall = function(method,url){
	return new Promise(function(resolve,reject){
		var xhr  = new XMLHttpRequest()
		xhr.onreadystatechange = function(){
				if(xhr.readyState == 4 ){
					if(xhr.status == 200 && xhr.statusText == 'OK'){
						resolve(JSON.parse(xhr.response))
					}else{
						reject(Error(xhr.statusText))
					}
				}
			//responsehandler(JSON.parse(xhr.response))
		}
		xhr.open(method,url,true);
		xhr.send(null);				
	})
}

export default serverCall;