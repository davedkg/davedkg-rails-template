/*
Template Name: Droplet - Responsive Bootstrap 5 Admin Template
Version: 2.0.0
Author: Sean Ngu
Website: http://www.seantheme.com/droplet/
	----------------------------
		APPS CONTENT TABLE
	----------------------------

	<!-- ======== GLOBAL SCRIPT SETTING ======== -->
  01. Global Variable
  02. Handle Scrollbar
  03. Handle Sidebar Menu
  04. Handle Sidebar Scroll Memory
  05. Handle Card Action
  06. Handle Tooltip & Popover Activation
  07. Handle Scroll to Top Button
  08. Handle hexToRgba
  09. Handle Scroll To
  10. Handle Toggle Class
  11. Handle Theme Panel
  12. Handle CSS Variable
  13. Handle Toggle Class
  14. Application Controller
  15. Initialise

	<!-- ======== APPLICATION SETTING ======== -->
	Application Controller
*/



/* 01. Global Variable
------------------------------------------------ */
var app = {
	id: '#app',
	isMobile: ((/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) || window.innerWidth < 992),
	bootstrap: {
		tooltip: {
			attr: 'data-bs-toggle="tooltip"'
		},
		popover: {
			attr: 'data-bs-toggle="popover"'
		},
		modal: {
			attr: 'data-bs-toggle="modal"',
			dismissAttr: 'data-bs-dismiss="modal"',
			event: {
				hidden: 'hidden.bs.modal'
			}
		},
		nav: {
			class: 'nav',
			tabs: {
				class: 'nav-tabs',
				activeClass: 'active',
				itemClass: 'nav-item',
				itemLinkClass: 'nav-link'
			}
		}
	},
	header: {
		id: '#header',
		class: 'app-header',
		hasScrollClass: 'has-scroll'
	},
	sidebar: {
		id: '#sidebar',
		class: 'app-sidebar',
		scrollBar: {
			localStorage: 'appSidebarScrollPosition',
			dom: ''
		},
		menu: {
			class: 'menu',
			initAttr: 'data-init',
			animationTime: 0,
			itemClass: 'menu-item',
			itemLinkClass: 'menu-link',
			hasSubClass: 'has-sub',
			activeClass: 'active',
			expandingClass: 'expanding',
			expandClass: 'expand',
			submenu: {
				class: 'menu-submenu',
			}
		},
		mobile: {
			toggleAttr: 'data-toggle="app-sidebar-mobile"',
			dismissAttr: 'data-dismiss="app-sidebar-mobile"',
			toggledClass: 'app-sidebar-mobile-toggled',
			closedClass: 'app-sidebar-mobile-closed',
			backdrop: {
				class: 'app-sidebar-mobile-backdrop'
			}
		},
		minify: {
			toggleAttr: 'data-toggle="app-sidebar-minify"',
			toggledClass: 'app-sidebar-minified',
			cookieName: 'app-sidebar-minified'
		},
		floatSubmenu: {
			id: '#app-sidebar-float-submenu',
			dom: '',
			timeout: '',
			class: 'app-sidebar-float-submenu',
			container: {
				class: 'app-sidebar-float-submenu-container'
			},
			arrow: {
				id: '#app-sidebar-float-submenu-arrow',
				class: 'app-sidebar-float-submenu-arrow'
			},
			line: {
				id: '#app-sidebar-float-submenu-line',
				class: 'app-sidebar-float-submenu-line'
			},
			overflow: {
				class: 'overflow-scroll mh-100vh'
			}
		},
		search: {
			class: 'menu-search',
			toggleAttr: 'data-sidebar-search="true"',
			hideClass: 'd-none',
			foundClass: 'has-text'
		},
		transparent: {
			class: 'app-sidebar-transparent'
		}
	},
	scrollBar: {
		attr: 'data-scrollbar="true"',
		skipMobileAttr: 'data-skip-mobile',
		heightAttr: 'data-height',
		wheelPropagationAttr: 'data-wheel-propagation'
	},
	content: {
		id: '#content',
		class: 'app-content',
		fullHeight: {
			class: 'app-content-full-height'
		},
		fullWidth: {
			class: 'app-content-full-width'
		}
	},
	layout: {
		sidebarLight: {
			class: 'app-with-light-sidebar'
		},
		sidebarEnd: {
			class: 'app-with-end-sidebar'
		},
		sidebarWide: {
			class: 'app-with-wide-sidebar'
		},
		sidebarMinified: {
			class: 'app-sidebar-minified'
		},
		sidebarTwo: {
			class: 'app-with-two-sidebar'
		},
		withoutHeader: {
			class: 'app-without-header'
		},
		withoutSidebar: {
			class: 'app-without-sidebar'
		},
		topMenu: {
			class: 'app-with-top-menu'
		},
		boxedLayout: {
			class: 'boxed-layout'
		}
	},
	scrollToTopBtn: {
		showClass: 'show',
		heightShow: 200,
		toggleAttr: 'data-toggle="scroll-to-top"',
		scrollSpeed: 500
	},
	scrollTo: {
		attr: 'data-toggle="scroll-to"',
		target: 'data-target',
		linkTarget: 'href'
	},
	themePanel: {
		class: 'app-theme-panel',
		toggleAttr: 'data-toggle="theme-panel-expand"',
		cookieName: 'app-theme-panel-expand',
		activeClass: 'active',
		themeListCLass: 'app-theme-list',
		themeListItemCLass: 'app-theme-list-item',
		theme: {
			toggleAttr: 'data-toggle="theme-selector"',
			classAttr: 'data-theme-class',
			cookieName: 'app-theme',
			activeClass: 'active'
		},
		themeDarkMode: {
			toggleAttr: 'data-toggle="theme-dark-mode"',
			cookieName: 'app-dark-mode',
			attributeName: 'data-bs-theme',
			attributeValue: 'dark'
		}
	},
	toggleClass: {
		toggleAttr: 'data-toggle-class',
		targetAttr: 'data-toggle-target'
	},
	dismissClass: {
		toggleAttr: 'data-dismiss-class',
		targetAttr: 'data-dismiss-target'
	},
	toggleClass: {
		toggleAttr: 'data-toggle-class',
		targetAttr: 'data-toggle-target'
	},
	variablePrefix: 'bs-',
	variableFontList: ['body-font-family', 'body-font-size', 'body-font-weight', 'body-line-height'],
	variableColorList: [
		'theme', 'theme-rgb', 'theme-color', 'theme-color-rgb',
		'default', 'default-rgb',
		'primary', 'primary-rgb', 'primary-bg-subtle', 'primary-text', 'primary-border-subtle',
		'secondary', 'secondary-rgb', 'secondary-bg-subtle', 'secondary-text', 'secondary-border-subtle',
		'success', 'success-rgb', 'success-bg-subtle', 'success-text', 'success-border-subtle',
		'warning', 'warning-rgb', 'warning-bg-subtle', 'warning-text', 'warning-border-subtle',
		'info', 'info-rgb', 'info-bg-subtle', 'info-text', 'info-border-subtle',
		'danger', 'danger-rgb', 'danger-bg-subtle', 'danger-text', 'danger-border-subtle',
		'light', 'light-rgb', 'light-bg-subtle', 'light-text', 'light-border-subtle',
		'dark', 'dark-rgb', 'dark-bg-subtle', 'dark-text', 'dark-border-subtle',
		'white', 'white-rgb',
		'black', 'black-rgb',
		'teal', 'teal-rgb',
		'indigo', 'indigo-rgb',
		'purple', 'purple-rgb',
		'yellow', 'yellow-rgb',
		'pink', 'pink-rgb',
		'cyan', 'cyan-rgb',
		'gray-100', 'gray-200', 'gray-300', 'gray-400', 'gray-500',  'gray-600', 'gray-700', 'gray-800', 'gray-900',
		'gray-100-rgb', 'gray-200-rgb', 'gray-300-rgb', 'gray-400-rgb', 'gray-500-rgb',  'gray-600-rgb', 'gray-700-rgb', 'gray-800-rgb', 'gray-900-rgb',
		'muted', 'muted-rgb', 'emphasis-color', 'emphasis-color-rgb',
		'component-bg', 'component-bg-rgb', 'component-color', 'component-color-rgb',
		'body-bg', 'body-bg-rgb', 'body-color', 'body-color-rgb',
		'heading-color',
		'secondary-color', 'secondary-color-rgb', 'secondary-bg', 'secondary-bg-rgb',
		'tertiary-color', 'tertiary-color-rgb', 'tertiary-bg', 'tertiary-bg-rgb',
		'link-color', 'link-color-rgb', 'link-hover-color', 'link-hover-color-rgb',
		'border-color', 'border-color-translucent'
	],
	font: {},
	color: {},
	card: {
		expand: {
			status: false,
			toggleAttr: 'data-toggle="card-expand"',
			toggleTitle: 'Expand / Compress',
			class: 'card-expand'
		}
	},
	init: {
		attr: 'data-init',
		class: 'app-init'
	}
};



