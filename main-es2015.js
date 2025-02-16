(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/animes/anime-detail/anime-detail.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/animes/anime-detail/anime-detail.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"anime\">\n\n  <h1 *ngIf=\"anime.title\">{{anime.title}}</h1>\n  <img *ngIf=\"anime.image_url\" [src]=\"anime.image_url\" alt=\"\">\n\n  <!-- <iframe width=\"560\" height=\"315\" [src]=\"anime.trailer_url\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe> -->\n\n  <p *ngIf=\"anime.title_english\"><b>Título en inglés: </b>{{anime.title_english}}</p>\n  <p *ngIf=\"anime.title_japanese\"><b>Título en japonés: </b>{{anime.title_japanese}}</p>\n  <p *ngIf=\"anime.title_synonyms\"><b>Sinónimos del título: </b>\n    <span *ngFor=\"let synonym of anime.title_synonyms; let i = index\">{{i === anime.title_synonyms.length - 1 ? synonym : synonym + ', '}}</span>\n  </p>\n  <p *ngIf=\"anime.episodes\"><b>Episodios:</b> {{anime.episodes}}</p>\n  <p *ngIf=\"anime.status\"><b>Estado:</b> {{anime.status}}</p>\n  <p *ngIf=\"anime.duration\"><b>Duración:</b> {{anime.duration}}</p>\n  <p *ngIf=\"anime.rating\"><b>Clasificación:</b> {{anime.rating}}</p>\n  <p *ngIf=\"anime.score\"><b>Puntuación:</b> {{anime.score}}</p>\n  <p *ngIf=\"anime.rank\"><b>Rank:</b> {{anime.rank}}</p>\n  <p *ngIf=\"anime.popularity\"><b>Popularidad:</b> {{anime.popularity}}</p>\n  <p *ngIf=\"anime.synopsis\"><b>Sinopsis:</b> {{anime.synopsis}}</p>\n  <p *ngIf=\"anime.premiered\"><b>Estrenado:</b> {{anime.premiered}}</p>\n  <p *ngIf=\"anime.broadcast\"><b>Emisión:</b> {{anime.broadcast}}</p>\n  <p *ngIf=\"anime.producers.length\"><b>Productores:</b> {{anime.producers[0].name}}</p>\n  <p *ngIf=\"anime.licensors.length\"><b>Licenciantes:</b> {{anime.licensors[0].name}}</p>\n  <p *ngIf=\"anime.studios.length\"><b>Estudio:</b> {{anime.studios[0].name}}</p>\n  <div *ngIf=\"anime.genres.length\">\n    <p>\n      <b>Géneros: </b>\n      <span *ngFor=\"let genero of anime.genres; let i = index\">\n        {{i === anime.genres.length - 1 ? genero.name : genero.name + ', '}}\n      </span>\n    </p>\n  </div>\n  <p *ngIf=\"anime.opening_themes.length\"><b>Tema Opening:</b> {{anime.opening_themes[0]}}</p>\n  <p *ngIf=\"anime.ending_themes.length\"><b>Tema Ending:</b> {{anime.ending_themes[0]}}</p>\n  <a *ngIf=\"anime.trailer_url\" [href]=\"anime.trailer_url\" target=\"_blank\">Trailer</a>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/animes/anime-list/animes.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/animes/anime-list/animes.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-input-group nzSearch nzSize=\"large\" [nzAddOnAfter]=\"suffixButton\">\r\n  <input\r\n  [(ngModel)]=\"name\"\r\n  (keyup.enter)=\"getAnimesByName()\"\r\n  type=\"text\"\r\n  nz-input placeholder=\"Dragon Ball\"\r\n  />\r\n</nz-input-group>\r\n<ng-template #suffixButton>\r\n  <button\r\n  (click)=\"getAnimesByName()\"\r\n  nz-button nzType=\"primary\"\r\n  nzSize=\"large\"\r\n  nzSearch\r\n  >\r\n    Search\r\n  </button>\r\n</ng-template>\r\n\r\n<div class=\"container\" *ngIf=\"animes.length\">\r\n  <div *ngFor=\"let anime of animes\">\r\n\r\n    <nz-card\r\n    nzHoverable\r\n    [title]=\"anime.title\"\r\n    routerLink=\"/anime-detail/{{anime.mal_id}}\"\r\n    [nzCover]=\"coverTemplate\">\r\n      <nz-card-meta [nzTitle]=\"anime.title\"></nz-card-meta>\r\n    </nz-card>\r\n    <ng-template #coverTemplate>\r\n      <img alt=\"image anime\" [src]=\"anime.image_url\" />\r\n    </ng-template>\r\n\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul nz-menu nzMode=\"horizontal\">\r\n  <li nz-menu-item nzSelected>\r\n    <a routerLink=\"/home\">Home</a>\r\n  </li>\r\n  <li nz-menu-item>\r\n    <a routerLink=\"/animes\">Animes</a>\r\n  </li>\r\n  <li nz-menu-item>\r\n    <a routerLink=\"/mangas\">Mangas</a>\r\n  </li>\r\n</ul>\r\n\r\n<div class=\"routerOutlet\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Angular Anime Project</h1>\n<div>\n  <img src=\"./assets/images/angular.png\" alt=\"angular\">\n  <span>+</span>\n  <img src=\"./assets/images/zorro.svg\" alt=\"zorro\">\n  <span>+</span>\n  <img src=\"./assets/images/jikan.png\" alt=\"jikan\">\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mangas/manga-detail/manga-detail.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mangas/manga-detail/manga-detail.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"manga\">\n\n  <h1 *ngIf=\"manga.title\">{{manga.title}}</h1>\n  <img *ngIf=\"manga.image_url\" [src]=\"manga.image_url\" alt=\"\">\n\n  <p *ngIf=\"manga.title_english\"><b>Título en inglés: </b>{{manga.title_english}}</p>\n  <p *ngIf=\"manga.title_japanese\"><b>Título en japonés: </b>{{manga.title_japanese}}</p>\n  <p *ngIf=\"manga.title_synonyms\"><b>Sinónimos del título: </b>\n    <span *ngFor=\"let synonym of manga.title_synonyms; let i = index\">{{i === manga.title_synonyms.length - 1 ? synonym : synonym + ', '}}</span>\n  </p>\n  <p *ngIf=\"manga.volumes\"><b>Volúmenes: </b>{{manga.volumes}}</p>\n  <p *ngIf=\"manga.chapters\"><b>Capítulos: </b>{{manga.chapters}}</p>\n  <p *ngIf=\"manga.status\"><b>Estado:</b> {{manga.status}}</p>\n  <div *ngIf=\"manga.published\">\n    <b>Publicado:</b>\n    <p *ngIf=\"manga.published.from\" [ngStyle]=\"{ 'margin-bottom': manga.published.to ? 0 : '1em' }\"><b>Desde:</b> {{manga.published.from | date}}</p>\n    <p *ngIf=\"manga.published.to\"><b>Hasta:</b> {{manga.published.to | date}}</p>\n  </div>\n  <p *ngIf=\"manga.score\"><b>Puntuación:</b> {{manga.score}}</p>\n  <p *ngIf=\"manga.rank\"><b>Rank:</b> {{manga.rank}}</p>\n  <p *ngIf=\"manga.popularity\"><b>Popularidad:</b> {{manga.popularity}}</p>\n  <p *ngIf=\"manga.synopsis\"><b>Sinopsis:</b> {{manga.synopsis}}</p>\n  <div *ngIf=\"manga.genres.length\">\n    <p>\n      <b>Géneros: </b>\n      <span *ngFor=\"let genero of manga.genres; let i = index\">\n        {{i === manga.genres.length - 1 ? genero.name : genero.name + ', '}}\n      </span>\n    </p>\n  </div>\n  <div *ngIf=\"manga.authors\">\n    <b>Autores:</b>\n    <p *ngFor=\"let autor of manga.authors\" style=\"margin-bottom: 0\"><a [href]=\"autor.url\" target=\"_blank\">👉 {{autor.name}}</a></p>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mangas/manga-list/manga-list.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mangas/manga-list/manga-list.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-input-group nzSearch nzSize=\"large\" [nzAddOnAfter]=\"suffixButton\">\n  <input\n  [(ngModel)]=\"name\"\n  (keyup.enter)=\"getMangasByName()\"\n  type=\"text\"\n  nz-input placeholder=\"One punch man\" />\n</nz-input-group>\n<ng-template #suffixButton>\n  <button\n  (click)=\"getMangasByName()\"\n  nz-button nzType=\"primary\"\n  nzSize=\"large\"\n  nzSearch\n  >\n    Search\n  </button>\n</ng-template>\n\n<div class=\"container\" *ngIf=\"mangas.length\">\n  <div *ngFor=\"let manga of mangas\">\n\n    <nz-card\n    nzHoverable\n    [title]=\"manga.title\"\n    routerLink=\"/manga-detail/{{manga.mal_id}}\"\n    [nzCover]=\"coverTemplate\">\n      <nz-card-meta [nzTitle]=\"manga.title\"></nz-card-meta>\n    </nz-card>\n    <ng-template #coverTemplate>\n      <img alt=\"image manga\" [src]=\"manga.image_url\" />\n    </ng-template>\n\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/animes.service.ts":
/*!***********************************!*\
  !*** ./src/app/animes.service.ts ***!
  \***********************************/
/*! exports provided: AnimesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimesService", function() { return AnimesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let AnimesService = class AnimesService {
    constructor(http) {
        this.http = http;
        this.url = 'https://api.jikan.moe/v3';
    }
    getAnimesByName(name) {
        return this.http.get(`${this.url}/search/anime?q=${name}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.results));
    }
    getMangasByName(name) {
        return this.http.get(`${this.url}/search/manga?q=${name}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.results));
    }
    getAnimeById(id) {
        return this.http.get(`${this.url}/anime/${id}`);
    }
    getMangaById(id) {
        return this.http.get(`${this.url}/manga/${id}`);
    }
};
AnimesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AnimesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AnimesService);



/***/ }),

