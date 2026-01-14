// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"6b9Pj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "application", ()=>application);
var _stimulus = require("@hotwired/stimulus");
// Import and register Orbital controllers with 'orbital-' prefix
var _dialogController = require("./controllers/dialog_controller");
var _dialogControllerDefault = parcelHelpers.interopDefault(_dialogController);
var _popoverController = require("./controllers/popover_controller");
var _popoverControllerDefault = parcelHelpers.interopDefault(_popoverController);
var _menuController = require("./controllers/menu_controller");
var _menuControllerDefault = parcelHelpers.interopDefault(_menuController);
var _menuSubController = require("./controllers/menu_sub_controller");
var _menuSubControllerDefault = parcelHelpers.interopDefault(_menuSubController);
// Check if host app already has Stimulus initialized
let application;
if (window.Stimulus) {
    // Use existing Stimulus application from host
    application = window.Stimulus;
    console.log("Orbital: Using existing Stimulus application");
} else {
    // Initialize new Stimulus application
    application = (0, _stimulus.Application).start();
    application.debug = false;
    window.Stimulus = application;
    console.log("Orbital: Initialized new Stimulus application");
}
application.register("orbital-dialog", (0, _dialogControllerDefault.default));
application.register("orbital-popover", (0, _popoverControllerDefault.default));
application.register("orbital-menu", (0, _menuControllerDefault.default));
application.register("orbital-menu-sub", (0, _menuSubControllerDefault.default));

},{"@hotwired/stimulus":"hVNih","./controllers/dialog_controller":"fL4B3","./controllers/popover_controller":"8Qta5","./controllers/menu_controller":"23v7l","./controllers/menu_sub_controller":"i9fGq","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"hVNih":[function(require,module,exports,__globalThis) {
/*
Stimulus 3.2.1
Copyright © 2023 Basecamp, LLC
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Application", ()=>Application);
parcelHelpers.export(exports, "AttributeObserver", ()=>AttributeObserver);
parcelHelpers.export(exports, "Context", ()=>Context);
parcelHelpers.export(exports, "Controller", ()=>Controller);
parcelHelpers.export(exports, "ElementObserver", ()=>ElementObserver);
parcelHelpers.export(exports, "IndexedMultimap", ()=>IndexedMultimap);
parcelHelpers.export(exports, "Multimap", ()=>Multimap);
parcelHelpers.export(exports, "SelectorObserver", ()=>SelectorObserver);
parcelHelpers.export(exports, "StringMapObserver", ()=>StringMapObserver);
parcelHelpers.export(exports, "TokenListObserver", ()=>TokenListObserver);
parcelHelpers.export(exports, "ValueListObserver", ()=>ValueListObserver);
parcelHelpers.export(exports, "add", ()=>add);
parcelHelpers.export(exports, "defaultSchema", ()=>defaultSchema);
parcelHelpers.export(exports, "del", ()=>del);
parcelHelpers.export(exports, "fetch", ()=>fetch);
parcelHelpers.export(exports, "prune", ()=>prune);
class EventListener {
    constructor(eventTarget, eventName, eventOptions){
        this.eventTarget = eventTarget;
        this.eventName = eventName;
        this.eventOptions = eventOptions;
        this.unorderedBindings = new Set();
    }
    connect() {
        this.eventTarget.addEventListener(this.eventName, this, this.eventOptions);
    }
    disconnect() {
        this.eventTarget.removeEventListener(this.eventName, this, this.eventOptions);
    }
    bindingConnected(binding) {
        this.unorderedBindings.add(binding);
    }
    bindingDisconnected(binding) {
        this.unorderedBindings.delete(binding);
    }
    handleEvent(event) {
        const extendedEvent = extendEvent(event);
        for (const binding of this.bindings){
            if (extendedEvent.immediatePropagationStopped) break;
            else binding.handleEvent(extendedEvent);
        }
    }
    hasBindings() {
        return this.unorderedBindings.size > 0;
    }
    get bindings() {
        return Array.from(this.unorderedBindings).sort((left, right)=>{
            const leftIndex = left.index, rightIndex = right.index;
            return leftIndex < rightIndex ? -1 : leftIndex > rightIndex ? 1 : 0;
        });
    }
}
function extendEvent(event) {
    if ("immediatePropagationStopped" in event) return event;
    else {
        const { stopImmediatePropagation } = event;
        return Object.assign(event, {
            immediatePropagationStopped: false,
            stopImmediatePropagation () {
                this.immediatePropagationStopped = true;
                stopImmediatePropagation.call(this);
            }
        });
    }
}
class Dispatcher {
    constructor(application){
        this.application = application;
        this.eventListenerMaps = new Map();
        this.started = false;
    }
    start() {
        if (!this.started) {
            this.started = true;
            this.eventListeners.forEach((eventListener)=>eventListener.connect());
        }
    }
    stop() {
        if (this.started) {
            this.started = false;
            this.eventListeners.forEach((eventListener)=>eventListener.disconnect());
        }
    }
    get eventListeners() {
        return Array.from(this.eventListenerMaps.values()).reduce((listeners, map)=>listeners.concat(Array.from(map.values())), []);
    }
    bindingConnected(binding) {
        this.fetchEventListenerForBinding(binding).bindingConnected(binding);
    }
    bindingDisconnected(binding, clearEventListeners = false) {
        this.fetchEventListenerForBinding(binding).bindingDisconnected(binding);
        if (clearEventListeners) this.clearEventListenersForBinding(binding);
    }
    handleError(error, message, detail = {}) {
        this.application.handleError(error, `Error ${message}`, detail);
    }
    clearEventListenersForBinding(binding) {
        const eventListener = this.fetchEventListenerForBinding(binding);
        if (!eventListener.hasBindings()) {
            eventListener.disconnect();
            this.removeMappedEventListenerFor(binding);
        }
    }
    removeMappedEventListenerFor(binding) {
        const { eventTarget, eventName, eventOptions } = binding;
        const eventListenerMap = this.fetchEventListenerMapForEventTarget(eventTarget);
        const cacheKey = this.cacheKey(eventName, eventOptions);
        eventListenerMap.delete(cacheKey);
        if (eventListenerMap.size == 0) this.eventListenerMaps.delete(eventTarget);
    }
    fetchEventListenerForBinding(binding) {
        const { eventTarget, eventName, eventOptions } = binding;
        return this.fetchEventListener(eventTarget, eventName, eventOptions);
    }
    fetchEventListener(eventTarget, eventName, eventOptions) {
        const eventListenerMap = this.fetchEventListenerMapForEventTarget(eventTarget);
        const cacheKey = this.cacheKey(eventName, eventOptions);
        let eventListener = eventListenerMap.get(cacheKey);
        if (!eventListener) {
            eventListener = this.createEventListener(eventTarget, eventName, eventOptions);
            eventListenerMap.set(cacheKey, eventListener);
        }
        return eventListener;
    }
    createEventListener(eventTarget, eventName, eventOptions) {
        const eventListener = new EventListener(eventTarget, eventName, eventOptions);
        if (this.started) eventListener.connect();
        return eventListener;
    }
    fetchEventListenerMapForEventTarget(eventTarget) {
        let eventListenerMap = this.eventListenerMaps.get(eventTarget);
        if (!eventListenerMap) {
            eventListenerMap = new Map();
            this.eventListenerMaps.set(eventTarget, eventListenerMap);
        }
        return eventListenerMap;
    }
    cacheKey(eventName, eventOptions) {
        const parts = [
            eventName
        ];
        Object.keys(eventOptions).sort().forEach((key)=>{
            parts.push(`${eventOptions[key] ? "" : "!"}${key}`);
        });
        return parts.join(":");
    }
}
const defaultActionDescriptorFilters = {
    stop ({ event, value }) {
        if (value) event.stopPropagation();
        return true;
    },
    prevent ({ event, value }) {
        if (value) event.preventDefault();
        return true;
    },
    self ({ event, value, element }) {
        if (value) return element === event.target;
        else return true;
    }
};
const descriptorPattern = /^(?:(?:([^.]+?)\+)?(.+?)(?:\.(.+?))?(?:@(window|document))?->)?(.+?)(?:#([^:]+?))(?::(.+))?$/;
function parseActionDescriptorString(descriptorString) {
    const source = descriptorString.trim();
    const matches = source.match(descriptorPattern) || [];
    let eventName = matches[2];
    let keyFilter = matches[3];
    if (keyFilter && ![
        "keydown",
        "keyup",
        "keypress"
    ].includes(eventName)) {
        eventName += `.${keyFilter}`;
        keyFilter = "";
    }
    return {
        eventTarget: parseEventTarget(matches[4]),
        eventName,
        eventOptions: matches[7] ? parseEventOptions(matches[7]) : {},
        identifier: matches[5],
        methodName: matches[6],
        keyFilter: matches[1] || keyFilter
    };
}
function parseEventTarget(eventTargetName) {
    if (eventTargetName == "window") return window;
    else if (eventTargetName == "document") return document;
}
function parseEventOptions(eventOptions) {
    return eventOptions.split(":").reduce((options, token)=>Object.assign(options, {
            [token.replace(/^!/, "")]: !/^!/.test(token)
        }), {});
}
function stringifyEventTarget(eventTarget) {
    if (eventTarget == window) return "window";
    else if (eventTarget == document) return "document";
}
function camelize(value) {
    return value.replace(/(?:[_-])([a-z0-9])/g, (_, char)=>char.toUpperCase());
}
function namespaceCamelize(value) {
    return camelize(value.replace(/--/g, "-").replace(/__/g, "_"));
}
function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}
function dasherize(value) {
    return value.replace(/([A-Z])/g, (_, char)=>`-${char.toLowerCase()}`);
}
function tokenize(value) {
    return value.match(/[^\s]+/g) || [];
}
function isSomething(object) {
    return object !== null && object !== undefined;
}
function hasProperty(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
}
const allModifiers = [
    "meta",
    "ctrl",
    "alt",
    "shift"
];
class Action {
    constructor(element, index, descriptor, schema){
        this.element = element;
        this.index = index;
        this.eventTarget = descriptor.eventTarget || element;
        this.eventName = descriptor.eventName || getDefaultEventNameForElement(element) || error("missing event name");
        this.eventOptions = descriptor.eventOptions || {};
        this.identifier = descriptor.identifier || error("missing identifier");
        this.methodName = descriptor.methodName || error("missing method name");
        this.keyFilter = descriptor.keyFilter || "";
        this.schema = schema;
    }
    static forToken(token, schema) {
        return new this(token.element, token.index, parseActionDescriptorString(token.content), schema);
    }
    toString() {
        const eventFilter = this.keyFilter ? `.${this.keyFilter}` : "";
        const eventTarget = this.eventTargetName ? `@${this.eventTargetName}` : "";
        return `${this.eventName}${eventFilter}${eventTarget}->${this.identifier}#${this.methodName}`;
    }
    shouldIgnoreKeyboardEvent(event) {
        if (!this.keyFilter) return false;
        const filters = this.keyFilter.split("+");
        if (this.keyFilterDissatisfied(event, filters)) return true;
        const standardFilter = filters.filter((key)=>!allModifiers.includes(key))[0];
        if (!standardFilter) return false;
        if (!hasProperty(this.keyMappings, standardFilter)) error(`contains unknown key filter: ${this.keyFilter}`);
        return this.keyMappings[standardFilter].toLowerCase() !== event.key.toLowerCase();
    }
    shouldIgnoreMouseEvent(event) {
        if (!this.keyFilter) return false;
        const filters = [
            this.keyFilter
        ];
        if (this.keyFilterDissatisfied(event, filters)) return true;
        return false;
    }
    get params() {
        const params = {};
        const pattern = new RegExp(`^data-${this.identifier}-(.+)-param$`, "i");
        for (const { name, value } of Array.from(this.element.attributes)){
            const match = name.match(pattern);
            const key = match && match[1];
            if (key) params[camelize(key)] = typecast(value);
        }
        return params;
    }
    get eventTargetName() {
        return stringifyEventTarget(this.eventTarget);
    }
    get keyMappings() {
        return this.schema.keyMappings;
    }
    keyFilterDissatisfied(event, filters) {
        const [meta, ctrl, alt, shift] = allModifiers.map((modifier)=>filters.includes(modifier));
        return event.metaKey !== meta || event.ctrlKey !== ctrl || event.altKey !== alt || event.shiftKey !== shift;
    }
}
const defaultEventNames = {
    a: ()=>"click",
    button: ()=>"click",
    form: ()=>"submit",
    details: ()=>"toggle",
    input: (e)=>e.getAttribute("type") == "submit" ? "click" : "input",
    select: ()=>"change",
    textarea: ()=>"input"
};
function getDefaultEventNameForElement(element) {
    const tagName = element.tagName.toLowerCase();
    if (tagName in defaultEventNames) return defaultEventNames[tagName](element);
}
function error(message) {
    throw new Error(message);
}
function typecast(value) {
    try {
        return JSON.parse(value);
    } catch (o_O) {
        return value;
    }
}
class Binding {
    constructor(context, action){
        this.context = context;
        this.action = action;
    }
    get index() {
        return this.action.index;
    }
    get eventTarget() {
        return this.action.eventTarget;
    }
    get eventOptions() {
        return this.action.eventOptions;
    }
    get identifier() {
        return this.context.identifier;
    }
    handleEvent(event) {
        const actionEvent = this.prepareActionEvent(event);
        if (this.willBeInvokedByEvent(event) && this.applyEventModifiers(actionEvent)) this.invokeWithEvent(actionEvent);
    }
    get eventName() {
        return this.action.eventName;
    }
    get method() {
        const method = this.controller[this.methodName];
        if (typeof method == "function") return method;
        throw new Error(`Action "${this.action}" references undefined method "${this.methodName}"`);
    }
    applyEventModifiers(event) {
        const { element } = this.action;
        const { actionDescriptorFilters } = this.context.application;
        const { controller } = this.context;
        let passes = true;
        for (const [name, value] of Object.entries(this.eventOptions)){
            if (name in actionDescriptorFilters) {
                const filter = actionDescriptorFilters[name];
                passes = passes && filter({
                    name,
                    value,
                    event,
                    element,
                    controller
                });
            } else continue;
        }
        return passes;
    }
    prepareActionEvent(event) {
        return Object.assign(event, {
            params: this.action.params
        });
    }
    invokeWithEvent(event) {
        const { target, currentTarget } = event;
        try {
            this.method.call(this.controller, event);
            this.context.logDebugActivity(this.methodName, {
                event,
                target,
                currentTarget,
                action: this.methodName
            });
        } catch (error) {
            const { identifier, controller, element, index } = this;
            const detail = {
                identifier,
                controller,
                element,
                index,
                event
            };
            this.context.handleError(error, `invoking action "${this.action}"`, detail);
        }
    }
    willBeInvokedByEvent(event) {
        const eventTarget = event.target;
        if (event instanceof KeyboardEvent && this.action.shouldIgnoreKeyboardEvent(event)) return false;
        if (event instanceof MouseEvent && this.action.shouldIgnoreMouseEvent(event)) return false;
        if (this.element === eventTarget) return true;
        else if (eventTarget instanceof Element && this.element.contains(eventTarget)) return this.scope.containsElement(eventTarget);
        else return this.scope.containsElement(this.action.element);
    }
    get controller() {
        return this.context.controller;
    }
    get methodName() {
        return this.action.methodName;
    }
    get element() {
        return this.scope.element;
    }
    get scope() {
        return this.context.scope;
    }
}
class ElementObserver {
    constructor(element, delegate){
        this.mutationObserverInit = {
            attributes: true,
            childList: true,
            subtree: true
        };
        this.element = element;
        this.started = false;
        this.delegate = delegate;
        this.elements = new Set();
        this.mutationObserver = new MutationObserver((mutations)=>this.processMutations(mutations));
    }
    start() {
        if (!this.started) {
            this.started = true;
            this.mutationObserver.observe(this.element, this.mutationObserverInit);
            this.refresh();
        }
    }
    pause(callback) {
        if (this.started) {
            this.mutationObserver.disconnect();
            this.started = false;
        }
        callback();
        if (!this.started) {
            this.mutationObserver.observe(this.element, this.mutationObserverInit);
            this.started = true;
        }
    }
    stop() {
        if (this.started) {
            this.mutationObserver.takeRecords();
            this.mutationObserver.disconnect();
            this.started = false;
        }
    }
    refresh() {
        if (this.started) {
            const matches = new Set(this.matchElementsInTree());
            for (const element of Array.from(this.elements))if (!matches.has(element)) this.removeElement(element);
            for (const element of Array.from(matches))this.addElement(element);
        }
    }
    processMutations(mutations) {
        if (this.started) for (const mutation of mutations)this.processMutation(mutation);
    }
    processMutation(mutation) {
        if (mutation.type == "attributes") this.processAttributeChange(mutation.target, mutation.attributeName);
        else if (mutation.type == "childList") {
            this.processRemovedNodes(mutation.removedNodes);
            this.processAddedNodes(mutation.addedNodes);
        }
    }
    processAttributeChange(element, attributeName) {
        if (this.elements.has(element)) {
            if (this.delegate.elementAttributeChanged && this.matchElement(element)) this.delegate.elementAttributeChanged(element, attributeName);
            else this.removeElement(element);
        } else if (this.matchElement(element)) this.addElement(element);
    }
    processRemovedNodes(nodes) {
        for (const node of Array.from(nodes)){
            const element = this.elementFromNode(node);
            if (element) this.processTree(element, this.removeElement);
        }
    }
    processAddedNodes(nodes) {
        for (const node of Array.from(nodes)){
            const element = this.elementFromNode(node);
            if (element && this.elementIsActive(element)) this.processTree(element, this.addElement);
        }
    }
    matchElement(element) {
        return this.delegate.matchElement(element);
    }
    matchElementsInTree(tree = this.element) {
        return this.delegate.matchElementsInTree(tree);
    }
    processTree(tree, processor) {
        for (const element of this.matchElementsInTree(tree))processor.call(this, element);
    }
    elementFromNode(node) {
        if (node.nodeType == Node.ELEMENT_NODE) return node;
    }
    elementIsActive(element) {
        if (element.isConnected != this.element.isConnected) return false;
        else return this.element.contains(element);
    }
    addElement(element) {
        if (!this.elements.has(element)) {
            if (this.elementIsActive(element)) {
                this.elements.add(element);
                if (this.delegate.elementMatched) this.delegate.elementMatched(element);
            }
        }
    }
    removeElement(element) {
        if (this.elements.has(element)) {
            this.elements.delete(element);
            if (this.delegate.elementUnmatched) this.delegate.elementUnmatched(element);
        }
    }
}
class AttributeObserver {
    constructor(element, attributeName, delegate){
        this.attributeName = attributeName;
        this.delegate = delegate;
        this.elementObserver = new ElementObserver(element, this);
    }
    get element() {
        return this.elementObserver.element;
    }
    get selector() {
        return `[${this.attributeName}]`;
    }
    start() {
        this.elementObserver.start();
    }
    pause(callback) {
        this.elementObserver.pause(callback);
    }
    stop() {
        this.elementObserver.stop();
    }
    refresh() {
        this.elementObserver.refresh();
    }
    get started() {
        return this.elementObserver.started;
    }
    matchElement(element) {
        return element.hasAttribute(this.attributeName);
    }
    matchElementsInTree(tree) {
        const match = this.matchElement(tree) ? [
            tree
        ] : [];
        const matches = Array.from(tree.querySelectorAll(this.selector));
        return match.concat(matches);
    }
    elementMatched(element) {
        if (this.delegate.elementMatchedAttribute) this.delegate.elementMatchedAttribute(element, this.attributeName);
    }
    elementUnmatched(element) {
        if (this.delegate.elementUnmatchedAttribute) this.delegate.elementUnmatchedAttribute(element, this.attributeName);
    }
    elementAttributeChanged(element, attributeName) {
        if (this.delegate.elementAttributeValueChanged && this.attributeName == attributeName) this.delegate.elementAttributeValueChanged(element, attributeName);
    }
}
function add(map, key, value) {
    fetch(map, key).add(value);
}
function del(map, key, value) {
    fetch(map, key).delete(value);
    prune(map, key);
}
function fetch(map, key) {
    let values = map.get(key);
    if (!values) {
        values = new Set();
        map.set(key, values);
    }
    return values;
}
function prune(map, key) {
    const values = map.get(key);
    if (values != null && values.size == 0) map.delete(key);
}
class Multimap {
    constructor(){
        this.valuesByKey = new Map();
    }
    get keys() {
        return Array.from(this.valuesByKey.keys());
    }
    get values() {
        const sets = Array.from(this.valuesByKey.values());
        return sets.reduce((values, set)=>values.concat(Array.from(set)), []);
    }
    get size() {
        const sets = Array.from(this.valuesByKey.values());
        return sets.reduce((size, set)=>size + set.size, 0);
    }
    add(key, value) {
        add(this.valuesByKey, key, value);
    }
    delete(key, value) {
        del(this.valuesByKey, key, value);
    }
    has(key, value) {
        const values = this.valuesByKey.get(key);
        return values != null && values.has(value);
    }
    hasKey(key) {
        return this.valuesByKey.has(key);
    }
    hasValue(value) {
        const sets = Array.from(this.valuesByKey.values());
        return sets.some((set)=>set.has(value));
    }
    getValuesForKey(key) {
        const values = this.valuesByKey.get(key);
        return values ? Array.from(values) : [];
    }
    getKeysForValue(value) {
        return Array.from(this.valuesByKey).filter(([_key, values])=>values.has(value)).map(([key, _values])=>key);
    }
}
class IndexedMultimap extends Multimap {
    constructor(){
        super();
        this.keysByValue = new Map();
    }
    get values() {
        return Array.from(this.keysByValue.keys());
    }
    add(key, value) {
        super.add(key, value);
        add(this.keysByValue, value, key);
    }
    delete(key, value) {
        super.delete(key, value);
        del(this.keysByValue, value, key);
    }
    hasValue(value) {
        return this.keysByValue.has(value);
    }
    getKeysForValue(value) {
        const set = this.keysByValue.get(value);
        return set ? Array.from(set) : [];
    }
}
class SelectorObserver {
    constructor(element, selector, delegate, details){
        this._selector = selector;
        this.details = details;
        this.elementObserver = new ElementObserver(element, this);
        this.delegate = delegate;
        this.matchesByElement = new Multimap();
    }
    get started() {
        return this.elementObserver.started;
    }
    get selector() {
        return this._selector;
    }
    set selector(selector) {
        this._selector = selector;
        this.refresh();
    }
    start() {
        this.elementObserver.start();
    }
    pause(callback) {
        this.elementObserver.pause(callback);
    }
    stop() {
        this.elementObserver.stop();
    }
    refresh() {
        this.elementObserver.refresh();
    }
    get element() {
        return this.elementObserver.element;
    }
    matchElement(element) {
        const { selector } = this;
        if (selector) {
            const matches = element.matches(selector);
            if (this.delegate.selectorMatchElement) return matches && this.delegate.selectorMatchElement(element, this.details);
            return matches;
        } else return false;
    }
    matchElementsInTree(tree) {
        const { selector } = this;
        if (selector) {
            const match = this.matchElement(tree) ? [
                tree
            ] : [];
            const matches = Array.from(tree.querySelectorAll(selector)).filter((match)=>this.matchElement(match));
            return match.concat(matches);
        } else return [];
    }
    elementMatched(element) {
        const { selector } = this;
        if (selector) this.selectorMatched(element, selector);
    }
    elementUnmatched(element) {
        const selectors = this.matchesByElement.getKeysForValue(element);
        for (const selector of selectors)this.selectorUnmatched(element, selector);
    }
    elementAttributeChanged(element, _attributeName) {
        const { selector } = this;
        if (selector) {
            const matches = this.matchElement(element);
            const matchedBefore = this.matchesByElement.has(selector, element);
            if (matches && !matchedBefore) this.selectorMatched(element, selector);
            else if (!matches && matchedBefore) this.selectorUnmatched(element, selector);
        }
    }
    selectorMatched(element, selector) {
        this.delegate.selectorMatched(element, selector, this.details);
        this.matchesByElement.add(selector, element);
    }
    selectorUnmatched(element, selector) {
        this.delegate.selectorUnmatched(element, selector, this.details);
        this.matchesByElement.delete(selector, element);
    }
}
class StringMapObserver {
    constructor(element, delegate){
        this.element = element;
        this.delegate = delegate;
        this.started = false;
        this.stringMap = new Map();
        this.mutationObserver = new MutationObserver((mutations)=>this.processMutations(mutations));
    }
    start() {
        if (!this.started) {
            this.started = true;
            this.mutationObserver.observe(this.element, {
                attributes: true,
                attributeOldValue: true
            });
            this.refresh();
        }
    }
    stop() {
        if (this.started) {
            this.mutationObserver.takeRecords();
            this.mutationObserver.disconnect();
            this.started = false;
        }
    }
    refresh() {
        if (this.started) for (const attributeName of this.knownAttributeNames)this.refreshAttribute(attributeName, null);
    }
    processMutations(mutations) {
        if (this.started) for (const mutation of mutations)this.processMutation(mutation);
    }
    processMutation(mutation) {
        const attributeName = mutation.attributeName;
        if (attributeName) this.refreshAttribute(attributeName, mutation.oldValue);
    }
    refreshAttribute(attributeName, oldValue) {
        const key = this.delegate.getStringMapKeyForAttribute(attributeName);
        if (key != null) {
            if (!this.stringMap.has(attributeName)) this.stringMapKeyAdded(key, attributeName);
            const value = this.element.getAttribute(attributeName);
            if (this.stringMap.get(attributeName) != value) this.stringMapValueChanged(value, key, oldValue);
            if (value == null) {
                const oldValue = this.stringMap.get(attributeName);
                this.stringMap.delete(attributeName);
                if (oldValue) this.stringMapKeyRemoved(key, attributeName, oldValue);
            } else this.stringMap.set(attributeName, value);
        }
    }
    stringMapKeyAdded(key, attributeName) {
        if (this.delegate.stringMapKeyAdded) this.delegate.stringMapKeyAdded(key, attributeName);
    }
    stringMapValueChanged(value, key, oldValue) {
        if (this.delegate.stringMapValueChanged) this.delegate.stringMapValueChanged(value, key, oldValue);
    }
    stringMapKeyRemoved(key, attributeName, oldValue) {
        if (this.delegate.stringMapKeyRemoved) this.delegate.stringMapKeyRemoved(key, attributeName, oldValue);
    }
    get knownAttributeNames() {
        return Array.from(new Set(this.currentAttributeNames.concat(this.recordedAttributeNames)));
    }
    get currentAttributeNames() {
        return Array.from(this.element.attributes).map((attribute)=>attribute.name);
    }
    get recordedAttributeNames() {
        return Array.from(this.stringMap.keys());
    }
}
class TokenListObserver {
    constructor(element, attributeName, delegate){
        this.attributeObserver = new AttributeObserver(element, attributeName, this);
        this.delegate = delegate;
        this.tokensByElement = new Multimap();
    }
    get started() {
        return this.attributeObserver.started;
    }
    start() {
        this.attributeObserver.start();
    }
    pause(callback) {
        this.attributeObserver.pause(callback);
    }
    stop() {
        this.attributeObserver.stop();
    }
    refresh() {
        this.attributeObserver.refresh();
    }
    get element() {
        return this.attributeObserver.element;
    }
    get attributeName() {
        return this.attributeObserver.attributeName;
    }
    elementMatchedAttribute(element) {
        this.tokensMatched(this.readTokensForElement(element));
    }
    elementAttributeValueChanged(element) {
        const [unmatchedTokens, matchedTokens] = this.refreshTokensForElement(element);
        this.tokensUnmatched(unmatchedTokens);
        this.tokensMatched(matchedTokens);
    }
    elementUnmatchedAttribute(element) {
        this.tokensUnmatched(this.tokensByElement.getValuesForKey(element));
    }
    tokensMatched(tokens) {
        tokens.forEach((token)=>this.tokenMatched(token));
    }
    tokensUnmatched(tokens) {
        tokens.forEach((token)=>this.tokenUnmatched(token));
    }
    tokenMatched(token) {
        this.delegate.tokenMatched(token);
        this.tokensByElement.add(token.element, token);
    }
    tokenUnmatched(token) {
        this.delegate.tokenUnmatched(token);
        this.tokensByElement.delete(token.element, token);
    }
    refreshTokensForElement(element) {
        const previousTokens = this.tokensByElement.getValuesForKey(element);
        const currentTokens = this.readTokensForElement(element);
        const firstDifferingIndex = zip(previousTokens, currentTokens).findIndex(([previousToken, currentToken])=>!tokensAreEqual(previousToken, currentToken));
        if (firstDifferingIndex == -1) return [
            [],
            []
        ];
        else return [
            previousTokens.slice(firstDifferingIndex),
            currentTokens.slice(firstDifferingIndex)
        ];
    }
    readTokensForElement(element) {
        const attributeName = this.attributeName;
        const tokenString = element.getAttribute(attributeName) || "";
        return parseTokenString(tokenString, element, attributeName);
    }
}
function parseTokenString(tokenString, element, attributeName) {
    return tokenString.trim().split(/\s+/).filter((content)=>content.length).map((content, index)=>({
            element,
            attributeName,
            content,
            index
        }));
}
function zip(left, right) {
    const length = Math.max(left.length, right.length);
    return Array.from({
        length
    }, (_, index)=>[
            left[index],
            right[index]
        ]);
}
function tokensAreEqual(left, right) {
    return left && right && left.index == right.index && left.content == right.content;
}
class ValueListObserver {
    constructor(element, attributeName, delegate){
        this.tokenListObserver = new TokenListObserver(element, attributeName, this);
        this.delegate = delegate;
        this.parseResultsByToken = new WeakMap();
        this.valuesByTokenByElement = new WeakMap();
    }
    get started() {
        return this.tokenListObserver.started;
    }
    start() {
        this.tokenListObserver.start();
    }
    stop() {
        this.tokenListObserver.stop();
    }
    refresh() {
        this.tokenListObserver.refresh();
    }
    get element() {
        return this.tokenListObserver.element;
    }
    get attributeName() {
        return this.tokenListObserver.attributeName;
    }
    tokenMatched(token) {
        const { element } = token;
        const { value } = this.fetchParseResultForToken(token);
        if (value) {
            this.fetchValuesByTokenForElement(element).set(token, value);
            this.delegate.elementMatchedValue(element, value);
        }
    }
    tokenUnmatched(token) {
        const { element } = token;
        const { value } = this.fetchParseResultForToken(token);
        if (value) {
            this.fetchValuesByTokenForElement(element).delete(token);
            this.delegate.elementUnmatchedValue(element, value);
        }
    }
    fetchParseResultForToken(token) {
        let parseResult = this.parseResultsByToken.get(token);
        if (!parseResult) {
            parseResult = this.parseToken(token);
            this.parseResultsByToken.set(token, parseResult);
        }
        return parseResult;
    }
    fetchValuesByTokenForElement(element) {
        let valuesByToken = this.valuesByTokenByElement.get(element);
        if (!valuesByToken) {
            valuesByToken = new Map();
            this.valuesByTokenByElement.set(element, valuesByToken);
        }
        return valuesByToken;
    }
    parseToken(token) {
        try {
            const value = this.delegate.parseValueForToken(token);
            return {
                value
            };
        } catch (error) {
            return {
                error
            };
        }
    }
}
class BindingObserver {
    constructor(context, delegate){
        this.context = context;
        this.delegate = delegate;
        this.bindingsByAction = new Map();
    }
    start() {
        if (!this.valueListObserver) {
            this.valueListObserver = new ValueListObserver(this.element, this.actionAttribute, this);
            this.valueListObserver.start();
        }
    }
    stop() {
        if (this.valueListObserver) {
            this.valueListObserver.stop();
            delete this.valueListObserver;
            this.disconnectAllActions();
        }
    }
    get element() {
        return this.context.element;
    }
    get identifier() {
        return this.context.identifier;
    }
    get actionAttribute() {
        return this.schema.actionAttribute;
    }
    get schema() {
        return this.context.schema;
    }
    get bindings() {
        return Array.from(this.bindingsByAction.values());
    }
    connectAction(action) {
        const binding = new Binding(this.context, action);
        this.bindingsByAction.set(action, binding);
        this.delegate.bindingConnected(binding);
    }
    disconnectAction(action) {
        const binding = this.bindingsByAction.get(action);
        if (binding) {
            this.bindingsByAction.delete(action);
            this.delegate.bindingDisconnected(binding);
        }
    }
    disconnectAllActions() {
        this.bindings.forEach((binding)=>this.delegate.bindingDisconnected(binding, true));
        this.bindingsByAction.clear();
    }
    parseValueForToken(token) {
        const action = Action.forToken(token, this.schema);
        if (action.identifier == this.identifier) return action;
    }
    elementMatchedValue(element, action) {
        this.connectAction(action);
    }
    elementUnmatchedValue(element, action) {
        this.disconnectAction(action);
    }
}
class ValueObserver {
    constructor(context, receiver){
        this.context = context;
        this.receiver = receiver;
        this.stringMapObserver = new StringMapObserver(this.element, this);
        this.valueDescriptorMap = this.controller.valueDescriptorMap;
    }
    start() {
        this.stringMapObserver.start();
        this.invokeChangedCallbacksForDefaultValues();
    }
    stop() {
        this.stringMapObserver.stop();
    }
    get element() {
        return this.context.element;
    }
    get controller() {
        return this.context.controller;
    }
    getStringMapKeyForAttribute(attributeName) {
        if (attributeName in this.valueDescriptorMap) return this.valueDescriptorMap[attributeName].name;
    }
    stringMapKeyAdded(key, attributeName) {
        const descriptor = this.valueDescriptorMap[attributeName];
        if (!this.hasValue(key)) this.invokeChangedCallback(key, descriptor.writer(this.receiver[key]), descriptor.writer(descriptor.defaultValue));
    }
    stringMapValueChanged(value, name, oldValue) {
        const descriptor = this.valueDescriptorNameMap[name];
        if (value === null) return;
        if (oldValue === null) oldValue = descriptor.writer(descriptor.defaultValue);
        this.invokeChangedCallback(name, value, oldValue);
    }
    stringMapKeyRemoved(key, attributeName, oldValue) {
        const descriptor = this.valueDescriptorNameMap[key];
        if (this.hasValue(key)) this.invokeChangedCallback(key, descriptor.writer(this.receiver[key]), oldValue);
        else this.invokeChangedCallback(key, descriptor.writer(descriptor.defaultValue), oldValue);
    }
    invokeChangedCallbacksForDefaultValues() {
        for (const { key, name, defaultValue, writer } of this.valueDescriptors)if (defaultValue != undefined && !this.controller.data.has(key)) this.invokeChangedCallback(name, writer(defaultValue), undefined);
    }
    invokeChangedCallback(name, rawValue, rawOldValue) {
        const changedMethodName = `${name}Changed`;
        const changedMethod = this.receiver[changedMethodName];
        if (typeof changedMethod == "function") {
            const descriptor = this.valueDescriptorNameMap[name];
            try {
                const value = descriptor.reader(rawValue);
                let oldValue = rawOldValue;
                if (rawOldValue) oldValue = descriptor.reader(rawOldValue);
                changedMethod.call(this.receiver, value, oldValue);
            } catch (error) {
                if (error instanceof TypeError) error.message = `Stimulus Value "${this.context.identifier}.${descriptor.name}" - ${error.message}`;
                throw error;
            }
        }
    }
    get valueDescriptors() {
        const { valueDescriptorMap } = this;
        return Object.keys(valueDescriptorMap).map((key)=>valueDescriptorMap[key]);
    }
    get valueDescriptorNameMap() {
        const descriptors = {};
        Object.keys(this.valueDescriptorMap).forEach((key)=>{
            const descriptor = this.valueDescriptorMap[key];
            descriptors[descriptor.name] = descriptor;
        });
        return descriptors;
    }
    hasValue(attributeName) {
        const descriptor = this.valueDescriptorNameMap[attributeName];
        const hasMethodName = `has${capitalize(descriptor.name)}`;
        return this.receiver[hasMethodName];
    }
}
class TargetObserver {
    constructor(context, delegate){
        this.context = context;
        this.delegate = delegate;
        this.targetsByName = new Multimap();
    }
    start() {
        if (!this.tokenListObserver) {
            this.tokenListObserver = new TokenListObserver(this.element, this.attributeName, this);
            this.tokenListObserver.start();
        }
    }
    stop() {
        if (this.tokenListObserver) {
            this.disconnectAllTargets();
            this.tokenListObserver.stop();
            delete this.tokenListObserver;
        }
    }
    tokenMatched({ element, content: name }) {
        if (this.scope.containsElement(element)) this.connectTarget(element, name);
    }
    tokenUnmatched({ element, content: name }) {
        this.disconnectTarget(element, name);
    }
    connectTarget(element, name) {
        var _a;
        if (!this.targetsByName.has(name, element)) {
            this.targetsByName.add(name, element);
            (_a = this.tokenListObserver) === null || _a === void 0 || _a.pause(()=>this.delegate.targetConnected(element, name));
        }
    }
    disconnectTarget(element, name) {
        var _a;
        if (this.targetsByName.has(name, element)) {
            this.targetsByName.delete(name, element);
            (_a = this.tokenListObserver) === null || _a === void 0 || _a.pause(()=>this.delegate.targetDisconnected(element, name));
        }
    }
    disconnectAllTargets() {
        for (const name of this.targetsByName.keys)for (const element of this.targetsByName.getValuesForKey(name))this.disconnectTarget(element, name);
    }
    get attributeName() {
        return `data-${this.context.identifier}-target`;
    }
    get element() {
        return this.context.element;
    }
    get scope() {
        return this.context.scope;
    }
}
function readInheritableStaticArrayValues(constructor, propertyName) {
    const ancestors = getAncestorsForConstructor(constructor);
    return Array.from(ancestors.reduce((values, constructor)=>{
        getOwnStaticArrayValues(constructor, propertyName).forEach((name)=>values.add(name));
        return values;
    }, new Set()));
}
function readInheritableStaticObjectPairs(constructor, propertyName) {
    const ancestors = getAncestorsForConstructor(constructor);
    return ancestors.reduce((pairs, constructor)=>{
        pairs.push(...getOwnStaticObjectPairs(constructor, propertyName));
        return pairs;
    }, []);
}
function getAncestorsForConstructor(constructor) {
    const ancestors = [];
    while(constructor){
        ancestors.push(constructor);
        constructor = Object.getPrototypeOf(constructor);
    }
    return ancestors.reverse();
}
function getOwnStaticArrayValues(constructor, propertyName) {
    const definition = constructor[propertyName];
    return Array.isArray(definition) ? definition : [];
}
function getOwnStaticObjectPairs(constructor, propertyName) {
    const definition = constructor[propertyName];
    return definition ? Object.keys(definition).map((key)=>[
            key,
            definition[key]
        ]) : [];
}
class OutletObserver {
    constructor(context, delegate){
        this.started = false;
        this.context = context;
        this.delegate = delegate;
        this.outletsByName = new Multimap();
        this.outletElementsByName = new Multimap();
        this.selectorObserverMap = new Map();
        this.attributeObserverMap = new Map();
    }
    start() {
        if (!this.started) {
            this.outletDefinitions.forEach((outletName)=>{
                this.setupSelectorObserverForOutlet(outletName);
                this.setupAttributeObserverForOutlet(outletName);
            });
            this.started = true;
            this.dependentContexts.forEach((context)=>context.refresh());
        }
    }
    refresh() {
        this.selectorObserverMap.forEach((observer)=>observer.refresh());
        this.attributeObserverMap.forEach((observer)=>observer.refresh());
    }
    stop() {
        if (this.started) {
            this.started = false;
            this.disconnectAllOutlets();
            this.stopSelectorObservers();
            this.stopAttributeObservers();
        }
    }
    stopSelectorObservers() {
        if (this.selectorObserverMap.size > 0) {
            this.selectorObserverMap.forEach((observer)=>observer.stop());
            this.selectorObserverMap.clear();
        }
    }
    stopAttributeObservers() {
        if (this.attributeObserverMap.size > 0) {
            this.attributeObserverMap.forEach((observer)=>observer.stop());
            this.attributeObserverMap.clear();
        }
    }
    selectorMatched(element, _selector, { outletName }) {
        const outlet = this.getOutlet(element, outletName);
        if (outlet) this.connectOutlet(outlet, element, outletName);
    }
    selectorUnmatched(element, _selector, { outletName }) {
        const outlet = this.getOutletFromMap(element, outletName);
        if (outlet) this.disconnectOutlet(outlet, element, outletName);
    }
    selectorMatchElement(element, { outletName }) {
        const selector = this.selector(outletName);
        const hasOutlet = this.hasOutlet(element, outletName);
        const hasOutletController = element.matches(`[${this.schema.controllerAttribute}~=${outletName}]`);
        if (selector) return hasOutlet && hasOutletController && element.matches(selector);
        else return false;
    }
    elementMatchedAttribute(_element, attributeName) {
        const outletName = this.getOutletNameFromOutletAttributeName(attributeName);
        if (outletName) this.updateSelectorObserverForOutlet(outletName);
    }
    elementAttributeValueChanged(_element, attributeName) {
        const outletName = this.getOutletNameFromOutletAttributeName(attributeName);
        if (outletName) this.updateSelectorObserverForOutlet(outletName);
    }
    elementUnmatchedAttribute(_element, attributeName) {
        const outletName = this.getOutletNameFromOutletAttributeName(attributeName);
        if (outletName) this.updateSelectorObserverForOutlet(outletName);
    }
    connectOutlet(outlet, element, outletName) {
        var _a;
        if (!this.outletElementsByName.has(outletName, element)) {
            this.outletsByName.add(outletName, outlet);
            this.outletElementsByName.add(outletName, element);
            (_a = this.selectorObserverMap.get(outletName)) === null || _a === void 0 || _a.pause(()=>this.delegate.outletConnected(outlet, element, outletName));
        }
    }
    disconnectOutlet(outlet, element, outletName) {
        var _a;
        if (this.outletElementsByName.has(outletName, element)) {
            this.outletsByName.delete(outletName, outlet);
            this.outletElementsByName.delete(outletName, element);
            (_a = this.selectorObserverMap.get(outletName)) === null || _a === void 0 || _a.pause(()=>this.delegate.outletDisconnected(outlet, element, outletName));
        }
    }
    disconnectAllOutlets() {
        for (const outletName of this.outletElementsByName.keys){
            for (const element of this.outletElementsByName.getValuesForKey(outletName))for (const outlet of this.outletsByName.getValuesForKey(outletName))this.disconnectOutlet(outlet, element, outletName);
        }
    }
    updateSelectorObserverForOutlet(outletName) {
        const observer = this.selectorObserverMap.get(outletName);
        if (observer) observer.selector = this.selector(outletName);
    }
    setupSelectorObserverForOutlet(outletName) {
        const selector = this.selector(outletName);
        const selectorObserver = new SelectorObserver(document.body, selector, this, {
            outletName
        });
        this.selectorObserverMap.set(outletName, selectorObserver);
        selectorObserver.start();
    }
    setupAttributeObserverForOutlet(outletName) {
        const attributeName = this.attributeNameForOutletName(outletName);
        const attributeObserver = new AttributeObserver(this.scope.element, attributeName, this);
        this.attributeObserverMap.set(outletName, attributeObserver);
        attributeObserver.start();
    }
    selector(outletName) {
        return this.scope.outlets.getSelectorForOutletName(outletName);
    }
    attributeNameForOutletName(outletName) {
        return this.scope.schema.outletAttributeForScope(this.identifier, outletName);
    }
    getOutletNameFromOutletAttributeName(attributeName) {
        return this.outletDefinitions.find((outletName)=>this.attributeNameForOutletName(outletName) === attributeName);
    }
    get outletDependencies() {
        const dependencies = new Multimap();
        this.router.modules.forEach((module)=>{
            const constructor = module.definition.controllerConstructor;
            const outlets = readInheritableStaticArrayValues(constructor, "outlets");
            outlets.forEach((outlet)=>dependencies.add(outlet, module.identifier));
        });
        return dependencies;
    }
    get outletDefinitions() {
        return this.outletDependencies.getKeysForValue(this.identifier);
    }
    get dependentControllerIdentifiers() {
        return this.outletDependencies.getValuesForKey(this.identifier);
    }
    get dependentContexts() {
        const identifiers = this.dependentControllerIdentifiers;
        return this.router.contexts.filter((context)=>identifiers.includes(context.identifier));
    }
    hasOutlet(element, outletName) {
        return !!this.getOutlet(element, outletName) || !!this.getOutletFromMap(element, outletName);
    }
    getOutlet(element, outletName) {
        return this.application.getControllerForElementAndIdentifier(element, outletName);
    }
    getOutletFromMap(element, outletName) {
        return this.outletsByName.getValuesForKey(outletName).find((outlet)=>outlet.element === element);
    }
    get scope() {
        return this.context.scope;
    }
    get schema() {
        return this.context.schema;
    }
    get identifier() {
        return this.context.identifier;
    }
    get application() {
        return this.context.application;
    }
    get router() {
        return this.application.router;
    }
}
class Context {
    constructor(module, scope){
        this.logDebugActivity = (functionName, detail = {})=>{
            const { identifier, controller, element } = this;
            detail = Object.assign({
                identifier,
                controller,
                element
            }, detail);
            this.application.logDebugActivity(this.identifier, functionName, detail);
        };
        this.module = module;
        this.scope = scope;
        this.controller = new module.controllerConstructor(this);
        this.bindingObserver = new BindingObserver(this, this.dispatcher);
        this.valueObserver = new ValueObserver(this, this.controller);
        this.targetObserver = new TargetObserver(this, this);
        this.outletObserver = new OutletObserver(this, this);
        try {
            this.controller.initialize();
            this.logDebugActivity("initialize");
        } catch (error) {
            this.handleError(error, "initializing controller");
        }
    }
    connect() {
        this.bindingObserver.start();
        this.valueObserver.start();
        this.targetObserver.start();
        this.outletObserver.start();
        try {
            this.controller.connect();
            this.logDebugActivity("connect");
        } catch (error) {
            this.handleError(error, "connecting controller");
        }
    }
    refresh() {
        this.outletObserver.refresh();
    }
    disconnect() {
        try {
            this.controller.disconnect();
            this.logDebugActivity("disconnect");
        } catch (error) {
            this.handleError(error, "disconnecting controller");
        }
        this.outletObserver.stop();
        this.targetObserver.stop();
        this.valueObserver.stop();
        this.bindingObserver.stop();
    }
    get application() {
        return this.module.application;
    }
    get identifier() {
        return this.module.identifier;
    }
    get schema() {
        return this.application.schema;
    }
    get dispatcher() {
        return this.application.dispatcher;
    }
    get element() {
        return this.scope.element;
    }
    get parentElement() {
        return this.element.parentElement;
    }
    handleError(error, message, detail = {}) {
        const { identifier, controller, element } = this;
        detail = Object.assign({
            identifier,
            controller,
            element
        }, detail);
        this.application.handleError(error, `Error ${message}`, detail);
    }
    targetConnected(element, name) {
        this.invokeControllerMethod(`${name}TargetConnected`, element);
    }
    targetDisconnected(element, name) {
        this.invokeControllerMethod(`${name}TargetDisconnected`, element);
    }
    outletConnected(outlet, element, name) {
        this.invokeControllerMethod(`${namespaceCamelize(name)}OutletConnected`, outlet, element);
    }
    outletDisconnected(outlet, element, name) {
        this.invokeControllerMethod(`${namespaceCamelize(name)}OutletDisconnected`, outlet, element);
    }
    invokeControllerMethod(methodName, ...args) {
        const controller = this.controller;
        if (typeof controller[methodName] == "function") controller[methodName](...args);
    }
}
function bless(constructor) {
    return shadow(constructor, getBlessedProperties(constructor));
}
function shadow(constructor, properties) {
    const shadowConstructor = extend(constructor);
    const shadowProperties = getShadowProperties(constructor.prototype, properties);
    Object.defineProperties(shadowConstructor.prototype, shadowProperties);
    return shadowConstructor;
}
function getBlessedProperties(constructor) {
    const blessings = readInheritableStaticArrayValues(constructor, "blessings");
    return blessings.reduce((blessedProperties, blessing)=>{
        const properties = blessing(constructor);
        for(const key in properties){
            const descriptor = blessedProperties[key] || {};
            blessedProperties[key] = Object.assign(descriptor, properties[key]);
        }
        return blessedProperties;
    }, {});
}
function getShadowProperties(prototype, properties) {
    return getOwnKeys(properties).reduce((shadowProperties, key)=>{
        const descriptor = getShadowedDescriptor(prototype, properties, key);
        if (descriptor) Object.assign(shadowProperties, {
            [key]: descriptor
        });
        return shadowProperties;
    }, {});
}
function getShadowedDescriptor(prototype, properties, key) {
    const shadowingDescriptor = Object.getOwnPropertyDescriptor(prototype, key);
    const shadowedByValue = shadowingDescriptor && "value" in shadowingDescriptor;
    if (!shadowedByValue) {
        const descriptor = Object.getOwnPropertyDescriptor(properties, key).value;
        if (shadowingDescriptor) {
            descriptor.get = shadowingDescriptor.get || descriptor.get;
            descriptor.set = shadowingDescriptor.set || descriptor.set;
        }
        return descriptor;
    }
}
const getOwnKeys = (()=>{
    if (typeof Object.getOwnPropertySymbols == "function") return (object)=>[
            ...Object.getOwnPropertyNames(object),
            ...Object.getOwnPropertySymbols(object)
        ];
    else return Object.getOwnPropertyNames;
})();
const extend = (()=>{
    function extendWithReflect(constructor) {
        function extended() {
            return Reflect.construct(constructor, arguments, new.target);
        }
        extended.prototype = Object.create(constructor.prototype, {
            constructor: {
                value: extended
            }
        });
        Reflect.setPrototypeOf(extended, constructor);
        return extended;
    }
    function testReflectExtension() {
        const a = function() {
            this.a.call(this);
        };
        const b = extendWithReflect(a);
        b.prototype.a = function() {};
        return new b();
    }
    try {
        testReflectExtension();
        return extendWithReflect;
    } catch (error) {
        return (constructor)=>class extended extends constructor {
            };
    }
})();
function blessDefinition(definition) {
    return {
        identifier: definition.identifier,
        controllerConstructor: bless(definition.controllerConstructor)
    };
}
class Module {
    constructor(application, definition){
        this.application = application;
        this.definition = blessDefinition(definition);
        this.contextsByScope = new WeakMap();
        this.connectedContexts = new Set();
    }
    get identifier() {
        return this.definition.identifier;
    }
    get controllerConstructor() {
        return this.definition.controllerConstructor;
    }
    get contexts() {
        return Array.from(this.connectedContexts);
    }
    connectContextForScope(scope) {
        const context = this.fetchContextForScope(scope);
        this.connectedContexts.add(context);
        context.connect();
    }
    disconnectContextForScope(scope) {
        const context = this.contextsByScope.get(scope);
        if (context) {
            this.connectedContexts.delete(context);
            context.disconnect();
        }
    }
    fetchContextForScope(scope) {
        let context = this.contextsByScope.get(scope);
        if (!context) {
            context = new Context(this, scope);
            this.contextsByScope.set(scope, context);
        }
        return context;
    }
}
class ClassMap {
    constructor(scope){
        this.scope = scope;
    }
    has(name) {
        return this.data.has(this.getDataKey(name));
    }
    get(name) {
        return this.getAll(name)[0];
    }
    getAll(name) {
        const tokenString = this.data.get(this.getDataKey(name)) || "";
        return tokenize(tokenString);
    }
    getAttributeName(name) {
        return this.data.getAttributeNameForKey(this.getDataKey(name));
    }
    getDataKey(name) {
        return `${name}-class`;
    }
    get data() {
        return this.scope.data;
    }
}
class DataMap {
    constructor(scope){
        this.scope = scope;
    }
    get element() {
        return this.scope.element;
    }
    get identifier() {
        return this.scope.identifier;
    }
    get(key) {
        const name = this.getAttributeNameForKey(key);
        return this.element.getAttribute(name);
    }
    set(key, value) {
        const name = this.getAttributeNameForKey(key);
        this.element.setAttribute(name, value);
        return this.get(key);
    }
    has(key) {
        const name = this.getAttributeNameForKey(key);
        return this.element.hasAttribute(name);
    }
    delete(key) {
        if (this.has(key)) {
            const name = this.getAttributeNameForKey(key);
            this.element.removeAttribute(name);
            return true;
        } else return false;
    }
    getAttributeNameForKey(key) {
        return `data-${this.identifier}-${dasherize(key)}`;
    }
}
class Guide {
    constructor(logger){
        this.warnedKeysByObject = new WeakMap();
        this.logger = logger;
    }
    warn(object, key, message) {
        let warnedKeys = this.warnedKeysByObject.get(object);
        if (!warnedKeys) {
            warnedKeys = new Set();
            this.warnedKeysByObject.set(object, warnedKeys);
        }
        if (!warnedKeys.has(key)) {
            warnedKeys.add(key);
            this.logger.warn(message, object);
        }
    }
}
function attributeValueContainsToken(attributeName, token) {
    return `[${attributeName}~="${token}"]`;
}
class TargetSet {
    constructor(scope){
        this.scope = scope;
    }
    get element() {
        return this.scope.element;
    }
    get identifier() {
        return this.scope.identifier;
    }
    get schema() {
        return this.scope.schema;
    }
    has(targetName) {
        return this.find(targetName) != null;
    }
    find(...targetNames) {
        return targetNames.reduce((target, targetName)=>target || this.findTarget(targetName) || this.findLegacyTarget(targetName), undefined);
    }
    findAll(...targetNames) {
        return targetNames.reduce((targets, targetName)=>[
                ...targets,
                ...this.findAllTargets(targetName),
                ...this.findAllLegacyTargets(targetName)
            ], []);
    }
    findTarget(targetName) {
        const selector = this.getSelectorForTargetName(targetName);
        return this.scope.findElement(selector);
    }
    findAllTargets(targetName) {
        const selector = this.getSelectorForTargetName(targetName);
        return this.scope.findAllElements(selector);
    }
    getSelectorForTargetName(targetName) {
        const attributeName = this.schema.targetAttributeForScope(this.identifier);
        return attributeValueContainsToken(attributeName, targetName);
    }
    findLegacyTarget(targetName) {
        const selector = this.getLegacySelectorForTargetName(targetName);
        return this.deprecate(this.scope.findElement(selector), targetName);
    }
    findAllLegacyTargets(targetName) {
        const selector = this.getLegacySelectorForTargetName(targetName);
        return this.scope.findAllElements(selector).map((element)=>this.deprecate(element, targetName));
    }
    getLegacySelectorForTargetName(targetName) {
        const targetDescriptor = `${this.identifier}.${targetName}`;
        return attributeValueContainsToken(this.schema.targetAttribute, targetDescriptor);
    }
    deprecate(element, targetName) {
        if (element) {
            const { identifier } = this;
            const attributeName = this.schema.targetAttribute;
            const revisedAttributeName = this.schema.targetAttributeForScope(identifier);
            this.guide.warn(element, `target:${targetName}`, `Please replace ${attributeName}="${identifier}.${targetName}" with ${revisedAttributeName}="${targetName}". ` + `The ${attributeName} attribute is deprecated and will be removed in a future version of Stimulus.`);
        }
        return element;
    }
    get guide() {
        return this.scope.guide;
    }
}
class OutletSet {
    constructor(scope, controllerElement){
        this.scope = scope;
        this.controllerElement = controllerElement;
    }
    get element() {
        return this.scope.element;
    }
    get identifier() {
        return this.scope.identifier;
    }
    get schema() {
        return this.scope.schema;
    }
    has(outletName) {
        return this.find(outletName) != null;
    }
    find(...outletNames) {
        return outletNames.reduce((outlet, outletName)=>outlet || this.findOutlet(outletName), undefined);
    }
    findAll(...outletNames) {
        return outletNames.reduce((outlets, outletName)=>[
                ...outlets,
                ...this.findAllOutlets(outletName)
            ], []);
    }
    getSelectorForOutletName(outletName) {
        const attributeName = this.schema.outletAttributeForScope(this.identifier, outletName);
        return this.controllerElement.getAttribute(attributeName);
    }
    findOutlet(outletName) {
        const selector = this.getSelectorForOutletName(outletName);
        if (selector) return this.findElement(selector, outletName);
    }
    findAllOutlets(outletName) {
        const selector = this.getSelectorForOutletName(outletName);
        return selector ? this.findAllElements(selector, outletName) : [];
    }
    findElement(selector, outletName) {
        const elements = this.scope.queryElements(selector);
        return elements.filter((element)=>this.matchesElement(element, selector, outletName))[0];
    }
    findAllElements(selector, outletName) {
        const elements = this.scope.queryElements(selector);
        return elements.filter((element)=>this.matchesElement(element, selector, outletName));
    }
    matchesElement(element, selector, outletName) {
        const controllerAttribute = element.getAttribute(this.scope.schema.controllerAttribute) || "";
        return element.matches(selector) && controllerAttribute.split(" ").includes(outletName);
    }
}
class Scope {
    constructor(schema, element, identifier, logger){
        this.targets = new TargetSet(this);
        this.classes = new ClassMap(this);
        this.data = new DataMap(this);
        this.containsElement = (element)=>{
            return element.closest(this.controllerSelector) === this.element;
        };
        this.schema = schema;
        this.element = element;
        this.identifier = identifier;
        this.guide = new Guide(logger);
        this.outlets = new OutletSet(this.documentScope, element);
    }
    findElement(selector) {
        return this.element.matches(selector) ? this.element : this.queryElements(selector).find(this.containsElement);
    }
    findAllElements(selector) {
        return [
            ...this.element.matches(selector) ? [
                this.element
            ] : [],
            ...this.queryElements(selector).filter(this.containsElement)
        ];
    }
    queryElements(selector) {
        return Array.from(this.element.querySelectorAll(selector));
    }
    get controllerSelector() {
        return attributeValueContainsToken(this.schema.controllerAttribute, this.identifier);
    }
    get isDocumentScope() {
        return this.element === document.documentElement;
    }
    get documentScope() {
        return this.isDocumentScope ? this : new Scope(this.schema, document.documentElement, this.identifier, this.guide.logger);
    }
}
class ScopeObserver {
    constructor(element, schema, delegate){
        this.element = element;
        this.schema = schema;
        this.delegate = delegate;
        this.valueListObserver = new ValueListObserver(this.element, this.controllerAttribute, this);
        this.scopesByIdentifierByElement = new WeakMap();
        this.scopeReferenceCounts = new WeakMap();
    }
    start() {
        this.valueListObserver.start();
    }
    stop() {
        this.valueListObserver.stop();
    }
    get controllerAttribute() {
        return this.schema.controllerAttribute;
    }
    parseValueForToken(token) {
        const { element, content: identifier } = token;
        return this.parseValueForElementAndIdentifier(element, identifier);
    }
    parseValueForElementAndIdentifier(element, identifier) {
        const scopesByIdentifier = this.fetchScopesByIdentifierForElement(element);
        let scope = scopesByIdentifier.get(identifier);
        if (!scope) {
            scope = this.delegate.createScopeForElementAndIdentifier(element, identifier);
            scopesByIdentifier.set(identifier, scope);
        }
        return scope;
    }
    elementMatchedValue(element, value) {
        const referenceCount = (this.scopeReferenceCounts.get(value) || 0) + 1;
        this.scopeReferenceCounts.set(value, referenceCount);
        if (referenceCount == 1) this.delegate.scopeConnected(value);
    }
    elementUnmatchedValue(element, value) {
        const referenceCount = this.scopeReferenceCounts.get(value);
        if (referenceCount) {
            this.scopeReferenceCounts.set(value, referenceCount - 1);
            if (referenceCount == 1) this.delegate.scopeDisconnected(value);
        }
    }
    fetchScopesByIdentifierForElement(element) {
        let scopesByIdentifier = this.scopesByIdentifierByElement.get(element);
        if (!scopesByIdentifier) {
            scopesByIdentifier = new Map();
            this.scopesByIdentifierByElement.set(element, scopesByIdentifier);
        }
        return scopesByIdentifier;
    }
}
class Router {
    constructor(application){
        this.application = application;
        this.scopeObserver = new ScopeObserver(this.element, this.schema, this);
        this.scopesByIdentifier = new Multimap();
        this.modulesByIdentifier = new Map();
    }
    get element() {
        return this.application.element;
    }
    get schema() {
        return this.application.schema;
    }
    get logger() {
        return this.application.logger;
    }
    get controllerAttribute() {
        return this.schema.controllerAttribute;
    }
    get modules() {
        return Array.from(this.modulesByIdentifier.values());
    }
    get contexts() {
        return this.modules.reduce((contexts, module)=>contexts.concat(module.contexts), []);
    }
    start() {
        this.scopeObserver.start();
    }
    stop() {
        this.scopeObserver.stop();
    }
    loadDefinition(definition) {
        this.unloadIdentifier(definition.identifier);
        const module = new Module(this.application, definition);
        this.connectModule(module);
        const afterLoad = definition.controllerConstructor.afterLoad;
        if (afterLoad) afterLoad.call(definition.controllerConstructor, definition.identifier, this.application);
    }
    unloadIdentifier(identifier) {
        const module = this.modulesByIdentifier.get(identifier);
        if (module) this.disconnectModule(module);
    }
    getContextForElementAndIdentifier(element, identifier) {
        const module = this.modulesByIdentifier.get(identifier);
        if (module) return module.contexts.find((context)=>context.element == element);
    }
    proposeToConnectScopeForElementAndIdentifier(element, identifier) {
        const scope = this.scopeObserver.parseValueForElementAndIdentifier(element, identifier);
        if (scope) this.scopeObserver.elementMatchedValue(scope.element, scope);
        else console.error(`Couldn't find or create scope for identifier: "${identifier}" and element:`, element);
    }
    handleError(error, message, detail) {
        this.application.handleError(error, message, detail);
    }
    createScopeForElementAndIdentifier(element, identifier) {
        return new Scope(this.schema, element, identifier, this.logger);
    }
    scopeConnected(scope) {
        this.scopesByIdentifier.add(scope.identifier, scope);
        const module = this.modulesByIdentifier.get(scope.identifier);
        if (module) module.connectContextForScope(scope);
    }
    scopeDisconnected(scope) {
        this.scopesByIdentifier.delete(scope.identifier, scope);
        const module = this.modulesByIdentifier.get(scope.identifier);
        if (module) module.disconnectContextForScope(scope);
    }
    connectModule(module) {
        this.modulesByIdentifier.set(module.identifier, module);
        const scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
        scopes.forEach((scope)=>module.connectContextForScope(scope));
    }
    disconnectModule(module) {
        this.modulesByIdentifier.delete(module.identifier);
        const scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
        scopes.forEach((scope)=>module.disconnectContextForScope(scope));
    }
}
const defaultSchema = {
    controllerAttribute: "data-controller",
    actionAttribute: "data-action",
    targetAttribute: "data-target",
    targetAttributeForScope: (identifier)=>`data-${identifier}-target`,
    outletAttributeForScope: (identifier, outlet)=>`data-${identifier}-${outlet}-outlet`,
    keyMappings: Object.assign(Object.assign({
        enter: "Enter",
        tab: "Tab",
        esc: "Escape",
        space: " ",
        up: "ArrowUp",
        down: "ArrowDown",
        left: "ArrowLeft",
        right: "ArrowRight",
        home: "Home",
        end: "End",
        page_up: "PageUp",
        page_down: "PageDown"
    }, objectFromEntries("abcdefghijklmnopqrstuvwxyz".split("").map((c)=>[
            c,
            c
        ]))), objectFromEntries("0123456789".split("").map((n)=>[
            n,
            n
        ])))
};
function objectFromEntries(array) {
    return array.reduce((memo, [k, v])=>Object.assign(Object.assign({}, memo), {
            [k]: v
        }), {});
}
class Application {
    constructor(element = document.documentElement, schema = defaultSchema){
        this.logger = console;
        this.debug = false;
        this.logDebugActivity = (identifier, functionName, detail = {})=>{
            if (this.debug) this.logFormattedMessage(identifier, functionName, detail);
        };
        this.element = element;
        this.schema = schema;
        this.dispatcher = new Dispatcher(this);
        this.router = new Router(this);
        this.actionDescriptorFilters = Object.assign({}, defaultActionDescriptorFilters);
    }
    static start(element, schema) {
        const application = new this(element, schema);
        application.start();
        return application;
    }
    async start() {
        await domReady();
        this.logDebugActivity("application", "starting");
        this.dispatcher.start();
        this.router.start();
        this.logDebugActivity("application", "start");
    }
    stop() {
        this.logDebugActivity("application", "stopping");
        this.dispatcher.stop();
        this.router.stop();
        this.logDebugActivity("application", "stop");
    }
    register(identifier, controllerConstructor) {
        this.load({
            identifier,
            controllerConstructor
        });
    }
    registerActionOption(name, filter) {
        this.actionDescriptorFilters[name] = filter;
    }
    load(head, ...rest) {
        const definitions = Array.isArray(head) ? head : [
            head,
            ...rest
        ];
        definitions.forEach((definition)=>{
            if (definition.controllerConstructor.shouldLoad) this.router.loadDefinition(definition);
        });
    }
    unload(head, ...rest) {
        const identifiers = Array.isArray(head) ? head : [
            head,
            ...rest
        ];
        identifiers.forEach((identifier)=>this.router.unloadIdentifier(identifier));
    }
    get controllers() {
        return this.router.contexts.map((context)=>context.controller);
    }
    getControllerForElementAndIdentifier(element, identifier) {
        const context = this.router.getContextForElementAndIdentifier(element, identifier);
        return context ? context.controller : null;
    }
    handleError(error, message, detail) {
        var _a;
        this.logger.error(`%s\n\n%o\n\n%o`, message, error, detail);
        (_a = window.onerror) === null || _a === void 0 || _a.call(window, message, "", 0, 0, error);
    }
    logFormattedMessage(identifier, functionName, detail = {}) {
        detail = Object.assign({
            application: this
        }, detail);
        this.logger.groupCollapsed(`${identifier} #${functionName}`);
        this.logger.log("details:", Object.assign({}, detail));
        this.logger.groupEnd();
    }
}
function domReady() {
    return new Promise((resolve)=>{
        if (document.readyState == "loading") document.addEventListener("DOMContentLoaded", ()=>resolve());
        else resolve();
    });
}
function ClassPropertiesBlessing(constructor) {
    const classes = readInheritableStaticArrayValues(constructor, "classes");
    return classes.reduce((properties, classDefinition)=>{
        return Object.assign(properties, propertiesForClassDefinition(classDefinition));
    }, {});
}
function propertiesForClassDefinition(key) {
    return {
        [`${key}Class`]: {
            get () {
                const { classes } = this;
                if (classes.has(key)) return classes.get(key);
                else {
                    const attribute = classes.getAttributeName(key);
                    throw new Error(`Missing attribute "${attribute}"`);
                }
            }
        },
        [`${key}Classes`]: {
            get () {
                return this.classes.getAll(key);
            }
        },
        [`has${capitalize(key)}Class`]: {
            get () {
                return this.classes.has(key);
            }
        }
    };
}
function OutletPropertiesBlessing(constructor) {
    const outlets = readInheritableStaticArrayValues(constructor, "outlets");
    return outlets.reduce((properties, outletDefinition)=>{
        return Object.assign(properties, propertiesForOutletDefinition(outletDefinition));
    }, {});
}
function getOutletController(controller, element, identifier) {
    return controller.application.getControllerForElementAndIdentifier(element, identifier);
}
function getControllerAndEnsureConnectedScope(controller, element, outletName) {
    let outletController = getOutletController(controller, element, outletName);
    if (outletController) return outletController;
    controller.application.router.proposeToConnectScopeForElementAndIdentifier(element, outletName);
    outletController = getOutletController(controller, element, outletName);
    if (outletController) return outletController;
}
function propertiesForOutletDefinition(name) {
    const camelizedName = namespaceCamelize(name);
    return {
        [`${camelizedName}Outlet`]: {
            get () {
                const outletElement = this.outlets.find(name);
                const selector = this.outlets.getSelectorForOutletName(name);
                if (outletElement) {
                    const outletController = getControllerAndEnsureConnectedScope(this, outletElement, name);
                    if (outletController) return outletController;
                    throw new Error(`The provided outlet element is missing an outlet controller "${name}" instance for host controller "${this.identifier}"`);
                }
                throw new Error(`Missing outlet element "${name}" for host controller "${this.identifier}". Stimulus couldn't find a matching outlet element using selector "${selector}".`);
            }
        },
        [`${camelizedName}Outlets`]: {
            get () {
                const outlets = this.outlets.findAll(name);
                if (outlets.length > 0) return outlets.map((outletElement)=>{
                    const outletController = getControllerAndEnsureConnectedScope(this, outletElement, name);
                    if (outletController) return outletController;
                    console.warn(`The provided outlet element is missing an outlet controller "${name}" instance for host controller "${this.identifier}"`, outletElement);
                }).filter((controller)=>controller);
                return [];
            }
        },
        [`${camelizedName}OutletElement`]: {
            get () {
                const outletElement = this.outlets.find(name);
                const selector = this.outlets.getSelectorForOutletName(name);
                if (outletElement) return outletElement;
                else throw new Error(`Missing outlet element "${name}" for host controller "${this.identifier}". Stimulus couldn't find a matching outlet element using selector "${selector}".`);
            }
        },
        [`${camelizedName}OutletElements`]: {
            get () {
                return this.outlets.findAll(name);
            }
        },
        [`has${capitalize(camelizedName)}Outlet`]: {
            get () {
                return this.outlets.has(name);
            }
        }
    };
}
function TargetPropertiesBlessing(constructor) {
    const targets = readInheritableStaticArrayValues(constructor, "targets");
    return targets.reduce((properties, targetDefinition)=>{
        return Object.assign(properties, propertiesForTargetDefinition(targetDefinition));
    }, {});
}
function propertiesForTargetDefinition(name) {
    return {
        [`${name}Target`]: {
            get () {
                const target = this.targets.find(name);
                if (target) return target;
                else throw new Error(`Missing target element "${name}" for "${this.identifier}" controller`);
            }
        },
        [`${name}Targets`]: {
            get () {
                return this.targets.findAll(name);
            }
        },
        [`has${capitalize(name)}Target`]: {
            get () {
                return this.targets.has(name);
            }
        }
    };
}
function ValuePropertiesBlessing(constructor) {
    const valueDefinitionPairs = readInheritableStaticObjectPairs(constructor, "values");
    const propertyDescriptorMap = {
        valueDescriptorMap: {
            get () {
                return valueDefinitionPairs.reduce((result, valueDefinitionPair)=>{
                    const valueDescriptor = parseValueDefinitionPair(valueDefinitionPair, this.identifier);
                    const attributeName = this.data.getAttributeNameForKey(valueDescriptor.key);
                    return Object.assign(result, {
                        [attributeName]: valueDescriptor
                    });
                }, {});
            }
        }
    };
    return valueDefinitionPairs.reduce((properties, valueDefinitionPair)=>{
        return Object.assign(properties, propertiesForValueDefinitionPair(valueDefinitionPair));
    }, propertyDescriptorMap);
}
function propertiesForValueDefinitionPair(valueDefinitionPair, controller) {
    const definition = parseValueDefinitionPair(valueDefinitionPair, controller);
    const { key, name, reader: read, writer: write } = definition;
    return {
        [name]: {
            get () {
                const value = this.data.get(key);
                if (value !== null) return read(value);
                else return definition.defaultValue;
            },
            set (value) {
                if (value === undefined) this.data.delete(key);
                else this.data.set(key, write(value));
            }
        },
        [`has${capitalize(name)}`]: {
            get () {
                return this.data.has(key) || definition.hasCustomDefaultValue;
            }
        }
    };
}
function parseValueDefinitionPair([token, typeDefinition], controller) {
    return valueDescriptorForTokenAndTypeDefinition({
        controller,
        token,
        typeDefinition
    });
}
function parseValueTypeConstant(constant) {
    switch(constant){
        case Array:
            return "array";
        case Boolean:
            return "boolean";
        case Number:
            return "number";
        case Object:
            return "object";
        case String:
            return "string";
    }
}
function parseValueTypeDefault(defaultValue) {
    switch(typeof defaultValue){
        case "boolean":
            return "boolean";
        case "number":
            return "number";
        case "string":
            return "string";
    }
    if (Array.isArray(defaultValue)) return "array";
    if (Object.prototype.toString.call(defaultValue) === "[object Object]") return "object";
}
function parseValueTypeObject(payload) {
    const { controller, token, typeObject } = payload;
    const hasType = isSomething(typeObject.type);
    const hasDefault = isSomething(typeObject.default);
    const fullObject = hasType && hasDefault;
    const onlyType = hasType && !hasDefault;
    const onlyDefault = !hasType && hasDefault;
    const typeFromObject = parseValueTypeConstant(typeObject.type);
    const typeFromDefaultValue = parseValueTypeDefault(payload.typeObject.default);
    if (onlyType) return typeFromObject;
    if (onlyDefault) return typeFromDefaultValue;
    if (typeFromObject !== typeFromDefaultValue) {
        const propertyPath = controller ? `${controller}.${token}` : token;
        throw new Error(`The specified default value for the Stimulus Value "${propertyPath}" must match the defined type "${typeFromObject}". The provided default value of "${typeObject.default}" is of type "${typeFromDefaultValue}".`);
    }
    if (fullObject) return typeFromObject;
}
function parseValueTypeDefinition(payload) {
    const { controller, token, typeDefinition } = payload;
    const typeObject = {
        controller,
        token,
        typeObject: typeDefinition
    };
    const typeFromObject = parseValueTypeObject(typeObject);
    const typeFromDefaultValue = parseValueTypeDefault(typeDefinition);
    const typeFromConstant = parseValueTypeConstant(typeDefinition);
    const type = typeFromObject || typeFromDefaultValue || typeFromConstant;
    if (type) return type;
    const propertyPath = controller ? `${controller}.${typeDefinition}` : token;
    throw new Error(`Unknown value type "${propertyPath}" for "${token}" value`);
}
function defaultValueForDefinition(typeDefinition) {
    const constant = parseValueTypeConstant(typeDefinition);
    if (constant) return defaultValuesByType[constant];
    const hasDefault = hasProperty(typeDefinition, "default");
    const hasType = hasProperty(typeDefinition, "type");
    const typeObject = typeDefinition;
    if (hasDefault) return typeObject.default;
    if (hasType) {
        const { type } = typeObject;
        const constantFromType = parseValueTypeConstant(type);
        if (constantFromType) return defaultValuesByType[constantFromType];
    }
    return typeDefinition;
}
function valueDescriptorForTokenAndTypeDefinition(payload) {
    const { token, typeDefinition } = payload;
    const key = `${dasherize(token)}-value`;
    const type = parseValueTypeDefinition(payload);
    return {
        type,
        key,
        name: camelize(key),
        get defaultValue () {
            return defaultValueForDefinition(typeDefinition);
        },
        get hasCustomDefaultValue () {
            return parseValueTypeDefault(typeDefinition) !== undefined;
        },
        reader: readers[type],
        writer: writers[type] || writers.default
    };
}
const defaultValuesByType = {
    get array () {
        return [];
    },
    boolean: false,
    number: 0,
    get object () {
        return {};
    },
    string: ""
};
const readers = {
    array (value) {
        const array = JSON.parse(value);
        if (!Array.isArray(array)) throw new TypeError(`expected value of type "array" but instead got value "${value}" of type "${parseValueTypeDefault(array)}"`);
        return array;
    },
    boolean (value) {
        return !(value == "0" || String(value).toLowerCase() == "false");
    },
    number (value) {
        return Number(value.replace(/_/g, ""));
    },
    object (value) {
        const object = JSON.parse(value);
        if (object === null || typeof object != "object" || Array.isArray(object)) throw new TypeError(`expected value of type "object" but instead got value "${value}" of type "${parseValueTypeDefault(object)}"`);
        return object;
    },
    string (value) {
        return value;
    }
};
const writers = {
    default: writeString,
    array: writeJSON,
    object: writeJSON
};
function writeJSON(value) {
    return JSON.stringify(value);
}
function writeString(value) {
    return `${value}`;
}
class Controller {
    constructor(context){
        this.context = context;
    }
    static get shouldLoad() {
        return true;
    }
    static afterLoad(_identifier, _application) {
        return;
    }
    get application() {
        return this.context.application;
    }
    get scope() {
        return this.context.scope;
    }
    get element() {
        return this.scope.element;
    }
    get identifier() {
        return this.scope.identifier;
    }
    get targets() {
        return this.scope.targets;
    }
    get outlets() {
        return this.scope.outlets;
    }
    get classes() {
        return this.scope.classes;
    }
    get data() {
        return this.scope.data;
    }
    initialize() {}
    connect() {}
    disconnect() {}
    dispatch(eventName, { target = this.element, detail = {}, prefix = this.identifier, bubbles = true, cancelable = true } = {}) {
        const type = prefix ? `${prefix}:${eventName}` : eventName;
        const event = new CustomEvent(type, {
            detail,
            bubbles,
            cancelable
        });
        target.dispatchEvent(event);
        return event;
    }
}
Controller.blessings = [
    ClassPropertiesBlessing,
    TargetPropertiesBlessing,
    ValuePropertiesBlessing,
    OutletPropertiesBlessing
];
Controller.targets = [];
Controller.outlets = [];
Controller.values = {};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"5oERU":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"fL4B3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _stimulus = require("@hotwired/stimulus");
// Connects to data-controller="orbital-dialog"
exports.default = class extends (0, _stimulus.Controller) {
    static values = {
        open: {
            type: Boolean,
            default: false
        },
        dismissible: {
            type: Boolean,
            default: true
        }
    };
    connect() {
        // Open dialog if open value is true
        if (this.openValue) this.open();
        // Handle backdrop clicks for dismissible dialogs
        if (this.dismissibleValue) this.element.addEventListener('click', this.handleBackdropClick.bind(this));
        // Listen for close event
        this.element.addEventListener('close', this.handleClose.bind(this));
    }
    disconnect() {
        this.element.removeEventListener('click', this.handleBackdropClick.bind(this));
        this.element.removeEventListener('close', this.handleClose.bind(this));
    }
    // Actions
    open() {
        this.element.showModal();
        this.element.setAttribute('data-state', 'open');
        // Dispatch custom event
        this.element.dispatchEvent(new CustomEvent('orbital:dialog:opened', {
            bubbles: true,
            detail: {
                dialog: this.element
            }
        }));
    }
    close() {
        this.element.close();
        this.element.setAttribute('data-state', 'closed');
    }
    // Private methods
    handleBackdropClick(event) {
        if (this.dismissibleValue && event.target === this.element) this.close();
    }
    handleClose() {
        this.element.setAttribute('data-state', 'closed');
        // Dispatch custom event
        this.element.dispatchEvent(new CustomEvent('orbital:dialog:closed', {
            bubbles: true,
            detail: {
                dialog: this.element
            }
        }));
    }
};

},{"@hotwired/stimulus":"hVNih","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"8Qta5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _stimulus = require("@hotwired/stimulus");
var _dom = require("@floating-ui/dom");
// Connects to data-controller="orbital-popover"
exports.default = class extends (0, _stimulus.Controller) {
    static values = {
        trigger: {
            type: String,
            default: "click"
        },
        position: {
            type: String,
            default: "auto"
        }
    };
    static targets = [
        "trigger",
        "content"
    ];
    connect() {
        this.boundShow = this.show.bind(this);
        this.boundHide = this.hide.bind(this);
        this.boundDelayedHide = this.delayedHide.bind(this);
        this.boundUpdatePosition = this.updatePosition.bind(this);
        this.hideTimeout = null;
        // Set up trigger based on type
        if (this.triggerValue === "hover") this.setupHoverTrigger();
        else this.setupClickTrigger();
    }
    disconnect() {
        this.teardownTrigger();
        this.teardownPositioning();
        if (this.hideTimeout) clearTimeout(this.hideTimeout);
    }
    // Actions
    async show() {
        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
            this.hideTimeout = null;
        }
        if (this.hasContentTarget) try {
            // Pre-calculate position BEFORE showing popover (eliminates jump)
            const { x, y, placement } = await this.calculatePosition();
            this.contentTarget.style.left = `${x}px`;
            this.contentTarget.style.top = `${y}px`;
            this.contentTarget.dataset.placement = placement;
            // Clear positioned flag
            this.contentTarget.removeAttribute('data-positioned');
            // Now show popover at the correct position
            this.contentTarget.showPopover();
            this.element.setAttribute('data-state', 'open');
            // Mark as positioned
            this.contentTarget.setAttribute('data-positioned', 'true');
            // Set up dynamic repositioning
            this.setupPositioning();
            // Dispatch custom event
            this.element.dispatchEvent(new CustomEvent('orbital:popover:shown', {
                bubbles: true,
                detail: {
                    popover: this.contentTarget
                }
            }));
        } catch (e) {
            // Popover API not supported, fallback gracefully
            console.warn('Popover API not supported:', e);
        }
    }
    hide() {
        if (this.hasContentTarget) try {
            this.contentTarget.hidePopover();
            this.element.setAttribute('data-state', 'closed');
            // Clear positioned flag for next open
            this.contentTarget.removeAttribute('data-positioned');
            // Clean up positioning listeners
            this.teardownPositioning();
            // Dispatch custom event
            this.element.dispatchEvent(new CustomEvent('orbital:popover:hidden', {
                bubbles: true,
                detail: {
                    popover: this.contentTarget
                }
            }));
        } catch (e) {
            // Popover API not supported, fallback gracefully
            console.warn('Popover API not supported:', e);
        }
    }
    delayedHide() {
        // Add small delay before hiding to allow mouse movement between trigger and popover
        this.hideTimeout = setTimeout(()=>{
            this.hide();
        }, 100);
    }
    async toggle() {
        if (this.hasContentTarget) try {
            const isOpen = this.element.getAttribute('data-state') === 'open';
            if (isOpen) {
                this.contentTarget.hidePopover();
                this.element.setAttribute('data-state', 'closed');
                this.contentTarget.removeAttribute('data-positioned');
                this.teardownPositioning();
            } else {
                // Pre-calculate position BEFORE showing popover (eliminates jump)
                const { x, y, placement } = await this.calculatePosition();
                this.contentTarget.style.left = `${x}px`;
                this.contentTarget.style.top = `${y}px`;
                this.contentTarget.dataset.placement = placement;
                // Clear positioned flag
                this.contentTarget.removeAttribute('data-positioned');
                // Now show popover at the correct position
                this.contentTarget.showPopover();
                this.element.setAttribute('data-state', 'open');
                // Mark as positioned
                this.contentTarget.setAttribute('data-positioned', 'true');
                this.setupPositioning();
            }
        } catch (e) {
            // Popover API not supported, fallback gracefully
            console.warn('Popover API not supported:', e);
        }
    }
    // Calculate position without applying it (for pre-positioning)
    async calculatePosition() {
        if (!this.hasTriggerTarget || !this.hasContentTarget) return {
            x: 0,
            y: 0,
            placement: 'bottom'
        };
        const referenceEl = this.triggerTarget;
        const floatingEl = this.contentTarget;
        // Determine middleware based on position value
        let middleware, placement;
        if (this.positionValue === 'auto') // Use autoPlacement for automatic positioning
        middleware = [
            (0, _dom.offset)(8),
            (0, _dom.autoPlacement)({
                allowedPlacements: [
                    'top',
                    'bottom',
                    'left',
                    'right'
                ]
            }),
            (0, _dom.shift)({
                padding: 8
            })
        ];
        else {
            // Use specific placement with flip and shift
            placement = this.positionValue;
            middleware = [
                (0, _dom.offset)(8),
                (0, _dom.flip)(),
                (0, _dom.shift)({
                    padding: 8
                })
            ];
        }
        try {
            const result = await (0, _dom.computePosition)(referenceEl, floatingEl, {
                placement,
                middleware
            });
            return {
                x: result.x,
                y: result.y,
                placement: result.placement || placement || 'bottom'
            };
        } catch (e) {
            console.warn('Failed to compute position:', e);
            return {
                x: 0,
                y: 0,
                placement: 'bottom'
            };
        }
    }
    // Apply position and placement data attribute
    async updatePosition() {
        const { x, y, placement } = await this.calculatePosition();
        if (this.hasContentTarget) {
            Object.assign(this.contentTarget.style, {
                left: `${x}px`,
                top: `${y}px`
            });
            this.contentTarget.dataset.placement = placement;
        }
    }
    setupPositioning() {
        // Reposition on scroll and resize
        window.addEventListener('scroll', this.boundUpdatePosition, true);
        window.addEventListener('resize', this.boundUpdatePosition);
    }
    teardownPositioning() {
        window.removeEventListener('scroll', this.boundUpdatePosition, true);
        window.removeEventListener('resize', this.boundUpdatePosition);
    }
    // Lifecycle callback when position value changes
    positionValueChanged() {
        // Reposition if popover is currently open
        if (this.element.getAttribute('data-state') === 'open') this.updatePosition();
    }
    // Private methods
    setupHoverTrigger() {
        if (this.hasTriggerTarget) {
            this.triggerTarget.addEventListener('mouseenter', this.boundShow);
            this.triggerTarget.addEventListener('mouseleave', this.boundDelayedHide);
        }
        if (this.hasContentTarget) {
            this.contentTarget.addEventListener('mouseenter', this.boundShow);
            this.contentTarget.addEventListener('mouseleave', this.boundDelayedHide);
        }
    }
    setupClickTrigger() {
        // Add explicit click handler as fallback for native popovertarget
        if (this.hasTriggerTarget) this.triggerTarget.addEventListener('click', this.handleClick.bind(this));
        // Also listen for native toggle events from popovertarget
        if (this.hasContentTarget) this.contentTarget.addEventListener('toggle', this.handleToggle.bind(this));
    }
    teardownTrigger() {
        if (this.hasTriggerTarget) {
            this.triggerTarget.removeEventListener('mouseenter', this.boundShow);
            this.triggerTarget.removeEventListener('mouseleave', this.boundDelayedHide);
            this.triggerTarget.removeEventListener('click', this.handleClick.bind(this));
        }
        if (this.hasContentTarget) {
            this.contentTarget.removeEventListener('mouseenter', this.boundShow);
            this.contentTarget.removeEventListener('mouseleave', this.boundDelayedHide);
            this.contentTarget.removeEventListener('toggle', this.handleToggle.bind(this));
        }
    }
    handleClick(event) {
        // Fallback click handler - only trigger if the native popovertarget didn't work
        // Check if the clicked element or its parent has popovertarget attribute
        const target = event.currentTarget;
        const hasPopoverTarget = target.hasAttribute('popovertarget') || target.querySelector('[popovertarget]');
        // If no popovertarget attribute, manually toggle the popover
        if (!hasPopoverTarget && this.hasContentTarget) {
            event.preventDefault();
            this.toggle();
        }
    }
    async handleToggle(event) {
        const state = event.newState // "open" or "closed"
        ;
        this.element.setAttribute('data-state', state);
        // Update position when opened via native toggle event
        if (state === 'open') {
            // Clear positioned flag during position calculation
            this.contentTarget.removeAttribute('data-positioned');
            // Position immediately (popover is already shown by native API)
            const { x, y, placement } = await this.calculatePosition();
            this.contentTarget.style.left = `${x}px`;
            this.contentTarget.style.top = `${y}px`;
            this.contentTarget.dataset.placement = placement;
            // Mark as positioned to trigger CSS visibility
            this.contentTarget.setAttribute('data-positioned', 'true');
            this.setupPositioning();
        } else this.teardownPositioning();
        // Dispatch custom event
        const eventName = state === 'open' ? 'orbital:popover:shown' : 'orbital:popover:hidden';
        this.element.dispatchEvent(new CustomEvent(eventName, {
            bubbles: true,
            detail: {
                popover: this.contentTarget
            }
        }));
    }
};

},{"@hotwired/stimulus":"hVNih","@floating-ui/dom":"33DIn","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"33DIn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getOverflowAncestors", ()=>(0, _dom.getOverflowAncestors));
parcelHelpers.export(exports, "arrow", ()=>arrow);
parcelHelpers.export(exports, "autoPlacement", ()=>autoPlacement);
parcelHelpers.export(exports, "autoUpdate", ()=>autoUpdate);
parcelHelpers.export(exports, "computePosition", ()=>computePosition);
parcelHelpers.export(exports, "detectOverflow", ()=>detectOverflow);
parcelHelpers.export(exports, "flip", ()=>flip);
parcelHelpers.export(exports, "hide", ()=>hide);
parcelHelpers.export(exports, "inline", ()=>inline);
parcelHelpers.export(exports, "limitShift", ()=>limitShift);
parcelHelpers.export(exports, "offset", ()=>offset);
parcelHelpers.export(exports, "platform", ()=>platform);
parcelHelpers.export(exports, "shift", ()=>shift);
parcelHelpers.export(exports, "size", ()=>size);
var _core = require("@floating-ui/core");
var _utils = require("@floating-ui/utils");
var _dom = require("@floating-ui/utils/dom");
function getCssDimensions(element) {
    const css = (0, _dom.getComputedStyle)(element);
    // In testing environments, the `width` and `height` properties are empty
    // strings for SVG elements, returning NaN. Fallback to `0` in this case.
    let width = parseFloat(css.width) || 0;
    let height = parseFloat(css.height) || 0;
    const hasOffset = (0, _dom.isHTMLElement)(element);
    const offsetWidth = hasOffset ? element.offsetWidth : width;
    const offsetHeight = hasOffset ? element.offsetHeight : height;
    const shouldFallback = (0, _utils.round)(width) !== offsetWidth || (0, _utils.round)(height) !== offsetHeight;
    if (shouldFallback) {
        width = offsetWidth;
        height = offsetHeight;
    }
    return {
        width,
        height,
        $: shouldFallback
    };
}
function unwrapElement(element) {
    return !(0, _dom.isElement)(element) ? element.contextElement : element;
}
function getScale(element) {
    const domElement = unwrapElement(element);
    if (!(0, _dom.isHTMLElement)(domElement)) return (0, _utils.createCoords)(1);
    const rect = domElement.getBoundingClientRect();
    const { width, height, $ } = getCssDimensions(domElement);
    let x = ($ ? (0, _utils.round)(rect.width) : rect.width) / width;
    let y = ($ ? (0, _utils.round)(rect.height) : rect.height) / height;
    // 0, NaN, or Infinity should always fallback to 1.
    if (!x || !Number.isFinite(x)) x = 1;
    if (!y || !Number.isFinite(y)) y = 1;
    return {
        x,
        y
    };
}
const noOffsets = /*#__PURE__*/ (0, _utils.createCoords)(0);
function getVisualOffsets(element) {
    const win = (0, _dom.getWindow)(element);
    if (!(0, _dom.isWebKit)() || !win.visualViewport) return noOffsets;
    return {
        x: win.visualViewport.offsetLeft,
        y: win.visualViewport.offsetTop
    };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
    if (isFixed === void 0) isFixed = false;
    if (!floatingOffsetParent || isFixed && floatingOffsetParent !== (0, _dom.getWindow)(element)) return false;
    return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
    if (includeScale === void 0) includeScale = false;
    if (isFixedStrategy === void 0) isFixedStrategy = false;
    const clientRect = element.getBoundingClientRect();
    const domElement = unwrapElement(element);
    let scale = (0, _utils.createCoords)(1);
    if (includeScale) {
        if (offsetParent) {
            if ((0, _dom.isElement)(offsetParent)) scale = getScale(offsetParent);
        } else scale = getScale(element);
    }
    const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : (0, _utils.createCoords)(0);
    let x = (clientRect.left + visualOffsets.x) / scale.x;
    let y = (clientRect.top + visualOffsets.y) / scale.y;
    let width = clientRect.width / scale.x;
    let height = clientRect.height / scale.y;
    if (domElement) {
        const win = (0, _dom.getWindow)(domElement);
        const offsetWin = offsetParent && (0, _dom.isElement)(offsetParent) ? (0, _dom.getWindow)(offsetParent) : offsetParent;
        let currentWin = win;
        let currentIFrame = (0, _dom.getFrameElement)(currentWin);
        while(currentIFrame && offsetParent && offsetWin !== currentWin){
            const iframeScale = getScale(currentIFrame);
            const iframeRect = currentIFrame.getBoundingClientRect();
            const css = (0, _dom.getComputedStyle)(currentIFrame);
            const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
            const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
            x *= iframeScale.x;
            y *= iframeScale.y;
            width *= iframeScale.x;
            height *= iframeScale.y;
            x += left;
            y += top;
            currentWin = (0, _dom.getWindow)(currentIFrame);
            currentIFrame = (0, _dom.getFrameElement)(currentWin);
        }
    }
    return (0, _core.rectToClientRect)({
        width,
        height,
        x,
        y
    });
}
// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
function getWindowScrollBarX(element, rect) {
    const leftScroll = (0, _dom.getNodeScroll)(element).scrollLeft;
    if (!rect) return getBoundingClientRect((0, _dom.getDocumentElement)(element)).left + leftScroll;
    return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll) {
    const htmlRect = documentElement.getBoundingClientRect();
    const x = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
    const y = htmlRect.top + scroll.scrollTop;
    return {
        x,
        y
    };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
    let { elements, rect, offsetParent, strategy } = _ref;
    const isFixed = strategy === 'fixed';
    const documentElement = (0, _dom.getDocumentElement)(offsetParent);
    const topLayer = elements ? (0, _dom.isTopLayer)(elements.floating) : false;
    if (offsetParent === documentElement || topLayer && isFixed) return rect;
    let scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    let scale = (0, _utils.createCoords)(1);
    const offsets = (0, _utils.createCoords)(0);
    const isOffsetParentAnElement = (0, _dom.isHTMLElement)(offsetParent);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ((0, _dom.getNodeName)(offsetParent) !== 'body' || (0, _dom.isOverflowElement)(documentElement)) scroll = (0, _dom.getNodeScroll)(offsetParent);
        if ((0, _dom.isHTMLElement)(offsetParent)) {
            const offsetRect = getBoundingClientRect(offsetParent);
            scale = getScale(offsetParent);
            offsets.x = offsetRect.x + offsetParent.clientLeft;
            offsets.y = offsetRect.y + offsetParent.clientTop;
        }
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : (0, _utils.createCoords)(0);
    return {
        width: rect.width * scale.x,
        height: rect.height * scale.y,
        x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
        y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
    };
}
function getClientRects(element) {
    return Array.from(element.getClientRects());
}
// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
    const html = (0, _dom.getDocumentElement)(element);
    const scroll = (0, _dom.getNodeScroll)(element);
    const body = element.ownerDocument.body;
    const width = (0, _utils.max)(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
    const height = (0, _utils.max)(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
    let x = -scroll.scrollLeft + getWindowScrollBarX(element);
    const y = -scroll.scrollTop;
    if ((0, _dom.getComputedStyle)(body).direction === 'rtl') x += (0, _utils.max)(html.clientWidth, body.clientWidth) - width;
    return {
        width,
        height,
        x,
        y
    };
}
// Safety check: ensure the scrollbar space is reasonable in case this
// calculation is affected by unusual styles.
// Most scrollbars leave 15-18px of space.
const SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy) {
    const win = (0, _dom.getWindow)(element);
    const html = (0, _dom.getDocumentElement)(element);
    const visualViewport = win.visualViewport;
    let width = html.clientWidth;
    let height = html.clientHeight;
    let x = 0;
    let y = 0;
    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height;
        const visualViewportBased = (0, _dom.isWebKit)();
        if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    const windowScrollbarX = getWindowScrollBarX(html);
    // <html> `overflow: hidden` + `scrollbar-gutter: stable` reduces the
    // visual width of the <html> but this is not considered in the size
    // of `html.clientWidth`.
    if (windowScrollbarX <= 0) {
        const doc = html.ownerDocument;
        const body = doc.body;
        const bodyStyles = getComputedStyle(body);
        const bodyMarginInline = doc.compatMode === 'CSS1Compat' ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
        const clippingStableScrollbarWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
        if (clippingStableScrollbarWidth <= SCROLLBAR_MAX) width -= clippingStableScrollbarWidth;
    } else if (windowScrollbarX <= SCROLLBAR_MAX) // If the <body> scrollbar is on the left, the width needs to be extended
    // by the scrollbar amount so there isn't extra space on the right.
    width += windowScrollbarX;
    return {
        width,
        height,
        x,
        y
    };
}
const absoluteOrFixed = /*#__PURE__*/ new Set([
    'absolute',
    'fixed'
]);
// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
    const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
    const top = clientRect.top + element.clientTop;
    const left = clientRect.left + element.clientLeft;
    const scale = (0, _dom.isHTMLElement)(element) ? getScale(element) : (0, _utils.createCoords)(1);
    const width = element.clientWidth * scale.x;
    const height = element.clientHeight * scale.y;
    const x = left * scale.x;
    const y = top * scale.y;
    return {
        width,
        height,
        x,
        y
    };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
    let rect;
    if (clippingAncestor === 'viewport') rect = getViewportRect(element, strategy);
    else if (clippingAncestor === 'document') rect = getDocumentRect((0, _dom.getDocumentElement)(element));
    else if ((0, _dom.isElement)(clippingAncestor)) rect = getInnerBoundingClientRect(clippingAncestor, strategy);
    else {
        const visualOffsets = getVisualOffsets(element);
        rect = {
            x: clippingAncestor.x - visualOffsets.x,
            y: clippingAncestor.y - visualOffsets.y,
            width: clippingAncestor.width,
            height: clippingAncestor.height
        };
    }
    return (0, _core.rectToClientRect)(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
    const parentNode = (0, _dom.getParentNode)(element);
    if (parentNode === stopNode || !(0, _dom.isElement)(parentNode) || (0, _dom.isLastTraversableNode)(parentNode)) return false;
    return (0, _dom.getComputedStyle)(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}
// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
    const cachedResult = cache.get(element);
    if (cachedResult) return cachedResult;
    let result = (0, _dom.getOverflowAncestors)(element, [], false).filter((el)=>(0, _dom.isElement)(el) && (0, _dom.getNodeName)(el) !== 'body');
    let currentContainingBlockComputedStyle = null;
    const elementIsFixed = (0, _dom.getComputedStyle)(element).position === 'fixed';
    let currentNode = elementIsFixed ? (0, _dom.getParentNode)(element) : element;
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    while((0, _dom.isElement)(currentNode) && !(0, _dom.isLastTraversableNode)(currentNode)){
        const computedStyle = (0, _dom.getComputedStyle)(currentNode);
        const currentNodeIsContaining = (0, _dom.isContainingBlock)(currentNode);
        if (!currentNodeIsContaining && computedStyle.position === 'fixed') currentContainingBlockComputedStyle = null;
        const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && absoluteOrFixed.has(currentContainingBlockComputedStyle.position) || (0, _dom.isOverflowElement)(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
        if (shouldDropCurrentNode) // Drop non-containing blocks.
        result = result.filter((ancestor)=>ancestor !== currentNode);
        else // Record last containing block for next iteration.
        currentContainingBlockComputedStyle = computedStyle;
        currentNode = (0, _dom.getParentNode)(currentNode);
    }
    cache.set(element, result);
    return result;
}
// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
    let { element, boundary, rootBoundary, strategy } = _ref;
    const elementClippingAncestors = boundary === 'clippingAncestors' ? (0, _dom.isTopLayer)(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
    const clippingAncestors = [
        ...elementClippingAncestors,
        rootBoundary
    ];
    const firstClippingAncestor = clippingAncestors[0];
    const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor)=>{
        const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
        accRect.top = (0, _utils.max)(rect.top, accRect.top);
        accRect.right = (0, _utils.min)(rect.right, accRect.right);
        accRect.bottom = (0, _utils.min)(rect.bottom, accRect.bottom);
        accRect.left = (0, _utils.max)(rect.left, accRect.left);
        return accRect;
    }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
    return {
        width: clippingRect.right - clippingRect.left,
        height: clippingRect.bottom - clippingRect.top,
        x: clippingRect.left,
        y: clippingRect.top
    };
}
function getDimensions(element) {
    const { width, height } = getCssDimensions(element);
    return {
        width,
        height
    };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
    const isOffsetParentAnElement = (0, _dom.isHTMLElement)(offsetParent);
    const documentElement = (0, _dom.getDocumentElement)(offsetParent);
    const isFixed = strategy === 'fixed';
    const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
    let scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const offsets = (0, _utils.createCoords)(0);
    // If the <body> scrollbar appears on the left (e.g. RTL systems). Use
    // Firefox with layout.scrollbar.side = 3 in about:config to test this.
    function setLeftRTLScrollbarOffset() {
        offsets.x = getWindowScrollBarX(documentElement);
    }
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ((0, _dom.getNodeName)(offsetParent) !== 'body' || (0, _dom.isOverflowElement)(documentElement)) scroll = (0, _dom.getNodeScroll)(offsetParent);
        if (isOffsetParentAnElement) {
            const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
            offsets.x = offsetRect.x + offsetParent.clientLeft;
            offsets.y = offsetRect.y + offsetParent.clientTop;
        } else if (documentElement) setLeftRTLScrollbarOffset();
    }
    if (isFixed && !isOffsetParentAnElement && documentElement) setLeftRTLScrollbarOffset();
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : (0, _utils.createCoords)(0);
    const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
    const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
    return {
        x,
        y,
        width: rect.width,
        height: rect.height
    };
}
function isStaticPositioned(element) {
    return (0, _dom.getComputedStyle)(element).position === 'static';
}
function getTrueOffsetParent(element, polyfill) {
    if (!(0, _dom.isHTMLElement)(element) || (0, _dom.getComputedStyle)(element).position === 'fixed') return null;
    if (polyfill) return polyfill(element);
    let rawOffsetParent = element.offsetParent;
    // Firefox returns the <html> element as the offsetParent if it's non-static,
    // while Chrome and Safari return the <body> element. The <body> element must
    // be used to perform the correct calculations even if the <html> element is
    // non-static.
    if ((0, _dom.getDocumentElement)(element) === rawOffsetParent) rawOffsetParent = rawOffsetParent.ownerDocument.body;
    return rawOffsetParent;
}
// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
    const win = (0, _dom.getWindow)(element);
    if ((0, _dom.isTopLayer)(element)) return win;
    if (!(0, _dom.isHTMLElement)(element)) {
        let svgOffsetParent = (0, _dom.getParentNode)(element);
        while(svgOffsetParent && !(0, _dom.isLastTraversableNode)(svgOffsetParent)){
            if ((0, _dom.isElement)(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) return svgOffsetParent;
            svgOffsetParent = (0, _dom.getParentNode)(svgOffsetParent);
        }
        return win;
    }
    let offsetParent = getTrueOffsetParent(element, polyfill);
    while(offsetParent && (0, _dom.isTableElement)(offsetParent) && isStaticPositioned(offsetParent))offsetParent = getTrueOffsetParent(offsetParent, polyfill);
    if (offsetParent && (0, _dom.isLastTraversableNode)(offsetParent) && isStaticPositioned(offsetParent) && !(0, _dom.isContainingBlock)(offsetParent)) return win;
    return offsetParent || (0, _dom.getContainingBlock)(element) || win;
}
const getElementRects = async function(data) {
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    const floatingDimensions = await getDimensionsFn(data.floating);
    return {
        reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
        floating: {
            x: 0,
            y: 0,
            width: floatingDimensions.width,
            height: floatingDimensions.height
        }
    };
};
function isRTL(element) {
    return (0, _dom.getComputedStyle)(element).direction === 'rtl';
}
const platform = {
    convertOffsetParentRelativeRectToViewportRelativeRect,
    getDocumentElement: (0, _dom.getDocumentElement),
    getClippingRect,
    getOffsetParent,
    getElementRects,
    getClientRects,
    getDimensions,
    getScale,
    isElement: (0, _dom.isElement),
    isRTL
};
function rectsAreEqual(a, b) {
    return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
// https://samthor.au/2021/observing-dom/
function observeMove(element, onMove) {
    let io = null;
    let timeoutId;
    const root = (0, _dom.getDocumentElement)(element);
    function cleanup() {
        var _io;
        clearTimeout(timeoutId);
        (_io = io) == null || _io.disconnect();
        io = null;
    }
    function refresh(skip, threshold) {
        if (skip === void 0) skip = false;
        if (threshold === void 0) threshold = 1;
        cleanup();
        const elementRectForRootMargin = element.getBoundingClientRect();
        const { left, top, width, height } = elementRectForRootMargin;
        if (!skip) onMove();
        if (!width || !height) return;
        const insetTop = (0, _utils.floor)(top);
        const insetRight = (0, _utils.floor)(root.clientWidth - (left + width));
        const insetBottom = (0, _utils.floor)(root.clientHeight - (top + height));
        const insetLeft = (0, _utils.floor)(left);
        const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
        const options = {
            rootMargin,
            threshold: (0, _utils.max)(0, (0, _utils.min)(1, threshold)) || 1
        };
        let isFirstUpdate = true;
        function handleObserve(entries) {
            const ratio = entries[0].intersectionRatio;
            if (ratio !== threshold) {
                if (!isFirstUpdate) return refresh();
                if (!ratio) // If the reference is clipped, the ratio is 0. Throttle the refresh
                // to prevent an infinite loop of updates.
                timeoutId = setTimeout(()=>{
                    refresh(false, 1e-7);
                }, 1000);
                else refresh(false, ratio);
            }
            if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) // It's possible that even though the ratio is reported as 1, the
            // element is not actually fully within the IntersectionObserver's root
            // area anymore. This can happen under performance constraints. This may
            // be a bug in the browser's IntersectionObserver implementation. To
            // work around this, we compare the element's bounding rect now with
            // what it was at the time we created the IntersectionObserver. If they
            // are not equal then the element moved, so we refresh.
            refresh();
            isFirstUpdate = false;
        }
        // Older browsers don't support a `document` as the root and will throw an
        // error.
        try {
            io = new IntersectionObserver(handleObserve, {
                ...options,
                // Handle <iframe>s
                root: root.ownerDocument
            });
        } catch (_e) {
            io = new IntersectionObserver(handleObserve, options);
        }
        io.observe(element);
    }
    refresh(true);
    return cleanup;
}
/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */ function autoUpdate(reference, floating, update, options) {
    if (options === void 0) options = {};
    const { ancestorScroll = true, ancestorResize = true, elementResize = typeof ResizeObserver === 'function', layoutShift = typeof IntersectionObserver === 'function', animationFrame = false } = options;
    const referenceEl = unwrapElement(reference);
    const ancestors = ancestorScroll || ancestorResize ? [
        ...referenceEl ? (0, _dom.getOverflowAncestors)(referenceEl) : [],
        ...(0, _dom.getOverflowAncestors)(floating)
    ] : [];
    ancestors.forEach((ancestor)=>{
        ancestorScroll && ancestor.addEventListener('scroll', update, {
            passive: true
        });
        ancestorResize && ancestor.addEventListener('resize', update);
    });
    const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
    let reobserveFrame = -1;
    let resizeObserver = null;
    if (elementResize) {
        resizeObserver = new ResizeObserver((_ref)=>{
            let [firstEntry] = _ref;
            if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
                // Prevent update loops when using the `size` middleware.
                // https://github.com/floating-ui/floating-ui/issues/1740
                resizeObserver.unobserve(floating);
                cancelAnimationFrame(reobserveFrame);
                reobserveFrame = requestAnimationFrame(()=>{
                    var _resizeObserver;
                    (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
                });
            }
            update();
        });
        if (referenceEl && !animationFrame) resizeObserver.observe(referenceEl);
        resizeObserver.observe(floating);
    }
    let frameId;
    let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
    if (animationFrame) frameLoop();
    function frameLoop() {
        const nextRefRect = getBoundingClientRect(reference);
        if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) update();
        prevRefRect = nextRefRect;
        frameId = requestAnimationFrame(frameLoop);
    }
    update();
    return ()=>{
        var _resizeObserver2;
        ancestors.forEach((ancestor)=>{
            ancestorScroll && ancestor.removeEventListener('scroll', update);
            ancestorResize && ancestor.removeEventListener('resize', update);
        });
        cleanupIo == null || cleanupIo();
        (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
        resizeObserver = null;
        if (animationFrame) cancelAnimationFrame(frameId);
    };
}
/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */ const detectOverflow = (0, _core.detectOverflow);
/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */ const offset = (0, _core.offset);
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */ const autoPlacement = (0, _core.autoPlacement);
/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */ const shift = (0, _core.shift);
/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */ const flip = (0, _core.flip);
/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */ const size = (0, _core.size);
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */ const hide = (0, _core.hide);
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */ const arrow = (0, _core.arrow);
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */ const inline = (0, _core.inline);
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */ const limitShift = (0, _core.limitShift);
/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 */ const computePosition = (reference, floating, options)=>{
    // This caches the expensive `getClippingElementAncestors` function so that
    // multiple lifecycle resets re-use the same result. It only lives for a
    // single call. If other functions become expensive, we can add them as well.
    const cache = new Map();
    const mergedOptions = {
        platform,
        ...options
    };
    const platformWithCache = {
        ...mergedOptions.platform,
        _c: cache
    };
    return (0, _core.computePosition)(reference, floating, {
        ...mergedOptions,
        platform: platformWithCache
    });
};

},{"@floating-ui/core":"iO0KL","@floating-ui/utils":"deLwA","@floating-ui/utils/dom":"avdAU","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"iO0KL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rectToClientRect", ()=>(0, _utils.rectToClientRect));
parcelHelpers.export(exports, "arrow", ()=>arrow);
parcelHelpers.export(exports, "autoPlacement", ()=>autoPlacement);
parcelHelpers.export(exports, "computePosition", ()=>computePosition);
parcelHelpers.export(exports, "detectOverflow", ()=>detectOverflow);
parcelHelpers.export(exports, "flip", ()=>flip);
parcelHelpers.export(exports, "hide", ()=>hide);
parcelHelpers.export(exports, "inline", ()=>inline);
parcelHelpers.export(exports, "limitShift", ()=>limitShift);
parcelHelpers.export(exports, "offset", ()=>offset);
parcelHelpers.export(exports, "shift", ()=>shift);
parcelHelpers.export(exports, "size", ()=>size);
var _utils = require("@floating-ui/utils");
function computeCoordsFromPlacement(_ref, placement, rtl) {
    let { reference, floating } = _ref;
    const sideAxis = (0, _utils.getSideAxis)(placement);
    const alignmentAxis = (0, _utils.getAlignmentAxis)(placement);
    const alignLength = (0, _utils.getAxisLength)(alignmentAxis);
    const side = (0, _utils.getSide)(placement);
    const isVertical = sideAxis === 'y';
    const commonX = reference.x + reference.width / 2 - floating.width / 2;
    const commonY = reference.y + reference.height / 2 - floating.height / 2;
    const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
    let coords;
    switch(side){
        case 'top':
            coords = {
                x: commonX,
                y: reference.y - floating.height
            };
            break;
        case 'bottom':
            coords = {
                x: commonX,
                y: reference.y + reference.height
            };
            break;
        case 'right':
            coords = {
                x: reference.x + reference.width,
                y: commonY
            };
            break;
        case 'left':
            coords = {
                x: reference.x - floating.width,
                y: commonY
            };
            break;
        default:
            coords = {
                x: reference.x,
                y: reference.y
            };
    }
    switch((0, _utils.getAlignment)(placement)){
        case 'start':
            coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
            break;
        case 'end':
            coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
            break;
    }
    return coords;
}
/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */ const computePosition = async (reference, floating, config)=>{
    const { placement = 'bottom', strategy = 'absolute', middleware = [], platform } = config;
    const validMiddleware = middleware.filter(Boolean);
    const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
    let rects = await platform.getElementRects({
        reference,
        floating,
        strategy
    });
    let { x, y } = computeCoordsFromPlacement(rects, placement, rtl);
    let statefulPlacement = placement;
    let middlewareData = {};
    let resetCount = 0;
    for(let i = 0; i < validMiddleware.length; i++){
        const { name, fn } = validMiddleware[i];
        const { x: nextX, y: nextY, data, reset } = await fn({
            x,
            y,
            initialPlacement: placement,
            placement: statefulPlacement,
            strategy,
            middlewareData,
            rects,
            platform,
            elements: {
                reference,
                floating
            }
        });
        x = nextX != null ? nextX : x;
        y = nextY != null ? nextY : y;
        middlewareData = {
            ...middlewareData,
            [name]: {
                ...middlewareData[name],
                ...data
            }
        };
        if (reset && resetCount <= 50) {
            resetCount++;
            if (typeof reset === 'object') {
                if (reset.placement) statefulPlacement = reset.placement;
                if (reset.rects) rects = reset.rects === true ? await platform.getElementRects({
                    reference,
                    floating,
                    strategy
                }) : reset.rects;
                ({ x, y } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
            }
            i = -1;
        }
    }
    return {
        x,
        y,
        placement: statefulPlacement,
        strategy,
        middlewareData
    };
};
/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */ async function detectOverflow(state, options) {
    var _await$platform$isEle;
    if (options === void 0) options = {};
    const { x, y, platform, rects, elements, strategy } = state;
    const { boundary = 'clippingAncestors', rootBoundary = 'viewport', elementContext = 'floating', altBoundary = false, padding = 0 } = (0, _utils.evaluate)(options, state);
    const paddingObject = (0, _utils.getPaddingObject)(padding);
    const altContext = elementContext === 'floating' ? 'reference' : 'floating';
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = (0, _utils.rectToClientRect)(await platform.getClippingRect({
        element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating)),
        boundary,
        rootBoundary,
        strategy
    }));
    const rect = elementContext === 'floating' ? {
        x,
        y,
        width: rects.floating.width,
        height: rects.floating.height
    } : rects.reference;
    const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
    const offsetScale = await (platform.isElement == null ? void 0 : platform.isElement(offsetParent)) ? await (platform.getScale == null ? void 0 : platform.getScale(offsetParent)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    };
    const elementClientRect = (0, _utils.rectToClientRect)(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements,
        rect,
        offsetParent,
        strategy
    }) : rect);
    return {
        top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
        bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
        left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
        right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
}
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */ const arrow = (options)=>({
        name: 'arrow',
        options,
        async fn (state) {
            const { x, y, placement, rects, platform, elements, middlewareData } = state;
            // Since `element` is required, we don't Partial<> the type.
            const { element, padding = 0 } = (0, _utils.evaluate)(options, state) || {};
            if (element == null) return {};
            const paddingObject = (0, _utils.getPaddingObject)(padding);
            const coords = {
                x,
                y
            };
            const axis = (0, _utils.getAlignmentAxis)(placement);
            const length = (0, _utils.getAxisLength)(axis);
            const arrowDimensions = await platform.getDimensions(element);
            const isYAxis = axis === 'y';
            const minProp = isYAxis ? 'top' : 'left';
            const maxProp = isYAxis ? 'bottom' : 'right';
            const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
            const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
            const startDiff = coords[axis] - rects.reference[axis];
            const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
            let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
            // DOM platform can return `window` as the `offsetParent`.
            if (!clientSize || !await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent))) clientSize = elements.floating[clientProp] || rects.floating[length];
            const centerToReference = endDiff / 2 - startDiff / 2;
            // If the padding is large enough that it causes the arrow to no longer be
            // centered, modify the padding so that it is centered.
            const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
            const minPadding = (0, _utils.min)(paddingObject[minProp], largestPossiblePadding);
            const maxPadding = (0, _utils.min)(paddingObject[maxProp], largestPossiblePadding);
            // Make sure the arrow doesn't overflow the floating element if the center
            // point is outside the floating element's bounds.
            const min$1 = minPadding;
            const max = clientSize - arrowDimensions[length] - maxPadding;
            const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
            const offset = (0, _utils.clamp)(min$1, center, max);
            // If the reference is small enough that the arrow's padding causes it to
            // to point to nothing for an aligned placement, adjust the offset of the
            // floating element itself. To ensure `shift()` continues to take action,
            // a single reset is performed when this is true.
            const shouldAddOffset = !middlewareData.arrow && (0, _utils.getAlignment)(placement) != null && center !== offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
            const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max : 0;
            return {
                [axis]: coords[axis] + alignmentOffset,
                data: {
                    [axis]: offset,
                    centerOffset: center - offset - alignmentOffset,
                    ...shouldAddOffset && {
                        alignmentOffset
                    }
                },
                reset: shouldAddOffset
            };
        }
    });
