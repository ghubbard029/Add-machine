var sum = 0;
var clr = 0;

function add(x)
{
  sum = sum + x;
  clr = clr + 1;
  print();
}
function void2()
{
  document.getElementById("output").innerHTML = " ";
}
function print()
{
  document.getElementById("output").innerHTML = "Times clicked: " + clr + "Your sum is: " + sum;
}