/***/ "./src/app/animes/anime-detail/anime-detail.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/animes/anime-detail/anime-detail.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  max-width: 50%;\n  margin: auto auto 2rem auto;\n  display: block;\n  border-radius: 0.25rem;\n}\n\nh1 {\n  text-align: center;\n}\n\niframe {\n  margin: auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5pbWVzL2FuaW1lLWRldGFpbC9DOlxcVXNlcnNcXGFsYmVydG9cXERlc2t0b3BcXG1pLWNvZGlnb1xcYW5ndWxhci1hbmltZS1wcm9qZWN0L3NyY1xcYXBwXFxhbmltZXNcXGFuaW1lLWRldGFpbFxcYW5pbWUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbmltZXMvYW5pbWUtZGV0YWlsL2FuaW1lLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hbmltZXMvYW5pbWUtZGV0YWlsL2FuaW1lLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luOiBhdXRvIGF1dG8gMnJlbSBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbn1cclxuXHJcbmgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlmcmFtZSB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiIsImltZyB7XG4gIG1heC13aWR0aDogNTAlO1xuICBtYXJnaW46IGF1dG8gYXV0byAycmVtIGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuXG5oMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaWZyYW1lIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/animes/anime-detail/anime-detail.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/animes/anime-detail/anime-detail.component.ts ***!
  \***************************************************************/
