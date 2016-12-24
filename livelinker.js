javascript:(function() {
	var currentURL = window.location.href;
	var infoURL = currentURL.split("/");
	var repoName = infoURL[4];

	var userClass = document.getElementsByClassName("author")[2];
	var userGithub = userClass.href;
	var infoUser = userGithub.split("/");
	var user = infoUser[3];

	var liveLink = 'http://' + user + '.github.io/' + repoName;
	console.log(liveLink);

	tableObject = document.getElementsByClassName('TableObject')[0];
	tableObject.innerHTML += '<div><a href="" id="liveLink">Preview</a></div>';
	document.getElementById("liveLink").href = liveLink;
})();