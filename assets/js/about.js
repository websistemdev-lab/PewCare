(function(){
"use strict";
var Comp=(function(DCLogic){
const L = {
"en": {
"s1t": "General Veterinary Checkups",
"s2t": "Vaccination & Prevention",
"s3t": "Veterinary Diagnostics",
"s4t": "Dental Care",
"s5t": "Surgery & Treatment",
"s6t": "Puppy & Kitten Care",
"navHome": "Home",
"navAbout": "About Us",
"navServices": "Services",
"navTeam": "Our Team",
"navContact": "Contact",
"book": "Contact Us",
"menuLabel": "Toggle menu",
"fDesc": "Compassionate veterinary care for the pets who make life brighter.",
"fNav": "Navigate", "fFaq": "FAQ",
"fContact": "Contact",
"fSocial": "Social links",
"fAddr": "[Address placeholder]",
"fPhone": "[Phone placeholder]",
"fMail": "[Email placeholder]",
"rights": "All rights reserved.",
"notice": "Portfolio concept — PAWCARE is a fictional veterinary clinic.",
"heroEyebrow": "ABOUT US",
"heroL1": "CARE THAT COMES",
"heroL2": "FROM THE HEART.",
"heroP": "In the PAWCARE concept, caring for animals starts with understanding their needs. We believe in a gentle approach, clear communication and care that gives every pet a sense of safety.",
"phEyebrow": "OUR APPROACH",
"phH": "MORE THAN A CHECKUP. CARE WITH UNDERSTANDING.",
"phP": "Every pet has its own habits, temperament and needs. That is why attentive veterinary care means time to talk, patience and explanations that help owners make informed decisions.",
"valEyebrow": "VALUES",
"valH": "WHAT MATTERS TO US.",
"v1t": "Compassion",
"v1d": "We believe every pet deserves a gentle approach, patience and attention adapted to its needs.",
"v2t": "Trust",
"v2d": "Clear, open communication helps owners understand recommendations and take part in decisions about their pet’s care.",
"v3t": "Dedication",
"v3d": "Caring for a pet’s health means carefully considering its individual needs and taking a responsible approach to every step.",
"mtEyebrow": "EVERY PAW MATTERS",
"mtH": "SMALL MOMENTS OF ATTENTION. A BIG DIFFERENCE.",
"mtP": "Care for animals shows in small things too: a calm approach, time for questions and an understanding of each pet’s individual needs.",
"m1t": "We listen and understand",
"m1d": "A conversation with the owner helps us better understand the pet’s needs.",
"m2t": "We approach with care",
"m2d": "A gentle, patient approach is especially important for animals that feel uncertain.",
"m3t": "We explain clearly",
"m3d": "Information about care should be understandable and useful to every owner.",
"tmEyebrow": "OUR TEAM",
"tmH": "BEHIND EVERY GOOD CARE ARE PEOPLE.",
"tmP": "Meet the demonstration profiles of the PAWCARE team and the approach this concept wants to present.",
"tmBtn": "Meet Our Team",
"ctaH": "EVERY PAW DESERVES ATTENTION.",
"ctaP": "Have a question about caring for your pet? Find out how you can get in touch.",
"getInTouch": "Contact Us"
},
"sr": {
"s1t": "Opšti veterinarski pregledi",
"s2t": "Vakcinacija i preventiva",
"s3t": "Veterinarska dijagnostika",
"s4t": "Stomatološka nega",
"s5t": "Hirurgija i lečenje",
"s6t": "Briga o štencima i mačićima",
"navHome": "Početna",
"navAbout": "O nama",
"navServices": "Usluge",
"navTeam": "Naš tim",
"navContact": "Kontakt",
"book": "Kontaktirajte nas",
"menuLabel": "Otvori ili zatvori meni",
"fDesc": "Brižna veterinarska nega za ljubimce koji život čine svetlijim.",
"fNav": "Navigacija", "fFaq": "ČPP",
"fContact": "Kontakt",
"fSocial": "Društvene mreže",
"fAddr": "[Adresa – mesto za unos]",
"fPhone": "[Telefon – mesto za unos]",
"fMail": "[Imejl – mesto za unos]",
"rights": "Sva prava zadržana.",
"notice": "Portfolio koncept — PAWCARE je izmišljena veterinarska klinika.",
"heroEyebrow": "O NAMA",
"heroL1": "BRIGA KOJA DOLAZI",
"heroL2": "OD SRCA.",
"heroP": "U PAWCARE konceptu, pažnja prema životinjama počinje razumevanjem njihovih potreba. Verujemo u nežan pristup, jasnu komunikaciju i brigu koja svakom ljubimcu pruža osećaj sigurnosti.",
"phEyebrow": "NAŠ PRISTUP",
"phH": "VIŠE OD PREGLEDA. BRIGA SA RAZUMEVANJEM.",
"phP": "Svaki ljubimac ima svoje navike, temperament i potrebe. Zato pažljiva veterinarska nega podrazumeva vreme za razgovor, strpljenje i objašnjenja koja vlasnicima pomažu da donose informisane odluke.",
"valEyebrow": "VREDNOSTI",
"valH": "ONO ŠTO NAM JE VAŽNO.",
"v1t": "Saosećajnost",
"v1d": "Verujemo da svaki ljubimac zaslužuje nežan pristup, strpljenje i pažnju prilagođenu njegovim potrebama.",
"v2t": "Poverenje",
"v2d": "Jasna i otvorena komunikacija pomaže vlasnicima da razumeju preporuke i budu uključeni u odluke o nezi ljubimca.",
"v3t": "Posvećenost",
"v3d": "Briga o zdravlju ljubimaca podrazumeva pažljivo razmatranje njihovih individualnih potreba i odgovoran pristup svakom koraku.",
"mtEyebrow": "SVAKA ŠAPA JE VAŽNA",
"mtH": "MALI TRENUTCI PAŽNJE. VELIKA RAZLIKA.",
"mtP": "Pažnja prema životinjama ogleda se i u malim stvarima — smirenom pristupu, vremenu za pitanja i razumevanju individualnih potreba svakog ljubimca.",
"m1t": "Slušamo i razumemo",
"m1d": "Razgovor sa vlasnikom pomaže da bolje razumemo potrebe ljubimca.",
"m2t": "Pristupamo pažljivo",
"m2d": "Nežan i strpljiv pristup posebno je važan životinjama koje se osećaju nesigurno.",
"m3t": "Objašnjavamo jasno",
"m3d": "Informacije o nezi treba da budu razumljive i korisne svakom vlasniku.",
"tmEyebrow": "NAŠ TIM",
"tmH": "IZA SVAKE DOBRE BRIGE STOJE LJUDI.",
"tmP": "Upoznajte demonstracione profile članova PAWCARE tima i pristup koji ovaj koncept želi da predstavi.",
"tmBtn": "Upoznajte naš tim",
"ctaH": "SVAKA ŠAPA ZASLUŽUJE PAŽNJU.",
"ctaP": "Imate pitanje o nezi svog ljubimca? Saznajte kako možete stupiti u kontakt.",
"getInTouch": "Kontaktirajte nas"
}
};
class Component extends DCLogic {
  constructor(props){ super(props); this.state = { lang:'en', menu:false }; }
  componentDidMount(){
    try { const s = window.localStorage.getItem('pawcare-lang'); if (s==='en' || s==='sr') { this.setState({ lang:s }); this.setDocLang(s); } } catch(e) {}
  }
  setDocLang(l){ try { document.documentElement.setAttribute('lang', l==='sr' ? 'sr' : 'en'); } catch(e) {} }
  pick(l){ try { window.localStorage.setItem('pawcare-lang', l); } catch(e) {} this.setDocLang(l); this.setState({ lang:l }); }
  renderVals() {
    const lang = this.state.lang, t = L[lang];
    return {
      t,
      isEn: lang==='en', isSr: lang==='sr',
      enClass: 'lang-btn' + (lang==='en' ? ' on' : ''),
      srClass: 'lang-btn' + (lang==='sr' ? ' on' : ''),
      setEn: () => this.pick('en'),
      setSr: () => this.pick('sr'),
      menuOpen: this.state.menu, menuClosed: !this.state.menu,
      toggleMenu: () => this.setState({ menu: !this.state.menu }),
      closeMenu: () => this.setState({ menu:false }),
      menuKey: (e) => { if (e && e.key === 'Escape' && this.state.menu) this.setState({ menu:false }); }
    };
  }
}
return Component;
})(window.DCLogic);
window.DC.mount(Comp);
})();
