var le=Object.defineProperty,he=Object.defineProperties;var ue=Object.getOwnPropertyDescriptors;var Y=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable;var L=Math.pow,U=(n,e,t)=>e in n?le(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,S=(n,e)=>{for(var t in e||(e={}))de.call(e,t)&&U(n,t,e[t]);if(Y)for(var t of Y(e))fe.call(e,t)&&U(n,t,e[t]);return n},T=(n,e)=>he(n,ue(e));import{a as ge,I as pe,aG as P,v as me,b as be,f as ye,L as Me,a8 as ke,aw as ve,k as R,ay as Ee,o as q,h as Se,j as De,aA as xe,aB as Te,z as we,aC as Ae,aD as Ie,aE as Le,az as Ce,l as Pe,i as F,q as j,aF as Re}from"./index.444718ea.js";const je=n=>Object.keys(n).length===0,N=(n,e)=>n.push.apply(n,e),_e=(n,e)=>n.split("").map(s=>e[s]||s).join(""),A=n=>n.sort((e,t)=>e.i-t.i||e.j-t.j),V=n=>{const e={};let t=1;return n.forEach(s=>{e[s]=t,t+=1}),e};var Oe={4:[[1,2],[2,3]],5:[[1,3],[2,3],[2,4]],6:[[1,2],[2,4],[4,5]],7:[[1,3],[2,3],[4,5],[4,6]],8:[[2,4],[4,6]]};const B=2050,H=1e3,Ne=Oe,We=10,$e=1e4,X=10,J=50,Q=20,ee=/^[A-Z\xbf-\xdf][^A-Z\xbf-\xdf]+$/,ze=/^[^A-Z\xbf-\xdf]+[A-Z\xbf-\xdf]$/,Ge=/^[A-Z\xbf-\xdf]+$/,te=/^[^a-z\xdf-\xff]+$/,Ye=/^[a-z\xdf-\xff]+$/,Ue=/^[^A-Z\xbf-\xdf]+$/,qe=/[a-z\xdf-\xff]/,Fe=/[A-Z\xbf-\xdf]/,Ve=/[^A-Za-z\xbf-\xdf]/gi,Be=/^\d+$/,$=new Date().getFullYear(),He={recentYear:/19\d\d|200\d|201\d|202\d/g};class Ze{match({password:e}){const t=[...this.getMatchesWithoutSeparator(e),...this.getMatchesWithSeparator(e)],s=this.filterNoise(t);return A(s)}getMatchesWithSeparator(e){const t=[],s=/^(\d{1,4})([\s/\\_.-])(\d{1,2})\2(\d{1,4})$/;for(let r=0;r<=Math.abs(e.length-6);r+=1)for(let a=r+5;a<=r+9&&!(a>=e.length);a+=1){const i=e.slice(r,+a+1||9e9),o=s.exec(i);if(o!=null){const c=this.mapIntegersToDayMonthYear([parseInt(o[1],10),parseInt(o[3],10),parseInt(o[4],10)]);c!=null&&t.push({pattern:"date",token:i,i:r,j:a,separator:o[2],year:c.year,month:c.month,day:c.day})}}return t}getMatchesWithoutSeparator(e){const t=[],s=/^\d{4,8}$/,r=a=>Math.abs(a.year-$);for(let a=0;a<=Math.abs(e.length-4);a+=1)for(let i=a+3;i<=a+7&&!(i>=e.length);i+=1){const o=e.slice(a,+i+1||9e9);if(s.exec(o)){const c=[],l=o.length;if(Ne[l].forEach(([d,m])=>{const p=this.mapIntegersToDayMonthYear([parseInt(o.slice(0,d),10),parseInt(o.slice(d,m),10),parseInt(o.slice(m),10)]);p!=null&&c.push(p)}),c.length>0){let d=c[0],m=r(c[0]);c.slice(1).forEach(p=>{const u=r(p);u<m&&(d=p,m=u)}),t.push({pattern:"date",token:o,i:a,j:i,separator:"",year:d.year,month:d.month,day:d.day})}}}return t}filterNoise(e){return e.filter(t=>{let s=!1;const r=e.length;for(let a=0;a<r;a+=1){const i=e[a];if(t!==i&&i.i<=t.i&&i.j>=t.j){s=!0;break}}return!s})}mapIntegersToDayMonthYear(e){if(e[1]>31||e[1]<=0)return null;let t=0,s=0,r=0;for(let a=0,i=e.length;a<i;a+=1){const o=e[a];if(o>99&&o<H||o>B)return null;o>31&&(s+=1),o>12&&(t+=1),o<=0&&(r+=1)}return s>=2||t===3||r>=2?null:this.getDayMonth(e)}getDayMonth(e){const t=[[e[2],e.slice(0,2)],[e[0],e.slice(1,3)]],s=t.length;for(let r=0;r<s;r+=1){const[a,i]=t[r];if(H<=a&&a<=B){const o=this.mapIntegersToDayMonth(i);return o!=null?{year:a,month:o.month,day:o.day}:null}}for(let r=0;r<s;r+=1){const[a,i]=t[r],o=this.mapIntegersToDayMonth(i);if(o!=null)return{year:this.twoToFourDigitYear(a),month:o.month,day:o.day}}return null}mapIntegersToDayMonth(e){const t=[e,e.slice().reverse()];for(let s=0;s<t.length;s+=1){const r=t[s],a=r[0],i=r[1];if(a>=1&&a<=31&&i>=1&&i<=12)return{day:a,month:i}}return null}twoToFourDigitYear(e){return e>99?e:e>50?e+1900:e+2e3}}const x=new Uint32Array(65536),Ke=(n,e)=>{const t=n.length,s=e.length,r=1<<t-1;let a=-1,i=0,o=t,c=t;for(;c--;)x[n.charCodeAt(c)]|=1<<c;for(c=0;c<s;c++){let l=x[e.charCodeAt(c)];const f=l|i;l|=(l&a)+a^a,i|=~(l|a),a&=l,i&r&&o++,a&r&&o--,i=i<<1|1,a=a<<1|~(f|i),i&=f}for(c=t;c--;)x[n.charCodeAt(c)]=0;return o},Xe=(n,e)=>{const t=e.length,s=n.length,r=[],a=[],i=Math.ceil(t/32),o=Math.ceil(s/32);for(let u=0;u<i;u++)a[u]=-1,r[u]=0;let c=0;for(;c<o-1;c++){let u=0,b=-1;const k=c*32,v=Math.min(32,s)+k;for(let g=k;g<v;g++)x[n.charCodeAt(g)]|=1<<g;for(let g=0;g<t;g++){const D=x[e.charCodeAt(g)],M=a[g/32|0]>>>g&1,E=r[g/32|0]>>>g&1,z=D|u,G=((D|E)&b)+b^b|D|E;let I=u|~(G|b),C=b&G;I>>>31^M&&(a[g/32|0]^=1<<g),C>>>31^E&&(r[g/32|0]^=1<<g),I=I<<1|M,C=C<<1|E,b=C|~(z|I),u=I&z}for(let g=k;g<v;g++)x[n.charCodeAt(g)]=0}let l=0,f=-1;const d=c*32,m=Math.min(32,s-d)+d;for(let u=d;u<m;u++)x[n.charCodeAt(u)]|=1<<u;let p=s;for(let u=0;u<t;u++){const b=x[e.charCodeAt(u)],k=a[u/32|0]>>>u&1,v=r[u/32|0]>>>u&1,g=b|l,D=((b|v)&f)+f^f|b|v;let M=l|~(D|f),E=f&D;p+=M>>>s-1&1,p-=E>>>s-1&1,M>>>31^k&&(a[u/32|0]^=1<<u),E>>>31^v&&(r[u/32|0]^=1<<u),M=M<<1|k,E=E<<1|v,f=E|~(g|M),l=M&g}for(let u=d;u<m;u++)x[n.charCodeAt(u)]=0;return p},Je=(n,e)=>{if(n.length<e.length){const t=e;e=n,n=t}return e.length===0?n.length:n.length<=32?Ke(n,e):Xe(n,e)},Qe=(n,e,t)=>{const s=n.length<=e.length,r=n.length<=t;return s||r?Math.ceil(n.length/4):t},et=(n,e,t)=>{let s=0;const r=Object.keys(e).find(a=>{const i=Qe(n,a,t),o=Je(n,a),c=o<=i;return c&&(s=o),c});return r?{levenshteinDistance:s,levenshteinDistanceEntry:r}:{}};var tt={a:["4","@"],b:["8"],c:["(","{","[","<"],e:["3"],g:["6","9"],i:["1","!","|"],l:["1","|","7"],o:["0"],s:["$","5"],t:["+","7"],x:["%"],z:["2"]},_={warnings:{straightRow:"straightRow",keyPattern:"keyPattern",simpleRepeat:"simpleRepeat",extendedRepeat:"extendedRepeat",sequences:"sequences",recentYears:"recentYears",dates:"dates",topTen:"topTen",topHundred:"topHundred",common:"common",similarToCommon:"similarToCommon",wordByItself:"wordByItself",namesByThemselves:"namesByThemselves",commonNames:"commonNames",userInputs:"userInputs",pwned:"pwned"},suggestions:{l33t:"l33t",reverseWords:"reverseWords",allUppercase:"allUppercase",capitalization:"capitalization",dates:"dates",recentYears:"recentYears",associatedYears:"associatedYears",sequences:"sequences",repeated:"repeated",longerKeyboardPattern:"longerKeyboardPattern",anotherWord:"anotherWord",useWords:"useWords",noNeed:"noNeed",pwned:"pwned"},timeEstimation:{ltSecond:"ltSecond",second:"second",seconds:"seconds",minute:"minute",minutes:"minutes",hour:"hour",hours:"hours",day:"day",days:"days",month:"month",months:"months",year:"year",years:"years",centuries:"centuries"}};class st{constructor(){this.matchers={},this.l33tTable=tt,this.dictionary={userInputs:[]},this.rankedDictionaries={},this.rankedDictionariesMaxWordSize={},this.translations=_,this.graphs={},this.useLevenshteinDistance=!1,this.levenshteinThreshold=2,this.l33tMaxSubstitutions=100,this.maxLength=256,this.setRankedDictionaries()}setOptions(e={}){e.l33tTable&&(this.l33tTable=e.l33tTable),e.dictionary&&(this.dictionary=e.dictionary,this.setRankedDictionaries()),e.translations&&this.setTranslations(e.translations),e.graphs&&(this.graphs=e.graphs),e.useLevenshteinDistance!==void 0&&(this.useLevenshteinDistance=e.useLevenshteinDistance),e.levenshteinThreshold!==void 0&&(this.levenshteinThreshold=e.levenshteinThreshold),e.l33tMaxSubstitutions!==void 0&&(this.l33tMaxSubstitutions=e.l33tMaxSubstitutions),e.maxLength!==void 0&&(this.maxLength=e.maxLength)}setTranslations(e){if(this.checkCustomTranslations(e))this.translations=e;else throw new Error("Invalid translations object fallback to keys")}checkCustomTranslations(e){let t=!0;return Object.keys(_).forEach(s=>{if(s in e){const r=s;Object.keys(_[r]).forEach(a=>{a in e[r]||(t=!1)})}else t=!1}),t}setRankedDictionaries(){const e={},t={};Object.keys(this.dictionary).forEach(s=>{e[s]=this.getRankedDictionary(s),t[s]=this.getRankedDictionariesMaxWordSize(s)}),this.rankedDictionaries=e,this.rankedDictionariesMaxWordSize=t}getRankedDictionariesMaxWordSize(e){const t=this.dictionary[e].map(s=>typeof s!="string"?s.toString().length:s.length);return t.length===0?0:t.reduce((s,r)=>Math.max(s,r),-1/0)}getRankedDictionary(e){const t=this.dictionary[e];if(e==="userInputs"){const s=[];return t.forEach(r=>{const a=typeof r;(a==="string"||a==="number"||a==="boolean")&&s.push(r.toString().toLowerCase())}),V(s)}return V(t)}extendUserInputsDictionary(e){this.dictionary.userInputs?this.dictionary.userInputs=[...this.dictionary.userInputs,...e]:this.dictionary.userInputs=e,this.rankedDictionaries.userInputs=this.getRankedDictionary("userInputs"),this.rankedDictionariesMaxWordSize.userInputs=this.getRankedDictionariesMaxWordSize("userInputs")}addMatcher(e,t){this.matchers[e]||(this.matchers[e]=t)}}const h=new st;class nt{constructor(e){this.defaultMatch=e}match({password:e}){const t=e.split("").reverse().join("");return this.defaultMatch({password:t}).map(s=>T(S({},s),{token:s.token.split("").reverse().join(""),reversed:!0,i:e.length-1-s.j,j:e.length-1-s.i}))}}class rt{constructor(e){this.defaultMatch=e}match({password:e}){const t=[],s=this.enumerateL33tSubs(this.relevantL33tSubtable(e,h.l33tTable)),r=Math.min(s.length,h.l33tMaxSubstitutions);for(let a=0;a<r;a+=1){const i=s[a];if(je(i))break;const o=_e(e,i);this.defaultMatch({password:o}).forEach(l=>{const f=e.slice(l.i,+l.j+1||9e9);if(f.toLowerCase()!==l.matchedWord){const d={};Object.keys(i).forEach(p=>{const u=i[p];f.indexOf(p)!==-1&&(d[p]=u)});const m=Object.keys(d).map(p=>`${p} -> ${d[p]}`).join(", ");t.push(T(S({},l),{l33t:!0,token:f,sub:d,subDisplay:m}))}})}return t.filter(a=>a.token.length>1)}relevantL33tSubtable(e,t){const s={},r={};return e.split("").forEach(a=>{s[a]=!0}),Object.keys(t).forEach(a=>{const o=t[a].filter(c=>c in s);o.length>0&&(r[a]=o)}),r}enumerateL33tSubs(e){const t=Object.keys(e);return this.getSubs(t,[[]],e).map(r=>{const a={};return r.forEach(([i,o])=>{a[i]=o}),a})}getSubs(e,t,s){if(!e.length)return t;const r=e[0],a=e.slice(1),i=[];s[r].forEach(c=>{t.forEach(l=>{let f=-1;for(let d=0;d<l.length;d+=1)if(l[d][0]===c){f=d;break}if(f===-1){const d=l.concat([[c,r]]);i.push(d)}else{const d=l.slice(0);d.splice(f,1),d.push([c,r]),i.push(l),i.push(d)}})});const o=this.dedup(i);return a.length?this.getSubs(a,o,s):o}dedup(e){const t=[],s={};return e.forEach(r=>{const a=r.map((o,c)=>[o,c]);a.sort();const i=a.map(([o,c])=>`${o},${c}`).join("-");i in s||(s[i]=!0,t.push(r))}),t}}class at{constructor(){this.l33t=new rt(this.defaultMatch),this.reverse=new nt(this.defaultMatch)}match({password:e}){const t=[...this.defaultMatch({password:e}),...this.reverse.match({password:e}),...this.l33t.match({password:e})];return A(t)}defaultMatch({password:e}){const t=[],s=e.length,r=e.toLowerCase();return Object.keys(h.rankedDictionaries).forEach(a=>{const i=h.rankedDictionaries[a],o=h.rankedDictionariesMaxWordSize[a],c=Math.min(o,s);for(let l=0;l<s;l+=1){const f=Math.min(l+c,s);for(let d=l;d<f;d+=1){const m=r.slice(l,+d+1||9e9),p=m in i;let u={};const b=l===0&&d===s-1;h.useLevenshteinDistance&&b&&!p&&(u=et(m,i,h.levenshteinThreshold));const k=Object.keys(u).length!==0;if(p||k){const v=k?u.levenshteinDistanceEntry:m,g=i[v];t.push(S({pattern:"dictionary",i:l,j:d,token:e.slice(l,+d+1||9e9),matchedWord:m,rank:g,dictionaryName:a,reversed:!1,l33t:!1},u))}}}}),t}}class it{match({password:e,regexes:t=He}){const s=[];return Object.keys(t).forEach(r=>{const a=t[r];a.lastIndex=0;const i=a.exec(e);if(i){const o=i[0];s.push({pattern:"regex",token:o,i:i.index,j:i.index+i[0].length-1,regexName:r,regexMatch:i})}}),A(s)}}var w={nCk(n,e){let t=n;if(e>t)return 0;if(e===0)return 1;let s=1;for(let r=1;r<=e;r+=1)s*=t,s/=r,t-=1;return s},log10(n){return Math.log(n)/Math.log(10)},log2(n){return Math.log(n)/Math.log(2)},factorial(n){let e=1;for(let t=2;t<=n;t+=1)e*=t;return e}},ot=({token:n})=>{let e=L(We,n.length);e===Number.POSITIVE_INFINITY&&(e=Number.MAX_VALUE);let t;return n.length===1?t=X+1:t=J+1,Math.max(e,t)},ct=({year:n,separator:e})=>{let s=Math.max(Math.abs(n-$),Q)*365;return e&&(s*=4),s};const lt=n=>{const e=n.split(""),t=e.filter(i=>i.match(Fe)).length,s=e.filter(i=>i.match(qe)).length;let r=0;const a=Math.min(t,s);for(let i=1;i<=a;i+=1)r+=w.nCk(t+s,i);return r};var ht=n=>{const e=n.replace(Ve,"");if(e.match(Ue)||e.toLowerCase()===e)return 1;const t=[ee,ze,te],s=t.length;for(let r=0;r<s;r+=1){const a=t[r];if(e.match(a))return 2}return lt(e)};const ut=({subs:n,subbed:e,token:t})=>{const s=n[e],r=t.toLowerCase().split(""),a=r.filter(o=>o===e).length,i=r.filter(o=>o===s).length;return{subbedCount:a,unsubbedCount:i}};var dt=({l33t:n,sub:e,token:t})=>{if(!n)return 1;let s=1;const r=e;return Object.keys(r).forEach(a=>{const{subbedCount:i,unsubbedCount:o}=ut({subs:r,subbed:a,token:t});if(i===0||o===0)s*=2;else{const c=Math.min(o,i);let l=0;for(let f=1;f<=c;f+=1)l+=w.nCk(o+i,f);s*=l}}),s},ft=({rank:n,reversed:e,l33t:t,sub:s,token:r})=>{const a=n,i=ht(r),o=dt({l33t:t,sub:s,token:r}),c=e&&2||1,l=a*i*o*c;return{baseGuesses:a,uppercaseVariations:i,l33tVariations:o,calculation:l}},gt=({regexName:n,regexMatch:e,token:t})=>{const s={alphaLower:26,alphaUpper:26,alpha:52,alphanumeric:62,digits:10,symbols:33};if(n in s)return L(s[n],t.length);switch(n){case"recentYear":return Math.max(Math.abs(parseInt(e[0],10)-$),Q)}return 0},pt=({baseGuesses:n,repeatCount:e})=>n*e,mt=({token:n,ascending:e})=>{const t=n.charAt(0);let s=0;return["a","A","z","Z","0","1","9"].includes(t)?s=4:t.match(/\d/)?s=10:s=26,e||(s*=2),s*n.length};const bt=n=>{let e=0;return Object.keys(n).forEach(t=>{e+=n[t].filter(r=>!!r).length}),e/=Object.entries(n).length,e},yt=({token:n,graph:e,turns:t})=>{const s=Object.keys(h.graphs[e]).length,r=bt(h.graphs[e]);let a=0;const i=n.length;for(let o=2;o<=i;o+=1){const c=Math.min(t,o-1);for(let l=1;l<=c;l+=1)a+=w.nCk(o-1,l-1)*s*L(r,l)}return a};var Mt=({graph:n,token:e,shiftedCount:t,turns:s})=>{let r=yt({token:e,graph:n,turns:s});if(t){const a=e.length-t;if(t===0||a===0)r*=2;else{let i=0;for(let o=1;o<=Math.min(t,a);o+=1)i+=w.nCk(t+a,o);r*=i}}return Math.round(r)};const kt=(n,e)=>{let t=1;return n.token.length<e.length&&(n.token.length===1?t=X:t=J),t},Z={bruteforce:ot,date:ct,dictionary:ft,regex:gt,repeat:pt,sequence:mt,spatial:Mt},vt=(n,e)=>Z[n]?Z[n](e):h.matchers[n]&&"scoring"in h.matchers[n]?h.matchers[n].scoring(e):0;var Et=(n,e)=>{const t={};if("guesses"in n&&n.guesses!=null)return n;const s=kt(n,e),r=vt(n.pattern,n);let a=0;typeof r=="number"?a=r:n.pattern==="dictionary"&&(a=r.calculation,t.baseGuesses=r.baseGuesses,t.uppercaseVariations=r.uppercaseVariations,t.l33tVariations=r.l33tVariations);const i=Math.max(a,s);return T(S(S({},n),t),{guesses:i,guessesLog10:w.log10(i)})};const y={password:"",optimal:{},excludeAdditive:!1,fillArray(n,e){const t=[];for(let s=0;s<n;s+=1){let r=[];e==="object"&&(r={}),t.push(r)}return t},makeBruteforceMatch(n,e){return{pattern:"bruteforce",token:this.password.slice(n,+e+1||9e9),i:n,j:e}},update(n,e){const t=n.j,s=Et(n,this.password);let r=s.guesses;e>1&&(r*=this.optimal.pi[s.i-1][e-1]);let a=w.factorial(e)*r;this.excludeAdditive||(a+=L($e,e-1));let i=!1;Object.keys(this.optimal.g[t]).forEach(o=>{const c=this.optimal.g[t][o];parseInt(o,10)<=e&&c<=a&&(i=!0)}),i||(this.optimal.g[t][e]=a,this.optimal.m[t][e]=s,this.optimal.pi[t][e]=r)},bruteforceUpdate(n){let e=this.makeBruteforceMatch(0,n);this.update(e,1);for(let t=1;t<=n;t+=1){e=this.makeBruteforceMatch(t,n);const s=this.optimal.m[t-1];Object.keys(s).forEach(r=>{s[r].pattern!=="bruteforce"&&this.update(e,parseInt(r,10)+1)})}},unwind(n){const e=[];let t=n-1,s=0,r=1/0;const a=this.optimal.g[t];for(a&&Object.keys(a).forEach(i=>{const o=a[i];o<r&&(s=parseInt(i,10),r=o)});t>=0;){const i=this.optimal.m[t][s];e.unshift(i),t=i.i-1,s-=1}return e}};var W={mostGuessableMatchSequence(n,e,t=!1){y.password=n,y.excludeAdditive=t;const s=n.length;let r=y.fillArray(s,"array");e.forEach(c=>{r[c.j].push(c)}),r=r.map(c=>c.sort((l,f)=>l.i-f.i)),y.optimal={m:y.fillArray(s,"object"),pi:y.fillArray(s,"object"),g:y.fillArray(s,"object")};for(let c=0;c<s;c+=1)r[c].forEach(l=>{l.i>0?Object.keys(y.optimal.m[l.i-1]).forEach(f=>{y.update(l,parseInt(f,10)+1)}):y.update(l,1)}),y.bruteforceUpdate(c);const a=y.unwind(s),i=a.length,o=this.getGuesses(n,i);return{password:n,guesses:o,guessesLog10:w.log10(o),sequence:a}},getGuesses(n,e){const t=n.length;let s=0;return n.length===0?s=1:s=y.optimal.g[t-1][e],s}};class St{match({password:e,omniMatch:t}){const s=[];let r=0;for(;r<e.length;){const i=this.getGreedyMatch(e,r),o=this.getLazyMatch(e,r);if(i==null)break;const{match:c,baseToken:l}=this.setMatchToken(i,o);if(c){const f=c.index+c[0].length-1,d=this.getBaseGuesses(l,t);s.push(this.normalizeMatch(l,f,c,d)),r=f+1}}return s.some(i=>i instanceof Promise)?Promise.all(s):s}normalizeMatch(e,t,s,r){const a={pattern:"repeat",i:s.index,j:t,token:s[0],baseToken:e,baseGuesses:0,repeatCount:s[0].length/e.length};return r instanceof Promise?r.then(i=>T(S({},a),{baseGuesses:i})):T(S({},a),{baseGuesses:r})}getGreedyMatch(e,t){const s=/(.+)\1+/g;return s.lastIndex=t,s.exec(e)}getLazyMatch(e,t){const s=/(.+?)\1+/g;return s.lastIndex=t,s.exec(e)}setMatchToken(e,t){const s=/^(.+?)\1+$/;let r,a="";if(t&&e[0].length>t[0].length){r=e;const i=s.exec(r[0]);i&&(a=i[1])}else r=t,r&&(a=r[1]);return{match:r,baseToken:a}}getBaseGuesses(e,t){const s=t.match(e);return s instanceof Promise?s.then(a=>W.mostGuessableMatchSequence(e,a).guesses):W.mostGuessableMatchSequence(e,s).guesses}}class Dt{constructor(){this.MAX_DELTA=5}match({password:e}){const t=[];if(e.length===1)return[];let s=0,r=null;const a=e.length;for(let i=1;i<a;i+=1){const o=e.charCodeAt(i)-e.charCodeAt(i-1);if(r==null&&(r=o),o!==r){const c=i-1;this.update({i:s,j:c,delta:r,password:e,result:t}),s=c,r=o}}return this.update({i:s,j:a-1,delta:r,password:e,result:t}),t}update({i:e,j:t,delta:s,password:r,result:a}){if(t-e>1||Math.abs(s)===1){const i=Math.abs(s);if(i>0&&i<=this.MAX_DELTA){const o=r.slice(e,+t+1||9e9),{sequenceName:c,sequenceSpace:l}=this.getSequence(o);return a.push({pattern:"sequence",i:e,j:t,token:r.slice(e,+t+1||9e9),sequenceName:c,sequenceSpace:l,ascending:s>0})}}return null}getSequence(e){let t="unicode",s=26;return Ye.test(e)?(t="lower",s=26):Ge.test(e)?(t="upper",s=26):Be.test(e)&&(t="digits",s=10),{sequenceName:t,sequenceSpace:s}}}class xt{constructor(){this.SHIFTED_RX=/[~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?]/}match({password:e}){const t=[];return Object.keys(h.graphs).forEach(s=>{const r=h.graphs[s];N(t,this.helper(e,r,s))}),A(t)}checkIfShifted(e,t,s){return!e.includes("keypad")&&this.SHIFTED_RX.test(t.charAt(s))?1:0}helper(e,t,s){let r;const a=[];let i=0;const o=e.length;for(;i<o-1;){let c=i+1,l=0,f=0;for(r=this.checkIfShifted(s,e,i);;){const d=e.charAt(c-1),m=t[d]||[];let p=!1,u=-1,b=-1;if(c<o){const k=e.charAt(c),v=m.length;for(let g=0;g<v;g+=1){const D=m[g];if(b+=1,D){const M=D.indexOf(k);if(M!==-1){p=!0,u=b,M===1&&(r+=1),l!==u&&(f+=1,l=u);break}}}}if(p)c+=1;else{c-i>2&&a.push({pattern:"spatial",i,j:c-1,token:e.slice(i,c),graph:s,turns:f,shiftedCount:r}),i=c;break}}}return a}}class Tt{constructor(){this.matchers={date:Ze,dictionary:at,regex:it,repeat:St,sequence:Dt,spatial:xt}}match(e){const t=[],s=[];return[...Object.keys(this.matchers),...Object.keys(h.matchers)].forEach(a=>{if(!this.matchers[a]&&!h.matchers[a])return;const i=this.matchers[a]?this.matchers[a]:h.matchers[a].Matching,c=new i().match({password:e,omniMatch:this});c instanceof Promise?(c.then(l=>{N(t,l)}),s.push(c)):N(t,c)}),s.length>0?new Promise(a=>{Promise.all(s).then(()=>{a(A(t))})}):A(t)}}const se=1,ne=se*60,re=ne*60,ae=re*24,ie=ae*31,oe=ie*12,wt=oe*100,O={second:se,minute:ne,hour:re,day:ae,month:ie,year:oe,century:wt};class At{translate(e,t){let s=e;t!==void 0&&t!==1&&(s+="s");const{timeEstimation:r}=h.translations;return r[s].replace("{base}",`${t}`)}estimateAttackTimes(e){const t={onlineThrottling100PerHour:e/.027777777777777776,onlineNoThrottling10PerSecond:e/10,offlineSlowHashing1e4PerSecond:e/1e4,offlineFastHashing1e10PerSecond:e/1e10},s={onlineThrottling100PerHour:"",onlineNoThrottling10PerSecond:"",offlineSlowHashing1e4PerSecond:"",offlineFastHashing1e10PerSecond:""};return Object.keys(t).forEach(r=>{const a=t[r];s[r]=this.displayTime(a)}),{crackTimesSeconds:t,crackTimesDisplay:s,score:this.guessesToScore(e)}}guessesToScore(e){return e<1e3+5?0:e<1e6+5?1:e<1e8+5?2:e<1e10+5?3:4}displayTime(e){let t="centuries",s;const r=Object.keys(O),a=r.findIndex(i=>e<O[i]);return a>-1&&(t=r[a-1],a!==0?s=Math.round(e/O[t]):t="ltSecond"),this.translate(t,s)}}var It=()=>null,Lt=()=>({warning:h.translations.warnings.dates,suggestions:[h.translations.suggestions.dates]});const Ct=(n,e)=>{let t="";return e&&!n.l33t&&!n.reversed?n.rank<=10?t=h.translations.warnings.topTen:n.rank<=100?t=h.translations.warnings.topHundred:t=h.translations.warnings.common:n.guessesLog10<=4&&(t=h.translations.warnings.similarToCommon),t},Pt=(n,e)=>{let t="";return e&&(t=h.translations.warnings.wordByItself),t},Rt=(n,e)=>e?h.translations.warnings.namesByThemselves:h.translations.warnings.commonNames,jt=(n,e)=>{let t="";const s=n.dictionaryName,r=s==="lastnames"||s.toLowerCase().includes("firstnames");return s==="passwords"?t=Ct(n,e):s.includes("wikipedia")?t=Pt(n,e):r?t=Rt(n,e):s==="userInputs"&&(t=h.translations.warnings.userInputs),t};var _t=(n,e)=>{const t=jt(n,e),s=[],r=n.token;return r.match(ee)?s.push(h.translations.suggestions.capitalization):r.match(te)&&r.toLowerCase()!==r&&s.push(h.translations.suggestions.allUppercase),n.reversed&&n.token.length>=4&&s.push(h.translations.suggestions.reverseWords),n.l33t&&s.push(h.translations.suggestions.l33t),{warning:t,suggestions:s}},Ot=n=>n.regexName==="recentYear"?{warning:h.translations.warnings.recentYears,suggestions:[h.translations.suggestions.recentYears,h.translations.suggestions.associatedYears]}:{warning:"",suggestions:[]},Nt=n=>{let e=h.translations.warnings.extendedRepeat;return n.baseToken.length===1&&(e=h.translations.warnings.simpleRepeat),{warning:e,suggestions:[h.translations.suggestions.repeated]}},Wt=()=>({warning:h.translations.warnings.sequences,suggestions:[h.translations.suggestions.sequences]}),$t=n=>{let e=h.translations.warnings.keyPattern;return n.turns===1&&(e=h.translations.warnings.straightRow),{warning:e,suggestions:[h.translations.suggestions.longerKeyboardPattern]}};const K={warning:"",suggestions:[]};class zt{constructor(){this.matchers={bruteforce:It,date:Lt,dictionary:_t,regex:Ot,repeat:Nt,sequence:Wt,spatial:$t},this.defaultFeedback={warning:"",suggestions:[]},this.setDefaultSuggestions()}setDefaultSuggestions(){this.defaultFeedback.suggestions.push(h.translations.suggestions.useWords,h.translations.suggestions.noNeed)}getFeedback(e,t){if(t.length===0)return this.defaultFeedback;if(e>2)return K;const s=h.translations.suggestions.anotherWord,r=this.getLongestMatch(t);let a=this.getMatchFeedback(r,t.length===1);return a!=null?(a.suggestions.unshift(s),a.warning==null&&(a.warning="")):a={warning:"",suggestions:[s]},a}getLongestMatch(e){let t=e[0];return e.slice(1).forEach(r=>{r.token.length>t.token.length&&(t=r)}),t}getMatchFeedback(e,t){return this.matchers[e.pattern]?this.matchers[e.pattern](e,t):h.matchers[e.pattern]&&"feedback"in h.matchers[e.pattern]?h.matchers[e.pattern].feedback(e,t):K}}const ce=()=>new Date().getTime(),Gt=(n,e,t)=>{const s=new zt,r=new At,a=W.mostGuessableMatchSequence(e,n),i=ce()-t,o=r.estimateAttackTimes(a.guesses);return T(S(S({calcTime:i},a),o),{feedback:s.getFeedback(o.score,a.sequence)})},Yt=(n,e)=>(e&&h.extendUserInputsDictionary(e),new Tt().match(n)),Ut=(n,e)=>{const t=ce(),s=Yt(n,e);if(s instanceof Promise)throw new Error("You are using a Promised matcher, please use `zxcvbnAsync` for it.");return Gt(s,n,t)};const qt=ge({name:"StrengthMeter",components:{InputPassword:pe.Password},props:{value:P.string,showInput:P.bool.def(!0),disabled:P.bool},emits:["score-change","change"],setup(n,{emit:e}){const t=me(""),{prefixCls:s}=be("strength-meter"),r=ye(()=>{const{disabled:i}=n;if(i)return-1;const c=R(t)?Ut(R(t)).score:-1;return e("score-change",c),c});function a(i){t.value=i.target.value}return Me(()=>{t.value=n.value||""}),ke(()=>R(t),i=>{e("change",i)}),{getPasswordStrength:r,handleChange:a,prefixCls:s,innerValueRef:t}}}),Ft=["data-score"];function Vt(n,e,t,s,r,a){const i=Ee("InputPassword");return q(),Se("div",{class:j([n.prefixCls,"relative"])},[n.showInput?(q(),De(i,Ce({key:0},n.$attrs,{allowClear:"",value:n.innerValueRef,onChange:n.handleChange,disabled:n.disabled}),xe({_:2},[Te(Object.keys(n.$slots),o=>({name:o,fn:we(c=>[Ae(n.$slots,o,Ie(Le(c||{})),void 0,!0)])}))]),1040,["value","onChange","disabled"])):Pe("",!0),F("div",{class:j(`${n.prefixCls}-bar`)},[F("div",{class:j(`${n.prefixCls}-bar--fill`),"data-score":n.getPasswordStrength},null,10,Ft)],2)],2)}var Bt=ve(qt,[["render",Vt],["__scopeId","data-v-367aeb21"]]);const Kt=Re(Bt);export{Kt as S};
