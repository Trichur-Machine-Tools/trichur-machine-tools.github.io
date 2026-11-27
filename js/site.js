/* Trichur Machine Tools: product data and page behaviour.
   To change contact numbers, edit CONTACT below. To add a product, add a line to PRODUCTS. */
{
const CONTACT = {
  call: '919895807637',      // main number for Call buttons
  whatsapp: '919895807637'   // number that receives WhatsApp enquiries
};

const CATEGORIES = [
  {id: 'tyre-changers', name: 'Tyre changers', blurb: 'Automatic, truck, lorry and manual machines for fitting and removing tyres.', img: 'tyre-changer-rft1020'},
  {id: 'tyre-service', name: 'Tyre service equipment', blurb: 'Edge removers, tyre expanders, tube vulcanisers and nitrogen inflators.', img: 'twin-edge-remover'},
  {id: 'compressors', name: 'Air compressors', blurb: 'Single phase, three phase and engine-driven portable compressors.', img: 'compressor-10hp'},
  {id: 'lifts-jacks', name: 'Lifts and jacks', blurb: 'Two-wheeler lifts, car lower raisers, hydraulic and pneumatic jacks.', img: 'two-wheeler-lift'}
];

const PRODUCTS = [
  {cat: 'tyre-changers', name: 'Automatic tyre changer RFT 1020', img: ['tyre-changer-rft1020', 'tyre-changer-rft1020-b'], specs: ['Fully automatic, with helper arm', '1 HP and 2 HP models', 'Single phase and three phase'], featured: true},
  {cat: 'tyre-changers', name: 'Automatic tyre changer 1020', img: ['tyre-changer-1020'], specs: ['Fully automatic', '1 HP and 2 HP models', 'Single phase and three phase'], featured: true},
  {cat: 'tyre-changers', name: 'Truck tyre changer EATC Truck 1000', img: ['truck-tyre-changer'], specs: ['For truck and bus tyres'], featured: true},
  {cat: 'tyre-changers', name: 'Lorry tubeless tyre changer', img: ['lorry-tubeless-tyre-changer'], specs: ['For lorry tubeless tyres'], featured: true},
  {cat: 'tyre-changers', name: 'Manual tyre changer', img: ['manual-tyre-changer'], specs: ['Tyre removal and refitment', 'No motor needed']},
  {cat: 'tyre-service', name: 'Single tyre edge remover', img: ['single-edge-remover'], specs: ['For lorry to JCB tyres']},
  {cat: 'tyre-service', name: 'Ring tyre twin edge remover', img: ['twin-edge-remover'], specs: ['For lorry ring tyres']},
  {cat: 'tyre-service', name: 'Tyre expander, vertical', img: ['tyre-expander-vertical'], specs: ['Pneumatic']},
  {cat: 'tyre-service', name: 'Tyre expander, horizontal', img: ['tyre-expander-horizontal'], specs: ['Pneumatic']},
  {cat: 'tyre-service', name: 'Tube vulcaniser', img: ['tube-vulcaniser'], specs: ['Electric, for tube repair']},
  {cat: 'tyre-service', name: 'Nitrogen tyre inflator', img: ['nitrogen-inflator', 'nitrogen-inflator-b'], specs: ['Digital automatic type', 'Manual type']},
  {cat: 'compressors', name: 'Air compressor 10 HP, three phase', img: ['compressor-10hp'], specs: ['10 HP', '500 litre tank', '180 PSI', 'Three phase']},
  {cat: 'compressors', name: 'Air compressor, single phase', img: ['compressor-single-phase'], specs: ['220 litre tank', '180 PSI', 'Single phase']},
  {cat: 'compressors', name: 'Portable compressor with Honda engine', img: ['portable-compressor'], specs: ['Honda petrol engine', '300 litre tank', '180 PSI', 'Works without power supply']},
  {cat: 'lifts-jacks', name: 'Automatic two-wheeler lift', img: ['two-wheeler-lift'], specs: ['For bikes and scooters']},
  {cat: 'lifts-jacks', name: 'Lower raiser (car lift)', img: ['lower-raiser'], specs: ['Operating pressure 125 to 150 kg/cm²']},
  {cat: 'lifts-jacks', name: 'Hydraulic jack 3.5 T', img: ['hydraulic-jack-3-5t'], specs: ['3.5 tonne capacity', 'Trolley type']},
  {cat: 'lifts-jacks', name: 'Pneumatic jack 80 T', img: ['pneumatic-jack-80t'], specs: ['80 tonne capacity', 'Air operated']}
];

const esc = s => String(s).replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
const wa = text => 'https://wa.me/' + CONTACT.whatsapp + '?text=' + encodeURIComponent(text);
const tel = 'tel:+' + CONTACT.call;
const ICON = {
  call: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.6a1 1 0 0 1-.25 1z"/></svg>',
  wa: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3 .78.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.25-.12-1.47-.72-1.7-.8s-.39-.12-.56.12-.64.8-.78.97-.29.18-.54.06a6.7 6.7 0 0 1-3.3-2.9c-.25-.43.25-.4.7-1.33a.44.44 0 0 0 0-.42c-.06-.12-.56-1.35-.77-1.85s-.4-.42-.56-.43h-.48a.92.92 0 0 0-.67.31 2.8 2.8 0 0 0-.87 2.08 4.9 4.9 0 0 0 1 2.6 11.2 11.2 0 0 0 4.3 3.8c1.6.69 2.23.75 3.03.63a2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .15-1.2c-.06-.11-.23-.17-.48-.3z"/></svg>'
};

const buttons = name => `<div class="btns">
  <a class="btn call" href="${tel}">${ICON.call}Call</a>
  <a class="btn wa" href="${wa('Hello TMT, I would like details of the ' + name + '.')}" target="_blank" rel="noopener">${ICON.wa}WhatsApp</a>
</div>`;

const card = p => `<article class="card" id="${esc(p.img[0])}">
  <div class="shot">${p.img.map((im, i) => `<img src="images/${esc(im)}.jpg" alt="${esc(p.name)}${i ? ', another view' : ''}" loading="lazy">`).join('')}</div>
  <div class="info">
    <h3>${esc(p.name)}</h3>
    <ul class="specs">${p.specs.map(s => `<li>${esc(s)}</li>`).join('')}</ul>
    ${p.img.length > 1 ? '<p class="swipe">Swipe the photo to see more</p>' : ''}
    ${buttons(p.name)}
  </div>
</article>`;

/* Fill every enquiry link that is in the static HTML */
for (const a of document.querySelectorAll('[data-call]')) a.href = tel;
for (const a of document.querySelectorAll('[data-wa]')) { a.href = wa(a.dataset.wa || 'Hello TMT, I would like to know more about your machines.'); a.target = '_blank'; a.rel = 'noopener'; }

/* Menu toggle on phones */
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
if (menuBtn && nav) menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});

