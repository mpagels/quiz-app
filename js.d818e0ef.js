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
})({"src/js/utility.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;
exports.getAll = getAll;

function get(selector) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return target.querySelector(selector);
}

function getAll(selector) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return target.querySelectorAll(selector);
}
},{}],"src/js/card-data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CARD_DATA = void 0;
var CARD_DATA = [{
  id: 1,
  question: 'Do all HTML tags come in a pair?',
  answer: 'No, there are single HTML tags that do not need a closing tag. Examples are the &ltimg> tag and &ltbr> tags.',
  tags: ['HTML', 'Basics'],
  bookmarked: true
}, {
  id: 2,
  question: 'What are style sheets?',
  answer: 'Style sheets enable you to build consistent, transportable, and well-defined style templates. These templates can be linked to several different web pages, making it easy to maintain and change the look and feel of all the web pages within site.',
  tags: ['HTML', 'CSS', 'Basics'],
  bookmarked: false
}];
exports.CARD_DATA = CARD_DATA;
},{}],"src/js/form.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _utility = require("./utility");

var _cardData = require("./card-data");

function _default() {
  var form = (0, _utility.get)('form');
  form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (event) {
    event.preventDefault();
    createCardData(form.question.value, form.answer.value, form.tags.value);
    form.reset();
  });
}

function createCardData(question, answer, tags) {
  _cardData.CARD_DATA.push({
    id: _cardData.CARD_DATA.length + 1,
    question: question,
    answer: answer,
    bookmarked: false,
    tags: tags.split(',').map(function (tag) {
      return tag.trim();
    })
  });
}
},{"./utility":"src/js/utility.js","./card-data":"src/js/card-data.js"}],"src/js/anwer-toggleLogic.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleAnswer = toggleAnswer;

function toggleAnswer(card) {
  var buttonAnswer = card.querySelector('[class*="card__button--"]');
  var answer = card.querySelector('.answer');
  buttonAnswer.addEventListener('click', showAnswerForCard(buttonAnswer, answer));
}

function showAnswerForCard(button, answerCard) {
  return function () {
    if (button.classList.contains('card__button--show-answer')) {
      answerCard === null || answerCard === void 0 ? void 0 : answerCard.classList.remove('hidden');
      button === null || button === void 0 ? void 0 : button.classList.remove('card__button--show-answer');
      button === null || button === void 0 ? void 0 : button.classList.add('card__button--hide-answer');
    } else {
      answerCard === null || answerCard === void 0 ? void 0 : answerCard.classList.add('hidden');
      button === null || button === void 0 ? void 0 : button.classList.add('card__button--show-answer');
      button === null || button === void 0 ? void 0 : button.classList.remove('card__button--hide-answer');
    }
  };
}
},{}],"src/js/bookmark.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bookmarkLogic = bookmarkLogic;

var _cardData = require("./card-data");

var _cardCreate = require("./card-create");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function bookmarkLogic(card) {
  var bookmark = card.querySelector('[class*="card__bookmark--"]');
  bookmark.addEventListener('click', toggleBookmark);
}

function toggleBookmark(event) {
  event.target.classList.toggle('card__bookmark--active');
  event.target.classList.toggle('card__bookmark--inactive');
  var id = event.target.dataset.id;
  changeBookmark(id);

  if (event.target.parentElement.parentElement.className === 'main__bookmark') {
    (0, _cardCreate.cardLogic)(true);
  }
}

function changeBookmark(id) {
  var data = _objectSpread({}, _cardData.CARD_DATA[id - 1]);

  data.bookmarked = data.bookmarked ? data.bookmarked = false : data.bookmarked = true;
  _cardData.CARD_DATA[id - 1] = data;
}
},{"./card-data":"src/js/card-data.js","./card-create":"src/js/card-create.js"}],"src/js/card-create.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cardLogic = cardLogic;

var _utility = require("./utility");

var _anwerToggleLogic = require("./anwer-toggleLogic");

var _bookmark = require("./bookmark");

var _cardData = require("./card-data");

var cardSection = document.querySelector('.main__index');
var bookmarkPage = document.querySelector('.main__bookmark');

function cardLogic() {
  var buildBookmarks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  cardSection.innerHTML = '';
  bookmarkPage.innerHTML = '';
  !buildBookmarks ? _cardData.CARD_DATA.forEach(buildCardWith) : _cardData.CARD_DATA.filter(function (card) {
    return card.bookmarked;
  }).forEach(buildBookmarkCardWith);
} // Helper functions


