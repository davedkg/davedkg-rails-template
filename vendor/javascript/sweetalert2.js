var e=typeof globalThis!=="undefined"?globalThis:typeof self!=="undefined"?self:global;var t={};(function(e,n){t=n()})(0,(function(){function _assertClassBrand(e,t,n){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError("Private element is not present on this object")}function _callSuper(e,t,n){return t=_getPrototypeOf(t),_possibleConstructorReturn(e,_isNativeReflectConstruct()?Reflect.construct(t,n||[],_getPrototypeOf(e).constructor):t.apply(e,n))}function _classPrivateFieldGet2(e,t){return e.get(_assertClassBrand(e,t))}function _classPrivateFieldSet2(e,t,n){return e.set(_assertClassBrand(e,t),n),n}function _construct(e,t,n){if(_isNativeReflectConstruct())return Reflect.construct.apply(null,arguments);var a=[null];a.push.apply(a,t);var r=new(e.bind.apply(e,a));return n&&_setPrototypeOf(r,n.prototype),r}function _isNativeReflectConstruct(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_isNativeReflectConstruct=function(){return!!e})()}function _iterableToArrayLimit(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,o,i,s=[],l=!0,c=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(a=o.call(n)).done)&&(s.push(a.value),s.length!==t);l=!0);}catch(e){c=!0,r=e}finally{try{if(!l&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw r}}return s}}function _toPrimitive(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"==typeof t?t:t+""}function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||false;a.configurable=true;"value"in a&&(a.writable=true);Object.defineProperty(e,_toPropertyKey(a.key),a)}}function _createClass(e,t,n){t&&_defineProperties(e.prototype,t);n&&_defineProperties(e,n);Object.defineProperty(e,"prototype",{writable:false});return e}function _inherits(e,t){if(typeof t!=="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});Object.defineProperty(e,"prototype",{writable:false});t&&_setPrototypeOf(e,t)}function _getPrototypeOf(e){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)};return _getPrototypeOf(e)}function _setPrototypeOf(e,t){_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(e,t){e.__proto__=t;return e};return _setPrototypeOf(e,t)}function _assertThisInitialized(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _possibleConstructorReturn(e,t){if(t&&(typeof t==="object"||typeof t==="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _superPropBase(e,t){while(!Object.prototype.hasOwnProperty.call(e,t)){e=_getPrototypeOf(e);if(e===null)break}return e}function _get(){_get=typeof Reflect!=="undefined"&&Reflect.get?Reflect.get.bind():function _get(e,t,n){var a=_superPropBase(e,t);if(a){var r=Object.getOwnPropertyDescriptor(a,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}};return _get.apply(this||e,arguments)}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _iterableToArray(e){if(typeof Symbol!=="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function _unsupportedIterableToArray(e,t){if(e){if(typeof e==="string")return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);n==="Object"&&e.constructor&&(n=e.constructor.name);return n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _checkPrivateRedeclaration(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function _classPrivateFieldInitSpec(e,t,n){_checkPrivateRedeclaration(e,t);t.set(e,n)}var t=100;
/** @type {GlobalState} */var n={};var a=function focusPreviousActiveElement(){if(n.previousActiveElement instanceof HTMLElement){n.previousActiveElement.focus();n.previousActiveElement=null}else document.body&&document.body.focus()};
/**
   * Restore previous active (focused) element
   *
   * @param {boolean} returnFocus
   * @returns {Promise<void>}
   */var r=function restoreActiveElement(e){return new Promise((function(r){if(!e)return r();var o=window.scrollX;var i=window.scrollY;n.restoreFocusTimeout=setTimeout((function(){a();r()}),t);window.scrollTo(o,i)}))};var o="swal2-";
/**
   * @typedef
   * { | 'container'
   *   | 'shown'
   *   | 'height-auto'
   *   | 'iosfix'
   *   | 'popup'
   *   | 'modal'
   *   | 'no-backdrop'
   *   | 'no-transition'
   *   | 'toast'
   *   | 'toast-shown'
   *   | 'show'
   *   | 'hide'
   *   | 'close'
   *   | 'title'
   *   | 'html-container'
   *   | 'actions'
   *   | 'confirm'
   *   | 'deny'
   *   | 'cancel'
   *   | 'default-outline'
   *   | 'footer'
   *   | 'icon'
   *   | 'icon-content'
   *   | 'image'
   *   | 'input'
   *   | 'file'
   *   | 'range'
   *   | 'select'
   *   | 'radio'
   *   | 'checkbox'
   *   | 'label'
   *   | 'textarea'
   *   | 'inputerror'
   *   | 'input-label'
   *   | 'validation-message'
   *   | 'progress-steps'
   *   | 'active-progress-step'
   *   | 'progress-step'
   *   | 'progress-step-line'
   *   | 'loader'
   *   | 'loading'
   *   | 'styled'
   *   | 'top'
   *   | 'top-start'
   *   | 'top-end'
   *   | 'top-left'
   *   | 'top-right'
   *   | 'center'
   *   | 'center-start'
   *   | 'center-end'
   *   | 'center-left'
   *   | 'center-right'
   *   | 'bottom'
   *   | 'bottom-start'
   *   | 'bottom-end'
   *   | 'bottom-left'
   *   | 'bottom-right'
   *   | 'grow-row'
   *   | 'grow-column'
   *   | 'grow-fullscreen'
   *   | 'rtl'
   *   | 'timer-progress-bar'
   *   | 'timer-progress-bar-container'
   *   | 'scrollbar-measure'
   *   | 'icon-success'
   *   | 'icon-warning'
   *   | 'icon-info'
   *   | 'icon-question'
   *   | 'icon-error'
   * } SwalClass
   * @typedef {Record<SwalClass, string>} SwalClasses
   */
/**
   * @typedef {'success' | 'warning' | 'info' | 'question' | 'error'} SwalIcon
   * @typedef {Record<SwalIcon, string>} SwalIcons
   */
/** @type {SwalClass[]} */var i=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"];var s=i.reduce((function(e,t){e[t]=o+t;return e}),/** @type {SwalClasses} */{});
/** @type {SwalIcon[]} */var l=["success","warning","info","question","error"];var c=l.reduce((function(e,t){e[t]=o+t;return e}),/** @type {SwalIcons} */{});var u="SweetAlert2:";
/**
   * Capitalize the first letter of a string
   *
   * @param {string} str
   * @returns {string}
   */var d=function capitalizeFirstLetter(e){return e.charAt(0).toUpperCase()+e.slice(1)};
/**
   * Standardize console warnings
   *
   * @param {string | string[]} message
   */var p=function warn(e){console.warn("".concat(u," ").concat(_typeof(e)==="object"?e.join(" "):e))};
/**
   * Standardize console errors
   *
   * @param {string} message
   */var w=function error(e){console.error("".concat(u," ").concat(e))};
/**
   * Private global state for `warnOnce`
   *
   * @type {string[]}
   * @private
   */var f=[];
/**
   * Show a console warning, but only if it hasn't already been shown
   *
   * @param {string} message
   */var m=function warnOnce(e){if(!f.includes(e)){f.push(e);p(e)}};
/**
   * Show a one-time console warning about deprecated params/methods
   *
   * @param {string} deprecatedParam
   * @param {string} useInstead
   */var h=function warnAboutDeprecation(e,t){m('"'.concat(e,'" is deprecated and will be removed in the next major release. Please use "').concat(t,'" instead.'))};
/**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   *
   * @param {Function | any} arg
   * @returns {any}
   */var v=function callIfFunction(e){return typeof e==="function"?e():e};
/**
   * @param {any} arg
   * @returns {boolean}
   */var g=function hasToPromiseFn(e){return e&&typeof e.toPromise==="function"};
/**
   * @param {any} arg
   * @returns {Promise<any>}
   */var b=function asPromise(e){return g(e)?e.toPromise():Promise.resolve(e)};
/**
   * @param {any} arg
   * @returns {boolean}
   */var y=function isPromise(e){return e&&Promise.resolve(e)===e};
/**
   * Gets the popup container which contains the backdrop and the popup itself.
   *
   * @returns {HTMLElement | null}
   */var C=function getContainer(){return document.body.querySelector(".".concat(s.container))};
/**
   * @param {string} selectorString
   * @returns {HTMLElement | null}
   */var k=function elementBySelector(e){var t=C();return t?t.querySelector(e):null};
/**
   * @param {string} className
   * @returns {HTMLElement | null}
   */var x=function elementByClass(e){return k(".".concat(e))};
/**
   * @returns {HTMLElement | null}
   */var A=function getPopup(){return x(s.popup)};
/**
   * @returns {HTMLElement | null}
   */var P=function getIcon(){return x(s.icon)};
/**
   * @returns {HTMLElement | null}
   */var B=function getIconContent(){return x(s["icon-content"])};
/**
   * @returns {HTMLElement | null}
   */var T=function getTitle(){return x(s.title)};
/**
   * @returns {HTMLElement | null}
   */var S=function getHtmlContainer(){return x(s["html-container"])};
/**
   * @returns {HTMLElement | null}
   */var _=function getImage(){return x(s.image)};
/**
   * @returns {HTMLElement | null}
   */var E=function getProgressSteps(){return x(s["progress-steps"])};
/**
   * @returns {HTMLElement | null}
   */var O=function getValidationMessage(){return x(s["validation-message"])};
/**
   * @returns {HTMLButtonElement | null}
   */var I=function getConfirmButton(){/** @type {HTMLButtonElement} */
return k(".".concat(s.actions," .").concat(s.confirm))};
/**
   * @returns {HTMLButtonElement | null}
   */var L=function getCancelButton(){/** @type {HTMLButtonElement} */
return k(".".concat(s.actions," .").concat(s.cancel))};
/**
   * @returns {HTMLButtonElement | null}
   */var j=function getDenyButton(){/** @type {HTMLButtonElement} */
return k(".".concat(s.actions," .").concat(s.deny))};
/**
   * @returns {HTMLElement | null}
   */var M=function getInputLabel(){return x(s["input-label"])};
/**
   * @returns {HTMLElement | null}
   */var H=function getLoader(){return k(".".concat(s.loader))};
/**
   * @returns {HTMLElement | null}
   */var V=function getActions(){return x(s.actions)};
/**
   * @returns {HTMLElement | null}
   */var D=function getFooter(){return x(s.footer)};
/**
   * @returns {HTMLElement | null}
   */var z=function getTimerProgressBar(){return x(s["timer-progress-bar"])};
/**
   * @returns {HTMLElement | null}
   */var R=function getCloseButton(){return x(s.close)};var q='\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n';
/**
   * @returns {HTMLElement[]}
   */var F=function getFocusableElements(){var e=A();if(!e)return[];
/** @type {NodeListOf<HTMLElement>} */var t=e.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])');var n=Array.from(t).sort((function(e,t){var n=parseInt(e.getAttribute("tabindex")||"0");var a=parseInt(t.getAttribute("tabindex")||"0");return n>a?1:n<a?-1:0}));
/** @type {NodeListOf<HTMLElement>} */var a=e.querySelectorAll(q);var r=Array.from(a).filter((function(e){return e.getAttribute("tabindex")!=="-1"}));return _toConsumableArray(new Set(n.concat(r))).filter((function(e){return le(e)}))};
/**
   * @returns {boolean}
   */var N=function isModal(){return K(document.body,s.shown)&&!K(document.body,s["toast-shown"])&&!K(document.body,s["no-backdrop"])};
/**
   * @returns {boolean}
   */var W=function isToast(){var e=A();return!!e&&K(e,s.toast)};
/**
   * @returns {boolean}
   */var U=function isLoading(){var e=A();return!!e&&e.hasAttribute("data-loading")};
/**
   * Securely set innerHTML of an element
   * https://github.com/sweetalert2/sweetalert2/issues/1926
   *
   * @param {HTMLElement} elem
   * @param {string} html
   */var $=function setInnerHtml(e,t){e.textContent="";if(t){var n=new DOMParser;var a=n.parseFromString(t,"text/html");var r=a.querySelector("head");r&&Array.from(r.childNodes).forEach((function(t){e.appendChild(t)}));var o=a.querySelector("body");o&&Array.from(o.childNodes).forEach((function(t){t instanceof HTMLVideoElement||t instanceof HTMLAudioElement?e.appendChild(t.cloneNode(true)):e.appendChild(t)}))}};
/**
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {boolean}
   */var K=function hasClass(e,t){if(!t)return false;var n=t.split(/\s+/);for(var a=0;a<n.length;a++)if(!e.classList.contains(n[a]))return false;return true};
/**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   */var Z=function removeCustomClasses(e,t){Array.from(e.classList).forEach((function(n){Object.values(s).includes(n)||Object.values(c).includes(n)||Object.values(t.showClass||{}).includes(n)||e.classList.remove(n)}))};
/**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   * @param {string} className
   */var Y=function applyCustomClass(e,t,n){Z(e,t);if(t.customClass&&t.customClass[n]){if(typeof t.customClass[n]!=="string"&&!t.customClass[n].forEach){p("Invalid type of customClass.".concat(n,'! Expected string or iterable object, got "').concat(_typeof(t.customClass[n]),'"'));return}Q(e,t.customClass[n])}};
/**
   * @param {HTMLElement} popup
   * @param {import('./renderers/renderInput').InputClass | SweetAlertInput} inputClass
   * @returns {HTMLInputElement | null}
   */var X=function getInput(e,t){if(!t)return null;switch(t){case"select":case"textarea":case"file":return e.querySelector(".".concat(s.popup," > .").concat(s[t]));case"checkbox":return e.querySelector(".".concat(s.popup," > .").concat(s.checkbox," input"));case"radio":return e.querySelector(".".concat(s.popup," > .").concat(s.radio," input:checked"))||e.querySelector(".".concat(s.popup," > .").concat(s.radio," input:first-child"));case"range":return e.querySelector(".".concat(s.popup," > .").concat(s.range," input"));default:return e.querySelector(".".concat(s.popup," > .").concat(s.input))}};
/**
   * @param {HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement} input
   */var G=function focusInput(e){e.focus();if(e.type!=="file"){var t=e.value;e.value="";e.value=t}};
/**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   * @param {boolean} condition
   */var J=function toggleClass(e,t,n){if(e&&t){typeof t==="string"&&(t=t.split(/\s+/).filter(Boolean));t.forEach((function(t){Array.isArray(e)?e.forEach((function(e){n?e.classList.add(t):e.classList.remove(t)})):n?e.classList.add(t):e.classList.remove(t)}))}};
/**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   */var Q=function addClass(e,t){J(e,t,true)};
/**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   */var ee=function removeClass(e,t){J(e,t,false)};
/**
   * Get direct child of an element by class name
   *
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {HTMLElement | undefined}
   */var te=function getDirectChildByClass(e,t){var n=Array.from(e.children);for(var a=0;a<n.length;a++){var r=n[a];if(r instanceof HTMLElement&&K(r,t))return r}};
/**
   * @param {HTMLElement} elem
   * @param {string} property
   * @param {*} value
   */var ne=function applyNumericalStyle(e,t,n){n==="".concat(parseInt(n))&&(n=parseInt(n));n||parseInt(n)===0?e.style.setProperty(t,typeof n==="number"?"".concat(n,"px"):n):e.style.removeProperty(t)};
/**
   * @param {HTMLElement | null} elem
   * @param {string} display
   */var ae=function show(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";e&&(e.style.display=t)};
/**
   * @param {HTMLElement | null} elem
   */var re=function hide(e){e&&(e.style.display="none")};
/**
   * @param {HTMLElement | null} elem
   * @param {string} display
   */var oe=function showWhenInnerHtmlPresent(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"block";e&&new MutationObserver((function(){se(e,e.innerHTML,t)})).observe(e,{childList:true,subtree:true})};
/**
   * @param {HTMLElement} parent
   * @param {string} selector
   * @param {string} property
   * @param {string} value
   */var ie=function setStyle(e,t,n,a){
/** @type {HTMLElement | null} */
var r=e.querySelector(t);r&&r.style.setProperty(n,a)};
/**
   * @param {HTMLElement} elem
   * @param {any} condition
   * @param {string} display
   */var se=function toggle(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";t?ae(e,n):re(e)};
/**
   * borrowed from jquery $(elem).is(':visible') implementation
   *
   * @param {HTMLElement | null} elem
   * @returns {boolean}
   */var le=function isVisible(e){return!!(e&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length))};
/**
   * @returns {boolean}
   */var ce=function allButtonsAreHidden(){return!le(I())&&!le(j())&&!le(L())};
/**
   * @param {HTMLElement} elem
   * @returns {boolean}
   */var ue=function isScrollable(e){return!!(e.scrollHeight>e.clientHeight)};
/**
   * borrowed from https://stackoverflow.com/a/46352119
   *
   * @param {HTMLElement} elem
   * @returns {boolean}
   */var de=function hasCssAnimation(e){var t=window.getComputedStyle(e);var n=parseFloat(t.getPropertyValue("animation-duration")||"0");var a=parseFloat(t.getPropertyValue("transition-duration")||"0");return n>0||a>0};
/**
   * @param {number} timer
   * @param {boolean} reset
   */var pe=function animateTimerProgressBar(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];var n=z();if(n&&le(n)){if(t){n.style.transition="none";n.style.width="100%"}setTimeout((function(){n.style.transition="width ".concat(e/1e3,"s linear");n.style.width="0%"}),10)}};var we=function stopTimerProgressBar(){var e=z();if(e){var t=parseInt(window.getComputedStyle(e).width);e.style.removeProperty("transition");e.style.width="100%";var n=parseInt(window.getComputedStyle(e).width);var a=t/n*100;e.style.width="".concat(a,"%")}};
/**
   * Detect Node env
   *
   * @returns {boolean}
   */var fe=function isNodeEnv(){return typeof window==="undefined"||typeof document==="undefined"};var me='\n <div aria-labelledby="'.concat(s.title,'" aria-describedby="').concat(s["html-container"],'" class="').concat(s.popup,'" tabindex="-1">\n   <button type="button" class="').concat(s.close,'"></button>\n   <ul class="').concat(s["progress-steps"],'"></ul>\n   <div class="').concat(s.icon,'"></div>\n   <img class="').concat(s.image,'" />\n   <h2 class="').concat(s.title,'" id="').concat(s.title,'"></h2>\n   <div class="').concat(s["html-container"],'" id="').concat(s["html-container"],'"></div>\n   <input class="').concat(s.input,'" id="').concat(s.input,'" />\n   <input type="file" class="').concat(s.file,'" />\n   <div class="').concat(s.range,'">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="').concat(s.select,'" id="').concat(s.select,'"></select>\n   <div class="').concat(s.radio,'"></div>\n   <label class="').concat(s.checkbox,'">\n     <input type="checkbox" id="').concat(s.checkbox,'" />\n     <span class="').concat(s.label,'"></span>\n   </label>\n   <textarea class="').concat(s.textarea,'" id="').concat(s.textarea,'"></textarea>\n   <div class="').concat(s["validation-message"],'" id="').concat(s["validation-message"],'"></div>\n   <div class="').concat(s.actions,'">\n     <div class="').concat(s.loader,'"></div>\n     <button type="button" class="').concat(s.confirm,'"></button>\n     <button type="button" class="').concat(s.deny,'"></button>\n     <button type="button" class="').concat(s.cancel,'"></button>\n   </div>\n   <div class="').concat(s.footer,'"></div>\n   <div class="').concat(s["timer-progress-bar-container"],'">\n     <div class="').concat(s["timer-progress-bar"],'"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,"");
/**
   * @returns {boolean}
   */var he=function resetOldContainer(){var e=C();if(!e)return false;e.remove();ee([document.documentElement,document.body],[s["no-backdrop"],s["toast-shown"],s["has-column"]]);return true};var ve=function resetValidationMessage(){n.currentInstance.resetValidationMessage()};var ge=function addInputChangeListeners(){var e=A();var t=te(e,s.input);var n=te(e,s.file);
/** @type {HTMLInputElement} */var a=e.querySelector(".".concat(s.range," input"));
/** @type {HTMLOutputElement} */var r=e.querySelector(".".concat(s.range," output"));var o=te(e,s.select);
/** @type {HTMLInputElement} */var i=e.querySelector(".".concat(s.checkbox," input"));var l=te(e,s.textarea);t.oninput=ve;n.onchange=ve;o.onchange=ve;i.onchange=ve;l.oninput=ve;a.oninput=function(){ve();r.value=a.value};a.onchange=function(){ve();r.value=a.value}};
/**
   * @param {string | HTMLElement} target
   * @returns {HTMLElement}
   */var be=function getTarget(e){return typeof e==="string"?document.querySelector(e):e};
/**
   * @param {SweetAlertOptions} params
   */var ye=function setupAccessibility(e){var t=A();t.setAttribute("role",e.toast?"alert":"dialog");t.setAttribute("aria-live",e.toast?"polite":"assertive");e.toast||t.setAttribute("aria-modal","true")};
/**
   * @param {HTMLElement} targetElement
   */var Ce=function setupRTL(e){window.getComputedStyle(e).direction==="rtl"&&Q(C(),s.rtl)};
/**
   * Add modal + backdrop + no-war message for Russians to DOM
   *
   * @param {SweetAlertOptions} params
   */var ke=function init(e){var t=he();if(fe())w("SweetAlert2 requires document to initialize");else{var n=document.createElement("div");n.className=s.container;t&&Q(n,s["no-transition"]);$(n,me);var a=be(e.target);a.appendChild(n);ye(e);Ce(a);ge()}};
/**
   * @param {HTMLElement | object | string} param
   * @param {HTMLElement} target
   */var xe=function parseHtmlToContainer(e,t){e instanceof HTMLElement?t.appendChild(e):_typeof(e)==="object"?Ae(e,t):e&&$(t,e)};
/**
   * @param {any} param
   * @param {HTMLElement} target
   */var Ae=function handleObject(e,t){e.jquery?Pe(t,e):$(t,e.toString())};
/**
   * @param {HTMLElement} target
   * @param {any} elem
   */var Pe=function handleJqueryElem(e,t){e.textContent="";if(0 in t)for(var n=0;n in t;n++)e.appendChild(t[n].cloneNode(true));else e.appendChild(t.cloneNode(true))};
/**
   * @returns {'webkitAnimationEnd' | 'animationend' | false}
   */var Be=function(){if(fe())return false;var e=document.createElement("div");return typeof e.style.webkitAnimation!=="undefined"?"webkitAnimationEnd":typeof e.style.animation!=="undefined"&&"animationend"}();
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */var Te=function renderActions(e,t){var n=V();var a=H();if(n&&a){t.showConfirmButton||t.showDenyButton||t.showCancelButton?ae(n):re(n);Y(n,t,"actions");renderButtons(n,a,t);$(a,t.loaderHtml||"");Y(a,t,"loader")}};
/**
   * @param {HTMLElement} actions
   * @param {HTMLElement} loader
   * @param {SweetAlertOptions} params
   */function renderButtons(e,t,n){var a=I();var r=j();var o=L();if(a&&r&&o){renderButton(a,"confirm",n);renderButton(r,"deny",n);renderButton(o,"cancel",n);handleButtonsStyling(a,r,o,n);if(n.reverseButtons)if(n.toast){e.insertBefore(o,a);e.insertBefore(r,a)}else{e.insertBefore(o,t);e.insertBefore(r,t);e.insertBefore(a,t)}}}
/**
   * @param {HTMLElement} confirmButton
   * @param {HTMLElement} denyButton
   * @param {HTMLElement} cancelButton
   * @param {SweetAlertOptions} params
   */function handleButtonsStyling(e,t,n,a){if(a.buttonsStyling){Q([e,t,n],s.styled);if(a.confirmButtonColor){e.style.backgroundColor=a.confirmButtonColor;Q(e,s["default-outline"])}if(a.denyButtonColor){t.style.backgroundColor=a.denyButtonColor;Q(t,s["default-outline"])}if(a.cancelButtonColor){n.style.backgroundColor=a.cancelButtonColor;Q(n,s["default-outline"])}}else ee([e,t,n],s.styled)}
/**
   * @param {HTMLElement} button
   * @param {'confirm' | 'deny' | 'cancel'} buttonType
   * @param {SweetAlertOptions} params
   */function renderButton(e,t,n){var a=/** @type {'Confirm' | 'Deny' | 'Cancel'} */d(t);se(e,n["show".concat(a,"Button")],"inline-block");$(e,n["".concat(t,"ButtonText")]||"");e.setAttribute("aria-label",n["".concat(t,"ButtonAriaLabel")]||"");e.className=s[t];Y(e,n,"".concat(t,"Button"))}
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */var Se=function renderCloseButton(e,t){var n=R();if(n){$(n,t.closeButtonHtml||"");Y(n,t,"closeButton");se(n,t.showCloseButton);n.setAttribute("aria-label",t.closeButtonAriaLabel||"")}};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */var _e=function renderContainer(e,t){var n=C();if(n){handleBackdropParam(n,t.backdrop);handlePositionParam(n,t.position);handleGrowParam(n,t.grow);Y(n,t,"container")}};
/**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['backdrop']} backdrop
   */function handleBackdropParam(e,t){typeof t==="string"?e.style.background=t:t||Q([document.documentElement,document.body],s["no-backdrop"])}
/**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['position']} position
   */function handlePositionParam(e,t){if(t)if(t in s)Q(e,s[t]);else{p('The "position" parameter is not valid, defaulting to "center"');Q(e,s.center)}}
/**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['grow']} grow
   */function handleGrowParam(e,t){t&&Q(e,s["grow-".concat(t)])}var Ee={innerParams:new WeakMap,domCache:new WeakMap};
/** @type {InputClass[]} */var Oe=["input","file","range","select","radio","checkbox","textarea"];
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */var Ie=function renderInput(e,t){var n=A();if(n){var a=Ee.innerParams.get(e);var r=!a||t.input!==a.input;Oe.forEach((function(e){var a=te(n,s[e]);if(a){Me(e,t.inputAttributes);a.className=s[e];r&&re(a)}}));if(t.input){r&&Le(t);He(t)}}};
/**
   * @param {SweetAlertOptions} params
   */var Le=function showInput(e){if(e.input)if(qe[e.input]){var t=ze(e.input);var n=qe[e.input](t,e);ae(t);e.inputAutoFocus&&setTimeout((function(){G(n)}))}else w("Unexpected type of input! Expected ".concat(Object.keys(qe).join(" | "),', got "').concat(e.input,'"'))};
/**
   * @param {HTMLInputElement} input
   */var je=function removeAttributes(e){for(var t=0;t<e.attributes.length;t++){var n=e.attributes[t].name;["id","type","value","style"].includes(n)||e.removeAttribute(n)}};
/**
   * @param {InputClass} inputClass
   * @param {SweetAlertOptions['inputAttributes']} inputAttributes
   */var Me=function setAttributes(e,t){var n=X(A(),e);if(n){je(n);for(var a in t)n.setAttribute(a,t[a])}};
/**
   * @param {SweetAlertOptions} params
   */var He=function setCustomClass(e){var t=ze(e.input);_typeof(e.customClass)==="object"&&Q(t,e.customClass.input)};
/**
   * @param {HTMLInputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions} params
   */var Ve=function setInputPlaceholder(e,t){e.placeholder&&!t.inputPlaceholder||(e.placeholder=t.inputPlaceholder)};
/**
   * @param {Input} input
   * @param {Input} prependTo
   * @param {SweetAlertOptions} params
   */var De=function setInputLabel(e,t,n){if(n.inputLabel){var a=document.createElement("label");var r=s["input-label"];a.setAttribute("for",e.id);a.className=r;_typeof(n.customClass)==="object"&&Q(a,n.customClass.inputLabel);a.innerText=n.inputLabel;t.insertAdjacentElement("beforebegin",a)}};
/**
   * @param {SweetAlertOptions['input']} inputType
   * @returns {HTMLElement}
   */var ze=function getInputContainer(e){return te(A(),s[e]||s.input)};
/**
   * @param {HTMLInputElement | HTMLOutputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions['inputValue']} inputValue
   */var Re=function checkAndSetInputValue(e,t){["string","number"].includes(_typeof(t))?e.value="".concat(t):y(t)||p('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(_typeof(t),'"'))};
/** @type {Record<SweetAlertInput, (input: Input | HTMLElement, params: SweetAlertOptions) => Input>} */var qe={};
/**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */qe.text=qe.email=qe.password=qe.number=qe.tel=qe.url=qe.search=qe.date=qe["datetime-local"]=qe.time=qe.week=qe.month=function(e,t){Re(e,t.inputValue);De(e,e,t);Ve(e,t);e.type=t.input;return e};
/**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */qe.file=function(e,t){De(e,e,t);Ve(e,t);return e};
/**
   * @param {HTMLInputElement} range
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */qe.range=function(e,t){var n=e.querySelector("input");var a=e.querySelector("output");Re(n,t.inputValue);n.type=t.input;Re(a,t.inputValue);De(n,e,t);return e};
/**
   * @param {HTMLSelectElement} select
   * @param {SweetAlertOptions} params
   * @returns {HTMLSelectElement}
   */qe.select=function(e,t){e.textContent="";if(t.inputPlaceholder){var n=document.createElement("option");$(n,t.inputPlaceholder);n.value="";n.disabled=true;n.selected=true;e.appendChild(n)}De(e,e,t);return e};
/**
   * @param {HTMLInputElement} radio
   * @returns {HTMLInputElement}
   */qe.radio=function(e){e.textContent="";return e};
/**
   * @param {HTMLLabelElement} checkboxContainer
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */qe.checkbox=function(e,t){var n=X(A(),"checkbox");n.value="1";n.checked=Boolean(t.inputValue);var a=e.querySelector("span");$(a,t.inputPlaceholder);return n};
/**
   * @param {HTMLTextAreaElement} textarea
   * @param {SweetAlertOptions} params
   * @returns {HTMLTextAreaElement}
   */qe.textarea=function(e,t){Re(e,t.inputValue);Ve(e,t);De(e,e,t);
/**
     * @param {HTMLElement} el
     * @returns {number}
     */var n=function getMargin(e){return parseInt(window.getComputedStyle(e).marginLeft)+parseInt(window.getComputedStyle(e).marginRight)};setTimeout((function(){if("MutationObserver"in window){var a=parseInt(window.getComputedStyle(A()).width);var r=function textareaResizeHandler(){if(document.body.contains(e)){var r=e.offsetWidth+n(e);r>a?A().style.width="".concat(r,"px"):ne(A(),"width",t.width)}};new MutationObserver(r).observe(e,{attributes:true,attributeFilter:["style"]})}}));return e};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */var Fe=function renderContent(e,t){var n=S();if(n){oe(n);Y(n,t,"htmlContainer");if(t.html){xe(t.html,n);ae(n,"block")}else if(t.text){n.textContent=t.text;ae(n,"block")}else re(n);Ie(e,t)}};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */var Ne=function renderFooter(e,t){var n=D();if(n){oe(n);se(n,t.footer,"block");t.footer&&xe(t.footer,n);Y(n,t,"footer")}};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */var We=function renderIcon(e,t){var n=Ee.innerParams.get(e);var a=P();if(a)if(n&&t.icon===n.icon){Ye(a,t);Ue(a,t)}else if(t.icon||t.iconHtml)if(t.icon&&Object.keys(c).indexOf(t.icon)===-1){w('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(t.icon,'"'));re(a)}else{ae(a);Ye(a,t);Ue(a,t);Q(a,t.showClass&&t.showClass.icon)}else re(a)};
/**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */var Ue=function applyStyles(e,t){for(var n=0,a=Object.entries(c);n<a.length;n++){var r=_slicedToArray(a[n],2),o=r[0],i=r[1];t.icon!==o&&ee(e,i)}Q(e,t.icon&&c[t.icon]);Xe(e,t);$e();Y(e,t,"icon")};var $e=function adjustSuccessIconBackgroundColor(){var e=A();if(e){var t=window.getComputedStyle(e).getPropertyValue("background-color");
/** @type {NodeListOf<HTMLElement>} */var n=e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(var a=0;a<n.length;a++)n[a].style.backgroundColor=t}};var Ke='\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n';var Ze='\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n';
/**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */var Ye=function setContent(e,t){if(t.icon||t.iconHtml){var n=e.innerHTML;var a="";if(t.iconHtml)a=Ge(t.iconHtml);else if(t.icon==="success"){a=Ke;n=n.replace(/ style=".*?"/g,"")}else if(t.icon==="error")a=Ze;else if(t.icon){var r={question:"?",warning:"!",info:"i"};a=Ge(r[t.icon])}n.trim()!==a.trim()&&$(e,a)}};
/**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */var Xe=function setColor(e,t){if(t.iconColor){e.style.color=t.iconColor;e.style.borderColor=t.iconColor;for(var n=0,a=[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"];n<a.length;n++){var r=a[n];ie(e,r,"background-color",t.iconColor)}ie(e,".swal2-success-ring","border-color",t.iconColor)}};
/**
   * @param {string} content
   * @returns {string}
   */var Ge=function iconContent(e){return'<div class="'.concat(s["icon-content"],'">').concat(e,"</div>")};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */var Je=function renderImage(e,t){var n=_();if(n)if(t.imageUrl){ae(n,"");n.setAttribute("src",t.imageUrl);n.setAttribute("alt",t.imageAlt||"");ne(n,"width",t.imageWidth);ne(n,"height",t.imageHeight);n.className=s.image;Y(n,t,"image")}else re(n)};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */var Qe=function renderPopup(e,t){var n=C();var a=A();if(n&&a){if(t.toast){ne(n,"width",t.width);a.style.width="100%";var r=H();r&&a.insertBefore(r,P())}else ne(a,"width",t.width);ne(a,"padding",t.padding);t.color&&(a.style.color=t.color);t.background&&(a.style.background=t.background);re(O());et(a,t)}};
/**
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */var et=function addClasses(e,t){var n=t.showClass||{};e.className="".concat(s.popup," ").concat(le(e)?n.popup:"");if(t.toast){Q([document.documentElement,document.body],s["toast-shown"]);Q(e,s.toast)}else Q(e,s.modal);Y(e,t,"popup");typeof t.customClass==="string"&&Q(e,t.customClass);t.icon&&Q(e,s["icon-".concat(t.icon)])};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */var tt=function renderProgressSteps(e,t){var n=E();if(n){var a=t.progressSteps,r=t.currentProgressStep;if(a&&a.length!==0&&r!==void 0){ae(n);n.textContent="";r>=a.length&&p("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)");a.forEach((function(e,o){var i=nt(e);n.appendChild(i);o===r&&Q(i,s["active-progress-step"]);if(o!==a.length-1){var l=at(t);n.appendChild(l)}}))}else re(n)}};
/**
   * @param {string} step
   * @returns {HTMLLIElement}
   */var nt=function createStepElement(e){var t=document.createElement("li");Q(t,s["progress-step"]);$(t,e);return t};
/**
   * @param {SweetAlertOptions} params
   * @returns {HTMLLIElement}
   */var at=function createLineElement(e){var t=document.createElement("li");Q(t,s["progress-step-line"]);e.progressStepsDistance&&ne(t,"width",e.progressStepsDistance);return t};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */var rt=function renderTitle(e,t){var n=T();if(n){oe(n);se(n,t.title||t.titleText,"block");t.title&&xe(t.title,n);t.titleText&&(n.innerText=t.titleText);Y(n,t,"title")}};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */var ot=function render(e,t){Qe(e,t);_e(e,t);tt(e,t);We(e,t);Je(e,t);rt(e,t);Se(e,t);Fe(e,t);Te(e,t);Ne(e,t);var n=A();typeof t.didRender==="function"&&n&&t.didRender(n)};var it=function isVisible(){return le(A())};var st=function clickConfirm(){var e;return(e=I())===null||e===void 0?void 0:e.click()};var lt=function clickDeny(){var e;return(e=j())===null||e===void 0?void 0:e.click()};var ct=function clickCancel(){var e;return(e=L())===null||e===void 0?void 0:e.click()};
/** @typedef {'cancel' | 'backdrop' | 'close' | 'esc' | 'timer'} DismissReason */
/** @type {Record<DismissReason, DismissReason>} */var ut=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"});
/**
   * @param {GlobalState} globalState
   */var dt=function removeKeydownHandler(e){if(e.keydownTarget&&e.keydownHandlerAdded){e.keydownTarget.removeEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture});e.keydownHandlerAdded=false}};
/**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {*} dismissWith
   */var pt=function addKeydownHandler(e,t,n){dt(e);if(!t.toast){e.keydownHandler=function(e){return ht(t,e,n)};e.keydownTarget=t.keydownListenerCapture?window:A();e.keydownListenerCapture=t.keydownListenerCapture;e.keydownTarget.addEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture});e.keydownHandlerAdded=true}};
/**
   * @param {number} index
   * @param {number} increment
   */var wt=function setFocus(e,t){var n;var a=F();if(a.length){e+=t;e===a.length?e=0:e===-1&&(e=a.length-1);a[e].focus()}else(n=A())===null||n===void 0||n.focus()};var ft=["ArrowRight","ArrowDown"];var mt=["ArrowLeft","ArrowUp"];
/**
   * @param {SweetAlertOptions} innerParams
   * @param {KeyboardEvent} event
   * @param {Function} dismissWith
   */var ht=function keydownHandler(e,t,n){if(e&&!t.isComposing&&t.keyCode!==229){e.stopKeydownPropagation&&t.stopPropagation();t.key==="Enter"?vt(t,e):t.key==="Tab"?gt(t):[].concat(ft,mt).includes(t.key)?bt(t.key):t.key==="Escape"&&yt(t,e,n)}};
/**
   * @param {KeyboardEvent} event
   * @param {SweetAlertOptions} innerParams
   */var vt=function handleEnter(e,t){if(v(t.allowEnterKey)){var n=X(A(),t.input);if(e.target&&n&&e.target instanceof HTMLElement&&e.target.outerHTML===n.outerHTML){if(["textarea","file"].includes(t.input))return;st();e.preventDefault()}}};
/**
   * @param {KeyboardEvent} event
   */var gt=function handleTab(e){var t=e.target;var n=F();var a=-1;for(var r=0;r<n.length;r++)if(t===n[r]){a=r;break}e.shiftKey?wt(a,-1):wt(a,1);e.stopPropagation();e.preventDefault()};
/**
   * @param {string} key
   */var bt=function handleArrows(e){var t=V();var n=I();var a=j();var r=L();if(t&&n&&a&&r){
/** @type HTMLElement[] */
var o=[n,a,r];if(!(document.activeElement instanceof HTMLElement)||o.includes(document.activeElement)){var i=ft.includes(e)?"nextElementSibling":"previousElementSibling";var s=document.activeElement;if(s){for(var l=0;l<t.children.length;l++){s=s[i];if(!s)return;if(s instanceof HTMLButtonElement&&le(s))break}s instanceof HTMLButtonElement&&s.focus()}}}};
/**
   * @param {KeyboardEvent} event
   * @param {SweetAlertOptions} innerParams
   * @param {Function} dismissWith
   */var yt=function handleEsc(e,t,n){if(v(t.allowEscapeKey)){e.preventDefault();n(ut.esc)}};var Ct={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};var kt=function setAriaHidden(){var e=C();var t=Array.from(document.body.children);t.forEach((function(t){if(!t.contains(e)){t.hasAttribute("aria-hidden")&&t.setAttribute("data-previous-aria-hidden",t.getAttribute("aria-hidden")||"");t.setAttribute("aria-hidden","true")}}))};var xt=function unsetAriaHidden(){var e=Array.from(document.body.children);e.forEach((function(e){if(e.hasAttribute("data-previous-aria-hidden")){e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")||"");e.removeAttribute("data-previous-aria-hidden")}else e.removeAttribute("aria-hidden")}))};var At=typeof window!=="undefined"&&!!window.GestureEvent;var Pt=function iOSfix(){if(At&&!K(document.body,s.iosfix)){var e=document.body.scrollTop;document.body.style.top="".concat(e*-1,"px");Q(document.body,s.iosfix);Bt()}};var Bt=function lockBodyScroll(){var e=C();if(e){
/** @type {boolean} */
var t;
/**
     * @param {TouchEvent} event
     */e.ontouchstart=function(e){t=Tt(e)};
/**
     * @param {TouchEvent} event
     */e.ontouchmove=function(e){if(t){e.preventDefault();e.stopPropagation()}}}};
/**
   * @param {TouchEvent} event
   * @returns {boolean}
   */var Tt=function shouldPreventTouchMove(e){var t=e.target;var n=C();var a=S();return!(!n||!a)&&(!St(e)&&!_t(e)&&(t===n||!ue(n)&&t instanceof HTMLElement&&t.tagName!=="INPUT"&&t.tagName!=="TEXTAREA"&&(!ue(a)||!a.contains(t))))};
/**
   * https://github.com/sweetalert2/sweetalert2/issues/1786
   *
   * @param {*} event
   * @returns {boolean}
   */var St=function isStylus(e){return e.touches&&e.touches.length&&e.touches[0].touchType==="stylus"};
/**
   * https://github.com/sweetalert2/sweetalert2/issues/1891
   *
   * @param {TouchEvent} event
   * @returns {boolean}
   */var _t=function isZoom(e){return e.touches&&e.touches.length>1};var Et=function undoIOSfix(){if(K(document.body,s.iosfix)){var e=parseInt(document.body.style.top,10);ee(document.body,s.iosfix);document.body.style.top="";document.body.scrollTop=e*-1}};
/**
   * Measure scrollbar width for padding body during modal show/hide
   * https://github.com/twbs/bootstrap/blob/master/js/src/modal.js
   *
   * @returns {number}
   */var Ot=function measureScrollbar(){var e=document.createElement("div");e.className=s["scrollbar-measure"];document.body.appendChild(e);var t=e.getBoundingClientRect().width-e.clientWidth;document.body.removeChild(e);return t};
/**
   * Remember state in cases where opening and handling a modal will fiddle with it.
   * @type {number | null}
   */var It=null;
/**
   * @param {string} initialBodyOverflow
   */var Lt=function replaceScrollbarWithPadding(e){if(It===null&&(document.body.scrollHeight>window.innerHeight||e==="scroll")){It=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"));document.body.style.paddingRight="".concat(It+Ot(),"px")}};var jt=function undoReplaceScrollbarWithPadding(){if(It!==null){document.body.style.paddingRight="".concat(It,"px");It=null}};
/**
   * @param {SweetAlert} instance
   * @param {HTMLElement} container
   * @param {boolean} returnFocus
   * @param {Function} didClose
   */function removePopupAndResetState(e,t,a,o){if(W())Rt(e,o);else{r(a).then((function(){return Rt(e,o)}));dt(n)}if(At){t.setAttribute("style","display:none !important");t.removeAttribute("class");t.innerHTML=""}else t.remove();if(N()){jt();Et();xt()}removeBodyClasses()}function removeBodyClasses(){ee([document.documentElement,document.body],[s.shown,s["height-auto"],s["no-backdrop"],s["toast-shown"]])}
/**
   * Instance method to close sweetAlert
   *
   * @param {any} resolveValue
   */function close(t){t=Vt(t);var n=Ct.swalPromiseResolve.get(this||e);var a=Mt(this||e);if((this||e).isAwaitingPromise){if(!t.isDismissed){Ht(this||e);n(t)}}else a&&n(t)}var Mt=function triggerClosePopup(e){var t=A();if(!t)return false;var n=Ee.innerParams.get(e);if(!n||K(t,n.hideClass.popup))return false;ee(t,n.showClass.popup);Q(t,n.hideClass.popup);var a=C();ee(a,n.showClass.backdrop);Q(a,n.hideClass.backdrop);Dt(e,t,n);return true};
/**
   * @param {any} error
   */function rejectPromise(t){var n=Ct.swalPromiseReject.get(this||e);Ht(this||e);n&&n(t)}
/**
   * @param {SweetAlert} instance
   */var Ht=function handleAwaitingPromise(e){if(e.isAwaitingPromise){delete e.isAwaitingPromise;Ee.innerParams.get(e)||e._destroy()}};
/**
   * @param {any} resolveValue
   * @returns {SweetAlertResult}
   */var Vt=function prepareResolveValue(e){return typeof e==="undefined"?{isConfirmed:false,isDenied:false,isDismissed:true}:Object.assign({isConfirmed:false,isDenied:false,isDismissed:false},e)};
/**
   * @param {SweetAlert} instance
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} innerParams
   */var Dt=function handlePopupAnimation(e,t,n){var a=C();var r=Be&&de(t);typeof n.willClose==="function"&&n.willClose(t);r?zt(e,t,a,n.returnFocus,n.didClose):removePopupAndResetState(e,a,n.returnFocus,n.didClose)};
/**
   * @param {SweetAlert} instance
   * @param {HTMLElement} popup
   * @param {HTMLElement} container
   * @param {boolean} returnFocus
   * @param {Function} didClose
   */var zt=function animatePopup(e,t,a,r,o){if(Be){n.swalCloseEventFinishedCallback=removePopupAndResetState.bind(null,e,a,r,o);t.addEventListener(Be,(function(e){if(e.target===t){n.swalCloseEventFinishedCallback();delete n.swalCloseEventFinishedCallback}}))}};
/**
   * @param {SweetAlert} instance
   * @param {Function} didClose
   */var Rt=function triggerDidCloseAndDispose(e,t){setTimeout((function(){typeof t==="function"&&t.bind(e.params)();e._destroy&&e._destroy()}))};
/**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   *
   * @param {HTMLButtonElement | null} [buttonToReplace]
   */var qt=function showLoading(e){var t=A();t||new xa;t=A();if(t){var n=H();W()?re(P()):Ft(t,e);ae(n);t.setAttribute("data-loading","true");t.setAttribute("aria-busy","true");t.focus()}};
/**
   * @param {HTMLElement} popup
   * @param {HTMLButtonElement | null} [buttonToReplace]
   */var Ft=function replaceButton(e,t){var n=V();var a=H();if(n&&a){!t&&le(I())&&(t=I());ae(n);if(t){re(t);a.setAttribute("data-button-to-replace",t.className);n.insertBefore(a,t)}Q([e,n],s.loading)}};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */var Nt=function handleInputOptionsAndValue(e,t){if(t.input==="select"||t.input==="radio")Zt(e,t);else if(["text","email","number","tel","textarea"].some((function(e){return e===t.input}))&&(g(t.inputValue)||y(t.inputValue))){qt(I());Yt(e,t)}};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} innerParams
   * @returns {SweetAlertInputValue}
   */var Wt=function getInputValue(e,t){var n=e.getInput();if(!n)return null;switch(t.input){case"checkbox":return Ut(n);case"radio":return $t(n);case"file":return Kt(n);default:return t.inputAutoTrim?n.value.trim():n.value}};
/**
   * @param {HTMLInputElement} input
   * @returns {number}
   */var Ut=function getCheckboxValue(e){return e.checked?1:0};
/**
   * @param {HTMLInputElement} input
   * @returns {string | null}
   */var $t=function getRadioValue(e){return e.checked?e.value:null};
/**
   * @param {HTMLInputElement} input
   * @returns {FileList | File | null}
   */var Kt=function getFileValue(e){return e.files&&e.files.length?e.getAttribute("multiple")!==null?e.files:e.files[0]:null};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */var Zt=function handleInputOptions(e,t){var n=A();if(n){
/**
     * @param {Record<string, any>} inputOptions
     */
var a=function processInputOptions(e){t.input==="select"?populateSelectOptions(n,Xt(e),t):t.input==="radio"&&populateRadioOptions(n,Xt(e),t)};if(g(t.inputOptions)||y(t.inputOptions)){qt(I());b(t.inputOptions).then((function(t){e.hideLoading();a(t)}))}else _typeof(t.inputOptions)==="object"?a(t.inputOptions):w("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(t.inputOptions)))}};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */var Yt=function handleInputValue(e,t){var n=e.getInput();if(n){re(n);b(t.inputValue).then((function(a){n.value=t.input==="number"?"".concat(parseFloat(a)||0):"".concat(a);ae(n);n.focus();e.hideLoading()})).catch((function(t){w("Error in inputValue promise: ".concat(t));n.value="";ae(n);n.focus();e.hideLoading()}))}};
/**
   * @param {HTMLElement} popup
   * @param {InputOptionFlattened[]} inputOptions
   * @param {SweetAlertOptions} params
   */function populateSelectOptions(e,t,n){var a=te(e,s.select);if(a){
/**
     * @param {HTMLElement} parent
     * @param {string} optionLabel
     * @param {string} optionValue
     */
var r=function renderOption(e,t,a){var r=document.createElement("option");r.value=a;$(r,t);r.selected=Gt(a,n.inputValue);e.appendChild(r)};t.forEach((function(e){var t=e[0];var n=e[1];if(Array.isArray(n)){var o=document.createElement("optgroup");o.label=t;o.disabled=false;a.appendChild(o);n.forEach((function(e){return r(o,e[1],e[0])}))}else r(a,n,t)}));a.focus()}}
/**
   * @param {HTMLElement} popup
   * @param {InputOptionFlattened[]} inputOptions
   * @param {SweetAlertOptions} params
   */function populateRadioOptions(e,t,n){var a=te(e,s.radio);if(a){t.forEach((function(e){var t=e[0];var r=e[1];var o=document.createElement("input");var i=document.createElement("label");o.type="radio";o.name=s.radio;o.value=t;Gt(t,n.inputValue)&&(o.checked=true);var l=document.createElement("span");$(l,r);l.className=s.label;i.appendChild(o);i.appendChild(l);a.appendChild(i)}));var r=a.querySelectorAll("input");r.length&&r[0].focus()}}
/**
   * Converts `inputOptions` into an array of `[value, label]`s
   *
   * @param {Record<string, any>} inputOptions
   * @typedef {string[]} InputOptionFlattened
   * @returns {InputOptionFlattened[]}
   */var Xt=function formatInputOptions(e){
/** @type {InputOptionFlattened[]} */
var t=[];e instanceof Map?e.forEach((function(e,n){var a=e;_typeof(a)==="object"&&(a=formatInputOptions(a));t.push([n,a])})):Object.keys(e).forEach((function(n){var a=e[n];_typeof(a)==="object"&&(a=formatInputOptions(a));t.push([n,a])}));return t};
/**
   * @param {string} optionValue
   * @param {SweetAlertInputValue} inputValue
   * @returns {boolean}
   */var Gt=function isSelected(e,t){return!!t&&t.toString()===e.toString()};var Jt=void 0;
/**
   * @param {SweetAlert} instance
   */var Qt=function handleConfirmButtonClick(e){var t=Ee.innerParams.get(e);e.disableButtons();t.input?nn(e,"confirm"):ln(e,true)};
/**
   * @param {SweetAlert} instance
   */var en=function handleDenyButtonClick(e){var t=Ee.innerParams.get(e);e.disableButtons();t.returnInputValueOnDeny?nn(e,"deny"):rn(e,false)};
/**
   * @param {SweetAlert} instance
   * @param {Function} dismissWith
   */var tn=function handleCancelButtonClick(e,t){e.disableButtons();t(ut.cancel)};
/**
   * @param {SweetAlert} instance
   * @param {'confirm' | 'deny'} type
   */var nn=function handleConfirmOrDenyWithInput(e,t){var n=Ee.innerParams.get(e);if(n.input){var a=e.getInput();var r=Wt(e,n);if(n.inputValidator)an(e,r,t);else if(a&&!a.checkValidity()){e.enableButtons();e.showValidationMessage(n.validationMessage||a.validationMessage)}else t==="deny"?rn(e,r):ln(e,r)}else w('The "input" parameter is needed to be set when using returnInputValueOn'.concat(d(t)))};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertInputValue} inputValue
   * @param {'confirm' | 'deny'} type
   */var an=function handleInputValidator(e,t,n){var a=Ee.innerParams.get(e);e.disableInput();var r=Promise.resolve().then((function(){return b(a.inputValidator(t,a.validationMessage))}));r.then((function(a){e.enableButtons();e.enableInput();a?e.showValidationMessage(a):n==="deny"?rn(e,t):ln(e,t)}))};
/**
   * @param {SweetAlert} instance
   * @param {any} value
   */var rn=function deny(e,t){var n=Ee.innerParams.get(e||Jt);n.showLoaderOnDeny&&qt(j());if(n.preDeny){e.isAwaitingPromise=true;var a=Promise.resolve().then((function(){return b(n.preDeny(t,n.validationMessage))}));a.then((function(n){if(n===false){e.hideLoading();Ht(e)}else e.close({isDenied:true,value:typeof n==="undefined"?t:n})})).catch((function(t){return sn(e||Jt,t)}))}else e.close({isDenied:true,value:t})};
/**
   * @param {SweetAlert} instance
   * @param {any} value
   */var on=function succeedWith(e,t){e.close({isConfirmed:true,value:t})};
/**
   *
   * @param {SweetAlert} instance
   * @param {string} error
   */var sn=function rejectWith(e,t){e.rejectPromise(t)};
/**
   *
   * @param {SweetAlert} instance
   * @param {any} value
   */var ln=function confirm(e,t){var n=Ee.innerParams.get(e||Jt);n.showLoaderOnConfirm&&qt();if(n.preConfirm){e.resetValidationMessage();e.isAwaitingPromise=true;var a=Promise.resolve().then((function(){return b(n.preConfirm(t,n.validationMessage))}));a.then((function(n){if(le(O())||n===false){e.hideLoading();Ht(e)}else on(e,typeof n==="undefined"?t:n)})).catch((function(t){return sn(e||Jt,t)}))}else on(e,t)};function hideLoading(){var t=Ee.innerParams.get(this||e);if(t){var n=Ee.domCache.get(this||e);re(n.loader);W()?t.icon&&ae(P()):cn(n);ee([n.popup,n.actions],s.loading);n.popup.removeAttribute("aria-busy");n.popup.removeAttribute("data-loading");n.confirmButton.disabled=false;n.denyButton.disabled=false;n.cancelButton.disabled=false}}var cn=function showRelatedButton(e){var t=e.popup.getElementsByClassName(e.loader.getAttribute("data-button-to-replace"));t.length?ae(t[0],"inline-block"):ce()&&re(e.actions)};
/**
   * Gets the input DOM node, this method works with input parameter.
   *
   * @returns {HTMLInputElement | null}
   */function getInput(){var t=Ee.innerParams.get(this||e);var n=Ee.domCache.get(this||e);return n?X(n.popup,t.input):null}
/**
   * @param {SweetAlert} instance
   * @param {string[]} buttons
   * @param {boolean} disabled
   */function setButtonsDisabled(e,t,n){var a=Ee.domCache.get(e);t.forEach((function(e){a[e].disabled=n}))}
/**
   * @param {HTMLInputElement | null} input
   * @param {boolean} disabled
   */function setInputDisabled(e,t){var n=A();if(n&&e)if(e.type==="radio"){
/** @type {NodeListOf<HTMLInputElement>} */
var a=n.querySelectorAll('[name="'.concat(s.radio,'"]'));for(var r=0;r<a.length;r++)a[r].disabled=t}else e.disabled=t}function enableButtons(){setButtonsDisabled(this||e,["confirmButton","denyButton","cancelButton"],false)}function disableButtons(){setButtonsDisabled(this||e,["confirmButton","denyButton","cancelButton"],true)}function enableInput(){setInputDisabled(this.getInput(),false)}function disableInput(){setInputDisabled(this.getInput(),true)}
/**
   * Show block with validation message
   *
   * @param {string} error
   * @this {SweetAlert}
   */function showValidationMessage(t){var n=Ee.domCache.get(this||e);var a=Ee.innerParams.get(this||e);$(n.validationMessage,t);n.validationMessage.className=s["validation-message"];a.customClass&&a.customClass.validationMessage&&Q(n.validationMessage,a.customClass.validationMessage);ae(n.validationMessage);var r=this.getInput();if(r){r.setAttribute("aria-invalid","true");r.setAttribute("aria-describedby",s["validation-message"]);G(r);Q(r,s.inputerror)}}function resetValidationMessage(){var t=Ee.domCache.get(this||e);t.validationMessage&&re(t.validationMessage);var n=this.getInput();if(n){n.removeAttribute("aria-invalid");n.removeAttribute("aria-describedby");ee(n,s.inputerror)}}var un={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:false,animation:true,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:true,heightAuto:true,allowOutsideClick:true,allowEscapeKey:true,allowEnterKey:true,stopKeydownPropagation:true,keydownListenerCapture:false,showConfirmButton:true,showDenyButton:false,showCancelButton:false,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:true,reverseButtons:false,focusConfirm:true,focusDeny:false,focusCancel:false,returnFocus:true,showCloseButton:false,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:false,showLoaderOnDeny:false,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:false,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:true,inputAutoTrim:true,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:false,validationMessage:void 0,grow:false,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:true};var dn=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"];
/** @type {Record<string, string>} */var pn={};var wn=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"];
/**
   * Is valid parameter
   *
   * @param {string} paramName
   * @returns {boolean}
   */var fn=function isValidParameter(e){return Object.prototype.hasOwnProperty.call(un,e)};
/**
   * Is valid parameter for Swal.update() method
   *
   * @param {string} paramName
   * @returns {boolean}
   */var mn=function isUpdatableParameter(e){return dn.indexOf(e)!==-1};
/**
   * Is deprecated parameter
   *
   * @param {string} paramName
   * @returns {string | undefined}
   */var hn=function isDeprecatedParameter(e){return pn[e]};
/**
   * @param {string} param
   */var vn=function checkIfParamIsValid(e){fn(e)||p('Unknown parameter "'.concat(e,'"'))};
/**
   * @param {string} param
   */var gn=function checkIfToastParamIsValid(e){wn.includes(e)&&p('The parameter "'.concat(e,'" is incompatible with toasts'))};
/**
   * @param {string} param
   */var bn=function checkIfParamIsDeprecated(e){var t=hn(e);t&&h(e,t)};
/**
   * Show relevant warnings for given params
   *
   * @param {SweetAlertOptions} params
   */var yn=function showWarningsForParams(e){e.backdrop===false&&e.allowOutsideClick&&p('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(var t in e){vn(t);e.toast&&gn(t);bn(t)}};
/**
   * Updates popup parameters.
   *
   * @param {SweetAlertOptions} params
   */function update(t){var n=A();var a=Ee.innerParams.get(this||e);if(n&&!K(n,a.hideClass.popup)){var r=Cn(t);var o=Object.assign({},a,r);ot(this||e,o);Ee.innerParams.set(this||e,o);Object.defineProperties(this||e,{params:{value:Object.assign({},(this||e).params,t),writable:false,enumerable:true}})}else p("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.")}
/**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */var Cn=function filterValidParams(e){var t={};Object.keys(e).forEach((function(n){mn(n)?t[n]=e[n]:p("Invalid parameter to update: ".concat(n))}));return t};function _destroy(){var t=Ee.domCache.get(this||e);var a=Ee.innerParams.get(this||e);if(a){if(t.popup&&n.swalCloseEventFinishedCallback){n.swalCloseEventFinishedCallback();delete n.swalCloseEventFinishedCallback}typeof a.didDestroy==="function"&&a.didDestroy();kn(this||e)}else xn(this||e)}
/**
   * @param {SweetAlert} instance
   */var kn=function disposeSwal(e){xn(e);delete e.params;delete n.keydownHandler;delete n.keydownTarget;delete n.currentInstance};
/**
   * @param {SweetAlert} instance
   */var xn=function disposeWeakMaps(e){if(e.isAwaitingPromise){An(Ee,e);e.isAwaitingPromise=true}else{An(Ct,e);An(Ee,e);delete e.isAwaitingPromise;delete e.disableButtons;delete e.enableButtons;delete e.getInput;delete e.disableInput;delete e.enableInput;delete e.hideLoading;delete e.disableLoading;delete e.showValidationMessage;delete e.resetValidationMessage;delete e.close;delete e.closePopup;delete e.closeModal;delete e.closeToast;delete e.rejectPromise;delete e.update;delete e._destroy}};
/**
   * @param {object} obj
   * @param {SweetAlert} instance
   */var An=function unsetWeakMaps(e,t){for(var n in e)e[n].delete(t)};var Pn=Object.freeze({__proto__:null,_destroy:_destroy,close:close,closeModal:close,closePopup:close,closeToast:close,disableButtons:disableButtons,disableInput:disableInput,disableLoading:hideLoading,enableButtons:enableButtons,enableInput:enableInput,getInput:getInput,handleAwaitingPromise:Ht,hideLoading:hideLoading,rejectPromise:rejectPromise,resetValidationMessage:resetValidationMessage,showValidationMessage:showValidationMessage,update:update});
/**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {Function} dismissWith
   */var Bn=function handlePopupClick(e,t,n){if(e.toast)Tn(e,t,n);else{En(t);On(t);In(e,t,n)}};
/**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {Function} dismissWith
   */var Tn=function handleToastClick(e,t,n){t.popup.onclick=function(){e&&(Sn(e)||e.timer||e.input)||n(ut.close)}};
/**
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */var Sn=function isAnyButtonShown(e){return!!(e.showConfirmButton||e.showDenyButton||e.showCancelButton||e.showCloseButton)};var _n=false;
/**
   * @param {DomCache} domCache
   */var En=function handleModalMousedown(e){e.popup.onmousedown=function(){e.container.onmouseup=function(t){e.container.onmouseup=function(){};t.target===e.container&&(_n=true)}}};
/**
   * @param {DomCache} domCache
   */var On=function handleContainerMousedown(e){e.container.onmousedown=function(t){t.target===e.container&&t.preventDefault();e.popup.onmouseup=function(t){e.popup.onmouseup=function(){};(t.target===e.popup||t.target instanceof HTMLElement&&e.popup.contains(t.target))&&(_n=true)}}};
/**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {Function} dismissWith
   */var In=function handleModalClick(e,t,n){t.container.onclick=function(a){_n?_n=false:a.target===t.container&&v(e.allowOutsideClick)&&n(ut.backdrop)}};var Ln=function isJqueryElement(e){return _typeof(e)==="object"&&e.jquery};var jn=function isElement(e){return e instanceof Element||Ln(e)};var Mn=function argsToParams(e){var t={};_typeof(e[0])!=="object"||jn(e[0])?["title","html","icon"].forEach((function(n,a){var r=e[a];typeof r==="string"||jn(r)?t[n]=r:r!==void 0&&w("Unexpected type of ".concat(n,'! Expected "string" or "Element", got ').concat(_typeof(r)))})):Object.assign(t,e[0]);return t};
/**
   * Main method to create a new SweetAlert2 popup
   *
   * @param  {...SweetAlertOptions} args
   * @returns {Promise<SweetAlertResult>}
   */function fire(){var t=this||e;for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return _construct(t,a)}
/**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param {SweetAlertOptions} mixinParams
   * @returns {SweetAlert}
   */function mixin(t){var n=function(n){function MixinSwal(){_classCallCheck(this||e,MixinSwal);return _callSuper(this||e,MixinSwal,arguments)}_inherits(MixinSwal,n);return _createClass(MixinSwal,[{key:"_main",value:function _main(n,a){return _get(_getPrototypeOf(MixinSwal.prototype),"_main",this||e).call(this||e,n,Object.assign({},t,a))}}])}(this||e);return n}
/**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   *
   * @returns {number | undefined}
   */var Hn=function getTimerLeft(){return n.timeout&&n.timeout.getTimerLeft()};
/**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */var Vn=function stopTimer(){if(n.timeout){we();return n.timeout.stop()}};
/**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */var Dn=function resumeTimer(){if(n.timeout){var e=n.timeout.start();pe(e);return e}};
/**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */var zn=function toggleTimer(){var e=n.timeout;return e&&(e.running?Vn():Dn())};
/**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @param {number} ms
   * @returns {number | undefined}
   */var Rn=function increaseTimer(e){if(n.timeout){var t=n.timeout.increase(e);pe(t,true);return t}};
/**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   *
   * @returns {boolean}
   */var qn=function isTimerRunning(){return!!(n.timeout&&n.timeout.isRunning())};var Fn=false;var Nn={};
/**
   * @param {string} attr
   */function bindClickHandler(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";Nn[t]=this||e;if(!Fn){document.body.addEventListener("click",Wn);Fn=true}}var Wn=function bodyClickListener(e){for(var t=e.target;t&&t!==document;t=t.parentNode)for(var n in Nn){var a=t.getAttribute(n);if(a){Nn[n].fire({template:a});return}}};var Un=Object.freeze({__proto__:null,argsToParams:Mn,bindClickHandler:bindClickHandler,clickCancel:ct,clickConfirm:st,clickDeny:lt,enableLoading:qt,fire:fire,getActions:V,getCancelButton:L,getCloseButton:R,getConfirmButton:I,getContainer:C,getDenyButton:j,getFocusableElements:F,getFooter:D,getHtmlContainer:S,getIcon:P,getIconContent:B,getImage:_,getInputLabel:M,getLoader:H,getPopup:A,getProgressSteps:E,getTimerLeft:Hn,getTimerProgressBar:z,getTitle:T,getValidationMessage:O,increaseTimer:Rn,isDeprecatedParameter:hn,isLoading:U,isTimerRunning:qn,isUpdatableParameter:mn,isValidParameter:fn,isVisible:it,mixin:mixin,resumeTimer:Dn,showLoading:qt,stopTimer:Vn,toggleTimer:zn});var $n=function(){
/**
     * @param {Function} callback
     * @param {number} delay
     */
function Timer(t,n){_classCallCheck(this||e,Timer);(this||e).callback=t;(this||e).remaining=n;(this||e).running=false;this.start()}
/**
     * @returns {number}
     */return _createClass(Timer,[{key:"start",value:function start(){if(!(this||e).running){(this||e).running=true;(this||e).started=new Date;(this||e).id=setTimeout((this||e).callback,(this||e).remaining)}return(this||e).remaining}
/**
       * @returns {number}
       */},{key:"stop",value:function stop(){if((this||e).started&&(this||e).running){(this||e).running=false;clearTimeout((this||e).id);(this||e).remaining-=(new Date).getTime()-(this||e).started.getTime()}return(this||e).remaining}
/**
       * @param {number} n
       * @returns {number}
       */},{key:"increase",value:function increase(t){var n=(this||e).running;n&&this.stop();(this||e).remaining+=t;n&&this.start();return(this||e).remaining}
/**
       * @returns {number}
       */},{key:"getTimerLeft",value:function getTimerLeft(){if((this||e).running){this.stop();this.start()}return(this||e).remaining}
/**
       * @returns {boolean}
       */},{key:"isRunning",value:function isRunning(){return(this||e).running}}])}();var Kn=["swal-title","swal-html","swal-footer"];
/**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */var Zn=function getTemplateParams(e){
/** @type {HTMLTemplateElement} */
var t=typeof e.template==="string"?document.querySelector(e.template):e.template;if(!t)return{};
/** @type {DocumentFragment} */var n=t.content;na(n);var a=Object.assign(Yn(n),Xn(n),Gn(n),Jn(n),Qn(n),ea(n),ta(n,Kn));return a};
/**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */var Yn=function getSwalParams(e){var t={};
/** @type {HTMLElement[]} */var n=Array.from(e.querySelectorAll("swal-param"));n.forEach((function(e){aa(e,["name","value"]);var n=e.getAttribute("name");var a=e.getAttribute("value");typeof un[n]==="boolean"?t[n]=a!=="false":_typeof(un[n])==="object"?t[n]=JSON.parse(a):t[n]=a}));return t};
/**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */var Xn=function getSwalFunctionParams(e){var t={};
/** @type {HTMLElement[]} */var n=Array.from(e.querySelectorAll("swal-function-param"));n.forEach((function(e){var n=e.getAttribute("name");var a=e.getAttribute("value");t[n]=new Function("return ".concat(a))()}));return t};
/**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */var Gn=function getSwalButtons(e){var t={};
/** @type {HTMLElement[]} */var n=Array.from(e.querySelectorAll("swal-button"));n.forEach((function(e){aa(e,["type","color","aria-label"]);var n=e.getAttribute("type");t["".concat(n,"ButtonText")]=e.innerHTML;t["show".concat(d(n),"Button")]=true;e.hasAttribute("color")&&(t["".concat(n,"ButtonColor")]=e.getAttribute("color"));e.hasAttribute("aria-label")&&(t["".concat(n,"ButtonAriaLabel")]=e.getAttribute("aria-label"))}));return t};
/**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */var Jn=function getSwalImage(e){var t={};
/** @type {HTMLElement} */var n=e.querySelector("swal-image");if(n){aa(n,["src","width","height","alt"]);n.hasAttribute("src")&&(t.imageUrl=n.getAttribute("src"));n.hasAttribute("width")&&(t.imageWidth=n.getAttribute("width"));n.hasAttribute("height")&&(t.imageHeight=n.getAttribute("height"));n.hasAttribute("alt")&&(t.imageAlt=n.getAttribute("alt"))}return t};
/**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */var Qn=function getSwalIcon(e){var t={};
/** @type {HTMLElement} */var n=e.querySelector("swal-icon");if(n){aa(n,["type","color"]);n.hasAttribute("type")&&(
/** @type {SweetAlertIcon} */
t.icon=n.getAttribute("type"));n.hasAttribute("color")&&(t.iconColor=n.getAttribute("color"));t.iconHtml=n.innerHTML}return t};
/**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */var ea=function getSwalInput(e){var t={};
/** @type {HTMLElement} */var n=e.querySelector("swal-input");if(n){aa(n,["type","label","placeholder","value"]);
/** @type {SweetAlertInput} */t.input=n.getAttribute("type")||"text";n.hasAttribute("label")&&(t.inputLabel=n.getAttribute("label"));n.hasAttribute("placeholder")&&(t.inputPlaceholder=n.getAttribute("placeholder"));n.hasAttribute("value")&&(t.inputValue=n.getAttribute("value"))}
/** @type {HTMLElement[]} */var a=Array.from(e.querySelectorAll("swal-input-option"));if(a.length){t.inputOptions={};a.forEach((function(e){aa(e,["value"]);var n=e.getAttribute("value");var a=e.innerHTML;t.inputOptions[n]=a}))}return t};
/**
   * @param {DocumentFragment} templateContent
   * @param {string[]} paramNames
   * @returns {SweetAlertOptions}
   */var ta=function getSwalStringParams(e,t){var n={};for(var a in t){var r=t[a];
/** @type {HTMLElement} */var o=e.querySelector(r);if(o){aa(o,[]);n[r.replace(/^swal-/,"")]=o.innerHTML.trim()}}return n};
/**
   * @param {DocumentFragment} templateContent
   */var na=function showWarningsForElements(e){var t=Kn.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(e.children).forEach((function(e){var n=e.tagName.toLowerCase();t.includes(n)||p("Unrecognized element <".concat(n,">"))}))};
/**
   * @param {HTMLElement} el
   * @param {string[]} allowedAttributes
   */var aa=function showWarningsForAttributes(e,t){Array.from(e.attributes).forEach((function(n){t.indexOf(n.name)===-1&&p(['Unrecognized attribute "'.concat(n.name,'" on <').concat(e.tagName.toLowerCase(),">."),"".concat(t.length?"Allowed attributes are: ".concat(t.join(", ")):"To set the value, use HTML within the element.")])}))};var ra=10;
/**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param {SweetAlertOptions} params
   */var oa=function openPopup(e){var t=C();var a=A();typeof e.willOpen==="function"&&e.willOpen(a);var r=window.getComputedStyle(document.body);var o=r.overflowY;ca(t,a,e);setTimeout((function(){sa(t,a)}),ra);if(N()){la(t,e.scrollbarPadding,o);kt()}W()||n.previousActiveElement||(n.previousActiveElement=document.activeElement);typeof e.didOpen==="function"&&setTimeout((function(){return e.didOpen(a)}));ee(t,s["no-transition"])};
/**
   * @param {AnimationEvent} event
   */var ia=function swalOpenAnimationFinished(e){var t=A();if(e.target===t&&Be){var n=C();t.removeEventListener(Be,swalOpenAnimationFinished);n.style.overflowY="auto"}};
/**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   */var sa=function setScrollingVisibility(e,t){if(Be&&de(t)){e.style.overflowY="hidden";t.addEventListener(Be,ia)}else e.style.overflowY="auto"};
/**
   * @param {HTMLElement} container
   * @param {boolean} scrollbarPadding
   * @param {string} initialBodyOverflow
   */var la=function fixScrollContainer(e,t,n){Pt();t&&n!=="hidden"&&Lt(n);setTimeout((function(){e.scrollTop=0}))};
/**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */var ca=function addClasses(e,t,n){Q(e,n.showClass.backdrop);if(n.animation){t.style.setProperty("opacity","0","important");ae(t,"grid");setTimeout((function(){Q(t,n.showClass.popup);t.style.removeProperty("opacity")}),ra)}else ae(t,"grid");Q([document.documentElement,document.body],s.shown);n.heightAuto&&n.backdrop&&!n.toast&&Q([document.documentElement,document.body],s["height-auto"])};var ua={
/**
     * @param {string} string
     * @param {string} [validationMessage]
     * @returns {Promise<string | void>}
     */
email:function email(e,t){return/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid email address")},
/**
     * @param {string} string
     * @param {string} [validationMessage]
     * @returns {Promise<string | void>}
     */
url:function url(e,t){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid URL")}};
/**
   * @param {SweetAlertOptions} params
   */function setDefaultInputValidators(e){if(!e.inputValidator){e.input==="email"&&(e.inputValidator=ua.email);e.input==="url"&&(e.inputValidator=ua.url)}}
/**
   * @param {SweetAlertOptions} params
   */function validateCustomTargetElement(e){if(!e.target||typeof e.target==="string"&&!document.querySelector(e.target)||typeof e.target!=="string"&&!e.target.appendChild){p('Target parameter is not valid, defaulting to "body"');e.target="body"}}
/**
   * Set type, text and actions on popup
   *
   * @param {SweetAlertOptions} params
   */function setParameters(e){setDefaultInputValidators(e);e.showLoaderOnConfirm&&!e.preConfirm&&p("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request");validateCustomTargetElement(e);typeof e.title==="string"&&(e.title=e.title.split("\n").join("<br />"));ke(e)}
/** @type {SweetAlert} */var da;var pa=new WeakMap;var wa=function(){
/**
     * @param {...any} args
     * @this {SweetAlert}
     */
function SweetAlert(){_classCallCheck(this||e,SweetAlert);
/**
       * @type {Promise<SweetAlertResult>}
       */_classPrivateFieldInitSpec(this||e,pa,void 0);if(typeof window!=="undefined"){da=this||e;for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];var r=Object.freeze((this||e).constructor.argsToParams(n));
/** @type {Readonly<SweetAlertOptions>} */(this||e).params=r;
/** @type {boolean} */(this||e).isAwaitingPromise=false;_classPrivateFieldSet2(pa,this||e,this._main(da.params))}}return _createClass(SweetAlert,[{key:"_main",value:function _main(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};yn(Object.assign({},t,e));if(n.currentInstance){var a=Ct.swalPromiseResolve.get(n.currentInstance);var r=n.currentInstance.isAwaitingPromise;n.currentInstance._destroy();r||a({isDismissed:true});N()&&xt()}n.currentInstance=da;var o=ma(e,t);setParameters(o);Object.freeze(o);if(n.timeout){n.timeout.stop();delete n.timeout}clearTimeout(n.restoreFocusTimeout);var i=ha(da);ot(da,o);Ee.innerParams.set(da,o);return fa(da,i,o)}},{key:"then",value:function then(t){return _classPrivateFieldGet2(pa,this||e).then(t)}},{key:"finally",value:function _finally(t){return _classPrivateFieldGet2(pa,this||e).finally(t)}}])}();
/**
   * @param {SweetAlert} instance
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {Promise}
   */var fa=function swalPromise(e,t,a){return new Promise((function(r,o){
/**
       * @param {DismissReason} dismiss
       */
var i=function dismissWith(t){e.close({isDismissed:true,dismiss:t})};Ct.swalPromiseResolve.set(e,r);Ct.swalPromiseReject.set(e,o);t.confirmButton.onclick=function(){Qt(e)};t.denyButton.onclick=function(){en(e)};t.cancelButton.onclick=function(){tn(e,i)};t.closeButton.onclick=function(){i(ut.close)};Bn(a,t,i);pt(n,a,i);Nt(e,a);oa(a);va(n,a,i);ga(t,a);setTimeout((function(){t.container.scrollTop=0}))}))};
/**
   * @param {SweetAlertOptions} userParams
   * @param {SweetAlertOptions} mixinParams
   * @returns {SweetAlertOptions}
   */var ma=function prepareParams(e,t){var n=Zn(e);var a=Object.assign({},un,t,n,e);a.showClass=Object.assign({},un.showClass,a.showClass);a.hideClass=Object.assign({},un.hideClass,a.hideClass);if(a.animation===false){a.showClass={backdrop:"swal2-noanimation"};a.hideClass={}}return a};
/**
   * @param {SweetAlert} instance
   * @returns {DomCache}
   */var ha=function populateDomCache(e){var t={popup:A(),container:C(),actions:V(),confirmButton:I(),denyButton:j(),cancelButton:L(),loader:H(),closeButton:R(),validationMessage:O(),progressSteps:E()};Ee.domCache.set(e,t);return t};
/**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {Function} dismissWith
   */var va=function setupTimer(e,t,n){var a=z();re(a);if(t.timer){e.timeout=new $n((function(){n("timer");delete e.timeout}),t.timer);if(t.timerProgressBar){ae(a);Y(a,t,"timerProgressBar");setTimeout((function(){e.timeout&&e.timeout.running&&pe(t.timer)}))}}};
/**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   */var ga=function initFocus(e,t){t.toast||(v(t.allowEnterKey)?ba(e,t)||wt(-1,1):ya())};
/**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */var ba=function focusButton(e,t){if(t.focusDeny&&le(e.denyButton)){e.denyButton.focus();return true}if(t.focusCancel&&le(e.cancelButton)){e.cancelButton.focus();return true}if(t.focusConfirm&&le(e.confirmButton)){e.confirmButton.focus();return true}return false};var ya=function blurActiveElement(){document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur==="function"&&document.activeElement.blur()};if(typeof window!=="undefined"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){var Ca=new Date;var ka=localStorage.getItem("swal-initiation");ka?(Ca.getTime()-Date.parse(ka))/864e5>3&&setTimeout((function(){document.body.style.pointerEvents="none";var e=document.createElement("audio");e.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3";e.loop=true;document.body.appendChild(e);setTimeout((function(){e.play().catch((function(){}))}),2500)}),500):localStorage.setItem("swal-initiation","".concat(Ca))}wa.prototype.disableButtons=disableButtons;wa.prototype.enableButtons=enableButtons;wa.prototype.getInput=getInput;wa.prototype.disableInput=disableInput;wa.prototype.enableInput=enableInput;wa.prototype.hideLoading=hideLoading;wa.prototype.disableLoading=hideLoading;wa.prototype.showValidationMessage=showValidationMessage;wa.prototype.resetValidationMessage=resetValidationMessage;wa.prototype.close=close;wa.prototype.closePopup=close;wa.prototype.closeModal=close;wa.prototype.closeToast=close;wa.prototype.rejectPromise=rejectPromise;wa.prototype.update=update;wa.prototype._destroy=_destroy;Object.assign(wa,Un);Object.keys(Pn).forEach((function(e){
/**
     * @param {...any} args
     * @returns {any | undefined}
     */
wa[e]=function(){if(da&&da[e]){var t;return(t=da)[e].apply(t,arguments)}return null}}));wa.DismissReason=ut;wa.version="11.11.0";var xa=wa;xa.default=xa;return xa}));typeof t!=="undefined"&&t.Sweetalert2&&(t.swal=t.sweetAlert=t.Swal=t.SweetAlert=t.Sweetalert2);"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}');var n=t;export{n as default};