/* Home: category tiles and featured machines */
const tiles = document.getElementById('cat-tiles');
if (tiles) tiles.innerHTML = CATEGORIES.map(c => `<a class="tile" href="products.html#${c.id}">
  <img src="images/${c.img}.jpg" alt="" loading="lazy">
  <span><b>${esc(c.name)}</b><small>${PRODUCTS.filter(p => p.cat === c.id).length} machines</small></span>
</a>`).join('');
const featured = document.getElementById('featured');
if (featured) featured.innerHTML = PRODUCTS.filter(p => p.featured).map(card).join('');

/* Products page: filter chips + grouped sections */
const list = document.getElementById('product-list');
if (list) {
  const chips = document.getElementById('chips');
  chips.innerHTML = `<a class="chip" href="#all" data-c="all">All</a>` + CATEGORIES.map(c => `<a class="chip" href="#${c.id}" data-c="${c.id}">${esc(c.name)}</a>`).join('');
  const render = () => {
    const want = location.hash.slice(1);
    const cur = CATEGORIES.some(c => c.id === want) ? want : 'all';
    for (const ch of chips.children) ch.setAttribute('aria-current', ch.dataset.c === cur);
    list.innerHTML = CATEGORIES.filter(c => cur === 'all' || c.id === cur).map(c => `<section class="group">
      <h2>${esc(c.name)}</h2><p class="lead">${esc(c.blurb)}</p>
      <div class="grid">${PRODUCTS.filter(p => p.cat === c.id).map(card).join('')}</div>
    </section>`).join('');
  };
  render();
  addEventListener('hashchange', () => { render(); chips.scrollIntoView({block: 'start'}); });
}

const yr = document.getElementById('yr');
if (yr) yr.textContent = new Date().getFullYear();
}
