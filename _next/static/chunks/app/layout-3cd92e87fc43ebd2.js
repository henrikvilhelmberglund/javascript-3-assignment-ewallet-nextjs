(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{7543:function(e,r,t){Promise.resolve().then(t.t.bind(t,5542,23)),Promise.resolve().then(t.bind(t,6814)),Promise.resolve().then(t.t.bind(t,3996,23)),Promise.resolve().then(t.t.bind(t,4724,23))},6814:function(e,r,t){"use strict";t.r(r),t.d(r,{NameContext:function(){return d},default:function(){return l}});var n=t(7437),c=t(5726),a=t(8632);let i=(0,c.xC)({reducer:{ewallet:a.ZP}});var o=t(2265),u=t(3198);let d=(0,o.createContext)("a");function l(e){let{name:r,children:t}=e;return console.log(r),(0,n.jsx)(u.zt,{store:i,children:(0,n.jsx)(d.Provider,{value:r,children:t})})}},8632:function(e,r,t){"use strict";t.d(r,{D9:function(){return i},EX:function(){return o},Jf:function(){return s},LH:function(){return u},f1:function(){return l},lg:function(){return d}});var n=t(5726);let c={number:"****************",validThru:"1/2024",vendor:"DuckCard",ccv:"***",active:!0},a=(0,n.oM)({name:"ewalletSlice",initialState:{cards:[{number:"6666567891011123",validThru:"10/2024",vendor:"DuckCard",ccv:176,active:!0}],cardPreview:c},reducers:{setActiveCard:(e,r)=>{console.log(r);let{i:t,newState:n}=r.payload;e.cards[t].active=n},setAllCardsToInactive:(e,r)=>{console.log(r),e.cards.forEach(e=>{e.active=!1})},createCard:(e,r)=>{let t=r.payload;e.cards.push(t)},deleteCard:(e,r)=>{e.cards.splice(r.payload,1)},updateCardPreview:(e,r)=>{e.cardPreview=r.payload},resetCardPreview:(e,r)=>{e.cardPreview=c}}}),{setActiveCard:i,setAllCardsToInactive:o,createCard:u,updateCardPreview:d,deleteCard:l,resetCardPreview:s}=a.actions;r.ZP=a.reducer},5542:function(){},3996:function(){}},function(e){e.O(0,[713,724,971,864,744],function(){return e(e.s=7543)}),_N_E=e.O()}]);