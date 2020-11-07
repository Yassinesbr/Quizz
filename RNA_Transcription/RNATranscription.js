function RNATranscription() {
  let input = document.getElementById("input").value;
  let RNA = []
  let output = document.getElementById('output')

  let splited = input.split("")

 try {
  splited.forEach(element => {
    if (element =="G") {
      RNA.push("C")
    }
    else if (element =="C") {
      RNA.push("G")
    }
    else if (element =="T") {
      RNA.push("A")
    }
    else if (element =="A") {
      RNA.push("U")
    }
    else{
      throw "Error : INVALIDE DNA FORMAT"
    }

  });

  RNA = RNA.join("")
  console.log(RNA);
  output.textContent = RNA
}
catch (e) {
  output.textContent = e
}

}



