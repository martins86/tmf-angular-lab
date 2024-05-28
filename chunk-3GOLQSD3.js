import{O as o,P as C,R as h,T as a,U as c,W as E,Y as y,Z as w,ga as f,ha as A,qa as D,ua as g}from"./chunk-K6VLSJ3V.js";var M=null;function p(){return M}function Ne(i){M??=i}var S=class{};var L=new h(""),B=(()=>{let t=class t{historyGo(e){throw new Error("")}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=o({token:t,factory:()=>c(T),providedIn:"platform"});let i=t;return i})();var T=(()=>{let t=class t extends B{constructor(){super(),this._doc=c(L),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return p().getBaseHref(this._doc)}onPopState(e){let n=p().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=p().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,r){this._history.pushState(e,n,r)}replaceState(e,n,r){this._history.replaceState(e,n,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=o({token:t,factory:()=>new t,providedIn:"platform"});let i=t;return i})();function R(i,t){if(i.length==0)return t;if(t.length==0)return i;let s=0;return i.endsWith("/")&&s++,t.startsWith("/")&&s++,s==2?i+t.substring(1):s==1?i+t:i+"/"+t}function b(i){let t=i.match(/#|\?|$/),s=t&&t.index||i.length,e=s-(i[s-1]==="/"?1:0);return i.slice(0,e)+i.slice(s)}function u(i){return i&&i[0]!=="?"?"?"+i:i}var F=(()=>{let t=class t{historyGo(e){throw new Error("")}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=o({token:t,factory:()=>c(k),providedIn:"root"});let i=t;return i})(),P=new h(""),k=(()=>{let t=class t extends F{constructor(e,n){super(),this._platformLocation=e,this._removeListenerFns=[],this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??c(L).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return R(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+u(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${n}${r}`:n}pushState(e,n,r,d){let l=this.prepareExternalUrl(r+u(d));this._platformLocation.pushState(e,n,l)}replaceState(e,n,r,d){let l=this.prepareExternalUrl(r+u(d));this._platformLocation.replaceState(e,n,l)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}};t.\u0275fac=function(n){return new(n||t)(a(B),a(P,8))},t.\u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var N=(()=>{let t=class t{constructor(e){this._subject=new A,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=U(b(v(n))),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+u(n))}normalize(e){return t.stripTrailingSlash(x(this._basePath,v(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",r=null){this._locationStrategy.pushState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+u(n)),r)}replaceState(e,n="",r=null){this._locationStrategy.replaceState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+u(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(r=>r(e,n))}subscribe(e,n,r){return this._subject.subscribe({next:e,error:n,complete:r})}};t.normalizeQueryParams=u,t.joinWithSlash=R,t.stripTrailingSlash=b,t.\u0275fac=function(n){return new(n||t)(a(F))},t.\u0275prov=o({token:t,factory:()=>$(),providedIn:"root"});let i=t;return i})();function $(){return new N(a(F))}function x(i,t){if(!i||!t.startsWith(i))return t;let s=t.substring(i.length);return s===""||["/",";","?","#"].includes(s[0])?s:t}function v(i){return i.replace(/\/index.html$/,"")}function U(i){if(new RegExp("^(https?:)?//").test(i)){let[,s]=i.split(/\/\/[^\/]+/);return s}return i}function $e(i,t){t=encodeURIComponent(t);for(let s of i.split(";")){let e=s.indexOf("="),[n,r]=e==-1?[s,""]:[s.slice(0,e),s.slice(e+1)];if(n.trim()===t)return decodeURIComponent(r)}return null}var m=/\s+/,_=[],xe=(()=>{let t=class t{constructor(e,n){this._ngEl=e,this._renderer=n,this.initialClasses=_,this.stateMap=new Map}set klass(e){this.initialClasses=e!=null?e.trim().split(m):_}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(m):e}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let n of e)this._updateState(n,!0);else if(e!=null)for(let n of Object.keys(e))this._updateState(n,!!e[n]);this._applyStateDiff()}_updateState(e,n){let r=this.stateMap.get(e);r!==void 0?(r.enabled!==n&&(r.changed=!0,r.enabled=n),r.touched=!0):this.stateMap.set(e,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let n=e[0],r=e[1];r.changed?(this._toggleClass(n,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),r.touched=!1}}_toggleClass(e,n){e=e.trim(),e.length>0&&e.split(m).forEach(r=>{n?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}};t.\u0275fac=function(n){return new(n||t)(D(f),D(g))},t.\u0275dir=w({type:t,selectors:[["","ngClass",""]],inputs:{klass:[E.None,"class","klass"],ngClass:"ngClass"},standalone:!0});let i=t;return i})();var Ue=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=y({type:t}),t.\u0275inj=C({});let i=t;return i})(),z="browser",V="server";function ze(i){return i===z}function Ve(i){return i===V}var I=class{};export{p as a,Ne as b,S as c,L as d,N as e,$e as f,xe as g,Ue as h,z as i,ze as j,Ve as k,I as l};