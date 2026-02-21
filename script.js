let clickCount = 0;
addclick = function() {
	clickCount++;
	document.getElementById("click-count").textContent ="clicks: "+clickCount;
}
document.getElementById("click-button").addEventListener('click',addclick);
