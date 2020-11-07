function reverse() {
  let input = document.getElementById("input").value;
  let output = document.getElementById('output')
  
  let splited = input.split("")
  let reversed = splited.reverse().join("")
  
  output.textContent = reversed
}