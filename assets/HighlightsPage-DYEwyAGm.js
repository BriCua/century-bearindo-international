import{j as e}from"./animations-gUWowWhG.js";import{L as n,r as a}from"./vendor-ByeeqTfc.js";import{s as l,A as r}from"./index-CHktanjB.js";import{f as c}from"./date-Bh8b8zhR.js";import"./sanity-D1Eq7Cx7.js";import"./icons-C4sLXFjC.js";function o({post:t}){return e.jsx("div",{className:"highlights-post-card",id:"break-ratio",children:e.jsxs(n,{to:`/highlights/${t.slug.current}`,children:[e.jsx("img",{src:t.mainImage.asset.url,alt:t.title}),e.jsxs("div",{className:"card-content",children:[e.jsx("h5",{children:t.title}),e.jsx("p",{className:"excerpt",children:t.excerpt}),e.jsx("p",{className:"post-date",children:c(t.publishedAt)})]})]})})}function x(){const[t,s]=a.useState([]);return a.useEffect(()=>{l.fetch(`*[_type == "post"]{
          title,
          slug,
          publishedAt,
          excerpt,
          mainImage{
            asset->{
              _id,
              url
            }
          },
          "name": author->name,
        }`).then(i=>s(i)).catch(console.error)},[]),e.jsxs(e.Fragment,{children:[e.jsx("title",{children:"Highlights - PT. Century Bearindo International"}),e.jsx("meta",{name:"description",content:"Baca artikel terbaru dari PT. Century Bearindo International mengenai industri, produk, dan layanan kami."}),e.jsx("meta",{name:"keywords",content:"Highlight, artikel, berita, informasi, industri, bearing"}),e.jsxs("div",{className:"mt-4 mb-16",children:[e.jsx(r,{distance:150,direction:"horizontal",reverse:!0,duration:1.5,ease:"power3.out",initialOpacity:0,animateOpacity:!0,scale:1,threshold:.2,delay:.5,children:e.jsxs("div",{className:"items-center flex-col group w-fit justify-self-center origin-center mb-12",children:[e.jsx("h1",{className:"def-ease-out  group-hover:tracking-[0.15em] ",children:"Highlights"}),e.jsx("hr",{className:"line def-ease-out group-hover:scale-x-500"})]})}),e.jsx(r,{distance:150,direction:"vertical",reverse:!1,duration:1.5,ease:"power3.out",initialOpacity:0,animateOpacity:!0,scale:1,threshold:.2,delay:.5,children:e.jsx("div",{className:"post-list flex justify-self-center justify-center flex-wrap gap-2",children:t.map(i=>e.jsx(o,{post:i},i.slug.current))})})]})]})}export{x as default};
