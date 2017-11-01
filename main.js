// our test object
var customObject = {
	name:'California, Eureka',
	onClick:function(myParam){
	  console.log("I've been clicked");
	  console.log(myParam, "I've been passed by bind");
	  console.log(this.name);
	}
}
var newObject = {
	name:"West Virginia,  Montani semper liberi"
}
// our behavior on click.
$('button').click(customObject.onClick); // this refers to button element
$('button').click(customObject.onClick.bind(customObject)); // this now refers to customObject
$('button').click(customObject.onClick.bind(newObject)); // this now refers to newObject
$('button').click(customObject.onClick.bind(customObject,"Bind this argument!")); // binds arguments to function