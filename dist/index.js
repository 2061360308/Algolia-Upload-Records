(()=>{var e={67:(e,t,r)=>{"use strict";r.r(t),r.d(t,{MethodEnum:()=>s});const s={Delete:"DELETE",Get:"GET",Post:"POST",Put:"PUT"}},187:(e,t,r)=>{"use strict";r.r(t),r.d(t,{CallEnum:()=>o,HostStatusEnum:()=>n,createApiError:()=>S,createDeserializationError:()=>j,createMappedRequestOptions:()=>a,createRetryError:()=>A,createStatefulHost:()=>c,createStatelessHost:()=>u,createTransporter:()=>p,createUserAgent:()=>g,deserializeFailure:()=>b,deserializeSuccess:()=>y,isStatefulHostTimeouted:()=>l,isStatefulHostUp:()=>d,serializeData:()=>I,serializeHeaders:()=>E,serializeQueryParameters:()=>f,serializeUrl:()=>P,stackFrameWithoutCredentials:()=>O,stackTraceWithoutCredentials:()=>D});var s=r(67);function a(e,t){const r=e||{},s=r.data||{};return Object.keys(r).forEach((e=>{-1===["timeout","headers","queryParameters","data","cacheable"].indexOf(e)&&(s[e]=r[e])})),{data:Object.entries(s).length>0?s:void 0,timeout:r.timeout||t,headers:r.headers||{},queryParameters:r.queryParameters||{},cacheable:r.cacheable}}const o={Read:1,Write:2,Any:3},n={Up:1,Down:2,Timeouted:3},i=12e4;function c(e,t=n.Up){return{...e,status:t,lastUpdate:Date.now()}}function d(e){return e.status===n.Up||Date.now()-e.lastUpdate>i}function l(e){return e.status===n.Timeouted&&Date.now()-e.lastUpdate<=i}function u(e){return"string"==typeof e?{protocol:"https",url:e,accept:o.Any}:{protocol:e.protocol||"https",url:e.url,accept:e.accept||o.Any}}const m=(e,t)=>(e=>{const t=e.status;return e.isTimedOut||(({isTimedOut:e,status:t})=>!e&&!~~t)(e)||2!=~~(t/100)&&4!=~~(t/100)})(e)?t.onRetry(e):(({status:e})=>2==~~(e/100))(e)?t.onSuccess(e):t.onFail(e);function h(e,t,r,a){const o=[],i=I(r,a),h=E(e,a),p=r.method,g=r.method!==s.MethodEnum.Get?{}:{...r.data,...a.data},f={"x-algolia-agent":e.userAgent.value,...e.queryParameters,...g,...a.queryParameters};let S=0;const j=(t,s)=>{const d=t.pop();if(void 0===d)throw A(D(o));const l={data:i,headers:h,method:p,url:P(d,r.path,f),connectTimeout:s(S,e.timeouts.connect),responseTimeout:s(S,a.timeout)},u=e=>{const r={request:l,response:e,host:d,triesLeft:t.length};return o.push(r),r},g={onSuccess:e=>y(e),onRetry(r){const a=u(r);return r.isTimedOut&&S++,Promise.all([e.logger.info("Retryable failure",O(a)),e.hostsCache.set(d,c(d,r.isTimedOut?n.Timeouted:n.Down))]).then((()=>j(t,s)))},onFail(e){throw u(e),b(e,D(o))}};return e.requester.send(l).then((e=>m(e,g)))};return function(e,t){return Promise.all(t.map((t=>e.get(t,(()=>Promise.resolve(c(t))))))).then((e=>{const r=e.filter((e=>d(e))),s=e.filter((e=>l(e))),a=[...r,...s];return{getTimeout:(e,t)=>(0===s.length&&0===e?1:s.length+3+e)*t,statelessHosts:a.length>0?a.map((e=>u(e))):t}}))}(e.hostsCache,t).then((e=>j([...e.statelessHosts].reverse(),e.getTimeout)))}function p(e){const{hostsCache:t,logger:r,requester:s,requestsCache:n,responsesCache:i,timeouts:c,userAgent:d,hosts:l,queryParameters:m,headers:p}=e,g={hostsCache:t,logger:r,requester:s,requestsCache:n,responsesCache:i,timeouts:c,userAgent:d,headers:p,queryParameters:m,hosts:l.map((e=>u(e))),read(e,t){const r=a(t,g.timeouts.read),s=()=>h(g,g.hosts.filter((e=>!!(e.accept&o.Read))),e,r);if(!0!==(void 0!==r.cacheable?r.cacheable:e.cacheable))return s();const n={request:e,mappedRequestOptions:r,transporter:{queryParameters:g.queryParameters,headers:g.headers}};return g.responsesCache.get(n,(()=>g.requestsCache.get(n,(()=>g.requestsCache.set(n,s()).then((e=>Promise.all([g.requestsCache.delete(n),e])),(e=>Promise.all([g.requestsCache.delete(n),Promise.reject(e)]))).then((([e,t])=>t))))),{miss:e=>g.responsesCache.set(n,e)})},write:(e,t)=>h(g,g.hosts.filter((e=>!!(e.accept&o.Write))),e,a(t,g.timeouts.write))};return g}function g(e){const t={value:`Algolia for JavaScript (${e})`,add(e){const r=`; ${e.segment}${void 0!==e.version?` (${e.version})`:""}`;return-1===t.value.indexOf(r)&&(t.value=`${t.value}${r}`),t}};return t}function y(e){try{return JSON.parse(e.content)}catch(t){throw j(t.message,e)}}function b({content:e,status:t},r){let s=e;try{s=JSON.parse(e).message}catch(e){}return S(s,t,r)}function P(e,t,r){const s=f(r);let a=`${e.protocol}://${e.url}/${"/"===t.charAt(0)?t.substr(1):t}`;return s.length&&(a+=`?${s}`),a}function f(e){return Object.keys(e).map((t=>{return function(e,...t){let r=0;return e.replace(/%s/g,(()=>encodeURIComponent(t[r++])))}("%s=%s",t,(r=e[t],"[object Object]"===Object.prototype.toString.call(r)||"[object Array]"===Object.prototype.toString.call(r)?JSON.stringify(e[t]):e[t]));var r})).join("&")}function I(e,t){if(e.method===s.MethodEnum.Get||void 0===e.data&&void 0===t.data)return;const r=Array.isArray(e.data)?e.data:{...e.data,...t.data};return JSON.stringify(r)}function E(e,t){const r={...e.headers,...t.headers},s={};return Object.keys(r).forEach((e=>{const t=r[e];s[e.toLowerCase()]=t})),s}function D(e){return e.map((e=>O(e)))}function O(e){const t=e.request.headers["x-algolia-api-key"]?{"x-algolia-api-key":"*****"}:{};return{...e,request:{...e.request,headers:{...e.request.headers,...t}}}}function S(e,t,r){return{name:"ApiError",message:e,status:t,transporterStackTrace:r}}function j(e,t){return{name:"DeserializationError",message:e,response:t}}function A(e){return{name:"RetryError",message:"Unreachable hosts - your application id may be incorrect. If the error persists, please reach out to the Algolia Support team: https://alg.li/support .",transporterStackTrace:e}}},202:(e,t,r)=>{"use strict";var s=r(247),a=r(743),o=r(961),n=r(251),i=r(571),c=r(187),d=r(67);const l=e=>(t,r)=>{const s=t.map((e=>({...e,threshold:e.threshold||0})));return e.transporter.read({method:d.MethodEnum.Post,path:"1/indexes/*/recommendations",data:{requests:s},cacheable:!0},r)},u=e=>(t,r)=>l(e)(t.map((e=>({...e,fallbackParameters:{},model:"bought-together"}))),r),m=e=>(t,r)=>l(e)(t.map((e=>({...e,model:"related-products"}))),r),h=e=>(t,r)=>{const s=t.map((e=>({...e,model:"trending-facets",threshold:e.threshold||0})));return e.transporter.read({method:d.MethodEnum.Post,path:"1/indexes/*/recommendations",data:{requests:s},cacheable:!0},r)},p=e=>(t,r)=>{const s=t.map((e=>({...e,model:"trending-items",threshold:e.threshold||0})));return e.transporter.read({method:d.MethodEnum.Post,path:"1/indexes/*/recommendations",data:{requests:s},cacheable:!0},r)},g=e=>(t,r)=>l(e)(t.map((e=>({...e,model:"looking-similar"}))),r),y=e=>(t,r)=>{const s=t.map((e=>({...e,model:"recommended-for-you",threshold:e.threshold||0})));return e.transporter.read({method:d.MethodEnum.Post,path:"1/indexes/*/recommendations",data:{requests:s},cacheable:!0},r)};function b(e,t,r){return(e=>{const t=e.appId,r=o.createAuth(void 0!==e.authMode?e.authMode:o.AuthMode.WithinHeaders,t,e.apiKey),s=c.createTransporter({hosts:[{url:`${t}-dsn.algolia.net`,accept:c.CallEnum.Read},{url:`${t}.algolia.net`,accept:c.CallEnum.Write}].concat(o.shuffle([{url:`${t}-1.algolianet.com`},{url:`${t}-2.algolianet.com`},{url:`${t}-3.algolianet.com`}])),...e,headers:{...r.headers(),"content-type":"application/x-www-form-urlencoded",...e.headers},queryParameters:{...r.queryParameters(),...e.queryParameters}}),a={transporter:s,appId:t,addAlgoliaAgent(e,t){s.userAgent.add({segment:e,version:t})},clearCache:()=>Promise.all([s.requestsCache.clear(),s.responsesCache.clear()]).then((()=>{}))};return o.addMethods(a,e.methods)})({appId:e,apiKey:t,timeouts:{connect:2,read:5,write:30},requester:i.createNodeHttpRequester(),logger:n.createNullLogger(),responsesCache:s.createNullCache(),requestsCache:s.createNullCache(),hostsCache:a.createInMemoryCache(),userAgent:c.createUserAgent(o.version).add({segment:"Recommend",version:o.version}).add({segment:"Node.js",version:process.versions.node}),...r,methods:{destroy:o.destroy,getFrequentlyBoughtTogether:u,getRecommendations:l,getRelatedProducts:m,getTrendingFacets:h,getTrendingItems:p,getLookingSimilar:g,getRecommendedForYou:y}})}b.version=o.version,b.getFrequentlyBoughtTogether=u,b.getRecommendations=l,b.getRelatedProducts=m,b.getTrendingFacets=h,b.getTrendingItems=p,b.getLookingSimilar=g,b.getRecommendedForYou=y,e.exports=b},247:(e,t,r)=>{"use strict";function s(e){const t=[...e.caches],r=t.shift();return void 0===r?a():{get:(e,a,o={miss:()=>Promise.resolve()})=>r.get(e,a,o).catch((()=>s({caches:t}).get(e,a,o))),set:(e,a)=>r.set(e,a).catch((()=>s({caches:t}).set(e,a))),delete:e=>r.delete(e).catch((()=>s({caches:t}).delete(e))),clear:()=>r.clear().catch((()=>s({caches:t}).clear()))}}function a(){return{get:(e,t,r={miss:()=>Promise.resolve()})=>t().then((e=>Promise.all([e,r.miss(e)]))).then((([e])=>e)),set:(e,t)=>Promise.resolve(t),delete:e=>Promise.resolve(),clear:()=>Promise.resolve()}}r.r(t),r.d(t,{createFallbackableCache:()=>s,createNullCache:()=>a})},251:(e,t,r)=>{"use strict";function s(){return{debug:(e,t)=>Promise.resolve(),info:(e,t)=>Promise.resolve(),error:(e,t)=>Promise.resolve()}}r.r(t),r.d(t,{LogLevelEnum:()=>a,createNullLogger:()=>s});const a={Debug:1,Info:2,Error:3}},391:(e,t,r)=>{"use strict";r.r(t),r.d(t,{addABTest:()=>i,createAnalyticsClient:()=>n,deleteABTest:()=>c,getABTest:()=>d,getABTests:()=>l,stopABTest:()=>u});var s=r(961),a=r(187),o=r(67);const n=e=>{const t=e.region||"us",r=(0,s.createAuth)(s.AuthMode.WithinHeaders,e.appId,e.apiKey),o=(0,a.createTransporter)({hosts:[{url:`analytics.${t}.algolia.com`}],...e,headers:{...r.headers(),"content-type":"application/json",...e.headers},queryParameters:{...r.queryParameters(),...e.queryParameters}}),n=e.appId;return(0,s.addMethods)({appId:n,transporter:o},e.methods)},i=e=>(t,r)=>e.transporter.write({method:o.MethodEnum.Post,path:"2/abtests",data:t},r),c=e=>(t,r)=>e.transporter.write({method:o.MethodEnum.Delete,path:(0,s.encode)("2/abtests/%s",t)},r),d=e=>(t,r)=>e.transporter.read({method:o.MethodEnum.Get,path:(0,s.encode)("2/abtests/%s",t)},r),l=e=>t=>e.transporter.read({method:o.MethodEnum.Get,path:"2/abtests"},t),u=e=>(t,r)=>e.transporter.write({method:o.MethodEnum.Post,path:(0,s.encode)("2/abtests/%s/stop",t)},r)},463:(e,t,r)=>{const s=r(202);e.exports=s,e.exports.default=s},464:(e,t,r)=>{const s=r(938);e.exports=s,e.exports.default=s},571:(e,t,r)=>{"use strict";r.r(t),r.d(t,{createNodeHttpRequester:()=>d});const s=require("http"),a=require("https"),o=require("url"),n={keepAlive:!0},i=new s.Agent(n),c=new a.Agent(n);function d({agent:e,httpAgent:t,httpsAgent:r,requesterOptions:n={}}={}){const d=t||e||i,l=r||e||c;return{send:e=>new Promise((t=>{const r=(0,o.parse)(e.url),i=null===r.query?r.pathname:`${r.pathname}?${r.query}`,c={...n,agent:"https:"===r.protocol?l:d,hostname:r.hostname,path:i,method:e.method,headers:{...n&&n.headers?n.headers:{},...e.headers},...void 0!==r.port?{port:r.port||""}:{}},u=("https:"===r.protocol?a:s).request(c,(e=>{let r=[];e.on("data",(e=>{r=r.concat(e)})),e.on("end",(()=>{clearTimeout(h),clearTimeout(p),t({status:e.statusCode||0,content:Buffer.concat(r).toString(),isTimedOut:!1})}))})),m=(e,r)=>setTimeout((()=>{u.abort(),t({status:0,content:r,isTimedOut:!0})}),1e3*e),h=m(e.connectTimeout,"Connection timeout");let p;u.on("error",(e=>{clearTimeout(h),clearTimeout(p),t({status:0,content:e.message,isTimedOut:!1})})),u.once("response",(()=>{clearTimeout(h),p=m(e.responseTimeout,"Socket timeout")})),void 0!==e.data&&u.write(e.data),u.end()})),destroy:()=>(d.destroy(),l.destroy(),Promise.resolve())}}},743:(e,t,r)=>{"use strict";function s(e={serializable:!0}){let t={};return{get(r,s,a={miss:()=>Promise.resolve()}){const o=JSON.stringify(r);if(o in t)return Promise.resolve(e.serializable?JSON.parse(t[o]):t[o]);const n=s(),i=a&&a.miss||(()=>Promise.resolve());return n.then((e=>i(e))).then((()=>n))},set:(r,s)=>(t[JSON.stringify(r)]=e.serializable?JSON.stringify(s):s,Promise.resolve(s)),delete:e=>(delete t[JSON.stringify(e)],Promise.resolve()),clear:()=>(t={},Promise.resolve())}}r.r(t),r.d(t,{createInMemoryCache:()=>s})},801:(e,t,r)=>{"use strict";r.r(t),r.d(t,{ApiKeyACLEnum:()=>We,BatchActionEnum:()=>Fe,ScopeEnum:()=>Be,StrategyEnum:()=>Ge,SynonymEnum:()=>Ke,addApiKey:()=>m,assignUserID:()=>h,assignUserIDs:()=>p,batch:()=>Y,browseObjects:()=>X,browseRules:()=>Z,browseSynonyms:()=>ee,chunkedBatch:()=>te,clearDictionaryEntries:()=>g,clearObjects:()=>re,clearRules:()=>se,clearSynonyms:()=>ae,copyIndex:()=>y,copyRules:()=>b,copySettings:()=>P,copySynonyms:()=>f,createBrowsablePromise:()=>i,createMissingObjectIDError:()=>d,createObjectNotFoundError:()=>l,createSearchClient:()=>c,createValidUntilNotFoundError:()=>u,customRequest:()=>I,deleteApiKey:()=>E,deleteBy:()=>oe,deleteDictionaryEntries:()=>D,deleteIndex:()=>ne,deleteObject:()=>ie,deleteObjects:()=>ce,deleteRule:()=>de,deleteSynonym:()=>le,exists:()=>ue,findAnswers:()=>me,findObject:()=>he,generateSecuredApiKey:()=>O,getApiKey:()=>S,getAppTask:()=>j,getDictionarySettings:()=>A,getLogs:()=>x,getObject:()=>pe,getObjectPosition:()=>ge,getObjects:()=>ye,getRule:()=>be,getSecuredApiKeyRemainingValidity:()=>v,getSettings:()=>Pe,getSynonym:()=>fe,getTask:()=>Ie,getTopUserIDs:()=>q,getUserID:()=>M,hasPendingMappings:()=>w,initIndex:()=>T,listApiKeys:()=>R,listClusters:()=>k,listIndices:()=>N,listUserIDs:()=>C,moveIndex:()=>U,multipleBatch:()=>W,multipleGetObjects:()=>F,multipleQueries:()=>B,multipleSearchForFacetValues:()=>G,partialUpdateObject:()=>Ee,partialUpdateObjects:()=>De,removeUserID:()=>K,replaceAllObjects:()=>Oe,replaceAllRules:()=>Se,replaceAllSynonyms:()=>je,replaceDictionaryEntries:()=>z,restoreApiKey:()=>$,saveDictionaryEntries:()=>H,saveObject:()=>Ae,saveObjects:()=>xe,saveRule:()=>ve,saveRules:()=>qe,saveSynonym:()=>Me,saveSynonyms:()=>we,search:()=>Te,searchDictionaryEntries:()=>L,searchForFacetValues:()=>Re,searchRules:()=>ke,searchSynonyms:()=>Ne,searchUserIDs:()=>V,setDictionarySettings:()=>Q,setSettings:()=>Ce,updateApiKey:()=>J,waitAppTask:()=>_,waitTask:()=>Ue});var s=r(961),a=r(187),o=r(67);const n=require("crypto");function i(e){const t=r=>e.request(r).then((s=>{if(void 0!==e.batch&&e.batch(s.hits),!e.shouldStop(s))return s.cursor?t({cursor:s.cursor}):t({page:(r.page||0)+1})}));return t({})}const c=e=>{const t=e.appId,r=(0,s.createAuth)(void 0!==e.authMode?e.authMode:s.AuthMode.WithinHeaders,t,e.apiKey),o=(0,a.createTransporter)({hosts:[{url:`${t}-dsn.algolia.net`,accept:a.CallEnum.Read},{url:`${t}.algolia.net`,accept:a.CallEnum.Write}].concat((0,s.shuffle)([{url:`${t}-1.algolianet.com`},{url:`${t}-2.algolianet.com`},{url:`${t}-3.algolianet.com`}])),...e,headers:{...r.headers(),"content-type":"application/x-www-form-urlencoded",...e.headers},queryParameters:{...r.queryParameters(),...e.queryParameters}}),n={transporter:o,appId:t,addAlgoliaAgent(e,t){o.userAgent.add({segment:e,version:t})},clearCache:()=>Promise.all([o.requestsCache.clear(),o.responsesCache.clear()]).then((()=>{}))};return(0,s.addMethods)(n,e.methods)};function d(){return{name:"MissingObjectIDError",message:"All objects must have an unique objectID (like a primary key) to be valid. Algolia is also able to generate objectIDs automatically but *it's not recommended*. To do it, use the `{'autoGenerateObjectIDIfNotExist': true}` option."}}function l(){return{name:"ObjectNotFoundError",message:"Object not found."}}function u(){return{name:"ValidUntilNotFoundError",message:"ValidUntil not found in given secured api key."}}const m=e=>(t,r)=>{const{queryParameters:a,...n}=r||{},i={acl:t,...void 0!==a?{queryParameters:a}:{}};return(0,s.createWaitablePromise)(e.transporter.write({method:o.MethodEnum.Post,path:"1/keys",data:i},n),((t,r)=>(0,s.createRetryablePromise)((s=>S(e)(t.key,r).catch((e=>{if(404!==e.status)throw e;return s()}))))))},h=e=>(t,r,s)=>{const n=(0,a.createMappedRequestOptions)(s);return n.queryParameters["X-Algolia-User-ID"]=t,e.transporter.write({method:o.MethodEnum.Post,path:"1/clusters/mapping",data:{cluster:r}},n)},p=e=>(t,r,s)=>e.transporter.write({method:o.MethodEnum.Post,path:"1/clusters/mapping/batch",data:{users:t,cluster:r}},s),g=e=>(t,r)=>(0,s.createWaitablePromise)(e.transporter.write({method:o.MethodEnum.Post,path:(0,s.encode)("/1/dictionaries/%s/batch",t),data:{clearExistingDictionaryEntries:!0,requests:{action:"addEntry",body:[]}}},r),((t,r)=>_(e)(t.taskID,r))),y=e=>(t,r,a)=>(0,s.createWaitablePromise)(e.transporter.write({method:o.MethodEnum.Post,path:(0,s.encode)("1/indexes/%s/operation",t),data:{operation:"copy",destination:r}},a),((r,s)=>T(e)(t,{methods:{waitTask:Ue}}).waitTask(r.taskID,s))),b=e=>(t,r,s)=>y(e)(t,r,{...s,scope:[Be.Rules]}),P=e=>(t,r,s)=>y(e)(t,r,{...s,scope:[Be.Settings]}),f=e=>(t,r,s)=>y(e)(t,r,{...s,scope:[Be.Synonyms]}),I=e=>(t,r)=>t.method===o.MethodEnum.Get?e.transporter.read(t,r):e.transporter.write(t,r),E=e=>(t,r)=>(0,s.createWaitablePromise)(e.transporter.write({method:o.MethodEnum.Delete,path:(0,s.encode)("1/keys/%s",t)},r),((r,a)=>(0,s.createRetryablePromise)((r=>S(e)(t,a).then(r).catch((e=>{if(404!==e.status)throw e})))))),D=e=>(t,r,a)=>{const n=r.map((e=>({action:"deleteEntry",body:{objectID:e}})));return(0,s.createWaitablePromise)(e.transporter.write({method:o.MethodEnum.Post,path:(0,s.encode)("/1/dictionaries/%s/batch",t),data:{clearExistingDictionaryEntries:!1,requests:n}},a),((t,r)=>_(e)(t.taskID,r)))},O=()=>(e,t)=>{const r=(0,a.serializeQueryParameters)(t),s=(0,n.createHmac)("sha256",e).update(r).digest("hex");return Buffer.from(s+r).toString("base64")},S=e=>(t,r)=>e.transporter.read({method:o.MethodEnum.Get,path:(0,s.encode)("1/keys/%s",t)},r),j=e=>(t,r)=>e.transporter.read({method:o.MethodEnum.Get,path:(0,s.encode)("1/task/%s",t.toString())},r),A=e=>t=>e.transporter.read({method:o.MethodEnum.Get,path:"/1/dictionaries/*/settings"},t),x=e=>t=>e.transporter.read({method:o.MethodEnum.Get,path:"1/logs"},t),v=()=>e=>{const t=Buffer.from(e,"base64").toString("ascii").match(/validUntil=(\d+)/);if(null===t)throw{name:"ValidUntilNotFoundError",message:"ValidUntil not found in given secured api key."};return parseInt(t[1],10)-Math.round((new Date).getTime()/1e3)},q=e=>t=>e.transporter.read({method:o.MethodEnum.Get,path:"1/clusters/mapping/top"},t),M=e=>(t,r)=>e.transporter.read({method:o.MethodEnum.Get,path:(0,s.encode)("1/clusters/mapping/%s",t)},r),w=e=>t=>{const{retrieveMappings:r,...s}=t||{};return!0===r&&(s.getClusters=!0),e.transporter.read({method:o.MethodEnum.Get,path:"1/clusters/mapping/pending"},s)},T=e=>(t,r={})=>{const a={transporter:e.transporter,appId:e.appId,indexName:t};return(0,s.addMethods)(a,r.methods)},R=e=>t=>e.transporter.read({method:o.MethodEnum.Get,path:"1/keys"},t),k=e=>t=>e.transporter.read({method:o.MethodEnum.Get,path:"1/clusters"},t),N=e=>t=>e.transporter.read({method:o.MethodEnum.Get,path:"1/indexes"},t),C=e=>t=>e.transporter.read({method:o.MethodEnum.Get,path:"1/clusters/mapping"},t),U=e=>(t,r,a)=>(0,s.createWaitablePromise)(e.transporter.write({method:o.MethodEnum.Post,path:(0,s.encode)("1/indexes/%s/operation",t),data:{operation:"move",destination:r}},a),((r,s)=>T(e)(t,{methods:{waitTask:Ue}}).waitTask(r.taskID,s))),W=e=>(t,r)=>(0,s.createWaitablePromise)(e.transporter.write({method:o.MethodEnum.Post,path:"1/indexes/*/batch",data:{requests:t}},r),((t,r)=>Promise.all(Object.keys(t.taskID).map((s=>T(e)(s,{methods:{waitTask:Ue}}).waitTask(t.taskID[s],r)))))),F=e=>(t,r)=>e.transporter.read({method:o.MethodEnum.Post,path:"1/indexes/*/objects",data:{requests:t}},r),B=e=>(t,r)=>{const s=t.map((e=>({...e,params:(0,a.serializeQueryParameters)(e.params||{})})));return e.transporter.read({method:o.MethodEnum.Post,path:"1/indexes/*/queries",data:{requests:s},cacheable:!0},r)},G=e=>(t,r)=>Promise.all(t.map((t=>{const{facetName:s,facetQuery:a,...o}=t.params;return T(e)(t.indexName,{methods:{searchForFacetValues:Re}}).searchForFacetValues(s,a,{...r,...o})}))),K=e=>(t,r)=>{const s=(0,a.createMappedRequestOptions)(r);return s.queryParameters["X-Algolia-User-ID"]=t,e.transporter.write({method:o.MethodEnum.Delete,path:"1/clusters/mapping"},s)},z=e=>(t,r,a)=>{const n=r.map((e=>({action:"addEntry",body:e})));return(0,s.createWaitablePromise)(e.transporter.write({method:o.MethodEnum.Post,path:(0,s.encode)("/1/dictionaries/%s/batch",t),data:{clearExistingDictionaryEntries:!0,requests:n}},a),((t,r)=>_(e)(t.taskID,r)))},$=e=>(t,r)=>(0,s.createWaitablePromise)(e.transporter.write({method:o.MethodEnum.Post,path:(0,s.encode)("1/keys/%s/restore",t)},r),((r,a)=>(0,s.createRetryablePromise)((r=>S(e)(t,a).catch((e=>{if(404!==e.status)throw e;return r()})))))),H=e=>(t,r,a)=>{const n=r.map((e=>({action:"addEntry",body:e})));return(0,s.createWaitablePromise)(e.transporter.write({method:o.MethodEnum.Post,path:(0,s.encode)("/1/dictionaries/%s/batch",t),data:{clearExistingDictionaryEntries:!1,requests:n}},a),((t,r)=>_(e)(t.taskID,r)))},L=e=>(t,r,a)=>e.transporter.read({method:o.MethodEnum.Post,path:(0,s.encode)("/1/dictionaries/%s/search",t),data:{query:r},cacheable:!0},a),V=e=>(t,r)=>e.transporter.read({method:o.MethodEnum.Post,path:"1/clusters/mapping/search",data:{query:t}},r),Q=e=>(t,r)=>(0,s.createWaitablePromise)(e.transporter.write({method:o.MethodEnum.Put,path:"/1/dictionaries/*/settings",data:t},r),((t,r)=>_(e)(t.taskID,r))),J=e=>(t,r)=>{const a=Object.assign({},r),{queryParameters:n,...i}=r||{},c=n?{queryParameters:n}:{},d=["acl","indexes","referers","restrictSources","queryParameters","description","maxQueriesPerIPPerHour","maxHitsPerQuery"];return(0,s.createWaitablePromise)(e.transporter.write({method:o.MethodEnum.Put,path:(0,s.encode)("1/keys/%s",t),data:c},i),((r,o)=>(0,s.createRetryablePromise)((r=>S(e)(t,o).then((e=>(e=>Object.keys(a).filter((e=>-1!==d.indexOf(e))).every((t=>{if(Array.isArray(e[t])&&Array.isArray(a[t])){const r=e[t];return r.length===a[t].length&&r.every(((e,r)=>e===a[t][r]))}return e[t]===a[t]})))(e)?Promise.resolve():r()))))))},_=e=>(t,r)=>(0,s.createRetryablePromise)((s=>j(e)(t,r).then((e=>"published"!==e.status?s():void 0)))),Y=e=>(t,r)=>(0,s.createWaitablePromise)(e.transporter.write({method:o.MethodEnum.Post,path:(0,s.encode)("1/indexes/%s/batch",e.indexName),data:{requests:t}},r),((t,r)=>Ue(e)(t.taskID,r))),X=e=>t=>i({shouldStop:e=>void 0===e.cursor,...t,request:r=>e.transporter.read({method:o.MethodEnum.Post,path:(0,s.encode)("1/indexes/%s/browse",e.indexName),data:r},t)}),Z=e=>t=>{const r={hitsPerPage:1e3,...t};return i({shouldStop:e=>e.hits.length<r.hitsPerPage,...r,request:t=>ke(e)("",{...r,...t}).then((e=>({...e,hits:e.hits.map((e=>(delete e._highlightResult,e)))})))})},ee=e=>t=>{const r={hitsPerPage:1e3,...t};return i({shouldStop:e=>e.hits.length<r.hitsPerPage,...r,request:t=>Ne(e)("",{...r,...t}).then((e=>({...e,hits:e.hits.map((e=>(delete e._highlightResult,e)))})))})},te=e=>(t,r,a)=>{const{batchSize:o,...n}=a||{},i={taskIDs:[],objectIDs:[]},c=(s=0)=>{const a=[];let d;for(d=s;d<t.length&&(a.push(t[d]),a.length!==(o||1e3));d++);return 0===a.length?Promise.resolve(i):Y(e)(a.map((e=>({action:r,body:e}))),n).then((e=>(i.objectIDs=i.objectIDs.concat(e.objectIDs),i.taskIDs.push(e.taskID),d++,c(d))))};return(0,s.createWaitablePromise)(c(),((t,r)=>Promise.all(t.taskIDs.map((t=>Ue(e)(t,r))))))},re=e=>t=>(0,s.createWaitablePromise)(e.transporter.write({method:o.MethodEnum.Post,path:(0,s.encode)("1/indexes/%s/clear",e.indexName)},t),((t,r)=>Ue(e)(t.taskID,r))),se=e=>t=>{const{forwardToReplicas:r,...n}=t||{},i=(0,a.createMappedRequestOptions)(n);return r&&(i.queryParameters.forwardToReplicas=1),(0,s.createWaitablePromise)(e.transporter.write({method:o.MethodEnum.Post,path:(0,s.encode)("1/indexes/%s/rules/clear",e.indexName)},i),((t,r)=>Ue(e)(t.taskID,r)))},ae=e=>t=>{const{forwardToReplicas:r,...n}=t||{},i=(0,a.createMappedRequestOptions)(n);return r&&(i.queryParameters.forwardToReplicas=1),(0,s.createWaitablePromise)(e.transporter.write({method:o.MethodEnum.Post,path:(0,s.encode)("1/indexes/%s/synonyms/clear",e.indexName)},i),((t,r)=>Ue(e)(t.taskID,r)))},oe=e=>(t,r)=>(0,s.createWaitablePromise)(e.transporter.write({method:o.MethodEnum.Post,path:(0,s.encode)("1/indexes/%s/deleteByQuery",e.indexName),data:t},r),((t,r)=>Ue(e)(t.taskID,r))),ne=e=>t=>(0,s.createWaitablePromise)(e.transporter.write({method:o.MethodEnum.Delete,path:(0,s.encode)("1/indexes/%s",e.indexName)},t),((t,r)=>Ue(e)(t.taskID,r))),ie=e=>(t,r)=>(0,s.createWaitablePromise)(ce(e)([t],r).then((e=>({taskID:e.taskIDs[0]}))),((t,r)=>Ue(e)(t.taskID,r))),ce=e=>(t,r)=>{const s=t.map((e=>({objectID:e})));return te(e)(s,Fe.DeleteObject,r)},de=e=>(t,r)=>{const{forwardToReplicas:n,...i}=r||{},c=(0,a.createMappedRequestOptions)(i);return n&&(c.queryParameters.forwardToReplicas=1),(0,s.createWaitablePromise)(e.transporter.write({method:o.MethodEnum.Delete,path:(0,s.encode)("1/indexes/%s/rules/%s",e.indexName,t)},c),((t,r)=>Ue(e)(t.taskID,r)))},le=e=>(t,r)=>{const{forwardToReplicas:n,...i}=r||{},c=(0,a.createMappedRequestOptions)(i);return n&&(c.queryParameters.forwardToReplicas=1),(0,s.createWaitablePromise)(e.transporter.write({method:o.MethodEnum.Delete,path:(0,s.encode)("1/indexes/%s/synonyms/%s",e.indexName,t)},c),((t,r)=>Ue(e)(t.taskID,r)))},ue=e=>t=>Pe(e)(t).then((()=>!0)).catch((e=>{if(404!==e.status)throw e;return!1})),me=e=>(t,r,a)=>e.transporter.read({method:o.MethodEnum.Post,path:(0,s.encode)("1/answers/%s/prediction",e.indexName),data:{query:t,queryLanguages:r},cacheable:!0},a),he=e=>(t,r)=>{const{query:s,paginate:a,...o}=r||{};let n=0;const i=()=>Te(e)(s||"",{...o,page:n}).then((e=>{for(const[r,s]of Object.entries(e.hits))if(t(s))return{object:s,position:parseInt(r,10),page:n};if(n++,!1===a||n>=e.nbPages)throw{name:"ObjectNotFoundError",message:"Object not found."};return i()}));return i()},pe=e=>(t,r)=>e.transporter.read({method:o.MethodEnum.Get,path:(0,s.encode)("1/indexes/%s/%s",e.indexName,t)},r),ge=()=>(e,t)=>{for(const[r,s]of Object.entries(e.hits))if(s.objectID===t)return parseInt(r,10);return-1},ye=e=>(t,r)=>{const{attributesToRetrieve:s,...a}=r||{},n=t.map((t=>({indexName:e.indexName,objectID:t,...s?{attributesToRetrieve:s}:{}})));return e.transporter.read({method:o.MethodEnum.Post,path:"1/indexes/*/objects",data:{requests:n}},a)},be=e=>(t,r)=>e.transporter.read({method:o.MethodEnum.Get,path:(0,s.encode)("1/indexes/%s/rules/%s",e.indexName,t)},r),Pe=e=>t=>e.transporter.read({method:o.MethodEnum.Get,path:(0,s.encode)("1/indexes/%s/settings",e.indexName),data:{getVersion:2}},t),fe=e=>(t,r)=>e.transporter.read({method:o.MethodEnum.Get,path:(0,s.encode)("1/indexes/%s/synonyms/%s",e.indexName,t)},r),Ie=e=>(t,r)=>e.transporter.read({method:o.MethodEnum.Get,path:(0,s.encode)("1/indexes/%s/task/%s",e.indexName,t.toString())},r),Ee=e=>(t,r)=>(0,s.createWaitablePromise)(De(e)([t],r).then((e=>({objectID:e.objectIDs[0],taskID:e.taskIDs[0]}))),((t,r)=>Ue(e)(t.taskID,r))),De=e=>(t,r)=>{const{createIfNotExists:s,...a}=r||{},o=s?Fe.PartialUpdateObject:Fe.PartialUpdateObjectNoCreate;return te(e)(t,o,a)},Oe=e=>(t,r)=>{const{safe:a,autoGenerateObjectIDIfNotExist:n,batchSize:i,...c}=r||{},d=(t,r,a,n)=>(0,s.createWaitablePromise)(e.transporter.write({method:o.MethodEnum.Post,path:(0,s.encode)("1/indexes/%s/operation",t),data:{operation:a,destination:r}},n),((t,r)=>Ue(e)(t.taskID,r))),l=Math.random().toString(36).substring(7),u=`${e.indexName}_tmp_${l}`,m=xe({appId:e.appId,transporter:e.transporter,indexName:u});let h=[];const p=d(e.indexName,u,"copy",{...c,scope:["settings","synonyms","rules"]});h.push(p);const g=(a?p.wait(c):p).then((()=>{const e=m(t,{...c,autoGenerateObjectIDIfNotExist:n,batchSize:i});return h.push(e),a?e.wait(c):e})).then((()=>{const t=d(u,e.indexName,"move",c);return h.push(t),a?t.wait(c):t})).then((()=>Promise.all(h))).then((([e,t,r])=>({objectIDs:t.objectIDs,taskIDs:[e.taskID,...t.taskIDs,r.taskID]})));return(0,s.createWaitablePromise)(g,((e,t)=>Promise.all(h.map((e=>e.wait(t))))))},Se=e=>(t,r)=>qe(e)(t,{...r,clearExistingRules:!0}),je=e=>(t,r)=>we(e)(t,{...r,clearExistingSynonyms:!0}),Ae=e=>(t,r)=>(0,s.createWaitablePromise)(xe(e)([t],r).then((e=>({objectID:e.objectIDs[0],taskID:e.taskIDs[0]}))),((t,r)=>Ue(e)(t.taskID,r))),xe=e=>(t,r)=>{const{autoGenerateObjectIDIfNotExist:a,...o}=r||{},n=a?Fe.AddObject:Fe.UpdateObject;if(n===Fe.UpdateObject)for(const e of t)if(void 0===e.objectID)return(0,s.createWaitablePromise)(Promise.reject({name:"MissingObjectIDError",message:"All objects must have an unique objectID (like a primary key) to be valid. Algolia is also able to generate objectIDs automatically but *it's not recommended*. To do it, use the `{'autoGenerateObjectIDIfNotExist': true}` option."}));return te(e)(t,n,o)},ve=e=>(t,r)=>qe(e)([t],r),qe=e=>(t,r)=>{const{forwardToReplicas:n,clearExistingRules:i,...c}=r||{},d=(0,a.createMappedRequestOptions)(c);return n&&(d.queryParameters.forwardToReplicas=1),i&&(d.queryParameters.clearExistingRules=1),(0,s.createWaitablePromise)(e.transporter.write({method:o.MethodEnum.Post,path:(0,s.encode)("1/indexes/%s/rules/batch",e.indexName),data:t},d),((t,r)=>Ue(e)(t.taskID,r)))},Me=e=>(t,r)=>we(e)([t],r),we=e=>(t,r)=>{const{forwardToReplicas:n,clearExistingSynonyms:i,replaceExistingSynonyms:c,...d}=r||{},l=(0,a.createMappedRequestOptions)(d);return n&&(l.queryParameters.forwardToReplicas=1),(c||i)&&(l.queryParameters.replaceExistingSynonyms=1),(0,s.createWaitablePromise)(e.transporter.write({method:o.MethodEnum.Post,path:(0,s.encode)("1/indexes/%s/synonyms/batch",e.indexName),data:t},l),((t,r)=>Ue(e)(t.taskID,r)))},Te=e=>(t,r)=>e.transporter.read({method:o.MethodEnum.Post,path:(0,s.encode)("1/indexes/%s/query",e.indexName),data:{query:t},cacheable:!0},r),Re=e=>(t,r,a)=>e.transporter.read({method:o.MethodEnum.Post,path:(0,s.encode)("1/indexes/%s/facets/%s/query",e.indexName,t),data:{facetQuery:r},cacheable:!0},a),ke=e=>(t,r)=>e.transporter.read({method:o.MethodEnum.Post,path:(0,s.encode)("1/indexes/%s/rules/search",e.indexName),data:{query:t}},r),Ne=e=>(t,r)=>e.transporter.read({method:o.MethodEnum.Post,path:(0,s.encode)("1/indexes/%s/synonyms/search",e.indexName),data:{query:t}},r),Ce=e=>(t,r)=>{const{forwardToReplicas:n,...i}=r||{},c=(0,a.createMappedRequestOptions)(i);return n&&(c.queryParameters.forwardToReplicas=1),(0,s.createWaitablePromise)(e.transporter.write({method:o.MethodEnum.Put,path:(0,s.encode)("1/indexes/%s/settings",e.indexName),data:t},c),((t,r)=>Ue(e)(t.taskID,r)))},Ue=e=>(t,r)=>(0,s.createRetryablePromise)((s=>Ie(e)(t,r).then((e=>"published"!==e.status?s():void 0)))),We={AddObject:"addObject",Analytics:"analytics",Browser:"browse",DeleteIndex:"deleteIndex",DeleteObject:"deleteObject",EditSettings:"editSettings",Inference:"inference",ListIndexes:"listIndexes",Logs:"logs",Personalization:"personalization",Recommendation:"recommendation",Search:"search",SeeUnretrievableAttributes:"seeUnretrievableAttributes",Settings:"settings",Usage:"usage"},Fe={AddObject:"addObject",UpdateObject:"updateObject",PartialUpdateObject:"partialUpdateObject",PartialUpdateObjectNoCreate:"partialUpdateObjectNoCreate",DeleteObject:"deleteObject",DeleteIndex:"delete",ClearIndex:"clear"},Be={Settings:"settings",Synonyms:"synonyms",Rules:"rules"},Ge={None:"none",StopIfEnoughMatches:"stopIfEnoughMatches"},Ke={Synonym:"synonym",OneWaySynonym:"oneWaySynonym",AltCorrection1:"altCorrection1",AltCorrection2:"altCorrection2",Placeholder:"placeholder"}},896:e=>{"use strict";e.exports=require("fs")},903:(e,t,r)=>{"use strict";r.r(t),r.d(t,{createPersonalizationClient:()=>n,getPersonalizationStrategy:()=>i,setPersonalizationStrategy:()=>c});var s=r(961),a=r(187),o=r(67);const n=e=>{const t=e.region||"us",r=(0,s.createAuth)(s.AuthMode.WithinHeaders,e.appId,e.apiKey),o=(0,a.createTransporter)({hosts:[{url:`personalization.${t}.algolia.com`}],...e,headers:{...r.headers(),"content-type":"application/json",...e.headers},queryParameters:{...r.queryParameters(),...e.queryParameters}});return(0,s.addMethods)({appId:e.appId,transporter:o},e.methods)},i=e=>t=>e.transporter.read({method:o.MethodEnum.Get,path:"1/strategies/personalization"},t),c=e=>(t,r)=>e.transporter.write({method:o.MethodEnum.Post,path:"1/strategies/personalization",data:t},r)},938:(e,t,r)=>{"use strict";var s=r(247),a=r(743),o=r(391),n=r(961),i=r(903),c=r(801),d=r(251),l=r(463),u=r(571),m=r(187);function h(e,t,r){const h={appId:e,apiKey:t,timeouts:{connect:2,read:5,write:30},requester:u.createNodeHttpRequester(),logger:d.createNullLogger(),responsesCache:s.createNullCache(),requestsCache:s.createNullCache(),hostsCache:a.createInMemoryCache(),userAgent:m.createUserAgent(n.version).add({segment:"Node.js",version:process.versions.node})},p={...h,...r},g=()=>e=>i.createPersonalizationClient({...h,...e,methods:{getPersonalizationStrategy:i.getPersonalizationStrategy,setPersonalizationStrategy:i.setPersonalizationStrategy}});return c.createSearchClient({...p,methods:{search:c.multipleQueries,searchForFacetValues:c.multipleSearchForFacetValues,multipleBatch:c.multipleBatch,multipleGetObjects:c.multipleGetObjects,multipleQueries:c.multipleQueries,copyIndex:c.copyIndex,copySettings:c.copySettings,copyRules:c.copyRules,copySynonyms:c.copySynonyms,moveIndex:c.moveIndex,listIndices:c.listIndices,getLogs:c.getLogs,listClusters:c.listClusters,multipleSearchForFacetValues:c.multipleSearchForFacetValues,getApiKey:c.getApiKey,addApiKey:c.addApiKey,listApiKeys:c.listApiKeys,updateApiKey:c.updateApiKey,deleteApiKey:c.deleteApiKey,restoreApiKey:c.restoreApiKey,assignUserID:c.assignUserID,assignUserIDs:c.assignUserIDs,getUserID:c.getUserID,searchUserIDs:c.searchUserIDs,listUserIDs:c.listUserIDs,getTopUserIDs:c.getTopUserIDs,removeUserID:c.removeUserID,hasPendingMappings:c.hasPendingMappings,generateSecuredApiKey:c.generateSecuredApiKey,getSecuredApiKeyRemainingValidity:c.getSecuredApiKeyRemainingValidity,destroy:n.destroy,clearDictionaryEntries:c.clearDictionaryEntries,deleteDictionaryEntries:c.deleteDictionaryEntries,getDictionarySettings:c.getDictionarySettings,getAppTask:c.getAppTask,replaceDictionaryEntries:c.replaceDictionaryEntries,saveDictionaryEntries:c.saveDictionaryEntries,searchDictionaryEntries:c.searchDictionaryEntries,setDictionarySettings:c.setDictionarySettings,waitAppTask:c.waitAppTask,customRequest:c.customRequest,initIndex:e=>t=>c.initIndex(e)(t,{methods:{batch:c.batch,delete:c.deleteIndex,findAnswers:c.findAnswers,getObject:c.getObject,getObjects:c.getObjects,saveObject:c.saveObject,saveObjects:c.saveObjects,search:c.search,searchForFacetValues:c.searchForFacetValues,waitTask:c.waitTask,setSettings:c.setSettings,getSettings:c.getSettings,partialUpdateObject:c.partialUpdateObject,partialUpdateObjects:c.partialUpdateObjects,deleteObject:c.deleteObject,deleteObjects:c.deleteObjects,deleteBy:c.deleteBy,clearObjects:c.clearObjects,browseObjects:c.browseObjects,getObjectPosition:c.getObjectPosition,findObject:c.findObject,exists:c.exists,saveSynonym:c.saveSynonym,saveSynonyms:c.saveSynonyms,getSynonym:c.getSynonym,searchSynonyms:c.searchSynonyms,browseSynonyms:c.browseSynonyms,deleteSynonym:c.deleteSynonym,clearSynonyms:c.clearSynonyms,replaceAllObjects:c.replaceAllObjects,replaceAllSynonyms:c.replaceAllSynonyms,searchRules:c.searchRules,getRule:c.getRule,deleteRule:c.deleteRule,saveRule:c.saveRule,saveRules:c.saveRules,replaceAllRules:c.replaceAllRules,browseRules:c.browseRules,clearRules:c.clearRules}}),initAnalytics:()=>e=>o.createAnalyticsClient({...h,...e,methods:{addABTest:o.addABTest,getABTest:o.getABTest,getABTests:o.getABTests,stopABTest:o.stopABTest,deleteABTest:o.deleteABTest}}),initPersonalization:g,initRecommendation:()=>e=>(p.logger.info("The `initRecommendation` method is deprecated. Use `initPersonalization` instead."),g()(e)),getRecommendations:l.getRecommendations,getFrequentlyBoughtTogether:l.getFrequentlyBoughtTogether,getLookingSimilar:l.getLookingSimilar,getRecommendedForYou:l.getRecommendedForYou,getRelatedProducts:l.getRelatedProducts,getTrendingFacets:l.getTrendingFacets,getTrendingItems:l.getTrendingItems}})}h.version=n.version,e.exports=h},961:(e,t,r)=>{"use strict";function s(e,t,r){const s={"x-algolia-api-key":r,"x-algolia-application-id":t};return{headers:()=>e===u.WithinHeaders?s:{},queryParameters:()=>e===u.WithinQueryParameters?s:{}}}function a(e){let t=0;const r=()=>(t++,new Promise((s=>{setTimeout((()=>{s(e(r))}),Math.min(100*t,1e3))})));return e(r)}function o(e,t=(e,t)=>Promise.resolve()){return Object.assign(e,{wait:r=>o(e.then((e=>Promise.all([t(e,r),e]))).then((e=>e[1])))})}function n(e){let t=e.length-1;for(;t>0;t--){const r=Math.floor(Math.random()*(t+1)),s=e[t];e[t]=e[r],e[r]=s}return e}function i(e,t){return t?(Object.keys(t).forEach((r=>{e[r]=t[r](e)})),e):e}function c(e,...t){let r=0;return e.replace(/%s/g,(()=>encodeURIComponent(t[r++])))}r.r(t),r.d(t,{AuthMode:()=>u,addMethods:()=>i,createAuth:()=>s,createRetryablePromise:()=>a,createWaitablePromise:()=>o,destroy:()=>l,encode:()=>c,shuffle:()=>n,version:()=>d});const d="4.24.0",l=e=>()=>e.transporter.requester.destroy(),u={WithinQueryParameters:0,WithinHeaders:1}}},t={};function r(s){var a=t[s];if(void 0!==a)return a.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,r),o.exports}r.d=(e,t)=>{for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};const{algoliasearch:s}=r(464),a=r(896),o=process.env.APPLICATION_ID,n=process.env.ADMIN_API_KEY,i=process.env.INDEX_NAME,c=process.env.FILE_PATH,d=s(o,n);try{const e=a.readFileSync(c,"utf8"),t=JSON.parse(e);d.saveObjects({indexName:i,objects:t,waitForTasks:!0}).then((e=>{console.log(e),console.log("Save Objects End")}))}catch(e){console.error(e)}})();