/*! exports provided: AnimeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimeDetailComponent", function() { return AnimeDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _animes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../animes.service */ "./src/app/animes.service.ts");




let AnimeDetailComponent = class AnimeDetailComponent {
    constructor(animesService, route) {
        this.animesService = animesService;
        this.route = route;
    }
    ngOnInit() {
        this.getAnimeById();
    }
    getAnimeById() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.animesService.getAnimeById(id)
            .subscribe(anime => {
            this.anime = anime;
        });
    }
};
AnimeDetailComponent.ctorParameters = () => [
    { type: _animes_service__WEBPACK_IMPORTED_MODULE_3__["AnimesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
AnimeDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-anime-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./anime-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/animes/anime-detail/anime-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./anime-detail.component.scss */ "./src/app/animes/anime-detail/anime-detail.component.scss")).default]
    })
], AnimeDetailComponent);



/***/ }),

/***/ "./src/app/animes/anime-list/animes.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/animes/anime-list/animes.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  display: grid;\n  grid-template-columns: 100%;\n  gap: 1rem;\n  margin-top: 1rem;\n  align-content: space-around;\n  justify-content: space-between;\n}\n\n@media (min-width: 960px) {\n  .container {\n    grid-template-columns: 30% 30% 30%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5pbWVzL2FuaW1lLWxpc3QvQzpcXFVzZXJzXFxhbGJlcnRvXFxEZXNrdG9wXFxtaS1jb2RpZ29cXGFuZ3VsYXItYW5pbWUtcHJvamVjdC9zcmNcXGFwcFxcYW5pbWVzXFxhbmltZS1saXN0XFxhbmltZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FuaW1lcy9hbmltZS1saXN0L2FuaW1lcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURFQTtFQUVFO0lBQ0Usa0NBQUE7RUNBRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYW5pbWVzL2FuaW1lLWxpc3QvYW5pbWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KSB7XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgMzAlIDMwJTtcclxuICB9XHJcblxyXG59XHJcbiIsIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gIGdhcDogMXJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSAzMCUgMzAlO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/animes/anime-list/animes.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/animes/anime-list/animes.component.ts ***!
  \*******************************************************/
