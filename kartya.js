class Kartya {
  constructor(fajlnev, elem) {
    this.elem = elem; //akuális div elem
    this.fajlnev = fajlnev;
    console.log(fajlnev);
    this.kepElem = elem.children("img"); //aktuális div elemünk képeleme
    this.allapot = false; //kezdetben a háttere látszik
    this.hatter = "kepek/hatter.jpg";
    this.setLap();
    this.elem.on("click", () => {
      this.fordit();
      this.KattintasTrigger(); //ezzel váltom ki az eseményt
    });
  }

  fordit(){
    this.allapot = !this.allapot;
    this.setLap();
  }

  setLap() {
    if (this.allapot) {
      this.kepElem.attr("src", this.fajlnev);
    } else {
      this.kepElem.attr("src", this.hatter);
    }
  }

  KattintasTrigger() {
    //let esemeny=new Event("kartyaKattintas");
    // úgy hozzunk létre az eseményt, hogy azt megmondjuk, hogy melyik objektum váltotta ki.
    let esemeny = new CustomEvent("kartyaKattintas", { detail: this });
    window.dispatchEvent(esemeny);
  }

  eltuntet(){
      this.elem.css("visibility","hidden");
  }
}
