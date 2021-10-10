//節點 監聽器
const rgb = document.querySelector(".rgb");
//節點 改數字
const rcolrtext = document.querySelector(".rcolrtext");
const gcolrtext = document.querySelector(".gcolrtext");
const bcolrtext = document.querySelector(".bcolrtext");
//節點 取值
const rtext = document.querySelector(".rtext");
const gtext = document.querySelector(".gtext");
const btext = document.querySelector(".btext");
//節點 改數字
const hextext = document.querySelector(".hextext");
//節點 改顏色
const back = document.querySelector(".back");
//節點 
const rcolor = document.querySelector(".rcolor");
const gcolor = document.querySelector(".gcolor");
const bcolor = document.querySelector(".bcolor");

//掛監聽器 取值
rgb.addEventListener("change", function (event) {
  let rgbinput = { r: 0, g: 0, b: 0 };
  rgbinput.r = Number(rtext.value);
  rgbinput.g = Number(gtext.value);
  rgbinput.b = Number(btext.value);

  rgboutput(rgbinput.r, rgbinput.g, rgbinput.b);
  backoutput(rgbinput.r, rgbinput.g, rgbinput.b);

  let q = hext(rgbinput.r, rgbinput.g, rgbinput.b);
  hexoutput(q);
});

//改背景色
function backoutput(r, g, b) {
  back.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  rcolor.style.backgroundColor = `rgb(${r}, 0, 0)`;
  gcolor.style.backgroundColor = `rgb(0, ${g}, 0)`;
  bcolor.style.backgroundColor = `rgb(0, 0, ${b})`;
}

//改rgb 各數字
function rgboutput(r, g, b) {
  rcolrtext.innerText = `${r}`;
  gcolrtext.innerText = `${g}`;
  bcolrtext.innerText = `${b}`;
}
//改hex 各數字
function hexoutput(value) {
  hextext.innerText = value;
}

//rgbtohex
function hext(r, g, b) {
  return `#${rgbtohex(r)}${rgbtohex(g)}${rgbtohex(b)}`;
}

//10轉16進位
function rgbtohex(value) {
  if (value >= 0 && value <= 255) {
    let hexoutput = Math.floor(value).toString(16);
    if (hexoutput.length === 1) {
      return `0${hexoutput}`;
    } else {
      return hexoutput;
    }
  } else if (value > 255) {
    return "ff";
  } else if (value < 0) {
    return "00";
  } else {
    return "00";
  }
}