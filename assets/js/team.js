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
"heroEyebrow": "OUR TEAM",
"heroL1": "PEOPLE WHO CARE ABOUT",
"heroL2": "EVERY PAW.",
"heroP": "Meet the demonstration members of the PAWCARE team and the values that connect a careful approach, love for animals and clear communication with owners.",
"prEyebrow": "MEET OUR TEAM",
"prH": "BEHIND EVERY GOOD CARE ARE PEOPLE.",
"prNote": "Illustrative profiles for a portfolio concept. PAWCARE and its team are fictional.",
"badge": "Illustrative profile",
"mem": "Team Member",
"altp": "Illustrative portrait of a veterinary professional with a pet (fictional team member)",
"role1": "Veterinarian",
"pd1": "A demonstration profile representing a careful approach to general veterinary checkups and communication with owners.",
"role2": "Veterinarian — surgical care",
"pd2": "A demonstration profile representing responsible planning of veterinary procedures and an individual approach to care.",
"role3": "Veterinary technician",
"pd3": "A demonstration profile representing support in everyday care, exam preparation and looking after animals.",
"apEyebrow": "OUR APPROACH",
"apH": "TOGETHER FOR THE WELLBEING OF PETS.",
"a1t": "Attention and patience",
"a1d": "Every animal deserves a calm approach and an understanding of its needs.",
"a2t": "Clear communication",
"a2d": "Understandable information helps owners take part in decisions about care.",
"a3t": "Responsible care",
"a3d": "The approach to care should be adapted to the individual needs of every pet.",
"ctaH": "HAVE A QUESTION? WE’RE HERE FOR YOU.",
"ctaP": "Learn more about the PAWCARE concept and ways to get in touch.",
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
"heroEyebrow": "NAŠ TIM",
"heroL1": "LJUDI KOJI BRINU O",
"heroL2": "SVAKOJ ŠAPI.",
"heroP": "Upoznajte demonstracione članove PAWCARE tima i vrednosti koje povezuju pažljiv pristup, ljubav prema životinjama i jasnu komunikaciju sa vlasnicima.",
"prEyebrow": "UPOZNAJTE NAŠ TIM",
"prH": "IZA SVAKE DOBRE BRIGE STOJE LJUDI.",
"prNote": "Ilustrativni profili u okviru portfolio koncepta. PAWCARE i njegov tim su izmišljeni.",
"badge": "Ilustrativni profil",
"mem": "Član tima",
"altp": "Ilustrativni portret veterinarskog stručnjaka sa ljubimcem (izmišljeni član tima)",
"role1": "Veterinar",
"pd1": "Demonstracioni profil koji predstavlja pažljiv pristup opštim veterinarskim pregledima i komunikaciji sa vlasnicima.",
"role2": "Veterinar — hirurška nega",
"pd2": "Demonstracioni profil koji predstavlja odgovorno planiranje veterinarskih postupaka i individualan pristup nezi.",
"role3": "Veterinarski tehničar",
"pd3": "Demonstracioni profil koji predstavlja podršku u svakodnevnoj nezi, pripremi pregleda i brizi o životinjama.",
"apEyebrow": "NAŠ PRISTUP",
"apH": "ZAJEDNO ZA DOBROBIT LJUBIMACA.",
"a1t": "Pažnja i strpljenje",
"a1d": "Svaka životinja zaslužuje smiren pristup i razumevanje svojih potreba.",
"a2t": "Jasna komunikacija",
"a2d": "Razumljive informacije pomažu vlasnicima da budu uključeni u odluke o nezi.",
"a3t": "Odgovorna briga",
"a3d": "Pristup nezi treba prilagoditi individualnim potrebama svakog ljubimca.",
"ctaH": "IMATE PITANJE? TU SMO ZA VAS.",
"ctaP": "Saznajte više o PAWCARE konceptu i mogućnostima kontakta.",
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
