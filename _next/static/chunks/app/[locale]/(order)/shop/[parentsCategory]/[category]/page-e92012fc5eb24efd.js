(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1023],{64378:function(t,e,r){Promise.resolve().then(r.bind(r,36065)),Promise.resolve().then(r.bind(r,58630))},36065:function(t,e,r){"use strict";r.d(e,{default:function(){return I}});var o=r(57437),i=r(71632),s=r(4741),l=r.n(s),n=r(30166),d=r(99376),a=r(38588),u=r(2265),c=r(85733),p=r(66454),_=r(71841),m=r(13803),w=r(16778),f=r.n(w);let v=l().bind(f());function g(t){let{buttonTitle:e,isMoreList:r,moreViewHandler:i}=t;(0,a.useTranslations)();let s=(0,m.Z)();return(0,o.jsx)("div",{className:`flex items-center justify-center rounded-[4px] ${v("more-list")} ${"open"===r?v("more-list-open"):v("more-list-close")}`,children:(0,o.jsxs)("button",{type:"button",className:"flex items-center justify-center",onClick:i,children:[s("plp_view_more",e),(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"21",height:"20",viewBox:"0 0 21 20",fill:"none",children:(0,o.jsx)("path",{d:"M10.5 13.17L5.5 8.16998L6.66998 7L10.5 10.83L14.33 7L15.5 8.16998L10.5 13.17Z",fill:"#B4B4B4"})})]})})}var L=r(41133),x=r(30342),y=r(7264),b=r(85158);let h=t=>{let{locale:e,categoryId:r,skuArray:o}=t;return b.B.get(`/service/legacy/product/plp/${e}/${r}/${o}`).then(t=>t.data).catch(t=>{throw t})};var P=r(68392);r(7354),r(77948);var j=r(94277),N=r.n(j);let S=(0,n.default)(()=>Promise.all([r.e(3938),r.e(1810)]).then(r.bind(r,81620)),{loadableGenerated:{webpack:()=>[81620]},ssr:!1}),$=l().bind(N());function I(t){var e,r,s,l;let{params:n,categoryId:m,categoryUrlKey:w,parentsCategoryUrlKey:f,productInfoData:v,deviceType:b}=t,{locale:j,category:N,parentsCategory:I}=n,k=(0,d.usePathname)(),E=[].includes(j),T={"@context":`https://www.tamburins.com${k}`,"@type":"Product List",name:null==v?void 0:v.name,image:null==v?void 0:v.imagePath,description:null==v?void 0:v.metaDescription},[A,B]=(0,u.useState)(!0),M=(0,a.useTranslations)(),Z=(0,L.Z)(),[q,C]=(0,u.useState)(N),{visible:U,categoryRef:V}=(0,x.Z)(),[K,Y]=(0,u.useState)(null),[z,F]=(0,u.useState)(void 0),G=(0,P.y)(t=>t.update),H=(0,u.useCallback)(()=>{Y(null)},[]);(0,u.useEffect)(()=>{let t=async()=>{B(!1)};G({parentsCategoryUrlKey:f,categoryUrlKey:w}),t()},[]),(0,u.useEffect)(()=>{Z&&H()},[Z]);let{data:R,isSuccess:Q,refetch:J}=(0,i.useQuery)({queryKey:["getCart"],queryFn:y.dv,enabled:!E});(0,u.useEffect)(()=>{if(Q){var t;F(null==R?void 0:null===(t=R.data)||void 0===t?void 0:t.cartItemList)}},[R]);let[O,W]=(0,u.useState)([]);(0,u.useEffect)(()=>{Number.isNaN(q)||C(t=>(null==v||v.siblingList.findIndex(t=>t.urlKey.toString()===q.toString()),t))},[q,null==v?void 0:v.siblingList]);let D=(null==R?void 0:null===(r=R.data)||void 0===r?void 0:null===(e=r.cartItemList)||void 0===e?void 0:e.map(t=>t.productId))||[],X=(null==v?void 0:v.productGroupList.reduce((t,e)=>[...t,...e.categoryProductList.filter(t=>null==D?void 0:D.includes(t.productId))],[]))||[],tt=Array.from(new Set(X.map(t=>t.productId))).map(t=>X.find(e=>e.productId===t)).map(t=>t.productId),te=t=>{var e;let r=null==R?void 0:null===(e=R.data)||void 0===e?void 0:e.cartItemList.find(e=>e.productId===t);return null==r?void 0:r.id},tr=null==v?void 0:null===(s=v.productGroupList)||void 0===s?void 0:s.flatMap(t=>t.categoryProductList.map(t=>t.sku)),{data:to}=(0,i.useQuery)({queryKey:["legacyProductList",j,m,tr],queryFn:()=>h({locale:j,categoryId:m,skuArray:tr}),enabled:E}),ti=null==v?void 0:null===(l=v.productGroupList)||void 0===l?void 0:l.map(t=>{let e=t.categoryProductList.map(t=>{let{id:e,...r}=(null==to?void 0:to[t.sku])||{};return r?{...t,...r}:t});return{...t,categoryProductList:e}});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(T)}}),(0,o.jsx)("div",{className:`${$("product-wrap")}`,children:(0,o.jsx)(u.Suspense,{fallback:(0,o.jsx)("div",{className:$("product-loading"),style:{backgroundColor:"red"}}),children:(0,o.jsxs)(o.Fragment,{children:[0!==v.productGroupList.length&&ti.map((t,e)=>{let{id:r,buttonTitle:i,categoryProductList:s}=t,l=s.filter(t=>{let{plpSize:e}=t;return"S"!==e}).map(t=>{let{id:e,name:r,legacyProductName:o,price:i,size:s,modelCount:l,productImage:n,sku:d,plpSize:a,label:u,showNameWithSize:c,productId:p,noteLabel:_,isPlpTextActive:m,altText:w}=t;return{id:e,name:r,legacyProductName:o,price:i,size:s,modelCount:l,productImage:n,sku:d,plpSize:a,isActive:!1,position:0,productId:p,label:u,showNameWithSize:c,noteLabel:_,isPlpTextActive:m,altText:w}}),n=s.filter(t=>{let{plpSize:e}=t;return"S"===e}).map(t=>{let{id:e,name:r,shortName:o,legacyProductName:i,price:s,size:l,modelCount:n,productImage:d,sku:a,plpSize:u,label:c,productId:p,showNameWithSize:_,altText:m}=t;return{id:e,name:r,shortName:o,legacyProductName:i,price:s,size:l,modelCount:n,productImage:d,sku:a,plpSize:u,isActive:!1,label:c,position:0,productId:p,showNameWithSize:_,altText:m}}),d="open"===O[e];return(0,o.jsxs)("div",{className:`${$("product-wrap-box")}`,children:[l.length>0&&(0,o.jsx)("div",{className:`${$("product-wrap-list")} grid`,children:l.map(t=>{let{id:r,name:i,legacyProductName:s,price:l,modelCount:n,productImage:d,sku:a,plpSize:c,label:p,noteLabel:m,productId:w,showNameWithSize:f,size:v,isPlpTextActive:g,altText:L}=t;return(0,o.jsx)(u.Fragment,{children:(0,o.jsx)(_.Z,{locale:j,productUniqId:w,isLsize:"L"===c,LinkHref:`/item/${a}`,title:E?s:i,size:E&&f?v:"",label:E?m:p,price:l.toString(),plpImage:null!=d?d:void 0,plpImagesAlt:L,kind:(0,o.jsx)("span",{children:n.toString()}),cartTrigger:!Number.isNaN(Number(l)),cartOn:tt.includes(w)?"on":"off",cartItemId:te(w),toastType:K,setToastType:Y,isPriority:e<4,isPlpTextActive:g,plpSize:c},`${r} ${a}`)},`${r} ${a}`)})}),n.length>0&&(0,o.jsxs)("div",{className:`${d?$("product-wrap-list-box__open"):$("product-wrap-list-box__close")} ${$("product-wrap-list-box")}`,children:[(0,o.jsx)(g,{buttonTitle:i,isMoreList:d&&"open",moreViewHandler:()=>{W(t=>{let r=[...t];return r[e]="open"===t[e]?"close":"open",r})}}),(0,o.jsx)(p.tq,{id:"Swiper",slidesPerView:"auto",spaceBetween:0,freeMode:!0,modules:[c.Rv],className:`${d?$("product-wrap-list__more__open"):$("product-wrap-list__more__close")} ${$("product-wrap-list__more")}`,children:n.map(t=>{let{id:e,name:r,shortName:i,productImage:s,sku:l,productId:n,legacyProductName:d,altText:a}=t;return(0,o.jsx)(p.o5,{className:$("product-wrap-list__more-item"),children:(0,o.jsx)(_.Z,{locale:j,productUniqId:n,title:E?d:r,shortName:i,LinkHref:`/item/${l}`,plpImage:null!=s?s:void 0,plpImagesAlt:a,isMoreView:!0,cartTrigger:!1,isPriority:!1})},`${e} ${l}`)})})]})]},`${i}${r}`)}),Z&&(0,o.jsx)(S,{toastType:"added"===K?"added":"deleted"===K?"deleted":"",showLink:"added"===K,message:"added"===K?M("plp_added_to_cart"):"deleted"===K?M("plp_removed_from_cart"):"",isActive:null!==K,onTimeout:H,cartItems:z,refetch:J})]})})})]})}},58630:function(t,e,r){"use strict";r.d(e,{default:function(){return s}});var o=r(99376),i=r(2265);function s(t){let{message:e,redirectPath:r}=t,s=(0,o.useRouter)();return(0,i.useEffect)(()=>{alert(e),s.replace(r)},[e,r,s]),null}},30342:function(t,e,r){"use strict";r.d(e,{Z:function(){return i}});var o=r(2265);function i(){let[t,e]=(0,o.useState)(0),[r,i]=(0,o.useState)(!0),s=(0,o.useRef)(null),l=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let r=()=>{let r=window.scrollY+110;window.scrollY>=0&&window.scrollY<110?i(!0):window.scrollY>=110&&(i(t>r),e(r))},o=()=>{window.innerWidth>=1024&&r()};return window.addEventListener("scroll",r),window.addEventListener("resize",o),o(),()=>{window.removeEventListener("scroll",r),window.removeEventListener("resize",o)}},[t]),{visible:r,headerRef:s,categoryRef:l}}},68392:function(t,e,r){"use strict";r.d(e,{q:function(){return s},y:function(){return l}});var o=r(59625),i=r(89134);let s=(0,o.Ue)((0,i.mW)(t=>({parentsCategoryUrlKey:"",categoryUrlKey:"",update:e=>{let{parentsCategoryUrlKey:r,categoryUrlKey:o}=e;return t(t=>({...t,parentsCategoryUrlKey:r,categoryUrlKey:o}))}}))),l=(0,o.Ue)((0,i.mW)(t=>({parentsCategoryUrlKey:"",categoryUrlKey:"",update:e=>{let{parentsCategoryUrlKey:r,categoryUrlKey:o}=e;return t(t=>({...t,parentsCategoryUrlKey:r,categoryUrlKey:o}))}})))},94277:function(t){t.exports={"category-wrap":"ProductList_category-wrap__B1Z9S","category-wrap-visible":"ProductList_category-wrap-visible__Ut5TG","category-wrap-hidden":"ProductList_category-wrap-hidden__EyzCx","category-wrap-tab":"ProductList_category-wrap-tab__sk_F9","category-wrap-tab__swiper_list":"ProductList_category-wrap-tab__swiper_list__lBa7U","product-wrap":"ProductList_product-wrap__F4_Qx","product-wrap-list":"ProductList_product-wrap-list__zDYw9","product-wrap-list-box":"ProductList_product-wrap-list-box__AreQG","product-wrap-list-box__open":"ProductList_product-wrap-list-box__open__wYAJ1","product-wrap-list-box__close":"ProductList_product-wrap-list-box__close___bvSS","product-wrap-list__more":"ProductList_product-wrap-list__more__y3ZAx","product-wrap-list__more-item":"ProductList_product-wrap-list__more-item__RghmY","product-wrap-list__more__close":"ProductList_product-wrap-list__more__close__ennf0","product-wrap-list__more__open":"ProductList_product-wrap-list__more__open__1dfvf","product-loading":"ProductList_product-loading__xANqJ","store-list-wrap":"ProductList_store-list-wrap__d5ZCN","store-tab-wrap":"ProductList_store-tab-wrap__8iip2","store-tab-list":"ProductList_store-tab-list__SxKWT","store-tab-title":"ProductList_store-tab-title__eirNi","store-wrap":"ProductList_store-wrap__xq3HH","store-flex":"ProductList_store-flex__VDVhj","store-flex-title":"ProductList_store-flex-title__lj_7d","store-flex-content":"ProductList_store-flex-content__4KVRZ"}},16778:function(t){t.exports={"more-list":"ProductMoreViewButton_more-list__yxYVM","more-list-open":"ProductMoreViewButton_more-list-open__QL9J_","more-list-close":"ProductMoreViewButton_more-list-close__hiihM"}}},function(t){t.O(0,[6364,3110,3829,9160,8588,6313,2378,1632,3145,5883,3834,9537,2971,2117,1744],function(){return t(t.s=64378)}),_N_E=t.O()}]);