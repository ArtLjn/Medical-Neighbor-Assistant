import"./tab-xbr07iho.js";import{E as gd,a as yd}from"./el-form-item-BwjGvzb2.js";import{i as vd}from"./request-CcomvHR9.js";import{u as xd,r as xs,o as _d,a as bd,b as wd,c as Md,d as Sd,e as Lr,f as wn,w as _i,g as xl,h as Td,p as Ed,i as Ad,E as Ld,j as Rd,k as Cd,l as Pd,m as Id}from"./index-CIZYmY3Y.js";import{_ as Dd}from"./_plugin-vue_export-helper-DlAUqK2U.js";const Ch="121",Nd={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Bd={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ph=0,Ga=1,Ih=2,Od=3,Fd=0,Tc=1,Dh=2,Ui=3,or=0,et=1,as=2,Ec=1,zd=2,yn=0,Wi=1,Ha=2,Va=3,ka=4,Nh=5,ti=100,Bh=101,Oh=102,Wa=103,ja=104,Fh=200,zh=201,Uh=202,Gh=203,Ac=204,Lc=205,Hh=206,Vh=207,kh=208,Wh=209,jh=210,qh=0,Xh=1,Yh=2,po=3,Zh=4,Jh=5,$h=6,Qh=7,cs=0,Kh=1,eu=2,ri=0,tu=1,nu=2,iu=3,ru=4,su=5,ko=300,ls=301,hs=302,mo=303,go=304,ar=306,us=307,Or=1e3,pt=1001,Fr=1002,tt=1003,yo=1004,Ud=1004,vo=1005,Gd=1005,rt=1006,Rc=1007,Hd=1007,cr=1008,Vd=1008,lr=1009,ou=1010,au=1011,zr=1012,cu=1013,Rr=1014,pn=1015,Ur=1016,lu=1017,hu=1018,uu=1019,ji=1020,fu=1021,In=1022,Tt=1023,du=1024,pu=1025,mu=Tt,si=1026,Xi=1027,gu=1028,yu=1029,vu=1030,xu=1031,_u=1032,bu=1033,qa=33776,Xa=33777,Ya=33778,Za=33779,Ja=35840,$a=35841,Qa=35842,Ka=35843,wu=36196,ec=37492,tc=37496,Mu=37808,Su=37809,Tu=37810,Eu=37811,Au=37812,Lu=37813,Ru=37814,Cu=37815,Pu=37816,Iu=37817,Du=37818,Nu=37819,Bu=37820,Ou=37821,Fu=36492,zu=37840,Uu=37841,Gu=37842,Hu=37843,Vu=37844,ku=37845,Wu=37846,ju=37847,qu=37848,Xu=37849,Yu=37850,Zu=37851,Ju=37852,$u=37853,Qu=2200,Ku=2201,ef=2202,Gr=2300,Cr=2301,uo=2302,ni=2400,ii=2401,Hr=2402,Wo=2500,Cc=2501,tf=0,kd=1,Wd=2,gt=3e3,fs=3001,jo=3007,qo=3002,nf=3003,Pc=3004,Ic=3005,Dc=3006,rf=3200,sf=3201,yi=0,of=1,jd=0,fo=7680,qd=7681,Xd=7682,Yd=7683,Zd=34055,Jd=34056,$d=5386,Qd=512,Kd=513,ep=514,tp=515,np=516,ip=517,rp=518,af=519,ds=35044,oi=35048,sp=35040,op=35045,ap=35049,cp=35041,lp=35046,hp=35050,up=35042,fp="100",nc="300 es";function sn(){}Object.assign(sn.prototype,{addEventListener:function(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)},hasEventListener:function(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1},removeEventListener:function(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}},dispatchEvent:function(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,t)}}});const st=[];for(let t=0;t<256;t++)st[t]=(t<16?"0":"")+t.toString(16);let _s=1234567;const xe={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(st[t&255]+st[t>>8&255]+st[t>>16&255]+st[t>>24&255]+"-"+st[e&255]+st[e>>8&255]+"-"+st[e>>16&15|64]+st[e>>24&255]+"-"+st[n&63|128]+st[n>>8&255]+"-"+st[n>>16&255]+st[n>>24&255]+st[i&255]+st[i>>8&255]+st[i>>16&255]+st[i>>24&255]).toUpperCase()},clamp:function(t,e,n){return Math.max(e,Math.min(n,t))},euclideanModulo:function(t,e){return(t%e+e)%e},mapLinear:function(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)},lerp:function(t,e,n){return(1-n)*t+n*e},smoothstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))},smootherstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))},randInt:function(t,e){return t+Math.floor(Math.random()*(e-t+1))},randFloat:function(t,e){return t+Math.random()*(e-t)},randFloatSpread:function(t){return t*(.5-Math.random())},seededRandom:function(t){return t!==void 0&&(_s=t%2147483647),_s=_s*16807%2147483647,(_s-1)/2147483646},degToRad:function(t){return t*xe.DEG2RAD},radToDeg:function(t){return t*xe.RAD2DEG},isPowerOfTwo:function(t){return(t&t-1)===0&&t!==0},ceilPowerOfTwo:function(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))},floorPowerOfTwo:function(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))},setQuaternionFromProperEuler:function(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),c=o(n/2),l=s((e+i)/2),d=o((e+i)/2),h=s((e-i)/2),u=o((e-i)/2),f=s((i-e)/2),p=o((i-e)/2);switch(r){case"XYX":t.set(a*d,c*h,c*u,a*l);break;case"YZY":t.set(c*u,a*d,c*h,a*l);break;case"ZXZ":t.set(c*h,c*u,a*d,a*l);break;case"XZX":t.set(a*d,c*p,c*f,a*l);break;case"YXY":t.set(c*f,a*d,c*p,a*l);break;case"ZYZ":t.set(c*p,c*f,a*d,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}};class H{constructor(e=0,n=0){Object.defineProperty(this,"isVector2",{value:!0}),this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,n){return n!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,n)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e,n){return n!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,n)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n){return n===void 0&&(n=0),this.x=e[n],this.y=e[n+1],this}toArray(e,n){return e===void 0&&(e=[]),n===void 0&&(n=0),e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}}class mt{constructor(){Object.defineProperty(this,"isMatrix3",{value:!0}),this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,n,i,r,s,o,a,c,l){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=c,d[6]=i,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}clone(){return new this.constructor().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],d=i[4],h=i[7],u=i[2],f=i[5],p=i[8],y=r[0],v=r[3],g=r[6],m=r[1],_=r[4],b=r[7],M=r[2],x=r[5],A=r[8];return s[0]=o*y+a*m+c*M,s[3]=o*v+a*_+c*x,s[6]=o*g+a*b+c*A,s[1]=l*y+d*m+h*M,s[4]=l*v+d*_+h*x,s[7]=l*g+d*b+h*A,s[2]=u*y+f*m+p*M,s[5]=u*v+f*_+p*x,s[8]=u*g+f*b+p*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8];return n*o*d-n*a*l-i*s*d+i*a*c+r*s*l-r*o*c}getInverse(e,n){n!==void 0&&console.warn("THREE.Matrix3: .getInverse() can no longer be configured to throw on degenerate.");const i=e.elements,r=this.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],d=i[5],h=i[6],u=i[7],f=i[8],p=f*l-d*u,y=d*h-f*c,v=u*c-l*h,g=s*p+o*y+a*v;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return r[0]=p*m,r[1]=(a*u-f*o)*m,r[2]=(d*o-a*l)*m,r[3]=y*m,r[4]=(f*s-a*h)*m,r[5]=(a*c-d*s)*m,r[6]=v*m,r[7]=(o*h-u*s)*m,r[8]=(l*s-o*c)*m,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).getInverse(this).transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+n,0,0,1)}scale(e,n){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=n,i[4]*=n,i[7]*=n,this}rotate(e){const n=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],c=r[1],l=r[4],d=r[7];return r[0]=n*s+i*c,r[3]=n*o+i*l,r[6]=n*a+i*d,r[1]=-i*s+n*c,r[4]=-i*o+n*l,r[7]=-i*a+n*d,this}translate(e,n){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=n*i[2],i[4]+=n*i[5],i[7]+=n*i[8],this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n){n===void 0&&(n=0);for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e,n){e===void 0&&(e=[]),n===void 0&&(n=0);const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}}let bi;const On={getDataURL:function(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{bi===void 0&&(bi=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),bi.width=t.width,bi.height=t.height;const n=bi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=bi}return e.width>2048||e.height>2048?e.toDataURL("image/jpeg",.6):e.toDataURL("image/png")}};let dp=0;function ze(t,e,n,i,r,s,o,a,c,l){Object.defineProperty(this,"id",{value:dp++}),this.uuid=xe.generateUUID(),this.name="",this.image=t!==void 0?t:ze.DEFAULT_IMAGE,this.mipmaps=[],this.mapping=e!==void 0?e:ze.DEFAULT_MAPPING,this.wrapS=n!==void 0?n:pt,this.wrapT=i!==void 0?i:pt,this.magFilter=r!==void 0?r:rt,this.minFilter=s!==void 0?s:cr,this.anisotropy=c!==void 0?c:1,this.format=o!==void 0?o:Tt,this.internalFormat=null,this.type=a!==void 0?a:lr,this.offset=new H(0,0),this.repeat=new H(1,1),this.center=new H(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=l!==void 0?l:gt,this.version=0,this.onUpdate=null}ze.DEFAULT_IMAGE=void 0;ze.DEFAULT_MAPPING=ko;ze.prototype=Object.assign(Object.create(sn.prototype),{constructor:ze,isTexture:!0,updateMatrix:function(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.name=t.name,this.image=t.image,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this},toJSON:function(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=xe.generateUUID()),!e&&t.images[i.uuid]===void 0){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)r.push(On.getDataURL(i[s]))}else r=On.getDataURL(i);t.images[i.uuid]={uuid:i.uuid,url:r}}n.image=i.uuid}return e||(t.textures[this.uuid]=n),n},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(t){if(this.mapping!==ko)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Or:t.x=t.x-Math.floor(t.x);break;case pt:t.x=t.x<0?0:1;break;case Fr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Or:t.y=t.y-Math.floor(t.y);break;case pt:t.y=t.y<0?0:1;break;case Fr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}});Object.defineProperty(ze.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});class Oe{constructor(e=0,n=0,i=0,r=1){Object.defineProperty(this,"isVector4",{value:!0}),this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,n){return n!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,n)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e,n){return n!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,n)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,l=c[0],d=c[4],h=c[8],u=c[1],f=c[5],p=c[9],y=c[2],v=c[6],g=c[10];if(Math.abs(d-u)<.01&&Math.abs(h-y)<.01&&Math.abs(p-v)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+y)<.1&&Math.abs(p+v)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(l+1)/2,b=(f+1)/2,M=(g+1)/2,x=(d+u)/4,A=(h+y)/4,I=(p+v)/4;return _>b&&_>M?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=x/i,s=A/i):b>M?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=x/r,s=I/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=A/s,r=I/s),this.set(i,r,s,n),this}let m=Math.sqrt((v-p)*(v-p)+(h-y)*(h-y)+(u-d)*(u-d));return Math.abs(m)<.001&&(m=1),this.x=(v-p)/m,this.y=(h-y)/m,this.z=(u-d)/m,this.w=Math.acos((l+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n){return n===void 0&&(n=0),this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e,n){return e===void 0&&(e=[]),n===void 0&&(n=0),e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}}function Et(t,e,n){this.width=t,this.height=e,this.scissor=new Oe(0,0,t,e),this.scissorTest=!1,this.viewport=new Oe(0,0,t,e),n=n||{},this.texture=new ze(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.image={},this.texture.image.width=t,this.texture.image.height=e,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:rt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}Et.prototype=Object.assign(Object.create(sn.prototype),{constructor:Et,isWebGLRenderTarget:!0,setSize:function(t,e){(this.width!==t||this.height!==e)&&(this.width=t,this.height=e,this.texture.image.width=t,this.texture.image.height=e,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.width=t.width,this.height=t.height,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.depthTexture=t.depthTexture,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});function ic(t,e,n){Et.call(this,t,e,n),this.samples=4}ic.prototype=Object.assign(Object.create(Et.prototype),{constructor:ic,isWebGLMultisampleRenderTarget:!0,copy:function(t){return Et.prototype.copy.call(this,t),this.samples=t.samples,this}});class ht{constructor(e=0,n=0,i=0,r=1){Object.defineProperty(this,"isQuaternion",{value:!0}),this._x=e,this._y=n,this._z=i,this._w=r}static slerp(e,n,i,r){return i.copy(e).slerp(n,r)}static slerpFlat(e,n,i,r,s,o,a){let c=i[r+0],l=i[r+1],d=i[r+2],h=i[r+3];const u=s[o+0],f=s[o+1],p=s[o+2],y=s[o+3];if(h!==y||c!==u||l!==f||d!==p){let v=1-a;const g=c*u+l*f+d*p+h*y,m=g>=0?1:-1,_=1-g*g;if(_>Number.EPSILON){const M=Math.sqrt(_),x=Math.atan2(M,g*m);v=Math.sin(v*x)/M,a=Math.sin(a*x)/M}const b=a*m;if(c=c*v+u*b,l=l*v+f*b,d=d*v+p*b,h=h*v+y*b,v===1-a){const M=1/Math.sqrt(c*c+l*l+d*d+h*h);c*=M,l*=M,d*=M,h*=M}}e[n]=c,e[n+1]=l,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],d=i[r+3],h=s[o],u=s[o+1],f=s[o+2],p=s[o+3];return e[n]=a*p+d*h+c*f-l*u,e[n+1]=c*p+d*u+l*h-a*f,e[n+2]=l*p+d*f+a*u-c*h,e[n+3]=d*p-a*h-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),d=a(r/2),h=a(s/2),u=c(i/2),f=c(r/2),p=c(s/2);switch(o){case"XYZ":this._x=u*d*h+l*f*p,this._y=l*f*h-u*d*p,this._z=l*d*p+u*f*h,this._w=l*d*h-u*f*p;break;case"YXZ":this._x=u*d*h+l*f*p,this._y=l*f*h-u*d*p,this._z=l*d*p-u*f*h,this._w=l*d*h+u*f*p;break;case"ZXY":this._x=u*d*h-l*f*p,this._y=l*f*h+u*d*p,this._z=l*d*p+u*f*h,this._w=l*d*h-u*f*p;break;case"ZYX":this._x=u*d*h-l*f*p,this._y=l*f*h+u*d*p,this._z=l*d*p-u*f*h,this._w=l*d*h+u*f*p;break;case"YZX":this._x=u*d*h+l*f*p,this._y=l*f*h+u*d*p,this._z=l*d*p-u*f*h,this._w=l*d*h-u*f*p;break;case"XZY":this._x=u*d*h-l*f*p,this._y=l*f*h-u*d*p,this._z=l*d*p+u*f*h,this._w=l*d*h+u*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],c=n[9],l=n[2],d=n[6],h=n[10],u=i+a+h;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(i>a&&i>h){const f=2*Math.sqrt(1+i-a-h);this._w=(d-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-i-h);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+d)/f}else{const f=2*Math.sqrt(1+h-i-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-6?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xe.clamp(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}inverse(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,n){return n!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,n)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,c=n._y,l=n._z,d=n._w;return this._x=i*d+o*a+r*l-s*c,this._y=r*d+o*c+s*a-i*l,this._z=s*d+o*l+i*c-r*a,this._w=o*d-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-n;return this._w=f*o+n*this._w,this._x=f*i+n*this._x,this._y=f*r+n*this._y,this._z=f*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),d=Math.atan2(l,a),h=Math.sin((1-n)*d)/l,u=Math.sin(n*d)/l;return this._w=o*h+this._w*u,this._x=i*h+this._x*u,this._y=r*h+this._y*u,this._z=s*h+this._z*u,this._onChangeCallback(),this}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n){return n===void 0&&(n=0),this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e,n){return e===void 0&&(e=[]),n===void 0&&(n=0),e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}class w{constructor(e=0,n=0,i=0){Object.defineProperty(this,"isVector3",{value:!0}),this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,n){return n!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,n)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e,n){return n!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,n)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e,n){return n!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,n)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(_l.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(_l.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*n+o*r-a*i,d=c*i+a*n-s*r,h=c*r+s*i-o*n,u=-s*n-o*i-a*r;return this.x=l*c+u*-s+d*-a-h*-o,this.y=d*c+u*-o+h*-s-l*-a,this.z=h*c+u*-a+l*-o-d*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e,n){return n!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,n)):this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,c=n.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ia.copy(this).projectOnVector(e),this.sub(ia)}reflect(e){return this.sub(ia.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(xe.clamp(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n){return n===void 0&&(n=0),this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e,n){return e===void 0&&(e=[]),n===void 0&&(n=0),e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}}const ia=new w,_l=new ht;class on{constructor(e,n){Object.defineProperty(this,"isBox3",{value:!0}),this.min=e!==void 0?e:new w(1/0,1/0,1/0),this.max=n!==void 0?n:new w(-1/0,-1/0,-1/0)}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const d=e[c],h=e[c+1],u=e[c+2];d<n&&(n=d),h<i&&(i=h),u<r&&(r=u),d>s&&(s=d),h>o&&(o=h),u>a&&(a=u)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const d=e.getX(c),h=e.getY(c),u=e.getZ(c);d<n&&(n=d),h<i&&(i=h),u<r&&(r=u),d>s&&(s=d),h>o&&(o=h),u>a&&(a=u)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=gr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new w),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new w),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const n=e.geometry;n!==void 0&&(n.boundingBox===null&&n.computeBoundingBox(),sa.copy(n.boundingBox),sa.applyMatrix4(e.matrixWorld),this.union(sa));const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),n=new w),n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,gr),gr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yr),bs.subVectors(this.max,yr),wi.subVectors(e.a,yr),Mi.subVectors(e.b,yr),Si.subVectors(e.c,yr),Mn.subVectors(Mi,wi),Sn.subVectors(Si,Mi),qn.subVectors(wi,Si);let n=[0,-Mn.z,Mn.y,0,-Sn.z,Sn.y,0,-qn.z,qn.y,Mn.z,0,-Mn.x,Sn.z,0,-Sn.x,qn.z,0,-qn.x,-Mn.y,Mn.x,0,-Sn.y,Sn.x,0,-qn.y,qn.x,0];return!ra(n,wi,Mi,Si,bs)||(n=[1,0,0,0,1,0,0,0,1],!ra(n,wi,Mi,Si,bs))?!1:(ws.crossVectors(Mn,Sn),n=[ws.x,ws.y,ws.z],ra(n,wi,Mi,Si,bs))}clampPoint(e,n){return n===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),n=new w),n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return gr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize(gr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}function ra(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Xn.fromArray(t,s);const a=r.x*Math.abs(Xn.x)+r.y*Math.abs(Xn.y)+r.z*Math.abs(Xn.z),c=e.dot(Xn),l=n.dot(Xn),d=i.dot(Xn);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}const ln=[new w,new w,new w,new w,new w,new w,new w,new w],gr=new w,sa=new on,wi=new w,Mi=new w,Si=new w,Mn=new w,Sn=new w,qn=new w,yr=new w,bs=new w,ws=new w,Xn=new w,pp=new on;class bn{constructor(e,n){this.center=e!==void 0?e:new w,this.radius=n!==void 0?n:-1}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):pp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),n=new w),n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new on),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}}const hn=new w,oa=new w,Ms=new w,Tn=new w,aa=new w,Ss=new w,ca=new w;class hr{constructor(e,n){this.origin=e!==void 0?e:new w,this.direction=n!==void 0?n:new w(0,0,-1)}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n===void 0&&(console.warn("THREE.Ray: .at() target is now required"),n=new w),n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hn)),this}closestPointToPoint(e,n){n===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),n=new w),n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=hn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(hn.copy(this.direction).multiplyScalar(n).add(this.origin),hn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){oa.copy(e).add(n).multiplyScalar(.5),Ms.copy(n).sub(e).normalize(),Tn.copy(this.origin).sub(oa);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ms),a=Tn.dot(this.direction),c=-Tn.dot(Ms),l=Tn.lengthSq(),d=Math.abs(1-o*o);let h,u,f,p;if(d>0)if(h=o*c-a,u=o*a-c,p=s*d,h>=0)if(u>=-p)if(u<=p){const y=1/d;h*=y,u*=y,f=h*(h+o*u+2*a)+u*(o*h+u+2*c)+l}else u=s,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*c)+l;else u=-s,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*c)+l;else u<=-p?(h=Math.max(0,-(-o*s+a)),u=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+u*(u+2*c)+l):u<=p?(h=0,u=Math.min(Math.max(-s,-c),s),f=u*(u+2*c)+l):(h=Math.max(0,-(o*s+a)),u=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+u*(u+2*c)+l);else u=o>0?-s:s,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*c)+l;return i&&i.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(Ms).multiplyScalar(u).add(oa),f}intersectSphere(e,n){hn.subVectors(e.center,this.origin);const i=hn.dot(this.direction),r=hn.dot(hn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return a<0&&c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,c;const l=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),d>=0?(s=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),h>=0?(a=(e.min.z-u.z)*h,c=(e.max.z-u.z)*h):(a=(e.max.z-u.z)*h,c=(e.min.z-u.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,hn)!==null}intersectTriangle(e,n,i,r,s){aa.subVectors(n,e),Ss.subVectors(i,e),ca.crossVectors(aa,Ss);let o=this.direction.dot(ca),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Tn.subVectors(this.origin,e);const c=a*this.direction.dot(Ss.crossVectors(Tn,Ss));if(c<0)return null;const l=a*this.direction.dot(aa.cross(Tn));if(l<0||c+l>o)return null;const d=-a*Tn.dot(ca);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}}class Ee{constructor(){Object.defineProperty(this,"isMatrix4",{value:!0}),this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,n,i,r,s,o,a,c,l,d,h,u,f,p,y,v){const g=this.elements;return g[0]=e,g[4]=n,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=d,g[10]=h,g[14]=u,g[3]=f,g[7]=p,g[11]=y,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ee().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ti.setFromMatrixColumn(e,0).length(),s=1/Ti.setFromMatrixColumn(e,1).length(),o=1/Ti.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const u=o*d,f=o*h,p=a*d,y=a*h;n[0]=c*d,n[4]=-c*h,n[8]=l,n[1]=f+p*l,n[5]=u-y*l,n[9]=-a*c,n[2]=y-u*l,n[6]=p+f*l,n[10]=o*c}else if(e.order==="YXZ"){const u=c*d,f=c*h,p=l*d,y=l*h;n[0]=u+y*a,n[4]=p*a-f,n[8]=o*l,n[1]=o*h,n[5]=o*d,n[9]=-a,n[2]=f*a-p,n[6]=y+u*a,n[10]=o*c}else if(e.order==="ZXY"){const u=c*d,f=c*h,p=l*d,y=l*h;n[0]=u-y*a,n[4]=-o*h,n[8]=p+f*a,n[1]=f+p*a,n[5]=o*d,n[9]=y-u*a,n[2]=-o*l,n[6]=a,n[10]=o*c}else if(e.order==="ZYX"){const u=o*d,f=o*h,p=a*d,y=a*h;n[0]=c*d,n[4]=p*l-f,n[8]=u*l+y,n[1]=c*h,n[5]=y*l+u,n[9]=f*l-p,n[2]=-l,n[6]=a*c,n[10]=o*c}else if(e.order==="YZX"){const u=o*c,f=o*l,p=a*c,y=a*l;n[0]=c*d,n[4]=y-u*h,n[8]=p*h+f,n[1]=h,n[5]=o*d,n[9]=-a*d,n[2]=-l*d,n[6]=f*h+p,n[10]=u-y*h}else if(e.order==="XZY"){const u=o*c,f=o*l,p=a*c,y=a*l;n[0]=c*d,n[4]=-h,n[8]=l*d,n[1]=u*h+y,n[5]=o*d,n[9]=f*h-p,n[2]=p*h-f,n[6]=a*d,n[10]=y*h+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mp,e,gp)}lookAt(e,n,i){const r=this.elements;return wt.subVectors(e,n),wt.lengthSq()===0&&(wt.z=1),wt.normalize(),En.crossVectors(i,wt),En.lengthSq()===0&&(Math.abs(i.z)===1?wt.x+=1e-4:wt.z+=1e-4,wt.normalize(),En.crossVectors(i,wt)),En.normalize(),Ts.crossVectors(wt,En),r[0]=En.x,r[4]=Ts.x,r[8]=wt.x,r[1]=En.y,r[5]=Ts.y,r[9]=wt.y,r[2]=En.z,r[6]=Ts.z,r[10]=wt.z,this}multiply(e,n){return n!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,n)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],d=i[1],h=i[5],u=i[9],f=i[13],p=i[2],y=i[6],v=i[10],g=i[14],m=i[3],_=i[7],b=i[11],M=i[15],x=r[0],A=r[4],I=r[8],P=r[12],U=r[1],D=r[5],N=r[9],O=r[13],R=r[2],C=r[6],F=r[10],W=r[14],Y=r[3],ne=r[7],le=r[11],se=r[15];return s[0]=o*x+a*U+c*R+l*Y,s[4]=o*A+a*D+c*C+l*ne,s[8]=o*I+a*N+c*F+l*le,s[12]=o*P+a*O+c*W+l*se,s[1]=d*x+h*U+u*R+f*Y,s[5]=d*A+h*D+u*C+f*ne,s[9]=d*I+h*N+u*F+f*le,s[13]=d*P+h*O+u*W+f*se,s[2]=p*x+y*U+v*R+g*Y,s[6]=p*A+y*D+v*C+g*ne,s[10]=p*I+y*N+v*F+g*le,s[14]=p*P+y*O+v*W+g*se,s[3]=m*x+_*U+b*R+M*Y,s[7]=m*A+_*D+b*C+M*ne,s[11]=m*I+_*N+b*F+M*le,s[15]=m*P+_*O+b*W+M*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],d=e[2],h=e[6],u=e[10],f=e[14],p=e[3],y=e[7],v=e[11],g=e[15];return p*(+s*c*h-r*l*h-s*a*u+i*l*u+r*a*f-i*c*f)+y*(+n*c*f-n*l*u+s*o*u-r*o*f+r*l*d-s*c*d)+v*(+n*l*h-n*a*f-s*o*h+i*o*f+s*a*d-i*l*d)+g*(-r*a*d-n*c*h+n*a*u+r*o*h-i*o*u+i*c*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}getInverse(e,n){n!==void 0&&console.warn("THREE.Matrix4: .getInverse() can no longer be configured to throw on degenerate.");const i=this.elements,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],d=r[5],h=r[6],u=r[7],f=r[8],p=r[9],y=r[10],v=r[11],g=r[12],m=r[13],_=r[14],b=r[15],M=p*_*u-m*y*u+m*h*v-d*_*v-p*h*b+d*y*b,x=g*y*u-f*_*u-g*h*v+l*_*v+f*h*b-l*y*b,A=f*m*u-g*p*u+g*d*v-l*m*v-f*d*b+l*p*b,I=g*p*h-f*m*h-g*d*y+l*m*y+f*d*_-l*p*_,P=s*M+o*x+a*A+c*I;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/P;return i[0]=M*U,i[1]=(m*y*c-p*_*c-m*a*v+o*_*v+p*a*b-o*y*b)*U,i[2]=(d*_*c-m*h*c+m*a*u-o*_*u-d*a*b+o*h*b)*U,i[3]=(p*h*c-d*y*c-p*a*u+o*y*u+d*a*v-o*h*v)*U,i[4]=x*U,i[5]=(f*_*c-g*y*c+g*a*v-s*_*v-f*a*b+s*y*b)*U,i[6]=(g*h*c-l*_*c-g*a*u+s*_*u+l*a*b-s*h*b)*U,i[7]=(l*y*c-f*h*c+f*a*u-s*y*u-l*a*v+s*h*v)*U,i[8]=A*U,i[9]=(g*p*c-f*m*c-g*o*v+s*m*v+f*o*b-s*p*b)*U,i[10]=(l*m*c-g*d*c+g*o*u-s*m*u-l*o*b+s*d*b)*U,i[11]=(f*d*c-l*p*c-f*o*u+s*p*u+l*o*v-s*d*v)*U,i[12]=I*U,i[13]=(f*m*a-g*p*a+g*o*y-s*m*y-f*o*_+s*p*_)*U,i[14]=(g*d*a-l*m*a-g*o*h+s*m*h+l*o*_-s*d*_)*U,i[15]=(l*p*a-f*d*a+f*o*h-s*p*h-l*o*y+s*d*y)*U,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,d=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,d*a+i,d*c-r*o,0,l*c-r*a,d*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i){return this.set(1,n,i,0,e,1,i,0,e,n,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,c=n._w,l=s+s,d=o+o,h=a+a,u=s*l,f=s*d,p=s*h,y=o*d,v=o*h,g=a*h,m=c*l,_=c*d,b=c*h,M=i.x,x=i.y,A=i.z;return r[0]=(1-(y+g))*M,r[1]=(f+b)*M,r[2]=(p-_)*M,r[3]=0,r[4]=(f-b)*x,r[5]=(1-(u+g))*x,r[6]=(v+m)*x,r[7]=0,r[8]=(p+_)*A,r[9]=(v-m)*A,r[10]=(1-(u+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Ti.set(r[0],r[1],r[2]).length();const o=Ti.set(r[4],r[5],r[6]).length(),a=Ti.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ot.copy(this);const l=1/s,d=1/o,h=1/a;return Ot.elements[0]*=l,Ot.elements[1]*=l,Ot.elements[2]*=l,Ot.elements[4]*=d,Ot.elements[5]*=d,Ot.elements[6]*=d,Ot.elements[8]*=h,Ot.elements[9]*=h,Ot.elements[10]*=h,n.setFromRotationMatrix(Ot),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,c=2*s/(n-e),l=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r),u=-(o+s)/(o-s),f=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=d,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=u,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,s,o){const a=this.elements,c=1/(n-e),l=1/(i-r),d=1/(o-s),h=(n+e)*c,u=(i+r)*l,f=(o+s)*d;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-u,a[2]=0,a[6]=0,a[10]=-2*d,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n){n===void 0&&(n=0);for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e,n){e===void 0&&(e=[]),n===void 0&&(n=0);const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ti=new w,Ot=new Ee,mp=new w(0,0,0),gp=new w(1,1,1),En=new w,Ts=new w,wt=new w;class ur{constructor(e=0,n=0,i=0,r=ur.DefaultOrder){Object.defineProperty(this,"isEuler",{value:!0}),this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._order=r||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n,i){const r=xe.clamp,s=e.elements,o=s[0],a=s[4],c=s[8],l=s[1],d=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(n=n||this._order,n){case"XYZ":this._y=Math.asin(r(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(f,d),this._z=0);break;case"YXZ":this._x=Math.asin(-r(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(c,p),this._z=Math.atan2(l,d)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(r(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,d)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-r(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,d));break;case"YZX":this._z=Math.asin(r(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,d),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(c,p));break;case"XZY":this._z=Math.asin(-r(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,d),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i!==!1&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return bl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bl,n,i)}setFromVector3(e,n){return this.set(e.x,e.y,e.z,n||this._order)}reorder(e){return wl.setFromEuler(this),this.setFromQuaternion(wl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e,n){return e===void 0&&(e=[]),n===void 0&&(n=0),e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new w(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}ur.DefaultOrder="XYZ";ur.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];const bl=new Ee,wl=new ht;class Nc{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}}let yp=0;const Ml=new w,Ei=new ht,un=new Ee,Es=new w,vr=new w,vp=new w,xp=new ht,Sl=new w(1,0,0),Tl=new w(0,1,0),El=new w(0,0,1),_p={type:"added"},bp={type:"removed"};function ae(){Object.defineProperty(this,"id",{value:yp++}),this.uuid=xe.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ae.DefaultUp.clone();const t=new w,e=new ur,n=new ht,i=new w(1,1,1);function r(){n.setFromEuler(e,!1)}function s(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ee},normalMatrix:{value:new mt}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=ae.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Nc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.userData={}}ae.DefaultUp=new w(0,1,0);ae.DefaultMatrixAutoUpdate=!0;ae.prototype=Object.assign(Object.create(sn.prototype),{constructor:ae,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix4:function(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(t){return this.quaternion.premultiply(t),this},setRotationFromAxisAngle:function(t,e){this.quaternion.setFromAxisAngle(t,e)},setRotationFromEuler:function(t){this.quaternion.setFromEuler(t,!0)},setRotationFromMatrix:function(t){this.quaternion.setFromRotationMatrix(t)},setRotationFromQuaternion:function(t){this.quaternion.copy(t)},rotateOnAxis:function(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.multiply(Ei),this},rotateOnWorldAxis:function(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.premultiply(Ei),this},rotateX:function(t){return this.rotateOnAxis(Sl,t)},rotateY:function(t){return this.rotateOnAxis(Tl,t)},rotateZ:function(t){return this.rotateOnAxis(El,t)},translateOnAxis:function(t,e){return Ml.copy(t).applyQuaternion(this.quaternion),this.position.add(Ml.multiplyScalar(e)),this},translateX:function(t){return this.translateOnAxis(Sl,t)},translateY:function(t){return this.translateOnAxis(Tl,t)},translateZ:function(t){return this.translateOnAxis(El,t)},localToWorld:function(t){return t.applyMatrix4(this.matrixWorld)},worldToLocal:function(t){return t.applyMatrix4(un.getInverse(this.matrixWorld))},lookAt:function(t,e,n){t.isVector3?Es.copy(t):Es.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(vr,Es,this.up):un.lookAt(Es,vr,this.up),this.quaternion.setFromRotationMatrix(un),i&&(un.extractRotation(i.matrixWorld),Ei.setFromRotationMatrix(un),this.quaternion.premultiply(Ei.inverse()))},add:function(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(_p)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)},remove:function(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bp)),this},attach:function(t){return this.updateWorldMatrix(!0,!1),un.getInverse(this.matrixWorld),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),un.multiply(t.parent.matrixWorld)),t.applyMatrix4(un),t.updateWorldMatrix(!1,!1),this.add(t),this},getObjectById:function(t){return this.getObjectByProperty("id",t)},getObjectByName:function(t){return this.getObjectByProperty("name",t)},getObjectByProperty:function(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(t,e);if(s!==void 0)return s}},getWorldPosition:function(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),t=new w),this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),t=new ht),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,t,vp),t},getWorldScale:function(t){return t===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),t=new w),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,xp,t),t},getWorldDirection:function(t){t===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),t=new w),this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()},raycast:function(){},traverse:function(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)},traverseVisible:function(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)},traverseAncestors:function(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)},updateWorldMatrix:function(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}},toJSON:function(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON());function r(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(t)),a.uuid}if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const a=o.shapes;if(Array.isArray(a))for(let c=0,l=a.length;c<l;c++){const d=a[c];r(t.shapes,d)}else r(t.shapes,a)}}if(this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let a=0,c=this.material.length;a<c;a++)o.push(r(t.materials,this.material[a]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(e){const o=s(t.geometries),a=s(t.materials),c=s(t.textures),l=s(t.images),d=s(t.shapes);o.length>0&&(n.geometries=o),a.length>0&&(n.materials=a),c.length>0&&(n.textures=c),l.length>0&&(n.images=l),d.length>0&&(n.shapes=d)}return n.object=i,n;function s(o){const a=[];for(const c in o){const l=o[c];delete l.metadata,a.push(l)}return a}},clone:function(t){return new this.constructor().copy(this,t)},copy:function(t,e){if(e===void 0&&(e=!0),this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}});const la=new w,wp=new w,Mp=new mt;class $t{constructor(e,n){Object.defineProperty(this,"isPlane",{value:!0}),this.normal=e!==void 0?e:new w(1,0,0),this.constant=n!==void 0?n:0}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=la.subVectors(i,n).cross(wp.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}clone(){return new this.constructor().copy(this)}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),n=new w),n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){n===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),n=new w);const i=e.delta(la),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):void 0;const s=-(e.start.dot(this.normal)+this.constant)/r;if(!(s<0||s>1))return n.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new w),e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Mp.getNormalMatrix(e),r=this.coplanarPoint(la).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}}const Ft=new w,fn=new w,ha=new w,dn=new w,Ai=new w,Li=new w,Al=new w,ua=new w,fa=new w,da=new w;class ot{constructor(e,n,i){this.a=e!==void 0?e:new w,this.b=n!==void 0?n:new w,this.c=i!==void 0?i:new w}static getNormal(e,n,i,r){r===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),r=new w),r.subVectors(i,n),Ft.subVectors(e,n),r.cross(Ft);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Ft.subVectors(r,n),fn.subVectors(i,n),ha.subVectors(e,n);const o=Ft.dot(Ft),a=Ft.dot(fn),c=Ft.dot(ha),l=fn.dot(fn),d=fn.dot(ha),h=o*l-a*a;if(s===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),s=new w),h===0)return s.set(-2,-1,-1);const u=1/h,f=(l*c-a*d)*u,p=(o*d-a*c)*u;return s.set(1-f-p,p,f)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,dn),dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getUV(e,n,i,r,s,o,a,c){return this.getBarycoord(e,n,i,r,dn),c.set(0,0),c.addScaledVector(s,dn.x),c.addScaledVector(o,dn.y),c.addScaledVector(a,dn.z),c}static isFrontFacing(e,n,i,r){return Ft.subVectors(i,n),fn.subVectors(e,n),Ft.cross(fn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ft.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),Ft.cross(fn).length()*.5}getMidpoint(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new w),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ot.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new $t),e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ot.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return ot.getUV(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ot.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ot.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){n===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),n=new w);const i=this.a,r=this.b,s=this.c;let o,a;Ai.subVectors(r,i),Li.subVectors(s,i),ua.subVectors(e,i);const c=Ai.dot(ua),l=Li.dot(ua);if(c<=0&&l<=0)return n.copy(i);fa.subVectors(e,r);const d=Ai.dot(fa),h=Li.dot(fa);if(d>=0&&h<=d)return n.copy(r);const u=c*h-d*l;if(u<=0&&c>=0&&d<=0)return o=c/(c-d),n.copy(i).addScaledVector(Ai,o);da.subVectors(e,s);const f=Ai.dot(da),p=Li.dot(da);if(p>=0&&f<=p)return n.copy(s);const y=f*l-c*p;if(y<=0&&l>=0&&p<=0)return a=l/(l-p),n.copy(i).addScaledVector(Li,a);const v=d*p-f*h;if(v<=0&&h-d>=0&&f-p>=0)return Al.subVectors(s,r),a=(h-d)/(h-d+(f-p)),n.copy(r).addScaledVector(Al,a);const g=1/(v+y+u);return o=y*g,a=u*g,n.copy(i).addScaledVector(Ai,o).addScaledVector(Li,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zt={h:0,s:0,l:0},As={h:0,s:0,l:0};function pa(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function ma(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ga(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}class re{constructor(e,n,i){return Object.defineProperty(this,"isColor",{value:!0}),n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,n,i){return this.r=e,this.g=n,this.b=i,this}setHSL(e,n,i){if(e=xe.euclideanModulo(e,1),n=xe.clamp(n,0,1),i=xe.clamp(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=pa(s,r,e+1/3),this.g=pa(s,r,e),this.b=pa(s,r,e-1/3)}return this}setStyle(e){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)){let r;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,n(r[5]),this;if(r=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,n(r[5]),this;break;case"hsl":case"hsla":if(r=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o)){const a=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,l=parseInt(r[3],10)/100;return n(r[5]),this.setHSL(a,c,l)}break}}else if(i=/^\#([A-Fa-f0-9]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const n=cf[e];return n!==void 0?this.setHex(n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,n){return n===void 0&&(n=2),this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}copyLinearToGamma(e,n){n===void 0&&(n=2);const i=n>0?1/n:1;return this.r=Math.pow(e.r,i),this.g=Math.pow(e.g,i),this.b=Math.pow(e.b,i),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=ma(e.r),this.g=ma(e.g),this.b=ma(e.b),this}copyLinearToSRGB(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});const n=this.r,i=this.g,r=this.b,s=Math.max(n,i,r),o=Math.min(n,i,r);let a,c;const l=(o+s)/2;if(o===s)a=0,c=0;else{const d=s-o;switch(c=l<=.5?d/(s+o):d/(2-s-o),s){case n:a=(i-r)/d+(i<r?6:0);break;case i:a=(r-n)/d+2;break;case r:a=(n-i)/d+4;break}a/=6}return e.h=a,e.s=c,e.l=l,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,n,i){return this.getHSL(zt),zt.h+=e,zt.s+=n,zt.l+=i,this.setHSL(zt.h,zt.s,zt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpHSL(e,n){this.getHSL(zt),e.getHSL(As);const i=xe.lerp(zt.h,As.h,n),r=xe.lerp(zt.s,As.s,n),s=xe.lerp(zt.l,As.l,n);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n){return n===void 0&&(n=0),this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e,n){return e===void 0&&(e=[]),n===void 0&&(n=0),e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}re.NAMES=cf;re.prototype.r=1;re.prototype.g=1;re.prototype.b=1;class Vr{constructor(e,n,i,r,s,o){this.a=e,this.b=n,this.c=i,this.normal=r&&r.isVector3?r:new w,this.vertexNormals=Array.isArray(r)?r:[],this.color=s&&s.isColor?s:new re,this.vertexColors=Array.isArray(s)?s:[],this.materialIndex=o!==void 0?o:0}clone(){return new this.constructor().copy(this)}copy(e){this.a=e.a,this.b=e.b,this.c=e.c,this.normal.copy(e.normal),this.color.copy(e.color),this.materialIndex=e.materialIndex;for(let n=0,i=e.vertexNormals.length;n<i;n++)this.vertexNormals[n]=e.vertexNormals[n].clone();for(let n=0,i=e.vertexColors.length;n<i;n++)this.vertexColors[n]=e.vertexColors[n].clone();return this}}let Sp=0;function ge(){Object.defineProperty(this,"id",{value:Sp++}),this.uuid=xe.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.blending=Wi,this.side=or,this.flatShading=!1,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ac,this.blendDst=Lc,this.blendEquation=ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=af,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fo,this.stencilZFail=fo,this.stencilZPass=fo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}ge.prototype=Object.assign(Object.create(sn.prototype),{constructor:ge,isMaterial:!0,onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Ec;continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}},toJSON:function(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(n.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,n.reflectivity=this.reflectivity,n.refractionRatio=this.refractionRatio,this.combine!==void 0&&(n.combine=this.combine),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity)),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(n.blending=this.blending),this.flatShading===!0&&(n.flatShading=this.flatShading),this.side!==or&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(n.morphTargets=!0),this.morphNormals===!0&&(n.morphNormals=!0),this.skinning===!0&&(n.skinning=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const s=[];for(const o in r){const a=r[o];delete a.metadata,s.push(a)}return s}if(e){const r=i(t.textures),s=i(t.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n},clone:function(){return new this.constructor().copy(this)},copy:function(t){this.name=t.name,this.fog=t.fog,this.blending=t.blending,this.side=t.side,this.flatShading=t.flatShading,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(ge.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});function It(t){ge.call(this),this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(t)}It.prototype=Object.create(ge.prototype);It.prototype.constructor=It;It.prototype.isMeshBasicMaterial=!0;It.prototype.copy=function(t){return ge.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this};const He=new w,Ls=new H;function me(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=ds,this.updateRange={offset:0,count:-1},this.version=0}Object.defineProperty(me.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});Object.assign(me.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setUsage:function(t){return this.usage=t,this},copy:function(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this},copyAt:function(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this},copyArray:function(t){return this.array.set(t),this},copyColorsArray:function(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),s=new re),e[n++]=s.r,e[n++]=s.g,e[n++]=s.b}return this},copyVector2sArray:function(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),s=new H),e[n++]=s.x,e[n++]=s.y}return this},copyVector3sArray:function(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),s=new w),e[n++]=s.x,e[n++]=s.y,e[n++]=s.z}return this},copyVector4sArray:function(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let s=t[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),s=new Oe),e[n++]=s.x,e[n++]=s.y,e[n++]=s.z,e[n++]=s.w}return this},applyMatrix3:function(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ls.fromBufferAttribute(this,e),Ls.applyMatrix3(t),this.setXY(e,Ls.x,Ls.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this},applyMatrix4:function(t){for(let e=0,n=this.count;e<n;e++)He.x=this.getX(e),He.y=this.getY(e),He.z=this.getZ(e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this},applyNormalMatrix:function(t){for(let e=0,n=this.count;e<n;e++)He.x=this.getX(e),He.y=this.getY(e),He.z=this.getZ(e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this},transformDirection:function(t){for(let e=0,n=this.count;e<n;e++)He.x=this.getX(e),He.y=this.getY(e),He.z=this.getZ(e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this},set:function(t,e){return e===void 0&&(e=0),this.array.set(t,e),this},getX:function(t){return this.array[t*this.itemSize]},setX:function(t,e){return this.array[t*this.itemSize]=e,this},getY:function(t){return this.array[t*this.itemSize+1]},setY:function(t,e){return this.array[t*this.itemSize+1]=e,this},getZ:function(t){return this.array[t*this.itemSize+2]},setZ:function(t,e){return this.array[t*this.itemSize+2]=e,this},getW:function(t){return this.array[t*this.itemSize+3]},setW:function(t,e){return this.array[t*this.itemSize+3]=e,this},setXY:function(t,e,n){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this},setXYZ:function(t,e,n,i){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this},setXYZW:function(t,e,n,i,r){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this},onUpload:function(t){return this.onUploadCallback=t,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)},toJSON:function(){return{itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized}}});function kr(t,e,n){me.call(this,new Int8Array(t),e,n)}kr.prototype=Object.create(me.prototype);kr.prototype.constructor=kr;function Wr(t,e,n){me.call(this,new Uint8Array(t),e,n)}Wr.prototype=Object.create(me.prototype);Wr.prototype.constructor=Wr;function jr(t,e,n){me.call(this,new Uint8ClampedArray(t),e,n)}jr.prototype=Object.create(me.prototype);jr.prototype.constructor=jr;function qr(t,e,n){me.call(this,new Int16Array(t),e,n)}qr.prototype=Object.create(me.prototype);qr.prototype.constructor=qr;function ai(t,e,n){me.call(this,new Uint16Array(t),e,n)}ai.prototype=Object.create(me.prototype);ai.prototype.constructor=ai;function Xr(t,e,n){me.call(this,new Int32Array(t),e,n)}Xr.prototype=Object.create(me.prototype);Xr.prototype.constructor=Xr;function ci(t,e,n){me.call(this,new Uint32Array(t),e,n)}ci.prototype=Object.create(me.prototype);ci.prototype.constructor=ci;function Q(t,e,n){me.call(this,new Float32Array(t),e,n)}Q.prototype=Object.create(me.prototype);Q.prototype.constructor=Q;function Yr(t,e,n){me.call(this,new Float64Array(t),e,n)}Yr.prototype=Object.create(me.prototype);Yr.prototype.constructor=Yr;class Tp{constructor(){this.vertices=[],this.normals=[],this.colors=[],this.uvs=[],this.uvs2=[],this.groups=[],this.morphTargets={},this.skinWeights=[],this.skinIndices=[],this.boundingBox=null,this.boundingSphere=null,this.verticesNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.uvsNeedUpdate=!1,this.groupsNeedUpdate=!1}computeGroups(e){const n=[];let i,r,s;const o=e.faces;for(r=0;r<o.length;r++){const a=o[r];a.materialIndex!==s&&(s=a.materialIndex,i!==void 0&&(i.count=r*3-i.start,n.push(i)),i={start:r*3,materialIndex:s})}i!==void 0&&(i.count=r*3-i.start,n.push(i)),this.groups=n}fromGeometry(e){const n=e.faces,i=e.vertices,r=e.faceVertexUvs,s=r[0]&&r[0].length>0,o=r[1]&&r[1].length>0,a=e.morphTargets,c=a.length;let l;if(c>0){l=[];for(let g=0;g<c;g++)l[g]={name:a[g].name,data:[]};this.morphTargets.position=l}const d=e.morphNormals,h=d.length;let u;if(h>0){u=[];for(let g=0;g<h;g++)u[g]={name:d[g].name,data:[]};this.morphTargets.normal=u}const f=e.skinIndices,p=e.skinWeights,y=f.length===i.length,v=p.length===i.length;i.length>0&&n.length===0&&console.error("THREE.DirectGeometry: Faceless geometries are not supported.");for(let g=0;g<n.length;g++){const m=n[g];this.vertices.push(i[m.a],i[m.b],i[m.c]);const _=m.vertexNormals;if(_.length===3)this.normals.push(_[0],_[1],_[2]);else{const M=m.normal;this.normals.push(M,M,M)}const b=m.vertexColors;if(b.length===3)this.colors.push(b[0],b[1],b[2]);else{const M=m.color;this.colors.push(M,M,M)}if(s===!0){const M=r[0][g];M!==void 0?this.uvs.push(M[0],M[1],M[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",g),this.uvs.push(new H,new H,new H))}if(o===!0){const M=r[1][g];M!==void 0?this.uvs2.push(M[0],M[1],M[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",g),this.uvs2.push(new H,new H,new H))}for(let M=0;M<c;M++){const x=a[M].vertices;l[M].data.push(x[m.a],x[m.b],x[m.c])}for(let M=0;M<h;M++){const x=d[M].vertexNormals[g];u[M].data.push(x.a,x.b,x.c)}y&&this.skinIndices.push(f[m.a],f[m.b],f[m.c]),v&&this.skinWeights.push(p[m.a],p[m.b],p[m.c])}return this.computeGroups(e),this.verticesNeedUpdate=e.verticesNeedUpdate,this.normalsNeedUpdate=e.normalsNeedUpdate,this.colorsNeedUpdate=e.colorsNeedUpdate,this.uvsNeedUpdate=e.uvsNeedUpdate,this.groupsNeedUpdate=e.groupsNeedUpdate,e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),this}}function lf(t){if(t.length===0)return-1/0;let e=t[0];for(let n=1,i=t.length;n<i;++n)t[n]>e&&(e=t[n]);return e}let Ep=1;const Yt=new Ee,ya=new ae,Ri=new w,Mt=new on,xr=new on,it=new w;function fe(){Object.defineProperty(this,"id",{value:Ep+=2}),this.uuid=xe.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}fe.prototype=Object.assign(Object.create(sn.prototype),{constructor:fe,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(t){return Array.isArray(t)?this.index=new(lf(t)>65535?ci:ai)(t,1):this.index=t,this},getAttribute:function(t){return this.attributes[t]},setAttribute:function(t,e){return this.attributes[t]=e,this},deleteAttribute:function(t){return delete this.attributes[t],this},addGroup:function(t,e,n){this.groups.push({start:t,count:e,materialIndex:n!==void 0?n:0})},clearGroups:function(){this.groups=[]},setDrawRange:function(t,e){this.drawRange.start=t,this.drawRange.count=e},applyMatrix4:function(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new mt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this},rotateX:function(t){return Yt.makeRotationX(t),this.applyMatrix4(Yt),this},rotateY:function(t){return Yt.makeRotationY(t),this.applyMatrix4(Yt),this},rotateZ:function(t){return Yt.makeRotationZ(t),this.applyMatrix4(Yt),this},translate:function(t,e,n){return Yt.makeTranslation(t,e,n),this.applyMatrix4(Yt),this},scale:function(t,e,n){return Yt.makeScale(t,e,n),this.applyMatrix4(Yt),this},lookAt:function(t){return ya.lookAt(t),ya.updateMatrix(),this.applyMatrix4(ya.matrix),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ri).negate(),this.translate(Ri.x,Ri.y,Ri.z),this},setFromObject:function(t){const e=t.geometry;if(t.isPoints||t.isLine){const n=new Q(e.vertices.length*3,3),i=new Q(e.colors.length*3,3);if(this.setAttribute("position",n.copyVector3sArray(e.vertices)),this.setAttribute("color",i.copyColorsArray(e.colors)),e.lineDistances&&e.lineDistances.length===e.vertices.length){const r=new Q(e.lineDistances.length,1);this.setAttribute("lineDistance",r.copyArray(e.lineDistances))}e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone())}else t.isMesh&&e&&e.isGeometry&&this.fromGeometry(e);return this},setFromPoints:function(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Q(e,3)),this},updateFromObject:function(t){let e=t.geometry;if(t.isMesh){let n=e.__directGeometry;if(e.elementsNeedUpdate===!0&&(n=void 0,e.elementsNeedUpdate=!1),n===void 0)return this.fromGeometry(e);n.verticesNeedUpdate=e.verticesNeedUpdate,n.normalsNeedUpdate=e.normalsNeedUpdate,n.colorsNeedUpdate=e.colorsNeedUpdate,n.uvsNeedUpdate=e.uvsNeedUpdate,n.groupsNeedUpdate=e.groupsNeedUpdate,e.verticesNeedUpdate=!1,e.normalsNeedUpdate=!1,e.colorsNeedUpdate=!1,e.uvsNeedUpdate=!1,e.groupsNeedUpdate=!1,e=n}if(e.verticesNeedUpdate===!0){const n=this.attributes.position;n!==void 0&&(n.copyVector3sArray(e.vertices),n.needsUpdate=!0),e.verticesNeedUpdate=!1}if(e.normalsNeedUpdate===!0){const n=this.attributes.normal;n!==void 0&&(n.copyVector3sArray(e.normals),n.needsUpdate=!0),e.normalsNeedUpdate=!1}if(e.colorsNeedUpdate===!0){const n=this.attributes.color;n!==void 0&&(n.copyColorsArray(e.colors),n.needsUpdate=!0),e.colorsNeedUpdate=!1}if(e.uvsNeedUpdate){const n=this.attributes.uv;n!==void 0&&(n.copyVector2sArray(e.uvs),n.needsUpdate=!0),e.uvsNeedUpdate=!1}if(e.lineDistancesNeedUpdate){const n=this.attributes.lineDistance;n!==void 0&&(n.copyArray(e.lineDistances),n.needsUpdate=!0),e.lineDistancesNeedUpdate=!1}return e.groupsNeedUpdate&&(e.computeGroups(t.geometry),this.groups=e.groups,e.groupsNeedUpdate=!1),this},fromGeometry:function(t){return t.__directGeometry=new Tp().fromGeometry(t),this.fromDirectGeometry(t.__directGeometry)},fromDirectGeometry:function(t){const e=new Float32Array(t.vertices.length*3);if(this.setAttribute("position",new me(e,3).copyVector3sArray(t.vertices)),t.normals.length>0){const n=new Float32Array(t.normals.length*3);this.setAttribute("normal",new me(n,3).copyVector3sArray(t.normals))}if(t.colors.length>0){const n=new Float32Array(t.colors.length*3);this.setAttribute("color",new me(n,3).copyColorsArray(t.colors))}if(t.uvs.length>0){const n=new Float32Array(t.uvs.length*2);this.setAttribute("uv",new me(n,2).copyVector2sArray(t.uvs))}if(t.uvs2.length>0){const n=new Float32Array(t.uvs2.length*2);this.setAttribute("uv2",new me(n,2).copyVector2sArray(t.uvs2))}this.groups=t.groups;for(const n in t.morphTargets){const i=[],r=t.morphTargets[n];for(let s=0,o=r.length;s<o;s++){const a=r[s],c=new Q(a.data.length*3,3);c.name=a.name,i.push(c.copyVector3sArray(a.data))}this.morphAttributes[n]=i}if(t.skinIndices.length>0){const n=new Q(t.skinIndices.length*4,4);this.setAttribute("skinIndex",n.copyVector4sArray(t.skinIndices))}if(t.skinWeights.length>0){const n=new Q(t.skinWeights.length*4,4);this.setAttribute("skinWeight",n.copyVector4sArray(t.skinWeights))}return t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),this},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new on);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Mt.setFromBufferAttribute(r),this.morphTargetsRelative?(it.addVectors(this.boundingBox.min,Mt.min),this.boundingBox.expandByPoint(it),it.addVectors(this.boundingBox.max,Mt.max),this.boundingBox.expandByPoint(it)):(this.boundingBox.expandByPoint(Mt.min),this.boundingBox.expandByPoint(Mt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new bn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new w,1/0);return}if(t){const n=this.boundingSphere.center;if(Mt.setFromBufferAttribute(t),e)for(let r=0,s=e.length;r<s;r++){const o=e[r];xr.setFromBufferAttribute(o),this.morphTargetsRelative?(it.addVectors(Mt.min,xr.min),Mt.expandByPoint(it),it.addVectors(Mt.max,xr.max),Mt.expandByPoint(it)):(Mt.expandByPoint(xr.min),Mt.expandByPoint(xr.max))}Mt.getCenter(n);let i=0;for(let r=0,s=t.count;r<s;r++)it.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(it));if(e)for(let r=0,s=e.length;r<s;r++){const o=e[r],a=this.morphTargetsRelative;for(let c=0,l=o.count;c<l;c++)it.fromBufferAttribute(o,c),a&&(Ri.fromBufferAttribute(t,c),it.add(Ri)),i=Math.max(i,n.distanceToSquared(it))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}},computeFaceNormals:function(){},computeVertexNormals:function(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,u=n.count;h<u;h++)n.setXYZ(h,0,0,0);const i=new w,r=new w,s=new w,o=new w,a=new w,c=new w,l=new w,d=new w;if(t)for(let h=0,u=t.count;h<u;h+=3){const f=t.getX(h+0),p=t.getX(h+1),y=t.getX(h+2);i.fromBufferAttribute(e,f),r.fromBufferAttribute(e,p),s.fromBufferAttribute(e,y),l.subVectors(s,r),d.subVectors(i,r),l.cross(d),o.fromBufferAttribute(n,f),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,y),o.add(l),a.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z)}else for(let h=0,u=e.count;h<u;h+=3)i.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),s.fromBufferAttribute(e,h+2),l.subVectors(s,r),d.subVectors(i,r),l.cross(d),n.setXYZ(h+0,l.x,l.y,l.z),n.setXYZ(h+1,l.x,l.y,l.z),n.setXYZ(h+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}},merge:function(t,e){if(!(t&&t.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(t.attributes[i]===void 0)continue;const s=n[i].array,o=t.attributes[i],a=o.array,c=o.itemSize*e,l=Math.min(a.length,s.length-c);for(let d=0,h=c;d<l;d++,h++)s[h]=a[d]}return this},normalizeNormals:function(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)it.fromBufferAttribute(t,e),it.normalize(),t.setXYZ(e,it.x,it.y,it.z)},toNonIndexed:function(){function t(o,a){const c=o.array,l=o.itemSize,d=o.normalized,h=new c.constructor(a.length*l);let u=0,f=0;for(let p=0,y=a.length;p<y;p++){u=a[p]*l;for(let v=0;v<l;v++)h[f++]=c[u++]}return new me(h,l,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),this;const e=new fe,n=this.index.array,i=this.attributes;for(const o in i){const a=i[o],c=t(a,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const a=[],c=r[o];for(let l=0,d=c.length;l<d;l++){const h=c[l],u=t(h,n);a.push(u)}e.morphAttributes[o]=a}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,a=s.length;o<a;o++){const c=s[o];e.addGroup(c.start,c.count,c.materialIndex)}return e},toJSON:function(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const c in a)a[c]!==void 0&&(t[c]=a[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const a in n){const c=n[a],l=c.toJSON(t.data);c.name!==""&&(l.name=c.name),t.data.attributes[a]=l}const i={};let r=!1;for(const a in this.morphAttributes){const c=this.morphAttributes[a],l=[];for(let d=0,h=c.length;d<h;d++){const u=c[d],f=u.toJSON(t.data);u.name!==""&&(f.name=u.name),l.push(f)}l.length>0&&(i[a]=l,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t},clone:function(){return new fe().copy(this)},copy:function(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const l=i[c];this.setAttribute(c,l.clone(e))}const r=t.morphAttributes;for(const c in r){const l=[],d=r[c];for(let h=0,u=d.length;h<u;h++)l.push(d[h].clone(e));this.morphAttributes[c]=l}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let c=0,l=s.length;c<l;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const a=t.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});const Ll=new Ee,Yn=new hr,va=new bn,An=new w,Ln=new w,Rn=new w,xa=new w,_a=new w,ba=new w,Rs=new w,Cs=new w,Ps=new w,Gi=new H,Hi=new H,Vi=new H,Pr=new w,Is=new w;function We(t,e){ae.call(this),this.type="Mesh",this.geometry=t!==void 0?t:new fe,this.material=e!==void 0?e:new It,this.updateMorphTargets()}We.prototype=Object.assign(Object.create(ae.prototype),{constructor:We,isMesh:!0,copy:function(t){return ae.prototype.copy.call(this,t),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this},updateMorphTargets:function(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}},raycast:function(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(r),t.ray.intersectsSphere(va)===!1)||(Ll.getInverse(r),Yn.copy(t.ray).applyMatrix4(Ll),n.boundingBox!==null&&Yn.intersectsBox(n.boundingBox)===!1))return;let s;if(n.isBufferGeometry){const o=n.index,a=n.attributes.position,c=n.morphAttributes.position,l=n.morphTargetsRelative,d=n.attributes.uv,h=n.attributes.uv2,u=n.groups,f=n.drawRange;if(o!==null)if(Array.isArray(i))for(let p=0,y=u.length;p<y;p++){const v=u[p],g=i[v.materialIndex],m=Math.max(v.start,f.start),_=Math.min(v.start+v.count,f.start+f.count);for(let b=m,M=_;b<M;b+=3){const x=o.getX(b),A=o.getX(b+1),I=o.getX(b+2);s=Ds(this,g,t,Yn,a,c,l,d,h,x,A,I),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=v.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let v=p,g=y;v<g;v+=3){const m=o.getX(v),_=o.getX(v+1),b=o.getX(v+2);s=Ds(this,i,t,Yn,a,c,l,d,h,m,_,b),s&&(s.faceIndex=Math.floor(v/3),e.push(s))}}else if(a!==void 0)if(Array.isArray(i))for(let p=0,y=u.length;p<y;p++){const v=u[p],g=i[v.materialIndex],m=Math.max(v.start,f.start),_=Math.min(v.start+v.count,f.start+f.count);for(let b=m,M=_;b<M;b+=3){const x=b,A=b+1,I=b+2;s=Ds(this,g,t,Yn,a,c,l,d,h,x,A,I),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=v.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let v=p,g=y;v<g;v+=3){const m=v,_=v+1,b=v+2;s=Ds(this,i,t,Yn,a,c,l,d,h,m,_,b),s&&(s.faceIndex=Math.floor(v/3),e.push(s))}}}else if(n.isGeometry){const o=Array.isArray(i),a=n.vertices,c=n.faces;let l;const d=n.faceVertexUvs[0];d.length>0&&(l=d);for(let h=0,u=c.length;h<u;h++){const f=c[h],p=o?i[f.materialIndex]:i;if(p===void 0)continue;const y=a[f.a],v=a[f.b],g=a[f.c];if(s=hf(this,p,t,Yn,y,v,g,Pr),s){if(l&&l[h]){const m=l[h];Gi.copy(m[0]),Hi.copy(m[1]),Vi.copy(m[2]),s.uv=ot.getUV(Pr,y,v,g,Gi,Hi,Vi,new H)}s.face=f,s.faceIndex=h,e.push(s)}}}}});function hf(t,e,n,i,r,s,o,a){let c;if(e.side===et?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side!==as,a),c===null)return null;Is.copy(a),Is.applyMatrix4(t.matrixWorld);const l=n.ray.origin.distanceTo(Is);return l<n.near||l>n.far?null:{distance:l,point:Is.clone(),object:t}}function Ds(t,e,n,i,r,s,o,a,c,l,d,h){An.fromBufferAttribute(r,l),Ln.fromBufferAttribute(r,d),Rn.fromBufferAttribute(r,h);const u=t.morphTargetInfluences;if(e.morphTargets&&s&&u){Rs.set(0,0,0),Cs.set(0,0,0),Ps.set(0,0,0);for(let p=0,y=s.length;p<y;p++){const v=u[p],g=s[p];v!==0&&(xa.fromBufferAttribute(g,l),_a.fromBufferAttribute(g,d),ba.fromBufferAttribute(g,h),o?(Rs.addScaledVector(xa,v),Cs.addScaledVector(_a,v),Ps.addScaledVector(ba,v)):(Rs.addScaledVector(xa.sub(An),v),Cs.addScaledVector(_a.sub(Ln),v),Ps.addScaledVector(ba.sub(Rn),v)))}An.add(Rs),Ln.add(Cs),Rn.add(Ps)}t.isSkinnedMesh&&(t.boneTransform(l,An),t.boneTransform(d,Ln),t.boneTransform(h,Rn));const f=hf(t,e,n,i,An,Ln,Rn,Pr);if(f){a&&(Gi.fromBufferAttribute(a,l),Hi.fromBufferAttribute(a,d),Vi.fromBufferAttribute(a,h),f.uv=ot.getUV(Pr,An,Ln,Rn,Gi,Hi,Vi,new H)),c&&(Gi.fromBufferAttribute(c,l),Hi.fromBufferAttribute(c,d),Vi.fromBufferAttribute(c,h),f.uv2=ot.getUV(Pr,An,Ln,Rn,Gi,Hi,Vi,new H));const p=new Vr(l,d,h);ot.getNormal(An,Ln,Rn,p.normal),f.face=p}return f}class ps extends fe{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxBufferGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],d=[],h=[];let u=0,f=0;p("z","y","x",-1,-1,i,n,e,o,s,0),p("z","y","x",1,-1,i,n,-e,o,s,1),p("x","z","y",1,1,e,i,n,r,o,2),p("x","z","y",1,-1,e,i,-n,r,o,3),p("x","y","z",1,-1,e,n,i,r,s,4),p("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Q(l,3)),this.setAttribute("normal",new Q(d,3)),this.setAttribute("uv",new Q(h,2));function p(y,v,g,m,_,b,M,x,A,I,P){const U=b/A,D=M/I,N=b/2,O=M/2,R=x/2,C=A+1,F=I+1;let W=0,Y=0;const ne=new w;for(let le=0;le<F;le++){const se=le*D-O;for(let be=0;be<C;be++){const Se=be*U-N;ne[y]=Se*m,ne[v]=se*_,ne[g]=R,l.push(ne.x,ne.y,ne.z),ne[y]=0,ne[v]=0,ne[g]=x>0?1:-1,d.push(ne.x,ne.y,ne.z),h.push(be/A),h.push(1-le/I),W+=1}}for(let le=0;le<I;le++)for(let se=0;se<A;se++){const be=u+se+C*le,Se=u+se+C*(le+1),qe=u+(se+1)+C*(le+1),V=u+(se+1)+C*le;c.push(be,Se,V),c.push(Se,qe,V),Y+=6}a.addGroup(f,Y,P),f+=Y,u+=W}}}function Yi(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function lt(t){const e={};for(let n=0;n<t.length;n++){const i=Yi(t[n]);for(const r in i)e[r]=i[r]}return e}const uf={clone:Yi,merge:lt};var Ap=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;function yt(t){ge.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Ap,this.fragmentShader=Lp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&(t.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}yt.prototype=Object.create(ge.prototype);yt.prototype.constructor=yt;yt.prototype.isShaderMaterial=!0;yt.prototype.copy=function(t){return ge.prototype.copy.call(this,t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yi(t.uniforms),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.lights=t.lights,this.clipping=t.clipping,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this};yt.prototype.toJSON=function(t){const e=ge.prototype.toJSON.call(this,t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?e.uniforms[i]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[i]={type:"m4",value:s.toArray()}:e.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e};function Kt(){ae.call(this),this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee}Kt.prototype=Object.assign(Object.create(ae.prototype),{constructor:Kt,isCamera:!0,copy:function(t,e){return ae.prototype.copy.call(this,t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this},getWorldDirection:function(t){t===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),t=new w),this.updateMatrixWorld(!0);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()},updateMatrixWorld:function(t){ae.prototype.updateMatrixWorld.call(this,t),this.matrixWorldInverse.getInverse(this.matrixWorld)},updateWorldMatrix:function(t,e){ae.prototype.updateWorldMatrix.call(this,t,e),this.matrixWorldInverse.getInverse(this.matrixWorld)},clone:function(){return new this.constructor().copy(this)}});function Ke(t,e,n,i){Kt.call(this),this.type="PerspectiveCamera",this.fov=t!==void 0?t:50,this.zoom=1,this.near=n!==void 0?n:.1,this.far=i!==void 0?i:2e3,this.focus=10,this.aspect=e!==void 0?e:1,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}Ke.prototype=Object.assign(Object.create(Kt.prototype),{constructor:Ke,isPerspectiveCamera:!0,copy:function(t,e){return Kt.prototype.copy.call(this,t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this},setFocalLength:function(t){const e=.5*this.getFilmHeight()/t;this.fov=xe.RAD2DEG*2*Math.atan(e),this.updateProjectionMatrix()},getFocalLength:function(){const t=Math.tan(xe.DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/t},getEffectiveFOV:function(){return xe.RAD2DEG*2*Math.atan(Math.tan(xe.DEG2RAD*.5*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(t,e,n,i,r,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){const t=this.near;let e=t*Math.tan(xe.DEG2RAD*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const a=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/a,e-=s.offsetY*n/c,i*=s.width/a,n*=s.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(t){const e=ae.prototype.toJSON.call(this,t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}});const Ci=90,Pi=1;function Zi(t,e,n){if(ae.call(this),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new Ke(Ci,Pi,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new w(1,0,0)),this.add(i);const r=new Ke(Ci,Pi,t,e);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new w(-1,0,0)),this.add(r);const s=new Ke(Ci,Pi,t,e);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new w(0,1,0)),this.add(s);const o=new Ke(Ci,Pi,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new w(0,-1,0)),this.add(o);const a=new Ke(Ci,Pi,t,e);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new w(0,0,1)),this.add(a);const c=new Ke(Ci,Pi,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new w(0,0,-1)),this.add(c),this.update=function(l,d){this.parent===null&&this.updateMatrixWorld();const h=l.xr.enabled,u=l.getRenderTarget();l.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,l.setRenderTarget(n,0),l.render(d,i),l.setRenderTarget(n,1),l.render(d,r),l.setRenderTarget(n,2),l.render(d,s),l.setRenderTarget(n,3),l.render(d,o),l.setRenderTarget(n,4),l.render(d,a),n.texture.generateMipmaps=f,l.setRenderTarget(n,5),l.render(d,c),l.setRenderTarget(u),l.xr.enabled=h},this.clear=function(l,d,h,u){const f=l.getRenderTarget();for(let p=0;p<6;p++)l.setRenderTarget(n,p),l.clear(d,h,u);l.setRenderTarget(f)}}Zi.prototype=Object.create(ae.prototype);Zi.prototype.constructor=Zi;function en(t,e,n,i,r,s,o,a,c,l){t=t!==void 0?t:[],e=e!==void 0?e:ls,o=o!==void 0?o:In,ze.call(this,t,e,n,i,r,s,o,a,c,l),this.flipY=!1,this._needsFlipEnvMap=!0}en.prototype=Object.create(ze.prototype);en.prototype.constructor=en;en.prototype.isCubeTexture=!0;Object.defineProperty(en.prototype,"images",{get:function(){return this.image},set:function(t){this.image=t}});function Fn(t,e,n){Number.isInteger(e)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),e=n),Et.call(this,t,t,e),e=e||{},this.texture=new en(void 0,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture._needsFlipEnvMap=!1}Fn.prototype=Object.create(Et.prototype);Fn.prototype.constructor=Fn;Fn.prototype.isWebGLCubeRenderTarget=!0;Fn.prototype.fromEquirectangularTexture=function(t,e){this.texture.type=e.type,this.texture.format=Tt,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
		`},i=new ps(5,5,5),r=new yt({name:"CubemapFromEquirect",uniforms:Yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:et,blending:yn});r.uniforms.tEquirect.value=e;const s=new We(i,r),o=e.minFilter;return e.minFilter===cr&&(e.minFilter=rt),new Zi(1,10,this).update(t,s),e.minFilter=o,s.geometry.dispose(),s.material.dispose(),this};function li(t,e,n,i,r,s,o,a,c,l,d,h){ze.call(this,null,s,o,a,c,l,i,r,d,h),this.image={data:t||null,width:e||1,height:n||1},this.magFilter=c!==void 0?c:tt,this.minFilter=l!==void 0?l:tt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}li.prototype=Object.create(ze.prototype);li.prototype.constructor=li;li.prototype.isDataTexture=!0;const Ii=new bn,Ns=new w;class ms{constructor(e,n,i,r,s,o){this.planes=[e!==void 0?e:new $t,n!==void 0?n:new $t,i!==void 0?i:new $t,r!==void 0?r:new $t,s!==void 0?s:new $t,o!==void 0?o:new $t]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}clone(){return new this.constructor().copy(this)}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],c=i[4],l=i[5],d=i[6],h=i[7],u=i[8],f=i[9],p=i[10],y=i[11],v=i[12],g=i[13],m=i[14],_=i[15];return n[0].setComponents(a-r,h-c,y-u,_-v).normalize(),n[1].setComponents(a+r,h+c,y+u,_+v).normalize(),n[2].setComponents(a+s,h+l,y+f,_+g).normalize(),n[3].setComponents(a-s,h-l,y-f,_-g).normalize(),n[4].setComponents(a-o,h-d,y-p,_-m).normalize(),n[5].setComponents(a+o,h+d,y+p,_+m).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),Ii.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSprite(e){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ns.x=r.normal.x>0?e.max.x:e.min.x,Ns.y=r.normal.y>0?e.max.y:e.min.y,Ns.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ns)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}}function ff(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Rp(t,e){const n=e.isWebGL2,i=new WeakMap;function r(l,d){const h=l.array,u=l.usage,f=t.createBuffer();t.bindBuffer(d,f),t.bufferData(d,h,u),l.onUploadCallback();let p=5126;return h instanceof Float32Array?p=5126:h instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):h instanceof Uint16Array?p=5123:h instanceof Int16Array?p=5122:h instanceof Uint32Array?p=5125:h instanceof Int32Array?p=5124:h instanceof Int8Array?p=5120:h instanceof Uint8Array&&(p=5121),{buffer:f,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,d,h){const u=d.array,f=d.updateRange;t.bindBuffer(h,l),f.count===-1?t.bufferSubData(h,0,u):(n?t.bufferSubData(h,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):t.bufferSubData(h,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const d=i.get(l);d&&(t.deleteBuffer(d.buffer),i.delete(l))}function c(l,d){if(l.isGLBufferAttribute){var h=i.get(l);(!h||h.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u===void 0?i.set(l,r(l,d)):u.version<l.version&&(s(u.buffer,l,d),u.version=l.version)}return{get:o,remove:a,update:c}}let Xo=class extends fe{constructor(e,n,i,r){super(),this.type="PlaneBufferGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r},e=e||1,n=n||1;const s=e/2,o=n/2,a=Math.floor(i)||1,c=Math.floor(r)||1,l=a+1,d=c+1,h=e/a,u=n/c,f=[],p=[],y=[],v=[];for(let g=0;g<d;g++){const m=g*u-o;for(let _=0;_<l;_++){const b=_*h-s;p.push(b,-m,0),y.push(0,0,1),v.push(_/a),v.push(1-g/c)}}for(let g=0;g<c;g++)for(let m=0;m<a;m++){const _=m+l*g,b=m+l*(g+1),M=m+1+l*(g+1),x=m+1+l*g;f.push(_,b,x),f.push(b,M,x)}this.setIndex(f),this.setAttribute("position",new Q(p,3)),this.setAttribute("normal",new Q(y,3)),this.setAttribute("uv",new Q(v,2))}};var Cp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Pp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ip=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,Dp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,Np=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bp="vec3 transformed = vec3( position );",Op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fp=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
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
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
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
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,zp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 );
		fDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kp=`#ifdef USE_COLOR
	diffuseColor.rgb *= vColor;
#endif`,Wp=`#ifdef USE_COLOR
	varying vec3 vColor;
#endif`,jp=`#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,qp=`#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor.xyz *= color.xyz;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Xp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Yp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
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
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
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
#endif`,Zp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Jp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$p=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Qp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,em="gl_FragColor = linearToOutputTexel( gl_FragColor );",tm=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,nm=`#ifdef USE_ENVMAP
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
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,im=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,om=`#ifdef USE_ENVMAP
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
#endif`,am=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,cm=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,lm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,um=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,fm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,dm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pm=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,mm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
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
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
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
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
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
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,gm=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,ym=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vm=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,xm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_m=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,bm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,wm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mm=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
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
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,Tm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Em=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Am=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Rm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Cm=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,Pm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Im=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Om=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,Fm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,zm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
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
#endif`,Um=`#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
			bitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Gm=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );
#endif`,Hm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		float scale = sign( st1.t * st0.s - st0.t * st1.s );
		vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );
		vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );
		vec3 N = normalize( surf_norm );
		mat3 tsn = mat3( S, T, N );
		mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		return normalize( tsn * mapN );
	}
#endif`,Vm=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,km=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );
	#endif
#endif`,Wm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,jm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,qm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ym=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$m=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qm=`#ifdef USE_SHADOWMAP
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
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
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
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
#endif`,Km=`#ifdef USE_SHADOWMAP
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
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
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
#endif`,eg=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,tg=`float getShadowMask() {
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
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
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
}`,ng=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ig=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,rg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sg=`#ifdef USE_SKINNING
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
#endif`,og=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ag=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lg=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hg=`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,ug=`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,fg=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,dg=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,pg=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,mg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,gg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,yg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,vg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xg=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,_g=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bg=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
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
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Sg=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
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
}`,Tg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Eg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
}`,Ag=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
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
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ig=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Dg=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
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
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ng=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
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
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
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
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Og=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Fg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
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
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zg=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}`,Ug=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
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
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gg=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}`,Hg=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vg=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
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
}`,kg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
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
}`,Wg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,Xg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Yg=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Jg=`uniform float rotation;
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
}`;const Ce={alphamap_fragment:Cp,alphamap_pars_fragment:Pp,alphatest_fragment:Ip,aomap_fragment:Dp,aomap_pars_fragment:Np,begin_vertex:Bp,beginnormal_vertex:Op,bsdfs:Fp,bumpmap_pars_fragment:zp,clipping_planes_fragment:Up,clipping_planes_pars_fragment:Gp,clipping_planes_pars_vertex:Hp,clipping_planes_vertex:Vp,color_fragment:kp,color_pars_fragment:Wp,color_pars_vertex:jp,color_vertex:qp,common:Xp,cube_uv_reflection_fragment:Yp,defaultnormal_vertex:Zp,displacementmap_pars_vertex:Jp,displacementmap_vertex:$p,emissivemap_fragment:Qp,emissivemap_pars_fragment:Kp,encodings_fragment:em,encodings_pars_fragment:tm,envmap_fragment:nm,envmap_common_pars_fragment:im,envmap_pars_fragment:rm,envmap_pars_vertex:sm,envmap_physical_pars_fragment:gm,envmap_vertex:om,fog_vertex:am,fog_pars_vertex:cm,fog_fragment:lm,fog_pars_fragment:hm,gradientmap_pars_fragment:um,lightmap_fragment:fm,lightmap_pars_fragment:dm,lights_lambert_vertex:pm,lights_pars_begin:mm,lights_toon_fragment:ym,lights_toon_pars_fragment:vm,lights_phong_fragment:xm,lights_phong_pars_fragment:_m,lights_physical_fragment:bm,lights_physical_pars_fragment:wm,lights_fragment_begin:Mm,lights_fragment_maps:Sm,lights_fragment_end:Tm,logdepthbuf_fragment:Em,logdepthbuf_pars_fragment:Am,logdepthbuf_pars_vertex:Lm,logdepthbuf_vertex:Rm,map_fragment:Cm,map_pars_fragment:Pm,map_particle_fragment:Im,map_particle_pars_fragment:Dm,metalnessmap_fragment:Nm,metalnessmap_pars_fragment:Bm,morphnormal_vertex:Om,morphtarget_pars_vertex:Fm,morphtarget_vertex:zm,normal_fragment_begin:Um,normal_fragment_maps:Gm,normalmap_pars_fragment:Hm,clearcoat_normal_fragment_begin:Vm,clearcoat_normal_fragment_maps:km,clearcoat_pars_fragment:Wm,packing:jm,premultiplied_alpha_fragment:qm,project_vertex:Xm,dithering_fragment:Ym,dithering_pars_fragment:Zm,roughnessmap_fragment:Jm,roughnessmap_pars_fragment:$m,shadowmap_pars_fragment:Qm,shadowmap_pars_vertex:Km,shadowmap_vertex:eg,shadowmask_pars_fragment:tg,skinbase_vertex:ng,skinning_pars_vertex:ig,skinning_vertex:rg,skinnormal_vertex:sg,specularmap_fragment:og,specularmap_pars_fragment:ag,tonemapping_fragment:cg,tonemapping_pars_fragment:lg,transmissionmap_fragment:hg,transmissionmap_pars_fragment:ug,uv_pars_fragment:fg,uv_pars_vertex:dg,uv_vertex:pg,uv2_pars_fragment:mg,uv2_pars_vertex:gg,uv2_vertex:yg,worldpos_vertex:vg,background_frag:xg,background_vert:_g,cube_frag:bg,cube_vert:wg,depth_frag:Mg,depth_vert:Sg,distanceRGBA_frag:Tg,distanceRGBA_vert:Eg,equirect_frag:Ag,equirect_vert:Lg,linedashed_frag:Rg,linedashed_vert:Cg,meshbasic_frag:Pg,meshbasic_vert:Ig,meshlambert_frag:Dg,meshlambert_vert:Ng,meshmatcap_frag:Bg,meshmatcap_vert:Og,meshtoon_frag:Fg,meshtoon_vert:zg,meshphong_frag:Ug,meshphong_vert:Gg,meshphysical_frag:Hg,meshphysical_vert:Vg,normal_frag:kg,normal_vert:Wg,points_frag:jg,points_vert:qg,shadow_frag:Xg,shadow_vert:Yg,sprite_frag:Zg,sprite_vert:Jg},ee={common:{diffuse:{value:new re(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new mt},uv2Transform:{value:new mt},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new H(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new mt}},sprite:{diffuse:{value:new re(15658734)},opacity:{value:1},center:{value:new H(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new mt}}},Ht={basic:{uniforms:lt([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:lt([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.fog,ee.lights,{emissive:{value:new re(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:lt([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:lt([ee.common,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.roughnessmap,ee.metalnessmap,ee.fog,ee.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:lt([ee.common,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.gradientmap,ee.fog,ee.lights,{emissive:{value:new re(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:lt([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:lt([ee.points,ee.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:lt([ee.common,ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:lt([ee.common,ee.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:lt([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.normal_vert,fragmentShader:Ce.normal_frag},sprite:{uniforms:lt([ee.sprite,ee.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},cube:{uniforms:lt([ee.envmap,{opacity:{value:1}}]),vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:lt([ee.common,ee.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:lt([ee.lights,ee.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};Ht.physical={uniforms:lt([Ht.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new H(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new re(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};function $g(t,e,n,i,r){const s=new re(0);let o=0,a,c,l=null,d=0,h=null;function u(p,y,v,g){let m=y.isScene===!0?y.background:null;m&&m.isTexture&&(m=e.get(m));const _=t.xr,b=_.getSession&&_.getSession();b&&b.environmentBlendMode==="additive"&&(m=null),m===null?f(s,o):m&&m.isColor&&(f(m,1),g=!0),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),m&&(m.isCubeTexture||m.isWebGLCubeRenderTarget||m.mapping===ar)?(c===void 0&&(c=new We(new ps(1,1,1),new yt({name:"BackgroundCubeMaterial",uniforms:Yi(Ht.cube.uniforms),vertexShader:Ht.cube.vertexShader,fragmentShader:Ht.cube.fragmentShader,side:et,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,x,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),m.isWebGLCubeRenderTarget&&(m=m.texture),c.material.uniforms.envMap.value=m,c.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m._needsFlipEnvMap?-1:1,(l!==m||d!==m.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,l=m,d=m.version,h=t.toneMapping),p.unshift(c,c.geometry,c.material,0,0,null)):m&&m.isTexture&&(a===void 0&&(a=new We(new Xo(2,2),new yt({name:"BackgroundMaterial",uniforms:Yi(Ht.background.uniforms),vertexShader:Ht.background.vertexShader,fragmentShader:Ht.background.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(a)),a.material.uniforms.t2D.value=m,m.matrixAutoUpdate===!0&&m.updateMatrix(),a.material.uniforms.uvTransform.value.copy(m.matrix),(l!==m||d!==m.version||h!==t.toneMapping)&&(a.material.needsUpdate=!0,l=m,d=m.version,h=t.toneMapping),p.unshift(a,a.geometry,a.material,0,0,null))}function f(p,y){n.buffers.color.setClear(p.r,p.g,p.b,y,r)}return{getClearColor:function(){return s},setClearColor:function(p,y){s.set(p),o=y!==void 0?y:1,f(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,f(s,o)},render:u}}function Qg(t,e,n,i){const r=t.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=y(null);let l=c;function d(O,R,C,F,W){let Y=!1;if(o){const ne=p(F,C,R);l!==ne&&(l=ne,u(l.object)),Y=v(F,W),Y&&g(F,W)}else{const ne=R.wireframe===!0;(l.geometry!==F.id||l.program!==C.id||l.wireframe!==ne)&&(l.geometry=F.id,l.program=C.id,l.wireframe=ne,Y=!0)}O.isInstancedMesh===!0&&(Y=!0),W!==null&&n.update(W,34963),Y&&(A(O,R,C,F),W!==null&&t.bindBuffer(34963,n.get(W).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function u(O){return i.isWebGL2?t.bindVertexArray(O):s.bindVertexArrayOES(O)}function f(O){return i.isWebGL2?t.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function p(O,R,C){const F=C.wireframe===!0;let W=a[O.id];W===void 0&&(W={},a[O.id]=W);let Y=W[R.id];Y===void 0&&(Y={},W[R.id]=Y);let ne=Y[F];return ne===void 0&&(ne=y(h()),Y[F]=ne),ne}function y(O){const R=[],C=[],F=[];for(let W=0;W<r;W++)R[W]=0,C[W]=0,F[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:C,attributeDivisors:F,object:O,attributes:{},index:null}}function v(O,R){const C=l.attributes,F=O.attributes;if(Object.keys(C).length!==Object.keys(F).length)return!0;for(const W in F){const Y=C[W],ne=F[W];if(Y===void 0||Y.attribute!==ne||Y.data!==ne.data)return!0}return l.index!==R}function g(O,R){const C={},F=O.attributes;for(const W in F){const Y=F[W],ne={};ne.attribute=Y,Y.data&&(ne.data=Y.data),C[W]=ne}l.attributes=C,l.index=R}function m(){const O=l.newAttributes;for(let R=0,C=O.length;R<C;R++)O[R]=0}function _(O){b(O,0)}function b(O,R){const C=l.newAttributes,F=l.enabledAttributes,W=l.attributeDivisors;C[O]=1,F[O]===0&&(t.enableVertexAttribArray(O),F[O]=1),W[O]!==R&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,R),W[O]=R)}function M(){const O=l.newAttributes,R=l.enabledAttributes;for(let C=0,F=R.length;C<F;C++)R[C]!==O[C]&&(t.disableVertexAttribArray(C),R[C]=0)}function x(O,R,C,F,W,Y){i.isWebGL2===!0&&(C===5124||C===5125)?t.vertexAttribIPointer(O,R,C,W,Y):t.vertexAttribPointer(O,R,C,F,W,Y)}function A(O,R,C,F){if(i.isWebGL2===!1&&(O.isInstancedMesh||F.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const W=F.attributes,Y=C.getAttributes(),ne=R.defaultAttributeValues;for(const le in Y){const se=Y[le];if(se>=0){const be=W[le];if(be!==void 0){const Se=be.normalized,qe=be.itemSize,V=n.get(be);if(V===void 0)continue;const ct=V.buffer,ye=V.type,De=V.bytesPerElement;if(be.isInterleavedBufferAttribute){const Te=be.data,Ne=Te.stride,Re=be.offset;Te&&Te.isInstancedInterleavedBuffer?(b(se,Te.meshPerAttribute),F._maxInstanceCount===void 0&&(F._maxInstanceCount=Te.meshPerAttribute*Te.count)):_(se),t.bindBuffer(34962,ct),x(se,qe,ye,Se,Ne*De,Re*De)}else be.isInstancedBufferAttribute?(b(se,be.meshPerAttribute),F._maxInstanceCount===void 0&&(F._maxInstanceCount=be.meshPerAttribute*be.count)):_(se),t.bindBuffer(34962,ct),x(se,qe,ye,Se,0,0)}else if(le==="instanceMatrix"){const Se=n.get(O.instanceMatrix);if(Se===void 0)continue;const qe=Se.buffer,V=Se.type;b(se+0,1),b(se+1,1),b(se+2,1),b(se+3,1),t.bindBuffer(34962,qe),t.vertexAttribPointer(se+0,4,V,!1,64,0),t.vertexAttribPointer(se+1,4,V,!1,64,16),t.vertexAttribPointer(se+2,4,V,!1,64,32),t.vertexAttribPointer(se+3,4,V,!1,64,48)}else if(le==="instanceColor"){const Se=n.get(O.instanceColor);if(Se===void 0)continue;const qe=Se.buffer,V=Se.type;b(se,1),t.bindBuffer(34962,qe),t.vertexAttribPointer(se,3,V,!1,12,0)}else if(ne!==void 0){const Se=ne[le];if(Se!==void 0)switch(Se.length){case 2:t.vertexAttrib2fv(se,Se);break;case 3:t.vertexAttrib3fv(se,Se);break;case 4:t.vertexAttrib4fv(se,Se);break;default:t.vertexAttrib1fv(se,Se)}}}}M()}function I(){D();for(const O in a){const R=a[O];for(const C in R){const F=R[C];for(const W in F)f(F[W].object),delete F[W];delete R[C]}delete a[O]}}function P(O){if(a[O.id]===void 0)return;const R=a[O.id];for(const C in R){const F=R[C];for(const W in F)f(F[W].object),delete F[W];delete R[C]}delete a[O.id]}function U(O){for(const R in a){const C=a[R];if(C[O.id]===void 0)continue;const F=C[O.id];for(const W in F)f(F[W].object),delete F[W];delete C[O.id]}}function D(){N(),l!==c&&(l=c,u(l.object))}function N(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:D,resetDefaultState:N,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfProgram:U,initAttributes:m,enableAttribute:_,disableUnusedAttributes:M}}function Kg(t,e,n,i){const r=i.isWebGL2;let s;function o(l){s=l}function a(l,d){t.drawArrays(s,l,d),n.update(d,s,1)}function c(l,d,h){if(h===0)return;let u,f;if(r)u=t,f="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[f](s,l,d,h),n.update(d,s,h)}this.setMode=o,this.render=a,this.renderInstances=c}function ey(t,e,n){let i;function r(){if(i!==void 0)return i;const x=e.get("EXT_texture_filter_anisotropic");return x!==null?i=t.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT):i=0,i}function s(x){if(x==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";x="mediump"}return x==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&t instanceof WebGL2ComputeRenderingContext;let a=n.precision!==void 0?n.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=n.logarithmicDepthBuffer===!0,d=t.getParameter(34930),h=t.getParameter(35660),u=t.getParameter(3379),f=t.getParameter(34076),p=t.getParameter(34921),y=t.getParameter(36347),v=t.getParameter(36348),g=t.getParameter(36349),m=h>0,_=o||!!e.get("OES_texture_float"),b=m&&_,M=o?t.getParameter(36183):0;return{isWebGL2:o,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:l,maxTextures:d,maxVertexTextures:h,maxTextureSize:u,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:g,vertexTextures:m,floatFragmentTextures:_,floatVertexTextures:b,maxSamples:M}}function ty(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new $t,a=new mt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u,f){const p=h.length!==0||u||i!==0||r;return r=u,n=d(h,f,0),i=h.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1,l()},this.setState=function(h,u,f){const p=h.clippingPlanes,y=h.clipIntersection,v=h.clipShadows,g=t.get(h);if(!r||p===null||p.length===0||s&&!v)s?d(null):l();else{const m=s?0:i,_=m*4;let b=g.clippingState||null;c.value=b,b=d(p,u,_,f);for(let M=0;M!==_;++M)b[M]=n[M];g.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,u,f,p){const y=h!==null?h.length:0;let v=null;if(y!==0){if(v=c.value,p!==!0||v===null){const g=f+y*4,m=u.matrixWorldInverse;a.getNormalMatrix(m),(v===null||v.length<g)&&(v=new Float32Array(g));for(let _=0,b=f;_!==y;++_,b+=4)o.copy(h[_]).applyMatrix4(m,a),o.normal.toArray(v,b),v[b+3]=o.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,v}}function ny(t){let e=new WeakMap;function n(s,o){return o===mo?s.mapping=ls:o===go&&(s.mapping=hs),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===mo||o===go)if(e.has(s)){const a=e.get(s).texture;return n(a,s.mapping)}else{const a=s.image;if(a&&a.height>0){const c=t.getRenderList(),l=t.getRenderTarget(),d=t.getRenderState(),h=new Fn(a.height/2);return h.fromEquirectangularTexture(t,s),e.set(s,h),t.setRenderTarget(l),t.setRenderList(c),t.setRenderState(d),n(h.texture,s.mapping)}else return null}}return s}function r(){e=new WeakMap}return{get:i,dispose:r}}function iy(t){const e={};return{has:function(n){if(e[n]!==void 0)return e[n]!==null;let i;switch(n){case"WEBGL_depth_texture":i=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=t.getExtension(n)}return e[n]=i,i!==null},get:function(n){return this.has(n)||console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),e[n]}}}function ry(t,e,n,i){const r=new WeakMap,s=new WeakMap;function o(h){const u=h.target,f=r.get(u);f.index!==null&&e.remove(f.index);for(const y in f.attributes)e.remove(f.attributes[y]);u.removeEventListener("dispose",o),r.delete(u);const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function a(h,u){let f=r.get(u);return f||(u.addEventListener("dispose",o),u.isBufferGeometry?f=u:u.isGeometry&&(u._bufferGeometry===void 0&&(u._bufferGeometry=new fe().setFromObject(h)),f=u._bufferGeometry),r.set(u,f),n.memory.geometries++,f)}function c(h){const u=h.attributes;for(const p in u)e.update(u[p],34962);const f=h.morphAttributes;for(const p in f){const y=f[p];for(let v=0,g=y.length;v<g;v++)e.update(y[v],34962)}}function l(h){const u=[],f=h.index,p=h.attributes.position;let y=0;if(f!==null){const m=f.array;y=f.version;for(let _=0,b=m.length;_<b;_+=3){const M=m[_+0],x=m[_+1],A=m[_+2];u.push(M,x,x,A,A,M)}}else{const m=p.array;y=p.version;for(let _=0,b=m.length/3-1;_<b;_+=3){const M=_+0,x=_+1,A=_+2;u.push(M,x,x,A,A,M)}}const v=new(lf(u)>65535?ci:ai)(u,1);v.version=y;const g=s.get(h);g&&e.remove(g),s.set(h,v)}function d(h){const u=s.get(h);if(u){const f=h.index;f!==null&&u.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:d}}function sy(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}let a,c;function l(u){a=u.type,c=u.bytesPerElement}function d(u,f){t.drawElements(s,f,a,u*c),n.update(f,s,1)}function h(u,f,p){if(p===0)return;let y,v;if(r)y=t,v="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[v](s,f,a,u*c,p),n.update(f,s,p)}this.setMode=o,this.setIndex=l,this.render=d,this.renderInstances=h}function oy(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case 4:n.triangles+=a*(s/3);break;case 1:n.lines+=a*(s/2);break;case 3:n.lines+=a*(s-1);break;case 2:n.lines+=a*s;break;case 0:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function ay(t,e){return t[0]-e[0]}function cy(t,e){return Math.abs(e[1])-Math.abs(t[1])}function ly(t){const e={},n=new Float32Array(8),i=[];for(let s=0;s<8;s++)i[s]=[s,0];function r(s,o,a,c){const l=s.morphTargetInfluences,d=l===void 0?0:l.length;let h=e[o.id];if(h===void 0){h=[];for(let v=0;v<d;v++)h[v]=[v,0];e[o.id]=h}for(let v=0;v<d;v++){const g=h[v];g[0]=v,g[1]=l[v]}h.sort(cy);for(let v=0;v<8;v++)v<d&&h[v][1]?(i[v][0]=h[v][0],i[v][1]=h[v][1]):(i[v][0]=Number.MAX_SAFE_INTEGER,i[v][1]=0);i.sort(ay);const u=a.morphTargets&&o.morphAttributes.position,f=a.morphNormals&&o.morphAttributes.normal;let p=0;for(let v=0;v<8;v++){const g=i[v],m=g[0],_=g[1];m!==Number.MAX_SAFE_INTEGER&&_?(u&&o.getAttribute("morphTarget"+v)!==u[m]&&o.setAttribute("morphTarget"+v,u[m]),f&&o.getAttribute("morphNormal"+v)!==f[m]&&o.setAttribute("morphNormal"+v,f[m]),n[v]=_,p+=_):(u&&o.getAttribute("morphTarget"+v)!==void 0&&o.deleteAttribute("morphTarget"+v),f&&o.getAttribute("morphNormal"+v)!==void 0&&o.deleteAttribute("morphNormal"+v),n[v]=0)}const y=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(t,"morphTargetBaseInfluence",y),c.getUniforms().setValue(t,"morphTargetInfluences",n)}return{update:r}}function hy(t,e,n,i){let r=new WeakMap;function s(a){const c=i.render.frame,l=a.geometry,d=e.get(a,l);return r.get(d)!==c&&(l.isGeometry&&d.updateFromObject(a),e.update(d),r.set(d,c)),a.isInstancedMesh&&(n.update(a.instanceMatrix,34962),a.instanceColor!==null&&n.update(a.instanceColor,34962)),d}function o(){r=new WeakMap}return{update:s,dispose:o}}function Ji(t,e,n,i){ze.call(this,null),this.image={data:t||null,width:e||1,height:n||1,depth:i||1},this.magFilter=tt,this.minFilter=tt,this.wrapR=pt,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}Ji.prototype=Object.create(ze.prototype);Ji.prototype.constructor=Ji;Ji.prototype.isDataTexture2DArray=!0;function $i(t,e,n,i){ze.call(this,null),this.image={data:t||null,width:e||1,height:n||1,depth:i||1},this.magFilter=tt,this.minFilter=tt,this.wrapR=pt,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}$i.prototype=Object.create(ze.prototype);$i.prototype.constructor=$i;$i.prototype.isDataTexture3D=!0;const df=new ze,uy=new Ji,fy=new $i,pf=new en,Rl=[],Cl=[],Pl=new Float32Array(16),Il=new Float32Array(9),Dl=new Float32Array(4);function fr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Rl[r];if(s===void 0&&(s=new Float32Array(r),Rl[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Dt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Lt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function mf(t,e){let n=Cl[e];n===void 0&&(n=new Int32Array(e),Cl[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function dy(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function py(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2fv(this.addr,e),Lt(n,e)}}function my(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Dt(n,e))return;t.uniform3fv(this.addr,e),Lt(n,e)}}function gy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4fv(this.addr,e),Lt(n,e)}}function yy(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Lt(n,e)}else{if(Dt(n,i))return;Dl.set(i),t.uniformMatrix2fv(this.addr,!1,Dl),Lt(n,i)}}function vy(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Lt(n,e)}else{if(Dt(n,i))return;Il.set(i),t.uniformMatrix3fv(this.addr,!1,Il),Lt(n,i)}}function xy(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Lt(n,e)}else{if(Dt(n,i))return;Pl.set(i),t.uniformMatrix4fv(this.addr,!1,Pl),Lt(n,i)}}function _y(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.safeSetTexture2D(e||df,r)}function by(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||uy,r)}function wy(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||fy,r)}function My(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.safeSetTextureCube(e||pf,r)}function Sy(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Ty(t,e){const n=this.cache;Dt(n,e)||(t.uniform2iv(this.addr,e),Lt(n,e))}function Ey(t,e){const n=this.cache;Dt(n,e)||(t.uniform3iv(this.addr,e),Lt(n,e))}function Ay(t,e){const n=this.cache;Dt(n,e)||(t.uniform4iv(this.addr,e),Lt(n,e))}function Ly(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Ry(t){switch(t){case 5126:return dy;case 35664:return py;case 35665:return my;case 35666:return gy;case 35674:return yy;case 35675:return vy;case 35676:return xy;case 5124:case 35670:return Sy;case 35667:case 35671:return Ty;case 35668:case 35672:return Ey;case 35669:case 35673:return Ay;case 5125:return Ly;case 35678:case 36198:case 36298:case 36306:case 35682:return _y;case 35679:case 36299:case 36307:return wy;case 35680:case 36300:case 36308:case 36293:return My;case 36289:case 36303:case 36311:case 36292:return by}}function Cy(t,e){t.uniform1fv(this.addr,e)}function Py(t,e){t.uniform1iv(this.addr,e)}function Iy(t,e){t.uniform2iv(this.addr,e)}function Dy(t,e){t.uniform3iv(this.addr,e)}function Ny(t,e){t.uniform4iv(this.addr,e)}function By(t,e){const n=fr(e,this.size,2);t.uniform2fv(this.addr,n)}function Oy(t,e){const n=fr(e,this.size,3);t.uniform3fv(this.addr,n)}function Fy(t,e){const n=fr(e,this.size,4);t.uniform4fv(this.addr,n)}function zy(t,e){const n=fr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Uy(t,e){const n=fr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Gy(t,e){const n=fr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Hy(t,e,n){const i=e.length,r=mf(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.safeSetTexture2D(e[s]||df,r[s])}function Vy(t,e,n){const i=e.length,r=mf(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.safeSetTextureCube(e[s]||pf,r[s])}function ky(t){switch(t){case 5126:return Cy;case 35664:return By;case 35665:return Oy;case 35666:return Fy;case 35674:return zy;case 35675:return Uy;case 35676:return Gy;case 5124:case 35670:return Py;case 35667:case 35671:return Iy;case 35668:case 35672:return Dy;case 35669:case 35673:return Ny;case 35678:case 36198:case 36298:case 36306:case 35682:return Hy;case 35680:case 36300:case 36308:case 36293:return Vy}}function Wy(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Ry(e.type)}function gf(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=ky(e.type)}gf.prototype.updateCache=function(t){const e=this.cache;t instanceof Float32Array&&e.length!==t.length&&(this.cache=new Float32Array(t.length)),Lt(e,t)};function yf(t){this.id=t,this.seq=[],this.map={}}yf.prototype.setValue=function(t,e,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const o=i[r];o.setValue(t,e[o.id],n)}};const wa=/([\w\d_]+)(\])?(\[|\.)?/g;function Nl(t,e){t.seq.push(e),t.map[e.id]=e}function jy(t,e,n){const i=t.name,r=i.length;for(wa.lastIndex=0;;){const s=wa.exec(i),o=wa.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Nl(n,l===void 0?new Wy(a,t,e):new gf(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new yf(a),Nl(n,h)),n=h}}}function Dn(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),s=t.getUniformLocation(e,r.name);jy(r,s,this)}}Dn.prototype.setValue=function(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)};Dn.prototype.setOptional=function(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)};Dn.upload=function(t,e,n,i){for(let r=0,s=e.length;r!==s;++r){const o=e[r],a=n[o.id];a.needsUpdate!==!1&&o.setValue(t,a.value,i)}};Dn.seqWithValue=function(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const s=t[i];s.id in e&&n.push(s)}return n};function Bl(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let qy=0;function Xy(t){const e=t.split(`
`);for(let n=0;n<e.length;n++)e[n]=n+1+": "+e[n];return e.join(`
`)}function vf(t){switch(t){case gt:return["Linear","( value )"];case fs:return["sRGB","( value )"];case qo:return["RGBE","( value )"];case Pc:return["RGBM","( value, 7.0 )"];case Ic:return["RGBM","( value, 16.0 )"];case Dc:return["RGBD","( value, 256.0 )"];case jo:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case nf:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function Ol(t,e,n){const i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=t.getShaderSource(e);return"THREE.WebGLShader: gl.getShaderInfoLog() "+n+`
`+r+Xy(s)}function _r(t,e){const n=vf(e);return"vec4 "+t+"( vec4 value ) { return "+n[0]+"ToLinear"+n[1]+"; }"}function Yy(t,e){const n=vf(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function Zy(t,e){let n;switch(e){case tu:n="Linear";break;case nu:n="Reinhard";break;case iu:n="OptimizedCineon";break;case ru:n="ACESFilmic";break;case su:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Jy(t){return[t.extensionDerivatives||t.envMapCubeUV||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ar).join(`
`)}function $y(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Qy(t,e){const n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r).name;n[o]=t.getAttribLocation(e,o)}return n}function Ar(t){return t!==""}function Fl(t,e){return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zl(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ky=/^[ \t]*#include +<([\w\d./]+)>/gm;function rc(t){return t.replace(Ky,ev)}function ev(t,e){const n=Ce[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return rc(n)}const tv=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,nv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ul(t){return t.replace(nv,xf).replace(tv,iv)}function iv(t,e,n,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),xf(t,e,n,i)}function xf(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Gl(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rv(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Tc?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Dh?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function sv(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ls:case hs:e="ENVMAP_TYPE_CUBE";break;case ar:case us:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ov(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case hs:case us:e="ENVMAP_MODE_REFRACTION";break}return e}function av(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case cs:e="ENVMAP_BLENDING_MULTIPLY";break;case Kh:e="ENVMAP_BLENDING_MIX";break;case eu:e="ENVMAP_BLENDING_ADD";break}return e}function cv(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const c=rv(n),l=sv(n),d=ov(n),h=av(n),u=t.gammaFactor>0?t.gammaFactor:1,f=n.isWebGL2?"":Jy(n),p=$y(s),y=r.createProgram();let v,g,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=[p].filter(Ar).join(`
`),v.length>0&&(v+=`
`),g=[f,p].filter(Ar).join(`
`),g.length>0&&(g+=`
`)):(v=[Gl(n),"#define SHADER_NAME "+n.shaderName,p,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+u,"#define MAX_BONES "+n.maxBones,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.useVertexTexture?"#define BONE_TEXTURE":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#ifdef USE_COLOR","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ar).join(`
`),g=[f,Gl(n),"#define SHADER_NAME "+n.shaderName,p,n.alphaTest?"#define ALPHATEST "+n.alphaTest+(n.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+u,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.sheen?"#define USE_SHEEN":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(n.extensionShaderTextureLOD||n.envMap)&&n.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ri?"#define TONE_MAPPING":"",n.toneMapping!==ri?Ce.tonemapping_pars_fragment:"",n.toneMapping!==ri?Zy("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",Ce.encodings_pars_fragment,n.map?_r("mapTexelToLinear",n.mapEncoding):"",n.matcap?_r("matcapTexelToLinear",n.matcapEncoding):"",n.envMap?_r("envMapTexelToLinear",n.envMapEncoding):"",n.emissiveMap?_r("emissiveMapTexelToLinear",n.emissiveMapEncoding):"",n.lightMap?_r("lightMapTexelToLinear",n.lightMapEncoding):"",Yy("linearToOutputTexel",n.outputEncoding),n.depthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ar).join(`
`)),o=rc(o),o=Fl(o,n),o=zl(o,n),a=rc(a),a=Fl(a,n),a=zl(a,n),o=Ul(o),a=Ul(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",n.glslVersion===nc?"":"out highp vec4 pc_fragColor;",n.glslVersion===nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const _=m+v+o,b=m+g+a,M=Bl(r,35633,_),x=Bl(r,35632,b);if(r.attachShader(y,M),r.attachShader(y,x),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y),t.debug.checkShaderErrors){const P=r.getProgramInfoLog(y).trim(),U=r.getShaderInfoLog(M).trim(),D=r.getShaderInfoLog(x).trim();let N=!0,O=!0;if(r.getProgramParameter(y,35714)===!1){N=!1;const R=Ol(r,M,"vertex"),C=Ol(r,x,"fragment");console.error("THREE.WebGLProgram: shader error: ",r.getError(),"35715",r.getProgramParameter(y,35715),"gl.getProgramInfoLog",P,R,C)}else P!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",P):(U===""||D==="")&&(O=!1);O&&(this.diagnostics={runnable:N,programLog:P,vertexShader:{log:U,prefix:v},fragmentShader:{log:D,prefix:g}})}r.deleteShader(M),r.deleteShader(x);let A;this.getUniforms=function(){return A===void 0&&(A=new Dn(r,y)),A};let I;return this.getAttributes=function(){return I===void 0&&(I=Qy(r,y)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.name=n.shaderName,this.id=qy++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=M,this.fragmentShader=x,this}function lv(t,e,n,i,r,s){const o=[],a=i.isWebGL2,c=i.logarithmicDepthBuffer,l=i.floatVertexTextures,d=i.maxVertexUniforms,h=i.vertexTextures;let u=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},p=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","maxMorphTargets","maxMorphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function y(x){const I=x.skeleton.bones;if(l)return 1024;{const U=Math.floor((d-20)/4),D=Math.min(U,I.length);return D<I.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+I.length+" bones. This GPU supports "+D+"."),0):D}}function v(x){let A;return x?x.isTexture?A=x.encoding:x.isWebGLRenderTarget&&(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),A=x.texture.encoding):A=gt,A}function g(x,A,I,P,U){const D=P.fog,N=x.isMeshStandardMaterial?P.environment:null,O=e.get(x.envMap||N),R=f[x.type],C=U.isSkinnedMesh?y(U):0;x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let F,W;if(R){const le=Ht[R];F=le.vertexShader,W=le.fragmentShader}else F=x.vertexShader,W=x.fragmentShader;const Y=t.getRenderTarget();return{isWebGL2:a,shaderID:R,shaderName:x.type,vertexShader:F,fragmentShader:W,defines:x.defines,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,instancing:U.isInstancedMesh===!0,instancingColor:U.isInstancedMesh===!0&&U.instanceColor!==null,supportsVertexTextures:h,outputEncoding:Y!==null?v(Y.texture):t.outputEncoding,map:!!x.map,mapEncoding:v(x.map),matcap:!!x.matcap,matcapEncoding:v(x.matcap),envMap:!!O,envMapMode:O&&O.mapping,envMapEncoding:v(O),envMapCubeUV:!!O&&(O.mapping===ar||O.mapping===us),lightMap:!!x.lightMap,lightMapEncoding:v(x.lightMap),aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,emissiveMapEncoding:v(x.emissiveMap),bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===of,tangentSpaceNormalMap:x.normalMapType===yi,clearcoatMap:!!x.clearcoatMap,clearcoatRoughnessMap:!!x.clearcoatRoughnessMap,clearcoatNormalMap:!!x.clearcoatNormalMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,alphaMap:!!x.alphaMap,gradientMap:!!x.gradientMap,sheen:!!x.sheen,transmissionMap:!!x.transmissionMap,combine:x.combine,vertexTangents:x.normalMap&&x.vertexTangents,vertexColors:x.vertexColors,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.displacementMap||!!x.transmissionMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.transmissionMap)&&!!x.displacementMap,fog:!!D,useFog:x.fog,fogExp2:D&&D.isFogExp2,flatShading:x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:c,skinning:x.skinning&&C>0,maxBones:C,useVertexTexture:l,morphTargets:x.morphTargets,morphNormals:x.morphNormals,maxMorphTargets:t.maxMorphTargets,maxMorphNormals:t.maxMorphNormals,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:x.toneMapped?t.toneMapping:ri,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,alphaTest:x.alphaTest,doubleSided:x.side===as,flipSided:x.side===et,depthPacking:x.depthPacking!==void 0?x.depthPacking:!1,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:a||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:a||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:a||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function m(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.fragmentShader),A.push(x.vertexShader)),x.defines!==void 0)for(const I in x.defines)A.push(I),A.push(x.defines[I]);if(x.isRawShaderMaterial===!1){for(let I=0;I<p.length;I++)A.push(x[p[I]]);A.push(t.outputEncoding),A.push(t.gammaFactor)}return A.push(x.customProgramCacheKey),A.join()}function _(x){const A=f[x.type];let I;if(A){const P=Ht[A];I=uf.clone(P.uniforms)}else I=x.uniforms;return I}function b(x,A){let I;for(let P=0,U=o.length;P<U;P++){const D=o[P];if(D.cacheKey===A){I=D,++I.usedTimes;break}}return I===void 0&&(I=new cv(t,A,x,r),o.push(I)),I}function M(x){if(--x.usedTimes===0){const A=o.indexOf(x);o[A]=o[o.length-1],o.pop(),x.destroy()}}return{getParameters:g,getProgramCacheKey:m,getUniforms:_,acquireProgram:b,releaseProgram:M,programs:o}}function hv(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function uv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.program!==e.program?t.program.id-e.program.id:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function fv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Hl(t){const e=[];let n=0;const i=[],r=[],s={id:-1};function o(){n=0,i.length=0,r.length=0}function a(u,f,p,y,v,g){let m=e[n];const _=t.get(p);return m===void 0?(m={id:u.id,object:u,geometry:f,material:p,program:_.program||s,groupOrder:y,renderOrder:u.renderOrder,z:v,group:g},e[n]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=p,m.program=_.program||s,m.groupOrder=y,m.renderOrder=u.renderOrder,m.z=v,m.group=g),n++,m}function c(u,f,p,y,v,g){const m=a(u,f,p,y,v,g);(p.transparent===!0?r:i).push(m)}function l(u,f,p,y,v,g){const m=a(u,f,p,y,v,g);(p.transparent===!0?r:i).unshift(m)}function d(u,f){i.length>1&&i.sort(u||uv),r.length>1&&r.sort(f||fv)}function h(){for(let u=n,f=e.length;u<f;u++){const p=e[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.program=null,p.group=null}}return{opaque:i,transparent:r,init:o,push:c,unshift:l,finish:h,sort:d}}function dv(t){let e=new WeakMap;function n(r,s){const o=e.get(r);let a;return o===void 0?(a=new Hl(t),e.set(r,new WeakMap),e.get(r).set(s,a)):(a=o.get(s),a===void 0&&(a=new Hl(t),o.set(s,a))),a}function i(){e=new WeakMap}return{get:n,dispose:i}}function pv(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new w,color:new re};break;case"SpotLight":n={position:new w,direction:new w,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new w,color:new re,distance:0,decay:0};break;case"HemisphereLight":n={direction:new w,skyColor:new re,groundColor:new re};break;case"RectAreaLight":n={color:new re,position:new w,halfWidth:new w,halfHeight:new w};break}return t[e.id]=n,n}}}function mv(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let gv=0;function yv(t,e){return(e.castShadow?1:0)-(t.castShadow?1:0)}function vv(){const t=new pv,e=mv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let a=0;a<9;a++)n.probe.push(new w);const i=new w,r=new Ee,s=new Ee;function o(a,c,l){let d=0,h=0,u=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let f=0,p=0,y=0,v=0,g=0,m=0,_=0,b=0;const M=l.matrixWorldInverse;a.sort(yv);for(let A=0,I=a.length;A<I;A++){const P=a[A],U=P.color,D=P.intensity,N=P.distance,O=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=U.r*D,h+=U.g*D,u+=U.b*D;else if(P.isLightProbe)for(let R=0;R<9;R++)n.probe[R].addScaledVector(P.sh.coefficients[R],D);else if(P.isDirectionalLight){const R=t.get(P);if(R.color.copy(P.color).multiplyScalar(P.intensity),R.direction.setFromMatrixPosition(P.matrixWorld),i.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(i),R.direction.transformDirection(M),P.castShadow){const C=P.shadow,F=e.get(P);F.shadowBias=C.bias,F.shadowNormalBias=C.normalBias,F.shadowRadius=C.radius,F.shadowMapSize=C.mapSize,n.directionalShadow[f]=F,n.directionalShadowMap[f]=O,n.directionalShadowMatrix[f]=P.shadow.matrix,m++}n.directional[f]=R,f++}else if(P.isSpotLight){const R=t.get(P);if(R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(M),R.color.copy(U).multiplyScalar(D),R.distance=N,R.direction.setFromMatrixPosition(P.matrixWorld),i.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(i),R.direction.transformDirection(M),R.coneCos=Math.cos(P.angle),R.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),R.decay=P.decay,P.castShadow){const C=P.shadow,F=e.get(P);F.shadowBias=C.bias,F.shadowNormalBias=C.normalBias,F.shadowRadius=C.radius,F.shadowMapSize=C.mapSize,n.spotShadow[y]=F,n.spotShadowMap[y]=O,n.spotShadowMatrix[y]=P.shadow.matrix,b++}n.spot[y]=R,y++}else if(P.isRectAreaLight){const R=t.get(P);R.color.copy(U).multiplyScalar(D),R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(M),s.identity(),r.copy(P.matrixWorld),r.premultiply(M),s.extractRotation(r),R.halfWidth.set(P.width*.5,0,0),R.halfHeight.set(0,P.height*.5,0),R.halfWidth.applyMatrix4(s),R.halfHeight.applyMatrix4(s),n.rectArea[v]=R,v++}else if(P.isPointLight){const R=t.get(P);if(R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(M),R.color.copy(P.color).multiplyScalar(P.intensity),R.distance=P.distance,R.decay=P.decay,P.castShadow){const C=P.shadow,F=e.get(P);F.shadowBias=C.bias,F.shadowNormalBias=C.normalBias,F.shadowRadius=C.radius,F.shadowMapSize=C.mapSize,F.shadowCameraNear=C.camera.near,F.shadowCameraFar=C.camera.far,n.pointShadow[p]=F,n.pointShadowMap[p]=O,n.pointShadowMatrix[p]=P.shadow.matrix,_++}n.point[p]=R,p++}else if(P.isHemisphereLight){const R=t.get(P);R.direction.setFromMatrixPosition(P.matrixWorld),R.direction.transformDirection(M),R.direction.normalize(),R.skyColor.copy(P.color).multiplyScalar(D),R.groundColor.copy(P.groundColor).multiplyScalar(D),n.hemi[g]=R,g++}}v>0&&(n.rectAreaLTC1=ee.LTC_1,n.rectAreaLTC2=ee.LTC_2),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=u;const x=n.hash;(x.directionalLength!==f||x.pointLength!==p||x.spotLength!==y||x.rectAreaLength!==v||x.hemiLength!==g||x.numDirectionalShadows!==m||x.numPointShadows!==_||x.numSpotShadows!==b)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=v,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=m,n.directionalShadowMap.length=m,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=m,n.pointShadowMatrix.length=_,n.spotShadowMatrix.length=b,x.directionalLength=f,x.pointLength=p,x.spotLength=y,x.rectAreaLength=v,x.hemiLength=g,x.numDirectionalShadows=m,x.numPointShadows=_,x.numSpotShadows=b,n.version=gv++)}return{setup:o,state:n}}function Vl(){const t=new vv,e=[],n=[];function i(){e.length=0,n.length=0}function r(c){e.push(c)}function s(c){n.push(c)}function o(c){t.setup(e,n,c)}return{init:i,state:{lightsArray:e,shadowsArray:n,lights:t},setupLights:o,pushLight:r,pushShadow:s}}function xv(){let t=new WeakMap;function e(i,r){let s;return t.has(i)===!1?(s=new Vl,t.set(i,new WeakMap),t.get(i).set(r,s)):t.get(i).has(r)===!1?(s=new Vl,t.get(i).set(r,s)):s=t.get(i).get(r),s}function n(){t=new WeakMap}return{get:e,dispose:n}}function zn(t){ge.call(this),this.type="MeshDepthMaterial",this.depthPacking=rf,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(t)}zn.prototype=Object.create(ge.prototype);zn.prototype.constructor=zn;zn.prototype.isMeshDepthMaterial=!0;zn.prototype.copy=function(t){return ge.prototype.copy.call(this,t),this.depthPacking=t.depthPacking,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this};function Un(t){ge.call(this),this.type="MeshDistanceMaterial",this.referencePosition=new w,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(t)}Un.prototype=Object.create(ge.prototype);Un.prototype.constructor=Un;Un.prototype.isMeshDistanceMaterial=!0;Un.prototype.copy=function(t){return ge.prototype.copy.call(this,t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this};var _v=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,bv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function _f(t,e,n){let i=new ms;const r=new H,s=new H,o=new Oe,a=[],c=[],l={},d={0:et,1:or,2:as},h=new yt({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new H},radius:{value:4}},vertexShader:bv,fragmentShader:_v}),u=h.clone();u.defines.HORIZONAL_PASS=1;const f=new fe;f.setAttribute("position",new me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new We(f,h),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tc,this.render=function(M,x,A){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||M.length===0)return;const I=t.getRenderTarget(),P=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),D=t.state;D.setBlending(yn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let N=0,O=M.length;N<O;N++){const R=M[N],C=R.shadow;if(C===void 0){console.warn("THREE.WebGLShadowMap:",R,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;r.copy(C.mapSize);const F=C.getFrameExtents();if(r.multiply(F),s.copy(C.mapSize),(r.x>n||r.y>n)&&(r.x>n&&(s.x=Math.floor(n/F.x),r.x=s.x*F.x,C.mapSize.x=s.x),r.y>n&&(s.y=Math.floor(n/F.y),r.y=s.y*F.y,C.mapSize.y=s.y)),C.map===null&&!C.isPointLightShadow&&this.type===Ui){const Y={minFilter:rt,magFilter:rt,format:Tt};C.map=new Et(r.x,r.y,Y),C.map.texture.name=R.name+".shadowMap",C.mapPass=new Et(r.x,r.y,Y),C.camera.updateProjectionMatrix()}if(C.map===null){const Y={minFilter:tt,magFilter:tt,format:Tt};C.map=new Et(r.x,r.y,Y),C.map.texture.name=R.name+".shadowMap",C.camera.updateProjectionMatrix()}t.setRenderTarget(C.map),t.clear();const W=C.getViewportCount();for(let Y=0;Y<W;Y++){const ne=C.getViewport(Y);o.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),D.viewport(o),C.updateMatrices(R,Y),i=C.getFrustum(),b(x,A,C.camera,R,this.type)}!C.isPointLightShadow&&this.type===Ui&&v(C,A),C.needsUpdate=!1}y.needsUpdate=!1,t.setRenderTarget(I,P,U)};function v(M,x){const A=e.update(p);h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(x,null,A,h,p,null),u.uniforms.shadow_pass.value=M.mapPass.texture,u.uniforms.resolution.value=M.mapSize,u.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(x,null,A,u,p,null)}function g(M,x,A){const I=M<<0|x<<1|A<<2;let P=a[I];return P===void 0&&(P=new zn({depthPacking:sf,morphTargets:M,skinning:x}),a[I]=P),P}function m(M,x,A){const I=M<<0|x<<1|A<<2;let P=c[I];return P===void 0&&(P=new Un({morphTargets:M,skinning:x}),c[I]=P),P}function _(M,x,A,I,P,U,D){let N=null,O=g,R=M.customDepthMaterial;if(I.isPointLight===!0&&(O=m,R=M.customDistanceMaterial),R===void 0){let C=!1;A.morphTargets===!0&&(C=x.morphAttributes&&x.morphAttributes.position&&x.morphAttributes.position.length>0);let F=!1;M.isSkinnedMesh===!0&&(A.skinning===!0?F=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",M));const W=M.isInstancedMesh===!0;N=O(C,F,W)}else N=R;if(t.localClippingEnabled&&A.clipShadows===!0&&A.clippingPlanes.length!==0){const C=N.uuid,F=A.uuid;let W=l[C];W===void 0&&(W={},l[C]=W);let Y=W[F];Y===void 0&&(Y=N.clone(),W[F]=Y),N=Y}return N.visible=A.visible,N.wireframe=A.wireframe,D===Ui?N.side=A.shadowSide!==null?A.shadowSide:A.side:N.side=A.shadowSide!==null?A.shadowSide:d[A.side],N.clipShadows=A.clipShadows,N.clippingPlanes=A.clippingPlanes,N.clipIntersection=A.clipIntersection,N.wireframeLinewidth=A.wireframeLinewidth,N.linewidth=A.linewidth,I.isPointLight===!0&&N.isMeshDistanceMaterial===!0&&(N.referencePosition.setFromMatrixPosition(I.matrixWorld),N.nearDistance=P,N.farDistance=U),N}function b(M,x,A,I,P){if(M.visible===!1)return;if(M.layers.test(x.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&P===Ui)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,M.matrixWorld);const N=e.update(M),O=M.material;if(Array.isArray(O)){const R=N.groups;for(let C=0,F=R.length;C<F;C++){const W=R[C],Y=O[W.materialIndex];if(Y&&Y.visible){const ne=_(M,N,Y,I,A.near,A.far,P);t.renderBufferDirect(A,null,N,ne,M,W)}}}else if(O.visible){const R=_(M,N,O,I,A.near,A.far,P);t.renderBufferDirect(A,null,N,R,M,null)}}const D=M.children;for(let N=0,O=D.length;N<O;N++)b(D[N],x,A,I,P)}}function wv(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const X=new Oe;let te=null;const he=new Oe(0,0,0,0);return{setMask:function(J){te!==J&&!L&&(t.colorMask(J,J,J,J),te=J)},setLocked:function(J){L=J},setClear:function(J,ce,pe,we,oe){oe===!0&&(J*=we,ce*=we,pe*=we),X.set(J,ce,pe,we),he.equals(X)===!1&&(t.clearColor(J,ce,pe,we),he.copy(X))},reset:function(){L=!1,te=null,he.set(-1,0,0,0)}}}function s(){let L=!1,X=null,te=null,he=null;return{setTest:function(J){J?le(2929):se(2929)},setMask:function(J){X!==J&&!L&&(t.depthMask(J),X=J)},setFunc:function(J){if(te!==J){if(J)switch(J){case qh:t.depthFunc(512);break;case Xh:t.depthFunc(519);break;case Yh:t.depthFunc(513);break;case po:t.depthFunc(515);break;case Zh:t.depthFunc(514);break;case Jh:t.depthFunc(518);break;case $h:t.depthFunc(516);break;case Qh:t.depthFunc(517);break;default:t.depthFunc(515)}else t.depthFunc(515);te=J}},setLocked:function(J){L=J},setClear:function(J){he!==J&&(t.clearDepth(J),he=J)},reset:function(){L=!1,X=null,te=null,he=null}}}function o(){let L=!1,X=null,te=null,he=null,J=null,ce=null,pe=null,we=null,oe=null;return{setTest:function(ve){L||(ve?le(2960):se(2960))},setMask:function(ve){X!==ve&&!L&&(t.stencilMask(ve),X=ve)},setFunc:function(ve,Xe,xt){(te!==ve||he!==Xe||J!==xt)&&(t.stencilFunc(ve,Xe,xt),te=ve,he=Xe,J=xt)},setOp:function(ve,Xe,xt){(ce!==ve||pe!==Xe||we!==xt)&&(t.stencilOp(ve,Xe,xt),ce=ve,pe=Xe,we=xt)},setLocked:function(ve){L=ve},setClear:function(ve){oe!==ve&&(t.clearStencil(ve),oe=ve)},reset:function(){L=!1,X=null,te=null,he=null,J=null,ce=null,pe=null,we=null,oe=null}}}const a=new r,c=new s,l=new o;let d={},h=null,u=null,f=null,p=null,y=null,v=null,g=null,m=null,_=null,b=!1,M=null,x=null,A=null,I=null,P=null;const U=t.getParameter(35661);let D=!1,N=0;const O=t.getParameter(7938);O.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL\ ([0-9])/.exec(O)[1]),D=N>=1):O.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(O)[1]),D=N>=2);let R=null,C={};const F=new Oe,W=new Oe;function Y(L,X,te){const he=new Uint8Array(4),J=t.createTexture();t.bindTexture(L,J),t.texParameteri(L,10241,9728),t.texParameteri(L,10240,9728);for(let ce=0;ce<te;ce++)t.texImage2D(X+ce,0,6408,1,1,0,6408,5121,he);return J}const ne={};ne[3553]=Y(3553,3553,1),ne[34067]=Y(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),le(2929),c.setFunc(po),ye(!1),De(Ga),le(2884),V(yn);function le(L){d[L]!==!0&&(t.enable(L),d[L]=!0)}function se(L){d[L]!==!1&&(t.disable(L),d[L]=!1)}function be(L){return h!==L?(t.useProgram(L),h=L,!0):!1}const Se={[ti]:32774,[Bh]:32778,[Oh]:32779};if(i)Se[Wa]=32775,Se[ja]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(Se[Wa]=L.MIN_EXT,Se[ja]=L.MAX_EXT)}const qe={[Fh]:0,[zh]:1,[Uh]:768,[Ac]:770,[jh]:776,[kh]:774,[Hh]:772,[Gh]:769,[Lc]:771,[Wh]:775,[Vh]:773};function V(L,X,te,he,J,ce,pe,we){if(L===yn){u&&(se(3042),u=!1);return}if(u||(le(3042),u=!0),L!==Nh){if(L!==f||we!==b){if((p!==ti||g!==ti)&&(t.blendEquation(32774),p=ti,g=ti),we)switch(L){case Wi:t.blendFuncSeparate(1,771,1,771);break;case Ha:t.blendFunc(1,1);break;case Va:t.blendFuncSeparate(0,0,769,771);break;case ka:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Wi:t.blendFuncSeparate(770,771,1,771);break;case Ha:t.blendFunc(770,1);break;case Va:t.blendFunc(0,769);break;case ka:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,v=null,m=null,_=null,f=L,b=we}return}J=J||X,ce=ce||te,pe=pe||he,(X!==p||J!==g)&&(t.blendEquationSeparate(Se[X],Se[J]),p=X,g=J),(te!==y||he!==v||ce!==m||pe!==_)&&(t.blendFuncSeparate(qe[te],qe[he],qe[ce],qe[pe]),y=te,v=he,m=ce,_=pe),f=L,b=null}function ct(L,X){L.side===as?se(2884):le(2884);let te=L.side===et;X&&(te=!te),ye(te),L.blending===Wi&&L.transparent===!1?V(yn):V(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),a.setMask(L.colorWrite);const he=L.stencilWrite;l.setTest(he),he&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ne(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits)}function ye(L){M!==L&&(L?t.frontFace(2304):t.frontFace(2305),M=L)}function De(L){L!==Ph?(le(2884),L!==x&&(L===Ga?t.cullFace(1029):L===Ih?t.cullFace(1028):t.cullFace(1032))):se(2884),x=L}function Te(L){L!==A&&(D&&t.lineWidth(L),A=L)}function Ne(L,X,te){L?(le(32823),(I!==X||P!==te)&&(t.polygonOffset(X,te),I=X,P=te)):se(32823)}function Re(L){L?le(3089):se(3089)}function j(L){L===void 0&&(L=33984+U-1),R!==L&&(t.activeTexture(L),R=L)}function Z(L,X){R===null&&j();let te=C[R];te===void 0&&(te={type:void 0,texture:void 0},C[R]=te),(te.type!==L||te.texture!==X)&&(t.bindTexture(L,X||ne[L]),te.type=L,te.texture=X)}function $(){const L=C[R];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function de(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function E(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function S(L){F.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),F.copy(L))}function q(L){W.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),W.copy(L))}function k(){d={},R=null,C={},h=null,f=null,M=null,x=null,a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:le,disable:se,useProgram:be,setBlending:V,setMaterial:ct,setFlipSided:ye,setCullFace:De,setLineWidth:Te,setPolygonOffset:Ne,setScissorTest:Re,activeTexture:j,bindTexture:Z,unbindTexture:$,compressedTexImage2D:de,texImage2D:ie,texImage3D:E,scissor:S,viewport:q,reset:k}}function Mv(t,e,n,i,r,s,o){const a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,d=r.maxTextureSize,h=r.maxSamples,u=new WeakMap;let f,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(E,S){return p?new OffscreenCanvas(E,S):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function v(E,S,q,k){let L=1;if((E.width>k||E.height>k)&&(L=k/Math.max(E.width,E.height)),L<1||S===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const X=S?xe.floorPowerOfTwo:Math.floor,te=X(L*E.width),he=X(L*E.height);f===void 0&&(f=y(te,he));const J=q?y(te,he):f;return J.width=te,J.height=he,J.getContext("2d").drawImage(E,0,0,te,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+te+"x"+he+")."),J}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function g(E){return xe.isPowerOfTwo(E.width)&&xe.isPowerOfTwo(E.height)}function m(E){return a?!1:E.wrapS!==pt||E.wrapT!==pt||E.minFilter!==tt&&E.minFilter!==rt}function _(E,S){return E.generateMipmaps&&S&&E.minFilter!==tt&&E.minFilter!==rt}function b(E,S,q,k){t.generateMipmap(E);const L=i.get(S);L.__maxMipLevel=Math.log(Math.max(q,k))*Math.LOG2E}function M(E,S,q){if(a===!1)return S;if(E!==null){if(t[E]!==void 0)return t[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let k=S;return S===6403&&(q===5126&&(k=33326),q===5131&&(k=33325),q===5121&&(k=33321)),S===6407&&(q===5126&&(k=34837),q===5131&&(k=34843),q===5121&&(k=32849)),S===6408&&(q===5126&&(k=34836),q===5131&&(k=34842),q===5121&&(k=32856)),(k===33325||k===33326||k===34842||k===34836)&&e.get("EXT_color_buffer_float"),k}function x(E){return E===tt||E===yo||E===vo?9728:9729}function A(E){const S=E.target;S.removeEventListener("dispose",A),P(S),S.isVideoTexture&&u.delete(S),o.memory.textures--}function I(E){const S=E.target;S.removeEventListener("dispose",I),U(S),o.memory.textures--}function P(E){const S=i.get(E);S.__webglInit!==void 0&&(t.deleteTexture(S.__webglTexture),i.remove(E))}function U(E){const S=i.get(E),q=i.get(E.texture);if(E){if(q.__webglTexture!==void 0&&t.deleteTexture(q.__webglTexture),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let k=0;k<6;k++)t.deleteFramebuffer(S.__webglFramebuffer[k]),S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[k]);else t.deleteFramebuffer(S.__webglFramebuffer),S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer&&t.deleteRenderbuffer(S.__webglColorRenderbuffer),S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer);i.remove(E.texture),i.remove(E)}}let D=0;function N(){D=0}function O(){const E=D;return E>=c&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+c),D+=1,E}function R(E,S){const q=i.get(E);if(E.isVideoTexture&&j(E),E.version>0&&q.__version!==E.version){const k=E.image;if(k===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(q,E,S);return}}n.activeTexture(33984+S),n.bindTexture(3553,q.__webglTexture)}function C(E,S){const q=i.get(E);if(E.version>0&&q.__version!==E.version){be(q,E,S);return}n.activeTexture(33984+S),n.bindTexture(35866,q.__webglTexture)}function F(E,S){const q=i.get(E);if(E.version>0&&q.__version!==E.version){be(q,E,S);return}n.activeTexture(33984+S),n.bindTexture(32879,q.__webglTexture)}function W(E,S){const q=i.get(E);if(E.version>0&&q.__version!==E.version){Se(q,E,S);return}n.activeTexture(33984+S),n.bindTexture(34067,q.__webglTexture)}const Y={[Or]:10497,[pt]:33071,[Fr]:33648},ne={[tt]:9728,[yo]:9984,[vo]:9986,[rt]:9729,[Rc]:9985,[cr]:9987};function le(E,S,q){q?(t.texParameteri(E,10242,Y[S.wrapS]),t.texParameteri(E,10243,Y[S.wrapT]),(E===32879||E===35866)&&t.texParameteri(E,32882,Y[S.wrapR]),t.texParameteri(E,10240,ne[S.magFilter]),t.texParameteri(E,10241,ne[S.minFilter])):(t.texParameteri(E,10242,33071),t.texParameteri(E,10243,33071),(E===32879||E===35866)&&t.texParameteri(E,32882,33071),(S.wrapS!==pt||S.wrapT!==pt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(E,10240,x(S.magFilter)),t.texParameteri(E,10241,x(S.minFilter)),S.minFilter!==tt&&S.minFilter!==rt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));const k=e.get("EXT_texture_filter_anisotropic");if(k){if(S.type===pn&&e.get("OES_texture_float_linear")===null||S.type===Ur&&(a||e.get("OES_texture_half_float_linear"))===null)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(t.texParameterf(E,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function se(E,S){E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",A),E.__webglTexture=t.createTexture(),o.memory.textures++)}function be(E,S,q){let k=3553;S.isDataTexture2DArray&&(k=35866),S.isDataTexture3D&&(k=32879),se(E,S),n.activeTexture(33984+q),n.bindTexture(k,E.__webglTexture),t.pixelStorei(37440,S.flipY),t.pixelStorei(37441,S.premultiplyAlpha),t.pixelStorei(3317,S.unpackAlignment);const L=m(S)&&g(S.image)===!1,X=v(S.image,L,!1,d),te=g(X)||a,he=s.convert(S.format);let J=s.convert(S.type),ce=M(S.internalFormat,he,J);le(k,S,te);let pe;const we=S.mipmaps;if(S.isDepthTexture)ce=6402,a?S.type===pn?ce=36012:S.type===Rr?ce=33190:S.type===ji?ce=35056:ce=33189:S.type===pn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===si&&ce===6402&&S.type!==zr&&S.type!==Rr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=zr,J=s.convert(S.type)),S.format===Xi&&ce===6402&&(ce=34041,S.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=ji,J=s.convert(S.type))),n.texImage2D(3553,0,ce,X.width,X.height,0,he,J,null);else if(S.isDataTexture)if(we.length>0&&te){for(let oe=0,ve=we.length;oe<ve;oe++)pe=we[oe],n.texImage2D(3553,oe,ce,pe.width,pe.height,0,he,J,pe.data);S.generateMipmaps=!1,E.__maxMipLevel=we.length-1}else n.texImage2D(3553,0,ce,X.width,X.height,0,he,J,X.data),E.__maxMipLevel=0;else if(S.isCompressedTexture){for(let oe=0,ve=we.length;oe<ve;oe++)pe=we[oe],S.format!==Tt&&S.format!==In?he!==null?n.compressedTexImage2D(3553,oe,ce,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):n.texImage2D(3553,oe,ce,pe.width,pe.height,0,he,J,pe.data);E.__maxMipLevel=we.length-1}else if(S.isDataTexture2DArray)n.texImage3D(35866,0,ce,X.width,X.height,X.depth,0,he,J,X.data),E.__maxMipLevel=0;else if(S.isDataTexture3D)n.texImage3D(32879,0,ce,X.width,X.height,X.depth,0,he,J,X.data),E.__maxMipLevel=0;else if(we.length>0&&te){for(let oe=0,ve=we.length;oe<ve;oe++)pe=we[oe],n.texImage2D(3553,oe,ce,he,J,pe);S.generateMipmaps=!1,E.__maxMipLevel=we.length-1}else n.texImage2D(3553,0,ce,he,J,X),E.__maxMipLevel=0;_(S,te)&&b(k,S,X.width,X.height),E.__version=S.version,S.onUpdate&&S.onUpdate(S)}function Se(E,S,q){if(S.image.length!==6)return;se(E,S),n.activeTexture(33984+q),n.bindTexture(34067,E.__webglTexture),t.pixelStorei(37440,S.flipY);const k=S&&(S.isCompressedTexture||S.image[0].isCompressedTexture),L=S.image[0]&&S.image[0].isDataTexture,X=[];for(let oe=0;oe<6;oe++)!k&&!L?X[oe]=v(S.image[oe],!1,!0,l):X[oe]=L?S.image[oe].image:S.image[oe];const te=X[0],he=g(te)||a,J=s.convert(S.format),ce=s.convert(S.type),pe=M(S.internalFormat,J,ce);le(34067,S,he);let we;if(k){for(let oe=0;oe<6;oe++){we=X[oe].mipmaps;for(let ve=0;ve<we.length;ve++){const Xe=we[ve];S.format!==Tt&&S.format!==In?J!==null?n.compressedTexImage2D(34069+oe,ve,pe,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):n.texImage2D(34069+oe,ve,pe,Xe.width,Xe.height,0,J,ce,Xe.data)}}E.__maxMipLevel=we.length-1}else{we=S.mipmaps;for(let oe=0;oe<6;oe++)if(L){n.texImage2D(34069+oe,0,pe,X[oe].width,X[oe].height,0,J,ce,X[oe].data);for(let ve=0;ve<we.length;ve++){const xt=we[ve].image[oe].image;n.texImage2D(34069+oe,ve+1,pe,xt.width,xt.height,0,J,ce,xt.data)}}else{n.texImage2D(34069+oe,0,pe,J,ce,X[oe]);for(let ve=0;ve<we.length;ve++){const Xe=we[ve];n.texImage2D(34069+oe,ve+1,pe,J,ce,Xe.image[oe])}}E.__maxMipLevel=we.length}_(S,he)&&b(34067,S,te.width,te.height),E.__version=S.version,S.onUpdate&&S.onUpdate(S)}function qe(E,S,q,k){const L=s.convert(S.texture.format),X=s.convert(S.texture.type),te=M(S.texture.internalFormat,L,X);n.texImage2D(k,0,te,S.width,S.height,0,L,X,null),t.bindFramebuffer(36160,E),t.framebufferTexture2D(36160,q,k,i.get(S.texture).__webglTexture,0),t.bindFramebuffer(36160,null)}function V(E,S,q){if(t.bindRenderbuffer(36161,E),S.depthBuffer&&!S.stencilBuffer){let k=33189;if(q){const L=S.depthTexture;L&&L.isDepthTexture&&(L.type===pn?k=36012:L.type===Rr&&(k=33190));const X=Re(S);t.renderbufferStorageMultisample(36161,X,k,S.width,S.height)}else t.renderbufferStorage(36161,k,S.width,S.height);t.framebufferRenderbuffer(36160,36096,36161,E)}else if(S.depthBuffer&&S.stencilBuffer){if(q){const k=Re(S);t.renderbufferStorageMultisample(36161,k,35056,S.width,S.height)}else t.renderbufferStorage(36161,34041,S.width,S.height);t.framebufferRenderbuffer(36160,33306,36161,E)}else{const k=s.convert(S.texture.format),L=s.convert(S.texture.type),X=M(S.texture.internalFormat,k,L);if(q){const te=Re(S);t.renderbufferStorageMultisample(36161,te,X,S.width,S.height)}else t.renderbufferStorage(36161,X,S.width,S.height)}t.bindRenderbuffer(36161,null)}function ct(E,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),R(S.depthTexture,0);const k=i.get(S.depthTexture).__webglTexture;if(S.depthTexture.format===si)t.framebufferTexture2D(36160,36096,3553,k,0);else if(S.depthTexture.format===Xi)t.framebufferTexture2D(36160,33306,3553,k,0);else throw new Error("Unknown depthTexture format")}function ye(E){const S=i.get(E),q=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture){if(q)throw new Error("target.depthTexture not supported in Cube render targets");ct(S.__webglFramebuffer,E)}else if(q){S.__webglDepthbuffer=[];for(let k=0;k<6;k++)t.bindFramebuffer(36160,S.__webglFramebuffer[k]),S.__webglDepthbuffer[k]=t.createRenderbuffer(),V(S.__webglDepthbuffer[k],E,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),V(S.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function De(E){const S=i.get(E),q=i.get(E.texture);E.addEventListener("dispose",I),q.__webglTexture=t.createTexture(),o.memory.textures++;const k=E.isWebGLCubeRenderTarget===!0,L=E.isWebGLMultisampleRenderTarget===!0,X=g(E)||a;if(a&&E.texture.format===In&&(E.texture.type===pn||E.texture.type===Ur)&&(E.texture.format=Tt,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),k){S.__webglFramebuffer=[];for(let te=0;te<6;te++)S.__webglFramebuffer[te]=t.createFramebuffer()}else if(S.__webglFramebuffer=t.createFramebuffer(),L)if(a){S.__webglMultisampledFramebuffer=t.createFramebuffer(),S.__webglColorRenderbuffer=t.createRenderbuffer(),t.bindRenderbuffer(36161,S.__webglColorRenderbuffer);const te=s.convert(E.texture.format),he=s.convert(E.texture.type),J=M(E.texture.internalFormat,te,he),ce=Re(E);t.renderbufferStorageMultisample(36161,ce,J,E.width,E.height),t.bindFramebuffer(36160,S.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064,36161,S.__webglColorRenderbuffer),t.bindRenderbuffer(36161,null),E.depthBuffer&&(S.__webglDepthRenderbuffer=t.createRenderbuffer(),V(S.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(k){n.bindTexture(34067,q.__webglTexture),le(34067,E.texture,X);for(let te=0;te<6;te++)qe(S.__webglFramebuffer[te],E,36064,34069+te);_(E.texture,X)&&b(34067,E.texture,E.width,E.height),n.bindTexture(34067,null)}else n.bindTexture(3553,q.__webglTexture),le(3553,E.texture,X),qe(S.__webglFramebuffer,E,36064,3553),_(E.texture,X)&&b(3553,E.texture,E.width,E.height),n.bindTexture(3553,null);E.depthBuffer&&ye(E)}function Te(E){const S=E.texture,q=g(E)||a;if(_(S,q)){const k=E.isWebGLCubeRenderTarget?34067:3553,L=i.get(S).__webglTexture;n.bindTexture(k,L),b(k,S,E.width,E.height),n.bindTexture(k,null)}}function Ne(E){if(E.isWebGLMultisampleRenderTarget)if(a){const S=i.get(E);t.bindFramebuffer(36008,S.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,S.__webglFramebuffer);const q=E.width,k=E.height;let L=16384;E.depthBuffer&&(L|=256),E.stencilBuffer&&(L|=1024),t.blitFramebuffer(0,0,q,k,0,0,q,k,L,9728),t.bindFramebuffer(36160,S.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Re(E){return a&&E.isWebGLMultisampleRenderTarget?Math.min(h,E.samples):0}function j(E){const S=o.render.frame;u.get(E)!==S&&(u.set(E,S),E.update())}let Z=!1,$=!1;function de(E,S){E&&E.isWebGLRenderTarget&&(Z===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),Z=!0),E=E.texture),R(E,S)}function ie(E,S){E&&E.isWebGLCubeRenderTarget&&($===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),$=!0),E=E.texture),W(E,S)}this.allocateTextureUnit=O,this.resetTextureUnits=N,this.setTexture2D=R,this.setTexture2DArray=C,this.setTexture3D=F,this.setTextureCube=W,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=Ne,this.safeSetTexture2D=de,this.safeSetTextureCube=ie}function bf(t,e,n){const i=n.isWebGL2;function r(s){let o;if(s===lr)return 5121;if(s===lu)return 32819;if(s===hu)return 32820;if(s===uu)return 33635;if(s===ou)return 5120;if(s===au)return 5122;if(s===zr)return 5123;if(s===cu)return 5124;if(s===Rr)return 5125;if(s===pn)return 5126;if(s===Ur)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===fu)return 6406;if(s===In)return 6407;if(s===Tt)return 6408;if(s===du)return 6409;if(s===pu)return 6410;if(s===si)return 6402;if(s===Xi)return 34041;if(s===gu)return 6403;if(s===yu)return 36244;if(s===vu)return 33319;if(s===xu)return 33320;if(s===_u)return 36248;if(s===bu)return 36249;if(s===qa||s===Xa||s===Ya||s===Za)if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===qa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Xa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ya)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Za)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ja||s===$a||s===Qa||s===Ka)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ja)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===$a)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Qa)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ka)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===wu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===ec||s===tc)&&(o=e.get("WEBGL_compressed_texture_etc"),o!==null)){if(s===ec)return o.COMPRESSED_RGB8_ETC2;if(s===tc)return o.COMPRESSED_RGBA8_ETC2_EAC}if(s===Mu||s===Su||s===Tu||s===Eu||s===Au||s===Lu||s===Ru||s===Cu||s===Pu||s===Iu||s===Du||s===Nu||s===Bu||s===Ou||s===zu||s===Uu||s===Gu||s===Hu||s===Vu||s===ku||s===Wu||s===ju||s===qu||s===Xu||s===Yu||s===Zu||s===Ju||s===$u)return o=e.get("WEBGL_compressed_texture_astc"),o!==null?s:null;if(s===Fu)return o=e.get("EXT_texture_compression_bptc"),o!==null?s:null;if(s===ji)return i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}function xo(t){Ke.call(this),this.cameras=t||[]}xo.prototype=Object.assign(Object.create(Ke.prototype),{constructor:xo,isArrayCamera:!0});function Pn(){ae.call(this),this.type="Group"}Pn.prototype=Object.assign(Object.create(ae.prototype),{constructor:Pn,isGroup:!0});function Ir(){this._targetRay=null,this._grip=null,this._hand=null}Object.assign(Ir.prototype,{constructor:Ir,getHandSpace:function(){if(this._hand===null&&(this._hand=new Pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints=[],this._hand.inputState={pinching:!1},window.XRHand))for(let t=0;t<=window.XRHand.LITTLE_PHALANX_TIP;t++){const e=new Pn;e.matrixAutoUpdate=!1,e.visible=!1,this._hand.joints.push(e),this._hand.add(e)}return this._hand},getTargetRaySpace:function(){return this._targetRay===null&&(this._targetRay=new Pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1),this._targetRay},getGripSpace:function(){return this._grip===null&&(this._grip=new Pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1),this._grip},dispatchEvent:function(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this},disconnect:function(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this},update:function(t,e,n){let i=null,r=null,s=null;const o=this._targetRay,a=this._grip,c=this._hand;if(t)if(c&&t.hand){s=!0;for(let l=0;l<=window.XRHand.LITTLE_PHALANX_TIP;l++)if(t.hand[l]){const d=e.getJointPose(t.hand[l],n),h=c.joints[l];d!==null&&(h.matrix.fromArray(d.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.jointRadius=d.radius),h.visible=d!==null;const u=c.joints[window.XRHand.INDEX_PHALANX_TIP],f=c.joints[window.XRHand.THUMB_PHALANX_TIP],p=u.position.distanceTo(f.position),y=.02,v=.005;c.inputState.pinching&&p>y+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=y-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}}else o!==null&&(i=e.getPose(t.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale))),a!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale)));return o!==null&&(o.visible=i!==null),a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),this}});function wf(t,e){const n=this;let i=null,r=1,s=null,o="local-floor",a=null;const c=[],l=new Map,d=new Ke;d.layers.enable(1),d.viewport=new Oe;const h=new Ke;h.layers.enable(2),h.viewport=new Oe;const u=[d,h],f=new xo;f.layers.enable(1),f.layers.enable(2);let p=null,y=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let N=c[D];return N===void 0&&(N=new Ir,c[D]=N),N.getTargetRaySpace()},this.getControllerGrip=function(D){let N=c[D];return N===void 0&&(N=new Ir,c[D]=N),N.getGripSpace()},this.getHand=function(D){let N=c[D];return N===void 0&&(N=new Ir,c[D]=N),N.getHandSpace()};function v(D){const N=l.get(D.inputSource);N&&N.dispatchEvent({type:D.type,data:D.inputSource})}function g(){l.forEach(function(D,N){D.disconnect(N)}),l.clear(),t.setFramebuffer(null),t.setRenderTarget(t.getRenderTarget()),U.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}function m(D){s=D,U.setContext(i),U.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}this.setFramebufferScaleFactor=function(D){r=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){o=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return s},this.getSession=function(){return i},this.setSession=function(D){if(i=D,i!==null){i.addEventListener("select",v),i.addEventListener("selectstart",v),i.addEventListener("selectend",v),i.addEventListener("squeeze",v),i.addEventListener("squeezestart",v),i.addEventListener("squeezeend",v),i.addEventListener("end",g);const N=e.getContextAttributes();N.xrCompatible!==!0&&e.makeXRCompatible();const O={antialias:N.antialias,alpha:N.alpha,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:r},R=new XRWebGLLayer(i,e,O);i.updateRenderState({baseLayer:R}),i.requestReferenceSpace(o).then(m),i.addEventListener("inputsourceschange",_)}};function _(D){const N=i.inputSources;for(let O=0;O<c.length;O++)l.set(N[O],c[O]);for(let O=0;O<D.removed.length;O++){const R=D.removed[O],C=l.get(R);C&&(C.dispatchEvent({type:"disconnected",data:R}),l.delete(R))}for(let O=0;O<D.added.length;O++){const R=D.added[O],C=l.get(R);C&&C.dispatchEvent({type:"connected",data:R})}}const b=new w,M=new w;function x(D,N,O){b.setFromMatrixPosition(N.matrixWorld),M.setFromMatrixPosition(O.matrixWorld);const R=b.distanceTo(M),C=N.projectionMatrix.elements,F=O.projectionMatrix.elements,W=C[14]/(C[10]-1),Y=C[14]/(C[10]+1),ne=(C[9]+1)/C[5],le=(C[9]-1)/C[5],se=(C[8]-1)/C[0],be=(F[8]+1)/F[0],Se=W*se,qe=W*be,V=R/(-se+be),ct=V*-se;N.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(ct),D.translateZ(V),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.getInverse(D.matrixWorld);const ye=W+V,De=Y+V,Te=Se-ct,Ne=qe+(R-ct),Re=ne*Y/De*ye,j=le*Y/De*ye;D.projectionMatrix.makePerspective(Te,Ne,Re,j,ye,De)}function A(D,N){N===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(N.matrixWorld,D.matrix),D.matrixWorldInverse.getInverse(D.matrixWorld)}this.getCamera=function(D){f.near=h.near=d.near=D.near,f.far=h.far=d.far=D.far,(p!==f.near||y!==f.far)&&(i.updateRenderState({depthNear:f.near,depthFar:f.far}),p=f.near,y=f.far);const N=D.parent,O=f.cameras;A(f,N);for(let C=0;C<O.length;C++)A(O[C],N);D.matrixWorld.copy(f.matrixWorld);const R=D.children;for(let C=0,F=R.length;C<F;C++)R[C].updateMatrixWorld(!0);return O.length===2?x(f,d,h):f.projectionMatrix.copy(d.projectionMatrix),f};let I=null;function P(D,N){if(a=N.getViewerPose(s),a!==null){const R=a.views,C=i.renderState.baseLayer;t.setFramebuffer(C.framebuffer);let F=!1;R.length!==f.cameras.length&&(f.cameras.length=0,F=!0);for(let W=0;W<R.length;W++){const Y=R[W],ne=C.getViewport(Y),le=u[W];le.matrix.fromArray(Y.transform.matrix),le.projectionMatrix.fromArray(Y.projectionMatrix),le.viewport.set(ne.x,ne.y,ne.width,ne.height),W===0&&f.matrix.copy(le.matrix),F===!0&&f.cameras.push(le)}}const O=i.inputSources;for(let R=0;R<c.length;R++){const C=c[R],F=O[R];C.update(F,N,s)}I&&I(D,N)}const U=new ff;U.setAnimationLoop(P),this.setAnimationLoop=function(D){I=D},this.dispose=function(){}}Object.assign(wf.prototype,sn.prototype);function Sv(t){function e(g,m){g.fogColor.value.copy(m.color),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function n(g,m,_,b){m.isMeshBasicMaterial?i(g,m):m.isMeshLambertMaterial?(i(g,m),c(g,m)):m.isMeshToonMaterial?(i(g,m),d(g,m)):m.isMeshPhongMaterial?(i(g,m),l(g,m)):m.isMeshStandardMaterial?(i(g,m),m.isMeshPhysicalMaterial?u(g,m):h(g,m)):m.isMeshMatcapMaterial?(i(g,m),f(g,m)):m.isMeshDepthMaterial?(i(g,m),p(g,m)):m.isMeshDistanceMaterial?(i(g,m),y(g,m)):m.isMeshNormalMaterial?(i(g,m),v(g,m)):m.isLineBasicMaterial?(r(g,m),m.isLineDashedMaterial&&s(g,m)):m.isPointsMaterial?o(g,m,_,b):m.isSpriteMaterial?a(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap),m.specularMap&&(g.specularMap.value=m.specularMap);const _=t.get(m).envMap;if(_){g.envMap.value=_,g.flipEnvMap.value=_.isCubeTexture&&_._needsFlipEnvMap?-1:1,g.reflectivity.value=m.reflectivity,g.refractionRatio.value=m.refractionRatio;const x=t.get(_).__maxMipLevel;x!==void 0&&(g.maxMipLevel.value=x)}m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity);let b;m.map?b=m.map:m.specularMap?b=m.specularMap:m.displacementMap?b=m.displacementMap:m.normalMap?b=m.normalMap:m.bumpMap?b=m.bumpMap:m.roughnessMap?b=m.roughnessMap:m.metalnessMap?b=m.metalnessMap:m.alphaMap?b=m.alphaMap:m.emissiveMap?b=m.emissiveMap:m.clearcoatMap?b=m.clearcoatMap:m.clearcoatNormalMap?b=m.clearcoatNormalMap:m.clearcoatRoughnessMap&&(b=m.clearcoatRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),g.uvTransform.value.copy(b.matrix));let M;m.aoMap?M=m.aoMap:m.lightMap&&(M=m.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),g.uv2Transform.value.copy(M.matrix))}function r(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity}function s(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function o(g,m,_,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=b*.5,m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap);let M;m.map?M=m.map:m.alphaMap&&(M=m.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),g.uvTransform.value.copy(M.matrix))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),g.uvTransform.value.copy(_.matrix))}function c(g,m){m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap)}function l(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===et&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===et&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===et&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===et&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function h(g,m){g.roughness.value=m.roughness,g.metalness.value=m.metalness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===et&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===et&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),t.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function u(g,m){h(g,m),g.reflectivity.value=m.reflectivity,g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.sheen&&g.sheen.value.copy(m.sheen),m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),g.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===et&&g.clearcoatNormalScale.value.negate()),g.transmission.value=m.transmission,m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap)}function f(g,m){m.matcap&&(g.matcap.value=m.matcap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===et&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===et&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function p(g,m){m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function y(g,m){m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),g.referencePosition.value.copy(m.referencePosition),g.nearDistance.value=m.nearDistance,g.farDistance.value=m.farDistance}function v(g,m){m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===et&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===et&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function gs(t){t=t||{};const e=t.canvas!==void 0?t.canvas:document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),n=t.context!==void 0?t.context:null,i=t.alpha!==void 0?t.alpha:!1,r=t.depth!==void 0?t.depth:!0,s=t.stencil!==void 0?t.stencil:!0,o=t.antialias!==void 0?t.antialias:!1,a=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,c=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,l=t.powerPreference!==void 0?t.powerPreference:"default",d=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1;let h=null,u=null;this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=gt,this.physicallyCorrectLights=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.maxMorphTargets=8,this.maxMorphNormals=4;const f=this;let p=!1,y=null,v=0,g=0,m=null,_=null,b=-1,M=null,x=null;const A=new Oe,I=new Oe;let P=null,U=e.width,D=e.height,N=1,O=null,R=null;const C=new Oe(0,0,U,D),F=new Oe(0,0,U,D);let W=!1;const Y=new ms;let ne=!1,le=!1;const se=new Ee,be=new w,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function qe(){return m===null?N:1}let V=n;function ct(T,z){for(let B=0;B<T.length;B++){const G=T[B],K=e.getContext(G,z);if(K!==null)return K}return null}try{const T={alpha:i,depth:r,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:d};if(e.addEventListener("webglcontextlost",Xe,!1),e.addEventListener("webglcontextrestored",xt,!1),V===null){const z=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&z.shift(),V=ct(z,T),V===null)throw ct(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ye,De,Te,Ne,Re,j,Z,$,de,ie,E,S,q,k,L,X,te,he,J,ce,pe;function we(){ye=new iy(V),De=new ey(V,ye,t),De.isWebGL2===!1&&(ye.get("WEBGL_depth_texture"),ye.get("OES_texture_float"),ye.get("OES_texture_half_float"),ye.get("OES_texture_half_float_linear"),ye.get("OES_standard_derivatives"),ye.get("OES_element_index_uint"),ye.get("OES_vertex_array_object"),ye.get("ANGLE_instanced_arrays")),ye.get("OES_texture_float_linear"),ce=new bf(V,ye,De),Te=new wv(V,ye,De),Te.scissor(I.copy(F).multiplyScalar(N).floor()),Te.viewport(A.copy(C).multiplyScalar(N).floor()),Ne=new oy,Re=new hv,j=new Mv(V,ye,Te,Re,De,ce,Ne),Z=new ny(f),$=new Rp(V,De),pe=new Qg(V,ye,$,De),de=new ry(V,$,Ne,pe),ie=new hy(V,de,$,Ne),te=new ly(V),L=new ty(Re),E=new lv(f,Z,ye,De,pe,L),S=new Sv(Re),q=new dv(Re),k=new xv,X=new $g(f,Z,Te,ie,a),he=new Kg(V,ye,Ne,De),J=new sy(V,ye,Ne,De),Ne.programs=E.programs,f.capabilities=De,f.extensions=ye,f.properties=Re,f.renderLists=q,f.state=Te,f.info=Ne}we();const oe=new wf(f,V);this.xr=oe;const ve=new _f(f,ie,De.maxTextureSize);this.shadowMap=ve,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const T=ye.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ye.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(T){T!==void 0&&(N=T,this.setSize(U,D,!1))},this.getSize=function(T){return T===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),T=new H),T.set(U,D)},this.setSize=function(T,z,B){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=T,D=z,e.width=Math.floor(T*N),e.height=Math.floor(z*N),B!==!1&&(e.style.width=T+"px",e.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),T=new H),T.set(U*N,D*N).floor()},this.setDrawingBufferSize=function(T,z,B){U=T,D=z,N=B,e.width=Math.floor(T*B),e.height=Math.floor(z*B),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),T=new Oe),T.copy(A)},this.getViewport=function(T){return T.copy(C)},this.setViewport=function(T,z,B,G){T.isVector4?C.set(T.x,T.y,T.z,T.w):C.set(T,z,B,G),Te.viewport(A.copy(C).multiplyScalar(N).floor())},this.getScissor=function(T){return T.copy(F)},this.setScissor=function(T,z,B,G){T.isVector4?F.set(T.x,T.y,T.z,T.w):F.set(T,z,B,G),Te.scissor(I.copy(F).multiplyScalar(N).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(T){Te.setScissorTest(W=T)},this.setOpaqueSort=function(T){O=T},this.setTransparentSort=function(T){R=T},this.getClearColor=function(){return X.getClearColor()},this.setClearColor=function(){X.setClearColor.apply(X,arguments)},this.getClearAlpha=function(){return X.getClearAlpha()},this.setClearAlpha=function(){X.setClearAlpha.apply(X,arguments)},this.clear=function(T,z,B){let G=0;(T===void 0||T)&&(G|=16384),(z===void 0||z)&&(G|=256),(B===void 0||B)&&(G|=1024),V.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Xe,!1),e.removeEventListener("webglcontextrestored",xt,!1),q.dispose(),k.dispose(),Re.dispose(),Z.dispose(),ie.dispose(),pe.dispose(),oe.dispose(),dr.stop()};function Xe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1,we()}function dl(T){const z=T.target;z.removeEventListener("dispose",dl),ud(z)}function ud(T){pl(T),Re.remove(T)}function pl(T){const z=Re.get(T).program;z!==void 0&&E.releaseProgram(z)}function fd(T,z){T.render(function(B){f.renderBufferImmediate(B,z)})}this.renderBufferImmediate=function(T,z){pe.initAttributes();const B=Re.get(T);T.hasPositions&&!B.position&&(B.position=V.createBuffer()),T.hasNormals&&!B.normal&&(B.normal=V.createBuffer()),T.hasUvs&&!B.uv&&(B.uv=V.createBuffer()),T.hasColors&&!B.color&&(B.color=V.createBuffer());const G=z.getAttributes();T.hasPositions&&(V.bindBuffer(34962,B.position),V.bufferData(34962,T.positionArray,35048),pe.enableAttribute(G.position),V.vertexAttribPointer(G.position,3,5126,!1,0,0)),T.hasNormals&&(V.bindBuffer(34962,B.normal),V.bufferData(34962,T.normalArray,35048),pe.enableAttribute(G.normal),V.vertexAttribPointer(G.normal,3,5126,!1,0,0)),T.hasUvs&&(V.bindBuffer(34962,B.uv),V.bufferData(34962,T.uvArray,35048),pe.enableAttribute(G.uv),V.vertexAttribPointer(G.uv,2,5126,!1,0,0)),T.hasColors&&(V.bindBuffer(34962,B.color),V.bufferData(34962,T.colorArray,35048),pe.enableAttribute(G.color),V.vertexAttribPointer(G.color,3,5126,!1,0,0)),pe.disableUnusedAttributes(),V.drawArrays(4,0,T.count),T.count=0},this.renderBufferDirect=function(T,z,B,G,K,Pe){z===null&&(z=Se);const Ae=K.isMesh&&K.matrixWorld.determinant()<0,Ie=vl(T,z,G,K);Te.setMaterial(G,Ae);let Le=B.index;const Qe=B.attributes.position;if(Le===null){if(Qe===void 0||Qe.count===0)return}else if(Le.count===0)return;let Je=1;G.wireframe===!0&&(Le=de.getWireframeAttribute(B),Je=2),(G.morphTargets||G.morphNormals)&&te.update(K,B,G,Ie),pe.setup(K,G,Ie,B,Le);let Me,Ue=he;Le!==null&&(Me=$.get(Le),Ue=J,Ue.setIndex(Me));const cn=Le!==null?Le.count:Qe.count,Ge=B.drawRange.start*Je,jn=B.drawRange.count*Je,nt=Pe!==null?Pe.start*Je:0,na=Pe!==null?Pe.count*Je:1/0,_t=Math.max(Ge,nt),pr=Math.min(cn,Ge+jn,nt+na)-1,xi=Math.max(0,pr-_t+1);if(xi!==0){if(K.isMesh)G.wireframe===!0?(Te.setLineWidth(G.wireframeLinewidth*qe()),Ue.setMode(1)):Ue.setMode(4);else if(K.isLine){let mr=G.linewidth;mr===void 0&&(mr=1),Te.setLineWidth(mr*qe()),K.isLineSegments?Ue.setMode(1):K.isLineLoop?Ue.setMode(2):Ue.setMode(3)}else K.isPoints?Ue.setMode(0):K.isSprite&&Ue.setMode(4);if(K.isInstancedMesh)Ue.renderInstances(_t,xi,K.count);else if(B.isInstancedBufferGeometry){const mr=Math.min(B.instanceCount,B._maxInstanceCount);Ue.renderInstances(_t,xi,mr)}else Ue.render(_t,xi)}},this.compile=function(T,z){u=k.get(T,z),u.init(),T.traverse(function(G){G.isLight&&(u.pushLight(G),G.castShadow&&u.pushShadow(G))}),u.setupLights(z);const B=new WeakMap;T.traverse(function(G){const K=G.material;if(K)if(Array.isArray(K))for(let Pe=0;Pe<K.length;Pe++){const Ae=K[Pe];B.has(Ae)===!1&&(an(Ae,T,G),B.set(Ae))}else B.has(K)===!1&&(an(K,T,G),B.set(K))})};let ta=null;function dd(T){oe.isPresenting||ta&&ta(T)}const dr=new ff;dr.setAnimationLoop(dd),typeof window<"u"&&dr.setContext(window),this.setAnimationLoop=function(T){ta=T,oe.setAnimationLoop(T),T===null?dr.stop():dr.start()},this.render=function(T,z){let B,G;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),B=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),G=arguments[3]),z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;pe.resetDefaultState(),b=-1,M=null,T.autoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(z=oe.getCamera(z)),T.isScene===!0&&T.onBeforeRender(f,T,z,B||m),u=k.get(T,z),u.init(),se.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Y.setFromProjectionMatrix(se),le=this.localClippingEnabled,ne=L.init(this.clippingPlanes,le,z),h=q.get(T,z),h.init(),ml(T,z,0,f.sortObjects),h.finish(),f.sortObjects===!0&&h.sort(O,R),ne===!0&&L.beginShadows();const K=u.state.shadowsArray;ve.render(K,T,z),u.setupLights(z),ne===!0&&L.endShadows(),this.info.autoReset===!0&&this.info.reset(),B!==void 0&&this.setRenderTarget(B),X.render(h,T,z,G);const Pe=h.opaque,Ae=h.transparent;Pe.length>0&&gl(Pe,T,z),Ae.length>0&&gl(Ae,T,z),T.isScene===!0&&T.onAfterRender(f,T,z),m!==null&&(j.updateRenderTargetMipmap(m),j.updateMultisampleRenderTarget(m)),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1),h=null,u=null};function ml(T,z,B,G){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)B=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)u.pushLight(T),T.castShadow&&u.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Y.intersectsSprite(T)){G&&be.setFromMatrixPosition(T.matrixWorld).applyMatrix4(se);const Ae=ie.update(T),Ie=T.material;Ie.visible&&h.push(T,Ae,Ie,B,be.z,null)}}else if(T.isImmediateRenderObject)G&&be.setFromMatrixPosition(T.matrixWorld).applyMatrix4(se),h.push(T,null,T.material,B,be.z,null);else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Ne.render.frame&&(T.skeleton.update(),T.skeleton.frame=Ne.render.frame),!T.frustumCulled||Y.intersectsObject(T))){G&&be.setFromMatrixPosition(T.matrixWorld).applyMatrix4(se);const Ae=ie.update(T),Ie=T.material;if(Array.isArray(Ie)){const Le=Ae.groups;for(let Qe=0,Je=Le.length;Qe<Je;Qe++){const Me=Le[Qe],Ue=Ie[Me.materialIndex];Ue&&Ue.visible&&h.push(T,Ae,Ue,B,be.z,Me)}}else Ie.visible&&h.push(T,Ae,Ie,B,be.z,null)}}const Pe=T.children;for(let Ae=0,Ie=Pe.length;Ae<Ie;Ae++)ml(Pe[Ae],z,B,G)}function gl(T,z,B){const G=z.isScene===!0?z.overrideMaterial:null;for(let K=0,Pe=T.length;K<Pe;K++){const Ae=T[K],Ie=Ae.object,Le=Ae.geometry,Qe=G===null?Ae.material:G,Je=Ae.group;if(B.isArrayCamera){x=B;const Me=B.cameras;for(let Ue=0,cn=Me.length;Ue<cn;Ue++){const Ge=Me[Ue];Ie.layers.test(Ge.layers)&&(Te.viewport(A.copy(Ge.viewport)),u.setupLights(Ge),yl(Ie,z,Ge,Le,Qe,Je))}}else x=null,yl(Ie,z,B,Le,Qe,Je)}}function yl(T,z,B,G,K,Pe){if(T.onBeforeRender(f,z,B,G,K,Pe),u=k.get(z,x||B),T.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),T.isImmediateRenderObject){const Ae=vl(B,z,K,T);Te.setMaterial(K),pe.reset(),fd(T,Ae)}else f.renderBufferDirect(B,z,G,K,T,Pe);T.onAfterRender(f,z,B,G,K,Pe),u=k.get(z,x||B)}function an(T,z,B){z.isScene!==!0&&(z=Se);const G=Re.get(T),K=u.state.lights,Pe=u.state.shadowsArray,Ae=K.state.version,Ie=E.getParameters(T,K.state,Pe,z,B),Le=E.getProgramCacheKey(Ie);let Qe=G.program,Je=!0;if(Qe===void 0)T.addEventListener("dispose",dl);else if(Qe.cacheKey!==Le)pl(T);else if(G.lightsStateVersion!==Ae)Je=!1;else if(Ie.shaderID!==void 0){const Ge=T.isMeshStandardMaterial?z.environment:null;G.envMap=Z.get(T.envMap||Ge);return}else Je=!1;Je&&(Ie.uniforms=E.getUniforms(T),T.onBeforeCompile(Ie,f),Qe=E.acquireProgram(Ie,Le),G.program=Qe,G.uniforms=Ie.uniforms,G.outputEncoding=Ie.outputEncoding);const Me=G.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(G.numClippingPlanes=L.numPlanes,G.numIntersection=L.numIntersection,Me.clippingPlanes=L.uniform),G.environment=T.isMeshStandardMaterial?z.environment:null,G.fog=z.fog,G.envMap=Z.get(T.envMap||G.environment),G.needsLights=md(T),G.lightsStateVersion=Ae,G.needsLights&&(Me.ambientLightColor.value=K.state.ambient,Me.lightProbe.value=K.state.probe,Me.directionalLights.value=K.state.directional,Me.directionalLightShadows.value=K.state.directionalShadow,Me.spotLights.value=K.state.spot,Me.spotLightShadows.value=K.state.spotShadow,Me.rectAreaLights.value=K.state.rectArea,Me.ltc_1.value=K.state.rectAreaLTC1,Me.ltc_2.value=K.state.rectAreaLTC2,Me.pointLights.value=K.state.point,Me.pointLightShadows.value=K.state.pointShadow,Me.hemisphereLights.value=K.state.hemi,Me.directionalShadowMap.value=K.state.directionalShadowMap,Me.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Me.spotShadowMap.value=K.state.spotShadowMap,Me.spotShadowMatrix.value=K.state.spotShadowMatrix,Me.pointShadowMap.value=K.state.pointShadowMap,Me.pointShadowMatrix.value=K.state.pointShadowMatrix);const Ue=G.program.getUniforms(),cn=Dn.seqWithValue(Ue.seq,Me);G.uniformsList=cn}function vl(T,z,B,G){z.isScene!==!0&&(z=Se),j.resetTextureUnits();const K=z.fog,Pe=B.isMeshStandardMaterial?z.environment:null,Ae=m===null?f.outputEncoding:m.texture.encoding,Ie=Z.get(B.envMap||Pe),Le=Re.get(B),Qe=u.state.lights;if(ne===!0&&(le===!0||T!==M)){const nt=T===M&&B.id===b;L.setState(B,T,nt)}B.version===Le.__version?(B.fog&&Le.fog!==K||Le.environment!==Pe||Le.needsLights&&Le.lightsStateVersion!==Qe.state.version||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==L.numPlanes||Le.numIntersection!==L.numIntersection)||Le.outputEncoding!==Ae||Le.envMap!==Ie)&&an(B,z,G):(an(B,z,G),Le.__version=B.version);let Je=!1,Me=!1,Ue=!1;const cn=Le.program,Ge=cn.getUniforms(),jn=Le.uniforms;if(Te.useProgram(cn.program)&&(Je=!0,Me=!0,Ue=!0),B.id!==b&&(b=B.id,Me=!0),Je||M!==T){if(Ge.setValue(V,"projectionMatrix",T.projectionMatrix),De.logarithmicDepthBuffer&&Ge.setValue(V,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),M!==T&&(M=T,Me=!0,Ue=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const nt=Ge.map.cameraPosition;nt!==void 0&&nt.setValue(V,be.setFromMatrixPosition(T.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Ge.setValue(V,"isOrthographic",T.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||B.skinning)&&Ge.setValue(V,"viewMatrix",T.matrixWorldInverse)}if(B.skinning){Ge.setOptional(V,G,"bindMatrix"),Ge.setOptional(V,G,"bindMatrixInverse");const nt=G.skeleton;if(nt){const na=nt.bones;if(De.floatVertexTextures){if(nt.boneTexture===void 0){let _t=Math.sqrt(na.length*4);_t=xe.ceilPowerOfTwo(_t),_t=Math.max(_t,4);const pr=new Float32Array(_t*_t*4);pr.set(nt.boneMatrices);const xi=new li(pr,_t,_t,Tt,pn);nt.boneMatrices=pr,nt.boneTexture=xi,nt.boneTextureSize=_t}Ge.setValue(V,"boneTexture",nt.boneTexture,j),Ge.setValue(V,"boneTextureSize",nt.boneTextureSize)}else Ge.setOptional(V,nt,"boneMatrices")}}return(Me||Le.receiveShadow!==G.receiveShadow)&&(Le.receiveShadow=G.receiveShadow,Ge.setValue(V,"receiveShadow",G.receiveShadow)),Me&&(Ge.setValue(V,"toneMappingExposure",f.toneMappingExposure),Le.needsLights&&pd(jn,Ue),K&&B.fog&&S.refreshFogUniforms(jn,K),S.refreshMaterialUniforms(jn,B,N,D),Dn.upload(V,Le.uniformsList,jn,j)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Dn.upload(V,Le.uniformsList,jn,j),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Ge.setValue(V,"center",G.center),Ge.setValue(V,"modelViewMatrix",G.modelViewMatrix),Ge.setValue(V,"normalMatrix",G.normalMatrix),Ge.setValue(V,"modelMatrix",G.matrixWorld),cn}function pd(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function md(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.setFramebuffer=function(T){y!==T&&m===null&&V.bindFramebuffer(36160,T),y=T},this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return g},this.getRenderList=function(){return h},this.setRenderList=function(T){h=T},this.getRenderState=function(){return u},this.setRenderState=function(T){u=T},this.getRenderTarget=function(){return m},this.setRenderTarget=function(T,z=0,B=0){m=T,v=z,g=B,T&&Re.get(T).__webglFramebuffer===void 0&&j.setupRenderTarget(T);let G=y,K=!1;if(T){const Pe=Re.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(G=Pe[z],K=!0):T.isWebGLMultisampleRenderTarget?G=Re.get(T).__webglMultisampledFramebuffer:G=Pe,A.copy(T.viewport),I.copy(T.scissor),P=T.scissorTest}else A.copy(C).multiplyScalar(N).floor(),I.copy(F).multiplyScalar(N).floor(),P=W;if(_!==G&&(V.bindFramebuffer(36160,G),_=G),Te.viewport(A),Te.scissor(I),Te.setScissorTest(P),K){const Pe=Re.get(T.texture);V.framebufferTexture2D(36160,36064,34069+z,Pe.__webglTexture,B)}},this.readRenderTargetPixels=function(T,z,B,G,K,Pe,Ae){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Re.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ie=Ie[Ae]),Ie){let Le=!1;Ie!==_&&(V.bindFramebuffer(36160,Ie),Le=!0);try{const Qe=T.texture,Je=Qe.format,Me=Qe.type;if(Je!==Tt&&ce.convert(Je)!==V.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Me!==lr&&ce.convert(Me)!==V.getParameter(35738)&&!(Me===pn&&(De.isWebGL2||ye.get("OES_texture_float")||ye.get("WEBGL_color_buffer_float")))&&!(Me===Ur&&(De.isWebGL2?ye.get("EXT_color_buffer_float"):ye.get("EXT_color_buffer_half_float")))){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V.checkFramebufferStatus(36160)===36053?z>=0&&z<=T.width-G&&B>=0&&B<=T.height-K&&V.readPixels(z,B,G,K,ce.convert(Je),ce.convert(Me),Pe):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{Le&&V.bindFramebuffer(36160,_)}}},this.copyFramebufferToTexture=function(T,z,B){B===void 0&&(B=0);const G=Math.pow(2,-B),K=Math.floor(z.image.width*G),Pe=Math.floor(z.image.height*G),Ae=ce.convert(z.format);j.setTexture2D(z,0),V.copyTexImage2D(3553,B,Ae,T.x,T.y,K,Pe,0),Te.unbindTexture()},this.copyTextureToTexture=function(T,z,B,G){G===void 0&&(G=0);const K=z.image.width,Pe=z.image.height,Ae=ce.convert(B.format),Ie=ce.convert(B.type);j.setTexture2D(B,0),V.pixelStorei(37440,B.flipY),V.pixelStorei(37441,B.premultiplyAlpha),V.pixelStorei(3317,B.unpackAlignment),z.isDataTexture?V.texSubImage2D(3553,G,T.x,T.y,K,Pe,Ae,Ie,z.image.data):z.isCompressedTexture?V.compressedTexSubImage2D(3553,G,T.x,T.y,z.mipmaps[0].width,z.mipmaps[0].height,Ae,z.mipmaps[0].data):V.texSubImage2D(3553,G,T.x,T.y,Ae,Ie,z.image),G===0&&B.generateMipmaps&&V.generateMipmap(3553),Te.unbindTexture()},this.initTexture=function(T){j.setTexture2D(T,0),Te.unbindTexture()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}function sc(t){gs.call(this,t)}sc.prototype=Object.assign(Object.create(gs.prototype),{constructor:sc,isWebGL1Renderer:!0});class Yo{constructor(e,n){Object.defineProperty(this,"isFogExp2",{value:!0}),this.name="",this.color=new re(e),this.density=n!==void 0?n:25e-5}clone(){return new Yo(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class Zo{constructor(e,n,i){Object.defineProperty(this,"isFog",{value:!0}),this.name="",this.color=new re(e),this.near=n!==void 0?n:1,this.far=i!==void 0?i:1e3}clone(){return new Zo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}let Bc=class extends ae{constructor(){super(),Object.defineProperty(this,"isScene",{value:!0}),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.background!==null&&(n.object.background=this.background.toJSON(e)),this.environment!==null&&(n.object.environment=this.environment.toJSON(e)),this.fog!==null&&(n.object.fog=this.fog.toJSON()),n}};function St(t,e){this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ds,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=xe.generateUUID()}Object.defineProperty(St.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});Object.assign(St.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setUsage:function(t){return this.usage=t,this},copy:function(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this},copyAt:function(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this},set:function(t,e){return e===void 0&&(e=0),this.array.set(t,e),this},clone:function(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xe.generateUUID()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new St(e,this.stride);return n.setUsage(this.usage),n},onUpload:function(t){return this.onUploadCallback=t,this},toJSON:function(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xe.generateUUID()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}});const Zn=new w;function Gn(t,e,n,i){this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i===!0}Object.defineProperties(Gn.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}},needsUpdate:{set:function(t){this.data.needsUpdate=t}}});Object.assign(Gn.prototype,{isInterleavedBufferAttribute:!0,applyMatrix4:function(t){for(let e=0,n=this.data.count;e<n;e++)Zn.x=this.getX(e),Zn.y=this.getY(e),Zn.z=this.getZ(e),Zn.applyMatrix4(t),this.setXYZ(e,Zn.x,Zn.y,Zn.z);return this},setX:function(t,e){return this.data.array[t*this.data.stride+this.offset]=e,this},setY:function(t,e){return this.data.array[t*this.data.stride+this.offset+1]=e,this},setZ:function(t,e){return this.data.array[t*this.data.stride+this.offset+2]=e,this},setW:function(t,e){return this.data.array[t*this.data.stride+this.offset+3]=e,this},getX:function(t){return this.data.array[t*this.data.stride+this.offset]},getY:function(t){return this.data.array[t*this.data.stride+this.offset+1]},getZ:function(t){return this.data.array[t*this.data.stride+this.offset+2]},getW:function(t){return this.data.array[t*this.data.stride+this.offset+3]},setXY:function(t,e,n){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this},setXYZ:function(t,e,n,i){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this},setXYZW:function(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this},clone:function(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new me(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Gn(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)},toJSON:function(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}});function Hn(t){ge.call(this),this.type="SpriteMaterial",this.color=new re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(t)}Hn.prototype=Object.create(ge.prototype);Hn.prototype.constructor=Hn;Hn.prototype.isSpriteMaterial=!0;Hn.prototype.copy=function(t){return ge.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this};let Di;const br=new w,Ni=new w,Bi=new w,Oi=new H,wr=new H,Mf=new Ee,Bs=new w,Mr=new w,Os=new w,kl=new H,Ma=new H,Wl=new H;function Zr(t){if(ae.call(this),this.type="Sprite",Di===void 0){Di=new fe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new St(e,5);Di.setIndex([0,1,2,0,2,3]),Di.setAttribute("position",new Gn(n,3,0,!1)),Di.setAttribute("uv",new Gn(n,2,3,!1))}this.geometry=Di,this.material=t!==void 0?t:new Hn,this.center=new H(.5,.5)}Zr.prototype=Object.assign(Object.create(ae.prototype),{constructor:Zr,isSprite:!0,raycast:function(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ni.setFromMatrixScale(this.matrixWorld),Mf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Bi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ni.multiplyScalar(-Bi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const s=this.center;Fs(Bs.set(-.5,-.5,0),Bi,s,Ni,i,r),Fs(Mr.set(.5,-.5,0),Bi,s,Ni,i,r),Fs(Os.set(.5,.5,0),Bi,s,Ni,i,r),kl.set(0,0),Ma.set(1,0),Wl.set(1,1);let o=t.ray.intersectTriangle(Bs,Mr,Os,!1,br);if(o===null&&(Fs(Mr.set(-.5,.5,0),Bi,s,Ni,i,r),Ma.set(0,1),o=t.ray.intersectTriangle(Bs,Os,Mr,!1,br),o===null))return;const a=t.ray.origin.distanceTo(br);a<t.near||a>t.far||e.push({distance:a,point:br.clone(),uv:ot.getUV(br,Bs,Mr,Os,kl,Ma,Wl,new H),face:null,object:this})},copy:function(t){return ae.prototype.copy.call(this,t),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}});function Fs(t,e,n,i,r,s){Oi.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(wr.x=s*Oi.x-r*Oi.y,wr.y=r*Oi.x+s*Oi.y):wr.copy(Oi),t.copy(e),t.x+=wr.x,t.y+=wr.y,t.applyMatrix4(Mf)}const zs=new w,jl=new w;function Jr(){ae.call(this),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}Jr.prototype=Object.assign(Object.create(ae.prototype),{constructor:Jr,isLOD:!0,copy:function(t){ae.prototype.copy.call(this,t,!1);const e=t.levels;for(let n=0,i=e.length;n<i;n++){const r=e[n];this.addLevel(r.object.clone(),r.distance)}return this.autoUpdate=t.autoUpdate,this},addLevel:function(t,e){e===void 0&&(e=0),e=Math.abs(e);const n=this.levels;let i;for(i=0;i<n.length&&!(e<n[i].distance);i++);return n.splice(i,0,{distance:e,object:t}),this.add(t),this},getCurrentLevel:function(){return this._currentLevel},getObjectForDistance:function(t){const e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i&&!(t<e[n].distance);n++);return e[n-1].object}return null},raycast:function(t,e){if(this.levels.length>0){zs.setFromMatrixPosition(this.matrixWorld);const i=t.ray.origin.distanceTo(zs);this.getObjectForDistance(i).raycast(t,e)}},update:function(t){const e=this.levels;if(e.length>1){zs.setFromMatrixPosition(t.matrixWorld),jl.setFromMatrixPosition(this.matrixWorld);const n=zs.distanceTo(jl)/t.zoom;e[0].object.visible=!0;let i,r;for(i=1,r=e.length;i<r&&n>=e[i].distance;i++)e[i-1].object.visible=!1,e[i].object.visible=!0;for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}},toJSON:function(t){const e=ae.prototype.toJSON.call(this,t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const s=n[i];e.object.levels.push({object:s.object.uuid,distance:s.distance})}return e}});function _o(t,e){t&&t.isGeometry&&console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."),We.call(this,t,e),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ee,this.bindMatrixInverse=new Ee}_o.prototype=Object.assign(Object.create(We.prototype),{constructor:_o,isSkinnedMesh:!0,copy:function(t){return We.prototype.copy.call(this,t),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this},bind:function(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.getInverse(e)},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){const t=new Oe,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.x=e.getX(n),t.y=e.getY(n),t.z=e.getZ(n),t.w=e.getW(n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}},updateMatrixWorld:function(t){We.prototype.updateMatrixWorld.call(this,t),this.bindMode==="attached"?this.bindMatrixInverse.getInverse(this.matrixWorld):this.bindMode==="detached"?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)},boneTransform:function(){const t=new w,e=new Oe,n=new Oe,i=new w,r=new Ee;return function(s,o){const a=this.skeleton,c=this.geometry;e.fromBufferAttribute(c.attributes.skinIndex,s),n.fromBufferAttribute(c.attributes.skinWeight,s),t.fromBufferAttribute(c.attributes.position,s).applyMatrix4(this.bindMatrix),o.set(0,0,0);for(let l=0;l<4;l++){const d=n.getComponent(l);if(d!==0){const h=e.getComponent(l);r.multiplyMatrices(a.bones[h].matrixWorld,a.boneInverses[h]),o.addScaledVector(i.copy(t).applyMatrix4(r),d)}}return o.applyMatrix4(this.bindMatrixInverse)}}()});const ql=new Ee,Tv=new Ee;function bo(t,e){if(t=t||[],this.bones=t.slice(0),this.boneMatrices=new Float32Array(this.bones.length*16),this.frame=-1,e===void 0)this.calculateInverses();else if(this.bones.length===e.length)this.boneInverses=e.slice(0);else{console.warn("THREE.Skeleton boneInverses is the wrong length."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ee)}}Object.assign(bo.prototype,{calculateInverses:function(){this.boneInverses=[];for(let t=0,e=this.bones.length;t<e;t++){const n=new Ee;this.bones[t]&&n.getInverse(this.bones[t].matrixWorld),this.boneInverses.push(n)}},pose:function(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.getInverse(this.boneInverses[t])}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.getInverse(n.parent.matrixWorld),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}},update:function(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=t.length;r<s;r++){const o=t[r]?t[r].matrixWorld:Tv;ql.multiplyMatrices(o,e[r]),ql.toArray(n,r*16)}i!==void 0&&(i.needsUpdate=!0)},clone:function(){return new bo(this.bones,this.boneInverses)},getBoneByName:function(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}},dispose:function(){this.boneTexture&&(this.boneTexture.dispose(),this.boneTexture=void 0)}});function oc(){ae.call(this),this.type="Bone"}oc.prototype=Object.assign(Object.create(ae.prototype),{constructor:oc,isBone:!0});const Xl=new Ee,Yl=new Ee,Us=[],Sr=new We;function wo(t,e,n){We.call(this,t,e),this.instanceMatrix=new me(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}wo.prototype=Object.assign(Object.create(We.prototype),{constructor:wo,isInstancedMesh:!0,copy:function(t){return We.prototype.copy.call(this,t),this.instanceMatrix.copy(t.instanceMatrix),this.count=t.count,this},setColorAt:function(t,e){this.instanceColor===null&&(this.instanceColor=new me(new Float32Array(this.count*3),3)),e.toArray(this.instanceColor.array,t*3)},getMatrixAt:function(t,e){e.fromArray(this.instanceMatrix.array,t*16)},raycast:function(t,e){const n=this.matrixWorld,i=this.count;if(Sr.geometry=this.geometry,Sr.material=this.material,Sr.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,Xl),Yl.multiplyMatrices(n,Xl),Sr.matrixWorld=Yl,Sr.raycast(t,Us);for(let s=0,o=Us.length;s<o;s++){const a=Us[s];a.instanceId=r,a.object=this,e.push(a)}Us.length=0}},setMatrixAt:function(t,e){e.toArray(this.instanceMatrix.array,t*16)},updateMorphTargets:function(){}});function je(t){ge.call(this),this.type="LineBasicMaterial",this.color=new re(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(t)}je.prototype=Object.create(ge.prototype);je.prototype.constructor=je;je.prototype.isLineBasicMaterial=!0;je.prototype.copy=function(t){return ge.prototype.copy.call(this,t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.morphTargets=t.morphTargets,this};const Zl=new w,Jl=new w,$l=new Ee,Gs=new hr,Hs=new bn;function Nt(t,e,n){n===1&&console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."),ae.call(this),this.type="Line",this.geometry=t!==void 0?t:new fe,this.material=e!==void 0?e:new je,this.updateMorphTargets()}Nt.prototype=Object.assign(Object.create(ae.prototype),{constructor:Nt,isLine:!0,copy:function(t){return ae.prototype.copy.call(this,t),this.material=t.material,this.geometry=t.geometry,this},computeLineDistances:function(){const t=this.geometry;if(t.isBufferGeometry)if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Zl.fromBufferAttribute(e,i-1),Jl.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Zl.distanceTo(Jl);t.setAttribute("lineDistance",new Q(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(t.isGeometry){const e=t.vertices,n=t.lineDistances;n[0]=0;for(let i=1,r=e.length;i<r;i++)n[i]=n[i-1],n[i]+=e[i-1].distanceTo(e[i])}return this},raycast:function(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(i),Hs.radius+=r,t.ray.intersectsSphere(Hs)===!1)return;$l.getInverse(i),Gs.copy(t.ray).applyMatrix4($l);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,a=new w,c=new w,l=new w,d=new w,h=this.isLineSegments?2:1;if(n.isBufferGeometry){const u=n.index,p=n.attributes.position;if(u!==null){const y=u.array;for(let v=0,g=y.length-1;v<g;v+=h){const m=y[v],_=y[v+1];if(a.fromBufferAttribute(p,m),c.fromBufferAttribute(p,_),Gs.distanceSqToSegment(a,c,d,l)>o)continue;d.applyMatrix4(this.matrixWorld);const M=t.ray.origin.distanceTo(d);M<t.near||M>t.far||e.push({distance:M,point:l.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else for(let y=0,v=p.count-1;y<v;y+=h){if(a.fromBufferAttribute(p,y),c.fromBufferAttribute(p,y+1),Gs.distanceSqToSegment(a,c,d,l)>o)continue;d.applyMatrix4(this.matrixWorld);const m=t.ray.origin.distanceTo(d);m<t.near||m>t.far||e.push({distance:m,point:l.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else if(n.isGeometry){const u=n.vertices,f=u.length;for(let p=0;p<f-1;p+=h){if(Gs.distanceSqToSegment(u[p],u[p+1],d,l)>o)continue;d.applyMatrix4(this.matrixWorld);const v=t.ray.origin.distanceTo(d);v<t.near||v>t.far||e.push({distance:v,point:l.clone().applyMatrix4(this.matrixWorld),index:p,face:null,faceIndex:null,object:this})}}},updateMorphTargets:function(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});const Vs=new w,ks=new w;function vt(t,e){Nt.call(this,t,e),this.type="LineSegments"}vt.prototype=Object.assign(Object.create(Nt.prototype),{constructor:vt,isLineSegments:!0,computeLineDistances:function(){const t=this.geometry;if(t.isBufferGeometry)if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Vs.fromBufferAttribute(e,i),ks.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Vs.distanceTo(ks);t.setAttribute("lineDistance",new Q(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(t.isGeometry){const e=t.vertices,n=t.lineDistances;for(let i=0,r=e.length;i<r;i+=2)Vs.copy(e[i]),ks.copy(e[i+1]),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Vs.distanceTo(ks)}return this}});function Mo(t,e){Nt.call(this,t,e),this.type="LineLoop"}Mo.prototype=Object.assign(Object.create(Nt.prototype),{constructor:Mo,isLineLoop:!0});function kt(t){ge.call(this),this.type="PointsMaterial",this.color=new re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(t)}kt.prototype=Object.create(ge.prototype);kt.prototype.constructor=kt;kt.prototype.isPointsMaterial=!0;kt.prototype.copy=function(t){return ge.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.morphTargets=t.morphTargets,this};const Ql=new Ee,ac=new hr,Ws=new bn,js=new w;function Qi(t,e){ae.call(this),this.type="Points",this.geometry=t!==void 0?t:new fe,this.material=e!==void 0?e:new kt,this.updateMorphTargets()}Qi.prototype=Object.assign(Object.create(ae.prototype),{constructor:Qi,isPoints:!0,copy:function(t){return ae.prototype.copy.call(this,t),this.material=t.material,this.geometry=t.geometry,this},raycast:function(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(i),Ws.radius+=r,t.ray.intersectsSphere(Ws)===!1)return;Ql.getInverse(i),ac.copy(t.ray).applyMatrix4(Ql);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s;if(n.isBufferGeometry){const a=n.index,l=n.attributes.position;if(a!==null){const d=a.array;for(let h=0,u=d.length;h<u;h++){const f=d[h];js.fromBufferAttribute(l,f),Sa(js,f,o,i,t,e,this)}}else for(let d=0,h=l.count;d<h;d++)js.fromBufferAttribute(l,d),Sa(js,d,o,i,t,e,this)}else{const a=n.vertices;for(let c=0,l=a.length;c<l;c++)Sa(a[c],c,o,i,t,e,this)}},updateMorphTargets:function(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});function Sa(t,e,n,i,r,s,o){const a=ac.distanceSqToPoint(t);if(a<n){const c=new w;ac.closestPointToPoint(t,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}function cc(t,e,n,i,r,s,o,a,c){ze.call(this,t,e,n,i,r,s,o,a,c),this.format=o!==void 0?o:In,this.minFilter=s!==void 0?s:rt,this.magFilter=r!==void 0?r:rt,this.generateMipmaps=!1;const l=this;function d(){l.needsUpdate=!0,t.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(d)}cc.prototype=Object.assign(Object.create(ze.prototype),{constructor:cc,isVideoTexture:!0,update:function(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}});function Ki(t,e,n,i,r,s,o,a,c,l,d,h){ze.call(this,null,s,o,a,c,l,i,r,d,h),this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}Ki.prototype=Object.create(ze.prototype);Ki.prototype.constructor=Ki;Ki.prototype.isCompressedTexture=!0;function $r(t,e,n,i,r,s,o,a,c){ze.call(this,t,e,n,i,r,s,o,a,c),this.needsUpdate=!0}$r.prototype=Object.create(ze.prototype);$r.prototype.constructor=$r;$r.prototype.isCanvasTexture=!0;function Qr(t,e,n,i,r,s,o,a,c,l){if(l=l!==void 0?l:si,l!==si&&l!==Xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===si&&(n=zr),n===void 0&&l===Xi&&(n=ji),ze.call(this,null,i,r,s,o,a,l,n,c),this.image={width:t,height:e},this.magFilter=o!==void 0?o:tt,this.minFilter=a!==void 0?a:tt,this.flipY=!1,this.generateMipmaps=!1}Qr.prototype=Object.create(ze.prototype);Qr.prototype.constructor=Qr;Qr.prototype.isDepthTexture=!0;let Ev=0;const Zt=new Ee,Ta=new ae,qs=new w;function Fe(){Object.defineProperty(this,"id",{value:Ev+=2}),this.uuid=xe.generateUUID(),this.name="",this.type="Geometry",this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.elementsNeedUpdate=!1,this.verticesNeedUpdate=!1,this.uvsNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.lineDistancesNeedUpdate=!1,this.groupsNeedUpdate=!1}Fe.prototype=Object.assign(Object.create(sn.prototype),{constructor:Fe,isGeometry:!0,applyMatrix4:function(t){const e=new mt().getNormalMatrix(t);for(let n=0,i=this.vertices.length;n<i;n++)this.vertices[n].applyMatrix4(t);for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n];r.normal.applyMatrix3(e).normalize();for(let s=0,o=r.vertexNormals.length;s<o;s++)r.vertexNormals[s].applyMatrix3(e).normalize()}return this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this.verticesNeedUpdate=!0,this.normalsNeedUpdate=!0,this},rotateX:function(t){return Zt.makeRotationX(t),this.applyMatrix4(Zt),this},rotateY:function(t){return Zt.makeRotationY(t),this.applyMatrix4(Zt),this},rotateZ:function(t){return Zt.makeRotationZ(t),this.applyMatrix4(Zt),this},translate:function(t,e,n){return Zt.makeTranslation(t,e,n),this.applyMatrix4(Zt),this},scale:function(t,e,n){return Zt.makeScale(t,e,n),this.applyMatrix4(Zt),this},lookAt:function(t){return Ta.lookAt(t),Ta.updateMatrix(),this.applyMatrix4(Ta.matrix),this},fromBufferGeometry:function(t){const e=this,n=t.index!==null?t.index:void 0,i=t.attributes;if(i.position===void 0)return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."),this;const r=i.position,s=i.normal,o=i.color,a=i.uv,c=i.uv2;c!==void 0&&(this.faceVertexUvs[1]=[]);for(let h=0;h<r.count;h++)e.vertices.push(new w().fromBufferAttribute(r,h)),o!==void 0&&e.colors.push(new re().fromBufferAttribute(o,h));function l(h,u,f,p){const y=o===void 0?[]:[e.colors[h].clone(),e.colors[u].clone(),e.colors[f].clone()],v=s===void 0?[]:[new w().fromBufferAttribute(s,h),new w().fromBufferAttribute(s,u),new w().fromBufferAttribute(s,f)],g=new Vr(h,u,f,v,y,p);e.faces.push(g),a!==void 0&&e.faceVertexUvs[0].push([new H().fromBufferAttribute(a,h),new H().fromBufferAttribute(a,u),new H().fromBufferAttribute(a,f)]),c!==void 0&&e.faceVertexUvs[1].push([new H().fromBufferAttribute(c,h),new H().fromBufferAttribute(c,u),new H().fromBufferAttribute(c,f)])}const d=t.groups;if(d.length>0)for(let h=0;h<d.length;h++){const u=d[h],f=u.start,p=u.count;for(let y=f,v=f+p;y<v;y+=3)n!==void 0?l(n.getX(y),n.getX(y+1),n.getX(y+2),u.materialIndex):l(y,y+1,y+2,u.materialIndex)}else if(n!==void 0)for(let h=0;h<n.count;h+=3)l(n.getX(h),n.getX(h+1),n.getX(h+2));else for(let h=0;h<r.count;h+=3)l(h,h+1,h+2);return this.computeFaceNormals(),t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this},normalize:function(){this.computeBoundingSphere();const t=this.boundingSphere.center,e=this.boundingSphere.radius,n=e===0?1:1/e,i=new Ee;return i.set(n,0,0,-n*t.x,0,n,0,-n*t.y,0,0,n,-n*t.z,0,0,0,1),this.applyMatrix4(i),this},computeFaceNormals:function(){const t=new w,e=new w;for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n],s=this.vertices[r.a],o=this.vertices[r.b],a=this.vertices[r.c];t.subVectors(a,o),e.subVectors(s,o),t.cross(e),t.normalize(),r.normal.copy(t)}},computeVertexNormals:function(t){t===void 0&&(t=!0);const e=new Array(this.vertices.length);for(let n=0,i=this.vertices.length;n<i;n++)e[n]=new w;if(t){const n=new w,i=new w;for(let r=0,s=this.faces.length;r<s;r++){const o=this.faces[r],a=this.vertices[o.a],c=this.vertices[o.b],l=this.vertices[o.c];n.subVectors(l,c),i.subVectors(a,c),n.cross(i),e[o.a].add(n),e[o.b].add(n),e[o.c].add(n)}}else{this.computeFaceNormals();for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n];e[r.a].add(r.normal),e[r.b].add(r.normal),e[r.c].add(r.normal)}}for(let n=0,i=this.vertices.length;n<i;n++)e[n].normalize();for(let n=0,i=this.faces.length;n<i;n++){const r=this.faces[n],s=r.vertexNormals;s.length===3?(s[0].copy(e[r.a]),s[1].copy(e[r.b]),s[2].copy(e[r.c])):(s[0]=e[r.a].clone(),s[1]=e[r.b].clone(),s[2]=e[r.c].clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){this.computeFaceNormals();for(let t=0,e=this.faces.length;t<e;t++){const n=this.faces[t],i=n.vertexNormals;i.length===3?(i[0].copy(n.normal),i[1].copy(n.normal),i[2].copy(n.normal)):(i[0]=n.normal.clone(),i[1]=n.normal.clone(),i[2]=n.normal.clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){for(let e=0,n=this.faces.length;e<n;e++){const i=this.faces[e];i.__originalFaceNormal?i.__originalFaceNormal.copy(i.normal):i.__originalFaceNormal=i.normal.clone(),i.__originalVertexNormals||(i.__originalVertexNormals=[]);for(let r=0,s=i.vertexNormals.length;r<s;r++)i.__originalVertexNormals[r]?i.__originalVertexNormals[r].copy(i.vertexNormals[r]):i.__originalVertexNormals[r]=i.vertexNormals[r].clone()}const t=new Fe;t.faces=this.faces;for(let e=0,n=this.morphTargets.length;e<n;e++){if(!this.morphNormals[e]){this.morphNormals[e]={},this.morphNormals[e].faceNormals=[],this.morphNormals[e].vertexNormals=[];const r=this.morphNormals[e].faceNormals,s=this.morphNormals[e].vertexNormals;for(let o=0,a=this.faces.length;o<a;o++){const c=new w,l={a:new w,b:new w,c:new w};r.push(c),s.push(l)}}const i=this.morphNormals[e];t.vertices=this.morphTargets[e].vertices,t.computeFaceNormals(),t.computeVertexNormals();for(let r=0,s=this.faces.length;r<s;r++){const o=this.faces[r],a=i.faceNormals[r],c=i.vertexNormals[r];a.copy(o.normal),c.a.copy(o.vertexNormals[0]),c.b.copy(o.vertexNormals[1]),c.c.copy(o.vertexNormals[2])}}for(let e=0,n=this.faces.length;e<n;e++){const i=this.faces[e];i.normal=i.__originalFaceNormal,i.vertexNormals=i.__originalVertexNormals}},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new on),this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new bn),this.boundingSphere.setFromPoints(this.vertices)},merge:function(t,e,n){if(!(t&&t.isGeometry)){console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",t);return}let i;const r=this.vertices.length,s=this.vertices,o=t.vertices,a=this.faces,c=t.faces,l=this.colors,d=t.colors;n===void 0&&(n=0),e!==void 0&&(i=new mt().getNormalMatrix(e));for(let h=0,u=o.length;h<u;h++){const p=o[h].clone();e!==void 0&&p.applyMatrix4(e),s.push(p)}for(let h=0,u=d.length;h<u;h++)l.push(d[h].clone());for(let h=0,u=c.length;h<u;h++){const f=c[h];let p,y;const v=f.vertexNormals,g=f.vertexColors,m=new Vr(f.a+r,f.b+r,f.c+r);m.normal.copy(f.normal),i!==void 0&&m.normal.applyMatrix3(i).normalize();for(let _=0,b=v.length;_<b;_++)p=v[_].clone(),i!==void 0&&p.applyMatrix3(i).normalize(),m.vertexNormals.push(p);m.color.copy(f.color);for(let _=0,b=g.length;_<b;_++)y=g[_],m.vertexColors.push(y.clone());m.materialIndex=f.materialIndex+n,a.push(m)}for(let h=0,u=t.faceVertexUvs.length;h<u;h++){const f=t.faceVertexUvs[h];this.faceVertexUvs[h]===void 0&&(this.faceVertexUvs[h]=[]);for(let p=0,y=f.length;p<y;p++){const v=f[p],g=[];for(let m=0,_=v.length;m<_;m++)g.push(v[m].clone());this.faceVertexUvs[h].push(g)}}},mergeMesh:function(t){if(!(t&&t.isMesh)){console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",t);return}t.matrixAutoUpdate&&t.updateMatrix(),this.merge(t.geometry,t.matrix)},mergeVertices:function(){const t={},e=[],n=[],r=Math.pow(10,4);for(let a=0,c=this.vertices.length;a<c;a++){const l=this.vertices[a],d=Math.round(l.x*r)+"_"+Math.round(l.y*r)+"_"+Math.round(l.z*r);t[d]===void 0?(t[d]=a,e.push(this.vertices[a]),n[a]=e.length-1):n[a]=n[t[d]]}const s=[];for(let a=0,c=this.faces.length;a<c;a++){const l=this.faces[a];l.a=n[l.a],l.b=n[l.b],l.c=n[l.c];const d=[l.a,l.b,l.c];for(let h=0;h<3;h++)if(d[h]===d[(h+1)%3]){s.push(a);break}}for(let a=s.length-1;a>=0;a--){const c=s[a];this.faces.splice(c,1);for(let l=0,d=this.faceVertexUvs.length;l<d;l++)this.faceVertexUvs[l].splice(c,1)}const o=this.vertices.length-e.length;return this.vertices=e,o},setFromPoints:function(t){this.vertices=[];for(let e=0,n=t.length;e<n;e++){const i=t[e];this.vertices.push(new w(i.x,i.y,i.z||0))}return this},sortFacesByMaterialIndex:function(){const t=this.faces,e=t.length;for(let a=0;a<e;a++)t[a]._id=a;function n(a,c){return a.materialIndex-c.materialIndex}t.sort(n);const i=this.faceVertexUvs[0],r=this.faceVertexUvs[1];let s,o;i&&i.length===e&&(s=[]),r&&r.length===e&&(o=[]);for(let a=0;a<e;a++){const c=t[a]._id;s&&s.push(i[c]),o&&o.push(r[c])}s&&(this.faceVertexUvs[0]=s),o&&(this.faceVertexUvs[1]=o)},toJSON:function(){const t={metadata:{version:4.5,type:"Geometry",generator:"Geometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.parameters!==void 0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(t[p]=f[p]);return t}const e=[];for(let f=0;f<this.vertices.length;f++){const p=this.vertices[f];e.push(p.x,p.y,p.z)}const n=[],i=[],r={},s=[],o={},a=[],c={};for(let f=0;f<this.faces.length;f++){const p=this.faces[f],y=!0,v=!1,g=this.faceVertexUvs[0][f]!==void 0,m=p.normal.length()>0,_=p.vertexNormals.length>0,b=p.color.r!==1||p.color.g!==1||p.color.b!==1,M=p.vertexColors.length>0;let x=0;if(x=l(x,0,0),x=l(x,1,y),x=l(x,2,v),x=l(x,3,g),x=l(x,4,m),x=l(x,5,_),x=l(x,6,b),x=l(x,7,M),n.push(x),n.push(p.a,p.b,p.c),n.push(p.materialIndex),g){const A=this.faceVertexUvs[0][f];n.push(u(A[0]),u(A[1]),u(A[2]))}if(m&&n.push(d(p.normal)),_){const A=p.vertexNormals;n.push(d(A[0]),d(A[1]),d(A[2]))}if(b&&n.push(h(p.color)),M){const A=p.vertexColors;n.push(h(A[0]),h(A[1]),h(A[2]))}}function l(f,p,y){return y?f|1<<p:f&~(1<<p)}function d(f){const p=f.x.toString()+f.y.toString()+f.z.toString();return r[p]!==void 0||(r[p]=i.length/3,i.push(f.x,f.y,f.z)),r[p]}function h(f){const p=f.r.toString()+f.g.toString()+f.b.toString();return o[p]!==void 0||(o[p]=s.length,s.push(f.getHex())),o[p]}function u(f){const p=f.x.toString()+f.y.toString();return c[p]!==void 0||(c[p]=a.length/2,a.push(f.x,f.y)),c[p]}return t.data={},t.data.vertices=e,t.data.normals=i,s.length>0&&(t.data.colors=s),a.length>0&&(t.data.uvs=[a]),t.data.faces=n,t},clone:function(){return new Fe().copy(this)},copy:function(t){this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.name=t.name;const e=t.vertices;for(let h=0,u=e.length;h<u;h++)this.vertices.push(e[h].clone());const n=t.colors;for(let h=0,u=n.length;h<u;h++)this.colors.push(n[h].clone());const i=t.faces;for(let h=0,u=i.length;h<u;h++)this.faces.push(i[h].clone());for(let h=0,u=t.faceVertexUvs.length;h<u;h++){const f=t.faceVertexUvs[h];this.faceVertexUvs[h]===void 0&&(this.faceVertexUvs[h]=[]);for(let p=0,y=f.length;p<y;p++){const v=f[p],g=[];for(let m=0,_=v.length;m<_;m++){const b=v[m];g.push(b.clone())}this.faceVertexUvs[h].push(g)}}const r=t.morphTargets;for(let h=0,u=r.length;h<u;h++){const f={};if(f.name=r[h].name,r[h].vertices!==void 0){f.vertices=[];for(let p=0,y=r[h].vertices.length;p<y;p++)f.vertices.push(r[h].vertices[p].clone())}if(r[h].normals!==void 0){f.normals=[];for(let p=0,y=r[h].normals.length;p<y;p++)f.normals.push(r[h].normals[p].clone())}this.morphTargets.push(f)}const s=t.morphNormals;for(let h=0,u=s.length;h<u;h++){const f={};if(s[h].vertexNormals!==void 0){f.vertexNormals=[];for(let p=0,y=s[h].vertexNormals.length;p<y;p++){const v=s[h].vertexNormals[p],g={};g.a=v.a.clone(),g.b=v.b.clone(),g.c=v.c.clone(),f.vertexNormals.push(g)}}if(s[h].faceNormals!==void 0){f.faceNormals=[];for(let p=0,y=s[h].faceNormals.length;p<y;p++)f.faceNormals.push(s[h].faceNormals[p].clone())}this.morphNormals.push(f)}const o=t.skinWeights;for(let h=0,u=o.length;h<u;h++)this.skinWeights.push(o[h].clone());const a=t.skinIndices;for(let h=0,u=a.length;h<u;h++)this.skinIndices.push(a[h].clone());const c=t.lineDistances;for(let h=0,u=c.length;h<u;h++)this.lineDistances.push(c[h]);const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.elementsNeedUpdate=t.elementsNeedUpdate,this.verticesNeedUpdate=t.verticesNeedUpdate,this.uvsNeedUpdate=t.uvsNeedUpdate,this.normalsNeedUpdate=t.normalsNeedUpdate,this.colorsNeedUpdate=t.colorsNeedUpdate,this.lineDistancesNeedUpdate=t.lineDistancesNeedUpdate,this.groupsNeedUpdate=t.groupsNeedUpdate,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});class lc extends Fe{constructor(e,n,i,r,s,o){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o},this.fromBufferGeometry(new ps(e,n,i,r,s,o)),this.mergeVertices()}}class Oc extends fe{constructor(e,n,i,r){super(),this.type="CircleBufferGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},e=e||1,n=n!==void 0?Math.max(3,n):8,i=i!==void 0?i:0,r=r!==void 0?r:Math.PI*2;const s=[],o=[],a=[],c=[],l=new w,d=new H;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,u=3;h<=n;h++,u+=3){const f=i+h/n*r;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),d.x=(o[u]/e+1)/2,d.y=(o[u+1]/e+1)/2,c.push(d.x,d.y)}for(let h=1;h<=n;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Q(o,3)),this.setAttribute("normal",new Q(a,3)),this.setAttribute("uv",new Q(c,2))}}class Sf extends Fe{constructor(e,n,i,r){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},this.fromBufferGeometry(new Oc(e,n,i,r)),this.mergeVertices()}}class ys extends fe{constructor(e,n,i,r,s,o,a,c){super(),this.type="CylinderBufferGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;e=e!==void 0?e:1,n=n!==void 0?n:1,i=i||1,r=Math.floor(r)||8,s=Math.floor(s)||1,o=o!==void 0?o:!1,a=a!==void 0?a:0,c=c!==void 0?c:Math.PI*2;const d=[],h=[],u=[],f=[];let p=0;const y=[],v=i/2;let g=0;m(),o===!1&&(e>0&&_(!0),n>0&&_(!1)),this.setIndex(d),this.setAttribute("position",new Q(h,3)),this.setAttribute("normal",new Q(u,3)),this.setAttribute("uv",new Q(f,2));function m(){const b=new w,M=new w;let x=0;const A=(n-e)/i;for(let I=0;I<=s;I++){const P=[],U=I/s,D=U*(n-e)+e;for(let N=0;N<=r;N++){const O=N/r,R=O*c+a,C=Math.sin(R),F=Math.cos(R);M.x=D*C,M.y=-U*i+v,M.z=D*F,h.push(M.x,M.y,M.z),b.set(C,A,F).normalize(),u.push(b.x,b.y,b.z),f.push(O,1-U),P.push(p++)}y.push(P)}for(let I=0;I<r;I++)for(let P=0;P<s;P++){const U=y[P][I],D=y[P+1][I],N=y[P+1][I+1],O=y[P][I+1];d.push(U,D,O),d.push(D,N,O),x+=6}l.addGroup(g,x,0),g+=x}function _(b){const M=p,x=new H,A=new w;let I=0;const P=b===!0?e:n,U=b===!0?1:-1;for(let N=1;N<=r;N++)h.push(0,v*U,0),u.push(0,U,0),f.push(.5,.5),p++;const D=p;for(let N=0;N<=r;N++){const R=N/r*c+a,C=Math.cos(R),F=Math.sin(R);A.x=P*F,A.y=v*U,A.z=P*C,h.push(A.x,A.y,A.z),u.push(0,U,0),x.x=C*.5+.5,x.y=F*.5*U+.5,f.push(x.x,x.y),p++}for(let N=0;N<r;N++){const O=M+N,R=D+N;b===!0?d.push(R,R+1,O):d.push(R+1,R,O),I+=3}l.addGroup(g,I,b===!0?1:2),g+=I}}}class Fc extends Fe{constructor(e,n,i,r,s,o,a,c){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c},this.fromBufferGeometry(new ys(e,n,i,r,s,o,a,c)),this.mergeVertices()}}class Tf extends Fc{constructor(e,n,i,r,s,o,a){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}}class Ef extends ys{constructor(e,n,i,r,s,o,a){super(0,e,n,i,r,s,o,a),this.type="ConeBufferGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}}class vi extends fe{constructor(e,n,i,r){super(),this.type="PolyhedronBufferGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r},i=i||1,r=r||0;const s=[],o=[];a(r),l(i),d(),this.setAttribute("position",new Q(s,3)),this.setAttribute("normal",new Q(s.slice(),3)),this.setAttribute("uv",new Q(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const _=new w,b=new w,M=new w;for(let x=0;x<n.length;x+=3)f(n[x+0],_),f(n[x+1],b),f(n[x+2],M),c(_,b,M,m)}function c(m,_,b,M){const x=M+1,A=[];for(let I=0;I<=x;I++){A[I]=[];const P=m.clone().lerp(b,I/x),U=_.clone().lerp(b,I/x),D=x-I;for(let N=0;N<=D;N++)N===0&&I===x?A[I][N]=P:A[I][N]=P.clone().lerp(U,N/D)}for(let I=0;I<x;I++)for(let P=0;P<2*(x-I)-1;P++){const U=Math.floor(P/2);P%2===0?(u(A[I][U+1]),u(A[I+1][U]),u(A[I][U])):(u(A[I][U+1]),u(A[I+1][U+1]),u(A[I+1][U]))}}function l(m){const _=new w;for(let b=0;b<s.length;b+=3)_.x=s[b+0],_.y=s[b+1],_.z=s[b+2],_.normalize().multiplyScalar(m),s[b+0]=_.x,s[b+1]=_.y,s[b+2]=_.z}function d(){const m=new w;for(let _=0;_<s.length;_+=3){m.x=s[_+0],m.y=s[_+1],m.z=s[_+2];const b=v(m)/2/Math.PI+.5,M=g(m)/Math.PI+.5;o.push(b,1-M)}p(),h()}function h(){for(let m=0;m<o.length;m+=6){const _=o[m+0],b=o[m+2],M=o[m+4],x=Math.max(_,b,M),A=Math.min(_,b,M);x>.9&&A<.1&&(_<.2&&(o[m+0]+=1),b<.2&&(o[m+2]+=1),M<.2&&(o[m+4]+=1))}}function u(m){s.push(m.x,m.y,m.z)}function f(m,_){const b=m*3;_.x=e[b+0],_.y=e[b+1],_.z=e[b+2]}function p(){const m=new w,_=new w,b=new w,M=new w,x=new H,A=new H,I=new H;for(let P=0,U=0;P<s.length;P+=9,U+=6){m.set(s[P+0],s[P+1],s[P+2]),_.set(s[P+3],s[P+4],s[P+5]),b.set(s[P+6],s[P+7],s[P+8]),x.set(o[U+0],o[U+1]),A.set(o[U+2],o[U+3]),I.set(o[U+4],o[U+5]),M.copy(m).add(_).add(b).divideScalar(3);const D=v(M);y(x,U+0,m,D),y(A,U+2,_,D),y(I,U+4,b,D)}}function y(m,_,b,M){M<0&&m.x===1&&(o[_]=m.x-1),b.x===0&&b.z===0&&(o[_]=M/2/Math.PI+.5)}function v(m){return Math.atan2(m.z,-m.x)}function g(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}}class zc extends vi{constructor(e,n){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronBufferGeometry",this.parameters={radius:e,detail:n}}}class Af extends Fe{constructor(e,n){super(),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n},this.fromBufferGeometry(new zc(e,n)),this.mergeVertices()}}const Xs=new w,Ys=new w,Ea=new w,Zs=new ot;class Uc extends fe{constructor(e,n){super(),this.type="EdgesGeometry",this.parameters={thresholdAngle:n},n=n!==void 0?n:1,e.isGeometry&&(e=new fe().fromGeometry(e));const r=Math.pow(10,4),s=Math.cos(xe.DEG2RAD*n),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],d=["a","b","c"],h=new Array(3),u={},f=[];for(let p=0;p<c;p+=3){o?(l[0]=o.getX(p),l[1]=o.getX(p+1),l[2]=o.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);const{a:y,b:v,c:g}=Zs;if(y.fromBufferAttribute(a,l[0]),v.fromBufferAttribute(a,l[1]),g.fromBufferAttribute(a,l[2]),Zs.getNormal(Ea),h[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,h[1]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,h[2]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let m=0;m<3;m++){const _=(m+1)%3,b=h[m],M=h[_],x=Zs[d[m]],A=Zs[d[_]],I=`${b}_${M}`,P=`${M}_${b}`;P in u&&u[P]?(Ea.dot(u[P].normal)<=s&&(f.push(x.x,x.y,x.z),f.push(A.x,A.y,A.z)),u[P]=null):I in u||(u[I]={index0:l[m],index1:l[_],normal:Ea.clone()})}}for(const p in u)if(u[p]){const{index0:y,index1:v}=u[p];Xs.fromBufferAttribute(a,y),Ys.fromBufferAttribute(a,v),f.push(Xs.x,Xs.y,Xs.z),f.push(Ys.x,Ys.y,Ys.z)}this.setAttribute("position",new Q(f,3))}}const Av={triangulate:function(t,e,n){n=n||2;const i=e&&e.length,r=i?e[0]*n:t.length;let s=Lf(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,d,h,u,f;if(i&&(s=Iv(t,e,s,n)),t.length>80*n){a=l=t[0],c=d=t[1];for(let p=n;p<r;p+=n)h=t[p],u=t[p+1],h<a&&(a=h),u<c&&(c=u),h>l&&(l=h),u>d&&(d=u);f=Math.max(l-a,d-c),f=f!==0?1/f:0}return Kr(s,o,n,a,c,f),o}};function Lf(t,e,n,i,r){let s,o;if(r===kv(t,e,n,i)>0)for(s=e;s<n;s+=i)o=Kl(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=Kl(s,t[s],t[s+1],o);return o&&Jo(o,o.next)&&(ts(o),o=o.next),o}function Vn(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Jo(n,n.next)||Ye(n.prev,n,n.next)===0)){if(ts(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Kr(t,e,n,i,r,s,o){if(!t)return;!o&&s&&Fv(t,i,r,s);let a=t,c,l;for(;t.prev!==t.next;){if(c=t.prev,l=t.next,s?Rv(t,i,r,s):Lv(t)){e.push(c.i/n),e.push(t.i/n),e.push(l.i/n),ts(t),t=l.next,a=l.next;continue}if(t=l,t===a){o?o===1?(t=Cv(Vn(t),e,n),Kr(t,e,n,i,r,s,2)):o===2&&Pv(t,e,n,i,r,s):Kr(Vn(t),e,n,i,r,s,1);break}}}function Lv(t){const e=t.prev,n=t,i=t.next;if(Ye(e,n,i)>=0)return!1;let r=t.next.next;for(;r!==t.prev;){if(ki(e.x,e.y,n.x,n.y,i.x,i.y,r.x,r.y)&&Ye(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function Rv(t,e,n,i){const r=t.prev,s=t,o=t.next;if(Ye(r,s,o)>=0)return!1;const a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,c=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,l=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,d=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,h=hc(a,c,e,n,i),u=hc(l,d,e,n,i);let f=t.prevZ,p=t.nextZ;for(;f&&f.z>=h&&p&&p.z<=u;){if(f!==t.prev&&f!==t.next&&ki(r.x,r.y,s.x,s.y,o.x,o.y,f.x,f.y)&&Ye(f.prev,f,f.next)>=0||(f=f.prevZ,p!==t.prev&&p!==t.next&&ki(r.x,r.y,s.x,s.y,o.x,o.y,p.x,p.y)&&Ye(p.prev,p,p.next)>=0))return!1;p=p.nextZ}for(;f&&f.z>=h;){if(f!==t.prev&&f!==t.next&&ki(r.x,r.y,s.x,s.y,o.x,o.y,f.x,f.y)&&Ye(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;p&&p.z<=u;){if(p!==t.prev&&p!==t.next&&ki(r.x,r.y,s.x,s.y,o.x,o.y,p.x,p.y)&&Ye(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function Cv(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!Jo(r,s)&&Rf(r,i,i.next,s)&&es(r,s)&&es(s,r)&&(e.push(r.i/n),e.push(i.i/n),e.push(s.i/n),ts(i),ts(i.next),i=t=s),i=i.next}while(i!==t);return Vn(i)}function Pv(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Gv(o,a)){let c=Cf(o,a);o=Vn(o,o.next),c=Vn(c,c.next),Kr(o,e,n,i,r,s),Kr(c,e,n,i,r,s);return}a=a.next}o=o.next}while(o!==t)}function Iv(t,e,n,i){const r=[];let s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*i,c=s<o-1?e[s+1]*i:t.length,l=Lf(t,a,c,i,!1),l===l.next&&(l.steiner=!0),r.push(Uv(l));for(r.sort(Dv),s=0;s<r.length;s++)Nv(r[s],n),n=Vn(n,n.next);return n}function Dv(t,e){return t.x-e.x}function Nv(t,e){if(e=Bv(t,e),e){const n=Cf(e,t);Vn(e,e.next),Vn(n,n.next)}}function Bv(t,e){let n=e;const i=t.x,r=t.y;let s=-1/0,o;do{if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){const u=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(u<=i&&u>s){if(s=u,u===i){if(r===n.y)return n;if(r===n.next.y)return n.next}o=n.x<n.next.x?n:n.next}}n=n.next}while(n!==e);if(!o)return null;if(i===s)return o;const a=o,c=o.x,l=o.y;let d=1/0,h;n=o;do i>=n.x&&n.x>=c&&i!==n.x&&ki(r<l?i:s,r,c,l,r<l?s:i,r,n.x,n.y)&&(h=Math.abs(r-n.y)/(i-n.x),es(n,t)&&(h<d||h===d&&(n.x>o.x||n.x===o.x&&Ov(o,n)))&&(o=n,d=h)),n=n.next;while(n!==a);return o}function Ov(t,e){return Ye(t.prev,t,e.prev)<0&&Ye(e.next,t,t.next)<0}function Fv(t,e,n,i){let r=t;do r.z===null&&(r.z=hc(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,zv(r)}function zv(t){let e,n,i,r,s,o,a,c,l=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<l&&(a++,i=i.nextZ,!!i);e++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,c--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,l*=2}while(o>1);return t}function hc(t,e,n,i,r){return t=32767*(t-n)*r,e=32767*(e-i)*r,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function Uv(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function ki(t,e,n,i,r,s,o,a){return(r-o)*(e-a)-(t-o)*(s-a)>=0&&(t-o)*(i-a)-(n-o)*(e-a)>=0&&(n-o)*(s-a)-(r-o)*(i-a)>=0}function Gv(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!Hv(t,e)&&(es(t,e)&&es(e,t)&&Vv(t,e)&&(Ye(t.prev,t,e.prev)||Ye(t,e.prev,e))||Jo(t,e)&&Ye(t.prev,t,t.next)>0&&Ye(e.prev,e,e.next)>0)}function Ye(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Jo(t,e){return t.x===e.x&&t.y===e.y}function Rf(t,e,n,i){const r=$s(Ye(t,e,n)),s=$s(Ye(t,e,i)),o=$s(Ye(n,i,t)),a=$s(Ye(n,i,e));return!!(r!==s&&o!==a||r===0&&Js(t,n,e)||s===0&&Js(t,i,e)||o===0&&Js(n,t,i)||a===0&&Js(n,e,i))}function Js(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function $s(t){return t>0?1:t<0?-1:0}function Hv(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Rf(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function es(t,e){return Ye(t.prev,t,t.next)<0?Ye(t,e,t.next)>=0&&Ye(t,t.prev,e)>=0:Ye(t,e,t.prev)<0||Ye(t,t.next,e)<0}function Vv(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function Cf(t,e){const n=new uc(t.i,t.x,t.y),i=new uc(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function Kl(t,e,n,i){const r=new uc(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ts(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function uc(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function kv(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}const vn={area:function(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5},isClockWise:function(t){return vn.area(t)<0},triangulateShape:function(t,e){const n=[],i=[],r=[];eh(t),th(n,t);let s=t.length;e.forEach(eh);for(let a=0;a<e.length;a++)i.push(s),s+=e[a].length,th(n,e[a]);const o=Av.triangulate(n,i);for(let a=0;a<o.length;a+=3)r.push(o.slice(a,a+3));return r}};function eh(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function th(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class vs extends fe{constructor(e,n){super(),this.type="ExtrudeBufferGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new Q(r,3)),this.setAttribute("uv",new Q(s,2)),this.computeVertexNormals();function o(a){const c=[],l=n.curveSegments!==void 0?n.curveSegments:12,d=n.steps!==void 0?n.steps:1;let h=n.depth!==void 0?n.depth:100,u=n.bevelEnabled!==void 0?n.bevelEnabled:!0,f=n.bevelThickness!==void 0?n.bevelThickness:6,p=n.bevelSize!==void 0?n.bevelSize:f-2,y=n.bevelOffset!==void 0?n.bevelOffset:0,v=n.bevelSegments!==void 0?n.bevelSegments:3;const g=n.extrudePath,m=n.UVGenerator!==void 0?n.UVGenerator:Wv;n.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=n.amount);let _,b=!1,M,x,A,I;g&&(_=g.getSpacedPoints(d),b=!0,u=!1,M=g.computeFrenetFrames(d,!1),x=new w,A=new w,I=new w),u||(v=0,f=0,p=0,y=0);const P=a.extractPoints(l);let U=P.shape;const D=P.holes;if(!vn.isClockWise(U)){U=U.reverse();for(let j=0,Z=D.length;j<Z;j++){const $=D[j];vn.isClockWise($)&&(D[j]=$.reverse())}}const O=vn.triangulateShape(U,D),R=U;for(let j=0,Z=D.length;j<Z;j++){const $=D[j];U=U.concat($)}function C(j,Z,$){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().multiplyScalar($).add(j)}const F=U.length,W=O.length;function Y(j,Z,$){let de,ie,E;const S=j.x-Z.x,q=j.y-Z.y,k=$.x-j.x,L=$.y-j.y,X=S*S+q*q,te=S*L-q*k;if(Math.abs(te)>Number.EPSILON){const he=Math.sqrt(X),J=Math.sqrt(k*k+L*L),ce=Z.x-q/he,pe=Z.y+S/he,we=$.x-L/J,oe=$.y+k/J,ve=((we-ce)*L-(oe-pe)*k)/(S*L-q*k);de=ce+S*ve-j.x,ie=pe+q*ve-j.y;const Xe=de*de+ie*ie;if(Xe<=2)return new H(de,ie);E=Math.sqrt(Xe/2)}else{let he=!1;S>Number.EPSILON?k>Number.EPSILON&&(he=!0):S<-Number.EPSILON?k<-Number.EPSILON&&(he=!0):Math.sign(q)===Math.sign(L)&&(he=!0),he?(de=-q,ie=S,E=Math.sqrt(X)):(de=S,ie=q,E=Math.sqrt(X/2))}return new H(de/E,ie/E)}const ne=[];for(let j=0,Z=R.length,$=Z-1,de=j+1;j<Z;j++,$++,de++)$===Z&&($=0),de===Z&&(de=0),ne[j]=Y(R[j],R[$],R[de]);const le=[];let se,be=ne.concat();for(let j=0,Z=D.length;j<Z;j++){const $=D[j];se=[];for(let de=0,ie=$.length,E=ie-1,S=de+1;de<ie;de++,E++,S++)E===ie&&(E=0),S===ie&&(S=0),se[de]=Y($[de],$[E],$[S]);le.push(se),be=be.concat(se)}for(let j=0;j<v;j++){const Z=j/v,$=f*Math.cos(Z*Math.PI/2),de=p*Math.sin(Z*Math.PI/2)+y;for(let ie=0,E=R.length;ie<E;ie++){const S=C(R[ie],ne[ie],de);ye(S.x,S.y,-$)}for(let ie=0,E=D.length;ie<E;ie++){const S=D[ie];se=le[ie];for(let q=0,k=S.length;q<k;q++){const L=C(S[q],se[q],de);ye(L.x,L.y,-$)}}}const Se=p+y;for(let j=0;j<F;j++){const Z=u?C(U[j],be[j],Se):U[j];b?(A.copy(M.normals[0]).multiplyScalar(Z.x),x.copy(M.binormals[0]).multiplyScalar(Z.y),I.copy(_[0]).add(A).add(x),ye(I.x,I.y,I.z)):ye(Z.x,Z.y,0)}for(let j=1;j<=d;j++)for(let Z=0;Z<F;Z++){const $=u?C(U[Z],be[Z],Se):U[Z];b?(A.copy(M.normals[j]).multiplyScalar($.x),x.copy(M.binormals[j]).multiplyScalar($.y),I.copy(_[j]).add(A).add(x),ye(I.x,I.y,I.z)):ye($.x,$.y,h/d*j)}for(let j=v-1;j>=0;j--){const Z=j/v,$=f*Math.cos(Z*Math.PI/2),de=p*Math.sin(Z*Math.PI/2)+y;for(let ie=0,E=R.length;ie<E;ie++){const S=C(R[ie],ne[ie],de);ye(S.x,S.y,h+$)}for(let ie=0,E=D.length;ie<E;ie++){const S=D[ie];se=le[ie];for(let q=0,k=S.length;q<k;q++){const L=C(S[q],se[q],de);b?ye(L.x,L.y+_[d-1].y,_[d-1].x+$):ye(L.x,L.y,h+$)}}}qe(),V();function qe(){const j=r.length/3;if(u){let Z=0,$=F*Z;for(let de=0;de<W;de++){const ie=O[de];De(ie[2]+$,ie[1]+$,ie[0]+$)}Z=d+v*2,$=F*Z;for(let de=0;de<W;de++){const ie=O[de];De(ie[0]+$,ie[1]+$,ie[2]+$)}}else{for(let Z=0;Z<W;Z++){const $=O[Z];De($[2],$[1],$[0])}for(let Z=0;Z<W;Z++){const $=O[Z];De($[0]+F*d,$[1]+F*d,$[2]+F*d)}}i.addGroup(j,r.length/3-j,0)}function V(){const j=r.length/3;let Z=0;ct(R,Z),Z+=R.length;for(let $=0,de=D.length;$<de;$++){const ie=D[$];ct(ie,Z),Z+=ie.length}i.addGroup(j,r.length/3-j,1)}function ct(j,Z){let $=j.length;for(;--$>=0;){const de=$;let ie=$-1;ie<0&&(ie=j.length-1);for(let E=0,S=d+v*2;E<S;E++){const q=F*E,k=F*(E+1),L=Z+de+q,X=Z+ie+q,te=Z+ie+k,he=Z+de+k;Te(L,X,te,he)}}}function ye(j,Z,$){c.push(j),c.push(Z),c.push($)}function De(j,Z,$){Ne(j),Ne(Z),Ne($);const de=r.length/3,ie=m.generateTopUV(i,r,de-3,de-2,de-1);Re(ie[0]),Re(ie[1]),Re(ie[2])}function Te(j,Z,$,de){Ne(j),Ne(Z),Ne(de),Ne(Z),Ne($),Ne(de);const ie=r.length/3,E=m.generateSideWallUV(i,r,ie-6,ie-3,ie-2,ie-1);Re(E[0]),Re(E[1]),Re(E[3]),Re(E[1]),Re(E[2]),Re(E[3])}function Ne(j){r.push(c[j*3+0]),r.push(c[j*3+1]),r.push(c[j*3+2])}function Re(j){s.push(j.x),s.push(j.y)}}}toJSON(){const e=fe.prototype.toJSON.call(this),n=this.parameters.shapes,i=this.parameters.options;return jv(n,i,e)}}const Wv={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],c=e[i*3+1],l=e[r*3],d=e[r*3+1];return[new H(s,o),new H(a,c),new H(l,d)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],c=e[n*3+2],l=e[i*3],d=e[i*3+1],h=e[i*3+2],u=e[r*3],f=e[r*3+1],p=e[r*3+2],y=e[s*3],v=e[s*3+1],g=e[s*3+2];return Math.abs(a-d)<.01?[new H(o,1-c),new H(l,1-h),new H(u,1-p),new H(y,1-g)]:[new H(a,1-c),new H(d,1-h),new H(f,1-p),new H(v,1-g)]}};function jv(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class Gc extends Fe{constructor(e,n){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},this.fromBufferGeometry(new vs(e,n)),this.mergeVertices()}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return qv(n,i,e)}}function qv(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class Hc extends vi{constructor(e,n){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronBufferGeometry",this.parameters={radius:e,detail:n}}}class Pf extends Fe{constructor(e,n){super(),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n},this.fromBufferGeometry(new Hc(e,n)),this.mergeVertices()}}class Vc extends fe{constructor(e,n,i,r){super(),this.type="LatheBufferGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:r},n=Math.floor(n)||12,i=i||0,r=r||Math.PI*2,r=xe.clamp(r,0,Math.PI*2);const s=[],o=[],a=[],c=1/n,l=new w,d=new H;for(let h=0;h<=n;h++){const u=i+h*c*r,f=Math.sin(u),p=Math.cos(u);for(let y=0;y<=e.length-1;y++)l.x=e[y].x*f,l.y=e[y].y,l.z=e[y].x*p,o.push(l.x,l.y,l.z),d.x=h/n,d.y=y/(e.length-1),a.push(d.x,d.y)}for(let h=0;h<n;h++)for(let u=0;u<e.length-1;u++){const f=u+h*e.length,p=f,y=f+e.length,v=f+e.length+1,g=f+1;s.push(p,y,g),s.push(y,v,g)}if(this.setIndex(s),this.setAttribute("position",new Q(o,3)),this.setAttribute("uv",new Q(a,2)),this.computeVertexNormals(),r===Math.PI*2){const h=this.attributes.normal.array,u=new w,f=new w,p=new w,y=n*e.length*3;for(let v=0,g=0;v<e.length;v++,g+=3)u.x=h[g+0],u.y=h[g+1],u.z=h[g+2],f.x=h[y+g+0],f.y=h[y+g+1],f.z=h[y+g+2],p.addVectors(u,f).normalize(),h[g+0]=h[y+g+0]=p.x,h[g+1]=h[y+g+1]=p.y,h[g+2]=h[y+g+2]=p.z}}}class If extends Fe{constructor(e,n,i,r){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:r},this.fromBufferGeometry(new Vc(e,n,i,r)),this.mergeVertices()}}class $o extends vi{constructor(e,n){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronBufferGeometry",this.parameters={radius:e,detail:n}}}class Df extends Fe{constructor(e,n){super(),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n},this.fromBufferGeometry(new $o(e,n)),this.mergeVertices()}}function er(t,e,n){fe.call(this),this.type="ParametricBufferGeometry",this.parameters={func:t,slices:e,stacks:n};const i=[],r=[],s=[],o=[],a=1e-5,c=new w,l=new w,d=new w,h=new w,u=new w;t.length<3&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");const f=e+1;for(let p=0;p<=n;p++){const y=p/n;for(let v=0;v<=e;v++){const g=v/e;t(g,y,l),r.push(l.x,l.y,l.z),g-a>=0?(t(g-a,y,d),h.subVectors(l,d)):(t(g+a,y,d),h.subVectors(d,l)),y-a>=0?(t(g,y-a,d),u.subVectors(l,d)):(t(g,y+a,d),u.subVectors(d,l)),c.crossVectors(h,u).normalize(),s.push(c.x,c.y,c.z),o.push(g,y)}}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const v=p*f+y,g=p*f+y+1,m=(p+1)*f+y+1,_=(p+1)*f+y;i.push(v,g,_),i.push(g,m,_)}this.setIndex(i),this.setAttribute("position",new Q(r,3)),this.setAttribute("normal",new Q(s,3)),this.setAttribute("uv",new Q(o,2))}er.prototype=Object.create(fe.prototype);er.prototype.constructor=er;function ns(t,e,n){Fe.call(this),this.type="ParametricGeometry",this.parameters={func:t,slices:e,stacks:n},this.fromBufferGeometry(new er(t,e,n)),this.mergeVertices()}ns.prototype=Object.create(Fe.prototype);ns.prototype.constructor=ns;class Nf extends Fe{constructor(e,n,i,r){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r},this.fromBufferGeometry(new Xo(e,n,i,r)),this.mergeVertices()}}class Bf extends Fe{constructor(e,n,i,r){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r},this.fromBufferGeometry(new vi(e,n,i,r)),this.mergeVertices()}}class kc extends fe{constructor(e,n,i,r,s,o){super(),this.type="RingBufferGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},e=e||.5,n=n||1,s=s!==void 0?s:0,o=o!==void 0?o:Math.PI*2,i=i!==void 0?Math.max(3,i):8,r=r!==void 0?Math.max(1,r):1;const a=[],c=[],l=[],d=[];let h=e;const u=(n-e)/r,f=new w,p=new H;for(let y=0;y<=r;y++){for(let v=0;v<=i;v++){const g=s+v/i*o;f.x=h*Math.cos(g),f.y=h*Math.sin(g),c.push(f.x,f.y,f.z),l.push(0,0,1),p.x=(f.x/n+1)/2,p.y=(f.y/n+1)/2,d.push(p.x,p.y)}h+=u}for(let y=0;y<r;y++){const v=y*(i+1);for(let g=0;g<i;g++){const m=g+v,_=m,b=m+i+1,M=m+i+2,x=m+1;a.push(_,b,x),a.push(b,M,x)}}this.setIndex(a),this.setAttribute("position",new Q(c,3)),this.setAttribute("normal",new Q(l,3)),this.setAttribute("uv",new Q(d,2))}}class Of extends Fe{constructor(e,n,i,r,s,o){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},this.fromBufferGeometry(new kc(e,n,i,r,s,o)),this.mergeVertices()}}class Wc extends fe{constructor(e,n){super(),this.type="ShapeBufferGeometry",this.parameters={shapes:e,curveSegments:n},n=n||12;const i=[],r=[],s=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let d=0;d<e.length;d++)l(e[d]),this.addGroup(a,c,d),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Q(r,3)),this.setAttribute("normal",new Q(s,3)),this.setAttribute("uv",new Q(o,2));function l(d){const h=r.length/3,u=d.extractPoints(n);let f=u.shape;const p=u.holes;vn.isClockWise(f)===!1&&(f=f.reverse());for(let v=0,g=p.length;v<g;v++){const m=p[v];vn.isClockWise(m)===!0&&(p[v]=m.reverse())}const y=vn.triangulateShape(f,p);for(let v=0,g=p.length;v<g;v++){const m=p[v];f=f.concat(m)}for(let v=0,g=f.length;v<g;v++){const m=f[v];r.push(m.x,m.y,0),s.push(0,0,1),o.push(m.x,m.y)}for(let v=0,g=y.length;v<g;v++){const m=y[v],_=m[0]+h,b=m[1]+h,M=m[2]+h;i.push(_,b,M),c+=3}}}toJSON(){const e=fe.prototype.toJSON.call(this),n=this.parameters.shapes;return Xv(n,e)}}function Xv(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){const r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}class jc extends Fe{constructor(e,n){super(),this.type="ShapeGeometry",typeof n=="object"&&(console.warn("THREE.ShapeGeometry: Options parameter has been removed."),n=n.curveSegments),this.parameters={shapes:e,curveSegments:n},this.fromBufferGeometry(new Wc(e,n)),this.mergeVertices()}toJSON(){const e=Fe.prototype.toJSON.call(this),n=this.parameters.shapes;return Yv(n,e)}}function Yv(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){const r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}class Qo extends fe{constructor(e,n,i,r,s,o,a){super(),this.type="SphereBufferGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=e||1,n=Math.max(3,Math.floor(n)||8),i=Math.max(2,Math.floor(i)||6),r=r!==void 0?r:0,s=s!==void 0?s:Math.PI*2,o=o!==void 0?o:0,a=a!==void 0?a:Math.PI;const c=Math.min(o+a,Math.PI);let l=0;const d=[],h=new w,u=new w,f=[],p=[],y=[],v=[];for(let g=0;g<=i;g++){const m=[],_=g/i;let b=0;g==0&&o==0?b=.5/n:g==i&&c==Math.PI&&(b=-.5/n);for(let M=0;M<=n;M++){const x=M/n;h.x=-e*Math.cos(r+x*s)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(r+x*s)*Math.sin(o+_*a),p.push(h.x,h.y,h.z),u.copy(h).normalize(),y.push(u.x,u.y,u.z),v.push(x+b,1-_),m.push(l++)}d.push(m)}for(let g=0;g<i;g++)for(let m=0;m<n;m++){const _=d[g][m+1],b=d[g][m],M=d[g+1][m],x=d[g+1][m+1];(g!==0||o>0)&&f.push(_,b,x),(g!==i-1||c<Math.PI)&&f.push(b,M,x)}this.setIndex(f),this.setAttribute("position",new Q(p,3)),this.setAttribute("normal",new Q(y,3)),this.setAttribute("uv",new Q(v,2))}}class Ff extends Fe{constructor(e,n,i,r,s,o,a){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},this.fromBufferGeometry(new Qo(e,n,i,r,s,o,a)),this.mergeVertices()}}class qc extends vi{constructor(e,n){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,n),this.type="TetrahedronBufferGeometry",this.parameters={radius:e,detail:n}}}class zf extends Fe{constructor(e,n){super(),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:n},this.fromBufferGeometry(new qc(e,n)),this.mergeVertices()}}class Xc extends vs{constructor(e,n){n=n||{};const i=n.font;if(!(i&&i.isFont))return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new fe;const r=i.generateShapes(e,n.size);n.depth=n.height!==void 0?n.height:50,n.bevelThickness===void 0&&(n.bevelThickness=10),n.bevelSize===void 0&&(n.bevelSize=8),n.bevelEnabled===void 0&&(n.bevelEnabled=!1),super(r,n),this.type="TextBufferGeometry"}}class Uf extends Fe{constructor(e,n){super(),this.type="TextGeometry",this.parameters={text:e,parameters:n},this.fromBufferGeometry(new Xc(e,n)),this.mergeVertices()}}class Yc extends fe{constructor(e,n,i,r,s){super(),this.type="TorusBufferGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},e=e||1,n=n||.4,i=Math.floor(i)||8,r=Math.floor(r)||6,s=s||Math.PI*2;const o=[],a=[],c=[],l=[],d=new w,h=new w,u=new w;for(let f=0;f<=i;f++)for(let p=0;p<=r;p++){const y=p/r*s,v=f/i*Math.PI*2;h.x=(e+n*Math.cos(v))*Math.cos(y),h.y=(e+n*Math.cos(v))*Math.sin(y),h.z=n*Math.sin(v),a.push(h.x,h.y,h.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),u.subVectors(h,d).normalize(),c.push(u.x,u.y,u.z),l.push(p/r),l.push(f/i)}for(let f=1;f<=i;f++)for(let p=1;p<=r;p++){const y=(r+1)*f+p-1,v=(r+1)*(f-1)+p-1,g=(r+1)*(f-1)+p,m=(r+1)*f+p;o.push(y,v,m),o.push(v,g,m)}this.setIndex(o),this.setAttribute("position",new Q(a,3)),this.setAttribute("normal",new Q(c,3)),this.setAttribute("uv",new Q(l,2))}}class Gf extends Fe{constructor(e,n,i,r,s){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},this.fromBufferGeometry(new Yc(e,n,i,r,s)),this.mergeVertices()}}class Zc extends fe{constructor(e,n,i,r,s,o){super(),this.type="TorusKnotBufferGeometry",this.parameters={radius:e,tube:n,tubularSegments:i,radialSegments:r,p:s,q:o},e=e||1,n=n||.4,i=Math.floor(i)||64,r=Math.floor(r)||8,s=s||2,o=o||3;const a=[],c=[],l=[],d=[],h=new w,u=new w,f=new w,p=new w,y=new w,v=new w,g=new w;for(let _=0;_<=i;++_){const b=_/i*s*Math.PI*2;m(b,s,o,e,f),m(b+.01,s,o,e,p),v.subVectors(p,f),g.addVectors(p,f),y.crossVectors(v,g),g.crossVectors(y,v),y.normalize(),g.normalize();for(let M=0;M<=r;++M){const x=M/r*Math.PI*2,A=-n*Math.cos(x),I=n*Math.sin(x);h.x=f.x+(A*g.x+I*y.x),h.y=f.y+(A*g.y+I*y.y),h.z=f.z+(A*g.z+I*y.z),c.push(h.x,h.y,h.z),u.subVectors(h,f).normalize(),l.push(u.x,u.y,u.z),d.push(_/i),d.push(M/r)}}for(let _=1;_<=i;_++)for(let b=1;b<=r;b++){const M=(r+1)*(_-1)+(b-1),x=(r+1)*_+(b-1),A=(r+1)*_+b,I=(r+1)*(_-1)+b;a.push(M,x,I),a.push(x,A,I)}this.setIndex(a),this.setAttribute("position",new Q(c,3)),this.setAttribute("normal",new Q(l,3)),this.setAttribute("uv",new Q(d,2));function m(_,b,M,x,A){const I=Math.cos(_),P=Math.sin(_),U=M/b*_,D=Math.cos(U);A.x=x*(2+D)*.5*I,A.y=x*(2+D)*P*.5,A.z=x*Math.sin(U)*.5}}}class Hf extends Fe{constructor(e,n,i,r,s,o,a){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:n,tubularSegments:i,radialSegments:r,p:s,q:o},a!==void 0&&console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."),this.fromBufferGeometry(new Zc(e,n,i,r,s,o)),this.mergeVertices()}}class Jc extends fe{constructor(e,n,i,r,s){super(),this.type="TubeBufferGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s},n=n||64,i=i||1,r=r||8,s=s||!1;const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new w,c=new w,l=new H;let d=new w;const h=[],u=[],f=[],p=[];y(),this.setIndex(p),this.setAttribute("position",new Q(h,3)),this.setAttribute("normal",new Q(u,3)),this.setAttribute("uv",new Q(f,2));function y(){for(let _=0;_<n;_++)v(_);v(s===!1?n:0),m(),g()}function v(_){d=e.getPointAt(_/n,d);const b=o.normals[_],M=o.binormals[_];for(let x=0;x<=r;x++){const A=x/r*Math.PI*2,I=Math.sin(A),P=-Math.cos(A);c.x=P*b.x+I*M.x,c.y=P*b.y+I*M.y,c.z=P*b.z+I*M.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=d.x+i*c.x,a.y=d.y+i*c.y,a.z=d.z+i*c.z,h.push(a.x,a.y,a.z)}}function g(){for(let _=1;_<=n;_++)for(let b=1;b<=r;b++){const M=(r+1)*(_-1)+(b-1),x=(r+1)*_+(b-1),A=(r+1)*_+b,I=(r+1)*(_-1)+b;p.push(M,x,I),p.push(x,A,I)}}function m(){for(let _=0;_<=n;_++)for(let b=0;b<=r;b++)l.x=_/n,l.y=b/r,f.push(l.x,l.y)}}toJSON(){const e=fe.prototype.toJSON.call(this);return e.path=this.parameters.path.toJSON(),e}}class Vf extends Fe{constructor(e,n,i,r,s,o){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s},o!==void 0&&console.warn("THREE.TubeGeometry: taper has been removed.");const a=new Jc(e,n,i,r,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals,this.fromBufferGeometry(a),this.mergeVertices()}}class $c extends fe{constructor(e){super(),this.type="WireframeGeometry";const n=[],i=[0,0],r={},s=["a","b","c"];if(e&&e.isGeometry){const o=e.faces;for(let a=0,c=o.length;a<c;a++){const l=o[a];for(let d=0;d<3;d++){const h=l[s[d]],u=l[s[(d+1)%3]];i[0]=Math.min(h,u),i[1]=Math.max(h,u);const f=i[0]+","+i[1];r[f]===void 0&&(r[f]={index1:i[0],index2:i[1]})}}for(const a in r){const c=r[a];let l=e.vertices[c.index1];n.push(l.x,l.y,l.z),l=e.vertices[c.index2],n.push(l.x,l.y,l.z)}}else if(e&&e.isBufferGeometry){const o=new w;if(e.index!==null){const a=e.attributes.position,c=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:c.count,materialIndex:0}]);for(let d=0,h=l.length;d<h;++d){const u=l[d],f=u.start,p=u.count;for(let y=f,v=f+p;y<v;y+=3)for(let g=0;g<3;g++){const m=c.getX(y+g),_=c.getX(y+(g+1)%3);i[0]=Math.min(m,_),i[1]=Math.max(m,_);const b=i[0]+","+i[1];r[b]===void 0&&(r[b]={index1:i[0],index2:i[1]})}}for(const d in r){const h=r[d];o.fromBufferAttribute(a,h.index1),n.push(o.x,o.y,o.z),o.fromBufferAttribute(a,h.index2),n.push(o.x,o.y,o.z)}}else{const a=e.attributes.position;for(let c=0,l=a.count/3;c<l;c++)for(let d=0;d<3;d++){const h=3*c+d;o.fromBufferAttribute(a,h),n.push(o.x,o.y,o.z);const u=3*c+(d+1)%3;o.fromBufferAttribute(a,u),n.push(o.x,o.y,o.z)}}}this.setAttribute("position",new Q(n,3))}}var dt=Object.freeze({__proto__:null,BoxGeometry:lc,BoxBufferGeometry:ps,CircleGeometry:Sf,CircleBufferGeometry:Oc,ConeGeometry:Tf,ConeBufferGeometry:Ef,CylinderGeometry:Fc,CylinderBufferGeometry:ys,DodecahedronGeometry:Af,DodecahedronBufferGeometry:zc,EdgesGeometry:Uc,ExtrudeGeometry:Gc,ExtrudeBufferGeometry:vs,IcosahedronGeometry:Pf,IcosahedronBufferGeometry:Hc,LatheGeometry:If,LatheBufferGeometry:Vc,OctahedronGeometry:Df,OctahedronBufferGeometry:$o,ParametricGeometry:ns,ParametricBufferGeometry:er,PlaneGeometry:Nf,PlaneBufferGeometry:Xo,PolyhedronGeometry:Bf,PolyhedronBufferGeometry:vi,RingGeometry:Of,RingBufferGeometry:kc,ShapeGeometry:jc,ShapeBufferGeometry:Wc,SphereGeometry:Ff,SphereBufferGeometry:Qo,TetrahedronGeometry:zf,TetrahedronBufferGeometry:qc,TextGeometry:Uf,TextBufferGeometry:Xc,TorusGeometry:Gf,TorusBufferGeometry:Yc,TorusKnotGeometry:Hf,TorusKnotBufferGeometry:Zc,TubeGeometry:Vf,TubeBufferGeometry:Jc,WireframeGeometry:$c});function hi(t){ge.call(this),this.type="ShadowMaterial",this.color=new re(0),this.transparent=!0,this.setValues(t)}hi.prototype=Object.create(ge.prototype);hi.prototype.constructor=hi;hi.prototype.isShadowMaterial=!0;hi.prototype.copy=function(t){return ge.prototype.copy.call(this,t),this.color.copy(t.color),this};function xn(t){yt.call(this,t),this.type="RawShaderMaterial"}xn.prototype=Object.create(yt.prototype);xn.prototype.constructor=xn;xn.prototype.isRawShaderMaterial=!0;function tn(t){ge.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yi,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.vertexTangents=!1,this.setValues(t)}tn.prototype=Object.create(ge.prototype);tn.prototype.constructor=tn;tn.prototype.isMeshStandardMaterial=!0;tn.prototype.copy=function(t){return ge.prototype.copy.call(this,t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this.vertexTangents=t.vertexTangents,this};function kn(t){tn.call(this),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new H(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(e){this.reflectivity=xe.clamp(2.5*(e-1)/(e+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(t)}kn.prototype=Object.create(tn.prototype);kn.prototype.constructor=kn;kn.prototype.isMeshPhysicalMaterial=!0;kn.prototype.copy=function(t){return tn.prototype.copy.call(this,t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.reflectivity=t.reflectivity,t.sheen?this.sheen=(this.sheen||new re).copy(t.sheen):this.sheen=null,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this};function Wn(t){ge.call(this),this.type="MeshPhongMaterial",this.color=new re(16777215),this.specular=new re(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yi,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}Wn.prototype=Object.create(ge.prototype);Wn.prototype.constructor=Wn;Wn.prototype.isMeshPhongMaterial=!0;Wn.prototype.copy=function(t){return ge.prototype.copy.call(this,t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function ui(t){ge.call(this),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new re(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yi,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}ui.prototype=Object.create(ge.prototype);ui.prototype.constructor=ui;ui.prototype.isMeshToonMaterial=!0;ui.prototype.copy=function(t){return ge.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function fi(t){ge.call(this),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yi,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}fi.prototype=Object.create(ge.prototype);fi.prototype.constructor=fi;fi.prototype.isMeshNormalMaterial=!0;fi.prototype.copy=function(t){return ge.prototype.copy.call(this,t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function di(t){ge.call(this),this.type="MeshLambertMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}di.prototype=Object.create(ge.prototype);di.prototype.constructor=di;di.prototype.isMeshLambertMaterial=!0;di.prototype.copy=function(t){return ge.prototype.copy.call(this,t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function pi(t){ge.call(this),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new re(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yi,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(t)}pi.prototype=Object.create(ge.prototype);pi.prototype.constructor=pi;pi.prototype.isMeshMatcapMaterial=!0;pi.prototype.copy=function(t){return ge.prototype.copy.call(this,t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.skinning=t.skinning,this.morphTargets=t.morphTargets,this.morphNormals=t.morphNormals,this};function mi(t){je.call(this),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}mi.prototype=Object.create(je.prototype);mi.prototype.constructor=mi;mi.prototype.isLineDashedMaterial=!0;mi.prototype.copy=function(t){return je.prototype.copy.call(this,t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this};var Zv=Object.freeze({__proto__:null,ShadowMaterial:hi,SpriteMaterial:Hn,RawShaderMaterial:xn,ShaderMaterial:yt,PointsMaterial:kt,MeshPhysicalMaterial:kn,MeshStandardMaterial:tn,MeshPhongMaterial:Wn,MeshToonMaterial:ui,MeshNormalMaterial:fi,MeshLambertMaterial:di,MeshDepthMaterial:zn,MeshDistanceMaterial:Un,MeshBasicMaterial:It,MeshMatcapMaterial:pi,LineDashedMaterial:mi,LineBasicMaterial:je,Material:ge});const ke={arraySlice:function(t,e,n){return ke.isTypedArray(t)?new t.constructor(t.subarray(e,n!==void 0?n:t.length)):t.slice(e,n)},convertArray:function(t,e,n){return!t||!n&&t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)},isTypedArray:function(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)},getKeyframeOrder:function(t){function e(r,s){return t[r]-t[s]}const n=t.length,i=new Array(n);for(let r=0;r!==n;++r)i[r]=r;return i.sort(e),i},sortedArray:function(t,e,n){const i=t.length,r=new t.constructor(i);for(let s=0,o=0;o!==i;++s){const a=n[s]*e;for(let c=0;c!==e;++c)r[o++]=t[a+c]}return r},flattenJSON:function(t,e,n,i){let r=1,s=t[0];for(;s!==void 0&&s[i]===void 0;)s=t[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),n.push.apply(n,o)),s=t[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(n,n.length)),s=t[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),n.push(o)),s=t[r++];while(s!==void 0)},subclip:function(t,e,n,i,r){r=r||30;const s=t.clone();s.name=e;const o=[];for(let c=0;c<s.tracks.length;++c){const l=s.tracks[c],d=l.getValueSize(),h=[],u=[];for(let f=0;f<l.times.length;++f){const p=l.times[f]*r;if(!(p<n||p>=i)){h.push(l.times[f]);for(let y=0;y<d;++y)u.push(l.values[f*d+y])}}h.length!==0&&(l.times=ke.convertArray(h,l.times.constructor),l.values=ke.convertArray(u,l.values.constructor),o.push(l))}s.tracks=o;let a=1/0;for(let c=0;c<s.tracks.length;++c)a>s.tracks[c].times[0]&&(a=s.tracks[c].times[0]);for(let c=0;c<s.tracks.length;++c)s.tracks[c].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(t,e,n,i){e===void 0&&(e=0),n===void 0&&(n=t),(i===void 0||i<=0)&&(i=30);const r=n.tracks.length,s=e/i;for(let o=0;o<r;++o){const a=n.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const l=t.tracks.find(function(g){return g.name===a.name&&g.ValueTypeName===c});if(l===void 0)continue;let d=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=h/3);let u=0;const f=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=f/3);const p=a.times.length-1;let y;if(s<=a.times[0]){const g=d,m=h-d;y=ke.arraySlice(a.values,g,m)}else if(s>=a.times[p]){const g=p*h+d,m=g+h-d;y=ke.arraySlice(a.values,g,m)}else{const g=a.createInterpolant(),m=d,_=h-d;g.evaluate(s),y=ke.arraySlice(g.resultBuffer,m,_)}c==="quaternion"&&new ht().fromArray(y).normalize().conjugate().toArray(y);const v=l.times.length;for(let g=0;g<v;++g){const m=g*f+u;if(c==="quaternion")ht.multiplyQuaternionsFlat(l.values,m,y,0,l.values,m);else{const _=f-u*2;for(let b=0;b<_;++b)l.values[m+b]-=y[b]}}}return t.blendMode=Cc,t}};function At(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n}Object.assign(At.prototype,{evaluate:function(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];e:{t:{let s;n:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,t,r)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}s=e.length;break n}if(!(t>=r)){const o=e[1];t<o&&(n=2,r=o);for(let a=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(n===a)break;if(i=r,r=e[--n-1],t>=r)break t}s=n,n=0;break n}break e}for(;n<s;){const o=n+s>>>1;t<e[o]?s=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(i===void 0)return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,r,t)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let s=0;s!==i;++s)e[s]=n[r+s];return e},interpolate_:function(){throw new Error("call to abstract method")},intervalChanged_:function(){}});Object.assign(At.prototype,{beforeStart_:At.prototype.copySampleValue_,afterEnd_:At.prototype.copySampleValue_});function So(t,e,n,i){At.call(this,t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0}So.prototype=Object.assign(Object.create(At.prototype),{constructor:So,DefaultSettings_:{endingStart:ni,endingEnd:ni},intervalChanged_:function(t,e,n){const i=this.parameterPositions;let r=t-2,s=t+1,o=i[r],a=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case ii:r=t,o=2*e-n;break;case Hr:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(a===void 0)switch(this.getSettings_().endingEnd){case ii:s=t,a=2*n-e;break;case Hr:s=1,a=n+i[1]-i[0];break;default:s=t-1,a=e}const c=(n-e)*.5,l=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(a-n),this._offsetPrev=r*l,this._offsetNext=s*l},interpolate_:function(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=t*o,c=a-o,l=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,u=this._weightNext,f=(n-e)/(i-e),p=f*f,y=p*f,v=-h*y+2*h*p-h*f,g=(1+h)*y+(-1.5-2*h)*p+(-.5+h)*f+1,m=(-1-u)*y+(1.5+u)*p+.5*f,_=u*y-u*p;for(let b=0;b!==o;++b)r[b]=v*s[l+b]+g*s[c+b]+m*s[a+b]+_*s[d+b];return r}});function is(t,e,n,i){At.call(this,t,e,n,i)}is.prototype=Object.assign(Object.create(At.prototype),{constructor:is,interpolate_:function(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=t*o,c=a-o,l=(n-e)/(i-e),d=1-l;for(let h=0;h!==o;++h)r[h]=s[c+h]*d+s[a+h]*l;return r}});function To(t,e,n,i){At.call(this,t,e,n,i)}To.prototype=Object.assign(Object.create(At.prototype),{constructor:To,interpolate_:function(t){return this.copySampleValue_(t-1)}});function at(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ke.convertArray(e,this.TimeBufferType),this.values=ke.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}Object.assign(at,{toJSON:function(t){const e=t.constructor;let n;if(e.toJSON!==void 0)n=e.toJSON(t);else{n={name:t.name,times:ke.convertArray(t.times,Array),values:ke.convertArray(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}});Object.assign(at.prototype,{constructor:at,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:Cr,InterpolantFactoryMethodDiscrete:function(t){return new To(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodLinear:function(t){return new is(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodSmooth:function(t){return new So(this.times,this.values,this.getValueSize(),t)},setInterpolation:function(t){let e;switch(t){case Gr:e=this.InterpolantFactoryMethodDiscrete;break;case Cr:e=this.InterpolantFactoryMethodLinear;break;case uo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gr;case this.InterpolantFactoryMethodLinear:return Cr;case this.InterpolantFactoryMethodSmooth:return uo}},getValueSize:function(){return this.values.length/this.times.length},shift:function(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this},scale:function(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this},trim:function(t,e){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<t;)++r;for(;s!==-1&&n[s]>e;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const o=this.getValueSize();this.times=ke.arraySlice(n,r,s),this.values=ke.arraySlice(this.values,r*o,s*o)}return this},validate:function(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let o=0;o!==r;o++){const a=n[o];if(typeof a=="number"&&isNaN(a)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,a),t=!1;break}if(s!==null&&s>a){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,a,s),t=!1;break}s=a}if(i!==void 0&&ke.isTypedArray(i))for(let o=0,a=i.length;o!==a;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t},optimize:function(){const t=ke.arraySlice(this.times),e=ke.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===uo,r=t.length-1;let s=1;for(let o=1;o<r;++o){let a=!1;const c=t[o],l=t[o+1];if(c!==l&&(o!==1||c!==c[0]))if(i)a=!0;else{const d=o*n,h=d-n,u=d+n;for(let f=0;f!==n;++f){const p=e[d+f];if(p!==e[h+f]||p!==e[u+f]){a=!0;break}}}if(a){if(o!==s){t[s]=t[o];const d=o*n,h=s*n;for(let u=0;u!==n;++u)e[h+u]=e[d+u]}++s}}if(r>0){t[s]=t[r];for(let o=r*n,a=s*n,c=0;c!==n;++c)e[a+c]=e[o+c];++s}return s!==t.length?(this.times=ke.arraySlice(t,0,s),this.values=ke.arraySlice(e,0,s*n)):(this.times=t,this.values=e),this},clone:function(){const t=ke.arraySlice(this.times,0),e=ke.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}});function Eo(t,e,n){at.call(this,t,e,n)}Eo.prototype=Object.assign(Object.create(at.prototype),{constructor:Eo,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:Gr,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function Ao(t,e,n,i){at.call(this,t,e,n,i)}Ao.prototype=Object.assign(Object.create(at.prototype),{constructor:Ao,ValueTypeName:"color"});function tr(t,e,n,i){at.call(this,t,e,n,i)}tr.prototype=Object.assign(Object.create(at.prototype),{constructor:tr,ValueTypeName:"number"});function Lo(t,e,n,i){At.call(this,t,e,n,i)}Lo.prototype=Object.assign(Object.create(At.prototype),{constructor:Lo,interpolate_:function(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=(n-e)/(i-e);let c=t*o;for(let l=c+o;c!==l;c+=4)ht.slerpFlat(r,0,s,c-o,s,c,a);return r}});function rs(t,e,n,i){at.call(this,t,e,n,i)}rs.prototype=Object.assign(Object.create(at.prototype),{constructor:rs,ValueTypeName:"quaternion",DefaultInterpolation:Cr,InterpolantFactoryMethodLinear:function(t){return new Lo(this.times,this.values,this.getValueSize(),t)},InterpolantFactoryMethodSmooth:void 0});function Ro(t,e,n,i){at.call(this,t,e,n,i)}Ro.prototype=Object.assign(Object.create(at.prototype),{constructor:Ro,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:Gr,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function nr(t,e,n,i){at.call(this,t,e,n,i)}nr.prototype=Object.assign(Object.create(at.prototype),{constructor:nr,ValueTypeName:"vector"});function Ct(t,e,n,i){this.name=t,this.tracks=n,this.duration=e!==void 0?e:-1,this.blendMode=i!==void 0?i:Wo,this.uuid=xe.generateUUID(),this.duration<0&&this.resetDuration()}function Jv(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return tr;case"vector":case"vector2":case"vector3":case"vector4":return nr;case"color":return Ao;case"quaternion":return rs;case"bool":case"boolean":return Eo;case"string":return Ro}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}function $v(t){if(t.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Jv(t.type);if(t.times===void 0){const n=[],i=[];ke.flattenJSON(t.keys,n,i,"value"),t.times=n,t.values=i}return e.parse!==void 0?e.parse(t):new e(t.name,t.times,t.values,t.interpolation)}Object.assign(Ct,{parse:function(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let r=0,s=n.length;r!==s;++r)e.push($v(n[r]).scale(i));return new Ct(t.name,t.duration,e,t.blendMode)},toJSON:function(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,s=n.length;r!==s;++r)e.push(at.toJSON(n[r]));return i},CreateFromMorphTargetSequence:function(t,e,n,i){const r=e.length,s=[];for(let o=0;o<r;o++){let a=[],c=[];a.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const l=ke.getKeyframeOrder(a);a=ke.sortedArray(a,1,l),c=ke.sortedArray(c,1,l),!i&&a[0]===0&&(a.push(r),c.push(c[0])),s.push(new tr(".morphTargetInfluences["+e[o].name+"]",a,c).scale(1/n))}return new Ct(t,-1,s)},findByName:function(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null},CreateClipsFromMorphTargetSequences:function(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,a=t.length;o<a;o++){const c=t[o],l=c.name.match(r);if(l&&l.length>1){const d=l[1];let h=i[d];h||(i[d]=h=[]),h.push(c)}}const s=[];for(const o in i)s.push(Ct.CreateFromMorphTargetSequence(o,i[o],e,n));return s},parseAnimation:function(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,h,u,f,p){if(u.length!==0){const y=[],v=[];ke.flattenJSON(u,y,v,f),y.length!==0&&p.push(new d(h,y,v))}},i=[],r=t.name||"default",s=t.fps||30,o=t.blendMode;let a=t.length||-1;const c=t.hierarchy||[];for(let d=0;d<c.length;d++){const h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const u={};let f;for(f=0;f<h.length;f++)if(h[f].morphTargets)for(let p=0;p<h[f].morphTargets.length;p++)u[h[f].morphTargets[p]]=-1;for(const p in u){const y=[],v=[];for(let g=0;g!==h[f].morphTargets.length;++g){const m=h[f];y.push(m.time),v.push(m.morphTarget===p?1:0)}i.push(new tr(".morphTargetInfluence["+p+"]",y,v))}a=u.length*(s||1)}else{const u=".bones["+e[d].name+"]";n(nr,u+".position",h,"pos",i),n(rs,u+".quaternion",h,"rot",i),n(nr,u+".scale",h,"scl",i)}}return i.length===0?null:new Ct(r,a,i,o)}});Object.assign(Ct.prototype,{resetDuration:function(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this},trim:function(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this},validate:function(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t},optimize:function(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this},clone:function(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new Ct(this.name,this.duration,t,this.blendMode)}});const gi={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function Qc(t,e,n){const i=this;let r=!1,s=0,o=0,a;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(l){o++,r===!1&&i.onStart!==void 0&&i.onStart(l,s,o),r=!0},this.itemEnd=function(l){s++,i.onProgress!==void 0&&i.onProgress(l,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return a?a(l):l},this.setURLModifier=function(l){return a=l,this},this.addHandler=function(l,d){return c.push(l,d),this},this.removeHandler=function(l){const d=c.indexOf(l);return d!==-1&&c.splice(d,2),this},this.getHandler=function(l){for(let d=0,h=c.length;d<h;d+=2){const u=c[d],f=c[d+1];if(u.global&&(u.lastIndex=0),u.test(l))return f}return null}}const kf=new Qc;function Be(t){this.manager=t!==void 0?t:kf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}Object.assign(Be.prototype,{load:function(){},loadAsync:function(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})},parse:function(){},setCrossOrigin:function(t){return this.crossOrigin=t,this},setWithCredentials:function(t){return this.withCredentials=t,this},setPath:function(t){return this.path=t,this},setResourcePath:function(t){return this.resourcePath=t,this},setRequestHeader:function(t){return this.requestHeader=t,this}});const Ut={};function Bt(t){Be.call(this,t)}Bt.prototype=Object.assign(Object.create(Be.prototype),{constructor:Bt,load:function(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=gi.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;if(Ut[t]!==void 0){Ut[t].push({onLoad:e,onProgress:n,onError:i});return}const o=/^data:(.*?)(;base64)?,(.*)$/,a=t.match(o);let c;if(a){const l=a[1],d=!!a[2];let h=a[3];h=decodeURIComponent(h),d&&(h=atob(h));try{let u;const f=(this.responseType||"").toLowerCase();switch(f){case"arraybuffer":case"blob":const p=new Uint8Array(h.length);for(let v=0;v<h.length;v++)p[v]=h.charCodeAt(v);f==="blob"?u=new Blob([p.buffer],{type:l}):u=p.buffer;break;case"document":u=new DOMParser().parseFromString(h,l);break;case"json":u=JSON.parse(h);break;default:u=h;break}setTimeout(function(){e&&e(u),r.manager.itemEnd(t)},0)}catch(u){setTimeout(function(){i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)},0)}}else{Ut[t]=[],Ut[t].push({onLoad:e,onProgress:n,onError:i}),c=new XMLHttpRequest,c.open("GET",t,!0),c.addEventListener("load",function(l){const d=this.response,h=Ut[t];if(delete Ut[t],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),gi.add(t,d);for(let u=0,f=h.length;u<f;u++){const p=h[u];p.onLoad&&p.onLoad(d)}r.manager.itemEnd(t)}else{for(let u=0,f=h.length;u<f;u++){const p=h[u];p.onError&&p.onError(l)}r.manager.itemError(t),r.manager.itemEnd(t)}},!1),c.addEventListener("progress",function(l){const d=Ut[t];for(let h=0,u=d.length;h<u;h++){const f=d[h];f.onProgress&&f.onProgress(l)}},!1),c.addEventListener("error",function(l){const d=Ut[t];delete Ut[t];for(let h=0,u=d.length;h<u;h++){const f=d[h];f.onError&&f.onError(l)}r.manager.itemError(t),r.manager.itemEnd(t)},!1),c.addEventListener("abort",function(l){const d=Ut[t];delete Ut[t];for(let h=0,u=d.length;h<u;h++){const f=d[h];f.onError&&f.onError(l)}r.manager.itemError(t),r.manager.itemEnd(t)},!1),this.responseType!==void 0&&(c.responseType=this.responseType),this.withCredentials!==void 0&&(c.withCredentials=this.withCredentials),c.overrideMimeType&&c.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const l in this.requestHeader)c.setRequestHeader(l,this.requestHeader[l]);c.send(null)}return r.manager.itemStart(t),c},setResponseType:function(t){return this.responseType=t,this},setMimeType:function(t){return this.mimeType=t,this}});function fc(t){Be.call(this,t)}fc.prototype=Object.assign(Object.create(Be.prototype),{constructor:fc,load:function(t,e,n,i){const r=this,s=new Bt(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)},parse:function(t){const e=[];for(let n=0;n<t.length;n++){const i=Ct.parse(t[n]);e.push(i)}return e}});function dc(t){Be.call(this,t)}dc.prototype=Object.assign(Object.create(Be.prototype),{constructor:dc,load:function(t,e,n,i){const r=this,s=[],o=new Ki;o.image=s;const a=new Bt(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(r.withCredentials);let c=0;function l(d){a.load(t[d],function(h){const u=r.parse(h,!0);s[d]={width:u.width,height:u.height,format:u.format,mipmaps:u.mipmaps},c+=1,c===6&&(u.mipmapCount===1&&(o.minFilter=rt),o.format=u.format,o.needsUpdate=!0,e&&e(o))},n,i)}if(Array.isArray(t))for(let d=0,h=t.length;d<h;++d)l(d);else a.load(t,function(d){const h=r.parse(d,!0);if(h.isCubemap){const u=h.mipmaps.length/h.mipmapCount;for(let f=0;f<u;f++){s[f]={mipmaps:[]};for(let p=0;p<h.mipmapCount;p++)s[f].mipmaps.push(h.mipmaps[f*h.mipmapCount+p]),s[f].format=h.format,s[f].width=h.width,s[f].height=h.height}}else o.image.width=h.width,o.image.height=h.height,o.mipmaps=h.mipmaps;h.mipmapCount===1&&(o.minFilter=rt),o.format=h.format,o.needsUpdate=!0,e&&e(o)},n,i);return o}});function ir(t){Be.call(this,t)}ir.prototype=Object.assign(Object.create(Be.prototype),{constructor:ir,load:function(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=gi.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;const o=document.createElementNS("http://www.w3.org/1999/xhtml","img");function a(){o.removeEventListener("load",a,!1),o.removeEventListener("error",c,!1),gi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(l){o.removeEventListener("load",a,!1),o.removeEventListener("error",c,!1),i&&i(l),r.manager.itemError(t),r.manager.itemEnd(t)}return o.addEventListener("load",a,!1),o.addEventListener("error",c,!1),t.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}});function Co(t){Be.call(this,t)}Co.prototype=Object.assign(Object.create(Be.prototype),{constructor:Co,load:function(t,e,n,i){const r=new en,s=new ir(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let o=0;function a(c){s.load(t[c],function(l){r.images[c]=l,o++,o===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let c=0;c<t.length;++c)a(c);return r}});function Po(t){Be.call(this,t)}Po.prototype=Object.assign(Object.create(Be.prototype),{constructor:Po,load:function(t,e,n,i){const r=this,s=new li,o=new Bt(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(t,function(a){const c=r.parse(a);c&&(c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:pt,s.wrapT=c.wrapT!==void 0?c.wrapT:pt,s.magFilter=c.magFilter!==void 0?c.magFilter:rt,s.minFilter=c.minFilter!==void 0?c.minFilter:rt,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=cr),c.mipmapCount===1&&(s.minFilter=rt),s.needsUpdate=!0,e&&e(s,c))},n,i),s}});function Io(t){Be.call(this,t)}Io.prototype=Object.assign(Object.create(Be.prototype),{constructor:Io,load:function(t,e,n,i){const r=new ze,s=new ir(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(o){r.image=o;const a=t.search(/\.jpe?g($|\?)/i)>0||t.search(/^data\:image\/jpeg/)===0;r.format=a?In:Tt,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}});function ue(){this.type="Curve",this.arcLengthDivisions=200}Object.assign(ue.prototype,{getPoint:function(){return console.warn("THREE.Curve: .getPoint() not implemented."),null},getPointAt:function(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)},getPoints:function(t){t===void 0&&(t=5);const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e},getSpacedPoints:function(t){t===void 0&&(t=5);const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e},getLength:function(){const t=this.getLengths();return t[t.length-1]},getLengths:function(t){if(t===void 0&&(t=this.arcLengthDivisions),this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let s=1;s<=t;s++)n=this.getPoint(s/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},getUtoTmapping:function(t,e){const n=this.getLengths();let i=0;const r=n.length;let s;e?s=e:s=t*n[r-1];let o=0,a=r-1,c;for(;o<=a;)if(i=Math.floor(o+(a-o)/2),c=n[i]-s,c<0)o=i+1;else if(c>0)a=i-1;else{a=i;break}if(i=a,n[i]===s)return i/(r-1);const l=n[i],h=n[i+1]-l,u=(s-l)/h;return(i+u)/(r-1)},getTangent:function(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const s=this.getPoint(i),o=this.getPoint(r),a=e||(s.isVector2?new H:new w);return a.copy(o).sub(s).normalize(),a},getTangentAt:function(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)},computeFrenetFrames:function(t,e){const n=new w,i=[],r=[],s=[],o=new w,a=new Ee;for(let u=0;u<=t;u++){const f=u/t;i[u]=this.getTangentAt(f,new w),i[u].normalize()}r[0]=new w,s[0]=new w;let c=Number.MAX_VALUE;const l=Math.abs(i[0].x),d=Math.abs(i[0].y),h=Math.abs(i[0].z);l<=c&&(c=l,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),s[0].crossVectors(i[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),s[u]=s[u-1].clone(),o.crossVectors(i[u-1],i[u]),o.length()>Number.EPSILON){o.normalize();const f=Math.acos(xe.clamp(i[u-1].dot(i[u]),-1,1));r[u].applyMatrix4(a.makeRotationAxis(o,f))}s[u].crossVectors(i[u],r[u])}if(e===!0){let u=Math.acos(xe.clamp(r[0].dot(r[t]),-1,1));u/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(u=-u);for(let f=1;f<=t;f++)r[f].applyMatrix4(a.makeRotationAxis(i[f],u*f)),s[f].crossVectors(i[f],r[f])}return{tangents:i,normals:r,binormals:s}},clone:function(){return new this.constructor().copy(this)},copy:function(t){return this.arcLengthDivisions=t.arcLengthDivisions,this},toJSON:function(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t},fromJSON:function(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}});function Rt(t,e,n,i,r,s,o,a){ue.call(this),this.type="EllipseCurve",this.aX=t||0,this.aY=e||0,this.xRadius=n||1,this.yRadius=i||1,this.aStartAngle=r||0,this.aEndAngle=s||2*Math.PI,this.aClockwise=o||!1,this.aRotation=a||0}Rt.prototype=Object.create(ue.prototype);Rt.prototype.constructor=Rt;Rt.prototype.isEllipseCurve=!0;Rt.prototype.getPoint=function(t,e){const n=e||new H,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(s?r=0:r=i),this.aClockwise===!0&&!s&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let a=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const l=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=a-this.aX,u=c-this.aY;a=h*l-u*d+this.aX,c=h*d+u*l+this.aY}return n.set(a,c)};Rt.prototype.copy=function(t){return ue.prototype.copy.call(this,t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this};Rt.prototype.toJSON=function(){const t=ue.prototype.toJSON.call(this);return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t};Rt.prototype.fromJSON=function(t){return ue.prototype.fromJSON.call(this,t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this};function rr(t,e,n,i,r,s){Rt.call(this,t,e,n,n,i,r,s),this.type="ArcCurve"}rr.prototype=Object.create(Rt.prototype);rr.prototype.constructor=rr;rr.prototype.isArcCurve=!0;function Kc(){let t=0,e=0,n=0,i=0;function r(s,o,a,c){t=s,e=a,n=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,d,h){let u=(o-s)/l-(a-s)/(l+d)+(a-o)/d,f=(a-o)/d-(c-o)/(d+h)+(c-a)/h;u*=d,f*=d,r(o,a,u,f)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Qs=new w,Aa=new Kc,La=new Kc,Ra=new Kc;function ft(t,e,n,i){ue.call(this),this.type="CatmullRomCurve3",this.points=t||[],this.closed=e||!1,this.curveType=n||"centripetal",this.tension=i!==void 0?i:.5}ft.prototype=Object.create(ue.prototype);ft.prototype.constructor=ft;ft.prototype.isCatmullRomCurve3=!0;ft.prototype.getPoint=function(t,e){const n=e||new w,i=this.points,r=i.length,s=(r-(this.closed?0:1))*t;let o=Math.floor(s),a=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:a===0&&o===r-1&&(o=r-2,a=1);let c,l;this.closed||o>0?c=i[(o-1)%r]:(Qs.subVectors(i[0],i[1]).add(i[0]),c=Qs);const d=i[o%r],h=i[(o+1)%r];if(this.closed||o+2<r?l=i[(o+2)%r]:(Qs.subVectors(i[r-1],i[r-2]).add(i[r-1]),l=Qs),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let f=Math.pow(c.distanceToSquared(d),u),p=Math.pow(d.distanceToSquared(h),u),y=Math.pow(h.distanceToSquared(l),u);p<1e-4&&(p=1),f<1e-4&&(f=p),y<1e-4&&(y=p),Aa.initNonuniformCatmullRom(c.x,d.x,h.x,l.x,f,p,y),La.initNonuniformCatmullRom(c.y,d.y,h.y,l.y,f,p,y),Ra.initNonuniformCatmullRom(c.z,d.z,h.z,l.z,f,p,y)}else this.curveType==="catmullrom"&&(Aa.initCatmullRom(c.x,d.x,h.x,l.x,this.tension),La.initCatmullRom(c.y,d.y,h.y,l.y,this.tension),Ra.initCatmullRom(c.z,d.z,h.z,l.z,this.tension));return n.set(Aa.calc(a),La.calc(a),Ra.calc(a)),n};ft.prototype.copy=function(t){ue.prototype.copy.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this};ft.prototype.toJSON=function(){const t=ue.prototype.toJSON.call(this);t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t};ft.prototype.fromJSON=function(t){ue.prototype.fromJSON.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new w().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this};function nh(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,c=t*a;return(2*n-2*i+s+o)*c+(-3*n+3*i-2*s-o)*a+s*t+n}function Qv(t,e){const n=1-t;return n*n*e}function Kv(t,e){return 2*(1-t)*t*e}function ex(t,e){return t*t*e}function Dr(t,e,n,i){return Qv(t,e)+Kv(t,n)+ex(t,i)}function tx(t,e){const n=1-t;return n*n*n*e}function nx(t,e){const n=1-t;return 3*n*n*t*e}function ix(t,e){return 3*(1-t)*t*t*e}function rx(t,e){return t*t*t*e}function Nr(t,e,n,i,r){return tx(t,e)+nx(t,n)+ix(t,i)+rx(t,r)}function Wt(t,e,n,i){ue.call(this),this.type="CubicBezierCurve",this.v0=t||new H,this.v1=e||new H,this.v2=n||new H,this.v3=i||new H}Wt.prototype=Object.create(ue.prototype);Wt.prototype.constructor=Wt;Wt.prototype.isCubicBezierCurve=!0;Wt.prototype.getPoint=function(t,e){const n=e||new H,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(Nr(t,i.x,r.x,s.x,o.x),Nr(t,i.y,r.y,s.y,o.y)),n};Wt.prototype.copy=function(t){return ue.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this};Wt.prototype.toJSON=function(){const t=ue.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t};Wt.prototype.fromJSON=function(t){return ue.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this};function nn(t,e,n,i){ue.call(this),this.type="CubicBezierCurve3",this.v0=t||new w,this.v1=e||new w,this.v2=n||new w,this.v3=i||new w}nn.prototype=Object.create(ue.prototype);nn.prototype.constructor=nn;nn.prototype.isCubicBezierCurve3=!0;nn.prototype.getPoint=function(t,e){const n=e||new w,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(Nr(t,i.x,r.x,s.x,o.x),Nr(t,i.y,r.y,s.y,o.y),Nr(t,i.z,r.z,s.z,o.z)),n};nn.prototype.copy=function(t){return ue.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this};nn.prototype.toJSON=function(){const t=ue.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t};nn.prototype.fromJSON=function(t){return ue.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this};function bt(t,e){ue.call(this),this.type="LineCurve",this.v1=t||new H,this.v2=e||new H}bt.prototype=Object.create(ue.prototype);bt.prototype.constructor=bt;bt.prototype.isLineCurve=!0;bt.prototype.getPoint=function(t,e){const n=e||new H;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n};bt.prototype.getPointAt=function(t,e){return this.getPoint(t,e)};bt.prototype.getTangent=function(t,e){const n=e||new H;return n.copy(this.v2).sub(this.v1).normalize(),n};bt.prototype.copy=function(t){return ue.prototype.copy.call(this,t),this.v1.copy(t.v1),this.v2.copy(t.v2),this};bt.prototype.toJSON=function(){const t=ue.prototype.toJSON.call(this);return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t};bt.prototype.fromJSON=function(t){return ue.prototype.fromJSON.call(this,t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function jt(t,e){ue.call(this),this.type="LineCurve3",this.v1=t||new w,this.v2=e||new w}jt.prototype=Object.create(ue.prototype);jt.prototype.constructor=jt;jt.prototype.isLineCurve3=!0;jt.prototype.getPoint=function(t,e){const n=e||new w;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n};jt.prototype.getPointAt=function(t,e){return this.getPoint(t,e)};jt.prototype.copy=function(t){return ue.prototype.copy.call(this,t),this.v1.copy(t.v1),this.v2.copy(t.v2),this};jt.prototype.toJSON=function(){const t=ue.prototype.toJSON.call(this);return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t};jt.prototype.fromJSON=function(t){return ue.prototype.fromJSON.call(this,t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function qt(t,e,n){ue.call(this),this.type="QuadraticBezierCurve",this.v0=t||new H,this.v1=e||new H,this.v2=n||new H}qt.prototype=Object.create(ue.prototype);qt.prototype.constructor=qt;qt.prototype.isQuadraticBezierCurve=!0;qt.prototype.getPoint=function(t,e){const n=e||new H,i=this.v0,r=this.v1,s=this.v2;return n.set(Dr(t,i.x,r.x,s.x),Dr(t,i.y,r.y,s.y)),n};qt.prototype.copy=function(t){return ue.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this};qt.prototype.toJSON=function(){const t=ue.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t};qt.prototype.fromJSON=function(t){return ue.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function rn(t,e,n){ue.call(this),this.type="QuadraticBezierCurve3",this.v0=t||new w,this.v1=e||new w,this.v2=n||new w}rn.prototype=Object.create(ue.prototype);rn.prototype.constructor=rn;rn.prototype.isQuadraticBezierCurve3=!0;rn.prototype.getPoint=function(t,e){const n=e||new w,i=this.v0,r=this.v1,s=this.v2;return n.set(Dr(t,i.x,r.x,s.x),Dr(t,i.y,r.y,s.y),Dr(t,i.z,r.z,s.z)),n};rn.prototype.copy=function(t){return ue.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this};rn.prototype.toJSON=function(){const t=ue.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t};rn.prototype.fromJSON=function(t){return ue.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this};function Xt(t){ue.call(this),this.type="SplineCurve",this.points=t||[]}Xt.prototype=Object.create(ue.prototype);Xt.prototype.constructor=Xt;Xt.prototype.isSplineCurve=!0;Xt.prototype.getPoint=function(t,e){const n=e||new H,i=this.points,r=(i.length-1)*t,s=Math.floor(r),o=r-s,a=i[s===0?s:s-1],c=i[s],l=i[s>i.length-2?i.length-1:s+1],d=i[s>i.length-3?i.length-1:s+2];return n.set(nh(o,a.x,c.x,l.x,d.x),nh(o,a.y,c.y,l.y,d.y)),n};Xt.prototype.copy=function(t){ue.prototype.copy.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this};Xt.prototype.toJSON=function(){const t=ue.prototype.toJSON.call(this);t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t};Xt.prototype.fromJSON=function(t){ue.prototype.fromJSON.call(this,t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new H().fromArray(i))}return this};var pc=Object.freeze({__proto__:null,ArcCurve:rr,CatmullRomCurve3:ft,CubicBezierCurve:Wt,CubicBezierCurve3:nn,EllipseCurve:Rt,LineCurve:bt,LineCurve3:jt,QuadraticBezierCurve:qt,QuadraticBezierCurve3:rn,SplineCurve:Xt});function mn(){ue.call(this),this.type="CurvePath",this.curves=[],this.autoClose=!1}mn.prototype=Object.assign(Object.create(ue.prototype),{constructor:mn,add:function(t){this.curves.push(t)},closePath:function(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new bt(e,t))},getPoint:function(t){const e=t*this.getLength(),n=this.getCurveLengths();let i=0;for(;i<n.length;){if(n[i]>=e){const r=n[i]-e,s=this.curves[i],o=s.getLength(),a=o===0?0:1-r/o;return s.getPointAt(a)}i++}return null},getLength:function(){const t=this.getCurveLengths();return t[t.length-1]},updateArcLengths:function(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t},getSpacedPoints:function(t){t===void 0&&(t=40);const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e},getPoints:function(t){t=t||12;const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const s=r[i],o=s&&s.isEllipseCurve?t*2:s&&(s.isLineCurve||s.isLineCurve3)?1:s&&s.isSplineCurve?t*s.points.length:t,a=s.getPoints(o);for(let c=0;c<a.length;c++){const l=a[c];n&&n.equals(l)||(e.push(l),n=l)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e},copy:function(t){ue.prototype.copy.call(this,t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this},toJSON:function(){const t=ue.prototype.toJSON.call(this);t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t},fromJSON:function(t){ue.prototype.fromJSON.call(this,t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new pc[i.type]().fromJSON(i))}return this}});function Vt(t){mn.call(this),this.type="Path",this.currentPoint=new H,t&&this.setFromPoints(t)}Vt.prototype=Object.assign(Object.create(mn.prototype),{constructor:Vt,setFromPoints:function(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this},moveTo:function(t,e){return this.currentPoint.set(t,e),this},lineTo:function(t,e){const n=new bt(this.currentPoint.clone(),new H(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this},quadraticCurveTo:function(t,e,n,i){const r=new qt(this.currentPoint.clone(),new H(t,e),new H(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this},bezierCurveTo:function(t,e,n,i,r,s){const o=new Wt(this.currentPoint.clone(),new H(t,e),new H(n,i),new H(r,s));return this.curves.push(o),this.currentPoint.set(r,s),this},splineThru:function(t){const e=[this.currentPoint.clone()].concat(t),n=new Xt(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this},arc:function(t,e,n,i,r,s){const o=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(t+o,e+a,n,i,r,s),this},absarc:function(t,e,n,i,r,s){return this.absellipse(t,e,n,n,i,r,s),this},ellipse:function(t,e,n,i,r,s,o,a){const c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(t+c,e+l,n,i,r,s,o,a),this},absellipse:function(t,e,n,i,r,s,o,a){const c=new Rt(t,e,n,i,r,s,o,a);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const l=c.getPoint(1);return this.currentPoint.copy(l),this},copy:function(t){return mn.prototype.copy.call(this,t),this.currentPoint.copy(t.currentPoint),this},toJSON:function(){const t=mn.prototype.toJSON.call(this);return t.currentPoint=this.currentPoint.toArray(),t},fromJSON:function(t){return mn.prototype.fromJSON.call(this,t),this.currentPoint.fromArray(t.currentPoint),this}});function Nn(t){Vt.call(this,t),this.uuid=xe.generateUUID(),this.type="Shape",this.holes=[]}Nn.prototype=Object.assign(Object.create(Vt.prototype),{constructor:Nn,getPointsHoles:function(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e},extractPoints:function(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}},copy:function(t){Vt.prototype.copy.call(this,t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this},toJSON:function(){const t=Vt.prototype.toJSON.call(this);t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t},fromJSON:function(t){Vt.prototype.fromJSON.call(this,t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Vt().fromJSON(i))}return this}});function Ve(t,e){ae.call(this),this.type="Light",this.color=new re(t),this.intensity=e!==void 0?e:1}Ve.prototype=Object.assign(Object.create(ae.prototype),{constructor:Ve,isLight:!0,copy:function(t){return ae.prototype.copy.call(this,t),this.color.copy(t.color),this.intensity=t.intensity,this},toJSON:function(t){const e=ae.prototype.toJSON.call(this,t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}});function Do(t,e,n){Ve.call(this,t,n),this.type="HemisphereLight",this.position.copy(ae.DefaultUp),this.updateMatrix(),this.groundColor=new re(e)}Do.prototype=Object.assign(Object.create(Ve.prototype),{constructor:Do,isHemisphereLight:!0,copy:function(t){return Ve.prototype.copy.call(this,t),this.groundColor.copy(t.groundColor),this}});function _n(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new H(512,512),this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ms,this._frameExtents=new H(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}Object.assign(_n.prototype,{_projScreenMatrix:new Ee,_lightPositionWorld:new w,_lookTarget:new w,getViewportCount:function(){return this._viewportCount},getFrustum:function(){return this._frustum},updateMatrices:function(t){const e=this.camera,n=this.matrix,i=this._projScreenMatrix,r=this._lookTarget,s=this._lightPositionWorld;s.setFromMatrixPosition(t.matrixWorld),e.position.copy(s),r.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(r),e.updateMatrixWorld(),i.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(i),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(e.projectionMatrix),n.multiply(e.matrixWorldInverse)},getViewport:function(t){return this._viewports[t]},getFrameExtents:function(){return this._frameExtents},copy:function(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}});function mc(){_n.call(this,new Ke(50,1,.5,500)),this.focus=1}mc.prototype=Object.assign(Object.create(_n.prototype),{constructor:mc,isSpotLightShadow:!0,updateMatrices:function(t){const e=this.camera,n=xe.RAD2DEG*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),_n.prototype.updateMatrices.call(this,t)}});function No(t,e,n,i,r,s){Ve.call(this,t,e),this.type="SpotLight",this.position.copy(ae.DefaultUp),this.updateMatrix(),this.target=new ae,Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(o){this.intensity=o/Math.PI}}),this.distance=n!==void 0?n:0,this.angle=i!==void 0?i:Math.PI/3,this.penumbra=r!==void 0?r:0,this.decay=s!==void 0?s:1,this.shadow=new mc}No.prototype=Object.assign(Object.create(Ve.prototype),{constructor:No,isSpotLight:!0,copy:function(t){return Ve.prototype.copy.call(this,t),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}});function gc(){_n.call(this,new Ke(90,1,.5,500)),this._frameExtents=new H(4,2),this._viewportCount=6,this._viewports=[new Oe(2,1,1,1),new Oe(0,1,1,1),new Oe(3,1,1,1),new Oe(1,1,1,1),new Oe(3,0,1,1),new Oe(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}gc.prototype=Object.assign(Object.create(_n.prototype),{constructor:gc,isPointLightShadow:!0,updateMatrices:function(t,e){e===void 0&&(e=0);const n=this.camera,i=this.matrix,r=this._lightPositionWorld,s=this._lookTarget,o=this._projScreenMatrix;r.setFromMatrixPosition(t.matrixWorld),n.position.copy(r),s.copy(n.position),s.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(s),n.updateMatrixWorld(),i.makeTranslation(-r.x,-r.y,-r.z),o.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(o)}});function Bo(t,e,n,i){Ve.call(this,t,e),this.type="PointLight",Object.defineProperty(this,"power",{get:function(){return this.intensity*4*Math.PI},set:function(r){this.intensity=r/(4*Math.PI)}}),this.distance=n!==void 0?n:0,this.decay=i!==void 0?i:1,this.shadow=new gc}Bo.prototype=Object.assign(Object.create(Ve.prototype),{constructor:Bo,isPointLight:!0,copy:function(t){return Ve.prototype.copy.call(this,t),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}});function sr(t,e,n,i,r,s){Kt.call(this),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t!==void 0?t:-1,this.right=e!==void 0?e:1,this.top=n!==void 0?n:1,this.bottom=i!==void 0?i:-1,this.near=r!==void 0?r:.1,this.far=s!==void 0?s:2e3,this.updateProjectionMatrix()}sr.prototype=Object.assign(Object.create(Kt.prototype),{constructor:sr,isOrthographicCamera:!0,copy:function(t,e){return Kt.prototype.copy.call(this,t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this},setViewOffset:function(t,e,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,s=n+t,o=i+e,a=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=l*this.view.offsetY,a=o-l*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,a,this.near,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(t){const e=ae.prototype.toJSON.call(this,t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}});function yc(){_n.call(this,new sr(-5,5,5,-5,.5,500))}yc.prototype=Object.assign(Object.create(_n.prototype),{constructor:yc,isDirectionalLightShadow:!0,updateMatrices:function(t){_n.prototype.updateMatrices.call(this,t)}});function Oo(t,e){Ve.call(this,t,e),this.type="DirectionalLight",this.position.copy(ae.DefaultUp),this.updateMatrix(),this.target=new ae,this.shadow=new yc}Oo.prototype=Object.assign(Object.create(Ve.prototype),{constructor:Oo,isDirectionalLight:!0,copy:function(t){return Ve.prototype.copy.call(this,t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}});function Fo(t,e){Ve.call(this,t,e),this.type="AmbientLight"}Fo.prototype=Object.assign(Object.create(Ve.prototype),{constructor:Fo,isAmbientLight:!0});function zo(t,e,n,i){Ve.call(this,t,e),this.type="RectAreaLight",this.width=n!==void 0?n:10,this.height=i!==void 0?i:10}zo.prototype=Object.assign(Object.create(Ve.prototype),{constructor:zo,isRectAreaLight:!0,copy:function(t){return Ve.prototype.copy.call(this,t),this.width=t.width,this.height=t.height,this},toJSON:function(t){const e=Ve.prototype.toJSON.call(this,t);return e.object.width=this.width,e.object.height=this.height,e}});class Wf{constructor(){Object.defineProperty(this,"isSphericalHarmonics3",{value:!0}),this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new w)}set(e){for(let n=0;n<9;n++)this.coefficients[n].copy(e[n]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,n){const i=e.x,r=e.y,s=e.z,o=this.coefficients;return n.copy(o[0]).multiplyScalar(.282095),n.addScaledVector(o[1],.488603*r),n.addScaledVector(o[2],.488603*s),n.addScaledVector(o[3],.488603*i),n.addScaledVector(o[4],1.092548*(i*r)),n.addScaledVector(o[5],1.092548*(r*s)),n.addScaledVector(o[6],.315392*(3*s*s-1)),n.addScaledVector(o[7],1.092548*(i*s)),n.addScaledVector(o[8],.546274*(i*i-r*r)),n}getIrradianceAt(e,n){const i=e.x,r=e.y,s=e.z,o=this.coefficients;return n.copy(o[0]).multiplyScalar(.886227),n.addScaledVector(o[1],2*.511664*r),n.addScaledVector(o[2],2*.511664*s),n.addScaledVector(o[3],2*.511664*i),n.addScaledVector(o[4],2*.429043*i*r),n.addScaledVector(o[5],2*.429043*r*s),n.addScaledVector(o[6],.743125*s*s-.247708),n.addScaledVector(o[7],2*.429043*i*s),n.addScaledVector(o[8],.429043*(i*i-r*r)),n}add(e){for(let n=0;n<9;n++)this.coefficients[n].add(e.coefficients[n]);return this}addScaledSH(e,n){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],n);return this}scale(e){for(let n=0;n<9;n++)this.coefficients[n].multiplyScalar(e);return this}lerp(e,n){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],n);return this}equals(e){for(let n=0;n<9;n++)if(!this.coefficients[n].equals(e.coefficients[n]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,n){n===void 0&&(n=0);const i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(e,n+r*3);return this}toArray(e,n){e===void 0&&(e=[]),n===void 0&&(n=0);const i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(e,n+r*3);return e}static getBasisAt(e,n){const i=e.x,r=e.y,s=e.z;n[0]=.282095,n[1]=.488603*r,n[2]=.488603*s,n[3]=.488603*i,n[4]=1.092548*i*r,n[5]=1.092548*r*s,n[6]=.315392*(3*s*s-1),n[7]=1.092548*i*s,n[8]=.546274*(i*i-r*r)}}function Pt(t,e){Ve.call(this,void 0,e),this.type="LightProbe",this.sh=t!==void 0?t:new Wf}Pt.prototype=Object.assign(Object.create(Ve.prototype),{constructor:Pt,isLightProbe:!0,copy:function(t){return Ve.prototype.copy.call(this,t),this.sh.copy(t.sh),this},fromJSON:function(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this},toJSON:function(t){const e=Ve.prototype.toJSON.call(this,t);return e.object.sh=this.sh.toArray(),e}});function Uo(t){Be.call(this,t),this.textures={}}Uo.prototype=Object.assign(Object.create(Be.prototype),{constructor:Uo,load:function(t,e,n,i){const r=this,s=new Bt(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)},parse:function(t){const e=this.textures;function n(r){return e[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),e[r]}const i=new Zv[t.type];if(t.uuid!==void 0&&(i.uuid=t.uuid),t.name!==void 0&&(i.name=t.name),t.color!==void 0&&i.color.setHex(t.color),t.roughness!==void 0&&(i.roughness=t.roughness),t.metalness!==void 0&&(i.metalness=t.metalness),t.sheen!==void 0&&(i.sheen=new re().setHex(t.sheen)),t.emissive!==void 0&&i.emissive.setHex(t.emissive),t.specular!==void 0&&i.specular.setHex(t.specular),t.shininess!==void 0&&(i.shininess=t.shininess),t.clearcoat!==void 0&&(i.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=t.clearcoatRoughness),t.fog!==void 0&&(i.fog=t.fog),t.flatShading!==void 0&&(i.flatShading=t.flatShading),t.blending!==void 0&&(i.blending=t.blending),t.combine!==void 0&&(i.combine=t.combine),t.side!==void 0&&(i.side=t.side),t.opacity!==void 0&&(i.opacity=t.opacity),t.transparent!==void 0&&(i.transparent=t.transparent),t.alphaTest!==void 0&&(i.alphaTest=t.alphaTest),t.depthTest!==void 0&&(i.depthTest=t.depthTest),t.depthWrite!==void 0&&(i.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(i.colorWrite=t.colorWrite),t.stencilWrite!==void 0&&(i.stencilWrite=t.stencilWrite),t.stencilWriteMask!==void 0&&(i.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(i.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(i.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(i.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(i.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(i.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(i.stencilZPass=t.stencilZPass),t.wireframe!==void 0&&(i.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(i.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(i.rotation=t.rotation),t.linewidth!==1&&(i.linewidth=t.linewidth),t.dashSize!==void 0&&(i.dashSize=t.dashSize),t.gapSize!==void 0&&(i.gapSize=t.gapSize),t.scale!==void 0&&(i.scale=t.scale),t.polygonOffset!==void 0&&(i.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=t.polygonOffsetUnits),t.skinning!==void 0&&(i.skinning=t.skinning),t.morphTargets!==void 0&&(i.morphTargets=t.morphTargets),t.morphNormals!==void 0&&(i.morphNormals=t.morphNormals),t.dithering!==void 0&&(i.dithering=t.dithering),t.vertexTangents!==void 0&&(i.vertexTangents=t.vertexTangents),t.visible!==void 0&&(i.visible=t.visible),t.toneMapped!==void 0&&(i.toneMapped=t.toneMapped),t.userData!==void 0&&(i.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?i.vertexColors=t.vertexColors>0:i.vertexColors=t.vertexColors),t.uniforms!==void 0)for(const r in t.uniforms){const s=t.uniforms[r];switch(i.uniforms[r]={},s.type){case"t":i.uniforms[r].value=n(s.value);break;case"c":i.uniforms[r].value=new re().setHex(s.value);break;case"v2":i.uniforms[r].value=new H().fromArray(s.value);break;case"v3":i.uniforms[r].value=new w().fromArray(s.value);break;case"v4":i.uniforms[r].value=new Oe().fromArray(s.value);break;case"m3":i.uniforms[r].value=new mt().fromArray(s.value);break;case"m4":i.uniforms[r].value=new Ee().fromArray(s.value);break;default:i.uniforms[r].value=s.value}}if(t.defines!==void 0&&(i.defines=t.defines),t.vertexShader!==void 0&&(i.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(i.fragmentShader=t.fragmentShader),t.extensions!==void 0)for(const r in t.extensions)i.extensions[r]=t.extensions[r];if(t.shading!==void 0&&(i.flatShading=t.shading===1),t.size!==void 0&&(i.size=t.size),t.sizeAttenuation!==void 0&&(i.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(i.map=n(t.map)),t.matcap!==void 0&&(i.matcap=n(t.matcap)),t.alphaMap!==void 0&&(i.alphaMap=n(t.alphaMap)),t.bumpMap!==void 0&&(i.bumpMap=n(t.bumpMap)),t.bumpScale!==void 0&&(i.bumpScale=t.bumpScale),t.normalMap!==void 0&&(i.normalMap=n(t.normalMap)),t.normalMapType!==void 0&&(i.normalMapType=t.normalMapType),t.normalScale!==void 0){let r=t.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new H().fromArray(r)}return t.displacementMap!==void 0&&(i.displacementMap=n(t.displacementMap)),t.displacementScale!==void 0&&(i.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(i.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(i.roughnessMap=n(t.roughnessMap)),t.metalnessMap!==void 0&&(i.metalnessMap=n(t.metalnessMap)),t.emissiveMap!==void 0&&(i.emissiveMap=n(t.emissiveMap)),t.emissiveIntensity!==void 0&&(i.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(i.specularMap=n(t.specularMap)),t.envMap!==void 0&&(i.envMap=n(t.envMap)),t.envMapIntensity!==void 0&&(i.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(i.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(i.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(i.lightMap=n(t.lightMap)),t.lightMapIntensity!==void 0&&(i.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(i.aoMap=n(t.aoMap)),t.aoMapIntensity!==void 0&&(i.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(i.gradientMap=n(t.gradientMap)),t.clearcoatMap!==void 0&&(i.clearcoatMap=n(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new H().fromArray(t.clearcoatNormalScale)),t.transmission!==void 0&&(i.transmission=t.transmission),t.transmissionMap!==void 0&&(i.transmissionMap=n(t.transmissionMap)),i},setTextures:function(t){return this.textures=t,this}});const el={decodeText:function(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}},extractUrlBase:function(t){const e=t.lastIndexOf("/");return e===-1?"./":t.substr(0,e+1)}};function ss(){fe.call(this),this.type="InstancedBufferGeometry",this.instanceCount=1/0}ss.prototype=Object.assign(Object.create(fe.prototype),{constructor:ss,isInstancedBufferGeometry:!0,copy:function(t){return fe.prototype.copy.call(this,t),this.instanceCount=t.instanceCount,this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){const t=fe.prototype.toJSON.call(this);return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}});function Go(t,e,n,i){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),me.call(this,t,e,n),this.meshPerAttribute=i||1}Go.prototype=Object.assign(Object.create(me.prototype),{constructor:Go,isInstancedBufferAttribute:!0,copy:function(t){return me.prototype.copy.call(this,t),this.meshPerAttribute=t.meshPerAttribute,this},toJSON:function(){const t=me.prototype.toJSON.call(this);return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}});function Ho(t){Be.call(this,t)}Ho.prototype=Object.assign(Object.create(Be.prototype),{constructor:Ho,load:function(t,e,n,i){const r=this,s=new Bt(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)},parse:function(t){const e={},n={};function i(u,f){if(e[f]!==void 0)return e[f];const y=u.interleavedBuffers[f],v=r(u,y.buffer),g=new Ks[y.type](v),m=new St(g,y.stride);return m.uuid=y.uuid,e[f]=m,m}function r(u,f){if(n[f]!==void 0)return n[f];const y=u.arrayBuffers[f],v=new Uint32Array(y).buffer;return n[f]=v,v}const s=t.isInstancedBufferGeometry?new ss:new fe,o=t.data.index;if(o!==void 0){const u=new Ks[o.type](o.array);s.setIndex(new me(u,1))}const a=t.data.attributes;for(const u in a){const f=a[u];let p;if(f.isInterleavedBufferAttribute){const y=i(t.data,f.data);p=new Gn(y,f.itemSize,f.offset,f.normalized)}else{const y=new Ks[f.type](f.array),v=f.isInstancedBufferAttribute?Go:me;p=new v(y,f.itemSize,f.normalized)}f.name!==void 0&&(p.name=f.name),s.setAttribute(u,p)}const c=t.data.morphAttributes;if(c)for(const u in c){const f=c[u],p=[];for(let y=0,v=f.length;y<v;y++){const g=f[y];let m;if(g.isInterleavedBufferAttribute){const _=i(t.data,g.data);m=new Gn(_,g.itemSize,g.offset,g.normalized)}else{const _=new Ks[g.type](g.array);m=new me(_,g.itemSize,g.normalized)}g.name!==void 0&&(m.name=g.name),p.push(m)}s.morphAttributes[u]=p}t.data.morphTargetsRelative&&(s.morphTargetsRelative=!0);const d=t.data.groups||t.data.drawcalls||t.data.offsets;if(d!==void 0)for(let u=0,f=d.length;u!==f;++u){const p=d[u];s.addGroup(p.start,p.count,p.materialIndex)}const h=t.data.boundingSphere;if(h!==void 0){const u=new w;h.center!==void 0&&u.fromArray(h.center),s.boundingSphere=new bn(u,h.radius)}return t.name&&(s.name=t.name),t.userData&&(s.userData=t.userData),s}});const Ks={Int8Array,Uint8Array,Uint8ClampedArray:typeof Uint8ClampedArray<"u"?Uint8ClampedArray:Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};class sx extends Be{constructor(e){super(e)}load(e,n,i,r){const s=this,o=this.path===""?el.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;const a=new Bt(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){let l=null;try{l=JSON.parse(c)}catch(h){r!==void 0&&r(h),console.error("THREE:ObjectLoader: Can't parse "+e+".",h.message);return}const d=l.metadata;if(d===void 0||d.type===void 0||d.type.toLowerCase()==="geometry"){console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(l,n)},i,r)}parse(e,n){const i=this.parseShape(e.shapes),r=this.parseGeometries(e.geometries,i),s=this.parseImages(e.images,function(){n!==void 0&&n(c)}),o=this.parseTextures(e.textures,s),a=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,r,a);return e.animations&&(c.animations=this.parseAnimations(e.animations)),(e.images===void 0||e.images.length===0)&&n!==void 0&&n(c),c}parseShape(e){const n={};if(e!==void 0)for(let i=0,r=e.length;i<r;i++){const s=new Nn().fromJSON(e[i]);n[s.uuid]=s}return n}parseGeometries(e,n){const i={};let r;if(e!==void 0){const s=new Ho;for(let o=0,a=e.length;o<a;o++){let c;const l=e[o];switch(l.type){case"PlaneGeometry":case"PlaneBufferGeometry":c=new dt[l.type](l.width,l.height,l.widthSegments,l.heightSegments);break;case"BoxGeometry":case"BoxBufferGeometry":case"CubeGeometry":c=new dt[l.type](l.width,l.height,l.depth,l.widthSegments,l.heightSegments,l.depthSegments);break;case"CircleGeometry":case"CircleBufferGeometry":c=new dt[l.type](l.radius,l.segments,l.thetaStart,l.thetaLength);break;case"CylinderGeometry":case"CylinderBufferGeometry":c=new dt[l.type](l.radiusTop,l.radiusBottom,l.height,l.radialSegments,l.heightSegments,l.openEnded,l.thetaStart,l.thetaLength);break;case"ConeGeometry":case"ConeBufferGeometry":c=new dt[l.type](l.radius,l.height,l.radialSegments,l.heightSegments,l.openEnded,l.thetaStart,l.thetaLength);break;case"SphereGeometry":case"SphereBufferGeometry":c=new dt[l.type](l.radius,l.widthSegments,l.heightSegments,l.phiStart,l.phiLength,l.thetaStart,l.thetaLength);break;case"DodecahedronGeometry":case"DodecahedronBufferGeometry":case"IcosahedronGeometry":case"IcosahedronBufferGeometry":case"OctahedronGeometry":case"OctahedronBufferGeometry":case"TetrahedronGeometry":case"TetrahedronBufferGeometry":c=new dt[l.type](l.radius,l.detail);break;case"RingGeometry":case"RingBufferGeometry":c=new dt[l.type](l.innerRadius,l.outerRadius,l.thetaSegments,l.phiSegments,l.thetaStart,l.thetaLength);break;case"TorusGeometry":case"TorusBufferGeometry":c=new dt[l.type](l.radius,l.tube,l.radialSegments,l.tubularSegments,l.arc);break;case"TorusKnotGeometry":case"TorusKnotBufferGeometry":c=new dt[l.type](l.radius,l.tube,l.tubularSegments,l.radialSegments,l.p,l.q);break;case"TubeGeometry":case"TubeBufferGeometry":c=new dt[l.type](new pc[l.path.type]().fromJSON(l.path),l.tubularSegments,l.radius,l.radialSegments,l.closed);break;case"LatheGeometry":case"LatheBufferGeometry":c=new dt[l.type](l.points,l.segments,l.phiStart,l.phiLength);break;case"PolyhedronGeometry":case"PolyhedronBufferGeometry":c=new dt[l.type](l.vertices,l.indices,l.radius,l.details);break;case"ShapeGeometry":case"ShapeBufferGeometry":r=[];for(let h=0,u=l.shapes.length;h<u;h++){const f=n[l.shapes[h]];r.push(f)}c=new dt[l.type](r,l.curveSegments);break;case"ExtrudeGeometry":case"ExtrudeBufferGeometry":r=[];for(let h=0,u=l.shapes.length;h<u;h++){const f=n[l.shapes[h]];r.push(f)}const d=l.options.extrudePath;d!==void 0&&(l.options.extrudePath=new pc[d.type]().fromJSON(d)),c=new dt[l.type](r,l.options);break;case"BufferGeometry":case"InstancedBufferGeometry":c=s.parse(l);break;case"Geometry":console.error('THREE.ObjectLoader: Loading "Geometry" is not supported anymore.');break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+l.type+'"');continue}c.uuid=l.uuid,l.name!==void 0&&(c.name=l.name),c.isBufferGeometry===!0&&l.userData!==void 0&&(c.userData=l.userData),i[l.uuid]=c}}return i}parseMaterials(e,n){const i={},r={};if(e!==void 0){const s=new Uo;s.setTextures(n);for(let o=0,a=e.length;o<a;o++){const c=e[o];if(c.type==="MultiMaterial"){const l=[];for(let d=0;d<c.materials.length;d++){const h=c.materials[d];i[h.uuid]===void 0&&(i[h.uuid]=s.parse(h)),l.push(i[h.uuid])}r[c.uuid]=l}else i[c.uuid]===void 0&&(i[c.uuid]=s.parse(c)),r[c.uuid]=i[c.uuid]}}return r}parseAnimations(e){const n=[];for(let i=0;i<e.length;i++){const r=e[i],s=Ct.parse(r);r.uuid!==void 0&&(s.uuid=r.uuid),n.push(s)}return n}parseImages(e,n){const i=this,r={};let s;function o(a){return i.manager.itemStart(a),s.load(a,function(){i.manager.itemEnd(a)},void 0,function(){i.manager.itemError(a),i.manager.itemEnd(a)})}if(e!==void 0&&e.length>0){const a=new Qc(n);s=new ir(a),s.setCrossOrigin(this.crossOrigin);for(let c=0,l=e.length;c<l;c++){const d=e[c],h=d.url;if(Array.isArray(h)){r[d.uuid]=[];for(let u=0,f=h.length;u<f;u++){const p=h[u],y=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(p)?p:i.resourcePath+p;r[d.uuid].push(o(y))}}else{const u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(d.url)?d.url:i.resourcePath+d.url;r[d.uuid]=o(u)}}}return r}parseTextures(e,n){function i(s,o){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),o[s])}const r={};if(e!==void 0)for(let s=0,o=e.length;s<o;s++){const a=e[s];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),n[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);let c;Array.isArray(n[a.image])?c=new en(n[a.image]):c=new ze(n[a.image]),c.needsUpdate=!0,c.uuid=a.uuid,a.name!==void 0&&(c.name=a.name),a.mapping!==void 0&&(c.mapping=i(a.mapping,ox)),a.offset!==void 0&&c.offset.fromArray(a.offset),a.repeat!==void 0&&c.repeat.fromArray(a.repeat),a.center!==void 0&&c.center.fromArray(a.center),a.rotation!==void 0&&(c.rotation=a.rotation),a.wrap!==void 0&&(c.wrapS=i(a.wrap[0],ih),c.wrapT=i(a.wrap[1],ih)),a.format!==void 0&&(c.format=a.format),a.type!==void 0&&(c.type=a.type),a.encoding!==void 0&&(c.encoding=a.encoding),a.minFilter!==void 0&&(c.minFilter=i(a.minFilter,rh)),a.magFilter!==void 0&&(c.magFilter=i(a.magFilter,rh)),a.anisotropy!==void 0&&(c.anisotropy=a.anisotropy),a.flipY!==void 0&&(c.flipY=a.flipY),a.premultiplyAlpha!==void 0&&(c.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(c.unpackAlignment=a.unpackAlignment),r[a.uuid]=c}return r}parseObject(e,n,i){let r;function s(l){return n[l]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",l),n[l]}function o(l){if(l!==void 0){if(Array.isArray(l)){const d=[];for(let h=0,u=l.length;h<u;h++){const f=l[h];i[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",f),d.push(i[f])}return d}return i[l]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",l),i[l]}}let a,c;switch(e.type){case"Scene":r=new Bc,e.background!==void 0&&Number.isInteger(e.background)&&(r.background=new re(e.background)),e.fog!==void 0&&(e.fog.type==="Fog"?r.fog=new Zo(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(r.fog=new Yo(e.fog.color,e.fog.density)));break;case"PerspectiveCamera":r=new Ke(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(r.focus=e.focus),e.zoom!==void 0&&(r.zoom=e.zoom),e.filmGauge!==void 0&&(r.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(r.filmOffset=e.filmOffset),e.view!==void 0&&(r.view=Object.assign({},e.view));break;case"OrthographicCamera":r=new sr(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(r.zoom=e.zoom),e.view!==void 0&&(r.view=Object.assign({},e.view));break;case"AmbientLight":r=new Fo(e.color,e.intensity);break;case"DirectionalLight":r=new Oo(e.color,e.intensity);break;case"PointLight":r=new Bo(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":r=new zo(e.color,e.intensity,e.width,e.height);break;case"SpotLight":r=new No(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":r=new Do(e.color,e.groundColor,e.intensity);break;case"LightProbe":r=new Pt().fromJSON(e);break;case"SkinnedMesh":console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");case"Mesh":a=s(e.geometry),c=o(e.material),r=new We(a,c);break;case"InstancedMesh":a=s(e.geometry),c=o(e.material);const l=e.count,d=e.instanceMatrix;r=new wo(a,c,l),r.instanceMatrix=new me(new Float32Array(d.array),16);break;case"LOD":r=new Jr;break;case"Line":r=new Nt(s(e.geometry),o(e.material),e.mode);break;case"LineLoop":r=new Mo(s(e.geometry),o(e.material));break;case"LineSegments":r=new vt(s(e.geometry),o(e.material));break;case"PointCloud":case"Points":r=new Qi(s(e.geometry),o(e.material));break;case"Sprite":r=new Zr(o(e.material));break;case"Group":r=new Pn;break;default:r=new ae}if(r.uuid=e.uuid,e.name!==void 0&&(r.name=e.name),e.matrix!==void 0?(r.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(r.matrixAutoUpdate=e.matrixAutoUpdate),r.matrixAutoUpdate&&r.matrix.decompose(r.position,r.quaternion,r.scale)):(e.position!==void 0&&r.position.fromArray(e.position),e.rotation!==void 0&&r.rotation.fromArray(e.rotation),e.quaternion!==void 0&&r.quaternion.fromArray(e.quaternion),e.scale!==void 0&&r.scale.fromArray(e.scale)),e.castShadow!==void 0&&(r.castShadow=e.castShadow),e.receiveShadow!==void 0&&(r.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(r.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(r.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(r.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&r.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(r.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(r.visible=e.visible),e.frustumCulled!==void 0&&(r.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(r.renderOrder=e.renderOrder),e.userData!==void 0&&(r.userData=e.userData),e.layers!==void 0&&(r.layers.mask=e.layers),e.children!==void 0){const l=e.children;for(let d=0;d<l.length;d++)r.add(this.parseObject(l[d],n,i))}if(e.type==="LOD"){e.autoUpdate!==void 0&&(r.autoUpdate=e.autoUpdate);const l=e.levels;for(let d=0;d<l.length;d++){const h=l[d],u=r.getObjectByProperty("uuid",h.object);u!==void 0&&r.addLevel(u,h.distance)}}return r}setTexturePath(e){return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."),this.setResourcePath(e)}}const ox={UVMapping:ko,CubeReflectionMapping:ls,CubeRefractionMapping:hs,EquirectangularReflectionMapping:mo,EquirectangularRefractionMapping:go,CubeUVReflectionMapping:ar,CubeUVRefractionMapping:us},ih={RepeatWrapping:Or,ClampToEdgeWrapping:pt,MirroredRepeatWrapping:Fr},rh={NearestFilter:tt,NearestMipmapNearestFilter:yo,NearestMipmapLinearFilter:vo,LinearFilter:rt,LinearMipmapNearestFilter:Rc,LinearMipmapLinearFilter:cr};function vc(t){typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),Be.call(this,t),this.options={premultiplyAlpha:"none"}}vc.prototype=Object.assign(Object.create(Be.prototype),{constructor:vc,isImageBitmapLoader:!0,setOptions:function(e){return this.options=e,this},load:function(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=gi.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",fetch(t,o).then(function(a){return a.blob()}).then(function(a){return createImageBitmap(a,r.options)}).then(function(a){gi.add(t,a),e&&e(a),r.manager.itemEnd(t)}).catch(function(a){i&&i(a),r.manager.itemError(t),r.manager.itemEnd(t)}),r.manager.itemStart(t)}});function tl(){this.type="ShapePath",this.color=new re,this.subPaths=[],this.currentPath=null}Object.assign(tl.prototype,{moveTo:function(t,e){return this.currentPath=new Vt,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this},lineTo:function(t,e){return this.currentPath.lineTo(t,e),this},quadraticCurveTo:function(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this},bezierCurveTo:function(t,e,n,i,r,s){return this.currentPath.bezierCurveTo(t,e,n,i,r,s),this},splineThru:function(t){return this.currentPath.splineThru(t),this},toShapes:function(t,e){function n(g){const m=[];for(let _=0,b=g.length;_<b;_++){const M=g[_],x=new Nn;x.curves=M.curves,m.push(x)}return m}function i(g,m){const _=m.length;let b=!1;for(let M=_-1,x=0;x<_;M=x++){let A=m[M],I=m[x],P=I.x-A.x,U=I.y-A.y;if(Math.abs(U)>Number.EPSILON){if(U<0&&(A=m[x],P=-P,I=m[M],U=-U),g.y<A.y||g.y>I.y)continue;if(g.y===A.y){if(g.x===A.x)return!0}else{const D=U*(g.x-A.x)-P*(g.y-A.y);if(D===0)return!0;if(D<0)continue;b=!b}}else{if(g.y!==A.y)continue;if(I.x<=g.x&&g.x<=A.x||A.x<=g.x&&g.x<=I.x)return!0}}return b}const r=vn.isClockWise,s=this.subPaths;if(s.length===0)return[];if(e===!0)return n(s);let o,a,c;const l=[];if(s.length===1)return a=s[0],c=new Nn,c.curves=a.curves,l.push(c),l;let d=!r(s[0].getPoints());d=t?!d:d;const h=[],u=[];let f=[],p=0,y;u[p]=void 0,f[p]=[];for(let g=0,m=s.length;g<m;g++)a=s[g],y=a.getPoints(),o=r(y),o=t?!o:o,o?(!d&&u[p]&&p++,u[p]={s:new Nn,p:y},u[p].s.curves=a.curves,d&&p++,f[p]=[]):f[p].push({h:a,p:y[0]});if(!u[0])return n(s);if(u.length>1){let g=!1;const m=[];for(let _=0,b=u.length;_<b;_++)h[_]=[];for(let _=0,b=u.length;_<b;_++){const M=f[_];for(let x=0;x<M.length;x++){const A=M[x];let I=!0;for(let P=0;P<u.length;P++)i(A.p,u[P].p)&&(_!==P&&m.push({froms:_,tos:P,hole:x}),I?(I=!1,h[P].push(A)):g=!0);I&&h[_].push(A)}}m.length>0&&(g||(f=h))}let v;for(let g=0,m=u.length;g<m;g++){c=u[g].s,l.push(c),v=f[g];for(let _=0,b=v.length;_<b;_++)c.holes.push(v[_].h)}return l}});function nl(t){this.type="Font",this.data=t}Object.assign(nl.prototype,{isFont:!0,generateShapes:function(t,e){e===void 0&&(e=100);const n=[],i=ax(t,e,this.data);for(let r=0,s=i.length;r<s;r++)Array.prototype.push.apply(n,i[r].toShapes());return n}});function ax(t,e,n){const i=Array.from?Array.from(t):String(t).split(""),r=e/n.resolution,s=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*r,o=[];let a=0,c=0;for(let l=0;l<i.length;l++){const d=i[l];if(d===`
`)a=0,c-=s;else{const h=cx(d,r,a,c,n);a+=h.offsetX,o.push(h.path)}}return o}function cx(t,e,n,i,r){const s=r.glyphs[t]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+t+'" does not exists in font family '+r.familyName+".");return}const o=new tl;let a,c,l,d,h,u,f,p;if(s.o){const y=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let v=0,g=y.length;v<g;)switch(y[v++]){case"m":a=y[v++]*e+n,c=y[v++]*e+i,o.moveTo(a,c);break;case"l":a=y[v++]*e+n,c=y[v++]*e+i,o.lineTo(a,c);break;case"q":l=y[v++]*e+n,d=y[v++]*e+i,h=y[v++]*e+n,u=y[v++]*e+i,o.quadraticCurveTo(h,u,l,d);break;case"b":l=y[v++]*e+n,d=y[v++]*e+i,h=y[v++]*e+n,u=y[v++]*e+i,f=y[v++]*e+n,p=y[v++]*e+i,o.bezierCurveTo(h,u,f,p,l,d);break}}return{offsetX:s.ha*e,path:o}}function xc(t){Be.call(this,t)}xc.prototype=Object.assign(Object.create(Be.prototype),{constructor:xc,load:function(t,e,n,i){const r=this,s=new Bt(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){let a;try{a=JSON.parse(o)}catch{console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),a=JSON.parse(o.substring(65,o.length-2))}const c=r.parse(a);e&&e(c)},n,i)},parse:function(t){return new nl(t)}});let eo;const il={getContext:function(){return eo===void 0&&(eo=new(window.AudioContext||window.webkitAudioContext)),eo},setContext:function(t){eo=t}};function Vo(t){Be.call(this,t)}Vo.prototype=Object.assign(Object.create(Be.prototype),{constructor:Vo,load:function(t,e,n,i){const r=this,s=new Bt(r.manager);s.setResponseType("arraybuffer"),s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,function(o){try{const a=o.slice(0);il.getContext().decodeAudioData(a,function(l){e(l)})}catch(a){i?i(a):console.error(a),r.manager.itemError(t)}},n,i)}});function _c(t,e,n){Pt.call(this,void 0,n);const i=new re().set(t),r=new re().set(e),s=new w(i.r,i.g,i.b),o=new w(r.r,r.g,r.b),a=Math.sqrt(Math.PI),c=a*Math.sqrt(.75);this.sh.coefficients[0].copy(s).add(o).multiplyScalar(a),this.sh.coefficients[1].copy(s).sub(o).multiplyScalar(c)}_c.prototype=Object.assign(Object.create(Pt.prototype),{constructor:_c,isHemisphereLightProbe:!0,copy:function(t){return Pt.prototype.copy.call(this,t),this},toJSON:function(t){return Pt.prototype.toJSON.call(this,t)}});function bc(t,e){Pt.call(this,void 0,e);const n=new re().set(t);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}bc.prototype=Object.assign(Object.create(Pt.prototype),{constructor:bc,isAmbientLightProbe:!0,copy:function(t){return Pt.prototype.copy.call(this,t),this},toJSON:function(t){return Pt.prototype.toJSON.call(this,t)}});const sh=new Ee,oh=new Ee;function jf(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Ke,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Ke,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}Object.assign(jf.prototype,{update:function(t){const e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep;const i=t.projectionMatrix.clone(),r=e.eyeSep/2,s=r*e.near/e.focus,o=e.near*Math.tan(xe.DEG2RAD*e.fov*.5)/e.zoom;let a,c;oh.elements[12]=-r,sh.elements[12]=r,a=-o*e.aspect+s,c=o*e.aspect+s,i.elements[0]=2*e.near/(c-a),i.elements[8]=(c+a)/(c-a),this.cameraL.projectionMatrix.copy(i),a=-o*e.aspect-s,c=o*e.aspect-s,i.elements[0]=2*e.near/(c-a),i.elements[8]=(c+a)/(c-a),this.cameraR.projectionMatrix.copy(i)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(oh),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(sh)}});class qf{constructor(e){this.autoStart=e!==void 0?e:!0,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=(typeof performance>"u"?Date:performance).now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=(typeof performance>"u"?Date:performance).now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const Jn=new w,ah=new ht,lx=new w,$n=new w;class hx extends ae{constructor(){super(),this.type="AudioListener",this.context=il.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new qf}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const n=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Jn,ah,lx),$n.set(0,0,-1).applyQuaternion(ah),n.positionX){const r=this.context.currentTime+this.timeDelta;n.positionX.linearRampToValueAtTime(Jn.x,r),n.positionY.linearRampToValueAtTime(Jn.y,r),n.positionZ.linearRampToValueAtTime(Jn.z,r),n.forwardX.linearRampToValueAtTime($n.x,r),n.forwardY.linearRampToValueAtTime($n.y,r),n.forwardZ.linearRampToValueAtTime($n.z,r),n.upX.linearRampToValueAtTime(i.x,r),n.upY.linearRampToValueAtTime(i.y,r),n.upZ.linearRampToValueAtTime(i.z,r)}else n.setPosition(Jn.x,Jn.y,Jn.z),n.setOrientation($n.x,$n.y,$n.z,i.x,i.y,i.z)}}class rl extends ae{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e){if(e===void 0&&(e=0),this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const n=this.context.createBufferSource();return n.buffer=this.buffer,n.loop=this.loop,n.loopStart=this.loopStart,n.loopEnd=this.loopEnd,n.onended=this.onEnded.bind(this),n.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=n,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,n=this.filters.length;e<n;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,n=this.filters.length;e<n;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e,this.connect()):this.filters=e,this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const Qn=new w,ch=new ht,ux=new w,Kn=new w;class fx extends rl{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,n,i){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=n,this.panner.coneOuterGain=i,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Qn,ch,ux),Kn.set(0,0,1).applyQuaternion(ch);const n=this.panner;if(n.positionX){const i=this.context.currentTime+this.listener.timeDelta;n.positionX.linearRampToValueAtTime(Qn.x,i),n.positionY.linearRampToValueAtTime(Qn.y,i),n.positionZ.linearRampToValueAtTime(Qn.z,i),n.orientationX.linearRampToValueAtTime(Kn.x,i),n.orientationY.linearRampToValueAtTime(Kn.y,i),n.orientationZ.linearRampToValueAtTime(Kn.z,i)}else n.setPosition(Qn.x,Qn.y,Qn.z),n.setOrientation(Kn.x,Kn.y,Kn.z)}}class Xf{constructor(e,n){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=n!==void 0?n:2048,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const n=this.getFrequencyData();for(let i=0;i<n.length;i++)e+=n[i];return e/n.length}}function sl(t,e,n){this.binding=t,this.valueSize=n;let i,r,s;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}Object.assign(sl.prototype,{accumulate:function(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i;let s=this.cumulativeWeight;if(s===0){for(let o=0;o!==i;++o)n[r+o]=n[o];s=e}else{s+=e;const o=e/s;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=s},accumulateAdditive:function(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t},apply:function(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,s=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const a=e*this._origIndex;this._mixBufferRegion(n,i,a,1-r,e)}s>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let a=e,c=e+e;a!==c;++a)if(n[a]!==n[a+e]){o.setValue(n,i);break}},saveOriginalState:function(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,s=i;r!==s;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0},restoreOriginalState:function(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)},_setAdditiveIdentityNumeric:function(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0},_setAdditiveIdentityQuaternion:function(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1},_setAdditiveIdentityOther:function(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]},_select:function(t,e,n,i,r){if(i>=.5)for(let s=0;s!==r;++s)t[e+s]=t[n+s]},_slerp:function(t,e,n,i){ht.slerpFlat(t,e,t,e,t,n,i)},_slerpAdditive:function(t,e,n,i,r){const s=this._workIndex*r;ht.multiplyQuaternionsFlat(t,s,t,e,t,n),ht.slerpFlat(t,e,t,e,t,s,i)},_lerp:function(t,e,n,i,r){const s=1-i;for(let o=0;o!==r;++o){const a=e+o;t[a]=t[a]*s+t[n+o]*i}},_lerpAdditive:function(t,e,n,i,r){for(let s=0;s!==r;++s){const o=e+s;t[o]=t[o]+t[n+s]*i}}});const ol="\\[\\]\\.:\\/",dx=new RegExp("["+ol+"]","g"),al="[^"+ol+"]",px="[^"+ol.replace("\\.","")+"]",mx=/((?:WC+[\/:])*)/.source.replace("WC",al),gx=/(WCOD+)?/.source.replace("WCOD",px),yx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",al),vx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",al),xx=new RegExp("^"+mx+gx+yx+vx+"$"),_x=["material","materials","bones"];function Yf(t,e,n){const i=n||ut.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}Object.assign(Yf.prototype,{getValue:function(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)},setValue:function(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)},bind:function(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()},unbind:function(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}});function ut(t,e,n){this.path=e,this.parsedPath=n||ut.parseTrackName(e),this.node=ut.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t}Object.assign(ut,{Composite:Yf,create:function(t,e,n){return t&&t.isAnimationObjectGroup?new ut.Composite(t,e,n):new ut(t,e,n)},sanitizeNodeName:function(t){return t.replace(/\s/g,"_").replace(dx,"")},parseTrackName:function(t){const e=xx.exec(t);if(!e)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);_x.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n},findNode:function(t,e){if(!e||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let s=0;s<r.length;s++){const o=r[s];if(o.name===e||o.uuid===e)return o;const a=n(o.children);if(a)return a}return null},i=n(t.children);if(i)return i}return null}});Object.assign(ut.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(e,n){e[n]=this.node[this.propertyName]},function(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]},function(e,n){e[n]=this.resolvedProperty[this.propertyIndex]},function(e,n){this.resolvedProperty.toArray(e,n)}],SetterByBindingTypeAndVersioning:[[function(e,n){this.targetObject[this.propertyName]=e[n]},function(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0},function(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]},function(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0},function(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,n){this.resolvedProperty[this.propertyIndex]=e[n]},function(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0},function(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,n){this.resolvedProperty.fromArray(e,n)},function(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0},function(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(e,n){this.bind(),this.getValue(e,n)},setValue:function(e,n){this.bind(),this.setValue(e,n)},bind:function(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=ut.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let l=0;l<t.length;l++)if(t[l].name===c){c=l;break}break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const s=t[i];if(s===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(t.geometry.isBufferGeometry){if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}a=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(a=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]},unbind:function(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}});Object.assign(ut.prototype,{_getValue_unbound:ut.prototype.getValue,_setValue_unbound:ut.prototype.setValue});function Zf(){this.uuid=xe.generateUUID(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}Object.assign(Zf.prototype,{isAnimationObjectGroup:!0,add:function(){const t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,s=r.length;let o,a=t.length,c=this.nCachedObjects_;for(let l=0,d=arguments.length;l!==d;++l){const h=arguments[l],u=h.uuid;let f=e[u];if(f===void 0){f=a++,e[u]=f,t.push(h);for(let p=0,y=s;p!==y;++p)r[p].push(new ut(h,n[p],i[p]))}else if(f<c){o=t[f];const p=--c,y=t[p];e[y.uuid]=f,t[f]=y,e[u]=p,t[p]=h;for(let v=0,g=s;v!==g;++v){const m=r[v],_=m[p];let b=m[f];m[f]=_,b===void 0&&(b=new ut(h,n[v],i[v])),m[p]=b}}else t[f]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c},remove:function(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let s=0,o=arguments.length;s!==o;++s){const a=arguments[s],c=a.uuid,l=e[c];if(l!==void 0&&l>=r){const d=r++,h=t[d];e[h.uuid]=l,t[l]=h,e[c]=d,t[d]=a;for(let u=0,f=i;u!==f;++u){const p=n[u],y=p[d],v=p[l];p[l]=y,p[d]=v}}}this.nCachedObjects_=r},uncache:function(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,s=t.length;for(let o=0,a=arguments.length;o!==a;++o){const c=arguments[o],l=c.uuid,d=e[l];if(d!==void 0)if(delete e[l],d<r){const h=--r,u=t[h],f=--s,p=t[f];e[u.uuid]=d,t[d]=u,e[p.uuid]=h,t[h]=p,t.pop();for(let y=0,v=i;y!==v;++y){const g=n[y],m=g[h],_=g[f];g[d]=m,g[h]=_,g.pop()}}else{const h=--s,u=t[h];e[u.uuid]=d,t[d]=u,t.pop();for(let f=0,p=i;f!==p;++f){const y=n[f];y[d]=y[h],y.pop()}}}this.nCachedObjects_=r},subscribe_:function(t,e){const n=this._bindingsIndicesByPath;let i=n[t];const r=this._bindings;if(i!==void 0)return r[i];const s=this._paths,o=this._parsedPaths,a=this._objects,c=a.length,l=this.nCachedObjects_,d=new Array(c);i=r.length,n[t]=i,s.push(t),o.push(e),r.push(d);for(let h=l,u=a.length;h!==u;++h){const f=a[h];d[h]=new ut(f,t,e)}return d},unsubscribe_:function(t){const e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){const i=this._paths,r=this._parsedPaths,s=this._bindings,o=s.length-1,a=s[o],c=t[o];e[c]=n,s[n]=a,s.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}});class bx{constructor(e,n,i,r){this._mixer=e,this._clip=n,this._localRoot=i||null,this.blendMode=r||n.blendMode;const s=n.tracks,o=s.length,a=new Array(o),c={endingStart:ni,endingEnd:ni};for(let l=0;l!==o;++l){const d=s[l].createInterpolant(null);a[l]=d,d.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Ku,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,n){return this.loop=e,this.repetitions=n,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,n,i){if(e.fadeOut(n),this.fadeIn(n),i){const r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,n),this.warp(a,1,n)}return this}crossFadeTo(e,n,i){return e.crossFadeFrom(this,n,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,n,i){const r=this._mixer,s=r.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+i,l[0]=e/o,l[1]=n/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,n,i,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*i;if(c<0||i===0)return;this._startTime=null,n=i*c}n*=this._updateTimeScale(e);const o=this._updateTime(n),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Cc:for(let d=0,h=c.length;d!==h;++d)c[d].evaluate(o),l[d].accumulateAdditive(a);break;case Wo:default:for(let d=0,h=c.length;d!==h;++d)c[d].evaluate(o),l[d].accumulate(r,a)}}}_updateWeight(e){let n=0;if(this.enabled){n=this.weight;const i=this._weightInterpolant;if(i!==null){const r=i.evaluate(e)[0];n*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=n,n}_updateTimeScale(e){let n=0;if(!this.paused){n=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const r=i.evaluate(e)[0];n*=r,e>i.parameterPositions[1]&&(this.stopWarping(),n===0?this.paused=!0:this.timeScale=n)}}return this._effectiveTimeScale=n,n}_updateTime(e){const n=this._clip.duration,i=this.loop;let r=this.time+e,s=this._loopCount;const o=i===ef;if(e===0)return s===-1?r:o&&(s&1)===1?n-r:r;if(i===Qu){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=n)r=n;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=n||r<0){const a=Math.floor(r/n);r-=n*a,s+=Math.abs(a);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?n:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)===1)return n-r}return r}_setEndings(e,n,i){const r=this._interpolantSettings;i?(r.endingStart=ii,r.endingEnd=ii):(e?r.endingStart=this.zeroSlopeAtStart?ii:ni:r.endingStart=Hr,n?r.endingEnd=this.zeroSlopeAtEnd?ii:ni:r.endingEnd=Hr)}_scheduleFading(e,n,i){const r=this._mixer,s=r.time;let o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=n,a[1]=s+e,c[1]=i,this}}function wc(t){this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}wc.prototype=Object.assign(Object.create(sn.prototype),{constructor:wc,_bindAction:function(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,s=t._propertyBindings,o=t._interpolants,a=n.uuid,c=this._bindingsByRootAndName;let l=c[a];l===void 0&&(l={},c[a]=l);for(let d=0;d!==r;++d){const h=i[d],u=h.name;let f=l[u];if(f!==void 0)s[d]=f;else{if(f=s[d],f!==void 0){f._cacheIndex===null&&(++f.referenceCount,this._addInactiveBinding(f,a,u));continue}const p=e&&e._propertyBindings[d].binding.parsedPath;f=new sl(ut.create(n,u,p),h.ValueTypeName,h.getValueSize()),++f.referenceCount,this._addInactiveBinding(f,a,u),s[d]=f}o[d].resultBuffer=f.buffer}},_activateAction:function(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}},_deactivateAction:function(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}},_initMemoryManager:function(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}},_isActiveAction:function(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions},_addInactiveAction:function(t,e,n){const i=this._actions,r=this._actionsByClip;let s=r[e];if(s===void 0)s={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=s;else{const o=s.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=i.length,i.push(t),s.actionByRoot[n]=t},_removeInactiveAction:function(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,s=this._actionsByClip,o=s[r],a=o.knownActions,c=a[a.length-1],l=t._byClipCacheIndex;c._byClipCacheIndex=l,a[l]=c,a.pop(),t._byClipCacheIndex=null;const d=o.actionByRoot,h=(t._localRoot||this._root).uuid;delete d[h],a.length===0&&delete s[r],this._removeInactiveBindingsForAction(t)},_removeInactiveBindingsForAction:function(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}},_lendAction:function(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_takeBackAction:function(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_addInactiveBinding:function(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings;let s=i[e];s===void 0&&(s={},i[e]=s),s[n]=t,t._cacheIndex=r.length,r.push(t)},_removeInactiveBinding:function(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,s=this._bindingsByRootAndName,o=s[i],a=e[e.length-1],c=t._cacheIndex;a._cacheIndex=c,e[c]=a,e.pop(),delete o[r],Object.keys(o).length===0&&delete s[i]},_lendBinding:function(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_takeBackBinding:function(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r},_lendControlInterpolant:function(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new is(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=e,t[e]=n),n},_takeBackControlInterpolant:function(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function(t,e,n){const i=e||this._root,r=i.uuid;let s=typeof t=="string"?Ct.findByName(i,t):t;const o=s!==null?s.uuid:t,a=this._actionsByClip[o];let c=null;if(n===void 0&&(s!==null?n=s.blendMode:n=Wo),a!==void 0){const d=a.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=a.knownActions[0],s===null&&(s=c._clip)}if(s===null)return null;const l=new bx(this,s,e,n);return this._bindAction(l,c),this._addInactiveAction(l,o,r),l},existingAction:function(t,e){const n=e||this._root,i=n.uuid,r=typeof t=="string"?Ct.findByName(n,t):t,s=r?r.uuid:t,o=this._actionsByClip[s];return o!==void 0&&o.actionByRoot[i]||null},stopAllAction:function(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this},update:function(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),s=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,s);const o=this._bindings,a=this._nActiveBindings;for(let c=0;c!==a;++c)o[c].apply(s);return this},setTime:function(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)},getRoot:function(){return this._root},uncacheClip:function(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const s=r.knownActions;for(let o=0,a=s.length;o!==a;++o){const c=s[o];this._deactivateAction(c);const l=c._cacheIndex,d=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=l,e[l]=d,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}},uncacheRoot:function(t){const e=t.uuid,n=this._actionsByClip;for(const s in n){const o=n[s].actionByRoot,a=o[e];a!==void 0&&(this._deactivateAction(a),this._removeInactiveAction(a))}const i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(const s in r){const o=r[s];o.restoreOriginalState(),this._removeInactiveBinding(o)}},uncacheAction:function(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}});class Ko{constructor(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}clone(){return new Ko(this.value.clone===void 0?this.value:this.value.clone())}}function Mc(t,e,n){St.call(this,t,e),this.meshPerAttribute=n||1}Mc.prototype=Object.assign(Object.create(St.prototype),{constructor:Mc,isInstancedInterleavedBuffer:!0,copy:function(t){return St.prototype.copy.call(this,t),this.meshPerAttribute=t.meshPerAttribute,this},clone:function(t){const e=St.prototype.clone.call(this,t);return e.meshPerAttribute=this.meshPerAttribute,e},toJSON:function(t){const e=St.prototype.toJSON.call(this,t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}});function cl(t,e,n,i,r){this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}Object.defineProperty(cl.prototype,"needsUpdate",{set:function(t){t===!0&&this.version++}});Object.assign(cl.prototype,{isGLBufferAttribute:!0,setBuffer:function(t){return this.buffer=t,this},setType:function(t,e){return this.type=t,this.elementSize=e,this},setItemSize:function(t){return this.itemSize=t,this},setCount:function(t){return this.count=t,this}});function ll(t,e,n,i){this.ray=new hr(t,e),this.near=n||0,this.far=i||1/0,this.camera=null,this.layers=new Nc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),this.Points}}})}function lh(t,e){return t.distance-e.distance}function Sc(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)Sc(r[s],e,n,!0)}}Object.assign(ll.prototype,{set:function(t,e){this.ray.set(t,e)},setFromCamera:function(t,e){e&&e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e&&e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type.")},intersectObject:function(t,e,n){const i=n||[];return Sc(t,this,i,e),i.sort(lh),i},intersectObjects:function(t,e,n){const i=n||[];if(Array.isArray(t)===!1)return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),i;for(let r=0,s=t.length;r<s;r++)Sc(t[r],this,i,e);return i.sort(lh),i}});class wx{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}clone(){return new this.constructor().copy(this)}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(xe.clamp(n/this.radius,-1,1))),this}}class Mx{constructor(e,n,i){return this.radius=e!==void 0?e:1,this.theta=n!==void 0?n:0,this.y=i!==void 0?i:0,this}set(e,n,i){return this.radius=e,this.theta=n,this.y=i,this}clone(){return new this.constructor().copy(this)}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+i*i),this.theta=Math.atan2(e,i),this.y=n,this}}const hh=new H;class Jf{constructor(e,n){Object.defineProperty(this,"isBox2",{value:!0}),this.min=e!==void 0?e:new H(1/0,1/0),this.max=n!==void 0?n:new H(-1/0,-1/0)}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=hh.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return e===void 0&&(console.warn("THREE.Box2: .getCenter() target is now required"),e=new H),this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box2: .getSize() target is now required"),e=new H),this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,n){return n===void 0&&(console.warn("THREE.Box2: .getParameter() target is now required"),n=new H),n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,n){return n===void 0&&(console.warn("THREE.Box2: .clampPoint() target is now required"),n=new H),n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return hh.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const uh=new w,to=new w;class $f{constructor(e,n){this.start=e!==void 0?e:new w,this.end=n!==void 0?n:new w}set(e,n){return this.start.copy(e),this.end.copy(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e===void 0&&(console.warn("THREE.Line3: .getCenter() target is now required"),e=new w),e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e===void 0&&(console.warn("THREE.Line3: .delta() target is now required"),e=new w),e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,n){return n===void 0&&(console.warn("THREE.Line3: .at() target is now required"),n=new w),this.delta(n).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,n){uh.subVectors(e,this.start),to.subVectors(this.end,this.start);const i=to.dot(to);let s=to.dot(uh)/i;return n&&(s=xe.clamp(s,0,1)),s}closestPointToPoint(e,n,i){const r=this.closestPointToPointParameter(e,n);return i===void 0&&(console.warn("THREE.Line3: .closestPointToPoint() target is now required"),i=new w),this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}}function os(t){ae.call(this),this.material=t,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}os.prototype=Object.create(ae.prototype);os.prototype.constructor=os;os.prototype.isImmediateRenderObject=!0;const fh=new w;class Sx extends ae{constructor(e,n){super(),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n;const i=new fe,r=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,c=32;o<c;o++,a++){const l=o/c*Math.PI*2,d=a/c*Math.PI*2;r.push(Math.cos(l),Math.sin(l),1,Math.cos(d),Math.sin(d),1)}i.setAttribute("position",new Q(r,3));const s=new je({fog:!1,toneMapped:!1});this.cone=new vt(i,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateMatrixWorld();const e=this.light.distance?this.light.distance:1e3,n=e*Math.tan(this.light.angle);this.cone.scale.set(n,n,e),fh.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(fh),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Cn=new w,no=new Ee,Ca=new Ee;class Qf extends vt{constructor(e){const n=Kf(e),i=new fe,r=[],s=[],o=new re(0,0,1),a=new re(0,1,0);for(let l=0;l<n.length;l++){const d=n[l];d.parent&&d.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}i.setAttribute("position",new Q(r,3)),i.setAttribute("color",new Q(s,3));const c=new je({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,c),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=n,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const n=this.bones,i=this.geometry,r=i.getAttribute("position");Ca.getInverse(this.root.matrixWorld);for(let s=0,o=0;s<n.length;s++){const a=n[s];a.parent&&a.parent.isBone&&(no.multiplyMatrices(Ca,a.matrixWorld),Cn.setFromMatrixPosition(no),r.setXYZ(o,Cn.x,Cn.y,Cn.z),no.multiplyMatrices(Ca,a.parent.matrixWorld),Cn.setFromMatrixPosition(no),r.setXYZ(o+1,Cn.x,Cn.y,Cn.z),o+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function Kf(t){const e=[];t&&t.isBone&&e.push(t);for(let n=0;n<t.children.length;n++)e.push.apply(e,Kf(t.children[n]));return e}class Tx extends We{constructor(e,n,i){const r=new Qo(n,4,2),s=new It({wireframe:!0,fog:!1,toneMapped:!1});super(r,s),this.light=e,this.light.updateMatrixWorld(),this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const Ex=new w,dh=new re,ph=new re;class Ax extends ae{constructor(e,n,i){super(),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i;const r=new $o(n);r.rotateY(Math.PI*.5),this.material=new It({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=r.getAttribute("position"),o=new Float32Array(s.count*3);r.setAttribute("color",new me(o,3)),this.add(new We(r,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const n=e.geometry.getAttribute("color");dh.copy(this.light.color),ph.copy(this.light.groundColor);for(let i=0,r=n.count;i<r;i++){const s=i<r/2?dh:ph;n.setXYZ(i,s.r,s.g,s.b)}n.needsUpdate=!0}e.lookAt(Ex.setFromMatrixPosition(this.light.matrixWorld).negate())}}class ed extends vt{constructor(e,n,i,r){e=e||10,n=n||10,i=new re(i!==void 0?i:4473924),r=new re(r!==void 0?r:8947848);const s=n/2,o=e/n,a=e/2,c=[],l=[];for(let u=0,f=0,p=-a;u<=n;u++,p+=o){c.push(-a,0,p,a,0,p),c.push(p,0,-a,p,0,a);const y=u===s?i:r;y.toArray(l,f),f+=3,y.toArray(l,f),f+=3,y.toArray(l,f),f+=3,y.toArray(l,f),f+=3}const d=new fe;d.setAttribute("position",new Q(c,3)),d.setAttribute("color",new Q(l,3));const h=new je({vertexColors:!0,toneMapped:!1});super(d,h),this.type="GridHelper"}}class Lx extends vt{constructor(e,n,i,r,s,o){e=e||10,n=n||16,i=i||8,r=r||64,s=new re(s!==void 0?s:4473924),o=new re(o!==void 0?o:8947848);const a=[],c=[];for(let h=0;h<=n;h++){const u=h/n*(Math.PI*2),f=Math.sin(u)*e,p=Math.cos(u)*e;a.push(0,0,0),a.push(f,0,p);const y=h&1?s:o;c.push(y.r,y.g,y.b),c.push(y.r,y.g,y.b)}for(let h=0;h<=i;h++){const u=h&1?s:o,f=e-e/i*h;for(let p=0;p<r;p++){let y=p/r*(Math.PI*2),v=Math.sin(y)*f,g=Math.cos(y)*f;a.push(v,0,g),c.push(u.r,u.g,u.b),y=(p+1)/r*(Math.PI*2),v=Math.sin(y)*f,g=Math.cos(y)*f,a.push(v,0,g),c.push(u.r,u.g,u.b)}}const l=new fe;l.setAttribute("position",new Q(a,3)),l.setAttribute("color",new Q(c,3));const d=new je({vertexColors:!0,toneMapped:!1});super(l,d),this.type="PolarGridHelper"}}const mh=new w,io=new w,gh=new w;class Rx extends ae{constructor(e,n,i){super(),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,n===void 0&&(n=1);let r=new fe;r.setAttribute("position",new Q([-n,n,0,n,n,0,n,-n,0,-n,-n,0,-n,n,0],3));const s=new je({fog:!1,toneMapped:!1});this.lightPlane=new Nt(r,s),this.add(this.lightPlane),r=new fe,r.setAttribute("position",new Q([0,0,0,0,0,1],3)),this.targetLine=new Nt(r,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){mh.setFromMatrixPosition(this.light.matrixWorld),io.setFromMatrixPosition(this.light.target.matrixWorld),gh.subVectors(io,mh),this.lightPlane.lookAt(io),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(io),this.targetLine.scale.z=gh.length()}}const ro=new w,Ze=new Kt;class Cx extends vt{constructor(e){const n=new fe,i=new je({color:16777215,vertexColors:!0,toneMapped:!1}),r=[],s=[],o={},a=new re(16755200),c=new re(16711680),l=new re(43775),d=new re(16777215),h=new re(3355443);u("n1","n2",a),u("n2","n4",a),u("n4","n3",a),u("n3","n1",a),u("f1","f2",a),u("f2","f4",a),u("f4","f3",a),u("f3","f1",a),u("n1","f1",a),u("n2","f2",a),u("n3","f3",a),u("n4","f4",a),u("p","n1",c),u("p","n2",c),u("p","n3",c),u("p","n4",c),u("u1","u2",l),u("u2","u3",l),u("u3","u1",l),u("c","t",d),u("p","c",h),u("cn1","cn2",h),u("cn3","cn4",h),u("cf1","cf2",h),u("cf3","cf4",h);function u(p,y,v){f(p,v),f(y,v)}function f(p,y){r.push(0,0,0),s.push(y.r,y.g,y.b),o[p]===void 0&&(o[p]=[]),o[p].push(r.length/3-1)}n.setAttribute("position",new Q(r,3)),n.setAttribute("color",new Q(s,3)),super(n,i),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update()}update(){const e=this.geometry,n=this.pointMap,i=1,r=1;Ze.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),$e("c",n,e,Ze,0,0,-1),$e("t",n,e,Ze,0,0,1),$e("n1",n,e,Ze,-i,-r,-1),$e("n2",n,e,Ze,i,-r,-1),$e("n3",n,e,Ze,-i,r,-1),$e("n4",n,e,Ze,i,r,-1),$e("f1",n,e,Ze,-i,-r,1),$e("f2",n,e,Ze,i,-r,1),$e("f3",n,e,Ze,-i,r,1),$e("f4",n,e,Ze,i,r,1),$e("u1",n,e,Ze,i*.7,r*1.1,-1),$e("u2",n,e,Ze,-i*.7,r*1.1,-1),$e("u3",n,e,Ze,0,r*2,-1),$e("cf1",n,e,Ze,-i,0,1),$e("cf2",n,e,Ze,i,0,1),$e("cf3",n,e,Ze,0,-r,1),$e("cf4",n,e,Ze,0,r,1),$e("cn1",n,e,Ze,-i,0,-1),$e("cn2",n,e,Ze,i,0,-1),$e("cn3",n,e,Ze,0,-r,-1),$e("cn4",n,e,Ze,0,r,-1),e.getAttribute("position").needsUpdate=!0}}function $e(t,e,n,i,r,s,o){ro.set(r,s,o).unproject(i);const a=e[t];if(a!==void 0){const c=n.getAttribute("position");for(let l=0,d=a.length;l<d;l++)c.setXYZ(a[l],ro.x,ro.y,ro.z)}}const so=new on;class td extends vt{constructor(e,n=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=new Float32Array(8*3),s=new fe;s.setIndex(new me(i,1)),s.setAttribute("position",new me(r,3)),super(s,new je({color:n,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&so.setFromObject(this.object),so.isEmpty())return;const n=so.min,i=so.max,r=this.geometry.attributes.position,s=r.array;s[0]=i.x,s[1]=i.y,s[2]=i.z,s[3]=n.x,s[4]=i.y,s[5]=i.z,s[6]=n.x,s[7]=n.y,s[8]=i.z,s[9]=i.x,s[10]=n.y,s[11]=i.z,s[12]=i.x,s[13]=i.y,s[14]=n.z,s[15]=n.x,s[16]=i.y,s[17]=n.z,s[18]=n.x,s[19]=n.y,s[20]=n.z,s[21]=i.x,s[22]=n.y,s[23]=n.z,r.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e){return vt.prototype.copy.call(this,e),this.object=e.object,this}}class Px extends vt{constructor(e,n=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new fe;s.setIndex(new me(i,1)),s.setAttribute("position",new Q(r,3)),super(s,new je({color:n,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const n=this.box;n.isEmpty()||(n.getCenter(this.position),n.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}}class Ix extends Nt{constructor(e,n,i){const r=i!==void 0?i:16776960,s=[1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,0,0,1,0,0,0],o=new fe;o.setAttribute("position",new Q(s,3)),o.computeBoundingSphere(),super(o,new je({color:r,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=n===void 0?1:n;const a=[1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,1],c=new fe;c.setAttribute("position",new Q(a,3)),c.computeBoundingSphere(),this.add(new We(c,new It({color:r,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){let n=-this.plane.constant;Math.abs(n)<1e-8&&(n=1e-8),this.scale.set(.5*this.size,.5*this.size,n),this.children[0].material.side=n<0?et:or,this.lookAt(this.plane.normal),super.updateMatrixWorld(e)}}const yh=new w;let oo,Pa;class Dx extends ae{constructor(e,n,i,r,s,o){super(),this.type="ArrowHelper",e===void 0&&(e=new w(0,0,1)),n===void 0&&(n=new w(0,0,0)),i===void 0&&(i=1),r===void 0&&(r=16776960),s===void 0&&(s=.2*i),o===void 0&&(o=.2*s),oo===void 0&&(oo=new fe,oo.setAttribute("position",new Q([0,0,0,0,1,0],3)),Pa=new ys(0,.5,1,5,1),Pa.translate(0,-.5,0)),this.position.copy(n),this.line=new Nt(oo,new je({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new We(Pa,new It({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{yh.set(e.z,0,-e.x).normalize();const n=Math.acos(e.y);this.quaternion.setFromAxisAngle(yh,n)}}setLength(e,n,i){n===void 0&&(n=.2*e),i===void 0&&(i=.2*n),this.line.scale.set(1,Math.max(1e-4,e-n),1),this.line.updateMatrix(),this.cone.scale.set(i,n,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}}class nd extends vt{constructor(e=1){const n=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new fe;r.setAttribute("position",new Q(n,3)),r.setAttribute("color",new Q(i,3));const s=new je({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}}const qi=4,Bn=8,Jt=Math.pow(2,Bn),id=[.125,.215,.35,.446,.526,.582],rd=Bn-qi+1+id.length,Fi=20,Qt={[gt]:0,[fs]:1,[qo]:2,[Pc]:3,[Ic]:4,[Dc]:5,[jo]:6},Ia=new sr,{_lodPlanes:Tr,_sizeLods:vh,_sigmas:ao}=Ox();let Da=null;const ei=(1+Math.sqrt(5))/2,zi=1/ei,xh=[new w(1,1,1),new w(-1,1,1),new w(1,1,-1),new w(-1,1,-1),new w(0,ei,zi),new w(0,ei,-zi),new w(zi,0,ei),new w(-zi,0,ei),new w(ei,zi,0),new w(-ei,zi,0)];class Nx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=Fx(Fi),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Da=this._renderer.getRenderTarget();const s=this._allocateTargets();return this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=wh(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=bh(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<Tr.length;e++)Tr[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(Da),e.scissorTest=!1,co(e,0,0,e.width,e.height)}_fromTexture(e){Da=this._renderer.getRenderTarget();const n=this._allocateTargets(e);return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(e){const n={magFilter:tt,minFilter:tt,generateMipmaps:!1,type:lr,format:mu,encoding:Bx(e)?e.encoding:qo,depthBuffer:!1},i=_h(n);return i.depthBuffer=!e,this._pingPongRenderTarget=_h(n),i}_compileMaterial(e){const n=new We(Tr[0],e);this._renderer.compile(n,Ia)}_sceneToCubeUV(e,n,i,r){const a=new Ke(90,1,n,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],d=this._renderer,h=d.outputEncoding,u=d.toneMapping,f=d.getClearColor(),p=d.getClearAlpha();d.toneMapping=ri,d.outputEncoding=gt;let y=e.background;if(y&&y.isColor){y.convertSRGBToLinear();const v=Math.max(y.r,y.g,y.b),g=Math.min(Math.max(Math.ceil(Math.log2(v)),-128),127);y=y.multiplyScalar(Math.pow(2,-g));const m=(g+128)/255;d.setClearColor(y,m),e.background=null}for(let v=0;v<6;v++){const g=v%3;g==0?(a.up.set(0,c[v],0),a.lookAt(l[v],0,0)):g==1?(a.up.set(0,0,c[v]),a.lookAt(0,l[v],0)):(a.up.set(0,c[v],0),a.lookAt(0,0,l[v])),co(r,g*Jt,v>2?Jt:0,Jt,Jt),d.setRenderTarget(r),d.render(e,a)}d.toneMapping=u,d.outputEncoding=h,d.setClearColor(f,p)}_textureToCubeUV(e,n){const i=this._renderer;e.isCubeTexture?this._cubemapShader==null&&(this._cubemapShader=wh()):this._equirectShader==null&&(this._equirectShader=bh());const r=e.isCubeTexture?this._cubemapShader:this._equirectShader,s=new We(Tr[0],r),o=r.uniforms;o.envMap.value=e,e.isCubeTexture||o.texelSize.value.set(1/e.image.width,1/e.image.height),o.inputEncoding.value=Qt[e.encoding],o.outputEncoding.value=Qt[n.texture.encoding],co(n,0,0,3*Jt,2*Jt),i.setRenderTarget(n),i.render(s,Ia)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<rd;r++){const s=Math.sqrt(ao[r]*ao[r]-ao[r-1]*ao[r-1]),o=xh[(r-1)%xh.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new We(Tr[r],l),u=l.uniforms,f=vh[i]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Fi-1),y=s/p,v=isFinite(s)?1+Math.floor(d*y):Fi;v>Fi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Fi}`);const g=[];let m=0;for(let x=0;x<Fi;++x){const A=x/y,I=Math.exp(-A*A/2);g.push(I),x==0?m+=I:x<v&&(m+=2*I)}for(let x=0;x<g.length;x++)g[x]=g[x]/m;u.envMap.value=e.texture,u.samples.value=v,u.weights.value=g,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a),u.dTheta.value=p,u.mipInt.value=Bn-i,u.inputEncoding.value=Qt[e.texture.encoding],u.outputEncoding.value=Qt[e.texture.encoding];const _=vh[r],b=3*Math.max(0,Jt-2*_),M=(r===0?0:2*Jt)+2*_*(r>Bn-qi?r-Bn+qi:0);co(n,b,M,3*_,2*_),c.setRenderTarget(n),c.render(h,Ia)}}function Bx(t){return t===void 0||t.type!==lr?!1:t.encoding===gt||t.encoding===fs||t.encoding===jo}function Ox(){const t=[],e=[],n=[];let i=Bn;for(let r=0;r<rd;r++){const s=Math.pow(2,i);e.push(s);let o=1/s;r>Bn-qi?o=id[r-Bn+qi-1]:r==0&&(o=0),n.push(o);const a=1/(s-1),c=-a/2,l=1+a/2,d=[c,c,l,c,l,l,c,c,l,l,c,l],h=6,u=6,f=3,p=2,y=1,v=new Float32Array(f*u*h),g=new Float32Array(p*u*h),m=new Float32Array(y*u*h);for(let b=0;b<h;b++){const M=b%3*2/3-1,x=b>2?0:-1,A=[M,x,0,M+2/3,x,0,M+2/3,x+1,0,M,x,0,M+2/3,x+1,0,M,x+1,0];v.set(A,f*u*b),g.set(d,p*u*b);const I=[b,b,b,b,b,b];m.set(I,y*u*b)}const _=new fe;_.setAttribute("position",new me(v,f)),_.setAttribute("uv",new me(g,p)),_.setAttribute("faceIndex",new me(m,y)),t.push(_),i>qi&&i--}return{_lodPlanes:t,_sizeLods:e,_sigmas:n}}function _h(t){const e=new Et(3*Jt,3*Jt,t);return e.texture.mapping=ar,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function co(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Fx(t){const e=new Float32Array(t),n=new w(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:t},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n},inputEncoding:{value:Qt[gt]},outputEncoding:{value:Qt[gt]}},vertexShader:hl(),fragmentShader:`

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

			${ul()}

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

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function bh(){const t=new H(1,1);return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:t},inputEncoding:{value:Qt[gt]},outputEncoding:{value:Qt[gt]}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${ul()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function wh(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:Qt[gt]},outputEncoding:{value:Qt[gt]}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${ul()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function hl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
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
	`}function ul(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}function zx(t,e,n,i,r,s,o){return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."),new Vr(t,e,n,r,s,o)}const Ux=0,Gx=1,Hx=0,Vx=1,kx=2;function Wx(t){return console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."),t}function jx(t){return t===void 0&&(t=[]),console.warn("THREE.MultiMaterial has been removed. Use an Array instead."),t.isMultiMaterial=!0,t.materials=t,t.clone=function(){return t.slice()},t}function qx(t,e){return console.warn("THREE.PointCloud has been renamed to THREE.Points."),new Qi(t,e)}function Xx(t){return console.warn("THREE.Particle has been renamed to THREE.Sprite."),new Zr(t)}function Yx(t,e){return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."),new Qi(t,e)}function Zx(t){return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."),new kt(t)}function Jx(t){return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."),new kt(t)}function $x(t){return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."),new kt(t)}function Qx(t,e,n){return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."),new w(t,e,n)}function Kx(t,e){return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setUsage( THREE.DynamicDrawUsage ) instead."),new me(t,e).setUsage(oi)}function e0(t,e){return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."),new kr(t,e)}function t0(t,e){return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."),new Wr(t,e)}function n0(t,e){return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."),new jr(t,e)}function i0(t,e){return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."),new qr(t,e)}function r0(t,e){return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."),new ai(t,e)}function s0(t,e){return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."),new Xr(t,e)}function o0(t,e){return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."),new ci(t,e)}function a0(t,e){return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."),new Q(t,e)}function c0(t,e){return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."),new Yr(t,e)}ue.create=function(t,e){return console.log("THREE.Curve.create() has been deprecated"),t.prototype=Object.create(ue.prototype),t.prototype.constructor=t,t.prototype.getPoint=e,t};Object.assign(mn.prototype,{createPointsGeometry:function(t){console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");const e=this.getPoints(t);return this.createGeometry(e)},createSpacedPointsGeometry:function(t){console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");const e=this.getSpacedPoints(t);return this.createGeometry(e)},createGeometry:function(t){console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");const e=new Fe;for(let n=0,i=t.length;n<i;n++){const r=t[n];e.vertices.push(new w(r.x,r.y,r.z||0))}return e}});Object.assign(Vt.prototype,{fromPoints:function(t){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(t)}});function sd(t){console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),ft.call(this,t),this.type="catmullrom",this.closed=!0}sd.prototype=Object.create(ft.prototype);function od(t){console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),ft.call(this,t),this.type="catmullrom"}od.prototype=Object.create(ft.prototype);function fl(t){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."),ft.call(this,t),this.type="catmullrom"}fl.prototype=Object.create(ft.prototype);Object.assign(fl.prototype,{initFromArray:function(){console.error("THREE.Spline: .initFromArray() has been removed.")},getControlPointsArray:function(){console.error("THREE.Spline: .getControlPointsArray() has been removed.")},reparametrizeByArcLength:function(){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")}});function l0(t){return console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper."),new nd(t)}function h0(t,e){return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."),new td(t,e)}function u0(t,e){return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."),new vt(new Uc(t.geometry),new je({color:e!==void 0?e:16777215}))}ed.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};Qf.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};function f0(t,e){return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."),new vt(new $c(t.geometry),new je({color:e!==void 0?e:16777215}))}Object.assign(Be.prototype,{extractUrlBase:function(t){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),el.extractUrlBase(t)}});Be.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};function d0(t){return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."),new Bt(t)}function p0(t){return console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."),new Po(t)}Object.assign(Jf.prototype,{center:function(t){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(t)},empty:function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(t){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},size:function(t){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(t)}});Object.assign(on.prototype,{center:function(t){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(t)},empty:function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(t){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},isIntersectionSphere:function(t){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(t)},size:function(t){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(t)}});Object.assign(bn.prototype,{empty:function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()}});ms.prototype.setFromMatrix=function(t){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(t)};$f.prototype.center=function(t){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(t)};Object.assign(xe,{random16:function(){return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."),Math.random()},nearestPowerOfTwo:function(t){return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."),xe.floorPowerOfTwo(t)},nextPowerOfTwo:function(t){return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."),xe.ceilPowerOfTwo(t)}});Object.assign(mt.prototype,{flattenToArrayOffset:function(t,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(t,e)},multiplyVector3:function(t){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),t.applyMatrix3(this)},multiplyVector3Array:function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},applyToBufferAttribute:function(t){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),t.applyMatrix3(this)},applyToVector3Array:function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")}});Object.assign(Ee.prototype,{extractPosition:function(t){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(t)},flattenToArrayOffset:function(t,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(t,e)},getPosition:function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new w().setFromMatrixColumn(this,3)},setRotationFromQuaternion:function(t){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(t)},multiplyToArray:function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},multiplyVector3:function(t){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},multiplyVector4:function(t){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},multiplyVector3Array:function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},rotateAxis:function(t){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),t.transformDirection(this)},crossVector:function(t){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},applyToBufferAttribute:function(t){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),t.applyMatrix4(this)},applyToVector3Array:function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},makeFrustum:function(t,e,n,i,r,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(t,e,i,n,r,s)}});$t.prototype.isIntersectionLine=function(t){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(t)};ht.prototype.multiplyVector3=function(t){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),t.applyQuaternion(this)};Object.assign(hr.prototype,{isIntersectionBox:function(t){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(t)},isIntersectionPlane:function(t){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(t)},isIntersectionSphere:function(t){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(t)}});Object.assign(ot.prototype,{area:function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},barycoordFromPoint:function(t,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(t,e)},midpoint:function(t){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(t)},normal:function(t){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(t)},plane:function(t){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(t)}});Object.assign(ot,{barycoordFromPoint:function(t,e,n,i,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),ot.getBarycoord(t,e,n,i,r)},normal:function(t,e,n,i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),ot.getNormal(t,e,n,i)}});Object.assign(Nn.prototype,{extractAllPoints:function(t){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(t)},extrude:function(t){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Gc(this,t)},makeGeometry:function(t){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new jc(this,t)}});Object.assign(H.prototype,{fromAttribute:function(t,e,n){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},distanceToManhattan:function(t){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(t)},lengthManhattan:function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(w.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(t){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(t)},getScaleFromMatrix:function(t){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(t)},getColumnFromMatrix:function(t,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,t)},applyProjection:function(t){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(t)},fromAttribute:function(t,e,n){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},distanceToManhattan:function(t){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(t)},lengthManhattan:function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(Oe.prototype,{fromAttribute:function(t,e,n){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(t,e,n)},lengthManhattan:function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(Fe.prototype,{computeTangents:function(){console.error("THREE.Geometry: .computeTangents() has been removed.")},computeLineDistances:function(){console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")},applyMatrix:function(t){return console.warn("THREE.Geometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(t)}});Object.assign(ae.prototype,{getChildByName:function(t){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(t)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},translate:function(t,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,t)},getWorldRotation:function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},applyMatrix:function(t){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(t)}});Object.defineProperties(ae.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(t){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=t}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Object.assign(We.prototype,{setDrawMode:function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}});Object.defineProperties(We.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),tf},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Object.defineProperties(Jr.prototype,{objects:{get:function(){return console.warn("THREE.LOD: .objects has been renamed to .levels."),this.levels}}});Object.defineProperty(bo.prototype,"useVertexTexture",{get:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")},set:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")}});_o.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Object.defineProperty(ue.prototype,"__arcLengthDivisions",{get:function(){return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions},set:function(t){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions=t}});Ke.prototype.setLens=function(t,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(t)};Object.defineProperties(Ve.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(t){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=t}},shadowCameraLeft:{set:function(t){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=t}},shadowCameraRight:{set:function(t){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=t}},shadowCameraTop:{set:function(t){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=t}},shadowCameraBottom:{set:function(t){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=t}},shadowCameraNear:{set:function(t){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=t}},shadowCameraFar:{set:function(t){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=t}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(t){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=t}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(t){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=t}},shadowMapHeight:{set:function(t){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=t}}});Object.defineProperties(me.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===oi},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(oi)}}});Object.assign(me.prototype,{setDynamic:function(t){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(t===!0?oi:ds),this},copyIndicesArray:function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},setArray:function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}});Object.assign(fe.prototype,{addIndex:function(t){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(t)},addAttribute:function(t,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(t,new me(arguments[1],arguments[2]))):t==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(t,e)},addDrawCall:function(t,e,n){n!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(t,e)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},computeTangents:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},removeAttribute:function(t){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(t)},applyMatrix:function(t){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(t)}});Object.defineProperties(fe.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Object.defineProperties(ss.prototype,{maxInstancedCount:{get:function(){return console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount},set:function(t){console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount=t}}});Object.defineProperties(ll.prototype,{linePrecision:{get:function(){return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold},set:function(t){console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold=t}}});Object.defineProperties(St.prototype,{dynamic:{get:function(){return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.usage===oi},set:function(t){console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.setUsage(t)}}});Object.assign(St.prototype,{setDynamic:function(t){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(t===!0?oi:ds),this},setArray:function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}});Object.assign(vs.prototype,{getArrays:function(){console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")},addShapeList:function(){console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")},addShape:function(){console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")}});Object.assign(Bc.prototype,{dispose:function(){console.error("THREE.Scene: .dispose() has been removed.")}});Object.defineProperties(Ko.prototype,{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")}},onUpdate:{value:function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this}}});Object.defineProperties(ge.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new re}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(t){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=t===Ec}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(t){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=t}}});Object.defineProperties(Wn.prototype,{metal:{get:function(){return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}});Object.defineProperties(kn.prototype,{transparency:{get:function(){return console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission},set:function(t){console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission=t}}});Object.defineProperties(yt.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(t){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=t}}});Object.assign(gs.prototype,{clearTarget:function(t,e,n,i){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(t),this.clear(e,n,i)},animate:function(t){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(t)},getCurrentRenderTarget:function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},getMaxAnisotropy:function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},getPrecision:function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},resetGLState:function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},supportsFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},supportsInstancedArrays:function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(t){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(t)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},setFaceCulling:function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},allocTextureUnit:function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},setTexture:function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},setTexture2D:function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},setTextureCube:function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},getActiveMipMapLevel:function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()}});Object.defineProperties(gs.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(t){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=t}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(t){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=t}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(t){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=t===!0?fs:gt}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(_f.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});function m0(t,e,n){return console.warn("THREE.WebGLRenderTargetCube( width, height, options ) is now WebGLCubeRenderTarget( size, options )."),new Fn(t,n)}Object.defineProperties(Et.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(t){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=t}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(t){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=t}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(t){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=t}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(t){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=t}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(t){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=t}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(t){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=t}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(t){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=t}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(t){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=t}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(t){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=t}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(t){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=t}}});Object.defineProperties(rl.prototype,{load:{value:function(t){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new Vo().load(t,function(i){e.setBuffer(i)}),this}},startTime:{set:function(){console.warn("THREE.Audio: .startTime is now .play( delay ).")}}});Xf.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()};Zi.prototype.updateCubeMap=function(t,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(t,e)};const g0={merge:function(t,e,n){console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");let i;e.isMesh&&(e.matrixAutoUpdate&&e.updateMatrix(),i=e.matrix,e=e.geometry),t.merge(e,i,n)},center:function(t){return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."),t.center()}};On.crossOrigin=void 0;On.loadTexture=function(t,e,n,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const r=new Io;r.setCrossOrigin(this.crossOrigin);const s=r.load(t,n,void 0,i);return e&&(s.mapping=e),s};On.loadTextureCube=function(t,e,n,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const r=new Co;r.setCrossOrigin(this.crossOrigin);const s=r.load(t,n,void 0,i);return e&&(s.mapping=e),s};On.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};On.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};function y0(){console.error("THREE.CanvasRenderer has been removed")}function v0(){console.error("THREE.JSONLoader has been removed.")}const x0={createMultiMaterialObject:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")},detach:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")},attach:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")}};function _0(){console.error("THREE.LensFlare has been moved to /examples/jsm/objects/Lensflare.js")}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ch}}));const b0=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:ru,AddEquation:ti,AddOperation:eu,AdditiveAnimationBlendMode:Cc,AdditiveBlending:Ha,AlphaFormat:fu,AlwaysDepth:Xh,AlwaysStencilFunc:af,AmbientLight:Fo,AmbientLightProbe:bc,AnimationClip:Ct,AnimationLoader:fc,AnimationMixer:wc,AnimationObjectGroup:Zf,AnimationUtils:ke,ArcCurve:rr,ArrayCamera:xo,ArrowHelper:Dx,Audio:rl,AudioAnalyser:Xf,AudioContext:il,AudioListener:hx,AudioLoader:Vo,AxesHelper:nd,AxisHelper:l0,BackSide:et,BasicDepthPacking:rf,BasicShadowMap:Fd,BinaryTextureLoader:p0,Bone:oc,BooleanKeyframeTrack:Eo,BoundingBoxHelper:h0,Box2:Jf,Box3:on,Box3Helper:Px,BoxBufferGeometry:ps,BoxGeometry:lc,BoxHelper:td,BufferAttribute:me,BufferGeometry:fe,BufferGeometryLoader:Ho,ByteType:ou,Cache:gi,Camera:Kt,CameraHelper:Cx,CanvasRenderer:y0,CanvasTexture:$r,CatmullRomCurve3:ft,CineonToneMapping:iu,CircleBufferGeometry:Oc,CircleGeometry:Sf,ClampToEdgeWrapping:pt,Clock:qf,ClosedSplineCurve3:sd,Color:re,ColorKeyframeTrack:Ao,CompressedTexture:Ki,CompressedTextureLoader:dc,ConeBufferGeometry:Ef,ConeGeometry:Tf,CubeCamera:Zi,CubeGeometry:lc,CubeReflectionMapping:ls,CubeRefractionMapping:hs,CubeTexture:en,CubeTextureLoader:Co,CubeUVReflectionMapping:ar,CubeUVRefractionMapping:us,CubicBezierCurve:Wt,CubicBezierCurve3:nn,CubicInterpolant:So,CullFaceBack:Ga,CullFaceFront:Ih,CullFaceFrontBack:Od,CullFaceNone:Ph,Curve:ue,CurvePath:mn,CustomBlending:Nh,CustomToneMapping:su,CylinderBufferGeometry:ys,CylinderGeometry:Fc,Cylindrical:Mx,DataTexture:li,DataTexture2DArray:Ji,DataTexture3D:$i,DataTextureLoader:Po,DecrementStencilOp:Yd,DecrementWrapStencilOp:Jd,DefaultLoadingManager:kf,DepthFormat:si,DepthStencilFormat:Xi,DepthTexture:Qr,DirectionalLight:Oo,DirectionalLightHelper:Rx,DiscreteInterpolant:To,DodecahedronBufferGeometry:zc,DodecahedronGeometry:Af,DoubleSide:as,DstAlphaFactor:Hh,DstColorFactor:kh,DynamicBufferAttribute:Kx,DynamicCopyUsage:hp,DynamicDrawUsage:oi,DynamicReadUsage:ap,EdgesGeometry:Uc,EdgesHelper:u0,EllipseCurve:Rt,EqualDepth:Zh,EqualStencilFunc:ep,EquirectangularReflectionMapping:mo,EquirectangularRefractionMapping:go,Euler:ur,EventDispatcher:sn,ExtrudeBufferGeometry:vs,ExtrudeGeometry:Gc,Face3:Vr,Face4:zx,FaceColors:Vx,FileLoader:Bt,FlatShading:Ec,Float32Attribute:a0,Float32BufferAttribute:Q,Float64Attribute:c0,Float64BufferAttribute:Yr,FloatType:pn,Fog:Zo,FogExp2:Yo,Font:nl,FontLoader:xc,FrontSide:or,Frustum:ms,GLBufferAttribute:cl,GLSL1:fp,GLSL3:nc,GammaEncoding:jo,Geometry:Fe,GeometryUtils:g0,GreaterDepth:$h,GreaterEqualDepth:Jh,GreaterEqualStencilFunc:rp,GreaterStencilFunc:np,GridHelper:ed,Group:Pn,HalfFloatType:Ur,HemisphereLight:Do,HemisphereLightHelper:Ax,HemisphereLightProbe:_c,IcosahedronBufferGeometry:Hc,IcosahedronGeometry:Pf,ImageBitmapLoader:vc,ImageLoader:ir,ImageUtils:On,ImmediateRenderObject:os,IncrementStencilOp:Xd,IncrementWrapStencilOp:Zd,InstancedBufferAttribute:Go,InstancedBufferGeometry:ss,InstancedInterleavedBuffer:Mc,InstancedMesh:wo,Int16Attribute:i0,Int16BufferAttribute:qr,Int32Attribute:s0,Int32BufferAttribute:Xr,Int8Attribute:e0,Int8BufferAttribute:kr,IntType:cu,InterleavedBuffer:St,InterleavedBufferAttribute:Gn,Interpolant:At,InterpolateDiscrete:Gr,InterpolateLinear:Cr,InterpolateSmooth:uo,InvertStencilOp:$d,JSONLoader:v0,KeepStencilOp:fo,KeyframeTrack:at,LOD:Jr,LatheBufferGeometry:Vc,LatheGeometry:If,Layers:Nc,LensFlare:_0,LessDepth:Yh,LessEqualDepth:po,LessEqualStencilFunc:tp,LessStencilFunc:Kd,Light:Ve,LightProbe:Pt,Line:Nt,Line3:$f,LineBasicMaterial:je,LineCurve:bt,LineCurve3:jt,LineDashedMaterial:mi,LineLoop:Mo,LinePieces:Gx,LineSegments:vt,LineStrip:Ux,LinearEncoding:gt,LinearFilter:rt,LinearInterpolant:is,LinearMipMapLinearFilter:Vd,LinearMipMapNearestFilter:Hd,LinearMipmapLinearFilter:cr,LinearMipmapNearestFilter:Rc,LinearToneMapping:tu,Loader:Be,LoaderUtils:el,LoadingManager:Qc,LogLuvEncoding:nf,LoopOnce:Qu,LoopPingPong:ef,LoopRepeat:Ku,LuminanceAlphaFormat:pu,LuminanceFormat:du,MOUSE:Nd,Material:ge,MaterialLoader:Uo,Math:xe,MathUtils:xe,Matrix3:mt,Matrix4:Ee,MaxEquation:ja,Mesh:We,MeshBasicMaterial:It,MeshDepthMaterial:zn,MeshDistanceMaterial:Un,MeshFaceMaterial:Wx,MeshLambertMaterial:di,MeshMatcapMaterial:pi,MeshNormalMaterial:fi,MeshPhongMaterial:Wn,MeshPhysicalMaterial:kn,MeshStandardMaterial:tn,MeshToonMaterial:ui,MinEquation:Wa,MirroredRepeatWrapping:Fr,MixOperation:Kh,MultiMaterial:jx,MultiplyBlending:ka,MultiplyOperation:cs,NearestFilter:tt,NearestMipMapLinearFilter:Gd,NearestMipMapNearestFilter:Ud,NearestMipmapLinearFilter:vo,NearestMipmapNearestFilter:yo,NeverDepth:qh,NeverStencilFunc:Qd,NoBlending:yn,NoColors:Hx,NoToneMapping:ri,NormalAnimationBlendMode:Wo,NormalBlending:Wi,NotEqualDepth:Qh,NotEqualStencilFunc:ip,NumberKeyframeTrack:tr,Object3D:ae,ObjectLoader:sx,ObjectSpaceNormalMap:of,OctahedronBufferGeometry:$o,OctahedronGeometry:Df,OneFactor:zh,OneMinusDstAlphaFactor:Vh,OneMinusDstColorFactor:Wh,OneMinusSrcAlphaFactor:Lc,OneMinusSrcColorFactor:Gh,OrthographicCamera:sr,PCFShadowMap:Tc,PCFSoftShadowMap:Dh,PMREMGenerator:Nx,ParametricBufferGeometry:er,ParametricGeometry:ns,Particle:Xx,ParticleBasicMaterial:Jx,ParticleSystem:Yx,ParticleSystemMaterial:$x,Path:Vt,PerspectiveCamera:Ke,Plane:$t,PlaneBufferGeometry:Xo,PlaneGeometry:Nf,PlaneHelper:Ix,PointCloud:qx,PointCloudMaterial:Zx,PointLight:Bo,PointLightHelper:Tx,Points:Qi,PointsMaterial:kt,PolarGridHelper:Lx,PolyhedronBufferGeometry:vi,PolyhedronGeometry:Bf,PositionalAudio:fx,PropertyBinding:ut,PropertyMixer:sl,QuadraticBezierCurve:qt,QuadraticBezierCurve3:rn,Quaternion:ht,QuaternionKeyframeTrack:rs,QuaternionLinearInterpolant:Lo,REVISION:Ch,RGBADepthPacking:sf,RGBAFormat:Tt,RGBAIntegerFormat:bu,RGBA_ASTC_10x10_Format:Nu,RGBA_ASTC_10x5_Format:Pu,RGBA_ASTC_10x6_Format:Iu,RGBA_ASTC_10x8_Format:Du,RGBA_ASTC_12x10_Format:Bu,RGBA_ASTC_12x12_Format:Ou,RGBA_ASTC_4x4_Format:Mu,RGBA_ASTC_5x4_Format:Su,RGBA_ASTC_5x5_Format:Tu,RGBA_ASTC_6x5_Format:Eu,RGBA_ASTC_6x6_Format:Au,RGBA_ASTC_8x5_Format:Lu,RGBA_ASTC_8x6_Format:Ru,RGBA_ASTC_8x8_Format:Cu,RGBA_BPTC_Format:Fu,RGBA_ETC2_EAC_Format:tc,RGBA_PVRTC_2BPPV1_Format:Ka,RGBA_PVRTC_4BPPV1_Format:Qa,RGBA_S3TC_DXT1_Format:Xa,RGBA_S3TC_DXT3_Format:Ya,RGBA_S3TC_DXT5_Format:Za,RGBDEncoding:Dc,RGBEEncoding:qo,RGBEFormat:mu,RGBFormat:In,RGBIntegerFormat:_u,RGBM16Encoding:Ic,RGBM7Encoding:Pc,RGB_ETC1_Format:wu,RGB_ETC2_Format:ec,RGB_PVRTC_2BPPV1_Format:$a,RGB_PVRTC_4BPPV1_Format:Ja,RGB_S3TC_DXT1_Format:qa,RGFormat:vu,RGIntegerFormat:xu,RawShaderMaterial:xn,Ray:hr,Raycaster:ll,RectAreaLight:zo,RedFormat:gu,RedIntegerFormat:yu,ReinhardToneMapping:nu,RepeatWrapping:Or,ReplaceStencilOp:qd,ReverseSubtractEquation:Oh,RingBufferGeometry:kc,RingGeometry:Of,SRGB8_ALPHA8_ASTC_10x10_Format:Zu,SRGB8_ALPHA8_ASTC_10x5_Format:qu,SRGB8_ALPHA8_ASTC_10x6_Format:Xu,SRGB8_ALPHA8_ASTC_10x8_Format:Yu,SRGB8_ALPHA8_ASTC_12x10_Format:Ju,SRGB8_ALPHA8_ASTC_12x12_Format:$u,SRGB8_ALPHA8_ASTC_4x4_Format:zu,SRGB8_ALPHA8_ASTC_5x4_Format:Uu,SRGB8_ALPHA8_ASTC_5x5_Format:Gu,SRGB8_ALPHA8_ASTC_6x5_Format:Hu,SRGB8_ALPHA8_ASTC_6x6_Format:Vu,SRGB8_ALPHA8_ASTC_8x5_Format:ku,SRGB8_ALPHA8_ASTC_8x6_Format:Wu,SRGB8_ALPHA8_ASTC_8x8_Format:ju,Scene:Bc,SceneUtils:x0,ShaderChunk:Ce,ShaderLib:Ht,ShaderMaterial:yt,ShadowMaterial:hi,Shape:Nn,ShapeBufferGeometry:Wc,ShapeGeometry:jc,ShapePath:tl,ShapeUtils:vn,ShortType:au,Skeleton:bo,SkeletonHelper:Qf,SkinnedMesh:_o,SmoothShading:zd,Sphere:bn,SphereBufferGeometry:Qo,SphereGeometry:Ff,Spherical:wx,SphericalHarmonics3:Wf,Spline:fl,SplineCurve:Xt,SplineCurve3:od,SpotLight:No,SpotLightHelper:Sx,Sprite:Zr,SpriteMaterial:Hn,SrcAlphaFactor:Ac,SrcAlphaSaturateFactor:jh,SrcColorFactor:Uh,StaticCopyUsage:lp,StaticDrawUsage:ds,StaticReadUsage:op,StereoCamera:jf,StreamCopyUsage:up,StreamDrawUsage:sp,StreamReadUsage:cp,StringKeyframeTrack:Ro,SubtractEquation:Bh,SubtractiveBlending:Va,TOUCH:Bd,TangentSpaceNormalMap:yi,TetrahedronBufferGeometry:qc,TetrahedronGeometry:zf,TextBufferGeometry:Xc,TextGeometry:Uf,Texture:ze,TextureLoader:Io,TorusBufferGeometry:Yc,TorusGeometry:Gf,TorusKnotBufferGeometry:Zc,TorusKnotGeometry:Hf,Triangle:ot,TriangleFanDrawMode:Wd,TriangleStripDrawMode:kd,TrianglesDrawMode:tf,TubeBufferGeometry:Jc,TubeGeometry:Vf,UVMapping:ko,Uint16Attribute:r0,Uint16BufferAttribute:ai,Uint32Attribute:o0,Uint32BufferAttribute:ci,Uint8Attribute:t0,Uint8BufferAttribute:Wr,Uint8ClampedAttribute:n0,Uint8ClampedBufferAttribute:jr,Uniform:Ko,UniformsLib:ee,UniformsUtils:uf,UnsignedByteType:lr,UnsignedInt248Type:ji,UnsignedIntType:Rr,UnsignedShort4444Type:lu,UnsignedShort5551Type:hu,UnsignedShort565Type:uu,UnsignedShortType:zr,VSMShadowMap:Ui,Vector2:H,Vector3:w,Vector4:Oe,VectorKeyframeTrack:nr,Vertex:Qx,VertexColors:kx,VideoTexture:cc,WebGL1Renderer:sc,WebGLCubeRenderTarget:Fn,WebGLMultisampleRenderTarget:ic,WebGLRenderTarget:Et,WebGLRenderTargetCube:m0,WebGLRenderer:gs,WebGLUtils:bf,WireframeGeometry:$c,WireframeHelper:f0,WrapAroundEnding:Hr,XHRLoader:d0,ZeroCurvatureEnding:ni,ZeroFactor:Fh,ZeroSlopeEnding:ii,ZeroStencilOp:jd,sRGBEncoding:fs},Symbol.toStringTag,{value:"Module"}));Number.prototype.clamp=function(t,e){return Math.min(Math.max(this,t),e)};function ad(){return typeof navigator<"u"?/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<600:null}const w0=t=>document.querySelector(t),M0=t=>typeof t=="number"?"#"+("00000"+t.toString(16)).slice(-6):t;function cd(t){for(;t.children&&t.children.length>0;)cd(t.children[0]),t.remove(t.children[0]);t.geometry&&t.geometry.dispose(),t.material&&(Object.keys(t.material).forEach(e=>{t.material[e]&&t.material[e]!==null&&typeof t.material[e].dispose=="function"&&t.material[e].dispose()}),t.material.dispose())}const ea=typeof window=="object";let lo=ea&&window.THREE||{};ea&&!window.VANTA&&(window.VANTA={});const gn=ea&&window.VANTA||{};gn.register=(t,e)=>gn[t]=n=>new e(n);gn.version="0.5.24";const Na=function(){return Array.prototype.unshift.call(arguments,"[VANTA]"),console.error.apply(this,arguments)};gn.VantaBase=class{constructor(e={}){if(!ea)return!1;gn.current=this,this.windowMouseMoveWrapper=this.windowMouseMoveWrapper.bind(this),this.windowTouchWrapper=this.windowTouchWrapper.bind(this),this.windowGyroWrapper=this.windowGyroWrapper.bind(this),this.resize=this.resize.bind(this),this.animationLoop=this.animationLoop.bind(this),this.restart=this.restart.bind(this);const n=typeof this.getDefaultOptions=="function"?this.getDefaultOptions():this.defaultOptions;if(this.options=Object.assign({mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1},n),(e instanceof HTMLElement||typeof e=="string")&&(e={el:e}),Object.assign(this.options,e),this.options.THREE&&(lo=this.options.THREE),this.el=this.options.el,this.el==null)Na('Instance needs "el" param!');else if(!(this.options.el instanceof HTMLElement)){const r=this.el;if(this.el=w0(r),!this.el){Na("Cannot find element",r);return}}this.prepareEl(),this.initThree(),this.setSize();try{this.init()}catch(r){Na("Init error",r),this.renderer&&this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),this.options.backgroundColor&&(console.log("[VANTA] Falling back to backgroundColor"),this.el.style.background=M0(this.options.backgroundColor));return}this.initMouse(),this.resize(),this.animationLoop();const i=window.addEventListener;i("resize",this.resize),window.requestAnimationFrame(this.resize),this.options.mouseControls&&(i("scroll",this.windowMouseMoveWrapper),i("mousemove",this.windowMouseMoveWrapper)),this.options.touchControls&&(i("touchstart",this.windowTouchWrapper),i("touchmove",this.windowTouchWrapper)),this.options.gyroControls&&i("deviceorientation",this.windowGyroWrapper)}setOptions(e={}){Object.assign(this.options,e),this.triggerMouseMove()}prepareEl(){let e,n;if(typeof Node<"u"&&Node.TEXT_NODE)for(e=0;e<this.el.childNodes.length;e++){const i=this.el.childNodes[e];if(i.nodeType===Node.TEXT_NODE){const r=document.createElement("span");r.textContent=i.textContent,i.parentElement.insertBefore(r,i),i.remove()}}for(e=0;e<this.el.children.length;e++)n=this.el.children[e],getComputedStyle(n).position==="static"&&(n.style.position="relative"),getComputedStyle(n).zIndex==="auto"&&(n.style.zIndex=1);getComputedStyle(this.el).position==="static"&&(this.el.style.position="relative")}applyCanvasStyles(e,n={}){Object.assign(e.style,{position:"absolute",zIndex:0,top:0,left:0,background:""}),Object.assign(e.style,n),e.classList.add("vanta-canvas")}initThree(){if(!lo.WebGLRenderer){console.warn("[VANTA] No THREE defined on window");return}this.renderer=new lo.WebGLRenderer({alpha:!0,antialias:!0}),this.el.appendChild(this.renderer.domElement),this.applyCanvasStyles(this.renderer.domElement),isNaN(this.options.backgroundAlpha)&&(this.options.backgroundAlpha=1),this.scene=new lo.Scene}getCanvasElement(){if(this.renderer)return this.renderer.domElement;if(this.p5renderer)return this.p5renderer.canvas}getCanvasRect(){const e=this.getCanvasElement();return e?e.getBoundingClientRect():!1}windowMouseMoveWrapper(e){const n=this.getCanvasRect();if(!n)return!1;const i=e.clientX-n.left,r=e.clientY-n.top;i>=0&&r>=0&&i<=n.width&&r<=n.height&&(this.mouseX=i,this.mouseY=r,this.options.mouseEase||this.triggerMouseMove(i,r))}windowTouchWrapper(e){const n=this.getCanvasRect();if(!n)return!1;if(e.touches.length===1){const i=e.touches[0].clientX-n.left,r=e.touches[0].clientY-n.top;i>=0&&r>=0&&i<=n.width&&r<=n.height&&(this.mouseX=i,this.mouseY=r,this.options.mouseEase||this.triggerMouseMove(i,r))}}windowGyroWrapper(e){const n=this.getCanvasRect();if(!n)return!1;const i=Math.round(e.alpha*2)-n.left,r=Math.round(e.beta*2)-n.top;i>=0&&r>=0&&i<=n.width&&r<=n.height&&(this.mouseX=i,this.mouseY=r,this.options.mouseEase||this.triggerMouseMove(i,r))}triggerMouseMove(e,n){e===void 0&&n===void 0&&(this.options.mouseEase?(e=this.mouseEaseX,n=this.mouseEaseY):(e=this.mouseX,n=this.mouseY)),this.uniforms&&(this.uniforms.iMouse.value.x=e/this.scale,this.uniforms.iMouse.value.y=n/this.scale);const i=e/this.width,r=n/this.height;typeof this.onMouseMove=="function"&&this.onMouseMove(i,r)}setSize(){this.scale||(this.scale=1),ad()&&this.options.scaleMobile?this.scale=this.options.scaleMobile:this.options.scale&&(this.scale=this.options.scale),this.width=Math.max(this.el.offsetWidth,this.options.minWidth),this.height=Math.max(this.el.offsetHeight,this.options.minHeight)}initMouse(){(!this.mouseX&&!this.mouseY||this.mouseX===this.options.minWidth/2&&this.mouseY===this.options.minHeight/2)&&(this.mouseX=this.width/2,this.mouseY=this.height/2,this.triggerMouseMove(this.mouseX,this.mouseY))}resize(){this.setSize(),this.camera&&(this.camera.aspect=this.width/this.height,typeof this.camera.updateProjectionMatrix=="function"&&this.camera.updateProjectionMatrix()),this.renderer&&(this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(window.devicePixelRatio/this.scale)),typeof this.onResize=="function"&&this.onResize()}isOnScreen(){const e=this.el.offsetHeight,n=this.el.getBoundingClientRect(),i=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop,r=n.top+i,s=r-window.innerHeight,o=r+e;return s<=i&&i<=o}animationLoop(){this.t||(this.t=0),this.t2||(this.t2=0);const e=performance.now();if(this.prevNow){let n=(e-this.prevNow)/16.666666666666668;n=Math.max(.2,Math.min(n,5)),this.t+=n,this.t2+=(this.options.speed||1)*n,this.uniforms&&(this.uniforms.iTime.value=this.t2*.016667)}return this.prevNow=e,this.options.mouseEase&&(this.mouseEaseX=this.mouseEaseX||this.mouseX||0,this.mouseEaseY=this.mouseEaseY||this.mouseY||0,Math.abs(this.mouseEaseX-this.mouseX)+Math.abs(this.mouseEaseY-this.mouseY)>.1&&(this.mouseEaseX+=(this.mouseX-this.mouseEaseX)*.05,this.mouseEaseY+=(this.mouseY-this.mouseEaseY)*.05,this.triggerMouseMove(this.mouseEaseX,this.mouseEaseY))),(this.isOnScreen()||this.options.forceAnimate)&&(typeof this.onUpdate=="function"&&this.onUpdate(),this.scene&&this.camera&&(this.renderer.render(this.scene,this.camera),this.renderer.setClearColor(this.options.backgroundColor,this.options.backgroundAlpha)),this.fps&&this.fps.update&&this.fps.update(),typeof this.afterRender=="function"&&this.afterRender()),this.req=window.requestAnimationFrame(this.animationLoop)}restart(){if(this.scene)for(;this.scene.children.length;)this.scene.remove(this.scene.children[0]);typeof this.onRestart=="function"&&this.onRestart(),this.init()}init(){typeof this.onInit=="function"&&this.onInit()}destroy(){typeof this.onDestroy=="function"&&this.onDestroy();const e=window.removeEventListener;e("touchstart",this.windowTouchWrapper),e("touchmove",this.windowTouchWrapper),e("scroll",this.windowMouseMoveWrapper),e("mousemove",this.windowMouseMoveWrapper),e("deviceorientation",this.windowGyroWrapper),e("resize",this.resize),window.cancelAnimationFrame(this.req);const n=this.scene;n&&n.children&&cd(n),this.renderer&&(this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),this.renderer=null,this.scene=null),gn.current===this&&(gn.current=null)}};const S0=gn.VantaBase,T0=typeof window=="object";let E0=T0&&window.THREE,{Camera:Mh,ClampToEdgeWrapping:Ba,DataTexture:Sh,FloatType:Oa,Mesh:Th,NearestFilter:Er,PlaneBufferGeometry:Eh,RGBAFormat:Fa,Scene:Ah,ShaderMaterial:Lh,WebGLRenderTarget:Rh}=E0||{};var A0=function(t,e,n,i){i&&({Camera:Mh,ClampToEdgeWrapping:Ba,DataTexture:Sh,FloatType:Oa,Mesh:Th,NearestFilter:Er,PlaneBufferGeometry:Eh,RGBAFormat:Fa,Scene:Ah,ShaderMaterial:Lh,WebGLRenderTarget:Rh}=i),this.variables=[],this.currentTextureIndex=0;var r=Oa,s=new Ah,o=new Mh;o.position.z=1;var a={passThruTexture:{value:null}},c=h(f(),a),l=new Th(new Eh(2,2),c);s.add(l),this.setDataType=function(p){return r=p,this},this.addVariable=function(p,y,v){var g=this.createShaderMaterial(y),m={name:p,initialValueTexture:v,material:g,dependencies:null,renderTargets:[],wrapS:null,wrapT:null,minFilter:Er,magFilter:Er};return this.variables.push(m),m},this.setVariableDependencies=function(p,y){p.dependencies=y},this.init=function(){if(!n.capabilities.isWebGL2&&!n.extensions.get("OES_texture_float"))return"No OES_texture_float support for float textures.";if(n.capabilities.maxVertexTextures===0)return"No support for vertex shader textures.";for(var p=0;p<this.variables.length;p++){var y=this.variables[p];y.renderTargets[0]=this.createRenderTarget(t,e,y.wrapS,y.wrapT,y.minFilter,y.magFilter),y.renderTargets[1]=this.createRenderTarget(t,e,y.wrapS,y.wrapT,y.minFilter,y.magFilter),this.renderTexture(y.initialValueTexture,y.renderTargets[0]),this.renderTexture(y.initialValueTexture,y.renderTargets[1]);var v=y.material,g=v.uniforms;if(y.dependencies!==null)for(var m=0;m<y.dependencies.length;m++){var _=y.dependencies[m];if(_.name!==y.name){for(var b=!1,M=0;M<this.variables.length;M++)if(_.name===this.variables[M].name){b=!0;break}if(!b)return"Variable dependency not found. Variable="+y.name+", dependency="+_.name}g[_.name]={value:null},v.fragmentShader=`
uniform sampler2D `+_.name+`;
`+v.fragmentShader}}return this.currentTextureIndex=0,null},this.compute=function(){for(var p=this.currentTextureIndex,y=this.currentTextureIndex===0?1:0,v=0,g=this.variables.length;v<g;v++){var m=this.variables[v];if(m.dependencies!==null)for(var _=m.material.uniforms,b=0,M=m.dependencies.length;b<M;b++){var x=m.dependencies[b];_[x.name].value=x.renderTargets[p].texture}this.doRenderTarget(m.material,m.renderTargets[y])}this.currentTextureIndex=y},this.getCurrentRenderTarget=function(p){return p.renderTargets[this.currentTextureIndex]},this.getAlternateRenderTarget=function(p){return p.renderTargets[this.currentTextureIndex===0?1:0]};function d(p){p.defines.resolution="vec2( "+t.toFixed(1)+", "+e.toFixed(1)+" )"}this.addResolutionDefine=d;function h(p,y){y=y||{};var v=new Lh({uniforms:y,vertexShader:u(),fragmentShader:p});return d(v),v}this.createShaderMaterial=h,this.createRenderTarget=function(p,y,v,g,m,_){p=p||t,y=y||e,v=v||Ba,g=g||Ba,m=m||Er,_=_||Er;var b=new Rh(p,y,{wrapS:v,wrapT:g,minFilter:m,magFilter:_,format:Fa,type:r,stencilBuffer:!1,depthBuffer:!1});return b},this.createTexture=function(){var p=new Float32Array(t*e*4);return new Sh(p,t,e,Fa,Oa)},this.renderTexture=function(p,y){a.passThruTexture.value=p,this.doRenderTarget(c,y),a.passThruTexture.value=null},this.doRenderTarget=function(p,y){var v=n.getRenderTarget();l.material=p,n.setRenderTarget(y),n.render(s,o),l.material=c,n.setRenderTarget(v)};function u(){return`void main()	{

	gl_Position = vec4( position, 1.0 );

}
`}function f(){return`uniform sampler2D passThruTexture;

void main() {

	vec2 uv = gl_FragCoord.xy / resolution.xy;

	gl_FragColor = texture2D( passThruTexture, uv );

}
`}};const L0=typeof window=="object";let _e=L0&&window.THREE;const za=!ad();let Gt=32,ho=Gt*Gt;const Br=800,Ua=Br/2,R0=t=>{const e=new _e.BufferGeometry;t.quantity&&(Gt=Math.pow(2,t.quantity),ho=Gt*Gt);const n=ho*3,i=n*3,r=new _e.BufferAttribute(new Float32Array(i*3),3),s=new _e.BufferAttribute(new Float32Array(i*3),3),o=new _e.BufferAttribute(new Float32Array(i*2),2),a=new _e.BufferAttribute(new Float32Array(i),1);e.setAttribute||(e.setAttribute=e.addAttribute),e.setAttribute("position",r),e.setAttribute("birdColor",s),e.setAttribute("reference",o),e.setAttribute("birdVertex",a);let c=0;const l=function(){for(let f=0;f<arguments.length;f++)r.array[c++]=arguments[f]},d=t.wingSpan||20,h=t.birdSize||1;for(let f=0;f<ho;f++)l(0,-0,-20*h,0,4*h,-20*h,0,0,30*h),l(0,0,-15*h,-d*h,0,0,0,0,15*h),l(0,0,15*h,d*h,0,0,0,0,-15*h);const u={};for(c=0;c<n*3;c++){const f=~~(c/3),p=f%Gt/Gt,y=~~(f/Gt)/Gt,v=~~(c/9)/ho,g=v.toString(),m=t.colorMode.indexOf("Gradient")!=-1;let _;!m&&u[g]?_=u[g]:_=t.effect.getNewCol(v),!m&&!u[g]&&(u[g]=_),s.array[c*3+0]=_.r,s.array[c*3+1]=_.g,s.array[c*3+2]=_.b,o.array[c*2]=p,o.array[c*2+1]=y,a.array[c]=c%9}return e.scale(.2,.2,.2)},C0=(t={})=>{const e=new _e.BufferGeometry,n=[];function i(s,o,a){const c=1.5*(t.birdSize||1);n.push(new _e.Vector3(s*c,o*c,a*c))}i(5,0,0),i(-5,-1,1),i(-5,0,0),i(-5,-2,-1),i(0,2,-6),i(0,2,6),i(2,0,0),i(-3,0,0),e.setFromPoints(n);const r=[];return r.push(0,2,1),r.push(4,7,6),r.push(5,6,7),e.setIndex(r),e};class P0{constructor(e){var n=new _e.Vector3,i,r=500,s=500,o=200,a,c=100,l=2.5,d=.1,h=e;this.position=new _e.Vector3,this.velocity=new _e.Vector3,i=new _e.Vector3,this.setGoal=function(u){a=u},this.setWorldSize=function(u,f,p){r=u,s=f,o=p},this.run=function(u){n.set(-r,this.position.y,this.position.z),n=this.avoid(n),n.multiplyScalar(5),i.add(n),n.set(r,this.position.y,this.position.z),n=this.avoid(n),n.multiplyScalar(5),i.add(n),n.set(this.position.x,-s,this.position.z),n=this.avoid(n),n.multiplyScalar(5),i.add(n),n.set(this.position.x,s,this.position.z),n=this.avoid(n),n.multiplyScalar(5),i.add(n),n.set(this.position.x,this.position.y,-o),n=this.avoid(n),n.multiplyScalar(5),i.add(n),n.set(this.position.x,this.position.y,o),n=this.avoid(n),n.multiplyScalar(5),i.add(n),Math.random()>.5&&this.flock(u),this.move()},this.flock=function(u){a&&i.add(this.reach(a,.005)),i.add(this.alignment(u)),i.add(this.cohesion(u)),i.add(this.separation(u))},this.move=function(){this.velocity.add(i);var u=this.velocity.length();u>l&&this.velocity.divideScalar(u/l),this.position.add(this.velocity),i.set(0,0,0)},this.checkBounds=function(){this.position.x>r&&(this.position.x=-r),this.position.x<-r&&(this.position.x=r),this.position.y>s&&(this.position.y=-s),this.position.y<-s&&(this.position.y=s),this.position.z>o&&(this.position.z=-o),this.position.z<-o&&(this.position.z=o)},this.avoid=function(u){var f=new _e.Vector3;return f.copy(this.position),f.sub(u),f.multiplyScalar(1/this.position.distanceToSquared(u)),f},this.repulse=function(u){var f=this.position.distanceTo(u);if(f<150){var p=new _e.Vector3;p.subVectors(this.position,u),p.multiplyScalar(.5/f),i.add(p)}},this.reach=function(u,f){var p=new _e.Vector3;return p.subVectors(u,this.position),p.multiplyScalar(f),p},this.alignment=function(u){var f,p=new _e.Vector3,y=0,v;const g=c*h.alignment/20;for(var m=0,_=u.length;m<_;m++)Math.random()>.6||(f=u[m],v=f.position.distanceTo(this.position),v>0&&v<=g&&(p.add(f.velocity),y++));if(y>0){p.divideScalar(y);var b=p.length();b>d&&p.divideScalar(b/d)}return p},this.cohesion=function(u){var f,p,y=new _e.Vector3,v=new _e.Vector3,g=0;const m=c*h.cohesion/20;for(var _=0,b=u.length;_<b;_++)Math.random()>.6||(f=u[_],p=f.position.distanceTo(this.position),p>0&&p<=m&&(y.add(f.position),g++));g>0&&y.divideScalar(g),v.subVectors(y,this.position);var M=v.length();return M>d&&v.divideScalar(M/d),v},this.separation=function(u){var f,p,y=new _e.Vector3,v=new _e.Vector3;const g=c*h.separation/20;for(var m=0,_=u.length;m<_;m++)Math.random()>.6||(f=u[m],p=f.position.distanceTo(this.position),p>0&&p<=g&&(v.subVectors(this.position,f.position),v.normalize(),v.divideScalar(p),y.add(v)));return y}}}const I0=`uniform float time;
uniform float delta;

void main() {

  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec4 tmpPos = texture2D( texturePosition, uv );
  vec3 position = tmpPos.xyz;
  vec3 velocity = texture2D( textureVelocity, uv ).xyz;

  float phase = tmpPos.w;

  phase = mod( ( phase + delta +
    length( velocity.xz ) * delta * 3. +
    max( velocity.y, 0.0 ) * delta * 6. ), 62.83 );

  gl_FragColor = vec4( position + velocity * delta * 15. , phase );

}`,D0=`uniform float time;
uniform float testing;
uniform float delta; // about 0.016
uniform float separationDistance; // 20
uniform float alignmentDistance; // 40
uniform float cohesionDistance;
uniform float speedLimit;
uniform float freedomFactor;
uniform vec3 predator;

const float width = resolution.x;
const float height = resolution.y;

const float PI = 3.141592653589793;
const float PI_2 = PI * 2.0;
// const float VISION = PI * 0.55;

float zoneRadius = 40.0;
float zoneRadiusSquared = 1600.0;

float separationThresh = 0.45;
float alignmentThresh = 0.65;

const float UPPER_BOUNDS = BOUNDS;
const float LOWER_BOUNDS = -UPPER_BOUNDS;

float rand(vec2 co){
  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

void main() {

  zoneRadius = separationDistance + alignmentDistance + cohesionDistance;
  separationThresh = separationDistance / zoneRadius;
  alignmentThresh = ( separationDistance + alignmentDistance ) / zoneRadius;
  zoneRadiusSquared = zoneRadius * zoneRadius;


  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec3 birdPosition, birdVelocity;

  vec3 selfPosition = texture2D( texturePosition, uv ).xyz;
  vec3 selfVelocity = texture2D( textureVelocity, uv ).xyz;

  float dist;
  vec3 dir; // direction
  float distSquared;

  float separationSquared = separationDistance * separationDistance;
  float cohesionSquared = cohesionDistance * cohesionDistance;

  float f;
  float percent;

  vec3 velocity = selfVelocity;

  float limit = speedLimit;

  dir = predator * UPPER_BOUNDS - selfPosition;
  dir.z = 0.;
  // dir.z *= 0.6;
  dist = length( dir );
  distSquared = dist * dist;

  float preyRadius = 150.0;
  float preyRadiusSq = preyRadius * preyRadius;

  // move birds away from predator
  if (dist < preyRadius) {

    f = ( distSquared / preyRadiusSq - 1.0 ) * delta * 100.;
    velocity += normalize( dir ) * f;
    limit += 5.0;
  }

  // if (testing == 0.0) {}
  // if ( rand( uv + time ) < freedomFactor ) {}

  // Attract flocks to the center
  vec3 central = vec3( 0., 0., 0. );
  dir = selfPosition - central;
  dist = length( dir );

  dir.y *= 2.5;
  velocity -= normalize( dir ) * delta * 5.;

  for (float y=0.0;y<height;y++) {
    for (float x=0.0;x<width;x++) {

      vec2 ref = vec2( x + 0.5, y + 0.5 ) / resolution.xy;
      birdPosition = texture2D( texturePosition, ref ).xyz;

      dir = birdPosition - selfPosition;
      dist = length(dir);

      if (dist < 0.0001) continue;

      distSquared = dist * dist;

      if (distSquared > zoneRadiusSquared ) continue;

      percent = distSquared / zoneRadiusSquared;

      if ( percent < separationThresh ) { // low

        // Separation - Move apart for comfort
        f = (separationThresh / percent - 1.0) * delta;
        velocity -= normalize(dir) * f;

      } else if ( percent < alignmentThresh ) { // high

        // Alignment - fly the same direction
        float threshDelta = alignmentThresh - separationThresh;
        float adjustedPercent = ( percent - separationThresh ) / threshDelta;

        birdVelocity = texture2D( textureVelocity, ref ).xyz;

        f = ( 0.5 - cos( adjustedPercent * PI_2 ) * 0.5 + 0.5 ) * delta;
        velocity += normalize(birdVelocity) * f;

      } else {

        // Attraction / Cohesion - move closer
        float threshDelta = 1.0 - alignmentThresh;
        float adjustedPercent = ( percent - alignmentThresh ) / threshDelta;

        f = ( 0.5 - ( cos( adjustedPercent * PI_2 ) * -0.5 + 0.5 ) ) * delta;

        velocity += normalize(dir) * f;

      }
    }
  }

  // this make tends to fly around than down or up
  // if (velocity.y > 0.) velocity.y *= (1. - 0.2 * delta);

  // Speed Limits
  if ( length( velocity ) > limit ) {
    velocity = normalize( velocity ) * limit;
  }

  gl_FragColor = vec4( velocity, 1.0 );

}`,N0=`attribute vec2 reference;
attribute float birdVertex;

attribute vec3 birdColor;

uniform sampler2D texturePosition;
uniform sampler2D textureVelocity;

varying vec4 vColor;
varying float z;

uniform float time;
uniform float birdSize;

void main() {

  vec4 tmpPos = texture2D( texturePosition, reference );
  vec3 pos = tmpPos.xyz;
  vec3 velocity = normalize(texture2D( textureVelocity, reference ).xyz);

  vec3 newPosition = position;

  if ( birdVertex == 4.0 || birdVertex == 7.0 ) {
    // flap wings
    newPosition.y = sin( tmpPos.w ) * 5. * birdSize;
  }

  newPosition = mat3( modelMatrix ) * newPosition;

  velocity.z *= -1.;
  float xz = length( velocity.xz );
  float xyz = 1.;
  float x = sqrt( 1. - velocity.y * velocity.y );

  float cosry = velocity.x / xz;
  float sinry = velocity.z / xz;

  float cosrz = x / xyz;
  float sinrz = velocity.y / xyz;

  mat3 maty =  mat3(
    cosry, 0, -sinry,
    0    , 1, 0     ,
    sinry, 0, cosry
  );

  mat3 matz =  mat3(
    cosrz , sinrz, 0,
    -sinrz, cosrz, 0,
    0     , 0    , 1
  );
  newPosition =  maty * matz * newPosition;
  newPosition += pos;
  z = newPosition.z;

  vColor = vec4( birdColor, 1.0 );
  gl_Position = projectionMatrix *  viewMatrix  * vec4( newPosition, 1.0 );
}`,B0=`varying vec4 vColor;
varying float z;
uniform vec3 color;
void main() {
  // Fake colors for now
  float rr = 0.2 + ( 1000. - z ) / 1000. * vColor.x;
  float gg = 0.2 + ( 1000. - z ) / 1000. * vColor.y;
  float bb = 0.2 + ( 1000. - z ) / 1000. * vColor.z;
  gl_FragColor = vec4( rr, gg, bb, 1. );
}`,O0=function(t){const e=t.image.data;let n=0;const i=e.length;return(()=>{const r=[];for(;n<i;){const s=Math.random()*Br-Ua,o=Math.random()*Br-Ua,a=Math.random()*Br-Ua;e[n+0]=s,e[n+1]=o,e[n+2]=a,e[n+3]=1,r.push(n+=4)}return r})()},F0=function(t){const e=t.image.data;let n=0;const i=e.length;return(()=>{const r=[];for(;n<i;){const s=Math.random()-.5,o=Math.random()-.5,a=Math.random()-.5;e[n+0]=s*10,e[n+1]=o*10,e[n+2]=a*10,e[n+3]=1,r.push(n+=4)}return r})()};class ld extends S0{static initClass(){this.prototype.defaultOptions={backgroundColor:465199,color1:16711680,color2:53759,colorMode:"varianceGradient",birdSize:1,wingSpan:30,speedLimit:5,separation:20,alignment:20,cohesion:20,quantity:5}}constructor(e){_e=e.THREE||_e,super(e)}initComputeRenderer(){this.gpuCompute=new A0(Gt,Gt,this.renderer,_e);const e=this.gpuCompute.createTexture(),n=this.gpuCompute.createTexture();O0(e),F0(n),this.velocityVariable=this.gpuCompute.addVariable("textureVelocity",D0,n),this.positionVariable=this.gpuCompute.addVariable("texturePosition",I0,e),this.gpuCompute.setVariableDependencies(this.velocityVariable,[this.positionVariable,this.velocityVariable]),this.gpuCompute.setVariableDependencies(this.positionVariable,[this.positionVariable,this.velocityVariable]),this.positionUniforms=this.positionVariable.material.uniforms,this.velocityUniforms=this.velocityVariable.material.uniforms,this.positionUniforms.time={value:0},this.positionUniforms.delta={value:0},this.velocityUniforms.time={value:1},this.velocityUniforms.delta={value:0},this.velocityUniforms.testing={value:1},this.velocityUniforms.separationDistance={value:1},this.velocityUniforms.alignmentDistance={value:1},this.velocityUniforms.cohesionDistance={value:1},this.velocityUniforms.speedLimit={value:1},this.velocityUniforms.freedomFactor={value:1},this.velocityUniforms.predator={value:new _e.Vector3},this.velocityVariable.material.defines.BOUNDS=Br.toFixed(2),this.velocityVariable.wrapS=_e.RepeatWrapping,this.velocityVariable.wrapT=_e.RepeatWrapping,this.positionVariable.wrapS=_e.RepeatWrapping,this.positionVariable.wrapT=_e.RepeatWrapping;const i=this.gpuCompute.init();i!==null&&console.error(i)}initGpgpuBirds(){const e=Object.assign({},this.options,{effect:this}),n=R0(e);this.birdUniforms={color:{value:new _e.Color(16720384)},texturePosition:{value:null},textureVelocity:{value:null},time:{value:1},delta:{value:0},birdSize:{value:this.options.birdSize}};const i=new _e.ShaderMaterial({uniforms:this.birdUniforms,vertexShader:N0,fragmentShader:B0,side:_e.DoubleSide}),r=new _e.Mesh(n,i);return r.rotation.y=Math.PI/2,r.matrixAutoUpdate=!1,r.updateMatrix(),this.scene.add(r)}getNewCol(e){const n=this.options,i=n.color1!=null?n.color1:4456448,r=n.color2!=null?n.color2:6684672,s=new _e.Color(i),o=new _e.Color(r),a=n.colorMode.indexOf("Gradient")!=-1;let c,l;if(a?l=Math.random():l=e,n.colorMode.indexOf("variance")==0){const d=(s.r+Math.random()*o.r).clamp(0,1),h=(s.g+Math.random()*o.g).clamp(0,1),u=(s.b+Math.random()*o.b).clamp(0,1);c=new _e.Color(d,h,u)}else n.colorMode.indexOf("mix")==0?c=new _e.Color(i+l*r):c=s.lerp(o,l);return c}onInit(){this.camera=new _e.PerspectiveCamera(75,this.width/this.height,1,3e3),this.camera.position.z=350,this.fog=new _e.Fog(16777215,100,1e3),this.mouseX=this.mouseY=0;const e=this.birds=[],n=this.boids=[],i=this.options;let r,s;if(za)try{this.initComputeRenderer(),this.valuesChanger=this.valuesChanger.bind(this),this.valuesChanger(),this.initGpgpuBirds()}catch(l){console.error("[vanta.js] birds init error: ",l)}else{const l=6*Math.pow(2,i.quantity);for(var o=0;o<l;o++){r=n[o]=new P0(i),r.position.x=Math.random()*400-200,r.position.y=Math.random()*400-200,r.position.z=Math.random()*400-200,r.velocity.x=Math.random()*2-1,r.velocity.y=Math.random()*2-1,r.velocity.z=Math.random()*2-1,r.setWorldSize(500,500,300);const d=i.colorMode.indexOf("Gradient")!=-1,h=C0(i),u=h.attributes.position.length,f=new _e.BufferAttribute(new Float32Array(u),3);if(d)for(var a=0;a<h.index.array.length;a+=3)for(var c=0;c<=2;c++){const p=h.index.array[a+c],y=this.getNewCol();f.array[p*3]=y.r,f.array[p*3+1]=y.g,f.array[p*3+2]=y.b}else{const p=this.getNewCol(o/l);for(var a=0;a<f.array.length;a+=3)f.array[a]=p.r,f.array[a+1]=p.g,f.array[a+2]=p.b}h.setAttribute("color",f),s=e[o]=new _e.Mesh(h,new _e.MeshBasicMaterial({color:16777215,side:_e.DoubleSide,vertexColors:_e.VertexColors})),s.phase=Math.floor(Math.random()*62.83),s.position.x=n[o].position.x,s.position.y=n[o].position.y,s.position.z=n[o].position.z,this.scene.add(s)}}}valuesChanger(){this.velocityUniforms&&(this.velocityUniforms.separationDistance.value=this.options.separation,this.velocityUniforms.alignmentDistance.value=this.options.alignment,this.velocityUniforms.speedLimit.value=this.options.speedLimit,this.velocityUniforms.cohesionDistance.value=this.options.cohesion)}onUpdate(){this.now=performance.now(),this.last||(this.last=this.now);let e=(this.now-this.last)/1e3;if(e>1&&(e=1),this.last=this.now,za)this.positionUniforms.time.value=this.now,this.positionUniforms.delta.value=e,this.velocityUniforms.time.value=this.now,this.velocityUniforms.delta.value=e,this.birdUniforms.time.value=this.now,this.birdUniforms.delta.value=e,this.velocityUniforms.predator.value.set(this.mouseX,-this.mouseY,0),this.mouseX=1e4,this.mouseY=1e4,this.gpuCompute.compute(),this.birdUniforms.texturePosition.value=this.gpuCompute.getCurrentRenderTarget(this.positionVariable).texture,this.birdUniforms.textureVelocity.value=this.gpuCompute.getCurrentRenderTarget(this.velocityVariable).texture;else{const r=this.birds,s=this.boids;let o,a;for(var n=0,i=r.length;n<i;n++){o=s[n],o.run(s),a=r[n],a.rotation.y=Math.atan2(-o.velocity.z,o.velocity.x),a.rotation.z=Math.asin(o.velocity.y/o.velocity.length()),a.phase=(a.phase+(Math.max(0,a.rotation.z)+.1))%62.83;const c=5*3+1,l=4*3+1;a.geometry.attributes.position.array[c]=a.geometry.attributes.position.array[l]=Math.sin(a.phase)*5*this.options.birdSize,a.geometry.attributes.position.needsUpdate=!0,a.geometry.computeVertexNormals(),a.position.x=s[n].position.x,a.position.y=s[n].position.y,a.position.z=s[n].position.z}}}onMouseMove(e,n){if(this.mouseX=e-.5,this.mouseY=n-.5,!za){const o=this.boids;let a;for(var i=new _e.Vector3(this.mouseX*this.width,-this.mouseY*this.height,0),r=0,s=o.length;r<s;r++)a=o[r],i.z=a.position.z,a.repulse(i)}}onDestroy(){}onResize(){}}ld.initClass();const z0=gn.register("BIRDS",ld),U0=t=>vd.post("/user/adminLogin",t),hd=t=>(Ed("data-v-c3e57f07"),t=t(),Ad(),t),G0=hd(()=>Lr("div",{class:"title"},[Lr("h1",{class:"animate__animated animate__bounceInDown subTitle"},"医邻助手"),Lr("div",{class:"desc animate__animated animate__lightSpeedInRight"}," 医邻助手的后台管理系统 ")],-1)),H0={class:"login-pannel animate__animated animate__flipInX"},V0=hd(()=>Lr("h2",{style:{"text-align":"center"}},"管理员登录",-1)),k0={__name:"Index",setup(t){const e=xd(),n=xs();let i=null;_d(()=>{i=z0({el:n.value,THREE:b0,mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1})}),bd(()=>{i&&i.destroy()});const r=xs({username:"",password:""}),s=xs({username:[{required:!0,message:"用户名不能为空",trigger:"blur"},{min:5,max:16,message:"用户名为5-16位非空字符",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"},{min:5,max:16,message:"密码为5-16位非空字符",trigger:"blur"}]}),o=xs(),a=wd(),c=async()=>{await o.value.validate();const l=await U0(r.value);a.setToken(l.token),Ld.success("登录成功"),e.push("/")};return(l,d)=>{const h=yd,u=Rd,f=Cd,p=gd;return Md(),Sd("div",{ref_key:"vantaRef",ref:n,class:"login-page"},[G0,Lr("div",H0,[wn(p,{model:r.value,ref_key:"loginform",ref:o,rules:s.value},{default:_i(()=>[wn(h,null,{default:_i(()=>[V0]),_:1}),wn(h,{prop:"username"},{default:_i(()=>[wn(u,{modelValue:r.value.username,"onUpdate:modelValue":d[0]||(d[0]=y=>r.value.username=y),"prefix-icon":xl(Pd),placeholder:"请输入用户名"},null,8,["modelValue","prefix-icon"])]),_:1}),wn(h,{prop:"password"},{default:_i(()=>[wn(u,{modelValue:r.value.password,"onUpdate:modelValue":d[1]||(d[1]=y=>r.value.password=y),"prefix-icon":xl(Id),type:"password",placeholder:"请输入密码"},null,8,["modelValue","prefix-icon"])]),_:1}),wn(h,null,{default:_i(()=>[wn(f,{type:"warning",style:{width:"100%"},onClick:c},{default:_i(()=>[Td("登录")]),_:1})]),_:1})]),_:1},8,["model","rules"])])],512)}}},Q0=Dd(k0,[["__scopeId","data-v-c3e57f07"]]);export{Q0 as default};
