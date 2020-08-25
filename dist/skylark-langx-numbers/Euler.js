/**
 * skylark-langx-numbers - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-maths","./numerics","./Quaternion","./Vector3","./Matrix4"],function(t,i,n,a,h){var s=new h,r=new n;function e(t,i,n,a){this._x=t||0,this._y=i||0,this._z=n||0,this._order=a||e.DefaultOrder}return e.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"],e.DefaultOrder="XYZ",Object.defineProperties(e.prototype,{x:{get:function(){return this._x},set:function(t){this._x=t,this._onChangeCallback()}},y:{get:function(){return this._y},set:function(t){this._y=t,this._onChangeCallback()}},z:{get:function(){return this._z},set:function(t){this._z=t,this._onChangeCallback()}},order:{get:function(){return this._order},set:function(t){this._order=t,this._onChangeCallback()}}}),Object.assign(e.prototype,{isEuler:!0,set:function(t,i,n,a){return this._x=t,this._y=i,this._z=n,this._order=a||this._order,this._onChangeCallback(),this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._order)},copy:function(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this},setFromRotationMatrix:function(i,n,a){var h=t.clamp,s=i.elements,r=s[0],e=s[4],o=s[8],_=s[1],u=s[5],c=s[9],l=s[2],M=s[6],y=s[10];return"XYZ"===(n=n||this._order)?(this._y=Math.asin(h(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,y),this._z=Math.atan2(-e,r)):(this._x=Math.atan2(M,u),this._z=0)):"YXZ"===n?(this._x=Math.asin(-h(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,y),this._z=Math.atan2(_,u)):(this._y=Math.atan2(-l,r),this._z=0)):"ZXY"===n?(this._x=Math.asin(h(M,-1,1)),Math.abs(M)<.9999999?(this._y=Math.atan2(-l,y),this._z=Math.atan2(-e,u)):(this._y=0,this._z=Math.atan2(_,r))):"ZYX"===n?(this._y=Math.asin(-h(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(M,y),this._z=Math.atan2(_,r)):(this._x=0,this._z=Math.atan2(-e,u))):"YZX"===n?(this._z=Math.asin(h(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-l,r)):(this._x=0,this._y=Math.atan2(o,y))):"XZY"===n?(this._z=Math.asin(-h(e,-1,1)),Math.abs(e)<.9999999?(this._x=Math.atan2(M,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,y),this._y=0)):console.warn("skylark-nunustudio/editor/gui/element/RendererCanvasEuler: .setFromRotationMatrix() given unsupported order: "+n),this._order=n,!1!==a&&this._onChangeCallback(),this},setFromQuaternion:function(t,i,n){return s.makeRotationFromQuaternion(t),this.setFromRotationMatrix(s,i,n)},setFromVector3:function(t,i){return this.set(t.x,t.y,t.z,i||this._order)},reorder:function(t){return r.setFromEuler(this),this.setFromQuaternion(r,t)},equals:function(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order},fromArray:function(t){return this._x=t[0],this._y=t[1],this._z=t[2],void 0!==t[3]&&(this._order=t[3]),this._onChangeCallback(),this},toArray:function(t,i){return void 0===t&&(t=[]),void 0===i&&(i=0),t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t},toVector3:function(t){return t?t.set(this._x,this._y,this._z):new a(this._x,this._y,this._z)},_onChange:function(t){return this._onChangeCallback=t,this},_onChangeCallback:function(){}}),i.Euler=e});
//# sourceMappingURL=sourcemaps/Euler.js.map
