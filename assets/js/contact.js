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
"heroEyebrow": "CONTACT",
"heroL1": "WE’RE HERE FOR",
"heroL2": "EVERY PAW.",
"heroP": "Have a question about caring for your pet? Take a look at the demonstration contact form and how communication with a veterinary clinic could look.",
"cH": "LET’S TALK.",
"cP": "Good care starts with clear communication. This page shows an example of how contact could work for the PAWCARE portfolio concept.",
"i1t": "Email",
"i1d": "Contact details will be available once the concept is adapted to a real practice.",
"i2t": "Phone",
"i2d": "A phone number is not available in the demonstration project.",
"i3t": "Location and working hours",
"i3d": "Location and working hours are not listed because PAWCARE is not a real clinic.",
"fH": "SEND A MESSAGE",
"lName": "Full name",
"phName": "Your name",
"lEmail": "Email address",
"phEmail": "vas.email@gmail.com",
"lPet": "Pet type",
"optional": "optional",
"petSelect": "Select",
"petDog": "Dog",
"petCat": "Cat",
"petOther": "Other",
"lSubject": "Subject",
"phSubject": "What is this about?",
"lMsg": "Message",
"phMsg": "Write your message here",
"hMsg": "Please don’t include sensitive medical details about your pet.",
"send": "SEND MESSAGE",
"demoMsg": "This is a demonstration form. Your data has not been sent.",
"eName": "Please enter your full name.",
"eEmailReq": "Please enter your email address.",
"eEmailBad": "Please enter a valid email address.",
"eMsg": "Please write a message.",
"sH": "ATTENTION STARTS WITH UNDERSTANDING.",
"sP": "PAWCARE is a demonstration project showing how a modern veterinary practice can present its services and make communication with pet owners easier."
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
"heroEyebrow": "KONTAKT",
"heroL1": "TU SMO ZA",
"heroL2": "SVAKU ŠAPU.",
"heroP": "Imate pitanje o nezi svog ljubimca? Pogledajte demonstracionu kontakt formu i način na koji bi komunikacija sa veterinarskom klinikom mogla da izgleda.",
"cH": "HAJDE DA RAZGOVARAMO.",
"cP": "Dobra briga počinje jasnom komunikacijom. Ova stranica prikazuje primer kontakta za PAWCARE portfolio koncept.",
"i1t": "Imejl",
"i1d": "Kontakt podaci biće dostupni kada se koncept prilagodi stvarnoj ordinaciji.",
"i2t": "Telefon",
"i2d": "Broj telefona nije dostupan u demonstracionom projektu.",
"i3t": "Lokacija i radno vreme",
"i3d": "Podaci o lokaciji i radnom vremenu nisu navedeni jer PAWCARE nije stvarna klinika.",
"fH": "POŠALJITE PORUKU",
"lName": "Ime i prezime",
"phName": "Vaše ime",
"lEmail": "Imejl adresa",
"phEmail": "vas.email@gmail.com",
"lPet": "Vrsta ljubimca",
"optional": "opciono",
"petSelect": "Izaberite",
"petDog": "Pas",
"petCat": "Mačka",
"petOther": "Drugo",
"lSubject": "Tema",
"phSubject": "O čemu je reč?",
"lMsg": "Poruka",
"phMsg": "Ovde napišite poruku",
"hMsg": "Molimo vas da ne unosite osetljive medicinske podatke o ljubimcu.",
"send": "POŠALJI PORUKU",
"demoMsg": "Ovo je demonstraciona forma. Podaci nisu poslati.",
"eName": "Unesite ime i prezime.",
"eEmailReq": "Unesite imejl adresu.",
"eEmailBad": "Unesite ispravnu imejl adresu.",
"eMsg": "Napišite poruku.",
"sH": "PAŽNJA POČINJE RAZUMEVANJEM.",
"sP": "PAWCARE je demonstracioni projekat koji prikazuje kako savremena veterinarska ordinacija može predstaviti svoje usluge i olakšati komunikaciju sa vlasnicima ljubimaca."
}
};
class Component extends DCLogic {
  constructor(props){ super(props); this.state = { lang:'en', menu:false, errName:'', errEmail:'', errMsg:'', done:false }; }
  componentDidMount(){
    try { const s = window.localStorage.getItem('pawcare-lang'); if (s==='en' || s==='sr') { this.setState({ lang:s }); this.setDocLang(s); } } catch(e) {}
  }
  setDocLang(l){ try { document.documentElement.setAttribute('lang', l==='sr' ? 'sr' : 'en'); } catch(e) {} }
  pick(l){ try { window.localStorage.setItem('pawcare-lang', l); } catch(e) {} this.setDocLang(l); this.setState({ lang:l }); }
  submit(e){
    if (e && e.preventDefault) e.preventDefault();
    const f = e && e.target;
    if (!f || !f.elements) return;
    const name = (f.elements['name'].value || '').trim();
    const email = (f.elements['email'].value || '').trim();
    const msg = (f.elements['message'].value || '').trim();
    const errName = name ? '' : 'eName';
    const errEmail = !email ? 'eEmailReq' : (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? '' : 'eEmailBad');
    const errMsg = msg ? '' : 'eMsg';
    if (errName || errEmail || errMsg) {
      this.setState({ errName, errEmail, errMsg, done:false });
      const first = errName ? 'name' : (errEmail ? 'email' : 'message');
      try { f.elements[first].focus(); } catch(x) {}
      return;
    }
    // Demo only: nothing is sent, stored or logged. Clear the fields.
    try { f.reset(); } catch(x) {}
    this.setState({ errName:'', errEmail:'', errMsg:'', done:true });
  }
  renderVals() {
    const lang = this.state.lang, t = L[lang];
    const s = this.state;
    return {
      t,
      isEn: lang==='en', isSr: lang==='sr',
      enClass: 'lang-btn' + (lang==='en' ? ' on' : ''),
      srClass: 'lang-btn' + (lang==='sr' ? ' on' : ''),
      setEn: () => this.pick('en'),
      setSr: () => this.pick('sr'),
      menuOpen: s.menu, menuClosed: !s.menu,
      toggleMenu: () => this.setState({ menu: !s.menu }),
      closeMenu: () => this.setState({ menu:false }),
      menuKey: (e) => { if (e && e.key === 'Escape' && this.state.menu) this.setState({ menu:false }); },
      submit: (e) => this.submit(e),
      errName: !!s.errName, errEmail: !!s.errEmail, errMsg: !!s.errMsg,
      msgName: s.errName ? t[s.errName] : '', msgEmail: s.errEmail ? t[s.errEmail] : '', msgMsg: s.errMsg ? t[s.errMsg] : '',
      ariaName: s.errName ? 'true' : 'false', ariaEmail: s.errEmail ? 'true' : 'false', ariaMsg: s.errMsg ? 'true' : 'false',
      done: s.done
    };
  }
}
return Component;
})(window.DCLogic);
window.DC.mount(Comp);
})();
