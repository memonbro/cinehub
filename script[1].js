const movies=[
 {title:"Interstellar",year:2014,genre:"Sci-Fi",rating:"8.7",tone:"Space"},
 {title:"The Dark Knight",year:2008,genre:"Action",rating:"9.0",tone:"Gotham"},
 {title:"Inception",year:2010,genre:"Sci-Fi",rating:"8.8",tone:"Dream"},
 {title:"The Shawshank Redemption",year:1994,genre:"Drama",rating:"9.3",tone:"Hope"},
 {title:"Spider-Man: Into the Spider-Verse",year:2018,genre:"Animation",rating:"8.4",tone:"Spider"},
 {title:"The Grand Budapest Hotel",year:2014,genre:"Comedy",rating:"8.1",tone:"Hotel"},
 {title:"Parasite",year:2019,genre:"Drama",rating:"8.5",tone:"Seoul"},
 {title:"Mad Max: Fury Road",year:2015,genre:"Action",rating:"8.1",tone:"Fury"}
];
const grid=document.querySelector("#grid"),search=document.querySelector("#search"),filters=document.querySelector("#filters"),empty=document.querySelector("#empty");
let genre="All";
["All",...new Set(movies.map(m=>m.genre))].forEach(g=>{
 const b=document.createElement("button"); b.className="filter"+(g==="All"?" active":""); b.textContent=g;
 b.onclick=()=>{genre=g;document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");render()};
 filters.appendChild(b);
});
function render(){
 const q=search.value.trim().toLowerCase();
 const list=movies.filter(m=>(genre==="All"||m.genre===genre)&&(!q||m.title.toLowerCase().includes(q)||m.genre.toLowerCase().includes(q)));
 grid.innerHTML=list.map(m=>`<article class="card" title="Demo movie card">
   <div class="poster"><span>${m.tone}</span></div>
   <div class="cardBody"><h3>${m.title}</h3><div class="meta">${m.year} • ${m.genre}</div><div class="rating">★ ${m.rating}/10</div></div>
 </article>`).join("");
 empty.hidden=list.length>0;
}
search.addEventListener("input",render); render();