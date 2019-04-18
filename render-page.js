(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@reach/router"), require("core-js/modules/es6.array.iterator"), require("core-js/modules/es6.array.sort"), require("core-js/modules/es6.function.name"), require("core-js/modules/es6.map"), require("core-js/modules/es6.object.assign"), require("core-js/modules/es6.object.to-string"), require("core-js/modules/es6.regexp.constructor"), require("core-js/modules/es6.regexp.split"), require("core-js/modules/es6.regexp.to-string"), require("core-js/modules/es6.string.ends-with"), require("core-js/modules/es6.string.iterator"), require("core-js/modules/web.dom.iterable"), require("fs"), require("lodash"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else if(typeof define === 'function' && define.amd)
		define("lib", ["@reach/router", "core-js/modules/es6.array.iterator", "core-js/modules/es6.array.sort", "core-js/modules/es6.function.name", "core-js/modules/es6.map", "core-js/modules/es6.object.assign", "core-js/modules/es6.object.to-string", "core-js/modules/es6.regexp.constructor", "core-js/modules/es6.regexp.split", "core-js/modules/es6.regexp.to-string", "core-js/modules/es6.string.ends-with", "core-js/modules/es6.string.iterator", "core-js/modules/web.dom.iterable", "fs", "lodash", "path", "react", "react-dom/server", "react-helmet"], factory);
	else if(typeof exports === 'object')
		exports["lib"] = factory(require("@reach/router"), require("core-js/modules/es6.array.iterator"), require("core-js/modules/es6.array.sort"), require("core-js/modules/es6.function.name"), require("core-js/modules/es6.map"), require("core-js/modules/es6.object.assign"), require("core-js/modules/es6.object.to-string"), require("core-js/modules/es6.regexp.constructor"), require("core-js/modules/es6.regexp.split"), require("core-js/modules/es6.regexp.to-string"), require("core-js/modules/es6.string.ends-with"), require("core-js/modules/es6.string.iterator"), require("core-js/modules/web.dom.iterable"), require("fs"), require("lodash"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else
		root["lib"] = factory(root["@reach/router"], root["core-js/modules/es6.array.iterator"], root["core-js/modules/es6.array.sort"], root["core-js/modules/es6.function.name"], root["core-js/modules/es6.map"], root["core-js/modules/es6.object.assign"], root["core-js/modules/es6.object.to-string"], root["core-js/modules/es6.regexp.constructor"], root["core-js/modules/es6.regexp.split"], root["core-js/modules/es6.regexp.to-string"], root["core-js/modules/es6.string.ends-with"], root["core-js/modules/es6.string.iterator"], root["core-js/modules/web.dom.iterable"], root["fs"], root["lodash"], root["path"], root["react"], root["react-dom/server"], root["react-helmet"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__reach_router__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_iterator__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_sort__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_function_name__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_map__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_assign__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_to_string__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_constructor__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_split__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_to_string__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_ends_with__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_iterator__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__, __WEBPACK_EXTERNAL_MODULE_fs__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_path__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom_server__, __WEBPACK_EXTERNAL_MODULE_react_helmet__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/shejs-site/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./.cache/static-entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.cache/api-runner-ssr.js":
/*!**********************************!*\
  !*** ./.cache/api-runner-ssr.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var plugins = [{
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr */ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js"),
  options: {
    "plugins": []
  }
}]; // During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

var apis = __webpack_require__(/*! ./api-ssr-docs */ "./.cache/api-ssr-docs.js"); // Run the specified API in any plugins that have implemented it


module.exports = function (api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log("This API doesn't exist", api);
  } // Run each plugin in series.
  // eslint-disable-next-line no-undef


  var results = plugins.map(function (plugin) {
    if (!plugin.plugin[api]) {
      return undefined;
    }

    var result = plugin.plugin[api](args, plugin.options);

    if (result && argTransform) {
      args = argTransform({
        args: args,
        result: result
      });
    }

    return result;
  }); // Filter out undefined results.

  results = results.filter(function (result) {
    return typeof result !== "undefined";
  });

  if (results.length > 0) {
    return results;
  } else {
    return [defaultReturn];
  }
};

/***/ }),

/***/ "./.cache/api-ssr-docs.js":
/*!********************************!*\
  !*** ./.cache/api-ssr-docs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Replace the default server renderer. This is useful for integration with
 * Redux, css-in-js libraries, etc. that need custom setups for server
 * rendering.
 * @param {Object} $0
 * @param {function} $0.replaceBodyHTMLString Call this with the HTML string
 * you render. **WARNING** if multiple plugins implement this API it's the
 * last plugin that "wins". TODO implement an automated warning against this.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {Object} pluginOptions
 * @example
 * // From gatsby-plugin-glamor
 * const { renderToString } = require("react-dom/server")
 * const inline = require("glamor-inline")
 *
 * exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
 *   const bodyHTML = renderToString(bodyComponent)
 *   const inlinedHTML = inline(bodyHTML)
 *
 *   replaceBodyHTMLString(inlinedHTML)
 * }
 */
exports.replaceRenderer = true;
/**
 * Called after every page Gatsby server renders while building HTML so you can
 * set head and body components to be rendered in your `html.js`.
 *
 * Gatsby does a two-pass render for HTML. It loops through your pages first
 * rendering only the body and then takes the result body HTML string and
 * passes it as the `body` prop to your `html.js` to complete the render.
 *
 * It's often handy to be able to send custom components to your `html.js`.
 * For example, it's a very common pattern for React.js libraries that
 * support server rendering to pull out data generated during the render to
 * add to your HTML.
 *
 * Using this API over [`replaceRenderer`](#replaceRenderer) is preferable as
 * multiple plugins can implement this API where only one plugin can take
 * over server rendering. However, if your plugin requires taking over server
 * rendering then that's the one to
 * use
 * @param {Object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {Object} pluginOptions
 * @example
 * const { Helmet } = require("react-helmet")
 *
 * exports.onRenderBody = (
 *   { setHeadComponents, setHtmlAttributes, setBodyAttributes },
 *   pluginOptions
 * ) => {
 *   const helmet = Helmet.renderStatic()
 *   setHtmlAttributes(helmet.htmlAttributes.toComponent())
 *   setBodyAttributes(helmet.bodyAttributes.toComponent())
 *   setHeadComponents([
 *     helmet.title.toComponent(),
 *     helmet.link.toComponent(),
 *     helmet.meta.toComponent(),
 *     helmet.noscript.toComponent(),
 *     helmet.script.toComponent(),
 *     helmet.style.toComponent(),
 *   ])
 * }
 */

exports.onRenderBody = true;
/**
 * Called after every page Gatsby server renders while building HTML so you can
 * replace head components to be rendered in your `html.js`. This is useful if
 * you need to reorder scripts or styles added by other plugins.
 * @param {Object} $0
 * @param {Array<ReactNode>} $0.getHeadComponents Returns the current `headComponents` array.
 * @param {function} $0.replaceHeadComponents Takes an array of components as its
 * first argument which replace the `headComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPreBodyComponents Returns the current `preBodyComponents` array.
 *  @param {function} $0.replacePreBodyComponents Takes an array of components as its
 * first argument which replace the `preBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPostBodyComponents Returns the current `postBodyComponents` array.
 *  @param {function} $0.replacePostBodyComponents Takes an array of components as its
 * first argument which replace the `postBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Object} pluginOptions
 * @example
 * // Move Typography.js styles to the top of the head section so they're loaded first.
 * exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
 *   const headComponents = getHeadComponents()
 *   headComponents.sort((x, y) => {
 *     if (x.key === 'TypographyStyle') {
 *       return -1
 *     } else if (y.key === 'TypographyStyle') {
 *       return 1
 *     }
 *     return 0
 *   })
 *   replaceHeadComponents(headComponents)
 * }
 */

exports.onPreRenderHTML = true;
/**
 * Allow a plugin to wrap the page element.
 *
 * This is useful for setting wrapper component around pages that won't get
 * unmounted on page change. For setting Provider components use [wrapRootElement](#wrapRootElement).
 *
 * _Note:_ [There is equivalent hook in Browser API](/docs/browser-apis/#wrapPageElement)
 * @param {object} $0
 * @param {ReactNode} $0.element The "Page" React Element built by Gatsby.
 * @param {object} $0.props Props object used by page.
 * @example
 * import React from "react"
 * import Layout from "./src/components/layout"
 *
 * export const wrapPageElement = ({ element, props }) => {
 *   // props provide same data to Layout as Page element will get
 *   // including location, data, etc - you don't need to pass it
 *   return <Layout {...props}>{element}</Layout>
 * }
 */

exports.wrapPageElement = true;
/**
 * Allow a plugin to wrap the root element.
 *
 * This is useful to setup any Providers component that will wrap your application.
 * For setting persistent UI elements around pages use [wrapPageElement](#wrapPageElement).
 *
 * _Note:_ [There is equivalent hook in Browser API](/docs/browser-apis/#wrapRootElement)
 * @param {object} $0
 * @param {ReactNode} $0.element The "Root" React Element built by Gatsby.
 * @example
 * import React from "react"
 * import { Provider } from "react-redux"
 *
 * import createStore from "./src/state/createStore"
 * const store = createStore()
 *
 * export const wrapRootElement = ({ element }) => {
 *   return (
 *     <Provider store={store}>
 *       {element}
 *     </Provider>
 *   )
 * }
 */

exports.wrapRootElement = true;

/***/ }),

/***/ "./.cache/data.json":
/*!**************************!*\
  !*** ./.cache/data.json ***!
  \**************************/
/*! exports provided: pages, dataPaths, default */
/***/ (function(module) {

module.exports = {"pages":[{"componentChunkName":"component---src-pages-index-js","jsonName":"index","path":"/"},{"componentChunkName":"component---src-pages-404-js","jsonName":"404-html-516","path":"/404.html"},{"componentChunkName":"component---src-pages-404-js","jsonName":"404-22d","path":"/404/"},{"componentChunkName":"component---src-pages-actors-js","jsonName":"actors-415","path":"/actors/"},{"componentChunkName":"component---src-pages-debate-js","jsonName":"debate-0e7","path":"/debate/"},{"componentChunkName":"component---src-pages-laws-js","jsonName":"laws-901","path":"/laws/"},{"componentChunkName":"component---src-pages-resources-js","jsonName":"resources-fb7","path":"/resources/"},{"componentChunkName":"component---src-pages-resources-bibliography-js","jsonName":"resources-bibliography-833","path":"/resources/bibliography/"},{"componentChunkName":"component---src-pages-resources-glossary-js","jsonName":"resources-glossary-bba","path":"/resources/glossary/"},{"componentChunkName":"component---src-pages-resources-log-book-js","jsonName":"resources-log-book-b7e","path":"/resources/log-book/"},{"componentChunkName":"component---src-pages-timeline-js","jsonName":"timeline-9b3","path":"/timeline/"}],"dataPaths":{"404-22d":"820/path---404-22-d-bce-0SUcWyAf8ecbYDsMhQkEfPzV8","404-html-516":"285/path---404-html-516-62a-0SUcWyAf8ecbYDsMhQkEfPzV8","actors-415":"806/path---actors-415-c79-0SUcWyAf8ecbYDsMhQkEfPzV8","bibliography-7bd":"805/path---bibliography-7-bd-53b-0SUcWyAf8ecbYDsMhQkEfPzV8","debate-0e7":"656/path---debate-0-e-7-f7e-0SUcWyAf8ecbYDsMhQkEfPzV8","dev-404-page-5f9":"386/path---dev-404-page-5-f-9-fab-0SUcWyAf8ecbYDsMhQkEfPzV8","index":"140/path---index-6a9-0SUcWyAf8ecbYDsMhQkEfPzV8","laws-901":"113/path---laws-901-3ba-0SUcWyAf8ecbYDsMhQkEfPzV8","log-book-3c0":"722/path---log-book-3-c-0-96d-0SUcWyAf8ecbYDsMhQkEfPzV8","page-2-fbc":"53/path---page-2-fbc-5a8-NZuapzHg3X9TaN1iIixfv1W23E","resources-bibliography-833":"236/path---resources-bibliography-833-90a-jwkcublYCpuZ9DaJycR3uuDuBjk","resources-fb7":"262/path---resources-fb-7-e03-0SUcWyAf8ecbYDsMhQkEfPzV8","resources-glossaire-374":"986/path---resources-glossaire-374-a39-0SUcWyAf8ecbYDsMhQkEfPzV8","resources-glossary-bba":"893/path---resources-glossary-bba-d24-0SUcWyAf8ecbYDsMhQkEfPzV8","resources-log-book-b7e":"983/path---resources-log-book-b-7-e-ebe-w3WknbvjSHHnWqJ1HBsyxhCRi4","sq--src-components-footer-js":1041092198,"sq--src-components-layout-js":755544856,"sq--src-components-seo-js":2417117884,"timeline-9b3":"941/path---timeline-9-b-3-678-LY2Mx6Q9ncfalfBou0J0cQDrfA"}};

/***/ }),