function getPlacementList(alignment, autoAlignment, allowedPlacements) {
    const allowedPlacementsSortedByAlignment = alignment ? [
        ...allowedPlacements.filter((placement)=>(0, _utils.getAlignment)(placement) === alignment),
        ...allowedPlacements.filter((placement)=>(0, _utils.getAlignment)(placement) !== alignment)
    ] : allowedPlacements.filter((placement)=>(0, _utils.getSide)(placement) === placement);
    return allowedPlacementsSortedByAlignment.filter((placement)=>{
        if (alignment) return (0, _utils.getAlignment)(placement) === alignment || (autoAlignment ? (0, _utils.getOppositeAlignmentPlacement)(placement) !== placement : false);
        return true;
    });
}
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */ const autoPlacement = function(options) {
    if (options === void 0) options = {};
    return {
        name: 'autoPlacement',
        options,
        async fn (state) {
            var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
            const { rects, middlewareData, placement, platform, elements } = state;
            const { crossAxis = false, alignment, allowedPlacements = (0, _utils.placements), autoAlignment = true, ...detectOverflowOptions } = (0, _utils.evaluate)(options, state);
            const placements$1 = alignment !== undefined || allowedPlacements === (0, _utils.placements) ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
            const overflow = await detectOverflow(state, detectOverflowOptions);
            const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
            const currentPlacement = placements$1[currentIndex];
            if (currentPlacement == null) return {};
            const alignmentSides = (0, _utils.getAlignmentSides)(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));
            // Make `computeCoords` start from the right place.
            if (placement !== currentPlacement) return {
                reset: {
                    placement: placements$1[0]
                }
            };
            const currentOverflows = [
                overflow[(0, _utils.getSide)(currentPlacement)],
                overflow[alignmentSides[0]],
                overflow[alignmentSides[1]]
            ];
            const allOverflows = [
                ...((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || [],
                {
                    placement: currentPlacement,
                    overflows: currentOverflows
                }
            ];
            const nextPlacement = placements$1[currentIndex + 1];
            // There are more placements to check.
            if (nextPlacement) return {
                data: {
                    index: currentIndex + 1,
                    overflows: allOverflows
                },
                reset: {
                    placement: nextPlacement
                }
            };
            const placementsSortedByMostSpace = allOverflows.map((d)=>{
                const alignment = (0, _utils.getAlignment)(d.placement);
                return [
                    d.placement,
                    alignment && crossAxis ? // Check along the mainAxis and main crossAxis side.
                    d.overflows.slice(0, 2).reduce((acc, v)=>acc + v, 0) : // Check only the mainAxis.
                    d.overflows[0],
                    d.overflows
                ];
            }).sort((a, b)=>a[1] - b[1]);
            const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter((d)=>d[2].slice(0, // Aligned placements should not check their opposite crossAxis
                // side.
                (0, _utils.getAlignment)(d[0]) ? 2 : 3).every((v)=>v <= 0));
            const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
            if (resetPlacement !== placement) return {
                data: {
                    index: currentIndex + 1,
                    overflows: allOverflows
                },
                reset: {
                    placement: resetPlacement
                }
            };
            return {};
        }
    };
};
/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */ const flip = function(options) {
    if (options === void 0) options = {};
    return {
        name: 'flip',
        options,
        async fn (state) {
            var _middlewareData$arrow, _middlewareData$flip;
            const { placement, middlewareData, rects, initialPlacement, platform, elements } = state;
            const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true, fallbackPlacements: specifiedFallbackPlacements, fallbackStrategy = 'bestFit', fallbackAxisSideDirection = 'none', flipAlignment = true, ...detectOverflowOptions } = (0, _utils.evaluate)(options, state);
            // If a reset by the arrow was caused due to an alignment offset being
            // added, we should skip any logic now since `flip()` has already done its
            // work.
            // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
            if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) return {};
            const side = (0, _utils.getSide)(placement);
            const initialSideAxis = (0, _utils.getSideAxis)(initialPlacement);
            const isBasePlacement = (0, _utils.getSide)(initialPlacement) === initialPlacement;
            const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
            const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [
                (0, _utils.getOppositePlacement)(initialPlacement)
            ] : (0, _utils.getExpandedPlacements)(initialPlacement));
            const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== 'none';
            if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) fallbackPlacements.push(...(0, _utils.getOppositeAxisPlacements)(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
            const placements = [
                initialPlacement,
                ...fallbackPlacements
            ];
            const overflow = await detectOverflow(state, detectOverflowOptions);
            const overflows = [];
            let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
            if (checkMainAxis) overflows.push(overflow[side]);
            if (checkCrossAxis) {
                const sides = (0, _utils.getAlignmentSides)(placement, rects, rtl);
                overflows.push(overflow[sides[0]], overflow[sides[1]]);
            }
            overflowsData = [
                ...overflowsData,
                {
                    placement,
                    overflows
                }
            ];
            // One or more sides is overflowing.
            if (!overflows.every((side)=>side <= 0)) {
                var _middlewareData$flip2, _overflowsData$filter;
                const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
                const nextPlacement = placements[nextIndex];
                if (nextPlacement) {
                    const ignoreCrossAxisOverflow = checkCrossAxis === 'alignment' ? initialSideAxis !== (0, _utils.getSideAxis)(nextPlacement) : false;
                    if (!ignoreCrossAxisOverflow || // We leave the current main axis only if every placement on that axis
                    // overflows the main axis.
                    overflowsData.every((d)=>(0, _utils.getSideAxis)(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) // Try next placement and re-run the lifecycle.
                    return {
                        data: {
                            index: nextIndex,
                            overflows: overflowsData
                        },
                        reset: {
                            placement: nextPlacement
                        }
                    };
                }
                // First, find the candidates that fit on the mainAxis side of overflow,
                // then find the placement that fits the best on the main crossAxis side.
                let resetPlacement = (_overflowsData$filter = overflowsData.filter((d)=>d.overflows[0] <= 0).sort((a, b)=>a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
                // Otherwise fallback.
                if (!resetPlacement) switch(fallbackStrategy){
                    case 'bestFit':
                        {
                            var _overflowsData$filter2;
                            const placement = (_overflowsData$filter2 = overflowsData.filter((d)=>{
                                if (hasFallbackAxisSideDirection) {
                                    const currentSideAxis = (0, _utils.getSideAxis)(d.placement);
                                    return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                                    // reading directions favoring greater width.
                                    currentSideAxis === 'y';
                                }
                                return true;
                            }).map((d)=>[
                                    d.placement,
                                    d.overflows.filter((overflow)=>overflow > 0).reduce((acc, overflow)=>acc + overflow, 0)
                                ]).sort((a, b)=>a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                            if (placement) resetPlacement = placement;
                            break;
                        }
                    case 'initialPlacement':
                        resetPlacement = initialPlacement;
                        break;
                }
                if (placement !== resetPlacement) return {
                    reset: {
                        placement: resetPlacement
                    }
                };
            }
            return {};
        }
    };
};
function getSideOffsets(overflow, rect) {
    return {
        top: overflow.top - rect.height,
        right: overflow.right - rect.width,
        bottom: overflow.bottom - rect.height,
        left: overflow.left - rect.width
    };
}
function isAnySideFullyClipped(overflow) {
    return (0, _utils.sides).some((side)=>overflow[side] >= 0);
}
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */ const hide = function(options) {
    if (options === void 0) options = {};
    return {
        name: 'hide',
        options,
        async fn (state) {
            const { rects } = state;
            const { strategy = 'referenceHidden', ...detectOverflowOptions } = (0, _utils.evaluate)(options, state);
            switch(strategy){
                case 'referenceHidden':
                    {
                        const overflow = await detectOverflow(state, {
                            ...detectOverflowOptions,
                            elementContext: 'reference'
                        });
                        const offsets = getSideOffsets(overflow, rects.reference);
                        return {
                            data: {
                                referenceHiddenOffsets: offsets,
                                referenceHidden: isAnySideFullyClipped(offsets)
                            }
                        };
                    }
                case 'escaped':
                    {
                        const overflow = await detectOverflow(state, {
                            ...detectOverflowOptions,
                            altBoundary: true
                        });
                        const offsets = getSideOffsets(overflow, rects.floating);
                        return {
                            data: {
                                escapedOffsets: offsets,
                                escaped: isAnySideFullyClipped(offsets)
                            }
                        };
                    }
                default:
                    return {};
            }
        }
    };
};
function getBoundingRect(rects) {
    const minX = (0, _utils.min)(...rects.map((rect)=>rect.left));
    const minY = (0, _utils.min)(...rects.map((rect)=>rect.top));
    const maxX = (0, _utils.max)(...rects.map((rect)=>rect.right));
    const maxY = (0, _utils.max)(...rects.map((rect)=>rect.bottom));
    return {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY
    };
}
function getRectsByLine(rects) {
    const sortedRects = rects.slice().sort((a, b)=>a.y - b.y);
    const groups = [];
    let prevRect = null;
    for(let i = 0; i < sortedRects.length; i++){
        const rect = sortedRects[i];
        if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) groups.push([
            rect
        ]);
        else groups[groups.length - 1].push(rect);
        prevRect = rect;
    }
    return groups.map((rect)=>(0, _utils.rectToClientRect)(getBoundingRect(rect)));
}
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */ const inline = function(options) {
    if (options === void 0) options = {};
    return {
        name: 'inline',
        options,
        async fn (state) {
            const { placement, elements, rects, platform, strategy } = state;
            // A MouseEvent's client{X,Y} coords can be up to 2 pixels off a
            // ClientRect's bounds, despite the event listener being triggered. A
            // padding of 2 seems to handle this issue.
            const { padding = 2, x, y } = (0, _utils.evaluate)(options, state);
            const nativeClientRects = Array.from(await (platform.getClientRects == null ? void 0 : platform.getClientRects(elements.reference)) || []);
            const clientRects = getRectsByLine(nativeClientRects);
            const fallback = (0, _utils.rectToClientRect)(getBoundingRect(nativeClientRects));
            const paddingObject = (0, _utils.getPaddingObject)(padding);
            function getBoundingClientRect() {
                // There are two rects and they are disjoined.
                if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) // Find the first rect in which the point is fully inside.
                return clientRects.find((rect)=>x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
                // There are 2 or more connected rects.
                if (clientRects.length >= 2) {
                    if ((0, _utils.getSideAxis)(placement) === 'y') {
                        const firstRect = clientRects[0];
                        const lastRect = clientRects[clientRects.length - 1];
                        const isTop = (0, _utils.getSide)(placement) === 'top';
                        const top = firstRect.top;
                        const bottom = lastRect.bottom;
                        const left = isTop ? firstRect.left : lastRect.left;
                        const right = isTop ? firstRect.right : lastRect.right;
                        const width = right - left;
                        const height = bottom - top;
                        return {
                            top,
                            bottom,
                            left,
                            right,
                            width,
                            height,
                            x: left,
                            y: top
                        };
                    }
                    const isLeftSide = (0, _utils.getSide)(placement) === 'left';
                    const maxRight = (0, _utils.max)(...clientRects.map((rect)=>rect.right));
                    const minLeft = (0, _utils.min)(...clientRects.map((rect)=>rect.left));
                    const measureRects = clientRects.filter((rect)=>isLeftSide ? rect.left === minLeft : rect.right === maxRight);
                    const top = measureRects[0].top;
                    const bottom = measureRects[measureRects.length - 1].bottom;
                    const left = minLeft;
                    const right = maxRight;
                    const width = right - left;
                    const height = bottom - top;
                    return {
                        top,
                        bottom,
                        left,
                        right,
                        width,
                        height,
                        x: left,
                        y: top
                    };
                }
                return fallback;
            }
            const resetRects = await platform.getElementRects({
                reference: {
                    getBoundingClientRect
                },
                floating: elements.floating,
                strategy
            });
            if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) return {
                reset: {
                    rects: resetRects
                }
            };
            return {};
        }
    };
};
const originSides = /*#__PURE__*/ new Set([
    'left',
    'top'
]);
// For type backwards-compatibility, the `OffsetOptions` type was also
// Derivable.
async function convertValueToCoords(state, options) {
    const { placement, platform, elements } = state;
    const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
    const side = (0, _utils.getSide)(placement);
    const alignment = (0, _utils.getAlignment)(placement);
    const isVertical = (0, _utils.getSideAxis)(placement) === 'y';
    const mainAxisMulti = originSides.has(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = (0, _utils.evaluate)(options, state);
    // eslint-disable-next-line prefer-const
    let { mainAxis, crossAxis, alignmentAxis } = typeof rawValue === 'number' ? {
        mainAxis: rawValue,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: rawValue.mainAxis || 0,
        crossAxis: rawValue.crossAxis || 0,
        alignmentAxis: rawValue.alignmentAxis
    };
    if (alignment && typeof alignmentAxis === 'number') crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
    return isVertical ? {
        x: crossAxis * crossAxisMulti,
        y: mainAxis * mainAxisMulti
    } : {
        x: mainAxis * mainAxisMulti,
        y: crossAxis * crossAxisMulti
    };
}
/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */ const offset = function(options) {
    if (options === void 0) options = 0;
    return {
        name: 'offset',
        options,
        async fn (state) {
            var _middlewareData$offse, _middlewareData$arrow;
            const { x, y, placement, middlewareData } = state;
            const diffCoords = await convertValueToCoords(state, options);
            // If the placement is the same and the arrow caused an alignment offset
            // then we don't need to change the positioning coordinates.
            if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) return {};
            return {
                x: x + diffCoords.x,
                y: y + diffCoords.y,
                data: {
                    ...diffCoords,
                    placement
                }
            };
        }
    };
};
/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */ const shift = function(options) {
    if (options === void 0) options = {};
    return {
        name: 'shift',
        options,
        async fn (state) {
            const { x, y, placement } = state;
            const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = false, limiter = {
                fn: (_ref)=>{
                    let { x, y } = _ref;
                    return {
                        x,
                        y
                    };
                }
            }, ...detectOverflowOptions } = (0, _utils.evaluate)(options, state);
            const coords = {
                x,
                y
            };
            const overflow = await detectOverflow(state, detectOverflowOptions);
            const crossAxis = (0, _utils.getSideAxis)((0, _utils.getSide)(placement));
            const mainAxis = (0, _utils.getOppositeAxis)(crossAxis);
            let mainAxisCoord = coords[mainAxis];
            let crossAxisCoord = coords[crossAxis];
            if (checkMainAxis) {
                const minSide = mainAxis === 'y' ? 'top' : 'left';
                const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
                const min = mainAxisCoord + overflow[minSide];
                const max = mainAxisCoord - overflow[maxSide];
                mainAxisCoord = (0, _utils.clamp)(min, mainAxisCoord, max);
            }
            if (checkCrossAxis) {
                const minSide = crossAxis === 'y' ? 'top' : 'left';
                const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
                const min = crossAxisCoord + overflow[minSide];
                const max = crossAxisCoord - overflow[maxSide];
                crossAxisCoord = (0, _utils.clamp)(min, crossAxisCoord, max);
            }
            const limitedCoords = limiter.fn({
                ...state,
                [mainAxis]: mainAxisCoord,
                [crossAxis]: crossAxisCoord
            });
            return {
                ...limitedCoords,
                data: {
                    x: limitedCoords.x - x,
                    y: limitedCoords.y - y,
                    enabled: {
                        [mainAxis]: checkMainAxis,
                        [crossAxis]: checkCrossAxis
                    }
                }
            };
        }
    };
};
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */ const limitShift = function(options) {
    if (options === void 0) options = {};
    return {
        options,
        fn (state) {
            const { x, y, placement, rects, middlewareData } = state;
            const { offset = 0, mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true } = (0, _utils.evaluate)(options, state);
            const coords = {
                x,
                y
            };
            const crossAxis = (0, _utils.getSideAxis)(placement);
            const mainAxis = (0, _utils.getOppositeAxis)(crossAxis);
            let mainAxisCoord = coords[mainAxis];
            let crossAxisCoord = coords[crossAxis];
            const rawOffset = (0, _utils.evaluate)(offset, state);
            const computedOffset = typeof rawOffset === 'number' ? {
                mainAxis: rawOffset,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...rawOffset
            };
            if (checkMainAxis) {
                const len = mainAxis === 'y' ? 'height' : 'width';
                const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
                const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
                if (mainAxisCoord < limitMin) mainAxisCoord = limitMin;
                else if (mainAxisCoord > limitMax) mainAxisCoord = limitMax;
            }
            if (checkCrossAxis) {
                var _middlewareData$offse, _middlewareData$offse2;
                const len = mainAxis === 'y' ? 'width' : 'height';
                const isOriginSide = originSides.has((0, _utils.getSide)(placement));
                const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
                const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
                if (crossAxisCoord < limitMin) crossAxisCoord = limitMin;
                else if (crossAxisCoord > limitMax) crossAxisCoord = limitMax;
            }
            return {
                [mainAxis]: mainAxisCoord,
                [crossAxis]: crossAxisCoord
            };
        }
    };
};
/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */ const size = function(options) {
    if (options === void 0) options = {};
    return {
        name: 'size',
        options,
        async fn (state) {
            var _state$middlewareData, _state$middlewareData2;
            const { placement, rects, platform, elements } = state;
            const { apply = ()=>{}, ...detectOverflowOptions } = (0, _utils.evaluate)(options, state);
            const overflow = await detectOverflow(state, detectOverflowOptions);
            const side = (0, _utils.getSide)(placement);
            const alignment = (0, _utils.getAlignment)(placement);
            const isYAxis = (0, _utils.getSideAxis)(placement) === 'y';
            const { width, height } = rects.floating;
            let heightSide;
            let widthSide;
            if (side === 'top' || side === 'bottom') {
                heightSide = side;
                widthSide = alignment === (await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)) ? 'start' : 'end') ? 'left' : 'right';
            } else {
                widthSide = side;
                heightSide = alignment === 'end' ? 'top' : 'bottom';
            }
            const maximumClippingHeight = height - overflow.top - overflow.bottom;
            const maximumClippingWidth = width - overflow.left - overflow.right;
            const overflowAvailableHeight = (0, _utils.min)(height - overflow[heightSide], maximumClippingHeight);
            const overflowAvailableWidth = (0, _utils.min)(width - overflow[widthSide], maximumClippingWidth);
            const noShift = !state.middlewareData.shift;
            let availableHeight = overflowAvailableHeight;
            let availableWidth = overflowAvailableWidth;
            if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) availableWidth = maximumClippingWidth;
            if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) availableHeight = maximumClippingHeight;
            if (noShift && !alignment) {
                const xMin = (0, _utils.max)(overflow.left, 0);
                const xMax = (0, _utils.max)(overflow.right, 0);
                const yMin = (0, _utils.max)(overflow.top, 0);
                const yMax = (0, _utils.max)(overflow.bottom, 0);
                if (isYAxis) availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : (0, _utils.max)(overflow.left, overflow.right));
                else availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : (0, _utils.max)(overflow.top, overflow.bottom));
            }
            await apply({
                ...state,
                availableWidth,
                availableHeight
            });
            const nextDimensions = await platform.getDimensions(elements.floating);
            if (width !== nextDimensions.width || height !== nextDimensions.height) return {
                reset: {
                    rects: true
                }
            };
            return {};
        }
    };
};

},{"@floating-ui/utils":"deLwA","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"deLwA":[function(require,module,exports,__globalThis) {
/**
 * Custom positioning reference element.
 * @see https://floating-ui.com/docs/virtual-elements
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "alignments", ()=>alignments);
parcelHelpers.export(exports, "clamp", ()=>clamp);
parcelHelpers.export(exports, "createCoords", ()=>createCoords);
parcelHelpers.export(exports, "evaluate", ()=>evaluate);
parcelHelpers.export(exports, "expandPaddingObject", ()=>expandPaddingObject);
parcelHelpers.export(exports, "floor", ()=>floor);
parcelHelpers.export(exports, "getAlignment", ()=>getAlignment);
parcelHelpers.export(exports, "getAlignmentAxis", ()=>getAlignmentAxis);
parcelHelpers.export(exports, "getAlignmentSides", ()=>getAlignmentSides);
parcelHelpers.export(exports, "getAxisLength", ()=>getAxisLength);
parcelHelpers.export(exports, "getExpandedPlacements", ()=>getExpandedPlacements);
parcelHelpers.export(exports, "getOppositeAlignmentPlacement", ()=>getOppositeAlignmentPlacement);
parcelHelpers.export(exports, "getOppositeAxis", ()=>getOppositeAxis);
parcelHelpers.export(exports, "getOppositeAxisPlacements", ()=>getOppositeAxisPlacements);
parcelHelpers.export(exports, "getOppositePlacement", ()=>getOppositePlacement);
parcelHelpers.export(exports, "getPaddingObject", ()=>getPaddingObject);
parcelHelpers.export(exports, "getSide", ()=>getSide);
parcelHelpers.export(exports, "getSideAxis", ()=>getSideAxis);
parcelHelpers.export(exports, "max", ()=>max);
parcelHelpers.export(exports, "min", ()=>min);
parcelHelpers.export(exports, "placements", ()=>placements);
parcelHelpers.export(exports, "rectToClientRect", ()=>rectToClientRect);
parcelHelpers.export(exports, "round", ()=>round);
parcelHelpers.export(exports, "sides", ()=>sides);
const sides = [
    'top',
    'right',
    'bottom',
    'left'
];
const alignments = [
    'start',
    'end'
];
const placements = /*#__PURE__*/ sides.reduce((acc, side)=>acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = (v)=>({
        x: v,
        y: v
    });
const oppositeSideMap = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
};
const oppositeAlignmentMap = {
    start: 'end',
    end: 'start'
};
function clamp(start, value, end) {
    return max(start, min(value, end));
}
function evaluate(value, param) {
    return typeof value === 'function' ? value(param) : value;
}
function getSide(placement) {
    return placement.split('-')[0];
}
function getAlignment(placement) {
    return placement.split('-')[1];
}
function getOppositeAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
}
function getAxisLength(axis) {
    return axis === 'y' ? 'height' : 'width';
}
const yAxisSides = /*#__PURE__*/ new Set([
    'top',
    'bottom'
]);
function getSideAxis(placement) {
    return yAxisSides.has(getSide(placement)) ? 'y' : 'x';
}
function getAlignmentAxis(placement) {
    return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
    if (rtl === void 0) rtl = false;
    const alignment = getAlignment(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const length = getAxisLength(alignmentAxis);
    let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
    if (rects.reference[length] > rects.floating[length]) mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
    return [
        mainAlignmentSide,
        getOppositePlacement(mainAlignmentSide)
    ];
}
function getExpandedPlacements(placement) {
    const oppositePlacement = getOppositePlacement(placement);
    return [
        getOppositeAlignmentPlacement(placement),
        oppositePlacement,
        getOppositeAlignmentPlacement(oppositePlacement)
    ];
}
function getOppositeAlignmentPlacement(placement) {
    return placement.replace(/start|end/g, (alignment)=>oppositeAlignmentMap[alignment]);
}
const lrPlacement = [
    'left',
    'right'
];
const rlPlacement = [
    'right',
    'left'
];
const tbPlacement = [
    'top',
    'bottom'
];
const btPlacement = [
    'bottom',
    'top'
];
function getSideList(side, isStart, rtl) {
    switch(side){
        case 'top':
        case 'bottom':
            if (rtl) return isStart ? rlPlacement : lrPlacement;
            return isStart ? lrPlacement : rlPlacement;
        case 'left':
        case 'right':
            return isStart ? tbPlacement : btPlacement;
        default:
            return [];
    }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
    const alignment = getAlignment(placement);
    let list = getSideList(getSide(placement), direction === 'start', rtl);
    if (alignment) {
        list = list.map((side)=>side + "-" + alignment);
        if (flipAlignment) list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
    return list;
}
function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, (side)=>oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...padding
    };
}
function getPaddingObject(padding) {
    return typeof padding !== 'number' ? expandPaddingObject(padding) : {
        top: padding,
        right: padding,
        bottom: padding,
        left: padding
    };
}
function rectToClientRect(rect) {
    const { x, y, width, height } = rect;
    return {
        width,
        height,
        top: y,
        left: x,
        right: x + width,
        bottom: y + height,
        x,
        y
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"avdAU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getComputedStyle", ()=>getComputedStyle);
parcelHelpers.export(exports, "getContainingBlock", ()=>getContainingBlock);
parcelHelpers.export(exports, "getDocumentElement", ()=>getDocumentElement);
parcelHelpers.export(exports, "getFrameElement", ()=>getFrameElement);
parcelHelpers.export(exports, "getNearestOverflowAncestor", ()=>getNearestOverflowAncestor);
parcelHelpers.export(exports, "getNodeName", ()=>getNodeName);
parcelHelpers.export(exports, "getNodeScroll", ()=>getNodeScroll);
parcelHelpers.export(exports, "getOverflowAncestors", ()=>getOverflowAncestors);
parcelHelpers.export(exports, "getParentNode", ()=>getParentNode);
parcelHelpers.export(exports, "getWindow", ()=>getWindow);
parcelHelpers.export(exports, "isContainingBlock", ()=>isContainingBlock);
parcelHelpers.export(exports, "isElement", ()=>isElement);
parcelHelpers.export(exports, "isHTMLElement", ()=>isHTMLElement);
parcelHelpers.export(exports, "isLastTraversableNode", ()=>isLastTraversableNode);
parcelHelpers.export(exports, "isNode", ()=>isNode);
parcelHelpers.export(exports, "isOverflowElement", ()=>isOverflowElement);
parcelHelpers.export(exports, "isShadowRoot", ()=>isShadowRoot);
parcelHelpers.export(exports, "isTableElement", ()=>isTableElement);
parcelHelpers.export(exports, "isTopLayer", ()=>isTopLayer);
parcelHelpers.export(exports, "isWebKit", ()=>isWebKit);
function hasWindow() {
    return typeof window !== 'undefined';
}
function getNodeName(node) {
    if (isNode(node)) return (node.nodeName || '').toLowerCase();
    // Mocked nodes in testing environments may not be instances of Node. By
    // returning `#document` an infinite loop won't occur.
    // https://github.com/floating-ui/floating-ui/issues/2317
    return '#document';
}
function getWindow(node) {
    var _node$ownerDocument;
    return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
    var _ref;
    return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
    if (!hasWindow()) return false;
    return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
    if (!hasWindow()) return false;
    return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
    if (!hasWindow()) return false;
    return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
    if (!hasWindow() || typeof ShadowRoot === 'undefined') return false;
    return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
const invalidOverflowDisplayValues = /*#__PURE__*/ new Set([
    'inline',
    'contents'
]);
function isOverflowElement(element) {
    const { overflow, overflowX, overflowY, display } = getComputedStyle(element);
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !invalidOverflowDisplayValues.has(display);
}
const tableElements = /*#__PURE__*/ new Set([
    'table',
    'td',
    'th'
]);
function isTableElement(element) {
    return tableElements.has(getNodeName(element));
}
const topLayerSelectors = [
    ':popover-open',
    ':modal'
];
function isTopLayer(element) {
    return topLayerSelectors.some((selector)=>{
        try {
            return element.matches(selector);
        } catch (_e) {
            return false;
        }
    });
}
const transformProperties = [
    'transform',
    'translate',
    'scale',
    'rotate',
    'perspective'
];
const willChangeValues = [
    'transform',
    'translate',
    'scale',
    'rotate',
    'perspective',
    'filter'
];
const containValues = [
    'paint',
    'layout',
    'strict',
    'content'
];
function isContainingBlock(elementOrCss) {
    const webkit = isWebKit();
    const css = isElement(elementOrCss) ? getComputedStyle(elementOrCss) : elementOrCss;
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    // https://drafts.csswg.org/css-transforms-2/#individual-transforms
    return transformProperties.some((value)=>css[value] ? css[value] !== 'none' : false) || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || willChangeValues.some((value)=>(css.willChange || '').includes(value)) || containValues.some((value)=>(css.contain || '').includes(value));
}
function getContainingBlock(element) {
    let currentNode = getParentNode(element);
    while(isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)){
        if (isContainingBlock(currentNode)) return currentNode;
        else if (isTopLayer(currentNode)) return null;
        currentNode = getParentNode(currentNode);
    }
    return null;
}
function isWebKit() {
    if (typeof CSS === 'undefined' || !CSS.supports) return false;
    return CSS.supports('-webkit-backdrop-filter', 'none');
}
const lastTraversableNodeNames = /*#__PURE__*/ new Set([
    'html',
    'body',
    '#document'
]);
function isLastTraversableNode(node) {
    return lastTraversableNodeNames.has(getNodeName(node));
}
function getComputedStyle(element) {
    return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
    if (isElement(element)) return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
    };
    return {
        scrollLeft: element.scrollX,
        scrollTop: element.scrollY
    };
}
function getParentNode(node) {
    if (getNodeName(node) === 'html') return node;
    const result = // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node);
    return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
    const parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) return node.ownerDocument ? node.ownerDocument.body : node.body;
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) return parentNode;
    return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
    var _node$ownerDocument2;
    if (list === void 0) list = [];
    if (traverseIframes === void 0) traverseIframes = true;
    const scrollableAncestor = getNearestOverflowAncestor(node);
    const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
    const win = getWindow(scrollableAncestor);
    if (isBody) {
        const frameElement = getFrameElement(win);
        return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
    }
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
    return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"23v7l":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _stimulus = require("@hotwired/stimulus");
