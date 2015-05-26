var $clickMeButton = $('#click-me');
var $myBox = $('#messageList');
var $message = $('#txtMessage');
$clickMeButton.on('click', clickBox);
$( 'body').on('click', 'div', 
	function(e){
	console.log ($ (this).text() );
	$(e.target).css('text-decoration', 'line-through');
	$(e.target).css('text-decoration', 'line-through');

});

function clickBox(){
	var userText= $message.val();
	console.log (userText);
	$words.push ({todo:userText});
	console.log($words);
	render();
}
var $words=[];

function render (){
	$myBox.innerHTML='';
	var allWords='';
	for(i=0; i<$words.length; i++){
	allWords=allWords+'<div><input type="checkbox"></input>'+$words[i].todo+'</div>';
	
	}

	
$myBox.html(allWords);
}








// $(document). on('ready', start);

// function start(e){
// 	var $inputBox = $('#todo-input');
// 	var $todoButton = $('#add-todo-button');
// }


// var clickMeButton=document.getElementById('click-me');
// var myBox=document.getElementById('messageList');
// var message=document.getElementById('txtMessage');
// clickMeButton.addEventListener('click',clickBox);



// function clickBox(){
// 	var userText=message.value;
// 	console.log (userText);
// 	words.push (userText);
// 	console.log(words);
// 	render();
// }

// var words=[];

// function render(){
// 	myBox.innerHTML='';
// 	var allWords='';
// 	for(i=0; i<words.length; i++){
// 		allWords=allWords+words[i]+'<br>';
// 	}
	
// myBox.innerHTML=allWords;
// }

