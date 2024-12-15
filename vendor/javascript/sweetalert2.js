// sweetalert2@11.15.0 downloaded from https://ga.jspm.io/npm:sweetalert2@11.15.0/dist/sweetalert2.all.js

var e=typeof globalThis!=="undefined"?globalThis:typeof self!=="undefined"?self:global;var t={};(function(e,o){t=o()})(0,(function(){function _assertClassBrand(e,t,o){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:o;throw new TypeError("Private element is not present on this object")}function _checkPrivateRedeclaration(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function _classPrivateFieldGet2(e,t){return e.get(_assertClassBrand(e,t))}function _classPrivateFieldInitSpec(e,t,o){_checkPrivateRedeclaration(e,t),t.set(e,o)}function _classPrivateFieldSet2(e,t,o){return e.set(_assertClassBrand(e,t),o),o}const t=100;
/** @type {GlobalState} */const o={};const focusPreviousActiveElement=()=>{if(o.previousActiveElement instanceof HTMLElement){o.previousActiveElement.focus();o.previousActiveElement=null}else document.body&&document.body.focus()};
/**
   * Restore previous active (focused) element
   *
   * @param {boolean} returnFocus
   * @returns {Promise<void>}
   */const restoreActiveElement=e=>new Promise((n=>{if(!e)return n();const s=window.scrollX;const a=window.scrollY;o.restoreFocusTimeout=setTimeout((()=>{focusPreviousActiveElement();n()}),t);window.scrollTo(s,a)}));const n="swal2-";
/**
   * @typedef {Record<SwalClass, string>} SwalClasses
   */
/**
   * @typedef {'success' | 'warning' | 'info' | 'question' | 'error'} SwalIcon
   * @typedef {Record<SwalIcon, string>} SwalIcons
   */
/** @type {SwalClass[]} */const s=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"];const a=s.reduce(((e,t)=>{e[t]=n+t;return e}),/** @type {SwalClasses} */{});
/** @type {SwalIcon[]} */const i=["success","warning","info","question","error"];const r=i.reduce(((e,t)=>{e[t]=n+t;return e}),/** @type {SwalIcons} */{});const l="SweetAlert2:";
/**
   * Capitalize the first letter of a string
   *
   * @param {string} str
   * @returns {string}
   */const capitalizeFirstLetter=e=>e.charAt(0).toUpperCase()+e.slice(1)
/**
   * Standardize console warnings
   *
   * @param {string | string[]} message
   */;const warn=e=>{console.warn(`${l} ${typeof e==="object"?e.join(" "):e}`)};
/**
   * Standardize console errors
   *
   * @param {string} message
   */const error=e=>{console.error(`${l} ${e}`)};
/**
   * Private global state for `warnOnce`
   *
   * @type {string[]}
   * @private
   */const c=[];
/**
   * Show a console warning, but only if it hasn't already been shown
   *
   * @param {string} message
   */const warnOnce=e=>{if(!c.includes(e)){c.push(e);warn(e)}};
/**
   * Show a one-time console warning about deprecated params/methods
   *
   * @param {string} deprecatedParam
   * @param {string?} useInstead
   */const warnAboutDeprecation=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;warnOnce(`"${e}" is deprecated and will be removed in the next major release.${t?` Use "${t}" instead.`:""}`)};
/**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   *
   * @param {Function | any} arg
   * @returns {any}
   */const callIfFunction=e=>typeof e==="function"?e():e
/**
   * @param {any} arg
   * @returns {boolean}
   */;const hasToPromiseFn=e=>e&&typeof e.toPromise==="function"
/**
   * @param {any} arg
   * @returns {Promise<any>}
   */;const asPromise=e=>hasToPromiseFn(e)?e.toPromise():Promise.resolve(e)
/**
   * @param {any} arg
   * @returns {boolean}
   */;const isPromise=e=>e&&Promise.resolve(e)===e
/**
   * Gets the popup container which contains the backdrop and the popup itself.
   *
   * @returns {HTMLElement | null}
   */;const getContainer=()=>document.body.querySelector(`.${a.container}`)
/**
   * @param {string} selectorString
   * @returns {HTMLElement | null}
   */;const elementBySelector=e=>{const t=getContainer();return t?t.querySelector(e):null};
/**
   * @param {string} className
   * @returns {HTMLElement | null}
   */const elementByClass=e=>elementBySelector(`.${e}`);
/**
   * @returns {HTMLElement | null}
   */const getPopup=()=>elementByClass(a.popup)
/**
   * @returns {HTMLElement | null}
   */;const getIcon=()=>elementByClass(a.icon)
/**
   * @returns {HTMLElement | null}
   */;const getIconContent=()=>elementByClass(a["icon-content"])
/**
   * @returns {HTMLElement | null}
   */;const getTitle=()=>elementByClass(a.title)
/**
   * @returns {HTMLElement | null}
   */;const getHtmlContainer=()=>elementByClass(a["html-container"])
/**
   * @returns {HTMLElement | null}
   */;const getImage=()=>elementByClass(a.image)
/**
   * @returns {HTMLElement | null}
   */;const getProgressSteps=()=>elementByClass(a["progress-steps"])
/**
   * @returns {HTMLElement | null}
   */;const getValidationMessage=()=>elementByClass(a["validation-message"])
/**
   * @returns {HTMLButtonElement | null}
   */;const getConfirmButton=()=>/** @type {HTMLButtonElement} */elementBySelector(`.${a.actions} .${a.confirm}`)
/**
   * @returns {HTMLButtonElement | null}
   */;const getCancelButton=()=>/** @type {HTMLButtonElement} */elementBySelector(`.${a.actions} .${a.cancel}`)
/**
   * @returns {HTMLButtonElement | null}
   */;const getDenyButton=()=>/** @type {HTMLButtonElement} */elementBySelector(`.${a.actions} .${a.deny}`)
/**
   * @returns {HTMLElement | null}
   */;const getInputLabel=()=>elementByClass(a["input-label"])
/**
   * @returns {HTMLElement | null}
   */;const getLoader=()=>elementBySelector(`.${a.loader}`)
/**
   * @returns {HTMLElement | null}
   */;const getActions=()=>elementByClass(a.actions)
/**
   * @returns {HTMLElement | null}
   */;const getFooter=()=>elementByClass(a.footer)
/**
   * @returns {HTMLElement | null}
   */;const getTimerProgressBar=()=>elementByClass(a["timer-progress-bar"])
/**
   * @returns {HTMLElement | null}
   */;const getCloseButton=()=>elementByClass(a.close);const d='\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n';
/**
   * @returns {HTMLElement[]}
   */const getFocusableElements=()=>{const e=getPopup();if(!e)return[];
/** @type {NodeListOf<HTMLElement>} */const t=e.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])');const o=Array.from(t).sort(((e,t)=>{const o=parseInt(e.getAttribute("tabindex")||"0");const n=parseInt(t.getAttribute("tabindex")||"0");return o>n?1:o<n?-1:0}));
/** @type {NodeListOf<HTMLElement>} */const n=e.querySelectorAll(d);const s=Array.from(n).filter((e=>e.getAttribute("tabindex")!=="-1"));return[...new Set(o.concat(s))].filter((e=>isVisible$1(e)))};
/**
   * @returns {boolean}
   */const isModal=()=>hasClass(document.body,a.shown)&&!hasClass(document.body,a["toast-shown"])&&!hasClass(document.body,a["no-backdrop"]);
/**
   * @returns {boolean}
   */const isToast=()=>{const e=getPopup();return!!e&&hasClass(e,a.toast)};
/**
   * @returns {boolean}
   */const isLoading=()=>{const e=getPopup();return!!e&&e.hasAttribute("data-loading")};
/**
   * Securely set innerHTML of an element
   * https://github.com/sweetalert2/sweetalert2/issues/1926
   *
   * @param {HTMLElement} elem
   * @param {string} html
   */const setInnerHtml=(e,t)=>{e.textContent="";if(t){const o=new DOMParser;const n=o.parseFromString(t,"text/html");const s=n.querySelector("head");s&&Array.from(s.childNodes).forEach((t=>{e.appendChild(t)}));const a=n.querySelector("body");a&&Array.from(a.childNodes).forEach((t=>{t instanceof HTMLVideoElement||t instanceof HTMLAudioElement?e.appendChild(t.cloneNode(true)):e.appendChild(t)}))}};
/**
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {boolean}
   */const hasClass=(e,t)=>{if(!t)return false;const o=t.split(/\s+/);for(let t=0;t<o.length;t++)if(!e.classList.contains(o[t]))return false;return true};
/**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   */const removeCustomClasses=(e,t)=>{Array.from(e.classList).forEach((o=>{Object.values(a).includes(o)||Object.values(r).includes(o)||Object.values(t.showClass||{}).includes(o)||e.classList.remove(o)}))};
/**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   * @param {string} className
   */const applyCustomClass=(e,t,o)=>{removeCustomClasses(e,t);if(!t.customClass)return;const n=t.customClass[/** @type {keyof SweetAlertCustomClass} */o];n&&(typeof n==="string"||n.forEach?addClass(e,n):warn(`Invalid type of customClass.${o}! Expected string or iterable object, got "${typeof n}"`))};
/**
   * @param {HTMLElement} popup
   * @param {import('./renderers/renderInput').InputClass | SweetAlertInput} inputClass
   * @returns {HTMLInputElement | null}
   */const getInput$1=(e,t)=>{if(!t)return null;switch(t){case"select":case"textarea":case"file":return e.querySelector(`.${a.popup} > .${a[t]}`);case"checkbox":return e.querySelector(`.${a.popup} > .${a.checkbox} input`);case"radio":return e.querySelector(`.${a.popup} > .${a.radio} input:checked`)||e.querySelector(`.${a.popup} > .${a.radio} input:first-child`);case"range":return e.querySelector(`.${a.popup} > .${a.range} input`);default:return e.querySelector(`.${a.popup} > .${a.input}`)}};
/**
   * @param {HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement} input
   */const focusInput=e=>{e.focus();if(e.type!=="file"){const t=e.value;e.value="";e.value=t}};
/**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   * @param {boolean} condition
   */const toggleClass=(e,t,o)=>{if(e&&t){typeof t==="string"&&(t=t.split(/\s+/).filter(Boolean));t.forEach((t=>{Array.isArray(e)?e.forEach((e=>{o?e.classList.add(t):e.classList.remove(t)})):o?e.classList.add(t):e.classList.remove(t)}))}};
/**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   */const addClass=(e,t)=>{toggleClass(e,t,true)};
/**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   */const removeClass=(e,t)=>{toggleClass(e,t,false)};
/**
   * Get direct child of an element by class name
   *
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {HTMLElement | undefined}
   */const getDirectChildByClass=(e,t)=>{const o=Array.from(e.children);for(let e=0;e<o.length;e++){const n=o[e];if(n instanceof HTMLElement&&hasClass(n,t))return n}};
/**
   * @param {HTMLElement} elem
   * @param {string} property
   * @param {*} value
   */const applyNumericalStyle=(e,t,o)=>{o===`${parseInt(o)}`&&(o=parseInt(o));o||parseInt(o)===0?e.style.setProperty(t,typeof o==="number"?`${o}px`:o):e.style.removeProperty(t)};
/**
   * @param {HTMLElement | null} elem
   * @param {string} display
   */const show=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";e&&(e.style.display=t)};
/**
   * @param {HTMLElement | null} elem
   */const hide=e=>{e&&(e.style.display="none")};
/**
   * @param {HTMLElement | null} elem
   * @param {string} display
   */const showWhenInnerHtmlPresent=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"block";e&&new MutationObserver((()=>{toggle(e,e.innerHTML,t)})).observe(e,{childList:true,subtree:true})};
