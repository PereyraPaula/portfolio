(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();class U extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
        :host {
          display: inline-flex;
      `}connectedCallback(){this.icon=this.getAttribute("icon")??"wifi",this.width=this.getAttribute("width")?`${this.getAttribute("width")}px`:"48px",this.height=this.getAttribute("height")?`${this.getAttribute("height")}px`:"48px",this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        ${U.styles}
          width: ${this.width};
          height: ${this.height};
        }
      </style>
      <svg role="img">
        <use xlink:href="/iconset.svg#${this.icon}"></use>
      </svg>`}}customElements.define("svg-icon",U);/*! @license is-dom-node v1.0.4

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/function B(t){return typeof window.Node=="object"?t instanceof window.Node:t!==null&&typeof t=="object"&&typeof t.nodeType=="number"&&typeof t.nodeName=="string"}/*! @license is-dom-node-list v1.2.1

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/function dt(t){var e=Object.prototype.toString.call(t),r=/^\[object (HTMLCollection|NodeList|Object)\]$/;return typeof window.NodeList=="object"?t instanceof window.NodeList:t!==null&&typeof t=="object"&&typeof t.length=="number"&&r.test(e)&&(t.length===0||B(t[0]))}/*! @license Tealight v0.3.6

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/function P(t,e){if(e===void 0&&(e=document),t instanceof Array)return t.filter(B);if(B(t))return[t];if(dt(t))return Array.prototype.slice.call(t);if(typeof t=="string")try{var r=e.querySelectorAll(t);return Array.prototype.slice.call(r)}catch{return[]}return[]}/*! @license Rematrix v0.3.0

	Copyright 2018 Julian Lloyd.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/function H(t){if(t.constructor!==Array)throw new TypeError("Expected array.");if(t.length===16)return t;if(t.length===6){var e=E();return e[0]=t[0],e[1]=t[1],e[4]=t[2],e[5]=t[3],e[12]=t[4],e[13]=t[5],e}throw new RangeError("Expected array with either 6 or 16 values.")}function E(){for(var t=[],e=0;e<16;e++)e%5==0?t.push(1):t.push(0);return t}function ht(t,e){for(var r=H(t),i=H(e),n=[],o=0;o<4;o++)for(var s=[r[o],r[o+4],r[o+8],r[o+12]],f=0;f<4;f++){var y=f*4,c=[i[y],i[y+1],i[y+2],i[y+3]],d=s[0]*c[0]+s[1]*c[1]+s[2]*c[2]+s[3]*c[3];n[o+y]=d}return n}function vt(t){if(typeof t=="string"){var e=t.match(/matrix(3d)?\(([^)]+)\)/);if(e){var r=e[2].split(", ").map(parseFloat);return H(r)}}return E()}function pt(t){var e=Math.PI/180*t,r=E();return r[5]=r[10]=Math.cos(e),r[6]=r[9]=Math.sin(e),r[9]*=-1,r}function yt(t){var e=Math.PI/180*t,r=E();return r[0]=r[10]=Math.cos(e),r[2]=r[8]=Math.sin(e),r[2]*=-1,r}function gt(t){var e=Math.PI/180*t,r=E();return r[0]=r[5]=Math.cos(e),r[1]=r[4]=Math.sin(e),r[4]*=-1,r}function J(t,e){var r=E();return r[0]=t,r[5]=t,r}function bt(t){var e=E();return e[12]=t,e}function mt(t){var e=E();return e[13]=t,e}/*! @license miniraf v1.0.0

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/var it=function(){var t=Date.now();return function(e){var r=Date.now();r-t>16?(t=r,e(r)):setTimeout(function(){return it(e)},0)}}(),wt=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||it;/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/var nt={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};function Et(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}function Ot(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"})}var L={success:Ot,failure:Et};function q(t){return t!==null&&t instanceof Object&&(t.constructor===Object||Object.prototype.toString.call(t)==="[object Object]")}function a(t,e){if(q(t)){var r=Object.keys(t);return r.forEach(function(i){return e(t[i],i,t)})}if(t instanceof Array)return t.forEach(function(i,n){return e(i,n,t)});throw new TypeError("Expected either an array or object literal.")}function j(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];if(this.constructor.debug&&console){var i="%cScrollReveal: "+t;e.forEach(function(n){return i+=`
 — `+n}),console.log(i,"color: #ea654b;")}}function ot(){var t=this,e=function(){return{active:[],stale:[]}},r=e(),i=e(),n=e();try{a(P("[data-sr-id]"),function(o){var s=parseInt(o.getAttribute("data-sr-id"));r.active.push(s)})}catch(o){throw o}a(this.store.elements,function(o){r.active.indexOf(o.id)===-1&&r.stale.push(o.id)}),a(r.stale,function(o){return delete t.store.elements[o]}),a(this.store.elements,function(o){n.active.indexOf(o.containerId)===-1&&n.active.push(o.containerId),o.hasOwnProperty("sequence")&&i.active.indexOf(o.sequence.id)===-1&&i.active.push(o.sequence.id)}),a(this.store.containers,function(o){n.active.indexOf(o.id)===-1&&n.stale.push(o.id)}),a(n.stale,function(o){var s=t.store.containers[o].node;s.removeEventListener("scroll",t.delegate),s.removeEventListener("resize",t.delegate),delete t.store.containers[o]}),a(this.store.sequences,function(o){i.active.indexOf(o.id)===-1&&i.stale.push(o.id)}),a(i.stale,function(o){return delete t.store.sequences[o]})}var Q=function(){var t={},e=document.documentElement.style;function r(i,n){if(n===void 0&&(n=e),i&&typeof i=="string"){if(t[i])return t[i];if(typeof n[i]=="string")return t[i]=i;if(typeof n["-webkit-"+i]=="string")return t[i]="-webkit-"+i;throw new RangeError('Unable to find "'+i+'" style property.')}throw new TypeError("Expected a string.")}return r.clearCache=function(){return t={}},r}();function Tt(t){var e=window.getComputedStyle(t.node),r=e.position,i=t.config,n={},o=t.node.getAttribute("style")||"",s=o.match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];n.computed=s?s.map(function(m){return m.trim()}).join("; ")+";":"",n.generated=s.some(function(m){return m.match(/visibility\s?:\s?visible/i)})?n.computed:s.concat(["visibility: visible"]).map(function(m){return m.trim()}).join("; ")+";";var f=parseFloat(e.opacity),y=isNaN(parseFloat(i.opacity))?parseFloat(e.opacity):parseFloat(i.opacity),c={computed:f!==y?"opacity: "+f+";":"",generated:f!==y?"opacity: "+y+";":""},d=[];if(parseFloat(i.distance)){var l=i.origin==="top"||i.origin==="bottom"?"Y":"X",p=i.distance;(i.origin==="top"||i.origin==="left")&&(p=/^-/.test(p)?p.substr(1):"-"+p);var O=p.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),b=O[0],T=O[1];switch(T){case"em":p=parseInt(e.fontSize)*b;break;case"px":p=b;break;case"%":p=l==="Y"?t.node.getBoundingClientRect().height*b/100:t.node.getBoundingClientRect().width*b/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}l==="Y"?d.push(mt(p)):d.push(bt(p))}i.rotate.x&&d.push(pt(i.rotate.x)),i.rotate.y&&d.push(yt(i.rotate.y)),i.rotate.z&&d.push(gt(i.rotate.z)),i.scale!==1&&(i.scale===0?d.push(J(2e-4)):d.push(J(i.scale)));var v={};if(d.length){v.property=Q("transform"),v.computed={raw:e[v.property],matrix:vt(e[v.property])},d.unshift(v.computed.matrix);var ut=d.reduce(ht);v.generated={initial:v.property+": matrix3d("+ut.join(", ")+");",final:v.property+": matrix3d("+v.computed.matrix.join(", ")+");"}}else v.generated={initial:"",final:""};var u={};if(c.generated||v.generated.initial){u.property=Q("transition"),u.computed=e[u.property],u.fragments=[];var K=i.delay,A=i.duration,I=i.easing;c.generated&&u.fragments.push({delayed:"opacity "+A/1e3+"s "+I+" "+K/1e3+"s",instant:"opacity "+A/1e3+"s "+I+" 0s"}),v.generated.initial&&u.fragments.push({delayed:v.property+" "+A/1e3+"s "+I+" "+K/1e3+"s",instant:v.property+" "+A/1e3+"s "+I+" 0s"});var ft=u.computed&&!u.computed.match(/all 0s|none 0s/);ft&&u.fragments.unshift({delayed:u.computed,instant:u.computed});var V=u.fragments.reduce(function(m,x,Z){return m.delayed+=Z===0?x.delayed:", "+x.delayed,m.instant+=Z===0?x.instant:", "+x.instant,m},{delayed:"",instant:""});u.generated={delayed:u.property+": "+V.delayed+";",instant:u.property+": "+V.instant+";"}}else u.generated={delayed:"",instant:""};return{inline:n,opacity:c,position:r,transform:v,transition:u}}function $(t,e){e.split(";").forEach(function(r){var i=r.split(":"),n=i[0],o=i.slice(1);n&&o&&(t.style[n.trim()]=o.join(":"))})}function G(t){var e=this,r;try{a(P(t),function(i){var n=i.getAttribute("data-sr-id");if(n!==null){r=!0;var o=e.store.elements[n];o.callbackTimer&&window.clearTimeout(o.callbackTimer.clock),$(o.node,o.styles.inline.generated),i.removeAttribute("data-sr-id"),delete e.store.elements[n]}})}catch(i){return j.call(this,"Clean failed.",i.message)}if(r)try{ot.call(this)}catch(i){return j.call(this,"Clean failed.",i.message)}}function jt(){var t=this;a(this.store.elements,function(e){$(e.node,e.styles.inline.generated),e.node.removeAttribute("data-sr-id")}),a(this.store.containers,function(e){var r=e.node===document.documentElement?window:e.node;r.removeEventListener("scroll",t.delegate),r.removeEventListener("resize",t.delegate)}),this.store={containers:{},elements:{},history:[],sequences:{}}}function k(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];if(q(t))return a(e,function(i){a(i,function(n,o){q(n)?((!t[o]||!q(t[o]))&&(t[o]={}),k(t[o],n)):t[o]=n})}),t;throw new TypeError("Target must be an object literal.")}function S(t){return t===void 0&&(t=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(t)}var W=function(){var t=0;return function(){return t++}}();function st(){var t=this;ot.call(this),a(this.store.elements,function(e){var r=[e.styles.inline.generated];e.visible?(r.push(e.styles.opacity.computed),r.push(e.styles.transform.generated.final),e.revealed=!0):(r.push(e.styles.opacity.generated),r.push(e.styles.transform.generated.initial),e.revealed=!1),$(e.node,r.filter(function(i){return i!==""}).join(" "))}),a(this.store.containers,function(e){var r=e.node===document.documentElement?window:e.node;r.addEventListener("scroll",t.delegate),r.addEventListener("resize",t.delegate)}),this.delegate(),this.initTimeout=null}function R(t,e){e===void 0&&(e={});var r=e.pristine||this.pristine,i=t.config.useDelay==="always"||t.config.useDelay==="onload"&&r||t.config.useDelay==="once"&&!t.seen,n=t.visible&&!t.revealed,o=!t.visible&&t.revealed&&t.config.reset;if(e.reveal||n)return $t.call(this,t,i);if(e.reset||o)return Lt.call(this,t)}function $t(t,e){var r=[t.styles.inline.generated,t.styles.opacity.computed,t.styles.transform.generated.final];e?r.push(t.styles.transition.generated.delayed):r.push(t.styles.transition.generated.instant),t.revealed=t.seen=!0,$(t.node,r.filter(function(i){return i!==""}).join(" ")),at.call(this,t,e)}function Lt(t){var e=[t.styles.inline.generated,t.styles.opacity.generated,t.styles.transform.generated.initial,t.styles.transition.generated.instant];t.revealed=!1,$(t.node,e.filter(function(r){return r!==""}).join(" ")),at.call(this,t)}function at(t,e){var r=this,i=e?t.config.duration+t.config.delay:t.config.duration,n=t.revealed?t.config.beforeReveal:t.config.beforeReset,o=t.revealed?t.config.afterReveal:t.config.afterReset,s=0;t.callbackTimer&&(s=Date.now()-t.callbackTimer.start,window.clearTimeout(t.callbackTimer.clock)),n(t.node),t.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){o(t.node),t.callbackTimer=null,t.revealed&&!t.config.reset&&t.config.cleanup&&G.call(r,t.node)},i-s)}}function ct(t,e){if(e===void 0&&(e=this.pristine),!t.visible&&t.revealed&&t.config.reset)return R.call(this,t,{reset:!0});var r=this.store.sequences[t.sequence.id],i=t.sequence.index;if(r){var n=new tt(r,"visible",this.store),o=new tt(r,"revealed",this.store);if(r.models={visible:n,revealed:o},!o.body.length){var s=r.members[n.body[0]],f=this.store.elements[s];if(f)return M.call(this,r,n.body[0],-1,e),M.call(this,r,n.body[0],1,e),R.call(this,f,{reveal:!0,pristine:e})}if(!r.blocked.head&&i===[].concat(o.head).pop()&&i>=[].concat(n.body).shift())return M.call(this,r,i,-1,e),R.call(this,t,{reveal:!0,pristine:e});if(!r.blocked.foot&&i===[].concat(o.foot).shift()&&i<=[].concat(n.body).pop())return M.call(this,r,i,1,e),R.call(this,t,{reveal:!0,pristine:e})}}function Rt(t){var e=Math.abs(t);if(!isNaN(e))this.id=W(),this.interval=Math.max(e,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1};else throw new RangeError("Invalid sequence interval.")}function tt(t,e,r){var i=this;this.head=[],this.body=[],this.foot=[],a(t.members,function(n,o){var s=r.elements[n];s&&s[e]&&i.body.push(o)}),this.body.length&&a(t.members,function(n,o){var s=r.elements[n];s&&!s[e]&&(o<i.body[0]?i.head.push(o):i.foot.push(o))})}function M(t,e,r,i){var n=this,o=["head",null,"foot"][1+r],s=t.members[e+r],f=this.store.elements[s];t.blocked[o]=!0,setTimeout(function(){t.blocked[o]=!1,f&&ct.call(n,f,i)},t.interval)}function lt(t,e,r){var i=this;e===void 0&&(e={}),r===void 0&&(r=!1);var n=[],o,s=e.interval||nt.interval;try{s&&(o=new Rt(s));var f=P(t);if(!f.length)throw new Error("Invalid reveal target.");var y=f.reduce(function(c,d){var l={},p=d.getAttribute("data-sr-id");p?(k(l,i.store.elements[p]),$(l.node,l.styles.inline.computed)):(l.id=W(),l.node=d,l.seen=!1,l.revealed=!1,l.visible=!1);var O=k({},l.config||i.defaults,e);if(!O.mobile&&S()||!O.desktop&&!S())return p&&G.call(i,l),c;var b=P(O.container)[0];if(!b)throw new Error("Invalid container.");if(!b.contains(d))return c;var T;return T=Pt(b,n,i.store.containers),T===null&&(T=W(),n.push({id:T,node:b})),l.config=O,l.containerId=T,l.styles=Tt(l),o&&(l.sequence={id:o.id,index:o.members.length},o.members.push(l.id)),c.push(l),c},[]);a(y,function(c){i.store.elements[c.id]=c,c.node.setAttribute("data-sr-id",c.id)})}catch(c){return j.call(this,"Reveal failed.",c.message)}a(n,function(c){i.store.containers[c.id]={id:c.id,node:c.node}}),o&&(this.store.sequences[o.id]=o),r!==!0&&(this.store.history.push({target:t,options:e}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(st.bind(this),0))}function Pt(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];var i=null;return a(e,function(n){a(n,function(o){i===null&&o.node===t&&(i=o.id)})}),i}function kt(){var t=this;a(this.store.history,function(e){lt.call(t,e.target,e.options,!0)}),st.call(this)}var At=function(t){return(t>0)-(t<0)||+t},et=Math.sign||At;function rt(t,e){var r=e?t.node.clientHeight:t.node.offsetHeight,i=e?t.node.clientWidth:t.node.offsetWidth,n=0,o=0,s=t.node;do isNaN(s.offsetTop)||(n+=s.offsetTop),isNaN(s.offsetLeft)||(o+=s.offsetLeft),s=s.offsetParent;while(s);return{bounds:{top:n,right:o+i,bottom:n+r,left:o},height:r,width:i}}function It(t){var e,r;return t.node===document.documentElement?(e=window.pageYOffset,r=window.pageXOffset):(e=t.node.scrollTop,r=t.node.scrollLeft),{top:e,left:r}}function xt(t){t===void 0&&(t={});var e=this.store.containers[t.containerId];if(e){var r=Math.max(0,Math.min(1,t.config.viewFactor)),i=t.config.viewOffset,n={top:t.geometry.bounds.top+t.geometry.height*r,right:t.geometry.bounds.right-t.geometry.width*r,bottom:t.geometry.bounds.bottom-t.geometry.height*r,left:t.geometry.bounds.left+t.geometry.width*r},o={top:e.geometry.bounds.top+e.scroll.top+i.top,right:e.geometry.bounds.right+e.scroll.left-i.right,bottom:e.geometry.bounds.bottom+e.scroll.top-i.bottom,left:e.geometry.bounds.left+e.scroll.left+i.left};return n.top<o.bottom&&n.right>o.left&&n.bottom>o.top&&n.left<o.right||t.styles.position==="fixed"}}function Mt(t,e){var r=this;t===void 0&&(t={type:"init"}),e===void 0&&(e=this.store.elements),wt(function(){var i=t.type==="init"||t.type==="resize";a(r.store.containers,function(n){i&&(n.geometry=rt.call(r,n,!0));var o=It.call(r,n);n.scroll&&(n.direction={x:et(o.left-n.scroll.left),y:et(o.top-n.scroll.top)}),n.scroll=o}),a(e,function(n){(i||n.geometry===void 0)&&(n.geometry=rt.call(r,n)),n.visible=xt.call(r,n)}),a(e,function(n){n.sequence?ct.call(r,n):R.call(r,n)}),r.pristine=!1})}function qt(){var t=document.documentElement.style;return"transform"in t||"WebkitTransform"in t}function St(){var t=document.documentElement.style;return"transition"in t||"WebkitTransition"in t}var _t="4.0.9",_,N,C,D,F,w,z,Y;function h(t){t===void 0&&(t={});var e=typeof this>"u"||Object.getPrototypeOf(this)!==h.prototype;if(e)return new h(t);if(!h.isSupported())return j.call(this,"Instantiation failed.","This browser is not supported."),L.failure();var r;try{r=w?k({},w,t):k({},nt,t)}catch(n){return j.call(this,"Invalid configuration.",n.message),L.failure()}try{var i=P(r.container)[0];if(!i)throw new Error("Invalid container.")}catch(n){return j.call(this,n.message),L.failure()}return w=r,!w.mobile&&S()||!w.desktop&&!S()?(j.call(this,"This device is disabled.","desktop: "+w.desktop,"mobile: "+w.mobile),L.failure()):(L.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,_=_||Mt.bind(this),N=N||jt.bind(this),C=C||lt.bind(this),D=D||G.bind(this),F=F||kt.bind(this),Object.defineProperty(this,"delegate",{get:function(){return _}}),Object.defineProperty(this,"destroy",{get:function(){return N}}),Object.defineProperty(this,"reveal",{get:function(){return C}}),Object.defineProperty(this,"clean",{get:function(){return D}}),Object.defineProperty(this,"sync",{get:function(){return F}}),Object.defineProperty(this,"defaults",{get:function(){return w}}),Object.defineProperty(this,"version",{get:function(){return _t}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),Y||(Y=this))}h.isSupported=function(){return qt()&&St()};Object.defineProperty(h,"debug",{get:function(){return z||!1},set:function(t){return z=typeof t=="boolean"?t:z}});h();const Nt=document.getElementById("menu-btn"),X=document.getElementById("nav-links");Nt.addEventListener("click",t=>{X.classList.toggle("open")});X.addEventListener("click",t=>{X.classList.remove("open")});const g={distance:"50px",origin:"bottom",duration:1e3};h().reveal(".header__container img",{...g});h().reveal(".header__container h1",{...g,delay:500});h().reveal(".header__container p",{...g,delay:1e3});h().reveal(".header__btns",{...g,delay:1500});h().reveal(".project__card",{...g,interval:500});h().reveal(".experience__list li",{...g,interval:500});h().reveal(".footer__container h2",{...g});h().reveal(".footer__container p",{...g,delay:500});h().reveal(".footer__container .mail__to",{...g,delay:1e3});h().reveal(".footer__socials",{...g,delay:1500});