/*! exports provided: AnimesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimesComponent", function() { return AnimesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _animes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animes.service */ "./src/app/animes.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _animes_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animes.actions */ "./src/app/animes/animes.actions.ts");





let AnimesComponent = class AnimesComponent {
    constructor(animesService, store) {
        this.animesService = animesService;
        this.store = store;
        this.name = '';
        this.animes = [];
    }
    ngOnInit() {
        this.store.select('lastSearchedAnime').subscribe(anime => {
            this.animes = anime;
        });
    }
    getAnimesByName() {
        this.animesService.getAnimesByName(this.name)
            .subscribe(animes => {
            this.animes = animes;
            const action = new _animes_actions__WEBPACK_IMPORTED_MODULE_4__["LastSearchedAnime"](animes);
            this.store.dispatch(action);
        });
    }
};
AnimesComponent.ctorParameters = () => [
    { type: _animes_service__WEBPACK_IMPORTED_MODULE_2__["AnimesService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
AnimesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-animes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./animes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/animes/anime-list/animes.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./animes.component.scss */ "./src/app/animes/anime-list/animes.component.scss")).default]
    })
], AnimesComponent);



/***/ }),

/***/ "./src/app/animes/animes.actions.ts":
/*!******************************************!*\
  !*** ./src/app/animes/animes.actions.ts ***!
  \******************************************/
/*! exports provided: LAST_SEARCHED_ANIME, LastSearchedAnime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAST_SEARCHED_ANIME", function() { return LAST_SEARCHED_ANIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastSearchedAnime", function() { return LastSearchedAnime; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const LAST_SEARCHED_ANIME = '[Anime] ✔ Add last anime searched';
class LastSearchedAnime {
    constructor(anime) {
        this.anime = anime;
        this.type = LAST_SEARCHED_ANIME;
    }
}


/***/ }),

/***/ "./src/app/animes/animes.reducer.ts":
/*!******************************************!*\
  !*** ./src/app/animes/animes.reducer.ts ***!
  \******************************************/
/*! exports provided: animeReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animeReducer", function() { return animeReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialState */ "./src/app/animes/initialState.ts");
/* harmony import */ var _animes_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animes.actions */ "./src/app/animes/animes.actions.ts");



