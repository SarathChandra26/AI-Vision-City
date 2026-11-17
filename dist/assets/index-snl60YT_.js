(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kl="160",zd=0,b0=1,Hd=2,Zh=1,Jh=2,ui=3,xi=0,dn=1,Hn=2,Fi=0,kr=1,_0=2,S0=3,M0=4,Gd=5,rr=100,Vd=101,Wd=102,w0=103,T0=104,qd=200,Xd=201,Yd=202,jd=203,Qo=204,el=205,Kd=206,$d=207,Zd=208,Jd=209,Qd=210,ef=211,tf=212,nf=213,rf=214,sf=0,af=1,of=2,ba=3,lf=4,cf=5,hf=6,uf=7,Qh=0,df=1,ff=2,Bi=0,pf=1,mf=2,gf=3,eu=4,vf=5,xf=6,E0="attached",yf="detached",tu=300,zr=301,Hr=302,tl=303,nl=304,La=306,gn=1e3,Ln=1001,_a=1002,Ft=1003,il=1004,ga=1005,en=1006,nu=1007,hr=1008,zi=1009,bf=1010,_f=1011,Ol=1012,iu=1013,fi=1014,pi=1015,Gr=1016,ru=1017,su=1018,or=1020,Sf=1021,xn=1023,Mf=1024,wf=1025,lr=1026,Vr=1027,Tf=1028,au=1029,Ef=1030,ou=1031,lu=1033,Qa=33776,eo=33777,to=33778,no=33779,A0=35840,C0=35841,R0=35842,I0=35843,cu=36196,L0=37492,P0=37496,D0=37808,N0=37809,U0=37810,k0=37811,O0=37812,F0=37813,B0=37814,z0=37815,H0=37816,G0=37817,V0=37818,W0=37819,q0=37820,X0=37821,io=36492,Y0=36494,j0=36495,Af=36283,K0=36284,$0=36285,Z0=36286,Cf=2200,Rf=2201,If=2202,Ms=2300,Wr=2301,ro=2302,Pr=2400,Dr=2401,Sa=2402,Fl=2500,Lf=2501,Pf=0,hu=1,rl=2,uu=3e3,cr=3001,Df=3200,Nf=3201,du=0,Uf=1,Pn="",Dt="srgb",$t="srgb-linear",Bl="display-p3",Pa="display-p3-linear",Ma="linear",St="srgb",wa="rec709",Ta="p3",pr=7680,J0=519,kf=512,Of=513,Ff=514,fu=515,Bf=516,zf=517,Hf=518,Gf=519,sl=35044,Q0="300 es",al=1035,mi=2e3,Ea=2001;class dr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ec=1234567;const vs=Math.PI/180,qr=180/Math.PI;function Gn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[r&255]+Jt[r>>8&255]+Jt[r>>16&255]+Jt[r>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function tn(r,e,t){return Math.max(e,Math.min(t,r))}function zl(r,e){return(r%e+e)%e}function Vf(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Wf(r,e,t){return r!==e?(t-r)/(e-r):0}function xs(r,e,t){return(1-t)*r+t*e}function qf(r,e,t,n){return xs(r,e,1-Math.exp(-t*n))}function Xf(r,e=1){return e-Math.abs(zl(r,e*2)-e)}function Yf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function jf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Kf(r,e){return r+Math.floor(Math.random()*(e-r+1))}function $f(r,e){return r+Math.random()*(e-r)}function Zf(r){return r*(.5-Math.random())}function Jf(r){r!==void 0&&(ec=r);let e=ec+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qf(r){return r*vs}function ep(r){return r*qr}function ol(r){return(r&r-1)===0&&r!==0}function tp(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Aa(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function np(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),p=s((n-e)/2),x=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*x,l*p,o*c);break;case"YXY":r.set(l*p,o*h,l*x,o*c);break;case"ZYZ":r.set(l*x,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Yn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function mt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ip={DEG2RAD:vs,RAD2DEG:qr,generateUUID:Gn,clamp:tn,euclideanModulo:zl,mapLinear:Vf,inverseLerp:Wf,lerp:xs,damp:qf,pingpong:Xf,smoothstep:Yf,smootherstep:jf,randInt:Kf,randFloat:$f,randFloatSpread:Zf,seededRandom:Jf,degToRad:Qf,radToDeg:ep,isPowerOfTwo:ol,ceilPowerOfTwo:tp,floorPowerOfTwo:Aa,setQuaternionFromProperEuler:np,normalize:mt,denormalize:Yn};class st{constructor(e=0,t=0){st.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,t,n,i,s,a,o,l,c){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],x=n[8],y=i[0],g=i[3],m=i[6],_=i[1],S=i[4],w=i[7],N=i[2],I=i[5],L=i[8];return s[0]=a*y+o*_+l*N,s[3]=a*g+o*S+l*I,s[6]=a*m+o*w+l*L,s[1]=c*y+h*_+u*N,s[4]=c*g+h*S+u*I,s[7]=c*m+h*w+u*L,s[2]=d*y+p*_+x*N,s[5]=d*g+p*S+x*I,s[8]=d*m+p*w+x*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,x=t*u+n*d+i*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=u*y,e[1]=(i*c-h*n)*y,e[2]=(o*n-i*a)*y,e[3]=d*y,e[4]=(h*t-i*l)*y,e[5]=(i*s-o*t)*y,e[6]=p*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(so.makeScale(e,t)),this}rotate(e){return this.premultiply(so.makeRotation(-e)),this}translate(e,t){return this.premultiply(so.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const so=new tt;function pu(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ws(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function rp(){const r=ws("canvas");return r.style.display="block",r}const tc={};function ys(r){r in tc||(tc[r]=!0,console.warn(r))}const nc=new tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ic=new tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Us={[$t]:{transfer:Ma,primaries:wa,toReference:r=>r,fromReference:r=>r},[Dt]:{transfer:St,primaries:wa,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Pa]:{transfer:Ma,primaries:Ta,toReference:r=>r.applyMatrix3(ic),fromReference:r=>r.applyMatrix3(nc)},[Bl]:{transfer:St,primaries:Ta,toReference:r=>r.convertSRGBToLinear().applyMatrix3(ic),fromReference:r=>r.applyMatrix3(nc).convertLinearToSRGB()}},sp=new Set([$t,Pa]),ut={enabled:!0,_workingColorSpace:$t,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!sp.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Us[e].toReference,i=Us[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Us[r].primaries},getTransfer:function(r){return r===Pn?Ma:Us[r].transfer}};function Or(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ao(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let mr;class mu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{mr===void 0&&(mr=ws("canvas")),mr.width=e.width,mr.height=e.height;const n=mr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=mr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ws("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Or(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Or(t[n]/255)*255):t[n]=Or(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ap=0;class gu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=Gn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(oo(i[a].image)):s.push(oo(i[a]))}else s=oo(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function oo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?mu.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let op=0;class Kt extends dr{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,n=Ln,i=Ln,s=en,a=hr,o=xn,l=zi,c=Kt.DEFAULT_ANISOTROPY,h=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=Gn(),this.name="",this.source=new gu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===cr?Dt:Pn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gn:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case _a:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gn:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case _a:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Dt?cr:uu}set encoding(e){ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===cr?Dt:Pn}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=tu;Kt.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,n=0,i=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],x=l[9],y=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(x+g)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,w=(p+1)/2,N=(m+1)/2,I=(h+d)/4,L=(u+y)/4,H=(x+g)/4;return S>w&&S>N?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=I/n,s=L/n):w>N?w<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(w),n=I/i,s=H/i):N<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(N),n=L/s,i=H/s),this.set(n,i,s,t),this}let _=Math.sqrt((g-x)*(g-x)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(g-x)/_,this.y=(u-y)/_,this.z=(d-h)/_,this.w=Math.acos((c+p+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lp extends dr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(ys("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===cr?Dt:Pn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Kt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new gu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yi extends lp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class vu extends Kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cp extends Kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[a+0],p=s[a+1],x=s[a+2],y=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=x,e[t+3]=y;return}if(u!==y||l!==d||c!==p||h!==x){let g=1-o;const m=l*d+c*p+h*x+u*y,_=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){const N=Math.sqrt(S),I=Math.atan2(N,m*_);g=Math.sin(g*I)/N,o=Math.sin(o*I)/N}const w=o*_;if(l=l*g+d*w,c=c*g+p*w,h=h*g+x*w,u=u*g+y*w,g===1-o){const N=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=N,c*=N,h*=N,u*=N}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],p=s[a+2],x=s[a+3];return e[t]=o*x+h*u+l*p-c*d,e[t+1]=l*x+h*d+c*u-o*p,e[t+2]=c*x+h*p+o*d-l*u,e[t+3]=h*x-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),p=l(i/2),x=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*x,this._y=c*p*u-d*h*x,this._z=c*h*x+d*p*u,this._w=c*h*u-d*p*x;break;case"YXZ":this._x=d*h*u+c*p*x,this._y=c*p*u-d*h*x,this._z=c*h*x-d*p*u,this._w=c*h*u+d*p*x;break;case"ZXY":this._x=d*h*u-c*p*x,this._y=c*p*u+d*h*x,this._z=c*h*x+d*p*u,this._w=c*h*u-d*p*x;break;case"ZYX":this._x=d*h*u-c*p*x,this._y=c*p*u+d*h*x,this._z=c*h*x-d*p*u,this._w=c*h*u+d*p*x;break;case"YZX":this._x=d*h*u+c*p*x,this._y=c*p*u+d*h*x,this._z=c*h*x-d*p*u,this._w=c*h*u-d*p*x;break;case"XZY":this._x=d*h*u-c*p*x,this._y=c*p*u-d*h*x,this._z=c*h*x+d*p*u,this._w=c*h*u+d*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return lo.copy(this).projectOnVector(e),this.sub(lo)}reflect(e){return this.sub(lo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lo=new O,rc=new Vn;class _i{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,On):On.fromBufferAttribute(s,a),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ks.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ks.copy(n.boundingBox)),ks.applyMatrix4(e.matrixWorld),this.union(ks)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(as),Os.subVectors(this.max,as),gr.subVectors(e.a,as),vr.subVectors(e.b,as),xr.subVectors(e.c,as),Ei.subVectors(vr,gr),Ai.subVectors(xr,vr),ji.subVectors(gr,xr);let t=[0,-Ei.z,Ei.y,0,-Ai.z,Ai.y,0,-ji.z,ji.y,Ei.z,0,-Ei.x,Ai.z,0,-Ai.x,ji.z,0,-ji.x,-Ei.y,Ei.x,0,-Ai.y,Ai.x,0,-ji.y,ji.x,0];return!co(t,gr,vr,xr,Os)||(t=[1,0,0,0,1,0,0,0,1],!co(t,gr,vr,xr,Os))?!1:(Fs.crossVectors(Ei,Ai),t=[Fs.x,Fs.y,Fs.z],co(t,gr,vr,xr,Os))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ri=[new O,new O,new O,new O,new O,new O,new O,new O],On=new O,ks=new _i,gr=new O,vr=new O,xr=new O,Ei=new O,Ai=new O,ji=new O,as=new O,Os=new O,Fs=new O,Ki=new O;function co(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Ki.fromArray(r,s);const o=i.x*Math.abs(Ki.x)+i.y*Math.abs(Ki.y)+i.z*Math.abs(Ki.z),l=e.dot(Ki),c=t.dot(Ki),h=n.dot(Ki);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const hp=new _i,os=new O,ho=new O;class Jn{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):hp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;os.subVectors(e,this.center);const t=os.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(os,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ho.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(os.copy(e.center).add(ho)),this.expandByPoint(os.copy(e.center).sub(ho))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const si=new O,uo=new O,Bs=new O,Ci=new O,fo=new O,zs=new O,po=new O;class Is{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,t),si.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){uo.copy(e).add(t).multiplyScalar(.5),Bs.copy(t).sub(e).normalize(),Ci.copy(this.origin).sub(uo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Bs),o=Ci.dot(this.direction),l=-Ci.dot(Bs),c=Ci.lengthSq(),h=Math.abs(1-a*a);let u,d,p,x;if(h>0)if(u=a*l-o,d=a*o-l,x=s*h,u>=0)if(d>=-x)if(d<=x){const y=1/h;u*=y,d*=y,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-x?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=x?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(uo).addScaledVector(Bs,d),p}intersectSphere(e,t){si.subVectors(e.center,this.origin);const n=si.dot(this.direction),i=si.dot(si)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,n,i,s){fo.subVectors(t,e),zs.subVectors(n,e),po.crossVectors(fo,zs);let a=this.direction.dot(po),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ci.subVectors(this.origin,e);const l=o*this.direction.dot(zs.crossVectors(Ci,zs));if(l<0)return null;const c=o*this.direction.dot(fo.cross(Ci));if(c<0||l+c>a)return null;const h=-o*Ci.dot(po);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nt{constructor(e,t,n,i,s,a,o,l,c,h,u,d,p,x,y,g){nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,u,d,p,x,y,g)}set(e,t,n,i,s,a,o,l,c,h,u,d,p,x,y,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=p,m[7]=x,m[11]=y,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/yr.setFromMatrixColumn(e,0).length(),s=1/yr.setFromMatrixColumn(e,1).length(),a=1/yr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*h,p=a*u,x=o*h,y=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+x*c,t[5]=d-y*c,t[9]=-o*l,t[2]=y-d*c,t[6]=x+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,x=c*h,y=c*u;t[0]=d+y*o,t[4]=x*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-x,t[6]=y+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,x=c*h,y=c*u;t[0]=d-y*o,t[4]=-a*u,t[8]=x+p*o,t[1]=p+x*o,t[5]=a*h,t[9]=y-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,p=a*u,x=o*h,y=o*u;t[0]=l*h,t[4]=x*c-p,t[8]=d*c+y,t[1]=l*u,t[5]=y*c+d,t[9]=p*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,x=o*l,y=o*c;t[0]=l*h,t[4]=y-d*u,t[8]=x*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+x,t[10]=d-y*u}else if(e.order==="XZY"){const d=a*l,p=a*c,x=o*l,y=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+y,t[5]=a*h,t[9]=p*u-x,t[2]=x*u-p,t[6]=o*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(up,e,dp)}lookAt(e,t,n){const i=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Ri.crossVectors(n,_n),Ri.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Ri.crossVectors(n,_n)),Ri.normalize(),Hs.crossVectors(_n,Ri),i[0]=Ri.x,i[4]=Hs.x,i[8]=_n.x,i[1]=Ri.y,i[5]=Hs.y,i[9]=_n.y,i[2]=Ri.z,i[6]=Hs.z,i[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],x=n[2],y=n[6],g=n[10],m=n[14],_=n[3],S=n[7],w=n[11],N=n[15],I=i[0],L=i[4],H=i[8],E=i[12],C=i[1],Y=i[5],q=i[9],re=i[13],F=i[2],z=i[6],$=i[10],Q=i[14],Z=i[3],ee=i[7],J=i[11],ue=i[15];return s[0]=a*I+o*C+l*F+c*Z,s[4]=a*L+o*Y+l*z+c*ee,s[8]=a*H+o*q+l*$+c*J,s[12]=a*E+o*re+l*Q+c*ue,s[1]=h*I+u*C+d*F+p*Z,s[5]=h*L+u*Y+d*z+p*ee,s[9]=h*H+u*q+d*$+p*J,s[13]=h*E+u*re+d*Q+p*ue,s[2]=x*I+y*C+g*F+m*Z,s[6]=x*L+y*Y+g*z+m*ee,s[10]=x*H+y*q+g*$+m*J,s[14]=x*E+y*re+g*Q+m*ue,s[3]=_*I+S*C+w*F+N*Z,s[7]=_*L+S*Y+w*z+N*ee,s[11]=_*H+S*q+w*$+N*J,s[15]=_*E+S*re+w*Q+N*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],x=e[3],y=e[7],g=e[11],m=e[15];return x*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*p-n*l*p)+y*(+t*l*p-t*c*d+s*a*d-i*a*p+i*c*h-s*l*h)+g*(+t*c*u-t*o*p-s*a*u+n*a*p+s*o*h-n*c*h)+m*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],x=e[12],y=e[13],g=e[14],m=e[15],_=u*g*c-y*d*c+y*l*p-o*g*p-u*l*m+o*d*m,S=x*d*c-h*g*c-x*l*p+a*g*p+h*l*m-a*d*m,w=h*y*c-x*u*c+x*o*p-a*y*p-h*o*m+a*u*m,N=x*u*l-h*y*l-x*o*d+a*y*d+h*o*g-a*u*g,I=t*_+n*S+i*w+s*N;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/I;return e[0]=_*L,e[1]=(y*d*s-u*g*s-y*i*p+n*g*p+u*i*m-n*d*m)*L,e[2]=(o*g*s-y*l*s+y*i*c-n*g*c-o*i*m+n*l*m)*L,e[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*p-n*l*p)*L,e[4]=S*L,e[5]=(h*g*s-x*d*s+x*i*p-t*g*p-h*i*m+t*d*m)*L,e[6]=(x*l*s-a*g*s-x*i*c+t*g*c+a*i*m-t*l*m)*L,e[7]=(a*d*s-h*l*s+h*i*c-t*d*c-a*i*p+t*l*p)*L,e[8]=w*L,e[9]=(x*u*s-h*y*s-x*n*p+t*y*p+h*n*m-t*u*m)*L,e[10]=(a*y*s-x*o*s+x*n*c-t*y*c-a*n*m+t*o*m)*L,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*p-t*o*p)*L,e[12]=N*L,e[13]=(h*y*i-x*u*i+x*n*d-t*y*d-h*n*g+t*u*g)*L,e[14]=(x*o*i-a*y*i-x*n*l+t*y*l+a*n*g-t*o*g)*L,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,x=s*u,y=a*h,g=a*u,m=o*u,_=l*c,S=l*h,w=l*u,N=n.x,I=n.y,L=n.z;return i[0]=(1-(y+m))*N,i[1]=(p+w)*N,i[2]=(x-S)*N,i[3]=0,i[4]=(p-w)*I,i[5]=(1-(d+m))*I,i[6]=(g+_)*I,i[7]=0,i[8]=(x+S)*L,i[9]=(g-_)*L,i[10]=(1-(d+y))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=yr.set(i[0],i[1],i[2]).length();const a=yr.set(i[4],i[5],i[6]).length(),o=yr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Fn.copy(this);const c=1/s,h=1/a,u=1/o;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=h,Fn.elements[5]*=h,Fn.elements[6]*=h,Fn.elements[8]*=u,Fn.elements[9]*=u,Fn.elements[10]*=u,t.setFromRotationMatrix(Fn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=mi){const l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let p,x;if(o===mi)p=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Ea)p=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=mi){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-s),d=(t+e)*c,p=(n+i)*h;let x,y;if(o===mi)x=(a+s)*u,y=-2*u;else if(o===Ea)x=s*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const yr=new O,Fn=new nt,up=new O(0,0,0),dp=new O(1,1,1),Ri=new O,Hs=new O,_n=new O,sc=new nt,ac=new Vn;class Da{constructor(e=0,t=0,n=0,i=Da.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ac.setFromEuler(this),this.setFromQuaternion(ac,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Da.DEFAULT_ORDER="XYZ";class Hl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fp=0;const oc=new O,br=new Vn,ai=new nt,Gs=new O,ls=new O,pp=new O,mp=new Vn,lc=new O(1,0,0),cc=new O(0,1,0),hc=new O(0,0,1),gp={type:"added"},vp={type:"removed"};class Mt extends dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new O,t=new Da,n=new Vn,i=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new nt},normalMatrix:{value:new tt}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.multiply(br),this}rotateOnWorldAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.premultiply(br),this}rotateX(e){return this.rotateOnAxis(lc,e)}rotateY(e){return this.rotateOnAxis(cc,e)}rotateZ(e){return this.rotateOnAxis(hc,e)}translateOnAxis(e,t){return oc.copy(e).applyQuaternion(this.quaternion),this.position.add(oc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lc,e)}translateY(e){return this.translateOnAxis(cc,e)}translateZ(e){return this.translateOnAxis(hc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Gs.copy(e):Gs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(ls,Gs,this.up):ai.lookAt(Gs,ls,this.up),this.quaternion.setFromRotationMatrix(ai),i&&(ai.extractRotation(i.matrixWorld),br.setFromRotationMatrix(ai),this.quaternion.premultiply(br.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(gp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,e,pp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,mp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Mt.DEFAULT_UP=new O(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new O,oi=new O,mo=new O,li=new O,_r=new O,Sr=new O,uc=new O,go=new O,vo=new O,xo=new O;let Vs=!1;class zn{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Bn.subVectors(e,t),i.cross(Bn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Bn.subVectors(i,t),oi.subVectors(n,t),mo.subVectors(e,t);const a=Bn.dot(Bn),o=Bn.dot(oi),l=Bn.dot(mo),c=oi.dot(oi),h=oi.dot(mo),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,x=(a*h-o*l)*d;return s.set(1-p-x,x,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getUV(e,t,n,i,s,a,o,l){return Vs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Vs=!0),this.getInterpolation(e,t,n,i,s,a,o,l)}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,li.x),l.addScaledVector(a,li.y),l.addScaledVector(o,li.z),l)}static isFrontFacing(e,t,n,i){return Bn.subVectors(n,t),oi.subVectors(e,t),Bn.cross(oi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Bn.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Vs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Vs=!0),zn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return zn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;_r.subVectors(i,n),Sr.subVectors(s,n),go.subVectors(e,n);const l=_r.dot(go),c=Sr.dot(go);if(l<=0&&c<=0)return t.copy(n);vo.subVectors(e,i);const h=_r.dot(vo),u=Sr.dot(vo);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(_r,a);xo.subVectors(e,s);const p=_r.dot(xo),x=Sr.dot(xo);if(x>=0&&p<=x)return t.copy(s);const y=p*c-l*x;if(y<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(Sr,o);const g=h*x-p*u;if(g<=0&&u-h>=0&&p-x>=0)return uc.subVectors(s,i),o=(u-h)/(u-h+(p-x)),t.copy(i).addScaledVector(uc,o);const m=1/(g+y+d);return a=y*m,o=d*m,t.copy(n).addScaledVector(_r,a).addScaledVector(Sr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},Ws={h:0,s:0,l:0};function yo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ut.workingColorSpace){if(e=zl(e,1),t=tn(t,0,1),n=tn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=yo(a,s,e+1/3),this.g=yo(a,s,e),this.b=yo(a,s,e-1/3)}return ut.toWorkingColorSpace(this,i),this}setStyle(e,t=Dt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){const n=xu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Or(e.r),this.g=Or(e.g),this.b=Or(e.b),this}copyLinearToSRGB(e){return this.r=ao(e.r),this.g=ao(e.g),this.b=ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return ut.fromWorkingColorSpace(Qt.copy(this),e),Math.round(tn(Qt.r*255,0,255))*65536+Math.round(tn(Qt.g*255,0,255))*256+Math.round(tn(Qt.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(Qt.copy(this),t);const n=Qt.r,i=Qt.g,s=Qt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=Dt){ut.fromWorkingColorSpace(Qt.copy(this),e);const t=Qt.r,n=Qt.g,i=Qt.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+t,Ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ii),e.getHSL(Ws);const n=xs(Ii.h,Ws.h,t),i=xs(Ii.s,Ws.s,t),s=xs(Ii.l,Ws.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new Ne;Ne.NAMES=xu;let xp=0;class $n extends dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=kr,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qo,this.blendDst=el,this.blendEquation=rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=ba,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=J0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pr,this.stencilZFail=pr,this.stencilZPass=pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==kr&&(n.blending=this.blending),this.side!==xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qo&&(n.blendSrc=this.blendSrc),this.blendDst!==el&&(n.blendDst=this.blendDst),this.blendEquation!==rr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ba&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==J0&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==pr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==pr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class jn extends $n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kt=new O,qs=new st;class fn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=sl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qs.fromBufferAttribute(this,t),qs.applyMatrix3(e),this.setXY(t,qs.x,qs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sl&&(e.usage=this.usage),e}}class yu extends fn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class bu extends fn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class pn extends fn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let yp=0;const Cn=new nt,bo=new Mt,Mr=new O,Sn=new _i,cs=new _i,jt=new O;class kn extends dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pu(e)?bu:yu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new tt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,n){return Cn.makeTranslation(e,t,n),this.applyMatrix4(Cn),this}scale(e,t,n){return Cn.makeScale(e,t,n),this.applyMatrix4(Cn),this}lookAt(e){return bo.lookAt(e),bo.updateMatrix(),this.applyMatrix4(bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new pn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Sn.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];cs.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(Sn.min,cs.min),Sn.expandByPoint(jt),jt.addVectors(Sn.max,cs.max),Sn.expandByPoint(jt)):(Sn.expandByPoint(cs.min),Sn.expandByPoint(cs.max))}Sn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)jt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(jt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)jt.fromBufferAttribute(o,c),l&&(Mr.fromBufferAttribute(e,c),jt.add(Mr)),i=Math.max(i,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let C=0;C<o;C++)c[C]=new O,h[C]=new O;const u=new O,d=new O,p=new O,x=new st,y=new st,g=new st,m=new O,_=new O;function S(C,Y,q){u.fromArray(i,C*3),d.fromArray(i,Y*3),p.fromArray(i,q*3),x.fromArray(a,C*2),y.fromArray(a,Y*2),g.fromArray(a,q*2),d.sub(u),p.sub(u),y.sub(x),g.sub(x);const re=1/(y.x*g.y-g.x*y.y);isFinite(re)&&(m.copy(d).multiplyScalar(g.y).addScaledVector(p,-y.y).multiplyScalar(re),_.copy(p).multiplyScalar(y.x).addScaledVector(d,-g.x).multiplyScalar(re),c[C].add(m),c[Y].add(m),c[q].add(m),h[C].add(_),h[Y].add(_),h[q].add(_))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let C=0,Y=w.length;C<Y;++C){const q=w[C],re=q.start,F=q.count;for(let z=re,$=re+F;z<$;z+=3)S(n[z+0],n[z+1],n[z+2])}const N=new O,I=new O,L=new O,H=new O;function E(C){L.fromArray(s,C*3),H.copy(L);const Y=c[C];N.copy(Y),N.sub(L.multiplyScalar(L.dot(Y))).normalize(),I.crossVectors(H,Y);const re=I.dot(h[C])<0?-1:1;l[C*4]=N.x,l[C*4+1]=N.y,l[C*4+2]=N.z,l[C*4+3]=re}for(let C=0,Y=w.length;C<Y;++C){const q=w[C],re=q.start,F=q.count;for(let z=re,$=re+F;z<$;z+=3)E(n[z+0]),E(n[z+1]),E(n[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new O,s=new O,a=new O,o=new O,l=new O,c=new O,h=new O,u=new O;if(e)for(let d=0,p=e.count;d<p;d+=3){const x=e.getX(d+0),y=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,x),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,g),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,x=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*h;for(let m=0;m<h;m++)d[x++]=c[p++]}return new fn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dc=new nt,$i=new Is,Xs=new Jn,fc=new O,wr=new O,Tr=new O,Er=new O,_o=new O,Ys=new O,js=new st,Ks=new st,$s=new st,pc=new O,mc=new O,gc=new O,Zs=new O,Js=new O;class ft extends Mt{constructor(e=new kn,t=new jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Ys.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(_o.fromBufferAttribute(u,e),a?Ys.addScaledVector(_o,h):Ys.addScaledVector(_o.sub(t),h))}t.add(Ys)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(s),$i.copy(e.ray).recast(e.near),!(Xs.containsPoint($i.origin)===!1&&($i.intersectSphere(Xs,fc)===null||$i.origin.distanceToSquared(fc)>(e.far-e.near)**2))&&(dc.copy(s).invert(),$i.copy(e.ray).applyMatrix4(dc),!(n.boundingBox!==null&&$i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$i)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,y=d.length;x<y;x++){const g=d[x],m=a[g.materialIndex],_=Math.max(g.start,p.start),S=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let w=_,N=S;w<N;w+=3){const I=o.getX(w),L=o.getX(w+1),H=o.getX(w+2);i=Qs(this,m,e,n,c,h,u,I,L,H),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const x=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let g=x,m=y;g<m;g+=3){const _=o.getX(g),S=o.getX(g+1),w=o.getX(g+2);i=Qs(this,a,e,n,c,h,u,_,S,w),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,y=d.length;x<y;x++){const g=d[x],m=a[g.materialIndex],_=Math.max(g.start,p.start),S=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let w=_,N=S;w<N;w+=3){const I=w,L=w+1,H=w+2;i=Qs(this,m,e,n,c,h,u,I,L,H),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const x=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=x,m=y;g<m;g+=3){const _=g,S=g+1,w=g+2;i=Qs(this,a,e,n,c,h,u,_,S,w),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function bp(r,e,t,n,i,s,a,o){let l;if(e.side===dn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===xi,o),l===null)return null;Js.copy(o),Js.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Js);return c<t.near||c>t.far?null:{distance:c,point:Js.clone(),object:r}}function Qs(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,wr),r.getVertexPosition(l,Tr),r.getVertexPosition(c,Er);const h=bp(r,e,t,n,wr,Tr,Er,Zs);if(h){i&&(js.fromBufferAttribute(i,o),Ks.fromBufferAttribute(i,l),$s.fromBufferAttribute(i,c),h.uv=zn.getInterpolation(Zs,wr,Tr,Er,js,Ks,$s,new st)),s&&(js.fromBufferAttribute(s,o),Ks.fromBufferAttribute(s,l),$s.fromBufferAttribute(s,c),h.uv1=zn.getInterpolation(Zs,wr,Tr,Er,js,Ks,$s,new st),h.uv2=h.uv1),a&&(pc.fromBufferAttribute(a,o),mc.fromBufferAttribute(a,l),gc.fromBufferAttribute(a,c),h.normal=zn.getInterpolation(Zs,wr,Tr,Er,pc,mc,gc,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new O,materialIndex:0};zn.getNormal(wr,Tr,Er,u.normal),h.face=u}return h}class Dn extends kn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;x("z","y","x",-1,-1,n,t,e,a,s,0),x("z","y","x",1,-1,n,t,-e,a,s,1),x("x","z","y",1,1,e,n,t,i,a,2),x("x","z","y",1,-1,e,n,-t,i,a,3),x("x","y","z",1,-1,e,t,n,i,s,4),x("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new pn(c,3)),this.setAttribute("normal",new pn(h,3)),this.setAttribute("uv",new pn(u,2));function x(y,g,m,_,S,w,N,I,L,H,E){const C=w/L,Y=N/H,q=w/2,re=N/2,F=I/2,z=L+1,$=H+1;let Q=0,Z=0;const ee=new O;for(let J=0;J<$;J++){const ue=J*Y-re;for(let fe=0;fe<z;fe++){const j=fe*C-q;ee[y]=j*_,ee[g]=ue*S,ee[m]=F,c.push(ee.x,ee.y,ee.z),ee[y]=0,ee[g]=0,ee[m]=I>0?1:-1,h.push(ee.x,ee.y,ee.z),u.push(fe/L),u.push(1-J/H),Q+=1}}for(let J=0;J<H;J++)for(let ue=0;ue<L;ue++){const fe=d+ue+z*J,j=d+ue+z*(J+1),ne=d+(ue+1)+z*(J+1),be=d+(ue+1)+z*J;l.push(fe,j,be),l.push(j,ne,be),Z+=6}o.addGroup(p,Z,E),p+=Z,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ln(r){const e={};for(let t=0;t<r.length;t++){const n=Xr(r[t]);for(const i in n)e[i]=n[i]}return e}function _p(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function _u(r){return r.getRenderTarget()===null?r.outputColorSpace:ut.workingColorSpace}const Sp={clone:Xr,merge:ln};var Mp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zn extends $n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mp,this.fragmentShader=wp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xr(e.uniforms),this.uniformsGroups=_p(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Su extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class hn extends Su{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qr*2*Math.atan(Math.tan(vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ar=-90,Cr=1;class Tp extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new hn(Ar,Cr,e,t);i.layers=this.layers,this.add(i);const s=new hn(Ar,Cr,e,t);s.layers=this.layers,this.add(s);const a=new hn(Ar,Cr,e,t);a.layers=this.layers,this.add(a);const o=new hn(Ar,Cr,e,t);o.layers=this.layers,this.add(o);const l=new hn(Ar,Cr,e,t);l.layers=this.layers,this.add(l);const c=new hn(Ar,Cr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===mi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ea)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Mu extends Kt{constructor(e,t,n,i,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:zr,super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ep extends yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(ys("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===cr?Dt:Pn),this.texture=new Mu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:en}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Dn(5,5,5),s=new Zn({name:"CubemapFromEquirect",uniforms:Xr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:Fi});s.uniforms.tEquirect.value=t;const a=new ft(i,s),o=t.minFilter;return t.minFilter===hr&&(t.minFilter=en),new Tp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const So=new O,Ap=new O,Cp=new tt;class nr{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=So.subVectors(n,t).cross(Ap.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(So),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Cp.getNormalMatrix(e),i=this.coplanarPoint(So).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zi=new Jn,ea=new O;class Gl{constructor(e=new nr,t=new nr,n=new nr,i=new nr,s=new nr,a=new nr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mi){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],x=i[9],y=i[10],g=i[11],m=i[12],_=i[13],S=i[14],w=i[15];if(n[0].setComponents(l-s,d-c,g-p,w-m).normalize(),n[1].setComponents(l+s,d+c,g+p,w+m).normalize(),n[2].setComponents(l+a,d+h,g+x,w+_).normalize(),n[3].setComponents(l-a,d-h,g-x,w-_).normalize(),n[4].setComponents(l-o,d-u,g-y,w-S).normalize(),t===mi)n[5].setComponents(l+o,d+u,g+y,w+S).normalize();else if(t===Ea)n[5].setComponents(o,u,y,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ea.x=i.normal.x>0?e.max.x:e.min.x,ea.y=i.normal.y>0?e.max.y:e.min.y,ea.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ea)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wu(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Rp(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,p=u.byteLength,x=r.createBuffer();r.bindBuffer(h,x),r.bufferData(h,u,d),c.onUploadCallback();let y;if(u instanceof Float32Array)y=r.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)y=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)y=r.SHORT;else if(u instanceof Uint32Array)y=r.UNSIGNED_INT;else if(u instanceof Int32Array)y=r.INT;else if(u instanceof Int8Array)y=r.BYTE;else if(u instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:x,type:y,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,h,u){const d=h.array,p=h._updateRange,x=h.updateRanges;if(r.bindBuffer(u,c),p.count===-1&&x.length===0&&r.bufferSubData(u,0,d),x.length!==0){for(let y=0,g=x.length;y<g;y++){const m=x[y];t?r.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):r.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}p.count!==-1&&(t?r.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):r.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}class Ui extends kn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,p=[],x=[],y=[],g=[];for(let m=0;m<h;m++){const _=m*d-a;for(let S=0;S<c;S++){const w=S*u-s;x.push(w,-_,0),y.push(0,0,1),g.push(S/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<o;_++){const S=_+c*m,w=_+c*(m+1),N=_+1+c*(m+1),I=_+1+c*m;p.push(S,w,I),p.push(w,N,I)}this.setIndex(p),this.setAttribute("position",new pn(x,3)),this.setAttribute("normal",new pn(y,3)),this.setAttribute("uv",new pn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ui(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ip=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Pp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Np=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Up=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Op=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fp=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,zp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Wp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Qp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,em=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,im=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,am="gl_FragColor = linearToOutputTexel( gl_FragColor );",om=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,lm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,um=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ym=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_m=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Mm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,wm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Am=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Rm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Im=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Pm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Um=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,km=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Om=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,qm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Xm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ym=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,e1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,t1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,n1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,i1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,r1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,s1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,a1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,o1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,h1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,u1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,d1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,f1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,p1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,m1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,g1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,v1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,x1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,y1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,b1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,S1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,M1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,w1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,T1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,E1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,A1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,C1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const R1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,I1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,k1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,O1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,F1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,B1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,z1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,G1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,V1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,W1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,j1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Z1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,eg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ng=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ig=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ag=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,og=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:Ip,alphahash_pars_fragment:Lp,alphamap_fragment:Pp,alphamap_pars_fragment:Dp,alphatest_fragment:Np,alphatest_pars_fragment:Up,aomap_fragment:kp,aomap_pars_fragment:Op,batching_pars_vertex:Fp,batching_vertex:Bp,begin_vertex:zp,beginnormal_vertex:Hp,bsdfs:Gp,iridescence_fragment:Vp,bumpmap_pars_fragment:Wp,clipping_planes_fragment:qp,clipping_planes_pars_fragment:Xp,clipping_planes_pars_vertex:Yp,clipping_planes_vertex:jp,color_fragment:Kp,color_pars_fragment:$p,color_pars_vertex:Zp,color_vertex:Jp,common:Qp,cube_uv_reflection_fragment:em,defaultnormal_vertex:tm,displacementmap_pars_vertex:nm,displacementmap_vertex:im,emissivemap_fragment:rm,emissivemap_pars_fragment:sm,colorspace_fragment:am,colorspace_pars_fragment:om,envmap_fragment:lm,envmap_common_pars_fragment:cm,envmap_pars_fragment:hm,envmap_pars_vertex:um,envmap_physical_pars_fragment:Mm,envmap_vertex:dm,fog_vertex:fm,fog_pars_vertex:pm,fog_fragment:mm,fog_pars_fragment:gm,gradientmap_pars_fragment:vm,lightmap_fragment:xm,lightmap_pars_fragment:ym,lights_lambert_fragment:bm,lights_lambert_pars_fragment:_m,lights_pars_begin:Sm,lights_toon_fragment:wm,lights_toon_pars_fragment:Tm,lights_phong_fragment:Em,lights_phong_pars_fragment:Am,lights_physical_fragment:Cm,lights_physical_pars_fragment:Rm,lights_fragment_begin:Im,lights_fragment_maps:Lm,lights_fragment_end:Pm,logdepthbuf_fragment:Dm,logdepthbuf_pars_fragment:Nm,logdepthbuf_pars_vertex:Um,logdepthbuf_vertex:km,map_fragment:Om,map_pars_fragment:Fm,map_particle_fragment:Bm,map_particle_pars_fragment:zm,metalnessmap_fragment:Hm,metalnessmap_pars_fragment:Gm,morphcolor_vertex:Vm,morphnormal_vertex:Wm,morphtarget_pars_vertex:qm,morphtarget_vertex:Xm,normal_fragment_begin:Ym,normal_fragment_maps:jm,normal_pars_fragment:Km,normal_pars_vertex:$m,normal_vertex:Zm,normalmap_pars_fragment:Jm,clearcoat_normal_fragment_begin:Qm,clearcoat_normal_fragment_maps:e1,clearcoat_pars_fragment:t1,iridescence_pars_fragment:n1,opaque_fragment:i1,packing:r1,premultiplied_alpha_fragment:s1,project_vertex:a1,dithering_fragment:o1,dithering_pars_fragment:l1,roughnessmap_fragment:c1,roughnessmap_pars_fragment:h1,shadowmap_pars_fragment:u1,shadowmap_pars_vertex:d1,shadowmap_vertex:f1,shadowmask_pars_fragment:p1,skinbase_vertex:m1,skinning_pars_vertex:g1,skinning_vertex:v1,skinnormal_vertex:x1,specularmap_fragment:y1,specularmap_pars_fragment:b1,tonemapping_fragment:_1,tonemapping_pars_fragment:S1,transmission_fragment:M1,transmission_pars_fragment:w1,uv_pars_fragment:T1,uv_pars_vertex:E1,uv_vertex:A1,worldpos_vertex:C1,background_vert:R1,background_frag:I1,backgroundCube_vert:L1,backgroundCube_frag:P1,cube_vert:D1,cube_frag:N1,depth_vert:U1,depth_frag:k1,distanceRGBA_vert:O1,distanceRGBA_frag:F1,equirect_vert:B1,equirect_frag:z1,linedashed_vert:H1,linedashed_frag:G1,meshbasic_vert:V1,meshbasic_frag:W1,meshlambert_vert:q1,meshlambert_frag:X1,meshmatcap_vert:Y1,meshmatcap_frag:j1,meshnormal_vert:K1,meshnormal_frag:$1,meshphong_vert:Z1,meshphong_frag:J1,meshphysical_vert:Q1,meshphysical_frag:eg,meshtoon_vert:tg,meshtoon_frag:ng,points_vert:ig,points_frag:rg,shadow_vert:sg,shadow_frag:ag,sprite_vert:og,sprite_frag:lg},me={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},qn={basic:{uniforms:ln([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:ln([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:ln([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:ln([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:ln([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:ln([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:ln([me.points,me.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:ln([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:ln([me.common,me.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:ln([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:ln([me.sprite,me.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:ln([me.common,me.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:ln([me.lights,me.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};qn.physical={uniforms:ln([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const ta={r:0,b:0,g:0};function cg(r,e,t,n,i,s,a){const o=new Ne(0);let l=s===!0?0:1,c,h,u=null,d=0,p=null;function x(g,m){let _=!1,S=m.isScene===!0?m.background:null;S&&S.isTexture&&(S=(m.backgroundBlurriness>0?t:e).get(S)),S===null?y(o,l):S&&S.isColor&&(y(S,1),_=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||_)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),S&&(S.isCubeTexture||S.mapping===La)?(h===void 0&&(h=new ft(new Dn(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:Xr(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,I,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=ut.getTransfer(S.colorSpace)!==St,(u!==S||d!==S.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,p=r.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new ft(new Ui(2,2),new Zn({name:"BackgroundMaterial",uniforms:Xr(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=ut.getTransfer(S.colorSpace)!==St,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,p=r.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function y(g,m){g.getRGB(ta,_u(r)),n.buffers.color.setClear(ta.r,ta.g,ta.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(g,m=1){o.set(g),l=m,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,y(o,l)},render:x}}function hg(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=g(null);let c=l,h=!1;function u(F,z,$,Q,Z){let ee=!1;if(a){const J=y(Q,$,z);c!==J&&(c=J,p(c.object)),ee=m(F,Q,$,Z),ee&&_(F,Q,$,Z)}else{const J=z.wireframe===!0;(c.geometry!==Q.id||c.program!==$.id||c.wireframe!==J)&&(c.geometry=Q.id,c.program=$.id,c.wireframe=J,ee=!0)}Z!==null&&t.update(Z,r.ELEMENT_ARRAY_BUFFER),(ee||h)&&(h=!1,H(F,z,$,Q),Z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(F){return n.isWebGL2?r.bindVertexArray(F):s.bindVertexArrayOES(F)}function x(F){return n.isWebGL2?r.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function y(F,z,$){const Q=$.wireframe===!0;let Z=o[F.id];Z===void 0&&(Z={},o[F.id]=Z);let ee=Z[z.id];ee===void 0&&(ee={},Z[z.id]=ee);let J=ee[Q];return J===void 0&&(J=g(d()),ee[Q]=J),J}function g(F){const z=[],$=[],Q=[];for(let Z=0;Z<i;Z++)z[Z]=0,$[Z]=0,Q[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:$,attributeDivisors:Q,object:F,attributes:{},index:null}}function m(F,z,$,Q){const Z=c.attributes,ee=z.attributes;let J=0;const ue=$.getAttributes();for(const fe in ue)if(ue[fe].location>=0){const ne=Z[fe];let be=ee[fe];if(be===void 0&&(fe==="instanceMatrix"&&F.instanceMatrix&&(be=F.instanceMatrix),fe==="instanceColor"&&F.instanceColor&&(be=F.instanceColor)),ne===void 0||ne.attribute!==be||be&&ne.data!==be.data)return!0;J++}return c.attributesNum!==J||c.index!==Q}function _(F,z,$,Q){const Z={},ee=z.attributes;let J=0;const ue=$.getAttributes();for(const fe in ue)if(ue[fe].location>=0){let ne=ee[fe];ne===void 0&&(fe==="instanceMatrix"&&F.instanceMatrix&&(ne=F.instanceMatrix),fe==="instanceColor"&&F.instanceColor&&(ne=F.instanceColor));const be={};be.attribute=ne,ne&&ne.data&&(be.data=ne.data),Z[fe]=be,J++}c.attributes=Z,c.attributesNum=J,c.index=Q}function S(){const F=c.newAttributes;for(let z=0,$=F.length;z<$;z++)F[z]=0}function w(F){N(F,0)}function N(F,z){const $=c.newAttributes,Q=c.enabledAttributes,Z=c.attributeDivisors;$[F]=1,Q[F]===0&&(r.enableVertexAttribArray(F),Q[F]=1),Z[F]!==z&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,z),Z[F]=z)}function I(){const F=c.newAttributes,z=c.enabledAttributes;for(let $=0,Q=z.length;$<Q;$++)z[$]!==F[$]&&(r.disableVertexAttribArray($),z[$]=0)}function L(F,z,$,Q,Z,ee,J){J===!0?r.vertexAttribIPointer(F,z,$,Z,ee):r.vertexAttribPointer(F,z,$,Q,Z,ee)}function H(F,z,$,Q){if(n.isWebGL2===!1&&(F.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const Z=Q.attributes,ee=$.getAttributes(),J=z.defaultAttributeValues;for(const ue in ee){const fe=ee[ue];if(fe.location>=0){let j=Z[ue];if(j===void 0&&(ue==="instanceMatrix"&&F.instanceMatrix&&(j=F.instanceMatrix),ue==="instanceColor"&&F.instanceColor&&(j=F.instanceColor)),j!==void 0){const ne=j.normalized,be=j.itemSize,Ce=t.get(j);if(Ce===void 0)continue;const we=Ce.buffer,Ve=Ce.type,Be=Ce.bytesPerElement,Ue=n.isWebGL2===!0&&(Ve===r.INT||Ve===r.UNSIGNED_INT||j.gpuType===iu);if(j.isInterleavedBufferAttribute){const at=j.data,G=at.stride,Ut=j.offset;if(at.isInstancedInterleavedBuffer){for(let Ie=0;Ie<fe.locationSize;Ie++)N(fe.location+Ie,at.meshPerAttribute);F.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Ie=0;Ie<fe.locationSize;Ie++)w(fe.location+Ie);r.bindBuffer(r.ARRAY_BUFFER,we);for(let Ie=0;Ie<fe.locationSize;Ie++)L(fe.location+Ie,be/fe.locationSize,Ve,ne,G*Be,(Ut+be/fe.locationSize*Ie)*Be,Ue)}else{if(j.isInstancedBufferAttribute){for(let at=0;at<fe.locationSize;at++)N(fe.location+at,j.meshPerAttribute);F.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let at=0;at<fe.locationSize;at++)w(fe.location+at);r.bindBuffer(r.ARRAY_BUFFER,we);for(let at=0;at<fe.locationSize;at++)L(fe.location+at,be/fe.locationSize,Ve,ne,be*Be,be/fe.locationSize*at*Be,Ue)}}else if(J!==void 0){const ne=J[ue];if(ne!==void 0)switch(ne.length){case 2:r.vertexAttrib2fv(fe.location,ne);break;case 3:r.vertexAttrib3fv(fe.location,ne);break;case 4:r.vertexAttrib4fv(fe.location,ne);break;default:r.vertexAttrib1fv(fe.location,ne)}}}}I()}function E(){q();for(const F in o){const z=o[F];for(const $ in z){const Q=z[$];for(const Z in Q)x(Q[Z].object),delete Q[Z];delete z[$]}delete o[F]}}function C(F){if(o[F.id]===void 0)return;const z=o[F.id];for(const $ in z){const Q=z[$];for(const Z in Q)x(Q[Z].object),delete Q[Z];delete z[$]}delete o[F.id]}function Y(F){for(const z in o){const $=o[z];if($[F.id]===void 0)continue;const Q=$[F.id];for(const Z in Q)x(Q[Z].object),delete Q[Z];delete $[F.id]}}function q(){re(),h=!0,c!==l&&(c=l,p(c.object))}function re(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:q,resetDefaultState:re,dispose:E,releaseStatesOfGeometry:C,releaseStatesOfProgram:Y,initAttributes:S,enableAttribute:w,disableUnusedAttributes:I}}function ug(r,e,t,n){const i=n.isWebGL2;let s;function a(h){s=h}function o(h,u){r.drawArrays(s,h,u),t.update(u,s,1)}function l(h,u,d){if(d===0)return;let p,x;if(i)p=r,x="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[x](s,h,u,d),t.update(u,s,d)}function c(h,u,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<d;x++)this.render(h[x],u[x]);else{p.multiDrawArraysWEBGL(s,h,0,u,0,d);let x=0;for(let y=0;y<d;y++)x+=u[y];t.update(x,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function dg(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(L){if(L==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),_=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=d>0,w=a||e.has("OES_texture_float"),N=S&&w,I=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:_,vertexTextures:S,floatFragmentTextures:w,floatVertexTextures:N,maxSamples:I}}function fg(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new nr,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const x=u.clippingPlanes,y=u.clipIntersection,g=u.clipShadows,m=r.get(u);if(!i||x===null||x.length===0||s&&!g)s?h(null):c();else{const _=s?0:n,S=_*4;let w=m.clippingState||null;l.value=w,w=h(x,d,S,p);for(let N=0;N!==S;++N)w[N]=t[N];m.clippingState=w,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,x){const y=u!==null?u.length:0;let g=null;if(y!==0){if(g=l.value,x!==!0||g===null){const m=p+y*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let S=0,w=p;S!==y;++S,w+=4)a.copy(u[S]).applyMatrix4(_,o),a.normal.toArray(g,w),g[w+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function pg(r){let e=new WeakMap;function t(a,o){return o===tl?a.mapping=zr:o===nl&&(a.mapping=Hr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===tl||o===nl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ep(l.height/2);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Na extends Su{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Nr=4,vc=[.125,.215,.35,.446,.526,.582],sr=20,Mo=new Na,xc=new Ne;let wo=null,To=0,Eo=0;const ir=(1+Math.sqrt(5))/2,Rr=1/ir,yc=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,ir,Rr),new O(0,ir,-Rr),new O(Rr,0,ir),new O(-Rr,0,ir),new O(ir,Rr,0),new O(-ir,Rr,0)];class bc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){wo=this._renderer.getRenderTarget(),To=this._renderer.getActiveCubeFace(),Eo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wo,To,Eo),e.scissorTest=!1,na(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zr||e.mapping===Hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wo=this._renderer.getRenderTarget(),To=this._renderer.getActiveCubeFace(),Eo=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:Gr,format:xn,colorSpace:$t,depthBuffer:!1},i=_c(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_c(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mg(s)),this._blurMaterial=gg(s,e,t)}return i}_compileMaterial(e){const t=new ft(this._lodPlanes[0],e);this._renderer.compile(t,Mo)}_sceneToCubeUV(e,t,n,i){const o=new hn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(xc),h.toneMapping=Bi,h.autoClear=!1;const p=new jn({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),x=new ft(new Dn,p);let y=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,y=!0):(p.color.copy(xc),y=!0);for(let m=0;m<6;m++){const _=m%3;_===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):_===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const S=this._cubeSize;na(i,_*S,m>2?S:0,S,S),h.setRenderTarget(i),y&&h.render(x,o),h.render(e,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===zr||e.mapping===Hr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sc());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new ft(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;na(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Mo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=yc[(i-1)%yc.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ft(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*sr-1),y=s/x,g=isFinite(s)?1+Math.floor(h*y):sr;g>sr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${sr}`);const m=[];let _=0;for(let L=0;L<sr;++L){const H=L/y,E=Math.exp(-H*H/2);m.push(E),L===0?_+=E:L<g&&(_+=2*E)}for(let L=0;L<m.length;L++)m[L]=m[L]/_;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=x,d.mipInt.value=S-n;const w=this._sizeLods[i],N=3*w*(i>S-Nr?i-S+Nr:0),I=4*(this._cubeSize-w);na(t,N,I,3*w,2*w),l.setRenderTarget(t),l.render(u,Mo)}}function mg(r){const e=[],t=[],n=[];let i=r;const s=r-Nr+1+vc.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-Nr?l=vc[a-r+Nr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,x=6,y=3,g=2,m=1,_=new Float32Array(y*x*p),S=new Float32Array(g*x*p),w=new Float32Array(m*x*p);for(let I=0;I<p;I++){const L=I%3*2/3-1,H=I>2?0:-1,E=[L,H,0,L+2/3,H,0,L+2/3,H+1,0,L,H,0,L+2/3,H+1,0,L,H+1,0];_.set(E,y*x*I),S.set(d,g*x*I);const C=[I,I,I,I,I,I];w.set(C,m*x*I)}const N=new kn;N.setAttribute("position",new fn(_,y)),N.setAttribute("uv",new fn(S,g)),N.setAttribute("faceIndex",new fn(w,m)),e.push(N),i>Nr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function _c(r,e,t){const n=new yi(r,e,t);return n.texture.mapping=La,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function na(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function gg(r,e,t){const n=new Float32Array(sr),i=new O(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Sc(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Mc(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Vl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vg(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===tl||l===nl,h=l===zr||l===Hr;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new bc(r)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new bc(r));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function xg(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function yg(r,e,t,n){const i={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);for(const x in d.morphAttributes){const y=d.morphAttributes[x];for(let g=0,m=y.length;g<m;g++)e.remove(y[g])}d.removeEventListener("dispose",a),delete i[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const x in d)e.update(d[x],r.ARRAY_BUFFER);const p=u.morphAttributes;for(const x in p){const y=p[x];for(let g=0,m=y.length;g<m;g++)e.update(y[g],r.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,x=u.attributes.position;let y=0;if(p!==null){const _=p.array;y=p.version;for(let S=0,w=_.length;S<w;S+=3){const N=_[S+0],I=_[S+1],L=_[S+2];d.push(N,I,I,L,L,N)}}else if(x!==void 0){const _=x.array;y=x.version;for(let S=0,w=_.length/3-1;S<w;S+=3){const N=S+0,I=S+1,L=S+2;d.push(N,I,I,L,L,N)}}else return;const g=new(pu(d)?bu:yu)(d,1);g.version=y;const m=s.get(u);m&&e.remove(m),s.set(u,g)}function h(u){const d=s.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function bg(r,e,t,n){const i=n.isWebGL2;let s;function a(p){s=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function h(p,x){r.drawElements(s,x,o,p*l),t.update(x,s,1)}function u(p,x,y){if(y===0)return;let g,m;if(i)g=r,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,x,o,p*l,y),t.update(x,s,y)}function d(p,x,y){if(y===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<y;m++)this.render(p[m]/l,x[m]);else{g.multiDrawElementsWEBGL(s,x,0,o,p,0,y);let m=0;for(let _=0;_<y;_++)m+=x[_];t.update(m,s,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function _g(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Sg(r,e){return r[0]-e[0]}function Mg(r,e){return Math.abs(e[1])-Math.abs(r[1])}function wg(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new vt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=x!==void 0?x.length:0;let g=s.get(h);if(g===void 0||g.count!==y){let z=function(){re.dispose(),s.delete(h),h.removeEventListener("dispose",z)};var p=z;g!==void 0&&g.texture.dispose();const S=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,N=h.morphAttributes.color!==void 0,I=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],H=h.morphAttributes.color||[];let E=0;S===!0&&(E=1),w===!0&&(E=2),N===!0&&(E=3);let C=h.attributes.position.count*E,Y=1;C>e.maxTextureSize&&(Y=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const q=new Float32Array(C*Y*4*y),re=new vu(q,C,Y,y);re.type=pi,re.needsUpdate=!0;const F=E*4;for(let $=0;$<y;$++){const Q=I[$],Z=L[$],ee=H[$],J=C*Y*4*$;for(let ue=0;ue<Q.count;ue++){const fe=ue*F;S===!0&&(a.fromBufferAttribute(Q,ue),q[J+fe+0]=a.x,q[J+fe+1]=a.y,q[J+fe+2]=a.z,q[J+fe+3]=0),w===!0&&(a.fromBufferAttribute(Z,ue),q[J+fe+4]=a.x,q[J+fe+5]=a.y,q[J+fe+6]=a.z,q[J+fe+7]=0),N===!0&&(a.fromBufferAttribute(ee,ue),q[J+fe+8]=a.x,q[J+fe+9]=a.y,q[J+fe+10]=a.z,q[J+fe+11]=ee.itemSize===4?a.w:1)}}g={count:y,texture:re,size:new st(C,Y)},s.set(h,g),h.addEventListener("dispose",z)}let m=0;for(let S=0;S<d.length;S++)m+=d[S];const _=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(r,"morphTargetBaseInfluence",_),u.getUniforms().setValue(r,"morphTargetInfluences",d),u.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{const x=d===void 0?0:d.length;let y=n[h.id];if(y===void 0||y.length!==x){y=[];for(let w=0;w<x;w++)y[w]=[w,0];n[h.id]=y}for(let w=0;w<x;w++){const N=y[w];N[0]=w,N[1]=d[w]}y.sort(Mg);for(let w=0;w<8;w++)w<x&&y[w][1]?(o[w][0]=y[w][0],o[w][1]=y[w][1]):(o[w][0]=Number.MAX_SAFE_INTEGER,o[w][1]=0);o.sort(Sg);const g=h.morphAttributes.position,m=h.morphAttributes.normal;let _=0;for(let w=0;w<8;w++){const N=o[w],I=N[0],L=N[1];I!==Number.MAX_SAFE_INTEGER&&L?(g&&h.getAttribute("morphTarget"+w)!==g[I]&&h.setAttribute("morphTarget"+w,g[I]),m&&h.getAttribute("morphNormal"+w)!==m[I]&&h.setAttribute("morphNormal"+w,m[I]),i[w]=L,_+=L):(g&&h.hasAttribute("morphTarget"+w)===!0&&h.deleteAttribute("morphTarget"+w),m&&h.hasAttribute("morphNormal"+w)===!0&&h.deleteAttribute("morphNormal"+w),i[w]=0)}const S=h.morphTargetsRelative?1:1-_;u.getUniforms().setValue(r,"morphTargetBaseInfluence",S),u.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Tg(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Wl extends Kt{constructor(e,t,n,i,s,a,o,l,c,h){if(h=h!==void 0?h:lr,h!==lr&&h!==Vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===lr&&(n=fi),n===void 0&&h===Vr&&(n=or),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ft,this.minFilter=l!==void 0?l:Ft,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Tu=new Kt,Eu=new Wl(1,1);Eu.compareFunction=fu;const Au=new vu,Cu=new cp,Ru=new Mu,wc=[],Tc=[],Ec=new Float32Array(16),Ac=new Float32Array(9),Cc=new Float32Array(4);function Jr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=wc[i];if(s===void 0&&(s=new Float32Array(i),wc[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Vt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Wt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ua(r,e){let t=Tc[e];t===void 0&&(t=new Int32Array(e),Tc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Eg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Ag(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;r.uniform2fv(this.addr,e),Wt(t,e)}}function Cg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;r.uniform3fv(this.addr,e),Wt(t,e)}}function Rg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;r.uniform4fv(this.addr,e),Wt(t,e)}}function Ig(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;Cc.set(n),r.uniformMatrix2fv(this.addr,!1,Cc),Wt(t,n)}}function Lg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;Ac.set(n),r.uniformMatrix3fv(this.addr,!1,Ac),Wt(t,n)}}function Pg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;Ec.set(n),r.uniformMatrix4fv(this.addr,!1,Ec),Wt(t,n)}}function Dg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Ng(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;r.uniform2iv(this.addr,e),Wt(t,e)}}function Ug(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;r.uniform3iv(this.addr,e),Wt(t,e)}}function kg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;r.uniform4iv(this.addr,e),Wt(t,e)}}function Og(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Fg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;r.uniform2uiv(this.addr,e),Wt(t,e)}}function Bg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;r.uniform3uiv(this.addr,e),Wt(t,e)}}function zg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;r.uniform4uiv(this.addr,e),Wt(t,e)}}function Hg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?Eu:Tu;t.setTexture2D(e||s,i)}function Gg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Cu,i)}function Vg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ru,i)}function Wg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Au,i)}function qg(r){switch(r){case 5126:return Eg;case 35664:return Ag;case 35665:return Cg;case 35666:return Rg;case 35674:return Ig;case 35675:return Lg;case 35676:return Pg;case 5124:case 35670:return Dg;case 35667:case 35671:return Ng;case 35668:case 35672:return Ug;case 35669:case 35673:return kg;case 5125:return Og;case 36294:return Fg;case 36295:return Bg;case 36296:return zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Hg;case 35679:case 36299:case 36307:return Gg;case 35680:case 36300:case 36308:case 36293:return Vg;case 36289:case 36303:case 36311:case 36292:return Wg}}function Xg(r,e){r.uniform1fv(this.addr,e)}function Yg(r,e){const t=Jr(e,this.size,2);r.uniform2fv(this.addr,t)}function jg(r,e){const t=Jr(e,this.size,3);r.uniform3fv(this.addr,t)}function Kg(r,e){const t=Jr(e,this.size,4);r.uniform4fv(this.addr,t)}function $g(r,e){const t=Jr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Zg(r,e){const t=Jr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Jg(r,e){const t=Jr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Qg(r,e){r.uniform1iv(this.addr,e)}function ev(r,e){r.uniform2iv(this.addr,e)}function tv(r,e){r.uniform3iv(this.addr,e)}function nv(r,e){r.uniform4iv(this.addr,e)}function iv(r,e){r.uniform1uiv(this.addr,e)}function rv(r,e){r.uniform2uiv(this.addr,e)}function sv(r,e){r.uniform3uiv(this.addr,e)}function av(r,e){r.uniform4uiv(this.addr,e)}function ov(r,e,t){const n=this.cache,i=e.length,s=Ua(t,i);Vt(n,s)||(r.uniform1iv(this.addr,s),Wt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Tu,s[a])}function lv(r,e,t){const n=this.cache,i=e.length,s=Ua(t,i);Vt(n,s)||(r.uniform1iv(this.addr,s),Wt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Cu,s[a])}function cv(r,e,t){const n=this.cache,i=e.length,s=Ua(t,i);Vt(n,s)||(r.uniform1iv(this.addr,s),Wt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Ru,s[a])}function hv(r,e,t){const n=this.cache,i=e.length,s=Ua(t,i);Vt(n,s)||(r.uniform1iv(this.addr,s),Wt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Au,s[a])}function uv(r){switch(r){case 5126:return Xg;case 35664:return Yg;case 35665:return jg;case 35666:return Kg;case 35674:return $g;case 35675:return Zg;case 35676:return Jg;case 5124:case 35670:return Qg;case 35667:case 35671:return ev;case 35668:case 35672:return tv;case 35669:case 35673:return nv;case 5125:return iv;case 36294:return rv;case 36295:return sv;case 36296:return av;case 35678:case 36198:case 36298:case 36306:case 35682:return ov;case 35679:case 36299:case 36307:return lv;case 35680:case 36300:case 36308:case 36293:return cv;case 36289:case 36303:case 36311:case 36292:return hv}}class dv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qg(t.type)}}class fv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=uv(t.type)}}class pv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Ao=/(\w+)(\])?(\[|\.)?/g;function Rc(r,e){r.seq.push(e),r.map[e.id]=e}function mv(r,e,t){const n=r.name,i=n.length;for(Ao.lastIndex=0;;){const s=Ao.exec(n),a=Ao.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Rc(t,c===void 0?new dv(o,r,e):new fv(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new pv(o),Rc(t,u)),t=u}}}class va{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);mv(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Ic(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const gv=37297;let vv=0;function xv(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function yv(r){const e=ut.getPrimaries(ut.workingColorSpace),t=ut.getPrimaries(r);let n;switch(e===t?n="":e===Ta&&t===wa?n="LinearDisplayP3ToLinearSRGB":e===wa&&t===Ta&&(n="LinearSRGBToLinearDisplayP3"),r){case $t:case Pa:return[n,"LinearTransferOETF"];case Dt:case Bl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Lc(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+xv(r.getShaderSource(e),a)}else return i}function bv(r,e){const t=yv(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function _v(r,e){let t;switch(e){case pf:t="Linear";break;case mf:t="Reinhard";break;case gf:t="OptimizedCineon";break;case eu:t="ACESFilmic";break;case xf:t="AgX";break;case vf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Sv(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ur).join(`
`)}function Mv(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ur).join(`
`)}function wv(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Tv(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Ur(r){return r!==""}function Pc(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ev=/^[ \t]*#include +<([\w\d./]+)>/gm;function ll(r){return r.replace(Ev,Cv)}const Av=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Cv(r,e){let t=Ze[e];if(t===void 0){const n=Av.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ll(t)}const Rv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nc(r){return r.replace(Rv,Iv)}function Iv(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Uc(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Lv(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Zh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Jh?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function Pv(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case zr:case Hr:e="ENVMAP_TYPE_CUBE";break;case La:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Dv(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Hr:e="ENVMAP_MODE_REFRACTION";break}return e}function Nv(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Qh:e="ENVMAP_BLENDING_MULTIPLY";break;case df:e="ENVMAP_BLENDING_MIX";break;case ff:e="ENVMAP_BLENDING_ADD";break}return e}function Uv(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function kv(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Lv(t),c=Pv(t),h=Dv(t),u=Nv(t),d=Uv(t),p=t.isWebGL2?"":Sv(t),x=Mv(t),y=wv(s),g=i.createProgram();let m,_,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Ur).join(`
`),m.length>0&&(m+=`
`),_=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Ur).join(`
`),_.length>0&&(_+=`
`)):(m=[Uc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ur).join(`
`),_=[p,Uc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bi?"#define TONE_MAPPING":"",t.toneMapping!==Bi?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Bi?_v("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,bv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ur).join(`
`)),a=ll(a),a=Pc(a,t),a=Dc(a,t),o=ll(o),o=Pc(o,t),o=Dc(o,t),a=Nc(a),o=Nc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Q0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Q0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=S+m+a,N=S+_+o,I=Ic(i,i.VERTEX_SHADER,w),L=Ic(i,i.FRAGMENT_SHADER,N);i.attachShader(g,I),i.attachShader(g,L),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function H(q){if(r.debug.checkShaderErrors){const re=i.getProgramInfoLog(g).trim(),F=i.getShaderInfoLog(I).trim(),z=i.getShaderInfoLog(L).trim();let $=!0,Q=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,I,L);else{const Z=Lc(i,I,"vertex"),ee=Lc(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+re+`
`+Z+`
`+ee)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(F===""||z==="")&&(Q=!1);Q&&(q.diagnostics={runnable:$,programLog:re,vertexShader:{log:F,prefix:m},fragmentShader:{log:z,prefix:_}})}i.deleteShader(I),i.deleteShader(L),E=new va(i,g),C=Tv(i,g)}let E;this.getUniforms=function(){return E===void 0&&H(this),E};let C;this.getAttributes=function(){return C===void 0&&H(this),C};let Y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=i.getProgramParameter(g,gv)),Y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vv++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=I,this.fragmentShader=L,this}let Ov=0;class Fv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Bv(e),t.set(e,n)),n}}class Bv{constructor(e){this.id=Ov++,this.code=e,this.usedTimes=0}}function zv(r,e,t,n,i,s,a){const o=new Hl,l=new Fv,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return E===0?"uv":`uv${E}`}function g(E,C,Y,q,re){const F=q.fog,z=re.geometry,$=E.isMeshStandardMaterial?q.environment:null,Q=(E.isMeshStandardMaterial?t:e).get(E.envMap||$),Z=Q&&Q.mapping===La?Q.image.height:null,ee=x[E.type];E.precision!==null&&(p=i.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const J=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ue=J!==void 0?J.length:0;let fe=0;z.morphAttributes.position!==void 0&&(fe=1),z.morphAttributes.normal!==void 0&&(fe=2),z.morphAttributes.color!==void 0&&(fe=3);let j,ne,be,Ce;if(ee){const rn=qn[ee];j=rn.vertexShader,ne=rn.fragmentShader}else j=E.vertexShader,ne=E.fragmentShader,l.update(E),be=l.getVertexShaderID(E),Ce=l.getFragmentShaderID(E);const we=r.getRenderTarget(),Ve=re.isInstancedMesh===!0,Be=re.isBatchedMesh===!0,Ue=!!E.map,at=!!E.matcap,G=!!Q,Ut=!!E.aoMap,Ie=!!E.lightMap,We=!!E.bumpMap,Ee=!!E.normalMap,_t=!!E.displacementMap,Ye=!!E.emissiveMap,R=!!E.metalnessMap,T=!!E.roughnessMap,V=E.anisotropy>0,le=E.clearcoat>0,se=E.iridescence>0,ce=E.sheen>0,Ae=E.transmission>0,ge=V&&!!E.anisotropyMap,Me=le&&!!E.clearcoatMap,Le=le&&!!E.clearcoatNormalMap,qe=le&&!!E.clearcoatRoughnessMap,ae=se&&!!E.iridescenceMap,pt=se&&!!E.iridescenceThicknessMap,rt=ce&&!!E.sheenColorMap,Xe=ce&&!!E.sheenRoughnessMap,De=!!E.specularMap,Te=!!E.specularColorMap,$e=!!E.specularIntensityMap,dt=Ae&&!!E.transmissionMap,It=Ae&&!!E.thicknessMap,Qe=!!E.gradientMap,pe=!!E.alphaMap,U=E.alphaTest>0,ve=!!E.alphaHash,xe=!!E.extensions,ze=!!z.attributes.uv1,ke=!!z.attributes.uv2,xt=!!z.attributes.uv3;let yt=Bi;return E.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(yt=r.toneMapping),{isWebGL2:h,shaderID:ee,shaderType:E.type,shaderName:E.name,vertexShader:j,fragmentShader:ne,defines:E.defines,customVertexShaderID:be,customFragmentShaderID:Ce,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Be,instancing:Ve,instancingColor:Ve&&re.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:we===null?r.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:$t,map:Ue,matcap:at,envMap:G,envMapMode:G&&Q.mapping,envMapCubeUVHeight:Z,aoMap:Ut,lightMap:Ie,bumpMap:We,normalMap:Ee,displacementMap:d&&_t,emissiveMap:Ye,normalMapObjectSpace:Ee&&E.normalMapType===Uf,normalMapTangentSpace:Ee&&E.normalMapType===du,metalnessMap:R,roughnessMap:T,anisotropy:V,anisotropyMap:ge,clearcoat:le,clearcoatMap:Me,clearcoatNormalMap:Le,clearcoatRoughnessMap:qe,iridescence:se,iridescenceMap:ae,iridescenceThicknessMap:pt,sheen:ce,sheenColorMap:rt,sheenRoughnessMap:Xe,specularMap:De,specularColorMap:Te,specularIntensityMap:$e,transmission:Ae,transmissionMap:dt,thicknessMap:It,gradientMap:Qe,opaque:E.transparent===!1&&E.blending===kr,alphaMap:pe,alphaTest:U,alphaHash:ve,combine:E.combine,mapUv:Ue&&y(E.map.channel),aoMapUv:Ut&&y(E.aoMap.channel),lightMapUv:Ie&&y(E.lightMap.channel),bumpMapUv:We&&y(E.bumpMap.channel),normalMapUv:Ee&&y(E.normalMap.channel),displacementMapUv:_t&&y(E.displacementMap.channel),emissiveMapUv:Ye&&y(E.emissiveMap.channel),metalnessMapUv:R&&y(E.metalnessMap.channel),roughnessMapUv:T&&y(E.roughnessMap.channel),anisotropyMapUv:ge&&y(E.anisotropyMap.channel),clearcoatMapUv:Me&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:Le&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qe&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&y(E.sheenRoughnessMap.channel),specularMapUv:De&&y(E.specularMap.channel),specularColorMapUv:Te&&y(E.specularColorMap.channel),specularIntensityMapUv:$e&&y(E.specularIntensityMap.channel),transmissionMapUv:dt&&y(E.transmissionMap.channel),thicknessMapUv:It&&y(E.thicknessMap.channel),alphaMapUv:pe&&y(E.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Ee||V),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:ze,vertexUv2s:ke,vertexUv3s:xt,pointsUvs:re.isPoints===!0&&!!z.attributes.uv&&(Ue||pe),fog:!!F,useFog:E.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:re.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:fe,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&Y.length>0,shadowMapType:r.shadowMap.type,toneMapping:yt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Ue&&E.map.isVideoTexture===!0&&ut.getTransfer(E.map.colorSpace)===St,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Hn,flipSided:E.side===dn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:xe&&E.extensions.derivatives===!0,extensionFragDepth:xe&&E.extensions.fragDepth===!0,extensionDrawBuffers:xe&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:xe&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xe&&E.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function m(E){const C=[];if(E.shaderID?C.push(E.shaderID):(C.push(E.customVertexShaderID),C.push(E.customFragmentShaderID)),E.defines!==void 0)for(const Y in E.defines)C.push(Y),C.push(E.defines[Y]);return E.isRawShaderMaterial===!1&&(_(C,E),S(C,E),C.push(r.outputColorSpace)),C.push(E.customProgramCacheKey),C.join()}function _(E,C){E.push(C.precision),E.push(C.outputColorSpace),E.push(C.envMapMode),E.push(C.envMapCubeUVHeight),E.push(C.mapUv),E.push(C.alphaMapUv),E.push(C.lightMapUv),E.push(C.aoMapUv),E.push(C.bumpMapUv),E.push(C.normalMapUv),E.push(C.displacementMapUv),E.push(C.emissiveMapUv),E.push(C.metalnessMapUv),E.push(C.roughnessMapUv),E.push(C.anisotropyMapUv),E.push(C.clearcoatMapUv),E.push(C.clearcoatNormalMapUv),E.push(C.clearcoatRoughnessMapUv),E.push(C.iridescenceMapUv),E.push(C.iridescenceThicknessMapUv),E.push(C.sheenColorMapUv),E.push(C.sheenRoughnessMapUv),E.push(C.specularMapUv),E.push(C.specularColorMapUv),E.push(C.specularIntensityMapUv),E.push(C.transmissionMapUv),E.push(C.thicknessMapUv),E.push(C.combine),E.push(C.fogExp2),E.push(C.sizeAttenuation),E.push(C.morphTargetsCount),E.push(C.morphAttributeCount),E.push(C.numDirLights),E.push(C.numPointLights),E.push(C.numSpotLights),E.push(C.numSpotLightMaps),E.push(C.numHemiLights),E.push(C.numRectAreaLights),E.push(C.numDirLightShadows),E.push(C.numPointLightShadows),E.push(C.numSpotLightShadows),E.push(C.numSpotLightShadowsWithMaps),E.push(C.numLightProbes),E.push(C.shadowMapType),E.push(C.toneMapping),E.push(C.numClippingPlanes),E.push(C.numClipIntersection),E.push(C.depthPacking)}function S(E,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.matcap&&o.enable(4),C.envMap&&o.enable(5),C.normalMapObjectSpace&&o.enable(6),C.normalMapTangentSpace&&o.enable(7),C.clearcoat&&o.enable(8),C.iridescence&&o.enable(9),C.alphaTest&&o.enable(10),C.vertexColors&&o.enable(11),C.vertexAlphas&&o.enable(12),C.vertexUv1s&&o.enable(13),C.vertexUv2s&&o.enable(14),C.vertexUv3s&&o.enable(15),C.vertexTangents&&o.enable(16),C.anisotropy&&o.enable(17),C.alphaHash&&o.enable(18),C.batching&&o.enable(19),E.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.useLegacyLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function w(E){const C=x[E.type];let Y;if(C){const q=qn[C];Y=Sp.clone(q.uniforms)}else Y=E.uniforms;return Y}function N(E,C){let Y;for(let q=0,re=c.length;q<re;q++){const F=c[q];if(F.cacheKey===C){Y=F,++Y.usedTimes;break}}return Y===void 0&&(Y=new kv(r,C,E,s),c.push(Y)),Y}function I(E){if(--E.usedTimes===0){const C=c.indexOf(E);c[C]=c[c.length-1],c.pop(),E.destroy()}}function L(E){l.remove(E)}function H(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:w,acquireProgram:N,releaseProgram:I,releaseShaderCache:L,programs:c,dispose:H}}function Hv(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Gv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function kc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Oc(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,p,x,y,g){let m=r[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:p,groupOrder:x,renderOrder:u.renderOrder,z:y,group:g},r[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=p,m.groupOrder=x,m.renderOrder=u.renderOrder,m.z=y,m.group=g),e++,m}function o(u,d,p,x,y,g){const m=a(u,d,p,x,y,g);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):t.push(m)}function l(u,d,p,x,y,g){const m=a(u,d,p,x,y,g);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):t.unshift(m)}function c(u,d){t.length>1&&t.sort(u||Gv),n.length>1&&n.sort(d||kc),i.length>1&&i.sort(d||kc)}function h(){for(let u=e,d=r.length;u<d;u++){const p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function Vv(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Oc,r.set(n,[a])):i>=s.length?(a=new Oc,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Wv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ne};break;case"SpotLight":t={position:new O,direction:new O,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new O,halfWidth:new O,halfHeight:new O};break}return r[e.id]=t,t}}}function qv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Xv=0;function Yv(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function jv(r,e){const t=new Wv,n=qv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new O);const s=new O,a=new nt,o=new nt;function l(h,u){let d=0,p=0,x=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let y=0,g=0,m=0,_=0,S=0,w=0,N=0,I=0,L=0,H=0,E=0;h.sort(Yv);const C=u===!0?Math.PI:1;for(let q=0,re=h.length;q<re;q++){const F=h[q],z=F.color,$=F.intensity,Q=F.distance,Z=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)d+=z.r*$*C,p+=z.g*$*C,x+=z.b*$*C;else if(F.isLightProbe){for(let ee=0;ee<9;ee++)i.probe[ee].addScaledVector(F.sh.coefficients[ee],$);E++}else if(F.isDirectionalLight){const ee=t.get(F);if(ee.color.copy(F.color).multiplyScalar(F.intensity*C),F.castShadow){const J=F.shadow,ue=n.get(F);ue.shadowBias=J.bias,ue.shadowNormalBias=J.normalBias,ue.shadowRadius=J.radius,ue.shadowMapSize=J.mapSize,i.directionalShadow[y]=ue,i.directionalShadowMap[y]=Z,i.directionalShadowMatrix[y]=F.shadow.matrix,w++}i.directional[y]=ee,y++}else if(F.isSpotLight){const ee=t.get(F);ee.position.setFromMatrixPosition(F.matrixWorld),ee.color.copy(z).multiplyScalar($*C),ee.distance=Q,ee.coneCos=Math.cos(F.angle),ee.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),ee.decay=F.decay,i.spot[m]=ee;const J=F.shadow;if(F.map&&(i.spotLightMap[L]=F.map,L++,J.updateMatrices(F),F.castShadow&&H++),i.spotLightMatrix[m]=J.matrix,F.castShadow){const ue=n.get(F);ue.shadowBias=J.bias,ue.shadowNormalBias=J.normalBias,ue.shadowRadius=J.radius,ue.shadowMapSize=J.mapSize,i.spotShadow[m]=ue,i.spotShadowMap[m]=Z,I++}m++}else if(F.isRectAreaLight){const ee=t.get(F);ee.color.copy(z).multiplyScalar($),ee.halfWidth.set(F.width*.5,0,0),ee.halfHeight.set(0,F.height*.5,0),i.rectArea[_]=ee,_++}else if(F.isPointLight){const ee=t.get(F);if(ee.color.copy(F.color).multiplyScalar(F.intensity*C),ee.distance=F.distance,ee.decay=F.decay,F.castShadow){const J=F.shadow,ue=n.get(F);ue.shadowBias=J.bias,ue.shadowNormalBias=J.normalBias,ue.shadowRadius=J.radius,ue.shadowMapSize=J.mapSize,ue.shadowCameraNear=J.camera.near,ue.shadowCameraFar=J.camera.far,i.pointShadow[g]=ue,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=F.shadow.matrix,N++}i.point[g]=ee,g++}else if(F.isHemisphereLight){const ee=t.get(F);ee.skyColor.copy(F.color).multiplyScalar($*C),ee.groundColor.copy(F.groundColor).multiplyScalar($*C),i.hemi[S]=ee,S++}}_>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=x;const Y=i.hash;(Y.directionalLength!==y||Y.pointLength!==g||Y.spotLength!==m||Y.rectAreaLength!==_||Y.hemiLength!==S||Y.numDirectionalShadows!==w||Y.numPointShadows!==N||Y.numSpotShadows!==I||Y.numSpotMaps!==L||Y.numLightProbes!==E)&&(i.directional.length=y,i.spot.length=m,i.rectArea.length=_,i.point.length=g,i.hemi.length=S,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=N,i.pointShadowMap.length=N,i.spotShadow.length=I,i.spotShadowMap.length=I,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=N,i.spotLightMatrix.length=I+L-H,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=H,i.numLightProbes=E,Y.directionalLength=y,Y.pointLength=g,Y.spotLength=m,Y.rectAreaLength=_,Y.hemiLength=S,Y.numDirectionalShadows=w,Y.numPointShadows=N,Y.numSpotShadows=I,Y.numSpotMaps=L,Y.numLightProbes=E,i.version=Xv++)}function c(h,u){let d=0,p=0,x=0,y=0,g=0;const m=u.matrixWorldInverse;for(let _=0,S=h.length;_<S;_++){const w=h[_];if(w.isDirectionalLight){const N=i.directional[d];N.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),N.direction.sub(s),N.direction.transformDirection(m),d++}else if(w.isSpotLight){const N=i.spot[x];N.position.setFromMatrixPosition(w.matrixWorld),N.position.applyMatrix4(m),N.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),N.direction.sub(s),N.direction.transformDirection(m),x++}else if(w.isRectAreaLight){const N=i.rectArea[y];N.position.setFromMatrixPosition(w.matrixWorld),N.position.applyMatrix4(m),o.identity(),a.copy(w.matrixWorld),a.premultiply(m),o.extractRotation(a),N.halfWidth.set(w.width*.5,0,0),N.halfHeight.set(0,w.height*.5,0),N.halfWidth.applyMatrix4(o),N.halfHeight.applyMatrix4(o),y++}else if(w.isPointLight){const N=i.point[p];N.position.setFromMatrixPosition(w.matrixWorld),N.position.applyMatrix4(m),p++}else if(w.isHemisphereLight){const N=i.hemi[g];N.direction.setFromMatrixPosition(w.matrixWorld),N.direction.transformDirection(m),g++}}}return{setup:l,setupView:c,state:i}}function Fc(r,e){const t=new jv(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Kv(r,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Fc(r,e),t.set(s,[l])):a>=o.length?(l=new Fc(r,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class $v extends $n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Df,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zv extends $n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Jv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function e2(r,e,t){let n=new Gl;const i=new st,s=new st,a=new vt,o=new $v({depthPacking:Nf}),l=new Zv,c={},h=t.maxTextureSize,u={[xi]:dn,[dn]:xi,[Hn]:Hn},d=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:Jv,fragmentShader:Qv}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const x=new kn;x.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ft(x,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zh;let m=this.type;this.render=function(I,L,H){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||I.length===0)return;const E=r.getRenderTarget(),C=r.getActiveCubeFace(),Y=r.getActiveMipmapLevel(),q=r.state;q.setBlending(Fi),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const re=m!==ui&&this.type===ui,F=m===ui&&this.type!==ui;for(let z=0,$=I.length;z<$;z++){const Q=I[z],Z=Q.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;i.copy(Z.mapSize);const ee=Z.getFrameExtents();if(i.multiply(ee),s.copy(Z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ee.x),i.x=s.x*ee.x,Z.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ee.y),i.y=s.y*ee.y,Z.mapSize.y=s.y)),Z.map===null||re===!0||F===!0){const ue=this.type!==ui?{minFilter:Ft,magFilter:Ft}:{};Z.map!==null&&Z.map.dispose(),Z.map=new yi(i.x,i.y,ue),Z.map.texture.name=Q.name+".shadowMap",Z.camera.updateProjectionMatrix()}r.setRenderTarget(Z.map),r.clear();const J=Z.getViewportCount();for(let ue=0;ue<J;ue++){const fe=Z.getViewport(ue);a.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),q.viewport(a),Z.updateMatrices(Q,ue),n=Z.getFrustum(),w(L,H,Z.camera,Q,this.type)}Z.isPointLightShadow!==!0&&this.type===ui&&_(Z,H),Z.needsUpdate=!1}m=this.type,g.needsUpdate=!1,r.setRenderTarget(E,C,Y)};function _(I,L){const H=e.update(y);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new yi(i.x,i.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(L,null,H,d,y,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(L,null,H,p,y,null)}function S(I,L,H,E){let C=null;const Y=H.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(Y!==void 0)C=Y;else if(C=H.isPointLight===!0?l:o,r.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const q=C.uuid,re=L.uuid;let F=c[q];F===void 0&&(F={},c[q]=F);let z=F[re];z===void 0&&(z=C.clone(),F[re]=z,L.addEventListener("dispose",N)),C=z}if(C.visible=L.visible,C.wireframe=L.wireframe,E===ui?C.side=L.shadowSide!==null?L.shadowSide:L.side:C.side=L.shadowSide!==null?L.shadowSide:u[L.side],C.alphaMap=L.alphaMap,C.alphaTest=L.alphaTest,C.map=L.map,C.clipShadows=L.clipShadows,C.clippingPlanes=L.clippingPlanes,C.clipIntersection=L.clipIntersection,C.displacementMap=L.displacementMap,C.displacementScale=L.displacementScale,C.displacementBias=L.displacementBias,C.wireframeLinewidth=L.wireframeLinewidth,C.linewidth=L.linewidth,H.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const q=r.properties.get(C);q.light=H}return C}function w(I,L,H,E,C){if(I.visible===!1)return;if(I.layers.test(L.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&C===ui)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,I.matrixWorld);const re=e.update(I),F=I.material;if(Array.isArray(F)){const z=re.groups;for(let $=0,Q=z.length;$<Q;$++){const Z=z[$],ee=F[Z.materialIndex];if(ee&&ee.visible){const J=S(I,ee,E,C);I.onBeforeShadow(r,I,L,H,re,J,Z),r.renderBufferDirect(H,null,re,J,I,Z),I.onAfterShadow(r,I,L,H,re,J,Z)}}}else if(F.visible){const z=S(I,F,E,C);I.onBeforeShadow(r,I,L,H,re,z,null),r.renderBufferDirect(H,null,re,z,I,null),I.onAfterShadow(r,I,L,H,re,z,null)}}const q=I.children;for(let re=0,F=q.length;re<F;re++)w(q[re],L,H,E,C)}function N(I){I.target.removeEventListener("dispose",N);for(const H in c){const E=c[H],C=I.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}function t2(r,e,t){const n=t.isWebGL2;function i(){let U=!1;const ve=new vt;let xe=null;const ze=new vt(0,0,0,0);return{setMask:function(ke){xe!==ke&&!U&&(r.colorMask(ke,ke,ke,ke),xe=ke)},setLocked:function(ke){U=ke},setClear:function(ke,xt,yt,Xt,rn){rn===!0&&(ke*=Xt,xt*=Xt,yt*=Xt),ve.set(ke,xt,yt,Xt),ze.equals(ve)===!1&&(r.clearColor(ke,xt,yt,Xt),ze.copy(ve))},reset:function(){U=!1,xe=null,ze.set(-1,0,0,0)}}}function s(){let U=!1,ve=null,xe=null,ze=null;return{setTest:function(ke){ke?Be(r.DEPTH_TEST):Ue(r.DEPTH_TEST)},setMask:function(ke){ve!==ke&&!U&&(r.depthMask(ke),ve=ke)},setFunc:function(ke){if(xe!==ke){switch(ke){case sf:r.depthFunc(r.NEVER);break;case af:r.depthFunc(r.ALWAYS);break;case of:r.depthFunc(r.LESS);break;case ba:r.depthFunc(r.LEQUAL);break;case lf:r.depthFunc(r.EQUAL);break;case cf:r.depthFunc(r.GEQUAL);break;case hf:r.depthFunc(r.GREATER);break;case uf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}xe=ke}},setLocked:function(ke){U=ke},setClear:function(ke){ze!==ke&&(r.clearDepth(ke),ze=ke)},reset:function(){U=!1,ve=null,xe=null,ze=null}}}function a(){let U=!1,ve=null,xe=null,ze=null,ke=null,xt=null,yt=null,Xt=null,rn=null;return{setTest:function(bt){U||(bt?Be(r.STENCIL_TEST):Ue(r.STENCIL_TEST))},setMask:function(bt){ve!==bt&&!U&&(r.stencilMask(bt),ve=bt)},setFunc:function(bt,sn,Wn){(xe!==bt||ze!==sn||ke!==Wn)&&(r.stencilFunc(bt,sn,Wn),xe=bt,ze=sn,ke=Wn)},setOp:function(bt,sn,Wn){(xt!==bt||yt!==sn||Xt!==Wn)&&(r.stencilOp(bt,sn,Wn),xt=bt,yt=sn,Xt=Wn)},setLocked:function(bt){U=bt},setClear:function(bt){rn!==bt&&(r.clearStencil(bt),rn=bt)},reset:function(){U=!1,ve=null,xe=null,ze=null,ke=null,xt=null,yt=null,Xt=null,rn=null}}}const o=new i,l=new s,c=new a,h=new WeakMap,u=new WeakMap;let d={},p={},x=new WeakMap,y=[],g=null,m=!1,_=null,S=null,w=null,N=null,I=null,L=null,H=null,E=new Ne(0,0,0),C=0,Y=!1,q=null,re=null,F=null,z=null,$=null;const Q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,ee=0;const J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(J)[1]),Z=ee>=1):J.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Z=ee>=2);let ue=null,fe={};const j=r.getParameter(r.SCISSOR_BOX),ne=r.getParameter(r.VIEWPORT),be=new vt().fromArray(j),Ce=new vt().fromArray(ne);function we(U,ve,xe,ze){const ke=new Uint8Array(4),xt=r.createTexture();r.bindTexture(U,xt),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let yt=0;yt<xe;yt++)n&&(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)?r.texImage3D(ve,0,r.RGBA,1,1,ze,0,r.RGBA,r.UNSIGNED_BYTE,ke):r.texImage2D(ve+yt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ke);return xt}const Ve={};Ve[r.TEXTURE_2D]=we(r.TEXTURE_2D,r.TEXTURE_2D,1),Ve[r.TEXTURE_CUBE_MAP]=we(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ve[r.TEXTURE_2D_ARRAY]=we(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ve[r.TEXTURE_3D]=we(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Be(r.DEPTH_TEST),l.setFunc(ba),Ye(!1),R(b0),Be(r.CULL_FACE),Ee(Fi);function Be(U){d[U]!==!0&&(r.enable(U),d[U]=!0)}function Ue(U){d[U]!==!1&&(r.disable(U),d[U]=!1)}function at(U,ve){return p[U]!==ve?(r.bindFramebuffer(U,ve),p[U]=ve,n&&(U===r.DRAW_FRAMEBUFFER&&(p[r.FRAMEBUFFER]=ve),U===r.FRAMEBUFFER&&(p[r.DRAW_FRAMEBUFFER]=ve)),!0):!1}function G(U,ve){let xe=y,ze=!1;if(U)if(xe=x.get(ve),xe===void 0&&(xe=[],x.set(ve,xe)),U.isWebGLMultipleRenderTargets){const ke=U.texture;if(xe.length!==ke.length||xe[0]!==r.COLOR_ATTACHMENT0){for(let xt=0,yt=ke.length;xt<yt;xt++)xe[xt]=r.COLOR_ATTACHMENT0+xt;xe.length=ke.length,ze=!0}}else xe[0]!==r.COLOR_ATTACHMENT0&&(xe[0]=r.COLOR_ATTACHMENT0,ze=!0);else xe[0]!==r.BACK&&(xe[0]=r.BACK,ze=!0);ze&&(t.isWebGL2?r.drawBuffers(xe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(xe))}function Ut(U){return g!==U?(r.useProgram(U),g=U,!0):!1}const Ie={[rr]:r.FUNC_ADD,[Vd]:r.FUNC_SUBTRACT,[Wd]:r.FUNC_REVERSE_SUBTRACT};if(n)Ie[w0]=r.MIN,Ie[T0]=r.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(Ie[w0]=U.MIN_EXT,Ie[T0]=U.MAX_EXT)}const We={[qd]:r.ZERO,[Xd]:r.ONE,[Yd]:r.SRC_COLOR,[Qo]:r.SRC_ALPHA,[Qd]:r.SRC_ALPHA_SATURATE,[Zd]:r.DST_COLOR,[Kd]:r.DST_ALPHA,[jd]:r.ONE_MINUS_SRC_COLOR,[el]:r.ONE_MINUS_SRC_ALPHA,[Jd]:r.ONE_MINUS_DST_COLOR,[$d]:r.ONE_MINUS_DST_ALPHA,[ef]:r.CONSTANT_COLOR,[tf]:r.ONE_MINUS_CONSTANT_COLOR,[nf]:r.CONSTANT_ALPHA,[rf]:r.ONE_MINUS_CONSTANT_ALPHA};function Ee(U,ve,xe,ze,ke,xt,yt,Xt,rn,bt){if(U===Fi){m===!0&&(Ue(r.BLEND),m=!1);return}if(m===!1&&(Be(r.BLEND),m=!0),U!==Gd){if(U!==_||bt!==Y){if((S!==rr||I!==rr)&&(r.blendEquation(r.FUNC_ADD),S=rr,I=rr),bt)switch(U){case kr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case _0:r.blendFunc(r.ONE,r.ONE);break;case S0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case M0:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case kr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case _0:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case S0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case M0:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}w=null,N=null,L=null,H=null,E.set(0,0,0),C=0,_=U,Y=bt}return}ke=ke||ve,xt=xt||xe,yt=yt||ze,(ve!==S||ke!==I)&&(r.blendEquationSeparate(Ie[ve],Ie[ke]),S=ve,I=ke),(xe!==w||ze!==N||xt!==L||yt!==H)&&(r.blendFuncSeparate(We[xe],We[ze],We[xt],We[yt]),w=xe,N=ze,L=xt,H=yt),(Xt.equals(E)===!1||rn!==C)&&(r.blendColor(Xt.r,Xt.g,Xt.b,rn),E.copy(Xt),C=rn),_=U,Y=!1}function _t(U,ve){U.side===Hn?Ue(r.CULL_FACE):Be(r.CULL_FACE);let xe=U.side===dn;ve&&(xe=!xe),Ye(xe),U.blending===kr&&U.transparent===!1?Ee(Fi):Ee(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),o.setMask(U.colorWrite);const ze=U.stencilWrite;c.setTest(ze),ze&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),V(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Be(r.SAMPLE_ALPHA_TO_COVERAGE):Ue(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(U){q!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),q=U)}function R(U){U!==zd?(Be(r.CULL_FACE),U!==re&&(U===b0?r.cullFace(r.BACK):U===Hd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ue(r.CULL_FACE),re=U}function T(U){U!==F&&(Z&&r.lineWidth(U),F=U)}function V(U,ve,xe){U?(Be(r.POLYGON_OFFSET_FILL),(z!==ve||$!==xe)&&(r.polygonOffset(ve,xe),z=ve,$=xe)):Ue(r.POLYGON_OFFSET_FILL)}function le(U){U?Be(r.SCISSOR_TEST):Ue(r.SCISSOR_TEST)}function se(U){U===void 0&&(U=r.TEXTURE0+Q-1),ue!==U&&(r.activeTexture(U),ue=U)}function ce(U,ve,xe){xe===void 0&&(ue===null?xe=r.TEXTURE0+Q-1:xe=ue);let ze=fe[xe];ze===void 0&&(ze={type:void 0,texture:void 0},fe[xe]=ze),(ze.type!==U||ze.texture!==ve)&&(ue!==xe&&(r.activeTexture(xe),ue=xe),r.bindTexture(U,ve||Ve[U]),ze.type=U,ze.texture=ve)}function Ae(){const U=fe[ue];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ge(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function qe(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Xe(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $e(U){be.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),be.copy(U))}function dt(U){Ce.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),Ce.copy(U))}function It(U,ve){let xe=u.get(ve);xe===void 0&&(xe=new WeakMap,u.set(ve,xe));let ze=xe.get(U);ze===void 0&&(ze=r.getUniformBlockIndex(ve,U.name),xe.set(U,ze))}function Qe(U,ve){const ze=u.get(ve).get(U);h.get(ve)!==ze&&(r.uniformBlockBinding(ve,ze,U.__bindingPointIndex),h.set(ve,ze))}function pe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},ue=null,fe={},p={},x=new WeakMap,y=[],g=null,m=!1,_=null,S=null,w=null,N=null,I=null,L=null,H=null,E=new Ne(0,0,0),C=0,Y=!1,q=null,re=null,F=null,z=null,$=null,be.set(0,0,r.canvas.width,r.canvas.height),Ce.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Be,disable:Ue,bindFramebuffer:at,drawBuffers:G,useProgram:Ut,setBlending:Ee,setMaterial:_t,setFlipSided:Ye,setCullFace:R,setLineWidth:T,setPolygonOffset:V,setScissorTest:le,activeTexture:se,bindTexture:ce,unbindTexture:Ae,compressedTexImage2D:ge,compressedTexImage3D:Me,texImage2D:De,texImage3D:Te,updateUBOMapping:It,uniformBlockBinding:Qe,texStorage2D:rt,texStorage3D:Xe,texSubImage2D:Le,texSubImage3D:qe,compressedTexSubImage2D:ae,compressedTexSubImage3D:pt,scissor:$e,viewport:dt,reset:pe}}function n2(r,e,t,n,i,s,a){const o=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,T){return p?new OffscreenCanvas(R,T):ws("canvas")}function y(R,T,V,le){let se=1;if((R.width>le||R.height>le)&&(se=le/Math.max(R.width,R.height)),se<1||T===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ce=T?Aa:Math.floor,Ae=ce(se*R.width),ge=ce(se*R.height);u===void 0&&(u=x(Ae,ge));const Me=V?x(Ae,ge):u;return Me.width=Ae,Me.height=ge,Me.getContext("2d").drawImage(R,0,0,Ae,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Ae+"x"+ge+")."),Me}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function g(R){return ol(R.width)&&ol(R.height)}function m(R){return o?!1:R.wrapS!==Ln||R.wrapT!==Ln||R.minFilter!==Ft&&R.minFilter!==en}function _(R,T){return R.generateMipmaps&&T&&R.minFilter!==Ft&&R.minFilter!==en}function S(R){r.generateMipmap(R)}function w(R,T,V,le,se=!1){if(o===!1)return T;if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ce=T;if(T===r.RED&&(V===r.FLOAT&&(ce=r.R32F),V===r.HALF_FLOAT&&(ce=r.R16F),V===r.UNSIGNED_BYTE&&(ce=r.R8)),T===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(ce=r.R8UI),V===r.UNSIGNED_SHORT&&(ce=r.R16UI),V===r.UNSIGNED_INT&&(ce=r.R32UI),V===r.BYTE&&(ce=r.R8I),V===r.SHORT&&(ce=r.R16I),V===r.INT&&(ce=r.R32I)),T===r.RG&&(V===r.FLOAT&&(ce=r.RG32F),V===r.HALF_FLOAT&&(ce=r.RG16F),V===r.UNSIGNED_BYTE&&(ce=r.RG8)),T===r.RGBA){const Ae=se?Ma:ut.getTransfer(le);V===r.FLOAT&&(ce=r.RGBA32F),V===r.HALF_FLOAT&&(ce=r.RGBA16F),V===r.UNSIGNED_BYTE&&(ce=Ae===St?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&(ce=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(ce=r.RGB5_A1)}return(ce===r.R16F||ce===r.R32F||ce===r.RG16F||ce===r.RG32F||ce===r.RGBA16F||ce===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function N(R,T,V){return _(R,V)===!0||R.isFramebufferTexture&&R.minFilter!==Ft&&R.minFilter!==en?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function I(R){return R===Ft||R===il||R===ga?r.NEAREST:r.LINEAR}function L(R){const T=R.target;T.removeEventListener("dispose",L),E(T),T.isVideoTexture&&h.delete(T)}function H(R){const T=R.target;T.removeEventListener("dispose",H),Y(T)}function E(R){const T=n.get(R);if(T.__webglInit===void 0)return;const V=R.source,le=d.get(V);if(le){const se=le[T.__cacheKey];se.usedTimes--,se.usedTimes===0&&C(R),Object.keys(le).length===0&&d.delete(V)}n.remove(R)}function C(R){const T=n.get(R);r.deleteTexture(T.__webglTexture);const V=R.source,le=d.get(V);delete le[T.__cacheKey],a.memory.textures--}function Y(R){const T=R.texture,V=n.get(R),le=n.get(T);if(le.__webglTexture!==void 0&&(r.deleteTexture(le.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(V.__webglFramebuffer[se]))for(let ce=0;ce<V.__webglFramebuffer[se].length;ce++)r.deleteFramebuffer(V.__webglFramebuffer[se][ce]);else r.deleteFramebuffer(V.__webglFramebuffer[se]);V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer[se])}else{if(Array.isArray(V.__webglFramebuffer))for(let se=0;se<V.__webglFramebuffer.length;se++)r.deleteFramebuffer(V.__webglFramebuffer[se]);else r.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&r.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let se=0;se<V.__webglColorRenderbuffer.length;se++)V.__webglColorRenderbuffer[se]&&r.deleteRenderbuffer(V.__webglColorRenderbuffer[se]);V.__webglDepthRenderbuffer&&r.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let se=0,ce=T.length;se<ce;se++){const Ae=n.get(T[se]);Ae.__webglTexture&&(r.deleteTexture(Ae.__webglTexture),a.memory.textures--),n.remove(T[se])}n.remove(T),n.remove(R)}let q=0;function re(){q=0}function F(){const R=q;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),q+=1,R}function z(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function $(R,T){const V=n.get(R);if(R.isVideoTexture&&_t(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){const le=R.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(V,R,T);return}}t.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+T)}function Q(R,T){const V=n.get(R);if(R.version>0&&V.__version!==R.version){be(V,R,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+T)}function Z(R,T){const V=n.get(R);if(R.version>0&&V.__version!==R.version){be(V,R,T);return}t.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+T)}function ee(R,T){const V=n.get(R);if(R.version>0&&V.__version!==R.version){Ce(V,R,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+T)}const J={[gn]:r.REPEAT,[Ln]:r.CLAMP_TO_EDGE,[_a]:r.MIRRORED_REPEAT},ue={[Ft]:r.NEAREST,[il]:r.NEAREST_MIPMAP_NEAREST,[ga]:r.NEAREST_MIPMAP_LINEAR,[en]:r.LINEAR,[nu]:r.LINEAR_MIPMAP_NEAREST,[hr]:r.LINEAR_MIPMAP_LINEAR},fe={[kf]:r.NEVER,[Gf]:r.ALWAYS,[Of]:r.LESS,[fu]:r.LEQUAL,[Ff]:r.EQUAL,[Hf]:r.GEQUAL,[Bf]:r.GREATER,[zf]:r.NOTEQUAL};function j(R,T,V){if(V?(r.texParameteri(R,r.TEXTURE_WRAP_S,J[T.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,J[T.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,J[T.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,ue[T.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,ue[T.minFilter])):(r.texParameteri(R,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(R,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(T.wrapS!==Ln||T.wrapT!==Ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(R,r.TEXTURE_MAG_FILTER,I(T.magFilter)),r.texParameteri(R,r.TEXTURE_MIN_FILTER,I(T.minFilter)),T.minFilter!==Ft&&T.minFilter!==en&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,fe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const le=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Ft||T.minFilter!==ga&&T.minFilter!==hr||T.type===pi&&e.has("OES_texture_float_linear")===!1||o===!1&&T.type===Gr&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(r.texParameterf(R,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function ne(R,T){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",L));const le=T.source;let se=d.get(le);se===void 0&&(se={},d.set(le,se));const ce=z(T);if(ce!==R.__cacheKey){se[ce]===void 0&&(se[ce]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,V=!0),se[ce].usedTimes++;const Ae=se[R.__cacheKey];Ae!==void 0&&(se[R.__cacheKey].usedTimes--,Ae.usedTimes===0&&C(T)),R.__cacheKey=ce,R.__webglTexture=se[ce].texture}return V}function be(R,T,V){let le=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(le=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(le=r.TEXTURE_3D);const se=ne(R,T),ce=T.source;t.bindTexture(le,R.__webglTexture,r.TEXTURE0+V);const Ae=n.get(ce);if(ce.version!==Ae.__version||se===!0){t.activeTexture(r.TEXTURE0+V);const ge=ut.getPrimaries(ut.workingColorSpace),Me=T.colorSpace===Pn?null:ut.getPrimaries(T.colorSpace),Le=T.colorSpace===Pn||ge===Me?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const qe=m(T)&&g(T.image)===!1;let ae=y(T.image,qe,!1,i.maxTextureSize);ae=Ye(T,ae);const pt=g(ae)||o,rt=s.convert(T.format,T.colorSpace);let Xe=s.convert(T.type),De=w(T.internalFormat,rt,Xe,T.colorSpace,T.isVideoTexture);j(le,T,pt);let Te;const $e=T.mipmaps,dt=o&&T.isVideoTexture!==!0&&De!==cu,It=Ae.__version===void 0||se===!0,Qe=N(T,ae,pt);if(T.isDepthTexture)De=r.DEPTH_COMPONENT,o?T.type===pi?De=r.DEPTH_COMPONENT32F:T.type===fi?De=r.DEPTH_COMPONENT24:T.type===or?De=r.DEPTH24_STENCIL8:De=r.DEPTH_COMPONENT16:T.type===pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===lr&&De===r.DEPTH_COMPONENT&&T.type!==Ol&&T.type!==fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=fi,Xe=s.convert(T.type)),T.format===Vr&&De===r.DEPTH_COMPONENT&&(De=r.DEPTH_STENCIL,T.type!==or&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=or,Xe=s.convert(T.type))),It&&(dt?t.texStorage2D(r.TEXTURE_2D,1,De,ae.width,ae.height):t.texImage2D(r.TEXTURE_2D,0,De,ae.width,ae.height,0,rt,Xe,null));else if(T.isDataTexture)if($e.length>0&&pt){dt&&It&&t.texStorage2D(r.TEXTURE_2D,Qe,De,$e[0].width,$e[0].height);for(let pe=0,U=$e.length;pe<U;pe++)Te=$e[pe],dt?t.texSubImage2D(r.TEXTURE_2D,pe,0,0,Te.width,Te.height,rt,Xe,Te.data):t.texImage2D(r.TEXTURE_2D,pe,De,Te.width,Te.height,0,rt,Xe,Te.data);T.generateMipmaps=!1}else dt?(It&&t.texStorage2D(r.TEXTURE_2D,Qe,De,ae.width,ae.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,ae.width,ae.height,rt,Xe,ae.data)):t.texImage2D(r.TEXTURE_2D,0,De,ae.width,ae.height,0,rt,Xe,ae.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){dt&&It&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Qe,De,$e[0].width,$e[0].height,ae.depth);for(let pe=0,U=$e.length;pe<U;pe++)Te=$e[pe],T.format!==xn?rt!==null?dt?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,Te.width,Te.height,ae.depth,rt,Te.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,pe,De,Te.width,Te.height,ae.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?t.texSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,Te.width,Te.height,ae.depth,rt,Xe,Te.data):t.texImage3D(r.TEXTURE_2D_ARRAY,pe,De,Te.width,Te.height,ae.depth,0,rt,Xe,Te.data)}else{dt&&It&&t.texStorage2D(r.TEXTURE_2D,Qe,De,$e[0].width,$e[0].height);for(let pe=0,U=$e.length;pe<U;pe++)Te=$e[pe],T.format!==xn?rt!==null?dt?t.compressedTexSubImage2D(r.TEXTURE_2D,pe,0,0,Te.width,Te.height,rt,Te.data):t.compressedTexImage2D(r.TEXTURE_2D,pe,De,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?t.texSubImage2D(r.TEXTURE_2D,pe,0,0,Te.width,Te.height,rt,Xe,Te.data):t.texImage2D(r.TEXTURE_2D,pe,De,Te.width,Te.height,0,rt,Xe,Te.data)}else if(T.isDataArrayTexture)dt?(It&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Qe,De,ae.width,ae.height,ae.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,rt,Xe,ae.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,De,ae.width,ae.height,ae.depth,0,rt,Xe,ae.data);else if(T.isData3DTexture)dt?(It&&t.texStorage3D(r.TEXTURE_3D,Qe,De,ae.width,ae.height,ae.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,rt,Xe,ae.data)):t.texImage3D(r.TEXTURE_3D,0,De,ae.width,ae.height,ae.depth,0,rt,Xe,ae.data);else if(T.isFramebufferTexture){if(It)if(dt)t.texStorage2D(r.TEXTURE_2D,Qe,De,ae.width,ae.height);else{let pe=ae.width,U=ae.height;for(let ve=0;ve<Qe;ve++)t.texImage2D(r.TEXTURE_2D,ve,De,pe,U,0,rt,Xe,null),pe>>=1,U>>=1}}else if($e.length>0&&pt){dt&&It&&t.texStorage2D(r.TEXTURE_2D,Qe,De,$e[0].width,$e[0].height);for(let pe=0,U=$e.length;pe<U;pe++)Te=$e[pe],dt?t.texSubImage2D(r.TEXTURE_2D,pe,0,0,rt,Xe,Te):t.texImage2D(r.TEXTURE_2D,pe,De,rt,Xe,Te);T.generateMipmaps=!1}else dt?(It&&t.texStorage2D(r.TEXTURE_2D,Qe,De,ae.width,ae.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,rt,Xe,ae)):t.texImage2D(r.TEXTURE_2D,0,De,rt,Xe,ae);_(T,pt)&&S(le),Ae.__version=ce.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function Ce(R,T,V){if(T.image.length!==6)return;const le=ne(R,T),se=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+V);const ce=n.get(se);if(se.version!==ce.__version||le===!0){t.activeTexture(r.TEXTURE0+V);const Ae=ut.getPrimaries(ut.workingColorSpace),ge=T.colorSpace===Pn?null:ut.getPrimaries(T.colorSpace),Me=T.colorSpace===Pn||Ae===ge?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Le=T.isCompressedTexture||T.image[0].isCompressedTexture,qe=T.image[0]&&T.image[0].isDataTexture,ae=[];for(let pe=0;pe<6;pe++)!Le&&!qe?ae[pe]=y(T.image[pe],!1,!0,i.maxCubemapSize):ae[pe]=qe?T.image[pe].image:T.image[pe],ae[pe]=Ye(T,ae[pe]);const pt=ae[0],rt=g(pt)||o,Xe=s.convert(T.format,T.colorSpace),De=s.convert(T.type),Te=w(T.internalFormat,Xe,De,T.colorSpace),$e=o&&T.isVideoTexture!==!0,dt=ce.__version===void 0||le===!0;let It=N(T,pt,rt);j(r.TEXTURE_CUBE_MAP,T,rt);let Qe;if(Le){$e&&dt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,It,Te,pt.width,pt.height);for(let pe=0;pe<6;pe++){Qe=ae[pe].mipmaps;for(let U=0;U<Qe.length;U++){const ve=Qe[U];T.format!==xn?Xe!==null?$e?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,U,0,0,ve.width,ve.height,Xe,ve.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,U,Te,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,U,0,0,ve.width,ve.height,Xe,De,ve.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,U,Te,ve.width,ve.height,0,Xe,De,ve.data)}}}else{Qe=T.mipmaps,$e&&dt&&(Qe.length>0&&It++,t.texStorage2D(r.TEXTURE_CUBE_MAP,It,Te,ae[0].width,ae[0].height));for(let pe=0;pe<6;pe++)if(qe){$e?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ae[pe].width,ae[pe].height,Xe,De,ae[pe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Te,ae[pe].width,ae[pe].height,0,Xe,De,ae[pe].data);for(let U=0;U<Qe.length;U++){const xe=Qe[U].image[pe].image;$e?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,U+1,0,0,xe.width,xe.height,Xe,De,xe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,U+1,Te,xe.width,xe.height,0,Xe,De,xe.data)}}else{$e?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Xe,De,ae[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Te,Xe,De,ae[pe]);for(let U=0;U<Qe.length;U++){const ve=Qe[U];$e?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,U+1,0,0,Xe,De,ve.image[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,U+1,Te,Xe,De,ve.image[pe])}}}_(T,rt)&&S(r.TEXTURE_CUBE_MAP),ce.__version=se.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function we(R,T,V,le,se,ce){const Ae=s.convert(V.format,V.colorSpace),ge=s.convert(V.type),Me=w(V.internalFormat,Ae,ge,V.colorSpace);if(!n.get(T).__hasExternalTextures){const qe=Math.max(1,T.width>>ce),ae=Math.max(1,T.height>>ce);se===r.TEXTURE_3D||se===r.TEXTURE_2D_ARRAY?t.texImage3D(se,ce,Me,qe,ae,T.depth,0,Ae,ge,null):t.texImage2D(se,ce,Me,qe,ae,0,Ae,ge,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),Ee(T)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,le,se,n.get(V).__webglTexture,0,We(T)):(se===r.TEXTURE_2D||se>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,le,se,n.get(V).__webglTexture,ce),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ve(R,T,V){if(r.bindRenderbuffer(r.RENDERBUFFER,R),T.depthBuffer&&!T.stencilBuffer){let le=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(V||Ee(T)){const se=T.depthTexture;se&&se.isDepthTexture&&(se.type===pi?le=r.DEPTH_COMPONENT32F:se.type===fi&&(le=r.DEPTH_COMPONENT24));const ce=We(T);Ee(T)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ce,le,T.width,T.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ce,le,T.width,T.height)}else r.renderbufferStorage(r.RENDERBUFFER,le,T.width,T.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,R)}else if(T.depthBuffer&&T.stencilBuffer){const le=We(T);V&&Ee(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,le,r.DEPTH24_STENCIL8,T.width,T.height):Ee(T)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,le,r.DEPTH24_STENCIL8,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,R)}else{const le=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let se=0;se<le.length;se++){const ce=le[se],Ae=s.convert(ce.format,ce.colorSpace),ge=s.convert(ce.type),Me=w(ce.internalFormat,Ae,ge,ce.colorSpace),Le=We(T);V&&Ee(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Le,Me,T.width,T.height):Ee(T)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Le,Me,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Me,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Be(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),$(T.depthTexture,0);const le=n.get(T.depthTexture).__webglTexture,se=We(T);if(T.depthTexture.format===lr)Ee(T)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,le,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,le,0);else if(T.depthTexture.format===Vr)Ee(T)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,le,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Ue(R){const T=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Be(T.__webglFramebuffer,R)}else if(V){T.__webglDepthbuffer=[];for(let le=0;le<6;le++)t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[le]),T.__webglDepthbuffer[le]=r.createRenderbuffer(),Ve(T.__webglDepthbuffer[le],R,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=r.createRenderbuffer(),Ve(T.__webglDepthbuffer,R,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function at(R,T,V){const le=n.get(R);T!==void 0&&we(le.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&Ue(R)}function G(R){const T=R.texture,V=n.get(R),le=n.get(T);R.addEventListener("dispose",H),R.isWebGLMultipleRenderTargets!==!0&&(le.__webglTexture===void 0&&(le.__webglTexture=r.createTexture()),le.__version=T.version,a.memory.textures++);const se=R.isWebGLCubeRenderTarget===!0,ce=R.isWebGLMultipleRenderTargets===!0,Ae=g(R)||o;if(se){V.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(o&&T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer[ge]=[];for(let Me=0;Me<T.mipmaps.length;Me++)V.__webglFramebuffer[ge][Me]=r.createFramebuffer()}else V.__webglFramebuffer[ge]=r.createFramebuffer()}else{if(o&&T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer=[];for(let ge=0;ge<T.mipmaps.length;ge++)V.__webglFramebuffer[ge]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(ce)if(i.drawBuffers){const ge=R.texture;for(let Me=0,Le=ge.length;Me<Le;Me++){const qe=n.get(ge[Me]);qe.__webglTexture===void 0&&(qe.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&Ee(R)===!1){const ge=ce?T:[T];V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Me=0;Me<ge.length;Me++){const Le=ge[Me];V.__webglColorRenderbuffer[Me]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[Me]);const qe=s.convert(Le.format,Le.colorSpace),ae=s.convert(Le.type),pt=w(Le.internalFormat,qe,ae,Le.colorSpace,R.isXRRenderTarget===!0),rt=We(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,rt,pt,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,V.__webglColorRenderbuffer[Me])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),Ve(V.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(se){t.bindTexture(r.TEXTURE_CUBE_MAP,le.__webglTexture),j(r.TEXTURE_CUBE_MAP,T,Ae);for(let ge=0;ge<6;ge++)if(o&&T.mipmaps&&T.mipmaps.length>0)for(let Me=0;Me<T.mipmaps.length;Me++)we(V.__webglFramebuffer[ge][Me],R,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Me);else we(V.__webglFramebuffer[ge],R,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);_(T,Ae)&&S(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){const ge=R.texture;for(let Me=0,Le=ge.length;Me<Le;Me++){const qe=ge[Me],ae=n.get(qe);t.bindTexture(r.TEXTURE_2D,ae.__webglTexture),j(r.TEXTURE_2D,qe,Ae),we(V.__webglFramebuffer,R,qe,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,0),_(qe,Ae)&&S(r.TEXTURE_2D)}t.unbindTexture()}else{let ge=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?ge=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ge,le.__webglTexture),j(ge,T,Ae),o&&T.mipmaps&&T.mipmaps.length>0)for(let Me=0;Me<T.mipmaps.length;Me++)we(V.__webglFramebuffer[Me],R,T,r.COLOR_ATTACHMENT0,ge,Me);else we(V.__webglFramebuffer,R,T,r.COLOR_ATTACHMENT0,ge,0);_(T,Ae)&&S(ge),t.unbindTexture()}R.depthBuffer&&Ue(R)}function Ut(R){const T=g(R)||o,V=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let le=0,se=V.length;le<se;le++){const ce=V[le];if(_(ce,T)){const Ae=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ge=n.get(ce).__webglTexture;t.bindTexture(Ae,ge),S(Ae),t.unbindTexture()}}}function Ie(R){if(o&&R.samples>0&&Ee(R)===!1){const T=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],V=R.width,le=R.height;let se=r.COLOR_BUFFER_BIT;const ce=[],Ae=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=n.get(R),Me=R.isWebGLMultipleRenderTargets===!0;if(Me)for(let Le=0;Le<T.length;Le++)t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Le=0;Le<T.length;Le++){ce.push(r.COLOR_ATTACHMENT0+Le),R.depthBuffer&&ce.push(Ae);const qe=ge.__ignoreDepthValues!==void 0?ge.__ignoreDepthValues:!1;if(qe===!1&&(R.depthBuffer&&(se|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&(se|=r.STENCIL_BUFFER_BIT)),Me&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ge.__webglColorRenderbuffer[Le]),qe===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Ae]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Ae])),Me){const ae=n.get(T[Le]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ae,0)}r.blitFramebuffer(0,0,V,le,0,0,V,le,se,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Me)for(let Le=0;Le<T.length;Le++){t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.RENDERBUFFER,ge.__webglColorRenderbuffer[Le]);const qe=n.get(T[Le]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.TEXTURE_2D,qe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}}function We(R){return Math.min(i.maxSamples,R.samples)}function Ee(R){const T=n.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function _t(R){const T=a.render.frame;h.get(R)!==T&&(h.set(R,T),R.update())}function Ye(R,T){const V=R.colorSpace,le=R.format,se=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===al||V!==$t&&V!==Pn&&(ut.getTransfer(V)===St?o===!1?e.has("EXT_sRGB")===!0&&le===xn?(R.format=al,R.minFilter=en,R.generateMipmaps=!1):T=mu.sRGBToLinear(T):(le!==xn||se!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),T}this.allocateTextureUnit=F,this.resetTextureUnits=re,this.setTexture2D=$,this.setTexture2DArray=Q,this.setTexture3D=Z,this.setTextureCube=ee,this.rebindTextures=at,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Ee}function i2(r,e,t){const n=t.isWebGL2;function i(s,a=Pn){let o;const l=ut.getTransfer(a);if(s===zi)return r.UNSIGNED_BYTE;if(s===ru)return r.UNSIGNED_SHORT_4_4_4_4;if(s===su)return r.UNSIGNED_SHORT_5_5_5_1;if(s===bf)return r.BYTE;if(s===_f)return r.SHORT;if(s===Ol)return r.UNSIGNED_SHORT;if(s===iu)return r.INT;if(s===fi)return r.UNSIGNED_INT;if(s===pi)return r.FLOAT;if(s===Gr)return n?r.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Sf)return r.ALPHA;if(s===xn)return r.RGBA;if(s===Mf)return r.LUMINANCE;if(s===wf)return r.LUMINANCE_ALPHA;if(s===lr)return r.DEPTH_COMPONENT;if(s===Vr)return r.DEPTH_STENCIL;if(s===al)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Tf)return r.RED;if(s===au)return r.RED_INTEGER;if(s===Ef)return r.RG;if(s===ou)return r.RG_INTEGER;if(s===lu)return r.RGBA_INTEGER;if(s===Qa||s===eo||s===to||s===no)if(l===St)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Qa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===eo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===to)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===no)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Qa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===eo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===to)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===no)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===A0||s===C0||s===R0||s===I0)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===A0)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===C0)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===R0)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===I0)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===cu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===L0||s===P0)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===L0)return l===St?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===P0)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===D0||s===N0||s===U0||s===k0||s===O0||s===F0||s===B0||s===z0||s===H0||s===G0||s===V0||s===W0||s===q0||s===X0)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===D0)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===N0)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===U0)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===k0)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===O0)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===F0)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===B0)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===z0)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===H0)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===G0)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===V0)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===W0)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===q0)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===X0)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===io||s===Y0||s===j0)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===io)return l===St?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Y0)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===j0)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Af||s===K0||s===$0||s===Z0)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===io)return o.COMPRESSED_RED_RGTC1_EXT;if(s===K0)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===$0)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Z0)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===or?n?r.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class r2 extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class gi extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const s2={type:"move"};class Co{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const g=t.getJointPose(y,n),m=this._getHandJoint(c,y);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,x=.005;c.inputState.pinching&&d>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(s2)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new gi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class a2 extends dr{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,x=null;const y=t.getContextAttributes();let g=null,m=null;const _=[],S=[],w=new st;let N=null;const I=new hn;I.layers.enable(1),I.viewport=new vt;const L=new hn;L.layers.enable(2),L.viewport=new vt;const H=[I,L],E=new r2;E.layers.enable(1),E.layers.enable(2);let C=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ne=_[j];return ne===void 0&&(ne=new Co,_[j]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(j){let ne=_[j];return ne===void 0&&(ne=new Co,_[j]=ne),ne.getGripSpace()},this.getHand=function(j){let ne=_[j];return ne===void 0&&(ne=new Co,_[j]=ne),ne.getHandSpace()};function q(j){const ne=S.indexOf(j.inputSource);if(ne===-1)return;const be=_[ne];be!==void 0&&(be.update(j.inputSource,j.frame,c||a),be.dispatchEvent({type:j.type,data:j.inputSource}))}function re(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",re),i.removeEventListener("inputsourceschange",F);for(let j=0;j<_.length;j++){const ne=S[j];ne!==null&&(S[j]=null,_[j].disconnect(ne))}C=null,Y=null,e.setRenderTarget(g),p=null,d=null,u=null,i=null,m=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",re),i.addEventListener("inputsourceschange",F),y.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(w),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ne={antialias:i.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,ne),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),m=new yi(p.framebufferWidth,p.framebufferHeight,{format:xn,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ne=null,be=null,Ce=null;y.depth&&(Ce=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=y.stencil?Vr:lr,be=y.stencil?or:fi);const we={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(we),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),m=new yi(d.textureWidth,d.textureHeight,{format:xn,type:zi,depthTexture:new Wl(d.textureWidth,d.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const Ve=e.properties.get(m);Ve.__ignoreDepthValues=d.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),fe.setContext(i),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function F(j){for(let ne=0;ne<j.removed.length;ne++){const be=j.removed[ne],Ce=S.indexOf(be);Ce>=0&&(S[Ce]=null,_[Ce].disconnect(be))}for(let ne=0;ne<j.added.length;ne++){const be=j.added[ne];let Ce=S.indexOf(be);if(Ce===-1){for(let Ve=0;Ve<_.length;Ve++)if(Ve>=S.length){S.push(be),Ce=Ve;break}else if(S[Ve]===null){S[Ve]=be,Ce=Ve;break}if(Ce===-1)break}const we=_[Ce];we&&we.connect(be)}}const z=new O,$=new O;function Q(j,ne,be){z.setFromMatrixPosition(ne.matrixWorld),$.setFromMatrixPosition(be.matrixWorld);const Ce=z.distanceTo($),we=ne.projectionMatrix.elements,Ve=be.projectionMatrix.elements,Be=we[14]/(we[10]-1),Ue=we[14]/(we[10]+1),at=(we[9]+1)/we[5],G=(we[9]-1)/we[5],Ut=(we[8]-1)/we[0],Ie=(Ve[8]+1)/Ve[0],We=Be*Ut,Ee=Be*Ie,_t=Ce/(-Ut+Ie),Ye=_t*-Ut;ne.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ye),j.translateZ(_t),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const R=Be+_t,T=Ue+_t,V=We-Ye,le=Ee+(Ce-Ye),se=at*Ue/T*R,ce=G*Ue/T*R;j.projectionMatrix.makePerspective(V,le,se,ce,R,T),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function Z(j,ne){ne===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ne.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;E.near=L.near=I.near=j.near,E.far=L.far=I.far=j.far,(C!==E.near||Y!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),C=E.near,Y=E.far);const ne=j.parent,be=E.cameras;Z(E,ne);for(let Ce=0;Ce<be.length;Ce++)Z(be[Ce],ne);be.length===2?Q(E,I,L):E.projectionMatrix.copy(I.projectionMatrix),ee(j,E,ne)};function ee(j,ne,be){be===null?j.matrix.copy(ne.matrixWorld):(j.matrix.copy(be.matrixWorld),j.matrix.invert(),j.matrix.multiply(ne.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=qr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)};let J=null;function ue(j,ne){if(h=ne.getViewerPose(c||a),x=ne,h!==null){const be=h.views;p!==null&&(e.setRenderTargetFramebuffer(m,p.framebuffer),e.setRenderTarget(m));let Ce=!1;be.length!==E.cameras.length&&(E.cameras.length=0,Ce=!0);for(let we=0;we<be.length;we++){const Ve=be[we];let Be=null;if(p!==null)Be=p.getViewport(Ve);else{const at=u.getViewSubImage(d,Ve);Be=at.viewport,we===0&&(e.setRenderTargetTextures(m,at.colorTexture,d.ignoreDepthValues?void 0:at.depthStencilTexture),e.setRenderTarget(m))}let Ue=H[we];Ue===void 0&&(Ue=new hn,Ue.layers.enable(we),Ue.viewport=new vt,H[we]=Ue),Ue.matrix.fromArray(Ve.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(Ve.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(Be.x,Be.y,Be.width,Be.height),we===0&&(E.matrix.copy(Ue.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Ce===!0&&E.cameras.push(Ue)}}for(let be=0;be<_.length;be++){const Ce=S[be],we=_[be];Ce!==null&&we!==void 0&&we.update(Ce,ne,c||a)}J&&J(j,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),x=null}const fe=new wu;fe.setAnimationLoop(ue),this.setAnimationLoop=function(j){J=j},this.dispose=function(){}}}function o2(r,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,_u(r)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,_,S,w){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),u(g,m)):m.isMeshPhongMaterial?(s(g,m),h(g,m)):m.isMeshStandardMaterial?(s(g,m),d(g,m),m.isMeshPhysicalMaterial&&p(g,m,w)):m.isMeshMatcapMaterial?(s(g,m),x(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),y(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,_,S):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===dn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===dn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(g.envMap.value=_,g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;const S=r._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*S,t(m.lightMap,g.lightMapTransform)}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,_,S){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=S*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),e.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===dn&&g.clearcoatNormalScale.value.negate())),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,m){m.matcap&&(g.matcap.value=m.matcap)}function y(g,m){const _=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function l2(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,S){const w=S.program;n.uniformBlockBinding(_,w)}function c(_,S){let w=i[_.id];w===void 0&&(x(_),w=h(_),i[_.id]=w,_.addEventListener("dispose",g));const N=S.program;n.updateUBOMapping(_,N);const I=e.render.frame;s[_.id]!==I&&(d(_),s[_.id]=I)}function h(_){const S=u();_.__bindingPointIndex=S;const w=r.createBuffer(),N=_.__size,I=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,N,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,w),w}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const S=i[_.id],w=_.uniforms,N=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let I=0,L=w.length;I<L;I++){const H=Array.isArray(w[I])?w[I]:[w[I]];for(let E=0,C=H.length;E<C;E++){const Y=H[E];if(p(Y,I,E,N)===!0){const q=Y.__offset,re=Array.isArray(Y.value)?Y.value:[Y.value];let F=0;for(let z=0;z<re.length;z++){const $=re[z],Q=y($);typeof $=="number"||typeof $=="boolean"?(Y.__data[0]=$,r.bufferSubData(r.UNIFORM_BUFFER,q+F,Y.__data)):$.isMatrix3?(Y.__data[0]=$.elements[0],Y.__data[1]=$.elements[1],Y.__data[2]=$.elements[2],Y.__data[3]=0,Y.__data[4]=$.elements[3],Y.__data[5]=$.elements[4],Y.__data[6]=$.elements[5],Y.__data[7]=0,Y.__data[8]=$.elements[6],Y.__data[9]=$.elements[7],Y.__data[10]=$.elements[8],Y.__data[11]=0):($.toArray(Y.__data,F),F+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,q,Y.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(_,S,w,N){const I=_.value,L=S+"_"+w;if(N[L]===void 0)return typeof I=="number"||typeof I=="boolean"?N[L]=I:N[L]=I.clone(),!0;{const H=N[L];if(typeof I=="number"||typeof I=="boolean"){if(H!==I)return N[L]=I,!0}else if(H.equals(I)===!1)return H.copy(I),!0}return!1}function x(_){const S=_.uniforms;let w=0;const N=16;for(let L=0,H=S.length;L<H;L++){const E=Array.isArray(S[L])?S[L]:[S[L]];for(let C=0,Y=E.length;C<Y;C++){const q=E[C],re=Array.isArray(q.value)?q.value:[q.value];for(let F=0,z=re.length;F<z;F++){const $=re[F],Q=y($),Z=w%N;Z!==0&&N-Z<Q.boundary&&(w+=N-Z),q.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=w,w+=Q.storage}}}const I=w%N;return I>0&&(w+=N-I),_.__size=w,_.__cache={},this}function y(_){const S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=48,S.storage=48):_.isMatrix4?(S.boundary=64,S.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),S}function g(_){const S=_.target;S.removeEventListener("dispose",g);const w=a.indexOf(S.__bindingPointIndex);a.splice(w,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function m(){for(const _ in i)r.deleteBuffer(i[_]);a=[],i={},s={}}return{bind:l,update:c,dispose:m}}class Iu{constructor(e={}){const{canvas:t=rp(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const p=new Uint32Array(4),x=new Int32Array(4);let y=null,g=null;const m=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dt,this._useLegacyLights=!1,this.toneMapping=Bi,this.toneMappingExposure=1;const S=this;let w=!1,N=0,I=0,L=null,H=-1,E=null;const C=new vt,Y=new vt;let q=null;const re=new Ne(0);let F=0,z=t.width,$=t.height,Q=1,Z=null,ee=null;const J=new vt(0,0,z,$),ue=new vt(0,0,z,$);let fe=!1;const j=new Gl;let ne=!1,be=!1,Ce=null;const we=new nt,Ve=new st,Be=new O,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function at(){return L===null?Q:1}let G=n;function Ut(A,B){for(let X=0;X<A.length;X++){const K=A[X],W=t.getContext(K,B);if(W!==null)return W}return null}try{const A={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kl}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",ve,!1),G===null){const B=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&B.shift(),G=Ut(B,A),G===null)throw Ut(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ie,We,Ee,_t,Ye,R,T,V,le,se,ce,Ae,ge,Me,Le,qe,ae,pt,rt,Xe,De,Te,$e,dt;function It(){Ie=new xg(G),We=new dg(G,Ie,e),Ie.init(We),Te=new i2(G,Ie,We),Ee=new t2(G,Ie,We),_t=new _g(G),Ye=new Hv,R=new n2(G,Ie,Ee,Ye,We,Te,_t),T=new pg(S),V=new vg(S),le=new Rp(G,We),$e=new hg(G,Ie,le,We),se=new yg(G,le,_t,$e),ce=new Tg(G,se,le,_t),rt=new wg(G,We,R),qe=new fg(Ye),Ae=new zv(S,T,V,Ie,We,$e,qe),ge=new o2(S,Ye),Me=new Vv,Le=new Kv(Ie,We),pt=new cg(S,T,V,Ee,ce,d,l),ae=new e2(S,ce,We),dt=new l2(G,_t,We,Ee),Xe=new ug(G,Ie,_t,We),De=new bg(G,Ie,_t,We),_t.programs=Ae.programs,S.capabilities=We,S.extensions=Ie,S.properties=Ye,S.renderLists=Me,S.shadowMap=ae,S.state=Ee,S.info=_t}It();const Qe=new a2(S,G);this.xr=Qe,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=Ie.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ie.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(A){A!==void 0&&(Q=A,this.setSize(z,$,!1))},this.getSize=function(A){return A.set(z,$)},this.setSize=function(A,B,X=!0){if(Qe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=A,$=B,t.width=Math.floor(A*Q),t.height=Math.floor(B*Q),X===!0&&(t.style.width=A+"px",t.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(z*Q,$*Q).floor()},this.setDrawingBufferSize=function(A,B,X){z=A,$=B,Q=X,t.width=Math.floor(A*X),t.height=Math.floor(B*X),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(J)},this.setViewport=function(A,B,X,K){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,B,X,K),Ee.viewport(C.copy(J).multiplyScalar(Q).floor())},this.getScissor=function(A){return A.copy(ue)},this.setScissor=function(A,B,X,K){A.isVector4?ue.set(A.x,A.y,A.z,A.w):ue.set(A,B,X,K),Ee.scissor(Y.copy(ue).multiplyScalar(Q).floor())},this.getScissorTest=function(){return fe},this.setScissorTest=function(A){Ee.setScissorTest(fe=A)},this.setOpaqueSort=function(A){Z=A},this.setTransparentSort=function(A){ee=A},this.getClearColor=function(A){return A.copy(pt.getClearColor())},this.setClearColor=function(){pt.setClearColor.apply(pt,arguments)},this.getClearAlpha=function(){return pt.getClearAlpha()},this.setClearAlpha=function(){pt.setClearAlpha.apply(pt,arguments)},this.clear=function(A=!0,B=!0,X=!0){let K=0;if(A){let W=!1;if(L!==null){const Se=L.texture.format;W=Se===lu||Se===ou||Se===au}if(W){const Se=L.texture.type,Re=Se===zi||Se===fi||Se===Ol||Se===or||Se===ru||Se===su,Oe=pt.getClearColor(),He=pt.getClearAlpha(),Je=Oe.r,je=Oe.g,Ke=Oe.b;Re?(p[0]=Je,p[1]=je,p[2]=Ke,p[3]=He,G.clearBufferuiv(G.COLOR,0,p)):(x[0]=Je,x[1]=je,x[2]=Ke,x[3]=He,G.clearBufferiv(G.COLOR,0,x))}else K|=G.COLOR_BUFFER_BIT}B&&(K|=G.DEPTH_BUFFER_BIT),X&&(K|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Me.dispose(),Le.dispose(),Ye.dispose(),T.dispose(),V.dispose(),ce.dispose(),$e.dispose(),dt.dispose(),Ae.dispose(),Qe.dispose(),Qe.removeEventListener("sessionstart",rn),Qe.removeEventListener("sessionend",bt),Ce&&(Ce.dispose(),Ce=null),sn.stop()};function pe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const A=_t.autoReset,B=ae.enabled,X=ae.autoUpdate,K=ae.needsUpdate,W=ae.type;It(),_t.autoReset=A,ae.enabled=B,ae.autoUpdate=X,ae.needsUpdate=K,ae.type=W}function ve(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function xe(A){const B=A.target;B.removeEventListener("dispose",xe),ze(B)}function ze(A){ke(A),Ye.remove(A)}function ke(A){const B=Ye.get(A).programs;B!==void 0&&(B.forEach(function(X){Ae.releaseProgram(X)}),A.isShaderMaterial&&Ae.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,X,K,W,Se){B===null&&(B=Ue);const Re=W.isMesh&&W.matrixWorld.determinant()<0,Oe=kd(A,B,X,K,W);Ee.setMaterial(K,Re);let He=X.index,Je=1;if(K.wireframe===!0){if(He=se.getWireframeAttribute(X),He===void 0)return;Je=2}const je=X.drawRange,Ke=X.attributes.position;let Nt=je.start*Je,bn=(je.start+je.count)*Je;Se!==null&&(Nt=Math.max(Nt,Se.start*Je),bn=Math.min(bn,(Se.start+Se.count)*Je)),He!==null?(Nt=Math.max(Nt,0),bn=Math.min(bn,He.count)):Ke!=null&&(Nt=Math.max(Nt,0),bn=Math.min(bn,Ke.count));const Yt=bn-Nt;if(Yt<0||Yt===1/0)return;$e.setup(W,K,Oe,X,He);let ii,At=Xe;if(He!==null&&(ii=le.get(He),At=De,At.setIndex(ii)),W.isMesh)K.wireframe===!0?(Ee.setLineWidth(K.wireframeLinewidth*at()),At.setMode(G.LINES)):At.setMode(G.TRIANGLES);else if(W.isLine){let et=K.linewidth;et===void 0&&(et=1),Ee.setLineWidth(et*at()),W.isLineSegments?At.setMode(G.LINES):W.isLineLoop?At.setMode(G.LINE_LOOP):At.setMode(G.LINE_STRIP)}else W.isPoints?At.setMode(G.POINTS):W.isSprite&&At.setMode(G.TRIANGLES);if(W.isBatchedMesh)At.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)At.renderInstances(Nt,Yt,W.count);else if(X.isInstancedBufferGeometry){const et=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ka=Math.min(X.instanceCount,et);At.renderInstances(Nt,Yt,Ka)}else At.render(Nt,Yt)};function xt(A,B,X){A.transparent===!0&&A.side===Hn&&A.forceSinglePass===!1?(A.side=dn,A.needsUpdate=!0,Ns(A,B,X),A.side=xi,A.needsUpdate=!0,Ns(A,B,X),A.side=Hn):Ns(A,B,X)}this.compile=function(A,B,X=null){X===null&&(X=A),g=Le.get(X),g.init(),_.push(g),X.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),A!==X&&A.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),g.setupLights(S._useLegacyLights);const K=new Set;return A.traverse(function(W){const Se=W.material;if(Se)if(Array.isArray(Se))for(let Re=0;Re<Se.length;Re++){const Oe=Se[Re];xt(Oe,X,W),K.add(Oe)}else xt(Se,X,W),K.add(Se)}),_.pop(),g=null,K},this.compileAsync=function(A,B,X=null){const K=this.compile(A,B,X);return new Promise(W=>{function Se(){if(K.forEach(function(Re){Ye.get(Re).currentProgram.isReady()&&K.delete(Re)}),K.size===0){W(A);return}setTimeout(Se,10)}Ie.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let yt=null;function Xt(A){yt&&yt(A)}function rn(){sn.stop()}function bt(){sn.start()}const sn=new wu;sn.setAnimationLoop(Xt),typeof self<"u"&&sn.setContext(self),this.setAnimationLoop=function(A){yt=A,Qe.setAnimationLoop(A),A===null?sn.stop():sn.start()},Qe.addEventListener("sessionstart",rn),Qe.addEventListener("sessionend",bt),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Qe.enabled===!0&&Qe.isPresenting===!0&&(Qe.cameraAutoUpdate===!0&&Qe.updateCamera(B),B=Qe.getCamera()),A.isScene===!0&&A.onBeforeRender(S,A,B,L),g=Le.get(A,_.length),g.init(),_.push(g),we.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),j.setFromProjectionMatrix(we),be=this.localClippingEnabled,ne=qe.init(this.clippingPlanes,be),y=Me.get(A,m.length),y.init(),m.push(y),Wn(A,B,0,S.sortObjects),y.finish(),S.sortObjects===!0&&y.sort(Z,ee),this.info.render.frame++,ne===!0&&qe.beginShadows();const X=g.state.shadowsArray;if(ae.render(X,A,B),ne===!0&&qe.endShadows(),this.info.autoReset===!0&&this.info.reset(),pt.render(y,A),g.setupLights(S._useLegacyLights),B.isArrayCamera){const K=B.cameras;for(let W=0,Se=K.length;W<Se;W++){const Re=K[W];p0(y,A,Re,Re.viewport)}}else p0(y,A,B);L!==null&&(R.updateMultisampleRenderTarget(L),R.updateRenderTargetMipmap(L)),A.isScene===!0&&A.onAfterRender(S,A,B),$e.resetDefaultState(),H=-1,E=null,_.pop(),_.length>0?g=_[_.length-1]:g=null,m.pop(),m.length>0?y=m[m.length-1]:y=null};function Wn(A,B,X,K){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||j.intersectsSprite(A)){K&&Be.setFromMatrixPosition(A.matrixWorld).applyMatrix4(we);const Re=ce.update(A),Oe=A.material;Oe.visible&&y.push(A,Re,Oe,X,Be.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||j.intersectsObject(A))){const Re=ce.update(A),Oe=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Be.copy(A.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Be.copy(Re.boundingSphere.center)),Be.applyMatrix4(A.matrixWorld).applyMatrix4(we)),Array.isArray(Oe)){const He=Re.groups;for(let Je=0,je=He.length;Je<je;Je++){const Ke=He[Je],Nt=Oe[Ke.materialIndex];Nt&&Nt.visible&&y.push(A,Re,Nt,X,Be.z,Ke)}}else Oe.visible&&y.push(A,Re,Oe,X,Be.z,null)}}const Se=A.children;for(let Re=0,Oe=Se.length;Re<Oe;Re++)Wn(Se[Re],B,X,K)}function p0(A,B,X,K){const W=A.opaque,Se=A.transmissive,Re=A.transparent;g.setupLightsView(X),ne===!0&&qe.setGlobalState(S.clippingPlanes,X),Se.length>0&&Ud(W,Se,B,X),K&&Ee.viewport(C.copy(K)),W.length>0&&Ds(W,B,X),Se.length>0&&Ds(Se,B,X),Re.length>0&&Ds(Re,B,X),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Ud(A,B,X,K){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const Se=We.isWebGL2;Ce===null&&(Ce=new yi(1,1,{generateMipmaps:!0,type:Ie.has("EXT_color_buffer_half_float")?Gr:zi,minFilter:hr,samples:Se?4:0})),S.getDrawingBufferSize(Ve),Se?Ce.setSize(Ve.x,Ve.y):Ce.setSize(Aa(Ve.x),Aa(Ve.y));const Re=S.getRenderTarget();S.setRenderTarget(Ce),S.getClearColor(re),F=S.getClearAlpha(),F<1&&S.setClearColor(16777215,.5),S.clear();const Oe=S.toneMapping;S.toneMapping=Bi,Ds(A,X,K),R.updateMultisampleRenderTarget(Ce),R.updateRenderTargetMipmap(Ce);let He=!1;for(let Je=0,je=B.length;Je<je;Je++){const Ke=B[Je],Nt=Ke.object,bn=Ke.geometry,Yt=Ke.material,ii=Ke.group;if(Yt.side===Hn&&Nt.layers.test(K.layers)){const At=Yt.side;Yt.side=dn,Yt.needsUpdate=!0,m0(Nt,X,K,bn,Yt,ii),Yt.side=At,Yt.needsUpdate=!0,He=!0}}He===!0&&(R.updateMultisampleRenderTarget(Ce),R.updateRenderTargetMipmap(Ce)),S.setRenderTarget(Re),S.setClearColor(re,F),S.toneMapping=Oe}function Ds(A,B,X){const K=B.isScene===!0?B.overrideMaterial:null;for(let W=0,Se=A.length;W<Se;W++){const Re=A[W],Oe=Re.object,He=Re.geometry,Je=K===null?Re.material:K,je=Re.group;Oe.layers.test(X.layers)&&m0(Oe,B,X,He,Je,je)}}function m0(A,B,X,K,W,Se){A.onBeforeRender(S,B,X,K,W,Se),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(S,B,X,K,A,Se),W.transparent===!0&&W.side===Hn&&W.forceSinglePass===!1?(W.side=dn,W.needsUpdate=!0,S.renderBufferDirect(X,B,K,W,A,Se),W.side=xi,W.needsUpdate=!0,S.renderBufferDirect(X,B,K,W,A,Se),W.side=Hn):S.renderBufferDirect(X,B,K,W,A,Se),A.onAfterRender(S,B,X,K,W,Se)}function Ns(A,B,X){B.isScene!==!0&&(B=Ue);const K=Ye.get(A),W=g.state.lights,Se=g.state.shadowsArray,Re=W.state.version,Oe=Ae.getParameters(A,W.state,Se,B,X),He=Ae.getProgramCacheKey(Oe);let Je=K.programs;K.environment=A.isMeshStandardMaterial?B.environment:null,K.fog=B.fog,K.envMap=(A.isMeshStandardMaterial?V:T).get(A.envMap||K.environment),Je===void 0&&(A.addEventListener("dispose",xe),Je=new Map,K.programs=Je);let je=Je.get(He);if(je!==void 0){if(K.currentProgram===je&&K.lightsStateVersion===Re)return v0(A,Oe),je}else Oe.uniforms=Ae.getUniforms(A),A.onBuild(X,Oe,S),A.onBeforeCompile(Oe,S),je=Ae.acquireProgram(Oe,He),Je.set(He,je),K.uniforms=Oe.uniforms;const Ke=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ke.clippingPlanes=qe.uniform),v0(A,Oe),K.needsLights=Fd(A),K.lightsStateVersion=Re,K.needsLights&&(Ke.ambientLightColor.value=W.state.ambient,Ke.lightProbe.value=W.state.probe,Ke.directionalLights.value=W.state.directional,Ke.directionalLightShadows.value=W.state.directionalShadow,Ke.spotLights.value=W.state.spot,Ke.spotLightShadows.value=W.state.spotShadow,Ke.rectAreaLights.value=W.state.rectArea,Ke.ltc_1.value=W.state.rectAreaLTC1,Ke.ltc_2.value=W.state.rectAreaLTC2,Ke.pointLights.value=W.state.point,Ke.pointLightShadows.value=W.state.pointShadow,Ke.hemisphereLights.value=W.state.hemi,Ke.directionalShadowMap.value=W.state.directionalShadowMap,Ke.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ke.spotShadowMap.value=W.state.spotShadowMap,Ke.spotLightMatrix.value=W.state.spotLightMatrix,Ke.spotLightMap.value=W.state.spotLightMap,Ke.pointShadowMap.value=W.state.pointShadowMap,Ke.pointShadowMatrix.value=W.state.pointShadowMatrix),K.currentProgram=je,K.uniformsList=null,je}function g0(A){if(A.uniformsList===null){const B=A.currentProgram.getUniforms();A.uniformsList=va.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function v0(A,B){const X=Ye.get(A);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function kd(A,B,X,K,W){B.isScene!==!0&&(B=Ue),R.resetTextureUnits();const Se=B.fog,Re=K.isMeshStandardMaterial?B.environment:null,Oe=L===null?S.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:$t,He=(K.isMeshStandardMaterial?V:T).get(K.envMap||Re),Je=K.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,je=!!X.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ke=!!X.morphAttributes.position,Nt=!!X.morphAttributes.normal,bn=!!X.morphAttributes.color;let Yt=Bi;K.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Yt=S.toneMapping);const ii=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,At=ii!==void 0?ii.length:0,et=Ye.get(K),Ka=g.state.lights;if(ne===!0&&(be===!0||A!==E)){const An=A===E&&K.id===H;qe.setState(K,A,An)}let Lt=!1;K.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Ka.state.version||et.outputColorSpace!==Oe||W.isBatchedMesh&&et.batching===!1||!W.isBatchedMesh&&et.batching===!0||W.isInstancedMesh&&et.instancing===!1||!W.isInstancedMesh&&et.instancing===!0||W.isSkinnedMesh&&et.skinning===!1||!W.isSkinnedMesh&&et.skinning===!0||W.isInstancedMesh&&et.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&et.instancingColor===!1&&W.instanceColor!==null||et.envMap!==He||K.fog===!0&&et.fog!==Se||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==qe.numPlanes||et.numIntersection!==qe.numIntersection)||et.vertexAlphas!==Je||et.vertexTangents!==je||et.morphTargets!==Ke||et.morphNormals!==Nt||et.morphColors!==bn||et.toneMapping!==Yt||We.isWebGL2===!0&&et.morphTargetsCount!==At)&&(Lt=!0):(Lt=!0,et.__version=K.version);let Xi=et.currentProgram;Lt===!0&&(Xi=Ns(K,B,W));let x0=!1,ss=!1,$a=!1;const Zt=Xi.getUniforms(),Yi=et.uniforms;if(Ee.useProgram(Xi.program)&&(x0=!0,ss=!0,$a=!0),K.id!==H&&(H=K.id,ss=!0),x0||E!==A){Zt.setValue(G,"projectionMatrix",A.projectionMatrix),Zt.setValue(G,"viewMatrix",A.matrixWorldInverse);const An=Zt.map.cameraPosition;An!==void 0&&An.setValue(G,Be.setFromMatrixPosition(A.matrixWorld)),We.logarithmicDepthBuffer&&Zt.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Zt.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,ss=!0,$a=!0)}if(W.isSkinnedMesh){Zt.setOptional(G,W,"bindMatrix"),Zt.setOptional(G,W,"bindMatrixInverse");const An=W.skeleton;An&&(We.floatVertexTextures?(An.boneTexture===null&&An.computeBoneTexture(),Zt.setValue(G,"boneTexture",An.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(Zt.setOptional(G,W,"batchingTexture"),Zt.setValue(G,"batchingTexture",W._matricesTexture,R));const Za=X.morphAttributes;if((Za.position!==void 0||Za.normal!==void 0||Za.color!==void 0&&We.isWebGL2===!0)&&rt.update(W,X,Xi),(ss||et.receiveShadow!==W.receiveShadow)&&(et.receiveShadow=W.receiveShadow,Zt.setValue(G,"receiveShadow",W.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Yi.envMap.value=He,Yi.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),ss&&(Zt.setValue(G,"toneMappingExposure",S.toneMappingExposure),et.needsLights&&Od(Yi,$a),Se&&K.fog===!0&&ge.refreshFogUniforms(Yi,Se),ge.refreshMaterialUniforms(Yi,K,Q,$,Ce),va.upload(G,g0(et),Yi,R)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(va.upload(G,g0(et),Yi,R),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Zt.setValue(G,"center",W.center),Zt.setValue(G,"modelViewMatrix",W.modelViewMatrix),Zt.setValue(G,"normalMatrix",W.normalMatrix),Zt.setValue(G,"modelMatrix",W.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const An=K.uniformsGroups;for(let Ja=0,Bd=An.length;Ja<Bd;Ja++)if(We.isWebGL2){const y0=An[Ja];dt.update(y0,Xi),dt.bind(y0,Xi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Xi}function Od(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function Fd(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(A,B,X){Ye.get(A.texture).__webglTexture=B,Ye.get(A.depthTexture).__webglTexture=X;const K=Ye.get(A);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=X===void 0,K.__autoAllocateDepthBuffer||Ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,B){const X=Ye.get(A);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,X=0){L=A,N=B,I=X;let K=!0,W=null,Se=!1,Re=!1;if(A){const He=Ye.get(A);He.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(G.FRAMEBUFFER,null),K=!1):He.__webglFramebuffer===void 0?R.setupRenderTarget(A):He.__hasExternalTextures&&R.rebindTextures(A,Ye.get(A.texture).__webglTexture,Ye.get(A.depthTexture).__webglTexture);const Je=A.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Re=!0);const je=Ye.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(je[B])?W=je[B][X]:W=je[B],Se=!0):We.isWebGL2&&A.samples>0&&R.useMultisampledRTT(A)===!1?W=Ye.get(A).__webglMultisampledFramebuffer:Array.isArray(je)?W=je[X]:W=je,C.copy(A.viewport),Y.copy(A.scissor),q=A.scissorTest}else C.copy(J).multiplyScalar(Q).floor(),Y.copy(ue).multiplyScalar(Q).floor(),q=fe;if(Ee.bindFramebuffer(G.FRAMEBUFFER,W)&&We.drawBuffers&&K&&Ee.drawBuffers(A,W),Ee.viewport(C),Ee.scissor(Y),Ee.setScissorTest(q),Se){const He=Ye.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+B,He.__webglTexture,X)}else if(Re){const He=Ye.get(A.texture),Je=B||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,He.__webglTexture,X||0,Je)}H=-1},this.readRenderTargetPixels=function(A,B,X,K,W,Se,Re){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Ye.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Oe=Oe[Re]),Oe){Ee.bindFramebuffer(G.FRAMEBUFFER,Oe);try{const He=A.texture,Je=He.format,je=He.type;if(Je!==xn&&Te.convert(Je)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ke=je===Gr&&(Ie.has("EXT_color_buffer_half_float")||We.isWebGL2&&Ie.has("EXT_color_buffer_float"));if(je!==zi&&Te.convert(je)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(je===pi&&(We.isWebGL2||Ie.has("OES_texture_float")||Ie.has("WEBGL_color_buffer_float")))&&!Ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-K&&X>=0&&X<=A.height-W&&G.readPixels(B,X,K,W,Te.convert(Je),Te.convert(je),Se)}finally{const He=L!==null?Ye.get(L).__webglFramebuffer:null;Ee.bindFramebuffer(G.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(A,B,X=0){const K=Math.pow(2,-X),W=Math.floor(B.image.width*K),Se=Math.floor(B.image.height*K);R.setTexture2D(B,0),G.copyTexSubImage2D(G.TEXTURE_2D,X,0,0,A.x,A.y,W,Se),Ee.unbindTexture()},this.copyTextureToTexture=function(A,B,X,K=0){const W=B.image.width,Se=B.image.height,Re=Te.convert(X.format),Oe=Te.convert(X.type);R.setTexture2D(X,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,X.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,X.unpackAlignment),B.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,K,A.x,A.y,W,Se,Re,Oe,B.image.data):B.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,K,A.x,A.y,B.mipmaps[0].width,B.mipmaps[0].height,Re,B.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,K,A.x,A.y,Re,Oe,B.image),K===0&&X.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(A,B,X,K,W=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=A.max.x-A.min.x+1,Re=A.max.y-A.min.y+1,Oe=A.max.z-A.min.z+1,He=Te.convert(K.format),Je=Te.convert(K.type);let je;if(K.isData3DTexture)R.setTexture3D(K,0),je=G.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)R.setTexture2DArray(K,0),je=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,K.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,K.unpackAlignment);const Ke=G.getParameter(G.UNPACK_ROW_LENGTH),Nt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),bn=G.getParameter(G.UNPACK_SKIP_PIXELS),Yt=G.getParameter(G.UNPACK_SKIP_ROWS),ii=G.getParameter(G.UNPACK_SKIP_IMAGES),At=X.isCompressedTexture?X.mipmaps[W]:X.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,At.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,At.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,A.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,A.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,A.min.z),X.isDataTexture||X.isData3DTexture?G.texSubImage3D(je,W,B.x,B.y,B.z,Se,Re,Oe,He,Je,At.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(je,W,B.x,B.y,B.z,Se,Re,Oe,He,At.data)):G.texSubImage3D(je,W,B.x,B.y,B.z,Se,Re,Oe,He,Je,At),G.pixelStorei(G.UNPACK_ROW_LENGTH,Ke),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Nt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,bn),G.pixelStorei(G.UNPACK_SKIP_ROWS,Yt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ii),W===0&&K.generateMipmaps&&G.generateMipmap(je),Ee.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),Ee.unbindTexture()},this.resetState=function(){N=0,I=0,L=null,Ee.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Bl?"display-p3":"srgb",t.unpackColorSpace=ut.workingColorSpace===Pa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Dt?cr:uu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===cr?Dt:$t}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class c2 extends Iu{}c2.prototype.isWebGL1Renderer=!0;class ql{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ne(e),this.density=t}clone(){return new ql(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Lu extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class h2{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const an=new O;class Xl{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Yn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),s=mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new fn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Xl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Bc=new O,zc=new vt,Hc=new vt,u2=new O,Gc=new nt,ia=new O,Ro=new Jn,Vc=new nt,Io=new Is;class d2 extends ft{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=E0,this.bindMatrix=new nt,this.bindMatrixInverse=new nt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new _i),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ia),this.boundingBox.expandByPoint(ia)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Jn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ia),this.boundingSphere.expandByPoint(ia)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ro.copy(this.boundingSphere),Ro.applyMatrix4(i),e.ray.intersectsSphere(Ro)!==!1&&(Vc.copy(i).invert(),Io.copy(e.ray).applyMatrix4(Vc),!(this.boundingBox!==null&&Io.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Io)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new vt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===E0?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===yf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;zc.fromBufferAttribute(i.attributes.skinIndex,e),Hc.fromBufferAttribute(i.attributes.skinWeight,e),Bc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Hc.getComponent(s);if(a!==0){const o=zc.getComponent(s);Gc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(u2.copy(Bc).applyMatrix4(Gc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Pu extends Mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class f2 extends Kt{constructor(e=null,t=1,n=1,i,s,a,o,l,c=Ft,h=Ft,u,d){super(null,a,o,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wc=new nt,p2=new nt;class Yl{constructor(e=[],t=[]){this.uuid=Gn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new nt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new nt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:p2;Wc.multiplyMatrices(o,t[s]),Wc.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Yl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new f2(t,e,e,xn,pi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Pu),this.bones.push(a),this.boneInverses.push(new nt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class cl extends fn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ir=new nt,qc=new nt,ra=[],Xc=new _i,m2=new nt,hs=new ft,us=new Jn;class g2 extends ft{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new cl(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,m2)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new _i),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ir),Xc.copy(e.boundingBox).applyMatrix4(Ir),this.boundingBox.union(Xc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ir),us.copy(e.boundingSphere).applyMatrix4(Ir),this.boundingSphere.union(us)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(hs.geometry=this.geometry,hs.material=this.material,hs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),us.copy(this.boundingSphere),us.applyMatrix4(n),e.ray.intersectsSphere(us)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ir),qc.multiplyMatrices(n,Ir),hs.matrixWorld=qc,hs.raycast(e,ra);for(let a=0,o=ra.length;a<o;a++){const l=ra[a];l.instanceId=s,l.object=this,t.push(l)}ra.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new cl(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Du extends $n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yc=new O,jc=new O,Kc=new nt,Lo=new Is,sa=new Jn;class jl extends Mt{constructor(e=new kn,t=new Du){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Yc.fromBufferAttribute(t,i-1),jc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Yc.distanceTo(jc);e.setAttribute("lineDistance",new pn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(i),sa.radius+=s,e.ray.intersectsSphere(sa)===!1)return;Kc.copy(i).invert(),Lo.copy(e.ray).applyMatrix4(Kc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new O,h=new O,u=new O,d=new O,p=this.isLineSegments?2:1,x=n.index,g=n.attributes.position;if(x!==null){const m=Math.max(0,a.start),_=Math.min(x.count,a.start+a.count);for(let S=m,w=_-1;S<w;S+=p){const N=x.getX(S),I=x.getX(S+1);if(c.fromBufferAttribute(g,N),h.fromBufferAttribute(g,I),Lo.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const H=e.ray.origin.distanceTo(d);H<e.near||H>e.far||t.push({distance:H,point:u.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,a.start),_=Math.min(g.count,a.start+a.count);for(let S=m,w=_-1;S<w;S+=p){if(c.fromBufferAttribute(g,S),h.fromBufferAttribute(g,S+1),Lo.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(d);I<e.near||I>e.far||t.push({distance:I,point:u.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const $c=new O,Zc=new O;class v2 extends jl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)$c.fromBufferAttribute(t,i),Zc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+$c.distanceTo(Zc);e.setAttribute("lineDistance",new pn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class x2 extends jl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Nu extends $n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Jc=new nt,hl=new Is,aa=new Jn,oa=new O;class y2 extends Mt{constructor(e=new kn,t=new Nu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(i),aa.radius+=s,e.ray.intersectsSphere(aa)===!1)return;Jc.copy(i).invert(),hl.copy(e.ray).applyMatrix4(Jc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let x=d,y=p;x<y;x++){const g=c.getX(x);oa.fromBufferAttribute(u,g),Qc(oa,g,l,i,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let x=d,y=p;x<y;x++)oa.fromBufferAttribute(u,x),Qc(oa,x,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Qc(r,e,t,n,i,s,a){const o=hl.distanceSqToPoint(r);if(o<t){const l=new O;hl.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class ms extends Kt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ca extends kn{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],p=[];let x=0;const y=[],g=n/2;let m=0;_(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new pn(u,3)),this.setAttribute("normal",new pn(d,3)),this.setAttribute("uv",new pn(p,2));function _(){const w=new O,N=new O;let I=0;const L=(t-e)/n;for(let H=0;H<=s;H++){const E=[],C=H/s,Y=C*(t-e)+e;for(let q=0;q<=i;q++){const re=q/i,F=re*l+o,z=Math.sin(F),$=Math.cos(F);N.x=Y*z,N.y=-C*n+g,N.z=Y*$,u.push(N.x,N.y,N.z),w.set(z,L,$).normalize(),d.push(w.x,w.y,w.z),p.push(re,1-C),E.push(x++)}y.push(E)}for(let H=0;H<i;H++)for(let E=0;E<s;E++){const C=y[E][H],Y=y[E+1][H],q=y[E+1][H+1],re=y[E][H+1];h.push(C,Y,re),h.push(Y,q,re),I+=6}c.addGroup(m,I,0),m+=I}function S(w){const N=x,I=new st,L=new O;let H=0;const E=w===!0?e:t,C=w===!0?1:-1;for(let q=1;q<=i;q++)u.push(0,g*C,0),d.push(0,C,0),p.push(.5,.5),x++;const Y=x;for(let q=0;q<=i;q++){const F=q/i*l+o,z=Math.cos(F),$=Math.sin(F);L.x=E*$,L.y=g*C,L.z=E*z,u.push(L.x,L.y,L.z),d.push(0,C,0),I.x=z*.5+.5,I.y=$*.5*C+.5,p.push(I.x,I.y),x++}for(let q=0;q<i;q++){const re=N+q,F=Y+q;w===!0?h.push(F,F+1,re):h.push(F+1,F,re),H+=3}c.addGroup(m,H,w===!0?1:2),m+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ca(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bs extends kn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new O,d=new O,p=[],x=[],y=[],g=[];for(let m=0;m<=n;m++){const _=[],S=m/n;let w=0;m===0&&a===0?w=.5/t:m===n&&l===Math.PI&&(w=-.5/t);for(let N=0;N<=t;N++){const I=N/t;u.x=-e*Math.cos(i+I*s)*Math.sin(a+S*o),u.y=e*Math.cos(a+S*o),u.z=e*Math.sin(i+I*s)*Math.sin(a+S*o),x.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),g.push(I+w,1-S),_.push(c++)}h.push(_)}for(let m=0;m<n;m++)for(let _=0;_<t;_++){const S=h[m][_+1],w=h[m][_],N=h[m+1][_],I=h[m+1][_+1];(m!==0||a>0)&&p.push(S,w,I),(m!==n-1||l<Math.PI)&&p.push(w,N,I)}this.setIndex(p),this.setAttribute("position",new pn(x,3)),this.setAttribute("normal",new pn(y,3)),this.setAttribute("uv",new pn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Rn extends $n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=du,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Si extends Rn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new st(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function la(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function b2(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function _2(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function eh(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function Uu(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class Ls{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class S2 extends Ls{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pr,endingEnd:Pr}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Dr:s=e,o=2*t-n;break;case Sa:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Dr:a=e,l=2*n-t;break;case Sa:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,x=(n-t)/(i-t),y=x*x,g=y*x,m=-d*g+2*d*y-d*x,_=(1+d)*g+(-1.5-2*d)*y+(-.5+d)*x+1,S=(-1-p)*g+(1.5+p)*y+.5*x,w=p*g-p*y;for(let N=0;N!==o;++N)s[N]=m*a[h+N]+_*a[c+N]+S*a[l+N]+w*a[u+N];return s}}class ku extends Ls{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}}class M2 extends Ls{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Qn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=la(t,this.TimeBufferType),this.values=la(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:la(e.times,Array),values:la(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new M2(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ku(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new S2(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ms:t=this.InterpolantFactoryMethodDiscrete;break;case Wr:t=this.InterpolantFactoryMethodLinear;break;case ro:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ms;case this.InterpolantFactoryMethodLinear:return Wr;case this.InterpolantFactoryMethodSmooth:return ro}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&b2(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ro,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,d=u-n,p=u+n;for(let x=0;x!==n;++x){const y=t[u+x];if(y!==t[d+x]||y!==t[p+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=Wr;class Qr extends Qn{}Qr.prototype.ValueTypeName="bool";Qr.prototype.ValueBufferType=Array;Qr.prototype.DefaultInterpolation=Ms;Qr.prototype.InterpolantFactoryMethodLinear=void 0;Qr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ou extends Qn{}Ou.prototype.ValueTypeName="color";class Yr extends Qn{}Yr.prototype.ValueTypeName="number";class w2 extends Ls{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Vn.slerpFlat(s,0,a,c-o,a,c,l);return s}}class ur extends Qn{InterpolantFactoryMethodLinear(e){return new w2(this.times,this.values,this.getValueSize(),e)}}ur.prototype.ValueTypeName="quaternion";ur.prototype.DefaultInterpolation=Wr;ur.prototype.InterpolantFactoryMethodSmooth=void 0;class es extends Qn{}es.prototype.ValueTypeName="string";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=Ms;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;class jr extends Qn{}jr.prototype.ValueTypeName="vector";class ul{constructor(e,t=-1,n,i=Fl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Gn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(E2(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(Qn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=_2(l);l=eh(l,1,h),c=eh(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Yr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,p,x,y){if(p.length!==0){const g=[],m=[];Uu(p,g,m,x),g.length!==0&&y.push(new u(d,g,m))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let x;for(x=0;x<d.length;x++)if(d[x].morphTargets)for(let y=0;y<d[x].morphTargets.length;y++)p[d[x].morphTargets[y]]=-1;for(const y in p){const g=[],m=[];for(let _=0;_!==d[x].morphTargets.length;++_){const S=d[x];g.push(S.time),m.push(S.morphTarget===y?1:0)}i.push(new Yr(".morphTargetInfluence["+y+"]",g,m))}l=p.length*a}else{const p=".bones["+t[u].name+"]";n(jr,p+".position",d,"pos",i),n(ur,p+".quaternion",d,"rot",i),n(jr,p+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function T2(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Yr;case"vector":case"vector2":case"vector3":case"vector4":return jr;case"color":return Ou;case"quaternion":return ur;case"bool":case"boolean":return Qr;case"string":return es}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function E2(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=T2(r.type);if(r.times===void 0){const t=[],n=[];Uu(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const ki={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class A2{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],x=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return x}return null}}}const C2=new A2;class ts{constructor(e){this.manager=e!==void 0?e:C2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ts.DEFAULT_MATERIAL_NAME="__DEFAULT";const ci={};class R2 extends Error{constructor(e,t){super(e),this.response=t}}class Fu extends ts{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ki.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ci[e]!==void 0){ci[e].push({onLoad:t,onProgress:n,onError:i});return}ci[e]=[],ci[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=ci[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=d?parseInt(d):0,x=p!==0;let y=0;const g=new ReadableStream({start(m){_();function _(){u.read().then(({done:S,value:w})=>{if(S)m.close();else{y+=w.byteLength;const N=new ProgressEvent("progress",{lengthComputable:x,loaded:y,total:p});for(let I=0,L=h.length;I<L;I++){const H=h[I];H.onProgress&&H.onProgress(N)}m.enqueue(w),_()}})}}});return new Response(g)}else throw new R2(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(x=>p.decode(x))}}}).then(c=>{ki.add(e,c);const h=ci[e];delete ci[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=ci[e];if(h===void 0)throw this.manager.itemError(e),c;delete ci[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class I2 extends ts{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ki.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=ws("img");function l(){h(),ki.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class L2 extends ts{constructor(e){super(e)}load(e,t,n,i){const s=new Kt,a=new I2(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class ka extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class P2 extends ka{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Po=new nt,th=new O,nh=new O;class Kl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gl,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;th.setFromMatrixPosition(e.matrixWorld),t.position.copy(th),nh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nh),t.updateMatrixWorld(),Po.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Po),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Po)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class D2 extends Kl{constructor(){super(new hn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=qr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Bu extends ka{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new D2}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ih=new nt,ds=new O,Do=new O;class N2 extends Kl{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new st(4,2),this._viewportCount=6,this._viewports=[new vt(2,1,1,1),new vt(0,1,1,1),new vt(3,1,1,1),new vt(1,1,1,1),new vt(3,0,1,1),new vt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ds.setFromMatrixPosition(e.matrixWorld),n.position.copy(ds),Do.copy(n.position),Do.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Do),n.updateMatrixWorld(),i.makeTranslation(-ds.x,-ds.y,-ds.z),ih.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ih)}}class dl extends ka{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new N2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class U2 extends Kl{constructor(){super(new Na(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zu extends ka{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new U2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class _s{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class k2 extends ts{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ki.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return ki.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ki.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});ki.add(e,l),s.manager.itemStart(e)}}class O2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=rh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=rh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function rh(){return(typeof performance>"u"?Date:performance).now()}class F2{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Vn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;Vn.multiplyQuaternionsFlat(e,a,e,t,e,n),Vn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const $l="\\[\\]\\.:\\/",B2=new RegExp("["+$l+"]","g"),Zl="[^"+$l+"]",z2="[^"+$l.replace("\\.","")+"]",H2=/((?:WC+[\/:])*)/.source.replace("WC",Zl),G2=/(WCOD+)?/.source.replace("WCOD",z2),V2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zl),W2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zl),q2=new RegExp("^"+H2+G2+V2+W2+"$"),X2=["material","materials","bones","map"];class Y2{constructor(e,t,n){const i=n||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ht{constructor(e,t,n){this.path=t,this.parsedPath=n||ht.parseTrackName(t),this.node=ht.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ht.Composite(e,t,n):new ht(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(B2,"")}static parseTrackName(e){const t=q2.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);X2.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=ht.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ht.Composite=Y2;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class j2{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,o=new Array(a),l={endingStart:Pr,endingEnd:Pr};for(let c=0;c!==a;++c){const h=s[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Rf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Lf:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case Fl:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===If;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===Cf){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Dr,i.endingEnd=Dr):(e?i.endingStart=this.zeroSlopeAtStart?Dr:Pr:i.endingStart=Sa,t?i.endingEnd=this.zeroSlopeAtEnd?Dr:Pr:i.endingEnd=Sa)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=n,this}}const K2=new Float32Array(1);class fl extends dr{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=i[u],p=d.name;let x=h[p];if(x!==void 0)++x.referenceCount,a[u]=x;else{if(x=a[u],x!==void 0){x._cacheIndex===null&&(++x.referenceCount,this._addInactiveBinding(x,l,p));continue}const y=t&&t._propertyBindings[u].binding.parsedPath;x=new F2(ht.create(n,p,y),d.ValueTypeName,d.getValueSize()),++x.referenceCount,this._addInactiveBinding(x,l,p),a[u]=x}o[u].resultBuffer=x.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new ku(new Float32Array(2),new Float32Array(2),1,K2),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let a=typeof e=="string"?ul.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Fl),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new j2(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?ul.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class $2{constructor(e,t,n=0,i=1/0){this.ray=new Is(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Hl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return pl(e,this,n,t),n.sort(sh),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)pl(e[i],this,n,t);return n.sort(sh),n}}function sh(r,e){return r.distance-e.distance}function pl(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,a=i.length;s<a;s++)pl(i[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kl);const Z2=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,J2=`
  uniform sampler2D tDiffuse;
  uniform sampler2D tMask;
  uniform sampler2D tDepth;
  
  uniform int uMode; // 0: Normal, 1: Semantic, 2: Instance, 3: Panoptic, 4: Enemy, 5: Edge, 6: Depth
  uniform float uTime;
  uniform float uScanProgress;
  uniform vec2 uResolution;
  uniform float uCameraNear;
  uniform float uCameraFar;
  uniform float uTargetInstanceId;
  uniform float uBlendAmount;
  
  varying vec2 vUv;

  // Linearize camera depth buffer
  float readDepth(sampler2D depthSampler, vec2 coord) {
    float fragCoordZ = texture2D(depthSampler, coord).x;
    #if defined(USE_LOGDEPTHBUF)
      return fragCoordZ;
    #else
      float viewZ = (uCameraNear * uCameraFar) / ((uCameraFar - uCameraNear) * fragCoordZ - uCameraFar);
      return (-viewZ - uCameraNear) / (uCameraFar - uCameraNear);
    #endif
  }

  // Stable pseudo-random color hash from unique instance ID
  vec3 hashColor(float id) {
    if (id <= 0.0) return vec3(0.15, 0.15, 0.18);
    float hue = fract(id * 0.618033988749895 + 0.12);
    float sat = 0.85 + 0.15 * fract(id * 1.345);
    float val = 0.90 + 0.10 * fract(id * 2.789);
    
    // HSV to RGB conversion
    vec3 c = vec3(hue * 6.0, sat, val);
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  }

  // Get semantic class color based on prompt specifications:
  // 1: Road (Grey), 2: Buildings (Blue), 3: Vehicles (Yellow), 4: Pedestrians (Green),
  // 5: Trees/Foliage (Dark Green), 6: Sky (Light Blue), 7: Sidewalks (Orange), 8: Urban Props (Purple/Cyan), 9: Enemies (Crimson)
  vec3 getSemanticColor(float classId) {
    int id = int(classId + 0.5);
    if (id == 1) return vec3(0.42, 0.44, 0.48); // Road: Grey
    if (id == 2) return vec3(0.18, 0.42, 0.85); // Buildings: Blue
    if (id == 3) return vec3(0.96, 0.82, 0.12); // Vehicles: Yellow
    if (id == 4) return vec3(0.18, 0.82, 0.38); // Pedestrians: Green
    if (id == 5) return vec3(0.10, 0.52, 0.18); // Trees: Dark Green
    if (id == 6) return vec3(0.42, 0.72, 0.98); // Sky: Light Blue
    if (id == 7) return vec3(0.96, 0.54, 0.15); // Sidewalks: Orange
    if (id == 8) return vec3(0.25, 0.75, 0.75); // Props/Signs: Teal
    if (id == 9) return vec3(0.92, 0.15, 0.22); // Enemies: Crimson
    return vec3(0.20, 0.22, 0.25);              // Background/Default
  }

  // Fast, lightweight 4-tap edge filter across masks & depth
  float computeEdges(vec2 uv) {
    vec2 texel = 1.0 / uResolution;
    
    // Efficient 4-tap cross filter (4 reads instead of 12)
    float m0 = texture2D(tMask, uv - vec2(texel.x, 0.0)).r;
    float m1 = texture2D(tMask, uv + vec2(texel.x, 0.0)).r;
    float m2 = texture2D(tMask, uv - vec2(0.0, texel.y)).r;
    float m3 = texture2D(tMask, uv + vec2(0.0, texel.y)).r;
    float maskEdge = (abs(m1 - m0) + abs(m3 - m2)) * 6.0;

    // Fast depth difference for contour boundaries
    float d0 = readDepth(tDepth, uv - vec2(texel.x, 0.0));
    float d1 = readDepth(tDepth, uv + vec2(texel.x, 0.0));
    float d2 = readDepth(tDepth, uv - vec2(0.0, texel.y));
    float d3 = readDepth(tDepth, uv + vec2(0.0, texel.y));
    float depthEdge = (abs(d1 - d0) + abs(d3 - d2)) * 25.0;

    return clamp(max(maskEdge, depthEdge), 0.0, 1.0);
  }

  // Turbo / Scientific depth false-color colormap
  vec3 depthColormap(float t) {
    t = clamp(t, 0.0, 1.0);
    // Near = vibrant cyan/green, Mid = yellow/orange, Far = deep violet/magenta
    vec3 c1 = vec3(0.05, 0.85, 0.95);
    vec3 c2 = vec3(0.10, 0.90, 0.35);
    vec3 c3 = vec3(0.98, 0.82, 0.10);
    vec3 c4 = vec3(0.95, 0.20, 0.40);
    vec3 c5 = vec3(0.25, 0.05, 0.60);
    
    if (t < 0.25) return mix(c1, c2, t / 0.25);
    if (t < 0.50) return mix(c2, c3, (t - 0.25) / 0.25);
    if (t < 0.75) return mix(c3, c4, (t - 0.50) / 0.25);
    return mix(c4, c5, (t - 0.75) / 0.25);
  }

  void main() {
    vec4 beauty = texture2D(tDiffuse, vUv);
    vec4 maskSample = texture2D(tMask, vUv);
    
    // Decode mask metadata
    float semanticId = floor(maskSample.r * 255.0 + 0.5);
    float instanceLo = floor(maskSample.g * 255.0 + 0.5);
    float instanceHi = floor(maskSample.b * 255.0 + 0.5);
    float instanceId = instanceLo + instanceHi * 255.0;
    bool isEnemy = maskSample.a > 0.5;
    
    // Only compute depth/edges when necessary to maximize GPU performance (60+ FPS lock)
    float linDepth = 0.0;
    float edge = 0.0;
    if (uMode == 6) {
      linDepth = readDepth(tDepth, vUv);
      edge = computeEdges(vUv);
    } else if (uMode == 1 || uMode == 2 || uMode == 3 || uMode == 5) {
      edge = computeEdges(vUv);
    }

    // Subtle luminance of beauty pass to preserve realistic scene shading & occlusion
    float lum = dot(beauty.rgb, vec3(0.299, 0.587, 0.114));

    vec3 finalColor = beauty.rgb;

    // Mode 0: NORMAL VISION (GTA V / Cinematic AAA Color Grading, Bloom & Lens Vignette)
    if (uMode == 0) {
      // 1. Cinematic Lens Vignette
      vec2 uvOffset = (vUv - 0.5) * 2.0;
      float vignette = 1.0 - dot(uvOffset, uvOffset) * 0.22;
      vec3 color = beauty.rgb * vignette;

      // 2. Specular Bloom on neon signs, headlights & sun glints
      vec3 bloom = max(color - vec3(0.72), vec3(0.0)) * 0.55;

      // 3. ACES Filmic Tone Mapping Curve
      vec3 x = color + bloom;
      float a = 2.51;
      float b = 0.03;
      float c = 2.43;
      float d = 0.59;
      float e = 0.14;
      finalColor = clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
    }
    // Mode 1: SEMANTIC SEGMENTATION
    else if (uMode == 1) {
      vec3 semColor = getSemanticColor(semanticId);
      // Blend category color with subtle scene lighting for occlusion
      vec3 shadedSem = semColor * (0.45 + 0.55 * lum);
      // Clean overlay with thin boundary lines
      finalColor = mix(shadedSem, vec3(1.0), edge * 0.4);
    }
    // Mode 2: INSTANCE SEGMENTATION
    else if (uMode == 2) {
      if (instanceId > 0.0) {
        // Individual countable object has distinct instance color
        vec3 instColor = hashColor(instanceId);
        vec3 shadedInst = instColor * (0.50 + 0.50 * lum);
        // Highlight active targeted instance
        if (abs(instanceId - uTargetInstanceId) < 0.5 && uTargetInstanceId > 0.0) {
          float pulse = 0.5 + 0.5 * sin(uTime * 8.0);
          shadedInst = mix(shadedInst, vec3(1.0, 1.0, 1.0), pulse * 0.4);
        }
        finalColor = mix(shadedInst, vec3(1.0), edge * 0.6);
      } else {
        // Background stuff rendered in desaturated blueprint tone
        vec3 bg = mix(beauty.rgb, vec3(lum * 0.35 + 0.05, lum * 0.40 + 0.08, lum * 0.50 + 0.12), 0.75);
        finalColor = mix(bg, vec3(0.4, 0.6, 0.8), edge * 0.25);
      }
    }
    // Mode 3: PANOPTIC SEGMENTATION (Stuff = semantic category, Things = unique instance)
    else if (uMode == 3) {
      if (instanceId > 0.0) {
        // Countable things: unique instance color
        vec3 instColor = hashColor(instanceId);
        vec3 shadedInst = instColor * (0.50 + 0.50 * lum);
        finalColor = mix(shadedInst, vec3(1.0), edge * 0.6);
      } else {
        // Background stuff: semantic category color
        vec3 semColor = getSemanticColor(semanticId);
        vec3 shadedSem = semColor * (0.40 + 0.60 * lum);
        finalColor = mix(shadedSem, vec3(0.9), edge * 0.35);
      }
    }
    // Mode 4: ENEMY SCAN (Tactical vision: glowing infrared crimson enemies, tech world)
    else if (uMode == 4) {
      // World desaturated tactical night-vision / blueprint
      vec3 tacticalWorld = vec3(lum * 0.28, lum * 0.42, lum * 0.50);
      tacticalWorld += vec3(0.0, 0.04, 0.06); // Subtle cyber teal tint

      if (isEnemy) {
        // Enemy highlighted in pulsing tactical infrared crimson
        float pulse = 0.85 + 0.15 * sin(uTime * 6.0);
        vec3 enemyColor = vec3(1.0, 0.10, 0.15) * pulse;
        finalColor = mix(tacticalWorld, enemyColor, 0.92);
      } else if (instanceId > 0.0) {
        // Neutral civilian / vehicles in subtle tactical cyan
        vec3 neutralThing = vec3(0.12, 0.65, 0.85) * (0.4 + 0.6 * lum);
        finalColor = mix(tacticalWorld, neutralThing, 0.40);
      } else {
        finalColor = tacticalWorld;
      }
    }
    // Mode 5: EDGE DETECTION (Geometric & semantic boundary contours)
    else if (uMode == 5) {
      // Dark cyber background with neon cyan and amber boundary edges
      vec3 darkBg = vec3(0.04, 0.05, 0.07) + beauty.rgb * 0.08;
      vec3 edgeColor = mix(vec3(0.0, 0.85, 1.0), vec3(1.0, 0.70, 0.10), edge);
      finalColor = mix(darkBg, edgeColor, edge);
    }
    // Mode 6: DEPTH VIEW (Linear metric depth colormap)
    else if (uMode == 6) {
      // Exponential curve for depth perception clarity
      float curvedDepth = pow(clamp(linDepth * 3.5, 0.0, 1.0), 0.75);
      vec3 depthColor = depthColormap(curvedDepth);
      // Emphasize silhouettes with subtle contour lines
      finalColor = mix(depthColor, vec3(0.0), edge * 0.5);
    }

    // Holographic scanline sweep effect during transition
    if (uScanProgress < 0.999 && uScanProgress > 0.001) {
      float scanY = uScanProgress;
      float distToScan = abs(vUv.y - scanY);
      if (distToScan < 0.035) {
        float intensity = 1.0 - (distToScan / 0.035);
        finalColor += vec3(0.0, 0.9, 1.0) * intensity * 0.75;
      }
    }

    // Blend with original image if requested
    gl_FragColor = vec4(mix(beauty.rgb, finalColor, uBlendAmount), 1.0);
  }
`,Q2=`
  #include <skinning_pars_vertex>
  
  void main() {
    #include <skinbase_vertex>
    #include <begin_vertex>
    #include <skinning_vertex>
    #include <project_vertex>
  }
`,e4=`
  uniform float uSemanticId;
  uniform float uInstanceId;
  uniform float uIsEnemy;

  void main() {
    float semNorm = uSemanticId / 255.0;
    float instLo = fract(uInstanceId / 255.0);
    float instHi = floor(uInstanceId / 255.0) / 255.0;
    float enemyFlag = uIsEnemy > 0.5 ? 1.0 : 0.0;
    
    gl_FragColor = vec4(semNorm, instLo, instHi, enemyFlag);
  }
`,Ot={NORMAL:0,SEMANTIC:1,INSTANCE:2,PANOPTIC:3,ENEMY_SCAN:4,EDGE_DETECTION:5,DEPTH_VIEW:6},wt={NONE:0,ROAD:1,BUILDING:2,VEHICLE:3,PEDESTRIAN:4,TREE:5,SKY:6,SIDEWALK:7,PROP:8,ENEMY:9};class t4{constructor(e,t,n){this.renderer=e,this.scene=t,this.camera=n,this.currentMode=Ot.ENEMY_SCAN,this.targetInstanceId=0,this.scanProgress=1,this.isScanning=!1,this.blendAmount=1,this.registeredObjects=new Map,this.instanceCounters={vehicles:0,pedestrians:0,enemies:0,props:0},this.taggedMeshes=[];const i=window.innerWidth,s=window.innerHeight,a=1;this.beautyTarget=new yi(i*a,s*a,{minFilter:en,magFilter:en,format:xn,type:Gr}),this.depthTexture=new Wl(i*a,s*a),this.depthTexture.type=fi,this.maskTarget=new yi(i*a,s*a,{minFilter:Ft,magFilter:Ft,format:xn,depthTexture:this.depthTexture,depthBuffer:!0}),this.postCamera=new Na(-1,1,1,-1,0,1),this.postScene=new Lu,this.compositeMaterial=new Zn({vertexShader:Z2,fragmentShader:J2,uniforms:{tDiffuse:{value:this.beautyTarget.texture},tMask:{value:this.maskTarget.texture},tDepth:{value:this.depthTexture},uMode:{value:this.currentMode},uTime:{value:0},uScanProgress:{value:1},uResolution:{value:new st(i*a,s*a)},uCameraNear:{value:n.near},uCameraFar:{value:n.far},uTargetInstanceId:{value:0},uBlendAmount:{value:1}},depthWrite:!1,depthTest:!1});const o=new ft(new Ui(2,2),this.compositeMaterial);this.postScene.add(o),this.maskMaterials=new Map,this.skinnedMaskMaterials=new Map,window.addEventListener("resize",this.onResize.bind(this))}registerObject(e,t={}){const n=t.semanticClass||wt.NONE,i=t.instanceId!==void 0?t.instanceId:0,s=!!t.isEnemy,a=t.categoryName||"Unknown",o=t.label||`Object_${i}`;return e.traverse(l=>{if(l.isMesh){l.userData.semanticClassId=n,l.userData.instanceId=i,l.userData.isEnemy=s,l.userData.categoryName=a,l.userData.label=o,l.userData.rootObject=e;const c=l.isSkinnedMesh;l.userData.maskMaterial=this.getOrCreateMaskMaterial(n,i,s,c),this.taggedMeshes.includes(l)||this.taggedMeshes.push(l)}}),i>0&&this.registeredObjects.set(i,{object:e,semanticClass:n,instanceId:i,isEnemy:s,categoryName:a,label:o}),i}getOrCreateMaskMaterial(e,t,n,i){const s=`${e}_${t}_${n?1:0}_${i?1:0}`,a=i?this.skinnedMaskMaterials:this.maskMaterials;if(a.has(s))return a.get(s);const o=new Zn({vertexShader:Q2,fragmentShader:e4,uniforms:{uSemanticId:{value:e},uInstanceId:{value:t},uIsEnemy:{value:n?1:0}},skinning:i,side:Hn});return a.set(s,o),o}setMode(e){this.currentMode!==e&&(this.currentMode=e,this.compositeMaterial.uniforms.uMode.value=e,this.scanProgress=0,this.isScanning=!0)}setTargetInstance(e){this.targetInstanceId=e,this.compositeMaterial.uniforms.uTargetInstanceId.value=e}update(e,t){this.compositeMaterial.uniforms.uTime.value=t,this.isScanning&&(this.scanProgress+=e*2.2,this.scanProgress>=1&&(this.scanProgress=1,this.isScanning=!1),this.compositeMaterial.uniforms.uScanProgress.value=this.scanProgress)}render(e,t){if(this.update(e,t),this.renderer.setRenderTarget(this.beautyTarget),this.renderer.clear(),this.renderer.render(this.scene,this.camera),this.currentMode===Ot.NORMAL&&!this.isScanning){this.renderer.setRenderTarget(null),this.renderer.render(this.postScene,this.postCamera);return}const n=this.scene.background;this.scene.background=new Ne(0);const i=this.taggedMeshes.length;for(let s=0;s<i;s++){const a=this.taggedMeshes[s];a.userData.maskMaterial&&(a.__origMat=a.material,a.material=a.userData.maskMaterial)}this.renderer.setRenderTarget(this.maskTarget),this.renderer.clear(),this.renderer.render(this.scene,this.camera);for(let s=0;s<i;s++){const a=this.taggedMeshes[s];a.__origMat&&(a.material=a.__origMat)}this.scene.background=n,this.renderer.setRenderTarget(null),this.renderer.render(this.postScene,this.postCamera)}onResize(){const e=window.innerWidth,t=window.innerHeight,n=1;this.beautyTarget.setSize(e*n,t*n),this.maskTarget.setSize(e*n,t*n),this.compositeMaterial.uniforms.uResolution.value.set(e*n,t*n)}getLiveStatistics(){let e=0,t=0,n=0,i=0;for(const[s,a]of this.registeredObjects)a.semanticClass===wt.VEHICLE?e++:a.semanticClass===wt.PEDESTRIAN?t++:a.isEnemy||a.semanticClass===wt.ENEMY?n++:a.semanticClass===wt.PROP&&i++;return{vehicles:e,pedestrians:t,enemies:n,props:i,totalInstances:this.registeredObjects.size}}}function ah(r,e){if(e===Pf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===rl||e===hu){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===rl)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class Oa extends ts{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new a4(t)}),this.register(function(t){return new m4(t)}),this.register(function(t){return new g4(t)}),this.register(function(t){return new v4(t)}),this.register(function(t){return new l4(t)}),this.register(function(t){return new c4(t)}),this.register(function(t){return new h4(t)}),this.register(function(t){return new u4(t)}),this.register(function(t){return new s4(t)}),this.register(function(t){return new d4(t)}),this.register(function(t){return new o4(t)}),this.register(function(t){return new p4(t)}),this.register(function(t){return new f4(t)}),this.register(function(t){return new i4(t)}),this.register(function(t){return new x4(t)}),this.register(function(t){return new y4(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=_s.extractUrlBase(e);a=_s.resolveURL(c,this.path)}else a=_s.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Fu(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Hu){try{a[ot.KHR_BINARY_GLTF]=new b4(e)}catch(u){i&&i(u);return}s=JSON.parse(a[ot.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new D4(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case ot.KHR_MATERIALS_UNLIT:a[u]=new r4;break;case ot.KHR_DRACO_MESH_COMPRESSION:a[u]=new _4(s,this.dracoLoader);break;case ot.KHR_TEXTURE_TRANSFORM:a[u]=new S4;break;case ot.KHR_MESH_QUANTIZATION:a[u]=new M4;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function n4(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class i4{constructor(e){this.parser=e,this.name=ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new Ne(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],$t);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new zu(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new dl(h),c.distance=u;break;case"spot":c=new Bu(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ni(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class r4{constructor(){this.name=ot.KHR_MATERIALS_UNLIT}getMaterialType(){return jn}extendParams(e,t,n){const i=[];e.color=new Ne(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],$t),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Dt))}return Promise.all(i)}}class s4{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class a4{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new st(o,o)}return Promise.all(s)}}class o4{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class l4{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ne(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],$t)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Dt)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class c4{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class h4{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ne().setRGB(o[0],o[1],o[2],$t),Promise.all(s)}}class u4{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class d4{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ne().setRGB(o[0],o[1],o[2],$t),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Dt)),Promise.all(s)}}class f4{constructor(e){this.parser=e,this.name=ot.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class p4{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Si}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class m4{constructor(e){this.parser=e,this.name=ot.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class g4{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class v4{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class x4{constructor(e){this.name=ot.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(p),h,u,d,i.mode,i.filter),p})})}else return null}}class y4{constructor(e){this.name=ot.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==In.TRIANGLES&&c.mode!==In.TRIANGLE_STRIP&&c.mode!==In.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,p=[];for(const x of u){const y=new nt,g=new O,m=new Vn,_=new O(1,1,1),S=new g2(x.geometry,x.material,d);for(let w=0;w<d;w++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,w),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,w),l.SCALE&&_.fromBufferAttribute(l.SCALE,w),S.setMatrixAt(w,y.compose(g,m,_));for(const w in l)if(w==="_COLOR_0"){const N=l[w];S.instanceColor=new cl(N.array,N.itemSize,N.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&x.geometry.setAttribute(w,l[w]);Mt.prototype.copy.call(S,x),this.parser.assignFinalMaterial(S),p.push(S)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const Hu="glTF",fs=12,oh={JSON:1313821514,BIN:5130562};class b4{constructor(e){this.name=ot.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,fs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Hu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-fs,s=new DataView(e,fs);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===oh.JSON){const c=new Uint8Array(e,fs+a,o);this.content=n.decode(c)}else if(l===oh.BIN){const c=fs+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class _4{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ot.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=ml[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=ml[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],p=Fr[d.componentType];c[u]=p.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(p){for(const x in p.attributes){const y=p.attributes[x],g=l[x];g!==void 0&&(y.normalized=g)}u(p)},o,c,$t,d)})})}}class S4{constructor(){this.name=ot.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class M4{constructor(){this.name=ot.KHR_MESH_QUANTIZATION}}class Gu extends Ls{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,d=u*u,p=d*u,x=e*c,y=x-c,g=-2*p+3*d,m=p-d,_=1-g,S=m-d+u;for(let w=0;w!==o;w++){const N=a[y+w+o],I=a[y+w+l]*h,L=a[x+w+o],H=a[x+w]*h;s[w]=_*N+S*I+g*L+m*H}return s}}const w4=new Vn;class T4 extends Gu{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return w4.fromArray(s).normalize().toArray(s),s}}const In={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Fr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},lh={9728:Ft,9729:en,9984:il,9985:nu,9986:ga,9987:hr},ch={33071:Ln,33648:_a,10497:gn},No={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ml={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Li={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},E4={CUBICSPLINE:void 0,LINEAR:Wr,STEP:Ms},Uo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function A4(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Rn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:xi})),r.DefaultMaterial}function Ji(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ni(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function C4(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function R4(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function I4(r){let e;const t=r.extensions&&r.extensions[ot.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ko(t.attributes):e=r.indices+":"+ko(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+ko(r.targets[n]);return e}function ko(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function gl(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function L4(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const P4=new nt;class D4{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new n4,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new L2(this.options.manager):this.textureLoader=new k2(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Fu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Ji(s,o,i),Ni(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())s(h,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ot.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(_s.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=No[i.type],o=Fr[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new fn(c,a,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=No[i.type],c=Fr[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,x=i.normalized===!0;let y,g;if(p&&p!==u){const m=Math.floor(d/p),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let S=t.cache.get(_);S||(y=new c(o,m*p,i.count*p/h),S=new h2(y,p/h),t.cache.add(_,S)),g=new Xl(S,l,d%p/h,x)}else o===null?y=new c(i.count*l):y=new c(o,d,i.count*l),g=new fn(y,l,x);if(i.sparse!==void 0){const m=No.SCALAR,_=Fr[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,w=i.sparse.values.byteOffset||0,N=new _(a[1],S,i.sparse.count*m),I=new c(a[2],w,i.sparse.count*l);o!==null&&(g=new fn(g.array.slice(),g.itemSize,g.normalized));for(let L=0,H=N.length;L<H;L++){const E=N[L];if(g.setX(E,I[L*l]),l>=2&&g.setY(E,I[L*l+1]),l>=3&&g.setZ(E,I[L*l+2]),l>=4&&g.setW(E,I[L*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return h.magFilter=lh[d.magFilter]||en,h.minFilter=lh[d.minFilter]||hr,h.wrapS=ch[d.wrapS]||gn,h.wrapT=ch[d.wrapT]||gn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,p){let x=d;t.isImageBitmapLoader===!0&&(x=function(y){const g=new Kt(y);g.needsUpdate=!0,d(g)}),t.load(_s.resolveURL(u,s.path),x,void 0,p)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),u.userData.mimeType=a.mimeType||L4(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[ot.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[ot.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[ot.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Nu,$n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Du,$n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Rn}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[ot.KHR_MATERIALS_UNLIT]){const u=i[ot.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,s,t))}else{const u=s.pbrMetallicRoughness||{};if(o.color=new Ne(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],$t),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Dt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Hn);const h=s.alphaMode||Uo.OPAQUE;if(h===Uo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Uo.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==jn&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new st(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==jn&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==jn){const u=s.emissiveFactor;o.emissive=new Ne().setRGB(u[0],u[1],u[2],$t)}return s.emissiveTexture!==void 0&&a!==jn&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Dt)),Promise.all(c).then(function(){const u=new a(o);return s.name&&(u.name=s.name),Ni(u,s),t.associations.set(u,{materials:e}),s.extensions&&Ji(i,u,s),u})}createUniqueName(e){const t=ht.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return hh(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=I4(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[ot.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=hh(new kn,c,t),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?A4(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,x=h.length;p<x;p++){const y=h[p],g=a[p];let m;const _=c[p];if(g.mode===In.TRIANGLES||g.mode===In.TRIANGLE_STRIP||g.mode===In.TRIANGLE_FAN||g.mode===void 0)m=s.isSkinnedMesh===!0?new d2(y,_):new ft(y,_),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===In.TRIANGLE_STRIP?m.geometry=ah(m.geometry,hu):g.mode===In.TRIANGLE_FAN&&(m.geometry=ah(m.geometry,rl));else if(g.mode===In.LINES)m=new v2(y,_);else if(g.mode===In.LINE_STRIP)m=new jl(y,_);else if(g.mode===In.LINE_LOOP)m=new x2(y,_);else if(g.mode===In.POINTS)m=new y2(y,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&R4(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),Ni(m,s),g.extensions&&Ji(i,m,g),t.assignFinalMaterial(m),u.push(m)}for(let p=0,x=u.length;p<x;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return s.extensions&&Ji(i,u[0],s),u[0];const d=new gi;s.extensions&&Ji(i,d,s),t.associations.set(d,{meshes:e});for(let p=0,x=u.length;p<x;p++)d.add(u[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new hn(ip.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Na(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ni(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new nt;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Yl(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const p=i.channels[u],x=i.samplers[p.sampler],y=p.target,g=y.node,m=i.parameters!==void 0?i.parameters[x.input]:x.input,_=i.parameters!==void 0?i.parameters[x.output]:x.output;y.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",_)),c.push(x),h.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],p=u[1],x=u[2],y=u[3],g=u[4],m=[];for(let _=0,S=d.length;_<S;_++){const w=d[_],N=p[_],I=x[_],L=y[_],H=g[_];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const E=n._createAnimationTracks(w,N,I,L,H);if(E)for(let C=0;C<E.length;C++)m.push(E[C])}return new ul(s,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,P4)});for(let p=0,x=u.length;p<x;p++)h.add(u[p]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new Pu:c.length>1?h=new gi:c.length===1?h=c[0]:h=new Mt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=a),Ni(h,s),s.extensions&&Ji(n,h,s),s.matrix!==void 0){const u=new nt;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new gi;n.name&&(s.name=i.createUniqueName(n.name)),Ni(s,n),n.extensions&&Ji(t,s,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[d,p]of i.associations)(d instanceof $n||d instanceof Kt)&&u.set(d,p);return h.traverse(d=>{const p=i.associations.get(d);p!=null&&u.set(d,p)}),u};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,l=[];Li[s.path]===Li.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(Li[s.path]){case Li.weights:c=Yr;break;case Li.rotation:c=ur;break;case Li.position:case Li.scale:c=jr;break;default:switch(n.itemSize){case 1:c=Yr;break;case 2:case 3:default:c=jr;break}break}const h=i.interpolation!==void 0?E4[i.interpolation]:Wr,u=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){const x=new c(l[d]+"."+Li[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=gl(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ur?T4:Gu;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function N4(r,e,t){const n=e.attributes,i=new _i;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new O(l[0],l[1],l[2]),new O(c[0],c[1],c[2])),o.normalized){const h=gl(Fr[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new O,l=new O;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],p=d.min,x=d.max;if(p!==void 0&&x!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(x[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(x[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(x[2]))),d.normalized){const y=gl(Fr[d.componentType]);l.multiplyScalar(y)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new Jn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function hh(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in n){const o=ml[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return ut.workingColorSpace!==$t&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ut.workingColorSpace}" not supported.`),Ni(r,e),N4(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?C4(r,e.targets,t):r})}class ps{static createRoadTexture(){const e=document.createElement("canvas");e.width=2048,e.height=2048;const t=e.getContext("2d");t.fillStyle="#1c1f24",t.fillRect(0,0,2048,2048);const n=t.getImageData(0,0,2048,2048),i=n.data;for(let l=0;l<i.length;l+=4){const c=(Math.random()-.5)*35;i[l]=Math.max(15,Math.min(55,i[l]+c)),i[l+1]=Math.max(18,Math.min(58,i[l+1]+c)),i[l+2]=Math.max(22,Math.min(65,i[l+2]+c))}t.putImageData(n,0,0),t.fillStyle="rgba(10, 12, 15, 0.45)",t.fillRect(320,0,80,2048),t.fillRect(620,0,80,2048),t.fillRect(1320,0,80,2048),t.fillRect(1620,0,80,2048);const s=t.createRadialGradient(850,600,20,850,600,250);s.addColorStop(0,"rgba(12, 14, 18, 0.6)"),s.addColorStop(1,"rgba(12, 14, 18, 0)"),t.fillStyle=s,t.fillRect(500,300,700,600);const a=t.createRadialGradient(1450,1400,30,1450,1400,320);a.addColorStop(0,"rgba(12, 14, 18, 0.55)"),a.addColorStop(1,"rgba(12, 14, 18, 0)"),t.fillStyle=a,t.fillRect(1100,1e3,700,800),t.strokeStyle="#e6a817",t.lineWidth=26,t.beginPath(),t.moveTo(1004,0),t.lineTo(1004,2048),t.stroke(),t.beginPath(),t.moveTo(1044,0),t.lineTo(1044,2048),t.stroke(),t.strokeStyle="#e8ecf2",t.lineWidth=18,t.setLineDash([140,120]),t.beginPath(),t.moveTo(524,0),t.lineTo(524,2048),t.stroke(),t.beginPath(),t.moveTo(1524,0),t.lineTo(1524,2048),t.stroke(),t.setLineDash([]),t.strokeStyle="#dfe4ea",t.lineWidth=22,t.beginPath(),t.moveTo(90,0),t.lineTo(90,2048),t.stroke(),t.beginPath(),t.moveTo(1958,0),t.lineTo(1958,2048),t.stroke(),t.fillStyle="#2a2d33",t.beginPath(),t.arc(750,1100,48,0,Math.PI*2),t.fill(),t.strokeStyle="#1b1d22",t.lineWidth=8,t.stroke();const o=new ms(e);return o.wrapS=gn,o.wrapT=gn,o.anisotropy=8,o}static createCrosswalkTexture(){const e=document.createElement("canvas");e.width=2048,e.height=512;const t=e.getContext("2d");t.fillStyle="#1c1f24",t.fillRect(0,0,2048,512),t.fillStyle="#eaeff5",t.fillRect(60,420,1928,45),t.fillStyle="#f0f4f9";const n=90,i=65;for(let a=70;a<1980;a+=n+i)t.fillRect(a,40,n,340);const s=new ms(e);return s.wrapS=gn,s.wrapT=gn,s.anisotropy=8,s}static createSidewalkTexture(){const e=document.createElement("canvas");e.width=1024,e.height=1024;const t=e.getContext("2d");t.fillStyle="#9aa2ab",t.fillRect(0,0,1024,1024);const n=t.getImageData(0,0,1024,1024),i=n.data;for(let a=0;a<i.length;a+=4){const o=(Math.random()-.5)*28;i[a]=Math.max(130,Math.min(190,i[a]+o)),i[a+1]=Math.max(135,Math.min(195,i[a+1]+o)),i[a+2]=Math.max(140,Math.min(200,i[a+2]+o))}t.putImageData(n,0,0),t.strokeStyle="#5a626a",t.lineWidth=4;for(let a=0;a<=1024;a+=256)t.beginPath(),t.moveTo(a,0),t.lineTo(a,1024),t.stroke();for(let a=0;a<=1024;a+=256)t.beginPath(),t.moveTo(0,a),t.lineTo(1024,a),t.stroke();t.strokeStyle="#c5ccd4",t.lineWidth=2;for(let a=2;a<=1024;a+=256)t.beginPath(),t.moveTo(a,0),t.lineTo(a,1024),t.stroke();const s=new ms(e);return s.wrapS=gn,s.wrapT=gn,s.repeat.set(8,8),s.anisotropy=8,s}static createGrassTexture(){const e=document.createElement("canvas");e.width=1024,e.height=1024;const t=e.getContext("2d");t.fillStyle="#2f5b20",t.fillRect(0,0,1024,1024);const n=t.getImageData(0,0,1024,1024),i=n.data;for(let a=0;a<i.length;a+=4){const o=(Math.random()-.5)*45;i[a]=Math.max(25,Math.min(65,i[a]+o*.6)),i[a+1]=Math.max(55,Math.min(125,i[a+1]+o)),i[a+2]=Math.max(15,Math.min(45,i[a+2]+o*.4))}t.putImageData(n,0,0);const s=new ms(e);return s.wrapS=gn,s.wrapT=gn,s.repeat.set(16,16),s.anisotropy=8,s}}class U4{constructor(e,t){this.scene=e,this.segmentationPipeline=t,this.loader=new Oa,this.collisionBoxes=[],this.buildingMeshes=[],this.trafficLights=[],this.streetlights=[],this.trafficSignalState="GREEN_NS",this.trafficTimer=0,this.initAtmosphereAndLighting(),this.createRoadsAndSidewalks(),this.createCityBlocksAndBuildings(),this.createPropsAndSignals(),this.createPark(),this.createNeonSignage(),this.createUrbanStreetProps()}initAtmosphereAndLighting(){const e=`
      varying vec3 vWorldPosition;
      void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,t=`
      uniform vec3 topColor;
      uniform vec3 bottomColor;
      uniform float offset;
      uniform float exponent;
      varying vec3 vWorldPosition;
      void main() {
        float h = normalize(vWorldPosition + offset).y;
        gl_FragColor = vec4(mix(bottomColor, topColor, max(pow(max(h, 0.0), exponent), 0.0)), 1.0);
      }
    `,n={topColor:{value:new Ne(3832789)},bottomColor:{value:new Ne(14083312)},offset:{value:33},exponent:{value:.6}},i=new bs(300,32,15),s=new Zn({vertexShader:e,fragmentShader:t,uniforms:n,side:dn,depthWrite:!1}),a=new ft(i,s);this.scene.add(a),this.segmentationPipeline.registerObject(a,{semanticClass:wt.SKY,categoryName:"Sky",label:"Atmospheric Sky"}),this.scene.fog=new ql(14083312,.0075);const o=new P2(16774892,4016988,1.1);o.position.set(0,50,0),this.scene.add(o),this.sunLight=new zu(16774368,2.2),this.sunLight.position.set(45,65,35),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=1024,this.sunLight.shadow.mapSize.height=1024,this.sunLight.shadow.camera.near=10,this.sunLight.shadow.camera.far=160;const l=55;this.sunLight.shadow.camera.left=-l,this.sunLight.shadow.camera.right=l,this.sunLight.shadow.camera.top=l,this.sunLight.shadow.camera.bottom=-l,this.sunLight.shadow.bias=-4e-4,this.sunLight.shadow.radius=2,this.scene.add(this.sunLight)}createRoadsAndSidewalks(){const e=ps.createRoadTexture(),t=ps.createCrosswalkTexture(),n=ps.createSidewalkTexture();e.repeat.set(1,10);const i=new Rn({map:e,roughness:.38,metalness:.22,envMapIntensity:1.2}),s=new Ui(14,140),a=new ft(s,i);a.rotation.x=-Math.PI/2,a.position.set(0,.01,0),a.receiveShadow=!0,this.scene.add(a),this.segmentationPipeline.registerObject(a,{semanticClass:wt.ROAD,categoryName:"Road",label:"Main Avenue (North-South)"});const o=ps.createRoadTexture();o.repeat.set(1,10);const l=new Rn({map:o,roughness:.38,metalness:.22,envMapIntensity:1.2}),c=new Ui(12,140),h=new ft(c,l);h.rotation.x=-Math.PI/2,h.rotation.z=Math.PI/2,h.position.set(0,.015,0),h.receiveShadow=!0,this.scene.add(h),this.segmentationPipeline.registerObject(h,{semanticClass:wt.ROAD,categoryName:"Road",label:"Cross Street (East-West)"});const u=new Ui(14,14),d=new Rn({color:2237738,roughness:.9,metalness:.05}),p=new ft(u,d);p.rotation.x=-Math.PI/2,p.position.set(0,.02,0),p.receiveShadow=!0,this.scene.add(p),this.segmentationPipeline.registerObject(p,{semanticClass:wt.ROAD,categoryName:"Road",label:"Central Intersection"});const x=new Rn({map:t,roughness:.75,metalness:.05,transparent:!0});[{x:0,z:9.5,rotY:0,w:14,l:3.5,label:"Crosswalk North"},{x:0,z:-9.5,rotY:0,w:14,l:3.5,label:"Crosswalk South"},{x:8.5,z:0,rotY:Math.PI/2,w:12,l:3.5,label:"Crosswalk East"},{x:-8.5,z:0,rotY:Math.PI/2,w:12,l:3.5,label:"Crosswalk West"}].forEach(_=>{const S=new Ui(_.w,_.l),w=new ft(S,x);w.rotation.x=-Math.PI/2,w.rotation.z=_.rotY,w.position.set(_.x,.025,_.z),w.receiveShadow=!0,this.scene.add(w),this.segmentationPipeline.registerObject(w,{semanticClass:wt.ROAD,categoryName:"Road",label:_.label})});const g=new Rn({map:n,roughness:.82,metalness:.1});[{x:38,z:38,w:60,l:60,name:"North-East Block Sidewalk"},{x:-38,z:38,w:60,l:60,name:"North-West Block Sidewalk"},{x:38,z:-38,w:60,l:60,name:"South-East Block Sidewalk"},{x:-38,z:-38,w:60,l:60,name:"South-West Block Sidewalk"}].forEach(_=>{const S=new Dn(_.w,.18,_.l),w=new ft(S,g);w.position.set(_.x,.09,_.z),w.receiveShadow=!0,w.castShadow=!0,this.scene.add(w),this.segmentationPipeline.registerObject(w,{semanticClass:wt.SIDEWALK,categoryName:"Sidewalk",label:_.name})})}createCityBlocksAndBuildings(){[{model:"/assets/buildings/building_large1.glb",x:22,z:24,scale:2.2,rotY:0,w:16,l:16,label:"Vertex Corporate Tower"},{model:"/assets/buildings/building_4story.glb",x:44,z:22,scale:2.4,rotY:-Math.PI/2,w:14,l:14,label:"Metro Center Plaza"},{model:"/assets/buildings/building_store.glb",x:20,z:46,scale:2.2,rotY:0,w:12,l:12,label:"City Galleria Retail"},{model:"/assets/buildings/building_2story.glb",x:42,z:46,scale:2.4,rotY:Math.PI,w:14,l:14,label:"Grandview Apartments"},{model:"/assets/buildings/building_large2.glb",x:-22,z:24,scale:2.2,rotY:Math.PI/2,w:16,l:16,label:"Nexus Financial Tower"},{model:"/assets/buildings/building_big3.glb",x:-44,z:22,scale:2.2,rotY:0,w:16,l:16,label:"Apex Tech Headquarters"},{model:"/assets/buildings/building_4story.glb",x:-22,z:46,scale:2.4,rotY:Math.PI,w:14,l:14,label:"Horizon Suites"},{model:"/assets/buildings/building_store.glb",x:-42,z:46,scale:2.2,rotY:-Math.PI/2,w:12,l:12,label:"Cyber Cafe & Deli"},{model:"/assets/buildings/building_big3.glb",x:24,z:-24,scale:2.2,rotY:-Math.PI/2,w:16,l:16,label:"Elysium Highrise"},{model:"/assets/buildings/building_large1.glb",x:48,z:-24,scale:2.1,rotY:Math.PI,w:16,l:16,label:"Skyline Business Center"},{model:"/assets/buildings/building_2story.glb",x:22,z:-48,scale:2.4,rotY:0,w:14,l:14,label:"Parkside Lofts"},{model:"/assets/buildings/building_store.glb",x:44,z:-48,scale:2.2,rotY:Math.PI/2,w:12,l:12,label:"Boutique Emporium"},{model:"/assets/buildings/building_large2.glb",x:-24,z:-24,scale:2.2,rotY:0,w:16,l:16,label:"Municipal Medical Tower"},{model:"/assets/buildings/building_4story.glb",x:-48,z:-24,scale:2.4,rotY:Math.PI/2,w:14,l:14,label:"Civic Research Institute"}].forEach((t,n)=>{this.loader.load(t.model,i=>{const s=i.scene;s.position.set(t.x,.18,t.z),s.scale.set(t.scale,t.scale,t.scale),s.rotation.y=t.rotY,s.traverse(o=>{o.isMesh&&(o.castShadow=!0,o.receiveShadow=!0)}),this.scene.add(s),this.buildingMeshes.push(s);const a=100+n;this.segmentationPipeline.registerObject(s,{semanticClass:wt.BUILDING,instanceId:a,categoryName:"Building Architecture",label:t.label}),this.collisionBoxes.push({min:new O(t.x-t.w*.5,0,t.z-t.l*.5),max:new O(t.x+t.w*.5,50,t.z+t.l*.5)})},void 0,i=>console.warn(`Error loading building model ${t.model}:`,i))})}createPropsAndSignals(){[{x:8.5,z:20,rotY:Math.PI/2},{x:-8.5,z:20,rotY:-Math.PI/2},{x:8.5,z:42,rotY:Math.PI/2},{x:-8.5,z:42,rotY:-Math.PI/2},{x:8.5,z:-20,rotY:Math.PI/2},{x:-8.5,z:-20,rotY:-Math.PI/2},{x:8.5,z:-42,rotY:Math.PI/2},{x:-8.5,z:-42,rotY:-Math.PI/2},{x:22,z:7.5,rotY:Math.PI},{x:-22,z:7.5,rotY:Math.PI},{x:22,z:-7.5,rotY:0},{x:-22,z:-7.5,rotY:0}].forEach((i,s)=>{this.loader.load("/assets/environment/streetlight.glb",a=>{const o=a.scene;o.position.set(i.x,.18,i.z),o.scale.set(1.4,1.4,1.4),o.rotation.y=i.rotY,o.traverse(c=>{c.isMesh&&(c.castShadow=!0,c.receiveShadow=!0)}),this.scene.add(o),this.segmentationPipeline.registerObject(o,{semanticClass:wt.PROP,instanceId:200+s,categoryName:"Streetlight",label:`Streetlight_${s+1}`});const l=new dl(16773324,.9,14,1.5);l.position.set(i.x,4.2,i.z),this.scene.add(l),this.streetlights.push(l)})}),[{x:8.5,z:8.5,rotY:-Math.PI*.75,id:1},{x:-8.5,z:8.5,rotY:-Math.PI*.25,id:2},{x:8.5,z:-8.5,rotY:Math.PI*.75,id:3},{x:-8.5,z:-8.5,rotY:Math.PI*.25,id:4}].forEach(i=>{this.loader.load("/assets/environment/traffic_light.glb",s=>{const a=s.scene;a.position.set(i.x,.18,i.z),a.scale.set(1.4,1.4,1.4),a.rotation.y=i.rotY,a.traverse(h=>{h.isMesh&&(h.castShadow=!0)}),this.scene.add(a);const o=new bs(.18,16,16),l=new jn({color:65348}),c=new ft(o,l);c.position.set(i.x,3.6,i.z),this.scene.add(c),this.trafficLights.push({mesh:a,bulb:c,id:i.id}),this.segmentationPipeline.registerObject(a,{semanticClass:wt.PROP,instanceId:300+i.id,categoryName:"Traffic Signal",label:`Traffic Signal #${i.id}`})})}),[{model:"/assets/environment/sign_stop.glb",x:8.2,z:12,rotY:0,label:"Stop Sign (North)"},{model:"/assets/environment/sign_stop.glb",x:-8.2,z:-12,rotY:Math.PI,label:"Stop Sign (South)"},{model:"/assets/environment/sign_noparking.glb",x:8.2,z:30,rotY:Math.PI/2,label:"No Parking Sign"},{model:"/assets/environment/sign_noparking.glb",x:-8.2,z:-30,rotY:-Math.PI/2,label:"No Parking Sign"}].forEach((i,s)=>{this.loader.load(i.model,a=>{const o=a.scene;o.position.set(i.x,.18,i.z),o.scale.set(1.3,1.3,1.3),o.rotation.y=i.rotY,this.scene.add(o),this.segmentationPipeline.registerObject(o,{semanticClass:wt.PROP,instanceId:400+s,categoryName:"Road Sign",label:i.label})})})}createPark(){const e=ps.createGrassTexture(),t=new Rn({map:e,roughness:.95,metalness:.02}),n=new Dn(32,.22,32),i=new ft(n,t);i.position.set(-36,.11,-44),i.receiveShadow=!0,this.scene.add(i),this.segmentationPipeline.registerObject(i,{semanticClass:wt.TREE,categoryName:"Urban Park",label:"Central Green District"}),[{model:"/assets/environment/tree_birch1.glb",x:-28,z:-36,scale:2.2,label:"Birch Tree 1"},{model:"/assets/environment/tree_birch2.glb",x:-44,z:-36,scale:2.5,label:"Birch Tree 2"},{model:"/assets/environment/tree_birch3.glb",x:-36,z:-52,scale:2.3,label:"Birch Tree 3"},{model:"/assets/environment/tree_birch1.glb",x:-26,z:-50,scale:2.4,label:"Birch Tree 4"},{model:"/assets/environment/tree_birch2.glb",x:-46,z:-50,scale:2.1,label:"Birch Tree 5"},{model:"/assets/environment/tree_birch3.glb",x:10,z:32,scale:1.8,label:"Boulevard Tree (NE 1)"},{model:"/assets/environment/tree_birch1.glb",x:10,z:54,scale:1.8,label:"Boulevard Tree (NE 2)"},{model:"/assets/environment/tree_birch2.glb",x:-10,z:32,scale:1.8,label:"Boulevard Tree (NW 1)"},{model:"/assets/environment/tree_birch3.glb",x:-10,z:54,scale:1.8,label:"Boulevard Tree (NW 2)"}].forEach((a,o)=>{this.loader.load(a.model,l=>{const c=l.scene;c.position.set(a.x,.18,a.z),c.scale.set(a.scale,a.scale,a.scale),c.rotation.y=Math.random()*Math.PI*2,c.traverse(h=>{h.isMesh&&(h.castShadow=!0,h.receiveShadow=!0)}),this.scene.add(c),this.segmentationPipeline.registerObject(c,{semanticClass:wt.TREE,instanceId:500+o,categoryName:"Tree",label:a.label})})})}createNeonSignage(){const e=(n,i,s,a)=>{const o=document.createElement("canvas");o.width=512,o.height=256;const l=o.getContext("2d");return l.fillStyle="#0a0d14",l.fillRect(0,0,512,256),l.strokeStyle=a,l.lineWidth=8,l.strokeRect(16,16,480,224),l.strokeStyle=s,l.lineWidth=4,l.strokeRect(22,22,468,212),l.font="bold 44px sans-serif",l.textAlign="center",l.fillStyle=s,l.shadowColor=a,l.shadowBlur=18,l.fillText(n,256,115),l.font="600 22px sans-serif",l.fillStyle=a,l.shadowBlur=12,l.fillText(i,256,165),new ms(o)};[{title:"VICE NIGHTS",subtitle:"LOUNGE & CLUB",color:"#ff007f",glow:"#ff55aa",x:14,y:5.5,z:46,rotY:-Math.PI/2,lightColor:16711807,label:"Neon Sign (Vice Nights)"},{title:"CYBER DELI",subtitle:"24/7 ROAST & BREW",color:"#ffaa00",glow:"#ffd566",x:-36,y:5.2,z:46,rotY:0,lightColor:16755200,label:"Neon Sign (Cyber Deli)"},{title:"NEXUS TOWER",subtitle:"FINANCIAL HEADQUARTERS",color:"#00f0ff",glow:"#80f8ff",x:-14,y:9,z:24,rotY:Math.PI/2,lightColor:61695,label:"Neon Sign (Nexus Tower)"},{title:"METRO APEX",subtitle:"LUXURY SUITES & DINING",color:"#00ff88",glow:"#80ffcc",x:38,y:8.5,z:22,rotY:0,lightColor:65416,label:"Neon Sign (Metro Apex)"}].forEach((n,i)=>{const s=e(n.title,n.subtitle,n.color,n.glow),a=new Rn({map:s,emissive:new Ne(n.lightColor),emissiveMap:s,emissiveIntensity:1.6,roughness:.2,metalness:.8}),o=new Dn(7.5,3.8,.4),l=new ft(o,a);l.position.set(n.x,n.y,n.z),l.rotation.y=n.rotY,l.castShadow=!0,this.scene.add(l);const c=new dl(n.lightColor,1.8,16,1.8);c.position.set(n.x,n.y-1.2,n.z),this.scene.add(c),this.segmentationPipeline.registerObject(l,{semanticClass:wt.PROP,instanceId:600+i,categoryName:"Neon Sign",label:n.label})})}createUrbanStreetProps(){const e=[{x:7.8,z:12},{x:-7.8,z:12},{x:7.8,z:-12},{x:-7.8,z:-12}],t=new Rn({color:14492194,roughness:.35,metalness:.7}),n=new Rn({color:15120384,roughness:.4,metalness:.5});e.forEach((i,s)=>{const a=new gi,o=new ft(new Ca(.2,.22,.75,12),t);o.position.y=.38,o.castShadow=!0,a.add(o);const l=new ft(new bs(.21,12,8,0,Math.PI*2,0,Math.PI/2),n);l.position.y=.75,a.add(l);const c=new ft(new Ca(.08,.08,.55,8),n);c.rotation.z=Math.PI/2,c.position.y=.5,a.add(c),a.position.set(i.x,.18,i.z),this.scene.add(a),this.segmentationPipeline.registerObject(a,{semanticClass:wt.PROP,instanceId:700+s,categoryName:"Fire Hydrant",label:`Fire Hydrant #${s+1}`})})}update(e){this.trafficTimer+=e,this.trafficTimer>18&&(this.trafficTimer=0);let t=65348;this.trafficTimer>15?t=16755200:this.trafficTimer>8&&(t=16720418);for(let n=0;n<this.trafficLights.length;n++)this.trafficLights[n].bulb&&this.trafficLights[n].bulb.material.color.setHex(t)}getCollisionBoxes(){return this.collisionBoxes}getBuildingMeshes(){return this.buildingMeshes}}class k4{constructor(e,t,n){this.scene=e,this.cameraController=t,this.segmentationPipeline=n,this.combatSystem=null,this.root=new gi,this.root.position.set(0,0,8),this.scene.add(this.root),this.velocity=new O,this.walkSpeed=4.2,this.runSpeed=8.5,this.aimStrafeSpeed=3.2,this.acceleration=18,this.friction=12,this.rotationSpeed=14,this.verticalVelocity=0,this.gravity=-24,this.jumpForce=8,this.isGrounded=!0,this.groundY=0,this.keys={forward:!1,backward:!1,left:!1,right:!1,sprint:!1,jump:!1},this.isAiming=!1,this.isFiring=!1,this.mixer=null,this.actions={},this.activeAction=null,this.currentAnimName="Idle",this.modelLoaded=!1,this.collisionBoxes=[],this.bones={},this.initInput(),this.loadModel()}setCombatSystem(e){this.combatSystem=e,this.model&&this.combatSystem&&this.combatSystem.attachWeaponToPlayer(this.model)}initInput(){window.addEventListener("keydown",e=>{switch(e.code){case"KeyW":case"ArrowUp":this.keys.forward=!0;break;case"KeyS":case"ArrowDown":this.keys.backward=!0;break;case"KeyA":case"ArrowLeft":this.keys.left=!0;break;case"KeyD":case"ArrowRight":this.keys.right=!0;break;case"ShiftLeft":case"ShiftRight":this.keys.sprint=!0;break;case"Space":this.isGrounded&&(this.verticalVelocity=this.jumpForce,this.isGrounded=!1);break;case"KeyR":this.combatSystem&&this.combatSystem.reload();break}}),window.addEventListener("keyup",e=>{switch(e.code){case"KeyW":case"ArrowUp":this.keys.forward=!1;break;case"KeyS":case"ArrowDown":this.keys.backward=!1;break;case"KeyA":case"ArrowLeft":this.keys.left=!1;break;case"KeyD":case"ArrowRight":this.keys.right=!1;break;case"ShiftLeft":case"ShiftRight":this.keys.sprint=!1;break}})}setCollisionBoxes(e){this.collisionBoxes=e}loadModel(){new Oa().load("/assets/characters/player.glb",t=>{this.model=t.scene,this.model.scale.set(1,1,1),this.model.position.set(0,0,0),this.model.traverse(n=>{n.isMesh&&(n.castShadow=!0,n.receiveShadow=!0,n.material&&(n.material.roughness=.65,n.material.metalness=.15)),n.isBone&&n.name&&(/RightArm/i.test(n.name)&&(this.bones.rightArm=n),/RightForeArm/i.test(n.name)&&(this.bones.rightForeArm=n),/LeftArm/i.test(n.name)&&(this.bones.leftArm=n),/LeftForeArm/i.test(n.name)&&(this.bones.leftForeArm=n),/Spine/i.test(n.name)&&(this.bones.spine=n))}),this.root.add(this.model),this.segmentationPipeline.registerObject(this.model,{semanticClass:wt.PEDESTRIAN,instanceId:1,categoryName:"Playable Operative",label:"Special Operative (You)"}),this.mixer=new fl(this.model),t.animations.forEach(n=>{this.actions[n.name]=this.mixer.clipAction(n)}),this.actions.Idle&&(this.activeAction=this.actions.Idle,this.activeAction.play(),this.currentAnimName="Idle"),this.combatSystem&&this.combatSystem.attachWeaponToPlayer(this.model),this.modelLoaded=!0,console.log("Player character model loaded successfully with animations:",Object.keys(this.actions))},void 0,t=>console.error("Failed to load player character model:",t))}setAnimation(e,t=.22){if(!this.actions[e]||this.currentAnimName===e)return;const n=this.activeAction,i=this.actions[e];i.reset(),i.time=0,i.enabled=!0,i.setEffectiveTimeScale(1),i.setEffectiveWeight(1),n&&n.crossFadeTo(i,t,!0),i.play(),this.activeAction=i,this.currentAnimName=e}update(e,t,n=[]){this.mixer&&this.mixer.update(e);const i=this.cameraController.getForwardVector(),s=this.cameraController.getRightVector(),a=new O;this.keys.forward&&a.add(i),this.keys.backward&&a.sub(i),this.keys.right&&a.add(s),this.keys.left&&a.sub(s);const o=a.lengthSq()>.001;let l=0;if(o){a.normalize(),l=this.keys.sprint?this.runSpeed:this.walkSpeed;let m=Math.atan2(a.x,a.z)+Math.PI-this.root.rotation.y;for(;m>Math.PI;)m-=Math.PI*2;for(;m<-Math.PI;)m+=Math.PI*2;const _=1-Math.exp(-18*e);this.root.rotation.y+=m*_,this.keys.sprint?this.setAnimation("Run",.22):this.setAnimation("Walk",.22)}else this.setAnimation("Idle",.25);const c=a.clone().multiplyScalar(l),u=1-Math.exp(-(o?14:10)*e);this.velocity.lerp(c,u),this.isGrounded||(this.verticalVelocity+=this.gravity*e,this.root.position.y+=this.verticalVelocity*e,this.root.position.y<=this.groundY&&(this.root.position.y=this.groundY,this.verticalVelocity=0,this.isGrounded=!0));const d=this.root.position.clone().add(new O(this.velocity.x*e,0,this.velocity.z*e)),p=.45;let x=!1;for(let g=0;g<this.collisionBoxes.length;g++){const m=this.collisionBoxes[g];if(d.x>=m.min.x-p&&d.x<=m.max.x+p&&d.z>=m.min.z-p&&d.z<=m.max.z+p){x=!0;break}}if(!x)this.root.position.x=d.x,this.root.position.z=d.z;else{const g=this.root.position.clone();g.x+=this.velocity.x*e;let m=!1;for(const w of this.collisionBoxes)if(g.x>=w.min.x-p&&g.x<=w.max.x+p&&g.z>=w.min.z-p&&g.z<=w.max.z+p){m=!0;break}m||(this.root.position.x=g.x);const _=this.root.position.clone();_.z+=this.velocity.z*e;let S=!1;for(const w of this.collisionBoxes)if(_.x>=w.min.x-p&&_.x<=w.max.x+p&&_.z>=w.min.z-p&&_.z<=w.max.z+p){S=!0;break}S||(this.root.position.z=_.z)}const y=this.velocity.length();this.isGrounded&&(y>5.5?this.setAnimation("Run",.18):y>.4?this.setAnimation("Walk",.22):this.setAnimation("Idle",.25))}getPosition(){return this.root.position}}class O4{constructor(e,t,n,i=[]){this.camera=e,this.target=t,this.domElement=n,this.collisionObjects=i,this.idealDistance=4.8,this.idealHeight=1.95,this.camera.fov=65,this.currentPosition=new O,this.currentLookAt=new O,this.currentDistance=this.idealDistance,this.targetYaw=0,this.targetPitch=.2,this.yaw=0,this.pitch=.2,this.minPitch=-.32,this.maxPitch=1.15,this.mouseSensitivity=.0022,this.isMouseDown=!1,this.raycaster=new $2,this.initInput()}initInput(){this.domElement.addEventListener("click",()=>{var e,t;document.pointerLockElement!==this.domElement&&((t=(e=this.domElement).requestPointerLock)==null||t.call(e))}),this.domElement.addEventListener("mousedown",e=>{this.isMouseDown=!0}),window.addEventListener("mouseup",()=>{this.isMouseDown=!1}),window.addEventListener("mousemove",e=>{if(document.pointerLockElement===this.domElement||this.isMouseDown){const t=e.movementX||0,n=e.movementY||0;this.targetYaw-=t*this.mouseSensitivity,this.targetPitch+=n*this.mouseSensitivity,this.targetPitch=Math.max(this.minPitch,Math.min(this.maxPitch,this.targetPitch))}}),this.domElement.addEventListener("contextmenu",e=>e.preventDefault())}setCollisionObjects(e){this.collisionObjects=e}update(e){if(!this.target)return;const t=1-Math.exp(-24*e);this.yaw+=(this.targetYaw-this.yaw)*t,this.pitch+=(this.targetPitch-this.pitch)*t;const n=this.target.position,i=new O(n.x,n.y+this.idealHeight,n.z),s=Math.cos(this.pitch),a=Math.sin(this.pitch),o=Math.sin(this.yaw),l=Math.cos(this.yaw),c=new O(o*s,a,l*s).multiplyScalar(this.idealDistance),u=i.clone().add(c).clone().sub(i).normalize();this.raycaster.set(i,u),this.raycaster.far=this.idealDistance;let d=this.idealDistance;if(this.collisionObjects&&this.collisionObjects.length>0){const _=this.collisionObjects.filter(S=>S&&S.layers);if(_.length>0){const S=this.raycaster.intersectObjects(_,!0);S.length>0&&S[0].distance<this.idealDistance&&(d=Math.max(1,S[0].distance-.3))}}const p=1-Math.exp(-18*e);this.currentDistance+=(d-this.currentDistance)*p;const x=new O(o*s,a,l*s).multiplyScalar(this.currentDistance),y=i.clone().add(x),g=i.clone().add(this.getForwardVector().multiplyScalar(20)),m=1-Math.exp(-14*e);this.currentPosition.lerp(y,m),this.currentLookAt.lerp(g,m),this.camera.position.copy(this.currentPosition),this.camera.lookAt(this.currentLookAt)}getForwardVector(){const e=new O(0,0,-1);return e.applyAxisAngle(new O(0,1,0),this.yaw),e.y=0,e.normalize()}getRightVector(){const e=new O(1,0,0);return e.applyAxisAngle(new O(0,1,0),this.yaw),e.y=0,e.normalize()}}class F4{constructor(){this.ctx=null,this.masterGain=null,this.initialized=!1}init(){if(!this.initialized)try{const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.45,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.initialized=!0}catch(e){console.warn("Web Audio not supported:",e)}}ensureContext(){this.initialized||this.init(),this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}playGunfire(){if(this.ensureContext(),!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.sampleRate*.18,n=this.ctx.createBuffer(1,t,this.ctx.sampleRate),i=n.getChannelData(0);for(let h=0;h<t;h++)i[h]=(Math.random()*2-1)*Math.exp(-h/(t*.18));const s=this.ctx.createBufferSource();s.buffer=n;const a=this.ctx.createBiquadFilter();a.type="bandpass",a.frequency.setValueAtTime(1400,e),a.Q.setValueAtTime(1.8,e);const o=this.ctx.createGain();o.gain.setValueAtTime(.9,e),o.gain.exponentialRampToValueAtTime(.001,e+.15),s.connect(a),a.connect(o),o.connect(this.masterGain),s.start(e),s.stop(e+.18);const l=this.ctx.createOscillator();l.type="triangle",l.frequency.setValueAtTime(140,e),l.frequency.exponentialRampToValueAtTime(32,e+.14);const c=this.ctx.createGain();c.gain.setValueAtTime(1,e),c.gain.exponentialRampToValueAtTime(.001,e+.16),l.connect(c),c.connect(this.masterGain),l.start(e),l.stop(e+.16)}playHitMarker(e=!1){if(this.ensureContext(),!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine";const s=e?2400:1600;n.frequency.setValueAtTime(s,t),n.frequency.exponentialRampToValueAtTime(s*.7,t+.08),i.gain.setValueAtTime(.55,t),i.gain.exponentialRampToValueAtTime(.001,t+.08),n.connect(i),i.connect(this.masterGain),n.start(t),n.stop(t+.08)}playReload(){if(this.ensureContext(),!this.ctx)return;const e=this.ctx.currentTime;this.triggerMechanicalClick(e,600,.04),this.triggerMechanicalClick(e+.35,950,.06),this.triggerMechanicalClick(e+.7,1400,.08)}triggerMechanicalClick(e,t,n){const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="square",i.frequency.setValueAtTime(t,e),i.frequency.exponentialRampToValueAtTime(120,e+n),s.gain.setValueAtTime(.35,e),s.gain.exponentialRampToValueAtTime(.001,e+n),i.connect(s),s.connect(this.masterGain),i.start(e),i.stop(e+n)}playDryFire(){this.ensureContext(),this.ctx&&this.triggerMechanicalClick(this.ctx.currentTime,850,.035)}playScanPulse(){if(this.ensureContext(),!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(220,e),t.frequency.exponentialRampToValueAtTime(1200,e+.32);const i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(800,e),i.frequency.exponentialRampToValueAtTime(3200,e+.32),n.gain.setValueAtTime(.01,e),n.gain.linearRampToValueAtTime(.4,e+.12),n.gain.exponentialRampToValueAtTime(.001,e+.55),t.connect(i),i.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.55)}playEnemyFire(){if(this.ensureContext(),!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(480,e),t.frequency.exponentialRampToValueAtTime(90,e+.22),n.gain.setValueAtTime(.4,e),n.gain.exponentialRampToValueAtTime(.001,e+.22),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.22)}playEnemyDestroyed(){if(this.ensureContext(),!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(110,e),t.frequency.exponentialRampToValueAtTime(20,e+.5),n.gain.setValueAtTime(.8,e),n.gain.exponentialRampToValueAtTime(.001,e+.6),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.6)}playPlayerHurt(){if(this.ensureContext(),!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(160,e),t.frequency.linearRampToValueAtTime(80,e+.2),n.gain.setValueAtTime(.5,e),n.gain.exponentialRampToValueAtTime(.001,e+.2),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.2)}}class B4{constructor(e,t,n){this.scene=e,this.camera=t,this.segmentationPipeline=n,this.audio=new F4,this.isAlive=!0,this.playerHealth=100,this.playerMaxHealth=100}attachWeaponToPlayer(e){}tryFire(){return!1}reload(){}damageEnemy(){}handleEnemyAttacks(){}update(e,t,n,i){}}class z4{constructor(e,t){this.scene=e,this.segmentationPipeline=t,this.loader=new Oa,this.vehicles=[],this.vehicleCollisionBoxes=[],this.nextInstanceId=10,this.spawnVehicles()}spawnVehicles(){[{model:"/assets/vehicles/car_taxi.glb",name:"City Taxi Cab",color:16038210,speed:9.5,lane:"NS_NORTH",startZ:-45,scale:1.15},{model:"/assets/vehicles/car_police.glb",name:"Police Interceptor",color:1779768,speed:11,lane:"NS_SOUTH",startZ:50,scale:1.15},{model:"/assets/vehicles/car_suv.glb",name:"Urban SUV",color:3046706,speed:8.8,lane:"NS_NORTH",startZ:15,scale:1.2},{model:"/assets/vehicles/car_sedan.glb",name:"Sedan Executive",color:4545124,speed:9,lane:"NS_SOUTH",startZ:-10,scale:1.15},{model:"/assets/vehicles/car_sports.glb",name:"Velocity Sports Coupe",color:13840175,speed:12.5,lane:"EW_EAST",startX:-40,scale:1.15},{model:"/assets/vehicles/car_taxi.glb",name:"Metro City Taxi",color:166097,speed:9.2,lane:"EW_WEST",startX:45,scale:1.15},{model:"/assets/vehicles/car_sports.glb",name:"Crimson Sports Coupe",color:16716066,speed:12,lane:"NS_NORTH",startZ:-60,scale:1.15}].forEach(n=>{this.loader.load(n.model,i=>{const s=i.scene;s.scale.set(n.scale,n.scale,n.scale);const a=[];s.traverse(_=>{if(_.isMesh){_.castShadow=!0,_.receiveShadow=!0,_.material&&(_.material.metalness=.85,_.material.roughness=.18,_.material.envMapIntensity=1.4);const S=_.name.toLowerCase();(S.includes("wheel")||S.includes("tire"))&&(a.push(_),_.material&&(_.material.metalness=.1,_.material.roughness=.7))}});const o=new jn({color:16775914}),l=new jn({color:16717093}),c=new ft(new Dn(.28,.15,.08),o);c.position.set(-.75,.65,2.15),s.add(c);const h=new ft(new Dn(.28,.15,.08),o);h.position.set(.75,.65,2.15),s.add(h);const u=new Bu(16775914,2.5,22,Math.PI/5,.45,1.2);u.position.set(0,.75,2.2);const d=new Mt;d.position.set(0,0,16),s.add(d),u.target=d,s.add(u);const p=new ft(new Dn(.28,.15,.08),l);p.position.set(-.75,.65,-2.15),s.add(p);const x=new ft(new Dn(.28,.15,.08),l);x.position.set(.75,.65,-2.15),s.add(x);let y=new O,g=0;n.lane==="NS_NORTH"?(y.set(3.5,0,n.startZ),g=0):n.lane==="NS_SOUTH"?(y.set(-3.5,0,n.startZ),g=Math.PI):n.lane==="EW_EAST"?(y.set(n.startX,0,3),g=Math.PI/2):n.lane==="EW_WEST"&&(y.set(n.startX,0,-3),g=-Math.PI/2),s.position.copy(y),s.rotation.y=g,this.scene.add(s);const m=this.nextInstanceId++;this.segmentationPipeline.registerObject(s,{semanticClass:wt.VEHICLE,instanceId:m,categoryName:"Vehicle",label:`${n.name} [ID:${m}]`}),this.vehicles.push({model:s,wheels:a,speed:n.speed,lane:n.lane,instanceId:m,name:n.name,isMoving:!0,length:4.5,width:2.1})},void 0,i=>console.warn(`Failed loading vehicle ${n.model}:`,i))}),[{model:"/assets/vehicles/car_sedan.glb",x:6.2,z:28,rotY:0,name:"Parked Sedan"},{model:"/assets/vehicles/car_suv.glb",x:6.2,z:36,rotY:0,name:"Parked SUV"},{model:"/assets/vehicles/car_taxi.glb",x:-6.2,z:-28,rotY:Math.PI,name:"Parked Taxi"},{model:"/assets/vehicles/car_sports.glb",x:-6.2,z:-38,rotY:Math.PI,name:"Parked Sports Car"},{model:"/assets/vehicles/car_sedan.glb",x:28,z:5.5,rotY:Math.PI/2,name:"Parked Sedan"}].forEach(n=>{this.loader.load(n.model,i=>{const s=i.scene;s.scale.set(1.15,1.15,1.15),s.position.set(n.x,0,n.z),s.rotation.y=n.rotY,s.traverse(o=>{o.isMesh&&(o.castShadow=!0,o.receiveShadow=!0)}),this.scene.add(s);const a=this.nextInstanceId++;this.segmentationPipeline.registerObject(s,{semanticClass:wt.VEHICLE,instanceId:a,categoryName:"Vehicle",label:`${n.name} [ID:${a}]`}),this.vehicles.push({model:s,wheels:[],speed:0,isMoving:!1,instanceId:a,name:n.name,length:4.5,width:2.1})})})}update(e){for(let n=0;n<this.vehicles.length;n++){const i=this.vehicles[n];if(!i.isMoving)continue;const s=i.speed*e;i.lane==="NS_NORTH"?(i.model.position.z+=s,i.model.position.z>65&&(i.model.position.z=-65)):i.lane==="NS_SOUTH"?(i.model.position.z-=s,i.model.position.z<-65&&(i.model.position.z=65)):i.lane==="EW_EAST"?(i.model.position.x+=s,i.model.position.x>65&&(i.model.position.x=-65)):i.lane==="EW_WEST"&&(i.model.position.x-=s,i.model.position.x<-65&&(i.model.position.x=65))}}getVehicleList(){return this.vehicles}}class H4{constructor(e,t){this.scene=e,this.segmentationPipeline=t,this.loader=new Oa,this.pedestrians=[],this.enemies=[],this.mixers=[],this.nextInstanceId=50,this.spawnPedestrians(),this.spawnEnemies()}spawnPedestrians(){[{model:"/assets/characters/xbot.glb",name:"Civilian Tech Walker",tintColor:2719929,scale:1.05,x:9.5,z:14,speed:1.45,minZ:10,maxZ:50,dir:1,axis:"Z"},{model:"/assets/characters/xbot.glb",name:"Downtown Resident",tintColor:12597547,scale:1.02,x:-9.5,z:40,speed:1.5,minZ:8,maxZ:55,dir:-1,axis:"Z"},{model:"/assets/npc/pedestrian_walk.glb",name:"Urban Pedestrian",scale:1.12,x:10.5,z:-20,speed:1.35,minZ:-50,maxZ:-12,dir:1,axis:"Z"},{model:"/assets/characters/xbot.glb",name:"Citizen Commuter",tintColor:2600544,scale:1.08,x:-10.5,z:-35,speed:1.55,minZ:-52,maxZ:-10,dir:1,axis:"Z"},{model:"/assets/characters/xbot.glb",name:"Avenue Resident",tintColor:13849600,scale:1.04,x:25,z:9,speed:1.4,minX:12,maxX:48,dir:1,axis:"X"},{model:"/assets/npc/pedestrian_walk.glb",name:"Metro Walker",scale:1.12,x:-25,z:-9,speed:1.3,minX:-50,maxX:-12,dir:-1,axis:"X"},{model:"/assets/characters/xbot.glb",name:"Downtown Explorer",tintColor:9323693,scale:1.06,x:-28,z:9,speed:1.45,minX:-48,maxX:-12,dir:1,axis:"X"},{model:"/assets/characters/xbot.glb",name:"Cross-street Citizen",tintColor:3426654,scale:1.03,x:28,z:-9,speed:1.4,minX:12,maxX:48,dir:-1,axis:"X"}].forEach(t=>{this.loader.load(t.model,n=>{const i=n.scene;i.position.set(t.x,.18,t.z),i.scale.set(t.scale,t.scale,t.scale),i.traverse(o=>{o.isMesh&&(o.castShadow=!0,o.receiveShadow=!0,o.material&&(o.material=o.material.clone(),t.tintColor&&(o.name.includes("Mesh")||o.material.name&&(o.material.name.includes("Limbs")||o.material.name.includes("MAT")))&&o.material.color.setHex(t.tintColor),o.material.roughness=.65))}),this.scene.add(i);let s=null;if(n.animations&&n.animations.length>0){s=new fl(i);const o=n.animations.find(l=>l&&l.name&&/walk/i.test(l.name))||n.animations[0];if(o){const l=s.clipAction(o);l.play(),l.time=Math.random()*(o.duration||1.5),l.timeScale=t.speed/1.4,this.mixers.push(s)}}const a=this.nextInstanceId++;this.segmentationPipeline.registerObject(i,{semanticClass:wt.PEDESTRIAN,instanceId:a,categoryName:"Non-Combatant Civilian",label:`${t.name} [ID:${a}] // SAFE`}),this.pedestrians.push({model:i,mixer:s,name:t.name,speed:t.speed,dir:t.dir,minZ:t.minZ,maxZ:t.maxZ,minX:t.minX,maxX:t.maxX,axis:t.axis||"Z"})},void 0,n=>console.warn(`Failed loading pedestrian ${t.model}:`,n))})}spawnEnemies(){[{model:"/assets/enemies/enemy_heavy_mech.glb",name:"Heavy Titan Assault Mech",combatClass:"HEAVY TITAN MECH",threatLevel:"CRITICAL",health:350,x:18,z:32,scale:1.35,rotY:-Math.PI/4,patrol:!0,minZ:24,maxZ:44,speed:1.8},{model:"/assets/enemies/enemy_mech_gun.glb",name:"Bipedal Cyber Combat Walker",combatClass:"CYBER ASSAULT MECH",threatLevel:"HIGH",health:220,x:-22,z:18,scale:1.25,rotY:Math.PI/3,patrol:!0,minX:-32,maxX:-14,speed:2.1,axis:"X"},{model:"/assets/enemies/enemy_drone_gun.glb",name:"Aerial Hunter Attack Drone",combatClass:"AERIAL RECON DRONE",threatLevel:"MODERATE",health:130,x:32,z:-26,y:3.2,scale:1.3,rotY:-Math.PI*.75,hover:!0},{model:"/assets/enemies/enemy_spider.glb",name:"Cyber Arachnid Infiltrator",combatClass:"ARACHNID MECH",threatLevel:"HIGH",health:150,x:-32,z:-32,scale:1.15,rotY:Math.PI/2,patrol:!0,minZ:-42,maxZ:-22,speed:2},{model:"/assets/enemies/enemy_heavy_mech.glb",name:"Rogue Enforcer Mech",combatClass:"HEAVY TITAN MECH",threatLevel:"CRITICAL",health:320,x:0,z:-42,scale:1.3,rotY:Math.PI,patrol:!0,minX:-16,maxX:16,speed:1.6,axis:"X"}].forEach(t=>{this.loader.load(t.model,n=>{const i=n.scene,s=t.y||.18;i.position.set(t.x,s,t.z),i.scale.set(t.scale,t.scale,t.scale),i.rotation.y=t.rotY||0,i.traverse(c=>{c.isMesh&&(c.castShadow=!0,c.receiveShadow=!0,c.material&&(c.material.roughness=.55,c.material.metalness=.45))}),this.scene.add(i);let a=null;const o={};if(n.animations&&n.animations.length>0){a=new fl(i),n.animations.forEach(h=>{h&&h.name&&(o[h.name]=a.clipAction(h))});const c=n.animations.find(h=>h&&h.name&&/walk|run|idle/i.test(h.name))||n.animations[0];c&&(a.clipAction(c).play(),this.mixers.push(a))}const l=this.nextInstanceId++;this.segmentationPipeline.registerObject(i,{semanticClass:wt.ENEMY,instanceId:l,isEnemy:!0,categoryName:"Hostile Combatant",label:`${t.name} [ID:${l}] // THREAT: ${t.threatLevel}`}),this.enemies.push({model:i,mixer:a,actions:o,name:t.name,combatClass:t.combatClass,threatLevel:t.threatLevel,instanceId:l,health:t.health,maxHealth:t.health,isAlive:!0,isAlerted:!1,speed:t.speed||1.5,dir:1,minZ:t.minZ,maxZ:t.maxZ,minX:t.minX,maxX:t.maxX,axis:t.axis||"Z",patrol:!!t.patrol,hover:!!t.hover,baseY:s,distanceToPlayer:0})},void 0,n=>console.warn(`Failed loading enemy ${t.model}:`,n))})}update(e,t,n){for(let i=0;i<this.mixers.length;i++)this.mixers[i].update(e);for(let i=0;i<this.pedestrians.length;i++){const s=this.pedestrians[i];s.axis==="Z"?(s.model.position.z+=s.speed*s.dir*e,s.model.rotation.y=s.dir>0?0:Math.PI,s.model.position.z>s.maxZ?s.dir=-1:s.model.position.z<s.minZ&&(s.dir=1)):s.axis==="X"&&(s.model.position.x+=s.speed*s.dir*e,s.model.rotation.y=s.dir>0?Math.PI/2:-Math.PI/2,s.model.position.x>s.maxX?s.dir=-1:s.model.position.x<s.minX&&(s.dir=1))}for(let i=0;i<this.enemies.length;i++){const s=this.enemies[i];s.isAlive!==!1&&(n&&(s.distanceToPlayer=s.model.position.distanceTo(n),s.distanceToPlayer<26&&(s.isAlerted=!0)),s.hover?(s.model.position.y=s.baseY+Math.sin(t*3.2+i)*.42,s.isAlerted||(s.model.rotation.y+=e*.9)):s.patrol&&!s.isAlerted&&(s.axis==="Z"?(s.model.position.z+=s.speed*s.dir*e,s.model.rotation.y=s.dir>0?0:Math.PI,s.model.position.z>s.maxZ?s.dir=-1:s.model.position.z<s.minZ&&(s.dir=1)):s.axis==="X"&&(s.model.position.x+=s.speed*s.dir*e,s.model.rotation.y=s.dir>0?Math.PI/2:-Math.PI/2,s.model.position.x>s.maxX?s.dir=-1:s.model.position.x<s.minX&&(s.dir=1))))}}getEnemyList(){return this.enemies}getPedestrianList(){return this.pedestrians}}const Oo=[{mode:Ot.NORMAL,title:"NORMAL VISION",tag:"RAW OPTICAL RGB",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',definition:"Raw natural camera sight without neural network processing. Daylight, materials, and textures as perceived by human eyes.",gameExample:"Direct 3D view of our city: daylight sunshine, asphalt roads, pedestrian sidewalks, brick buildings, and vehicle metallic clearcoat.",realWorldUse:`• Ground truth baseline for computer vision
• Standard human driving & surveillance feeds
• Raw training input fed into segmentation neural networks`},{mode:Ot.SEMANTIC,title:"SEMANTIC SEGMENTATION",tag:"PIXEL-LEVEL CATEGORY LABELS",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',definition:"Assigns every pixel a class category. All objects of the same kind share one color (all cars = Yellow, all people = Green, road = Grey). Does NOT separate individual cars.",gameExample:"Paints all drivable asphalt in dark grey, buildings in blue, and all vehicles in uniform yellow (cannot tell our Taxi apart from the Police car).",realWorldUse:`• Autonomous Cars (Tesla / Waymo): Delineating drivable road surface from sidewalks & curbs
• Medical Imaging: Segmenting organ tissue (liver, lungs) in CT / MRI scans
• Satellite Analysis: Tracking forest loss, agriculture, and urban growth from orbit`},{mode:Ot.INSTANCE,title:"INSTANCE SEGMENTATION",tag:"INDIVIDUAL OBJECT IDENTITIES",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="3"/></svg>',definition:"Detects and assigns a unique color mask to each separate object instance. Car #1 is Blue, Car #2 is Orange, Pedestrian #1 is Pink, Pedestrian #2 is Cyan.",gameExample:"Isolates every vehicle and person separately: Yellow Taxi = Car [ID:10] (Blue), Police Cruiser = Car [ID:11] (Orange), each walking civilian has their own unique ID!",realWorldUse:`• Warehouse Robotics: Amazon robotic arms isolating and picking up specific parcels from crowded bins
• Traffic Analytics: Counting exact vehicles and measuring individual lane speeds
• Crowd Safety: Tracking individual movement trajectories in stadiums and stations`},{mode:Ot.PANOPTIC,title:"PANOPTIC SEGMENTATION",tag:"UNIFIED STUFF + THINGS",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',definition:'The ultimate computer vision task. Combines Semantic (continuous background "stuff": road, sky, buildings) with Instance (countable "things": individual cars and people).',gameExample:'Complete unified scene: continuous road & buildings as background "stuff" + every individual car & pedestrian as countable "things"!',realWorldUse:`• Full Self-Driving: Simultaneous road boundary mapping AND individual pedestrian obstacle tracking
• Augmented Reality (Apple Vision / Meta Quest): Seamlessly placing virtual objects behind real people & furniture
• City AI: Complete holistic urban environmental awareness`},{mode:Ot.ENEMY_SCAN,title:"TACTICAL THREAT SCAN",tag:"ANOMALY & THREAT SILHOUETTES",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/></svg>',definition:"Isolates priority objects from neutral surroundings. Highlights target silhouettes in glowing infrared crimson while desaturating passive background pixels.",gameExample:"Highlights our Heavy Titan Mech, Bipedal Walker, and Aerial Drone in pulsing red thermal silhouettes while dimming civilian roads and buildings!",realWorldUse:`• Defense & Security: Thermal FLIR cameras detecting intruders, drones, and military vehicles
• Pathology AI: Spotlighting cancerous tumors or lesions against healthy tissue cells
• Defect Inspection: Scanning manufactured microchips to instantly flag hairline flaws`},{mode:Ot.EDGE_DETECTION,title:"EDGE DETECTION",tag:"SPATIAL CONTOUR BOUNDARIES",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4l16 16"/><path d="M4 20L20 4"/><line x1="12" y1="2" x2="12" y2="22"/></svg>',definition:"Extracts sharp geometric outlines where color, depth, or class identity abruptly changes (Sobel / Laplacian convolution gradients).",gameExample:"Extracts sharp geometric contours of pedestrian zebra crossing stripes, building facades, and thin metal streetlight poles.",realWorldUse:`• Lane Keeping Assist (ADAS): Detecting painted highway lanes and asphalt edge boundaries
• Precision Robotics: Guiding automated laser cutting and seam welding along metal edges
• Structural Inspection: Detecting cracks in concrete bridges, dams, and aircraft fuselages`},{mode:Ot.DEPTH_VIEW,title:"DEPTH ESTIMATION",tag:"METRIC 3D DISTANCE MAP",icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/></svg>',definition:"Measures how far every surface is from the camera lens using a false-color distance map (Cyan/Green = Close, Yellow = Mid-range, Purple = Distant).",gameExample:"Measures metric 3D distance from player camera: Cyan/Green = nearby curbs & vehicles, Yellow = mid-range buildings, Purple = distant skyline.",realWorldUse:`• Automatic Emergency Braking (AEB): Stopping vehicles when obstacles appear within critical distance
• Robot Vacuum Cleaners: Mapping room layouts and avoiding furniture legs and drop-offs
• Smartphone Portrait Mode: Creating computational background blur (bokeh) behind faces`}];class G4{constructor(e,t){this.pipeline=e,this.onOpenEducation=t,this.currentMode=Ot.ENEMY_SCAN,this.isCollapsed=!0,this.enemies=[],this.camera=null,this.scanPulseTimer=0,this.createDom(),this.bindEvents(),this.selectMode(this.currentMode)}setCameraAndEnemies(e,t){this.camera=e,this.enemies=t}createDom(){this.container=document.createElement("div"),this.container.id="ai-vision-scanner",this.container.className="scanner-glass-panel collapsed",this.container.innerHTML=`
      <!-- Holographic Hex & Grid Decorative Overlay -->
      <div class="scanner-grid-bg"></div>
      
      <!-- Top Tactical Header -->
      <div class="scanner-header">
        <div class="header-main">
          <div class="scanner-status-indicator">
            <span class="status-pulse-dot"></span>
            <span class="status-label">SYS_ONLINE // V-4.8</span>
          </div>
          <button id="btn-collapse-scanner" class="btn-icon-glass" title="Toggle Scanner Panel">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
        <div class="header-title-row">
          <h2 class="scanner-title">AI VISION SCANNER</h2>
          <span class="scanner-sub">NEURAL SEGMENTATION ENGINE</span>
        </div>
      </div>

      <!-- Radar / Signal Frequency Animation -->
      <div class="scanner-radar-strip">
        <div class="radar-scanline"></div>
        <div class="radar-spectrum">
          <div class="spec-bar"></div><div class="spec-bar"></div><div class="spec-bar"></div>
          <div class="spec-bar"></div><div class="spec-bar"></div><div class="spec-bar"></div>
          <div class="spec-bar"></div><div class="spec-bar"></div><div class="spec-bar"></div>
        </div>
        <span class="radar-text">INFERENCE: 60.0 FPS // ACTIVE</span>
      </div>

      <!-- Filter Selection Controls -->
      <div class="scanner-filter-section">
        <div class="section-label">SELECT SEGMENTATION MODE</div>
        <div class="filter-button-group">
          ${Oo.map((e,t)=>`
            <button class="glass-filter-btn" data-mode="${e.mode}" data-index="${t}">
              <div class="btn-glow-border"></div>
              <div class="btn-icon-wrap">${e.icon}</div>
              <div class="btn-text-wrap">
                <span class="btn-title">${e.title}</span>
                <span class="btn-tag">${e.tag}</span>
              </div>
              <div class="btn-active-pip"></div>
            </button>
          `).join("")}
        </div>
      </div>

      <!-- Floating Educational Card (Bottom-Mid or within panel) -->
      <div class="scanner-card-wrap">
        <div class="card-glass-body">
          <div class="card-header">
            <span class="card-icon-pip">&#9670;</span>
            <span id="card-mode-title" class="card-title">NORMAL VISION</span>
          </div>
          <div class="card-field-group">
            <span class="card-label-badge">WHAT IT IS (DEFINITION):</span>
            <p id="card-mode-desc" class="card-desc"></p>
          </div>
          <div class="card-field-group">
            <span class="card-label-badge" style="color: var(--primary-cyan);">🎮 IN OUR GAME WORLD:</span>
            <p id="card-mode-game" class="card-desc" style="color: #e6edf3;"></p>
          </div>
          <div class="card-field-group">
            <span class="card-label-badge">REAL-WORLD APPLICATION & USE:</span>
            <div id="card-mode-tech" class="card-tech"></div>
          </div>
        </div>
      </div>

      <!-- Live Telemetry / Object Counter -->
      <div class="scanner-telemetry-section">
        <div class="telemetry-grid">
          <div class="telem-item">
            <span class="telem-val" id="telem-vehicles">0</span>
            <span class="telem-lbl">VEHICLES</span>
          </div>
          <div class="telem-item">
            <span class="telem-val" id="telem-pedestrians">0</span>
            <span class="telem-lbl">PEDESTRIANS</span>
          </div>
          <div class="telem-item highlight-threat">
            <span class="telem-val" id="telem-enemies">0</span>
            <span class="telem-lbl">THREATS</span>
          </div>
          <div class="telem-item">
            <span class="telem-val" id="telem-instances">0</span>
            <span class="telem-lbl">TOTAL IDS</span>
          </div>
        </div>
      </div>

      <!-- Action Button: Open Comprehensive Deep Learning Architecture Suite -->
      <div class="scanner-actions">
        <button id="btn-open-education" class="btn-education-pulse">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          <span>DEEP LEARNING / U-NET LAB</span>
        </button>
      </div>
    `,document.body.appendChild(this.container),this.expandButton=document.createElement("button"),this.expandButton.id="btn-expand-scanner",this.expandButton.className="btn-scanner-expand-tab",this.expandButton.innerHTML=`
      <div class="expand-pulse-pip"></div>
      <span>FILTERS [TAB]</span>
    `,this.expandButton.style.display="flex",document.body.appendChild(this.expandButton)}bindEvents(){this.container.querySelectorAll(".glass-filter-btn").forEach(i=>{i.addEventListener("click",s=>{const a=parseInt(i.getAttribute("data-mode"),10);this.selectMode(a)})}),this.container.querySelector("#btn-collapse-scanner").addEventListener("click",()=>{this.toggleCollapse()}),this.expandButton.addEventListener("click",()=>{this.toggleCollapse()}),window.addEventListener("keydown",i=>{i.code==="Tab"&&(i.preventDefault(),this.toggleCollapse())}),this.container.querySelector("#btn-open-education").addEventListener("click",()=>{this.onOpenEducation&&this.onOpenEducation()})}selectMode(e){this.currentMode=e,this.pipeline.setMode(e),this.updateActiveButton(e),this.updateEducationalCard(e)}toggleCollapse(){this.isCollapsed=!this.isCollapsed,this.isCollapsed?(this.container.classList.add("collapsed"),this.expandButton.style.display="flex"):(this.container.classList.remove("collapsed"),this.expandButton.style.display="none")}updateActiveButton(e){this.container.querySelectorAll(".glass-filter-btn").forEach(n=>{parseInt(n.getAttribute("data-mode"),10)===e?n.classList.add("active"):n.classList.remove("active")})}updateEducationalCard(e){const t=Oo.find(o=>o.mode===e)||Oo[0],n=document.getElementById("card-mode-title"),i=document.getElementById("card-mode-desc"),s=document.getElementById("card-mode-game"),a=document.getElementById("card-mode-tech");n&&(n.innerText=t.title),i&&(i.innerText=t.definition),s&&(s.innerText=t.gameExample||""),a&&(a.innerHTML=t.realWorldUse.split(`
`).map(o=>`<div class="card-use-line">${o}</div>`).join(""))}update(e){if(e){const t=document.getElementById("telem-vehicles"),n=document.getElementById("telem-pedestrians"),i=document.getElementById("telem-enemies"),s=document.getElementById("telem-instances");t&&(t.innerText=e.vehicles),n&&(n.innerText=e.pedestrians),i&&(i.innerText=e.enemies),s&&(s.innerText=e.totalInstances)}this.scanPulseTimer>0&&(this.scanPulseTimer-=.016)}triggerScanPulse(){this.scanPulseTimer=6}}class oe extends Error{constructor(e,t){var n="KaTeX parse error: "+e,i,s,a=t&&t.loc;if(a&&a.start<=a.end){var o=a.lexer.input;i=a.start,s=a.end,i===o.length?n+=" at end of input: ":n+=" at position "+(i+1)+": ";var l=o.slice(i,s).replace(/[^]/g,"$&̲"),c;i>15?c="…"+o.slice(i-15,i):c=o.slice(0,i);var h;s+15<o.length?h=o.slice(s,s+15)+"…":h=o.slice(s),n+=c+l+h}super(n),this.name="ParseError",this.position=void 0,this.length=void 0,this.rawMessage=void 0,Object.setPrototypeOf(this,oe.prototype),this.position=i,i!=null&&s!=null&&(this.length=s-i),this.rawMessage=e}}var V4=/([A-Z])/g,W4=r=>r.replace(V4,"-$1").toLowerCase(),q4={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},X4=/[&><"']/g,nn=r=>String(r).replace(X4,e=>q4[e]),xa=r=>r.type==="ordgroup"||r.type==="color"?r.body.length===1?xa(r.body[0]):r:r.type==="font"?xa(r.body):r,Y4=new Set(["mathord","textord","atom"]),Mi=r=>Y4.has(xa(r).type),j4=r=>{var e=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(r);return e?e[2]!==":"||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(e[1])?null:e[1].toLowerCase():"_relative"},vl={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:r=>"#"+r},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(r,e)=>(e.push(r),e)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:r=>Math.max(0,r),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:r=>Math.max(0,r),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:r=>Math.max(0,r),cli:"-e, --max-expand <n>",cliProcessor:r=>r==="Infinity"?1/0:parseInt(r)},globalGroup:{type:"boolean",cli:!1}};function K4(r){if(typeof r!="string")return r.enum[0];switch(r){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{};default:throw new Error("Unexpected schema type; settings must declare an explicit default.")}}function $4(r){if(Object.prototype.hasOwnProperty.call(r,"default")&&r.default!==void 0)return r.default;var e=Array.isArray(r.type)?r.type[0]:r.type;return K4(e)}function Z4(r,e,t,n){var i=Object.prototype.hasOwnProperty.call(t,e)?t[e]:void 0,s=Object.prototype.hasOwnProperty.call(n,"processor")?n.processor:void 0;r[e]=i!==void 0?s?s(i):i:$4(n)}class Jl{constructor(e){e===void 0&&(e={}),this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,e=e||{};for(var t of Object.keys(vl)){var n=vl[t];n&&Z4(this,t,e,n)}}isTrusted(e){if("url"in e&&e.url&&!e.protocol){var t=j4(e.url);if(t==null)return!1;e.protocol=t}var n=typeof this.trust=="function"?this.trust(e):this.trust;return!!n}}class Pi{constructor(e,t,n){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=e,this.size=t,this.cramped=n}sup(){return Xn[J4[this.id]]}sub(){return Xn[Q4[this.id]]}fracNum(){return Xn[e3[this.id]]}fracDen(){return Xn[t3[this.id]]}cramp(){return Xn[n3[this.id]]}text(){return Xn[i3[this.id]]}isTight(){return this.size>=2}}var Ql=0,Ra=1,Br=2,vi=3,Ts=4,Nn=5,Kr=6,un=7,Xn=[new Pi(Ql,0,!1),new Pi(Ra,0,!0),new Pi(Br,1,!1),new Pi(vi,1,!0),new Pi(Ts,2,!1),new Pi(Nn,2,!0),new Pi(Kr,3,!1),new Pi(un,3,!0)],J4=[Ts,Nn,Ts,Nn,Kr,un,Kr,un],Q4=[Nn,Nn,Nn,Nn,un,un,un,un],e3=[Br,vi,Ts,Nn,Kr,un,Kr,un],t3=[vi,vi,Nn,Nn,un,un,un,un],n3=[Ra,Ra,vi,vi,Nn,Nn,un,un],i3=[Ql,Ra,Br,vi,Br,vi,Br,vi],Ge={DISPLAY:Xn[Ql],TEXT:Xn[Br],SCRIPT:Xn[Ts],SCRIPTSCRIPT:Xn[Kr]},xl=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function r3(r){for(var e=0;e<xl.length;e++)for(var t=xl[e],n=0;n<t.blocks.length;n++){var i=t.blocks[n];if(r>=i[0]&&r<=i[1])return t.name}return null}var ya=[];xl.forEach(r=>r.blocks.forEach(e=>ya.push(...e)));function Vu(r){for(var e=0;e<ya.length;e+=2)if(r>=ya[e]&&r<=ya[e+1])return!0;return!1}var Gt=r=>r+" "+r,Lr=80,s3=function(e,t){return"M95,"+(622+e+t)+`
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l`+e/2.075+" -"+e+`
c5.3,-9.3,12,-14,20,-14
H400000v`+(40+e)+`H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M`+(834+e)+" "+t+"h400000v"+(40+e)+"h-400000z"},a3=function(e,t){return"M263,"+(601+e+t)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+e/2.084+" -"+e+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+e)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+e)+" "+t+"h400000v"+(40+e)+"h-400000z"},o3=function(e,t){return"M983 "+(10+e+t)+`
l`+e/3.13+" -"+e+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+e)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+e)+" "+t+"h400000v"+(40+e)+"h-400000z"},l3=function(e,t){return"M424,"+(2398+e+t)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+e/4.223+" -"+e+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+e)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+e)+" "+t+`
h400000v`+(40+e)+"h-400000z"},c3=function(e,t){return"M473,"+(2713+e+t)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+e/5.298+" -"+e+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+e)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+e)+" "+t+"h400000v"+(40+e)+"H1017.7z"},h3=function(e){var t=e/2;return"M400000 "+e+" H0 L"+t+" 0 l65 45 L145 "+(e-80)+" H400000z"},u3=function(e,t,n){var i=n-54-t-e;return"M702 "+(e+t)+"H400000"+(40+e)+`
H742v`+i+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+t+"H400000v"+(40+e)+"H742z"},d3=function(e,t,n){t=1e3*t;var i="";switch(e){case"sqrtMain":i=s3(t,Lr);break;case"sqrtSize1":i=a3(t,Lr);break;case"sqrtSize2":i=o3(t,Lr);break;case"sqrtSize3":i=l3(t,Lr);break;case"sqrtSize4":i=c3(t,Lr);break;case"sqrtTall":i=u3(t,Lr,n)}return i},f3=function(e,t){switch(e){case"⎜":return Gt("M291 0 H417 V"+t+" H291z");case"∣":return Gt("M145 0 H188 V"+t+" H145z");case"∥":return Gt("M145 0 H188 V"+t+" H145z")+Gt("M367 0 H410 V"+t+" H367z");case"⎟":return Gt("M457 0 H583 V"+t+" H457z");case"⎢":return Gt("M319 0 H403 V"+t+" H319z");case"⎥":return Gt("M263 0 H347 V"+t+" H263z");case"⎪":return Gt("M384 0 H504 V"+t+" H384z");case"⏐":return Gt("M312 0 H355 V"+t+" H312z");case"‖":return Gt("M257 0 H300 V"+t+" H257z")+Gt("M478 0 H521 V"+t+" H478z");default:return""}},uh={doubleleftarrow:`M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,doublerightarrow:`M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,leftarrow:`M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,leftbrace:`M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,leftbraceunder:`M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,leftgroup:`M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,leftgroupunder:`M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,leftharpoon:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,leftharpoonplus:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,leftharpoondown:`M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,leftharpoondownplus:`M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,lefthook:`M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,leftlinesegment:Gt("M40 281 V428 H0 V94 H40 V241 H400000 v40z"),leftbracketunder:Gt("M0 0 h120 V290 H399995 v120 H0z"),leftbracketover:Gt("M0 440 h120 V150 H399995 v-120 H0z"),leftmapsto:Gt("M40 281 V448H0V74H40V241H400000v40z"),leftToFrom:`M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,longequal:Gt("M0 50 h400000 v40H0z m0 194h40000v40H0z"),midbrace:`M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,midbraceunder:`M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,oiintSize1:`M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,oiintSize2:`M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,oiiintSize1:`M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,oiiintSize2:`M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,rightarrow:`M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,rightbrace:`M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,rightbraceunder:`M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,rightgroup:`M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,rightgroupunder:`M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,rightharpoon:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,rightharpoonplus:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,rightharpoondown:`M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,rightharpoondownplus:`M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,righthook:`M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,rightlinesegment:Gt("M399960 241 V94 h40 V428 h-40 V281 H0 v-40z"),rightbracketunder:Gt("M399995 0 h-120 V290 H0 v120 H400000z"),rightbracketover:Gt("M399995 440 h-120 V150 H0 v-120 H399995z"),rightToFrom:`M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,twoheadleftarrow:`M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,twoheadrightarrow:`M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,tilde1:`M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,tilde2:`M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,tilde3:`M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,tilde4:`M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,vec:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,widehat1:`M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,widehat2:`M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat3:`M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat4:`M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widecheck1:`M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,widecheck2:`M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck3:`M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck4:`M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,baraboveleftarrow:`M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,rightarrowabovebar:`M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,baraboveshortleftharpoon:`M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,rightharpoonaboveshortbar:`M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,shortbaraboveleftharpoon:`M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,shortrightharpoonabovebar:`M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},p3=function(e,t){switch(e){case"lbrack":return"M403 1759 V84 H666 V0 H319 V1759 v"+t+` v1759 v84 h347 v-84
H403z M403 1759 V0 H319 V1759 v`+t+" v1759 v84 h84z";case"rbrack":return"M347 1759 V0 H0 V84 H263 V1759 v"+t+` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v`+t+" v1759 h84z";case"vert":return"M145 15 v585 v"+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+t+" v585 h43z";case"doublevert":return"M145 15 v585 v"+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+t+` v585 h43z
M367 15 v585 v`+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v`+t+" v585 h43z";case"lfloor":return"M319 602 V0 H403 V602 v"+t+` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v`+t+" v1715 H319z";case"rfloor":return"M319 602 V0 H403 V602 v"+t+` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v`+t+" v1715 H319z";case"lceil":return"M403 1759 V84 H666 V0 H319 V1759 v"+t+` v602 h84z
M403 1759 V0 H319 V1759 v`+t+" v602 h84z";case"rceil":return"M347 1759 V0 H0 V84 H263 V1759 v"+t+` v602 h84z
M347 1759 V0 h-84 V1759 v`+t+" v602 h84z";case"lparen":return`M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,`+(t+84)+`c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-`+(t+92)+`c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;case"rparen":return`M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,`+(t+9)+`
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-`+(t+144)+`c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};function m3(r){return"toText"in r}class ns{constructor(e){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=e,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(e){return this.classes.includes(e)}toNode(){for(var e=document.createDocumentFragment(),t=0;t<this.children.length;t++)e.appendChild(this.children[t].toNode());return e}toMarkup(){for(var e="",t=0;t<this.children.length;t++)e+=this.children[t].toMarkup();return e}toText(){return this.children.map(e=>{if(m3(e))return e.toText();throw new Error("Expected MathDomNode with toText, got "+e.constructor.name)}).join("")}}var yl={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},g3={ex:!0,em:!0,mu:!0},Wu=function(e){return typeof e!="string"&&(e=e.unit),e in yl||e in g3||e==="ex"},Rt=function(e,t){var n;if(e.unit in yl)n=yl[e.unit]/t.fontMetrics().ptPerEm/t.sizeMultiplier;else if(e.unit==="mu")n=t.fontMetrics().cssEmPerMu;else{var i;if(t.style.isTight()?i=t.havingStyle(t.style.text()):i=t,e.unit==="ex")n=i.fontMetrics().xHeight;else if(e.unit==="em")n=i.fontMetrics().quad;else throw new oe("Invalid unit: '"+e.unit+"'");i!==t&&(n*=i.sizeMultiplier/t.sizeMultiplier)}return Math.min(e.number*n,t.maxSize)},de=function(e){return+e.toFixed(4)+"em"},Hi=function(e){return e.filter(t=>t).join(" ")},e0=function(e){var t="";for(var n of Object.keys(e)){var i=e[n];i!==void 0&&(t+=W4(n)+":"+i+";")}return t},qu=function(e,t,n){if(this.classes=e||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=n||{},t){t.style.isTight()&&this.classes.push("mtight");var i=t.getColor();i&&(this.style.color=i)}},Xu=function(e){var t=document.createElement(e);t.className=Hi(this.classes),Object.assign(t.style,this.style);for(var n of Object.keys(this.attributes))t.setAttribute(n,this.attributes[n]);for(var i=0;i<this.children.length;i++)t.appendChild(this.children[i].toNode());return t},v3=/[\s"'>/=\x00-\x1f]/,Yu=function(e){var t="<"+e;this.classes.length&&(t+=' class="'+nn(Hi(this.classes))+'"');var n=e0(this.style);n&&(t+=' style="'+nn(n)+'"');for(var i of Object.keys(this.attributes)){if(v3.test(i))throw new oe("Invalid attribute name '"+i+"'");t+=" "+i+'="'+nn(this.attributes[i])+'"'}t+=">";for(var s=0;s<this.children.length;s++)t+=this.children[s].toMarkup();return t+="</"+e+">",t};class is{constructor(e,t,n,i){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,this.italic=void 0,qu.call(this,e,n,i),this.children=t||[]}setAttribute(e,t){this.attributes[e]=t}hasClass(e){return this.classes.includes(e)}toNode(){return Xu.call(this,"span")}toMarkup(){return Yu.call(this,"span")}}class Fa{constructor(e,t,n,i){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,qu.call(this,t,i),this.children=n||[],this.setAttribute("href",e)}setAttribute(e,t){this.attributes[e]=t}hasClass(e){return this.classes.includes(e)}toNode(){return Xu.call(this,"a")}toMarkup(){return Yu.call(this,"a")}}class x3{constructor(e,t,n){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=t,this.src=e,this.classes=["mord"],this.height=0,this.depth=0,this.maxFontSize=0,this.style=n}hasClass(e){return this.classes.includes(e)}toNode(){var e=document.createElement("img");return e.src=this.src,e.alt=this.alt,e.className="mord",Object.assign(e.style,this.style),e}toMarkup(){var e='<img src="'+nn(this.src)+'"'+(' alt="'+nn(this.alt)+'"'),t=e0(this.style);return t&&(e+=' style="'+nn(t)+'"'),e+="'/>",e}}var y3={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class wn{constructor(e,t,n,i,s,a,o,l){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=e,this.height=t||0,this.depth=n||0,this.italic=i||0,this.skew=s||0,this.width=a||0,this.classes=o||[],this.style=l||{},this.maxFontSize=0;var c=r3(this.text.charCodeAt(0));c&&this.classes.push(c+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=y3[this.text])}hasClass(e){return this.classes.includes(e)}toNode(){var e=document.createTextNode(this.text),t=null;return this.italic>0&&(t=document.createElement("span"),t.style.marginRight=de(this.italic)),this.classes.length>0&&(t=t||document.createElement("span"),t.className=Hi(this.classes)),Object.keys(this.style).length>0&&(t=t||document.createElement("span"),Object.assign(t.style,this.style)),t?(t.appendChild(e),t):e}toMarkup(){var e=!1,t="<span";this.classes.length&&(e=!0,t+=' class="',t+=nn(Hi(this.classes)),t+='"');var n="";this.italic>0&&(n+="margin-right:"+de(this.italic)+";"),n+=e0(this.style),n&&(e=!0,t+=' style="'+nn(n)+'"');var i=nn(this.text);return e?(t+=">",t+=i,t+="</span>",t):i}}class bi{constructor(e,t){this.children=void 0,this.attributes=void 0,this.children=e||[],this.attributes=t||{}}toNode(){var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"svg");for(var n of Object.keys(this.attributes))t.setAttribute(n,this.attributes[n]);for(var i=0;i<this.children.length;i++)t.appendChild(this.children[i].toNode());return t}toMarkup(){var e='<svg xmlns="http://www.w3.org/2000/svg"';for(var t of Object.keys(this.attributes))e+=" "+t+'="'+nn(this.attributes[t])+'"';e+=">";for(var n=0;n<this.children.length;n++)e+=this.children[n].toMarkup();return e+="</svg>",e}}class Gi{constructor(e,t){this.pathName=void 0,this.alternate=void 0,this.pathName=e,this.alternate=t}toNode(){var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"path");return this.alternate?t.setAttribute("d",this.alternate):t.setAttribute("d",uh[this.pathName]),t}toMarkup(){return this.alternate?'<path d="'+nn(this.alternate)+'"/>':'<path d="'+nn(uh[this.pathName])+'"/>'}}class bl{constructor(e){this.attributes=void 0,this.attributes=e||{}}toNode(){var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"line");for(var n of Object.keys(this.attributes))t.setAttribute(n,this.attributes[n]);return t}toMarkup(){var e="<line";for(var t of Object.keys(this.attributes))e+=" "+t+'="'+nn(this.attributes[t])+'"';return e+="/>",e}}function b3(r){if(r instanceof wn)return r;throw new Error("Expected symbolNode but got "+String(r)+".")}function _3(r){if(r instanceof is)return r;throw new Error("Expected span<HtmlDomNode> but got "+String(r)+".")}var S3=r=>r instanceof is||r instanceof Fa||r instanceof ns,Kn={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},Fo={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},dh={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function M3(r,e){Kn[r]=e}function t0(r,e,t){if(!Kn[e])throw new Error("Font metrics not found for font: "+e+".");var n=r.charCodeAt(0),i=Kn[e][n];if(!i&&r[0]in dh&&(n=dh[r[0]].charCodeAt(0),i=Kn[e][n]),!i&&t==="text"&&Vu(n)&&(i=Kn[e][77]),i)return{depth:i[0],height:i[1],italic:i[2],skew:i[3],width:i[4]}}var Bo={};function w3(r){var e;if(r>=5?e=0:r>=3?e=1:e=2,!Bo[e]){var t=Bo[e]={cssEmPerMu:Fo.quad[e]/18};for(var n of Object.keys(Fo))t[n]=Fo[n][e]}return Bo[e]}var Tt={math:{},text:{}};function f(r,e,t,n,i,s){Tt[r][i]={font:e,group:t,replace:n},s&&n&&(Tt[r][n]=Tt[r][i])}var v="math",te="text",b="main",P="ams",Et="accent-token",_e="bin",mn="close",rs="inner",Pe="mathord",Ht="op-token",Tn="open",Ps="punct",D="rel",wi="spacing",k="textord";f(v,b,D,"≡","\\equiv",!0);f(v,b,D,"≺","\\prec",!0);f(v,b,D,"≻","\\succ",!0);f(v,b,D,"∼","\\sim",!0);f(v,b,D,"⊥","\\perp");f(v,b,D,"⪯","\\preceq",!0);f(v,b,D,"⪰","\\succeq",!0);f(v,b,D,"≃","\\simeq",!0);f(v,b,D,"∣","\\mid",!0);f(v,b,D,"≪","\\ll",!0);f(v,b,D,"≫","\\gg",!0);f(v,b,D,"≍","\\asymp",!0);f(v,b,D,"∥","\\parallel");f(v,b,D,"⋈","\\bowtie",!0);f(v,b,D,"⌣","\\smile",!0);f(v,b,D,"⊑","\\sqsubseteq",!0);f(v,b,D,"⊒","\\sqsupseteq",!0);f(v,b,D,"≐","\\doteq",!0);f(v,b,D,"⌢","\\frown",!0);f(v,b,D,"∋","\\ni",!0);f(v,b,D,"∝","\\propto",!0);f(v,b,D,"⊢","\\vdash",!0);f(v,b,D,"⊣","\\dashv",!0);f(v,b,D,"∋","\\owns");f(v,b,Ps,".","\\ldotp");f(v,b,Ps,"⋅","\\cdotp");f(v,b,Ps,"⋅","·");f(te,b,k,"⋅","·");f(v,b,k,"#","\\#");f(te,b,k,"#","\\#");f(v,b,k,"&","\\&");f(te,b,k,"&","\\&");f(v,b,k,"ℵ","\\aleph",!0);f(v,b,k,"∀","\\forall",!0);f(v,b,k,"ℏ","\\hbar",!0);f(v,b,k,"∃","\\exists",!0);f(v,b,k,"∇","\\nabla",!0);f(v,b,k,"♭","\\flat",!0);f(v,b,k,"ℓ","\\ell",!0);f(v,b,k,"♮","\\natural",!0);f(v,b,k,"♣","\\clubsuit",!0);f(v,b,k,"℘","\\wp",!0);f(v,b,k,"♯","\\sharp",!0);f(v,b,k,"♢","\\diamondsuit",!0);f(v,b,k,"ℜ","\\Re",!0);f(v,b,k,"♡","\\heartsuit",!0);f(v,b,k,"ℑ","\\Im",!0);f(v,b,k,"♠","\\spadesuit",!0);f(v,b,k,"§","\\S",!0);f(te,b,k,"§","\\S");f(v,b,k,"¶","\\P",!0);f(te,b,k,"¶","\\P");f(v,b,k,"†","\\dag");f(te,b,k,"†","\\dag");f(te,b,k,"†","\\textdagger");f(v,b,k,"‡","\\ddag");f(te,b,k,"‡","\\ddag");f(te,b,k,"‡","\\textdaggerdbl");f(v,b,mn,"⎱","\\rmoustache",!0);f(v,b,Tn,"⎰","\\lmoustache",!0);f(v,b,mn,"⟯","\\rgroup",!0);f(v,b,Tn,"⟮","\\lgroup",!0);f(v,b,_e,"∓","\\mp",!0);f(v,b,_e,"⊖","\\ominus",!0);f(v,b,_e,"⊎","\\uplus",!0);f(v,b,_e,"⊓","\\sqcap",!0);f(v,b,_e,"∗","\\ast");f(v,b,_e,"⊔","\\sqcup",!0);f(v,b,_e,"◯","\\bigcirc",!0);f(v,b,_e,"∙","\\bullet",!0);f(v,b,_e,"‡","\\ddagger");f(v,b,_e,"≀","\\wr",!0);f(v,b,_e,"⨿","\\amalg");f(v,b,_e,"&","\\And");f(v,b,D,"⟵","\\longleftarrow",!0);f(v,b,D,"⇐","\\Leftarrow",!0);f(v,b,D,"⟸","\\Longleftarrow",!0);f(v,b,D,"⟶","\\longrightarrow",!0);f(v,b,D,"⇒","\\Rightarrow",!0);f(v,b,D,"⟹","\\Longrightarrow",!0);f(v,b,D,"↔","\\leftrightarrow",!0);f(v,b,D,"⟷","\\longleftrightarrow",!0);f(v,b,D,"⇔","\\Leftrightarrow",!0);f(v,b,D,"⟺","\\Longleftrightarrow",!0);f(v,b,D,"↦","\\mapsto",!0);f(v,b,D,"⟼","\\longmapsto",!0);f(v,b,D,"↗","\\nearrow",!0);f(v,b,D,"↩","\\hookleftarrow",!0);f(v,b,D,"↪","\\hookrightarrow",!0);f(v,b,D,"↘","\\searrow",!0);f(v,b,D,"↼","\\leftharpoonup",!0);f(v,b,D,"⇀","\\rightharpoonup",!0);f(v,b,D,"↙","\\swarrow",!0);f(v,b,D,"↽","\\leftharpoondown",!0);f(v,b,D,"⇁","\\rightharpoondown",!0);f(v,b,D,"↖","\\nwarrow",!0);f(v,b,D,"⇌","\\rightleftharpoons",!0);f(v,P,D,"≮","\\nless",!0);f(v,P,D,"","\\@nleqslant");f(v,P,D,"","\\@nleqq");f(v,P,D,"⪇","\\lneq",!0);f(v,P,D,"≨","\\lneqq",!0);f(v,P,D,"","\\@lvertneqq");f(v,P,D,"⋦","\\lnsim",!0);f(v,P,D,"⪉","\\lnapprox",!0);f(v,P,D,"⊀","\\nprec",!0);f(v,P,D,"⋠","\\npreceq",!0);f(v,P,D,"⋨","\\precnsim",!0);f(v,P,D,"⪹","\\precnapprox",!0);f(v,P,D,"≁","\\nsim",!0);f(v,P,D,"","\\@nshortmid");f(v,P,D,"∤","\\nmid",!0);f(v,P,D,"⊬","\\nvdash",!0);f(v,P,D,"⊭","\\nvDash",!0);f(v,P,D,"⋪","\\ntriangleleft");f(v,P,D,"⋬","\\ntrianglelefteq",!0);f(v,P,D,"⊊","\\subsetneq",!0);f(v,P,D,"","\\@varsubsetneq");f(v,P,D,"⫋","\\subsetneqq",!0);f(v,P,D,"","\\@varsubsetneqq");f(v,P,D,"≯","\\ngtr",!0);f(v,P,D,"","\\@ngeqslant");f(v,P,D,"","\\@ngeqq");f(v,P,D,"⪈","\\gneq",!0);f(v,P,D,"≩","\\gneqq",!0);f(v,P,D,"","\\@gvertneqq");f(v,P,D,"⋧","\\gnsim",!0);f(v,P,D,"⪊","\\gnapprox",!0);f(v,P,D,"⊁","\\nsucc",!0);f(v,P,D,"⋡","\\nsucceq",!0);f(v,P,D,"⋩","\\succnsim",!0);f(v,P,D,"⪺","\\succnapprox",!0);f(v,P,D,"≆","\\ncong",!0);f(v,P,D,"","\\@nshortparallel");f(v,P,D,"∦","\\nparallel",!0);f(v,P,D,"⊯","\\nVDash",!0);f(v,P,D,"⋫","\\ntriangleright");f(v,P,D,"⋭","\\ntrianglerighteq",!0);f(v,P,D,"","\\@nsupseteqq");f(v,P,D,"⊋","\\supsetneq",!0);f(v,P,D,"","\\@varsupsetneq");f(v,P,D,"⫌","\\supsetneqq",!0);f(v,P,D,"","\\@varsupsetneqq");f(v,P,D,"⊮","\\nVdash",!0);f(v,P,D,"⪵","\\precneqq",!0);f(v,P,D,"⪶","\\succneqq",!0);f(v,P,D,"","\\@nsubseteqq");f(v,P,_e,"⊴","\\unlhd");f(v,P,_e,"⊵","\\unrhd");f(v,P,D,"↚","\\nleftarrow",!0);f(v,P,D,"↛","\\nrightarrow",!0);f(v,P,D,"⇍","\\nLeftarrow",!0);f(v,P,D,"⇏","\\nRightarrow",!0);f(v,P,D,"↮","\\nleftrightarrow",!0);f(v,P,D,"⇎","\\nLeftrightarrow",!0);f(v,P,D,"△","\\vartriangle");f(v,P,k,"ℏ","\\hslash");f(v,P,k,"▽","\\triangledown");f(v,P,k,"◊","\\lozenge");f(v,P,k,"Ⓢ","\\circledS");f(v,P,k,"®","\\circledR");f(te,P,k,"®","\\circledR");f(v,P,k,"∡","\\measuredangle",!0);f(v,P,k,"∄","\\nexists");f(v,P,k,"℧","\\mho");f(v,P,k,"Ⅎ","\\Finv",!0);f(v,P,k,"⅁","\\Game",!0);f(v,P,k,"‵","\\backprime");f(v,P,k,"▲","\\blacktriangle");f(v,P,k,"▼","\\blacktriangledown");f(v,P,k,"■","\\blacksquare");f(v,P,k,"⧫","\\blacklozenge");f(v,P,k,"★","\\bigstar");f(v,P,k,"∢","\\sphericalangle",!0);f(v,P,k,"∁","\\complement",!0);f(v,P,k,"ð","\\eth",!0);f(te,b,k,"ð","ð");f(v,P,k,"╱","\\diagup");f(v,P,k,"╲","\\diagdown");f(v,P,k,"□","\\square");f(v,P,k,"□","\\Box");f(v,P,k,"◊","\\Diamond");f(v,P,k,"¥","\\yen",!0);f(te,P,k,"¥","\\yen",!0);f(v,P,k,"✓","\\checkmark",!0);f(te,P,k,"✓","\\checkmark");f(v,P,k,"ℶ","\\beth",!0);f(v,P,k,"ℸ","\\daleth",!0);f(v,P,k,"ℷ","\\gimel",!0);f(v,P,k,"ϝ","\\digamma",!0);f(v,P,k,"ϰ","\\varkappa");f(v,P,Tn,"┌","\\@ulcorner",!0);f(v,P,mn,"┐","\\@urcorner",!0);f(v,P,Tn,"└","\\@llcorner",!0);f(v,P,mn,"┘","\\@lrcorner",!0);f(v,P,D,"≦","\\leqq",!0);f(v,P,D,"⩽","\\leqslant",!0);f(v,P,D,"⪕","\\eqslantless",!0);f(v,P,D,"≲","\\lesssim",!0);f(v,P,D,"⪅","\\lessapprox",!0);f(v,P,D,"≊","\\approxeq",!0);f(v,P,_e,"⋖","\\lessdot");f(v,P,D,"⋘","\\lll",!0);f(v,P,D,"≶","\\lessgtr",!0);f(v,P,D,"⋚","\\lesseqgtr",!0);f(v,P,D,"⪋","\\lesseqqgtr",!0);f(v,P,D,"≑","\\doteqdot");f(v,P,D,"≓","\\risingdotseq",!0);f(v,P,D,"≒","\\fallingdotseq",!0);f(v,P,D,"∽","\\backsim",!0);f(v,P,D,"⋍","\\backsimeq",!0);f(v,P,D,"⫅","\\subseteqq",!0);f(v,P,D,"⋐","\\Subset",!0);f(v,P,D,"⊏","\\sqsubset",!0);f(v,P,D,"≼","\\preccurlyeq",!0);f(v,P,D,"⋞","\\curlyeqprec",!0);f(v,P,D,"≾","\\precsim",!0);f(v,P,D,"⪷","\\precapprox",!0);f(v,P,D,"⊲","\\vartriangleleft");f(v,P,D,"⊴","\\trianglelefteq");f(v,P,D,"⊨","\\vDash",!0);f(v,P,D,"⊪","\\Vvdash",!0);f(v,P,D,"⌣","\\smallsmile");f(v,P,D,"⌢","\\smallfrown");f(v,P,D,"≏","\\bumpeq",!0);f(v,P,D,"≎","\\Bumpeq",!0);f(v,P,D,"≧","\\geqq",!0);f(v,P,D,"⩾","\\geqslant",!0);f(v,P,D,"⪖","\\eqslantgtr",!0);f(v,P,D,"≳","\\gtrsim",!0);f(v,P,D,"⪆","\\gtrapprox",!0);f(v,P,_e,"⋗","\\gtrdot");f(v,P,D,"⋙","\\ggg",!0);f(v,P,D,"≷","\\gtrless",!0);f(v,P,D,"⋛","\\gtreqless",!0);f(v,P,D,"⪌","\\gtreqqless",!0);f(v,P,D,"≖","\\eqcirc",!0);f(v,P,D,"≗","\\circeq",!0);f(v,P,D,"≜","\\triangleq",!0);f(v,P,D,"∼","\\thicksim");f(v,P,D,"≈","\\thickapprox");f(v,P,D,"⫆","\\supseteqq",!0);f(v,P,D,"⋑","\\Supset",!0);f(v,P,D,"⊐","\\sqsupset",!0);f(v,P,D,"≽","\\succcurlyeq",!0);f(v,P,D,"⋟","\\curlyeqsucc",!0);f(v,P,D,"≿","\\succsim",!0);f(v,P,D,"⪸","\\succapprox",!0);f(v,P,D,"⊳","\\vartriangleright");f(v,P,D,"⊵","\\trianglerighteq");f(v,P,D,"⊩","\\Vdash",!0);f(v,P,D,"∣","\\shortmid");f(v,P,D,"∥","\\shortparallel");f(v,P,D,"≬","\\between",!0);f(v,P,D,"⋔","\\pitchfork",!0);f(v,P,D,"∝","\\varpropto");f(v,P,D,"◀","\\blacktriangleleft");f(v,P,D,"∴","\\therefore",!0);f(v,P,D,"∍","\\backepsilon");f(v,P,D,"▶","\\blacktriangleright");f(v,P,D,"∵","\\because",!0);f(v,P,D,"⋘","\\llless");f(v,P,D,"⋙","\\gggtr");f(v,P,_e,"⊲","\\lhd");f(v,P,_e,"⊳","\\rhd");f(v,P,D,"≂","\\eqsim",!0);f(v,b,D,"⋈","\\Join");f(v,P,D,"≑","\\Doteq",!0);f(v,P,_e,"∔","\\dotplus",!0);f(v,P,_e,"∖","\\smallsetminus");f(v,P,_e,"⋒","\\Cap",!0);f(v,P,_e,"⋓","\\Cup",!0);f(v,P,_e,"⩞","\\doublebarwedge",!0);f(v,P,_e,"⊟","\\boxminus",!0);f(v,P,_e,"⊞","\\boxplus",!0);f(v,P,_e,"⋇","\\divideontimes",!0);f(v,P,_e,"⋉","\\ltimes",!0);f(v,P,_e,"⋊","\\rtimes",!0);f(v,P,_e,"⋋","\\leftthreetimes",!0);f(v,P,_e,"⋌","\\rightthreetimes",!0);f(v,P,_e,"⋏","\\curlywedge",!0);f(v,P,_e,"⋎","\\curlyvee",!0);f(v,P,_e,"⊝","\\circleddash",!0);f(v,P,_e,"⊛","\\circledast",!0);f(v,P,_e,"⋅","\\centerdot");f(v,P,_e,"⊺","\\intercal",!0);f(v,P,_e,"⋒","\\doublecap");f(v,P,_e,"⋓","\\doublecup");f(v,P,_e,"⊠","\\boxtimes",!0);f(v,P,D,"⇢","\\dashrightarrow",!0);f(v,P,D,"⇠","\\dashleftarrow",!0);f(v,P,D,"⇇","\\leftleftarrows",!0);f(v,P,D,"⇆","\\leftrightarrows",!0);f(v,P,D,"⇚","\\Lleftarrow",!0);f(v,P,D,"↞","\\twoheadleftarrow",!0);f(v,P,D,"↢","\\leftarrowtail",!0);f(v,P,D,"↫","\\looparrowleft",!0);f(v,P,D,"⇋","\\leftrightharpoons",!0);f(v,P,D,"↶","\\curvearrowleft",!0);f(v,P,D,"↺","\\circlearrowleft",!0);f(v,P,D,"↰","\\Lsh",!0);f(v,P,D,"⇈","\\upuparrows",!0);f(v,P,D,"↿","\\upharpoonleft",!0);f(v,P,D,"⇃","\\downharpoonleft",!0);f(v,b,D,"⊶","\\origof",!0);f(v,b,D,"⊷","\\imageof",!0);f(v,P,D,"⊸","\\multimap",!0);f(v,P,D,"↭","\\leftrightsquigarrow",!0);f(v,P,D,"⇉","\\rightrightarrows",!0);f(v,P,D,"⇄","\\rightleftarrows",!0);f(v,P,D,"↠","\\twoheadrightarrow",!0);f(v,P,D,"↣","\\rightarrowtail",!0);f(v,P,D,"↬","\\looparrowright",!0);f(v,P,D,"↷","\\curvearrowright",!0);f(v,P,D,"↻","\\circlearrowright",!0);f(v,P,D,"↱","\\Rsh",!0);f(v,P,D,"⇊","\\downdownarrows",!0);f(v,P,D,"↾","\\upharpoonright",!0);f(v,P,D,"⇂","\\downharpoonright",!0);f(v,P,D,"⇝","\\rightsquigarrow",!0);f(v,P,D,"⇝","\\leadsto");f(v,P,D,"⇛","\\Rrightarrow",!0);f(v,P,D,"↾","\\restriction");f(v,b,k,"‘","`");f(v,b,k,"$","\\$");f(te,b,k,"$","\\$");f(te,b,k,"$","\\textdollar");f(v,b,k,"%","\\%");f(te,b,k,"%","\\%");f(v,b,k,"_","\\_");f(te,b,k,"_","\\_");f(te,b,k,"_","\\textunderscore");f(v,b,k,"∠","\\angle",!0);f(v,b,k,"∞","\\infty",!0);f(v,b,k,"′","\\prime");f(v,b,k,"△","\\triangle");f(v,b,k,"Γ","\\Gamma",!0);f(v,b,k,"Δ","\\Delta",!0);f(v,b,k,"Θ","\\Theta",!0);f(v,b,k,"Λ","\\Lambda",!0);f(v,b,k,"Ξ","\\Xi",!0);f(v,b,k,"Π","\\Pi",!0);f(v,b,k,"Σ","\\Sigma",!0);f(v,b,k,"Υ","\\Upsilon",!0);f(v,b,k,"Φ","\\Phi",!0);f(v,b,k,"Ψ","\\Psi",!0);f(v,b,k,"Ω","\\Omega",!0);f(v,b,k,"A","Α");f(v,b,k,"B","Β");f(v,b,k,"E","Ε");f(v,b,k,"Z","Ζ");f(v,b,k,"H","Η");f(v,b,k,"I","Ι");f(v,b,k,"K","Κ");f(v,b,k,"M","Μ");f(v,b,k,"N","Ν");f(v,b,k,"O","Ο");f(v,b,k,"P","Ρ");f(v,b,k,"T","Τ");f(v,b,k,"X","Χ");f(v,b,k,"¬","\\neg",!0);f(v,b,k,"¬","\\lnot");f(v,b,k,"⊤","\\top");f(v,b,k,"⊥","\\bot");f(v,b,k,"∅","\\emptyset");f(v,P,k,"∅","\\varnothing");f(v,b,Pe,"α","\\alpha",!0);f(v,b,Pe,"β","\\beta",!0);f(v,b,Pe,"γ","\\gamma",!0);f(v,b,Pe,"δ","\\delta",!0);f(v,b,Pe,"ϵ","\\epsilon",!0);f(v,b,Pe,"ζ","\\zeta",!0);f(v,b,Pe,"η","\\eta",!0);f(v,b,Pe,"θ","\\theta",!0);f(v,b,Pe,"ι","\\iota",!0);f(v,b,Pe,"κ","\\kappa",!0);f(v,b,Pe,"λ","\\lambda",!0);f(v,b,Pe,"μ","\\mu",!0);f(v,b,Pe,"ν","\\nu",!0);f(v,b,Pe,"ξ","\\xi",!0);f(v,b,Pe,"ο","\\omicron",!0);f(v,b,Pe,"π","\\pi",!0);f(v,b,Pe,"ρ","\\rho",!0);f(v,b,Pe,"σ","\\sigma",!0);f(v,b,Pe,"τ","\\tau",!0);f(v,b,Pe,"υ","\\upsilon",!0);f(v,b,Pe,"ϕ","\\phi",!0);f(v,b,Pe,"χ","\\chi",!0);f(v,b,Pe,"ψ","\\psi",!0);f(v,b,Pe,"ω","\\omega",!0);f(v,b,Pe,"ε","\\varepsilon",!0);f(v,b,Pe,"ϑ","\\vartheta",!0);f(v,b,Pe,"ϖ","\\varpi",!0);f(v,b,Pe,"ϱ","\\varrho",!0);f(v,b,Pe,"ς","\\varsigma",!0);f(v,b,Pe,"φ","\\varphi",!0);f(v,b,_e,"∗","*",!0);f(v,b,_e,"+","+");f(v,b,_e,"−","-",!0);f(v,b,_e,"⋅","\\cdot",!0);f(v,b,_e,"∘","\\circ",!0);f(v,b,_e,"÷","\\div",!0);f(v,b,_e,"±","\\pm",!0);f(v,b,_e,"×","\\times",!0);f(v,b,_e,"∩","\\cap",!0);f(v,b,_e,"∪","\\cup",!0);f(v,b,_e,"∖","\\setminus",!0);f(v,b,_e,"∧","\\land");f(v,b,_e,"∨","\\lor");f(v,b,_e,"∧","\\wedge",!0);f(v,b,_e,"∨","\\vee",!0);f(v,b,k,"√","\\surd");f(v,b,Tn,"⟨","\\langle",!0);f(v,b,Tn,"∣","\\lvert");f(v,b,Tn,"∥","\\lVert");f(v,b,mn,"?","?");f(v,b,mn,"!","!");f(v,b,mn,"⟩","\\rangle",!0);f(v,b,mn,"∣","\\rvert");f(v,b,mn,"∥","\\rVert");f(v,b,D,"=","=");f(v,b,D,":",":");f(v,b,D,"≈","\\approx",!0);f(v,b,D,"≅","\\cong",!0);f(v,b,D,"≥","\\ge");f(v,b,D,"≥","\\geq",!0);f(v,b,D,"←","\\gets");f(v,b,D,">","\\gt",!0);f(v,b,D,"∈","\\in",!0);f(v,b,D,"","\\@not");f(v,b,D,"⊂","\\subset",!0);f(v,b,D,"⊃","\\supset",!0);f(v,b,D,"⊆","\\subseteq",!0);f(v,b,D,"⊇","\\supseteq",!0);f(v,P,D,"⊈","\\nsubseteq",!0);f(v,P,D,"⊉","\\nsupseteq",!0);f(v,b,D,"⊨","\\models");f(v,b,D,"←","\\leftarrow",!0);f(v,b,D,"≤","\\le");f(v,b,D,"≤","\\leq",!0);f(v,b,D,"<","\\lt",!0);f(v,b,D,"→","\\rightarrow",!0);f(v,b,D,"→","\\to");f(v,P,D,"≱","\\ngeq",!0);f(v,P,D,"≰","\\nleq",!0);f(v,b,wi," ","\\ ");f(v,b,wi," ","\\space");f(v,b,wi," ","\\nobreakspace");f(te,b,wi," ","\\ ");f(te,b,wi," "," ");f(te,b,wi," ","\\space");f(te,b,wi," ","\\nobreakspace");f(v,b,wi,"","\\nobreak");f(v,b,wi,"","\\allowbreak");f(v,b,Ps,",",",");f(v,b,Ps,";",";");f(v,P,_e,"⊼","\\barwedge",!0);f(v,P,_e,"⊻","\\veebar",!0);f(v,b,_e,"⊙","\\odot",!0);f(v,b,_e,"⊕","\\oplus",!0);f(v,b,_e,"⊗","\\otimes",!0);f(v,b,k,"∂","\\partial",!0);f(v,b,_e,"⊘","\\oslash",!0);f(v,P,_e,"⊚","\\circledcirc",!0);f(v,P,_e,"⊡","\\boxdot",!0);f(v,b,_e,"△","\\bigtriangleup");f(v,b,_e,"▽","\\bigtriangledown");f(v,b,_e,"†","\\dagger");f(v,b,_e,"⋄","\\diamond");f(v,b,_e,"⋆","\\star");f(v,b,_e,"◃","\\triangleleft");f(v,b,_e,"▹","\\triangleright");f(v,b,Tn,"{","\\{");f(te,b,k,"{","\\{");f(te,b,k,"{","\\textbraceleft");f(v,b,mn,"}","\\}");f(te,b,k,"}","\\}");f(te,b,k,"}","\\textbraceright");f(v,b,Tn,"{","\\lbrace");f(v,b,mn,"}","\\rbrace");f(v,b,Tn,"[","\\lbrack",!0);f(te,b,k,"[","\\lbrack",!0);f(v,b,mn,"]","\\rbrack",!0);f(te,b,k,"]","\\rbrack",!0);f(v,b,Tn,"(","\\lparen",!0);f(v,b,mn,")","\\rparen",!0);f(te,b,k,"<","\\textless",!0);f(te,b,k,">","\\textgreater",!0);f(v,b,Tn,"⌊","\\lfloor",!0);f(v,b,mn,"⌋","\\rfloor",!0);f(v,b,Tn,"⌈","\\lceil",!0);f(v,b,mn,"⌉","\\rceil",!0);f(v,b,k,"\\","\\backslash");f(v,b,k,"∣","|");f(v,b,k,"∣","\\vert");f(te,b,k,"|","\\textbar",!0);f(v,b,k,"∥","\\|");f(v,b,k,"∥","\\Vert");f(te,b,k,"∥","\\textbardbl");f(te,b,k,"~","\\textasciitilde");f(te,b,k,"\\","\\textbackslash");f(te,b,k,"^","\\textasciicircum");f(v,b,D,"↑","\\uparrow",!0);f(v,b,D,"⇑","\\Uparrow",!0);f(v,b,D,"↓","\\downarrow",!0);f(v,b,D,"⇓","\\Downarrow",!0);f(v,b,D,"↕","\\updownarrow",!0);f(v,b,D,"⇕","\\Updownarrow",!0);f(v,b,Ht,"∐","\\coprod");f(v,b,Ht,"⋁","\\bigvee");f(v,b,Ht,"⋀","\\bigwedge");f(v,b,Ht,"⨄","\\biguplus");f(v,b,Ht,"⋂","\\bigcap");f(v,b,Ht,"⋃","\\bigcup");f(v,b,Ht,"∫","\\int");f(v,b,Ht,"∫","\\intop");f(v,b,Ht,"∬","\\iint");f(v,b,Ht,"∭","\\iiint");f(v,b,Ht,"∏","\\prod");f(v,b,Ht,"∑","\\sum");f(v,b,Ht,"⨂","\\bigotimes");f(v,b,Ht,"⨁","\\bigoplus");f(v,b,Ht,"⨀","\\bigodot");f(v,b,Ht,"∮","\\oint");f(v,b,Ht,"∯","\\oiint");f(v,b,Ht,"∰","\\oiiint");f(v,b,Ht,"⨆","\\bigsqcup");f(v,b,Ht,"∫","\\smallint");f(te,b,rs,"…","\\textellipsis");f(v,b,rs,"…","\\mathellipsis");f(te,b,rs,"…","\\ldots",!0);f(v,b,rs,"…","\\ldots",!0);f(v,b,rs,"⋯","\\@cdots",!0);f(v,b,rs,"⋱","\\ddots",!0);f(v,b,k,"⋮","\\varvdots");f(te,b,k,"⋮","\\varvdots");f(v,b,Et,"ˊ","\\acute");f(v,b,Et,"ˋ","\\grave");f(v,b,Et,"¨","\\ddot");f(v,b,Et,"~","\\tilde");f(v,b,Et,"ˉ","\\bar");f(v,b,Et,"˘","\\breve");f(v,b,Et,"ˇ","\\check");f(v,b,Et,"^","\\hat");f(v,b,Et,"⃗","\\vec");f(v,b,Et,"˙","\\dot");f(v,b,Et,"˚","\\mathring");f(v,b,Pe,"","\\@imath");f(v,b,Pe,"","\\@jmath");f(v,b,k,"ı","ı");f(v,b,k,"ȷ","ȷ");f(te,b,k,"ı","\\i",!0);f(te,b,k,"ȷ","\\j",!0);f(te,b,k,"ß","\\ss",!0);f(te,b,k,"æ","\\ae",!0);f(te,b,k,"œ","\\oe",!0);f(te,b,k,"ø","\\o",!0);f(te,b,k,"Æ","\\AE",!0);f(te,b,k,"Œ","\\OE",!0);f(te,b,k,"Ø","\\O",!0);f(te,b,Et,"ˊ","\\'");f(te,b,Et,"ˋ","\\`");f(te,b,Et,"ˆ","\\^");f(te,b,Et,"˜","\\~");f(te,b,Et,"ˉ","\\=");f(te,b,Et,"˘","\\u");f(te,b,Et,"˙","\\.");f(te,b,Et,"¸","\\c");f(te,b,Et,"˚","\\r");f(te,b,Et,"ˇ","\\v");f(te,b,Et,"¨",'\\"');f(te,b,Et,"˝","\\H");f(te,b,Et,"◯","\\textcircled");var ju={"--":!0,"---":!0,"``":!0,"''":!0};f(te,b,k,"–","--",!0);f(te,b,k,"–","\\textendash");f(te,b,k,"—","---",!0);f(te,b,k,"—","\\textemdash");f(te,b,k,"‘","`",!0);f(te,b,k,"‘","\\textquoteleft");f(te,b,k,"’","'",!0);f(te,b,k,"’","\\textquoteright");f(te,b,k,"“","``",!0);f(te,b,k,"“","\\textquotedblleft");f(te,b,k,"”","''",!0);f(te,b,k,"”","\\textquotedblright");f(v,b,k,"°","\\degree",!0);f(te,b,k,"°","\\degree");f(te,b,k,"°","\\textdegree",!0);f(v,b,k,"£","\\pounds");f(v,b,k,"£","\\mathsterling",!0);f(te,b,k,"£","\\pounds");f(te,b,k,"£","\\textsterling",!0);f(v,P,k,"✠","\\maltese");f(te,P,k,"✠","\\maltese");var fh='0123456789/@."';for(var zo=0;zo<fh.length;zo++){var ph=fh.charAt(zo);f(v,b,k,ph,ph)}var mh='0123456789!@*()-=+";:?/.,';for(var Ho=0;Ho<mh.length;Ho++){var gh=mh.charAt(Ho);f(te,b,k,gh,gh)}var Ia="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var Go=0;Go<Ia.length;Go++){var ca=Ia.charAt(Go);f(v,b,Pe,ca,ca),f(te,b,k,ca,ca)}f(v,P,k,"C","ℂ");f(te,P,k,"C","ℂ");f(v,P,k,"H","ℍ");f(te,P,k,"H","ℍ");f(v,P,k,"N","ℕ");f(te,P,k,"N","ℕ");f(v,P,k,"P","ℙ");f(te,P,k,"P","ℙ");f(v,P,k,"Q","ℚ");f(te,P,k,"Q","ℚ");f(v,P,k,"R","ℝ");f(te,P,k,"R","ℝ");f(v,P,k,"Z","ℤ");f(te,P,k,"Z","ℤ");f(v,b,Pe,"h","ℎ");f(te,b,Pe,"h","ℎ");var Fe;for(var on=0;on<Ia.length;on++){var Pt=Ia.charAt(on);Fe=String.fromCharCode(55349,56320+on),f(v,b,Pe,Pt,Fe),f(te,b,k,Pt,Fe),Fe=String.fromCharCode(55349,56372+on),f(v,b,Pe,Pt,Fe),f(te,b,k,Pt,Fe),Fe=String.fromCharCode(55349,56424+on),f(v,b,Pe,Pt,Fe),f(te,b,k,Pt,Fe),Fe=String.fromCharCode(55349,56580+on),f(v,b,Pe,Pt,Fe),f(te,b,k,Pt,Fe),Fe=String.fromCharCode(55349,56684+on),f(v,b,Pe,Pt,Fe),f(te,b,k,Pt,Fe),Fe=String.fromCharCode(55349,56736+on),f(v,b,Pe,Pt,Fe),f(te,b,k,Pt,Fe),Fe=String.fromCharCode(55349,56788+on),f(v,b,Pe,Pt,Fe),f(te,b,k,Pt,Fe),Fe=String.fromCharCode(55349,56840+on),f(v,b,Pe,Pt,Fe),f(te,b,k,Pt,Fe),Fe=String.fromCharCode(55349,56944+on),f(v,b,Pe,Pt,Fe),f(te,b,k,Pt,Fe),on<26&&(Fe=String.fromCharCode(55349,56632+on),f(v,b,Pe,Pt,Fe),f(te,b,k,Pt,Fe),Fe=String.fromCharCode(55349,56476+on),f(v,b,Pe,Pt,Fe),f(te,b,k,Pt,Fe))}Fe="𝕜";f(v,b,Pe,"k",Fe);f(te,b,k,"k",Fe);for(var Qi=0;Qi<10;Qi++){var Di=Qi.toString();Fe=String.fromCharCode(55349,57294+Qi),f(v,b,Pe,Di,Fe),f(te,b,k,Di,Fe),Fe=String.fromCharCode(55349,57314+Qi),f(v,b,Pe,Di,Fe),f(te,b,k,Di,Fe),Fe=String.fromCharCode(55349,57324+Qi),f(v,b,Pe,Di,Fe),f(te,b,k,Di,Fe),Fe=String.fromCharCode(55349,57334+Qi),f(v,b,Pe,Di,Fe),f(te,b,k,Di,Fe)}var _l="ÐÞþ";for(var Vo=0;Vo<_l.length;Vo++){var ha=_l.charAt(Vo);f(v,b,Pe,ha,ha),f(te,b,k,ha,ha)}var Sl={mathClass:"mathbf",textClass:"textbf",font:"Main-Bold"},vh={mathClass:"mathnormal",textClass:"textit",font:"Math-Italic"},xh={mathClass:"boldsymbol",textClass:"boldsymbol",font:"Main-BoldItalic"},T3={mathClass:"mathscr",textClass:"textscr",font:"Script-Regular"},ar={mathClass:"",textClass:"",font:""},yh={mathClass:"mathfrak",textClass:"textfrak",font:"Fraktur-Regular"},bh={mathClass:"mathbb",textClass:"textbb",font:"AMS-Regular"},_h={mathClass:"mathboldfrak",textClass:"textboldfrak",font:"Fraktur-Regular"},Ml={mathClass:"mathsf",textClass:"textsf",font:"SansSerif-Regular"},wl={mathClass:"mathboldsf",textClass:"textboldsf",font:"SansSerif-Bold"},Sh={mathClass:"mathitsf",textClass:"textitsf",font:"SansSerif-Italic"},Tl={mathClass:"mathtt",textClass:"texttt",font:"Typewriter-Regular"},Mh=[Sl,Sl,vh,vh,xh,xh,T3,ar,ar,ar,yh,yh,bh,bh,_h,_h,Ml,Ml,wl,wl,Sh,Sh,ar,ar,Tl,Tl],E3=[Sl,ar,Ml,wl,Tl],A3=r=>{var e=r.charCodeAt(0),t=r.charCodeAt(1),n=(e-55296)*1024+(t-56320)+65536;if(119808<=n&&n<120484){var i=Math.floor((n-119808)/26);return Mh[i]}else if(120782<=n&&n<=120831){var s=Math.floor((n-120782)/10);return E3[s]}else{if(n===120485||n===120486)return Mh[0];if(120486<n&&n<120782)return ar;throw new oe("Unsupported character: "+r)}};function yn(r){var e=r.strict,t=r.errorCode,n=r.errorMsg,i=r.token,s=r.report,a=e;if(typeof e=="function")if(s)a=e(t,n,i);else try{a=e(t,n,i)}catch{a="error"}switch(a){case!0:case"error":if(s)throw new oe("LaTeX-incompatible input and strict mode is set to 'error': "+(n+" ["+t+"]"),i);return!0;case!1:case"ignore":if(!s)return!1;break;case"warn":default:if(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(n+" ["+t+"]")),!s)return!1;break}}var Ba=function(e,t,n){if(Tt[n][e]){var i=Tt[n][e].replace;i&&(e=i)}return{value:e,metrics:t0(e,t,n)}},cn=function(e,t,n,i,s){var a=Ba(e,t,n),o=a.metrics;e=a.value;var l;if(o){var c=o.italic;(n==="text"||i&&i.font==="mathit")&&(c=0),l=new wn(e,o.height,o.depth,c,o.skew,o.width,s)}else yn({strict:i.strict,errorCode:"symbolNotInFont",errorMsg:"No character metrics for '"+e+"' in style '"+t+"' and mode '"+n+"'",report:!0}),l=new wn(e,0,0,0,0,0,s);l.maxFontSize=i.sizeMultiplier,i.style.isTight()&&l.classes.push("mtight");var h=i.getColor();return h&&(l.style.color=h),l},n0=function(e,t,n,i){return i===void 0&&(i=[]),n.font==="boldsymbol"&&Ba(e,"Main-Bold",t).metrics?cn(e,"Main-Bold",t,n,i.concat(["mathbf"])):e==="\\"||Tt[t][e].font==="main"?cn(e,"Main-Regular",t,n,i):cn(e,"AMS-Regular",t,n,i.concat(["amsrm"]))},C3=function(e,t,n){return n!=="textord"&&Ba(e,"Math-BoldItalic",t).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},za=function(e,t){var n=e.type==="mathord"?"mathord":"textord",i=e.mode,s=e.text,a=["mord"],o=t.font,l=t.fontFamily,c=t.fontWeight,h=t.fontShape,u=i==="math"||i==="text"&&!!o,d=u?o:l,p="",x="";if(s.charCodeAt(0)===55349){var y=A3(s);p=y.font,x=y[i+"Class"]}if(p)return cn(s,p,i,t,a.concat(x));if(d){var g,m;if(d==="boldsymbol"){var _=C3(s,i,n);g=_.fontName,m=[_.fontClass]}else u?(g=El[o].fontName,m=[o]):(g=ua(l,c,h),m=[l,c,h]);if(Ba(s,g,i).metrics)return cn(s,g,i,t,a.concat(m));if(Object.prototype.hasOwnProperty.call(ju,s)&&g.slice(0,10)==="Typewriter"){for(var S=[],w=0;w<s.length;w++)S.push(cn(s[w],g,i,t,a.concat(m)));return Ti(S)}}if(n==="mathord")return cn(s,"Math-Italic",i,t,a.concat(["mathnormal"]));if(n==="textord"){var N=Tt[i][s]&&Tt[i][s].font;if(N==="ams"){var I=ua("amsrm",c,h);return cn(s,I,i,t,a.concat("amsrm",c,h))}else if(N==="main"||!N){var L=ua("textrm",c,h);return cn(s,L,i,t,a.concat(c,h))}else{var H=ua(N,c,h);return cn(s,H,i,t,a.concat(H,c,h))}}else throw new Error("unexpected type: "+n+" in makeOrd")},R3=(r,e)=>{if(Hi(r.classes)!==Hi(e.classes)||r.skew!==e.skew||r.maxFontSize!==e.maxFontSize||r.italic!==0&&r.hasClass("mathnormal"))return!1;if(r.classes.length===1){var t=r.classes[0];if(t==="mbin"||t==="mord")return!1}for(var n of Object.keys(r.style))if(r.style[n]!==e.style[n])return!1;for(var i of Object.keys(e.style))if(r.style[i]!==e.style[i])return!1;return!0},Ku=r=>{for(var e=0;e<r.length-1;e++){var t=r[e],n=r[e+1];t instanceof wn&&n instanceof wn&&R3(t,n)&&(t.text+=n.text,t.height=Math.max(t.height,n.height),t.depth=Math.max(t.depth,n.depth),t.italic=n.italic,r.splice(e+1,1),e--)}return r},i0=function(e){for(var t=0,n=0,i=0,s=0;s<e.children.length;s++){var a=e.children[s];a.height>t&&(t=a.height),a.depth>n&&(n=a.depth),a.maxFontSize>i&&(i=a.maxFontSize)}e.height=t,e.depth=n,e.maxFontSize=i},ie=function(e,t,n,i){var s=new is(e,t,n,i);return i0(s),s},Vi=(r,e,t,n)=>new is(r,e,t,n),$r=function(e,t,n){var i=ie([e],[],t);return i.height=Math.max(n||t.fontMetrics().defaultRuleThickness,t.minRuleThickness),i.style.borderBottomWidth=de(i.height),i.maxFontSize=1,i},I3=function(e,t,n,i){var s=new Fa(e,t,n,i);return i0(s),s},Ti=function(e){var t=new ns(e);return i0(t),t},Zr=function(e,t){return e instanceof ns?ie([],[e],t):e},L3=function(e){if(e.positionType==="individualShift"){for(var t=e.children,n=[t[0]],i=-t[0].shift-t[0].elem.depth,s=i,a=1;a<t.length;a++){var o=-t[a].shift-s-t[a].elem.depth,l=o-(t[a-1].elem.height+t[a-1].elem.depth);s=s+o,n.push({type:"kern",size:l}),n.push(t[a])}return{children:n,depth:i}}var c;if(e.positionType==="top"){for(var h=e.positionData,u=0;u<e.children.length;u++){var d=e.children[u];h-=d.type==="kern"?d.size:d.elem.height+d.elem.depth}c=h}else if(e.positionType==="bottom")c=-e.positionData;else{var p=e.children[0];if(p.type!=="elem")throw new Error('First child must have type "elem".');if(e.positionType==="shift")c=-p.elem.depth-e.positionData;else if(e.positionType==="firstBaseline")c=-p.elem.depth;else throw new Error("Invalid positionType "+e.positionType+".")}return{children:e.children,depth:c}},ct=function(e,t){for(var n=L3(e),i=n.children,s=n.depth,a=0,o=0;o<i.length;o++){var l=i[o];if(l.type==="elem"){var c=l.elem;a=Math.max(a,c.maxFontSize,c.height)}}a+=2;var h=ie(["pstrut"],[]);h.style.height=de(a);for(var u=[],d=s,p=s,x=s,y=0;y<i.length;y++){var g=i[y];if(g.type==="kern")x+=g.size;else{var m=g.elem,_=g.wrapperClasses||[],S=g.wrapperStyle||{},w=ie(_,[h,m],void 0,S);w.style.top=de(-a-x-m.depth),g.marginLeft&&(w.style.marginLeft=g.marginLeft),g.marginRight&&(w.style.marginRight=g.marginRight),u.push(w),x+=m.height+m.depth}d=Math.min(d,x),p=Math.max(p,x)}var N=ie(["vlist"],u);N.style.height=de(p);var I;if(d<0){var L=ie([],[]),H=ie(["vlist"],[L]);H.style.height=de(-d);var E=ie(["vlist-s"],[new wn("​")]);I=[ie(["vlist-r"],[N,E]),ie(["vlist-r"],[H])]}else I=[ie(["vlist-r"],[N])];var C=ie(["vlist-t"],I);return I.length===2&&C.classes.push("vlist-t2"),C.height=p,C.depth=-d,C},$u=(r,e)=>{var t=ie(["mspace"],[],e),n=Rt(r,e);return t.style.marginRight=de(n),t},ua=(r,e,t)=>{var n,i;switch(r){case"amsrm":n="AMS";break;case"textrm":n="Main";break;case"textsf":n="SansSerif";break;case"texttt":n="Typewriter";break;default:n=r}return e==="textbf"&&t==="textit"?i="BoldItalic":e==="textbf"?i="Bold":t==="textit"?i="Italic":i="Regular",n+"-"+i},El={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathsfit:{variant:"sans-serif-italic",fontName:"SansSerif-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},Zu={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},Ju=function(e,t){var n=Zu[e],i=n[0],s=n[1],a=n[2],o=new Gi(i),l=new bi([o],{width:de(s),height:de(a),style:"width:"+de(s),viewBox:"0 0 "+1e3*s+" "+1e3*a,preserveAspectRatio:"xMinYMin"}),c=Vi(["katex-overlay"],[l],t);return c.height=a,c.style.height=de(a),c.style.width=de(s),c},Ct={number:3,unit:"mu"},er={number:4,unit:"mu"},hi={number:5,unit:"mu"},P3={mord:{mop:Ct,mbin:er,mrel:hi,minner:Ct},mop:{mord:Ct,mop:Ct,mrel:hi,minner:Ct},mbin:{mord:er,mop:er,mopen:er,minner:er},mrel:{mord:hi,mop:hi,mopen:hi,minner:hi},mopen:{},mclose:{mop:Ct,mbin:er,mrel:hi,minner:Ct},mpunct:{mord:Ct,mop:Ct,mrel:hi,mopen:Ct,mclose:Ct,mpunct:Ct,minner:Ct},minner:{mord:Ct,mop:Ct,mbin:er,mrel:hi,mopen:Ct,mpunct:Ct,minner:Ct}},D3={mord:{mop:Ct},mop:{mord:Ct,mop:Ct},mbin:{},mrel:{},mopen:{},mclose:{mop:Ct},mpunct:{},minner:{mop:Ct}},Qu={},Es={},As={};function ye(r){for(var e=r.type,t=r.names,n=r.htmlBuilder,i=r.mathmlBuilder,s=0;s<t.length;++s)Qu[t[s]]=r;e&&(n&&(Es[e]=n),i&&(As[e]=i))}function fr(r){var e=r.type,t=r.htmlBuilder,n=r.mathmlBuilder;t&&(Es[e]=t),n&&(As[e]=n)}var Cs=function(e){return e.type==="ordgroup"&&e.body.length===1?e.body[0]:e},Bt=function(e){return e.type==="ordgroup"?e.body:[e]},N3=new Set(["leftmost","mbin","mopen","mrel","mop","mpunct"]),U3=new Set(["rightmost","mrel","mclose","mpunct"]),k3={display:Ge.DISPLAY,text:Ge.TEXT,script:Ge.SCRIPT,scriptscript:Ge.SCRIPTSCRIPT},O3={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},qt=function(e,t,n,i){i===void 0&&(i=[null,null]);for(var s=[],a=0;a<e.length;a++){var o=lt(e[a],t);if(o instanceof ns){var l=o.children;s.push(...l)}else s.push(o)}if(Ku(s),!n)return s;var c=t;if(e.length===1){var h=e[0];h.type==="sizing"?c=t.havingSize(h.size):h.type==="styling"&&(c=t.havingStyle(k3[h.style]))}var u=ie([i[0]||"leftmost"],[],t),d=ie([i[1]||"rightmost"],[],t),p=n==="root";return Al(s,(x,y)=>{var g=y.classes[0],m=x.classes[0];g==="mbin"&&U3.has(m)?y.classes[0]="mord":m==="mbin"&&N3.has(g)&&(x.classes[0]="mord")},{node:u},d,p),Al(s,(x,y)=>{var g,m,_=Rl(y),S=Rl(x),w=_&&S?x.hasClass("mtight")?(g=D3[_])==null?void 0:g[S]:(m=P3[_])==null?void 0:m[S]:null;if(w)return $u(w,c)},{node:u},d,p),s},Al=function(e,t,n,i,s){i&&e.push(i);for(var a=0;a<e.length;a++){var o=e[a],l=ed(o);if(l){Al(l.children,t,n,null,s);continue}var c=!o.hasClass("mspace");if(c){var h=t(o,n.node);h&&(n.insertAfter?n.insertAfter(h):(e.unshift(h),a++))}c?n.node=o:s&&o.hasClass("katex-newline")&&(n.node=ie(["leftmost"])),n.insertAfter=(u=>d=>{e.splice(u+1,0,d),a++})(a)}i&&e.pop()},ed=function(e){return e instanceof ns||e instanceof Fa||e instanceof is&&e.hasClass("enclosing")?e:null},Cl=function(e,t){var n=ed(e);if(n){var i=n.children;if(i.length){if(t==="right")return Cl(i[i.length-1],"right");if(t==="left")return Cl(i[0],"left")}}return e},Rl=function(e,t){if(!e)return null;t&&(e=Cl(e,t));var n=e.classes[0];return O3[n]||null},Rs=function(e,t){var n=["nulldelimiter"].concat(e.baseSizingClasses());return ie(t.concat(n))},lt=function(e,t,n){if(!e)return ie();if(Es[e.type]){var i=Es[e.type](e,t);if(n&&t.size!==n.size){i=ie(t.sizingClasses(n),[i],t);var s=t.sizeMultiplier/n.sizeMultiplier;i.height*=s,i.depth*=s}return i}else throw new oe("Got group of unknown type: '"+e.type+"'")};function da(r,e){var t=ie(["katex-base"],r,e),n=ie(["katex-strut"]);return n.style.height=de(t.height+t.depth),t.depth&&(n.style.verticalAlign=de(-t.depth)),t.children.unshift(n),t}function Il(r,e){var t=null;r.length===1&&r[0].type==="tag"&&(t=r[0].tag,r=r[0].body);var n=qt(r,e,"root"),i;n.length===2&&n[1].hasClass("katex-tag")&&(i=n.pop());for(var s=[],a=[],o=0;o<n.length;o++)if(a.push(n[o]),n[o].hasClass("mbin")||n[o].hasClass("mrel")||n[o].hasClass("allowbreak")){for(var l=!1;o<n.length-1&&n[o+1].hasClass("mspace")&&!n[o+1].hasClass("katex-newline");)o++,a.push(n[o]),n[o].hasClass("nobreak")&&(l=!0);l||(s.push(da(a,e)),a=[])}else n[o].hasClass("katex-newline")&&(a.pop(),a.length>0&&(s.push(da(a,e)),a=[]),s.push(n[o]));a.length>0&&s.push(da(a,e));var c;t?(c=da(qt(t,e,!0),e),c.classes=["katex-tag"],s.push(c)):i&&s.push(i);var h=ie(["katex-html"],s);if(h.setAttribute("aria-hidden","true"),c){var u=c.children[0];u.style.height=de(h.height+h.depth),h.depth&&(u.style.verticalAlign=de(-h.depth))}return h}function td(r){return new ns(r)}class he{constructor(e,t,n){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=e,this.attributes={},this.children=t||[],this.classes=n||[]}setAttribute(e,t){this.attributes[e]=t}getAttribute(e){return this.attributes[e]}toNode(){var e=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var t of Object.entries(this.attributes)){var n=t[0],i=t[1];e.setAttribute(n,i)}this.classes.length>0&&(e.className=Hi(this.classes));for(var s=0;s<this.children.length;s++)if(this.children[s]instanceof zt&&this.children[s+1]instanceof zt){for(var a=this.children[s].toText()+this.children[++s].toText();this.children[s+1]instanceof zt;)a+=this.children[++s].toText();e.appendChild(new zt(a).toNode())}else e.appendChild(this.children[s].toNode());return e}toMarkup(){var e="<"+this.type;for(var t of Object.entries(this.attributes)){var n=t[0],i=t[1];e+=" "+n+'="',e+=nn(i),e+='"'}this.classes.length>0&&(e+=' class ="'+nn(Hi(this.classes))+'"'),e+=">";for(var s=0;s<this.children.length;s++)e+=this.children[s].toMarkup();return e+="</"+this.type+">",e}toText(){return this.children.map(e=>e.toText()).join("")}}class zt{constructor(e){this.text=void 0,this.text=e}toNode(){return document.createTextNode(this.text)}toMarkup(){return nn(this.toText())}toText(){return this.text}}class nd{constructor(e){this.width=void 0,this.character=void 0,this.width=e,e>=.05555&&e<=.05556?this.character=" ":e>=.1666&&e<=.1667?this.character=" ":e>=.2222&&e<=.2223?this.character=" ":e>=.2777&&e<=.2778?this.character="  ":e>=-.05556&&e<=-.05555?this.character=" ⁣":e>=-.1667&&e<=-.1666?this.character=" ⁣":e>=-.2223&&e<=-.2222?this.character=" ⁣":e>=-.2778&&e<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var e=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return e.setAttribute("width",de(this.width)),e}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+de(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var F3=new Set(["\\imath","\\jmath"]),B3=new Set(["mrow","mtable"]),Un=function(e,t,n){var i,s;return Tt[t][e]&&Tt[t][e].replace&&e.charCodeAt(0)!==55349&&!(Object.prototype.hasOwnProperty.call(ju,e)&&((n==null||(i=n.fontFamily)==null?void 0:i.slice(4,6))==="tt"||(n==null||(s=n.font)==null?void 0:s.slice(4,6))==="tt"))&&(e=Tt[t][e].replace),new zt(e)},r0=function(e){return e.length===1?e[0]:new he("mrow",e)},z3={mathit:"italic",boldsymbol:r=>r.type==="textord"?"bold":"bold-italic",mathbf:"bold",mathbb:"double-struck",mathsfit:"sans-serif-italic",mathfrak:"fraktur",mathscr:"script",mathcal:"script",mathsf:"sans-serif",mathtt:"monospace"},s0=(r,e)=>{if(r.mode==="text"){if(e.fontFamily==="texttt")return"monospace";if(e.fontFamily==="textsf")return e.fontShape==="textit"&&e.fontWeight==="textbf"?"sans-serif-bold-italic":e.fontShape==="textit"?"sans-serif-italic":e.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(e.fontShape==="textit"&&e.fontWeight==="textbf")return"bold-italic";if(e.fontShape==="textit")return"italic";if(e.fontWeight==="textbf")return"bold"}var t=e.font;if(!t||t==="mathnormal")return null;var n=r.mode,i=z3[t];if(i)return typeof i=="function"?i(r):i;var s=r.text;if(F3.has(s))return null;if(Tt[n][s]){var a=Tt[n][s].replace;a&&(s=a)}var o=El[t].fontName;return t0(s,o,n)?El[t].variant:null};function Wo(r){if(!r)return!1;if(r.type==="mi"&&r.children.length===1){var e=r.children[0];return e instanceof zt&&e.text==="."}else if(r.type==="mo"&&r.children.length===1&&r.getAttribute("separator")==="true"&&r.getAttribute("lspace")==="0em"&&r.getAttribute("rspace")==="0em"){var t=r.children[0];return t instanceof zt&&t.text===","}else return!1}var En=function(e,t,n){if(e.length===1){var i=gt(e[0],t);return n&&i instanceof he&&i.type==="mo"&&(i.setAttribute("lspace","0em"),i.setAttribute("rspace","0em")),[i]}for(var s=[],a,o=0;o<e.length;o++){var l=gt(e[o],t);if(l instanceof he&&a instanceof he){if(l.type==="mtext"&&a.type==="mtext"&&l.getAttribute("mathvariant")===a.getAttribute("mathvariant")){a.children.push(...l.children);continue}else if(l.type==="mn"&&a.type==="mn"){a.children.push(...l.children);continue}else if(Wo(l)&&a.type==="mn"){a.children.push(...l.children);continue}else if(l.type==="mn"&&Wo(a))l.children=[...a.children,...l.children],s.pop();else if((l.type==="msup"||l.type==="msub")&&l.children.length>=1&&(a.type==="mn"||Wo(a))){var c=l.children[0];c instanceof he&&c.type==="mn"&&(c.children=[...a.children,...c.children],s.pop())}else if(a.type==="mi"&&a.children.length===1){var h=a.children[0];if(h instanceof zt&&h.text==="̸"&&(l.type==="mo"||l.type==="mi"||l.type==="mn")){var u=l.children[0];u instanceof zt&&u.text.length>0&&(u.text=u.text.slice(0,1)+"̸"+u.text.slice(1),s.pop())}}}s.push(l),a=l}return s},Wi=function(e,t,n){return r0(En(e,t,n))},gt=function(e,t){if(!e)return new he("mrow");if(As[e.type])return As[e.type](e,t);throw new oe("Got group of unknown type: '"+e.type+"'")};function wh(r,e,t,n,i){var s=En(r,t),a;s.length===1&&s[0]instanceof he&&B3.has(s[0].type)?a=s[0]:a=new he("mrow",s);var o=new he("annotation",[new zt(e)]);o.setAttribute("encoding","application/x-tex");var l=new he("semantics",[a,o]),c=new he("math",[l]);c.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),n&&c.setAttribute("display","block");var h=i?"katex":"katex-mathml";return ie([h],[c])}var H3=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],Th=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],Eh=function(e,t){return t.size<2?e:H3[e-1][t.size-1]};class di{constructor(e){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.strict=void 0,this.style=e.style,this.color=e.color,this.size=e.size||di.BASESIZE,this.textSize=e.textSize||this.size,this.phantom=!!e.phantom,this.font=e.font||"",this.fontFamily=e.fontFamily||"",this.fontWeight=e.fontWeight||"",this.fontShape=e.fontShape||"",this.sizeMultiplier=Th[this.size-1],this.maxSize=e.maxSize,this.minRuleThickness=e.minRuleThickness,this.strict=e.strict,this._fontMetrics=void 0}extend(e){var t={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness,strict:this.strict};return Object.assign(t,e),new di(t)}havingStyle(e){return this.style===e?this:this.extend({style:e,size:Eh(this.textSize,e)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(e){return this.size===e&&this.textSize===e?this:this.extend({style:this.style.text(),size:e,textSize:e,sizeMultiplier:Th[e-1]})}havingBaseStyle(e){e=e||this.style.text();var t=Eh(di.BASESIZE,e);return this.size===t&&this.textSize===di.BASESIZE&&this.style===e?this:this.extend({style:e,size:t})}havingBaseSizing(){var e;switch(this.style.id){case 4:case 5:e=3;break;case 6:case 7:e=1;break;default:e=6}return this.extend({style:this.style.text(),size:e})}withColor(e){return this.extend({color:e})}withPhantom(){return this.extend({phantom:!0})}withFont(e){return this.extend({font:e})}withTextFontFamily(e){return this.extend({fontFamily:e,font:""})}withTextFontWeight(e){return this.extend({fontWeight:e,font:""})}withTextFontShape(e){return this.extend({fontShape:e,font:""})}sizingClasses(e){return e.size!==this.size?["katex-sizing","reset-size"+e.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==di.BASESIZE?["katex-sizing","reset-size"+this.size,"size"+di.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=w3(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}}di.BASESIZE=6;var id=r=>new di({style:r.displayMode?Ge.DISPLAY:Ge.TEXT,maxSize:r.maxSize,minRuleThickness:r.minRuleThickness,strict:r.strict}),rd=function(e,t){if(t.displayMode){var n=["katex-display"];t.leqno&&n.push("leqno"),t.fleqn&&n.push("fleqn"),e=ie(n,[e])}return e},G3=function(e,t,n){var i=id(n),s;if(n.output==="mathml")return wh(e,t,i,n.displayMode,!0);if(n.output==="html"){var a=Il(e,i);s=ie(["katex"],[a])}else{var o=wh(e,t,i,n.displayMode,!1),l=Il(e,i);s=ie(["katex"],[o,l])}return rd(s,n)},V3=function(e,t){var n=id(t),i=Il(e,n),s=ie(["katex"],[i]);return rd(s,t)},W3={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",underbracket:"⎵",overbracket:"⎴",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},Ha=function(e){var t=new he("mo",[new zt(W3[e.replace(/^\\/,"")])]);return t.setAttribute("stretchy","true"),t},q3={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overbracket:[["leftbracketover","rightbracketover"],1.6,440],underbracket:[["leftbracketunder","rightbracketunder"],1.6,410],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},X3=new Set(["widehat","widecheck","widetilde","utilde"]),Ga=function(e,t){function n(){var l=4e5,c=e.label.slice(1);if(X3.has(c)&&"base"in e){var h=e.base.type==="ordgroup"?e.base.body.length:1,u,d,p;if(h>5)c==="widehat"||c==="widecheck"?(u=420,l=2364,p=.42,d=c+"4"):(u=312,l=2340,p=.34,d="tilde4");else{var x=[1,1,2,2,3,3][h];c==="widehat"||c==="widecheck"?(l=[0,1062,2364,2364,2364][x],u=[0,239,300,360,420][x],p=[0,.24,.3,.3,.36,.42][x],d=c+x):(l=[0,600,1033,2339,2340][x],u=[0,260,286,306,312][x],p=[0,.26,.286,.3,.306,.34][x],d="tilde"+x)}var y=new Gi(d),g=new bi([y],{width:"100%",height:de(p),viewBox:"0 0 "+l+" "+u,preserveAspectRatio:"none"});return{span:Vi([],[g],t),minWidth:0,height:p}}else{var m=[],_=q3[c];if(!_)throw new Error('No SVG data for "'+c+'".');var S=_[0],w=_[1],N=_[2],I=N/1e3,L=S.length,H,E;if(L===1){if(_.length!==4)throw new Error('Expected 4-tuple for single-path SVG data "'+c+'".');H=["hide-tail"],E=[_[3]]}else if(L===2)H=["halfarrow-left","halfarrow-right"],E=["xMinYMin","xMaxYMin"];else if(L===3)H=["brace-left","brace-center","brace-right"],E=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+L+" children.");for(var C=0;C<L;C++){var Y=new Gi(S[C]),q=new bi([Y],{width:"400em",height:de(I),viewBox:"0 0 "+l+" "+N,preserveAspectRatio:E[C]+" slice"}),re=Vi([H[C]],[q],t);if(L===1)return{span:re,minWidth:w,height:I};re.style.height=de(I),m.push(re)}return{span:ie(["katex-stretchy"],m,t),minWidth:w,height:I}}}var i=n(),s=i.span,a=i.minWidth,o=i.height;return s.height=o,s.style.height=de(o),a>0&&(s.style.minWidth=de(a)),s},Y3=function(e,t,n,i,s){var a,o=e.height+e.depth+n+i;if(/fbox|color|angl/.test(t)){if(a=ie(["katex-stretchy",t],[],s),t==="fbox"){var l=s.color&&s.getColor();l&&(a.style.borderColor=l)}}else{var c=[];/^[bx]cancel$/.test(t)&&c.push(new bl({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(t)&&c.push(new bl({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var h=new bi(c,{width:"100%",height:de(o)});a=Vi([],[h],s)}return a.height=o,a.style.height=de(o),a},j3=["bin","close","inner","open","punct","rel"],K3=["accent-token","mathord","op-token","spacing","textord"],$3=new Set(j3),Z3=new Set(K3);function J3(r){return $3.has(r)}function it(r,e){if(!r||r.type!==e)throw new Error("Expected node of type "+e+", but got "+(r?"node of type "+r.type:String(r)));return r}function Va(r){var e=Wa(r);if(!e)throw new Error("Expected node of symbol group type, but got "+(r?"node of type "+r.type:String(r)));return e}function Wa(r){return r.type==="atom"||Z3.has(r.type)?r:null}function a0(r,e,t){var n="";for(var i of r.body)if(i.type==="textord")n+=i.text;else if(t&&i.type==="spacing"&&i.text===" ")n+=" ";else throw new oe(e,r);return n}var sd=r=>{if(r instanceof wn)return r;if(S3(r)&&r.children.length===1)return sd(r.children[0])},ad=(r,e)=>{var t,n,i;r&&r.type==="supsub"?(n=it(r.base,"accent"),t=n.base,r.base=t,i=_3(lt(r,e)),r.base=n):(n=it(r,"accent"),t=n.base);var s=lt(t,e.havingCrampedStyle()),a=n.isShifty&&Mi(t),o=0;if(a){var l,c;o=(l=(c=sd(s))==null?void 0:c.skew)!=null?l:0}var h=n.label==="\\c",u=h?s.height+s.depth:Math.min(s.height,e.fontMetrics().xHeight),d;if(n.isStretchy)d=Ga(n,e),d=ct({positionType:"firstBaseline",children:[{type:"elem",elem:s},{type:"elem",elem:d,wrapperClasses:["svg-align"],wrapperStyle:o>0?{width:"calc(100% - "+de(2*o)+")",marginLeft:de(2*o)}:void 0}]});else{var p,x;n.label==="\\vec"?(p=Ju("vec",e),x=Zu.vec[1]):(p=za({type:"textord",mode:n.mode,text:n.label},e),p=b3(p),p.italic=0,x=p.width,h&&(u+=p.depth)),d=ie(["accent-body"],[p]);var y=n.label==="\\textcircled";y&&(d.classes.push("accent-full"),u=s.height);var g=o;y||(g-=x/2),d.style.left=de(g),n.label==="\\textcircled"&&(d.style.top=".2em"),d=ct({positionType:"firstBaseline",children:[{type:"elem",elem:s},{type:"kern",size:-u},{type:"elem",elem:d}]})}var m=ie(["mord","katex-accent"],[d],e);return i?(i.children[0]=m,i.height=Math.max(m.height,i.height),i.classes[0]="mord",i):m},Q3=(r,e)=>{var t=r.isStretchy?Ha(r.label):new he("mo",[Un(r.label,r.mode)]),n=new he("mover",[gt(r.base,e),t]);return n.setAttribute("accent","true"),n},ex=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(r=>"\\"+r).join("|"));ye({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],numArgs:1,handler:(r,e)=>{var t=Cs(e[0]),n=!ex.test(r.funcName),i=!n||r.funcName==="\\widehat"||r.funcName==="\\widetilde"||r.funcName==="\\widecheck";return{type:"accent",mode:r.parser.mode,label:r.funcName,isStretchy:n,isShifty:i,base:t}},htmlBuilder:ad,mathmlBuilder:Q3});ye({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"],handler:(r,e)=>{var t=e[0],n=r.parser.mode;return n==="math"&&(yn({strict:r.parser.settings.strict,errorCode:"mathVsTextAccents",errorMsg:"LaTeX's accent "+r.funcName+" works only in text mode",report:!0}),n="text"),{type:"accent",mode:n,label:r.funcName,isStretchy:!1,isShifty:!0,base:t}}});ye({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],numArgs:1,handler:(r,e)=>{var t=r.parser,n=r.funcName,i=e[0];return{type:"accentUnder",mode:t.mode,label:n,base:i}},htmlBuilder:(r,e)=>{var t=lt(r.base,e),n=Ga(r,e),i=r.label==="\\utilde"?.12:0,s=ct({positionType:"top",positionData:t.height,children:[{type:"elem",elem:n,wrapperClasses:["svg-align"]},{type:"kern",size:i},{type:"elem",elem:t}]});return ie(["mord","accentunder"],[s],e)},mathmlBuilder:(r,e)=>{var t=Ha(r.label),n=new he("munder",[gt(r.base,e),t]);return n.setAttribute("accentunder","true"),n}});var fa=r=>{var e=new he("mpadded",r?[r]:[]);return e.setAttribute("width","+0.6em"),e.setAttribute("lspace","0.3em"),e};ye({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],numArgs:1,numOptionalArgs:1,handler(r,e,t){var n=r.parser,i=r.funcName;return{type:"xArrow",mode:n.mode,label:i,body:e[0],below:t[0]}},htmlBuilder(r,e){var t=e.style,n=e.havingStyle(t.sup()),i=Zr(lt(r.body,n,e),e),s=r.label.slice(0,2)==="\\x"?"x":"cd";i.classes.push(s+"-arrow-pad");var a;r.below&&(n=e.havingStyle(t.sub()),a=Zr(lt(r.below,n,e),e),a.classes.push(s+"-arrow-pad"));var o=Ga(r,e),l=-e.fontMetrics().axisHeight+.5*o.height,c=-e.fontMetrics().axisHeight-.5*o.height-.111;(i.depth>.25||r.label==="\\xleftequilibrium")&&(c-=i.depth);var h;if(a){var u=-e.fontMetrics().axisHeight+a.height+.5*o.height+.111;h=ct({positionType:"individualShift",children:[{type:"elem",elem:i,shift:c},{type:"elem",elem:o,shift:l,wrapperClasses:["svg-align"]},{type:"elem",elem:a,shift:u}]})}else h=ct({positionType:"individualShift",children:[{type:"elem",elem:i,shift:c},{type:"elem",elem:o,shift:l,wrapperClasses:["svg-align"]}]});return ie(["mrel","x-arrow"],[h],e)},mathmlBuilder(r,e){var t=Ha(r.label);t.setAttribute("minsize",r.label.charAt(0)==="x"?"1.75em":"3.0em");var n;if(r.body){var i=fa(gt(r.body,e));if(r.below){var s=fa(gt(r.below,e));n=new he("munderover",[t,s,i])}else n=new he("mover",[t,i])}else if(r.below){var a=fa(gt(r.below,e));n=new he("munder",[t,a])}else n=fa(),n=new he("mover",[t,n]);return n}});function tx(r,e){var t=qt(r.body,e,!0);return ie([r.mclass],t,e)}function nx(r,e){var t,n=En(r.body,e);return r.mclass==="minner"?t=new he("mpadded",n):r.mclass==="mord"?r.isCharacterBox?(t=n[0],t.type="mi"):t=new he("mi",n):(r.isCharacterBox?(t=n[0],t.type="mo"):t=new he("mo",n),r.mclass==="mbin"?(t.attributes.lspace="0.22em",t.attributes.rspace="0.22em"):r.mclass==="mpunct"?(t.attributes.lspace="0em",t.attributes.rspace="0.17em"):(r.mclass==="mopen"||r.mclass==="mclose")&&(t.attributes.lspace="0em",t.attributes.rspace="0em")),t}ye({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],numArgs:1,primitive:!0,handler(r,e){var t=r.parser,n=r.funcName,i=e[0];return{type:"mclass",mode:t.mode,mclass:"m"+n.slice(5),body:Bt(i),isCharacterBox:Mi(i)}},htmlBuilder:tx,mathmlBuilder:nx});var qa=r=>{var e=r.type==="ordgroup"&&r.body.length?r.body[0]:r;return e.type==="atom"&&(e.family==="bin"||e.family==="rel")?"m"+e.family:"mord"};ye({type:"mclass",names:["\\@binrel"],numArgs:2,handler(r,e){var t=r.parser;return{type:"mclass",mode:t.mode,mclass:qa(e[0]),body:Bt(e[1]),isCharacterBox:Mi(e[1])}}});ye({type:"mclass",names:["\\stackrel","\\overset","\\underset"],numArgs:2,handler(r,e){var t=r.parser,n=r.funcName,i=e[1],s=e[0],a;n!=="\\stackrel"?a=qa(i):a="mrel";var o={type:"op",mode:i.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:n!=="\\stackrel",body:Bt(i)},l=n==="\\underset"?{type:"supsub",mode:s.mode,base:o,sub:s}:{type:"supsub",mode:s.mode,base:o,sup:s};return{type:"mclass",mode:t.mode,mclass:a,body:[l],isCharacterBox:Mi(l)}}});ye({type:"pmb",names:["\\pmb"],numArgs:1,allowedInText:!0,handler(r,e){var t=r.parser;return{type:"pmb",mode:t.mode,mclass:qa(e[0]),body:Bt(e[0])}},htmlBuilder(r,e){var t=qt(r.body,e,!0),n=ie([r.mclass],t,e);return n.style.textShadow="0.02em 0.01em 0.04px",n},mathmlBuilder(r,e){var t=En(r.body,e),n=new he("mstyle",t);return n.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),n}});var ix={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},Ah=()=>({type:"styling",body:[],mode:"math",style:"display",resetFont:!0}),Ch=r=>r.type==="textord"&&r.text==="@",rx=(r,e)=>(r.type==="mathord"||r.type==="atom")&&r.text===e;function sx(r,e,t){var n=ix[r];switch(n){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return t.callFunction(n,[e[0]],[e[1]]);case"\\uparrow":case"\\downarrow":{var i=t.callFunction("\\\\cdleft",[e[0]],[]),s={type:"atom",text:n,mode:"math",family:"rel"},a=t.callFunction("\\Big",[s],[]),o=t.callFunction("\\\\cdright",[e[1]],[]),l={type:"ordgroup",mode:"math",body:[i,a,o]};return t.callFunction("\\\\cdparent",[l],[])}case"\\\\cdlongequal":return t.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var c={type:"textord",text:"\\Vert",mode:"math"};return t.callFunction("\\Big",[c],[])}default:return{type:"textord",text:" ",mode:"math"}}}function ax(r){var e=[];for(r.gullet.beginGroup(),r.gullet.macros.set("\\cr","\\\\\\relax"),r.gullet.beginGroup();;){e.push(r.parseExpression(!1,"\\\\")),r.gullet.endGroup(),r.gullet.beginGroup();var t=r.fetch().text;if(t==="&"||t==="\\\\")r.consume();else if(t==="\\end"){e[e.length-1].length===0&&e.pop();break}else throw new oe("Expected \\\\ or \\cr or \\end",r.nextToken)}for(var n=[],i=[n],s=0;s<e.length;s++){for(var a=e[s],o=Ah(),l=0;l<a.length;l++)if(!Ch(a[l]))o.body.push(a[l]);else{n.push(o),l+=1;var c=Va(a[l]).text,h=new Array(2);if(h[0]={type:"ordgroup",mode:"math",body:[]},h[1]={type:"ordgroup",mode:"math",body:[]},!"=|.".includes(c))if("<>AV".includes(c))for(var u=0;u<2;u++){for(var d=!0,p=l+1;p<a.length;p++){if(rx(a[p],c)){d=!1,l=p;break}if(Ch(a[p]))throw new oe("Missing a "+c+" character to complete a CD arrow.",a[p]);h[u].body.push(a[p])}if(d)throw new oe("Missing a "+c+" character to complete a CD arrow.",a[l])}else throw new oe('Expected one of "<>AV=|." after @',a[l]);var x=sx(c,h,r),y={type:"styling",body:[x],mode:"math",style:"display",resetFont:!0};n.push(y),o=Ah()}s%2===0?n.push(o):n.shift(),n=[],i.push(n)}r.gullet.endGroup(),r.gullet.endGroup();var g=new Array(i[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:i,arraystretch:1,addJot:!0,rowGaps:[null],cols:g,colSeparationType:"CD",hLinesBeforeRow:new Array(i.length+1).fill([])}}ye({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],numArgs:1,handler(r,e){var t=r.parser,n=r.funcName;return{type:"cdlabel",mode:t.mode,side:n.slice(4),label:e[0]}},htmlBuilder(r,e){var t=e.havingStyle(e.style.sup()),n=Zr(lt(r.label,t,e),e);return n.classes.push("cd-label-"+r.side),n.style.bottom=de(.8-n.depth),n.height=0,n.depth=0,n},mathmlBuilder(r,e){var t=new he("mrow",[gt(r.label,e)]);return t=new he("mpadded",[t]),t.setAttribute("width","0"),r.side==="left"&&t.setAttribute("lspace","-1width"),t.setAttribute("voffset","0.7em"),t=new he("mstyle",[t]),t.setAttribute("displaystyle","false"),t.setAttribute("scriptlevel","1"),t}});ye({type:"cdlabelparent",names:["\\\\cdparent"],numArgs:1,handler(r,e){var t=r.parser;return{type:"cdlabelparent",mode:t.mode,fragment:e[0]}},htmlBuilder(r,e){var t=Zr(lt(r.fragment,e),e);return t.classes.push("cd-vert-arrow"),t},mathmlBuilder(r,e){return new he("mrow",[gt(r.fragment,e)])}});ye({type:"textord",names:["\\@char"],numArgs:1,allowedInText:!0,handler(r,e){var t=r.parser,n=it(e[0],"ordgroup"),i=a0(n,"\\@char has non-numeric argument"),s=parseInt(i),a;if(isNaN(s))throw new oe("\\@char has non-numeric argument "+i);if(s<0||s>1114111)throw new oe("\\@char with invalid code point "+i);return s<=65535?a=String.fromCharCode(s):(s-=65536,a=String.fromCharCode((s>>10)+55296,(s&1023)+56320)),{type:"textord",mode:t.mode,text:a}}});var ox=(r,e)=>{var t=qt(r.body,e.withColor(r.color),!1);return Ti(t)},lx=(r,e)=>{var t=En(r.body,e.withColor(r.color)),n=new he("mstyle",t);return n.setAttribute("mathcolor",r.color),n};ye({type:"color",names:["\\textcolor"],numArgs:2,allowedInText:!0,argTypes:["color","original"],handler(r,e){var t=r.parser,n=it(e[0],"color-token").color,i=e[1];return{type:"color",mode:t.mode,color:n,body:Bt(i)}},htmlBuilder:ox,mathmlBuilder:lx});ye({type:"color",names:["\\color"],numArgs:1,allowedInText:!0,argTypes:["color"],handler(r,e){var t=r.parser,n=r.breakOnTokenText,i=it(e[0],"color-token").color;t.gullet.macros.set("\\current@color",i);var s=t.parseExpression(!0,n);return{type:"color",mode:t.mode,color:i,body:s}}});ye({type:"cr",names:["\\\\"],numArgs:0,numOptionalArgs:0,allowedInText:!0,handler(r){var e=r.parser,t=e.gullet.future().text==="["?e.parseSizeGroup(!0):null,n=!e.settings.displayMode||!yn({strict:e.settings.strict,errorCode:"newLineInDisplayMode",errorMsg:"In LaTeX, \\\\ or \\newline does nothing in display mode",report:!1});return{type:"cr",mode:e.mode,newLine:n,size:t&&it(t,"size").value}},htmlBuilder(r,e){var t=ie(["mspace"],[],e);return r.newLine&&(t.classes.push("katex-newline"),r.size&&(t.style.marginTop=de(Rt(r.size,e)))),t},mathmlBuilder(r,e){var t=new he("mspace");return r.newLine&&(t.setAttribute("linebreak","newline"),r.size&&t.setAttribute("height",de(Rt(r.size,e)))),t}});var Ll={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},od=r=>{var e=r.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(e))throw new oe("Expected a control sequence",r);return e},cx=r=>{var e=r.gullet.popToken();return e.text==="="&&(e=r.gullet.popToken(),e.text===" "&&(e=r.gullet.popToken())),e},ld=(r,e,t,n)=>{var i=r.gullet.macros.get(t.text);i==null&&(t.noexpand=!0,i={tokens:[t],numArgs:0,unexpandable:!r.gullet.isExpandable(t.text)}),r.gullet.macros.set(e,i,n)};ye({type:"internal",names:["\\global","\\long","\\\\globallong"],numArgs:0,allowedInText:!0,handler(r){var e=r.parser,t=r.funcName;e.consumeSpaces();var n=e.fetch();if(Ll[n.text])return(t==="\\global"||t==="\\\\globallong")&&(n.text=Ll[n.text]),it(e.parseFunction(),"internal");throw new oe("Invalid token after macro prefix",n)}});ye({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],numArgs:0,allowedInText:!0,primitive:!0,handler(r){var e=r.parser,t=r.funcName,n=e.gullet.popToken(),i=n.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(i))throw new oe("Expected a control sequence",n);for(var s=0,a,o=[[]];e.gullet.future().text!=="{";)if(n=e.gullet.popToken(),n.text==="#"){if(e.gullet.future().text==="{"){a=e.gullet.future(),o[s].push("{");break}if(n=e.gullet.popToken(),!/^[1-9]$/.test(n.text))throw new oe('Invalid argument number "'+n.text+'"');if(parseInt(n.text)!==s+1)throw new oe('Argument number "'+n.text+'" out of order');s++,o.push([])}else{if(n.text==="EOF")throw new oe("Expected a macro definition");o[s].push(n.text)}var l=e.gullet.consumeArg(),c=l.tokens;return a&&c.unshift(a),(t==="\\edef"||t==="\\xdef")&&(c=e.gullet.expandTokens(c),c.reverse()),e.gullet.macros.set(i,{tokens:c,numArgs:s,delimiters:o},t===Ll[t]),{type:"internal",mode:e.mode}}});ye({type:"internal",names:["\\let","\\\\globallet"],numArgs:0,allowedInText:!0,primitive:!0,handler(r){var e=r.parser,t=r.funcName,n=od(e.gullet.popToken());e.gullet.consumeSpaces();var i=cx(e);return ld(e,n,i,t==="\\\\globallet"),{type:"internal",mode:e.mode}}});ye({type:"internal",names:["\\futurelet","\\\\globalfuture"],numArgs:0,allowedInText:!0,primitive:!0,handler(r){var e=r.parser,t=r.funcName,n=od(e.gullet.popToken()),i=e.gullet.popToken(),s=e.gullet.popToken();return ld(e,n,s,t==="\\\\globalfuture"),e.gullet.pushToken(s),e.gullet.pushToken(i),{type:"internal",mode:e.mode}}});var gs=function(e,t,n){var i=Tt.math[e]&&Tt.math[e].replace,s=t0(i||e,t,n);if(!s)throw new Error("Unsupported symbol "+e+" and font size "+t+".");return s},o0=function(e,t,n,i){var s=n.havingBaseStyle(t),a=ie(i.concat(s.sizingClasses(n)),[e],n),o=s.sizeMultiplier/n.sizeMultiplier;return a.height*=o,a.depth*=o,a.maxFontSize=s.sizeMultiplier,a},cd=function(e,t,n){var i=t.havingBaseStyle(n),s=(1-t.sizeMultiplier/i.sizeMultiplier)*t.fontMetrics().axisHeight;e.classes.push("delimcenter"),e.style.top=de(s),e.height-=s,e.depth+=s},hx=function(e,t,n,i,s,a){var o=cn(e,"Main-Regular",s,i),l=o0(o,t,i,a);return cd(l,i,t),l},ux=function(e,t,n,i){return cn(e,"Size"+t+"-Regular",n,i)},hd=function(e,t,n,i,s,a){var o=ux(e,t,s,i),l=o0(ie(["delimsizing","size"+t],[o],i),Ge.TEXT,i,a);return n&&cd(l,i,Ge.TEXT),l},qo=function(e,t,n,i){var s;t==="Size1-Regular"?s="delim-size1":s="delim-size4";var a=ie(["delimsizinginner",s],[ie([],[cn(e,t,n,i)])]);return{type:"elem",elem:a}},Xo=function(e,t,n){var i=Kn["Size4-Regular"][e.charCodeAt(0)]?Kn["Size4-Regular"][e.charCodeAt(0)][4]:Kn["Size1-Regular"][e.charCodeAt(0)][4],s=new Gi("inner",f3(e,Math.round(1e3*t))),a=new bi([s],{width:de(i),height:de(t),style:"width:"+de(i),viewBox:"0 0 "+1e3*i+" "+Math.round(1e3*t),preserveAspectRatio:"xMinYMin"}),o=Vi([],[a],n);return o.height=t,o.style.height=de(t),o.style.width=de(i),{type:"elem",elem:o}},Pl=.008,pa={type:"kern",size:-1*Pl},dx=new Set(["|","\\lvert","\\rvert","\\vert"]),fx=new Set(["\\|","\\lVert","\\rVert","\\Vert"]),ud=function(e,t,n,i,s,a){var o,l,c,h,u="",d=0;o=c=h=e,l=null;var p="Size1-Regular";e==="\\uparrow"?c=h="⏐":e==="\\Uparrow"?c=h="‖":e==="\\downarrow"?o=c="⏐":e==="\\Downarrow"?o=c="‖":e==="\\updownarrow"?(o="\\uparrow",c="⏐",h="\\downarrow"):e==="\\Updownarrow"?(o="\\Uparrow",c="‖",h="\\Downarrow"):dx.has(e)?(c="∣",u="vert",d=333):fx.has(e)?(c="∥",u="doublevert",d=556):e==="["||e==="\\lbrack"?(o="⎡",c="⎢",h="⎣",p="Size4-Regular",u="lbrack",d=667):e==="]"||e==="\\rbrack"?(o="⎤",c="⎥",h="⎦",p="Size4-Regular",u="rbrack",d=667):e==="\\lfloor"||e==="⌊"?(c=o="⎢",h="⎣",p="Size4-Regular",u="lfloor",d=667):e==="\\lceil"||e==="⌈"?(o="⎡",c=h="⎢",p="Size4-Regular",u="lceil",d=667):e==="\\rfloor"||e==="⌋"?(c=o="⎥",h="⎦",p="Size4-Regular",u="rfloor",d=667):e==="\\rceil"||e==="⌉"?(o="⎤",c=h="⎥",p="Size4-Regular",u="rceil",d=667):e==="("||e==="\\lparen"?(o="⎛",c="⎜",h="⎝",p="Size4-Regular",u="lparen",d=875):e===")"||e==="\\rparen"?(o="⎞",c="⎟",h="⎠",p="Size4-Regular",u="rparen",d=875):e==="\\{"||e==="\\lbrace"?(o="⎧",l="⎨",h="⎩",c="⎪",p="Size4-Regular"):e==="\\}"||e==="\\rbrace"?(o="⎫",l="⎬",h="⎭",c="⎪",p="Size4-Regular"):e==="\\lgroup"||e==="⟮"?(o="⎧",h="⎩",c="⎪",p="Size4-Regular"):e==="\\rgroup"||e==="⟯"?(o="⎫",h="⎭",c="⎪",p="Size4-Regular"):e==="\\lmoustache"||e==="⎰"?(o="⎧",h="⎭",c="⎪",p="Size4-Regular"):(e==="\\rmoustache"||e==="⎱")&&(o="⎫",h="⎩",c="⎪",p="Size4-Regular");var x=gs(o,p,s),y=x.height+x.depth,g=gs(c,p,s),m=g.height+g.depth,_=gs(h,p,s),S=_.height+_.depth,w=0,N=1;if(l!==null){var I=gs(l,p,s);w=I.height+I.depth,N=2}var L=y+S+w,H=Math.max(0,Math.ceil((t-L)/(N*m))),E=L+H*N*m,C=i.fontMetrics().axisHeight;n&&(C*=i.sizeMultiplier);var Y=E/2-C,q=[];if(u.length>0){var re=E-y-S,F=Math.round(E*1e3),z=p3(u,Math.round(re*1e3)),$=new Gi(u,z),Q=de(d/1e3),Z=de(F/1e3),ee=new bi([$],{width:Q,height:Z,viewBox:"0 0 "+d+" "+F}),J=Vi([],[ee],i);J.height=F/1e3,J.style.width=Q,J.style.height=Z,q.push({type:"elem",elem:J})}else{if(q.push(qo(h,p,s,i)),q.push(pa),l===null){var ue=E-y-S+2*Pl;q.push(Xo(c,ue,i))}else{var fe=(E-y-S-w)/2+2*Pl;q.push(Xo(c,fe,i)),q.push(pa),q.push(qo(l,p,s,i)),q.push(pa),q.push(Xo(c,fe,i))}q.push(pa),q.push(qo(o,p,s,i))}var j=i.havingBaseStyle(Ge.TEXT),ne=ct({positionType:"bottom",positionData:Y,children:q});return o0(ie(["delimsizing","mult"],[ne],j),Ge.TEXT,i,a)},Yo=80,jo=.08,Ko=function(e,t,n,i,s){var a=d3(e,i,n),o=new Gi(e,a),l=new bi([o],{width:"400em",height:de(t),viewBox:"0 0 400000 "+n,preserveAspectRatio:"xMinYMin slice"});return Vi(["hide-tail"],[l],s)},px=function(e,t){var n=t.havingBaseSizing(),i=gd("\\surd",e*n.sizeMultiplier,md,n),s=n.sizeMultiplier,a=Math.max(0,t.minRuleThickness-t.fontMetrics().sqrtRuleThickness),o,l,c,h,u;return i.type==="small"?(h=1e3+1e3*a+Yo,e<1?s=1:e<1.4&&(s=.7),l=(1+a+jo)/s,c=(1+a)/s,o=Ko("sqrtMain",l,h,a,t),o.style.minWidth="0.853em",u=.833/s):i.type==="large"?(h=(1e3+Yo)*Ss[i.size],c=(Ss[i.size]+a)/s,l=(Ss[i.size]+a+jo)/s,o=Ko("sqrtSize"+i.size,l,h,a,t),o.style.minWidth="1.02em",u=1/s):(l=e+a+jo,c=e+a,h=Math.floor(1e3*e+a)+Yo,o=Ko("sqrtTall",l,h,a,t),o.style.minWidth="0.742em",u=1.056),o.height=c,o.style.height=de(l),{span:o,advanceWidth:u,ruleWidth:(t.fontMetrics().sqrtRuleThickness+a)*s}},dd=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"]),mx=new Set(["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"]),fd=new Set(["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"]),Ss=[0,1.2,1.8,2.4,3],pd=function(e,t,n,i,s){if(e==="<"||e==="\\lt"||e==="⟨"?e="\\langle":(e===">"||e==="\\gt"||e==="⟩")&&(e="\\rangle"),dd.has(e)||fd.has(e))return hd(e,t,!1,n,i,s);if(mx.has(e))return ud(e,Ss[t],!1,n,i,s);throw new oe("Illegal delimiter: '"+e+"'")},gx=[{type:"small",style:Ge.SCRIPTSCRIPT},{type:"small",style:Ge.SCRIPT},{type:"small",style:Ge.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],vx=[{type:"small",style:Ge.SCRIPTSCRIPT},{type:"small",style:Ge.SCRIPT},{type:"small",style:Ge.TEXT},{type:"stack"}],md=[{type:"small",style:Ge.SCRIPTSCRIPT},{type:"small",style:Ge.SCRIPT},{type:"small",style:Ge.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],xx=function(e){if(e.type==="small")return"Main-Regular";if(e.type==="large")return"Size"+e.size+"-Regular";if(e.type==="stack")return"Size4-Regular";var t=e.type;throw new Error("Add support for delim type '"+t+"' here.")},gd=function(e,t,n,i){for(var s=Math.min(2,3-i.style.size),a=s;a<n.length;a++){var o=n[a];if(o.type==="stack")break;var l=gs(e,xx(o),"math"),c=l.height+l.depth;if(o.type==="small"){var h=i.havingBaseStyle(o.style);c*=h.sizeMultiplier}if(c>t)return o}return n[n.length-1]},Dl=function(e,t,n,i,s,a){e==="<"||e==="\\lt"||e==="⟨"?e="\\langle":(e===">"||e==="\\gt"||e==="⟩")&&(e="\\rangle");var o;fd.has(e)?o=gx:dd.has(e)?o=md:o=vx;var l=gd(e,t,o,i);return l.type==="small"?hx(e,l.style,n,i,s,a):l.type==="large"?hd(e,l.size,n,i,s,a):ud(e,t,n,i,s,a)},$o=function(e,t,n,i,s,a){var o=i.fontMetrics().axisHeight*i.sizeMultiplier,l=901,c=5/i.fontMetrics().ptPerEm,h=Math.max(t-o,n+o),u=Math.max(h/500*l,2*h-c);return Dl(e,u,!0,i,s,a)},Rh={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},yx=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."]);function Ih(r){return"isMiddle"in r}function Xa(r,e){var t=Wa(r);if(t&&yx.has(t.text))return t;throw t?new oe("Invalid delimiter '"+t.text+"' after '"+e.funcName+"'",r):new oe("Invalid delimiter type '"+r.type+"'",r)}ye({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],numArgs:1,argTypes:["primitive"],handler:(r,e)=>{var t=Xa(Cs(e[0]),r);return{type:"delimsizing",mode:r.parser.mode,size:Rh[r.funcName].size,mclass:Rh[r.funcName].mclass,delim:t.text}},htmlBuilder:(r,e)=>r.delim==="."?ie([r.mclass]):pd(r.delim,r.size,e,r.mode,[r.mclass]),mathmlBuilder:r=>{var e=[];r.delim!=="."&&e.push(Un(r.delim,r.mode));var t=new he("mo",e);r.mclass==="mopen"||r.mclass==="mclose"?t.setAttribute("fence","true"):t.setAttribute("fence","false"),t.setAttribute("stretchy","true");var n=de(Ss[r.size]);return t.setAttribute("minsize",n),t.setAttribute("maxsize",n),t}});function Lh(r){if(!r.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}ye({type:"leftright-right",names:["\\right"],numArgs:1,primitive:!0,handler:(r,e)=>{var t=r.parser.gullet.macros.get("\\current@color");if(t&&typeof t!="string")throw new oe("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:r.parser.mode,delim:Xa(e[0],r).text,color:t}}});ye({type:"leftright",names:["\\left"],numArgs:1,primitive:!0,handler:(r,e)=>{var t=Xa(e[0],r),n=r.parser;++n.leftrightDepth;var i=n.parseExpression(!1);--n.leftrightDepth,n.expect("\\right",!1);var s=it(n.parseFunction(),"leftright-right");return{type:"leftright",mode:n.mode,body:i,left:t.text,right:s.delim,rightColor:s.color}},htmlBuilder:(r,e)=>{Lh(r);for(var t=qt(r.body,e,!0,["mopen","mclose"]),n=0,i=0,s=!1,a=0;a<t.length;a++){var o=t[a];Ih(o)?s=!0:(n=Math.max(t[a].height,n),i=Math.max(t[a].depth,i))}n*=e.sizeMultiplier,i*=e.sizeMultiplier;var l;if(r.left==="."?l=Rs(e,["mopen"]):l=$o(r.left,n,i,e,r.mode,["mopen"]),t.unshift(l),s)for(var c=1;c<t.length;c++){var h=t[c];if(Ih(h)){var u=h.isMiddle;t[c]=$o(u.delim,n,i,u.options,r.mode,[])}}var d;if(r.right===".")d=Rs(e,["mclose"]);else{var p=r.rightColor?e.withColor(r.rightColor):e;d=$o(r.right,n,i,p,r.mode,["mclose"])}return t.push(d),ie(["minner"],t,e)},mathmlBuilder:(r,e)=>{Lh(r);var t=En(r.body,e);if(r.left!=="."){var n=new he("mo",[Un(r.left,r.mode)]);n.setAttribute("fence","true"),t.unshift(n)}if(r.right!=="."){var i=new he("mo",[Un(r.right,r.mode)]);i.setAttribute("fence","true"),r.rightColor&&i.setAttribute("mathcolor",r.rightColor),t.push(i)}return r0(t)}});ye({type:"middle",names:["\\middle"],numArgs:1,primitive:!0,handler:(r,e)=>{var t=Xa(e[0],r);if(!r.parser.leftrightDepth)throw new oe("\\middle without preceding \\left",t);return{type:"middle",mode:r.parser.mode,delim:t.text}},htmlBuilder:(r,e)=>{var t;return r.delim==="."?t=Rs(e,[]):(t=pd(r.delim,1,e,r.mode,[]),t.isMiddle={delim:r.delim,options:e}),t},mathmlBuilder:(r,e)=>{var t=r.delim==="\\vert"||r.delim==="|"?Un("|","text"):Un(r.delim,r.mode),n=new he("mo",[t]);return n.setAttribute("fence","true"),n.setAttribute("lspace","0.05em"),n.setAttribute("rspace","0.05em"),n}});var bx=(r,e)=>{var t=Zr(lt(r.body,e),e),n=r.label.slice(1),i=e.sizeMultiplier,s,a,o=Mi(r.body);if(n==="sout")s=ie(["katex-stretchy","katex-sout"]),s.height=e.fontMetrics().defaultRuleThickness/i,a=-.5*e.fontMetrics().xHeight;else if(n==="phase"){var l=Rt({number:.6,unit:"pt"},e),c=Rt({number:.35,unit:"ex"},e),h=e.havingBaseSizing();i=i/h.sizeMultiplier;var u=t.height+t.depth+l+c;t.style.paddingLeft=de(u/2+l);var d=Math.floor(1e3*u*i),p=h3(d),x=new bi([new Gi("phase",p)],{width:"400em",height:de(d/1e3),viewBox:"0 0 400000 "+d,preserveAspectRatio:"xMinYMin slice"});s=Vi(["hide-tail"],[x],e),s.style.height=de(u),a=t.depth+l+c}else{/cancel/.test(n)?o||t.classes.push("cancel-pad"):n==="angl"?t.classes.push("anglpad"):t.classes.push("boxpad");var y,g,m=0;/box/.test(n)?(m=Math.max(e.fontMetrics().fboxrule,e.minRuleThickness),y=e.fontMetrics().fboxsep+(n==="colorbox"?0:m),g=y):n==="angl"?(m=Math.max(e.fontMetrics().defaultRuleThickness,e.minRuleThickness),y=4*m,g=Math.max(0,.25-t.depth)):(y=o?.2:0,g=y),s=Y3(t,n,y,g,e),/fbox|boxed|fcolorbox/.test(n)?(s.style.borderStyle="solid",s.style.borderWidth=de(m)):n==="angl"&&m!==.049&&(s.style.borderTopWidth=de(m),s.style.borderRightWidth=de(m)),a=t.depth+g,r.backgroundColor&&(s.style.backgroundColor=r.backgroundColor,r.borderColor&&(s.style.borderColor=r.borderColor))}var _;if(r.backgroundColor)_=ct({positionType:"individualShift",children:[{type:"elem",elem:s,shift:a},{type:"elem",elem:t,shift:0}]});else{var S=/cancel|phase/.test(n)?["svg-align"]:[];_=ct({positionType:"individualShift",children:[{type:"elem",elem:t,shift:0},{type:"elem",elem:s,shift:a,wrapperClasses:S}]})}return/cancel/.test(n)&&(_.height=t.height,_.depth=t.depth),/cancel/.test(n)&&!o?ie(["mord","cancel-lap"],[_],e):ie(["mord"],[_],e)},_x=(r,e)=>{var t,n=new he(r.label.includes("colorbox")?"mpadded":"menclose",[gt(r.body,e)]);switch(r.label){case"\\cancel":n.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":n.setAttribute("notation","downdiagonalstrike");break;case"\\phase":n.setAttribute("notation","phasorangle");break;case"\\sout":n.setAttribute("notation","horizontalstrike");break;case"\\fbox":n.setAttribute("notation","box");break;case"\\angl":n.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(t=e.fontMetrics().fboxsep*e.fontMetrics().ptPerEm,n.setAttribute("width","+"+2*t+"pt"),n.setAttribute("height","+"+2*t+"pt"),n.setAttribute("lspace",t+"pt"),n.setAttribute("voffset",t+"pt"),r.label==="\\fcolorbox"){var i=Math.max(e.fontMetrics().fboxrule,e.minRuleThickness);n.setAttribute("style","border: "+de(i)+" solid "+r.borderColor)}break;case"\\xcancel":n.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return r.backgroundColor&&n.setAttribute("mathbackground",r.backgroundColor),n};ye({type:"enclose",names:["\\colorbox"],numArgs:2,allowedInText:!0,argTypes:["color","hbox"],handler(r,e,t){var n=r.parser,i=r.funcName,s=it(e[0],"color-token").color,a=e[1];return{type:"enclose",mode:n.mode,label:i,backgroundColor:s,body:a}},htmlBuilder:bx,mathmlBuilder:_x});ye({type:"enclose",names:["\\fcolorbox"],numArgs:3,allowedInText:!0,argTypes:["color","color","hbox"],handler(r,e,t){var n=r.parser,i=r.funcName,s=it(e[0],"color-token").color,a=it(e[1],"color-token").color,o=e[2];return{type:"enclose",mode:n.mode,label:i,backgroundColor:a,borderColor:s,body:o}}});ye({type:"enclose",names:["\\fbox"],numArgs:1,argTypes:["hbox"],allowedInText:!0,handler(r,e){var t=r.parser;return{type:"enclose",mode:t.mode,label:"\\fbox",body:e[0]}}});ye({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\phase"],numArgs:1,handler(r,e){var t=r.parser,n=r.funcName,i=e[0];return{type:"enclose",mode:t.mode,label:n,body:i}}});ye({type:"enclose",names:["\\sout"],numArgs:1,allowedInText:!0,handler(r,e){var t=r.parser,n=r.funcName;t.mode==="math"&&yn({strict:t.settings.strict,errorCode:"mathVsSout",errorMsg:"LaTeX's \\sout works only in text mode",report:!0});var i=e[0];return{type:"enclose",mode:t.mode,label:n,body:i}}});ye({type:"enclose",names:["\\angl"],numArgs:1,argTypes:["hbox"],allowedInText:!1,handler(r,e){var t=r.parser;return{type:"enclose",mode:t.mode,label:"\\angl",body:e[0]}}});var vd={};function ei(r){for(var e=r.type,t=r.names,n=r.props,i=r.handler,s=r.htmlBuilder,a=r.mathmlBuilder,o={type:e,numArgs:n.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:i},l=0;l<t.length;++l)vd[t[l]]=o;s&&(Es[e]=s),a&&(As[e]=a)}var xd={};function M(r,e){xd[r]=e}class vn{constructor(e,t,n){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=e,this.start=t,this.end=n}static range(e,t){return t?!e||!e.loc||!t.loc||e.loc.lexer!==t.loc.lexer?null:new vn(e.loc.lexer,e.loc.start,t.loc.end):e&&e.loc}}class Mn{constructor(e,t){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=e,this.loc=t}range(e,t){return new Mn(t,vn.range(this,e))}}function Ph(r){var e=[];r.consumeSpaces();var t=r.fetch().text;for(t==="\\relax"&&(r.consume(),r.consumeSpaces(),t=r.fetch().text);t==="\\hline"||t==="\\hdashline";)r.consume(),e.push(t==="\\hdashline"),r.consumeSpaces(),t=r.fetch().text;return e}var Ya=r=>{var e=r.parser.settings;if(!e.displayMode)throw new oe("{"+r.envName+"} can be used only in display mode.")},Sx=new Set(["gather","gather*"]);function l0(r){if(!r.includes("ed"))return!r.includes("*")}function qi(r,e,t){var n=e.hskipBeforeAndAfter,i=e.addJot,s=e.cols,a=e.arraystretch,o=e.colSeparationType,l=e.autoTag,c=e.singleRow,h=e.emptySingleRow,u=e.maxNumCols,d=e.leqno;if(r.gullet.beginGroup(),c||r.gullet.macros.set("\\cr","\\\\\\relax"),!a){var p=r.gullet.expandMacroAsText("\\arraystretch");if(p==null)a=1;else if(a=parseFloat(p),!a||a<0)throw new oe("Invalid \\arraystretch: "+p)}r.gullet.beginGroup();var x=[],y=[x],g=[],m=[],_=l!=null?[]:void 0;function S(){l&&r.gullet.macros.set("\\@eqnsw","1",!0)}function w(){_&&(r.gullet.macros.get("\\df@tag")?(_.push(r.subparse([new Mn("\\df@tag")])),r.gullet.macros.set("\\df@tag",void 0,!0)):_.push(!!l&&r.gullet.macros.get("\\@eqnsw")==="1"))}for(S(),m.push(Ph(r));;){var N=r.parseExpression(!1,c?"\\end":"\\\\");r.gullet.endGroup(),r.gullet.beginGroup();var I={type:"ordgroup",mode:r.mode,body:N};t&&(I={type:"styling",mode:r.mode,style:t,resetFont:!0,body:[I]}),x.push(I);var L=r.fetch().text;if(L==="&"){if(u&&x.length===u){if(c||o)throw new oe("Too many tab characters: &",r.nextToken);yn({strict:r.settings.strict,errorCode:"textEnv",errorMsg:"Too few columns specified in the {array} column argument.",report:!0})}r.consume()}else if(L==="\\end"){w(),x.length===1&&I.type==="styling"&&I.body.length===1&&I.body[0].type==="ordgroup"&&I.body[0].body.length===0&&(y.length>1||!h)&&!Array.isArray(_==null?void 0:_[_.length-1])&&!(l&&(_==null?void 0:_[_.length-1])===!0)&&y.pop(),m.length<y.length+1&&m.push([]);break}else if(L==="\\\\"){r.consume();var H=void 0;r.gullet.future().text!==" "&&(H=r.parseSizeGroup(!0)),g.push(H?H.value:null),w(),m.push(Ph(r)),x=[],y.push(x),S()}else throw new oe("Expected & or \\\\ or \\cr or \\end",r.nextToken)}return r.gullet.endGroup(),r.gullet.endGroup(),{type:"array",mode:r.mode,addJot:i,arraystretch:a,body:y,cols:s,rowGaps:g,hskipBeforeAndAfter:n,hLinesBeforeRow:m,colSeparationType:o,tags:_,leqno:d}}function c0(r){return r.slice(0,1)==="d"?"display":"text"}var ti=function(e,t){var n,i,s=e.body.length,a=e.hLinesBeforeRow,o=0,l=new Array(s),c=[],h=Math.max(t.fontMetrics().arrayRuleWidth,t.minRuleThickness),u=1/t.fontMetrics().ptPerEm,d=5*u;if(e.colSeparationType&&e.colSeparationType==="small"){var p=t.havingStyle(Ge.SCRIPT).sizeMultiplier;d=.2778*(p/t.sizeMultiplier)}var x=e.colSeparationType==="CD"?Rt({number:3,unit:"ex"},t):12*u,y=3*u,g=e.arraystretch*x,m=.7*g,_=.3*g,S=0;function w(Le){for(var qe=0;qe<Le.length;++qe)qe>0&&(S+=.25),c.push({pos:S,isDashed:Le[qe]})}for(w(a[0]),n=0;n<e.body.length;++n){var N=e.body[n],I=m,L=_;o<N.length&&(o=N.length);var H={cells:new Array(N.length),height:0,depth:0,pos:0};for(i=0;i<N.length;++i){var E=lt(N[i],t);L<E.depth&&(L=E.depth),I<E.height&&(I=E.height),H.cells[i]=E}var C=e.rowGaps[n],Y=0;C&&(Y=Rt(C,t),Y>0&&(Y+=_,L<Y&&(L=Y),Y=0)),e.addJot&&n<e.body.length-1&&(L+=y),H.height=I,H.depth=L,S+=I,H.pos=S,S+=L+Y,l[n]=H,w(a[n+1])}var q=S/2+t.fontMetrics().axisHeight,re=e.cols||[],F=[],z,$,Q=[];if(e.tags&&e.tags.some(Le=>Le))for(n=0;n<s;++n){var Z=l[n],ee=Z.pos-q,J=e.tags[n],ue=void 0;J===!0?ue=ie(["eqn-num"],[],t):J===!1?ue=ie([],[],t):ue=ie([],qt(J,t,!0),t),ue.depth=Z.depth,ue.height=Z.height,Q.push({type:"elem",elem:ue,shift:ee})}for(i=0,$=0;i<o||$<re.length;++i,++$){for(var fe,j=re[$],ne=!0;((be=j)==null?void 0:be.type)==="separator";){var be;if(ne||(z=ie(["arraycolsep"],[]),z.style.width=de(t.fontMetrics().doubleRuleSep),F.push(z)),j.separator==="|"||j.separator===":"){var Ce=j.separator==="|"?"solid":"dashed",we=ie(["vertical-separator"],[],t);we.style.height=de(S),we.style.borderRightWidth=de(h),we.style.borderRightStyle=Ce,we.style.margin="0 "+de(-h/2);var Ve=S-q;Ve&&(we.style.verticalAlign=de(-Ve)),F.push(we)}else throw new oe("Invalid separator type: "+j.separator);$++,j=re[$],ne=!1}if(!(i>=o)){var Be=void 0;if(i>0||e.hskipBeforeAndAfter){var Ue,at;Be=(Ue=(at=j)==null?void 0:at.pregap)!=null?Ue:d,Be!==0&&(z=ie(["arraycolsep"],[]),z.style.width=de(Be),F.push(z))}var G=[];for(n=0;n<s;++n){var Ut=l[n],Ie=Ut.cells[i];if(Ie){var We=Ut.pos-q;Ie.depth=Ut.depth,Ie.height=Ut.height,G.push({type:"elem",elem:Ie,shift:We})}}var Ee=ct({positionType:"individualShift",children:G}),_t=ie(["col-align-"+(((fe=j)==null?void 0:fe.align)||"c")],[Ee]);if(F.push(_t),i<o-1||e.hskipBeforeAndAfter){var Ye,R;Be=(Ye=(R=j)==null?void 0:R.postgap)!=null?Ye:d,Be!==0&&(z=ie(["arraycolsep"],[]),z.style.width=de(Be),F.push(z))}}}var T=ie(["mtable"],F);if(c.length>0){for(var V=$r("katex-hline",t,h),le=$r("katex-hdashline",t,h),se=[{type:"elem",elem:T,shift:0}];c.length>0;){var ce=c.pop(),Ae=ce.pos-q;ce.isDashed?se.push({type:"elem",elem:le,shift:Ae}):se.push({type:"elem",elem:V,shift:Ae})}T=ct({positionType:"individualShift",children:se})}if(Q.length===0)return ie(["mord"],[T],t);var ge=ct({positionType:"individualShift",children:Q}),Me=ie(["katex-tag"],[ge],t);return Ti([T,Me])},Mx={c:"center ",l:"left ",r:"right "},ni=function(e,t){for(var n=[],i=new he("mtd",[],["mtr-glue"]),s=new he("mtd",[],["mml-eqn-num"]),a=0;a<e.body.length;a++){for(var o=e.body[a],l=[],c=0;c<o.length;c++)l.push(new he("mtd",[gt(o[c],t)]));e.tags&&e.tags[a]&&(l.unshift(i),l.push(i),e.leqno?l.unshift(s):l.push(s)),n.push(new he("mtr",l))}var h=new he("mtable",n),u=e.arraystretch===.5?.1:.16+e.arraystretch-1+(e.addJot?.09:0);h.setAttribute("rowspacing",de(u));var d="",p="";if(e.cols&&e.cols.length>0){var x=e.cols,y="",g=!1,m=0,_=x.length;x[0].type==="separator"&&(d+="top ",m=1),x[x.length-1].type==="separator"&&(d+="bottom ",_-=1);for(var S=m;S<_;S++){var w=x[S];w.type==="align"?(p+=Mx[w.align],g&&(y+="none "),g=!0):w.type==="separator"&&g&&(y+=w.separator==="|"?"solid ":"dashed ",g=!1)}h.setAttribute("columnalign",p.trim()),/[sd]/.test(y)&&h.setAttribute("columnlines",y.trim())}if(e.colSeparationType==="align"){for(var N=e.cols||[],I="",L=1;L<N.length;L++)I+=L%2?"0em ":"1em ";h.setAttribute("columnspacing",I.trim())}else e.colSeparationType==="alignat"||e.colSeparationType==="gather"?h.setAttribute("columnspacing","0em"):e.colSeparationType==="small"?h.setAttribute("columnspacing","0.2778em"):e.colSeparationType==="CD"?h.setAttribute("columnspacing","0.5em"):h.setAttribute("columnspacing","1em");var H="",E=e.hLinesBeforeRow;d+=E[0].length>0?"left ":"",d+=E[E.length-1].length>0?"right ":"";for(var C=1;C<E.length-1;C++)H+=E[C].length===0?"none ":E[C][0]?"dashed ":"solid ";return/[sd]/.test(H)&&h.setAttribute("rowlines",H.trim()),d!==""&&(h=new he("menclose",[h]),h.setAttribute("notation",d.trim())),e.arraystretch&&e.arraystretch<1&&(h=new he("mstyle",[h]),h.setAttribute("scriptlevel","1")),h},yd=function(e,t){e.envName.includes("ed")||Ya(e);var n=[],i=e.envName==="split",s=qi(e.parser,{cols:n,addJot:!0,autoTag:i?void 0:l0(e.envName),emptySingleRow:!0,colSeparationType:e.envName.includes("at")?"alignat":"align",maxNumCols:i?2:void 0,leqno:e.parser.settings.leqno},"display"),a=0,o=0,l={type:"ordgroup",mode:e.mode,body:[]};if(t[0]&&t[0].type==="ordgroup"){var c="Number of columns should be a positive integer",h=a0(t[0],c);if(!/^[0-9]+$/.test(h)||Number(h)<1)throw new oe(c,t[0]);a=Number(h),o=a*2}var u=!o;s.body.forEach(function(y){for(var g=1;g<y.length;g+=2){var m=it(y[g],"styling"),_=it(m.body[0],"ordgroup");_.body.unshift(l)}if(u)o<y.length&&(o=y.length);else{var S=y.length/2;if(a<S)throw new oe("Too many math in a row: "+("expected "+a+", but got "+S),y[0])}});for(var d=0;d<o;++d){var p="r",x=0;d%2===1?p="l":d>0&&u&&(x=1),n[d]={type:"align",align:p,pregap:x,postgap:0}}return s.colSeparationType=u?"align":"alignat",s};ei({type:"array",names:["array","darray"],props:{numArgs:1},handler(r,e){var t=Wa(e[0]),n=t?[e[0]]:it(e[0],"ordgroup").body,i=n.map(function(a){var o=Va(a),l=o.text;if("lcr".includes(l))return{type:"align",align:l};if(l==="|")return{type:"separator",separator:"|"};if(l===":")return{type:"separator",separator:":"};throw new oe("Unknown column alignment: "+l,a)}),s={cols:i,hskipBeforeAndAfter:!0,maxNumCols:i.length};return qi(r.parser,s,c0(r.envName))},htmlBuilder:ti,mathmlBuilder:ni});ei({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(r){var e={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[r.envName.replace("*","")],t="c",n={hskipBeforeAndAfter:!1,cols:[{type:"align",align:t}]};if(r.envName.charAt(r.envName.length-1)==="*"){var i=r.parser;if(i.consumeSpaces(),i.fetch().text==="["){if(i.consume(),i.consumeSpaces(),t=i.fetch().text,!"lcr".includes(t))throw new oe("Expected l or c or r",i.nextToken);i.consume(),i.consumeSpaces(),i.expect("]"),i.consume(),n.cols=[{type:"align",align:t}]}}var s=qi(r.parser,n,c0(r.envName)),a=Math.max(0,...s.body.map(o=>o.length));return s.cols=new Array(a).fill({type:"align",align:t}),e?{type:"leftright",mode:r.mode,body:[s],left:e[0],right:e[1],rightColor:void 0}:s},htmlBuilder:ti,mathmlBuilder:ni});ei({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(r){var e={arraystretch:.5},t=qi(r.parser,e,"script");return t.colSeparationType="small",t},htmlBuilder:ti,mathmlBuilder:ni});ei({type:"array",names:["subarray"],props:{numArgs:1},handler(r,e){var t=Wa(e[0]),n=t?[e[0]]:it(e[0],"ordgroup").body,i=n.map(function(o){var l=Va(o),c=l.text;if("lc".includes(c))return{type:"align",align:c};throw new oe("Unknown column alignment: "+c,o)});if(i.length>1)throw new oe("{subarray} can contain only one column");var s={cols:i,hskipBeforeAndAfter:!1,arraystretch:.5},a=qi(r.parser,s,"script");if(a.body.length>0&&a.body[0].length>1)throw new oe("{subarray} can contain only one column");return a},htmlBuilder:ti,mathmlBuilder:ni});ei({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(r){var e={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},t=qi(r.parser,e,c0(r.envName));return{type:"leftright",mode:r.mode,body:[t],left:r.envName.includes("r")?".":"\\{",right:r.envName.includes("r")?"\\}":".",rightColor:void 0}},htmlBuilder:ti,mathmlBuilder:ni});ei({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:yd,htmlBuilder:ti,mathmlBuilder:ni});ei({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(r){Sx.has(r.envName)&&Ya(r);var e={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:l0(r.envName),emptySingleRow:!0,leqno:r.parser.settings.leqno};return qi(r.parser,e,"display")},htmlBuilder:ti,mathmlBuilder:ni});ei({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:yd,htmlBuilder:ti,mathmlBuilder:ni});ei({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(r){Ya(r);var e={autoTag:l0(r.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:r.parser.settings.leqno};return qi(r.parser,e,"display")},htmlBuilder:ti,mathmlBuilder:ni});ei({type:"array",names:["CD"],props:{numArgs:0},handler(r){return Ya(r),ax(r.parser)},htmlBuilder:ti,mathmlBuilder:ni});M("\\nonumber","\\gdef\\@eqnsw{0}");M("\\notag","\\nonumber");ye({type:"text",names:["\\hline","\\hdashline"],numArgs:0,allowedInText:!0,allowedInMath:!0,handler(r,e){throw new oe(r.funcName+" valid only within array environment")}});var Dh=vd;ye({type:"environment",names:["\\begin","\\end"],numArgs:1,argTypes:["text"],handler(r,e){var t=r.parser,n=r.funcName,i=e[0];if(i.type!=="ordgroup")throw new oe("Invalid environment name",i);var s=a0(i,"Environment name should contain only text characters and spaces",!0);if(n==="\\begin"){if(!Object.prototype.hasOwnProperty.call(Dh,s))throw new oe("No such environment: "+s,i);var a=Dh[s],o=t.parseArguments("\\begin{"+s+"}",a),l=o.args,c=o.optArgs,h={mode:t.mode,envName:s,parser:t},u=a.handler(h,l,c);t.expect("\\end",!1);var d=t.nextToken,p=it(t.parseFunction(),"environment");if(p.name!==s)throw new oe("Mismatch: \\begin{"+s+"} matched by \\end{"+p.name+"}",d);return u}return{type:"environment",mode:t.mode,name:s,nameGroup:i}}});var wx=(r,e)=>{var t=r.font,n=e.withFont(t);return lt(r.body,n)},Tx=(r,e)=>{var t=r.font,n=e.withFont(t);return gt(r.body,n)},Nh={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak"};ye({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathsfit","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],numArgs:1,allowedInArgument:!0,handler:(r,e)=>{var t=r.parser,n=r.funcName,i=Cs(e[0]),s=n in Nh?Nh[n]:n;return{type:"font",mode:t.mode,font:s.slice(1),body:i}},htmlBuilder:wx,mathmlBuilder:Tx});ye({type:"mclass",names:["\\boldsymbol","\\bm"],numArgs:1,handler:(r,e)=>{var t=r.parser,n=e[0];return{type:"mclass",mode:t.mode,mclass:qa(n),body:[{type:"font",mode:t.mode,font:"boldsymbol",body:n}],isCharacterBox:Mi(n)}}});ye({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],numArgs:0,allowedInText:!0,handler:(r,e)=>{var t=r.parser,n=r.funcName,i=r.breakOnTokenText,s=t.mode,a=t.parseExpression(!0,i);return{type:"font",mode:s,font:"math"+n.slice(1),body:{type:"ordgroup",mode:t.mode,body:a}}}});var Ex=(r,e)=>{var t=e.style,n=t.fracNum(),i=t.fracDen(),s;s=e.havingStyle(n);var a=lt(r.numer,s,e);if(r.continued){var o=8.5/e.fontMetrics().ptPerEm,l=3.5/e.fontMetrics().ptPerEm;a.height=a.height<o?o:a.height,a.depth=a.depth<l?l:a.depth}s=e.havingStyle(i);var c=lt(r.denom,s,e),h,u,d;r.hasBarLine?(r.barSize?(u=Rt(r.barSize,e),h=$r("frac-line",e,u)):h=$r("frac-line",e),u=h.height,d=h.height):(h=null,u=0,d=e.fontMetrics().defaultRuleThickness);var p,x,y;t.size===Ge.DISPLAY.size?(p=e.fontMetrics().num1,u>0?x=3*d:x=7*d,y=e.fontMetrics().denom1):(u>0?(p=e.fontMetrics().num2,x=d):(p=e.fontMetrics().num3,x=3*d),y=e.fontMetrics().denom2);var g;if(h){var _=e.fontMetrics().axisHeight;p-a.depth-(_+.5*u)<x&&(p+=x-(p-a.depth-(_+.5*u))),_-.5*u-(c.height-y)<x&&(y+=x-(_-.5*u-(c.height-y)));var S=-(_-.5*u);g=ct({positionType:"individualShift",children:[{type:"elem",elem:c,shift:y},{type:"elem",elem:h,shift:S},{type:"elem",elem:a,shift:-p}]})}else{var m=p-a.depth-(c.height-y);m<x&&(p+=.5*(x-m),y+=.5*(x-m)),g=ct({positionType:"individualShift",children:[{type:"elem",elem:c,shift:y},{type:"elem",elem:a,shift:-p}]})}s=e.havingStyle(t),g.height*=s.sizeMultiplier/e.sizeMultiplier,g.depth*=s.sizeMultiplier/e.sizeMultiplier;var w;t.size===Ge.DISPLAY.size?w=e.fontMetrics().delim1:t.size===Ge.SCRIPTSCRIPT.size?w=e.havingStyle(Ge.SCRIPT).fontMetrics().delim2:w=e.fontMetrics().delim2;var N,I;return r.leftDelim==null?N=Rs(e,["mopen"]):N=Dl(r.leftDelim,w,!0,e.havingStyle(t),r.mode,["mopen"]),r.continued?I=ie([]):r.rightDelim==null?I=Rs(e,["mclose"]):I=Dl(r.rightDelim,w,!0,e.havingStyle(t),r.mode,["mclose"]),ie(["mord"].concat(s.sizingClasses(e)),[N,ie(["mfrac"],[g]),I],e)},Ax=(r,e)=>{var t=new he("mfrac",[gt(r.numer,e),gt(r.denom,e)]);if(!r.hasBarLine)t.setAttribute("linethickness","0px");else if(r.barSize){var n=Rt(r.barSize,e);t.setAttribute("linethickness",de(n))}if(r.leftDelim!=null||r.rightDelim!=null){var i=[];if(r.leftDelim!=null){var s=new he("mo",[new zt(r.leftDelim.replace("\\",""))]);s.setAttribute("fence","true"),i.push(s)}if(i.push(t),r.rightDelim!=null){var a=new he("mo",[new zt(r.rightDelim.replace("\\",""))]);a.setAttribute("fence","true"),i.push(a)}return r0(i)}return t},bd=(r,e)=>{if(!e)return r;var t={type:"styling",mode:r.mode,style:e,body:[r]};return t};ye({type:"genfrac",names:["\\cfrac","\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],numArgs:2,allowedInArgument:!0,handler:(r,e)=>{var t=r.parser,n=r.funcName,i=e[0],s=e[1],a,o=null,l=null;switch(n){case"\\cfrac":case"\\dfrac":case"\\frac":case"\\tfrac":a=!0;break;case"\\\\atopfrac":a=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":a=!1,o="(",l=")";break;case"\\\\bracefrac":a=!1,o="\\{",l="\\}";break;case"\\\\brackfrac":a=!1,o="[",l="]";break;default:throw new Error("Unrecognized genfrac command")}var c=n==="\\cfrac",h=null;return c||n.startsWith("\\d")?h="display":n.startsWith("\\t")&&(h="text"),bd({type:"genfrac",mode:t.mode,numer:i,denom:s,continued:c,hasBarLine:a,leftDelim:o,rightDelim:l,barSize:null},h)},htmlBuilder:Ex,mathmlBuilder:Ax});ye({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],numArgs:0,infix:!0,handler(r){var e=r.parser,t=r.funcName,n=r.token,i;switch(t){case"\\over":i="\\frac";break;case"\\choose":i="\\binom";break;case"\\atop":i="\\\\atopfrac";break;case"\\brace":i="\\\\bracefrac";break;case"\\brack":i="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:e.mode,replaceWith:i,token:n}}});var Uh=["display","text","script","scriptscript"],kh=function(e){var t=null;return e.length>0&&(t=e,t=t==="."?null:t),t};ye({type:"genfrac",names:["\\genfrac"],numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"],handler(r,e){var t=r.parser,n=e[4],i=e[5],s=Cs(e[0]),a=s.type==="atom"&&s.family==="open"?kh(s.text):null,o=Cs(e[1]),l=o.type==="atom"&&o.family==="close"?kh(o.text):null,c=it(e[2],"size"),h,u=null;c.isBlank?h=!0:(u=c.value,h=u.number>0);var d=null,p=e[3];if(p.type==="ordgroup"){if(p.body.length>0){var x=it(p.body[0],"textord");d=Uh[Number(x.text)]}}else p=it(p,"textord"),d=Uh[Number(p.text)];return bd({type:"genfrac",mode:t.mode,numer:n,denom:i,continued:!1,hasBarLine:h,barSize:u,leftDelim:a,rightDelim:l},d)}});ye({type:"infix",names:["\\above"],numArgs:1,argTypes:["size"],infix:!0,handler(r,e){var t=r.parser;r.funcName;var n=r.token;return{type:"infix",mode:t.mode,replaceWith:"\\\\abovefrac",size:it(e[0],"size").value,token:n}}});ye({type:"genfrac",names:["\\\\abovefrac"],numArgs:3,argTypes:["math","size","math"],handler:(r,e)=>{var t=r.parser;r.funcName;var n=e[0],i=it(e[1],"infix").size;if(!i)throw new Error("\\\\abovefrac expected size, but got "+String(i));var s=e[2],a=i.number>0;return{type:"genfrac",mode:t.mode,numer:n,denom:s,continued:!1,hasBarLine:a,barSize:i,leftDelim:null,rightDelim:null}}});var _d=(r,e)=>{var t=e.style,n,i;r.type==="supsub"?(n=r.sup?lt(r.sup,e.havingStyle(t.sup()),e):lt(r.sub,e.havingStyle(t.sub()),e),i=it(r.base,"horizBrace")):i=it(r,"horizBrace");var s=lt(i.base,e.havingBaseStyle(Ge.DISPLAY)),a=Ga(i,e),o;if(i.isOver?o=ct({positionType:"firstBaseline",children:[{type:"elem",elem:s},{type:"kern",size:.1},{type:"elem",elem:a,wrapperClasses:["svg-align"]}]}):o=ct({positionType:"bottom",positionData:s.depth+.1+a.height,children:[{type:"elem",elem:a,wrapperClasses:["svg-align"]},{type:"kern",size:.1},{type:"elem",elem:s}]}),n){var l=ie(["minner",i.isOver?"mover":"munder"],[o],e);i.isOver?o=ct({positionType:"firstBaseline",children:[{type:"elem",elem:l},{type:"kern",size:.2},{type:"elem",elem:n}]}):o=ct({positionType:"bottom",positionData:l.depth+.2+n.height+n.depth,children:[{type:"elem",elem:n},{type:"kern",size:.2},{type:"elem",elem:l}]})}return ie(["minner",i.isOver?"mover":"munder"],[o],e)},Cx=(r,e)=>{var t=Ha(r.label);return new he(r.isOver?"mover":"munder",[gt(r.base,e),t])};ye({type:"horizBrace",names:["\\overbrace","\\underbrace","\\overbracket","\\underbracket"],numArgs:1,handler(r,e){var t=r.parser,n=r.funcName;return{type:"horizBrace",mode:t.mode,label:n,isOver:n.includes("\\over"),base:e[0]}},htmlBuilder:_d,mathmlBuilder:Cx});ye({type:"href",names:["\\href"],numArgs:2,argTypes:["url","original"],allowedInText:!0,handler:(r,e)=>{var t=r.parser,n=e[1],i=it(e[0],"url").url;return t.settings.isTrusted({command:"\\href",url:i})?{type:"href",mode:t.mode,href:i,body:Bt(n)}:t.formatUnsupportedCmd("\\href")},htmlBuilder:(r,e)=>{var t=qt(r.body,e,!1);return I3(r.href,[],t,e)},mathmlBuilder:(r,e)=>{var t=Wi(r.body,e);return t instanceof he||(t=new he("mrow",[t])),t.setAttribute("href",r.href),t}});ye({type:"href",names:["\\url"],numArgs:1,argTypes:["url"],allowedInText:!0,handler:(r,e)=>{var t=r.parser,n=it(e[0],"url").url;if(!t.settings.isTrusted({command:"\\url",url:n}))return t.formatUnsupportedCmd("\\url");for(var i=[],s=0;s<n.length;s++){var a=n[s];a==="~"&&(a="\\textasciitilde"),i.push({type:"textord",mode:"text",text:a})}var o={type:"text",mode:t.mode,font:"\\texttt",body:i};return{type:"href",mode:t.mode,href:n,body:Bt(o)}}});ye({type:"hbox",names:["\\hbox"],numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0,handler(r,e){var t=r.parser;return{type:"hbox",mode:t.mode,body:Bt(e[0])}},htmlBuilder(r,e){var t=qt(r.body,e.withFont(""),!1);return Ti(t)},mathmlBuilder(r,e){return new he("mrow",En(r.body,e.withFont("")))}});ye({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],numArgs:2,argTypes:["raw","original"],allowedInText:!0,handler:(r,e)=>{var t=r.parser,n=r.funcName;r.token;var i=it(e[0],"raw").string,s=e[1];t.settings.strict&&yn({strict:t.settings.strict,errorCode:"htmlExtension",errorMsg:"HTML extension is disabled on strict mode",report:!0});var a,o={};switch(n){case"\\htmlClass":o.class=i,a={command:"\\htmlClass",class:i};break;case"\\htmlId":o.id=i,a={command:"\\htmlId",id:i};break;case"\\htmlStyle":o.style=i,a={command:"\\htmlStyle",style:i};break;case"\\htmlData":{for(var l="{,}",c=[],h="",u=0;u<i.length;u++)i.startsWith(l,u)?(h+=",",u+=l.length-1):i[u]===","?(c.push(h),h=""):h+=i[u];c.push(h);for(var d=0;d<c.length;d++){var p=c[d],x=p.indexOf("=");if(x<0)throw new oe("\\htmlData key/value '"+p+"' missing equals sign");var y=p.slice(0,x),g=p.slice(x+1);o["data-"+y.trim()]=g}a={command:"\\htmlData",attributes:o};break}default:throw new Error("Unrecognized html command")}return t.settings.isTrusted(a)?{type:"html",mode:t.mode,attributes:o,body:Bt(s)}:t.formatUnsupportedCmd(n)},htmlBuilder:(r,e)=>{var t=qt(r.body,e,!1),n=["enclosing"];r.attributes.class&&n.push(...r.attributes.class.trim().split(/\s+/));var i=ie(n,t,e);for(var s of Object.entries(r.attributes)){var a=s[0],o=s[1];a!=="class"&&i.setAttribute(a,o)}return i},mathmlBuilder:(r,e)=>Wi(r.body,e)});ye({type:"htmlmathml",names:["\\html@mathml"],numArgs:2,allowedInArgument:!0,allowedInText:!0,handler:(r,e)=>{var t=r.parser;return{type:"htmlmathml",mode:t.mode,html:Bt(e[0]),mathml:Bt(e[1])}},htmlBuilder:(r,e)=>{var t=qt(r.html,e,!1);return Ti(t)},mathmlBuilder:(r,e)=>Wi(r.mathml,e)});var Zo=function(e){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))return{number:+e,unit:"bp"};var t=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);if(!t)throw new oe("Invalid size: '"+e+"' in \\includegraphics");var n={number:+(t[1]+t[2]),unit:t[3]};if(!Wu(n))throw new oe("Invalid unit: '"+n.unit+"' in \\includegraphics.");return n};ye({type:"includegraphics",names:["\\includegraphics"],numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1,handler:(r,e,t)=>{var n=r.parser,i={number:0,unit:"em"},s={number:.9,unit:"em"},a={number:0,unit:"em"},o="";if(t[0])for(var l=it(t[0],"raw").string,c=l.split(","),h=0;h<c.length;h++){var u=c[h].split("=");if(u.length===2){var d=u[1].trim();switch(u[0].trim()){case"alt":o=d;break;case"width":i=Zo(d);break;case"height":s=Zo(d);break;case"totalheight":a=Zo(d);break;default:throw new oe("Invalid key: '"+u[0]+"' in \\includegraphics.")}}}var p=it(e[0],"url").url;return o===""&&(o=p,o=o.replace(/^.*[\\/]/,""),o=o.substring(0,o.lastIndexOf("."))),n.settings.isTrusted({command:"\\includegraphics",url:p})?{type:"includegraphics",mode:n.mode,alt:o,width:i,height:s,totalheight:a,src:p}:n.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(r,e)=>{var t=Rt(r.height,e),n=0;r.totalheight.number>0&&(n=Rt(r.totalheight,e)-t);var i=0;r.width.number>0&&(i=Rt(r.width,e));var s={height:de(t+n)};i>0&&(s.width=de(i)),n>0&&(s.verticalAlign=de(-n));var a=new x3(r.src,r.alt,s);return a.height=t,a.depth=n,a},mathmlBuilder:(r,e)=>{var t=new he("mglyph",[]);t.setAttribute("alt",r.alt);var n=Rt(r.height,e),i=0;if(r.totalheight.number>0&&(i=Rt(r.totalheight,e)-n,t.setAttribute("valign",de(-i))),t.setAttribute("height",de(n+i)),r.width.number>0){var s=Rt(r.width,e);t.setAttribute("width",de(s))}return t.setAttribute("src",r.src),t}});ye({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0,handler(r,e){var t=r.parser,n=r.funcName,i=it(e[0],"size");if(t.settings.strict){var s=n[1]==="m",a=i.value.unit==="mu";s?(a||yn({strict:t.settings.strict,errorCode:"mathVsTextUnits",errorMsg:"LaTeX's "+n+" supports only mu units, "+("not "+i.value.unit+" units"),report:!0}),t.mode!=="math"&&yn({strict:t.settings.strict,errorCode:"mathVsTextUnits",errorMsg:"LaTeX's "+n+" works only in math mode",report:!0})):a&&yn({strict:t.settings.strict,errorCode:"mathVsTextUnits",errorMsg:"LaTeX's "+n+" doesn't support mu units",report:!0})}return{type:"kern",mode:t.mode,dimension:i.value}},htmlBuilder(r,e){return $u(r.dimension,e)},mathmlBuilder(r,e){var t=Rt(r.dimension,e);return new nd(t)}});ye({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],numArgs:1,allowedInText:!0,handler:(r,e)=>{var t=r.parser,n=r.funcName,i=e[0];return{type:"lap",mode:t.mode,alignment:n.slice(5),body:i}},htmlBuilder:(r,e)=>{var t;r.alignment==="clap"?(t=ie([],[lt(r.body,e)]),t=ie(["katex-inner"],[t],e)):t=ie(["katex-inner"],[lt(r.body,e)]);var n=ie(["katex-fix"],[]),i=ie([r.alignment],[t,n],e),s=ie(["katex-strut"]);return s.style.height=de(i.height+i.depth),i.depth&&(s.style.verticalAlign=de(-i.depth)),i.children.unshift(s),i=ie(["katex-thinbox"],[i],e),ie(["mord","katex-vbox"],[i],e)},mathmlBuilder:(r,e)=>{var t=new he("mpadded",[gt(r.body,e)]);if(r.alignment!=="rlap"){var n=r.alignment==="llap"?"-1":"-0.5";t.setAttribute("lspace",n+"width")}return t.setAttribute("width","0px"),t}});ye({type:"styling",names:["\\(","$"],numArgs:0,allowedInText:!0,allowedInMath:!1,handler(r,e){var t=r.funcName,n=r.parser,i=n.mode;n.switchMode("math");var s=t==="\\("?"\\)":"$",a=n.parseExpression(!1,s);return n.expect(s),n.switchMode(i),{type:"styling",mode:n.mode,style:"text",resetFont:!0,body:a}}});ye({type:"text",names:["\\)","\\]"],numArgs:0,allowedInText:!0,allowedInMath:!1,handler(r,e){throw new oe("Mismatched "+r.funcName)}});var Oh=(r,e)=>{switch(e.style.size){case Ge.DISPLAY.size:return r.display;case Ge.TEXT.size:return r.text;case Ge.SCRIPT.size:return r.script;case Ge.SCRIPTSCRIPT.size:return r.scriptscript;default:return r.text}};ye({type:"mathchoice",names:["\\mathchoice"],numArgs:4,primitive:!0,handler:(r,e)=>{var t=r.parser;return{type:"mathchoice",mode:t.mode,display:Bt(e[0]),text:Bt(e[1]),script:Bt(e[2]),scriptscript:Bt(e[3])}},htmlBuilder:(r,e)=>{var t=Oh(r,e),n=qt(t,e,!1);return Ti(n)},mathmlBuilder:(r,e)=>{var t=Oh(r,e);return Wi(t,e)}});var Sd=(r,e,t,n,i,s,a)=>{r=ie([],[r]);var o=t&&Mi(t),l,c;if(e){var h=lt(e,n.havingStyle(i.sup()),n);c={elem:h,kern:Math.max(n.fontMetrics().bigOpSpacing1,n.fontMetrics().bigOpSpacing3-h.depth)}}if(t){var u=lt(t,n.havingStyle(i.sub()),n);l={elem:u,kern:Math.max(n.fontMetrics().bigOpSpacing2,n.fontMetrics().bigOpSpacing4-u.height)}}var d;if(c&&l){var p=n.fontMetrics().bigOpSpacing5+l.elem.height+l.elem.depth+l.kern+r.depth+a;d=ct({positionType:"bottom",positionData:p,children:[{type:"kern",size:n.fontMetrics().bigOpSpacing5},{type:"elem",elem:l.elem,marginLeft:de(-s)},{type:"kern",size:l.kern},{type:"elem",elem:r},{type:"kern",size:c.kern},{type:"elem",elem:c.elem,marginLeft:de(s)},{type:"kern",size:n.fontMetrics().bigOpSpacing5}]})}else if(l){var x=r.height-a;d=ct({positionType:"top",positionData:x,children:[{type:"kern",size:n.fontMetrics().bigOpSpacing5},{type:"elem",elem:l.elem,marginLeft:de(-s)},{type:"kern",size:l.kern},{type:"elem",elem:r}]})}else if(c){var y=r.depth+a;d=ct({positionType:"bottom",positionData:y,children:[{type:"elem",elem:r},{type:"kern",size:c.kern},{type:"elem",elem:c.elem,marginLeft:de(s)},{type:"kern",size:n.fontMetrics().bigOpSpacing5}]})}else return r;var g=[d];if(l&&s!==0&&!o){var m=ie(["mspace"],[],n);m.style.marginRight=de(s),g.unshift(m)}return ie(["mop","op-limits"],g,n)},Md=new Set(["\\smallint"]),wd=(r,e)=>{var t,n,i=!1,s;r.type==="supsub"?(t=r.sup,n=r.sub,s=it(r.base,"op"),i=!0):s=it(r,"op");var a=e.style,o=!1;a.size===Ge.DISPLAY.size&&s.symbol&&!Md.has(s.name)&&(o=!0);var l,c;if(s.symbol){var h=o?"Size2-Regular":"Size1-Regular",u="";if((s.name==="\\oiint"||s.name==="\\oiiint")&&(u=s.name.slice(1),s.name=u==="oiint"?"\\iint":"\\iiint"),l=cn(s.name,h,"math",e,["mop","op-symbol",o?"large-op":"small-op"]),c=l.italic,u.length>0){var d=Ju(u+"Size"+(o?"2":"1"),e);l=ct({positionType:"individualShift",children:[{type:"elem",elem:l,shift:0},{type:"elem",elem:d,shift:o?.08:0}]}),s.name="\\"+u,l.classes.unshift("mop"),l.italic=c}}else if(s.body){var p=qt(s.body,e,!0);p.length===1&&p[0]instanceof wn?(l=p[0],l.classes[0]="mop"):l=ie(["mop"],p,e)}else{for(var x=[],y=1;y<s.name.length;y++)x.push(n0(s.name[y],s.mode,e));l=ie(["mop"],x,e)}var g=0,m=0;if((l instanceof wn||s.name==="\\oiint"||s.name==="\\oiiint")&&!s.suppressBaseShift){var _;g=(l.height-l.depth)/2-e.fontMetrics().axisHeight,m=(_=l.italic)!=null?_:0}return i?Sd(l,t,n,e,a,m,g):(g&&(l.style.position="relative",l.style.top=de(g)),l)},Rx=(r,e)=>{var t;if(r.symbol)t=new he("mo",[Un(r.name,r.mode)]),Md.has(r.name)&&t.setAttribute("largeop","false");else if(r.body)t=new he("mo",En(r.body,e));else{t=new he("mi",[new zt(r.name.slice(1))]);var n=new he("mo",[Un("⁡","text")]);r.parentIsSupSub?t=new he("mrow",[t,n]):t=td([t,n])}return t},Ix={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};ye({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],numArgs:0,handler:(r,e)=>{var t=r.parser,n=r.funcName,i=n;return i.length===1&&(i=Ix[i]),{type:"op",mode:t.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:i}},htmlBuilder:wd,mathmlBuilder:Rx});ye({type:"op",names:["\\mathop"],numArgs:1,primitive:!0,handler:(r,e)=>{var t=r.parser,n=e[0];return{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:Bt(n)}}});var Lx={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};ye({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],numArgs:0,handler(r){var e=r.parser,t=r.funcName;return{type:"op",mode:e.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:t}}});ye({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],numArgs:0,handler(r){var e=r.parser,t=r.funcName;return{type:"op",mode:e.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:t}}});ye({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],numArgs:0,allowedInArgument:!0,handler(r){var e=r.parser,t=r.funcName,n=t;return n.length===1&&(n=Lx[n]),{type:"op",mode:e.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:n}}});var Td=(r,e)=>{var t,n,i=!1,s;r.type==="supsub"?(t=r.sup,n=r.sub,s=it(r.base,"operatorname"),i=!0):s=it(r,"operatorname");var a;if(s.body.length>0){for(var o=s.body.map(u=>{var d="text"in u?u.text:void 0;return typeof d=="string"?{type:"textord",mode:u.mode,text:d}:u}),l=qt(o,e.withFont("mathrm"),!0),c=0;c<l.length;c++){var h=l[c];h instanceof wn&&(h.text=h.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}a=ie(["mop"],l,e)}else a=ie(["mop"],[],e);return i?Sd(a,t,n,e,e.style,0,0):a},Px=(r,e)=>{for(var t=En(r.body,e.withFont("mathrm")),n=!0,i=0;i<t.length;i++){var s=t[i];if(!(s instanceof nd))if(s instanceof he)switch(s.type){case"mi":case"mn":case"mspace":case"mtext":break;case"mo":{var a=s.children[0];s.children.length===1&&a instanceof zt?a.text=a.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):n=!1;break}default:n=!1}else n=!1}if(n){var o=t.map(h=>h.toText()).join("");t=[new zt(o)]}var l=new he("mi",t);l.setAttribute("mathvariant","normal");var c=new he("mo",[Un("⁡","text")]);return r.parentIsSupSub?new he("mrow",[l,c]):td([l,c])};ye({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],numArgs:1,handler:(r,e)=>{var t=r.parser,n=r.funcName,i=e[0];return{type:"operatorname",mode:t.mode,body:Bt(i),alwaysHandleSupSub:n==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:Td,mathmlBuilder:Px});M("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");fr({type:"ordgroup",htmlBuilder(r,e){return r.semisimple?Ti(qt(r.body,e,!1)):ie(["mord"],qt(r.body,e,!0),e)},mathmlBuilder(r,e){return Wi(r.body,e,!0)}});ye({type:"overline",names:["\\overline"],numArgs:1,handler(r,e){var t=r.parser,n=e[0];return{type:"overline",mode:t.mode,body:n}},htmlBuilder(r,e){var t=lt(r.body,e.havingCrampedStyle()),n=$r("overline-line",e),i=e.fontMetrics().defaultRuleThickness,s=ct({positionType:"firstBaseline",children:[{type:"elem",elem:t},{type:"kern",size:3*i},{type:"elem",elem:n},{type:"kern",size:i}]});return ie(["mord","katex-overline"],[s],e)},mathmlBuilder(r,e){var t=new he("mo",[new zt("‾")]);t.setAttribute("stretchy","true");var n=new he("mover",[gt(r.body,e),t]);return n.setAttribute("accent","true"),n}});ye({type:"phantom",names:["\\phantom"],numArgs:1,allowedInText:!0,handler:(r,e)=>{var t=r.parser,n=e[0];return{type:"phantom",mode:t.mode,body:Bt(n)}},htmlBuilder:(r,e)=>{var t=qt(r.body,e.withPhantom(),!1);return Ti(t)},mathmlBuilder:(r,e)=>{var t=En(r.body,e);return new he("mphantom",t)}});M("\\hphantom","\\smash{\\phantom{#1}}");ye({type:"vphantom",names:["\\vphantom"],numArgs:1,allowedInText:!0,handler:(r,e)=>{var t=r.parser,n=e[0];return{type:"vphantom",mode:t.mode,body:n}},htmlBuilder:(r,e)=>{var t=ie(["katex-inner"],[lt(r.body,e.withPhantom())]),n=ie(["katex-fix"],[]);return ie(["mord","rlap"],[t,n],e)},mathmlBuilder:(r,e)=>{var t=En(Bt(r.body),e),n=new he("mphantom",t),i=new he("mpadded",[n]);return i.setAttribute("width","0px"),i}});ye({type:"raisebox",names:["\\raisebox"],numArgs:2,argTypes:["size","hbox"],allowedInText:!0,handler(r,e){var t=r.parser,n=it(e[0],"size").value,i=e[1];return{type:"raisebox",mode:t.mode,dy:n,body:i}},htmlBuilder(r,e){var t=lt(r.body,e),n=Rt(r.dy,e);return ct({positionType:"shift",positionData:-n,children:[{type:"elem",elem:t}]})},mathmlBuilder(r,e){var t=new he("mpadded",[gt(r.body,e)]),n=r.dy.number+r.dy.unit;return t.setAttribute("voffset",n),t}});var Ed=(r,e)=>{var t=r.parser;return{type:"reflectbox",mode:t.mode,body:e[0]}};ye({type:"reflectbox",names:["\\reflectbox"],numArgs:1,argTypes:["hbox"],allowedInText:!0,handler:Ed,htmlBuilder(r,e){return ie(["mord","reflectbox"],[lt(r.body,e)],e)},mathmlBuilder(r,e){return gt(r.body,e)}});ye({type:"reflectbox",names:["\\mathreflectbox"],numArgs:1,argTypes:["math"],handler:Ed});ye({type:"internal",names:["\\relax"],numArgs:0,allowedInText:!0,allowedInArgument:!0,handler(r){var e=r.parser;return{type:"internal",mode:e.mode}}});ye({type:"rule",names:["\\rule"],numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["size","size","size"],handler(r,e,t){var n=r.parser,i=t[0],s=it(e[0],"size"),a=it(e[1],"size");return{type:"rule",mode:n.mode,shift:i&&it(i,"size").value,width:s.value,height:a.value}},htmlBuilder(r,e){var t=ie(["mord","katex-rule"],[],e),n=Rt(r.width,e),i=Rt(r.height,e),s=r.shift?Rt(r.shift,e):0;return t.style.borderRightWidth=de(n),t.style.borderTopWidth=de(i),t.style.bottom=de(s),t.width=n,t.height=i+s,t.depth=-s,t.maxFontSize=i*1.125*e.sizeMultiplier,t},mathmlBuilder(r,e){var t=Rt(r.width,e),n=Rt(r.height,e),i=r.shift?Rt(r.shift,e):0,s=e.color&&e.getColor()||"black",a=new he("mspace");a.setAttribute("mathbackground",s),a.setAttribute("width",de(t)),a.setAttribute("height",de(n));var o=new he("mpadded",[a]);return i>=0?o.setAttribute("height",de(i)):(o.setAttribute("height",de(i)),o.setAttribute("depth",de(-i))),o.setAttribute("voffset",de(i)),o}});function Ad(r,e,t){for(var n=qt(r,e,!1),i=e.sizeMultiplier/t.sizeMultiplier,s=0;s<n.length;s++){var a=n[s].classes.indexOf("katex-sizing");a<0?Array.prototype.push.apply(n[s].classes,e.sizingClasses(t)):n[s].classes[a+1]==="reset-size"+e.size&&(n[s].classes[a+1]="reset-size"+t.size),n[s].height*=i,n[s].depth*=i}return Ti(n)}var Fh=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],Dx=(r,e)=>{var t=e.havingSize(r.size);return Ad(r.body,t,e)};ye({type:"sizing",names:Fh,numArgs:0,allowedInText:!0,handler:(r,e)=>{var t=r.breakOnTokenText,n=r.funcName,i=r.parser,s=i.parseExpression(!1,t);return{type:"sizing",mode:i.mode,size:Fh.indexOf(n)+1,body:s}},htmlBuilder:Dx,mathmlBuilder:(r,e)=>{var t=e.havingSize(r.size),n=En(r.body,t),i=new he("mstyle",n);return i.setAttribute("mathsize",de(t.sizeMultiplier)),i}});ye({type:"smash",names:["\\smash"],numArgs:1,numOptionalArgs:1,allowedInText:!0,handler:(r,e,t)=>{var n=r.parser,i=!1,s=!1,a=t[0]&&it(t[0],"ordgroup");if(a)for(var o,l=0;l<a.body.length;++l){var c=a.body[l];if(o=Va(c).text,o==="t")i=!0;else if(o==="b")s=!0;else{i=!1,s=!1;break}}else i=!0,s=!0;var h=e[0];return{type:"smash",mode:n.mode,body:h,smashHeight:i,smashDepth:s}},htmlBuilder:(r,e)=>{var t=ie([],[lt(r.body,e)]);if(!r.smashHeight&&!r.smashDepth)return t;if(r.smashHeight&&(t.height=0),r.smashDepth&&(t.depth=0),r.smashHeight&&r.smashDepth)return ie(["mord","katex-smash"],[t],e);if(t.children)for(var n=0;n<t.children.length;n++)r.smashHeight&&(t.children[n].height=0),r.smashDepth&&(t.children[n].depth=0);var i=ct({positionType:"firstBaseline",children:[{type:"elem",elem:t}]});return ie(["mord"],[i],e)},mathmlBuilder:(r,e)=>{var t=new he("mpadded",[gt(r.body,e)]);return r.smashHeight&&t.setAttribute("height","0px"),r.smashDepth&&t.setAttribute("depth","0px"),t}});ye({type:"sqrt",names:["\\sqrt"],numArgs:1,numOptionalArgs:1,handler(r,e,t){var n=r.parser,i=t[0],s=e[0];return{type:"sqrt",mode:n.mode,body:s,index:i}},htmlBuilder(r,e){var t=lt(r.body,e.havingCrampedStyle());t.height===0&&(t.height=e.fontMetrics().xHeight),t=Zr(t,e);var n=e.fontMetrics(),i=n.defaultRuleThickness,s=i;e.style.id<Ge.TEXT.id&&(s=e.fontMetrics().xHeight);var a=i+s/4,o=t.height+t.depth+a+i,l=px(o,e),c=l.span,h=l.ruleWidth,u=l.advanceWidth,d=c.height-h;d>t.height+t.depth+a&&(a=(a+d-t.height-t.depth)/2);var p=c.height-t.height-a-h;t.style.paddingLeft=de(u);var x=ct({positionType:"firstBaseline",children:[{type:"elem",elem:t,wrapperClasses:["svg-align"]},{type:"kern",size:-(t.height+p)},{type:"elem",elem:c},{type:"kern",size:h}]});if(r.index){var y=e.havingStyle(Ge.SCRIPTSCRIPT),g=lt(r.index,y,e),m=.6*(x.height-x.depth),_=ct({positionType:"shift",positionData:-m,children:[{type:"elem",elem:g}]}),S=ie(["katex-root"],[_]);return ie(["mord","sqrt"],[S,x],e)}else return ie(["mord","sqrt"],[x],e)},mathmlBuilder(r,e){var t=r.body,n=r.index;return n?new he("mroot",[gt(t,e),gt(n,e)]):new he("msqrt",[gt(t,e)])}});var Nl={display:Ge.DISPLAY,text:Ge.TEXT,script:Ge.SCRIPT,scriptscript:Ge.SCRIPTSCRIPT};function Nx(r){return r in Nl}ye({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],numArgs:0,allowedInText:!0,primitive:!0,handler(r,e){var t=r.breakOnTokenText,n=r.funcName,i=r.parser,s=i.parseExpression(!0,t),a=n.slice(1,n.length-5);if(!Nx(a))throw new Error("Unknown style: "+a);return{type:"styling",mode:i.mode,style:a,body:s}},htmlBuilder(r,e){var t=Nl[r.style],n=e.havingStyle(t);return r.resetFont&&(n=n.withFont("")),Ad(r.body,n,e)},mathmlBuilder(r,e){var t=Nl[r.style],n=e.havingStyle(t);r.resetFont&&(n=n.withFont(""));var i=En(r.body,n),s=new he("mstyle",i),a={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},o=a[r.style];return s.setAttribute("scriptlevel",o[0]),s.setAttribute("displaystyle",o[1]),s}});var Ux=function(e,t){var n=e.base;if(n)if(n.type==="op"){var i=n.limits&&(t.style.size===Ge.DISPLAY.size||n.alwaysHandleSupSub);return i?wd:null}else if(n.type==="operatorname"){var s=n.alwaysHandleSupSub&&(t.style.size===Ge.DISPLAY.size||n.limits);return s?Td:null}else{if(n.type==="accent")return Mi(n.base)?ad:null;if(n.type==="horizBrace"){var a=!e.sub;return a===n.isOver?_d:null}else return null}else return null};fr({type:"supsub",htmlBuilder(r,e){var t=Ux(r,e);if(t)return t(r,e);var n=r.base,i=r.sup,s=r.sub,a=lt(n,e),o,l,c=e.fontMetrics(),h=0,u=0,d=n&&Mi(n);if(i){var p=e.havingStyle(e.style.sup());o=lt(i,p,e),d||(h=a.height-p.fontMetrics().supDrop*p.sizeMultiplier/e.sizeMultiplier)}if(s){var x=e.havingStyle(e.style.sub());l=lt(s,x,e),d||(u=a.depth+x.fontMetrics().subDrop*x.sizeMultiplier/e.sizeMultiplier)}var y;e.style===Ge.DISPLAY?y=c.sup1:e.style.cramped?y=c.sup3:y=c.sup2;var g=e.sizeMultiplier,m=de(.5/c.ptPerEm/g),_=null;if(l){var S=r.base&&r.base.type==="op"&&r.base.name&&(r.base.name==="\\oiint"||r.base.name==="\\oiiint");if(a instanceof wn||S){var w;_=de(-((w=a.italic)!=null?w:0))}}var N;if(o&&l){h=Math.max(h,y,o.depth+.25*c.xHeight),u=Math.max(u,c.sub2);var I=c.defaultRuleThickness,L=4*I;if(h-o.depth-(l.height-u)<L){u=L-(h-o.depth)+l.height;var H=.8*c.xHeight-(h-o.depth);H>0&&(h+=H,u-=H)}var E=[{type:"elem",elem:l,shift:u,marginRight:m,marginLeft:_},{type:"elem",elem:o,shift:-h,marginRight:m}];N=ct({positionType:"individualShift",children:E})}else if(l){u=Math.max(u,c.sub1,l.height-.8*c.xHeight);var C=[{type:"elem",elem:l,marginLeft:_,marginRight:m}];N=ct({positionType:"shift",positionData:u,children:C})}else if(o)h=Math.max(h,y,o.depth+.25*c.xHeight),N=ct({positionType:"shift",positionData:-h,children:[{type:"elem",elem:o,marginRight:m}]});else throw new Error("supsub must have either sup or sub.");var Y=Rl(a,"right")||"mord";return ie([Y],[a,ie(["msupsub"],[N])],e)},mathmlBuilder(r,e){var t=!1,n,i;r.base&&r.base.type==="horizBrace"&&(i=!!r.sup,i===r.base.isOver&&(t=!0,n=r.base.isOver)),r.base&&(r.base.type==="op"||r.base.type==="operatorname")&&(r.base.parentIsSupSub=!0);var s=[gt(r.base,e)];r.sub&&s.push(gt(r.sub,e)),r.sup&&s.push(gt(r.sup,e));var a;if(t)a=n?"mover":"munder";else if(r.sub)if(r.sup){var c=r.base;c&&c.type==="op"&&c.limits&&e.style===Ge.DISPLAY||c&&c.type==="operatorname"&&c.alwaysHandleSupSub&&(e.style===Ge.DISPLAY||c.limits)?a="munderover":a="msubsup"}else{var l=r.base;l&&l.type==="op"&&l.limits&&(e.style===Ge.DISPLAY||l.alwaysHandleSupSub)||l&&l.type==="operatorname"&&l.alwaysHandleSupSub&&(l.limits||e.style===Ge.DISPLAY)?a="munder":a="msub"}else{var o=r.base;o&&o.type==="op"&&o.limits&&(e.style===Ge.DISPLAY||o.alwaysHandleSupSub)||o&&o.type==="operatorname"&&o.alwaysHandleSupSub&&(o.limits||e.style===Ge.DISPLAY)?a="mover":a="msup"}return new he(a,s)}});fr({type:"atom",htmlBuilder(r,e){return n0(r.text,r.mode,e,["m"+r.family])},mathmlBuilder(r,e){var t=new he("mo",[Un(r.text,r.mode)]);if(r.family==="bin"){var n=s0(r,e);n==="bold-italic"&&t.setAttribute("mathvariant",n)}else r.family==="punct"?t.setAttribute("separator","true"):(r.family==="open"||r.family==="close")&&t.setAttribute("stretchy","false");return t}});var Cd={mi:"italic",mn:"normal",mtext:"normal"};fr({type:"mathord",htmlBuilder(r,e){return za(r,e)},mathmlBuilder(r,e){var t=new he("mi",[Un(r.text,r.mode,e)]),n=s0(r,e)||"italic";return n!==Cd[t.type]&&t.setAttribute("mathvariant",n),t}});fr({type:"textord",htmlBuilder(r,e){return za(r,e)},mathmlBuilder(r,e){var t=Un(r.text,r.mode,e),n=s0(r,e)||"normal",i;return r.mode==="text"?i=new he("mtext",[t]):/[0-9]/.test(r.text)?i=new he("mn",[t]):r.text==="\\prime"?i=new he("mo",[t]):i=new he("mi",[t]),n!==Cd[i.type]&&i.setAttribute("mathvariant",n),i}});var Bh=new Map([["\\nobreak","nobreak"],["\\allowbreak","allowbreak"]]),zh=new Map([[" ",{}],["\\ ",{}],["~",{className:"nobreak"}],["\\space",{}],["\\nobreakspace",{className:"nobreak"}]]);fr({type:"spacing",htmlBuilder(r,e){var t=zh.get(r.text),n=Bh.get(r.text);if(t){var i=t.className||"";if(r.mode==="text"){var s=za(r,e);return s.classes.push(i),s}else return ie(["mspace",i],[n0(r.text,r.mode,e)],e)}else{if(n)return ie(["mspace",n],[],e);throw new oe('Unknown type of space "'+r.text+'"')}},mathmlBuilder(r,e){var t;if(zh.has(r.text))t=new he("mtext",[new zt(" ")]);else{if(Bh.has(r.text))return new he("mspace");throw new oe('Unknown type of space "'+r.text+'"')}return t}});var Hh=()=>{var r=new he("mtd",[]);return r.setAttribute("width","50%"),r};fr({type:"tag",mathmlBuilder(r,e){var t=new he("mtable",[new he("mtr",[Hh(),new he("mtd",[Wi(r.body,e)]),Hh(),new he("mtd",[Wi(r.tag,e)])])]);return t.setAttribute("width","100%"),t}});var Gh={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},Vh={"\\textbf":"textbf","\\textmd":"textmd"},kx={"\\textit":"textit","\\textup":"textup"},Wh=(r,e)=>{var t=r.font;if(t){if(Gh[t])return e.withTextFontFamily(Gh[t]);if(Vh[t])return e.withTextFontWeight(Vh[t]);if(t==="\\emph")return e.fontShape==="textit"?e.withTextFontShape("textup"):e.withTextFontShape("textit")}else return e;return e.withTextFontShape(kx[t])};ye({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup","\\emph"],numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0,handler(r,e){var t=r.parser,n=r.funcName,i=e[0];return{type:"text",mode:t.mode,body:Bt(i),font:n}},htmlBuilder(r,e){var t=Wh(r,e),n=qt(r.body,t,!0);return ie(["mord","text"],n,t)},mathmlBuilder(r,e){var t=Wh(r,e);return Wi(r.body,t)}});ye({type:"underline",names:["\\underline"],numArgs:1,allowedInText:!0,handler(r,e){var t=r.parser;return{type:"underline",mode:t.mode,body:e[0]}},htmlBuilder(r,e){var t=lt(r.body,e),n=$r("underline-line",e),i=e.fontMetrics().defaultRuleThickness,s=ct({positionType:"top",positionData:t.height,children:[{type:"kern",size:i},{type:"elem",elem:n},{type:"kern",size:3*i},{type:"elem",elem:t}]});return ie(["mord","katex-underline"],[s],e)},mathmlBuilder(r,e){var t=new he("mo",[new zt("‾")]);t.setAttribute("stretchy","true");var n=new he("munder",[gt(r.body,e),t]);return n.setAttribute("accentunder","true"),n}});ye({type:"vcenter",names:["\\vcenter"],numArgs:1,argTypes:["original"],allowedInText:!1,handler(r,e){var t=r.parser;return{type:"vcenter",mode:t.mode,body:e[0]}},htmlBuilder(r,e){var t=lt(r.body,e),n=e.fontMetrics().axisHeight,i=.5*(t.height-n-(t.depth+n));return ct({positionType:"shift",positionData:i,children:[{type:"elem",elem:t}]})},mathmlBuilder(r,e){var t=new he("mpadded",[gt(r.body,e)],["vcenter"]);return new he("mrow",[t])}});ye({type:"verb",names:["\\verb"],numArgs:0,allowedInText:!0,handler(r,e,t){throw new oe("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(r,e){for(var t=qh(r),n=[],i=e.havingStyle(e.style.text()),s=0;s<t.length;s++){var a=t[s];a==="~"&&(a="\\textasciitilde"),n.push(cn(a,"Typewriter-Regular",r.mode,i,["mord","texttt"]))}return ie(["mord","text"].concat(i.sizingClasses(e)),Ku(n),i)},mathmlBuilder(r,e){var t=new zt(qh(r)),n=new he("mtext",[t]);return n.setAttribute("mathvariant","monospace"),n}});var qh=r=>r.body.replace(/ /g,r.star?"␣":" "),Oi=Qu,Rd=`[ \r
	]`,Ox="\\\\[a-zA-Z@]+",Fx="\\\\[^\uD800-\uDFFF]",Bx="("+Ox+")"+Rd+"*",zx=`\\\\(
|[ \r	]+
?)[ \r	]*`,Ul="[̀-ͯ]",Hx=new RegExp(Ul+"+$"),Gx="("+Rd+"+)|"+(zx+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+(Ul+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(Ul+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+Bx)+("|"+Fx+")");class Xh{constructor(e,t){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=e,this.settings=t,this.tokenRegex=new RegExp(Gx,"g"),this.catcodes={"%":14,"~":13}}setCatcode(e,t){this.catcodes[e]=t}lex(){var e=this.input,t=this.tokenRegex.lastIndex;if(t===e.length)return new Mn("EOF",new vn(this,t,t));var n=this.tokenRegex.exec(e);if(n===null||n.index!==t)throw new oe("Unexpected character: '"+e[t]+"'",new Mn(e[t],new vn(this,t,t+1)));var i=n[6]||n[3]||(n[2]?"\\ ":" ");if(this.catcodes[i]===14){var s=e.indexOf(`
`,this.tokenRegex.lastIndex);return s===-1?(this.tokenRegex.lastIndex=e.length,yn({strict:this.settings.strict,errorCode:"commentAtEnd",errorMsg:"% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)",report:!0})):this.tokenRegex.lastIndex=s+1,this.lex()}return new Mn(i,new vn(this,t,this.tokenRegex.lastIndex))}}class Vx{constructor(e,t){e===void 0&&(e={}),t===void 0&&(t={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=t,this.builtins=e,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new oe("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var e=this.undefStack.pop();for(var t of Object.keys(e))e[t]===void 0?delete this.current[t]:this.current[t]=e[t]}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(e){return Object.prototype.hasOwnProperty.call(this.current,e)||Object.prototype.hasOwnProperty.call(this.builtins,e)}get(e){return Object.prototype.hasOwnProperty.call(this.current,e)?this.current[e]:Object.prototype.hasOwnProperty.call(this.builtins,e)?this.builtins[e]:void 0}set(e,t,n){if(n===void 0&&(n=!1),n){for(var i=0;i<this.undefStack.length;i++)delete this.undefStack[i][e];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][e]=t)}else{var s=this.undefStack[this.undefStack.length-1];s&&!Object.prototype.hasOwnProperty.call(s,e)&&(s[e]=Object.prototype.hasOwnProperty.call(this.current,e)?this.current[e]:void 0)}t==null?delete this.current[e]:this.current[e]=t}}var Wx=xd;M("\\noexpand",function(r){var e=r.popToken();return r.isExpandable(e.text)&&(e.noexpand=!0,e.treatAsRelax=!0),{tokens:[e],numArgs:0}});M("\\expandafter",function(r){var e=r.popToken();return r.expandOnce(!0),{tokens:[e],numArgs:0}});M("\\@firstoftwo",function(r){var e=r.consumeArgs(2);return{tokens:e[0],numArgs:0}});M("\\@secondoftwo",function(r){var e=r.consumeArgs(2);return{tokens:e[1],numArgs:0}});M("\\@ifnextchar",function(r){var e=r.consumeArgs(3);r.consumeSpaces();var t=r.future();return e[0].length===1&&e[0][0].text===t.text?{tokens:e[1],numArgs:0}:{tokens:e[2],numArgs:0}});M("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");M("\\TextOrMath",function(r){var e=r.consumeArgs(2);return r.mode==="text"?{tokens:e[0],numArgs:0}:{tokens:e[1],numArgs:0}});var Yh={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};M("\\char",function(r){var e=r.popToken(),t,n=0;if(e.text==="'")t=8,e=r.popToken();else if(e.text==='"')t=16,e=r.popToken();else if(e.text==="`")if(e=r.popToken(),e.text[0]==="\\")n=e.text.charCodeAt(1);else{if(e.text==="EOF")throw new oe("\\char` missing argument");n=e.text.charCodeAt(0)}else t=10;if(t){if(n=Yh[e.text],n==null||n>=t)throw new oe("Invalid base-"+t+" digit "+e.text);for(var i;(i=Yh[r.future().text])!=null&&i<t;)n*=t,n+=i,r.popToken()}return"\\@char{"+n+"}"});var h0=(r,e,t,n)=>{var i=r.consumeArg().tokens;if(i.length!==1)throw new oe("\\newcommand's first argument must be a macro name");var s=i[0].text,a=r.isDefined(s);if(a&&!e)throw new oe("\\newcommand{"+s+"} attempting to redefine "+(s+"; use \\renewcommand"));if(!a&&!t)throw new oe("\\renewcommand{"+s+"} when command "+s+" does not yet exist; use \\newcommand");var o=0;if(i=r.consumeArg().tokens,i.length===1&&i[0].text==="["){for(var l="",c=r.expandNextToken();c.text!=="]"&&c.text!=="EOF";)l+=c.text,c=r.expandNextToken();if(!l.match(/^\s*[0-9]+\s*$/))throw new oe("Invalid number of arguments: "+l);o=parseInt(l),i=r.consumeArg().tokens}return a&&n||r.macros.set(s,{tokens:i,numArgs:o}),""};M("\\newcommand",r=>h0(r,!1,!0,!1));M("\\renewcommand",r=>h0(r,!0,!1,!1));M("\\providecommand",r=>h0(r,!0,!0,!0));M("\\message",r=>{var e=r.consumeArgs(1)[0];return console.log(e.reverse().map(t=>t.text).join("")),""});M("\\errmessage",r=>{var e=r.consumeArgs(1)[0];return console.error(e.reverse().map(t=>t.text).join("")),""});M("\\show",r=>{var e=r.popToken(),t=e.text;return console.log(e,r.macros.get(t),Oi[t],Tt.math[t],Tt.text[t]),""});M("\\bgroup","{");M("\\egroup","}");M("~","\\nobreakspace");M("\\lq","`");M("\\rq","'");M("\\aa","\\r a");M("\\AA","\\r A");M("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");M("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");M("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");M("ℬ","\\mathscr{B}");M("ℰ","\\mathscr{E}");M("ℱ","\\mathscr{F}");M("ℋ","\\mathscr{H}");M("ℐ","\\mathscr{I}");M("ℒ","\\mathscr{L}");M("ℳ","\\mathscr{M}");M("ℛ","\\mathscr{R}");M("ℭ","\\mathfrak{C}");M("ℌ","\\mathfrak{H}");M("ℨ","\\mathfrak{Z}");M("\\Bbbk","\\Bbb{k}");M("\\llap","\\mathllap{\\textrm{#1}}");M("\\rlap","\\mathrlap{\\textrm{#1}}");M("\\clap","\\mathclap{\\textrm{#1}}");M("\\mathstrut","\\vphantom{(}");M("\\underbar","\\underline{\\text{#1}}");M("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}');M("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");M("\\ne","\\neq");M("≠","\\neq");M("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");M("∉","\\notin");M("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");M("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");M("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");M("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");M("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");M("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");M("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");M("⟂","\\perp");M("‼","\\mathclose{!\\mkern-0.8mu!}");M("∌","\\notni");M("⌜","\\ulcorner");M("⌝","\\urcorner");M("⌞","\\llcorner");M("⌟","\\lrcorner");M("©","\\copyright");M("®","\\textregistered");M("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');M("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');M("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');M("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');M("\\vdots","{\\varvdots\\rule{0pt}{15pt}}");M("⋮","\\vdots");M("\\varGamma","\\mathit{\\Gamma}");M("\\varDelta","\\mathit{\\Delta}");M("\\varTheta","\\mathit{\\Theta}");M("\\varLambda","\\mathit{\\Lambda}");M("\\varXi","\\mathit{\\Xi}");M("\\varPi","\\mathit{\\Pi}");M("\\varSigma","\\mathit{\\Sigma}");M("\\varUpsilon","\\mathit{\\Upsilon}");M("\\varPhi","\\mathit{\\Phi}");M("\\varPsi","\\mathit{\\Psi}");M("\\varOmega","\\mathit{\\Omega}");M("\\substack","\\begin{subarray}{c}#1\\end{subarray}");M("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");M("\\boxed","\\fbox{$\\displaystyle{#1}$}");M("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");M("\\implies","\\DOTSB\\;\\Longrightarrow\\;");M("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");M("\\dddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");M("\\ddddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");var jh={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"},qx=new Set(["bin","rel"]);M("\\dots",function(r){var e="\\dotso",t=r.expandAfterFuture().text;return t in jh?e=jh[t]:(t.slice(0,4)==="\\not"||t in Tt.math&&qx.has(Tt.math[t].group))&&(e="\\dotsb"),e});var u0={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};M("\\dotso",function(r){var e=r.future().text;return e in u0?"\\ldots\\,":"\\ldots"});M("\\dotsc",function(r){var e=r.future().text;return e in u0&&e!==","?"\\ldots\\,":"\\ldots"});M("\\cdots",function(r){var e=r.future().text;return e in u0?"\\@cdots\\,":"\\@cdots"});M("\\dotsb","\\cdots");M("\\dotsm","\\cdots");M("\\dotsi","\\!\\cdots");M("\\dotsx","\\ldots\\,");M("\\DOTSI","\\relax");M("\\DOTSB","\\relax");M("\\DOTSX","\\relax");M("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");M("\\,","\\tmspace+{3mu}{.1667em}");M("\\thinspace","\\,");M("\\>","\\mskip{4mu}");M("\\:","\\tmspace+{4mu}{.2222em}");M("\\medspace","\\:");M("\\;","\\tmspace+{5mu}{.2777em}");M("\\thickspace","\\;");M("\\!","\\tmspace-{3mu}{.1667em}");M("\\negthinspace","\\!");M("\\negmedspace","\\tmspace-{4mu}{.2222em}");M("\\negthickspace","\\tmspace-{5mu}{.277em}");M("\\enspace","\\kern.5em ");M("\\enskip","\\hskip.5em\\relax");M("\\quad","\\hskip1em\\relax");M("\\qquad","\\hskip2em\\relax");M("\\tag","\\@ifstar\\tag@literal\\tag@paren");M("\\tag@paren","\\tag@literal{({#1})}");M("\\tag@literal",r=>{if(r.macros.get("\\df@tag"))throw new oe("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});M("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");M("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");M("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");M("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");M("\\newline","\\\\\\relax");M("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var Id=de(Kn["Main-Regular"][84][1]-.7*Kn["Main-Regular"][65][1]);M("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+Id+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");M("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+Id+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");M("\\hspace","\\@ifstar\\@hspacer\\@hspace");M("\\@hspace","\\hskip #1\\relax");M("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");M("\\ordinarycolon",":");M("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");M("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');M("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');M("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');M("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');M("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');M("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');M("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');M("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');M("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');M("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');M("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');M("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');M("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');M("∷","\\dblcolon");M("∹","\\eqcolon");M("≔","\\coloneqq");M("≕","\\eqqcolon");M("⩴","\\Coloneqq");M("\\ratio","\\vcentcolon");M("\\coloncolon","\\dblcolon");M("\\colonequals","\\coloneqq");M("\\coloncolonequals","\\Coloneqq");M("\\equalscolon","\\eqqcolon");M("\\equalscoloncolon","\\Eqqcolon");M("\\colonminus","\\coloneq");M("\\coloncolonminus","\\Coloneq");M("\\minuscolon","\\eqcolon");M("\\minuscoloncolon","\\Eqcolon");M("\\coloncolonapprox","\\Colonapprox");M("\\coloncolonsim","\\Colonsim");M("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");M("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");M("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");M("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");M("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");M("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");M("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");M("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");M("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");M("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");M("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");M("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");M("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");M("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");M("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");M("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");M("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");M("\\nleqq","\\html@mathml{\\@nleqq}{≰}");M("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");M("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");M("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");M("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");M("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");M("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");M("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");M("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");M("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");M("\\imath","\\html@mathml{\\@imath}{ı}");M("\\jmath","\\html@mathml{\\@jmath}{ȷ}");M("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");M("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");M("⟦","\\llbracket");M("⟧","\\rrbracket");M("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");M("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");M("↤","\\mapsfrom");M("\\mapsfrom","\\html@mathml{\\mathrel{\\mathreflectbox{\\mapsto}}}{\\mathrel{\\char`↤}}");M("⦃","\\lBrace");M("⦄","\\rBrace");M("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");M("⦵","\\minuso");M("\\darr","\\downarrow");M("\\dArr","\\Downarrow");M("\\Darr","\\Downarrow");M("\\lang","\\langle");M("\\rang","\\rangle");M("\\uarr","\\uparrow");M("\\uArr","\\Uparrow");M("\\Uarr","\\Uparrow");M("\\N","\\mathbb{N}");M("\\R","\\mathbb{R}");M("\\Z","\\mathbb{Z}");M("\\alef","\\aleph");M("\\alefsym","\\aleph");M("\\Alpha","\\mathrm{A}");M("\\Beta","\\mathrm{B}");M("\\bull","\\bullet");M("\\Chi","\\mathrm{X}");M("\\clubs","\\clubsuit");M("\\cnums","\\mathbb{C}");M("\\Complex","\\mathbb{C}");M("\\Dagger","\\ddagger");M("\\diamonds","\\diamondsuit");M("\\empty","\\emptyset");M("\\Epsilon","\\mathrm{E}");M("\\Eta","\\mathrm{H}");M("\\exist","\\exists");M("\\harr","\\leftrightarrow");M("\\hArr","\\Leftrightarrow");M("\\Harr","\\Leftrightarrow");M("\\hearts","\\heartsuit");M("\\image","\\Im");M("\\infin","\\infty");M("\\Iota","\\mathrm{I}");M("\\isin","\\in");M("\\Kappa","\\mathrm{K}");M("\\larr","\\leftarrow");M("\\lArr","\\Leftarrow");M("\\Larr","\\Leftarrow");M("\\lrarr","\\leftrightarrow");M("\\lrArr","\\Leftrightarrow");M("\\Lrarr","\\Leftrightarrow");M("\\Mu","\\mathrm{M}");M("\\natnums","\\mathbb{N}");M("\\Nu","\\mathrm{N}");M("\\Omicron","\\mathrm{O}");M("\\plusmn","\\pm");M("\\rarr","\\rightarrow");M("\\rArr","\\Rightarrow");M("\\Rarr","\\Rightarrow");M("\\real","\\Re");M("\\reals","\\mathbb{R}");M("\\Reals","\\mathbb{R}");M("\\Rho","\\mathrm{P}");M("\\sdot","\\cdot");M("\\sect","\\S");M("\\spades","\\spadesuit");M("\\sub","\\subset");M("\\sube","\\subseteq");M("\\supe","\\supseteq");M("\\Tau","\\mathrm{T}");M("\\thetasym","\\vartheta");M("\\weierp","\\wp");M("\\Zeta","\\mathrm{Z}");M("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");M("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");M("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");M("\\bra","\\mathinner{\\langle{#1}|}");M("\\ket","\\mathinner{|{#1}\\rangle}");M("\\braket","\\mathinner{\\langle{#1}\\rangle}");M("\\Bra","\\left\\langle#1\\right|");M("\\Ket","\\left|#1\\right\\rangle");var Ld=r=>e=>{var t=e.consumeArg().tokens,n=e.consumeArg().tokens,i=e.consumeArg().tokens,s=e.consumeArg().tokens,a=e.macros.get("|"),o=e.macros.get("\\|");e.macros.beginGroup();var l=u=>d=>{r&&(d.macros.set("|",a),i.length&&d.macros.set("\\|",o));var p=u;if(!u&&i.length){var x=d.future();x.text==="|"&&(d.popToken(),p=!0)}return{tokens:p?i:n,numArgs:0}};e.macros.set("|",l(!1)),i.length&&e.macros.set("\\|",l(!0));var c=e.consumeArg().tokens,h=e.expandTokens([...s,...c,...t]);return e.macros.endGroup(),{tokens:h.reverse(),numArgs:0}};M("\\bra@ket",Ld(!1));M("\\bra@set",Ld(!0));M("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");M("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");M("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");M("\\angln","{\\angl n}");M("\\blue","\\textcolor{##6495ed}{#1}");M("\\orange","\\textcolor{##ffa500}{#1}");M("\\pink","\\textcolor{##ff00af}{#1}");M("\\red","\\textcolor{##df0030}{#1}");M("\\green","\\textcolor{##28ae7b}{#1}");M("\\gray","\\textcolor{gray}{#1}");M("\\purple","\\textcolor{##9d38bd}{#1}");M("\\blueA","\\textcolor{##ccfaff}{#1}");M("\\blueB","\\textcolor{##80f6ff}{#1}");M("\\blueC","\\textcolor{##63d9ea}{#1}");M("\\blueD","\\textcolor{##11accd}{#1}");M("\\blueE","\\textcolor{##0c7f99}{#1}");M("\\tealA","\\textcolor{##94fff5}{#1}");M("\\tealB","\\textcolor{##26edd5}{#1}");M("\\tealC","\\textcolor{##01d1c1}{#1}");M("\\tealD","\\textcolor{##01a995}{#1}");M("\\tealE","\\textcolor{##208170}{#1}");M("\\greenA","\\textcolor{##b6ffb0}{#1}");M("\\greenB","\\textcolor{##8af281}{#1}");M("\\greenC","\\textcolor{##74cf70}{#1}");M("\\greenD","\\textcolor{##1fab54}{#1}");M("\\greenE","\\textcolor{##0d923f}{#1}");M("\\goldA","\\textcolor{##ffd0a9}{#1}");M("\\goldB","\\textcolor{##ffbb71}{#1}");M("\\goldC","\\textcolor{##ff9c39}{#1}");M("\\goldD","\\textcolor{##e07d10}{#1}");M("\\goldE","\\textcolor{##a75a05}{#1}");M("\\redA","\\textcolor{##fca9a9}{#1}");M("\\redB","\\textcolor{##ff8482}{#1}");M("\\redC","\\textcolor{##f9685d}{#1}");M("\\redD","\\textcolor{##e84d39}{#1}");M("\\redE","\\textcolor{##bc2612}{#1}");M("\\maroonA","\\textcolor{##ffbde0}{#1}");M("\\maroonB","\\textcolor{##ff92c6}{#1}");M("\\maroonC","\\textcolor{##ed5fa6}{#1}");M("\\maroonD","\\textcolor{##ca337c}{#1}");M("\\maroonE","\\textcolor{##9e034e}{#1}");M("\\purpleA","\\textcolor{##ddd7ff}{#1}");M("\\purpleB","\\textcolor{##c6b9fc}{#1}");M("\\purpleC","\\textcolor{##aa87ff}{#1}");M("\\purpleD","\\textcolor{##7854ab}{#1}");M("\\purpleE","\\textcolor{##543b78}{#1}");M("\\mintA","\\textcolor{##f5f9e8}{#1}");M("\\mintB","\\textcolor{##edf2df}{#1}");M("\\mintC","\\textcolor{##e0e5cc}{#1}");M("\\grayA","\\textcolor{##f6f7f7}{#1}");M("\\grayB","\\textcolor{##f0f1f2}{#1}");M("\\grayC","\\textcolor{##e3e5e6}{#1}");M("\\grayD","\\textcolor{##d6d8da}{#1}");M("\\grayE","\\textcolor{##babec2}{#1}");M("\\grayF","\\textcolor{##888d93}{#1}");M("\\grayG","\\textcolor{##626569}{#1}");M("\\grayH","\\textcolor{##3b3e40}{#1}");M("\\grayI","\\textcolor{##21242c}{#1}");M("\\kaBlue","\\textcolor{##314453}{#1}");M("\\kaGreen","\\textcolor{##71B307}{#1}");var Pd={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class Xx{constructor(e,t,n){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=t,this.expansionCount=0,this.feed(e),this.macros=new Vx(Wx,t.macros),this.mode=n,this.stack=[]}feed(e){this.lexer=new Xh(e,this.settings)}switchMode(e){this.mode=e}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(e){this.stack.push(e)}pushTokens(e){this.stack.push(...e)}scanArgument(e){var t,n,i;if(e){if(this.consumeSpaces(),this.future().text!=="[")return null;t=this.popToken();var s=this.consumeArg(["]"]);i=s.tokens,n=s.end}else{var a=this.consumeArg();i=a.tokens,t=a.start,n=a.end}return this.pushToken(new Mn("EOF",n.loc)),this.pushTokens(i),new Mn("",vn.range(t,n))}consumeSpaces(){for(;;){var e=this.future();if(e.text===" ")this.stack.pop();else break}}consumeArg(e){var t=[],n=e&&e.length>0;n||this.consumeSpaces();var i=this.future(),s,a=0,o=0;do{if(s=this.popToken(),t.push(s),s.text==="{")++a;else if(s.text==="}"){if(--a,a===-1)throw new oe("Extra }",s)}else if(s.text==="EOF")throw new oe("Unexpected end of input in a macro argument, expected '"+(e&&n?e[o]:"}")+"'",s);if(e&&n)if((a===0||a===1&&e[o]==="{")&&s.text===e[o]){if(++o,o===e.length){t.splice(-o,o);break}}else o=0}while(a!==0||n);return i.text==="{"&&t[t.length-1].text==="}"&&(t.pop(),t.shift()),t.reverse(),{tokens:t,start:i,end:s}}consumeArgs(e,t){if(t){if(t.length!==e+1)throw new oe("The length of delimiters doesn't match the number of args!");for(var n=t[0],i=0;i<n.length;i++){var s=this.popToken();if(n[i]!==s.text)throw new oe("Use of the macro doesn't match its definition",s)}}for(var a=[],o=0;o<e;o++)a.push(this.consumeArg(t&&t[o+1]).tokens);return a}countExpansion(e){if(this.expansionCount+=e,this.expansionCount>this.settings.maxExpand)throw new oe("Too many expansions: infinite loop or need to increase maxExpand setting")}expandOnce(e){var t=this.popToken(),n=t.text,i=t.noexpand?null:this._getExpansion(n);if(i==null||e&&i.unexpandable){if(e&&i==null&&n[0]==="\\"&&!this.isDefined(n))throw new oe("Undefined control sequence: "+n);return this.pushToken(t),!1}this.countExpansion(1);var s=i.tokens,a=this.consumeArgs(i.numArgs,i.delimiters);if(i.numArgs){s=s.slice();for(var o=s.length-1;o>=0;--o){var l=s[o];if(l.text==="#"){if(o===0)throw new oe("Incomplete placeholder at end of macro body",l);if(l=s[--o],l.text==="#")s.splice(o+1,1);else if(/^[1-9]$/.test(l.text))s.splice(o,2,...a[+l.text-1]);else throw new oe("Not a valid argument number",l)}}}return this.pushTokens(s),s.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var e=this.stack.pop();return e.treatAsRelax&&(e.text="\\relax"),e}}expandMacro(e){return this.macros.has(e)?this.expandTokens([new Mn(e)]):void 0}expandTokens(e){var t=[],n=this.stack.length;for(this.pushTokens(e);this.stack.length>n;)if(this.expandOnce(!0)===!1){var i=this.stack.pop();i.treatAsRelax&&(i.noexpand=!1,i.treatAsRelax=!1),t.push(i)}return this.countExpansion(t.length),t}expandMacroAsText(e){var t=this.expandMacro(e);return t&&t.map(n=>n.text).join("")}_getExpansion(e){var t=this.macros.get(e);if(t==null)return t;if(e.length===1){var n=this.lexer.catcodes[e];if(n!=null&&n!==13)return}var i=typeof t=="function"?t(this):t;if(typeof i=="string"){var s=0;if(i.includes("#"))for(var a=i.replace(/##/g,"");a.includes("#"+(s+1));)++s;for(var o=new Xh(i,this.settings),l=[],c=o.lex();c.text!=="EOF";)l.push(c),c=o.lex();l.reverse();var h={tokens:l,numArgs:s};return h}return i}isDefined(e){return this.macros.has(e)||Object.prototype.hasOwnProperty.call(Oi,e)||Object.prototype.hasOwnProperty.call(Tt.math,e)||Object.prototype.hasOwnProperty.call(Tt.text,e)||Object.prototype.hasOwnProperty.call(Pd,e)}isExpandable(e){var t=this.macros.get(e);return t!=null?typeof t=="string"||typeof t=="function"||!t.unexpandable:Object.prototype.hasOwnProperty.call(Oi,e)&&!Oi[e].primitive}}var Kh=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,ma=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),Jo={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},$h={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class ja{constructor(e,t){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new Xx(e,t,this.mode),this.settings=t,this.leftrightDepth=0,this.nextToken=null}expect(e,t){if(t===void 0&&(t=!0),this.fetch().text!==e)throw new oe("Expected '"+e+"', got '"+this.fetch().text+"'",this.fetch());t&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(e){this.mode=e,this.gullet.switchMode(e)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var e=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),e}finally{this.gullet.endGroups()}}subparse(e){var t=this.nextToken;this.consume(),this.gullet.pushToken(new Mn("}")),this.gullet.pushTokens(e);var n=this.parseExpression(!1);return this.expect("}"),this.nextToken=t,n}parseExpression(e,t){for(var n=[];;){this.mode==="math"&&this.consumeSpaces();var i=this.fetch();if(ja.endOfExpression.has(i.text)||t&&i.text===t||e&&Oi[i.text]&&Oi[i.text].infix)break;var s=this.parseAtom(t);if(s){if(s.type==="internal")continue}else break;n.push(s)}return this.mode==="text"&&this.formLigatures(n),this.handleInfixNodes(n)}handleInfixNodes(e){for(var t=-1,n,i=0;i<e.length;i++){var s=e[i];if(s.type==="infix"){if(t!==-1)throw new oe("only one infix operator per group",s.token);t=i,n=s.replaceWith}}if(t!==-1&&n){var a,o,l=e.slice(0,t),c=e.slice(t+1);l.length===1&&l[0].type==="ordgroup"?a=l[0]:a={type:"ordgroup",mode:this.mode,body:l},c.length===1&&c[0].type==="ordgroup"?o=c[0]:o={type:"ordgroup",mode:this.mode,body:c};var h;return n==="\\\\abovefrac"?h=this.callFunction(n,[a,e[t],o],[]):h=this.callFunction(n,[a,o],[]),[h]}else return e}handleSupSubscript(e){var t=this.fetch(),n=t.text;this.consume(),this.consumeSpaces();var i;do{var s;i=this.parseGroup(e)}while(((s=i)==null?void 0:s.type)==="internal");if(!i)throw new oe("Expected group after '"+n+"'",t);return i}formatUnsupportedCmd(e){for(var t=[],n=0;n<e.length;n++)t.push({type:"textord",mode:"text",text:e[n]});var i={type:"text",mode:this.mode,body:t},s={type:"color",mode:this.mode,color:this.settings.errorColor,body:[i]};return s}parseAtom(e){var t=this.parseGroup("atom",e);if((t==null?void 0:t.type)==="internal"||this.mode==="text")return t;for(var n,i;;){this.consumeSpaces();var s=this.fetch();if(s.text==="\\limits"||s.text==="\\nolimits"){if(t&&t.type==="op")t.limits=s.text==="\\limits",t.alwaysHandleSupSub=!0;else if(t&&t.type==="operatorname")t.alwaysHandleSupSub&&(t.limits=s.text==="\\limits");else throw new oe("Limit controls must follow a math operator",s);this.consume()}else if(s.text==="^"){if(n)throw new oe("Double superscript",s);n=this.handleSupSubscript("superscript")}else if(s.text==="_"){if(i)throw new oe("Double subscript",s);i=this.handleSupSubscript("subscript")}else if(s.text==="'"){if(n)throw new oe("Double superscript",s);var a={type:"textord",mode:this.mode,text:"\\prime"},o=[a];for(this.consume();this.fetch().text==="'";)o.push(a),this.consume();this.fetch().text==="^"&&o.push(this.handleSupSubscript("superscript")),n={type:"ordgroup",mode:this.mode,body:o}}else if(ma[s.text]){var l=Kh.test(s.text),c=[];for(c.push(new Mn(ma[s.text])),this.consume();;){var h=this.fetch().text;if(!ma[h]||Kh.test(h)!==l)break;c.unshift(new Mn(ma[h])),this.consume()}var u=this.subparse(c);l?i={type:"ordgroup",mode:"math",body:u}:n={type:"ordgroup",mode:"math",body:u}}else break}return n&&i?{type:"supsub",mode:this.mode,base:t,sup:n,sub:i}:n?{type:"supsub",mode:this.mode,base:t,sup:n}:i?{type:"supsub",mode:this.mode,base:t,sub:i}:t}parseFunction(e,t){var n=this.fetch(),i=n.text,s=Oi[i];if(!s)return null;if(this.consume(),t&&t!=="atom"&&!s.allowedInArgument)throw new oe("Got function '"+i+"' with no arguments"+(t?" as "+t:""),n);if(this.mode==="text"&&!s.allowedInText)throw new oe("Can't use function '"+i+"' in text mode",n);if(this.mode==="math"&&s.allowedInMath===!1)throw new oe("Can't use function '"+i+"' in math mode",n);var a=this.parseArguments(i,s),o=a.args,l=a.optArgs;return this.callFunction(i,o,l,n,e)}callFunction(e,t,n,i,s){var a={funcName:e,parser:this,token:i,breakOnTokenText:s},o=Oi[e];if(o&&o.handler)return o.handler(a,t,n);throw new oe("No function handler for "+e)}parseArguments(e,t){var n,i=(n=t.numOptionalArgs)!=null?n:0,s=t.numArgs+i;if(s===0)return{args:[],optArgs:[]};for(var a=[],o=[],l=0;l<s;l++){var c,h=(c=t.argTypes)==null?void 0:c[l],u=l<i;("primitive"in t&&t.primitive&&h==null||t.type==="sqrt"&&l===1&&o[0]==null)&&(h="primitive");var d=this.parseGroupOfType("argument to '"+e+"'",h,u);if(u)o.push(d);else if(d!=null)a.push(d);else throw new oe("Null argument, please report this as a bug")}return{args:a,optArgs:o}}parseGroupOfType(e,t,n){switch(t){case"color":return this.parseColorGroup(n);case"size":return this.parseSizeGroup(n);case"url":return this.parseUrlGroup(n);case"math":case"text":return this.parseArgumentGroup(n,t);case"hbox":{var i=this.parseArgumentGroup(n,"text");return i!=null?{type:"styling",mode:i.mode,body:[i],style:"text",resetFont:!0}:null}case"raw":{this.gullet.consumeSpaces();var s=this.gullet.lexer.catcodes["%"];this.gullet.lexer.setCatcode("%",12);var a=this.parseStringGroup(n);return this.gullet.lexer.setCatcode("%",s),a!=null?{type:"raw",mode:"text",string:a.text}:null}case"primitive":{if(n)throw new oe("A primitive argument cannot be optional");var o=this.parseGroup(e);if(o==null)throw new oe("Expected group as "+e,this.fetch());return o}case"original":case void 0:return this.parseArgumentGroup(n);default:throw new oe("Unknown group type as "+e,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(e){var t=this.gullet.scanArgument(e);if(t==null)return null;for(var n="",i;(i=this.fetch()).text!=="EOF";)n+=i.text,this.consume();return this.consume(),t.text=n,t}parseRegexGroup(e,t){for(var n=this.fetch(),i=n,s="",a;(a=this.fetch()).text!=="EOF"&&e.test(s+a.text);)i=a,s+=i.text,this.consume();if(s==="")throw new oe("Invalid "+t+": '"+n.text+"'",n);return n.range(i,s)}parseColorGroup(e){var t=this.parseStringGroup(e);if(t==null)return null;var n=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);if(!n)throw new oe("Invalid color: '"+t.text+"'",t);var i=n[0];return/^[0-9a-f]{6}$/i.test(i)&&(i="#"+i),{type:"color-token",mode:this.mode,color:i}}parseSizeGroup(e){var t,n=!1;if(this.gullet.consumeSpaces(),!e&&this.gullet.future().text!=="{"?t=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):t=this.parseStringGroup(e),!t)return null;!e&&t.text.length===0&&(t.text="0pt",n=!0);var i=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);if(!i)throw new oe("Invalid size: '"+t.text+"'",t);var s={number:+(i[1]+i[2]),unit:i[3]};if(!Wu(s))throw new oe("Invalid unit: '"+s.unit+"'",t);return{type:"size",mode:this.mode,value:s,isBlank:n}}parseUrlGroup(e){var t=this.gullet.lexer.catcodes["%"],n=this.gullet.lexer.catcodes["~"];this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var i=this.parseStringGroup(e);if(this.gullet.lexer.setCatcode("%",t),this.gullet.lexer.setCatcode("~",n),i==null)return null;var s=i.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:s}}parseArgumentGroup(e,t){var n=this.gullet.scanArgument(e);if(n==null)return null;var i=this.mode;t&&this.switchMode(t),this.gullet.beginGroup();var s=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var a={type:"ordgroup",mode:this.mode,loc:n.loc,body:s};return t&&this.switchMode(i),a}parseGroup(e,t){var n=this.fetch(),i=n.text,s;if(i==="{"||i==="\\begingroup"){this.consume();var a=i==="{"?"}":"\\endgroup";this.gullet.beginGroup();var o=this.parseExpression(!1,a),l=this.fetch();this.expect(a),this.gullet.endGroup(),s={type:"ordgroup",mode:this.mode,loc:vn.range(n,l),body:o,semisimple:i==="\\begingroup"||void 0}}else if(s=this.parseFunction(t,e)||this.parseSymbol(),s==null&&i[0]==="\\"&&!Object.prototype.hasOwnProperty.call(Pd,i)){if(this.settings.throwOnError)throw new oe("Undefined control sequence: "+i,n);s=this.formatUnsupportedCmd(i),this.consume()}return s}formLigatures(e){for(var t=e.length-1,n=0;n<t;++n){var i=e[n];if(i.type==="textord"){var s=i.text,a=e[n+1];if(!(!a||a.type!=="textord")){if(s==="-"&&a.text==="-"){var o=e[n+2];n+1<t&&o&&o.type==="textord"&&o.text==="-"?(e.splice(n,3,{type:"textord",mode:"text",loc:vn.range(i,o),text:"---"}),t-=2):(e.splice(n,2,{type:"textord",mode:"text",loc:vn.range(i,a),text:"--"}),t-=1)}(s==="'"||s==="`")&&a.text===s&&(e.splice(n,2,{type:"textord",mode:"text",loc:vn.range(i,a),text:s+s}),t-=1)}}}}parseSymbol(){var e=this.fetch(),t=e.text;if(/^\\verb[^a-zA-Z]/.test(t)){this.consume();var n=t.slice(5),i=n.charAt(0)==="*";if(i&&(n=n.slice(1)),n.length<2||n.charAt(0)!==n.slice(-1))throw new oe(`\\verb assertion failed --
                    please report what input caused this bug`);return n=n.slice(1,-1),{type:"verb",mode:"text",body:n,star:i}}Object.prototype.hasOwnProperty.call($h,t[0])&&!Tt[this.mode][t[0]]&&(this.settings.strict&&this.mode==="math"&&yn({strict:this.settings.strict,errorCode:"unicodeTextInMathMode",errorMsg:'Accented Unicode text character "'+t[0]+'" used in math mode',report:!0,token:e}),t=$h[t[0]]+t.slice(1));var s=Hx.exec(t);s&&(t=t.substring(0,s.index),t==="i"?t="ı":t==="j"&&(t="ȷ"));var a;if(Tt[this.mode][t]){this.settings.strict&&this.mode==="math"&&_l.includes(t)&&yn({strict:this.settings.strict,errorCode:"unicodeTextInMathMode",errorMsg:'Latin-1/Unicode text character "'+t[0]+'" used in math mode',report:!0,token:e});var o=Tt[this.mode][t].group,l=vn.range(e),c;J3(o)?c={type:"atom",mode:this.mode,family:o,loc:l,text:t}:c={type:o,mode:this.mode,loc:l,text:t},a=c}else if(t.charCodeAt(0)>=128)this.settings.strict&&(Vu(t.charCodeAt(0))?this.mode==="math"&&yn({strict:this.settings.strict,errorCode:"unicodeTextInMathMode",errorMsg:'Unicode text character "'+t[0]+'" used in math mode',report:!0,token:e}):yn({strict:this.settings.strict,errorCode:"unknownSymbol",errorMsg:'Unrecognized Unicode character "'+t[0]+'"'+(" ("+t.charCodeAt(0)+")"),report:!0,token:e})),a={type:"textord",mode:"text",loc:vn.range(e),text:t};else return null;if(this.consume(),s)for(var h=0;h<s[0].length;h++){var u=s[0][h];if(!Jo[u])throw new oe("Unknown accent ' "+u+"'",e);var d=Jo[u][this.mode]||Jo[u].text;if(!d)throw new oe("Accent "+u+" unsupported in "+this.mode+" mode",e);a={type:"accent",mode:this.mode,loc:vn.range(e),label:d,isStretchy:!1,isShifty:!0,base:a}}return a}}ja.endOfExpression=new Set(["}","\\endgroup","\\end","\\right","&"]);var d0=function(e,t){if(!(typeof e=="string"||e instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var n=new ja(e,t);delete n.gullet.macros.current["\\df@tag"];var i=n.parse();if(delete n.gullet.macros.current["\\current@color"],delete n.gullet.macros.current["\\color"],n.gullet.macros.get("\\df@tag")){if(!t.displayMode)throw new oe("\\tag works only in display equations");i=[{type:"tag",mode:"text",body:i,tag:n.subparse([new Mn("\\df@tag")])}]}return i},Dd=function(e,t,n){t.textContent="";var i=f0(e,n).toNode();t.appendChild(i)};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&(typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),Dd=function(){throw new oe("KaTeX doesn't work in quirks mode.")});var Yx=function(e,t){var n=f0(e,t).toMarkup();return n},jx=function(e,t){var n=new Jl(t);return d0(e,n)},Nd=function(e,t,n){if(n.throwOnError||!(e instanceof oe))throw e;var i=ie(["katex-error"],[new wn(t)]);return i.setAttribute("title",e.toString()),i.setAttribute("style","color:"+n.errorColor),i},f0=function(e,t){var n=new Jl(t);try{var i=d0(e,n);return G3(i,e,n)}catch(s){return Nd(s,e,n)}},Kx=function(e,t){var n=new Jl(t);try{var i=d0(e,n);return V3(i,n)}catch(s){return Nd(s,e,n)}},$x="0.19.1",Zx={Span:is,Anchor:Fa,SymbolNode:wn,SvgNode:bi,PathNode:Gi,LineNode:bl},tr={version:$x,render:Dd,renderToString:Yx,ParseError:oe,SETTINGS_SCHEMA:vl,__parse:jx,__renderToDomTree:f0,__renderToHTMLTree:Kx,__setFontMetrics:M3,__defineSymbol:f,__defineFunction:ye,__defineMacro:M,__domTree:Zx};class Jx{constructor(){this.isOpen=!1,this.activeTab="concepts",this.iouThreshold=82,this.createDom(),this.bindEvents(),this.updateMetricCalculation()}createDom(){this.modal=document.createElement("div"),this.modal.id="education-modal-overlay",this.modal.className="edu-modal-overlay",this.modal.style.display="none",this.modal.innerHTML=`
      <div class="edu-glass-container">
        <!-- Header -->
        <div class="edu-header">
          <div class="edu-title-group">
            <span class="edu-badge">ACADEMIC DEEP LEARNING SUITE // UNIVERSITY PRESENTATION</span>
            <h1 class="edu-title">IMAGE SEGMENTATION ARCHITECTURES & MATHEMATICS</h1>
          </div>
          <button id="btn-close-edu" class="btn-close-glass" title="Close Panel">&times;</button>
        </div>

        <!-- Navigation Tabs -->
        <div class="edu-tabs-bar">
          <button class="edu-tab-btn active" data-tab="concepts">
            <span class="tab-num">01</span>
            <span>SEGMENTATION TYPES & USES</span>
          </button>
          <button class="edu-tab-btn" data-tab="unet">
            <span class="tab-num">02</span>
            <span>U-NET & PIPELINE</span>
          </button>
          <button class="edu-tab-btn" data-tab="compare">
            <span class="tab-num">03</span>
            <span>ARCHITECTURE BENCHMARK</span>
          </button>
          <button class="edu-tab-btn" data-tab="metrics">
            <span class="tab-num">04</span>
            <span>EVALUATION: IoU & DICE</span>
          </button>
          <button class="edu-tab-btn" data-tab="failures">
            <span class="tab-num">05</span>
            <span>FAILURE MODES & ERRORS</span>
          </button>
        </div>

        <!-- Tab Content Panes -->
        <div class="edu-content-area">
          
          <!-- TAB 1: SEGMENTATION TYPES & REAL-WORLD USES -->
          <div id="tab-concepts" class="edu-pane active">
            <div class="concepts-grid">
              
              <!-- Semantic Segmentation -->
              <div class="concept-card">
                <div class="concept-badge sem">CATEGORY 01</div>
                <h2 class="concept-title">SEMANTIC SEGMENTATION</h2>
                <div class="concept-question">"WHAT category is each pixel?"</div>
                <div class="concept-body">
                  <div class="simple-def-box">
                    <span class="simple-def-tag">💡 SIMPLE DEFINITION:</span>
                    <div class="simple-def-desc">
                      Colors every pixel by its category. All objects of the same kind share one single color (all cars = Yellow, all people = Green, all road = Grey). It does <strong>not</strong> separate individual cars from each other.
                    </div>
                  </div>
                  <div class="game-world-box">
                    <span class="game-world-tag">🎮 IN OUR GAME WORLD:</span>
                    <div class="game-world-desc">
                      When looking at our street intersection, the AI paints all drivable asphalt in dark grey, building walls in blue, and every vehicle on the road in uniform yellow. It sees our Yellow Taxi and Black Police Cruiser both as simply <em>"Vehicle pixels"</em> without distinguishing between them.
                    </div>
                  </div>
                  <div class="concept-section">
                    <span class="concept-hdr">REAL-WORLD USES:</span>
                    <ul>
                      <li><strong>Self-Driving Cars (Tesla / Waymo):</strong> Finding the exact drivable road asphalt vs. sidewalks and curbs.</li>
                      <li><strong>Medical Diagnosis:</strong> Isolating liver, heart, or lung tissue in CT and MRI scans.</li>
                      <li><strong>Satellite Earth Observation:</strong> Monitoring deforestation, flood zones, and urban sprawl.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Instance Segmentation -->
              <div class="concept-card">
                <div class="concept-badge inst">CATEGORY 02</div>
                <h2 class="concept-title">INSTANCE SEGMENTATION</h2>
                <div class="concept-question">"WHICH individual object is this?"</div>
                <div class="concept-body">
                  <div class="simple-def-box">
                    <span class="simple-def-tag">💡 SIMPLE DEFINITION:</span>
                    <div class="simple-def-desc">
                      Detects and gives a <strong>unique color mask</strong> to every separate countable object. Car #1 is Blue, Car #2 is Orange, Pedestrian #1 is Pink, Pedestrian #2 is Cyan.
                    </div>
                  </div>
                  <div class="game-world-box">
                    <span class="game-world-tag">🎮 IN OUR GAME WORLD:</span>
                    <div class="game-world-desc">
                      When the <strong>Yellow Taxi (<code>car_taxi.glb</code>)</strong> drives side-by-side with the <strong>Black Police Cruiser (<code>car_police.glb</code>)</strong>, Instance Segmentation gives each separate car its own unique color mask: Taxi = <code>Car [ID:10]</code> (Blue), Police Cruiser = <code>Car [ID:11]</code> (Orange), and each walking civilian gets their own unique person ID!
                    </div>
                  </div>
                  <div class="concept-section">
                    <span class="concept-hdr">REAL-WORLD USES:</span>
                    <ul>
                      <li><strong>Warehouse Automation:</strong> Amazon robots identifying and picking up a specific parcel from a crowded bin.</li>
                      <li><strong>Traffic Monitoring:</strong> Counting exact vehicle quantities and measuring individual lane speeds.</li>
                      <li><strong>Autonomous Overtaking:</strong> Tracking the exact distance and silhouette of a specific vehicle ahead.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Panoptic Segmentation -->
              <div class="concept-card">
                <div class="concept-badge pan">CATEGORY 03</div>
                <h2 class="concept-title">PANOPTIC SEGMENTATION</h2>
                <div class="concept-question">"The complete visual scene inventory"</div>
                <div class="concept-body">
                  <div class="simple-def-box">
                    <span class="simple-def-tag">💡 SIMPLE DEFINITION:</span>
                    <div class="simple-def-desc">
                      Combines <strong>Semantic</strong> (continuous background "stuff") + <strong>Instance</strong> (countable "things") into one complete AI model. It paints roads and buildings while simultaneously tracking each separate car and pedestrian!
                    </div>
                  </div>
                  <div class="game-world-box">
                    <span class="game-world-tag">🎮 IN OUR GAME WORLD:</span>
                    <div class="game-world-desc">
                      The complete master AI scan: it maps the continuous road asphalt and commercial buildings as background "stuff", while cleanly isolating each moving sports car, walking civilian, and hostile mech as distinct countable "things"!
                    </div>
                  </div>
                  <div class="concept-section">
                    <span class="concept-hdr">REAL-WORLD USES:</span>
                    <ul>
                      <li><strong>Full Autonomous Driving (FSD):</strong> Knowing where the continuous road is while tracking every separate pedestrian crossing.</li>
                      <li><strong>Augmented Reality (Apple Vision, Meta Quest):</strong> Placing virtual 3D objects correctly behind real furniture and humans.</li>
                      <li><strong>Smart Cities:</strong> Comprehensive real-time urban environmental awareness.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Tactical Threat Scan -->
              <div class="concept-card">
                <div class="concept-badge threat">CATEGORY 04</div>
                <h2 class="concept-title">TACTICAL THREAT SCAN</h2>
                <div class="concept-question">"Is there a high-priority hazard or anomaly?"</div>
                <div class="concept-body">
                  <div class="simple-def-box">
                    <span class="simple-def-tag">💡 SIMPLE DEFINITION:</span>
                    <div class="simple-def-desc">
                      Isolates high-priority targets and anomalies from neutral surroundings, highlighting their silhouettes in vivid glowing infrared crimson while desaturating passive background pixels into dim monochrome.
                    </div>
                  </div>
                  <div class="game-world-box">
                    <span class="game-world-tag">🎮 IN OUR GAME WORLD:</span>
                    <div class="game-world-desc">
                      Press <strong>Mode 5 [Tactical Threat Scan]</strong>: the AI instantly highlights the <strong>Heavy Titan Mech, Bipedal Combat Walker, and Aerial Drone</strong> in pulsing red thermal silhouettes, while rendering peaceful civilian pedestrians and road asphalt in neutral grey!
                    </div>
                  </div>
                  <div class="concept-section">
                    <span class="concept-hdr">REAL-WORLD USES:</span>
                    <ul>
                      <li><strong>Defense & Security:</strong> FLIR thermal cameras detecting intruders, drones, and moving military vehicles in pitch darkness.</li>
                      <li><strong>Oncology AI:</strong> Instantly highlighting cancerous tumors or lesions against healthy tissue cells in histology scans.</li>
                      <li><strong>Industrial Quality Control:</strong> Automatically spotting hairline microchip fractures on manufacturing lines.</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <!-- TAB 2: U-NET ARCHITECTURE, SKIP CONNECTIONS, 3x3 KERNELS & DOWNSAMPLING -->
          <div id="tab-unet" class="edu-pane">
            <div class="unet-presentation-layout">
              
              <!-- U-Net SVG Visual Pipeline -->
              <div class="unet-diagram-col">
                <div class="diagram-title-bar">
                  <span>U-NET MULTI-SCALE CONTRACTING & EXPANDING PIPELINE</span>
                  <span class="tensor-dims-tag">INPUT: 256 &times; 256 &times; 3 &rarr; OUTPUT: 256 &times; 256 &times; K</span>
                </div>
                
                <div class="unet-svg-wrapper">
                  <svg viewBox="0 0 860 380" class="unet-svg">
                    <defs>
                      <linearGradient id="encGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#00f0ff" />
                        <stop offset="100%" stop-color="#0066cc" />
                      </linearGradient>
                      <linearGradient id="decGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#00ff88" />
                        <stop offset="100%" stop-color="#009944" />
                      </linearGradient>
                      <linearGradient id="bottleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#ff0077" />
                        <stop offset="100%" stop-color="#aa0044" />
                      </linearGradient>
                    </defs>

                    <!-- Skip Connections (Animated dashed lines with flowing particles) -->
                    <g class="skip-connections">
                      <path d="M 140 50 L 720 50" class="skip-line" />
                      <path d="M 200 110 L 660 110" class="skip-line" />
                      <path d="M 260 170 L 600 170" class="skip-line" />
                      <path d="M 320 230 L 540 230" class="skip-line" />
                      
                      <!-- Flowing particle markers -->
                      <circle cx="430" cy="50" r="4" class="skip-particle" />
                      <circle cx="430" cy="110" r="4" class="skip-particle" />
                      <circle cx="430" cy="170" r="4" class="skip-particle" />
                      <circle cx="430" cy="230" r="4" class="skip-particle" />
                    </g>

                    <!-- Encoder Stages (Downsampling) -->
                    <rect x="20" y="30" width="30" height="220" class="tensor-block" fill="#445566" />
                    <text x="35" y="270" class="svg-label">Input 256²</text>

                    <!-- Enc 1 (256x256, 64) -->
                    <rect x="80" y="35" width="40" height="200" class="tensor-block enc-block" fill="url(#encGrad)" />
                    <text x="100" y="255" class="svg-label">256² (64)</text>

                    <!-- Enc 2 (128x128, 128) -->
                    <rect x="150" y="75" width="40" height="150" class="tensor-block enc-block" fill="url(#encGrad)" />
                    <text x="170" y="245" class="svg-label">128² (128)</text>

                    <!-- Enc 3 (64x64, 256) -->
                    <rect x="220" y="115" width="40" height="100" class="tensor-block enc-block" fill="url(#encGrad)" />
                    <text x="240" y="235" class="svg-label">64² (256)</text>

                    <!-- Enc 4 (32x32, 512) -->
                    <rect x="290" y="155" width="40" height="60" class="tensor-block enc-block" fill="url(#encGrad)" />
                    <text x="310" y="235" class="svg-label">32² (512)</text>

                    <!-- Bottleneck (16x16, 1024) -->
                    <rect x="390" y="200" width="80" height="40" class="tensor-block bottle-block" fill="url(#bottleGrad)" />
                    <text x="430" y="260" class="svg-label font-bold">Bottleneck 8²-16² (1024)</text>

                    <!-- Decoder Stages (Upsampling) -->
                    <rect x="530" y="155" width="40" height="60" class="tensor-block dec-block" fill="url(#decGrad)" />
                    <text x="550" y="235" class="svg-label">32² (512)</text>

                    <rect x="600" y="115" width="40" height="100" class="tensor-block dec-block" fill="url(#decGrad)" />
                    <text x="620" y="235" class="svg-label">64² (256)</text>

                    <rect x="670" y="75" width="40" height="150" class="tensor-block dec-block" fill="url(#decGrad)" />
                    <text x="690" y="245" class="svg-label">128² (128)</text>

                    <rect x="740" y="35" width="40" height="200" class="tensor-block dec-block" fill="url(#decGrad)" />
                    <text x="760" y="255" class="svg-label">256² (64)</text>

                    <!-- Output Mask (256x256, K) -->
                    <rect x="810" y="30" width="30" height="220" class="tensor-block" fill="#f1b82d" />
                    <text x="825" y="270" class="svg-label">Mask 256²</text>

                    <!-- Downsample / Upsample Arrows -->
                    <path d="M 125 140 L 145 155" stroke="#00f0ff" stroke-width="2.5" />
                    <path d="M 195 160 L 215 175" stroke="#00f0ff" stroke-width="2.5" />
                    <path d="M 265 180 L 285 195" stroke="#00f0ff" stroke-width="2.5" />
                    <path d="M 335 200 L 385 220" stroke="#00f0ff" stroke-width="2.5" />

                    <path d="M 475 220 L 525 200" stroke="#00ff88" stroke-width="2.5" />
                    <path d="M 575 195 L 595 180" stroke="#00ff88" stroke-width="2.5" />
                    <path d="M 645 175 L 665 160" stroke="#00ff88" stroke-width="2.5" />
                    <path d="M 715 155 L 735 140" stroke="#00ff88" stroke-width="2.5" />
                  </svg>
                </div>

                <div class="legend-bar">
                  <span class="leg-item"><span class="leg-dot enc"></span>Encoder Conv + MaxPool (Downsample)</span>
                  <span class="leg-item"><span class="leg-dot dec"></span>Decoder Transposed Conv (Upsample)</span>
                  <span class="leg-item"><span class="leg-dot skip"></span>Skip Connection (Feature Concatenation)</span>
                  <span class="leg-item"><span class="leg-dot bottle"></span>Bottleneck (Dense Semantic Latent)</span>
                </div>
              </div>

              <!-- 4 In-Depth Educational Cards Covering the Core Mechanics -->
              <div class="pipeline-cards-grid">
                
                <!-- TOPIC 1: U-NET ARCHITECTURE -->
                <div class="edu-card">
                  <div class="arch-badge">CORE DEEP LEARNING ARCHITECTURE</div>
                  <h3 class="card-heading">1. U-NET ARCHITECTURE (ENCODER-DECODER CNN)</h3>
                  <div class="simple-def-box">
                    <span class="simple-def-tag">💡 SIMPLE DEFINITION:</span>
                    <div class="simple-def-desc">
                      A U-shaped neural network with two symmetric arms:
                      <strong>1. Encoder (Left Arm):</strong> Compresses the screen to learn <em>"WHAT is in the scene"</em> (car, person, road).
                      <strong>2. Decoder (Right Arm):</strong> Expands the resolution back up to draw <em>"WHERE each object is down to the exact pixel"</em>.
                    </div>
                  </div>
                  <div class="game-world-box">
                    <span class="game-world-tag">🎮 IN OUR GAME WORLD:</span>
                    <div class="game-world-desc">
                      When your player character walks across the crosswalk, U-Net takes the camera view and processes it through the U-curve. The bottleneck recognizes <em>"there is a pedestrian on the sidewalk and a sports car on the road"</em>, and the decoder paints the exact green pedestrian mask and yellow car mask in real time!
                    </div>
                  </div>
                  <ul class="bullet-list">
                    <li><strong>Contracting Path:</strong> 4 stages of repeated convolutions followed by $2 	imes 2$ Max-Pooling.</li>
                    <li><strong>Expanding Path:</strong> 4 stages of transposed convolutions ("deconv") that reconstruct pixel boundaries.</li>
                  </ul>
                </div>

                <!-- TOPIC 2: SKIP CONNECTIONS -->
                <div class="edu-card">
                  <div class="arch-badge">BOUNDARY RECONSTRUCTION HIGHWAYS</div>
                  <h3 class="card-heading">2. SKIP CONNECTIONS (THE HIGH-RESOLUTION BRIDGES)</h3>
                  <div class="simple-def-box">
                    <span class="simple-def-tag">💡 SIMPLE DEFINITION:</span>
                    <div class="simple-def-desc">
                      Direct horizontal "express bridges" that copy crisp, high-resolution feature maps from early encoder layers straight across to matching decoder layers, completely bypassing the bottleneck compression.
                    </div>
                  </div>
                  <div class="game-world-box">
                    <span class="game-world-tag">🎮 IN OUR GAME WORLD:</span>
                    <div class="game-world-desc">
                      Look at our city's <strong>thin metal streetlight poles, traffic light posts, and your player's fingers</strong>. Without skip connections, downsampling squashes a 3-pixel-wide metal pole down to 0 pixels—making it disappear into a blurry smear. Skip connections copy the raw sharp edges straight across, keeping the streetlight thin and crisp!
                    </div>
                  </div>
                  <div class="math-box">
                    ${tr.renderToString("x_{\\text{dec}}^{(l)} = \\mathcal{F}\\Big(\\big[\\, \\mathcal{U}(x_{\\text{dec}}^{(l+1)}), \\; x_{\\text{enc}}^{(l)} \\,\\big]\\Big)",{displayMode:!0,throwOnError:!1})}
                  </div>
                  <ul class="bullet-list">
                    <li><strong>Feature Concatenation:</strong> Channels are concatenated directly along the depth dimension ($C_{\\text{in}} = C_{\\text{dec}} + C_{\\text{enc}}$).</li>
                    <li><strong>Gradient Highway:</strong> Protects against vanishing gradients during backpropagation.</li>
                  </ul>
                </div>

                <!-- TOPIC 3: 3x3 CONVOLUTION KERNEL -->
                <div class="edu-card">
                  <div class="arch-badge">FEATURE DETECTION BUILDING BLOCK</div>
                  <h3 class="card-heading">3. 3&times;3 CONVOLUTION KERNEL (THE SLIDING FILTER)</h3>
                  <div class="simple-def-box">
                    <span class="simple-def-tag">💡 SIMPLE DEFINITION:</span>
                    <div class="simple-def-desc">
                      A tiny 3-by-3 pixel grid (9 numbers/weights) that slides across the image like a mini magnifying glass. At each position, it multiplies pixel values to detect local visual patterns: straight edges, sharp corners, colors, and textures.
                    </div>
                  </div>
                  <div class="game-world-box">
                    <span class="game-world-tag">🎮 IN OUR GAME WORLD:</span>
                    <div class="game-world-desc">
                      As the 3&times;3 kernel slides across our city's asphalt road, it detects the sharp color contrast between the dark road asphalt and the bright white stripes of the <strong>pedestrian zebra crossing</strong>, instantly signaling to the AI: <em>"Crosswalk lane marking detected here!"</em>.
                    </div>
                  </div>
                  <ul class="bullet-list">
                    <li><strong>Receptive Field Efficiency:</strong> Two stacked 3 &times; 3 convolutions have the exact same 5 &times; 5 receptive field as a large 5 &times; 5 kernel, but use <strong>28% fewer parameters</strong> (2 &times; 3&sup2; = 18 weights vs 5&sup2; = 25 weights)!</li>
                    <li><strong>Non-Linearity:</strong> Inserting a ReLU activation between the two 3 &times; 3 kernels allows the network to learn much richer, more complex urban shapes.</li>
                  </ul>
                </div>

                <!-- TOPIC 4: DOWNSAMPLING & DIMENSION FLOW -->
                <div class="edu-card">
                  <div class="arch-badge">MULTI-SCALE RESOLUTION TRANSITION</div>
                  <h3 class="card-heading">4. DOWNSAMPLING & DIMENSION FLOW</h3>
                  <div class="simple-def-box">
                    <span class="simple-def-tag">💡 SIMPLE DEFINITION:</span>
                    <div class="simple-def-desc">
                      The step-by-step process of shrinking the spatial image size by half (using 2 &times; 2 Max-Pooling with stride 2), while simultaneously doubling the number of feature channels (from 3 RGB colors up to 1024 deep features).
                    </div>
                  </div>
                  <div class="game-world-box">
                    <span class="game-world-tag">🎮 IN OUR GAME WORLD:</span>
                    <div class="game-world-desc">
                      <strong>&bull; Stage 1 (256 &times; 256):</strong> AI sees raw pixel grain: red sports car paint, asphalt texture, sidewalk curbs.<br>
                      <strong>&bull; Stage 3 (64 &times; 64):</strong> Pixels are grouped into parts: car wheels, windows, pedestrian legs.<br>
                      <strong>&bull; Bottleneck (16 &times; 16):</strong> Spatial size is tiny, but 1024 channels capture deep concepts: <em>"High-speed sports coupe heading north on the road"</em>.
                    </div>
                  </div>
                  <ul class="bullet-list">
                    <li><strong>Spatial Shrinkage:</strong> 256&sup2; &rarr; 128&sup2; &rarr; 64&sup2; &rarr; 32&sup2; &rarr; 16&sup2; (Compresses spatial noise).</li>
                    <li><strong>Channel Growth:</strong> 3 &rarr; 64 &rarr; 128 &rarr; 256 &rarr; 512 &rarr; 1024 (Builds abstract semantic understanding).</li>
                  </ul>
                </div>

              </div>
            </div>
          </div>

          <!-- TAB 3: ARCHITECTURE BENCHMARK (U-Net, Mask R-CNN, SegFormer, DeepLabV3+) -->
          <div id="tab-compare" class="edu-pane">
            <div class="compare-grid">
              
              <!-- U-Net -->
              <div class="arch-card">
                <div class="arch-badge">BASE CNN MODEL (2015)</div>
                <h3 class="arch-title">U-Net</h3>
                <p class="arch-origin">Ronneberger et al. (MICCAI)</p>
                <div class="simple-def-box">
                  <span class="simple-def-tag">💡 SIMPLE DEFINITION:</span>
                  <div class="simple-def-desc">Pure CNN symmetric contracting and expanding U-network connected by 1:1 direct identity skip bridges.</div>
                </div>
                <div class="game-world-box">
                  <span class="game-world-tag">🎮 IN OUR GAME WORLD:</span>
                  <div class="game-world-desc">A fast, lightweight baseline that efficiently segments general roads and buildings, but cannot separate two cars parked next to each other.</div>
                </div>
                <ul class="arch-features">
                  <li><strong>Core Mechanism:</strong> Pure CNN symmetric contracting/expanding U-path.</li>
                  <li><strong>Key Strength:</strong> Fast training, lightweight footprint, strong medical & small-dataset baselines.</li>
                  <li><strong>Limitation:</strong> Semantic gap between shallow encoder features and deep decoder features.</li>
                </ul>
              </div>

              <!-- TOPIC 6: MASK R-CNN -->
              <div class="arch-card highlight-border">
                <div class="arch-badge">INSTANCE SEGMENTATION BENCHMARK (2017)</div>
                <h3 class="arch-title">Mask R-CNN</h3>
                <p class="arch-origin">He et al. (Meta AI / FAIR - ICCV Best Paper)</p>
                <div class="simple-def-box">
                  <span class="simple-def-tag">💡 SIMPLE DEFINITION:</span>
                  <div class="simple-def-desc">
                    The undisputed king of <strong>Instance Segmentation</strong>. A two-stage AI: Stage 1 proposes bounding boxes around candidate objects (*"There is an object here"*). Stage 2 uses RoIAlign to classify the object and paint a precise binary pixel mask inside that box.
                  </div>
                </div>
                <div class="game-world-box">
                  <span class="game-world-tag">🎮 IN OUR GAME WORLD:</span>
                  <div class="game-world-desc">
                    When our <strong>Yellow City Taxi (car_taxi.glb)</strong> stops right beside our <strong>Black Police Cruiser (car_police.glb)</strong>, Semantic U-Net lumps them together as one big yellow blob. Mask R-CNN isolates Box #1: <code>Taxi Cab [ID:10]</code> (Blue) and Box #2: <code>Police Cruiser [ID:11]</code> (Orange), keeping their masks completely distinct even when their bumpers touch!
                  </div>
                </div>
                <ul class="arch-features">
                  <li><strong>Stage 1 (RPN):</strong> Scans Feature Pyramid Network (FPN) anchors to generate high-confidence bounding box proposals.</li>
                  <li><strong>Stage 2 (RoIAlign):</strong> Bilinear interpolation preserves exact sub-pixel spatial alignment, completely eliminating quantization error.</li>
                  <li><strong>Key Strength:</strong> SOTA accuracy on individual instances, counting objects, and complex overlapping scenes.</li>
                </ul>
              </div>

              <!-- TOPIC 5: SEGFORMER (TRANSFORMER) -->
              <div class="arch-card highlight-border">
                <div class="arch-badge">VISION TRANSFORMER (2021)</div>
                <h3 class="arch-title">SegFormer</h3>
                <p class="arch-origin">Xie et al. (NeurIPS / NVIDIA)</p>
                <div class="simple-def-box">
                  <span class="simple-def-tag">💡 SIMPLE DEFINITION:</span>
                  <div class="simple-def-desc">
                    A modern Vision Transformer that replaces CNN convolutions with <strong>Self-Attention blocks</strong> and an ultra-lightweight All-MLP decoder. Instead of only looking at local 3&times;3 neighbors, it calculates attention relationships across every single pixel in the entire image simultaneously from layer 1!
                  </div>
                </div>
                <div class="game-world-box">
                  <span class="game-world-tag">🎮 IN OUR GAME WORLD:</span>
                  <div class="game-world-desc">
                    When looking down our downtown avenue, a commercial building on the far-left has the same tinted glass windows as a skyscraper 200m away on the far-right. A standard CNN needs multiple downsampling steps before its receptive field connects them. <strong>SegFormer connects both buildings globally in layer 1</strong>, understanding they share the same building facade material regardless of where they are on screen!
                  </div>
                </div>
                <ul class="arch-features">
                  <li><strong>Positional-Free Attention:</strong> Uses Mix-FFN to encode position dynamically, handling arbitrary screen resolutions without interpolation artifacts.</li>
                  <li><strong>All-MLP Decoder:</strong> Aggregates multi-level attention tokens with zero heavy convolutions, yielding exceptional inference speed (60+ FPS).</li>
                  <li><strong>Key Strength:</strong> Global self-attention receptive field from layer 1; state-of-the-art accuracy/speed trade-off on Cityscapes.</li>
                </ul>
              </div>

              <!-- DeepLabV3+ -->
              <div class="arch-card">
                <div class="arch-badge">ATROUS / ASPP SOTA (2018)</div>
                <h3 class="arch-title">DeepLabV3+</h3>
                <p class="arch-origin">Chen et al. (Google Research / ECCV)</p>
                <div class="simple-def-box">
                  <span class="simple-def-tag">💡 SIMPLE DEFINITION:</span>
                  <div class="simple-def-desc">Uses <strong>Atrous (Dilated) Convolutions</strong> with multiple spacing rates ($r=6, 12, 18$) to expand the field of view without shrinking image resolution.</div>
                </div>
                <div class="game-world-box">
                  <span class="game-world-tag">🎮 IN OUR GAME WORLD:</span>
                  <div class="game-world-desc">Accurately captures huge multi-story buildings and small pedestrian walkers simultaneously without needing aggressive downsampling.</div>
                </div>
                <ul class="arch-features">
                  <li><strong>Core Mechanism:</strong> Atrous Spatial Pyramid Pooling (ASPP) samples multi-scale context in parallel.</li>
                  <li><strong>Key Strength:</strong> Gold standard for natural urban scenes (Cityscapes benchmark).</li>
                  <li><strong>Limitation:</strong> Heavy memory cost for high dilation kernels; potential gridding artifacts.</li>
                </ul>
              </div>

            </div>
          </div>

          <!-- TAB 4: EVALUATION METRICS (IoU & DICE) -->
          <div id="tab-metrics" class="edu-pane">
            <div class="metrics-interactive-layout">
              
              <!-- Left: Interactive Venn Diagram & Threshold Slider -->
              <div class="metrics-controls-panel">
                <div class="panel-header-title">PREDICTION OVERLAP & QUALITY SIMULATION</div>
                
                <div class="slider-group">
                  <div class="slider-header">
                    <span>Segmentation Accuracy / Confidence Threshold:</span>
                    <span id="slider-val-label" class="val-pill">82%</span>
                  </div>
                  <input type="range" id="iou-slider" min="20" max="98" value="82" class="cyber-slider" />
                </div>

                <!-- Live Venn Diagram -->
                <div class="venn-diagram-container">
                  <svg viewBox="0 0 380 220" class="venn-svg">
                    <circle cx="150" cy="110" r="75" fill="rgba(0, 240, 255, 0.35)" stroke="#00f0ff" stroke-width="2.5" />
                    <circle id="venn-circle-b" cx="225" cy="110" r="75" fill="rgba(255, 0, 120, 0.35)" stroke="#ff0078" stroke-width="2.5" />
                    
                    <text x="110" y="115" class="venn-label">Ground Truth (A)</text>
                    <text id="venn-label-b" x="250" y="115" class="venn-label">Prediction (B)</text>
                    <text id="venn-label-overlap" x="185" y="115" class="venn-overlap-label">A &cap; B</text>
                  </svg>
                </div>

                <div class="metrics-legend">
                  <span class="m-leg"><span class="m-box tp"></span>True Positive (${tr.renderToString("A \\cap B")})</span>
                  <span class="m-leg"><span class="m-box fp"></span>False Positive (${tr.renderToString("B \\setminus A")})</span>
                  <span class="m-leg"><span class="m-box fn"></span>False Negative (${tr.renderToString("A \\setminus B")})</span>
                </div>
              </div>

              <!-- Right: Mathematical Computations & Explanations -->
              <div class="metrics-calc-panel">
                
                <!-- IoU Card -->
                <div class="metric-score-card">
                  <div class="score-header">
                    <span class="score-name">INTERSECTION OVER UNION (IoU / JACCARD INDEX)</span>
                    <span id="score-val-iou" class="score-number">0.718</span>
                  </div>
                  <div class="math-box">
                    ${tr.renderToString("\\text{IoU} = \\frac{|A \\cap B|}{|A \\cup B|} = \\frac{TP}{TP + FP + FN}",{displayMode:!0,throwOnError:!1})}
                  </div>
                  <div class="game-world-box">
                    <span class="game-world-tag">🎮 IN OUR GAME WORLD:</span>
                    <div class="game-world-desc">
                      If the AI predicts the mask for our <strong>Crimson Sports Coupe</strong>, IoU measures what percentage of the predicted pixels perfectly match the actual 3D car body geometry. An IoU &ge; 0.70 is considered strong in autonomous driving.
                    </div>
                  </div>
                  <p class="score-desc">
                    Penalizes false positives and false negatives equally. The standard benchmark metric for Cityscapes, PASCAL VOC, and COCO.
                  </p>
                </div>

                <!-- Dice Card -->
                <div class="metric-score-card">
                  <div class="score-header">
                    <span class="score-name">DICE COEFFICIENT (F1-SCORE / DSC)</span>
                    <span id="score-val-dice" class="score-number">0.836</span>
                  </div>
                  <div class="math-box">
                    ${tr.renderToString("\\text{Dice} = \\frac{2|A \\cap B|}{|A| + |B|} = \\frac{2 \\cdot TP}{2 \\cdot TP + FP + FN}",{displayMode:!0,throwOnError:!1})}
                  </div>
                  <div class="game-world-box">
                    <span class="game-world-tag">🎮 IN OUR GAME WORLD:</span>
                    <div class="game-world-desc">
                      Harmonic mean of precision and recall. Because Dice gives double weight to true positive overlap ($2 \\cdot TP$), it is mathematically always $\\ge \\text{IoU}$ and ideal for evaluating smaller targets like walking pedestrians.
                    </div>
                  </div>
                  <p class="score-desc">
                    Harmonic mean of precision and recall. Preferred in medical imaging and class-imbalanced datasets.
                  </p>
                </div>

                <div class="math-relationship-box">
                  <strong>Mathematical Conversion:</strong>
                  ${tr.renderToString("\\text{Dice} = \\frac{2 \\cdot \\text{IoU}}{1 + \\text{IoU}}, \\qquad \\text{IoU} = \\frac{\\text{Dice}}{2 - \\text{Dice}}",{displayMode:!0,throwOnError:!1})}
                </div>

              </div>

            </div>
          </div>

          <!-- TAB 5: TOPIC 7 - SEGMENTATION BOUNDARY ERRORS & FAILURE MODES ANALYSIS -->
          <div id="tab-failures" class="edu-pane">
            <div class="panel-header-title" style="margin-bottom: 16px; font-size: 0.95rem; color: #fff; letter-spacing: 0.1em;">
              SEGMENTATION BOUNDARY ERRORS & FAILURE MODES ANALYSIS
            </div>
            <div class="failures-grid">
              
              <!-- Failure 1: Boundary Bleeding -->
              <div class="failure-card">
                <div class="fail-badge">FAILURE MODE 01</div>
                <h3 class="fail-title">Boundary Bleeding & Edge Blurring</h3>
                <div class="simple-def-box">
                  <span class="simple-def-tag">💡 SIMPLE DEFINITION:</span>
                  <div class="simple-def-desc">
                    The segmentation mask leaks past the true edges of an object, rounding off sharp corners and bleeding into adjacent surfaces.
                  </div>
                </div>
                <div class="game-world-box">
                  <span class="game-world-tag">🎮 IN OUR GAME WORLD:</span>
                  <div class="game-world-desc">
                    The sharp crimson hood of our <strong>Velocity Sports Coupe</strong> bleeds 3 to 5 pixels into the dark asphalt road. The neural network rounds off the pointed front bumper into an unnatural oval shape because downsampling smoothed out the sharp corner.
                  </div>
                </div>
                <p class="fail-cause"><strong>Root Cause:</strong> Deep downsampling (1/16 or 1/32 of original resolution) discards sub-pixel spatial coordinates. Bilinear upsampling smooths out high-frequency boundary gradients.</p>
                <p class="fail-sol"><strong>Mitigation:</strong> Boundary Loss (L_boundary), PointRend iterative sub-pixel sampling, High-Resolution Skip Features.</p>
              </div>

              <!-- Failure 2: Small & Distant Objects -->
              <div class="failure-card">
                <div class="fail-badge">FAILURE MODE 02</div>
                <h3 class="fail-title">Small & Distant Object Disappearance</h3>
                <div class="simple-def-box">
                  <span class="simple-def-tag">💡 SIMPLE DEFINITION:</span>
                  <div class="simple-def-desc">
                    Small or distant objects occupy too few pixels on screen; downsampling shrinks them to zero and they completely vanish from the AI's mask.
                  </div>
                </div>
                <div class="game-world-box">
                  <span class="game-world-tag">🎮 IN OUR GAME WORLD:</span>
                  <div class="game-world-desc">
                    The <strong>Aerial Hunter Drone hovering in the sky or a civilian pedestrian 50m down the avenue</strong> occupies only a tiny 6 &times; 6 pixel cluster. Max-pooling downsamples it to less than 1 pixel by Stage 4, causing the drone to completely vanish from the AI scanner!
                  </div>
                </div>
                <p class="fail-cause"><strong>Root Cause:</strong> Four successive 2 &times; 2 pooling operations divide spatial resolution by 16. Pixel clusters smaller than 16 &times; 16 have their activations suppressed to zero.</p>
                <p class="fail-sol"><strong>Mitigation:</strong> Feature Pyramid Networks (FPN), multi-scale testing, high-resolution patch cropping.</p>
              </div>

              <!-- Failure 3: Occlusion & Broken Topology -->
              <div class="failure-card">
                <div class="fail-badge">FAILURE MODE 03</div>
                <h3 class="fail-title">Occlusion & Broken Object Topology</h3>
                <div class="simple-def-box">
                  <span class="simple-def-tag">💡 SIMPLE DEFINITION:</span>
                  <div class="simple-def-desc">
                    When a foreground object cuts in front of a background object, the AI splits the single background object into two disconnected pieces.
                  </div>
                </div>
                <div class="game-world-box">
                  <span class="game-world-tag">🎮 IN OUR GAME WORLD:</span>
                  <div class="game-world-desc">
                    A <strong>thin metal streetlight pole</strong> stands between your camera and a parked SUV. The pole cuts the SUV visually in half. The AI predicts the front half as <em>"Car #1"</em> and the rear half as <em>"Car #2"</em>, failing to understand it is one single connected vehicle!
                  </div>
                </div>
                <p class="fail-cause"><strong>Root Cause:</strong> Standard CNNs only evaluate local pixel neighborhoods; they lack higher-order spatial reasoning about object continuity behind occluders.</p>
                <p class="fail-sol"><strong>Mitigation:</strong> Non-local self-attention modules, graph convolutional reasoning, topological connectivity loss.</p>
              </div>

              <!-- Failure 4: Harsh Shadows & Reflections -->
              <div class="failure-card">
                <div class="fail-badge">FAILURE MODE 04</div>
                <h3 class="fail-title">Harsh Shadows & Specular Reflection Confusion</h3>
                <div class="simple-def-box">
                  <span class="simple-def-tag">💡 SIMPLE DEFINITION:</span>
                  <div class="simple-def-desc">
                    High-contrast dark shadows or bright specular reflections alter pixel colors so drastically that the AI misclassifies the surface.
                  </div>
                </div>
                <div class="game-world-box">
                  <span class="game-world-tag">🎮 IN OUR GAME WORLD:</span>
                  <div class="game-world-desc">
                    The tall <strong>4-story commercial building casts a dark diagonal shadow</strong> across the sunny asphalt road. Because the shadow is dark with a cool blue sky tint, the AI misclassifies the shadowed asphalt as <em>"Building Footprint"</em> or <em>"Water Puddle"</em>, creating a false hazard!
                  </div>
                </div>
                <p class="fail-cause"><strong>Root Cause:</strong> Convolutional filters rely heavily on RGB brightness gradients; sharp shadow edges mimic physical object contours.</p>
                <p class="fail-sol"><strong>Mitigation:</strong> Shadow-invariant chromaticity normalization, extensive shadow-injection data augmentation, thermal/LiDAR sensor fusion.</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    `,document.body.appendChild(this.modal)}bindEvents(){this.modal.querySelector("#btn-close-edu").addEventListener("click",()=>{this.close()}),this.modal.querySelectorAll(".edu-tab-btn").forEach(i=>{i.addEventListener("click",()=>{const s=i.getAttribute("data-tab");this.switchTab(s)})}),this.modal.querySelector("#iou-slider").addEventListener("input",i=>{this.iouThreshold=parseInt(i.target.value,10),this.updateMetricCalculation()}),window.addEventListener("keydown",i=>{i.code==="Escape"&&this.isOpen&&this.close()})}switchTab(e){this.activeTab=e;const t=this.modal.querySelectorAll(".edu-tab-btn"),n=this.modal.querySelectorAll(".edu-pane");t.forEach(i=>{i.getAttribute("data-tab")===e?i.classList.add("active"):i.classList.remove("active")}),n.forEach(i=>{i.id===`tab-${e}`?i.classList.add("active"):i.classList.remove("active")})}updateMetricCalculation(){const e=this.modal.querySelector("#slider-val-label"),t=this.modal.querySelector("#score-val-iou"),n=this.modal.querySelector("#score-val-dice"),i=this.modal.querySelector("#venn-circle-b");if(!e||!t||!n)return;e.innerText=`${this.iouThreshold}%`;const s=this.iouThreshold/100,a=1e3,o=a*s,l=a*(1-s)*.45,c=a*(1-s),h=o/(o+l+c),u=2*o/(2*o+l+c);if(t.innerText=h.toFixed(3),n.innerText=u.toFixed(3),i){const d=150+(1-s)*125;i.setAttribute("cx",d.toFixed(1))}}open(){this.isOpen=!0,this.modal.style.display="flex"}close(){this.isOpen=!1,this.modal.style.display="none"}}class Qx{constructor(e,t,n){this.renderer=e,this.cityWorld=t,this.onOpenEducation=n,this.qualityPreset="MEDIUM",this.fps=60,this.frameCount=0,this.lastTime=performance.now(),this.createDom(),this.initMinimap(),this.bindEvents(),this.setQualityPreset("MEDIUM")}createDom(){this.hud=document.createElement("div"),this.hud.id="game-hud-layer",this.hud.className="game-hud-layer",this.hud.innerHTML=`
      <!-- Top Status & Preset Bar -->
      <div class="hud-top-bar">
        <div class="hud-brand">
          <span class="hud-city-icon">&#9670;</span>
          <span class="hud-title">AI VISION CITY</span>
          <span class="hud-ver">AI SEGMENTATION</span>
        </div>

        <div class="hud-center-tools">
          <div class="preset-selector">
            <span class="preset-label">GFX:</span>
            <button class="preset-btn" data-preset="LOW">LOW</button>
            <button class="preset-btn active" data-preset="MEDIUM">MED (60 FPS)</button>
            <button class="preset-btn" data-preset="HIGH">HIGH</button>
          </div>
          <button id="btn-top-edu" class="btn-top-glass">
            <span class="btn-pip-dot"></span>
            <span>U-NET LAB</span>
          </button>
        </div>

        <div class="hud-performance">
          <span id="fps-display" class="fps-val">60 FPS</span>
          <span class="fps-sub">GPU 16ms</span>
        </div>
      </div>

      <!-- Bottom-Left Tactical Radar Only (Clean, No Clutter) -->
      <div class="hud-bottom-left">
        <div class="minimap-wrapper">
          <div class="minimap-header">RADAR</div>
          <canvas id="minimap-canvas" width="130" height="130" class="minimap-canvas"></canvas>
          <div class="minimap-legend">
            <span><span class="m-dot player"></span>YOU</span>
            <span><span class="m-dot veh"></span>CAR</span>
            <span><span class="m-dot ped"></span>CIV</span>
            <span><span class="m-dot foe"></span>FOE</span>
          </div>
        </div>
      </div>
    `,document.body.appendChild(this.hud),this.minimapCanvas=document.getElementById("minimap-canvas"),this.minimapCtx=this.minimapCanvas.getContext("2d")}initMinimap(){this.minimapScale=1.1}bindEvents(){const e=this.hud.querySelectorAll(".preset-btn");e.forEach(n=>{n.addEventListener("click",()=>{const i=n.getAttribute("data-preset");this.setQualityPreset(i),e.forEach(s=>s.classList.remove("active")),n.classList.add("active")})}),this.hud.querySelector("#btn-top-edu").addEventListener("click",()=>{this.onOpenEducation&&this.onOpenEducation()})}setQualityPreset(e){this.qualityPreset=e,console.log(`Switching Graphics Quality Preset to: ${e}`),e==="LOW"?(this.renderer.shadowMap.enabled=!1,this.renderer.setPixelRatio(.85),this.cityWorld.sunLight&&(this.cityWorld.sunLight.castShadow=!1)):e==="MEDIUM"?(this.renderer.shadowMap.enabled=!0,this.renderer.setPixelRatio(1),this.cityWorld.sunLight&&(this.cityWorld.sunLight.castShadow=!0,this.cityWorld.sunLight.shadow.mapSize.width=1024,this.cityWorld.sunLight.shadow.mapSize.height=1024)):e==="HIGH"&&(this.renderer.shadowMap.enabled=!0,this.renderer.setPixelRatio(1),this.cityWorld.sunLight&&(this.cityWorld.sunLight.castShadow=!0,this.cityWorld.sunLight.shadow.mapSize.width=1024,this.cityWorld.sunLight.shadow.mapSize.height=1024))}update(e,t,n){this.frameCount++;const i=performance.now();if(i-this.lastTime>=500){this.fps=Math.round(this.frameCount*1e3/(i-this.lastTime)),this.frameCount=0,this.lastTime=i;const d=document.getElementById("fps-display");d&&(d.innerText=`${this.fps} FPS`)}if(!this.minimapCtx||!e)return;const s=this.minimapCtx,a=this.minimapCanvas.width,o=this.minimapCanvas.height,l=a*.5,c=o*.5;s.clearRect(0,0,a,o),s.fillStyle="rgba(10, 15, 24, 0.85)",s.beginPath(),s.arc(l,c,l-2,0,Math.PI*2),s.fill(),s.strokeStyle="rgba(0, 240, 255, 0.3)",s.lineWidth=1.5,s.stroke(),s.strokeStyle="rgba(0, 240, 255, 0.12)",s.beginPath(),s.arc(l,c,l*.4,0,Math.PI*2),s.arc(l,c,l*.75,0,Math.PI*2),s.stroke();const h=e.getPosition(),u=(d,p)=>{const x=l+(d-h.x)*this.minimapScale,y=c+(p-h.z)*this.minimapScale;return{x,y}};if(t){const d=t.getVehicleList();s.fillStyle="#f1b82d";for(let p=0;p<d.length;p++){const x=d[p].model.position,y=u(x.x,x.z);Math.hypot(y.x-l,y.y-c)<l-5&&(s.beginPath(),s.arc(y.x,y.y,2.5,0,Math.PI*2),s.fill())}}if(n){const d=n.getPedestrianList();s.fillStyle="#00ff88";for(let x=0;x<d.length;x++){const y=d[x].model.position,g=u(y.x,y.z);Math.hypot(g.x-l,g.y-c)<l-5&&(s.beginPath(),s.arc(g.x,g.y,2,0,Math.PI*2),s.fill())}const p=n.getEnemyList();s.fillStyle="#ff1144";for(let x=0;x<p.length;x++){const y=p[x].model.position,g=u(y.x,y.z);Math.hypot(g.x-l,g.y-c)<l-5&&(s.beginPath(),s.arc(g.x,g.y,3.5,0,Math.PI*2),s.fill())}}s.save(),s.translate(l,c),s.rotate(e.root.rotation.y+Math.PI),s.fillStyle="#00f0ff",s.beginPath(),s.moveTo(0,-6),s.lineTo(4,5),s.lineTo(-4,5),s.closePath(),s.fill(),s.restore()}}class e5{constructor(){this.container=document.getElementById("app"),this.clock=new O2,this.initThree(),this.initSystems(),this.bindEvents(),this.animate()}initThree(){this.scene=new Lu,this.scene.background=new Ne(14083312);const e=window.innerWidth/window.innerHeight;this.camera=new hn(65,e,.1,450),this.camera.position.set(0,3,15),this.renderer=new Iu({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(1),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Jh,this.renderer.toneMapping=eu,this.renderer.toneMappingExposure=1.12,this.container.appendChild(this.renderer.domElement)}initSystems(){this.segmentationPipeline=new t4(this.renderer,this.scene,this.camera),this.cityWorld=new U4(this.scene,this.segmentationPipeline);const e={getForwardVector:()=>new O(0,0,-1),getRightVector:()=>new O(1,0,0),yaw:0};this.player=new k4(this.scene,e,this.segmentationPipeline),this.cameraController=new O4(this.camera,this.player.root,this.renderer.domElement,[]),this.player.cameraController=this.cameraController;const t=this.cityWorld.getCollisionBoxes();this.player.setCollisionBoxes(t),this.cameraController.setCollisionObjects(this.cityWorld.getBuildingMeshes()),this.combatSystem=new B4(this.scene,this.camera,this.segmentationPipeline),this.player.setCombatSystem(this.combatSystem),this.trafficSystem=new z4(this.scene,this.segmentationPipeline),this.npcSystem=new H4(this.scene,this.segmentationPipeline),this.educationSuite=new Jx,this.scannerUI=new G4(this.segmentationPipeline,()=>{this.educationSuite.open()}),this.scannerUI.setCameraAndEnemies(this.camera,this.npcSystem.getEnemyList()),this.gameUI=new Qx(this.renderer,this.cityWorld,()=>{this.educationSuite.open()});const n=document.getElementById("initial-loader");n&&setTimeout(()=>{n.classList.add("fade-out"),setTimeout(()=>n.remove(),600)},800)}bindEvents(){window.addEventListener("resize",this.onResize.bind(this)),window.addEventListener("keydown",e=>{if(!(e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA"))switch(e.code){case"KeyE":case"KeyQ":if(this.scannerUI){const t=this.segmentationPipeline.currentMode===Ot.ENEMY_SCAN?Ot.NORMAL:Ot.ENEMY_SCAN;this.segmentationPipeline.setMode(t),this.scannerUI.currentMode=t,this.scannerUI.updateActiveButton(t),this.scannerUI.updateEducationalCard(t),this.scannerUI.triggerScanPulse(),this.combatSystem&&this.combatSystem.audio.playScanPulse()}break;case"Digit1":this.switchFilterMode(Ot.NORMAL);break;case"Digit2":this.switchFilterMode(Ot.SEMANTIC);break;case"Digit3":this.switchFilterMode(Ot.INSTANCE);break;case"Digit4":this.switchFilterMode(Ot.PANOPTIC);break;case"Digit5":this.switchFilterMode(Ot.ENEMY_SCAN);break;case"Digit6":this.switchFilterMode(Ot.EDGE_DETECTION);break;case"Digit7":this.switchFilterMode(Ot.DEPTH_VIEW);break}})}switchFilterMode(e){this.segmentationPipeline&&this.scannerUI&&(this.segmentationPipeline.setMode(e),this.scannerUI.currentMode=e,this.scannerUI.updateActiveButton(e),this.scannerUI.updateEducationalCard(e))}onResize(){const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}animate(){requestAnimationFrame(this.animate.bind(this));const e=Math.min(this.clock.getDelta(),.1),t=this.clock.getElapsedTime(),n=this.npcSystem?this.npcSystem.getEnemyList():[],i=this.player?this.player.getPosition():null;if(this.player&&this.player.update(e,t,n),this.combatSystem&&this.combatSystem.update(e,t,n,i),this.cameraController&&this.cameraController.update(e),this.cityWorld&&this.cityWorld.update(e),this.trafficSystem&&this.trafficSystem.update(e),this.npcSystem&&this.npcSystem.update(e,t,i),this.scannerUI){const s=this.segmentationPipeline.getLiveStatistics();this.scannerUI.update(s)}this.gameUI&&this.gameUI.update(this.player,this.trafficSystem,this.npcSystem),this.segmentationPipeline.render(e,t)}}window.addEventListener("DOMContentLoaded",()=>{const r=new e5;window.__AI_VISION_CITY__=r,console.log("AI VISION CITY initialized and running at 60 FPS.")});
