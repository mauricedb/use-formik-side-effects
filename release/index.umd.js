!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("formik"),require("react")):"function"==typeof define&&define.amd?define(["exports","formik","react"],n):n(e.useFormikSideEffects={},e.formik,e.react)}(this,function(e,n,t){t=t&&t.hasOwnProperty("default")?t.default:t;const r=function(){function e(){}return e.prototype.then=function(n,t){const r=new e,i=this.s;if(i){const e=1&i?n:t;if(e){try{o(r,1,e(this.v))}catch(e){o(r,2,e)}return r}return this}return this.o=function(e){try{const i=e.v;1&e.s?o(r,1,n?n(i):i):t?o(r,1,t(i)):o(r,2,i)}catch(e){o(r,2,e)}},r},e}();function o(e,n,t){if(!e.s){if(t instanceof r){if(!t.s)return void(t.o=o.bind(null,e,n));1&n&&(n=t.s),t=t.v}if(t&&t.then)return void t.then(o.bind(null,e,n),o.bind(null,e,2));e.s=n,e.v=t;const i=e.o;i&&i(e)}}const i={};!function(){function e(e){this._entry=e,this._pact=null,this._resolve=null,this._return=null,this._promise=null}function n(e){return{value:e,done:!0}}function t(e){return{value:e,done:!1}}e.prototype[Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator"))]=function(){return this},e.prototype._yield=function(e){return this._resolve(e&&e.then?e.then(t):t(e)),this._pact=new r},e.prototype.next=function(e){const t=this;return t._promise=new Promise(function(u){const s=t._pact;if(null===s){const e=t._entry;if(null===e)return u(t._promise);function l(e){t._resolve(e&&e.then?e.then(n):n(e)),t._pact=null,t._resolve=null}t._entry=null,t._resolve=u,e(t).then(l,function(e){if(e===i)l(t._return);else{const n=new r;t._resolve(n),t._pact=null,t._resolve=null,_resolve(n,2,e)}})}else t._pact=null,t._resolve=u,o(s,1,e)})},e.prototype.return=function(e){const t=this;return t._promise=new Promise(function(r){const u=t._pact;if(null===u)return null===t._entry?r(t._promise):(t._entry=null,r(e&&e.then?e.then(n):n(e)));t._return=e,t._resolve=r,t._pact=null,o(u,2,i)})},e.prototype.throw=function(e){const n=this;return n._promise=new Promise(function(t,r){const i=n._pact;if(null===i)return null===n._entry?t(n._promise):(n._entry=null,r(e));n._resolve=t,n._pact=null,o(i,2,e)})}}();var u=function(e,n,r){var o=t.useRef(e),i=t.useRef(null);t.useEffect(function(){var t=o.current;if(t.values!==e.values){if(n){var u=n(e.values,t.values);u&&e.setValues(u)}r&&(i.current&&i.current.abort(),i.current=new AbortController,function(e,n,t,r){try{Promise.resolve(function(o,i){try{var u=Promise.resolve(t(e.values,n.values,r)).then(function(n){n&&(n.forEach(function(t,r){e.setFieldValue(t.field,t.value,r===n.length-1)}),console.log("Success",e.values.width))})}catch(e){return i(e)}return u&&u.then?u.then(void 0,i):u}(0,function(n){var t="AbortError"!==n.name?n:null;if(t)throw t;console.log("AbortError",e.values.width)}))}catch(e){return Promise.reject(e)}}(e,t,r,i.current.signal))}o.current=e},[e,n,r])},s=function(e){return u(e.formik,e.determineSideEffects,e.determineAsyncSideEffect),null};e.FormikSideEffects=function(e){var r=e.determineSideEffects,o=e.determineAsyncSideEffect;return t.createElement(n.FormikConsumer,null,function(e){return t.createElement(s,{determineSideEffects:r,determineAsyncSideEffect:o,formik:e})})},e.useFormikSideEffects=u});
//# sourceMappingURL=index.umd.js.map