function animeReducer(state = _initialState__WEBPACK_IMPORTED_MODULE_1__["initialState"], action) {
    switch (action.type) {
        case _animes_actions__WEBPACK_IMPORTED_MODULE_2__["LAST_SEARCHED_ANIME"]:
            return [...action.anime];
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/animes/initialState.ts":
/*!****************************************!*\
  !*** ./src/app/animes/initialState.ts ***!
  \****************************************/
/*! exports provided: initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const initialState = [
    {
        mal_id: "223",
        url: "https://myanimelist.net/anime/223/Dragon_Ball",
        image_url: "https://cdn.myanimelist.net/images/anime/1887/92364.jpg?s=9710b6fb426a62c9ca2deb991f7abfb0",
        title: "Dragon Ball",
        airing: false,
        synopsis: "Gokuu Son is a young boy who lives in the woods all alone—that is, until a girl named Bulma runs into him in her search for a set fmagical objects called the \"Dragon Balls.\" Since the artifacts are...",
        type: "TV",
        episodes: 153,
        score: 8.13,
        start_date: new Date("1986-02-26T00:00:00+00:00"),
        end_date: new Date("1989-04-12T00:00:00+00:00"),
        members: 544731,
        rated: "PG-13"
    },
    {
        mal_id: "225",
        url: "https://myanimelist.net/anime/225/Dragon_Ball_GT",
        image_url: "https://cdn.myanimelist.net/images/anime/11/20727.jpg?s=f142e2656af64230f12c64c96b5af3fa",
        title: "Dragon Ball GT",
        airing: false,
        synopsis: "Emperor Pilaf finally has his hands on the Black Star Dragon Balls after years of searching, which are said to be twice as powerful as Earth's normal ones. Pilaf is about to make his wish for world do...",
        type: "TV",
        episodes: 64,
        score: 6.64,
        start_date: new Date("1996-02-07T00:00:00+00:00"),
        end_date: new Date("1997-11-19T00:00:00+00:00"),
        members: 366368,
        rated: "PG-13"
    },
    {
        mal_id: "30694",
        url: "https://myanimelist.net/anime/30694/Dragon_Ball_Super",
        image_url: "https://cdn.myanimelist.net/images/anime/7/74606.jpg?s=45a02b9bcc08d906381a086129f6a0f5",
        title: "Dragon Ball Super",
        airing: false,
        synopsis: "Seven years after the events of Dragon Ball Z, Earth is at peace, and its people live free from any dangers lurking in the universe. However, this peace is short-lived; a sleeping evil awakens in the...",
        type: "TV",
        episodes: 131,
        score: 7.65,
        start_date: new Date("2015-07-05T00:00:00+00:00"),
        end_date: new Date("2018-03-25T00:00:00+00:00"),
        members: 351053,
        rated: "PG-13"
    }
];


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _animes_anime_list_animes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animes/anime-list/animes.component */ "./src/app/animes/anime-list/animes.component.ts");
/* harmony import */ var _animes_anime_detail_anime_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animes//anime-detail/anime-detail.component */ "./src/app/animes/anime-detail/anime-detail.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _mangas_manga_list_manga_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mangas/manga-list/manga-list.component */ "./src/app/mangas/manga-list/manga-list.component.ts");
/* harmony import */ var _mangas_manga_detail_manga_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mangas/manga-detail/manga-detail.component */ "./src/app/mangas/manga-detail/manga-detail.component.ts");








