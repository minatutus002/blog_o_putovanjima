let navbarDiv = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        navbarDiv.classList.add('navbar-cng');
    } else {
        navbarDiv.classList.remove('navbar-cng');
    }
});


const navbarCollapseDiv = document.getElementById('navbar-collapse');
const navbarShowBtn = document.getElementById('navbar-show-btn');
const navbarCloseBtn = document.getElementById('navbar-close-btn');
// show navbar
navbarShowBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.add('navbar-collapse-rmw');
});

// hide side bar
navbarCloseBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
});

document.addEventListener('click', (e) => {
    if(e.target.id != "navbar-collapse" && e.target.id != "navbar-show-btn" && e.target.parentElement.id != "navbar-show-btn"){
        navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
    }
});

// stop transition and animatino during window resizing
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});


  function displayMessage() {
            var message = "Hvala što ste nas zapratili, uživajte u našim fotografijama!";
    
            alert(message);
            return false;
        };
  function posalji()
  {
    var message = "Poruka uspešno poslata.";
    
    alert(message);
    return false;
  };
  function promeniSliku() {
    var slika = document.getElementById("slika");
  
    if (slika.src.endsWith("vlasnik.jpeg")) {
      slika.src = "images/vlasnik2.jpg";
    } else {
      slika.src = "images/vlasnik.jpeg";
    }
  };
  function promeniTekstI() {
    var checkbox1 = document.getElementById("checkbox1");
    var checkbox2 = document.getElementById("checkbox2");
    var checkbox3 = document.getElementById("checkbox3");
    var tekst = document.getElementById("tekst1");
    
    

  if (checkbox2.checked) {
    tekst.innerHTML = "Istanbul je grad koji odiše bogatom i raznolikom kulturom. Njegova kultura je prožeta viševekovnim uticajima različitih civilizacija koje su vladale tim područjem kroz istoriju. Kombinacija vizantijske, osmanske i savremene turske kulture čini Istanbul jedinstvenim kulturnim odredištem.";
  } 
  else if (checkbox1.checked) {
    tekst.innerHTML = "Istanbul, poznat i kao 'Grad na dva kontinenta', impresionira svojom jedinstvenom geografskom pozicijom koja se proteže preko Evrope i Azije, sa Bosporskim moreuzom koji deli grad na dva dela.";
  } 
  else if (checkbox3.checked) {
    tekst.innerHTML = "Kapali čaršija: Ovaj veliki bazarski kompleks nudi autentično iskustvo kupovine i bogatstvo robe - od začina i tkanina do nakita i tepiha. Kapali čaršija je jedno od najstarijih i najvećih tržišta na svetu.Bosporski most: Bosporski most povezuje evropski i azijski deo grada preko Bosporskog moreuza. Ovaj ikonični most je važna saobraćajna veza i pruža impresivan pogled na grad.Turska kuhinja: Istanbul je raj za ljubitelje hrane. Turska kuhinja je poznata po ukusnim jelima kao što su kebab, baklava, mezze i tradicionalni turski čaj. Uživanje u gastronomskim specijalitetima je neizostavan deo posete Istanbulu.";
  } 
    else {
      tekst.innerHTML = " ";
    }

  };
  function promeniTekstD() {
    var checkbox4 = document.getElementById("checkbox4");
    var checkbox5 = document.getElementById("checkbox5");
    var checkbox6 = document.getElementById("checkbox6");
    var tekst = document.getElementById("tekst2");
    
    

  if (checkbox5.checked) {
    tekst.innerHTML = "Kultura Dablina je obogaćena irskom muzikom, književnošću i pozorištem. Grad je poznat po živim muzičkim nastupima u pubovima, festivalima poput Bloomsday-a, te brojnim muzejima i galerijama koji čuvaju irsku kulturnu baštinu.";
  } 
  else if (checkbox4.checked) {
    tekst.innerHTML = "Dublin je živopisni grad koji nudi muziku, pabove, istorijske građevine poput dvorca Dublin, crkve Christ Church i pivovare Guinness. Tu su i umetnost, književnost, irska tradicija i srdačnost lokalnog stanovništva.";
  } 
  else if (checkbox6.checked) {
    tekst.innerHTML = "Dablin je dom poznatog pivskog festivala St. Patrick's Day, ima impozantnu Kraljevsku knjižnicu, pivnicu Guinness, prepoznatljivu Trinity koledž, te prelepe šetalište uz reku Liffey i slikovite gradske parkove.";
  } 
    else {
      tekst.innerHTML = " ";
    }

  };
  function promeniTekstA() {
    var checkbox7 = document.getElementById("checkbox7");
    var checkbox8 = document.getElementById("checkbox8");
    var checkbox9 = document.getElementById("checkbox9");
    var tekst = document.getElementById("tekst3");
    
    

  if (checkbox8.checked) {
    tekst.innerHTML = "Kultura Algarve kombinuje portugalsku tradiciju s uticajima maura i ribarskom baštinom. Očuvane su tradicionalne feste, folklorna muzika i plesovi poput fada i tamboril. U regionu se takođe nalaze brojni muzeji i umetničke galerije.";
  } 
  else if (checkbox7.checked) {
    tekst.innerHTML = "Algarve je regija u Portugalu poznata po prelepim peščanim plažama, slikovitim stenovitim pejzažima i toplom mediteranskom klimom. Osim sunčanja, posetioci mogu uživati u golfu, vodenim sportovima i tradicionalnoj portugalskoj kuhinji.";
  } 
  else if (checkbox9.checked) {
    tekst.innerHTML = "Algarve je poznat po prelepim plažama, slikovitim ribarskim selima, pećinama Benagil, golf terenima, tradicionalnoj keramici, ukusnoj morskoj hrani i vinima. Takođe je dom zaštićene prirodne rezervate i bogat biodiverzitet.";
  } 
    else {
      tekst.innerHTML = " ";
    }

  };
  function promeniTekstP() {
    var checkbox10 = document.getElementById("checkbox10");
    var checkbox11 = document.getElementById("checkbox11");
    var checkbox12 = document.getElementById("checkbox12");
    var tekst = document.getElementById("tekst4");
    
    

  if (checkbox11.checked) {
    tekst.innerHTML = "Kultura Praga je bogata muzikom, umetnošću i književnošću. Poznat je po češkoj klasici, koncertima u crkvama, Vltava reci i velikim kulturnim festivalima poput Praškog proleća.";
  } 
  else if (checkbox10.checked) {
    tekst.innerHTML = "Prag je istorijski grad sa prelepom arhitekturom, čuvenim Karlovim mostom i Praškim dvorcem. Poznat je po pivu, astronomskom satu Orloj, Kafka muzeju i romantičnoj atmosferi starih ulica.";
  } 
  else if (checkbox12.checked) {
    tekst.innerHTML = "Prag je grad s bogatom istorijom i arhitekturom, sa znamenitostima poput Karlovog mosta i Praškog dvorca. Pivska kultura je izuzetno važna, a Astronomski sat Orloj je popularna atrakcija.";
  } 
    else {
      tekst.innerHTML = " ";
    }

  };
  function promeniTekstDr() {
    var checkbox13 = document.getElementById("checkbox13");
    var checkbox14 = document.getElementById("checkbox14");
    var checkbox15 = document.getElementById("checkbox15");
    var tekst = document.getElementById("tekst5");
    
    

  if (checkbox14.checked) {
    tekst.innerHTML = "Dubrovnik obiluje bogatom kulturnom baštinom, s prepoznatljivim festivalima poput Dubrovačkih ljetnih igara, čuvenim zidinama, impresivnim crkvama, muzejima i umjetničkim galerijama, te tradicionalnim plesovima i glazbom.";
  } 
  else if (checkbox13.checked) {
    tekst.innerHTML = "Dubrovnik je predivan grad na Jadranskom moru s očaravajućim starim gradom, zidinama i crkvama. Poznat je po svojoj bogatoj povijesti, ljepoti Placa, prekrasnim plažama i popularnosti kao kulisa za snimanje Igre prestola.";
  } 
  else if (checkbox15.checked) {
    tekst.innerHTML = "Dubrovnik je poznat po prelepom starom gradskom jezgru, impresivnim zidinama, popularnosti kao kulise za snimanje serije Igra prestola, kao i po bogatoj pomorskoj tradiciji i predivnim plažama.";
  } 
    else {
      tekst.innerHTML = " ";
    }

  };
  function promeniTekstB() {
    var checkbox16 = document.getElementById("checkbox16");
    var checkbox17 = document.getElementById("checkbox17");
    var checkbox18 = document.getElementById("checkbox18");
    var tekst = document.getElementById("tekst6");
    
    

  if (checkbox17.checked) {
    tekst.innerHTML = "Kultura Berna kombinuje tradicionalne švajcarske vrednosti s modernim uticajima. Grad je poznat po muzičkim festivalima, umetničkim galerijama, muzejima i impresivnoj arhitekturi, uključujući i UNESCO-vu zaštićenu staru gradsku jezgru.";
  } 
  else if (checkbox16.checked) {
    tekst.innerHTML = "Bern, glavni grad Švajcarske, poznat je po dobro očuvanoj srednjovekovnoj arhitekturi, popločanim ulicama i prelepim vrtovima. Nalazi se na obali reke Aare i dom je čuvenog Berneškog medveda.";
  } 
  else if (checkbox18.checked) {
    tekst.innerHTML = "Bern je dom poznatog medvedjeg jama, šarenih fontana, satnog tornja Zytglogge, Paseo de Rosas parka, izvrsne čokolade, čuvene Bernske manifestacije i impresivnih srednjovekovnih građevina";
  } 
    else {
      tekst.innerHTML = " ";
    }

  };
  function promeniTekstF() {
    var checkbox19 = document.getElementById("checkbox19");
    var checkbox20 = document.getElementById("checkbox20");
    var checkbox21 = document.getElementById("checkbox21");
    var tekst = document.getElementById("tekst7");
    
    

  if (checkbox20.checked) {
    tekst.innerHTML = "Firenca je izuzetno bogata kulturom i umetnošću. Poznata je po renesansnoj arhitekturi, muzejima kao što su Uffizi i Accademia, te muzičkim i pozorišnim festivalima poput Maggio Musicale Fiorentino. Grad je inspiracija za brojne umetnike i ima bogatu kulturnu baštinu.";
  } 
  else if (checkbox19.checked) {
    tekst.innerHTML = "Firenca je preleli grad u srcu Toskane, Italija. Poznata je po umetnosti, istoriji i prefinjenoj arhitekturi. U njoj se nalaze remek-dela poput Duoma, Uffizija i Ponte Vecchia. Firenca je dom slavnog slikara Mikelanđela i jedinstvenog renesansnog nasleđa.";
  } 
  else if (checkbox21.checked) {
    tekst.innerHTML = "Firenca je dom Duoma, čuvene katedrale sa kupolom koju je projektovao Brunelleschi. U njoj se nalazi i Michelangelov David, a grad je poznat po prelepim mostovima, poput Ponte Vecchio, i ukusnoj florentinskoj kuhinji.";
  } 
    else {
      tekst.innerHTML = " ";
    }

  };
  function promeniTekstM() {
    var checkbox22 = document.getElementById("checkbox22");
    var checkbox23 = document.getElementById("checkbox23");
    var checkbox24 = document.getElementById("checkbox24");
    var tekst = document.getElementById("tekst8");
    
    

  if (checkbox23.checked) {
    tekst.innerHTML = "Malta ima bogatu i raznoliku kulturu koja kombinuje elemente arapske, italijanske i britanske tradicije. Maltanska muzika, kuhinja, arhitektura i religiozni festivali odražavaju bogatu istoriju i multikulturalnu prirodu ostrva. Karneval u Valletti je posebno popularan";
  } 
  else if (checkbox22.checked) {
    tekst.innerHTML = "Malta je ostrvska država u Sredozemnom moru, sa preleptim peščanim plažama, tirkiznim vodama i bogatom istorijom. Valletta, njena prestonica, je UNESCO-va svetska baština. Ostrvo je poznato po kamenim hramovima, plavoj laguni na ostrvu Comino i tradicionalnim drevnim festivalima.";
  } 
  else if (checkbox24.checked) {
    tekst.innerHTML = "Malta je ostrvska zemlja poznata po svojim drevnim megalitskim hramovima, kao što su Ggantija i Ħaġar Qim. Plava laguna na ostrvu Comino je raj za ronjenje. Glavni grad Valletta je UNESCO-va svetska baština i jedan od najmanjih glavnih gradova u Evropi.";
  } 
    else {
      tekst.innerHTML = " ";
    }

  };
  function promeniTekstS() {
    var checkbox25 = document.getElementById("checkbox25");
    var checkbox26 = document.getElementById("checkbox26");
    var checkbox27 = document.getElementById("checkbox27");
    var tekst = document.getElementById("tekst9");
    
    

  if (checkbox26.checked) {
    tekst.innerHTML = "Kultura Madrida je bogata i raznolika, sa preplitanjem tradicije i modernosti. Flamenco, tapasi, živa muzika, umetnost u muzejima i ulicama, tradiocionalne festivale, bulsko trčanje i strastveni navijači fudbala čine jedinstvenu atmosferu ovog španskog grada.";
  } 
  else if (checkbox25.checked) {
    tekst.innerHTML = "Madrid je glavni grad Španije, smešten na visoravni, sa prelepim istorijskim znamenitostima kao što su kraljevska palata, Prado muzej i živahna ulica Gran Via. Poznat je po fudbalskom klubu Real Madrid, živopisnim parkovima, ukusnoj hrani, strastvenim flamenco plesačima i vibrirajućem noćnom životu.";
  } 
  else if (checkbox27.checked) {
    tekst.innerHTML = "Madrid je najviše naseljeni grad Španije, sa preko 3 miliona stanovnika. Ovde se nalazi najveći stadion u Evropi, Santiago Bernabeu. Madrid ima preko 60 parkova, uključujući i veličanstveni Retiro park. Takođe je dom za tri svetski poznata muzeja: Prado, Reina Sofia i Thyssen-Bornemisza.";
  } 
    else {
      tekst.innerHTML = " ";
    }

  };
  
  
  
  
  
  