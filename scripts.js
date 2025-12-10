// scripts.js

// set year in footer if exists
document.addEventListener('DOMContentLoaded', () => {
  const y = new Date().getFullYear();
  const yearEls = document.querySelectorAll('#year');
  yearEls.forEach(el => el.textContent = y);
});

// --- Timeline logic ---
// Load timeline-data.json (local)
async function loadTimeline(){
  try{
    const res = await fetch('timeline-data.json');
    const data = await res.json();
    initTimeline(data);
  }catch(e){
    // fallback inline data
    const data = [
      {id:0, name:'三叠纪', years:'~252–201 Ma', summary:'恐龙早期出现，生态系统恢复期。', image:''},
      {id:1, name:'侏罗纪', years:'~201–145 Ma', summary:'巨型蜥脚类繁盛，森林广布。', image:''},
      {id:2, name:'白垩纪', years:'~145–66 Ma', summary:'多样性顶峰并在末期遭遇灾变。', image:''}
    ];
    initTimeline(data);
  }
}

function initTimeline(data){
  const cardsDiv = document.getElementById('timeline-cards');
  const range = document.getElementById('timeline-range');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  if(!cardsDiv || !range) return;

  // render initial
  function render(index){
    const item = data[index];
    cardsDiv.innerHTML = `
      <div class="card" style="display:flex;gap:14px;align-items:center;">
        <div style="flex:1;padding:16px;">
          <h3 style="margin:0;color:var(--accent)">${item.name}</h3>
          <p class="muted" style="margin:6px 0 10px">${item.years}</p>
          <p style="margin:0">${item.summary}</p>
        </div>
        <div style="width:260px;">
          ${item.image?`<img src="${item.image}" alt="${item.name}" style="width:100%;height:140px;object-fit:cover;border-radius:8px">`:`<div style="width:100%;height:140px;border-radius:8px;background:linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));display:flex;align-items:center;justify-content:center;color:var(--muted)">图片占位</div>`}
        </div>
      </div>
    `;
    range.value = index;
  }

  render(0);

  prevBtn?.addEventListener('click', () => {
    let v = parseInt(range.value) - 1;
    if(v < parseInt(range.min)) v = parseInt(range.max);
    render(v);
  });
  nextBtn?.addEventListener('click', () => {
    let v = parseInt(range.value) + 1;
    if(v > parseInt(range.max)) v = parseInt(range.min);
    render(v);
  });

  range.addEventListener('input', (e) => {
    render(parseInt(e.target.value));
  });
}

loadTimeline();

// simple nav active highlight
const navLinks = document.querySelectorAll('.site-nav .nav-link');
navLinks.forEach(link => {
  if(link.href === window.location.href || window.location.href.indexOf(link.getAttribute('href')) > -1){
    link.classList.add('active');
  }
});