/***/ "./.cache/default-html.js":
/*!********************************!*\
  !*** ./.cache/default-html.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTML; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


function HTML(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html", props.htmlAttributes, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("head", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    httpEquiv: "x-ua-compatible",
    content: "ie=edge"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
  }), props.headComponents), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", props.bodyAttributes, props.preBodyComponents, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("noscript", {
    key: "noscript",
    id: "gatsby-noscript"
  }, "This app works best with JavaScript enabled."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: "body",
    id: "___gatsby",
    dangerouslySetInnerHTML: {
      __html: props.body
    }
  }), props.postBodyComponents));
}
HTML.propTypes = {
  htmlAttributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  headComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  bodyAttributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  preBodyComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  body: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  postBodyComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};

/***/ }),

/***/ "./.cache/gatsby-browser-entry.js":
/*!****************************************!*\
  !*** ./.cache/gatsby-browser-entry.js ***!
  \****************************************/
/*! exports provided: Link, withPrefix, graphql, parsePath, navigate, push, replace, navigateTo, StaticQueryContext, StaticQuery, PageRenderer, useStaticQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQueryContext", function() { return StaticQueryContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQuery", function() { return StaticQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStaticQuery", function() { return useStaticQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["parsePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigateTo"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public-page-renderer */ "./.cache/public-page-renderer.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default.a; });




var StaticQueryContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});

var StaticQuery = function StaticQuery(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryContext.Consumer, null, function (staticQueryData) {
    if (props.data || staticQueryData[props.query] && staticQueryData[props.query].data) {
      return (props.render || props.children)(props.data ? props.data.data : staticQueryData[props.query].data);
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading (StaticQuery)");
    }
  });
};

var useStaticQuery = function useStaticQuery(query) {
  if (typeof react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext !== "function" && "production" === "development") {
    throw new Error("You're likely using a version of React that doesn't support Hooks\n" + "Please update React and ReactDOM to 16.8.0 or later to use the useStaticQuery hook.");
  }

  var context = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(StaticQueryContext);

  if (context[query] && context[query].data) {
    return context[query].data;
  } else {
    throw new Error("The result of this StaticQuery could not be fetched.\n\n" + "This is likely a bug in Gatsby and if refreshing the page does not fix it, " + "please open an issue in https://github.com/gatsbyjs/gatsby/issues");
  }
};

StaticQuery.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  render: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

function graphql() {
  throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls " + "are supposed to only be evaluated at compile time, and then compiled away,. " + "Unfortunately, something went wrong and the query was left in the compiled code.\n\n." + "Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.");
}



/***/ }),

/***/ "./.cache/public-page-renderer.js":
/*!****************************************!*\
  !*** ./.cache/public-page-renderer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

if (false) {} else if (false) {} else {
  module.exports = function () {
    return null;
  };
}

/***/ }),

/***/ "./.cache/static-entry.js":
/*!********************************!*\
  !*** ./.cache/static-entry.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.ends-with */ "core-js/modules/es6.string.ends-with");
/* harmony import */ var core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.sort */ "core-js/modules/es6.array.sort");
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "core-js/modules/es6.regexp.to-string");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "core-js/modules/es6.regexp.split");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.regexp.constructor */ "core-js/modules/es6.regexp.constructor");
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "core-js/modules/web.dom.iterable");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "core-js/modules/es6.array.iterator");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "core-js/modules/es6.object.to-string");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ "core-js/modules/es6.string.iterator");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es6.map */ "core-js/modules/es6.map");
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_12__);














var React = __webpack_require__(/*! react */ "react");

var fs = __webpack_require__(/*! fs */ "fs");

var _require = __webpack_require__(/*! path */ "path"),
    join = _require.join;

var _require2 = __webpack_require__(/*! react-dom/server */ "react-dom/server"),
    renderToString = _require2.renderToString,
    renderToStaticMarkup = _require2.renderToStaticMarkup;

var _require3 = __webpack_require__(/*! @reach/router */ "@reach/router"),
    ServerLocation = _require3.ServerLocation,
    Router = _require3.Router,
    isRedirect = _require3.isRedirect;

var _require4 = __webpack_require__(/*! lodash */ "lodash"),
    get = _require4.get,
    merge = _require4.merge,
    isObject = _require4.isObject,
    flatten = _require4.flatten,
    uniqBy = _require4.uniqBy;

var apiRunner = __webpack_require__(/*! ./api-runner-ssr */ "./.cache/api-runner-ssr.js");

var syncRequires = __webpack_require__(/*! ./sync-requires */ "./.cache/sync-requires.js");

var _require5 = __webpack_require__(/*! ./data.json */ "./.cache/data.json"),
    dataPaths = _require5.dataPaths,
    pages = _require5.pages;

var _require6 = __webpack_require__(/*! gatsby/package.json */ "./node_modules/gatsby/package.json"),
    gatsbyVersion = _require6.version; // Speed up looking up pages.


var pagesObjectMap = new Map();
pages.forEach(function (p) {
  return pagesObjectMap.set(p.path, p);
});
var stats = JSON.parse(fs.readFileSync(process.cwd() + "/public/webpack.stats.json", "utf-8"));
var chunkMapping = JSON.parse(fs.readFileSync(process.cwd() + "/public/chunk-map.json", "utf-8")); // const testRequireError = require("./test-require-error")
// For some extremely mysterious reason, webpack adds the above module *after*
// this module so that when this code runs, testRequireError is undefined.
// So in the meantime, we'll just inline it.

var testRequireError = function testRequireError(moduleName, err) {
  var regex = new RegExp("Error: Cannot find module\\s." + moduleName);
  var firstLine = err.toString().split("\n")[0];
  return regex.test(firstLine);
};

var Html;

try {
  Html = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../src/html'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
} catch (err) {
  if (testRequireError("../src/html", err)) {
    Html = __webpack_require__(/*! ./default-html */ "./.cache/default-html.js");
  } else {
    throw err;
  }
}

Html = Html && Html.__esModule ? Html.default : Html;

var getPage = function getPage(path) {
  return pagesObjectMap.get(path);
};

var createElement = React.createElement;

