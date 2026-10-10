(function(){
"use strict";
var Comp=(function(DCLogic){
const L = {
en: {
altHero:'A tabby cat sitting with one paw raised, peeking into the page in front of two teal shapes', altTrust:'A smiling veterinarian in a white coat gently examining a small fluffy dog on an exam table', altCta:'A smiling veterinarian in a white coat gently petting a tabby cat on an exam table', altT1:'A smiling veterinarian in teal scrubs with a stethoscope, sitting with a friendly dog in a bright clinic', altT2:'A smiling veterinarian in teal scrubs with a stethoscope, sitting with a golden retriever in a bright clinic', altT3:'A gray-haired veterinarian in a white coat gently holding a ginger cat on an exam table',
navHome:'Home', navAbout:'About Us', navServices:'Services', navTeam:'Our Team', navContact:'Contact', book:'Contact Us', menuLabel:'Toggle menu',
heroL1:'WELCOME TO', heroL2:'PAWCARE CLINIC',
heroP:"Compassionate veterinary care for the pets who make life brighter. From everyday checkups to attentive medical support, we're here for every paw.",
explore:'Explore Our Services',
phLabel:'Image placeholder', phCat:'Tabby kitten photo', phCatNote:'Large photorealistic cutout peeking in from the left edge, face prominent. Swap in a transparent PNG here.',
phVet:'Veterinarian gently examining a cat or dog', phPortrait:'Portrait placeholder', phDog:'Friendly dog photo',
svcEyebrow:'Our Services', svcH:'Care for every stage of their life', svcP:'From the first kitten checkup to the golden years, our services are designed to keep pets healthy, comfortable and happy.',
learn:'Learn More',
s1t:'General Veterinary Checkups', s1d:'Routine wellness visits that help us spot small concerns early and keep your pet feeling their best.',
s2t:'Vaccination & Prevention', s2d:'Guidance on vaccines and preventive care, tailored to your pet’s age, lifestyle and needs.',
s3t:'Veterinary Diagnostics', s3d:'Careful examinations and diagnostic support to understand what your pet needs.',
s4t:'Dental Care', s4d:'Attention to teeth and gums, because healthy mouths are part of a healthy, happy pet.',
s5t:'Surgery & Treatment', s5d:'Attentive medical support and treatment, explained clearly every step of the way.',
s6t:'Puppy & Kitten Care', s6d:'A gentle, reassuring start for the newest members of your family.',
trEyebrow:'Care You Can Trust', trH:'Gentle hands, honest conversations', trP:'We believe good veterinary care starts with patience. Every pet is treated as an individual, and every owner is treated as a partner.',
b1t:'Compassionate, patient-centered care', b1d:'Calm handling and unhurried visits, so pets feel safe.',
b2t:'Clear communication with pet owners', b2d:'Plain-language explanations, so you always know what comes next.',
b3t:'Attention to preventive health', b3d:'A focus on keeping small issues from becoming big ones.',
tmEyebrow:'Meet Our Team', tmH:'The people behind the care', tmP:'A friendly team that treats every pet like family.',
sample:'Sample profile', meetTeam:'Meet Our Team',
r1:'Veterinarian', r2:'Veterinary Surgeon', r3:'Veterinary Nurse',
ctaH:'YOUR PET DESERVES THE BEST CARE.', ctaP:"Have a question about your pet's health? Our caring team is here to help.", getInTouch:'Get in Touch',
faqEyebrow:'FAQ', faqH:'Frequently asked questions',
q1:'How often should my pet have a wellness visit?', a1:'Many vets suggest a routine checkup at least once a year, and more often for puppies, kittens and senior pets. Your veterinarian can recommend a schedule that suits your pet.',
q2:'How can I prepare for an appointment?', a2:'Bring any previous records, note changes in appetite, energy or behavior, and write down your questions. Use a carrier for cats and small pets, and a leash for dogs.',
q3:'Do pets need vaccinations?', a3:'Vaccines help protect against common, preventable illnesses. Which ones are right depends on age, lifestyle and local guidelines, so ask your veterinarian.',
q4:'How can I contact the clinic?', a4:'PAWCARE is a fictional clinic, so there are no real contact details. On a live site, this answer would list the clinic’s phone, email and hours.',
fDesc:'Compassionate veterinary care for the pets who make life brighter.', fNav:'Navigate', fFaq:'FAQ', fContact:'Contact', fSocial:'Social links',
fAddr:'[Address placeholder]', fPhone:'[Phone placeholder]', fMail:'[Email placeholder]',
rights:'All rights reserved.', notice:'Portfolio concept — PAWCARE is a fictional veterinary clinic.'
},
sr: {
altHero:'Tigrasta mačka sedi podignute šape i viri u stranicu ispred dva tirkizna oblika', altTrust:'Nasmejani veterinar u beloj kuti nežno pregleda malog čupavog psa na stolu za pregled', altCta:'Nasmejani veterinar u beloj kuti nežno miluje tigrastu mačku na stolu za pregled', altT1:'Nasmejani veterinar u tirkiznoj uniformi sa stetoskopom sedi sa prijateljskim psom u svetloj klinici', altT2:'Nasmejani veterinar u tirkiznoj uniformi sa stetoskopom sedi sa zlatnim retriverom u svetloj klinici', altT3:'Veterinar sede kose u beloj kuti nežno drži narandžastu mačku na stolu za pregled',
navHome:'Početna', navAbout:'O nama', navServices:'Usluge', navTeam:'Naš tim', navContact:'Kontakt', book:'Kontaktirajte nas', menuLabel:'Otvori ili zatvori meni',
heroL1:'DOBRODOŠLI U', heroL2:'PAWCARE KLINIKU',
heroP:'Brižna veterinarska nega za ljubimce koji život čine svetlijim. Od redovnih pregleda do pažljive medicinske podrške, tu smo za svaku šapu.',
explore:'Pogledajte usluge',
phLabel:'Mesto za sliku', phCat:'Fotografija tabi mačeta', phCatNote:'Velika fotorealistična slika sa providnom pozadinom, viri sa leve ivice, lice u fokusu. Ovde ubacite providni PNG.',
phVet:'Veterinar nežno pregleda mačku ili psa', phPortrait:'Mesto za portret', phDog:'Fotografija ljubaznog psa',
svcEyebrow:'Naše usluge', svcH:'Nega za svaki period njihovog života', svcP:'Od prvog pregleda mačeta do zlatnih godina, naše usluge čuvaju ljubimce zdravim, udobnim i srećnim.',
learn:'Saznajte više',
s1t:'Opšti veterinarski pregledi', s1d:'Redovni pregledi koji pomažu da na vreme uočimo sitne probleme i da se vaš ljubimac oseća najbolje.',
s2t:'Vakcinacija i preventiva', s2d:'Saveti o vakcinama i preventivnoj nezi, prilagođeni uzrastu, načinu života i potrebama ljubimca.',
s3t:'Veterinarska dijagnostika', s3d:'Pažljivi pregledi i dijagnostička podrška da bismo razumeli šta vašem ljubimcu treba.',
s4t:'Stomatološka nega', s4d:'Briga o zubima i desnima, jer su zdrava usta deo zdravog i srećnog ljubimca.',
s5t:'Hirurgija i lečenje', s5d:'Pažljiva medicinska podrška i lečenje, jasno objašnjeni u svakom koraku.',
s6t:'Briga o štencima i mačićima', s6d:'Nežan i umirujući početak za najmlađe članove vaše porodice.',
trEyebrow:'Nega kojoj možete verovati', trH:'Nežne ruke, iskreni razgovori', trP:'Verujemo da dobra veterinarska nega počinje strpljenjem. Svaki ljubimac je individua, a svaki vlasnik partner.',
b1t:'Brižna nega usmerena na pacijenta', b1d:'Mirno rukovanje i pregledi bez žurbe, da se ljubimci osećaju bezbedno.',
b2t:'Jasna komunikacija sa vlasnicima', b2d:'Objašnjenja običnim jezikom, da uvek znate šta sledi.',
b3t:'Pažnja posvećena prevenciji', b3d:'Fokus na tome da sitni problemi ne postanu veliki.',
tmEyebrow:'Upoznajte naš tim', tmH:'Ljudi koji stoje iza nege', tmP:'Ljubazan tim koji prema svakom ljubimcu postupa kao prema članu porodice.',
sample:'Primer profila', meetTeam:'Upoznajte naš tim',
r1:'Veterinar', r2:'Veterinar hirurg', r3:'Veterinarski tehničar',
ctaH:'VAŠ LJUBIMAC ZASLUŽUJE NAJBOLJU NEGU.', ctaP:'Imate pitanje o zdravlju vašeg ljubimca? Naš brižan tim je tu da pomogne.', getInTouch:'Javite nam se',
faqEyebrow:'ČPP', faqH:'Često postavljana pitanja',
q1:'Koliko često ljubimac treba da ide na redovan pregled?', a1:'Mnogi veterinari preporučuju redovan pregled bar jednom godišnje, a češće za štence, mačiće i starije ljubimce. Veterinar može da predloži raspored koji odgovara vašem ljubimcu.',
q2:'Kako da se pripremim za pregled?', a2:'Ponesite prethodnu dokumentaciju, zabeležite promene u apetitu, energiji ili ponašanju i zapišite pitanja. Mačke i male ljubimce vodite u transporteru, a pse na povodcu.',
q3:'Da li ljubimcima trebaju vakcine?', a3:'Vakcine štite od čestih bolesti koje se mogu sprečiti. Koje su prave zavisi od uzrasta, načina života i lokalnih preporuka, pa pitajte veterinara.',
q4:'Kako mogu da kontaktiram kliniku?', a4:'PAWCARE je izmišljena klinika, pa nema pravih kontakt podataka. Na pravom sajtu ovde bi stajali telefon, imejl i radno vreme klinike.',
fDesc:'Brižna veterinarska nega za ljubimce koji život čine svetlijim.', fNav:'Navigacija', fFaq:'ČPP', fContact:'Kontakt', fSocial:'Društvene mreže',
fAddr:'[Adresa – mesto za unos]', fPhone:'[Telefon – mesto za unos]', fMail:'[Imejl – mesto za unos]',
rights:'Sva prava zadržana.', notice:'Portfolio koncept — PAWCARE je izmišljena veterinarska klinika.'
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
      benefits: [1,2,3].map(i => ({ title:t['b'+i+'t'], desc:t['b'+i+'d'] })),
      team: [
        { name:'Dr. Sample Name One', role:t.r1, hasPhoto:true, noPhoto:false, photo:'assets/img/team-1.webp', alt:t.altT1 },
        { name:'Dr. Sample Name Two', role:t.r2, hasPhoto:true, noPhoto:false, photo:'assets/img/team-2.webp', alt:t.altT2 },
        { name:'Sample Name Three', role:t.r3, hasPhoto:true, noPhoto:false, photo:'assets/img/team-3.webp', alt:t.altT3 }
      ],
      faq: [1,2,3,4].map((n,i) => ({
        q:t['q'+n], a:t['a'+n], btnId:'faq-q-main-'+n, panelId:'faq-a-main-'+n, open: open===i,
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
