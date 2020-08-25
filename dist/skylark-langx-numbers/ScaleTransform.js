/**
 * skylark-langx-numbers - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","../numerics","./Transform","./Matrix"],function(n,e,t,r){return e.ScaleTransform=t.inherit({klassName:"ScaleTransform",value:{get:function(){return r.scaleAt(this.scaleX,this.scaleY,this.centerX,this.centerY)}},scaleX:{get:function(){return this._.scaleX}},scaleY:{get:function(){return this._.scaleY}},centerX:{get:function(){return this._.centerX}},centerY:{get:function(){return this._.centerY}},clone:function(){},transform:function(n){},transformBounds:function(n){},init:function(n,e,t,r){var c=this._;c.scaleX=n||1,c.scaleY=e||1,c.centerX=t||0,c.centerY=r||0}})});
//# sourceMappingURL=sourcemaps/ScaleTransform.js.map