/**
   * @param {HTMLElement} parent
   * @param {string} selector
   * @param {string} property
   * @param {string} value
   */const setStyle=(e,t,o,n)=>{
/** @type {HTMLElement | null} */
const s=e.querySelector(t);s&&s.style.setProperty(o,n)};
/**
   * @param {HTMLElement} elem
   * @param {any} condition
   * @param {string} display
   */const toggle=function(e,t){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";t?show(e,o):hide(e)};
/**
   * borrowed from jquery $(elem).is(':visible') implementation
   *
   * @param {HTMLElement | null} elem
   * @returns {boolean}
   */const isVisible$1=e=>!!(e&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length))
/**
   * @returns {boolean}
   */;const allButtonsAreHidden=()=>!isVisible$1(getConfirmButton())&&!isVisible$1(getDenyButton())&&!isVisible$1(getCancelButton())
/**
   * @param {HTMLElement} elem
   * @returns {boolean}
   */;const isScrollable=e=>!!(e.scrollHeight>e.clientHeight)
/**
   * borrowed from https://stackoverflow.com/a/46352119
   *
   * @param {HTMLElement} elem
   * @returns {boolean}
   */;const hasCssAnimation=e=>{const t=window.getComputedStyle(e);const o=parseFloat(t.getPropertyValue("animation-duration")||"0");const n=parseFloat(t.getPropertyValue("transition-duration")||"0");return o>0||n>0};
/**
   * @param {number} timer
   * @param {boolean} reset
   */const animateTimerProgressBar=function(e){let t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];const o=getTimerProgressBar();if(o&&isVisible$1(o)){if(t){o.style.transition="none";o.style.width="100%"}setTimeout((()=>{o.style.transition=`width ${e/1e3}s linear`;o.style.width="0%"}),10)}};const stopTimerProgressBar=()=>{const e=getTimerProgressBar();if(!e)return;const t=parseInt(window.getComputedStyle(e).width);e.style.removeProperty("transition");e.style.width="100%";const o=parseInt(window.getComputedStyle(e).width);const n=t/o*100;e.style.width=`${n}%`};
/**
   * Detect Node env
   *
   * @returns {boolean}
   */const isNodeEnv=()=>typeof window==="undefined"||typeof document==="undefined";const u=`\n <div aria-labelledby="${a.title}" aria-describedby="${a["html-container"]}" class="${a.popup}" tabindex="-1">\n   <button type="button" class="${a.close}"></button>\n   <ul class="${a["progress-steps"]}"></ul>\n   <div class="${a.icon}"></div>\n   <img class="${a.image}" />\n   <h2 class="${a.title}" id="${a.title}"></h2>\n   <div class="${a["html-container"]}" id="${a["html-container"]}"></div>\n   <input class="${a.input}" id="${a.input}" />\n   <input type="file" class="${a.file}" />\n   <div class="${a.range}">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="${a.select}" id="${a.select}"></select>\n   <div class="${a.radio}"></div>\n   <label class="${a.checkbox}">\n     <input type="checkbox" id="${a.checkbox}" />\n     <span class="${a.label}"></span>\n   </label>\n   <textarea class="${a.textarea}" id="${a.textarea}"></textarea>\n   <div class="${a["validation-message"]}" id="${a["validation-message"]}"></div>\n   <div class="${a.actions}">\n     <div class="${a.loader}"></div>\n     <button type="button" class="${a.confirm}"></button>\n     <button type="button" class="${a.deny}"></button>\n     <button type="button" class="${a.cancel}"></button>\n   </div>\n   <div class="${a.footer}"></div>\n   <div class="${a["timer-progress-bar-container"]}">\n     <div class="${a["timer-progress-bar"]}"></div>\n   </div>\n </div>\n`.replace(/(^|\n)\s*/g,"");
/**
   * @returns {boolean}
   */const resetOldContainer=()=>{const e=getContainer();if(!e)return false;e.remove();removeClass([document.documentElement,document.body],[a["no-backdrop"],a["toast-shown"],a["has-column"]]);return true};const resetValidationMessage$1=()=>{o.currentInstance.resetValidationMessage()};const addInputChangeListeners=()=>{const e=getPopup();const t=getDirectChildByClass(e,a.input);const o=getDirectChildByClass(e,a.file);
/** @type {HTMLInputElement} */const n=e.querySelector(`.${a.range} input`);
/** @type {HTMLOutputElement} */const s=e.querySelector(`.${a.range} output`);const i=getDirectChildByClass(e,a.select);
/** @type {HTMLInputElement} */const r=e.querySelector(`.${a.checkbox} input`);const l=getDirectChildByClass(e,a.textarea);t.oninput=resetValidationMessage$1;o.onchange=resetValidationMessage$1;i.onchange=resetValidationMessage$1;r.onchange=resetValidationMessage$1;l.oninput=resetValidationMessage$1;n.oninput=()=>{resetValidationMessage$1();s.value=n.value};n.onchange=()=>{resetValidationMessage$1();s.value=n.value}};
/**
   * @param {string | HTMLElement} target
   * @returns {HTMLElement}
   */const getTarget=e=>typeof e==="string"?document.querySelector(e):e
/**
   * @param {SweetAlertOptions} params
   */;const setupAccessibility=e=>{const t=getPopup();t.setAttribute("role",e.toast?"alert":"dialog");t.setAttribute("aria-live",e.toast?"polite":"assertive");e.toast||t.setAttribute("aria-modal","true")};
/**
   * @param {HTMLElement} targetElement
   */const setupRTL=e=>{window.getComputedStyle(e).direction==="rtl"&&addClass(getContainer(),a.rtl)};
/**
   * Add modal + backdrop + no-war message for Russians to DOM
   *
   * @param {SweetAlertOptions} params
   */const init=e=>{const t=resetOldContainer();if(isNodeEnv()){error("SweetAlert2 requires document to initialize");return}const o=document.createElement("div");o.className=a.container;t&&addClass(o,a["no-transition"]);setInnerHtml(o,u);const n=getTarget(e.target);n.appendChild(o);setupAccessibility(e);setupRTL(n);addInputChangeListeners()};
/**
   * @param {HTMLElement | object | string} param
   * @param {HTMLElement} target
   */const parseHtmlToContainer=(e,t)=>{e instanceof HTMLElement?t.appendChild(e):typeof e==="object"?handleObject(e,t):e&&setInnerHtml(t,e)};
/**
   * @param {any} param
   * @param {HTMLElement} target
   */const handleObject=(e,t)=>{e.jquery?handleJqueryElem(t,e):setInnerHtml(t,e.toString())};
/**
   * @param {HTMLElement} target
   * @param {any} elem
   */const handleJqueryElem=(e,t)=>{e.textContent="";if(0 in t)for(let o=0;o in t;o++)e.appendChild(t[o].cloneNode(true));else e.appendChild(t.cloneNode(true))};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */const renderActions=(e,t)=>{const o=getActions();const n=getLoader();if(o&&n){t.showConfirmButton||t.showDenyButton||t.showCancelButton?show(o):hide(o);applyCustomClass(o,t,"actions");renderButtons(o,n,t);setInnerHtml(n,t.loaderHtml||"");applyCustomClass(n,t,"loader")}};
/**
   * @param {HTMLElement} actions
   * @param {HTMLElement} loader
   * @param {SweetAlertOptions} params
   */function renderButtons(e,t,o){const n=getConfirmButton();const s=getDenyButton();const a=getCancelButton();if(n&&s&&a){renderButton(n,"confirm",o);renderButton(s,"deny",o);renderButton(a,"cancel",o);handleButtonsStyling(n,s,a,o);if(o.reverseButtons)if(o.toast){e.insertBefore(a,n);e.insertBefore(s,n)}else{e.insertBefore(a,t);e.insertBefore(s,t);e.insertBefore(n,t)}}}
/**
   * @param {HTMLElement} confirmButton
   * @param {HTMLElement} denyButton
   * @param {HTMLElement} cancelButton
   * @param {SweetAlertOptions} params
   */function handleButtonsStyling(e,t,o,n){if(n.buttonsStyling){addClass([e,t,o],a.styled);if(n.confirmButtonColor){e.style.backgroundColor=n.confirmButtonColor;addClass(e,a["default-outline"])}if(n.denyButtonColor){t.style.backgroundColor=n.denyButtonColor;addClass(t,a["default-outline"])}if(n.cancelButtonColor){o.style.backgroundColor=n.cancelButtonColor;addClass(o,a["default-outline"])}}else removeClass([e,t,o],a.styled)}
/**
   * @param {HTMLElement} button
   * @param {'confirm' | 'deny' | 'cancel'} buttonType
   * @param {SweetAlertOptions} params
   */function renderButton(e,t,o){const n=/** @type {'Confirm' | 'Deny' | 'Cancel'} */capitalizeFirstLetter(t);toggle(e,o[`show${n}Button`],"inline-block");setInnerHtml(e,o[`${t}ButtonText`]||"");e.setAttribute("aria-label",o[`${t}ButtonAriaLabel`]||"");e.className=a[t];applyCustomClass(e,o,`${t}Button`)}
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */const renderCloseButton=(e,t)=>{const o=getCloseButton();if(o){setInnerHtml(o,t.closeButtonHtml||"");applyCustomClass(o,t,"closeButton");toggle(o,t.showCloseButton);o.setAttribute("aria-label",t.closeButtonAriaLabel||"")}};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */const renderContainer=(e,t)=>{const o=getContainer();if(o){handleBackdropParam(o,t.backdrop);handlePositionParam(o,t.position);handleGrowParam(o,t.grow);applyCustomClass(o,t,"container")}};
/**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['backdrop']} backdrop
   */function handleBackdropParam(e,t){typeof t==="string"?e.style.background=t:t||addClass([document.documentElement,document.body],a["no-backdrop"])}
/**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['position']} position
   */function handlePositionParam(e,t){if(t)if(t in a)addClass(e,a[t]);else{warn('The "position" parameter is not valid, defaulting to "center"');addClass(e,a.center)}}