/* 02. Handle Scrollbar
------------------------------------------------ */
var handleScrollbar = function() {
	"use strict";
	var elms = document.querySelectorAll('['+ app.scrollBar.attr +']');

	for (var i = 0; i < elms.length; i++) {
		generateScrollbar(elms[i])
	}
};
var generateScrollbar = function(elm) {
  "use strict";

	if (elm.scrollbarInit || (app.isMobile && elm.getAttribute(app.scrollBar.skipMobileAttr))) {
		return;
	}
	var dataHeight = (!elm.getAttribute(app.scrollBar.heightAttr)) ? elm.offsetHeight : elm.getAttribute(app.scrollBar.heightAttr);

	elm.style.height = dataHeight;
	elm.scrollbarInit = true;

	if(app.isMobile) {
		elm.style.overflowX = 'scroll';
	} else {
		var dataWheelPropagation = (elm.getAttribute(app.scrollBar.wheelPropagationAttr)) ? elm.getAttribute(app.scrollBar.wheelPropagationAttr) : false;

		if (elm.closest('.'+ app.sidebar.class) && elm.closest('.'+ app.sidebar.class).length !== 0) {
			app.sidebar.scrollBar.dom = new PerfectScrollbar(elm, {
				wheelPropagation: dataWheelPropagation
			});
		} else {
			new PerfectScrollbar(elm, {
				wheelPropagation: dataWheelPropagation
			});
		}
	}
	elm.setAttribute(app.init.attr, true);
	elm.classList.remove('invisible');
};



