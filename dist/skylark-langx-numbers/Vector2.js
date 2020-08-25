/**
 * skylark-langx-numbers - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./numerics"],function(t){function i(t,i){this.x=t||0,this.y=i||0}return Object.defineProperties(i.prototype,{width:{get:function(){return this.x},set:function(t){this.x=t}},height:{get:function(){return this.y},set:function(t){this.y=t}}}),Object.assign(i.prototype,{set:function(t,i){return this.x=t,this.y=i,this},setScalar:function(t){return this.x=t,this.y=t,this},setX:function(t){return this.x=t,this},setY:function(t){return this.y=t,this},clone:function(){return new this.constructor(this.x,this.y)},copy:function(t){return this.x=t.x,this.y=t.y,this},add:function(t,i){return void 0!==i?(console.warn("Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,i)):(this.x+=t.x,this.y+=t.y,this)},addScalar:function(t){return this.x+=t,this.y+=t,this},addVectors:function(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this},addScaledVector:function(t,i){return this.x+=t.x*i,this.y+=t.y*i,this},sub:function(t,i){return void 0!==i?(console.warn("Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,i)):(this.x-=t.x,this.y-=t.y,this)},subScalar:function(t){return this.x-=t,this.y-=t,this},subVectors:function(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this},multiplyScalar:function(t){return this.x*=t,this.y*=t,this},divide:function(t){return this.x/=t.x,this.y/=t.y,this},divideScalar:function(t){return this.multiplyScalar(1/t)},applyMatrix3:function(t){var i=this.x,n=this.y,s=t.elements;return this.x=s[0]*i+s[3]*n+s[6],this.y=s[1]*i+s[4]*n+s[7],this},min:function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this},max:function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this},clamp:function(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this},clampScalar:function(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this},clampLength:function(t,i){var n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(i,n)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this},negate:function(){return this.x=-this.x,this.y=-this.y,this},dot:function(t){return this.x*t.x+this.y*t.y},cross:function(t){return this.x*t.y-this.y*t.x},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)},normalize:function(){return this.divideScalar(this.length()||1)},angle:function(){return Math.atan2(-this.y,-this.x)+Math.PI},distanceTo:function(t){return Math.sqrt(this.distanceToSquared(t))},distanceToSquared:function(t){var i=this.x-t.x,n=this.y-t.y;return i*i+n*n},manhattanDistanceTo:function(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)},setLength:function(t){return this.normalize().multiplyScalar(t)},lerp:function(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this},lerpVectors:function(t,i,n){return this.subVectors(i,t).multiplyScalar(n).add(t)},equals:function(t){return t.x===this.x&&t.y===this.y},fromArray:function(t,i){return void 0===i&&(i=0),this.x=t[i],this.y=t[i+1],this},toArray:function(t,i){return void 0===t&&(t=[]),void 0===i&&(i=0),t[i]=this.x,t[i+1]=this.y,t},rotateAround:function(t,i){var n=Math.cos(i),s=Math.sin(i),h=this.x-t.x,r=this.y-t.y;return this.x=h*n-r*s+t.x,this.y=h*s+r*n+t.y,this}}),t.Vector2=i});
//# sourceMappingURL=sourcemaps/Vector2.js.map
