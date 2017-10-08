// validate.js

document.addEventListener("DOMContentLoaded", function(event) { 
    
    addOnClickListeners();
});

function addOnClickListeners(){

    var submit = document.getElementById('submitbutton');
    
		
    	
  		submit.addEventListener("click",function(event){
  			validate();
  		});
  		
     
}

function validate(){
	
	
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var msg = document.getElementById('msg').value;
	
	notifyIfEmpty('Name',name);
	notifyIfEmpty('Message',msg);
	
	if (checkemail(email) == false)
	{
		alert('Invalid email input');
	}
	
}


function notifyIfEmpty(string,input)
{	if (isEmpty(input) == true) 
		{
			alert(string+' field can not be empty');
		}

}


	
	

function checkemail(email){
	
	if (/^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/.test(email))
	{
		return true;
	}

	return false;
}
    
function isEmpty(input){
	
	if (input.length <= 0)
	{
		return true;
	}
	return false;	
}
    
    


