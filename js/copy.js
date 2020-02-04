function copy(str) {
	var textArea = document.createElement("textarea");
	textArea.innerHTML = str;
	document.body.appendChild(textArea);
	textArea.select();
	document.execCommand('copy');
	toast('复制成功 : )', 0);
	textArea.parentNode.removeChild(textArea);
	//document.body.removeChild(textArea);
}