/* 03. Handle Sidebar Menu
------------------------------------------------ */
var handleSidebarMenuToggle = function(menus) {
	menus.map(function(menu) {
		menu.onclick = function(e) {
			e.preventDefault();
			var target = this.nextElementSibling;

			menus.map(function(m) {
				var otherTarget = m.nextElementSibling;
				if (otherTarget !== target) {
					otherTarget.style.display = 'none';
					otherTarget.closest('.'+ app.sidebar.menu.itemClass).classList.remove(app.sidebar.menu.expandClass);
				}
			});

			var targetItemElm = target.closest('.'+ app.sidebar.menu.itemClass);

			if (targetItemElm.classList.contains(app.sidebar.menu.expandClass) || (targetItemElm.classList.contains(app.sidebar.menu.activeClass) && !target.style.display)) {
				targetItemElm.classList.remove(app.sidebar.menu.expandClass);
				target.style.display = 'none';
			} else {
				targetItemElm.classList.add(app.sidebar.menu.expandClass);
				target.style.display = 'block';
			}
		}
	});
};
var handleSidebarMenu = function() {
	"use strict";

	var menuBaseSelector = '.'+ app.sidebar.class +' .'+ app.sidebar.menu.class +' > .'+ app.sidebar.menu.itemClass +'.'+ app.sidebar.menu.hasSubClass;
	var submenuBaseSelector = ' > .'+ app.sidebar.menu.submenu.class +' > .'+ app.sidebar.menu.itemClass + '.' + app.sidebar.menu.hasSubClass;

	// menu
	var menuLinkSelector =  menuBaseSelector + ' > .'+ app.sidebar.menu.itemLinkClass;
	var menus = [].slice.call(document.querySelectorAll(menuLinkSelector));
	handleSidebarMenuToggle(menus);

	// submenu lvl 1
	var submenuLvl1Selector = menuBaseSelector + submenuBaseSelector;
	var submenusLvl1 = [].slice.call(document.querySelectorAll(submenuLvl1Selector + ' > .' + app.sidebar.menu.itemLinkClass));
	handleSidebarMenuToggle(submenusLvl1);

	// submenu lvl 2
	var submenuLvl2Selector = menuBaseSelector + submenuBaseSelector + submenuBaseSelector;
	var submenusLvl2 = [].slice.call(document.querySelectorAll(submenuLvl2Selector + ' > .' + app.sidebar.menu.itemLinkClass));
	handleSidebarMenuToggle(submenusLvl2);
};



