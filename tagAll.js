// tagggggggggg
let token = "";
let id_post = "";
fetch('https://graph.facebook.com/v2.11/me/friends?limit=5000&access_token='+token,{
	method : 'GET',
})
.then(res => res.json())
.then(res => {
	let data = res.data;
	let comment_text ="";
	for (var i = 0; i < data.length; i++) {
		comment_text += "@["+data[i].id+":0]";
	}
	let dtsg = document.querySelector("input[name='fb_dtsg']").value;
	fetch('https://m.facebook.com/a/comment.php?ft_ent_identifier='+id_post,{
		"credentials":"include",
		headers: {
			"Content-type" : "application/x-www-form-urlencoded"
		},
		"body":"fb_dtsg="+dtsg+"&comment_text="+comment_text,
		"method":"POST"
	})
})
.catch(error => console.error(error))
