//invite friends watch live stream
let dtsg = document.querySelector("input[name='fb_dtsg']").value;
let video_id = "1849827748465846";
let friend_ids = "100009732977207,100009137810476" ; 
fetch('https://www.facebook.com/live_video/invite_friends',{
	"credentials":"include",
	headers: {
		"Content-type" : "application/x-www-form-urlencoded"
	},
	"body":"fb_dtsg="+dtsg+"&video_id="+video_id+"&friend_ids="+friend_ids,
	"method":"POST"
})