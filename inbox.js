//Spam inbox bạn bè =))
//$id="100009137810476";
const token = "";
var content = "";
var timeout = 1;

$.get('https://graph.facebook.com/v2.11/me/friends?limit=5000', {
		access_token: token
	}).done(function (kq) {
		let arr = new Array(); 
		arr = kq.data;
		for(i=0;i<arr.length;i++){
			setTimeout(inbox(arr[i].id),1000*timeout);
		}
	})
//
function inbox(id) {
	$.post('https://graph.facebook.com/v2.11/me/threads', {
		to: `[{"type":"id","id":"${id}"}]`,
		message: content,
		access_token: token
	})
}