// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"index.js":[function(require,module,exports) {
"use strict"; // constants

var HOME_ACTIVE = 'images/buttons/round_home_black_48dp.png';
var HOME_INACTIVE = 'images/buttons/round_home_outline_48dp.png';
var SAVED_ACTIVE = 'images/buttons/round_bookmarks_black_48dp.png';
var SAVED_INACTIVE = 'images/buttons/round_bookmarks_outline_48dp.png';
var ADD_ACTIVE = 'images/buttons/round_add_box_black_48dp.png';
var ADD_INACTIVE = 'images/buttons/round_add_box_outline_48dp.png';
var PROFILE_ACTIVE = 'images/buttons/round_account_box_black_48dp.png';
var PROFILE_INACTIVE = 'images/buttons/round_account_box_outline_48dp.png'; // main elements

var mainIndex = get('.main__index');
var mainBookmark = get('.main__bookmark');
var mainCreate = get('.main__create');
var mainProfile = get('.main__profile'); // button__nav

var navButtonHome = get('[class*="btn-home--"]');
var navButtonSaved = get('[class*="btn-bookmarks--"]');
var navButtonAdd = get('[class*="btn-add--"]');
var navButtonProfile = get('[class*="btn-profile--"]'); // button__cards_bookmark

var bookmark1 = get('.card__bookmark1');
var bookmark2 = get('.card__bookmark2');
var bookmark3 = get('.card__bookmark3'); // button__cards-show/answer

var showAnswerCard1 = get('.btn__card--1 button');
var showAnswerCard2 = get('.btn__card--2 button');
var showAnswerCard3 = get('.btn__card--3 button'); // Answer sections

var answerCard1 = get('.answer__card-1');
var answerCard2 = get('.answer__card-2');
var answerCard3 = get('.answer__card-3'); // form

var formButtonSubmit = get('.card__button--submit'); // site headline

var headerTitle = get('.header__title'); // Form

var createForm = get('form'); // EVENTS

navButtonHome.addEventListener('click', navigateTo('QUIZ - APP'));
navButtonSaved.addEventListener('click', navigateTo('BOOKMARKS'));
navButtonAdd.addEventListener('click', navigateTo('CREATE'));
navButtonProfile.addEventListener('click', navigateTo('PROFILE'));
showAnswerCard1.addEventListener('click', forCard(1));
showAnswerCard2.addEventListener('click', forCard(2));
showAnswerCard3.addEventListener('click', forCard(3));
bookmark1.addEventListener('click', toggleBookmark(event));
bookmark2.addEventListener('click', toggleBookmark(event));
bookmark3.addEventListener('click', toggleBookmark(event));
formButtonSubmit.addEventListener('click', function (event) {
  event.preventDefault();
  get('textarea[name=question]').value = '';
  get('textarea[name=answer]').value = '';
  get('input[name=tags]').value = '';
}); // LOGIC

function get(selector) {
  return document.querySelector(selector);
}

function navigateTo(site) {
  if (site === 'QUIZ - APP') {
    return function () {
      headerTitle.textContent = site;
      mainIndex.classList.remove('hidden');
      mainBookmark.classList.add('hidden');
      mainCreate.classList.add('hidden');
      mainProfile.classList.add('hidden');
      navButtonHome.src = HOME_ACTIVE;
      navButtonSaved.src = SAVED_INACTIVE;
      navButtonAdd.src = ADD_INACTIVE;
      navButtonProfile.src = PROFILE_INACTIVE;
    };
  } else if (site === 'BOOKMARKS') {
    return function () {
      headerTitle.textContent = site;
      mainIndex.classList.add('hidden');
      mainBookmark.classList.remove('hidden');
      mainCreate.classList.add('hidden');
      mainProfile.classList.add('hidden');
      navButtonHome.src = HOME_INACTIVE;
      navButtonSaved.src = SAVED_ACTIVE;
      navButtonAdd.src = ADD_INACTIVE;
      navButtonProfile.src = PROFILE_INACTIVE;
    };
  } else if (site === 'CREATE') {
    return function () {
      headerTitle.textContent = site;
      mainIndex.classList.add('hidden');
      mainBookmark.classList.add('hidden');
      mainCreate.classList.remove('hidden');
      mainProfile.classList.add('hidden');
      navButtonHome.src = HOME_INACTIVE;
      navButtonSaved.src = SAVED_INACTIVE;
      navButtonAdd.src = ADD_ACTIVE;
      navButtonProfile.src = PROFILE_INACTIVE;
    };
  } else if (site === 'PROFILE') {
    return function () {
      headerTitle.textContent = site;
      mainIndex.classList.add('hidden');
      mainBookmark.classList.add('hidden');
      mainCreate.classList.add('hidden');
      mainProfile.classList.remove('hidden');
      navButtonHome.src = HOME_INACTIVE;
      navButtonSaved.src = SAVED_INACTIVE;
      navButtonAdd.src = ADD_INACTIVE;
      navButtonProfile.src = PROFILE_ACTIVE;
    };
  }
}

function forCard(number) {
  if (number === 1) {
    return function () {
      if (showAnswerCard1.classList.contains('card__button--show-answer')) {
        answerCard1.classList.remove('hidden');
        showAnswerCard1.classList.remove('card__button--show-answer');
        showAnswerCard1.classList.add('card__button--hide-answer');
      } else {
        answerCard1.classList.add('hidden');
        showAnswerCard1.classList.add('card__button--show-answer');
        showAnswerCard1.classList.remove('card__button--hide-answer');
      }
    };
  } else if (number === 2) {
    return function () {
      if (showAnswerCard2.classList.contains('card__button--show-answer')) {
        answerCard2.classList.remove('hidden');
        showAnswerCard2.classList.remove('card__button--show-answer');
        showAnswerCard2.classList.add('card__button--hide-answer');
      } else {
        answerCard2.classList.add('hidden');
        showAnswerCard2.classList.add('card__button--show-answer');
        showAnswerCard2.classList.remove('card__button--hide-answer');
      }
    };
  } else if (number === 3) {
    return function () {
      if (showAnswerCard3.classList.contains('card__button--show-answer')) {
        answerCard3.classList.remove('hidden');
        showAnswerCard3.classList.remove('card__button--show-answer');
        showAnswerCard3.classList.add('card__button--hide-answer');
      } else {
        answerCard3.classList.add('hidden');
        showAnswerCard3.classList.add('card__button--show-answer');
        showAnswerCard3.classList.remove('card__button--hide-answer');
      }
    };
  }
}

function toggleBookmark(event) {
  return function (event) {
    event.target.classList.toggle('card__bookmark--active');
    event.target.classList.toggle('card__bookmark--inactive');
  };
}
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50897" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/quiz-app.e31bb0bc.js.map