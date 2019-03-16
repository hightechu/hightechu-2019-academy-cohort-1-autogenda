var header = document.getElementsByTagName("header")[0];
const times = ["A.M.", "P.M"];
var options = ["sleep", "work", "school"];
var dl = document.getElementsByTagName("dl")[0];
let elmnt, select, color;
var list = [];

// create list
for (var j = 0; j < 2; j++)
{
	elmnt = dl.appendChild(document.createElement("li"));
	elmnt.innerHTML = times[j];
	elmnt.style.backgroundColor = "rgb(51, 97, 255)";
	
	for (var i = 0; i < 12; i++)
	{
		elmnt = dl.appendChild(document.createElement("li"));
		elmnt.innerHTML = i + 1;
		list.push(elmnt);
	}
}

// init
for (i = 0; i < list.length; i++) 
{
	document.getElementsByTagName("li")[i].addEventListener("click", function(e)
	{
		// remove old elements
		for (var j = 0; j < document.getElementsByTagName('cpick').length; j++) {
			document.getElementsByTagName('ul')[0].removeChild(document.getElementsByTagName('cpick')[j]);
		}
        color = null;

		// create new color picker (cpick)
		cpick = document.getElementsByTagName("ul")[0].appendChild(document.createElement('cpick'));
		cpick.style.left = '' + (e.clientX + window.scrollX) + 'px';
		cpick.style.top = '' + (e.clientY - 100 + window.scrollY) + 'px';
		cpick.style.width = '240px';
		cpick.style.height = '120px';
		select = this.style;
        var cpickUl = cpick.appendChild(document.createElement('ul'));

		// setup child node
		for (var j = 0; j < options.length; j++) {
			cpickUl.appendChild(document.createElement('li'));
			cpickUl.childNodes[j].id = options[j];
			cpickUl.childNodes[j].innerHTML = options[j];
            cpickUl.childNodes[j].style.width = '240px';
			cpickUl.childNodes[j].addEventListener('click', function(e) {
				color = window.getComputedStyle(document.querySelector('#' + this.id)).getPropertyValue('background-Color');
				//console.log(color);
			}, false);
		}

	}, false);
}

//main loop
function draw()
{
	if (select != color && color != null) {
		select.backgroundColor = color;
	}
	requestAnimationFrame(draw);	
}
draw();
