var e,r=require("formik"),t=(e=require("react"))&&"object"==typeof e&&"default"in e?e.default:e;"undefined"!=typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var n=function(e,r,n,o){var i=t.useRef(e),f=t.useRef(null);t.useEffect(function(){var t=i.current;if(r){var u=r(e.values,t.values);u&&e.setValues(u,o)}n&&(f.current&&f.current.abort(),f.current=new AbortController,function(e,r,t,n,o){try{Promise.resolve(function(i,f){try{var u=Promise.resolve(t(e.values,r.values,n)).then(function(r){if(r){var t=e.setFieldValue;r.forEach(function(e,n){t(e.field,e.value,o&&n===r.length-1)})}})}catch(e){return f(e)}return u&&u.then?u.then(void 0,f):u}(0,function(e){var r="AbortError"!==e.name?e:null;if(r)throw r}))}catch(e){return Promise.reject(e)}}(e,t,n,f.current.signal,"boolean"!=typeof o||o)),i.current=e},[e,r,n])},o=function(e){return n(e.formik,e.determineSideEffects,e.determineAsyncSideEffect,e.shouldValidate),null};exports.FormikSideEffects=function(e){var n=e.determineSideEffects,i=e.determineAsyncSideEffect;return t.createElement(r.FormikConsumer,null,function(e){return t.createElement(o,{determineSideEffects:n,determineAsyncSideEffect:i,formik:e})})},exports.useFormikSideEffects=n;
//# sourceMappingURL=index.js.map
