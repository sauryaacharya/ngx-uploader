(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('ngx-uploader', ['exports', '@angular/core', 'rxjs', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ngx-uploader'] = {}, global.ng.core, global.rxjs, global.rxjs.operators));
}(this, (function (exports, core, rxjs, operators) { 'use strict';

    exports.UploadStatus = void 0;
    (function (UploadStatus) {
        UploadStatus[UploadStatus["Queue"] = 0] = "Queue";
        UploadStatus[UploadStatus["Uploading"] = 1] = "Uploading";
        UploadStatus[UploadStatus["Done"] = 2] = "Done";
        UploadStatus[UploadStatus["Cancelled"] = 3] = "Cancelled";
    })(exports.UploadStatus || (exports.UploadStatus = {}));

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    function humanizeBytes(bytes) {
        if (bytes === 0) {
            return '0 Byte';
        }
        var k = 1024;
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
    var NgUploaderService = /** @class */ (function () {
        function NgUploaderService(concurrency, contentTypes, maxUploads, maxFileSize) {
            var _this = this;
            if (concurrency === void 0) { concurrency = Number.POSITIVE_INFINITY; }
            if (contentTypes === void 0) { contentTypes = ['*']; }
            if (maxUploads === void 0) { maxUploads = Number.POSITIVE_INFINITY; }
            if (maxFileSize === void 0) { maxFileSize = Number.POSITIVE_INFINITY; }
            this.queue = [];
            this.serviceEvents = new core.EventEmitter();
            this.uploadScheduler = new rxjs.Subject();
            this.subs = [];
            this.contentTypes = contentTypes;
            this.maxUploads = maxUploads;
            this.maxFileSize = maxFileSize;
            this.uploadScheduler
                .pipe(operators.mergeMap(function (upload) { return _this.startUpload(upload); }, concurrency))
                .subscribe(function (uploadOutput) { return _this.serviceEvents.emit(uploadOutput); });
        }
        NgUploaderService.prototype.handleFiles = function (incomingFiles) {
            var _a;
            var _this = this;
            var allowedIncomingFiles = [].reduce.call(incomingFiles, function (acc, checkFile, i) {
                var futureQueueLength = acc.length + _this.queue.length + 1;
                if (_this.isContentTypeAllowed(checkFile.type) &&
                    futureQueueLength <= _this.maxUploads &&
                    _this.isFileSizeAllowed(checkFile.size)) {
                    acc = acc.concat(checkFile);
                }
                else {
                    var rejectedFile = _this.makeUploadFile(checkFile, i);
                    _this.serviceEvents.emit({ type: 'rejected', file: rejectedFile });
                }
                return acc;
            }, []);
            (_a = this.queue).push.apply(_a, __spread([].map.call(allowedIncomingFiles, function (file, i) {
                var uploadFile = _this.makeUploadFile(file, i);
                _this.serviceEvents.emit({ type: 'addedToQueue', file: uploadFile });
                return uploadFile;
            })));
            this.serviceEvents.emit({ type: 'allAddedToQueue' });
        };
        NgUploaderService.prototype.initInputEvents = function (input) {
            var _this = this;
            return input.subscribe(function (event) {
                switch (event.type) {
                    case 'uploadFile':
                        var uploadFileIndex = _this.queue.findIndex(function (file) { return file === event.file; });
                        if (uploadFileIndex !== -1 && event.file) {
                            _this.uploadScheduler.next({ file: _this.queue[uploadFileIndex], event: event });
                        }
                        break;
                    case 'uploadAll':
                        var files = _this.queue.filter(function (file) { return file.progress.status === exports.UploadStatus.Queue; });
                        files.forEach(function (file) { return _this.uploadScheduler.next({ file: file, event: event }); });
                        break;
                    case 'cancel':
                        var id_1 = event.id || null;
                        if (!id_1) {
                            return;
                        }
                        var subs = _this.subs.filter(function (sub) { return sub.id === id_1; });
                        subs.forEach(function (sub) {
                            if (sub.sub) {
                                sub.sub.unsubscribe();
                                var fileIndex = _this.queue.findIndex(function (file) { return file.id === id_1; });
                                if (fileIndex !== -1) {
                                    _this.queue[fileIndex].progress.status = exports.UploadStatus.Cancelled;
                                    _this.serviceEvents.emit({ type: 'cancelled', file: _this.queue[fileIndex] });
                                }
                            }
                        });
                        break;
                    case 'cancelAll':
                        _this.subs.forEach(function (sub) {
                            if (sub.sub) {
                                sub.sub.unsubscribe();
                            }
                            var file = _this.queue.find(function (uploadFile) { return uploadFile.id === sub.id; });
                            if (file) {
                                file.progress.status = exports.UploadStatus.Cancelled;
                                _this.serviceEvents.emit({ type: 'cancelled', file: file });
                            }
                        });
                        break;
                    case 'remove':
                        if (!event.id) {
                            return;
                        }
                        var i = _this.queue.findIndex(function (file) { return file.id === event.id; });
                        if (i !== -1) {
                            var file = _this.queue[i];
                            _this.queue.splice(i, 1);
                            _this.serviceEvents.emit({ type: 'removed', file: file });
                        }
                        break;
                    case 'removeAll':
                        if (_this.queue.length) {
                            _this.queue = [];
                            _this.serviceEvents.emit({ type: 'removedAll' });
                        }
                        break;
                }
            });
        };
        NgUploaderService.prototype.startUpload = function (upload) {
            var _this = this;
            return new rxjs.Observable(function (observer) {
                var sub = _this.uploadFile(upload.file, upload.event)
                    .pipe(operators.finalize(function () {
                    if (!observer.closed) {
                        observer.complete();
                    }
                }))
                    .subscribe(function (output) {
                    observer.next(output);
                }, function (err) {
                    observer.error(err);
                    observer.complete();
                }, function () {
                    observer.complete();
                });
                _this.subs.push({ id: upload.file.id, sub: sub });
            });
        };
        NgUploaderService.prototype.uploadFile = function (file, event) {
            var _this = this;
            return new rxjs.Observable(function (observer) {
                var url = event.url || '';
                var method = event.method || 'POST';
                var data = event.data || {};
                var headers = event.headers || {};
                var xhr = new XMLHttpRequest();
                var time = new Date().getTime();
                var progressStartTime = (file.progress.data && file.progress.data.startTime) || time;
                var speed = 0;
                var eta = null;
                xhr.upload.addEventListener('progress', function (e) {
                    if (e.lengthComputable) {
                        var percentage = Math.round((e.loaded * 100) / e.total);
                        var diff = new Date().getTime() - time;
                        speed = Math.round((e.loaded / diff) * 1000);
                        progressStartTime = (file.progress.data && file.progress.data.startTime) || new Date().getTime();
                        eta = Math.ceil((e.total - e.loaded) / speed);
                        file.progress = {
                            status: exports.UploadStatus.Uploading,
                            data: {
                                percentage: percentage,
                                speed: speed,
                                speedHuman: humanizeBytes(speed) + "/s",
                                startTime: progressStartTime,
                                endTime: null,
                                eta: eta,
                                etaHuman: _this.secondsToHuman(eta)
                            }
                        };
                        observer.next({ type: 'uploading', file: file });
                    }
                }, false);
                xhr.upload.addEventListener('error', function (e) {
                    observer.error(e);
                    observer.complete();
                });
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === XMLHttpRequest.DONE) {
                        var speedAverage = Math.round((file.size / (new Date().getTime() - progressStartTime)) * 1000);
                        file.progress = {
                            status: exports.UploadStatus.Done,
                            data: {
                                percentage: 100,
                                speed: speedAverage,
                                speedHuman: humanizeBytes(speedAverage) + "/s",
                                startTime: progressStartTime,
                                endTime: new Date().getTime(),
                                eta: eta,
                                etaHuman: _this.secondsToHuman(eta || 0)
                            }
                        };
                        file.responseStatus = xhr.status;
                        try {
                            file.response = JSON.parse(xhr.response);
                        }
                        catch (e) {
                            file.response = xhr.response;
                        }
                        file.responseHeaders = _this.parseResponseHeaders(xhr.getAllResponseHeaders());
                        observer.next({ type: 'done', file: file });
                        observer.complete();
                    }
                };
                xhr.open(method, url, true);
                xhr.withCredentials = event.withCredentials ? true : false;
                try {
                    var uploadFile_1 = file.nativeFile;
                    var uploadIndex = _this.queue.findIndex(function (outFile) { return outFile.nativeFile === uploadFile_1; });
                    if (_this.queue[uploadIndex].progress.status === exports.UploadStatus.Cancelled) {
                        observer.complete();
                    }
                    Object.keys(headers).forEach(function (key) { return xhr.setRequestHeader(key, headers[key]); });
                    var bodyToSend = void 0;
                    if (event.includeWebKitFormBoundary !== false) {
                        Object.keys(data).forEach(function (key) { return file.form.append(key, data[key]); });
                        file.form.append(event.fieldName || 'file', uploadFile_1, uploadFile_1.name);
                        bodyToSend = file.form;
                    }
                    else {
                        bodyToSend = uploadFile_1;
                    }
                    _this.serviceEvents.emit({ type: 'start', file: file });
                    xhr.send(bodyToSend);
                }
                catch (e) {
                    observer.complete();
                }
                return function () {
                    xhr.abort();
                };
            });
        };
        NgUploaderService.prototype.secondsToHuman = function (sec) {
            return new Date(sec * 1000).toISOString().substr(11, 8);
        };
        NgUploaderService.prototype.generateId = function () {
            return Math.random().toString(36).substring(7);
        };
        NgUploaderService.prototype.setContentTypes = function (contentTypes) {
            if (typeof contentTypes !== 'undefined' && contentTypes instanceof Array) {
                if (contentTypes.find(function (type) { return type === '*'; }) !== undefined) {
                    this.contentTypes = ['*'];
                }
                else {
                    this.contentTypes = contentTypes;
                }
                return;
            }
            this.contentTypes = ['*'];
        };
        NgUploaderService.prototype.allContentTypesAllowed = function () {
            return this.contentTypes.find(function (type) { return type === '*'; }) !== undefined;
        };
        NgUploaderService.prototype.isContentTypeAllowed = function (mimetype) {
            if (this.allContentTypesAllowed()) {
                return true;
            }
            return this.contentTypes.find(function (type) { return type === mimetype; }) !== undefined;
        };
        NgUploaderService.prototype.isFileSizeAllowed = function (fileSize) {
            if (!this.maxFileSize) {
                return true;
            }
            return fileSize <= this.maxFileSize;
        };
        NgUploaderService.prototype.makeUploadFile = function (file, index) {
            return {
                fileIndex: index,
                id: this.generateId(),
                name: file.name,
                size: file.size,
                type: file.type,
                form: new FormData(),
                progress: {
                    status: exports.UploadStatus.Queue,
                    data: {
                        percentage: 0,
                        speed: 0,
                        speedHuman: humanizeBytes(0) + "/s",
                        startTime: null,
                        endTime: null,
                        eta: null,
                        etaHuman: null
                    }
                },
                lastModifiedDate: new Date(file.lastModified),
                sub: undefined,
                nativeFile: file
            };
        };
        NgUploaderService.prototype.parseResponseHeaders = function (httpHeaders) {
            if (!httpHeaders) {
                return;
            }
            return httpHeaders
                .split('\n')
                .map(function (x) { return x.split(/: */, 2); })
                .filter(function (x) { return x[0]; })
                .reduce(function (acc, x) {
                acc[x[0]] = x[1];
                return acc;
            }, {});
        };
        return NgUploaderService;
    }());

    var NgFileDropDirective = /** @class */ (function () {
        function NgFileDropDirective(elementRef) {
            this.elementRef = elementRef;
            this.stopEvent = function (e) {
                e.stopPropagation();
                e.preventDefault();
            };
            this.uploadOutput = new core.EventEmitter();
        }
        NgFileDropDirective.prototype.ngOnInit = function () {
            var _this = this;
            this._sub = [];
            var concurrency = this.options && this.options.concurrency || Number.POSITIVE_INFINITY;
            var allowedContentTypes = this.options && this.options.allowedContentTypes || ['*'];
            var maxUploads = this.options && this.options.maxUploads || Number.POSITIVE_INFINITY;
            var maxFileSize = this.options && this.options.maxFileSize || Number.POSITIVE_INFINITY;
            this.upload = new NgUploaderService(concurrency, allowedContentTypes, maxUploads, maxFileSize);
            this.el = this.elementRef.nativeElement;
            this._sub.push(this.upload.serviceEvents.subscribe(function (event) {
                _this.uploadOutput.emit(event);
            }));
            if (this.uploadInput instanceof core.EventEmitter) {
                this._sub.push(this.upload.initInputEvents(this.uploadInput));
            }
            this.el.addEventListener('drop', this.stopEvent, false);
            this.el.addEventListener('dragenter', this.stopEvent, false);
            this.el.addEventListener('dragover', this.stopEvent, false);
        };
        NgFileDropDirective.prototype.ngOnDestroy = function () {
            this._sub.forEach(function (sub) { return sub.unsubscribe(); });
        };
        NgFileDropDirective.prototype.onDrop = function (e) {
            e.stopPropagation();
            e.preventDefault();
            var event = { type: 'drop' };
            this.uploadOutput.emit(event);
            this.upload.handleFiles(e.dataTransfer.files);
        };
        NgFileDropDirective.prototype.onDragOver = function (e) {
            if (!e) {
                return;
            }
            if (e && e.dataTransfer && e.dataTransfer.dropEffect !== 'copy') {
                e.dataTransfer.dropEffect = 'copy';
            }
            var event = { type: 'dragOver' };
            this.uploadOutput.emit(event);
        };
        NgFileDropDirective.prototype.onDragLeave = function (e) {
            if (!e) {
                return;
            }
            var event = { type: 'dragOut' };
            this.uploadOutput.emit(event);
        };
        return NgFileDropDirective;
    }());
    NgFileDropDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[ngFileDrop]'
                },] }
    ];
    NgFileDropDirective.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    NgFileDropDirective.propDecorators = {
        options: [{ type: core.Input }],
        uploadInput: [{ type: core.Input }],
        uploadOutput: [{ type: core.Output }],
        onDrop: [{ type: core.HostListener, args: ['drop', ['$event'],] }],
        onDragOver: [{ type: core.HostListener, args: ['dragover', ['$event'],] }],
        onDragLeave: [{ type: core.HostListener, args: ['dragleave', ['$event'],] }]
    };

    var NgFileSelectDirective = /** @class */ (function () {
        function NgFileSelectDirective(elementRef) {
            var _this = this;
            this.elementRef = elementRef;
            this.fileListener = function () {
                if (_this.el.files) {
                    _this.upload.handleFiles(_this.el.files);
                }
            };
            this.uploadOutput = new core.EventEmitter();
        }
        NgFileSelectDirective.prototype.ngOnInit = function () {
            var _this = this;
            this._sub = [];
            var concurrency = this.options && this.options.concurrency || Number.POSITIVE_INFINITY;
            var allowedContentTypes = this.options && this.options.allowedContentTypes || ['*'];
            var maxUploads = this.options && this.options.maxUploads || Number.POSITIVE_INFINITY;
            var maxFileSize = this.options && this.options.maxFileSize || Number.POSITIVE_INFINITY;
            this.upload = new NgUploaderService(concurrency, allowedContentTypes, maxUploads, maxFileSize);
            this.el = this.elementRef.nativeElement;
            this.el.addEventListener('change', this.fileListener, false);
            this._sub.push(this.upload.serviceEvents.subscribe(function (event) {
                _this.uploadOutput.emit(event);
            }));
            if (this.uploadInput instanceof core.EventEmitter) {
                this._sub.push(this.upload.initInputEvents(this.uploadInput));
            }
        };
        NgFileSelectDirective.prototype.ngOnDestroy = function () {
            if (this.el) {
                this.el.removeEventListener('change', this.fileListener, false);
                this._sub.forEach(function (sub) { return sub.unsubscribe(); });
            }
        };
        return NgFileSelectDirective;
    }());
    NgFileSelectDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[ngFileSelect]'
                },] }
    ];
    NgFileSelectDirective.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    NgFileSelectDirective.propDecorators = {
        options: [{ type: core.Input }],
        uploadInput: [{ type: core.Input }],
        uploadOutput: [{ type: core.Output }]
    };

    var NgxUploaderModule = /** @class */ (function () {
        function NgxUploaderModule() {
        }
        return NgxUploaderModule;
    }());
    NgxUploaderModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [NgFileDropDirective, NgFileSelectDirective],
                    exports: [NgFileDropDirective, NgFileSelectDirective]
                },] }
    ];

    /*
     * Public API Surface of ngx-uploader
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NgFileDropDirective = NgFileDropDirective;
    exports.NgFileSelectDirective = NgFileSelectDirective;
    exports.NgUploaderService = NgUploaderService;
    exports.NgxUploaderModule = NgxUploaderModule;
    exports.humanizeBytes = humanizeBytes;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-uploader.umd.js.map
