var serverCall = function(method,url,responsehandler){
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
