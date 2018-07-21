// CODE xóa bạn bè
const token = "";
const timeout = 1;
let rq = "https://graph.facebook.com/v2.11/me/friends?limit=5000&access_token=";
$.ajax({
	url: rq+token,
	type: 'get',
	dataType: 'json',
})
.done(function(repon) {
	data = repon.data;
	list = data.filter( ob => {
		return ob.id!="100015314010232" && ob.id!="608056029";//không xóa bạn bè có id này
	});
	list.forEach(function(data, i){
		setTimeout(function() {
			$.get('https://graph.facebook.com/v2.12/me/friends/?uid='+data.id+'&access_token='+token+'&method=delete', function(kq) {
			  	if(kq.success){
			  		console.log("Xóa id: "+data.id+" thành công!-");
			  	}else{
			  		console.log("Xóa id: "+data.id+" thất bại!-");
			  	}
			});
		},1000*timeout);
	});
})
.fail(function() {
	console.log("error");
})
.always(function() {
	console.log("complete");
});