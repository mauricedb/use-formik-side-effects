var e,n=require("formik"),t=(e=require("react"))&&"object"==typeof e&&"default"in e?e.default:e;const r=function(){function e(){}return e.prototype.then=function(n,t){const r=new e,u=this.s;if(u){const e=1&u?n:t;if(e){try{o(r,1,e(this.v))}catch(e){o(r,2,e)}return r}return this}return this.o=function(e){try{const u=e.v;1&e.s?o(r,1,n?n(u):u):t?o(r,1,t(u)):o(r,2,u)}catch(e){o(r,2,e)}},r},e}();function o(e,n,t){if(!e.s){if(t instanceof r){if(!t.s)return void(t.o=o.bind(null,e,n));1&n&&(n=t.s),t=t.v}if(t&&t.then)return void t.then(o.bind(null,e,n),o.bind(null,e,2));e.s=n,e.v=t;const u=e.o;u&&u(e)}}const u={};!function(){function e(e){this._entry=e,this._pact=null,this._resolve=null,this._return=null,this._promise=null}function n(e){return{value:e,done:!0}}function t(e){return{value:e,done:!1}}e.prototype[Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator"))]=function(){return this},e.prototype._yield=function(e){return this._resolve(e&&e.then?e.then(t):t(e)),this._pact=new r},e.prototype.next=function(e){const t=this;return t._promise=new Promise(function(i){const l=t._pact;if(null===l){const e=t._entry;if(null===e)return i(t._promise);function s(e){t._resolve(e&&e.then?e.then(n):n(e)),t._pact=null,t._resolve=null}t._entry=null,t._resolve=i,e(t).then(s,function(e){if(e===u)s(t._return);else{const n=new r;t._resolve(n),t._pact=null,t._resolve=null,_resolve(n,2,e)}})}else t._pact=null,t._resolve=i,o(l,1,e)})},e.prototype.return=function(e){const t=this;return t._promise=new Promise(function(r){const i=t._pact;if(null===i)return null===t._entry?r(t._promise):(t._entry=null,r(e&&e.then?e.then(n):n(e)));t._return=e,t._resolve=r,t._pact=null,o(i,2,u)})},e.prototype.throw=function(e){const n=this;return n._promise=new Promise(function(t,r){const u=n._pact;if(null===u)return null===n._entry?t(n._promise):(n._entry=null,r(e));n._resolve=t,n._pact=null,o(u,2,e)})}}();var i=function(e,n,r){var o=t.useRef(e),u=t.useRef(null);t.useEffect(function(){var t=o.current;if(t.values!==e.values){if(n){var i=n(e.values,t.values);i&&e.setValues(i)}r&&(u.current&&u.current.abort(),u.current=new AbortController,function(e,n,t,r){try{Promise.resolve(function(o,u){try{var i=Promise.resolve(t(e.values,n.values,r)).then(function(n){if(n){var t=e.setFieldValue;n.forEach(function(e,r){t(e.field,e.value,r===n.length-1)})}})}catch(e){return u(e)}return i&&i.then?i.then(void 0,u):i}(0,function(e){var n="AbortError"!==e.name?e:null;if(n)throw n}))}catch(e){return Promise.reject(e)}}(e,t,r,u.current.signal))}o.current=e},[e,n,r])},l=function(e){return i(e.formik,e.determineSideEffects,e.determineAsyncSideEffect),null};exports.FormikSideEffects=function(e){var r=e.determineSideEffects,o=e.determineAsyncSideEffect;return t.createElement(n.FormikConsumer,null,function(e){return t.createElement(l,{determineSideEffects:r,determineAsyncSideEffect:o,formik:e})})},exports.useFormikSideEffects=i;
//# sourceMappingURL=index.js.map