const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'animes', component: _animes_anime_list_animes_component__WEBPACK_IMPORTED_MODULE_3__["AnimesComponent"] },
    { path: 'anime-detail/:id', component: _animes_anime_detail_anime_detail_component__WEBPACK_IMPORTED_MODULE_4__["AnimeDetailComponent"] },
    { path: 'mangas', component: _mangas_manga_list_manga_list_component__WEBPACK_IMPORTED_MODULE_6__["MangaListComponent"] },
    { path: 'manga-detail/:id', component: _mangas_manga_detail_manga_detail_component__WEBPACK_IMPORTED_MODULE_7__["MangaDetailComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\n  margin: 0.5rem;\n  text-decoration: none;\n  color: white;\n}\na:hover {\n  color: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxhbGJlcnRvXFxEZXNrdG9wXFxtaS1jb2RpZ29cXGFuZ3VsYXItYW5pbWUtcHJvamVjdC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDQ0Y7QURBRTtFQUNFLGdCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcclxuICBtYXJnaW46IDAuNXJlbTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcclxuICB9XHJcbn1cclxuIiwiYSB7XG4gIG1hcmdpbjogMC41cmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmE6aG92ZXIge1xuICBjb2xvcjogbGlnaHRncmF5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'angular-anime-project';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/locales/es */ "./node_modules/@angular/common/locales/es.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _animes_anime_list_animes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./animes/anime-list/animes.component */ "./src/app/animes/anime-list/animes.component.ts");
/* harmony import */ var _animes_anime_detail_anime_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./animes/anime-detail/anime-detail.component */ "./src/app/animes/anime-detail/anime-detail.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _mangas_manga_list_manga_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mangas/manga-list/manga-list.component */ "./src/app/mangas/manga-list/manga-list.component.ts");
/* harmony import */ var _mangas_manga_detail_manga_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mangas/manga-detail/manga-detail.component */ "./src/app/mangas/manga-detail/manga-detail.component.ts");
/* harmony import */ var _app_reducers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app.reducers */ "./src/app/app.reducers.ts");














Object(_angular_common__WEBPACK_IMPORTED_MODULE_12__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_13___default.a);






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _animes_anime_list_animes_component__WEBPACK_IMPORTED_MODULE_14__["AnimesComponent"],
            _animes_anime_detail_anime_detail_component__WEBPACK_IMPORTED_MODULE_15__["AnimeDetailComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
            _mangas_manga_list_manga_list_component__WEBPACK_IMPORTED_MODULE_17__["MangaListComponent"],
            _mangas_manga_detail_manga_detail_component__WEBPACK_IMPORTED_MODULE_18__["MangaDetailComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_11__["NgZorroAntdModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot(_app_reducers__WEBPACK_IMPORTED_MODULE_19__["appReducers"]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"].instrument({
                maxAge: 25,
                logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production // Restrict extension to log-only mode
            })
        ],
        providers: [{ provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_11__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_11__["es_ES"] }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.reducers.ts":
/*!*********************************!*\
  !*** ./src/app/app.reducers.ts ***!
  \*********************************/
/*! exports provided: appReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducers", function() { return appReducers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _animes_animes_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animes/animes.reducer */ "./src/app/animes/animes.reducer.ts");
/* harmony import */ var _mangas_mangas_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mangas/mangas.reducers */ "./src/app/mangas/mangas.reducers.ts");



const appReducers = {
    lastSearchedAnime: _animes_animes_reducer__WEBPACK_IMPORTED_MODULE_1__["animeReducer"],
    lastSearchedManga: _mangas_mangas_reducers__WEBPACK_IMPORTED_MODULE_2__["mangaReducer"]
};