/**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['grow']} grow
   */function handleGrowParam(e,t){t&&addClass(e,a[`grow-${t}`])}var w={innerParams:new WeakMap,domCache:new WeakMap};
/** @type {InputClass[]} */const p=["input","file","range","select","radio","checkbox","textarea"];
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */const renderInput=(e,t)=>{const o=getPopup();if(!o)return;const n=w.innerParams.get(e);const s=!n||t.input!==n.input;p.forEach((e=>{const n=getDirectChildByClass(o,a[e]);if(n){setAttributes(e,t.inputAttributes);n.className=a[e];s&&hide(n)}}));if(t.input){s&&showInput(t);setCustomClass(t)}};
/**
   * @param {SweetAlertOptions} params
   */const showInput=e=>{if(!e.input)return;if(!m[e.input]){error(`Unexpected type of input! Expected ${Object.keys(m).join(" | ")}, got "${e.input}"`);return}const t=getInputContainer(e.input);if(!t)return;const o=m[e.input](t,e);show(t);e.inputAutoFocus&&setTimeout((()=>{focusInput(o)}))};
/**
   * @param {HTMLInputElement} input
   */const removeAttributes=e=>{for(let t=0;t<e.attributes.length;t++){const o=e.attributes[t].name;["id","type","value","style"].includes(o)||e.removeAttribute(o)}};
/**
   * @param {InputClass} inputClass
   * @param {SweetAlertOptions['inputAttributes']} inputAttributes
   */const setAttributes=(e,t)=>{const o=getPopup();if(!o)return;const n=getInput$1(o,e);if(n){removeAttributes(n);for(const e in t)n.setAttribute(e,t[e])}};
/**
   * @param {SweetAlertOptions} params
   */const setCustomClass=e=>{if(!e.input)return;const t=getInputContainer(e.input);t&&applyCustomClass(t,e,"input")};
/**
   * @param {HTMLInputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions} params
   */const setInputPlaceholder=(e,t)=>{!e.placeholder&&t.inputPlaceholder&&(e.placeholder=t.inputPlaceholder)};
/**
   * @param {Input} input
   * @param {Input} prependTo
   * @param {SweetAlertOptions} params
   */const setInputLabel=(e,t,o)=>{if(o.inputLabel){const n=document.createElement("label");const s=a["input-label"];n.setAttribute("for",e.id);n.className=s;typeof o.customClass==="object"&&addClass(n,o.customClass.inputLabel);n.innerText=o.inputLabel;t.insertAdjacentElement("beforebegin",n)}};
/**
   * @param {SweetAlertInput} inputType
   * @returns {HTMLElement | undefined}
   */const getInputContainer=e=>{const t=getPopup();if(t)return getDirectChildByClass(t,a[/** @type {SwalClass} */e]||a.input)};
/**
   * @param {HTMLInputElement | HTMLOutputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions['inputValue']} inputValue
   */const checkAndSetInputValue=(e,t)=>{["string","number"].includes(typeof t)?e.value=`${t}`:isPromise(t)||warn(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof t}"`)};
/** @type {Record<SweetAlertInput, (input: Input | HTMLElement, params: SweetAlertOptions) => Input>} */const m={};
/**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */m.text=m.email=m.password=m.number=m.tel=m.url=m.search=m.date=m["datetime-local"]=m.time=m.week=m.month=/** @type {(input: Input | HTMLElement, params: SweetAlertOptions) => Input} */
(e,t)=>{checkAndSetInputValue(e,t.inputValue);setInputLabel(e,e,t);setInputPlaceholder(e,t);e.type=t.input;return e};
/**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */m.file=(e,t)=>{setInputLabel(e,e,t);setInputPlaceholder(e,t);return e};
/**
   * @param {HTMLInputElement} range
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */m.range=(e,t)=>{const o=e.querySelector("input");const n=e.querySelector("output");checkAndSetInputValue(o,t.inputValue);o.type=t.input;checkAndSetInputValue(n,t.inputValue);setInputLabel(o,e,t);return e};
/**
   * @param {HTMLSelectElement} select
   * @param {SweetAlertOptions} params
   * @returns {HTMLSelectElement}
   */m.select=(e,t)=>{e.textContent="";if(t.inputPlaceholder){const o=document.createElement("option");setInnerHtml(o,t.inputPlaceholder);o.value="";o.disabled=true;o.selected=true;e.appendChild(o)}setInputLabel(e,e,t);return e};
/**
   * @param {HTMLInputElement} radio
   * @returns {HTMLInputElement}
   */m.radio=e=>{e.textContent="";return e};
/**
   * @param {HTMLLabelElement} checkboxContainer
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */m.checkbox=(e,t)=>{const o=getInput$1(getPopup(),"checkbox");o.value="1";o.checked=Boolean(t.inputValue);const n=e.querySelector("span");setInnerHtml(n,t.inputPlaceholder||t.inputLabel);return o};
/**
   * @param {HTMLTextAreaElement} textarea
   * @param {SweetAlertOptions} params
   * @returns {HTMLTextAreaElement}
   */m.textarea=(e,t)=>{checkAndSetInputValue(e,t.inputValue);setInputPlaceholder(e,t);setInputLabel(e,e,t);
/**
     * @param {HTMLElement} el
     * @returns {number}
     */const getMargin=e=>parseInt(window.getComputedStyle(e).marginLeft)+parseInt(window.getComputedStyle(e).marginRight);setTimeout((()=>{if("MutationObserver"in window){const o=parseInt(window.getComputedStyle(getPopup()).width);const textareaResizeHandler=()=>{if(!document.body.contains(e))return;const n=e.offsetWidth+getMargin(e);n>o?getPopup().style.width=`${n}px`:applyNumericalStyle(getPopup(),"width",t.width)};new MutationObserver(textareaResizeHandler).observe(e,{attributes:true,attributeFilter:["style"]})}}));return e};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */const renderContent=(e,t)=>{const o=getHtmlContainer();if(o){showWhenInnerHtmlPresent(o);applyCustomClass(o,t,"htmlContainer");if(t.html){parseHtmlToContainer(t.html,o);show(o,"block")}else if(t.text){o.textContent=t.text;show(o,"block")}else hide(o);renderInput(e,t)}};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */const renderFooter=(e,t)=>{const o=getFooter();if(o){showWhenInnerHtmlPresent(o);toggle(o,t.footer,"block");t.footer&&parseHtmlToContainer(t.footer,o);applyCustomClass(o,t,"footer")}};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */const renderIcon=(e,t)=>{const o=w.innerParams.get(e);const n=getIcon();if(n)if(o&&t.icon===o.icon){setContent(n,t);applyStyles(n,t)}else if(t.icon||t.iconHtml)if(t.icon&&Object.keys(r).indexOf(t.icon)===-1){error(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${t.icon}"`);hide(n)}else{show(n);setContent(n,t);applyStyles(n,t);addClass(n,t.showClass&&t.showClass.icon)}else hide(n)};
/**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */const applyStyles=(e,t)=>{for(const[o,n]of Object.entries(r))t.icon!==o&&removeClass(e,n);addClass(e,t.icon&&r[t.icon]);setColor(e,t);adjustSuccessIconBackgroundColor();applyCustomClass(e,t,"icon")};const adjustSuccessIconBackgroundColor=()=>{const e=getPopup();if(!e)return;const t=window.getComputedStyle(e).getPropertyValue("background-color");
/** @type {NodeListOf<HTMLElement>} */const o=e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let e=0;e<o.length;e++)o[e].style.backgroundColor=t};const h='\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n';const f='\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n';
/**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */const setContent=(e,t)=>{if(!t.icon&&!t.iconHtml)return;let o=e.innerHTML;let n="";if(t.iconHtml)n=iconContent(t.iconHtml);else if(t.icon==="success"){n=h;o=o.replace(/ style=".*?"/g,"")}else if(t.icon==="error")n=f;else if(t.icon){const e={question:"?",warning:"!",info:"i"};n=iconContent(e[t.icon])}o.trim()!==n.trim()&&setInnerHtml(e,n)};
/**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */const setColor=(e,t)=>{if(t.iconColor){e.style.color=t.iconColor;e.style.borderColor=t.iconColor;for(const o of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])setStyle(e,o,"background-color",t.iconColor);setStyle(e,".swal2-success-ring","border-color",t.iconColor)}};
/**
   * @param {string} content
   * @returns {string}
   */const iconContent=e=>`<div class="${a["icon-content"]}">${e}</div>`
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */;const renderImage=(e,t)=>{const o=getImage();if(o)if(t.imageUrl){show(o,"");o.setAttribute("src",t.imageUrl);o.setAttribute("alt",t.imageAlt||"");applyNumericalStyle(o,"width",t.imageWidth);applyNumericalStyle(o,"height",t.imageHeight);o.className=a.image;applyCustomClass(o,t,"image")}else hide(o)};let g=false;let b=0;let v=0;let y=0;let x=0;
/**
   * @param {HTMLElement} popup
   */const addDraggableListeners=e=>{e.addEventListener("mousedown",down);document.body.addEventListener("mousemove",move);e.addEventListener("mouseup",up);e.addEventListener("touchstart",down);document.body.addEventListener("touchmove",move);e.addEventListener("touchend",up)};
/**
   * @param {HTMLElement} popup
   */const removeDraggableListeners=e=>{e.removeEventListener("mousedown",down);document.body.removeEventListener("mousemove",move);e.removeEventListener("mouseup",up);e.removeEventListener("touchstart",down);document.body.removeEventListener("touchmove",move);e.removeEventListener("touchend",up)};
/**
   * @param {MouseEvent | TouchEvent} event
   */const down=e=>{const t=getPopup();if(e.target===t||getIcon().contains(/** @type {HTMLElement} */e.target)){g=true;const o=getClientXY(e);b=o.clientX;v=o.clientY;y=parseInt(t.style.insetInlineStart)||0;x=parseInt(t.style.insetBlockStart)||0}};
/**
   * @param {MouseEvent | TouchEvent} event
   */const move=e=>{const t=getPopup();if(g){let{clientX:o,clientY:n}=getClientXY(e);t.style.insetInlineStart=`${y+(o-b)}px`;t.style.insetBlockStart=`${x+(n-v)}px`}};const up=()=>{g=false};
/**
   * @param {MouseEvent | TouchEvent} event
   * @returns {{ clientX: number, clientY: number }}
   */const getClientXY=e=>{let t=0,o=0;if(e.type.startsWith("mouse")){t=/** @type {MouseEvent} */e.clientX;o=/** @type {MouseEvent} */e.clientY}else if(e.type.startsWith("touch")){t=/** @type {TouchEvent} */e.touches[0].clientX;o=/** @type {TouchEvent} */e.touches[0].clientY}return{clientX:t,clientY:o}};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */const renderPopup=(e,t)=>{const o=getContainer();const n=getPopup();if(o&&n){if(t.toast){applyNumericalStyle(o,"width",t.width);n.style.width="100%";const e=getLoader();e&&n.insertBefore(e,getIcon())}else applyNumericalStyle(n,"width",t.width);applyNumericalStyle(n,"padding",t.padding);t.color&&(n.style.color=t.color);t.background&&(n.style.background=t.background);hide(getValidationMessage());addClasses$1(n,t);t.draggable&&!t.toast?addDraggableListeners(n):removeDraggableListeners(n)}};
/**
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */const addClasses$1=(e,t)=>{const o=t.showClass||{};e.className=`${a.popup} ${isVisible$1(e)?o.popup:""}`;if(t.toast){addClass([document.documentElement,document.body],a["toast-shown"]);addClass(e,a.toast)}else addClass(e,a.modal);applyCustomClass(e,t,"popup");typeof t.customClass==="string"&&addClass(e,t.customClass);t.icon&&addClass(e,a[`icon-${t.icon}`])};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */const renderProgressSteps=(e,t)=>{const o=getProgressSteps();if(!o)return;const{progressSteps:n,currentProgressStep:s}=t;if(n&&n.length!==0&&s!==void 0){show(o);o.textContent="";s>=n.length&&warn("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)");n.forEach(((e,i)=>{const r=createStepElement(e);o.appendChild(r);i===s&&addClass(r,a["active-progress-step"]);if(i!==n.length-1){const e=createLineElement(t);o.appendChild(e)}}))}else hide(o)};
/**
   * @param {string} step
   * @returns {HTMLLIElement}
   */const createStepElement=e=>{const t=document.createElement("li");addClass(t,a["progress-step"]);setInnerHtml(t,e);return t};
/**
   * @param {SweetAlertOptions} params
   * @returns {HTMLLIElement}
   */const createLineElement=e=>{const t=document.createElement("li");addClass(t,a["progress-step-line"]);e.progressStepsDistance&&applyNumericalStyle(t,"width",e.progressStepsDistance);return t};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */const renderTitle=(e,t)=>{const o=getTitle();if(o){showWhenInnerHtmlPresent(o);toggle(o,t.title||t.titleText,"block");t.title&&parseHtmlToContainer(t.title,o);t.titleText&&(o.innerText=t.titleText);applyCustomClass(o,t,"title")}};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */const render=(e,t)=>{renderPopup(e,t);renderContainer(e,t);renderProgressSteps(e,t);renderIcon(e,t);renderImage(e,t);renderTitle(e,t);renderCloseButton(e,t);renderContent(e,t);renderActions(e,t);renderFooter(e,t);const n=getPopup();typeof t.didRender==="function"&&n&&t.didRender(n);o.eventEmitter.emit("didRender",n)};const isVisible=()=>isVisible$1(getPopup());const clickConfirm=()=>{var e;return(e=getConfirmButton())===null||e===void 0?void 0:e.click()};const clickDeny=()=>{var e;return(e=getDenyButton())===null||e===void 0?void 0:e.click()};const clickCancel=()=>{var e;return(e=getCancelButton())===null||e===void 0?void 0:e.click()};
/** @typedef {'cancel' | 'backdrop' | 'close' | 'esc' | 'timer'} DismissReason */
/** @type {Record<DismissReason, DismissReason>} */const k=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"});
/**
   * @param {GlobalState} globalState
   */const removeKeydownHandler=e=>{if(e.keydownTarget&&e.keydownHandlerAdded){e.keydownTarget.removeEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture});e.keydownHandlerAdded=false}};