var sanitizeComponents = function sanitizeComponents(components) {
  if (Array.isArray(components)) {
    // remove falsy items
    return components.filter(function (val) {
      return Array.isArray(val) ? val.length > 0 : val;
    });
  } else {
    // we also accept single components, so we need to handle this case as well
    return components ? [components] : [];
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function (pagePath, callback) {
  var _postBodyComponents;

  var bodyHtml = "";
  var headComponents = [React.createElement("meta", {
    name: "generator",
    content: "Gatsby " + gatsbyVersion,
    key: "generator-" + gatsbyVersion
  })];
  var htmlAttributes = {};
  var bodyAttributes = {};
  var preBodyComponents = [];
  var postBodyComponents = [];
  var bodyProps = {};

  var replaceBodyHTMLString = function replaceBodyHTMLString(body) {
    bodyHtml = body;
  };

  var setHeadComponents = function setHeadComponents(components) {
    headComponents = headComponents.concat(sanitizeComponents(components));
  };

  var setHtmlAttributes = function setHtmlAttributes(attributes) {
    htmlAttributes = merge(htmlAttributes, attributes);
  };

  var setBodyAttributes = function setBodyAttributes(attributes) {
    bodyAttributes = merge(bodyAttributes, attributes);
  };

  var setPreBodyComponents = function setPreBodyComponents(components) {
    preBodyComponents = preBodyComponents.concat(sanitizeComponents(components));
  };

  var setPostBodyComponents = function setPostBodyComponents(components) {
    postBodyComponents = postBodyComponents.concat(sanitizeComponents(components));
  };

  var setBodyProps = function setBodyProps(props) {
    bodyProps = merge({}, bodyProps, props);
  };

  var getHeadComponents = function getHeadComponents() {
    return headComponents;
  };

  var replaceHeadComponents = function replaceHeadComponents(components) {
    headComponents = sanitizeComponents(components);
  };

  var getPreBodyComponents = function getPreBodyComponents() {
    return preBodyComponents;
  };

  var replacePreBodyComponents = function replacePreBodyComponents(components) {
    preBodyComponents = sanitizeComponents(components);
  };

  var getPostBodyComponents = function getPostBodyComponents() {
    return postBodyComponents;
  };

  var replacePostBodyComponents = function replacePostBodyComponents(components) {
    postBodyComponents = sanitizeComponents(components);
  };

  var page = getPage(pagePath);
  var dataAndContext = {};

  if (page.jsonName in dataPaths) {
    var pathToJsonData = join(process.cwd(), "/public/static/d", dataPaths[page.jsonName] + ".json");

    try {
      dataAndContext = JSON.parse(fs.readFileSync(pathToJsonData));
    } catch (e) {
      console.log("error", pathToJsonData, e);
      process.exit();
    }
  }

  var RouteHandler =
  /*#__PURE__*/
  function (_React$Component) {
    _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4___default()(RouteHandler, _React$Component);

    function RouteHandler() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = RouteHandler.prototype;

    _proto.render = function render() {
      var props = Object.assign({}, this.props, dataAndContext, {
        pathContext: dataAndContext.pageContext
      });
      var pageElement = createElement(syncRequires.components[page.componentChunkName], props);
      var wrappedPage = apiRunner("wrapPageElement", {
        element: pageElement,
        props: props
      }, pageElement, function (_ref) {
        var result = _ref.result;
        return {
          element: result,
          props: props
        };
      }).pop();
      return wrappedPage;
    };

    return RouteHandler;
  }(React.Component);

  var routerElement = createElement(ServerLocation, {
    url: "" + "/shejs-site" + pagePath
  }, createElement(Router, {
    baseuri: "" + "/shejs-site"
  }, createElement(RouteHandler, {
    path: "/*"
  })));
  var bodyComponent = apiRunner("wrapRootElement", {
    element: routerElement,
    pathname: pagePath
  }, routerElement, function (_ref2) {
    var result = _ref2.result;
    return {
      element: result,
      pathname: pagePath
    };
  }).pop(); // Let the site or plugin render the page component.

  apiRunner("replaceRenderer", {
    bodyComponent: bodyComponent,
    replaceBodyHTMLString: replaceBodyHTMLString,
    setHeadComponents: setHeadComponents,
    setHtmlAttributes: setHtmlAttributes,
    setBodyAttributes: setBodyAttributes,
    setPreBodyComponents: setPreBodyComponents,
    setPostBodyComponents: setPostBodyComponents,
    setBodyProps: setBodyProps,
    pathname: pagePath,
    pathPrefix: "/shejs-site"
  }); // If no one stepped up, we'll handle it.

  if (!bodyHtml) {
    try {
      bodyHtml = renderToString(bodyComponent);
    } catch (e) {
      // ignore @reach/router redirect errors
      if (!isRedirect(e)) throw e;
    }
  } // Create paths to scripts


  var scriptsAndStyles = flatten(["app", page.componentChunkName].map(function (s) {
    var fetchKey = "assetsByChunkName[" + s + "]";
    var chunks = get(stats, fetchKey);
    var namedChunkGroups = get(stats, "namedChunkGroups");

    if (!chunks) {
      return null;
    }

    chunks = chunks.map(function (chunk) {
      if (chunk === "/") {
        return null;
      }

      return {
        rel: "preload",
        name: chunk
      };
    });
    namedChunkGroups[s].assets.forEach(function (asset) {
      return chunks.push({
        rel: "preload",
        name: asset
      });
    });
    var childAssets = namedChunkGroups[s].childAssets;

    var _loop = function _loop(rel) {
      chunks = merge(chunks, childAssets[rel].map(function (chunk) {
        return {
          rel: rel,
          name: chunk
        };
      }));
    };

    for (var rel in childAssets) {
      _loop(rel);
    }

    return chunks;
  })).filter(function (s) {
    return isObject(s);
  }).sort(function (s1, s2) {
    return s1.rel == "preload" ? -1 : 1;
  }); // given priority to preload

  scriptsAndStyles = uniqBy(scriptsAndStyles, function (item) {
    return item.name;
  });
  var scripts = scriptsAndStyles.filter(function (script) {
    return script.name && script.name.endsWith(".js");
  });
  var styles = scriptsAndStyles.filter(function (style) {
    return style.name && style.name.endsWith(".css");
  });
  apiRunner("onRenderBody", {
    setHeadComponents: setHeadComponents,
    setHtmlAttributes: setHtmlAttributes,
    setBodyAttributes: setBodyAttributes,
    setPreBodyComponents: setPreBodyComponents,
    setPostBodyComponents: setPostBodyComponents,
    setBodyProps: setBodyProps,
    pathname: pagePath,
    bodyHtml: bodyHtml,
    scripts: scripts,
    styles: styles,
    pathPrefix: "/shejs-site"
  });
  scripts.slice(0).reverse().forEach(function (script) {
    // Add preload/prefetch <link>s for scripts.
    headComponents.push(React.createElement("link", {
      as: "script",
      rel: script.rel,
      key: script.name,
      href: "/shejs-site" + "/" + script.name
    }));
  });

  if (page.jsonName in dataPaths) {
    var dataPath = "/shejs-site" + "/static/d/" + dataPaths[page.jsonName] + ".json";
    headComponents.push(React.createElement("link", {
      as: "fetch",
      rel: "preload",
      key: dataPath,
      href: dataPath,
      crossOrigin: "use-credentials"
    }));
  }

  styles.slice(0).reverse().forEach(function (style) {
    // Add <link>s for styles that should be prefetched
    // otherwise, inline as a <style> tag
    if (style.rel === "prefetch") {
      headComponents.push(React.createElement("link", {
        as: "style",
        rel: style.rel,
        key: style.name,
        href: "/shejs-site" + "/" + style.name
      }));
    } else {
      headComponents.unshift(React.createElement("style", {
        "data-href": "/shejs-site" + "/" + style.name,
        dangerouslySetInnerHTML: {
          __html: fs.readFileSync(join(process.cwd(), "public", style.name), "utf-8")
        }
      }));
    }
  }); // Add page metadata for the current page

  var windowData = "/*<![CDATA[*/window.page=" + JSON.stringify(page) + ";" + (page.jsonName in dataPaths ? "window.dataPath=\"" + dataPaths[page.jsonName] + "\";" : "") + "/*]]>*/";
  postBodyComponents.push(React.createElement("script", {
    key: "script-loader",
    id: "gatsby-script-loader",
    dangerouslySetInnerHTML: {
      __html: windowData
    }
  })); // Add chunk mapping metadata

  var scriptChunkMapping = "/*<![CDATA[*/window.___chunkMapping=" + JSON.stringify(chunkMapping) + ";/*]]>*/";
  postBodyComponents.push(React.createElement("script", {
    key: "chunk-mapping",
    id: "gatsby-chunk-mapping",
    dangerouslySetInnerHTML: {
      __html: scriptChunkMapping
    }
  })); // Filter out prefetched bundles as adding them as a script tag
  // would force high priority fetching.

  var bodyScripts = scripts.filter(function (s) {
    return s.rel !== "prefetch";
  }).map(function (s) {
    var scriptPath = "/shejs-site" + "/" + JSON.stringify(s.name).slice(1, -1);
    return React.createElement("script", {
      key: scriptPath,
      src: scriptPath,
      async: true
    });
  });

  (_postBodyComponents = postBodyComponents).push.apply(_postBodyComponents, bodyScripts);

  apiRunner("onPreRenderHTML", {
    getHeadComponents: getHeadComponents,
    replaceHeadComponents: replaceHeadComponents,
    getPreBodyComponents: getPreBodyComponents,
    replacePreBodyComponents: replacePreBodyComponents,
    getPostBodyComponents: getPostBodyComponents,
    replacePostBodyComponents: replacePostBodyComponents,
    pathname: pagePath,
    pathPrefix: "/shejs-site"
  });
  var html = "<!DOCTYPE html>" + renderToStaticMarkup(React.createElement(Html, Object.assign({}, bodyProps, {
    headComponents: headComponents,
    htmlAttributes: htmlAttributes,
    bodyAttributes: bodyAttributes,
    preBodyComponents: preBodyComponents,
    postBodyComponents: postBodyComponents,
    body: bodyHtml,
    path: pagePath
  })));
  callback(null, html);
});

/***/ }),

/***/ "./.cache/sync-requires.js":
/*!*********************************!*\
  !*** ./.cache/sync-requires.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js"),
    hot = _require.hot; // prefer default export if available


var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

exports.components = {
  "component---src-pages-404-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/404.js */ "./src/pages/404.js"))),
  "component---src-pages-actors-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/actors.js */ "./src/pages/actors.js"))),
  "component---src-pages-debate-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/debate.js */ "./src/pages/debate.js"))),
  "component---src-pages-index-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/index.js */ "./src/pages/index.js"))),
  "component---src-pages-laws-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/laws.js */ "./src/pages/laws.js"))),
  "component---src-pages-resources-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/resources.js */ "./src/pages/resources.js"))),
  "component---src-pages-resources-bibliography-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/resources/bibliography.js */ "./src/pages/resources/bibliography.js"))),
  "component---src-pages-resources-glossary-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/resources/glossary.js */ "./src/pages/resources/glossary.js"))),
  "component---src-pages-resources-log-book-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/resources/log-book.js */ "./src/pages/resources/log-book.js"))),
  "component---src-pages-timeline-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/timeline.js */ "./src/pages/timeline.js")))
};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/gatsby-link/index.js":
/*!*******************************************!*\
  !*** ./node_modules/gatsby-link/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.withPrefix = withPrefix;
exports.navigateTo = exports.replace = exports.push = exports.navigate = exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! @reach/router */ "@reach/router");

var _parsePath = __webpack_require__(/*! ./parse-path */ "./node_modules/gatsby-link/parse-path.js");

exports.parsePath = _parsePath.parsePath;

/*global __PATH_PREFIX__ */
function withPrefix(path) {
  return normalizePath("/shejs-site" + "/" + path);
}

function normalizePath(path) {
  return path.replace(/\/+/g, "/");
}

var NavLinkPropTypes = {
  activeClassName: _propTypes.default.string,
  activeStyle: _propTypes.default.object,
  partiallyActive: _propTypes.default.bool // Set up IntersectionObserver

};

var handleIntersection = function handleIntersection(el, cb) {
  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (el === entry.target) {
        // Check if element is within viewport, remove listener, destroy observer, and run link callback.
        // MSEdge doesn't currently support isIntersecting, so also test for  an intersectionRatio > 0
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          io.unobserve(el);
          io.disconnect();
          cb();
        }
      }
    });
  }); // Add element to the observer

  io.observe(el);
};

var GatsbyLink =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(GatsbyLink, _React$Component);

  function GatsbyLink(props) {
    var _this;

    _this = _React$Component.call(this, props) || this; // Default to no support for IntersectionObserver

    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "defaultGetProps", function (_ref) {
      var isPartiallyCurrent = _ref.isPartiallyCurrent,
          isCurrent = _ref.isCurrent;

      if (_this.props.partiallyActive ? isPartiallyCurrent : isCurrent) {
        return {
          className: [_this.props.className, _this.props.activeClassName].filter(Boolean).join(" "),
          style: (0, _extends2.default)({}, _this.props.style, _this.props.activeStyle)
        };
      }

      return null;
    });
    var IOSupported = false;

    if (typeof window !== "undefined" && window.IntersectionObserver) {
      IOSupported = true;
    }

    _this.state = {
      IOSupported: IOSupported
    };
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  var _proto = GatsbyLink.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // Preserve non IO functionality if no support
    if (this.props.to !== prevProps.to && !this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(this.props.to).pathname);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    // Preserve non IO functionality if no support
    if (!this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(this.props.to).pathname);
    }
  };

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    if (this.props.innerRef && this.props.innerRef.hasOwnProperty("current")) {
      this.props.innerRef.current = ref;
    } else if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    if (this.state.IOSupported && ref) {
      // If IO supported and element reference found, setup Observer functionality
      handleIntersection(ref, function () {
        ___loader.enqueue((0, _parsePath.parsePath)(_this2.props.to).pathname);
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props = this.props,
        to = _this$props.to,
        _this$props$getProps = _this$props.getProps,
        getProps = _this$props$getProps === void 0 ? this.defaultGetProps : _this$props$getProps,
        _onClick = _this$props.onClick,
        _onMouseEnter = _this$props.onMouseEnter,
        $activeClassName = _this$props.activeClassName,
        $activeStyle = _this$props.activeStyle,
        $innerRef = _this$props.innerRef,
        partiallyActive = _this$props.partiallyActive,
        state = _this$props.state,
        replace = _this$props.replace,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["to", "getProps", "onClick", "onMouseEnter", "activeClassName", "activeStyle", "innerRef", "partiallyActive", "state", "replace"]);
    var LOCAL_URL = /^\/(?!\/)/;

    if (false) {}

    var prefixedTo = withPrefix(to);
    return _react.default.createElement(_router.Link, (0, _extends2.default)({
      to: prefixedTo,
      state: state,
      getProps: getProps,
      innerRef: this.handleRef,
      onMouseEnter: function onMouseEnter(e) {
        if (_onMouseEnter) {
          _onMouseEnter(e);
        }

        ___loader.hovering((0, _parsePath.parsePath)(to).pathname);
      },
      onClick: function onClick(e) {
        if (_onClick) {
          _onClick(e);
        }

        if (e.button === 0 && // ignore right clicks
        !_this3.props.target && // let browser handle "target=_blank"
        !e.defaultPrevented && // onClick prevented default
        !e.metaKey && // ignore clicks with modifier keys...
        !e.altKey && !e.ctrlKey && !e.shiftKey) {
          e.preventDefault(); // Make sure the necessary scripts and data are
          // loaded before continuing.

          navigate(to, {
            state: state,
            replace: replace
          });
        }

        return true;
      }
    }, rest));
  };

  return GatsbyLink;
}(_react.default.Component);