/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\n  text-align: center;\n}\ndiv img {\n  width: 100px;\n  display: inline-block;\n}\ndiv span {\n  font-size: 2rem;\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\nh1 {\n  margin: 4rem 2rem 2rem 2rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGFsYmVydG9cXERlc2t0b3BcXG1pLWNvZGlnb1xcYW5ndWxhci1hbmltZS1wcm9qZWN0L3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGO0FEQUU7RUFDRSxZQUFBO0VBQ0EscUJBQUE7QUNFSjtBRENFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUNDSjtBREdBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gIH1cclxufVxyXG5cclxuaDEge1xyXG4gIG1hcmdpbjogNHJlbSAycmVtIDJyZW0gMnJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiIsImRpdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmRpdiBpbWcge1xuICB3aWR0aDogMTAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbmRpdiBzcGFuIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cblxuaDEge1xuICBtYXJnaW46IDRyZW0gMnJlbSAycmVtIDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/mangas/initialState.ts":
/*!****************************************!*\
  !*** ./src/app/mangas/initialState.ts ***!
  \****************************************/
/*! exports provided: initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const initialState = [
    {
        mal_id: 44347,
        url: 'https://myanimelist.net/manga/44347/One_Punch-Man',
        image_url: 'https://cdn.myanimelist.net/images/manga/3/80661.jpg?s=3eb9cd0c329dacd00f6c318ee0f5945f',
        title: 'One Punch-Man',
        publishing: true,
        synopsis: 'After rigorously training for three years, the ordinary Saitama has gained immense strength which allows him to take out anyone and anything with just one punch. He decides to put his new skill to goo...',
        type: 'Manga',
        chapters: 0,
        volumes: 0,
        score: 8.8,
        start_date: new Date('2012-06-14T00:00:00+00:00'),
        end_date: null,
        members: 212771
    },
    {
        mal_id: 788,
        url: 'https://myanimelist.net/manga/788/Punch',
        image_url: 'https://cdn.myanimelist.net/images/manga/3/154484.jpg?s=62b145a9c562dd7a4f8a9efa476c5fa3',
        title: 'Punch!',
        publishing: false,
        synopsis: 'Elle Nagahara is a first year in high school. Her grandfather and his rival, later friend made a promise, that their kids would get married. But they both had sons, so now the promise falls for the gr...',
        type: 'Manga',
        chapters: 15,
        volumes: 3,
        score: 7.41,
        start_date: new Date('2006-11-07T00:00:00+00:00'),
        end_date: new Date('2007-03-06T00:00:00+00:00'),
        members: 2538
    },
    {
        mal_id: 98270,
        url: 'https://myanimelist.net/manga/98270/Fire_Punch',
        image_url: 'https://cdn.myanimelist.net/images/manga/2/180430.jpg?s=36b484b7a7048e5d588db9f0fb3d452d',
        title: 'Fire Punch',
        publishing: false,
        synopsis: 'In the not-too-distant past, the Ice Witch blanketed the world in snow, starvation and madness, leading the inhabitants to seek their salvation in fire. With that, an unusual destiny unfolds for two y...',
        type: 'Manga',
        chapters: 83,
        volumes: 8,
        score: 7.3,
        start_date: new Date('2016-04-18T00:00:00+00:00'),
        end_date: new Date('2018-01-01T00:00:00+00:00'),
        members: 19442
    }
];


/***/ }),

/***/ "./src/app/mangas/manga-detail/manga-detail.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/mangas/manga-detail/manga-detail.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  max-width: 50%;\n  margin: auto auto 2rem auto;\n  display: block;\n  border-radius: 0.25rem;\n}\n\nh1 {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuZ2FzL21hbmdhLWRldGFpbC9DOlxcVXNlcnNcXGFsYmVydG9cXERlc2t0b3BcXG1pLWNvZGlnb1xcYW5ndWxhci1hbmltZS1wcm9qZWN0L3NyY1xcYXBwXFxtYW5nYXNcXG1hbmdhLWRldGFpbFxcbWFuZ2EtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYW5nYXMvbWFuZ2EtZGV0YWlsL21hbmdhLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21hbmdhcy9tYW5nYS1kZXRhaWwvbWFuZ2EtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICBtYXgtd2lkdGg6IDUwJTtcclxuICBtYXJnaW46IGF1dG8gYXV0byAycmVtIGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxufVxyXG5cclxuaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iLCJpbWcge1xuICBtYXgtd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiBhdXRvIGF1dG8gMnJlbSBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cblxuaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/mangas/manga-detail/manga-detail.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/mangas/manga-detail/manga-detail.component.ts ***!
  \***************************************************************/
/*! exports provided: MangaDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MangaDetailComponent", function() { return MangaDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_animes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/animes.service */ "./src/app/animes.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let MangaDetailComponent = class MangaDetailComponent {
    constructor(animeService, route) {
        this.animeService = animeService;
        this.route = route;
    }
    ngOnInit() {
        this.getMangaById();
    }
    getMangaById() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.animeService.getMangaById(id)
            .subscribe(manga => {
            this.manga = manga;
        });
    }
};
MangaDetailComponent.ctorParameters = () => [
    { type: src_app_animes_service__WEBPACK_IMPORTED_MODULE_2__["AnimesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
MangaDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manga-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manga-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mangas/manga-detail/manga-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manga-detail.component.scss */ "./src/app/mangas/manga-detail/manga-detail.component.scss")).default]
    })
], MangaDetailComponent);



