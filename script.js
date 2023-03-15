function mulai() {
  var nama = prompt("Kalo boleh tau nama kamu siapa?");
  if (nama === "") {
    alert("Hmm.. Masukin dong namanya");
  } else {
    alert("Hallo " + nama);
    if (nama === "annisa") {
      alert(nama + " Maafin Rozan yaa...😥");
      tahapakhir();
    } else if (nama === "Annisa") {
      alert(nama + " Maafin Rozan yaa...😥");
      tahapakhir();
    } else {
      alert("Kamu bukan annisa yaa...");
      alert("sorry web ini hanya untuk annisa.. sana pergi wlee");
    }
  }
}

function tahapakhir() {
  if (confirm("Maafin yaaa pleaseeee....😥😥")) {
    alert("yeyeyeyey.. makasih yaa annisaaa hehehehe");
    var img = document.querySelector("img");
    var btn = document.querySelector("button");
    img.src =
      "https://s3.getstickerpack.com/storage/uploads/sticker-pack/quby-pentol-gif/sticker_11.gif?afb050261cc5640e21ce2eb44043c17a";
    document.querySelector("h1").innerHTML = "Makasih annisaaaaa hehehe";
    btn.classList.add("hiden");
  } else {
    maafmuter();
  }
}

function maafmuter() {
  alert("Masa sih gamau di maafin.....😥😥😥😥😥");
  alert("Maafin pleaseeeee......😥😥😥");
  tahapakhir();
}
