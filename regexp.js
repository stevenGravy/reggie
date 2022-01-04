

//tracking set for the elements list
const tableRows = new Set()
tableRows.add(1);
tableRows.add(2);

function change()
{
  document.getElementById('output').innerText='testchange'  + new Date().getDate();

}

function addRow()
 {
  var timeMillis =   new Date().getMilliseconds();
  var table = document.getElementById('tableelements');
  var rowCount = table.rows.length;
  
   var row = 
   "<tr id=\"" + timeMillis + "row\"><td>" + (rowCount) +"</td><td><input type=\"text\"/></td>"
   
   +"<td><button onclick=\"deleteRow('tableelements', this)\">delete</button></td></tr>";
   

   table.innerHTML += row;
   console.log(row);

 }

 function deleteRow(table, r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById(table).deleteRow(i);
}


function isEmpty(str) {
  return (!str || (str.trim()).length === 0 );
}

function testRegExps(){
  var data = document.getElementById('testdata').value;
  var regexp = document.getElementById('regexp');
  var text = document.getElementById('firstValue');
  var text2 = document.getElementById('secondValue');
  var testRegexp = '^' +text.value + '$';
  var text2String = ""+text2.value;
  

  if(!isEmpty(text2String) )
  { 
  testRegexp+= "|^"+text2String + "$";
  }
  

  regexp.value= testRegexp;
  var outputId = document.getElementById('outputdata');
  
  var regexGlobal = new RegExp(testRegexp,'g');
  outputId.innerHTML="result: "+ regexGlobal.test(data);
  
}

function runCustomExp(){
  var customRegExp = document.getElementById('regexp').value;
  if(isEmpty(customRegExp))
  {
  alert("Regular Expression is empty.");
  }
  else{
    var data = document.getElementById('testdata').value;
    var regexGlobal = new RegExp(customRegExp,'g');
    var outputId = document.getElementById('outputdata');
    outputId.innerHTML="result: "+ regexGlobal.test(data);

  }



}


function populateRegExp()
{
try{
  var regexp = createRegExp();
  var customExp= document.getElementById('regexp');
  customExp.value = regexp;
}catch(  e)
  {alert (e);

  }

}


function createRegExp()
 {
  var regexp = "";
  var text1 = document.getElementById('search1');
  if(isEmpty(text1.value))
  { throw "Need a non-empty string in at least the first value (dev or prod)";
   
  }
  else{


    
    var hasMoreThenOne = false;
    for (var it = tableRows.values(), val= null; val=it.next().value; ) {
   
     
      alert (val);
      var individualRegExp = "";

      var searchInputId = "search" + val;
      var exactMatchId = "exactmatch" + val;
      individualRegExp = document.getElementById(searchInputId).value;
      var checked = document.getElementById(exactMatchId).checked;
      if(isEmpty(individualRegExp))
         continue; //nothing to add, skip
      if(checked)
      individualRegExp = '^' + individualRegExp + '$';

      if (hasMoreThenOne)
        regexp+='|';
      regexp+= individualRegExp;
      hasMoreThenOne = true;
      
  }
  return regexp;


  }

 }


 function runLearn1()
  {

    try{
      var data = document.getElementById('learn1data').value;
      alert('has data' + data);
      var regexp = document.getElementById('learn-1-expression').value;
      var regexGlobal = new RegExp(regexp,'g');
      var stringFound = "";
      while ((array1 = regexGlobal.exec(data)) !== null) {
        stringFound += "Found "+ array1[0] +". ";
        // expected output: "Found foo. Next starts at 9."
        // expected output: "Found foo. Next starts at 19."
      }
      if (stringFound == "")
        {
          stringFound = "No match found";


        }
        var learn1results = document.getElementById('learn1result');
        learn1results.innerHTML=stringFound;

    } catch(err)
    {
      alert(err);
    }
  }