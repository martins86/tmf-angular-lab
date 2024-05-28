import{d as M,g as Et,h as wt,j as xt}from"./chunk-IQ3KKUGY.js";import{Aa as L,B as mt,Ba as U,Ca as H,Da as vt,Ea as h,Fa as u,Ga as E,Ha as z,I as pt,Ia as $,J as ft,Ja as S,Ka as yt,L as gt,La as W,Ma as K,Na as y,O as _,Oa as l,P as b,Pa as It,R as B,T as c,U as V,X as d,Y as v,Z as O,a as k,g as ct,ga as x,j as dt,la as _t,na as bt,pa as C,r as P,s as lt,u as ht,va as N,z as ut}from"./chunk-6RV64URN.js";var At=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=d({type:t,selectors:[["app-bottom-bar"]],standalone:!0,features:[l],decls:2,vars:0,template:function(i,o){i&1&&(h(0,"p"),y(1,"bottom-bar works!"),u())}});let e=t;return e})();var Dt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=d({type:t,selectors:[["app-left-bar"]],standalone:!0,features:[l],decls:2,vars:0,template:function(i,o){i&1&&(h(0,"p"),y(1,"left-bar works!"),u())}});let e=t;return e})();var Tt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=d({type:t,selectors:[["app-loading"]],standalone:!0,features:[l],decls:2,vars:0,template:function(i,o){i&1&&(h(0,"p"),y(1,"loading works!"),u())}});let e=t;return e})();var Z;try{Z=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Z=!1}var A=(()=>{let t=class t{constructor(n){this._platformId=n,this.isBrowser=this._platformId?xt(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||Z)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}};t.\u0275fac=function(i){return new(i||t)(c(_t))},t.\u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var F;function qt(){if(F==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>F=!0}))}finally{F=F||!1}return F}function Y(e){return qt()?e:!!e.capture}function kt(e){return e.composedPath?e.composedPath()[0]:e.target}function Ct(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function q(e){return Array.isArray(e)?e:[e]}function Q(e){return e instanceof x?e.nativeElement:e}var Mt=new Set,D,Qt=(()=>{let t=class t{constructor(n,i){this._platform=n,this._nonce=i,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Jt}matchMedia(n){return(this._platform.WEBKIT||this._platform.BLINK)&&Xt(n,this._nonce),this._matchMedia(n)}};t.\u0275fac=function(i){return new(i||t)(c(A),c(bt,8))},t.\u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function Xt(e,t){if(!Mt.has(e))try{D||(D=document.createElement("style"),t&&D.setAttribute("nonce",t),D.setAttribute("type","text/css"),document.head.appendChild(D)),D.sheet&&(D.sheet.insertRule(`@media ${e} {body{ }}`,0),Mt.add(e))}catch(s){console.error(s)}}function Jt(e){return{matches:e==="all"||e==="",media:e,addListener:()=>{},removeListener:()=>{}}}var Nt=(()=>{let t=class t{constructor(n,i){this._mediaMatcher=n,this._zone=i,this._queries=new Map,this._destroySubject=new dt}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(n){return Ot(q(n)).some(o=>this._registerQuery(o).mql.matches)}observe(n){let o=Ot(q(n)).map(m=>this._registerQuery(m).observable),r=lt(o);return r=ht(r.pipe(mt(1)),r.pipe(pt(1),ut(0))),r.pipe(P(m=>{let g={matches:!1,breakpoints:{}};return m.forEach(({matches:I,query:a})=>{g.matches=g.matches||I,g.breakpoints[a]=I}),g}))}_registerQuery(n){if(this._queries.has(n))return this._queries.get(n);let i=this._mediaMatcher.matchMedia(n),r={observable:new ct(m=>{let g=I=>this._zone.run(()=>m.next(I));return i.addListener(g),()=>{i.removeListener(g)}}).pipe(ft(i),P(({matches:m})=>({query:n,matches:m})),gt(this._destroySubject)),mql:i};return this._queries.set(n,r),r}};t.\u0275fac=function(i){return new(i||t)(c(Qt),c(N))},t.\u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function Ot(e){return e.map(t=>t.split(",")).reduce((t,s)=>t.concat(s)).map(t=>t.trim())}function Lt(e){return e.buttons===0||e.detail===0}function St(e){let t=e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0];return!!t&&t.identifier===-1&&(t.radiusX==null||t.radiusX===1)&&(t.radiusY==null||t.radiusY===1)}var T=function(e){return e[e.NONE=0]="NONE",e[e.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",e[e.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",e}(T||{}),Ft="cdk-high-contrast-black-on-white",Rt="cdk-high-contrast-white-on-black",X="cdk-high-contrast-active",jt=(()=>{let t=class t{constructor(n,i){this._platform=n,this._document=i,this._breakpointSubscription=V(Nt).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return T.NONE;let n=this._document.createElement("div");n.style.backgroundColor="rgb(1,2,3)",n.style.position="absolute",this._document.body.appendChild(n);let i=this._document.defaultView||window,o=i&&i.getComputedStyle?i.getComputedStyle(n):null,r=(o&&o.backgroundColor||"").replace(/ /g,"");switch(n.remove(),r){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return T.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return T.BLACK_ON_WHITE}return T.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let n=this._document.body.classList;n.remove(X,Ft,Rt),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===T.BLACK_ON_WHITE?n.add(X,Ft):i===T.WHITE_ON_BLACK&&n.add(X,Rt)}}};t.\u0275fac=function(i){return new(i||t)(c(A),c(M))},t.\u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var J=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=v({type:t}),t.\u0275inj=b({});let e=t;return e})();function re(){return!0}var ae=new B("mat-sanity-checks",{providedIn:"root",factory:re}),it=(()=>{let t=class t{constructor(n,i,o){this._sanityChecks=i,this._document=o,this._hasDoneGlobalChecks=!1,n._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(n){return Ct()?!1:typeof this._sanityChecks=="boolean"?this._sanityChecks:!!this._sanityChecks[n]}};t.\u0275fac=function(i){return new(i||t)(c(jt),c(ae,8),c(M))},t.\u0275mod=v({type:t}),t.\u0275inj=b({imports:[J,J]});let e=t;return e})();var p=function(e){return e[e.FADING_IN=0]="FADING_IN",e[e.VISIBLE=1]="VISIBLE",e[e.FADING_OUT=2]="FADING_OUT",e[e.HIDDEN=3]="HIDDEN",e}(p||{}),tt=class{constructor(t,s,n,i=!1){this._renderer=t,this.element=s,this.config=n,this._animationForciblyDisabledThroughCss=i,this.state=p.HIDDEN}fadeOut(){this._renderer.fadeOutRipple(this)}},Pt=Y({passive:!0,capture:!0}),et=class{constructor(){this._events=new Map,this._delegateEventHandler=t=>{let s=kt(t);s&&this._events.get(t.type)?.forEach((n,i)=>{(i===s||i.contains(s))&&n.forEach(o=>o.handleEvent(t))})}}addHandler(t,s,n,i){let o=this._events.get(s);if(o){let r=o.get(n);r?r.add(i):o.set(n,new Set([i]))}else this._events.set(s,new Map([[n,new Set([i])]])),t.runOutsideAngular(()=>{document.addEventListener(s,this._delegateEventHandler,Pt)})}removeHandler(t,s,n){let i=this._events.get(t);if(!i)return;let o=i.get(s);o&&(o.delete(n),o.size===0&&i.delete(s),i.size===0&&(this._events.delete(t),document.removeEventListener(t,this._delegateEventHandler,Pt)))}},Bt={enterDuration:225,exitDuration:150},ce=800,Vt=Y({passive:!0,capture:!0}),Ut=["mousedown","touchstart"],Ht=["mouseup","mouseleave","touchend","touchcancel"],R=class R{constructor(t,s,n,i){this._target=t,this._ngZone=s,this._platform=i,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,i.isBrowser&&(this._containerElement=Q(n))}fadeInRipple(t,s,n={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=k(k({},Bt),n.animation);n.centered&&(t=i.left+i.width/2,s=i.top+i.height/2);let r=n.radius||de(t,s,i),m=t-i.left,g=s-i.top,I=o.enterDuration,a=document.createElement("div");a.classList.add("mat-ripple-element"),a.style.left=`${m-r}px`,a.style.top=`${g-r}px`,a.style.height=`${r*2}px`,a.style.width=`${r*2}px`,n.color!=null&&(a.style.backgroundColor=n.color),a.style.transitionDuration=`${I}ms`,this._containerElement.appendChild(a);let nt=window.getComputedStyle(a),Gt=nt.transitionProperty,st=nt.transitionDuration,j=Gt==="none"||st==="0s"||st==="0s, 0s"||i.width===0&&i.height===0,w=new tt(this,a,n,j);a.style.transform="scale3d(1, 1, 1)",w.state=p.FADING_IN,n.persistent||(this._mostRecentTransientRipple=w);let ot=null;return!j&&(I||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let rt=()=>this._finishRippleTransition(w),at=()=>this._destroyRipple(w);a.addEventListener("transitionend",rt),a.addEventListener("transitioncancel",at),ot={onTransitionEnd:rt,onTransitionCancel:at}}),this._activeRipples.set(w,ot),(j||!I)&&this._finishRippleTransition(w),w}fadeOutRipple(t){if(t.state===p.FADING_OUT||t.state===p.HIDDEN)return;let s=t.element,n=k(k({},Bt),t.config.animation);s.style.transitionDuration=`${n.exitDuration}ms`,s.style.opacity="0",t.state=p.FADING_OUT,(t._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(t)}fadeOutAll(){this._getActiveRipples().forEach(t=>t.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(t=>{t.config.persistent||t.fadeOut()})}setupTriggerEvents(t){let s=Q(t);!this._platform.isBrowser||!s||s===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=s,Ut.forEach(n=>{R._eventManager.addHandler(this._ngZone,n,s,this)}))}handleEvent(t){t.type==="mousedown"?this._onMousedown(t):t.type==="touchstart"?this._onTouchStart(t):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Ht.forEach(s=>{this._triggerElement.addEventListener(s,this,Vt)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(t){t.state===p.FADING_IN?this._startFadeOutTransition(t):t.state===p.FADING_OUT&&this._destroyRipple(t)}_startFadeOutTransition(t){let s=t===this._mostRecentTransientRipple,{persistent:n}=t.config;t.state=p.VISIBLE,!n&&(!s||!this._isPointerDown)&&t.fadeOut()}_destroyRipple(t){let s=this._activeRipples.get(t)??null;this._activeRipples.delete(t),this._activeRipples.size||(this._containerRect=null),t===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),t.state=p.HIDDEN,s!==null&&(t.element.removeEventListener("transitionend",s.onTransitionEnd),t.element.removeEventListener("transitioncancel",s.onTransitionCancel)),t.element.remove()}_onMousedown(t){let s=Lt(t),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+ce;!this._target.rippleDisabled&&!s&&!n&&(this._isPointerDown=!0,this.fadeInRipple(t.clientX,t.clientY,this._target.rippleConfig))}_onTouchStart(t){if(!this._target.rippleDisabled&&!St(t)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let s=t.changedTouches;if(s)for(let n=0;n<s.length;n++)this.fadeInRipple(s[n].clientX,s[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(t=>{let s=t.state===p.VISIBLE||t.config.terminateOnPointerUp&&t.state===p.FADING_IN;!t.config.persistent&&s&&t.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let t=this._triggerElement;t&&(Ut.forEach(s=>R._eventManager.removeHandler(s,t,this)),this._pointerUpEventsRegistered&&(Ht.forEach(s=>t.removeEventListener(s,this,Vt)),this._pointerUpEventsRegistered=!1))}};R._eventManager=new et;var zt=R;function de(e,t,s){let n=Math.max(Math.abs(e-s.left),Math.abs(e-s.right)),i=Math.max(Math.abs(t-s.top),Math.abs(t-s.bottom));return Math.sqrt(n*n+i*i)}var le=["*",[["mat-toolbar-row"]]],he=["*","mat-toolbar-row"],ue=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275dir=O({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"],standalone:!0});let e=t;return e})(),$t=(()=>{let t=class t{constructor(n,i,o){this._elementRef=n,this._platform=i,this._document=o}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}};t.\u0275fac=function(i){return new(i||t)(C(x),C(A),C(M))},t.\u0275cmp=d({type:t,selectors:[["mat-toolbar"]],contentQueries:function(i,o,r){if(i&1&&yt(r,ue,5),i&2){let m;W(m=K())&&(o._toolbarRows=m)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(i,o){i&2&&(vt(o.color?"mat-"+o.color:""),H("mat-toolbar-multiple-rows",o._toolbarRows.length>0)("mat-toolbar-single-row",o._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],standalone:!0,features:[l],ngContentSelectors:he,decls:2,vars:0,template:function(i,o){i&1&&($(le),S(0),S(1,1))},styles:[".mat-toolbar{background:var(--mat-toolbar-container-background-color);color:var(--mat-toolbar-container-text-color)}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font);font-size:var(--mat-toolbar-title-text-size);line-height:var(--mat-toolbar-title-text-line-height);font-weight:var(--mat-toolbar-title-text-weight);letter-spacing:var(--mat-toolbar-title-text-tracking);margin:0}.cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color:var(--mat-toolbar-container-text-color);--mdc-outlined-button-label-text-color:var(--mat-toolbar-container-text-color)}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height)}}"],encapsulation:2,changeDetection:0});let e=t;return e})();var Wt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=v({type:t}),t.\u0275inj=b({imports:[it,it]});let e=t;return e})();var pe=e=>({active:e}),Kt=(()=>{let t=class t{constructor(){this.isAnimated=!1}toggleAnimation(){this.isAnimated=!this.isAnimated}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=d({type:t,selectors:[["app-animated-menu-button"]],standalone:!0,features:[l],decls:4,vars:4,consts:[["type","button","title","Menu",1,"animated-menu-button",3,"click","ngClass"]],template:function(i,o){i&1&&(h(0,"button",0),z("click",function(){return o.toggleAnimation()}),E(1,"span")(2,"span")(3,"span"),u()),i&2&&(U("ngClass",It(2,pe,o.isAnimated)),L("aria-label",o.isAnimated?"Fechar menu":"Abrir menu"))},dependencies:[wt,Et],styles:["button.animated-menu-button[_ngcontent-%COMP%]{min-width:unset;padding:unset;border:unset;color:unset;background:unset}.animated-menu-button[_ngcontent-%COMP%]{position:relative;width:40px;height:40px;border-radius:5px;display:flex;justify-content:center;align-items:center;overflow:hidden;cursor:pointer}.animated-menu-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;width:25px;height:4px;background-color:#fff;border-radius:4px;transition:.5s}.animated-menu-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1){transform:translateY(-11px);width:20px;left:8px}.animated-menu-button.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1){width:30px;transform:translateY(-2px) rotate(45deg);transition-delay:.125s;left:6px}.animated-menu-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){transform:translateY(11px);width:12px;left:8px}.animated-menu-button.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){width:30px;transform:translateY(-2px) rotate(315deg);transition-delay:.25s;left:6px}.animated-menu-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){left:8px}.animated-menu-button.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){transform:translate(60px)}.animated-menu-button.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background-color:red}"]});let e=t;return e})();var Zt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=d({type:t,selectors:[["app-top-bar"]],standalone:!0,features:[l],decls:3,vars:0,consts:[["color","primary"]],template:function(i,o){i&1&&(h(0,"header")(1,"mat-toolbar",0),E(2,"app-animated-menu-button"),u()())},dependencies:[Wt,$t,Kt]});let e=t;return e})();var Yt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=d({type:t,selectors:[["app-home"]],standalone:!0,features:[l],decls:7,vars:0,template:function(i,o){i&1&&(E(0,"app-top-bar")(1,"app-left-bar"),h(2,"main")(3,"p"),y(4,"home works!"),u()(),E(5,"app-bottom-bar")(6,"app-loading"))},dependencies:[Zt,Dt,At,Tt]});let e=t;return e})();var $i=[{path:"",component:Yt}];export{$i as HOME_ROUTE};