GatsbyLink.propTypes = (0, _extends2.default)({}, NavLinkPropTypes, {
  onClick: _propTypes.default.func,
  to: _propTypes.default.string.isRequired,
  replace: _propTypes.default.bool
});

var _default = _react.default.forwardRef(function (props, ref) {
  return _react.default.createElement(GatsbyLink, (0, _extends2.default)({
    innerRef: ref
  }, props));
});

exports.default = _default;

var navigate = function navigate(to, options) {
  window.___navigate(withPrefix(to), options);
};

exports.navigate = navigate;

var push = function push(to) {
  console.warn("The \"push\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");

  window.___push(withPrefix(to));
};

exports.push = push;

var replace = function replace(to) {
  console.warn("The \"replace\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");

  window.___replace(withPrefix(to));
}; // TODO: Remove navigateTo for Gatsby v3


exports.replace = replace;

var navigateTo = function navigateTo(to) {
  console.warn("The \"navigateTo\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");
  return push(to);
};

exports.navigateTo = navigateTo;

/***/ }),

/***/ "./node_modules/gatsby-link/parse-path.js":
/*!************************************************!*\
  !*** ./node_modules/gatsby-link/parse-path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parsePath = parsePath;

function parsePath(path) {
  var pathname = path || "/";
  var search = "";
  var hash = "";
  var hashIndex = pathname.indexOf("#");

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf("?");

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash
  };
}

/***/ }),

/***/ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js":
/*!***************************************************************!*\
  !*** ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.onRenderBody = void 0;

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

var onRenderBody = function onRenderBody(_ref) {
  var setHeadComponents = _ref.setHeadComponents,
      setHtmlAttributes = _ref.setHtmlAttributes,
      setBodyAttributes = _ref.setBodyAttributes;

  var helmet = _reactHelmet.Helmet.renderStatic(); // These action functions were added partway through the Gatsby 1.x cycle.


  if (setHtmlAttributes) {
    setHtmlAttributes(helmet.htmlAttributes.toComponent());
  }

  if (setBodyAttributes) {
    setBodyAttributes(helmet.bodyAttributes.toComponent());
  }

  setHeadComponents([helmet.title.toComponent(), helmet.link.toComponent(), helmet.meta.toComponent(), helmet.noscript.toComponent(), helmet.script.toComponent(), helmet.style.toComponent()]);
};

exports.onRenderBody = onRenderBody;

/***/ }),

/***/ "./node_modules/gatsby/package.json":
/*!******************************************!*\
  !*** ./node_modules/gatsby/package.json ***!
  \******************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bin, bugs, bundleDependencies, dependencies, deprecated, description, devDependencies, engines, files, gitHead, homepage, keywords, license, main, module, name, peerDependencies, repository, resolutions, scripts, types, version, yargs, default */
/***/ (function(module) {

module.exports = {"_from":"gatsby@2.3.12","_id":"gatsby@2.3.12","_inBundle":false,"_integrity":"sha512-bHqlP0qP8AZt/W6nBE+N9YVgG/BYTlmVt5HgY2uqq5rj3Y9JKRuyUjtGxyxfM4Q5cpKIOfDJ7wBqdTWxjNiSkw==","_location":"/gatsby","_phantomChildren":{"@babel/code-frame":"7.0.0","@babel/runtime":"7.3.4","bluebird":"3.5.3","common-tags":"1.8.0","convert-hrtime":"2.0.0","core-js":"2.6.5","cross-spawn":"5.1.0","decamelize":"1.2.0","envinfo":"5.12.1","fs-exists-cached":"1.0.0","gatsby-telemetry":"1.0.4","get-caller-file":"1.0.3","get-stream":"3.0.0","graceful-fs":"4.1.15","hosted-git-info":"2.7.1","is-stream":"1.1.0","jsonfile":"4.0.0","lodash":"4.17.11","map-age-cleaner":"0.1.3","meant":"1.0.1","nice-try":"1.0.5","npm-run-path":"2.0.2","opentracing":"0.14.3","p-finally":"1.0.0","p-is-promise":"2.0.0","path-exists":"3.0.0","path-key":"2.0.1","pretty-error":"2.1.1","pump":"3.0.0","require-directory":"2.1.1","require-main-filename":"1.0.1","resolve-cwd":"2.0.0","semver":"5.6.0","set-blocking":"2.0.0","shebang-command":"1.2.0","signal-exit":"3.0.2","source-map":"0.5.7","stack-trace":"0.0.10","string-width":"2.1.1","strip-eof":"1.0.0","universalify":"0.1.2","update-notifier":"2.5.0","uuid":"3.3.2","which":"1.3.1","which-module":"2.0.0","wrap-ansi":"2.1.0","y18n":"3.2.1","yurnalist":"1.0.5"},"_requested":{"type":"version","registry":true,"raw":"gatsby@2.3.12","name":"gatsby","escapedName":"gatsby","rawSpec":"2.3.12","saveSpec":null,"fetchSpec":"2.3.12"},"_requiredBy":["#USER","/"],"_resolved":"https://registry.npmjs.org/gatsby/-/gatsby-2.3.12.tgz","_shasum":"22f1eda449723b4afb3c12ca379fa17d9b19e300","_spec":"gatsby@2.3.12","_where":"D:\\Desktop\\Polytech\\shejs-site","author":{"name":"Kyle Mathews","email":"mathews.kyle@gmail.com"},"bin":{"gatsby":"./dist/bin/gatsby.js"},"bugs":{"url":"https://github.com/gatsbyjs/gatsby/issues"},"bundleDependencies":false,"dependencies":{"@babel/code-frame":"^7.0.0","@babel/core":"^7.0.0","@babel/parser":"^7.0.0","@babel/polyfill":"^7.0.0","@babel/runtime":"^7.0.0","@babel/traverse":"^7.0.0","@gatsbyjs/relay-compiler":"2.0.0-printer-fix.2","@mikaelkristiansson/domready":"^1.0.9","@pieh/friendly-errors-webpack-plugin":"1.7.0-chalk-2","@reach/router":"^1.1.1","@stefanprobst/lokijs":"^1.5.6-b","address":"1.0.3","autoprefixer":"^9.4.3","babel-core":"7.0.0-bridge.0","babel-eslint":"^9.0.0","babel-loader":"^8.0.0","babel-plugin-add-module-exports":"^0.2.1","babel-plugin-dynamic-import-node":"^1.2.0","babel-plugin-remove-graphql-queries":"^2.6.3","babel-preset-gatsby":"^0.1.11","better-opn":"0.1.4","better-queue":"^3.8.6","bluebird":"^3.5.0","browserslist":"3.2.8","cache-manager":"^2.9.0","cache-manager-fs-hash":"^0.0.6","chalk":"^2.3.2","chokidar":"2.1.2","common-tags":"^1.4.0","compression":"^1.7.3","convert-hrtime":"^2.0.0","copyfiles":"^1.2.0","core-js":"^2.5.0","css-loader":"^1.0.0","debug":"^3.1.0","del":"^3.0.0","detect-port":"^1.2.1","devcert-san":"^0.3.3","dotenv":"^4.0.0","eslint":"^5.6.0","eslint-config-react-app":"^3.0.0","eslint-loader":"^2.1.0","eslint-plugin-flowtype":"^2.46.1","eslint-plugin-graphql":"^2.0.0","eslint-plugin-import":"^2.9.0","eslint-plugin-jsx-a11y":"^6.0.3","eslint-plugin-react":"^7.8.2","event-source-polyfill":"^1.0.5","express":"^4.16.3","express-graphql":"^0.6.12","fast-levenshtein":"~2.0.4","file-loader":"^1.1.11","flat":"^4.0.0","fs-exists-cached":"1.0.0","fs-extra":"^5.0.0","gatsby-cli":"^2.5.4","gatsby-link":"^2.0.16","gatsby-plugin-page-creator":"^2.0.12","gatsby-react-router-scroll":"^2.0.7","gatsby-telemetry":"^1.0.4","glob":"^7.1.1","graphql":"^14.1.1","graphql-compose":"^6.0.3","graphql-playground-middleware-express":"^1.7.10","graphql-relay":"^0.6.0","graphql-tools":"^3.0.4","hash-mod":"^0.0.5","invariant":"^2.2.4","is-relative":"^1.0.0","is-relative-url":"^2.0.0","is-wsl":"^1.1.0","jest-worker":"^23.2.0","joi":"12.x.x","json-loader":"^0.5.7","json-stringify-safe":"^5.0.1","kebab-hash":"^0.1.2","lodash":"^4.17.10","md5":"^2.2.1","md5-file":"^3.1.1","mime":"^2.2.0","mini-css-extract-plugin":"^0.4.0","mitt":"^1.1.2","mkdirp":"^0.5.1","moment":"^2.21.0","name-all-modules-plugin":"^1.0.1","normalize-path":"^2.1.1","null-loader":"^0.1.1","opentracing":"^0.14.3","optimize-css-assets-webpack-plugin":"^5.0.1","parseurl":"^1.3.2","physical-cpu-count":"^2.0.0","pnp-webpack-plugin":"^1.4.1","postcss-flexbugs-fixes":"^3.0.0","postcss-loader":"^2.1.3","prop-types":"^15.6.1","raw-loader":"^0.5.1","react-dev-utils":"^4.2.1","react-error-overlay":"^3.0.0","react-hot-loader":"^4.6.2","redux":"^4.0.0","request":"^2.85.0","semver":"^5.6.0","shallow-compare":"^1.2.2","sift":"^5.1.0","signal-exit":"^3.0.2","slash":"^1.0.0","socket.io":"^2.0.3","stack-trace":"^0.0.10","string-similarity":"^1.2.0","style-loader":"^0.21.0","terser-webpack-plugin":"^1.2.2","true-case-path":"^1.0.3","type-of":"^2.0.1","url-loader":"^1.0.1","util.promisify":"^1.0.0","uuid":"^3.1.0","v8-compile-cache":"^1.1.0","webpack":"~4.28.4","webpack-dev-middleware":"^3.0.1","webpack-dev-server":"^3.1.14","webpack-hot-middleware":"^2.21.0","webpack-merge":"^4.1.0","webpack-stats-plugin":"^0.1.5","xstate":"^4.3.2","yaml-loader":"^0.5.0"},"deprecated":false,"description":"Blazing fast modern site generator for React","devDependencies":{"@babel/cli":"^7.0.0","@babel/runtime":"^7.0.0","babel-preset-gatsby-package":"^0.1.4","cross-env":"^5.1.4","rimraf":"^2.6.1"},"engines":{"node":">=6.0.0"},"files":["cache-dir","dist","graphql.js","index.d.ts"],"gitHead":"8ee6c8ddbccd41f76d8203a2e8f9d975056f2fcb","homepage":"https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby#readme","keywords":["blog","generator","jekyll","markdown","react","ssg","website"],"license":"MIT","main":"cache-dir/commonjs/gatsby-browser-entry.js","module":"cache-dir/gatsby-browser-entry.js","name":"gatsby","peerDependencies":{"react":"^16.4.2","react-dom":"^16.4.2"},"repository":{"type":"git","url":"git+https://github.com/gatsbyjs/gatsby.git"},"resolutions":{"graphql":"^14.1.1"},"scripts":{"build":"npm run build:src && npm run build:internal-plugins && npm run build:rawfiles && npm run build:cjs","build:cjs":"babel cache-dir --out-dir cache-dir/commonjs --ignore **/__tests__","build:internal-plugins":"copyfiles -u 1 src/internal-plugins/**/package.json dist","build:rawfiles":"copyfiles -u 1 src/internal-plugins/**/raw_* dist","build:src":"babel src --out-dir dist --source-maps --ignore **/gatsby-cli.js,**/raw_*,**/__tests__","clean-test-bundles":"find test/ -type f -name bundle.js* -exec rm -rf {} +","prebuild":"rimraf dist && rimraf cache-dir/commonjs","prepare":"cross-env NODE_ENV=production npm run build","watch":"rimraf dist && mkdir dist && npm run build:internal-plugins && npm run build:rawfiles && npm run build:src -- --watch"},"types":"index.d.ts","version":"2.3.12","yargs":{"boolean-negation":false}};

/***/ }),

