// containers
const mainCont = document.getElementById("main-container");

// input/text boxes
const txtInp = document.getElementById("text-inp");
const txtOut = document.getElementById("text-out");

// buttons
const encBtn = document.getElementById("encode-btn");
const decBtn = document.getElementById("decode-btn");



// for output only
txtOut.disabled = true;

// event listeners
encBtn.addEventListener("click", () => {
  const t = txtInp.value;
  let out = "";

  for(let i = 0; i < t.length; i++) {
    if(t[i] == "A" || t[i] == "a") out += "#A_";
    if(t[i] == "B" || t[i] == "b") out += "%Ba";
    if(t[i] == "C" || t[i] == "c") out += "$Cb";
    if(t[i] == "D" || t[i] == "d") out += "#Dc";
    if(t[i] == "E" || t[i] == "e") out += "%Ed";
    if(t[i] == "F" || t[i] == "f") out += "$Fe";
    if(t[i] == "G" || t[i] == "g") out += "#Gf";
    if(t[i] == "H" || t[i] == "h") out += "%Hg";
    if(t[i] == "I" || t[i] == "i") out += "$Ih";
    if(t[i] == "J" || t[i] == "j") out += "#Ji";
    if(t[i] == "K" || t[i] == "k") out += "%Kj";
    if(t[i] == "L" || t[i] == "l") out += "$Lk";
    if(t[i] == "M" || t[i] == "m") out += "#Ml";
    if(t[i] == "N" || t[i] == "n") out += "%Nm";
    if(t[i] == "O" || t[i] == "o") out += "$On";
    if(t[i] == "P" || t[i] == "p") out += "#Po";
    if(t[i] == "Q" || t[i] == "q") out += "%Qp";
    if(t[i] == "R" || t[i] == "r") out += "$Rq";
    if(t[i] == "S" || t[i] == "s") out += "#Sr";
    if(t[i] == "T" || t[i] == "t") out += "%Ts";
    if(t[i] == "U" || t[i] == "u") out += "$Ut";
    if(t[i] == "V" || t[i] == "v") out += "#Vu";
    if(t[i] == "W" || t[i] == "w") out += "%Wv";
    if(t[i] == "X" || t[i] == "x") out += "$Xw";
    if(t[i] == "Y" || t[i] == "y") out += "#Yx";
    if(t[i] == "Z" || t[i] == "z") out += "%Xy";
  }

  txtOut.value = out;
})

decBtn.addEventListener("click", () => {
  const  t = txtInp.value;
  let out = "";

  for(let i = 0; i < t.length; i += 3) {
    if(t.substring(i, i+3) == "#A_") out += "a";
    if(t.substring(i, i+3) == "%Ba") out += "b";
    if(t.substring(i, i+3) == "$Cb") out += "c";
    if(t.substring(i, i+3) == "#Dc") out += "d";
    if(t.substring(i, i+3) == "%Ed") out += "e";
    if(t.substring(i, i+3) == "$Fe") out += "f";
    if(t.substring(i, i+3) == "#Gf") out += "g";
    if(t.substring(i, i+3) == "%Hg") out += "h";
    if(t.substring(i, i+3) == "$Ih") out += "i";
    if(t.substring(i, i+3) == "#Ji") out += "j";
    if(t.substring(i, i+3) == "%Kj") out += "k";
    if(t.substring(i, i+3) == "$Lk") out += "l";
    if(t.substring(i, i+3) == "#Ml") out += "m";
    if(t.substring(i, i+3) == "%Nm") out += "n";
    if(t.substring(i, i+3) == "$On") out += "o";
    if(t.substring(i, i+3) == "#Po") out += "p";
    if(t.substring(i, i+3) == "%Qp") out += "q";
    if(t.substring(i, i+3) == "$Rq") out += "r";
    if(t.substring(i, i+3) == "#Sr") out += "s";
    if(t.substring(i, i+3) == "%Ts") out += "t";
    if(t.substring(i, i+3) == "$Ut") out += "u";
    if(t.substring(i, i+3) == "#Vu") out += "v";
    if(t.substring(i, i+3) == "%Wv") out += "w";
    if(t.substring(i, i+3) == "$Xw") out += "x";
    if(t.substring(i, i+3) == "#Yx") out += "y";
    if(t.substring(i, i+3) == "%Zy") out += "z";
  }

  txtOut.value = out;
})