/* 04. Handle Sidebar Scroll Memory
------------------------------------------------ */
var handleSidebarScrollMemory = function() {
	if (!app.isMobile) {
		try {
			if (typeof(Storage) !== 'undefined' && typeof(localStorage) !== 'undefined') {
				var elm = document.querySelector('.'+ app.sidebar.class +' ['+ app.scrollBar.attr +']');

				if (elm) {
					elm.onscroll = function() {
						localStorage.setItem(app.sidebar.scrollBar.localStorage, this.scrollTop);
					}
					var defaultScroll = localStorage.getItem(app.sidebar.scrollBar.localStorage);
					if (defaultScroll) {
						document.querySelector('.'+ app.sidebar.class +' ['+ app.scrollBar.attr +']').scrollTop = defaultScroll;
					}
				}
			}
		} catch (error) {
			console.log(error);
		}
	}
};



/* 05. Handle Card Action
------------------------------------------------ */
var handleCardAction = function() {
	"use strict";

	if (app.card.expand.status) {
		return false;
	}
	app.card.expand.status = true;

	// expand
	var expandTogglerList = [].slice.call(document.querySelectorAll('['+ app.card.expand.toggleAttr +']'));
	var expandTogglerTooltipList = expandTogglerList.map(function (expandTogglerEl) {
		expandTogglerEl.onclick = function(e) {
			e.preventDefault();

			var target = this.closest('.card');
			var targetClass = app.card.expand.class;
			var targetTop = 40;

			if (document.body.classList.contains(targetClass) && target.classList.contains(targetClass)) {
				target.removeAttribute('style');
				target.classList.remove(targetClass);
				document.body.classList.remove(targetClass);
			} else {
				document.body.classList.add(targetClass);
				target.classList.add(targetClass);
			}

			window.dispatchEvent(new Event('resize'));
		};

		return new bootstrap.Tooltip(expandTogglerEl, {
			title: app.card.expand.toggleTitle,
			placement: 'bottom',
			trigger: 'hover',
			container: 'body'
		});
	});
};



/* 06. Handle Tooltip & Popover Activation
------------------------------------------------ */
var handelTooltipPopoverActivation = function() {
	"use strict";

	var tooltipTriggerList = [].slice.call(document.querySelectorAll('['+ app.bootstrap.tooltip.attr +']'))
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl);
	});

	var popoverTriggerList = [].slice.call(document.querySelectorAll('['+ app.bootstrap.popover.attr +']'))
	var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
		return new bootstrap.Popover(popoverTriggerEl);
	});
};