/***/ "./node_modules/prop-types/factoryWithThrowingShims.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithThrowingShims.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ "./node_modules/prop-types/factoryWithThrowingShims.js")();
}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-hot-loader/root.js":
/*!***********************************************!*\
  !*** ./node_modules/react-hot-loader/root.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) { var parent, cache, hot; } else {
  // prod mode
  exports.hot = function(a) {
    return a
  }
}


/***/ }),

/***/ "./public/static/d/1041092198.json":
/*!*****************************************!*\
  !*** ./public/static/d/1041092198.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"site":{"siteMetadata":{"author":"BrokenSwing"}}}};

/***/ }),

/***/ "./public/static/d/2417117884.json":
/*!*****************************************!*\
  !*** ./public/static/d/2417117884.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"site":{"siteMetadata":{"title":"SHEJS","description":"Une site pour le cours de SHEJS à Polytech.","author":"BrokenSwing"}}}};

/***/ }),

/***/ "./public/static/d/755544856.json":
/*!****************************************!*\
  !*** ./public/static/d/755544856.json ***!
  \****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"site":{"siteMetadata":{"title":"SHEJS"}}}};

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_1041092198_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/static/d/1041092198.json */ "./public/static/d/1041092198.json");
var _public_static_d_1041092198_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/static/d/1041092198.json */ "./public/static/d/1041092198.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _css_footer_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/footer.css */ "./src/css/footer.css");
/* harmony import */ var _css_footer_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_footer_css__WEBPACK_IMPORTED_MODULE_3__);





var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "1041092198",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", null, data.site.siteMetadata.author, " \xA9 ", new Date().getFullYear(), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          float: "right"
        }
      }, "Powered by ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://www.gatsbyjs.org"
      }, "Gatsby"))));
    },
    data: _public_static_d_1041092198_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nav_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-link */ "./src/components/nav-link.js");
/* harmony import */ var _css_header_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/header.css */ "./src/css/header.css");
/* harmony import */ var _css_header_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_header_css__WEBPACK_IMPORTED_MODULE_3__);





var Header = function Header(_ref) {
  var siteTitle = _ref.siteTitle;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "javascript:void(0)",
    class: "closebtn"
  }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_nav_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    to: "/"
  }, "Introduction"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_nav_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    to: "/laws"
  }, "Lois"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_nav_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    to: "/actors"
  }, "Acteurs"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_nav_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    to: "/debate"
  }, "Arbre des d\xE9bats"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_nav_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    to: "/timeline"
  }, "Frise chronologique"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_nav_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    to: "/resources",
    partially: true
  }, "Ressources")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "topBrand"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "javascript:void(0)",
    class: "openbtn"
  }, "\u2630 Menu")));
};

Header.propTypes = {
  siteTitle: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
};
Header.defaultProps = {
  siteTitle: ""
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_755544856_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/static/d/755544856.json */ "./public/static/d/755544856.json");
var _public_static_d_755544856_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/static/d/755544856.json */ "./public/static/d/755544856.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header */ "./src/components/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer */ "./src/components/footer.js");
/* harmony import */ var _css_layout_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/layout.css */ "./src/css/layout.css");
/* harmony import */ var _css_layout_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_layout_css__WEBPACK_IMPORTED_MODULE_6__);


/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */







var Layout = function Layout(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["StaticQuery"], {
    query: "755544856",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
        siteTitle: data.site.siteMetadata.title
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", null, children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_footer__WEBPACK_IMPORTED_MODULE_5__["default"], null));
    },
    data: _public_static_d_755544856_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

Layout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/components/nav-link.js":
/*!************************************!*\
  !*** ./src/components/nav-link.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_nav_link_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/nav-link.css */ "./src/css/nav-link.css");
/* harmony import */ var _css_nav_link_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_nav_link_css__WEBPACK_IMPORTED_MODULE_2__);




var NavLink = function NavLink(_ref) {
  var to = _ref.to,
      partially = _ref.partially,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    to: to,
    activeClassName: "active-nav-link",
    partiallyActive: partially,
    class: "nav-link"
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (NavLink);

/***/ }),

/***/ "./src/components/ref-link.js":
/*!************************************!*\
  !*** ./src/components/ref-link.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var RefLink = function RefLink(_ref) {
  var refTo = _ref.refTo;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    to: "resources/bibliography#src_" + refTo,
    className: "ref"
  }, "[", refTo, "]");
};

/* harmony default export */ __webpack_exports__["default"] = (RefLink);

/***/ }),

/***/ "./src/components/seo.js":
/*!*******************************!*\
  !*** ./src/components/seo.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_2417117884_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/static/d/2417117884.json */ "./public/static/d/2417117884.json");
var _public_static_d_2417117884_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/static/d/2417117884.json */ "./public/static/d/2417117884.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);





function SEO(_ref) {
  var description = _ref.description,
      lang = _ref.lang,
      meta = _ref.meta,
      keywords = _ref.keywords,
      title = _ref.title;
  var site = _public_static_d_2417117884_json__WEBPACK_IMPORTED_MODULE_0__.data.site;
  var metaDescription = description || site.siteMetadata.description;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3___default.a, {
    htmlAttributes: {
      lang: lang
    },
    title: title,
    titleTemplate: "%s | " + site.siteMetadata.title,
    meta: [{
      name: "description",
      content: metaDescription
    }, {
      property: "og:title",
      content: title
    }, {
      property: "og:description",
      content: metaDescription
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary"
    }, {
      name: "twitter:creator",
      content: site.siteMetadata.author
    }, {
      name: "twitter:title",
      content: title
    }, {
      name: "twitter:description",
      content: metaDescription
    }].concat(keywords.length > 0 ? {
      name: "keywords",
      content: keywords.join(", ")
    } : []).concat(meta)
  });
}

SEO.defaultProps = {
  lang: "fr",
  meta: [],
  keywords: ["cannabis", "polytech", "shejs", "legalisation"]
};
SEO.propTypes = {
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  lang: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  meta: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  keywords: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string),
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SEO);

/***/ }),

/***/ "./src/components/timeline-item.js":
/*!*****************************************!*\
  !*** ./src/components/timeline-item.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var TimelineItem = function TimelineItem(_ref) {
  var node = _ref.node;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cd-timeline__block js-cd-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cd-timeline__img cd-timeline__img--picture js-cd-img"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cd-timeline__content js-cd-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, node.frontmatter.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: node.html
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "cd-timeline__date"
  }, node.frontmatter.date))));
};

/* harmony default export */ __webpack_exports__["default"] = (TimelineItem);

/***/ }),

/***/ "./src/css/actors.css":
/*!****************************!*\
  !*** ./src/css/actors.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/css/bibliography.css":
/*!**********************************!*\
  !*** ./src/css/bibliography.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/css/debate.css":
/*!****************************!*\
  !*** ./src/css/debate.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/css/footer.css":
/*!****************************!*\
  !*** ./src/css/footer.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/css/glossary.css":
/*!******************************!*\
  !*** ./src/css/glossary.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/css/header.css":
/*!****************************!*\
  !*** ./src/css/header.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/css/laws.css":
/*!**************************!*\
  !*** ./src/css/laws.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/css/layout.css":
/*!****************************!*\
  !*** ./src/css/layout.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/css/nav-link.css":
/*!******************************!*\
  !*** ./src/css/nav-link.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/css/timeline-item.css":
/*!***********************************!*\
  !*** ./src/css/timeline-item.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/images/road.png":
/*!*****************************!*\
  !*** ./src/images/road.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/road-fa0cbf9f12fac46d1314ec796f4b986e.png";

/***/ }),

/***/ "./src/pages/404.js":
/*!**************************!*\
  !*** ./src/pages/404.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/seo */ "./src/components/seo.js");
/* harmony import */ var _images_road_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/road.png */ "./src/images/road.png");
/* harmony import */ var _images_road_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_road_png__WEBPACK_IMPORTED_MODULE_3__);





var NotFoundPage = function NotFoundPage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "404 : Page introuvable"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Page introuvable"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Il semble que vous vous soyez perdu en chemin et aillez atteint le bout de la route ..."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_road_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "road",
    style: {
      width: 400,
      height: 400,
      float: "right"
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (NotFoundPage);

/***/ }),

/***/ "./src/pages/actors.js":
/*!*****************************!*\
  !*** ./src/pages/actors.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/seo */ "./src/components/seo.js");
/* harmony import */ var _css_actors_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/actors.css */ "./src/css/actors.css");
/* harmony import */ var _css_actors_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_actors_css__WEBPACK_IMPORTED_MODULE_3__);





