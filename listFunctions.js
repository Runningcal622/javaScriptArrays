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
