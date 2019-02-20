var createList =function()
{
  var animals = ["Platypus","Armadillo","Turkey", "Red Panda"
    ,"Ant","Mouse"];
    document.write("<ol>");
  animals.forEach(function(ele,index,horray)
{
  document.write("<li>"+ ele+ "</li>");
})
  document.write("</ol>")

}

var changeToLength = function()
{
  var elements = document.getElementsByTagName("LI");
  for (var i=0;i<elements.length;i++)
  {
    elements[i].innerHTML = elements[i].innerHTML.length;

  }
}

var addBig = function()
{
  var elements = document.getElementsByTagName("LI");
  for (var i=0;i<elements.length;i++)
  {
    elements[i].innerHTML = "Big "+elements[i].innerHTML;

  }

}