function buildCardWith(data) {
  var el = buildCardBody(data);
  cardSection.appendChild(el);
}

function buildBookmarkCardWith(data) {
  var el = buildCardBody(data);
  bookmarkPage.appendChild(el);
}

function buildCardBody(data) {
  var el = document.createElement('section');
  el.className = 'card';
  el.innerHTML = buildInnerHTML(data);

  if (data.tags.length > 0) {
    buildTags(data, (0, _utility.get)('ul', el));
  }

  (0, _anwerToggleLogic.toggleAnswer)(el);
  (0, _bookmark.bookmarkLogic)(el);
  return el;
}

function buildInnerHTML(_ref) {
  var bookmarked = _ref.bookmarked,
      question = _ref.question,
      id = _ref.id,
      answer = _ref.answer;
  return "<button class=\"card__bookmark".concat(bookmarked ? '--active' : '--inactive', "\" data-id=").concat(id, "></button>\n    <section class=\"card__content\">\n      <section class=\"card__question\">\n        ").concat(question, "\n        <span>\n          <ul>\n          </ul>\n        </span>\n      </section>\n      <section class=\"answer hidden\">\n      ").concat(answer, "\n      </section>\n      <section class=\"card__button\">\n        <button class=\"card__button--show-answer\"></button>\n      </section>\n    </section>");
}

function buildTags(_ref2, ulElement) {
  var tags = _ref2.tags;
  tags.forEach(function (tag) {
    var li = document.createElement('li');
    li.textContent = tag;
    li.className = 'tags';
    ulElement.appendChild(li);
  });
}
},{"./utility":"src/js/utility.js","./anwer-toggleLogic":"src/js/anwer-toggleLogic.js","./bookmark":"src/js/bookmark.js","./card-data":"src/js/card-data.js"}],"images/buttons/round_home_black_48dp.png":[function(require,module,exports) {
module.exports = "round_home_black_48dp.94b2d040.png";
},{}],"images/buttons/round_home_outline_48dp.png":[function(require,module,exports) {
module.exports = "round_home_outline_48dp.4df0597d.png";
},{}],"images/buttons/round_bookmarks_black_48dp.png":[function(require,module,exports) {
module.exports = "round_bookmarks_black_48dp.904188d1.png";
},{}],"images/buttons/round_bookmarks_outline_48dp.png":[function(require,module,exports) {
module.exports = "round_bookmarks_outline_48dp.7c000e48.png";
},{}],"images/buttons/round_add_box_black_48dp.png":[function(require,module,exports) {
module.exports = "round_add_box_black_48dp.521a1e91.png";
},{}],"images/buttons/round_add_box_outline_48dp.png":[function(require,module,exports) {
module.exports = "round_add_box_outline_48dp.a8018d88.png";
},{}],"images/buttons/round_account_box_black_48dp.png":[function(require,module,exports) {
module.exports = "round_account_box_black_48dp.73e5eef3.png";
},{}],"images/buttons/round_account_box_outline_48dp.png":[function(require,module,exports) {
module.exports = "round_account_box_outline_48dp.92284b6e.png";
},{}],"src/js/nav.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _utility = require("./utility");

var _cardCreate = require("./card-create");

var _round_home_black_48dp = _interopRequireDefault(require("./../../images/buttons/round_home_black_48dp.png"));

var _round_home_outline_48dp = _interopRequireDefault(require("./../../images/buttons/round_home_outline_48dp.png"));

var _round_bookmarks_black_48dp = _interopRequireDefault(require("./../../images/buttons/round_bookmarks_black_48dp.png"));

var _round_bookmarks_outline_48dp = _interopRequireDefault(require("./../../images/buttons/round_bookmarks_outline_48dp.png"));

var _round_add_box_black_48dp = _interopRequireDefault(require("./../../images/buttons/round_add_box_black_48dp.png"));

var _round_add_box_outline_48dp = _interopRequireDefault(require("./../../images/buttons/round_add_box_outline_48dp.png"));

var _round_account_box_black_48dp = _interopRequireDefault(require("./../../images/buttons/round_account_box_black_48dp.png"));

