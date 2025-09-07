import{j as t}from"./animations-gUWowWhG.js";import{e as r,r as a}from"./vendor-ByeeqTfc.js";import{s as i,A as m}from"./index-BWCkS1Z_.js";import{P as n}from"./sanity-D1Eq7Cx7.js";import{f as c}from"./date-Bh8b8zhR.js";import{S as x}from"./SkeletonLoader-CCrfOLFT.js";import"./icons-C4sLXFjC.js";const d={block:{h1:({children:e})=>t.jsx("h1",{className:"text-4xl font-bold my-4",children:e}),h2:({children:e})=>t.jsx("h2",{className:"text-3xl font-bold my-4",children:e}),h3:({children:e})=>t.jsx("h3",{className:"text-2xl font-bold my-4",children:e}),h4:({children:e})=>t.jsx("h4",{className:"text-xl font-bold my-4",children:e}),normal:({children:e})=>t.jsx("p",{className:"text-lg my-4 text-justify",children:e}),blockquote:({children:e})=>t.jsx("blockquote",{className:"border-l-4 border-gray-500 pl-4 my-4",children:e})},list:{bullet:({children:e})=>t.jsx("ul",{className:"list-disc list-inside my-4",children:e}),number:({children:e})=>t.jsx("ol",{className:"list-decimal list-inside my-4",children:e})}};function g(){const{slug:e}=r(),[s,l]=a.useState(null);return a.useEffect(()=>{i.fetch(`*[_type == "post" && slug.current == $slug][0]{
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
          body,
          "name": author->name,
        }`,{slug:e}).then(o=>l(o)).catch(console.error)},[e]),s?t.jsxs(t.Fragment,{children:[t.jsxs("title",{children:[s.title," - PT. Century Bearindo International"]}),t.jsx("meta",{name:"description",content:`Baca artikel terbaru dari PT. Century Bearindo International: ${s.title}`}),t.jsx(m,{distance:150,direction:"vertical",reverse:!1,duration:1.5,ease:"power3.out",initialOpacity:0,animateOpacity:!0,scale:1,threshold:.2,delay:.5,children:t.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8 mt-4 mb-16",children:t.jsxs("div",{className:"max-w-3xl mx-auto",children:[t.jsx("h1",{className:"text-4xl font-bold text-left mb-4",children:s.title}),t.jsx("p",{className:"text-gray-500 text-sm mb-8",children:c(s.publishedAt)}),s.mainImage&&t.jsx("img",{src:s.mainImage.asset.url,alt:s.title,className:"rounded-2xl shadow-lg mb-8"}),t.jsx("h5",{className:"text-xl font-bold mb-4",children:s.excerpt}),t.jsx(n,{value:s.body,components:d})]})})})]}):t.jsx(x,{})}export{g as default};