// Connects to data-controller="orbital-menu"
exports.default = class extends (0, _stimulus.Controller) {
    static targets = [
        "item"
    ];
    connect() {
        this.currentIndex = 0;
        this.updateFocus();
    }
    handleKeydown(event) {
        const items = this.getEnabledItems();
        if (items.length === 0) return;
        switch(event.key){
            case "ArrowDown":
                event.preventDefault();
                this.focusNext(items);
                break;
            case "ArrowUp":
                event.preventDefault();
                this.focusPrevious(items);
                break;
            case "Home":
                event.preventDefault();
                this.focusFirst(items);
                break;
            case "End":
                event.preventDefault();
                this.focusLast(items);
                break;
            case "Enter":
            case " ":
                event.preventDefault();
                this.activateItem(event.target);
                break;
            case "Escape":
                event.preventDefault();
                this.closeMenu();
                break;
            default:
                // Type-ahead: focus item starting with pressed key
                if (event.key.length === 1 && /^[a-z0-9]$/i.test(event.key)) this.focusItemStartingWith(items, event.key);
        }
    }
    getEnabledItems() {
        return this.itemTargets.filter((item)=>!item.hasAttribute('data-disabled') && item.getAttribute('aria-disabled') !== 'true' && this.isVisible(item));
    }
    isVisible(element) {
        return element.offsetParent !== null;
    }
    focusNext(items) {
        this.currentIndex = (this.currentIndex + 1) % items.length;
        this.updateFocus(items);
    }
    focusPrevious(items) {
        this.currentIndex = (this.currentIndex - 1 + items.length) % items.length;
        this.updateFocus(items);
    }
    focusFirst(items) {
        this.currentIndex = 0;
        this.updateFocus(items);
    }
    focusLast(items) {
        this.currentIndex = items.length - 1;
        this.updateFocus(items);
    }
    updateFocus(items = null) {
        const enabledItems = items || this.getEnabledItems();
        if (enabledItems.length === 0) return;
        // Ensure currentIndex is valid
        this.currentIndex = Math.max(0, Math.min(this.currentIndex, enabledItems.length - 1));
        // Update tabindex for roving tabindex pattern
        enabledItems.forEach((item, index)=>{
            if (index === this.currentIndex) {
                item.setAttribute('tabindex', '0');
                item.focus();
            } else item.setAttribute('tabindex', '-1');
        });
    }
    activateItem(item) {
        // Check if it's a submenu trigger
        if (item.hasAttribute('aria-haspopup')) {
            const subController = this.application.getControllerForElementAndIdentifier(item.closest('[data-controller*="orbital-menu-sub"]'), 'orbital-menu-sub');
            if (subController) subController.toggle();
        } else // Activate the menu item (trigger click)
        item.click();
    }
    focusItemStartingWith(items, key) {
        const lowerKey = key.toLowerCase();
        const startIndex = (this.currentIndex + 1) % items.length;
        // Search from current position forward
        for(let i = 0; i < items.length; i++){
            const index = (startIndex + i) % items.length;
            const item = items[index];
            const text = item.textContent.trim().toLowerCase();
            if (text.startsWith(lowerKey)) {
                this.currentIndex = index;
                this.updateFocus(items);
                return;
            }
        }
    }
    closeMenu() {
        // If inside a popover, close it
        const popover = this.element.closest('[popover]');
        if (popover) popover.hidePopover();
        // If inside a submenu, close it
        const submenu = this.element.closest('.Orbital-Menu-Sub');
        if (submenu) {
            const subController = this.application.getControllerForElementAndIdentifier(submenu, 'orbital-menu-sub');
            if (subController) subController.close();
        }
    }
};

},{"@hotwired/stimulus":"hVNih","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"i9fGq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _stimulus = require("@hotwired/stimulus");
// Connects to data-controller="orbital-menu-sub"
exports.default = class extends (0, _stimulus.Controller) {
    static targets = [
        "trigger",
        "content"
    ];
    toggle() {
        const isOpen = this.element.getAttribute('data-state') === 'open';
        if (isOpen) this.close();
        else this.open();
    }
    open() {
        this.element.setAttribute('data-state', 'open');
        this.triggerTarget.setAttribute('aria-expanded', 'true');
        // Focus first item in submenu
        const firstItem = this.contentTarget.querySelector('[role="menuitem"]');
        if (firstItem) firstItem.focus();
    }
    close() {
        this.element.setAttribute('data-state', 'closed');
        this.triggerTarget.setAttribute('aria-expanded', 'false');
        // Return focus to trigger
        this.triggerTarget.focus();
    }
};

},{"@hotwired/stimulus":"hVNih","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}]},["6b9Pj"], "6b9Pj", "parcelRequire2e91", {})

//# sourceMappingURL=index.js.map