var Actors = function Actors() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Les acteurs"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Les acteurs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "actor"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "L'Etat"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Les enjeux pour l\u2019Etat sont multiples. On observe d\u2019ailleurs une scission au sein m\xEAme de la sph\xE8re politique qui est r\xE9v\xE9latrice de la complexit\xE9 de la d\xE9cision de l\xE9galisation."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Enjeux de sant\xE9 publique"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "En France l\u2019Etat se doit de s\u2019assurer de la sant\xE9 des citoyens. Ce devoir de sant\xE9 publique justifie donc les lois actuellement en vigueur. En effet, par ce biais l\u2019Etat tente de pr\xE9venir les probl\xE8mes de sant\xE9 engendr\xE9s par la consommation du cannabis. En opposition certains soutiennent que la l\xE9galisation permettrait de baisser la consommation. De ce fait, l\u2019Etat travaille avec la communaut\xE9 scientifique afin de justifier ses d\xE9cisions."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Enjeux \xE9conomique"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Aujourd\u2019hui le tabac est tax\xE9 \xE0 80% en France. On peut donc s\u2019imaginer que la commercialisation du cannabis pourrait engendrer une taxe similaire et donc permettre \xE0 l\u2019Etat de b\xE9n\xE9ficier d\u2019un apport financier non n\xE9gligeable."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Enjeux s\xE9curitaire"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "L\u2019un des arguments majeurs en faveur de la l\xE9galisation aujourd\u2019hui est la r\xE9gulation des trafics dangereux pour la population, qu\u2019il s\u2019agisse des consommateurs ou non.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "actor"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "La communaut\xE9 scientifique"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "La communaut\xE9 scientifique repr\xE9sente la source d\u2019informations la plus tangible dans le d\xE9bat. Responsable des \xE9tudes sur les impacts de la consommation de cannabis sur la sant\xE9 autant physique que mentale leur r\xF4le est essentiel. De plus, il a \xE9t\xE9 prouv\xE9 que le cannabis peut avoir des vertus th\xE9rapeutiques comme par exemple dans le traitement de la scl\xE9rose en plaque ou encore r\xE9duire les effets secondaires de la chimioth\xE9rapie (vomissements ou naus\xE9es). Pour le corps m\xE9dical l\u2019int\xE9r\xEAt est donc de faciliter le traitement des patients.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "actor"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Les consommateurs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Les consommateurs font partie des premiers concern\xE9s par cette controverse. Un changement de la l\xE9gislation entra\xEEnerait logiquement une modification de leur comportement. Cependant, au sein de la population consommatrice de cannabis les avis restent divergents."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "La l\xE9galit\xE9"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "La l\xE9galisation du cannabis en France permettrait au consommateur de continuer \xE0 fumer mais tout en respectant la loi. En plus de l\u2019avantage moral que cela repr\xE9sente (culpabilit\xE9 d\u2019entraver la loi pour se procurer du plaisir, ou par besoin, etc.), la l\xE9galisation priverait le consommateur du risque d\u2019amende forfaitaire (jusqu'\xE0 375 euros) ou de prison (jusqu\u2019\xE0 un an) associ\xE9 \xE0 la consommation de cannabis."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Le prix"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Si le cannabis devenait l\xE9gal il y aurait certes dans un premier temps un acc\xE8s plus facile \xE0 de l\u2019herbe pour un prix \xE9quivalent \xE0 celui actuel. Cependant si tel \xE9tait le cas alors l\u2019Etat taxerait probablement la vente de cannabis de mani\xE8re progressive comme ce fut le cas de l'alcool et du tabac. Ayant dans la grande majorit\xE9 conscience de cela, les consommateurs eux m\xEAme ne sont pas tous favorables \xE0 la l\xE9galisation.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "actor"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Les industriels"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Economique"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Pour les industriels l\u2019enjeux \xE9conomique est important. En effet une l\xE9galisation du cannabis impliquerait forc\xE9ment une commercialisation de ce dernier \xE0 des fins m\xE9dicales et r\xE9cr\xE9atives ouvrant ainsi de nouveaux secteurs de vente et de production."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Bien que pour certains la l\xE9galisation se traduirait par une aubaine \xE9conomique, pour d\u2019autres, l\u2019arriv\xE9e sur le march\xE9 de m\xE9dicaments \xE0 base de cannabis pourrait repr\xE9senter une r\xE9elle concurrence \xE0 ceux actuellement r\xE9alis\xE9s \xE0 base d\u2019opium (morphine, etc.) et ayant le monopole de leurs vertus th\xE9rapeutiques communes. C\u2019est d\u2019ailleurs l\u2019une des raisons qui ont justifi\xE9 la criminalisation du cannabis dans les ann\xE9es 30 suite \xE0 l\u2019arriv\xE9e de m\xE9dicament \xE0 base d\u2019opium sur le march\xE9 au Etats-Unis puis dans le reste du monde.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "actor"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "La population"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Aujourd\u2019hui un peu plus de la moiti\xE9 de la population est d\u2019avis \xE0 autoriser la consommation de cannabis. Cependant nombreux sont ceux qui ne sont pas pour la l\xE9galisation. On constate assez facilement \xE0 travers tous les sondages que les avis sont tr\xE8s vari\xE9s et que nombreux sont ceux qui ne savent pas trop se positionner. Cette divergence d\u2019opinion au sein m\xEAme de notre soci\xE9t\xE9 explique en partie que certains politiques h\xE9sitent \xE0 se prononcer de mani\xE8re tranch\xE9e sur le sujet. Cependant la population reste un acteur majoritaire de la controverse de par son nombre de \u201Crepr\xE9sentant\u201D et du fait qu\u2019ils sont les premiers impact\xE9s par la l\xE9gislation.")));
};

/* harmony default export */ __webpack_exports__["default"] = (Actors);

/***/ }),

/***/ "./src/pages/debate.js":
/*!*****************************!*\
  !*** ./src/pages/debate.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/seo */ "./src/components/seo.js");
/* harmony import */ var _components_ref_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ref-link */ "./src/components/ref-link.js");
/* harmony import */ var _css_debate_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/debate.css */ "./src/css/debate.css");
/* harmony import */ var _css_debate_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_debate_css__WEBPACK_IMPORTED_MODULE_4__);






