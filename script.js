$(function () {
  const szuloElem = $("article");
  const sablonElem = $(".kartya");
  const meret = 3;
  const kivalasztottKartyak = [];

  for (let i = 0; i < meret; i++) {
    for (let k = 0; k < 2; k++) {
      const ujElem = sablonElem.clone().appendTo(szuloElem);
      const kartya = new Kartya("kepek/kep" + (i + 1) + ".jpg", ujElem);
    }
  }
  sablonElem.remove();

  $(window).on("kartyaKattintas", (event) => {
    console.log(event.detail);
    kivalasztottKartyak.push(event.detail);
    //akkor van két kártya felfordítva, ha tömb hossza 2
    if (kivalasztottKartyak.length == 2) {
      if (kivalasztottKartyak[0].fajlnev == kivalasztottKartyak[1].fajlnev) {
        console.log("egyforma");
        //el kell tüntetni a kártyákat
        kivalasztottKartyak[0].eltuntet();
        kivalasztottKartyak[1].eltuntet();
        kivalasztottKartyak.splice(0, 2);
      } else {
        console.log("nem egyforma");
        setTimeout(function () {
          kivalasztottKartyak[0].fordit();
          kivalasztottKartyak[1].fordit();
          kivalasztottKartyak.splice(0, 2);
        }, 1000);
      }
    }
  });
});
