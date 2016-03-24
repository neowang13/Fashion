var moschino123 = document.getElementById('moschino');

var moschinoTicketNum =moschino123.innerText;

function buyTicket(){
	moschinoTicketNum--;
	moschino123.innerText = moschinoTicketNum
}


var movieDataRef = new Firebase('https://okv09t5caeh.firebaseio-demo.com/');
var thom browne ="shop";
var moschino = " shop"
var pversace = "shop";
movieDataRef.push({thom browne:thom browne, moschino:moschino, versace:versace});







var moschinoTicketNum = moschino123.innerText;

function buyTicket(hey){
	console.log(hey);
	if(document.getElementById('moschino').innerText>0) {
	document.getElementById('moschino').innerText--;}
	// moschinoTicketNum--;
	// moschino123.innerText = moschinoTicketNum



var ticketNum =document.getElementById('moschino').innerText;
if (ticketNum > 0){
	document.getElementById('moschino').innerText --;
}else {
	alert("ticket sold out");
}

}




function buyTicket(e){
  console.log(e);
var ticketNum =e.children[1].innerText;
if (ticketNum >0){
	e.children[1].innerText--;}
	else {
		alert("ticket sold out");
	}
}



//cellector   JQuery
 
// $('.centerbutton').click(function(){
// 	var ticketNum = $($(this).find('span')).html();
// 	//get  number of ticket from button span
// 	if (ticketNum >0){
// $($(this).find('span')).html(ticketNum-1);
// } eles{
// 	$(this).addClass('alert-button');}

// });
//set number of ticket left
// 	console.log($($(this).find('span')).html());}
// );





// $('submit').click(function()){
// console.log("submit button is clicked");

// });





























