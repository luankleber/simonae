function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
	calcMarginTop();
}
window.onresize = function(){
	calcMarginTop();
}
function calcMarginTop()
{
	var main = id('main');
	var marginTopo = parseInt( getMarginTop( main ) );
	var marginBaixo = parseInt( getMarginBottom( main ) );


	if( main.offsetTop < -1 )
		main.style.marginTop = '-'+( parseInt( main.offsetTop ) - marginTopo )+'px';
	else if( marginTopo!=marginBaixo )
	main.style.marginTop = '-248px';
}
function getMarginTop( el )
{
	if( window.getComputedStyle )
		return document.defaultView.getComputedStyle(el, null).marginTop;
	else if( el.currentStyle )
		return el.currentStyle['marginTop'];
}
function getMarginBottom( el )
{
	if( window.getComputedStyle )
		return document.defaultView.getComputedStyle(el, null).marginBottom;
	else if( el.currentStyle )
		return el.currentStyle['marginBottom'];
}
