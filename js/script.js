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
    if(t[i] == "A" || t[i] == "a") out += "#Z_";
    if(t[i] == "B" || t[i] == "b") out += "%Ya";
    if(t[i] == "C" || t[i] == "c") out += "$Xb";
    if(t[i] == "D" || t[i] == "d") out += "#Wc";
    if(t[i] == "E" || t[i] == "e") out += "%Vd";
    if(t[i] == "F" || t[i] == "f") out += "$Ue";
    if(t[i] == "G" || t[i] == "g") out += "#Tf";
    if(t[i] == "H" || t[i] == "h") out += "%Sg";
    if(t[i] == "I" || t[i] == "i") out += "$Rh";
    if(t[i] == "J" || t[i] == "j") out += "#Qi";
    if(t[i] == "K" || t[i] == "k") out += "%Pj";
    if(t[i] == "L" || t[i] == "l") out += "$Ok";
    if(t[i] == "M" || t[i] == "m") out += "#Nl";
    if(t[i] == "N" || t[i] == "n") out += "%Mm";
    if(t[i] == "O" || t[i] == "o") out += "$Ln";
    if(t[i] == "P" || t[i] == "p") out += "#Ko";
    if(t[i] == "Q" || t[i] == "q") out += "%Jp";
    if(t[i] == "R" || t[i] == "r") out += "$Iq";
    if(t[i] == "S" || t[i] == "s") out += "#Hr";
    if(t[i] == "T" || t[i] == "t") out += "%Gs";
    if(t[i] == "U" || t[i] == "u") out += "$Ft";
    if(t[i] == "V" || t[i] == "v") out += "#Eu";
    if(t[i] == "W" || t[i] == "w") out += "%Dv";
    if(t[i] == "X" || t[i] == "x") out += "$Cw";
    if(t[i] == "Y" || t[i] == "y") out += "#Bx";
    if(t[i] == "Z" || t[i] == "z") out += "%Ay";
  }

  txtOut.value = out;
})

decBtn.addEventListener("click", () => {
  const  t = txtInp.value;
  let out = "";

  for(let i = 0; i < t.length; i += 3) {
    if(t.substring(i, i+3) == "#A_") out += "z";
    if(t.substring(i, i+3) == "%Ba") out += "y";
    if(t.substring(i, i+3) == "$Cb") out += "x";
    if(t.substring(i, i+3) == "#Dc") out += "w";
    if(t.substring(i, i+3) == "%Ed") out += "v";
    if(t.substring(i, i+3) == "$Fe") out += "u";
    if(t.substring(i, i+3) == "#Gf") out += "t";
    if(t.substring(i, i+3) == "%Hg") out += "s";
    if(t.substring(i, i+3) == "$Ih") out += "r";
    if(t.substring(i, i+3) == "#Ji") out += "q";
    if(t.substring(i, i+3) == "%Kj") out += "p";
    if(t.substring(i, i+3) == "$Lk") out += "o";
    if(t.substring(i, i+3) == "#Ml") out += "n";
    if(t.substring(i, i+3) == "%Nm") out += "m";
    if(t.substring(i, i+3) == "$On") out += "l";
    if(t.substring(i, i+3) == "#Po") out += "k";
    if(t.substring(i, i+3) == "%Qp") out += "j";
    if(t.substring(i, i+3) == "$Rq") out += "i";
    if(t.substring(i, i+3) == "#Sr") out += "h";
    if(t.substring(i, i+3) == "%Ts") out += "g";
    if(t.substring(i, i+3) == "$Ut") out += "f";
    if(t.substring(i, i+3) == "#Vu") out += "e";
    if(t.substring(i, i+3) == "%Wv") out += "d";
    if(t.substring(i, i+3) == "$Xw") out += "c";
    if(t.substring(i, i+3) == "#Yx") out += "b";
    if(t.substring(i, i+3) == "%Zy") out += "a";
  }

  txtOut.value = out;
})