/***/ }),

/***/ "./src/app/mangas/manga-list/manga-list.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/mangas/manga-list/manga-list.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  display: grid;\n  grid-template-columns: 100%;\n  gap: 1rem;\n  margin-top: 1rem;\n  align-content: space-around;\n  justify-content: space-between;\n}\n\n@media (min-width: 960px) {\n  .container {\n    grid-template-columns: 30% 30% 30%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuZ2FzL21hbmdhLWxpc3QvQzpcXFVzZXJzXFxhbGJlcnRvXFxEZXNrdG9wXFxtaS1jb2RpZ29cXGFuZ3VsYXItYW5pbWUtcHJvamVjdC9zcmNcXGFwcFxcbWFuZ2FzXFxtYW5nYS1saXN0XFxtYW5nYS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYW5nYXMvbWFuZ2EtbGlzdC9tYW5nYS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtBQ0NGOztBREVBO0VBRUU7SUFDRSxrQ0FBQTtFQ0FGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYW5nYXMvbWFuZ2EtbGlzdC9tYW5nYS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KSB7XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgMzAlIDMwJTtcclxuICB9XHJcblxyXG59XHJcbiIsIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gIGdhcDogMXJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSAzMCUgMzAlO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/mangas/manga-list/manga-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/mangas/manga-list/manga-list.component.ts ***!
  \***********************************************************/
/*! exports provided: MangaListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MangaListComponent", function() { return MangaListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_animes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/animes.service */ "./src/app/animes.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _mangas_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mangas.actions */ "./src/app/mangas/mangas.actions.ts");





let MangaListComponent = class MangaListComponent {
    constructor(animesService, store) {
        this.animesService = animesService;
        this.store = store;
        this.name = '';
        this.mangas = [];
    }
    ngOnInit() {
        this.store.select('lastSearchedManga').subscribe(manga => {
            this.mangas = manga;
        });
    }
    getMangasByName() {
        this.animesService.getMangasByName(this.name)
            .subscribe(mangas => {
            this.mangas = mangas;
            const action = new _mangas_actions__WEBPACK_IMPORTED_MODULE_4__["LastSearchedManga"](mangas);
            this.store.dispatch(action);
        });
    }
};
MangaListComponent.ctorParameters = () => [
    { type: src_app_animes_service__WEBPACK_IMPORTED_MODULE_2__["AnimesService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
MangaListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manga-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manga-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mangas/manga-list/manga-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manga-list.component.scss */ "./src/app/mangas/manga-list/manga-list.component.scss")).default]
    })
], MangaListComponent);



/***/ }),

/***/ "./src/app/mangas/mangas.actions.ts":
/*!******************************************!*\
  !*** ./src/app/mangas/mangas.actions.ts ***!
  \******************************************/
/*! exports provided: LAST_SEARCHED_MANGA, LastSearchedManga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAST_SEARCHED_MANGA", function() { return LAST_SEARCHED_MANGA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastSearchedManga", function() { return LastSearchedManga; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const LAST_SEARCHED_MANGA = '[Manga] ✔ Add last manga searched';
class LastSearchedManga {
    constructor(manga) {
        this.manga = manga;
        this.type = LAST_SEARCHED_MANGA;
    }
}


/***/ }),

/***/ "./src/app/mangas/mangas.reducers.ts":
/*!*******************************************!*\
  !*** ./src/app/mangas/mangas.reducers.ts ***!
  \*******************************************/
/*! exports provided: mangaReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mangaReducer", function() { return mangaReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialState */ "./src/app/mangas/initialState.ts");
/* harmony import */ var _mangas_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mangas.actions */ "./src/app/mangas/mangas.actions.ts");



function mangaReducer(state = _initialState__WEBPACK_IMPORTED_MODULE_1__["initialState"], action) {
    switch (action.type) {
        case _mangas_actions__WEBPACK_IMPORTED_MODULE_2__["LAST_SEARCHED_MANGA"]:
            return [...action.manga];
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\alberto\Desktop\mi-codigo\angular-anime-project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map