function isPalindrome(word){
	var s = new Stack();
	for(var i=0; i<word.length; i++){
		s.push(word[i]);
	}
	var rword = '';
	while(s.length()>0){
		rword += s.pop();
	}
	if(word == rword){
		return true;
	}
	else{
		return false;
	}
}


var word = "hello";
if(isPalindrome(word)){
	document.getElementById("rword").innerHTML="是";
}
else{
	document.getElementById("rword").innerHTML="不是";
}

var num = '1221';
if(isPalindrome(num)){
	document.getElementById("rword2").innerHTML="是";
}
else{
	document.getElementById("rword2").innerHTML="不是";
}