/* 07. Handle Scroll to Top Button
------------------------------------------------ */
var handleScrollToTopButton = function() {
	"use strict";

	var elmTriggerList = [].slice.call(document.querySelectorAll('['+ app.scrollToTopBtn.toggleAttr +']'));

	document.onscroll = function() {
		var doc = document.documentElement;
		var totalScroll = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
		var elmList = elmTriggerList.map(function(elm) {
			if (totalScroll >= app.scrollToTopBtn.heightShow) {
				if (!elm.classList.contains(app.scrollToTopBtn.showClass)) {
					elm.classList.add(app.scrollToTopBtn.showClass);
				}
			} else {
				elm.classList.remove(app.scrollToTopBtn.showClass);
			}
		});

		var elm = document.querySelectorAll(app.id)[0];

		if (totalScroll > 0) {
			elm.classList.add(app.header.hasScrollClass);
		} else {
			elm.classList.remove(app.header.hasScrollClass);
		}
	}

	var elmList = elmTriggerList.map(function(elm) {
		elm.onclick = function(e) {
			e.preventDefault();

			window.scrollTo({top: 0, behavior: 'smooth'});
		}
	});
};



/* 08. Handle hexToRgba
------------------------------------------------ */
var hexToRgba = function(hex, transparent = 1) {
	var c;
	if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
		c= hex.substring(1).split('');
		if(c.length== 3){
				c= [c[0], c[0], c[1], c[1], c[2], c[2]];
		}
		c= '0x'+c.join('');
		return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+','+ transparent +')';
	}
  throw new Error('Bad Hex');
};



/* 09. Handle Scroll To
------------------------------------------------ */
var handleScrollTo = function() {
	var elmTriggerList = [].slice.call(document.querySelectorAll('['+ app.scrollTo.attr +']'));
	var elmList = elmTriggerList.map(function(elm) {
		elm.onclick = function(e) {
			e.preventDefault();

			var targetAttr = (elm.getAttribute(app.scrollTo.target)) ? this.getAttribute(app.scrollTo.target) : this.getAttribute(app.scrollTo.linkTarget);
			var targetElm = document.querySelectorAll(targetAttr)[0];
			var targetHeader = document.querySelectorAll(app.header.id)[0];
			var targetHeight = targetHeader.offsetHeight;
			if (targetElm) {
				var targetTop = targetElm.offsetTop - targetHeight - 24;
				window.scrollTo({top: targetTop, behavior: 'smooth'});
			}
		}
	});
};



/* 10. Handle Toggle Class
------------------------------------------------ */
var handleToggleClass = function() {
	var elmList = [].slice.call(document.querySelectorAll('['+ app.toggleClass.toggleAttr +']'));

	elmList.map(function(elm) {
		elm.onclick = function(e) {
			e.preventDefault();

			var targetToggleClass = this.getAttribute(app.toggleClass.toggleAttr);
			var targetDismissClass = this.getAttribute(app.dismissClass.toggleAttr);
			var targetToggleElm = document.querySelector(this.getAttribute(app.toggleClass.targetAttr));

			if (!targetDismissClass) {
				if (targetToggleElm.classList.contains(targetToggleClass)) {
					targetToggleElm.classList.remove(targetToggleClass);
				} else {
					targetToggleElm.classList.add(targetToggleClass);
				}
			} else {
				if (!targetToggleElm.classList.contains(targetToggleClass) && !targetToggleElm.classList.contains(targetDismissClass)) {
					if (targetToggleElm.classList.contains(targetToggleClass)) {
						targetToggleElm.classList.remove(targetToggleClass);
					} else {
						targetToggleElm.classList.add(targetToggleClass);
					}
				} else {
					if (targetToggleElm.classList.contains(targetToggleClass)) {
						targetToggleElm.classList.remove(targetToggleClass);
					} else {
						targetToggleElm.classList.add(targetToggleClass);
					}
					if (targetToggleElm.classList.contains(targetDismissClass)) {
						targetToggleElm.classList.remove(targetDismissClass);
					} else {
						targetToggleElm.classList.add(targetDismissClass);
					}
				}
			}
		}
	});
}



// /* 11. Handle Theme Panel
// ------------------------------------------------ */
// var handleThemePanel = function() {
// 	"use strict";

// 	// 12.1 Theme Panel - Toggle / Dismiss
// 	var elmList = [].slice.call(document.querySelectorAll('['+ app.themePanel.toggleAttr +']'));

