# livelinker
This bookmarklet provides preview links for pull requests.

[Live Linker](!function(){var e=window.location.href,t=e.split("/"),i=t[4],l=document.getElementsByClassName("author")[2],n=l.href,a=n.split("/"),o=a[3],c="http://"+o+".github.io/"+i;console.log(c),tableObject=document.getElementsByClassName("TableObject")[0],tableObject.innerHTML+='<div><a href="" id="liveLink">Preview</a></div>',document.getElementById("liveLink").href=c}();)
