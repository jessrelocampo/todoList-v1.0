alert('This is a Simple Calculator Made By JsrL using JS v1.0')

#addition
var fnum = prompt('Enter First Number: ');
var snum = prompt('Enter Second Number: ');

var sum = parseInt(fnum) + parseInt(snum);
document.write(' The sum is ', sum );

var questions = {
fnum: function(){
	prompt('Enter First Number: ');
},
snum: function(){
	prompt('Enter Second Number: ');
}
var sum = parseInt(this.questions.fnum) + parseInt(this.questions.snum);
alert(' The sum is ', sum );
};

