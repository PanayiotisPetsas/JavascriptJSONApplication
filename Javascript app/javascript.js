var obj = [
{
  "Name": "John",
  "age": 25
},{
  "Name": "Emily",
  "age": 31
},{
  "Name": "David",
  "age": 56
},{
  "Name": "Maria",
  "age": 19
},{
  "Name": "Helen",
  "age": 38
}
]

 var objEmpty = false;
 var stringifyObj = JSON.stringify(obj);
 //document.getElementById("demo").innerHTML = stringifyObj;
 console.log(obj);
 var output = '';


 for (var i = 0; i < obj.length; i++) {

   //' <button onclick="duplicateF(i)">duplicate</button>';

   output+= '<p class="text" id="screenName' + i + '" ondblclick="renameF(' + i + ')">' + obj[i].Name + '</p>'+' <button onclick="renameF(' + i + ')">Rename</button> ' + ' <button onclick="duplicateF(' + i + ')">Duplicate</button>' + ' <button onclick="deleteF(' + i + ')">Delete</button>'+ '<br>';

}

document.getElementById('outputs').innerHTML = output;


for(var i=0;i<obj.length;i++)
{
  console.log(obj[i]);
  document.getElementById('outputs').innerHTML = output;

}



function renameF(i)
{

  console.log('value of i is ' + i);

  console.log('VALUE OF OBJ[I]: ' + obj[i].Name);
  //var name = obj[i].Name;
  var nameId = 'screenName' + i;
  var x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  var inputIDname = nameId + 'input';
  x.setAttribute("id", inputIDname);
  x.setAttribute("value", obj[i].Name);

  document.getElementById(nameId).innerHTML = "";

document.addEventListener('keypress', function(event) {
  var userInput = document.getElementById(inputIDname).value;
  if (event.keyCode === 13) { //key 13 is the enter key -- if the enter key is pressed, then..
  if(userInput == "" || userInput == null )
  {
    alert("No data entered.");
  }
  else{
  console.log(inputIDname);
  console.log(userInput);
  var newName = userInput;

    document.getElementById(nameId).innerHTML = document.getElementById(inputIDname).innerHTML;
       obj[i].Name = newName;
       document.getElementById(nameId).innerHTML = newName;
     }
}

});
//   var newName = prompt("Please enter a new name:", "");
//   if(newName == "") {
//     alert("No data inputted.")
//   }
//   else if(newName == null)
//   {
//     //nothing occurs if the user presses 'cancel'.
//   }
//   else{
//   obj[i].Name = newName;
//   document.getElementById(nameId).innerHTML = newName;
//
//
// }


document.getElementById(nameId).appendChild(x);

}
function duplicateButtonFunction()
{
  var duplicateButton = document.createElement("input");
  duplicateButton.setAttribute("type", "button");
  duplicateButton.value = "Duplicate";
  duplicateButton.onclick = (function(opt) {
      return function() {
         duplicateF(opt);
      };
  })(i+1);
  var dublibutton = document.getElementById('demo').appendChild(duplicateButton);

}
function duplicateF(i)
{
//create another object the same as the i object
console.log('works!!');
console.log('value of i is ' + i);
obj.push({"Name":obj[i].Name,"id":obj[i].id});

console.log(obj);
//update the json/database
output='';
 for (var a = 0; a < obj.length; a++) {
   output+= '<p class="text" id="screenName' + a + '" ondblclick="renameF(' + a + ')">' + obj[a].Name + '</p>'+' <button onclick="renameF(' + a + ')">Rename</button> ' + ' <button onclick="duplicateF(' + a + ')">Duplicate</button>' + ' <button onclick="deleteF(' + a + ')">Delete</button>'+ '<br>';

 }
document.getElementById('outputs').innerHTML = output;

}

function deleteF(i)
{
  //delete the i object
  console.log('value of i is ' + i);

   delete obj[i];
   //remove it from the json array (otherwise it would return 'undefined', as the obj.length would remain the same)
   obj.splice(i, 1);
  console.log(obj);
  console.log(output);
  //update the json/database
  output='';
   for (var a = 0; a < obj.length; a++) {
     output+= '<p class="text" id="screenName' + a + '" ondblclick="renameF(' + a + ')">' + obj[a].Name + '</p>'+' <button onclick="renameF(' + a + ')">Rename</button> ' + ' <button onclick="duplicateF(' + a + ')">Duplicate</button>' + ' <button onclick="deleteF(' + a + ')">Delete</button>'+ '<br>';

   }
 document.getElementById('outputs').innerHTML = output;

}

console.log(obj.length + " is the size of obj.");
document.addEventListener("click", function(){

if(obj.length<=0)
{
  objEmpty = true;
}

if((obj.length<=0) &&(objEmpty == true))/* && objEmpty==true */
{
  objEmpty == false;
  alert("triggered");
  output= '<p ondblclick="newName">No names exist in the database. Click here to add one.</p>';
  document.getElementById('outputs').innerHTML = output;

}
});

removeEventListener("mousemove", moved);

function newName(){
  alert("okk!");
var x = document.createElement("INPUT");
x.setAttribute("type", "text");

}