// 	elmList.map(function(elm) {
// 		elm.onclick = function(e) {
// 			e.preventDefault();

// 			var targetContainer = document.querySelector('.'+ app.themePanel.class);
// 			var targetExpand = false;

// 			if (targetContainer.classList.contains(app.themePanel.activeClass)) {
// 				targetContainer.classList.remove(app.themePanel.activeClass);
// 			} else {
// 				targetContainer.classList.add(app.themePanel.activeClass);
// 				targetExpand = true;
// 			}
// 			if (Cookies) {
// 				Cookies.set(app.themePanel.cookieName, targetExpand);
// 			}
// 		}
// 	});

// 	// 12.2 Theme Panel - Page Load Cookies
// 	if (Cookies) {
// 		var themePanelExpand = Cookies.get(app.themePanel.cookieName);

// 		if (themePanelExpand == 'true' || typeof themePanelExpand == 'undefined') {
// 			var elm = document.querySelector('['+ app.themePanel.toggleAttr +']');
// 			if (elm) {
// 				elm.click();
// 			}
// 		}
// 	}


// 	// 12.3 Theme Panel - Theme Selector
// 	var elmList = [].slice.call(document.querySelectorAll('.'+ app.themePanel.class +' ['+ app.themePanel.theme.toggleAttr +']'));
// 	elmList.map(function(elm) {
// 		elm.onclick = function() {
// 			for (var x = 0; x < document.body.classList.length; x++) {
// 				var targetClass = document.body.classList[x];
// 				if (targetClass.search('theme-') > -1) {
// 					document.body.classList.remove(targetClass);
// 				}
// 			}

// 			var targetTheme = this.getAttribute(app.themePanel.theme.classAttr);
// 			var targetThemeList = [].slice.call(document.querySelectorAll('.'+ app.themePanel.class +' ['+ app.themePanel.theme.toggleAttr +']'));

// 			if (targetTheme) {
// 				document.body.classList.add(targetTheme);
// 			}
// 			targetThemeList.map(function(targetElm) {
// 				if (targetElm.getAttribute(app.themePanel.theme.classAttr) != targetTheme) {
// 					targetElm.closest('.'+ app.themePanel.themeListItemCLass).classList.remove(app.themePanel.theme.activeClass);
// 				}
// 			});

// 			this.closest('.'+ app.themePanel.themeListItemCLass).classList.add(app.themePanel.theme.activeClass);

// 			if (Cookies) {
// 				Cookies.set(app.themePanel.theme.cookieName, targetTheme);
// 				handleCssVariable();
// 				document.dispatchEvent(new Event('theme-reload'));
// 			}
// 		}
// 	});

// 	if (Cookies) {
// 		if (Cookies.get(app.themePanel.theme.cookieName)) {
// 			var targetElm = document.querySelector('.'+ app.themePanel.class +' ['+ app.themePanel.theme.toggleAttr +']' + '['+ app.themePanel.theme.classAttr +'="'+ Cookies.get(app.themePanel.theme.cookieName) +'"]');

// 			if (targetElm) {
// 				targetElm.click();
// 				handleCssVariable();
// 				document.dispatchEvent(new Event('theme-reload'));
// 			}
// 		}
// 	}


// 	// 12.4 Theme Panel - Dark Mode
// 	var elmList = [].slice.call(document.querySelectorAll('.'+ app.themePanel.class +' ['+ app.themePanel.themeDarkMode.toggleAttr +']'));
// 	elmList.map(function(elm) {
// 		elm.onchange = function() {
// 			if (this.checked) {
// 				document.querySelector('html').setAttribute(app.themePanel.themeDarkMode.attributeName, app.themePanel.themeDarkMode.attributeValue);
// 			} else {
// 				document.querySelector('html').removeAttribute(app.themePanel.themeDarkMode.attributeName);
// 			}
// 			Cookies.set(app.themePanel.themeDarkMode.cookieName, (this.checked) ? 1 : '');
// 			handleCssVariable();
// 			document.dispatchEvent(new CustomEvent('theme-reload'));
// 		}
// 	});