var Debate = function Debate() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Arbres des d\xE9bats"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Arbre des d\xE9bats"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    className: "debate-toc"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#moral_sanitaire"
  }, "D\xE9bat moral et sanitaire")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Chiffres"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Consommation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Cons\xE9quences")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#juridique"
  }, "D\xE9bat juridique, l\xE9gislatif et citoyen")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Opinion sur les politiques publiques"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Gestion des trafics illicites"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Co\xFBt humain"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Limites des lois (CBD)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#economique"
  }, "D\xE9bat \xE9conomique / financier")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Vente"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Manque \xE0 gagner (co\xFBt social)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Opportunit\xE9 \xE9conomique pour les industriels ?"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "debate-subject"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "moral_sanitaire"
  }, "D\xE9bat moral et sanitaire"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Chiffres"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Aux Pays-Bas, l\xE0 o\xF9 la vente et la consommation de cannabis sont l\xE9gales, seulement 26% des jeunes disent avoir d\xE9j\xE0 consomm\xE9 du cannabis contre pr\xE8s de 40% en France o\xF9 elle est interdite, de quoi se poser des questions sur la l\xE9gitimit\xE9 de la r\xE9pression."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Les principaux axes du d\xE9bat tournent autour des aspects moraux et sanitaires. D\u2019apr\xE8s le CAST (Cannabis Abuse Screening Test) outil mis en place par l\u2019OFDT", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ref_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    refTo: "6"
  }), " permettant d\u2019identifier les individus pouvant potentiellement d\xE9velopper un usage probl\xE9matique (d\xE9pendance et risque impacts sur la sant\xE9 cons\xE9quents), \xE0 17 ans 7,4 % des adolescents pr\xE9sentent un risque d\u2019usage critique, soit, rapport\xE9 \xE0 l\u2019ensemble de la population, autour de 60 000 jeunes de cet \xE2ge. Sur l\u2019ensemble des consommateurs 20% sont identifi\xE9s comme ayant un risque \xE9lev\xE9 d\u2019abus ou de d\xE9pendance. Compte tenu de ces chiffres alarmants, nombreux sont ceux qui s\u2019interrogent. D\u2019une part il y a les proches (famille, amis, corps enseignant) : ce sont eux les premiers t\xE9moins des \xE9ventuels effets du cannabis sur un individu et sur son comportement : difficult\xE9 de concentration, d\xE9crochement scolaire, isolement social, d\xE9pression. D\u2019autre part, il y a les professionnels de la sant\xE9 : pour certains (organismes : exemple des CJC : Consultations Jeunes Consommateurs ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ref_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    refTo: "12"
  }), ") le r\xF4le est d'accueillir et d\u2019accompagner les personnes d\xE9pendantes ou \xE0 risque de le devenir. Pour d\u2019autres, il s\u2019agit du bien \xEAtre g\xE9n\xE9ral des patients usagers (cons\xE9quences multiples sur la sant\xE9, Cf \u201Ccons\xE9quences\u201D ci-dessous). Enfin, d\u2019autres entit\xE9s ext\xE9rieures au consommateur lui-m\xEAme sont aussi concern\xE9s (Politiques, Industriels) mais pour lesquelles la l\xE9galisation repr\xE9sente surtout des enjeux l\xE9gislatifs ou \xE9conomiques."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Consommation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Int\xE9ressons nous plus pr\xE9cis\xE9ment \xE0 la consommation de cannabis en France : Le cannabis constitue la substance illicite la plus consomm\xE9e chez les jeunes mais aussi chez les adultes.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "En sixi\xE8me un \xE9l\xE8ve sur dix pr\xE9tend avoir d\xE9j\xE0 consomm\xE9 du cannabis au moins une fois dans sa vie. On constate un nette augmentation autour de l\u2019ann\xE9e de quatri\xE8me. Pour des lyc\xE9ens lambdas de 17 ans, ce chiffre grimpe \xE0 quatre sur dix. Contrairement aux croyances g\xE9n\xE9rales, ce chiffre est le plus bas enregistr\xE9 depuis une dizaine d\u2019ann\xE9es. Le taux d\u2019usagers adolescents r\xE9guliers (consommation > \xE0 10 fois par mois) avoisine les 7%. Le taux d\u2019usagers adultes r\xE9guliers avoisine les 2% (1,7 sur 67 millions)."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Compte tenu de ces r\xE9sultats, force est de constater que l\u2019exp\xE9rimentation ainsi que la consommation sont des tendances g\xE9n\xE9rationnelles attirant essentiellement les jeunes, et ce, d\xE8s le coll\xE8ge et avec une d\xE9croissance significative \xE0 la sortie du lyc\xE9e. Le risque d\u2019\xE9chec ou de retard scolaire constitue un facteur d\u2019inqui\xE9tude important dans l\u2019entourage du consommateur."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Cons\xE9quences"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Prise en charge : les centres sp\xE9cialis\xE9s pour l\u2019accompagnement et la pr\xE9vention en addictologie constatent que 80% des consultations concernent l\u2019usage de cannabis. Pr\xE8s de 60% des consommateurs de cannabis accueillis disent en fumer de mani\xE8re quotidienne."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Cons\xE9quences sur la sant\xE9 et mortalit\xE9 : des \xE9tudes montrent l\u2019impact de la consommation de cannabis sur la sant\xE9 peuvent \xEAtre li\xE9s soit au principe actif du cannabis (\u03949-THC) soit aux substances r\xE9sultant de sa combustion (goudrons) soit aux additifs."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Cannabis et accidents de la route : Les conducteurs sous l\u2019influence du cannabis auraient 1,8 fois plus de risque d\u2019\xEAtre responsables d\u2019un accident mortel que les conducteurs n\xE9gatifs. Si la consommation de cannabis est associ\xE9e \xE0 celle de l\u2019alcool le risque est 15 fois plus important."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "En ce sens la l\xE9galisation peut sembler dangereuse. C\u2019est pourquoi il s\u2019agit l\xE0 d\u2019une des \u201Cconditions\u201D souhait\xE9es par ceux en faveur de la l\xE9galisation : la conduite sous cannabis doit rester ill\xE9gale comme elle l\u2019est pour l\u2019alcool par le danger qu\u2019elle repr\xE9sente."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Cons\xE9quences physiques et psychologiques : Contrairement \xE0 de nombreux a priori, aucune \xE9tude scientifique ne permet de corr\xE9ler de mani\xE8re \xE9vidente et certaine qu\u2019une consommation aigu\xEB de cannabis augmente de mani\xE8re consid\xE9rable l\u2019apparition de pathologies.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Le cannabis pourrait \xEAtre un \xE9ventuel d\xE9clencheur dans de rares cas d\u2019infarctus, de trouble du rythme cardiaque, d\u2019AVC. Mais c\u2019est dans l'inhalation de fum\xE9e en g\xE9n\xE9ral que r\xE9side le risque : il en vient r\xE9guli\xE8rement l\u2019apparition de cancers (poumons, voies a\xE9rodigestives, vessie, prostate, etc.), de maladies respiratoires chroniques, etc."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Bien que cela permette \xE0 certains de relativiser sur la dangerosit\xE9 du cannabis du point de vue de la sant\xE9 physique, il ne faut pas oublier les impacts neurologiques et comportementaux engendr\xE9s qui \xE0 long termes peuvent s'av\xE9rer tout aussi destructeurs."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "En effet, sont constat\xE9s plus fr\xE9quemment des troubles d\u2019anxi\xE9t\xE9s, d\u2019angoisse et \u201Cbad trips\u201D (attaques de panique). La consommation r\xE9guli\xE8re de cannabis peut constituer un facteur d\u2019aggravation de toutes les maladies psychiatriques (risque d\xE9pressif, suicidaire, de d\xE9sinsertion sociale, etc.). Une consommation chronique d\xE8s l\u2019adolescence pourrait m\xEAme entra\xEEner une d\xE9gradation cognitive irr\xE9m\xE9diable. De plus, la consommation de cannabis serait potentiellement un facteur propice au d\xE9veloppement de la schizophr\xE9nie."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\xC0 l\u2019oppos\xE9, certains sites et personnes pro cannabis mettent en avant le fait que la consommation de cannabis permettrait de se d\xE9tendre et de stimuler la cr\xE9ativit\xE9. Un bien \xEAtre qui justifierait donc la consommation.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "debate-subject"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "juridique"
  }, "D\xE9bat juridique, l\xE9gislatif et citoyen"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Opinion sur les politiques publiques"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "En 2008, 85% de la population \xE9tait contre la vente libre de cannabis. En 2018, ce taux chute \xE0 pr\xE8s de 78% ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ref_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    refTo: "6"
  }), ". Pourtant 60% seraient d\u2019avis d\u2019autoriser son usage sous certaines conditions (uniquement pour les majeurs et sans risque de conduire par la suite). L\xE0 aussi on constate une augmentation : en 2008 seuls 30% \xE9taient de cet avis. En 2013, 44% des personnes interrog\xE9es estiment l\u2019interdiction du cannabis comme une atteinte \xE0 la libert\xE9."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Force est de constater que les opinions changent et tendent significativement vers la l\xE9galisation ou du moins \xE0 la r\xE9gulation."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Gestion des trafics illicites"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "La grande partie des revenus g\xE9n\xE9r\xE9s par les trafics de drogues et en particulier du cannabis profitent au crime organis\xE9. De mani\xE8re plus g\xE9n\xE9rale le trafic de stup\xE9fiant appartient et finance un ensemble de pratique ill\xE9gales (trafic d\u2019armes, d\u2019\xEAtres humains, prox\xE9n\xE9tisme, etc.). En ce sens il est important de saisir qu\u2019en an\xE9antissant les trafics de drogues l\u2019Etat peut s\xE9rieusement \xE9branler l\u2019int\xE9gralit\xE9 des trafics ill\xE9gaux. A l\u2019inverse, une mauvaise gestion d\u2019un trafic de stup\xE9fiant \xE0 des r\xE9percussions d\u2019autant plus importantes et diverses et augmente l'ins\xE9curit\xE9 nationale."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "La Mission interminist\xE9rielle de lutte contre la drogue et la toxicomanie (MILDT ou MILDECA) est l\u2019organisme national qui anime et coordonne la lutte contre les drogues et les toxicomanies. La brigade des Stup\xE9fiants (plus connue sous le nom de \xAB Stups \xBB) d\xE9pend de l\u2019OCRTIS, organisme central assur\xE9 par INTERPOL."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Co\xFBt humain"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "En moyenne, sur l\u2019ensemble des accidents mortels sur la route, 7% des individus se r\xE9v\xE8lent \xEAtre positifs au cannabis. On estime qu\u2019un joint repr\xE9sente entre 0,3 et 0,7 grammes d'alcool par litre de sang."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Cependant, il est difficile d\u2019estimer le nombre de d\xE9c\xE8s li\xE9s aux cannabis de mani\xE8re exhaustive.  Bien que de nombreux chercheurs tentent de corr\xE9ler la consommation de cannabis \xE0 l\u2019apparition de pathologies mentales ou physiques, aucune \xE9tude ne permet \xE0 ce stade d\u2019\xE9tablir un lien concret entre ces deux notions. Par ailleurs, comme il n\u2019existe pas r\xE9ellement de dose \u201Cl\xE9tale\u201D de THC (du moins visiblement inatteignable), les morts par surdose n\u2019existent pas contrairement \xE0 bon nombre d\u2019autres drogues."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Cependant il faut garder \xE0 l\u2019esprit que les impacts sur la morbidit\xE9 se r\xE9v\xE8lent \xE0 long terme et c\u2019est pour cette raison qu\u2019il sont difficilement quantifiables. Bien que certains usent des arguments pr\xE9c\xE9dent pour soutenir la l\xE9galisation, il serait donc faux de dire que le cannabis n\u2019a aucune incidence sur la mortalit\xE9."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Limites des lois (CBD)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "L\u2019arriv\xE9e r\xE9cente du CDB dans certains commerces fran\xE7ais ravive la pol\xE9mique et suscite des interrogations sur le bien-fond\xE9 des lois actuelles concernant le cannabis."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Pour le moment toutes forme de cannabis dont la dose de THC n\u2019exc\xE8de pas les 0.2% peut \xEAtre vendue l\xE9galement.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "debate-subject"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "economique"
  }, "D\xE9bat \xE9conomique / financier"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Vente"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Depuis une dizaine d\u2019ann\xE9es, le prix m\xE9dian du gramme d\u2019herbe de cannabis est en hausse d\u2019apr\xE8s l\u2019OCRTIS : il passe de 6,5 euros en 2009 \xE0 11 euros en 2016. Ce ph\xE9nom\xE8ne serait essentiellement d\xFB \xE0 la volont\xE9 des consommateurs d\u2019acheter une herbe de \xAB qualit\xE9  sup\xE9rieure \xBB."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "La teneur moyenne en THC dans les produits aurait donc eu tendance \xE0 augmenter proportionnellement au prix du gramme, et ce notamment pour ce qui est des r\xE9sines."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Manque \xE0 gagner (co\xFBt social)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Depuis mai 2018 l\u2019INSEE int\xE8gre les revenus li\xE9s au trafic de drogue dans le PIB : ce march\xE9 repr\xE9sente 2,7 milliards d\u2019euros dont 1 milliard uniquement pour le cannabis. Il en vient une nouvelle source de discussion : la l\xE9galisation du cannabis pourrait d\xE9sormais \xEAtre potentiellement int\xE9ressante du point de vue de sa rentabilit\xE9 \xE9conomique.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "On peut confirmer l\u2019importance croissante du march\xE9 de l\u2019herbe en France par la hausse de confiscation des plants, dont plus de 137 000 ont \xE9t\xE9 saisis sur le territoire en 2017."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Le \u201Cco\xFBt social\u201D permet de d\xE9terminer cette \xE9ventuelle rentabilit\xE9, il se base notamment sur le co\xFBt de la r\xE9pression et des pathologies associ\xE9es ainsi que sur le co\xFBt externe (nombre de d\xE9c\xE8s, perte de production, etc.). Pour le cannabis le co\xFBt social estim\xE9 autour du milliard d\u2019euros annuel et  est essentiellement d\xFB au co\xFBt de la r\xE9pression qui exc\xE8de les 500 millions d\u2019euros par an."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "De plus, si la vente de cannabis devenait l\xE9gale, l\u2019\xE9tat pourrait percevoir une taxe (et pourrait l\u2019augmenter de mani\xE8re progressive) comme c\u2019est le cas pour le tabac ou pour l\u2019alcool.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "L\u2019Etat peut voir en ce sens un int\xE9r\xEAt certain du point de vue \xE9conomique. C\u2019est le cas des institutions canadiennes et uruguayennes ayant r\xE9cemment jug\xE9 la l\xE9galisation comme b\xE9n\xE9fique. Cependant du point de vue de la coh\xE9rence avec la politique int\xE9rieure et les avis des citoyens, la d\xE9cision de l\xE9galiser ou non le cannabis de se limite pas au manque \xE0 gagner..."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Opportunit\xE9 \xE9conomique pour les industriels ?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Avant de devenir ill\xE9gal le chanvre repr\xE9sentait un mati\xE8re premi\xE8re int\xE9resse dans un bon nombre d\u2019industries (papier, m\xE9dical, etc.). Depuis son interdiction et par soucis de transparence, tous les produits \xE0 but non r\xE9cr\xE9atif issu du cannabis on d\xFB se tourner vers des techniques alternatives. Le retour du chanvre sur la march\xE9 pour donc relancer ses \xE9conomies et repr\xE9senter un opportunit\xE9 pour les industriels."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Bien qu\u2019aujourd\u2019hui le chanvre ne soit plus rentable pour la production de papier ou autres, il repr\xE9sente dans le secteur m\xE9dical un v\xE9ritable int\xE9r\xEAt. Compte tenu de ses vertus t\xE9rapeutiques multiples il pourrait \xEAtre utilis\xE9 dans de nombreux m\xE9dicaments et parall\xE8lement de rompre le monopole de l\u2019opium (le bonheur des uns pour le malheur des autres) notamment pour la production de morphine dont la France est le leader mondial."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Enfin c\u2019est dans la vente de cannabis \xE0 but r\xE9cr\xE9atif que r\xE9side l\u2019autre opportunit\xE9 \xE9conomique des industriels.")));
};

/* harmony default export */ __webpack_exports__["default"] = (Debate);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/seo */ "./src/components/seo.js");
/* harmony import */ var _components_ref_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ref-link */ "./src/components/ref-link.js");





var IndexPage = function IndexPage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Introduction"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Introduction"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Actuellement, la France est l\u2019un des pays les plus r\xE9pressif concernant l\u2019usage du cannabis. Bien qu\u2019\xE9tant consid\xE9r\xE9 comme une drogue douce, du point de vue de la loi, le cannabis n\u2019est pas diff\xE9renci\xE9 des autres drogues. Pourtant les fran\xE7ais comptent parmi ceux qui en consomment le plus. Ce constat permet ais\xE9ment de rendre compte de l\u2019ampleur de la controverse au sein m\xEAme de notre soci\xE9t\xE9. En effet d\u2019apr\xE8s les chiffres l\u2019OFDT, bien que 54% des fran\xE7ais pensent que le cannabis puisse \xEAtre dangereux d\xE8s le premier usage, 60% seraient d\u2019avis d\u2019autoriser son utilisation sous certaines conditions."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Avec l\u2019arriv\xE9e r\xE9cente du CBD dans certains commerces en France, la controverse est raviv\xE9 avec de nombreux interviews et d\xE9bats sur toute la sph\xE8re m\xE9diatique. De mani\xE8re plus g\xE9n\xE9rale la succession de l\xE9galisations de la consommation et/ou de la vente dans un certain nombre de pays autour du globe g\xE9n\xE8re une tendance mondiale."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Cannabis"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Le cannabis, ou chanvre est une plante dont la vari\xE9t\xE9 la plus r\xE9pandue est le Cannabis sativa et dont les propri\xE9t\xE9s m\xE9dicinales et psychotropes sont essentiellement dues au delta-9-tetrahydrocannabinol (plus commun\xE9ment appel\xE9 THC). Le cannabis est vu en France comme stup\xE9fiant depuis 1916 au m\xEAme titre que l\u2019opium, la morphine et la coca\xEFne mais ne sera r\xE9ellement interdit qu\u2019apr\xE8s 1961 suite \xE0 la \u201CConvention Unique contre les Stup\xE9fiants\u201D de l\u2019ONU", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ref_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    refTo: "19"
  }), ". Il se pr\xE9sente sous 3 formes : l'herbe (feuilles, tiges et sommit\xE9s), la r\xE9sine (le \"haschisch\") et l'huile. Bien que certains ing\xE8rent le cannabis sous forme de plats (space-cakes notamment) ou de de boissons (infusions, th\xE9s), la fa\xE7on la plus courante de le consommer est de le fumer. La fum\xE9e souvent associ\xE9 \xE0 la prise de tabac inqui\xE8te certains pour les cons\xE9quences qu\u2019elle entra\xEEne sur la sant\xE9."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Les effets d'une consommation de cannabis"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Les effets psychoactifs surviennent en g\xE9n\xE9ral 15 \xE0 20 minutes apr\xE8s l'inhalation du cannabis (lorsqu\u2019il est fum\xE9). Pour un consommateur r\xE9gulier ce d\xE9lai peut \xEAtre plus important."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Usuellement, l\u2019inhalation provoque une sensation de bien-\xEAtre, de bonheur chez le consommateur. G\xE9n\xE9ralement ces sensations s\u2019accompagnent d\u2019une tendance \xE0 rire plus facilement puis \xE0 posteriori d\u2019un \xE9tat de somnolence auquel s\u2019additionne une baisse de la vigilance, de l\u2019attention et de la coordination motrice. Associ\xE9 \xE0 une consommation d\u2019alcool, les effets des deux substances peuvent \xEAtre d\xE9cupl\xE9s."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Une consommation plus importante peut \xEAtre \xE0 l\u2019origine d\u2019hallucination ou de trouble d\u2019angoisse / d\u2019anxi\xE9t\xE9."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Si la consommation est r\xE9guli\xE8re les effets notoires concernant l\u2019attention et le comportement peuvent potentiellement devenir chroniques. La d\xE9pression et la d\xE9pendance sont aussi des cons\xE9quences fr\xE9quentes chez les usagers r\xE9guliers menant souvent \xE0 des exclusions sociales."));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./src/pages/laws.js":
