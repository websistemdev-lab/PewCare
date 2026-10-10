(function(){
"use strict";
var Comp=(function(DCLogic){
const L = {
"en": {
"navHome": "Home",
"navAbout": "About Us",
"navServices": "Services",
"navTeam": "Our Team",
"navContact": "Contact",
"book": "Contact Us",
"menuLabel": "Toggle menu",
"faqEyebrow": "FAQ",
"faqH": "Frequently asked questions",
"fDesc": "Compassionate veterinary care for the pets who make life brighter.",
"fNav": "Navigate", "fFaq": "FAQ",
"fContact": "Contact",
"fSocial": "Social links",
"fAddr": "[Address placeholder]",
"fPhone": "[Phone placeholder]",
"fMail": "[Email placeholder]",
"rights": "All rights reserved.",
"notice": "Portfolio concept — PAWCARE is a fictional veterinary clinic.",
"s1t": "General Veterinary Checkups",
"s2t": "Vaccination & Prevention",
"s3t": "Veterinary Diagnostics",
"s4t": "Dental Care",
"s5t": "Surgery & Treatment",
"s6t": "Puppy & Kitten Care",
"heroEyebrow": "OUR SERVICES",
"heroL1": "CARE FOR",
"heroL2": "EVERY PAW.",
"heroP": "From preventive checkups to diagnostics and treatment, discover the services that help your pets get the attention and care they deserve.",
"svcEyebrow": "What we offer",
"svcH": "Six ways we look after your pet",
"s1d": "Regular veterinary checkups are an important part of caring for a pet's health. During a visit, the animal's overall condition is assessed and its needs are discussed.",
"s2d": "Preventive care covers vaccination, protection from parasites and other measures, adapted to your pet's age, health and lifestyle.",
"s3d": "Diagnostic procedures help the veterinarian better understand your pet’s condition and judge which next steps are appropriate.",
"s4d": "The health of teeth and gums is an important part of overall health in dogs and cats. A veterinary exam can help identify problems and plan suitable care.",
"s5d": "Veterinary treatment depends on the animal's condition and individual needs. When further intervention is needed, the veterinarian explains the possible procedures and next steps.",
"s6d": "The first months of life are important for healthy development. Advice on feeding, prevention and regular checkups helps owners better understand the needs of young animals.",
"procH": "FROM FIRST CONTACT TO CAREFUL CARE",
"p1t": "Contact",
"p1d": "The owner describes the pet’s needs and receives information about the next steps.",
"p2t": "Veterinary exam",
"p2d": "The veterinarian talks with the owner and assesses the animal’s condition.",
"p3t": "Next steps",
"p3d": "Based on the exam, recommendations and options for further care are explained.",
"q1": "When should I book a veterinary visit?",
"a1": "A routine checkup is a good idea at least once a year, and more often for puppies, kittens and senior pets. It is also sensible to book a visit when you notice changes in appetite, energy, behavior or movement.",
"q2": "How do I prepare my pet for a visit?",
"a2": "Note any changes you have noticed, write down your questions and bring earlier records. Cats and small pets travel best in a carrier, and dogs should be on a leash. A calm trip helps your pet feel safe.",
"q3": "Is vaccination important?",
"a3": "Vaccination is an important part of preventive care and helps protect pets from common, preventable illnesses. The right plan depends on age, health and lifestyle, so a veterinarian can advise what suits your pet.",
"q4": "What should I bring to the first visit?",
"a4": "Bring any previous health records or vaccination booklet, details about food and any medication or supplements, and your questions. If your pet is nervous, a familiar blanket or toy can help.",
"ctaH": "HAVE A QUESTION ABOUT YOUR PET’S HEALTH?",
"ctaP": "Every pet deserves attention and the right care. Get in touch for more information.",
"getInTouch": "Contact Us"
},
"sr": {
"navHome": "Početna",
"navAbout": "O nama",
"navServices": "Usluge",
"navTeam": "Naš tim",
"navContact": "Kontakt",
"book": "Kontaktirajte nas",
"menuLabel": "Otvori ili zatvori meni",
"faqEyebrow": "ČPP",
"faqH": "Često postavljana pitanja",
"fDesc": "Brižna veterinarska nega za ljubimce koji život čine svetlijim.",
"fNav": "Navigacija", "fFaq": "ČPP",
"fContact": "Kontakt",
"fSocial": "Društvene mreže",
"fAddr": "[Adresa – mesto za unos]",
"fPhone": "[Telefon – mesto za unos]",
"fMail": "[Imejl – mesto za unos]",
"rights": "Sva prava zadržana.",
"notice": "Portfolio koncept — PAWCARE je izmišljena veterinarska klinika.",
"s1t": "Opšti veterinarski pregledi",
"s2t": "Vakcinacija i preventiva",
"s3t": "Veterinarska dijagnostika",
"s4t": "Stomatološka nega",
"s5t": "Hirurgija i lečenje",
"s6t": "Briga o štencima i mačićima",
"heroEyebrow": "NAŠE USLUGE",
"heroL1": "BRIGA ZA",
"heroL2": "SVAKU ŠAPU.",
"heroP": "Od preventivnih pregleda do dijagnostike i lečenja, upoznajte usluge koje pomažu da vaši ljubimci dobiju pažnju i negu koju zaslužuju.",
"svcEyebrow": "Šta nudimo",
"svcH": "Šest načina na koje brinemo o vašem ljubimcu",
"s1d": "Redovni veterinarski pregledi važan su deo brige o zdravlju ljubimaca. Tokom pregleda procenjuje se opšte zdravstveno stanje životinje i razgovara o njenim potrebama.",
"s2d": "Preventivna zaštita obuhvata razgovor o vakcinaciji, zaštiti od parazita i drugim merama koje se prilagođavaju uzrastu, zdravstvenom stanju i načinu života ljubimca.",
"s3d": "Dijagnostički postupci pomažu veterinaru da bolje razume zdravstveno stanje ljubimca i proceni koji su naredni koraci odgovarajući.",
"s4d": "Zdravlje zuba i desni važan je deo opšteg zdravlja pasa i mačaka. Veterinarski pregled može pomoći u prepoznavanju problema i planiranju odgovarajuće nege.",
"s5d": "Veterinarsko lečenje zavisi od zdravstvenog stanja i individualnih potreba životinje. Kada je potrebna dodatna intervencija, veterinar objašnjava moguće postupke i naredne korake.",
"s6d": "Prvi meseci života važni su za pravilan razvoj ljubimaca. Saveti o ishrani, preventivi i redovnim pregledima pomažu vlasnicima da bolje razumeju potrebe mladih životinja.",
"procH": "OD PRVOG KONTAKTA DO PAŽLJIVE NEGE",
"p1t": "Kontakt",
"p1d": "Vlasnik opisuje potrebe ljubimca i dobija informacije o narednim koracima.",
"p2t": "Veterinarski pregled",
"p2d": "Veterinar razgovara sa vlasnikom i procenjuje stanje životinje.",
"p3t": "Dalji koraci",
"p3d": "Na osnovu pregleda objašnjavaju se preporuke i mogućnosti dalje nege.",
"q1": "Kada treba zakazati veterinarski pregled?",
"a1": "Redovan pregled preporučuje se bar jednom godišnje, a češće za štence, mačiće i starije ljubimce. Pregled je razumno zakazati i kada primetite promene u apetitu, energiji, ponašanju ili kretanju.",
"q2": "Kako pripremiti ljubimca za pregled?",
"a2": "Zabeležite promene koje ste primetili, zapišite pitanja i ponesite raniju dokumentaciju. Mačke i male ljubimce najbolje je voditi u transporteru, a pse na povodcu. Mirno putovanje pomaže ljubimcu da se oseća bezbedno.",
"q3": "Da li je vakcinacija važna?",
"a3": "Vakcinacija je važan deo preventivne nege i pomaže u zaštiti ljubimaca od čestih bolesti koje se mogu sprečiti. Odgovarajući plan zavisi od uzrasta, zdravlja i načina života, pa veterinar može da savetuje šta je najbolje za vašeg ljubimca.",
"q4": "Šta poneti na prvi veterinarski pregled?",
"a4": "Ponesite raniju zdravstvenu dokumentaciju ili knjižicu o vakcinaciji, podatke o ishrani i eventualnim lekovima ili dodacima ishrani, kao i svoja pitanja. Ako je ljubimac nervozan, može pomoći poznato ćebe ili igračka.",
"ctaH": "IMATE PITANJE O ZDRAVLJU LJUBIMCA?",
"ctaP": "Svaki ljubimac zaslužuje pažnju i odgovarajuću negu. Kontaktirajte nas za više informacija.",
"getInTouch": "Kontaktirajte nas"
}
};
class Component extends DCLogic {
  constructor(props){ super(props); this.state = { lang:'en', menu:false, faq:-1 }; }
  componentDidMount(){
    try { const s = window.localStorage.getItem('pawcare-lang'); if (s==='en' || s==='sr') { this.setState({ lang:s }); this.setDocLang(s); } } catch(e) {}
  }
  setDocLang(l){ try { document.documentElement.setAttribute('lang', l==='sr' ? 'sr' : 'en'); } catch(e) {} }
  pick(l){ try { window.localStorage.setItem('pawcare-lang', l); } catch(e) {} this.setDocLang(l); this.setState({ lang:l }); }
  renderVals() {
    const lang = this.state.lang, t = L[lang];
    const open = this.state.faq;
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
      menuKey: (e) => { if (e && e.key === 'Escape' && this.state.menu) this.setState({ menu:false }); },
      faq: [1,2,3,4].map((n,i) => ({
        q:t['q'+n], a:t['a'+n], btnId:'faq-q-services-'+n, panelId:'faq-a-services-'+n, open: open===i,
        icoClass: 'faq-ico' + (open===i ? ' open' : ''),
        toggle: () => this.setState({ faq: open===i ? -1 : i })
      }))
    };
  }
}
return Component;
})(window.DCLogic);
window.DC.mount(Comp);
})();
