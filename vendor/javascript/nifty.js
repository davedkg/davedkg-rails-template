(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@popperjs/core'), require('bootstrap')) :
   typeof define === 'function' && define.amd ? define(['@popperjs/core', 'bootstrap'], factory) :
   (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.nifty = factory(global.core, global.bootstrap));
})(this, (function (core, bootstrap) { 'use strict';

   const GetSelector = {
      find(selector, element = document.documentElement) {
         return [].concat(...Element.prototype.querySelectorAll.call(element, selector))
      },

      findOne(selector, element = document.documentElement) {
         return Element.prototype.querySelector.call(element, selector)
      }
   };

   const StringMod = {
      trim( string){
         return string.replace(/\s/g, "")
      },
      listenerName( string ){
         return `_${string}Handler`
      },
      removeDots( string ){
         return string.replace(/\./g, "")
      }
   };

   class BaseComponent {
      constructor(element, events) {

         if (!element || typeof element != "object") return
         this._element = element;
         this._parent = element.parentElement;

         if ( !events ) return
         this._listener = {};

         if ( typeof events == "string" ) {
            events = StringMod.trim(events).split(",");
            events = { action: events };
         }

         for ( const handler in events ) {
            const eventNames = typeof events[handler] == "string" ? StringMod.trim(events[handler]).split(",") : events[handler];
            this._createHandler( eventNames, StringMod.listenerName(handler) );
         }

      }

      _createHandler( events, listener ){

         try {
            this[listener] = this[listener].bind(this);
         } catch (error) {
            throw new Error( `Add a listener function called "${ listener }" to handle the ${ events.toString() } event.` )
         }

         for (const event of events) {
            this._listener[event] = listener;
            this._element.addEventListener( event, this[listener], false );
         }

      }

      dispose() {
         if (this._element && this._listener ) {
            for (const ev in this._listener) this._element.removeEventListener( ev, this[this._listener[ev]] );
         }

         for (const propertyName of Object.getOwnPropertyNames(this)) {
            this[propertyName] = null;
         }
      }
   }

   /**
    * Nifty - Toggler
    * ---------------------------------------------------------------------------------
    * Turn any button or anchor into a helpful component, such as a fullscreen toggler,
    * full-page content, or a toggler class for a DIV or any other element.
    * ---------------------------------------------------------------------------------
    */


   const EVENT$2 = "click";
   const DATA_KEY = "data-nf-toggler";
   const DATA_TARGET_KEY = "data-nf-target";
   const DATA_CLASS_KEY = "data-nf-class";
   const TOGGLE_MODE = {
      "FullScreen" : "fullscreen",
      "FullPage"   : "fullpage",
      "Dismiss"    : "dismiss",
      "Class"      : "class"
   };

   const Default$3 = {
      event : EVENT$2,
      dataKey: DATA_KEY,
      dataTargetKey: DATA_TARGET_KEY,
      dataClassKey: DATA_CLASS_KEY,
      toggleMode : TOGGLE_MODE
   };

   class Toggler extends BaseComponent {
      constructor( element, config ) {
         const mergeConfig = Object.assign( Default$3, config );
         super( element, mergeConfig.event );

         this._config = mergeConfig;
         this._target = this._element.closest( this._element.getAttribute( this._config.dataTargetKey )) || GetSelector.findOne( this._element.getAttribute( this._config.dataTargetKey ));
         if ( !this._element.getAttribute( this._config.dataTargetKey ) ) console.error( `The Toggler component MUST have a dataset called [${ this._config.dataTargetKey }] to represent the target`);
         if ( !this._target && this._element.getAttribute( this._config.dataTargetKey ) ) console.error( `Can't find a "${ element.getAttribute( this._config.dataTargetKey ) }" target`);

         this._toggleType = this._getToggleType();
         this._status = this._updateStatus();
         this._element.getAttribute( this._config.dataKey );
         this._toggleClass = this._element.getAttribute( this._config.dataClassKey );

         if ( this._toggleType == this._config.toggleMode.Class && !this._element.getAttribute( this._config.dataClassKey ) ) console.error( `The Toggler component MUST have a dataset called [${ this._config.dataClassKey }] to represent the class you want to toggle`);
      }

      static get Default() {
         return Default$3
      }

      _actionHandler() {
         if ( this._toggleType == "FullScreen" ) this._fullscreen();
         else if ( this._toggleType == "FullPage" ) this._fullpage();
         else if ( this._toggleType == "Dismiss" ) this._dismiss();
         else if ( this._toggleType == "Class" ) this._class();


         // Update status
         this._status = this._updateStatus();
      }

      _getToggleType() {
         for (const t in this._config.toggleMode) {
            if ( this._element.getAttribute( this._config.dataKey ) == this._config.toggleMode[ t ] ) return t
         }
      }

      _updateStatus() {
         if ( this._toggleType == "FullScreen" ) return !document.fullscreenElement?"normal":"fullscreen"
         else if ( this._toggleType == "FullPage" ) return this._target.classList.contains("content-full-page")?"fullpage":"normal";
         else if ( this._toggleType == "Dismiss" ) return !this._target ? "dismissed" : "normal";
         else if ( this._toggleType == "Class" ) return this._target.classList.contains( this._toggleClass )? "added":"removed"
      }

      _fullscreen() {
         if ( !document.fullscreenElement ) {
            // Fullscreen
            // ---------------------------------------------------------------------------------
            if ( this._target.requestFullscreen ) this._target.requestFullscreen();
            else if ( this._target.webkitRequestFullscreen) this._target.webkitRequestFullscreen(); /* Safari */
         } else {
            // Exit Fullscreen
            // ---------------------------------------------------------------------------------
            if (document.exitFullscreen) document.exitFullscreen();
            else if (document.webkitExitFullscreen) document.webkitExitFullscreen(); /* Safari */
         }
      }

      _fullpage() {
         this._target.classList.toggle("content-full-page");
         body.classList.toggle("body-sc");
      }

      _dismiss() {
         this._target.remove();
         this._target = null;
         super.dispose();
      }

      _class() {
         this._target.classList.toggle( this._toggleClass );
      }

      getStatus() {
         return this._status;
      }
   }



   GetSelector.find( `[${DATA_KEY}]` ).forEach( btn => new Toggler(btn) );

   /**
    * Nifty - Smooth Dropdown
    * ---------------------------------------------------------------------------------
    * Make Bootstrap's Dropdown menu slide smoothly using CSS animations.
    * ---------------------------------------------------------------------------------
    */

   class SmoothDropdown extends BaseComponent {
      constructor( element ){
         super( element, {
            show : "show.bs.dropdown",
            hide : "hide.bs.dropdown"
         });

         this._menu = GetSelector.findOne( ".dropdown-menu", this._parent );
      }

      _showHandler() {
         this._menu.classList.remove("mot", "mol", "mor");
      }

      _hideHandler(){
         const menuPlacement = this._menu ? this._menu.getAttribute( "data-popper-placement" ) : null;

         if ( menuPlacement ) {
            const menuOnTOp = [ "top", "right-end", "left-end" ];
            if ( menuPlacement.includes("left") ) this._menu.classList.add("mol");

            for (let i = 0; i < menuOnTOp.length; i++) {
               if ( menuPlacement.includes(menuOnTOp[i]) ){
                  this._menu.classList.add("mot");
                  break;
               }
            }
         }

         if ( this._menu.getAttribute("data-bs-popper") ) this._menu.classList.add("mst");

      }
   }

   GetSelector.find( ".dropdown-toggle" ).forEach( dropdown => {
      if ( !GetSelector.find( ".dropdown", dropdown.parentElement ) ) return
      new SmoothDropdown(dropdown);
   });

   /**
    * Nifty - Sidebars Toggler
    * ---------------------------------------------------------------------------------
    * Toggle the Main-Navigation or the Right-Sidebar without getting too complicated,
    * add the class ".nav-toggler" or ".sidebar-toggler" to your button, and you are ready to go.
    * ---------------------------------------------------------------------------------
    */

   const EVENT$1 = "click";
   const EVENT_SIDEBARS_CHANGE$1 = "change.nf.sidebar";
   const EVENT_SIDEBARS_CHANGED = "changed.nf.sidebar";
   const SELECTOR_TOGGLE_NAV = ".nav-toggler";
   const SELECTOR_TOGGLE_SIDEBAR = ".sidebar-toggler";
   const SELECTOR_ROOT$1 = "#root";
   const SELECTOR_NAV$1 = ".mainnav";
   const SELECTOR_SIDEBAR = ".sidebar";
   const CLASS_NAME_MIN_NAV = "mn--min";
   const CLASS_NAME_MAX_NAV = "mn--max";
   const CLASS_NAME_SHOW_NAV = "mn--show";
   const CLASS_NAME_SHOW_SIDEBAR = "sb--show";
   const CLASS_NAME_STUCK_SIDEBAR = "sb--stuck";

   const Default$2 = {
      event : EVENT$1,
      eventSidebarsChange: EVENT_SIDEBARS_CHANGE$1,
      eventSidebarsChanged: EVENT_SIDEBARS_CHANGED,
      selectorRoot: SELECTOR_ROOT$1,
      selectorToggleNav: SELECTOR_TOGGLE_NAV,
      selectorToggleSidebar: SELECTOR_TOGGLE_SIDEBAR,
      selectorNav: SELECTOR_NAV$1,
      selectorSidebar: SELECTOR_SIDEBAR
   };

   class SidebarToggler extends BaseComponent {
      constructor( element, config ) {
         const mergeConfig = Object.assign( Default$2, config );
         super( element, mergeConfig.event );

         this._config = mergeConfig;
         this._root = GetSelector.findOne( this._config.selectorRoot );
         this._nav = GetSelector.findOne( this._config.selectorNav );
         this._sidebar = GetSelector.findOne( this._config.selectorSidebar );
         this._toggleType = element.classList.contains( this._config.selectorToggleNav.replace( ".","" ) ) ? "NAV" : "SIDEBAR";
         this._removeBackdrop = this._removeBackdrop.bind(this);

         this._eventSidebarsChange = new Event( this._config.eventSidebarsChange );
         this._eventSidebarsChanged = new Event( this._config.eventSidebarsChanged );

      }

      static get Default() {
         return Default$2
      }

      _actionHandler(e) {
         e.stopPropagation();
         document.addEventListener( EVENT$1, this._removeBackdrop, false);

         if ( this._toggleType == "NAV" ) {
            if (window.innerWidth < 992 || (!this._root.classList.contains( CLASS_NAME_MIN_NAV ) && !this._root.classList.contains( CLASS_NAME_MAX_NAV ))) {
               this._root.classList.toggle( CLASS_NAME_SHOW_NAV );
            } else {
               this._root.classList.toggle( CLASS_NAME_MIN_NAV );
               this._root.classList.toggle( CLASS_NAME_MAX_NAV );
            }
            this._nav.dispatchEvent(this._eventSidebarsChange);
            this._nav.addEventListener( "transitionend", () => this._nav.dispatchEvent(this._eventSidebarsChanged), { once: true });

         } else {
            this._root.classList.toggle( CLASS_NAME_SHOW_SIDEBAR );
            this._sidebar.dispatchEvent(this._eventSidebarsChange);
            this._sidebar.addEventListener( "transitionend", () => this._sidebar.dispatchEvent(this._eventSidebarsChanged), { once: true });
         }

         // Dispatch a custom event
         document.dispatchEvent(this._eventSidebarsChange);
         this._transitionEnd = this._transitionEnd.bind( this );
         document.addEventListener( "transitionend", this._transitionEnd, { once: false });
      }

      _transitionEnd ( e ) {
         if ( e.propertyName == "max-width" || e.propertyName == "transform" ){
            document.removeEventListener( "transitionend", this._transitionEnd );
            document.dispatchEvent(this._eventSidebarsChanged);
         }
      }

      _removeBackdrop( e ) {
         if ( e.target === this._root || ( !e.target.closest( this._config.selectorNav ) && !e.target.closest( this._config.selectorSidebar ) ) ) {
            this._root.classList.remove( CLASS_NAME_SHOW_NAV );
            if (!this._root.classList.contains( CLASS_NAME_STUCK_SIDEBAR )) this._root.classList.remove( CLASS_NAME_SHOW_SIDEBAR );

            document.removeEventListener( EVENT$1, this._removeBackdrop );
         }
      }
   }


   GetSelector.find( `${SELECTOR_TOGGLE_NAV}, ${SELECTOR_TOGGLE_SIDEBAR}` ).forEach( st => new SidebarToggler(st) );

   /**
    * Nifty - Main Navigation
    * ---------------------------------------------------------------------------------
    * Make the main navigation support for collapsing and floating menus in the Mini navigation mode.
    * This component requires :
    * - Bootstrap Collapse
    * - PopperJS
    * ---------------------------------------------------------------------------------
    */

   const EVENT_SIDEBARS_CHANGE = SidebarToggler.Default.eventSidebarsChange;
   const EVENT_OUTSIDE_TRIGGER = [ "click", "touchend" ];
   const EVENT_SUBMENU_TOGGLER = [ "click", "mouseenter" ];
   const SELECTOR_ROOT = "#root";
   const SELECTOR_CONTENT = "#content";
   const SELECTOR_NAV = "#mainnav-container";
   const SELECTOR_MININAV_TOGGLE = ".mininav-toggle";
   const SELECTOR_MININAV_CONTENT = ".mininav-content";

   const CollapseEvent = {
      show   : "show.bs.collapse",
      shown  : "shown.bs.collapse",
      hide   : "hide.bs.collapse"
   };

   const PopperOptions = {
      placement   : "right",
      strategy    : "fixed",
      modifiers   : [
         {
            name     : "offset",
            options  : { offset: [ 0, 9 ] }
         },
         {
            name: "arrow",
            options: {
               padding: 15, // 15px from the edges of the popper
            },
         },
         {
            name: "preventOverflow",
            options: {
               padding: 7,
               //rootBoundary: null,
               //boundary: null,
            },
         }
      ]
   };

   const MainnavCSSClass = {
      "maxi"      : "mn--max",
      "mini"      : "mn--min",
      "push"      : "mn--push",
      "slide"     : "mn--slide",
      "reveal"    : "mn--reveal"
   };

   let Default$1 = {
      eventSidebarsChange : EVENT_SIDEBARS_CHANGE,
      eventOutsideTrigger : EVENT_OUTSIDE_TRIGGER,
      eventSubmenuToggler : EVENT_SUBMENU_TOGGLER,
      selectorRoot: SELECTOR_ROOT,
      selectorContent: SELECTOR_CONTENT,
      selectorNav: SELECTOR_NAV,
      selectorMininavToggle: SELECTOR_MININAV_TOGGLE,
      selectorMininavContent: SELECTOR_MININAV_CONTENT
   };

   class MainNavigation extends BaseComponent {
      constructor( element, config ) {
         Default$1 = Object.assign( Default$1, config );
         super( element, Default$1.eventSidebarsChange );

         if ( !MainNav ) MainNav = this;
         this._config = Default$1;
         this.update();
      }

      static get Default() {
         return Default$1
      }

      static get mode() {
         const root = GetSelector.findOne( SELECTOR_ROOT );
         for (const key in MainnavCSSClass) {
            if ( root.classList.contains( MainnavCSSClass[key] ) ) return key
         }
      }

      static setmode(mode) {
         if ( !MainNav ) {
            console.error( "Can't find the Main Navigation element, so be sure to set it up properly." );
            return
         }

         const root = GetSelector.findOne( Default$1.selectorRoot );
         root.classList.remove( "mn--show" );
         for (const key in MainnavCSSClass) {
            if (mode == key) {
               root.classList.add( MainnavCSSClass[key] );
            } else {
               root.classList.remove( MainnavCSSClass[key] );
            }
         }

         MainNav._actionHandler();
      }

      get called () {
         return this._called
      }

      set called (ab){
         this._called = ab;
      }

      update() {
         this._updateSelectors();
         this._updateNavMode();
         this._initializeCollapseMenu();
      }

      _actionHandler () {
         this._updateNavMode();

         this._navSubmenus.forEach( submenu => {
            if ( this._mode == "mini" && submenu._element.classList.contains("show") ) {
               submenu._bsCollapse.hide();
            } else if( this._mode != "mini" ) {

               // Close all active submenus
               if ( submenu._element.classList.contains( "show" ) ) submenu._toggler.click();

               // Remove all popper components
               if ( submenu._popper ) {
                  submenu._popper.destroy();
                  submenu._popper = undefined;
               }
            }
         });
      }

      _updateSelectors() {
         this._root = GetSelector.findOne( this._config.selectorRoot );
         this._submenus = GetSelector.find( this._config.selectorMininavContent, this._element );
      }

      _updateNavMode() {
         for (const key in MainnavCSSClass) {
            if ( this._root.classList.contains( MainnavCSSClass[key] ) ) this._mode = key;
         }
      }

      _initializeCollapseMenu() {
         this._navSubmenus = this._submenus.map( submenu => {
            return new NavigationSubmenu( submenu, this._config, this );
         });
      }

      _addListenerClickOutside() {
         if ( this._isListenerAdded ) return

         this._isListenerAdded = true;
         this._isOutsideNavigation = this._isOutsideNavigation.bind(this);
         this._config.eventOutsideTrigger.forEach( ev => document.addEventListener( ev, this._isOutsideNavigation, false ));
      }

      _removeListenerClickOutside() {
         if ( !this._isListenerAdded ) return

         this._isListenerAdded = false;
         this._config.eventOutsideTrigger.forEach( ev => document.removeEventListener( ev, this._isOutsideNavigation ));
      }

      _isOutsideNavigation(e) {
         if ( e.target === this._root || !e.target.closest( this._config.selectorNav ) ) {
            this._navSubmenus.forEach( submenu => submenu._bsCollapse.hide() );
            this._removeListenerClickOutside();
         }
      }
   }


   class NavigationSubmenu extends BaseComponent {
      constructor( element, config, mainnav ) {
         super( element, CollapseEvent);
         this._config = config;

         this._mainnav = mainnav;
         this._toggler = GetSelector.findOne( this._config.selectorMininavToggle, this._parent ) || this._parent.closest( this._config.selectorMininavToggle );
         this._isLink = !this._parent.classList.contains( "has-sub" );
         this._childCollapse = GetSelector.find( this._config.selectorMininavToggle, this._element );


         // Initialize the collapse instance
         this._bsCollapse = new bootstrap.Collapse( element, {
            parent: this._parent.parentElement.classList.contains( StringMod.removeDots(this._config.selectorMininavContent) ) ? this._parent.parentElement : this._mainnav._element,
            toggle: this._toggler.classList.contains( "active" ) && this._mainnav._mode != "mini"
         });


         // Add all toggle listeners for collapsable submenus
         this._submenuToggle = this._submenuToggle.bind(this);
         this._config.eventSubmenuToggler.forEach( ev => {
            this._toggler.addEventListener( ev, this._submenuToggle, false );
         });

      }

      _submenuToggle(e) {
         e.stopPropagation();

         // The regular anchor doesn't have a toggle function, but it has a link to the anchor page.
         if ( !this._isLink ) e.preventDefault();


         // Prevent only for modes other than "mini" and not from mouseenter events.
         if (this._mainnav._mode != "mini" && e.type == "mouseenter") return


         // There is a Bootstrap collapse bug that will fire the hide event when the collapse happens inside another collapsed component,
         // so we have to store which element made the change to avoid this issue.
         this._mainnav.called = this._element;


         // Toggle the submenu to collapse
         this._bsCollapse.toggle();
      }

      _showHandler() {
         if ( this._element.classList.contains("show") ) return;

         if( this._mainnav._mode == "mini" ){

            // Get the content element to be set to the Popper boundary option.
            // for (const index of PopperOptions.modifiers) {
               //if ( index.name == "preventOverflow" ) index.options.rootBoundary = index.options.boundary = document.querySelector( this._config.selectorContent )
            // }

            // Initialize the popper component
            if ( !this._popper ) {
               try {
                  this._popper = Popper.createPopper( this._toggler, this._element, PopperOptions  );
               } catch (err) {
                  this._popper = core.createPopper( this._toggler, this._element, PopperOptions  );
               }
            }

            this._popper.update();
         } else {
            this._toggler.classList.remove("collapsed");
         }
      }

      _hideHandler() {
         // Let's check which collapse component causes this effect:
         if ( this._element.contains( this._mainnav.called ) && this._element !== this._mainnav.called) return
         if ( !this._isLink ) this._toggler.classList.add("collapsed");


         // Ignore when there is no child with a submenu.
         if ( this._mainnav._mode != "mini" || !this._childCollapse.length ) return


         // Hide all active submenu items
         const activeChildSubmenu = GetSelector.findOne( `${ this._config.selectorMininavContent }.show`, this._element );
         if ( activeChildSubmenu )  activeChildSubmenu.parentElement.querySelector( this._config.selectorMininavToggle ).click();
      }

      _shownHandler() {
         if ( this._mainnav._mode == "mini" ) {
            this._popper.update();
            this._mainnav._addListenerClickOutside();
         } else {
            if ( this._popper ) this._popper.destroy();
            this._mainnav._removeListenerClickOutside();
         }
      }
   }

   let MainNav =  GetSelector.findOne( Default$1.selectorNav );
   if (MainNav) MainNav = new MainNavigation( MainNav );

   /**
    * Nifty - Color Mode Switcher
    * ---------------------------------------------------------------------------------
    * Turn your checkbox, select, or radio button into a switch component,
    * which will switch between light and dark color modes.
    * ---------------------------------------------------------------------------------
    */


   const SELECTOR_SWITCHER = ".mode-switcher";
   const SELECTOR_SWITCHER_ICONS = ".mode-switcher-icon";
   const EVENT = "change";
   const EVENT_MODE_CHANGE = "change.nf.colormode";
   const AVAILABLE_COLOR_MODE = [ "auto", "light", "dark" ];
   const DATA_BS_COLOR_MODE = "data-bs-theme";

   let inputValue = new String;
   let modeSwitchers = new Array;
   let eventColorModeChange = new Event( EVENT_MODE_CHANGE, { colorMode: document.documentElement.getAttribute( DATA_BS_COLOR_MODE ) } );

   const Default = {
      event: EVENT,
      selectorSwitcher : SELECTOR_SWITCHER,
      selectorSwitcherIcons : SELECTOR_SWITCHER_ICONS,
      availableColorMode : AVAILABLE_COLOR_MODE,
      dataBSColorMode : DATA_BS_COLOR_MODE
   };

   class ColorModeSwitcher extends BaseComponent {
      constructor( element, config ) {
         const mergeConfig = Object.assign( Default, config );
         super( element, mergeConfig.event );

         // Store all switchers in an array object.
         modeSwitchers.push( this );

         this._config = mergeConfig;
         this._icons = GetSelector.find( this._config.selectorSwitcherIcons, this._parent );
         this._updateColorMode();
         this._updateState();
      }

      /**
       * @param {String} colormode
       */
      static setColorMode( colormode ) {
         inputValue = colormode;

         if ( colormode == "auto" ) colormode = this.prefersTheme;
         document.documentElement.setAttribute( DATA_BS_COLOR_MODE, colormode );

         // Dispatch the color event
         eventColorModeChange.colorMode = colormode;
         document.dispatchEvent( eventColorModeChange );


         // Update all switcher states
         modeSwitchers.forEach( switcher => switcher._updateState() );
      }

      static get prefersTheme() {
         return window.matchMedia("( prefers-color-scheme: dark )").matches ? "dark" : "light";
      }

      static get Default() {
         return Default
      }


      _actionHandler(e) {
         // inputValue = e.currentTarget.type == "checkbox" ? e.currentTarget.checked ? "dark" : "light" : e.currentTarget.value
         const currentElement = e.currentTarget;
         if ( currentElement.type == "checkbox" && currentElement.getAttribute("value") == null ) {
            inputValue = currentElement.checked ? "dark" : "light";
         } else {
            inputValue = currentElement.value;
         }
         this.setColorMode( inputValue );
      }

      _updateState() {
         this._updateColorMode();

         // Update element states
         if ( this._element.type == "checkbox" && this._element.getAttribute("value") == null ) {
            this._element.checked = this._colorMode == "dark" ? true : false;
         } else if( this._element.type == "select-one" ) {
            let matchOption = this._element.querySelector( `[value="${ inputValue }"]` );
            if ( !matchOption ) matchOption = this._element.querySelector( `[value="${ this._colorMode }"]` );
            matchOption.selected = true;
         } else if( this._element.type == "radio" || this._element.type == "checkbox" ) {
            this._element.checked = this._element.value == this._colorMode ? true : false;

            if ( inputValue == "auto" ) {
               const matchOption = document.querySelector( `[name="${this._element.getAttribute("name")}"][value="auto"]` );
               if ( matchOption ) {
                  matchOption.checked = true;
               } else if( this._element.type == "checkbox" && this._element.value =="auto" ){
                  this._element.checked = true;
               }
            }
         }

         // Update element icons
         this._icons.forEach( icon => {
            if ( icon.classList.contains( `icon-${ this._colorMode }` ) ) icon.classList.remove("d-none");
            else icon.classList.add("d-none");
         });
      }

      _updateColorMode() {
         this._colorMode = document.documentElement.getAttribute( this._config.dataBSColorMode );
         if ( inputValue == "" ) inputValue = this._colorMode;
      }

      _isAvailableMode( inputMode ) {
         for (const color in this._config.availableColorMode) {
            if ( inputMode == this._config.availableColorMode[ color ] ) return true
         }
         return false
      }

      _updateSwitchers() {
         // Update all switcher states
         modeSwitchers.forEach( switcher => switcher._updateState(this._colorMode));
      }

      update() {
         this._updateState();
      }

      setColorMode( inputMode ) {
         if ( !this._isAvailableMode( inputMode ) ) {
            throw new Error ( `The color mode "${ inputMode }" isn't available.` )
         }


         if ( inputMode == "auto" ) inputMode = this.constructor.prefersTheme;
         document.documentElement.setAttribute( this._config.dataBSColorMode, inputMode );
         this._updateColorMode();


         // Dispatch the color event
         eventColorModeChange.colorMode = this._colorMode;
         document.dispatchEvent( eventColorModeChange );
         this._updateSwitchers();
      }

      dispose() {
         // Remove the selected switcher from the variable.
         const thisSwithcer = modeSwitchers.indexOf(this);
         if (thisSwithcer > -1) modeSwitchers.splice(thisSwithcer, 1); // Remove one item at the specified index
         super.dispose();
      }
   }

   // Initialize
   GetSelector.find( SELECTOR_SWITCHER ).forEach( switcher => new ColorModeSwitcher( switcher ) );

   /**
    * NiftyJS - UMD
    * ---------------------------------------------------------------------------------
    * browser-friendly UMD build
    */


   var nifty_umd = {
      Toggler,
      SmoothDropdown,
      SidebarToggler,
      MainNavigation,
      ColorModeSwitcher
   };

   return nifty_umd;

}));
