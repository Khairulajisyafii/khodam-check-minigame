const khodams = [
  {
    name: "denis",
    desc: "Khodam-nya Denis, spesialis jaga jemuran biar gak hilang!",
  },
  {
    name: "dipenjara",
    desc: "Khodam tahanan, siap bantuin kalau kamu ketangkep gara-gara hape kebawa.",
  },
  {
    name: "harimaunongki",
    desc: "Harimau nongkrong, bukan cuma pas galak, tapi juga pas santai.",
  },
  {
    name: "hazard",
    desc: "Khodam misterius level 'awas bahaya' — bawaannya serem tapi setia.",
  },
  {
    name: "kaisaramba",
    desc: "Kaisar Amba, ahli strategi, pernah jadi kepala geng khodam.",
  },
  {
    name: "kucingcukurukuk",
    desc: "Kucing cukurukuk, si tukang ngintip tapi nggak pernah ketahuan.",
  },
  {
    name: "kucingrukiah",
    desc: "Kucing Rukiah, pakar ruwatan dan pengusir makhluk halus nyasar.",
  },
  {
    name: "kucingsamurai",
    desc: "Kucing Samurai, walaupun kecil, pedangnya tajam buat lawan musuh.",
  },
  {
    name: "kuntiwaifu",
    desc: "Kunti Waifu, setia nemenin kamu late night gaming — 24/7 support!",
  },
  {
    name: "malaikat",
    desc: "Malaikat pengawas, kadang kelewat teliti sampe bikin kamu geregetan.",
  },
  {
    name: "ronaldomasuklava",
    desc: "Ronaldo masuk lava, si jago tendangan maut, nggak takut panas!",
  },
  {
    name: "sad",
    desc: "Khodam sedih, karena kamu lupa mandi dan lupa panggil dia.",
  },
  {
    name: "siradolf",
    desc: "Siradolf, khodam dengan gaya nyentrik, suka bikin onar tapi lucu.",
  },
  {
    name: "suki",
    desc: "Suki, penasehat cinta yang sok tau tapi sebenarnya bener juga.",
  },
  {
    name: "wibu",
    desc: "Wibu sejati, khodam yang ngingetin buat nonton anime bareng.",
  },
  {
    name: "zonk",
    desc: "Zonk! Khodam yang suka nyamber kebaikan, tapi kadang lupa bawa berkah.",
  },
];
function play() {
  const name = document.getElementById("nama").value;
  const greets = document.getElementById("a");
  const text = document.getElementById("b");
  const image = document.getElementById("img");
  let random = Math.floor(Math.random() * (khodams.length + 1));
  greets.innerText = `halo ${name} khodam kamu adalah ${khodams[random].name}`;
  text.innerText = `${khodams[random].desc}`;
  image.src = `assets/${khodams[random].name}.jpg`;
}

document.getElementById("start").addEventListener("click", () => {
  play();
});