/*!***************************!*\
  !*** ./src/pages/laws.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/seo */ "./src/components/seo.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_ref_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ref-link */ "./src/components/ref-link.js");
/* harmony import */ var _css_laws_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/laws.css */ "./src/css/laws.css");
/* harmony import */ var _css_laws_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_laws_css__WEBPACK_IMPORTED_MODULE_5__);







var Laws = function Laws() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Les lois"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Les lois"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Les principaux textes de lois en vigueur (au niveau national)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("cite", null, "Loi n\xB070-1320 du 31 d\xE9cembre 1970 \xAB Relative aux mesures sanitaires de lutte contre la toxicomanie, et \xE0 la r\xE9pression du trafic et l\u2019usage illicite de substances v\xE9n\xE9neuses \xBB Code p\xE9nal et Code de la sant\xE9 publique ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ref_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    refTo: "8"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("blockquote", null, "Le cannabis est un produit class\xE9 stup\xE9fiant. Depuis 1970, l\u2019achat, la consommation, la d\xE9tention, la revente, la cultivation qu\u2019elle soit personnelle ou non, le transport ou la conduite sous cannabis sont formellement proscrits et passibles de sanctions lourdes devant les tribunaux, quelle que soit la quantit\xE9 de cannabis incrimin\xE9e. Les peines sont doubl\xE9es quand le cannabis est vendu ou donn\xE9 \xE0 des mineurs. De m\xEAme les m\xE9dicaments contenant des extraits de cannabis sont formellement interdits (sauf rares exceptions : exemple du Sativex dont r\xE8gles de prescription sont tr\xE8s strictes)."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("cite", null, "Loi n\xB0 2003-87 du 3 f\xE9vrier 2003 \xAB Relative \xE0 la conduite sous l'influence de substances ou plantes class\xE9es comme stup\xE9fiants \xBB", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ref_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    refTo: "9"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("blockquote", null, "Toute personne ayant conduit apr\xE8s usage de substances class\xE9es comme stup\xE9fiants est passible d'une peine de 2 ans d'emprisonnement et de 4 500 \u20AC d'amende. Si la personne se trouvait \xE9galement sous l'emprise de l'alcool (plus de 0,5 g par litre dans le sang), les peines peuvent aller jusqu\u2019\xE0 3 ans d'emprisonnement et \xE0 9 000 \u20AC d'amende. Des contr\xF4les avec un d\xE9pistage d'usage de stup\xE9fiants peuvent \xEAtre r\xE9alis\xE9s par les services de police ou de gendarmerie."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("cite", null, "Plan gouvernemental de lutte contre les drogues (2013 \u2013 2017) ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ref_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    refTo: "10"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("blockquote", null, "Principaux objectifs :", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "mettre l\u2019accent sur la compr\xE9hension des addictions, soutien de m\xE9thodes th\xE9rapeutiques innovantes."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "prendre en consid\xE9ration la difficult\xE9 d\u2019acc\xE8s aux soins et \xE0 la pr\xE9vention des populations mais aussi leur niveau d\u2019exposition vis-\xE0-vis des trafics, etc. Homog\xE9n\xE9isation de la pr\xE9vention en ce qui concerne les conditions sociales et territoriales."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Favoriser la r\xE9insertion sociale des usagers et durcissement de la r\xE9pression notamment autour des activit\xE9s p\xE9riph\xE9riques au trafics et \xE0 la consommation."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Pour mieux comprendre l\u2019\xE9volution des lois, se r\xE9f\xE9rer \xE0 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "timeline"
  }, "la frise chronologique"), ".")));
};

/* harmony default export */ __webpack_exports__["default"] = (Laws);

/***/ }),

/***/ "./src/pages/resources.js":
/*!********************************!*\
  !*** ./src/pages/resources.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/seo */ "./src/components/seo.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");





var Resources = function Resources() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Ressources"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Ressources"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/resources/log-book"
  }, "Carnet de bord")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/resources/bibliography"
  }, "Bibliographie")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/resources/glossary"
  }, "Glossaire"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Resources);

/***/ }),

/***/ "./src/pages/resources/bibliography.js":
/*!*********************************************!*\
  !*** ./src/pages/resources/bibliography.js ***!
  \*********************************************/
/*! exports provided: query, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/seo */ "./src/components/seo.js");
/* harmony import */ var _css_bibliography_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../css/bibliography.css */ "./src/css/bibliography.css");
/* harmony import */ var _css_bibliography_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_bibliography_css__WEBPACK_IMPORTED_MODULE_3__);





var Bibliography = function Bibliography(_ref) {
  var data = _ref.data;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Bibliographie"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Bibliographie"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Articles scientifiques"), data.books.edges.map(function (_ref2) {
    var node = _ref2.node;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      id: "src_" + node.frontmatter.ref
    }, "[", node.frontmatter.ref, "]"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
      dangerouslySetInnerHTML: {
        __html: node.html
      }
    }));
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Sites webs"), data.sites.edges.map(function (_ref3) {
    var node = _ref3.node;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      id: "src_" + node.frontmatter.ref
    }, "[", node.frontmatter.ref, "]"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
      dangerouslySetInnerHTML: {
        __html: node.html
      }
    }));
  }));
};

var query = "1652585549";
/* harmony default export */ __webpack_exports__["default"] = (Bibliography);

/***/ }),

/***/ "./src/pages/resources/glossary.js":
/*!*****************************************!*\
  !*** ./src/pages/resources/glossary.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/seo */ "./src/components/seo.js");
/* harmony import */ var _css_glossary_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../css/glossary.css */ "./src/css/glossary.css");
/* harmony import */ var _css_glossary_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_glossary_css__WEBPACK_IMPORTED_MODULE_3__);





var Glossary = function Glossary() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Glossaire"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Glossaire"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "THC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "\u0394-9-t\xE9trahydrocannabinol, substance psychotrope pr\xE9sente dans les formes r\xE9cr\xE9atives du cannabis (sativa, indica, afghanica).")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "CBD"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Cannabidiol, cannabis sans THC.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "MILDECA / MILDT"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Mission interminist\xE9rielle de lutte contre les drogues et les conduites addictives / Toxicomanie.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "OFDT"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Observatoire Fran\xE7ais des Drogues et des Toxicomanies.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "OCRTIS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Office Central pour la R\xE9pression du Trafic Illicite des Stup\xE9fiants"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Glossary);

/***/ }),

/***/ "./src/pages/resources/log-book.js":
/*!*****************************************!*\
  !*** ./src/pages/resources/log-book.js ***!
  \*****************************************/
/*! exports provided: query, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/seo */ "./src/components/seo.js");




var LogBook = function LogBook(_ref) {
  var data = _ref.data;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Carnet de bord"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Carnet de bord"), data.allMarkdownRemark.edges.map(function (_ref2) {
    var node = _ref2.node;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Semaine ", node.frontmatter.week), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: node.html
      }
    }));
  }));
};

var query = "2105010707";
/* harmony default export */ __webpack_exports__["default"] = (LogBook);

/***/ }),

/***/ "./src/pages/timeline.js":
/*!*******************************!*\
  !*** ./src/pages/timeline.js ***!
  \*******************************/
/*! exports provided: query, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/seo */ "./src/components/seo.js");
/* harmony import */ var _components_timeline_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/timeline-item */ "./src/components/timeline-item.js");
/* harmony import */ var _css_timeline_item_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/timeline-item.css */ "./src/css/timeline-item.css");
/* harmony import */ var _css_timeline_item_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_timeline_item_css__WEBPACK_IMPORTED_MODULE_4__);






var TimelinePage = function TimelinePage(_ref) {
  var data = _ref.data;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Frise chronologique"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Frise chronologique"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, data.allMarkdownRemark.totalCount, " \xE9v\xE9nements"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "cd-timeline js-cd-timeline"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cd-timeline__container"
  }, data.allMarkdownRemark.edges.map(function (_ref2) {
    var node = _ref2.node;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_timeline_item__WEBPACK_IMPORTED_MODULE_3__["default"], {
      node: node
    });
  }))));
};

var query = "3173587055";
/* harmony default export */ __webpack_exports__["default"] = (TimelinePage);

/***/ }),

/***/ "@reach/router":
/*!********************************!*\
  !*** external "@reach/router" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__reach_router__;

/***/ }),

/***/ "core-js/modules/es6.array.iterator":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.array.iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_iterator__;

/***/ }),

/***/ "core-js/modules/es6.array.sort":
/*!*************************************************!*\
  !*** external "core-js/modules/es6.array.sort" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_sort__;

/***/ }),

/***/ "core-js/modules/es6.function.name":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.function.name" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_function_name__;

/***/ }),

/***/ "core-js/modules/es6.map":
/*!******************************************!*\
  !*** external "core-js/modules/es6.map" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_map__;

/***/ }),

/***/ "core-js/modules/es6.object.assign":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.object.assign" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_assign__;

/***/ }),

/***/ "core-js/modules/es6.object.to-string":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.object.to-string" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_to_string__;

/***/ }),

/***/ "core-js/modules/es6.regexp.constructor":
/*!*********************************************************!*\
  !*** external "core-js/modules/es6.regexp.constructor" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_constructor__;

/***/ }),

/***/ "core-js/modules/es6.regexp.split":
/*!***************************************************!*\
  !*** external "core-js/modules/es6.regexp.split" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_split__;

/***/ }),

/***/ "core-js/modules/es6.regexp.to-string":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.regexp.to-string" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_to_string__;

/***/ }),

/***/ "core-js/modules/es6.string.ends-with":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.string.ends-with" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_ends_with__;

/***/ }),

/***/ "core-js/modules/es6.string.iterator":
/*!******************************************************!*\
  !*** external "core-js/modules/es6.string.iterator" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_iterator__;

/***/ }),

/***/ "core-js/modules/web.dom.iterable":
/*!***************************************************!*\
  !*** external "core-js/modules/web.dom.iterable" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_fs__;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_path__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom_server__;

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_helmet__;

/***/ })

/******/ });
});
//# sourceMappingURL=render-page.js.map