var _round_account_box_outline_48dp = _interopRequireDefault(require("./../../images/buttons/round_account_box_outline_48dp.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  // main elements
  var mainIndex = (0, _utility.get)('.main__index');
  var mainBookmark = (0, _utility.get)('.main__bookmark');
  var mainCreate = (0, _utility.get)('.main__create');
  var mainProfile = (0, _utility.get)('.main__profile'); // button__nav

  var navButtonHome = (0, _utility.get)('[class*="btn-home--"]');
  var navButtonSaved = (0, _utility.get)('[class*="btn-bookmarks--"]');
  var navButtonAdd = (0, _utility.get)('[class*="btn-add--"]');
  var navButtonProfile = (0, _utility.get)('[class*="btn-profile--"]'); // site headline

  var headerTitle = (0, _utility.get)('.header__title'); // EVENTS

  navButtonHome === null || navButtonHome === void 0 ? void 0 : navButtonHome.addEventListener('click', navigateTo('QUIZ - APP', mainIndex, navButtonHome));
  navButtonSaved === null || navButtonSaved === void 0 ? void 0 : navButtonSaved.addEventListener('click', navigateTo('BOOKMARKS', mainBookmark, navButtonSaved));
  navButtonAdd === null || navButtonAdd === void 0 ? void 0 : navButtonAdd.addEventListener('click', navigateTo('CREATE', mainCreate, navButtonAdd));
  navButtonProfile === null || navButtonProfile === void 0 ? void 0 : navButtonProfile.addEventListener('click', navigateTo('PROFILE', mainProfile, navButtonProfile)); // LOGIC

  function navigateTo(site, mainSection, navButton) {
    return function () {
      if (headerTitle) {
        headerTitle.textContent = site;
      }

      mainIndex === null || mainIndex === void 0 ? void 0 : mainIndex.classList.add('hidden');
      mainBookmark === null || mainBookmark === void 0 ? void 0 : mainBookmark.classList.add('hidden');
      mainCreate === null || mainCreate === void 0 ? void 0 : mainCreate.classList.add('hidden');
      mainProfile === null || mainProfile === void 0 ? void 0 : mainProfile.classList.add('hidden');
      mainSection === null || mainSection === void 0 ? void 0 : mainSection.classList.remove('hidden');
      navButtonHome.src = _round_home_outline_48dp.default;
      navButtonSaved.src = _round_bookmarks_outline_48dp.default;
      navButtonAdd.src = _round_add_box_outline_48dp.default;
      navButtonProfile.src = _round_account_box_outline_48dp.default;

      if (navButton === navButtonHome) {
        navButton.src = _round_home_black_48dp.default;
        (0, _cardCreate.cardLogic)();
      } else if (navButton === navButtonSaved) {
        navButton.src = _round_bookmarks_black_48dp.default;
        (0, _cardCreate.cardLogic)(true);
      } else if (navButton === navButtonAdd) {
        navButton.src = _round_add_box_black_48dp.default;
      } else if (navButton === navButtonProfile) {
        navButton.src = _round_account_box_black_48dp.default;
      }
    };
  }
}
},{"./utility":"src/js/utility.js","./card-create":"src/js/card-create.js","./../../images/buttons/round_home_black_48dp.png":"images/buttons/round_home_black_48dp.png","./../../images/buttons/round_home_outline_48dp.png":"images/buttons/round_home_outline_48dp.png","./../../images/buttons/round_bookmarks_black_48dp.png":"images/buttons/round_bookmarks_black_48dp.png","./../../images/buttons/round_bookmarks_outline_48dp.png":"images/buttons/round_bookmarks_outline_48dp.png","./../../images/buttons/round_add_box_black_48dp.png":"images/buttons/round_add_box_black_48dp.png","./../../images/buttons/round_add_box_outline_48dp.png":"images/buttons/round_add_box_outline_48dp.png","./../../images/buttons/round_account_box_black_48dp.png":"images/buttons/round_account_box_black_48dp.png","./../../images/buttons/round_account_box_outline_48dp.png":"images/buttons/round_account_box_outline_48dp.png"}],"src/js/index.js":[function(require,module,exports) {
"use strict";

var _form = _interopRequireDefault(require("./form"));

var _nav = _interopRequireDefault(require("./nav"));

var _cardCreate = require("./card-create");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    (0, _nav.default)();
    (0, _cardCreate.cardLogic)();
    (0, _form.default)();
  }, 100);
});
},{"./form":"src/js/form.js","./nav":"src/js/nav.js","./card-create":"src/js/card-create.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49746" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/js/index.js"], null)
//# sourceMappingURL=js.d818e0ef.js.map