// 	if (Cookies) {
// 		if (Cookies.get(app.themePanel.themeDarkMode.cookieName)) {
// 			var targetElm = document.querySelector('.'+ app.themePanel.class +' ['+ app.themePanel.themeDarkMode.toggleAttr +']');
// 			if (targetElm) {
// 				targetElm.checked = true;
// 				targetElm.onchange();
// 			}
// 		}
// 	}
// };



/* 12. Handle CSS Variable
------------------------------------------------ */
var handleCssVariable = function() {
	var rootStyle = getComputedStyle(document.body);

	// font
	if (app.variableFontList && app.variablePrefix) {
		for (var i = 0; i < (app.variableFontList).length; i++) {
			app.font[app.variableFontList[i].replace(/-([a-z|0-9])/g, (match, letter) => letter.toUpperCase())] = rootStyle.getPropertyValue('--'+ app.variablePrefix + app.variableFontList[i]).trim();
		}
	}

	// color
	if (app.variableColorList && app.variablePrefix) {
		for (var i = 0; i < (app.variableColorList).length; i++) {
			app.color[app.variableColorList[i].replace(/-([a-z|0-9])/g, (match, letter) => letter.toUpperCase())] = rootStyle.getPropertyValue('--'+ app.variablePrefix + app.variableColorList[i]).trim();
		}
	}
};



/* 13. Handle Toggle Class
------------------------------------------------ */
var handleToggleClass = function() {
	var elmList = [].slice.call(document.querySelectorAll('['+ app.toggleClass.toggleAttr +']'));

	elmList.map(function(elm) {
		elm.onclick = function(e) {
			e.preventDefault();

			var targetToggleClass = this.getAttribute(app.toggleClass.toggleAttr);
			var targetDismissClass = this.getAttribute(app.dismissClass.toggleAttr);
			var targetToggleElm = document.querySelector(this.getAttribute(app.toggleClass.targetAttr));

			if (!targetDismissClass) {
				if (targetToggleElm.classList.contains(targetToggleClass)) {
					targetToggleElm.classList.remove(targetToggleClass);
				} else {
					targetToggleElm.classList.add(targetToggleClass);
				}
			} else {
				if (!targetToggleElm.classList.contains(targetToggleClass) && !targetToggleElm.classList.contains(targetDismissClass)) {
					if (targetToggleElm.classList.contains(targetToggleClass)) {
						targetToggleElm.classList.remove(targetToggleClass);
					} else {
						targetToggleElm.classList.add(targetToggleClass);
					}
				} else {
					if (targetToggleElm.classList.contains(targetToggleClass)) {
						targetToggleElm.classList.remove(targetToggleClass);
					} else {
						targetToggleElm.classList.add(targetToggleClass);
					}
					if (targetToggleElm.classList.contains(targetDismissClass)) {
						targetToggleElm.classList.remove(targetDismissClass);
					} else {
						targetToggleElm.classList.add(targetDismissClass);
					}
				}
			}
		}
	});
}



/* 14. Application Controller
------------------------------------------------ */
var App = function () {
	"use strict";

	return {
		//main function
		init: function () {
			this.initComponent();
			this.initSidebar();
			this.initAppLoad();
		},
		initAppLoad: function() {
			document.querySelector('body').classList.add(app.init.class);
		},
		initSidebar: function() {
			handleSidebarMenu();
			handleSidebarScrollMemory();
		},
		initComponent: function() {
			handleScrollbar();
			handleScrollToTopButton();
			handleScrollTo();
			handleCardAction();
			handelTooltipPopoverActivation();
			handleToggleClass();
			// handleThemePanel();
			handleCssVariable();
			handleToggleClass();
		},
		scrollTop: function() {
			window.scrollTo({top: 0, behavior: 'smooth'});
		}
	};
}();



/* 15. Initialise
------------------------------------------------ */
document.addEventListener('DOMContentLoaded', function() {
	App.init();
});