/**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {*} dismissWith
   */const addKeydownHandler=(e,t,o)=>{removeKeydownHandler(e);if(!t.toast){e.keydownHandler=e=>keydownHandler(t,e,o);e.keydownTarget=t.keydownListenerCapture?window:getPopup();e.keydownListenerCapture=t.keydownListenerCapture;e.keydownTarget.addEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture});e.keydownHandlerAdded=true}};
/**
   * @param {number} index
   * @param {number} increment
   */const setFocus=(e,t)=>{var o;const n=getFocusableElements();if(n.length){e+=t;e===n.length?e=0:e===-1&&(e=n.length-1);n[e].focus()}else(o=getPopup())===null||o===void 0||o.focus()};const C=["ArrowRight","ArrowDown"];const A=["ArrowLeft","ArrowUp"];
/**
   * @param {SweetAlertOptions} innerParams
   * @param {KeyboardEvent} event
   * @param {Function} dismissWith
   */const keydownHandler=(e,t,o)=>{if(e&&!t.isComposing&&t.keyCode!==229){e.stopKeydownPropagation&&t.stopPropagation();t.key==="Enter"?handleEnter(t,e):t.key==="Tab"?handleTab(t):[...C,...A].includes(t.key)?handleArrows(t.key):t.key==="Escape"&&handleEsc(t,e,o)}};
/**
   * @param {KeyboardEvent} event
   * @param {SweetAlertOptions} innerParams
   */const handleEnter=(e,t)=>{if(!callIfFunction(t.allowEnterKey))return;const o=getInput$1(getPopup(),t.input);if(e.target&&o&&e.target instanceof HTMLElement&&e.target.outerHTML===o.outerHTML){if(["textarea","file"].includes(t.input))return;clickConfirm();e.preventDefault()}};
/**
   * @param {KeyboardEvent} event
   */const handleTab=e=>{const t=e.target;const o=getFocusableElements();let n=-1;for(let e=0;e<o.length;e++)if(t===o[e]){n=e;break}e.shiftKey?setFocus(n,-1):setFocus(n,1);e.stopPropagation();e.preventDefault()};
