function myFunction() {
	const copyText = document.getElementById("myInput");
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(copyText.value);

	const tooltip = document.getElementById("myTooltip");
	tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
	const tooltip = document.getElementById("myTooltip");
	tooltip.innerHTML = "Copy to clipboard";
}
