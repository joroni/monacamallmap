// https://github.com/svgdotjs/svg.js
// https://github.com/ariutta/svg-pan-zoom
var mySVG = SVG('Level_1').size(500, 300).attr('id','svg-container').addClass('svg-container');
var myGroup = mySVG.group().attr('id','grpDots');
console.log('mySVG');
console.log(mySVG);
console.log(' --- ');


var arrCircles = [
	{ x: 50,  y: 120, diameter: 20, color: '#ff0000' },
	{ x: 100, y: 175, diameter: 20, color: '#00ff00' },
	{ x: 175, y: 115, diameter: 20, color: '#0000ff' },
	{ x: 210, y: 225, diameter: 20, color: '#BADA55' },
	{ x: 230, y: 100, diameter: 20, color: '#55DABA' },
	{ x: 250, y: 50,  diameter: 20, color: '#123456' },
	{ x: 300, y: 130, diameter: 20, color: '#abcdef' },
	{ x: 345, y: 72,  diameter: 20, color: '#ddaabb' },
	{ x: 375, y: 20,  diameter: 20, color: '#11aacc' },
	{ x: 423, y: 175, diameter: 20, color: '#ffaaff' }
];
//var circle = mySVG.circle(20).move(100,100);
for (var i = 0; i < arrCircles.length; i++) {
	var myCircle = arrCircles[i];
	myCircle.svg = myGroup.circle(myCircle.diameter).addClass('circle-color').move(myCircle.x,myCircle.y);
};
var panZoomInstance = svgPanZoom('#svg-container', {
	//zoomEnabled: true,
	//controlIconsEnabled: true,
	//fit: true,
	//center: true,
	//minZoom: 0.1
	
  //viewportSelector: '.svg-pan-zoom_viewport',
	panEnabled: true,
	controlIconsEnabled: false,
	zoomEnabled: true,
	dblClickZoomEnabled: true,
	mouseWheelZoomEnabled: true,
	preventMouseEventsDefault: true,
	zoomScaleSensitivity: 0.2,
	minZoom: 0.5,
	maxZoom: 3,
	fit: false,
	contain: false,
	center: false,
	refreshRate: 'auto',
	//beforeZoom: function(){},
	//onZoom: function(){},
	//beforePan: function(){},
	//onPan: function(){},
	onPan: function(evt){
		test(evt);
		//console.log(myGroup.node.transform.baseVal[0].matrix.e);
		//console.log(' ----------------- ');
	},
	//customEventsHandler: {},
	eventsListenerElement: null	
});

function test(evt) {
	console.log(evt);
}

(document.getElementById('reset')).addEventListener("click", function(event) {
	//console.log( event );
	//console.log( myGroup.attr('id') );
	//console.log('Current pan:');
	//console.log( panZoomInstance.getPan() );
	panZoomInstance.reset();
});

																									 (document.getElementById('corner')).addEventListener("click", function(event) {
	var currentZoom = panZoomInstance.getZoom();
	panZoomInstance.pan({x: -50*currentZoom, y: -120*currentZoom});
});