/**
   * @param {string} key
   */const handleArrows=e=>{const t=getActions();const o=getConfirmButton();const n=getDenyButton();const s=getCancelButton();if(!t||!o||!n||!s)return;
/** @type HTMLElement[] */const a=[o,n,s];if(document.activeElement instanceof HTMLElement&&!a.includes(document.activeElement))return;const i=C.includes(e)?"nextElementSibling":"previousElementSibling";let r=document.activeElement;if(r){for(let e=0;e<t.children.length;e++){r=r[i];if(!r)return;if(r instanceof HTMLButtonElement&&isVisible$1(r))break}r instanceof HTMLButtonElement&&r.focus()}};
/**
   * @param {KeyboardEvent} event
   * @param {SweetAlertOptions} innerParams
   * @param {Function} dismissWith
   */const handleEsc=(e,t,o)=>{if(callIfFunction(t.allowEscapeKey)){e.preventDefault();o(k.esc)}};var E={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const setAriaHidden=()=>{const e=getContainer();const t=Array.from(document.body.children);t.forEach((t=>{if(!t.contains(e)){t.hasAttribute("aria-hidden")&&t.setAttribute("data-previous-aria-hidden",t.getAttribute("aria-hidden")||"");t.setAttribute("aria-hidden","true")}}))};const unsetAriaHidden=()=>{const e=Array.from(document.body.children);e.forEach((e=>{if(e.hasAttribute("data-previous-aria-hidden")){e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")||"");e.removeAttribute("data-previous-aria-hidden")}else e.removeAttribute("aria-hidden")}))};const B=typeof window!=="undefined"&&!!window.GestureEvent;const iOSfix=()=>{if(B&&!hasClass(document.body,a.iosfix)){const e=document.body.scrollTop;document.body.style.top=e*-1+"px";addClass(document.body,a.iosfix);lockBodyScroll()}};const lockBodyScroll=()=>{const e=getContainer();if(!e)return;
/** @type {boolean} */let t;
/**
     * @param {TouchEvent} event
     */e.ontouchstart=e=>{t=shouldPreventTouchMove(e)};
/**
     * @param {TouchEvent} event
     */e.ontouchmove=e=>{if(t){e.preventDefault();e.stopPropagation()}}};
/**
   * @param {TouchEvent} event
   * @returns {boolean}
   */const shouldPreventTouchMove=e=>{const t=e.target;const o=getContainer();const n=getHtmlContainer();return!(!o||!n)&&(!isStylus(e)&&!isZoom(e)&&(t===o||!isScrollable(o)&&t instanceof HTMLElement&&t.tagName!=="INPUT"&&t.tagName!=="TEXTAREA"&&(!isScrollable(n)||!n.contains(t))))};
/**
   * https://github.com/sweetalert2/sweetalert2/issues/1786
   *
   * @param {*} event
   * @returns {boolean}
   */const isStylus=e=>e.touches&&e.touches.length&&e.touches[0].touchType==="stylus";
/**
   * https://github.com/sweetalert2/sweetalert2/issues/1891
   *
   * @param {TouchEvent} event
   * @returns {boolean}
   */const isZoom=e=>e.touches&&e.touches.length>1;const undoIOSfix=()=>{if(hasClass(document.body,a.iosfix)){const e=parseInt(document.body.style.top,10);removeClass(document.body,a.iosfix);document.body.style.top="";document.body.scrollTop=e*-1}};
/**
   * Measure scrollbar width for padding body during modal show/hide
   * https://github.com/twbs/bootstrap/blob/master/js/src/modal.js
   *
   * @returns {number}
   */const measureScrollbar=()=>{const e=document.createElement("div");e.className=a["scrollbar-measure"];document.body.appendChild(e);const t=e.getBoundingClientRect().width-e.clientWidth;document.body.removeChild(e);return t};
/**
   * Remember state in cases where opening and handling a modal will fiddle with it.
   * @type {number | null}
   */let P=null;
/**
   * @param {string} initialBodyOverflow
   */const replaceScrollbarWithPadding=e=>{if(P===null&&(document.body.scrollHeight>window.innerHeight||e==="scroll")){P=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"));document.body.style.paddingRight=`${P+measureScrollbar()}px`}};const undoReplaceScrollbarWithPadding=()=>{if(P!==null){document.body.style.paddingRight=`${P}px`;P=null}};
/**
   * @param {SweetAlert} instance
   * @param {HTMLElement} container
   * @param {boolean} returnFocus
   * @param {Function} didClose
   */function removePopupAndResetState(e,t,n,s){if(isToast())triggerDidCloseAndDispose(e,s);else{restoreActiveElement(n).then((()=>triggerDidCloseAndDispose(e,s)));removeKeydownHandler(o)}if(B){t.setAttribute("style","display:none !important");t.removeAttribute("class");t.innerHTML=""}else t.remove();if(isModal()){undoReplaceScrollbarWithPadding();undoIOSfix();unsetAriaHidden()}removeBodyClasses()}function removeBodyClasses(){removeClass([document.documentElement,document.body],[a.shown,a["height-auto"],a["no-backdrop"],a["toast-shown"]])}
/**
   * Instance method to close sweetAlert
   *
   * @param {any} resolveValue
   */function close(t){t=prepareResolveValue(t);const o=E.swalPromiseResolve.get(this||e);const n=triggerClosePopup(this||e);if((this||e).isAwaitingPromise){if(!t.isDismissed){handleAwaitingPromise(this||e);o(t)}}else n&&o(t)}const triggerClosePopup=e=>{const t=getPopup();if(!t)return false;const o=w.innerParams.get(e);if(!o||hasClass(t,o.hideClass.popup))return false;removeClass(t,o.showClass.popup);addClass(t,o.hideClass.popup);const n=getContainer();removeClass(n,o.showClass.backdrop);addClass(n,o.hideClass.backdrop);handlePopupAnimation(e,t,o);return true};
/**
   * @param {any} error
   */function rejectPromise(t){const o=E.swalPromiseReject.get(this||e);handleAwaitingPromise(this||e);o&&o(t)}
/**
   * @param {SweetAlert} instance
   */const handleAwaitingPromise=e=>{if(e.isAwaitingPromise){delete e.isAwaitingPromise;w.innerParams.get(e)||e._destroy()}};
/**
   * @param {any} resolveValue
   * @returns {SweetAlertResult}
   */const prepareResolveValue=e=>typeof e==="undefined"?{isConfirmed:false,isDenied:false,isDismissed:true}:Object.assign({isConfirmed:false,isDenied:false,isDismissed:false},e);
/**
   * @param {SweetAlert} instance
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} innerParams
   */const handlePopupAnimation=(e,t,n)=>{var s;const a=getContainer();const i=hasCssAnimation(t);typeof n.willClose==="function"&&n.willClose(t);(s=o.eventEmitter)===null||s===void 0||s.emit("willClose",t);i?animatePopup(e,t,a,n.returnFocus,n.didClose):removePopupAndResetState(e,a,n.returnFocus,n.didClose)};
/**
   * @param {SweetAlert} instance
   * @param {HTMLElement} popup
   * @param {HTMLElement} container
   * @param {boolean} returnFocus
   * @param {Function} didClose
   */const animatePopup=(e,t,n,s,a)=>{o.swalCloseEventFinishedCallback=removePopupAndResetState.bind(null,e,n,s,a);
/**
     * @param {AnimationEvent | TransitionEvent} e
     */const swalCloseAnimationFinished=function(e){if(e.target===t){var n;(n=o.swalCloseEventFinishedCallback)===null||n===void 0||n.call(o);delete o.swalCloseEventFinishedCallback;t.removeEventListener("animationend",swalCloseAnimationFinished);t.removeEventListener("transitionend",swalCloseAnimationFinished)}};t.addEventListener("animationend",swalCloseAnimationFinished);t.addEventListener("transitionend",swalCloseAnimationFinished)};
/**
   * @param {SweetAlert} instance
   * @param {Function} didClose
   */const triggerDidCloseAndDispose=(e,t)=>{setTimeout((()=>{var n;typeof t==="function"&&t.bind(e.params)();(n=o.eventEmitter)===null||n===void 0||n.emit("didClose");e._destroy&&e._destroy()}))};
/**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   *
   * @param {HTMLButtonElement | null} [buttonToReplace]
   */const showLoading=e=>{let t=getPopup();t||new F;t=getPopup();if(!t)return;const o=getLoader();isToast()?hide(getIcon()):replaceButton(t,e);show(o);t.setAttribute("data-loading","true");t.setAttribute("aria-busy","true");t.focus()};
/**
   * @param {HTMLElement} popup
   * @param {HTMLButtonElement | null} [buttonToReplace]
   */const replaceButton=(e,t)=>{const o=getActions();const n=getLoader();if(o&&n){!t&&isVisible$1(getConfirmButton())&&(t=getConfirmButton());show(o);if(t){hide(t);n.setAttribute("data-button-to-replace",t.className);o.insertBefore(n,t)}addClass([e,o],a.loading)}};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */const handleInputOptionsAndValue=(e,t)=>{if(t.input==="select"||t.input==="radio")handleInputOptions(e,t);else if(["text","email","number","tel","textarea"].some((e=>e===t.input))&&(hasToPromiseFn(t.inputValue)||isPromise(t.inputValue))){showLoading(getConfirmButton());handleInputValue(e,t)}};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} innerParams
   * @returns {SweetAlertInputValue}
   */const getInputValue=(e,t)=>{const o=e.getInput();if(!o)return null;switch(t.input){case"checkbox":return getCheckboxValue(o);case"radio":return getRadioValue(o);case"file":return getFileValue(o);default:return t.inputAutoTrim?o.value.trim():o.value}};
/**
   * @param {HTMLInputElement} input
   * @returns {number}
   */const getCheckboxValue=e=>e.checked?1:0
/**
   * @param {HTMLInputElement} input
   * @returns {string | null}
   */;const getRadioValue=e=>e.checked?e.value:null
/**
   * @param {HTMLInputElement} input
   * @returns {FileList | File | null}
   */;const getFileValue=e=>e.files&&e.files.length?e.getAttribute("multiple")!==null?e.files:e.files[0]:null
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */;const handleInputOptions=(e,t)=>{const o=getPopup();if(!o)return;
/**
     * @param {Record<string, any>} inputOptions
     */const processInputOptions=e=>{t.input==="select"?populateSelectOptions(o,formatInputOptions(e),t):t.input==="radio"&&populateRadioOptions(o,formatInputOptions(e),t)};if(hasToPromiseFn(t.inputOptions)||isPromise(t.inputOptions)){showLoading(getConfirmButton());asPromise(t.inputOptions).then((t=>{e.hideLoading();processInputOptions(t)}))}else typeof t.inputOptions==="object"?processInputOptions(t.inputOptions):error("Unexpected type of inputOptions! Expected object, Map or Promise, got "+typeof t.inputOptions)};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */const handleInputValue=(e,t)=>{const o=e.getInput();if(o){hide(o);asPromise(t.inputValue).then((n=>{o.value=t.input==="number"?`${parseFloat(n)||0}`:`${n}`;show(o);o.focus();e.hideLoading()})).catch((t=>{error(`Error in inputValue promise: ${t}`);o.value="";show(o);o.focus();e.hideLoading()}))}};
/**
   * @param {HTMLElement} popup
   * @param {InputOptionFlattened[]} inputOptions
   * @param {SweetAlertOptions} params
   */function populateSelectOptions(e,t,o){const n=getDirectChildByClass(e,a.select);if(!n)return;
/**
     * @param {HTMLElement} parent
     * @param {string} optionLabel
     * @param {string} optionValue
     */const renderOption=(e,t,n)=>{const s=document.createElement("option");s.value=n;setInnerHtml(s,t);s.selected=isSelected(n,o.inputValue);e.appendChild(s)};t.forEach((e=>{const t=e[0];const o=e[1];if(Array.isArray(o)){const e=document.createElement("optgroup");e.label=t;e.disabled=false;n.appendChild(e);o.forEach((t=>renderOption(e,t[1],t[0])))}else renderOption(n,o,t)}));n.focus()}
/**
   * @param {HTMLElement} popup
   * @param {InputOptionFlattened[]} inputOptions
   * @param {SweetAlertOptions} params
   */function populateRadioOptions(e,t,o){const n=getDirectChildByClass(e,a.radio);if(!n)return;t.forEach((e=>{const t=e[0];const s=e[1];const i=document.createElement("input");const r=document.createElement("label");i.type="radio";i.name=a.radio;i.value=t;isSelected(t,o.inputValue)&&(i.checked=true);const l=document.createElement("span");setInnerHtml(l,s);l.className=a.label;r.appendChild(i);r.appendChild(l);n.appendChild(r)}));const s=n.querySelectorAll("input");s.length&&s[0].focus()}
/**
   * Converts `inputOptions` into an array of `[value, label]`s
   *
   * @param {Record<string, any>} inputOptions
   * @typedef {string[]} InputOptionFlattened
   * @returns {InputOptionFlattened[]}
   */const formatInputOptions=e=>{
/** @type {InputOptionFlattened[]} */
const t=[];e instanceof Map?e.forEach(((e,o)=>{let n=e;typeof n==="object"&&(n=formatInputOptions(n));t.push([o,n])})):Object.keys(e).forEach((o=>{let n=e[o];typeof n==="object"&&(n=formatInputOptions(n));t.push([o,n])}));return t};
/**
   * @param {string} optionValue
   * @param {SweetAlertInputValue} inputValue
   * @returns {boolean}
   */const isSelected=(e,t)=>!!t&&t.toString()===e.toString();
/**
   * @param {SweetAlert} instance
   */const handleConfirmButtonClick=e=>{const t=w.innerParams.get(e);e.disableButtons();t.input?handleConfirmOrDenyWithInput(e,"confirm"):confirm(e,true)};
/**
   * @param {SweetAlert} instance
   */const handleDenyButtonClick=e=>{const t=w.innerParams.get(e);e.disableButtons();t.returnInputValueOnDeny?handleConfirmOrDenyWithInput(e,"deny"):deny(e,false)};
/**
   * @param {SweetAlert} instance
   * @param {Function} dismissWith
   */const handleCancelButtonClick=(e,t)=>{e.disableButtons();t(k.cancel)};
/**
   * @param {SweetAlert} instance
   * @param {'confirm' | 'deny'} type
   */const handleConfirmOrDenyWithInput=(e,t)=>{const o=w.innerParams.get(e);if(!o.input){error(`The "input" parameter is needed to be set when using returnInputValueOn${capitalizeFirstLetter(t)}`);return}const n=e.getInput();const s=getInputValue(e,o);if(o.inputValidator)handleInputValidator(e,s,t);else if(n&&!n.checkValidity()){e.enableButtons();e.showValidationMessage(o.validationMessage||n.validationMessage)}else t==="deny"?deny(e,s):confirm(e,s)};
/**
   * @param {SweetAlert} instance
   * @param {SweetAlertInputValue} inputValue
   * @param {'confirm' | 'deny'} type
   */const handleInputValidator=(e,t,o)=>{const n=w.innerParams.get(e);e.disableInput();const s=Promise.resolve().then((()=>asPromise(n.inputValidator(t,n.validationMessage))));s.then((n=>{e.enableButtons();e.enableInput();n?e.showValidationMessage(n):o==="deny"?deny(e,t):confirm(e,t)}))};
/**
   * @param {SweetAlert} instance
   * @param {any} value
   */const deny=(e,t)=>{const o=w.innerParams.get(e||void 0);o.showLoaderOnDeny&&showLoading(getDenyButton());if(o.preDeny){e.isAwaitingPromise=true;const n=Promise.resolve().then((()=>asPromise(o.preDeny(t,o.validationMessage))));n.then((o=>{if(o===false){e.hideLoading();handleAwaitingPromise(e)}else e.close({isDenied:true,value:typeof o==="undefined"?t:o})})).catch((t=>rejectWith(e||void 0,t)))}else e.close({isDenied:true,value:t})};
/**
   * @param {SweetAlert} instance
   * @param {any} value
   */const succeedWith=(e,t)=>{e.close({isConfirmed:true,value:t})};
/**
   *
   * @param {SweetAlert} instance
   * @param {string} error
   */const rejectWith=(e,t)=>{e.rejectPromise(t)};
/**
   *
   * @param {SweetAlert} instance
   * @param {any} value
   */const confirm=(e,t)=>{const o=w.innerParams.get(e||void 0);o.showLoaderOnConfirm&&showLoading();if(o.preConfirm){e.resetValidationMessage();e.isAwaitingPromise=true;const n=Promise.resolve().then((()=>asPromise(o.preConfirm(t,o.validationMessage))));n.then((o=>{if(isVisible$1(getValidationMessage())||o===false){e.hideLoading();handleAwaitingPromise(e)}else succeedWith(e,typeof o==="undefined"?t:o)})).catch((t=>rejectWith(e||void 0,t)))}else succeedWith(e,t)};function hideLoading(){const t=w.innerParams.get(this||e);if(!t)return;const o=w.domCache.get(this||e);hide(o.loader);isToast()?t.icon&&show(getIcon()):showRelatedButton(o);removeClass([o.popup,o.actions],a.loading);o.popup.removeAttribute("aria-busy");o.popup.removeAttribute("data-loading");o.confirmButton.disabled=false;o.denyButton.disabled=false;o.cancelButton.disabled=false}const showRelatedButton=e=>{const t=e.popup.getElementsByClassName(e.loader.getAttribute("data-button-to-replace"));t.length?show(t[0],"inline-block"):allButtonsAreHidden()&&hide(e.actions)};
/**
   * Gets the input DOM node, this method works with input parameter.
   *
   * @returns {HTMLInputElement | null}
   */function getInput(){const t=w.innerParams.get(this||e);const o=w.domCache.get(this||e);return o?getInput$1(o.popup,t.input):null}
/**
   * @param {SweetAlert} instance
   * @param {string[]} buttons
   * @param {boolean} disabled
   */function setButtonsDisabled(e,t,o){const n=w.domCache.get(e);t.forEach((e=>{n[e].disabled=o}))}
/**
   * @param {HTMLInputElement | null} input
   * @param {boolean} disabled
   */function setInputDisabled(e,t){const o=getPopup();if(o&&e)if(e.type==="radio"){
/** @type {NodeListOf<HTMLInputElement>} */
const e=o.querySelectorAll(`[name="${a.radio}"]`);for(let o=0;o<e.length;o++)e[o].disabled=t}else e.disabled=t}function enableButtons(){setButtonsDisabled(this||e,["confirmButton","denyButton","cancelButton"],false)}function disableButtons(){setButtonsDisabled(this||e,["confirmButton","denyButton","cancelButton"],true)}function enableInput(){setInputDisabled(this.getInput(),false)}function disableInput(){setInputDisabled(this.getInput(),true)}
/**
   * Show block with validation message
   *
   * @param {string} error
   * @this {SweetAlert}
   */function showValidationMessage(t){const o=w.domCache.get(this||e);const n=w.innerParams.get(this||e);setInnerHtml(o.validationMessage,t);o.validationMessage.className=a["validation-message"];n.customClass&&n.customClass.validationMessage&&addClass(o.validationMessage,n.customClass.validationMessage);show(o.validationMessage);const s=this.getInput();if(s){s.setAttribute("aria-invalid","true");s.setAttribute("aria-describedby",a["validation-message"]);focusInput(s);addClass(s,a.inputerror)}}function resetValidationMessage(){const t=w.domCache.get(this||e);t.validationMessage&&hide(t.validationMessage);const o=this.getInput();if(o){o.removeAttribute("aria-invalid");o.removeAttribute("aria-describedby");removeClass(o,a.inputerror)}}const $={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:false,draggable:false,animation:true,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:true,heightAuto:true,allowOutsideClick:true,allowEscapeKey:true,allowEnterKey:true,stopKeydownPropagation:true,keydownListenerCapture:false,showConfirmButton:true,showDenyButton:false,showCancelButton:false,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:true,reverseButtons:false,focusConfirm:true,focusDeny:false,focusCancel:false,returnFocus:true,showCloseButton:false,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:false,showLoaderOnDeny:false,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:false,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:true,inputAutoTrim:true,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:false,validationMessage:void 0,grow:false,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:true};const L=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"];
/** @type {Record<string, string | undefined>} */const S={allowEnterKey:void 0};const T=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"];
/**
   * Is valid parameter
   *
   * @param {string} paramName
   * @returns {boolean}
   */const isValidParameter=e=>Object.prototype.hasOwnProperty.call($,e);
/**
   * Is valid parameter for Swal.update() method
   *
   * @param {string} paramName
   * @returns {boolean}
   */const isUpdatableParameter=e=>L.indexOf(e)!==-1;
/**
   * Is deprecated parameter
   *
   * @param {string} paramName
   * @returns {string | undefined}
   */const isDeprecatedParameter=e=>S[e];
/**
   * @param {string} param
   */const checkIfParamIsValid=e=>{isValidParameter(e)||warn(`Unknown parameter "${e}"`)};
/**
   * @param {string} param
   */const checkIfToastParamIsValid=e=>{T.includes(e)&&warn(`The parameter "${e}" is incompatible with toasts`)};
/**
   * @param {string} param
   */const checkIfParamIsDeprecated=e=>{const t=isDeprecatedParameter(e);t&&warnAboutDeprecation(e,t)};
/**
   * Show relevant warnings for given params
   *
   * @param {SweetAlertOptions} params
   */const showWarningsForParams=e=>{e.backdrop===false&&e.allowOutsideClick&&warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const t in e){checkIfParamIsValid(t);e.toast&&checkIfToastParamIsValid(t);checkIfParamIsDeprecated(t)}};
/**
   * Updates popup parameters.
   *
   * @param {SweetAlertOptions} params
   */function update(t){const o=getPopup();const n=w.innerParams.get(this||e);if(!o||hasClass(o,n.hideClass.popup)){warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const s=filterValidParams(t);const a=Object.assign({},n,s);render(this||e,a);w.innerParams.set(this||e,a);Object.defineProperties(this||e,{params:{value:Object.assign({},(this||e).params,t),writable:false,enumerable:true}})}
/**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */const filterValidParams=e=>{const t={};Object.keys(e).forEach((o=>{isUpdatableParameter(o)?t[o]=e[o]:warn(`Invalid parameter to update: ${o}`)}));return t};function _destroy(){const t=w.domCache.get(this||e);const n=w.innerParams.get(this||e);if(n){if(t.popup&&o.swalCloseEventFinishedCallback){o.swalCloseEventFinishedCallback();delete o.swalCloseEventFinishedCallback}typeof n.didDestroy==="function"&&n.didDestroy();o.eventEmitter.emit("didDestroy");disposeSwal(this||e)}else disposeWeakMaps(this||e)}
/**
   * @param {SweetAlert} instance
   */const disposeSwal=e=>{disposeWeakMaps(e);delete e.params;delete o.keydownHandler;delete o.keydownTarget;delete o.currentInstance};
/**
   * @param {SweetAlert} instance
   */const disposeWeakMaps=e=>{if(e.isAwaitingPromise){unsetWeakMaps(w,e);e.isAwaitingPromise=true}else{unsetWeakMaps(E,e);unsetWeakMaps(w,e);delete e.isAwaitingPromise;delete e.disableButtons;delete e.enableButtons;delete e.getInput;delete e.disableInput;delete e.enableInput;delete e.hideLoading;delete e.disableLoading;delete e.showValidationMessage;delete e.resetValidationMessage;delete e.close;delete e.closePopup;delete e.closeModal;delete e.closeToast;delete e.rejectPromise;delete e.update;delete e._destroy}};
/**
   * @param {object} obj
   * @param {SweetAlert} instance
   */const unsetWeakMaps=(e,t)=>{for(const o in e)e[o].delete(t)};var O=Object.freeze({__proto__:null,_destroy:_destroy,close:close,closeModal:close,closePopup:close,closeToast:close,disableButtons:disableButtons,disableInput:disableInput,disableLoading:hideLoading,enableButtons:enableButtons,enableInput:enableInput,getInput:getInput,handleAwaitingPromise:handleAwaitingPromise,hideLoading:hideLoading,rejectPromise:rejectPromise,resetValidationMessage:resetValidationMessage,showValidationMessage:showValidationMessage,update:update});
/**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {Function} dismissWith
   */const handlePopupClick=(e,t,o)=>{if(e.toast)handleToastClick(e,t,o);else{handleModalMousedown(t);handleContainerMousedown(t);handleModalClick(e,t,o)}};
/**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {Function} dismissWith
   */const handleToastClick=(e,t,o)=>{t.popup.onclick=()=>{e&&(isAnyButtonShown(e)||e.timer||e.input)||o(k.close)}};
/**
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */const isAnyButtonShown=e=>!!(e.showConfirmButton||e.showDenyButton||e.showCancelButton||e.showCloseButton);let I=false;
/**
   * @param {DomCache} domCache
   */const handleModalMousedown=e=>{e.popup.onmousedown=()=>{e.container.onmouseup=function(t){e.container.onmouseup=()=>{};t.target===e.container&&(I=true)}}};
/**
   * @param {DomCache} domCache
   */const handleContainerMousedown=e=>{e.container.onmousedown=t=>{t.target===e.container&&t.preventDefault();e.popup.onmouseup=function(t){e.popup.onmouseup=()=>{};(t.target===e.popup||t.target instanceof HTMLElement&&e.popup.contains(t.target))&&(I=true)}}};
/**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {Function} dismissWith
   */const handleModalClick=(e,t,o)=>{t.container.onclick=n=>{I?I=false:n.target===t.container&&callIfFunction(e.allowOutsideClick)&&o(k.backdrop)}};const isJqueryElement=e=>typeof e==="object"&&e.jquery;const isElement=e=>e instanceof Element||isJqueryElement(e);const argsToParams=e=>{const t={};typeof e[0]!=="object"||isElement(e[0])?["title","html","icon"].forEach(((o,n)=>{const s=e[n];typeof s==="string"||isElement(s)?t[o]=s:s!==void 0&&error(`Unexpected type of ${o}! Expected "string" or "Element", got ${typeof s}`)})):Object.assign(t,e[0]);return t};
/**
   * Main method to create a new SweetAlert2 popup
   *
   * @param  {...SweetAlertOptions} args
   * @returns {Promise<SweetAlertResult>}
   */function fire(){for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return new(this||e)(...o)}
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
   */function mixin(e){class MixinSwal extends(this){_main(t,o){return super._main(t,Object.assign({},e,o))}}return MixinSwal}
/**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   *
   * @returns {number | undefined}
   */const getTimerLeft=()=>o.timeout&&o.timeout.getTimerLeft();
/**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */const stopTimer=()=>{if(o.timeout){stopTimerProgressBar();return o.timeout.stop()}};
/**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */const resumeTimer=()=>{if(o.timeout){const e=o.timeout.start();animateTimerProgressBar(e);return e}};
/**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */const toggleTimer=()=>{const e=o.timeout;return e&&(e.running?stopTimer():resumeTimer())};
/**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @param {number} ms
   * @returns {number | undefined}
   */const increaseTimer=e=>{if(o.timeout){const t=o.timeout.increase(e);animateTimerProgressBar(t,true);return t}};
/**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   *
   * @returns {boolean}
   */const isTimerRunning=()=>!!(o.timeout&&o.timeout.isRunning());let M=false;const j={};
/**
   * @param {string} attr
   */function bindClickHandler(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";j[t]=this||e;if(!M){document.body.addEventListener("click",bodyClickListener);M=true}}const bodyClickListener=e=>{for(let t=e.target;t&&t!==document;t=t.parentNode)for(const e in j){const o=t.getAttribute(e);if(o){j[e].fire({template:o});return}}};class EventEmitter{constructor(){
/** @type {Events} */
this.events={}}
/**
     * @param {string} eventName
     * @returns {EventHandlers}
     */_getHandlersByEventName(e){typeof this.events[e]==="undefined"&&(this.events[e]=[]);return this.events[e]}
/**
     * @param {string} eventName
     * @param {EventHandler} eventHandler
     */on(e,t){const o=this._getHandlersByEventName(e);o.includes(t)||o.push(t)}
/**
     * @param {string} eventName
     * @param {EventHandler} eventHandler
     */once(e,t){var o=this;
/**
       * @param {Array} args
       */const onceFn=function(){o.removeListener(e,onceFn);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];t.apply(o,s)};this.on(e,onceFn)}
/**
     * @param {string} eventName
     * @param {Array} args
     */emit(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),n=1;n<t;n++)o[n-1]=arguments[n];this._getHandlersByEventName(e).forEach((
/**
       * @param {EventHandler} eventHandler
       */
e=>{try{e.apply(this,o)}catch(e){console.error(e)}}))}
/**
     * @param {string} eventName
     * @param {EventHandler} eventHandler
     */removeListener(e,t){const o=this._getHandlersByEventName(e);const n=o.indexOf(t);n>-1&&o.splice(n,1)}
/**
     * @param {string} eventName
     */removeAllListeners(e){this.events[e]!==void 0&&(this.events[e].length=0)}reset(){this.events={}}}o.eventEmitter=new EventEmitter;
/**
   * @param {string} eventName
   * @param {EventHandler} eventHandler
   */const on=(e,t)=>{o.eventEmitter.on(e,t)};
/**
   * @param {string} eventName
   * @param {EventHandler} eventHandler
   */const once=(e,t)=>{o.eventEmitter.once(e,t)};
/**
   * @param {string} [eventName]
   * @param {EventHandler} [eventHandler]
   */const off=(e,t)=>{e?t?o.eventEmitter.removeListener(e,t):o.eventEmitter.removeAllListeners(e):o.eventEmitter.reset()};var H=Object.freeze({__proto__:null,argsToParams:argsToParams,bindClickHandler:bindClickHandler,clickCancel:clickCancel,clickConfirm:clickConfirm,clickDeny:clickDeny,enableLoading:showLoading,fire:fire,getActions:getActions,getCancelButton:getCancelButton,getCloseButton:getCloseButton,getConfirmButton:getConfirmButton,getContainer:getContainer,getDenyButton:getDenyButton,getFocusableElements:getFocusableElements,getFooter:getFooter,getHtmlContainer:getHtmlContainer,getIcon:getIcon,getIconContent:getIconContent,getImage:getImage,getInputLabel:getInputLabel,getLoader:getLoader,getPopup:getPopup,getProgressSteps:getProgressSteps,getTimerLeft:getTimerLeft,getTimerProgressBar:getTimerProgressBar,getTitle:getTitle,getValidationMessage:getValidationMessage,increaseTimer:increaseTimer,isDeprecatedParameter:isDeprecatedParameter,isLoading:isLoading,isTimerRunning:isTimerRunning,isUpdatableParameter:isUpdatableParameter,isValidParameter:isValidParameter,isVisible:isVisible,mixin:mixin,off:off,on:on,once:once,resumeTimer:resumeTimer,showLoading:showLoading,stopTimer:stopTimer,toggleTimer:toggleTimer});class Timer{
/**
     * @param {Function} callback
     * @param {number} delay
     */
constructor(e,t){this.callback=e;this.remaining=t;this.running=false;this.start()}
/**
     * @returns {number}
     */start(){if(!this.running){this.running=true;this.started=new Date;this.id=setTimeout(this.callback,this.remaining)}return this.remaining}
/**
     * @returns {number}
     */stop(){if(this.started&&this.running){this.running=false;clearTimeout(this.id);this.remaining-=(new Date).getTime()-this.started.getTime()}return this.remaining}
/**
     * @param {number} n
     * @returns {number}
     */increase(e){const t=this.running;t&&this.stop();this.remaining+=e;t&&this.start();return this.remaining}
/**
     * @returns {number}
     */getTimerLeft(){if(this.running){this.stop();this.start()}return this.remaining}
/**
     * @returns {boolean}
     */isRunning(){return this.running}}const z=["swal-title","swal-html","swal-footer"];
/**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */const getTemplateParams=e=>{const t=typeof e.template==="string"?/** @type {HTMLTemplateElement} */document.querySelector(e.template):e.template;if(!t)return{};
/** @type {DocumentFragment} */const o=t.content;showWarningsForElements(o);const n=Object.assign(getSwalParams(o),getSwalFunctionParams(o),getSwalButtons(o),getSwalImage(o),getSwalIcon(o),getSwalInput(o),getSwalStringParams(o,z));return n};
/**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, any>}
   */const getSwalParams=e=>{
/** @type {Record<string, any>} */
const t={};
/** @type {HTMLElement[]} */const o=Array.from(e.querySelectorAll("swal-param"));o.forEach((e=>{showWarningsForAttributes(e,["name","value"]);const o=/** @type {keyof SweetAlertOptions} */e.getAttribute("name");const n=e.getAttribute("value");o&&n&&(typeof $[o]==="boolean"?t[o]=n!=="false":typeof $[o]==="object"?t[o]=JSON.parse(n):t[o]=n)}));return t};
/**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, any>}
   */const getSwalFunctionParams=e=>{
/** @type {Record<string, any>} */
const t={};
/** @type {HTMLElement[]} */const o=Array.from(e.querySelectorAll("swal-function-param"));o.forEach((e=>{const o=/** @type {keyof SweetAlertOptions} */e.getAttribute("name");const n=e.getAttribute("value");o&&n&&(t[o]=new Function(`return ${n}`)())}));return t};
/**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, any>}
   */const getSwalButtons=e=>{
/** @type {Record<string, any>} */
const t={};
/** @type {HTMLElement[]} */const o=Array.from(e.querySelectorAll("swal-button"));o.forEach((e=>{showWarningsForAttributes(e,["type","color","aria-label"]);const o=e.getAttribute("type");if(o&&["confirm","cancel","deny"].includes(o)){t[`${o}ButtonText`]=e.innerHTML;t[`show${capitalizeFirstLetter(o)}Button`]=true;e.hasAttribute("color")&&(t[`${o}ButtonColor`]=e.getAttribute("color"));e.hasAttribute("aria-label")&&(t[`${o}ButtonAriaLabel`]=e.getAttribute("aria-label"))}}));return t};
/**
   * @param {DocumentFragment} templateContent
   * @returns {Pick<SweetAlertOptions, 'imageUrl' | 'imageWidth' | 'imageHeight' | 'imageAlt'>}
   */const getSwalImage=e=>{const t={};
/** @type {HTMLElement | null} */const o=e.querySelector("swal-image");if(o){showWarningsForAttributes(o,["src","width","height","alt"]);o.hasAttribute("src")&&(t.imageUrl=o.getAttribute("src")||void 0);o.hasAttribute("width")&&(t.imageWidth=o.getAttribute("width")||void 0);o.hasAttribute("height")&&(t.imageHeight=o.getAttribute("height")||void 0);o.hasAttribute("alt")&&(t.imageAlt=o.getAttribute("alt")||void 0)}return t};
/**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, any>}
   */const getSwalIcon=e=>{const t={};
/** @type {HTMLElement | null} */const o=e.querySelector("swal-icon");if(o){showWarningsForAttributes(o,["type","color"]);o.hasAttribute("type")&&(t.icon=o.getAttribute("type"));o.hasAttribute("color")&&(t.iconColor=o.getAttribute("color"));t.iconHtml=o.innerHTML}return t};
/**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, any>}
   */const getSwalInput=e=>{
/** @type {Record<string, any>} */
const t={};
/** @type {HTMLElement | null} */const o=e.querySelector("swal-input");if(o){showWarningsForAttributes(o,["type","label","placeholder","value"]);t.input=o.getAttribute("type")||"text";o.hasAttribute("label")&&(t.inputLabel=o.getAttribute("label"));o.hasAttribute("placeholder")&&(t.inputPlaceholder=o.getAttribute("placeholder"));o.hasAttribute("value")&&(t.inputValue=o.getAttribute("value"))}
/** @type {HTMLElement[]} */const n=Array.from(e.querySelectorAll("swal-input-option"));if(n.length){t.inputOptions={};n.forEach((e=>{showWarningsForAttributes(e,["value"]);const o=e.getAttribute("value");if(!o)return;const n=e.innerHTML;t.inputOptions[o]=n}))}return t};
/**
   * @param {DocumentFragment} templateContent
   * @param {string[]} paramNames
   * @returns {Record<string, any>}
   */const getSwalStringParams=(e,t)=>{
/** @type {Record<string, any>} */
const o={};for(const n in t){const s=t[n];
/** @type {HTMLElement | null} */const a=e.querySelector(s);if(a){showWarningsForAttributes(a,[]);o[s.replace(/^swal-/,"")]=a.innerHTML.trim()}}return o};
/**
   * @param {DocumentFragment} templateContent
   */const showWarningsForElements=e=>{const t=z.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(e.children).forEach((e=>{const o=e.tagName.toLowerCase();t.includes(o)||warn(`Unrecognized element <${o}>`)}))};
/**
   * @param {HTMLElement} el
   * @param {string[]} allowedAttributes
   */const showWarningsForAttributes=(e,t)=>{Array.from(e.attributes).forEach((o=>{t.indexOf(o.name)===-1&&warn([`Unrecognized attribute "${o.name}" on <${e.tagName.toLowerCase()}>.`,""+(t.length?`Allowed attributes are: ${t.join(", ")}`:"To set the value, use HTML within the element.")])}))};const D=10;
/**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param {SweetAlertOptions} params
   */const openPopup=e=>{const t=getContainer();const n=getPopup();typeof e.willOpen==="function"&&e.willOpen(n);o.eventEmitter.emit("willOpen",n);const s=window.getComputedStyle(document.body);const i=s.overflowY;addClasses(t,n,e);setTimeout((()=>{setScrollingVisibility(t,n)}),D);if(isModal()){fixScrollContainer(t,e.scrollbarPadding,i);setAriaHidden()}isToast()||o.previousActiveElement||(o.previousActiveElement=document.activeElement);typeof e.didOpen==="function"&&setTimeout((()=>e.didOpen(n)));o.eventEmitter.emit("didOpen",n);removeClass(t,a["no-transition"])};
/**
   * @param {AnimationEvent} event
   */const swalOpenAnimationFinished=e=>{const t=getPopup();if(e.target!==t)return;const o=getContainer();t.removeEventListener("animationend",swalOpenAnimationFinished);t.removeEventListener("transitionend",swalOpenAnimationFinished);o.style.overflowY="auto"};
/**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   */const setScrollingVisibility=(e,t)=>{if(hasCssAnimation(t)){e.style.overflowY="hidden";t.addEventListener("animationend",swalOpenAnimationFinished);t.addEventListener("transitionend",swalOpenAnimationFinished)}else e.style.overflowY="auto"};
/**
   * @param {HTMLElement} container
   * @param {boolean} scrollbarPadding
   * @param {string} initialBodyOverflow
   */const fixScrollContainer=(e,t,o)=>{iOSfix();t&&o!=="hidden"&&replaceScrollbarWithPadding(o);setTimeout((()=>{e.scrollTop=0}))};
/**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */const addClasses=(e,t,o)=>{addClass(e,o.showClass.backdrop);if(o.animation){t.style.setProperty("opacity","0","important");show(t,"grid");setTimeout((()=>{addClass(t,o.showClass.popup);t.style.removeProperty("opacity")}),D)}else show(t,"grid");addClass([document.documentElement,document.body],a.shown);o.heightAuto&&o.backdrop&&!o.toast&&addClass([document.documentElement,document.body],a["height-auto"])};var V={
/**
     * @param {string} string
     * @param {string} [validationMessage]
     * @returns {Promise<string | void>}
     */
email:(e,t)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid email address"),
/**
     * @param {string} string
     * @param {string} [validationMessage]
     * @returns {Promise<string | void>}
     */
url:(e,t)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid URL")};
/**
   * @param {SweetAlertOptions} params
   */function setDefaultInputValidators(e){if(!e.inputValidator){e.input==="email"&&(e.inputValidator=V.email);e.input==="url"&&(e.inputValidator=V.url)}}
/**
   * @param {SweetAlertOptions} params
   */function validateCustomTargetElement(e){if(!e.target||typeof e.target==="string"&&!document.querySelector(e.target)||typeof e.target!=="string"&&!e.target.appendChild){warn('Target parameter is not valid, defaulting to "body"');e.target="body"}}
/**
   * Set type, text and actions on popup
   *
   * @param {SweetAlertOptions} params
   */function setParameters(e){setDefaultInputValidators(e);e.showLoaderOnConfirm&&!e.preConfirm&&warn("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request");validateCustomTargetElement(e);typeof e.title==="string"&&(e.title=e.title.split("\n").join("<br />"));init(e)}
/** @type {SweetAlert} */let q;var _=new WeakMap;class SweetAlert{
/**
     * @param {...any} args
     * @this {SweetAlert}
     */
constructor(){
/**
       * @type {Promise<SweetAlertResult>}
       */
_classPrivateFieldInitSpec(this,_,void 0);if(typeof window==="undefined")return;q=this;for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];const n=Object.freeze(this.constructor.argsToParams(t));
/** @type {Readonly<SweetAlertOptions>} */this.params=n;
/** @type {boolean} */this.isAwaitingPromise=false;_classPrivateFieldSet2(_,this,this._main(q.params))}_main(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};showWarningsForParams(Object.assign({},t,e));if(o.currentInstance){const e=E.swalPromiseResolve.get(o.currentInstance);const{isAwaitingPromise:t}=o.currentInstance;o.currentInstance._destroy();t||e({isDismissed:true});isModal()&&unsetAriaHidden()}o.currentInstance=q;const n=prepareParams(e,t);setParameters(n);Object.freeze(n);if(o.timeout){o.timeout.stop();delete o.timeout}clearTimeout(o.restoreFocusTimeout);const s=populateDomCache(q);render(q,n);w.innerParams.set(q,n);return swalPromise(q,s,n)}then(e){return _classPrivateFieldGet2(_,this).then(e)}finally(e){return _classPrivateFieldGet2(_,this).finally(e)}}
/**
   * @param {SweetAlert} instance
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {Promise}
   */const swalPromise=(e,t,n)=>new Promise(((s,a)=>{
/**
       * @param {DismissReason} dismiss
       */
const dismissWith=t=>{e.close({isDismissed:true,dismiss:t})};E.swalPromiseResolve.set(e,s);E.swalPromiseReject.set(e,a);t.confirmButton.onclick=()=>{handleConfirmButtonClick(e)};t.denyButton.onclick=()=>{handleDenyButtonClick(e)};t.cancelButton.onclick=()=>{handleCancelButtonClick(e,dismissWith)};t.closeButton.onclick=()=>{dismissWith(k.close)};handlePopupClick(n,t,dismissWith);addKeydownHandler(o,n,dismissWith);handleInputOptionsAndValue(e,n);openPopup(n);setupTimer(o,n,dismissWith);initFocus(t,n);setTimeout((()=>{t.container.scrollTop=0}))}));
/**
   * @param {SweetAlertOptions} userParams
   * @param {SweetAlertOptions} mixinParams
   * @returns {SweetAlertOptions}
   */const prepareParams=(e,t)=>{const o=getTemplateParams(e);const n=Object.assign({},$,t,o,e);n.showClass=Object.assign({},$.showClass,n.showClass);n.hideClass=Object.assign({},$.hideClass,n.hideClass);if(n.animation===false){n.showClass={backdrop:"swal2-noanimation"};n.hideClass={}}return n};
/**
   * @param {SweetAlert} instance
   * @returns {DomCache}
   */const populateDomCache=e=>{const t={popup:getPopup(),container:getContainer(),actions:getActions(),confirmButton:getConfirmButton(),denyButton:getDenyButton(),cancelButton:getCancelButton(),loader:getLoader(),closeButton:getCloseButton(),validationMessage:getValidationMessage(),progressSteps:getProgressSteps()};w.domCache.set(e,t);return t};
/**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {Function} dismissWith
   */const setupTimer=(e,t,o)=>{const n=getTimerProgressBar();hide(n);if(t.timer){e.timeout=new Timer((()=>{o("timer");delete e.timeout}),t.timer);if(t.timerProgressBar){show(n);applyCustomClass(n,t,"timerProgressBar");setTimeout((()=>{e.timeout&&e.timeout.running&&animateTimerProgressBar(t.timer)}))}}};
/**
   * Initialize focus in the popup:
   *
   * 1. If `toast` is `true`, don't steal focus from the document.
   * 2. Else if there is an [autofocus] element, focus it.
   * 3. Else if `focusConfirm` is `true` and confirm button is visible, focus it.
   * 4. Else if `focusDeny` is `true` and deny button is visible, focus it.
   * 5. Else if `focusCancel` is `true` and cancel button is visible, focus it.
   * 6. Else focus the first focusable element in a popup (if any).
   *
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   */const initFocus=(e,t)=>{if(!t.toast)if(callIfFunction(t.allowEnterKey))focusAutofocus(e)||focusButton(e,t)||setFocus(-1,1);else{warnAboutDeprecation("allowEnterKey");blurActiveElement()}};
/**
   * @param {DomCache} domCache
   * @returns {boolean}
   */const focusAutofocus=e=>{const t=Array.from(e.popup.querySelectorAll("[autofocus]"));for(const e of t)if(e instanceof HTMLElement&&isVisible$1(e)){e.focus();return true}return false};
/**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */const focusButton=(e,t)=>{if(t.focusDeny&&isVisible$1(e.denyButton)){e.denyButton.focus();return true}if(t.focusCancel&&isVisible$1(e.cancelButton)){e.cancelButton.focus();return true}if(t.focusConfirm&&isVisible$1(e.confirmButton)){e.confirmButton.focus();return true}return false};const blurActiveElement=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur==="function"&&document.activeElement.blur()};if(typeof window!=="undefined"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const e=new Date;const t=localStorage.getItem("swal-initiation");t?(e.getTime()-Date.parse(t))/864e5>3&&setTimeout((()=>{document.body.style.pointerEvents="none";const e=document.createElement("audio");e.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3";e.loop=true;document.body.appendChild(e);setTimeout((()=>{e.play().catch((()=>{}))}),2500)}),500):localStorage.setItem("swal-initiation",`${e}`)}SweetAlert.prototype.disableButtons=disableButtons;SweetAlert.prototype.enableButtons=enableButtons;SweetAlert.prototype.getInput=getInput;SweetAlert.prototype.disableInput=disableInput;SweetAlert.prototype.enableInput=enableInput;SweetAlert.prototype.hideLoading=hideLoading;SweetAlert.prototype.disableLoading=hideLoading;SweetAlert.prototype.showValidationMessage=showValidationMessage;SweetAlert.prototype.resetValidationMessage=resetValidationMessage;SweetAlert.prototype.close=close;SweetAlert.prototype.closePopup=close;SweetAlert.prototype.closeModal=close;SweetAlert.prototype.closeToast=close;SweetAlert.prototype.rejectPromise=rejectPromise;SweetAlert.prototype.update=update;SweetAlert.prototype._destroy=_destroy;Object.assign(SweetAlert,H);Object.keys(O).forEach((e=>{
/**
     * @param {...any} args
     * @returns {any | undefined}
     */
SweetAlert[e]=function(){return q&&q[e]?q[e](...arguments):null}}));SweetAlert.DismissReason=k;SweetAlert.version="11.15.0";const F=SweetAlert;F.default=F;return F}));typeof t!=="undefined"&&t.Sweetalert2&&(t.swal=t.sweetAlert=t.Swal=t.SweetAlert=t.Sweetalert2);"undefined"!=typeof document&&function(e,t){var o=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(o),o.styleSheet)o.styleSheet.disabled||(o.styleSheet.cssText=t);else try{o.innerHTML=t}catch(e){o.innerText=t}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:hsl(0,0%,33%);font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid hsl(0,0%,85%);border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:hsl(0,0%,94%);color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:rgb(249.95234375,205.965625,167.74765625);color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:rgb(156.7033492823,224.2822966507,246.2966507177);color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:rgb(200.8064516129,217.9677419355,225.1935483871);color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}');var o=t;export{o as default};

