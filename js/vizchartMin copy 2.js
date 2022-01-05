parcelRequire = function(e, r, t, n) {
    var i, o = "function" == typeof parcelRequire && parcelRequire,
        u = "function" == typeof require && require;

    function f(t, n) {
        if (!r[t]) {
            if (!e[t]) {
                var i = "function" == typeof parcelRequire && parcelRequire;
                if (!n && i) return i(t, !0);
                if (o) return o(t, !0);
                if (u && "string" == typeof t) return u(t);
                var c = new Error("Cannot find module '" + t + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            p.resolve = function(r) {
                return e[t][1][r] || r
            }, p.cache = {};
            var l = r[t] = new f.Module(t);
            e[t][0].call(l.exports, p, l, l.exports, this)
        }
        return r[t].exports;

        function p(e) {
            return f(p.resolve(e))
        }
    }
    f.isParcelRequire = !0, f.Module = function(e) {
        this.id = e, this.bundle = f, this.exports = {}
    }, f.modules = e, f.cache = r, f.parent = o, f.register = function(r, t) {
        e[r] = [function(e, r) {
            r.exports = t
        }, {}]
    };
    for (var c = 0; c < t.length; c++) try {
        f(t[c])
    } catch (e) {
        i || (i = e)
    }
    if (t.length) {
        var l = f(t[t.length - 1]);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function() {
            return l
        }) : n && (this[n] = l)
    }
    if (parcelRequire = f, i) throw i;
    return f
}({
    "yJgn": [function(require, module, exports) {
        "use strict";

        function e(e, t) {
            return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "CQHQ": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = t;
        var e = n(require("./ascending.js"));

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function t(e) {
            return 1 === e.length && (e = r(e)), {
                left: function(n, t, r, u) {
                    for (null == r && (r = 0), null == u && (u = n.length); r < u;) {
                        var l = r + u >>> 1;
                        e(n[l], t) < 0 ? r = l + 1 : u = l
                    }
                    return r
                },
                right: function(n, t, r, u) {
                    for (null == r && (r = 0), null == u && (u = n.length); r < u;) {
                        var l = r + u >>> 1;
                        e(n[l], t) > 0 ? u = l : r = l + 1
                    }
                    return r
                }
            }
        }

        function r(n) {
            return function(t, r) {
                return (0, e.default)(n(t), r)
            }
        }
    }, {
        "./ascending.js": "yJgn"
    }],
    "YrTP": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = exports.bisectLeft = exports.bisectRight = void 0;
        var e = r(require("./ascending.js")),
            t = r(require("./bisector.js"));

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = (0, t.default)(e.default),
            i = s.right;
        exports.bisectRight = i;
        var o = s.left;
        exports.bisectLeft = o;
        var u = i;
        exports.default = u;
    }, {
        "./ascending.js": "yJgn",
        "./bisector.js": "CQHQ"
    }],
    "w45x": [function(require, module, exports) {
        "use strict";

        function e(e, t) {
            let l = 0;
            if (void 0 === t)
                for (let o of e) null != o && (o = +o) >= o && ++l;
            else {
                let o = -1;
                for (let r of e) null != (r = t(r, ++o, e)) && (r = +r) >= r && ++l
            }
            return l
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "LKVk": [function(require, module, exports) {
        "use strict";

        function t(t) {
            return 0 | t.length
        }

        function e(t) {
            return !(t > 0)
        }

        function n(t) {
            return "object" != typeof t || "length" in t ? t : Array.from(t)
        }

        function r(t) {
            return e => t(...e)
        }

        function o(...o) {
            const u = "function" == typeof o[o.length - 1] && r(o.pop()),
                f = (o = o.map(n)).map(t),
                i = o.length - 1,
                p = new Array(i + 1).fill(0),
                c = [];
            if (i < 0 || f.some(e)) return c;
            for (;;) {
                c.push(p.map((t, e) => o[e][t]));
                let t = i;
                for (; ++p[t] === f[t];) {
                    if (0 === t) return u ? c.map(u) : c;
                    p[t--] = 0
                }
            }
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = o;
    }, {}],
    "fBAz": [function(require, module, exports) {
        "use strict";

        function e(e, t) {
            return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "Nh5Q": [function(require, module, exports) {
        "use strict";

        function e(e, t) {
            let l, o = 0,
                f = 0,
                r = 0;
            if (void 0 === t)
                for (let u of e) null != u && (u = +u) >= u && (r += (l = u - f) * (u - (f += l / ++o)));
            else {
                let u = -1;
                for (let i of e) null != (i = t(i, ++u, e)) && (i = +i) >= i && (r += (l = i - f) * (i - (f += l / ++o)))
            }
            if (o > 1) return r / (o - 1)
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "WEAa": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = r;
        var e = t(require("./variance.js"));

        function t(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(t, r) {
            const u = (0, e.default)(t, r);
            return u ? Math.sqrt(u) : u
        }
    }, {
        "./variance.js": "Nh5Q"
    }],
    "UaWb": [function(require, module, exports) {
        "use strict";

        function e(e, o) {
            let t, l;
            if (void 0 === o)
                for (const r of e) null != r && (void 0 === t ? r >= r && (t = l = r) : (t > r && (t = r), l < r && (l = r)));
            else {
                let r = -1;
                for (let f of e) null != (f = o(f, ++r, e)) && (void 0 === t ? f >= f && (t = l = f) : (t > f && (t = f), l < f && (l = f)))
            }
            return [t, l]
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "NNW9": [function(require, module, exports) {
        "use strict";

        function e(e) {
            return e
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "zkcs": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = r, exports.groups = n, exports.rollup = u, exports.rollups = o;
        var t = e(require("./identity.js"));

        function e(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function r(e, ...r) {
            return f(e, t.default, t.default, r)
        }

        function n(e, ...r) {
            return f(e, Array.from, t.default, r)
        }

        function u(e, r, ...n) {
            return f(e, t.default, r, n)
        }

        function o(t, e, ...r) {
            return f(t, Array.from, e, r)
        }

        function f(t, e, r, n) {
            return function t(u, o) {
                if (o >= n.length) return r(u);
                const f = new Map,
                    s = n[o++];
                let l = -1;
                for (const e of u) {
                    const t = s(e, ++l, u),
                        r = f.get(t);
                    r ? r.push(e) : f.set(t, [e])
                }
                for (const [e, r] of f) f.set(e, t(r, o));
                return e(f)
            }(t, 0)
        }
    }, {
        "./identity.js": "NNW9"
    }],
    "RkzJ": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.map = exports.slice = void 0;
        var e = Array.prototype,
            r = e.slice;
        exports.slice = r;
        var p = e.map;
        exports.map = p;
    }, {}],
    "aCvo": [function(require, module, exports) {
        "use strict";

        function e(e) {
            return function() {
                return e
            }
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "wcAU": [function(require, module, exports) {
        "use strict";

        function e(e, t, r) {
            e = +e, t = +t, r = (n = arguments.length) < 2 ? (t = e, e = 0, 1) : n < 3 ? 1 : +r;
            for (var a = -1, n = 0 | Math.max(0, Math.ceil((t - e) / r)), o = new Array(n); ++a < n;) o[a] = e + a * r;
            return o
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "EUzg": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e, exports.tickIncrement = o, exports.tickStep = M;
        var t = Math.sqrt(50),
            r = Math.sqrt(10),
            a = Math.sqrt(2);

        function e(t, r, a) {
            var e, M, h, i, n = -1;
            if (a = +a, (t = +t) === (r = +r) && a > 0) return [t];
            if ((e = r < t) && (M = t, t = r, r = M), 0 === (i = o(t, r, a)) || !isFinite(i)) return [];
            if (i > 0)
                for (t = Math.ceil(t / i), r = Math.floor(r / i), h = new Array(M = Math.ceil(r - t + 1)); ++n < M;) h[n] = (t + n) * i;
            else
                for (t = Math.floor(t * i), r = Math.ceil(r * i), h = new Array(M = Math.ceil(t - r + 1)); ++n < M;) h[n] = (t - n) / i;
            return e && h.reverse(), h
        }

        function o(e, o, M) {
            var h = (o - e) / Math.max(0, M),
                i = Math.floor(Math.log(h) / Math.LN10),
                n = h / Math.pow(10, i);
            return i >= 0 ? (n >= t ? 10 : n >= r ? 5 : n >= a ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (n >= t ? 10 : n >= r ? 5 : n >= a ? 2 : 1)
        }

        function M(e, o, M) {
            var h = Math.abs(o - e) / Math.max(0, M),
                i = Math.pow(10, Math.floor(Math.log(h) / Math.LN10)),
                n = h / i;
            return n >= t ? i *= 10 : n >= r ? i *= 5 : n >= a && (i *= 2), o < e ? -i : i
        }
    }, {}],
    "J0XR": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = u;
        var e = t(require("../count.js"));

        function t(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function u(t) {
            return Math.ceil(Math.log((0, e.default)(t)) / Math.LN2) + 1
        }
    }, {
        "../count.js": "w45x"
    }],
    "bGH2": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = s;
        var r = require("./array.js"),
            e = o(require("./bisect.js")),
            t = o(require("./constant.js")),
            u = o(require("./extent.js")),
            n = o(require("./identity.js")),
            a = o(require("./range.js")),
            f = require("./ticks.js"),
            i = o(require("./threshold/sturges.js"));

        function o(r) {
            return r && r.__esModule ? r : {
                default: r
            }
        }

        function s() {
            var o = n.default,
                s = u.default,
                l = i.default;

            function c(r) {
                Array.isArray(r) || (r = Array.from(r));
                var t, u, n = r.length,
                    i = new Array(n);
                for (t = 0; t < n; ++t) i[t] = o(r[t], t, r);
                var c = s(i),
                    d = c[0],
                    y = c[1],
                    h = l(i, d, y);
                Array.isArray(h) || (h = (0, f.tickStep)(d, y, h), h = (0, a.default)(Math.ceil(d / h) * h, y, h));
                for (var p = h.length; h[0] <= d;) h.shift(), --p;
                for (; h[p - 1] > y;) h.pop(), --p;
                var j, A = new Array(p + 1);
                for (t = 0; t <= p; ++t)(j = A[t] = []).x0 = t > 0 ? h[t - 1] : d, j.x1 = t < p ? h[t] : y;
                for (t = 0; t < n; ++t) d <= (u = i[t]) && u <= y && A[(0, e.default)(h, u, 0, p)].push(r[t]);
                return A
            }
            return c.value = function(r) {
                return arguments.length ? (o = "function" == typeof r ? r : (0, t.default)(r), c) : o
            }, c.domain = function(r) {
                return arguments.length ? (s = "function" == typeof r ? r : (0, t.default)([r[0], r[1]]), c) : s
            }, c.thresholds = function(e) {
                return arguments.length ? (l = "function" == typeof e ? e : Array.isArray(e) ? (0, t.default)(r.slice.call(e)) : (0, t.default)(e), c) : l
            }, c
        }
    }, {
        "./array.js": "RkzJ",
        "./bisect.js": "YrTP",
        "./constant.js": "aCvo",
        "./extent.js": "UaWb",
        "./identity.js": "NNW9",
        "./range.js": "wcAU",
        "./ticks.js": "EUzg",
        "./threshold/sturges.js": "J0XR"
    }],
    "Ougw": [function(require, module, exports) {
        "use strict";

        function e(e, o) {
            let t;
            if (void 0 === o)
                for (const l of e) null != l && (t < l || void 0 === t && l >= l) && (t = l);
            else {
                let l = -1;
                for (let r of e) null != (r = o(r, ++l, e)) && (t < r || void 0 === t && r >= r) && (t = r)
            }
            return t
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "kP8m": [function(require, module, exports) {
        "use strict";

        function e(e, o) {
            let t;
            if (void 0 === o)
                for (const l of e) null != l && (t > l || void 0 === t && l >= l) && (t = l);
            else {
                let l = -1;
                for (let r of e) null != (r = o(r, ++l, e)) && (t > r || void 0 === t && r >= r) && (t = r)
            }
            return t
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "v5AZ": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = o;
        var t = e(require("./ascending.js"));

        function e(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function o(e, n, a = 0, f = e.length - 1, u = t.default) {
            for (; f > a;) {
                if (f - a > 600) {
                    const t = f - a + 1,
                        r = n - a + 1,
                        s = Math.log(t),
                        l = .5 * Math.exp(2 * s / 3),
                        c = .5 * Math.sqrt(s * l * (t - l) / t) * (r - t / 2 < 0 ? -1 : 1);
                    o(e, n, Math.max(a, Math.floor(n - r * l / t + c)), Math.min(f, Math.floor(n + (t - r) * l / t + c)), u)
                }
                const t = e[n];
                let s = a,
                    l = f;
                for (r(e, a, n), u(e[f], t) > 0 && r(e, a, f); s < l;) {
                    for (r(e, s, l), ++s, --l; u(e[s], t) < 0;) ++s;
                    for (; u(e[l], t) > 0;) --l
                }
                0 === u(e[a], t) ? r(e, a, l) : r(e, ++l, f), l <= n && (a = l + 1), n <= l && (f = l - 1)
            }
            return e
        }

        function r(t, e, o) {
            const r = t[e];
            t[e] = t[o], t[o] = r
        }
    }, {
        "./ascending.js": "yJgn"
    }],
    "XWLP": [function(require, module, exports) {
        "use strict";

        function e(e) {
            return null === e ? NaN : +e
        }

        function* l(e, l) {
            if (void 0 === l)
                for (let t of e) null != t && (t = +t) >= t && (yield t);
            else {
                let t = -1;
                for (let o of e) null != (o = l(o, ++t, e)) && (o = +o) >= o && (yield o)
            }
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e, exports.numbers = l;
    }, {}],
    "xM5B": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = o, exports.quantileSorted = i;
        var e = a(require("./max.js")),
            r = a(require("./min.js")),
            t = a(require("./quickselect.js")),
            u = f(require("./number.js"));

        function n() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return n = function() {
                return e
            }, e
        }

        function f(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var r = n();
            if (r && r.has(e)) return r.get(e);
            var t = {},
                u = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var f in e)
                if (Object.prototype.hasOwnProperty.call(e, f)) {
                    var a = u ? Object.getOwnPropertyDescriptor(e, f) : null;
                    a && (a.get || a.set) ? Object.defineProperty(t, f, a) : t[f] = e[f]
                } return t.default = e, r && r.set(e, t), t
        }

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(n, f, a) {
            if (o = (n = Float64Array.from((0, u.numbers)(n, a))).length) {
                if ((f = +f) <= 0 || o < 2) return (0, r.default)(n);
                if (f >= 1) return (0, e.default)(n);
                var o, i = (o - 1) * f,
                    l = Math.floor(i),
                    s = (0, e.default)((0, t.default)(n, l).subarray(0, l + 1));
                return s + ((0, r.default)(n.subarray(l + 1)) - s) * (i - l)
            }
        }

        function i(e, r, t = u.default) {
            if (n = e.length) {
                if ((r = +r) <= 0 || n < 2) return +t(e[0], 0, e);
                if (r >= 1) return +t(e[n - 1], n - 1, e);
                var n, f = (n - 1) * r,
                    a = Math.floor(f),
                    o = +t(e[a], a, e);
                return o + (+t(e[a + 1], a + 1, e) - o) * (f - a)
            }
        }
    }, {
        "./max.js": "Ougw",
        "./min.js": "kP8m",
        "./quickselect.js": "v5AZ",
        "./number.js": "XWLP"
    }],
    "nJJ4": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = r;
        var e = u(require("../count.js")),
            t = u(require("../quantile.js"));

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(u, r, a) {
            return Math.ceil((a - r) / (2 * ((0, t.default)(u, .75) - (0, t.default)(u, .25)) * Math.pow((0, e.default)(u), -1 / 3)))
        }
    }, {
        "../count.js": "w45x",
        "../quantile.js": "xM5B"
    }],
    "Rqev": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = r;
        var e = u(require("../count.js")),
            t = u(require("../deviation.js"));

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(u, r, o) {
            return Math.ceil((o - r) / (3.5 * (0, t.default)(u) * Math.pow((0, e.default)(u), -1 / 3)))
        }
    }, {
        "../count.js": "w45x",
        "../deviation.js": "WEAa"
    }],
    "IgNN": [function(require, module, exports) {
        "use strict";

        function e(e, o) {
            let t, l = -1,
                r = -1;
            if (void 0 === o)
                for (const f of e) ++r, null != f && (t < f || void 0 === t && f >= f) && (t = f, l = r);
            else
                for (let f of e) null != (f = o(f, ++r, e)) && (t < f || void 0 === t && f >= f) && (t = f, l = r);
            return l
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "YY5N": [function(require, module, exports) {
        "use strict";

        function e(e, t) {
            let l = 0,
                o = 0;
            if (void 0 === t)
                for (let f of e) null != f && (f = +f) >= f && (++l, o += f);
            else {
                let f = -1;
                for (let r of e) null != (r = t(r, ++f, e)) && (r = +r) >= r && (++l, o += r)
            }
            if (l) return o / l
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "CxwF": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = u;
        var e = t(require("./quantile.js"));

        function t(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function u(t, u) {
            return (0, e.default)(t, .5, u)
        }
    }, {
        "./quantile.js": "xM5B"
    }],
    "Getd": [function(require, module, exports) {
        "use strict";

        function* e(e) {
            for (const r of e) yield* r
        }

        function r(r) {
            return Array.from(e(r))
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = r;
    }, {}],
    "Fe03": [function(require, module, exports) {
        "use strict";

        function e(e, o) {
            let t, l = -1,
                r = -1;
            if (void 0 === o)
                for (const f of e) ++r, null != f && (t > f || void 0 === t && f >= f) && (t = f, l = r);
            else
                for (let f of e) null != (f = o(f, ++r, e)) && (t > f || void 0 === t && f >= f) && (t = f, l = r);
            return l
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "DkXH": [function(require, module, exports) {
        "use strict";

        function e(e, r = t) {
            const o = [];
            let n, s = !1;
            for (const t of e) s && o.push(r(n, t)), n = t, s = !0;
            return o
        }

        function t(e, t) {
            return [e, t]
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e, exports.pair = t;
    }, {}],
    "RhiG": [function(require, module, exports) {
        "use strict";

        function e(e, r) {
            return Array.from(r, r => e[r])
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "LCo4": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = o;
        var e = t(require("./ascending.js"));

        function t(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(t, o = e.default) {
            let r, u = !1;
            if (1 === o.length) {
                let f;
                for (const n of t) {
                    const t = o(n);
                    (u ? (0, e.default)(t, f) < 0 : 0 === (0, e.default)(t, t)) && (r = n, f = t, u = !0)
                }
            } else
                for (const e of t)(u ? o(e, r) < 0 : 0 === o(e, e)) && (r = e, u = !0);
            return r
        }
    }, {
        "./ascending.js": "yJgn"
    }],
    "JcRo": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = u;
        var e = r(require("./ascending.js")),
            t = r(require("./minIndex.js"));

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function u(r, u = e.default) {
            if (1 === u.length) return (0, t.default)(r, u);
            let n, f = -1,
                o = -1;
            for (const e of r) ++o, (f < 0 ? 0 === u(e, e) : u(e, n) < 0) && (n = e, f = o);
            return f
        }
    }, {
        "./ascending.js": "yJgn",
        "./minIndex.js": "Fe03"
    }],
    "P3UJ": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = o;
        var e = t(require("./ascending.js"));

        function t(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(t, o = e.default) {
            let r, u = !1;
            if (1 === o.length) {
                let f;
                for (const n of t) {
                    const t = o(n);
                    (u ? (0, e.default)(t, f) > 0 : 0 === (0, e.default)(t, t)) && (r = n, f = t, u = !0)
                }
            } else
                for (const e of t)(u ? o(e, r) > 0 : 0 === o(e, e)) && (r = e, u = !0);
            return r
        }
    }, {
        "./ascending.js": "yJgn"
    }],
    "Rv6z": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = u;
        var e = r(require("./ascending.js")),
            t = r(require("./maxIndex.js"));

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function u(r, u = e.default) {
            if (1 === u.length) return (0, t.default)(r, u);
            let n, f = -1,
                o = -1;
            for (const e of r) ++o, (f < 0 ? 0 === u(e, e) : u(e, n) > 0) && (n = e, f = o);
            return f
        }
    }, {
        "./ascending.js": "yJgn",
        "./maxIndex.js": "IgNN"
    }],
    "swlo": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = r;
        var e = t(require("./leastIndex.js"));

        function t(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(t, r) {
            const u = (0, e.default)(t, r);
            return u < 0 ? void 0 : u
        }
    }, {
        "./leastIndex.js": "JcRo"
    }],
    "Xskt": [function(require, module, exports) {
        "use strict";

        function e(e, t = 0, r = e.length) {
            for (var o, n, u = r - (t = +t); u;) n = Math.random() * u-- | 0, o = e[u + t], e[u + t] = e[n + t], e[n + t] = o;
            return e
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "uFmM": [function(require, module, exports) {
        "use strict";

        function e(e, t) {
            let o = 0;
            if (void 0 === t)
                for (let r of e)(r = +r) && (o += r);
            else {
                let r = -1;
                for (let f of e)(f = +t(f, ++r, e)) && (o += f)
            }
            return o
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "DmNI": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = t;
        var e = r(require("./min.js"));

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function t(r) {
            if (!(o = r.length)) return [];
            for (var t = -1, u = (0, e.default)(r, n), f = new Array(u); ++t < u;)
                for (var o, a = -1, i = f[t] = new Array(o); ++a < o;) i[a] = r[a][t];
            return f
        }

        function n(e) {
            return e.length
        }
    }, {
        "./min.js": "kP8m"
    }],
    "ciZM": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = r;
        var e = t(require("./transpose.js"));

        function t(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r() {
            return (0, e.default)(arguments)
        }
    }, {
        "./transpose.js": "DmNI"
    }],
    "K0bd": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), Object.defineProperty(exports, "bisect", {
            enumerable: !0,
            get: function() {
                return e.default
            }
        }), Object.defineProperty(exports, "bisectRight", {
            enumerable: !0,
            get: function() {
                return e.bisectRight
            }
        }), Object.defineProperty(exports, "bisectLeft", {
            enumerable: !0,
            get: function() {
                return e.bisectLeft
            }
        }), Object.defineProperty(exports, "ascending", {
            enumerable: !0,
            get: function() {
                return r.default
            }
        }), Object.defineProperty(exports, "bisector", {
            enumerable: !0,
            get: function() {
                return t.default
            }
        }), Object.defineProperty(exports, "count", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }), Object.defineProperty(exports, "cross", {
            enumerable: !0,
            get: function() {
                return u.default
            }
        }), Object.defineProperty(exports, "descending", {
            enumerable: !0,
            get: function() {
                return i.default
            }
        }), Object.defineProperty(exports, "deviation", {
            enumerable: !0,
            get: function() {
                return o.default
            }
        }), Object.defineProperty(exports, "extent", {
            enumerable: !0,
            get: function() {
                return f.default
            }
        }), Object.defineProperty(exports, "group", {
            enumerable: !0,
            get: function() {
                return s.default
            }
        }), Object.defineProperty(exports, "groups", {
            enumerable: !0,
            get: function() {
                return s.groups
            }
        }), Object.defineProperty(exports, "rollup", {
            enumerable: !0,
            get: function() {
                return s.rollup
            }
        }), Object.defineProperty(exports, "rollups", {
            enumerable: !0,
            get: function() {
                return s.rollups
            }
        }), Object.defineProperty(exports, "bin", {
            enumerable: !0,
            get: function() {
                return c.default
            }
        }), Object.defineProperty(exports, "histogram", {
            enumerable: !0,
            get: function() {
                return c.default
            }
        }), Object.defineProperty(exports, "thresholdFreedmanDiaconis", {
            enumerable: !0,
            get: function() {
                return a.default
            }
        }), Object.defineProperty(exports, "thresholdScott", {
            enumerable: !0,
            get: function() {
                return p.default
            }
        }), Object.defineProperty(exports, "thresholdSturges", {
            enumerable: !0,
            get: function() {
                return l.default
            }
        }), Object.defineProperty(exports, "max", {
            enumerable: !0,
            get: function() {
                return d.default
            }
        }), Object.defineProperty(exports, "maxIndex", {
            enumerable: !0,
            get: function() {
                return b.default
            }
        }), Object.defineProperty(exports, "mean", {
            enumerable: !0,
            get: function() {
                return j.default
            }
        }), Object.defineProperty(exports, "median", {
            enumerable: !0,
            get: function() {
                return g.default
            }
        }), Object.defineProperty(exports, "merge", {
            enumerable: !0,
            get: function() {
                return m.default
            }
        }), Object.defineProperty(exports, "min", {
            enumerable: !0,
            get: function() {
                return x.default
            }
        }), Object.defineProperty(exports, "minIndex", {
            enumerable: !0,
            get: function() {
                return y.default
            }
        }), Object.defineProperty(exports, "pairs", {
            enumerable: !0,
            get: function() {
                return O.default
            }
        }), Object.defineProperty(exports, "permute", {
            enumerable: !0,
            get: function() {
                return P.default
            }
        }), Object.defineProperty(exports, "quantile", {
            enumerable: !0,
            get: function() {
                return q.default
            }
        }), Object.defineProperty(exports, "quantileSorted", {
            enumerable: !0,
            get: function() {
                return q.quantileSorted
            }
        }), Object.defineProperty(exports, "quickselect", {
            enumerable: !0,
            get: function() {
                return h.default
            }
        }), Object.defineProperty(exports, "range", {
            enumerable: !0,
            get: function() {
                return v.default
            }
        }), Object.defineProperty(exports, "least", {
            enumerable: !0,
            get: function() {
                return k.default
            }
        }), Object.defineProperty(exports, "leastIndex", {
            enumerable: !0,
            get: function() {
                return I.default
            }
        }), Object.defineProperty(exports, "greatest", {
            enumerable: !0,
            get: function() {
                return S.default
            }
        }), Object.defineProperty(exports, "greatestIndex", {
            enumerable: !0,
            get: function() {
                return _.default
            }
        }), Object.defineProperty(exports, "scan", {
            enumerable: !0,
            get: function() {
                return M.default
            }
        }), Object.defineProperty(exports, "shuffle", {
            enumerable: !0,
            get: function() {
                return w.default
            }
        }), Object.defineProperty(exports, "sum", {
            enumerable: !0,
            get: function() {
                return D.default
            }
        }), Object.defineProperty(exports, "ticks", {
            enumerable: !0,
            get: function() {
                return z.default
            }
        }), Object.defineProperty(exports, "tickIncrement", {
            enumerable: !0,
            get: function() {
                return z.tickIncrement
            }
        }), Object.defineProperty(exports, "tickStep", {
            enumerable: !0,
            get: function() {
                return z.tickStep
            }
        }), Object.defineProperty(exports, "transpose", {
            enumerable: !0,
            get: function() {
                return L.default
            }
        }), Object.defineProperty(exports, "variance", {
            enumerable: !0,
            get: function() {
                return R.default
            }
        }), Object.defineProperty(exports, "zip", {
            enumerable: !0,
            get: function() {
                return W.default
            }
        });
        var e = B(require("./bisect.js")),
            r = F(require("./ascending.js")),
            t = F(require("./bisector.js")),
            n = F(require("./count.js")),
            u = F(require("./cross.js")),
            i = F(require("./descending.js")),
            o = F(require("./deviation.js")),
            f = F(require("./extent.js")),
            s = B(require("./group.js")),
            c = F(require("./bin.js")),
            a = F(require("./threshold/freedmanDiaconis.js")),
            p = F(require("./threshold/scott.js")),
            l = F(require("./threshold/sturges.js")),
            d = F(require("./max.js")),
            b = F(require("./maxIndex.js")),
            j = F(require("./mean.js")),
            g = F(require("./median.js")),
            m = F(require("./merge.js")),
            x = F(require("./min.js")),
            y = F(require("./minIndex.js")),
            O = F(require("./pairs.js")),
            P = F(require("./permute.js")),
            q = B(require("./quantile.js")),
            h = F(require("./quickselect.js")),
            v = F(require("./range.js")),
            k = F(require("./least.js")),
            I = F(require("./leastIndex.js")),
            S = F(require("./greatest.js")),
            _ = F(require("./greatestIndex.js")),
            M = F(require("./scan.js")),
            w = F(require("./shuffle.js")),
            D = F(require("./sum.js")),
            z = B(require("./ticks.js")),
            L = F(require("./transpose.js")),
            R = F(require("./variance.js")),
            W = F(require("./zip.js"));

        function F(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function A() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return A = function() {
                return e
            }, e
        }

        function B(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var r = A();
            if (r && r.has(e)) return r.get(e);
            var t = {},
                n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var u in e)
                if (Object.prototype.hasOwnProperty.call(e, u)) {
                    var i = n ? Object.getOwnPropertyDescriptor(e, u) : null;
                    i && (i.get || i.set) ? Object.defineProperty(t, u, i) : t[u] = e[u]
                } return t.default = e, r && r.set(e, t), t
        }
    }, {
        "./bisect.js": "YrTP",
        "./ascending.js": "yJgn",
        "./bisector.js": "CQHQ",
        "./count.js": "w45x",
        "./cross.js": "LKVk",
        "./descending.js": "fBAz",
        "./deviation.js": "WEAa",
        "./extent.js": "UaWb",
        "./group.js": "zkcs",
        "./bin.js": "bGH2",
        "./threshold/freedmanDiaconis.js": "nJJ4",
        "./threshold/scott.js": "Rqev",
        "./threshold/sturges.js": "J0XR",
        "./max.js": "Ougw",
        "./maxIndex.js": "IgNN",
        "./mean.js": "YY5N",
        "./median.js": "CxwF",
        "./merge.js": "Getd",
        "./min.js": "kP8m",
        "./minIndex.js": "Fe03",
        "./pairs.js": "DkXH",
        "./permute.js": "RhiG",
        "./quantile.js": "xM5B",
        "./quickselect.js": "v5AZ",
        "./range.js": "wcAU",
        "./least.js": "LCo4",
        "./leastIndex.js": "JcRo",
        "./greatest.js": "P3UJ",
        "./greatestIndex.js": "Rv6z",
        "./scan.js": "swlo",
        "./shuffle.js": "Xskt",
        "./sum.js": "uFmM",
        "./ticks.js": "EUzg",
        "./transpose.js": "DmNI",
        "./variance.js": "Nh5Q",
        "./zip.js": "ciZM"
    }],
    "KXlw": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.slice = void 0;
        var e = Array.prototype.slice;
        exports.slice = e;
    }, {}],
    "c1MF": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.axisTop = p, exports.axisRight = h, exports.axisBottom = x, exports.axisLeft = g;
        var t = require("./array"),
            n = r(require("./identity"));

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var e = 1,
            i = 2,
            a = 3,
            u = 4,
            o = 1e-6;

        function l(t) {
            return "translate(" + (t + .5) + ",0)"
        }

        function c(t) {
            return "translate(0," + (t + .5) + ")"
        }

        function s(t) {
            return function(n) {
                return +t(n)
            }
        }

        function f(t) {
            var n = Math.max(0, t.bandwidth() - 1) / 2;
            return t.round() && (n = Math.round(n)),
                function(r) {
                    return +t(r) + n
                }
        }

        function d() {
            return !this.__axis
        }

        function m(r, m) {
            var p = [],
                h = null,
                x = null,
                g = 6,
                k = 6,
                y = 3,
                _ = r === e || r === u ? -1 : 1,
                M = r === u || r === i ? "x" : "y",
                v = r === e || r === a ? l : c;

            function F(t) {
                var l = null == h ? m.ticks ? m.ticks.apply(m, p) : m.domain() : h,
                    c = null == x ? m.tickFormat ? m.tickFormat.apply(m, p) : n.default : x,
                    F = Math.max(g, 0) + y,
                    V = m.range(),
                    b = +V[0] + .5,
                    z = +V[V.length - 1] + .5,
                    A = (m.bandwidth ? f : s)(m.copy()),
                    H = t.selection ? t.selection() : t,
                    C = H.selectAll(".domain").data([null]),
                    S = H.selectAll(".tick").data(l, m).order(),
                    q = S.exit(),
                    w = S.enter().append("g").attr("class", "tick"),
                    O = S.select("line"),
                    P = S.select("text");
                C = C.merge(C.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), S = S.merge(w), O = O.merge(w.append("line").attr("stroke", "currentColor").attr(M + "2", _ * g)), P = P.merge(w.append("text").attr("fill", "currentColor").attr(M, _ * F).attr("dy", r === e ? "0em" : r === a ? "0.71em" : "0.32em")), t !== H && (C = C.transition(t), S = S.transition(t), O = O.transition(t), P = P.transition(t), q = q.transition(t).attr("opacity", o).attr("transform", function(t) {
                    return isFinite(t = A(t)) ? v(t) : this.getAttribute("transform")
                }), w.attr("opacity", o).attr("transform", function(t) {
                    var n = this.parentNode.__axis;
                    return v(n && isFinite(n = n(t)) ? n : A(t))
                })), q.remove(), C.attr("d", r === u || r == i ? k ? "M" + _ * k + "," + b + "H0.5V" + z + "H" + _ * k : "M0.5," + b + "V" + z : k ? "M" + b + "," + _ * k + "V0.5H" + z + "V" + _ * k : "M" + b + ",0.5H" + z), S.attr("opacity", 1).attr("transform", function(t) {
                    return v(A(t))
                }), O.attr(M + "2", _ * g), P.attr(M, _ * F).text(c), H.filter(d).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", r === i ? "start" : r === u ? "end" : "middle"), H.each(function() {
                    this.__axis = A
                })
            }
            return F.scale = function(t) {
                return arguments.length ? (m = t, F) : m
            }, F.ticks = function() {
                return p = t.slice.call(arguments), F
            }, F.tickArguments = function(n) {
                return arguments.length ? (p = null == n ? [] : t.slice.call(n), F) : p.slice()
            }, F.tickValues = function(n) {
                return arguments.length ? (h = null == n ? null : t.slice.call(n), F) : h && h.slice()
            }, F.tickFormat = function(t) {
                return arguments.length ? (x = t, F) : x
            }, F.tickSize = function(t) {
                return arguments.length ? (g = k = +t, F) : g
            }, F.tickSizeInner = function(t) {
                return arguments.length ? (g = +t, F) : g
            }, F.tickSizeOuter = function(t) {
                return arguments.length ? (k = +t, F) : k
            }, F.tickPadding = function(t) {
                return arguments.length ? (y = +t, F) : y
            }, F
        }

        function p(t) {
            return m(e, t)
        }

        function h(t) {
            return m(i, t)
        }

        function x(t) {
            return m(a, t)
        }

        function g(t) {
            return m(u, t)
        }
    }, {
        "./array": "KXlw",
        "./identity": "NNW9"
    }],
    "mp0m": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), Object.defineProperty(exports, "axisTop", {
            enumerable: !0,
            get: function() {
                return e.axisTop
            }
        }), Object.defineProperty(exports, "axisRight", {
            enumerable: !0,
            get: function() {
                return e.axisRight
            }
        }), Object.defineProperty(exports, "axisBottom", {
            enumerable: !0,
            get: function() {
                return e.axisBottom
            }
        }), Object.defineProperty(exports, "axisLeft", {
            enumerable: !0,
            get: function() {
                return e.axisLeft
            }
        });
        var e = require("./axis");
    }, {
        "./axis": "c1MF"
    }],
    "qUE6": [function(require, module, exports) {
        "use strict";

        function t(t) {
            if (!t.ok) throw new Error(t.status + " " + t.statusText);
            return t.blob()
        }

        function e(e, r) {
            return fetch(e, r).then(t)
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "G9Fv": [function(require, module, exports) {
        "use strict";

        function t(t) {
            if (!t.ok) throw new Error(t.status + " " + t.statusText);
            return t.arrayBuffer()
        }

        function e(e, r) {
            return fetch(e, r).then(t)
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "uRW4": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = s;
        var n = {},
            r = {},
            t = 34,
            e = 10,
            u = 13;

        function o(n) {
            return new Function("d", "return {" + n.map(function(n, r) {
                return JSON.stringify(n) + ": d[" + r + "]"
            }).join(",") + "}")
        }

        function i(n, r) {
            var t = o(n);
            return function(e, u) {
                return r(t(e), u, n)
            }
        }

        function c(n) {
            var r = Object.create(null),
                t = [];
            return n.forEach(function(n) {
                for (var e in n) e in r || t.push(r[e] = e)
            }), t
        }

        function a(n, r) {
            var t = n + "",
                e = t.length;
            return e < r ? new Array(r - e + 1).join(0) + t : t
        }

        function f(n) {
            return n < 0 ? "-" + a(-n, 6) : n > 9999 ? "+" + a(n, 6) : a(n, 4)
        }

        function l(n) {
            var r = n.getUTCHours(),
                t = n.getUTCMinutes(),
                e = n.getUTCSeconds(),
                u = n.getUTCMilliseconds();
            return isNaN(n) ? "Invalid Date" : f(n.getUTCFullYear(), 4) + "-" + a(n.getUTCMonth() + 1, 2) + "-" + a(n.getUTCDate(), 2) + (u ? "T" + a(r, 2) + ":" + a(t, 2) + ":" + a(e, 2) + "." + a(u, 3) + "Z" : e ? "T" + a(r, 2) + ":" + a(t, 2) + ":" + a(e, 2) + "Z" : t || r ? "T" + a(r, 2) + ":" + a(t, 2) + "Z" : "")
        }

        function s(a) {
            var f = new RegExp('["' + a + "\n\r]"),
                s = a.charCodeAt(0);

            function d(o, i) {
                var c, a = [],
                    f = o.length,
                    l = 0,
                    d = 0,
                    h = f <= 0,
                    p = !1;

                function C() {
                    if (h) return r;
                    if (p) return p = !1, n;
                    var i, c, a = l;
                    if (o.charCodeAt(a) === t) {
                        for (; l++ < f && o.charCodeAt(l) !== t || o.charCodeAt(++l) === t;);
                        return (i = l) >= f ? h = !0 : (c = o.charCodeAt(l++)) === e ? p = !0 : c === u && (p = !0, o.charCodeAt(l) === e && ++l), o.slice(a + 1, i - 1).replace(/""/g, '"')
                    }
                    for (; l < f;) {
                        if ((c = o.charCodeAt(i = l++)) === e) p = !0;
                        else if (c === u) p = !0, o.charCodeAt(l) === e && ++l;
                        else if (c !== s) continue;
                        return o.slice(a, i)
                    }
                    return h = !0, o.slice(a, f)
                }
                for (o.charCodeAt(f - 1) === e && --f, o.charCodeAt(f - 1) === u && --f;
                    (c = C()) !== r;) {
                    for (var g = []; c !== n && c !== r;) g.push(c), c = C();
                    i && null == (g = i(g, d++)) || a.push(g)
                }
                return a
            }

            function h(n, r) {
                return n.map(function(n) {
                    return r.map(function(r) {
                        return C(n[r])
                    }).join(a)
                })
            }

            function p(n) {
                return n.map(C).join(a)
            }

            function C(n) {
                return null == n ? "" : n instanceof Date ? l(n) : f.test(n += "") ? '"' + n.replace(/"/g, '""') + '"' : n
            }
            return {
                parse: function(n, r) {
                    var t, e, u = d(n, function(n, u) {
                        if (t) return t(n, u - 1);
                        e = n, t = r ? i(n, r) : o(n)
                    });
                    return u.columns = e || [], u
                },
                parseRows: d,
                format: function(n, r) {
                    return null == r && (r = c(n)), [r.map(C).join(a)].concat(h(n, r)).join("\n")
                },
                formatBody: function(n, r) {
                    return null == r && (r = c(n)), h(n, r).join("\n")
                },
                formatRows: function(n) {
                    return n.map(p).join("\n")
                }
            }
        }
    }, {}],
    "yGbu": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.csvFormatRows = exports.csvFormatBody = exports.csvFormat = exports.csvParseRows = exports.csvParse = void 0;
        var r = s(require("./dsv"));

        function s(r) {
            return r && r.__esModule ? r : {
                default: r
            }
        }
        var o = (0, r.default)(","),
            e = o.parse;
        exports.csvParse = e;
        var t = o.parseRows;
        exports.csvParseRows = t;
        var a = o.format;
        exports.csvFormat = a;
        var v = o.formatBody;
        exports.csvFormatBody = v;
        var p = o.formatRows;
        exports.csvFormatRows = p;
    }, {
        "./dsv": "uRW4"
    }],
    "Rica": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.tsvFormatRows = exports.tsvFormatBody = exports.tsvFormat = exports.tsvParseRows = exports.tsvParse = void 0;
        var r = t(require("./dsv"));

        function t(r) {
            return r && r.__esModule ? r : {
                default: r
            }
        }
        var s = (0, r.default)("\t"),
            o = s.parse;
        exports.tsvParse = o;
        var e = s.parseRows;
        exports.tsvParseRows = e;
        var a = s.format;
        exports.tsvFormat = a;
        var v = s.formatBody;
        exports.tsvFormatBody = v;
        var p = s.formatRows;
        exports.tsvFormatRows = p;
    }, {
        "./dsv": "uRW4"
    }],
    "hdSA": [function(require, module, exports) {
        "use strict";

        function e(e) {
            for (var t in e) {
                var d, i = e[t].trim();
                if (i)
                    if ("true" === i) i = !0;
                    else if ("false" === i) i = !1;
                else if ("NaN" === i) i = NaN;
                else if (isNaN(d = +i)) {
                    if (!/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/.test(i)) continue;
                    i = new Date(i)
                } else i = d;
                else i = null;
                e[t] = i
            }
            return e
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "EC2w": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), Object.defineProperty(exports, "dsvFormat", {
            enumerable: !0,
            get: function() {
                return e.default
            }
        }), Object.defineProperty(exports, "csvParse", {
            enumerable: !0,
            get: function() {
                return r.csvParse
            }
        }), Object.defineProperty(exports, "csvParseRows", {
            enumerable: !0,
            get: function() {
                return r.csvParseRows
            }
        }), Object.defineProperty(exports, "csvFormat", {
            enumerable: !0,
            get: function() {
                return r.csvFormat
            }
        }), Object.defineProperty(exports, "csvFormatBody", {
            enumerable: !0,
            get: function() {
                return r.csvFormatBody
            }
        }), Object.defineProperty(exports, "csvFormatRows", {
            enumerable: !0,
            get: function() {
                return r.csvFormatRows
            }
        }), Object.defineProperty(exports, "tsvParse", {
            enumerable: !0,
            get: function() {
                return t.tsvParse
            }
        }), Object.defineProperty(exports, "tsvParseRows", {
            enumerable: !0,
            get: function() {
                return t.tsvParseRows
            }
        }), Object.defineProperty(exports, "tsvFormat", {
            enumerable: !0,
            get: function() {
                return t.tsvFormat
            }
        }), Object.defineProperty(exports, "tsvFormatBody", {
            enumerable: !0,
            get: function() {
                return t.tsvFormatBody
            }
        }), Object.defineProperty(exports, "tsvFormatRows", {
            enumerable: !0,
            get: function() {
                return t.tsvFormatRows
            }
        }), Object.defineProperty(exports, "autoType", {
            enumerable: !0,
            get: function() {
                return o.default
            }
        });
        var e = n(require("./dsv")),
            r = require("./csv"),
            t = require("./tsv"),
            o = n(require("./autoType"));

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    }, {
        "./dsv": "uRW4",
        "./csv": "yGbu",
        "./tsv": "Rica",
        "./autoType": "hdSA"
    }],
    "bNd6": [function(require, module, exports) {
        "use strict";

        function t(t) {
            if (!t.ok) throw new Error(t.status + " " + t.statusText);
            return t.text()
        }

        function e(e, r) {
            return fetch(e, r).then(t)
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "Ul8d": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = u, exports.tsv = exports.csv = void 0;
        var e = require("d3-dsv"),
            t = r(require("./text"));

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function n(e) {
            return function(r, n, u) {
                return 2 === arguments.length && "function" == typeof n && (u = n, n = void 0), (0, t.default)(r, n).then(function(t) {
                    return e(t, u)
                })
            }
        }

        function u(r, n, u, o) {
            3 === arguments.length && "function" == typeof u && (o = u, u = void 0);
            var s = (0, e.dsvFormat)(r);
            return (0, t.default)(n, u).then(function(e) {
                return s.parse(e, o)
            })
        }
        var o = n(e.csvParse);
        exports.csv = o;
        var s = n(e.tsvParse);
        exports.tsv = s;
    }, {
        "d3-dsv": "EC2w",
        "./text": "bNd6"
    }],
    "cIzq": [function(require, module, exports) {
        "use strict";

        function e(e, r) {
            return new Promise(function(n, o) {
                var t = new Image;
                for (var u in r) t[u] = r[u];
                t.onerror = o, t.onload = function() {
                    n(t)
                }, t.src = e
            })
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "VDYt": [function(require, module, exports) {
        "use strict";

        function t(t) {
            if (!t.ok) throw new Error(t.status + " " + t.statusText);
            return t.json()
        }

        function e(e, r) {
            return fetch(e, r).then(t)
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "NUeg": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.svg = exports.html = exports.default = void 0;
        var e = t(require("./text"));

        function t(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(t) {
            return function(r, n) {
                return (0, e.default)(r, n).then(function(e) {
                    return (new DOMParser).parseFromString(e, t)
                })
            }
        }
        var n = r("application/xml");
        exports.default = n;
        var o = r("text/html");
        exports.html = o;
        var u = r("image/svg+xml");
        exports.svg = u;
    }, {
        "./text": "bNd6"
    }],
    "grWT": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), Object.defineProperty(exports, "blob", {
            enumerable: !0,
            get: function() {
                return e.default
            }
        }), Object.defineProperty(exports, "buffer", {
            enumerable: !0,
            get: function() {
                return t.default
            }
        }), Object.defineProperty(exports, "dsv", {
            enumerable: !0,
            get: function() {
                return r.default
            }
        }), Object.defineProperty(exports, "csv", {
            enumerable: !0,
            get: function() {
                return r.csv
            }
        }), Object.defineProperty(exports, "tsv", {
            enumerable: !0,
            get: function() {
                return r.tsv
            }
        }), Object.defineProperty(exports, "image", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }), Object.defineProperty(exports, "json", {
            enumerable: !0,
            get: function() {
                return u.default
            }
        }), Object.defineProperty(exports, "text", {
            enumerable: !0,
            get: function() {
                return o.default
            }
        }), Object.defineProperty(exports, "xml", {
            enumerable: !0,
            get: function() {
                return f.default
            }
        }), Object.defineProperty(exports, "html", {
            enumerable: !0,
            get: function() {
                return f.html
            }
        }), Object.defineProperty(exports, "svg", {
            enumerable: !0,
            get: function() {
                return f.svg
            }
        });
        var e = l(require("./blob")),
            t = l(require("./buffer")),
            r = c(require("./dsv")),
            n = l(require("./image")),
            u = l(require("./json")),
            o = l(require("./text")),
            f = c(require("./xml"));

        function i() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return i = function() {
                return e
            }, e
        }

        function c(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var t = i();
            if (t && t.has(e)) return t.get(e);
            var r = {},
                n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var u in e)
                if (Object.prototype.hasOwnProperty.call(e, u)) {
                    var o = n ? Object.getOwnPropertyDescriptor(e, u) : null;
                    o && (o.get || o.set) ? Object.defineProperty(r, u, o) : r[u] = e[u]
                } return r.default = e, t && t.set(e, r), r
        }

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    }, {
        "./blob": "qUE6",
        "./buffer": "G9Fv",
        "./dsv": "Ul8d",
        "./image": "cIzq",
        "./json": "VDYt",
        "./text": "bNd6",
        "./xml": "NUeg"
    }],
    "GAUC": [function(require, module, exports) {
        "use strict";

        function e(e, t) {
            if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
            var n, l = e.slice(0, n);
            return [l.length > 1 ? l[0] + l.slice(2) : l, +e.slice(n + 1)]
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "tXBB": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = r;
        var e = t(require("./formatDecimal.js"));

        function t(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(t) {
            return (t = (0, e.default)(Math.abs(t))) ? t[1] : NaN
        }
    }, {
        "./formatDecimal.js": "GAUC"
    }],
    "rbAM": [function(require, module, exports) {
        "use strict";

        function e(e, t) {
            return function(r, n) {
                for (var u = r.length, s = [], o = 0, i = e[0], a = 0; u > 0 && i > 0 && (a + i + 1 > n && (i = Math.max(1, n - a)), s.push(r.substring(u -= i, u + i)), !((a += i + 1) > n));) i = e[o = (o + 1) % e.length];
                return s.reverse().join(t)
            }
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "hTcF": [function(require, module, exports) {
        "use strict";

        function e(e) {
            return function(t) {
                return t.replace(/[0-9]/g, function(t) {
                    return e[+t]
                })
            }
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "aibL": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = t, exports.FormatSpecifier = o;
        var i = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

        function t(t) {
            if (!(s = i.exec(t))) throw new Error("invalid format: " + t);
            var s;
            return new o({
                fill: s[1],
                align: s[2],
                sign: s[3],
                symbol: s[4],
                zero: s[5],
                width: s[6],
                comma: s[7],
                precision: s[8] && s[8].slice(1),
                trim: s[9],
                type: s[10]
            })
        }

        function o(i) {
            this.fill = void 0 === i.fill ? " " : i.fill + "", this.align = void 0 === i.align ? ">" : i.align + "", this.sign = void 0 === i.sign ? "-" : i.sign + "", this.symbol = void 0 === i.symbol ? "" : i.symbol + "", this.zero = !!i.zero, this.width = void 0 === i.width ? void 0 : +i.width, this.comma = !!i.comma, this.precision = void 0 === i.precision ? void 0 : +i.precision, this.trim = !!i.trim, this.type = void 0 === i.type ? "" : i.type + ""
        }
        t.prototype = o.prototype, o.prototype.toString = function() {
            return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
        };
    }, {}],
    "SUnU": [function(require, module, exports) {
        "use strict";

        function e(e) {
            e: for (var r, t = e.length, s = 1, a = -1; s < t; ++s) switch (e[s]) {
                case ".":
                    a = r = s;
                    break;
                case "0":
                    0 === a && (a = s), r = s;
                    break;
                default:
                    if (a > 0) {
                        if (!+e[s]) break e;
                        a = 0
                    }
            }
            return a > 0 ? e.slice(0, a) + e.slice(r + 1) : e
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "fBpa": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = n, exports.prefixExponent = void 0;
        var e, r = t(require("./formatDecimal.js"));

        function t(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function n(t, n) {
            var o = (0, r.default)(t, n);
            if (!o) return t + "";
            var a = o[0],
                i = o[1],
                u = i - (exports.prefixExponent = e = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
                f = a.length;
            return u === f ? a : u > f ? a + new Array(u - f + 1).join("0") : u > 0 ? a.slice(0, u) + "." + a.slice(u) : "0." + new Array(1 - u).join("0") + (0, r.default)(t, Math.max(0, n + u - 1))[0]
        }
        exports.prefixExponent = e;
    }, {
        "./formatDecimal.js": "GAUC"
    }],
    "UDrw": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = t;
        var e = r(require("./formatDecimal.js"));

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function t(r, t) {
            var n = (0, e.default)(r, t);
            if (!n) return r + "";
            var u = n[0],
                a = n[1];
            return a < 0 ? "0." + new Array(-a).join("0") + u : u.length > a + 1 ? u.slice(0, a + 1) + "." + u.slice(a + 1) : u + new Array(a - u.length + 2).join("0")
        }
    }, {
        "./formatDecimal.js": "GAUC"
    }],
    "Wavi": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        var t = n(require("./formatPrefixAuto.js")),
            r = n(require("./formatRounded.js"));

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var e = {
            "%": function(t, r) {
                return (100 * t).toFixed(r)
            },
            b: function(t) {
                return Math.round(t).toString(2)
            },
            c: function(t) {
                return t + ""
            },
            d: function(t) {
                return Math.round(t).toString(10)
            },
            e: function(t, r) {
                return t.toExponential(r)
            },
            f: function(t, r) {
                return t.toFixed(r)
            },
            g: function(t, r) {
                return t.toPrecision(r)
            },
            o: function(t) {
                return Math.round(t).toString(8)
            },
            p: function(t, n) {
                return (0, r.default)(100 * t, n)
            },
            r: r.default,
            s: t.default,
            X: function(t) {
                return Math.round(t).toString(16).toUpperCase()
            },
            x: function(t) {
                return Math.round(t).toString(16)
            }
        };
        exports.default = e;
    }, {
        "./formatPrefixAuto.js": "fBpa",
        "./formatRounded.js": "UDrw"
    }],
    "IVmM": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = c;
        var e = s(require("./exponent.js")),
            r = s(require("./formatGroup.js")),
            t = s(require("./formatNumerals.js")),
            a = s(require("./formatSpecifier.js")),
            i = s(require("./formatTrim.js")),
            n = s(require("./formatTypes.js")),
            o = require("./formatPrefixAuto.js"),
            u = s(require("./identity.js"));

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var l = Array.prototype.map,
            f = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

        function c(s) {
            var c = void 0 === s.grouping || void 0 === s.thousands ? u.default : (0, r.default)(l.call(s.grouping, Number), s.thousands + ""),
                d = void 0 === s.currency ? "" : s.currency[0] + "",
                m = void 0 === s.currency ? "" : s.currency[1] + "",
                p = void 0 === s.decimal ? "." : s.decimal + "",
                h = void 0 === s.numerals ? u.default : (0, t.default)(l.call(s.numerals, String)),
                v = void 0 === s.percent ? "%" : s.percent + "",
                g = void 0 === s.minus ? "-" : s.minus + "",
                y = void 0 === s.nan ? "NaN" : s.nan + "";

            function M(e) {
                var r = (e = (0, a.default)(e)).fill,
                    t = e.align,
                    u = e.sign,
                    s = e.symbol,
                    l = e.zero,
                    M = e.width,
                    x = e.comma,
                    j = e.precision,
                    b = e.trim,
                    q = e.type;
                "n" === q ? (x = !0, q = "g") : n.default[q] || (void 0 === j && (j = 12), b = !0, q = "g"), (l || "0" === r && "=" === t) && (l = !0, r = "0", t = "=");
                var N = "$" === s ? d : "#" === s && /[boxX]/.test(q) ? "0" + q.toLowerCase() : "",
                    k = "$" === s ? m : /[%p]/.test(q) ? v : "",
                    w = n.default[q],
                    A = /[defgprs%]/.test(q);

                function P(e) {
                    var a, n, s, d = N,
                        m = k;
                    if ("c" === q) m = w(e) + m, e = "";
                    else {
                        var v = (e = +e) < 0;
                        if (e = isNaN(e) ? y : w(Math.abs(e), j), b && (e = (0, i.default)(e)), v && 0 == +e && (v = !1), d = (v ? "(" === u ? u : g : "-" === u || "(" === u ? "" : u) + d, m = ("s" === q ? f[8 + o.prefixExponent / 3] : "") + m + (v && "(" === u ? ")" : ""), A)
                            for (a = -1, n = e.length; ++a < n;)
                                if (48 > (s = e.charCodeAt(a)) || s > 57) {
                                    m = (46 === s ? p + e.slice(a + 1) : e.slice(a)) + m, e = e.slice(0, a);
                                    break
                                }
                    }
                    x && !l && (e = c(e, 1 / 0));
                    var P = d.length + e.length + m.length,
                        _ = P < M ? new Array(M - P + 1).join(r) : "";
                    switch (x && l && (e = c(_ + e, _.length ? M - m.length : 1 / 0), _ = ""), t) {
                        case "<":
                            e = d + e + m + _;
                            break;
                        case "=":
                            e = d + _ + e + m;
                            break;
                        case "^":
                            e = _.slice(0, P = _.length >> 1) + d + e + m + _.slice(P);
                            break;
                        default:
                            e = _ + d + e + m
                    }
                    return h(e)
                }
                return j = void 0 === j ? 6 : /[gprs]/.test(q) ? Math.max(1, Math.min(21, j)) : Math.max(0, Math.min(20, j)), P.toString = function() {
                    return e + ""
                }, P
            }
            return {
                format: M,
                formatPrefix: function(r, t) {
                    var i = M(((r = (0, a.default)(r)).type = "f", r)),
                        n = 3 * Math.max(-8, Math.min(8, Math.floor((0, e.default)(t) / 3))),
                        o = Math.pow(10, -n),
                        u = f[8 + n / 3];
                    return function(e) {
                        return i(o * e) + u
                    }
                }
            }
        }
    }, {
        "./exponent.js": "tXBB",
        "./formatGroup.js": "rbAM",
        "./formatNumerals.js": "hTcF",
        "./formatSpecifier.js": "aibL",
        "./formatTrim.js": "SUnU",
        "./formatTypes.js": "Wavi",
        "./formatPrefixAuto.js": "fBpa",
        "./identity.js": "NNW9"
    }],
    "KaMm": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = a, exports.formatPrefix = exports.format = void 0;
        var r, e, t, o = f(require("./locale.js"));

        function f(r) {
            return r && r.__esModule ? r : {
                default: r
            }
        }

        function a(f) {
            return r = (0, o.default)(f), exports.format = e = r.format, exports.formatPrefix = t = r.formatPrefix, r
        }
        exports.format = e, exports.formatPrefix = t, a({
            decimal: ".",
            thousands: ",",
            grouping: [3],
            currency: ["$", ""],
            minus: "-"
        });
    }, {
        "./locale.js": "IVmM"
    }],
    "EyKk": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = r;
        var e = t(require("./exponent.js"));

        function t(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(t) {
            return Math.max(0, -(0, e.default)(Math.abs(t)))
        }
    }, {
        "./exponent.js": "tXBB"
    }],
    "VPkn": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = a;
        var e = t(require("./exponent.js"));

        function t(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(t, a) {
            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor((0, e.default)(a) / 3))) - (0, e.default)(Math.abs(t)))
        }
    }, {
        "./exponent.js": "tXBB"
    }],
    "DMyZ": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = u;
        var e = t(require("./exponent.js"));

        function t(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function u(t, u) {
            return t = Math.abs(t), u = Math.abs(u) - t, Math.max(0, (0, e.default)(u) - (0, e.default)(t)) + 1
        }
    }, {
        "./exponent.js": "tXBB"
    }],
    "VuZR": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), Object.defineProperty(exports, "formatDefaultLocale", {
            enumerable: !0,
            get: function() {
                return e.default
            }
        }), Object.defineProperty(exports, "format", {
            enumerable: !0,
            get: function() {
                return e.format
            }
        }), Object.defineProperty(exports, "formatPrefix", {
            enumerable: !0,
            get: function() {
                return e.formatPrefix
            }
        }), Object.defineProperty(exports, "formatLocale", {
            enumerable: !0,
            get: function() {
                return r.default
            }
        }), Object.defineProperty(exports, "formatSpecifier", {
            enumerable: !0,
            get: function() {
                return t.default
            }
        }), Object.defineProperty(exports, "FormatSpecifier", {
            enumerable: !0,
            get: function() {
                return t.FormatSpecifier
            }
        }), Object.defineProperty(exports, "precisionFixed", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }), Object.defineProperty(exports, "precisionPrefix", {
            enumerable: !0,
            get: function() {
                return o.default
            }
        }), Object.defineProperty(exports, "precisionRound", {
            enumerable: !0,
            get: function() {
                return i.default
            }
        });
        var e = c(require("./defaultLocale.js")),
            r = u(require("./locale.js")),
            t = c(require("./formatSpecifier.js")),
            n = u(require("./precisionFixed.js")),
            o = u(require("./precisionPrefix.js")),
            i = u(require("./precisionRound.js"));

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function f() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return f = function() {
                return e
            }, e
        }

        function c(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var r = f();
            if (r && r.has(e)) return r.get(e);
            var t = {},
                n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (Object.prototype.hasOwnProperty.call(e, o)) {
                    var i = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                    i && (i.get || i.set) ? Object.defineProperty(t, o, i) : t[o] = e[o]
                } return t.default = e, r && r.set(e, t), t
        }
    }, {
        "./defaultLocale.js": "KaMm",
        "./locale.js": "IVmM",
        "./formatSpecifier.js": "aibL",
        "./precisionFixed.js": "EyKk",
        "./precisionPrefix.js": "VPkn",
        "./precisionRound.js": "DMyZ"
    }],
    "buZa": [function(require, module, exports) {
        "use strict";

        function t(t, e) {
            switch (arguments.length) {
                case 0:
                    break;
                case 1:
                    this.range(t);
                    break;
                default:
                    this.range(e).domain(t)
            }
            return this
        }

        function e(t, e) {
            switch (arguments.length) {
                case 0:
                    break;
                case 1:
                    "function" == typeof t ? this.interpolator(t) : this.range(t);
                    break;
                default:
                    this.domain(t), "function" == typeof e ? this.interpolator(e) : this.range(e)
            }
            return this
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.initRange = t, exports.initInterpolator = e;
    }, {}],
    "GjLX": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e, exports.implicit = void 0;
        var n = require("./init.js");
        const t = Symbol("implicit");

        function e() {
            var r = new Map,
                i = [],
                o = [],
                u = t;

            function s(n) {
                var e = n + "",
                    s = r.get(e);
                if (!s) {
                    if (u !== t) return u;
                    r.set(e, s = i.push(n))
                }
                return o[(s - 1) % o.length]
            }
            return s.domain = function(n) {
                if (!arguments.length) return i.slice();
                i = [], r = new Map;
                for (const t of n) {
                    const n = t + "";
                    r.has(n) || r.set(n, i.push(t))
                }
                return s
            }, s.range = function(n) {
                return arguments.length ? (o = Array.from(n), s) : o.slice()
            }, s.unknown = function(n) {
                return arguments.length ? (u = n, s) : u
            }, s.copy = function() {
                return e(i, o).unknown(u)
            }, n.initRange.apply(s, arguments), s
        }
        exports.implicit = t;
    }, {
        "./init.js": "buZa"
    }],
    "BAgl": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = u, exports.point = a;
        var n = require("d3-array"),
            r = require("./init.js"),
            e = t(require("./ordinal.js"));

        function t(n) {
            return n && n.__esModule ? n : {
                default: n
            }
        }

        function u() {
            var t, i, a = (0, e.default)().unknown(void 0),
                d = a.domain,
                o = a.range,
                g = 0,
                l = 1,
                p = !1,
                c = 0,
                f = 0,
                h = .5;

            function s() {
                var r = d().length,
                    e = l < g,
                    u = e ? l : g,
                    a = e ? g : l;
                t = (a - u) / Math.max(1, r - c + 2 * f), p && (t = Math.floor(t)), u += (a - u - t * (r - c)) * h, i = t * (1 - c), p && (u = Math.round(u), i = Math.round(i));
                var s = (0, n.range)(r).map(function(n) {
                    return u + t * n
                });
                return o(e ? s.reverse() : s)
            }
            return delete a.unknown, a.domain = function(n) {
                return arguments.length ? (d(n), s()) : d()
            }, a.range = function(n) {
                return arguments.length ? ([g, l] = n, g = +g, l = +l, s()) : [g, l]
            }, a.rangeRound = function(n) {
                return [g, l] = n, g = +g, l = +l, p = !0, s()
            }, a.bandwidth = function() {
                return i
            }, a.step = function() {
                return t
            }, a.round = function(n) {
                return arguments.length ? (p = !!n, s()) : p
            }, a.padding = function(n) {
                return arguments.length ? (c = Math.min(1, f = +n), s()) : c
            }, a.paddingInner = function(n) {
                return arguments.length ? (c = Math.min(1, n), s()) : c
            }, a.paddingOuter = function(n) {
                return arguments.length ? (f = +n, s()) : f
            }, a.align = function(n) {
                return arguments.length ? (h = Math.max(0, Math.min(1, n)), s()) : h
            }, a.copy = function() {
                return u(d(), [g, l]).round(p).paddingInner(c).paddingOuter(f).align(h)
            }, r.initRange.apply(s(), arguments)
        }

        function i(n) {
            var r = n.copy;
            return n.padding = n.paddingOuter, delete n.paddingInner, delete n.paddingOuter, n.copy = function() {
                return i(r())
            }, n
        }

        function a() {
            return i(u.apply(null, arguments).paddingInner(1))
        }
    }, {
        "d3-array": "K0bd",
        "./init.js": "buZa",
        "./ordinal.js": "GjLX"
    }],
    "fV2I": [function(require, module, exports) {
        "use strict";

        function t(t, e, r) {
            t.prototype = e.prototype = r, r.constructor = t
        }

        function e(t, e) {
            var r = Object.create(t.prototype);
            for (var o in e) r[o] = e[o];
            return r
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = t, exports.extend = e;
    }, {}],
    "LIaf": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.Color = n, exports.default = k, exports.rgbConvert = M, exports.rgb = N, exports.Rgb = O, exports.hslConvert = P, exports.hsl = $, exports.brighter = exports.darker = void 0;
        var e = r(require("./define.js"));

        function t() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return t = function() {
                return e
            }, e
        }

        function r(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var r = t();
            if (r && r.has(e)) return r.get(e);
            var n = {},
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if (Object.prototype.hasOwnProperty.call(e, a)) {
                    var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
                    o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
                } return n.default = e, r && r.set(e, n), n
        }

        function n() {}
        var i = .7;
        exports.darker = i;
        var a = 1 / i;
        exports.brighter = a;
        var o = "\\s*([+-]?\\d+)\\s*",
            s = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
            l = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
            h = /^#([0-9a-f]{3,8})$/,
            u = new RegExp("^rgb\\(" + [o, o, o] + "\\)$"),
            g = new RegExp("^rgb\\(" + [l, l, l] + "\\)$"),
            c = new RegExp("^rgba\\(" + [o, o, o, s] + "\\)$"),
            d = new RegExp("^rgba\\(" + [l, l, l, s] + "\\)$"),
            p = new RegExp("^hsl\\(" + [s, l, l] + "\\)$"),
            f = new RegExp("^hsla\\(" + [s, l, l, s] + "\\)$"),
            b = {
                aliceblue: 15792383,
                antiquewhite: 16444375,
                aqua: 65535,
                aquamarine: 8388564,
                azure: 15794175,
                beige: 16119260,
                bisque: 16770244,
                black: 0,
                blanchedalmond: 16772045,
                blue: 255,
                blueviolet: 9055202,
                brown: 10824234,
                burlywood: 14596231,
                cadetblue: 6266528,
                chartreuse: 8388352,
                chocolate: 13789470,
                coral: 16744272,
                cornflowerblue: 6591981,
                cornsilk: 16775388,
                crimson: 14423100,
                cyan: 65535,
                darkblue: 139,
                darkcyan: 35723,
                darkgoldenrod: 12092939,
                darkgray: 11119017,
                darkgreen: 25600,
                darkgrey: 11119017,
                darkkhaki: 12433259,
                darkmagenta: 9109643,
                darkolivegreen: 5597999,
                darkorange: 16747520,
                darkorchid: 10040012,
                darkred: 9109504,
                darksalmon: 15308410,
                darkseagreen: 9419919,
                darkslateblue: 4734347,
                darkslategray: 3100495,
                darkslategrey: 3100495,
                darkturquoise: 52945,
                darkviolet: 9699539,
                deeppink: 16716947,
                deepskyblue: 49151,
                dimgray: 6908265,
                dimgrey: 6908265,
                dodgerblue: 2003199,
                firebrick: 11674146,
                floralwhite: 16775920,
                forestgreen: 2263842,
                fuchsia: 16711935,
                gainsboro: 14474460,
                ghostwhite: 16316671,
                gold: 16766720,
                goldenrod: 14329120,
                gray: 8421504,
                green: 32768,
                greenyellow: 11403055,
                grey: 8421504,
                honeydew: 15794160,
                hotpink: 16738740,
                indianred: 13458524,
                indigo: 4915330,
                ivory: 16777200,
                khaki: 15787660,
                lavender: 15132410,
                lavenderblush: 16773365,
                lawngreen: 8190976,
                lemonchiffon: 16775885,
                lightblue: 11393254,
                lightcoral: 15761536,
                lightcyan: 14745599,
                lightgoldenrodyellow: 16448210,
                lightgray: 13882323,
                lightgreen: 9498256,
                lightgrey: 13882323,
                lightpink: 16758465,
                lightsalmon: 16752762,
                lightseagreen: 2142890,
                lightskyblue: 8900346,
                lightslategray: 7833753,
                lightslategrey: 7833753,
                lightsteelblue: 11584734,
                lightyellow: 16777184,
                lime: 65280,
                limegreen: 3329330,
                linen: 16445670,
                magenta: 16711935,
                maroon: 8388608,
                mediumaquamarine: 6737322,
                mediumblue: 205,
                mediumorchid: 12211667,
                mediumpurple: 9662683,
                mediumseagreen: 3978097,
                mediumslateblue: 8087790,
                mediumspringgreen: 64154,
                mediumturquoise: 4772300,
                mediumvioletred: 13047173,
                midnightblue: 1644912,
                mintcream: 16121850,
                mistyrose: 16770273,
                moccasin: 16770229,
                navajowhite: 16768685,
                navy: 128,
                oldlace: 16643558,
                olive: 8421376,
                olivedrab: 7048739,
                orange: 16753920,
                orangered: 16729344,
                orchid: 14315734,
                palegoldenrod: 15657130,
                palegreen: 10025880,
                paleturquoise: 11529966,
                palevioletred: 14381203,
                papayawhip: 16773077,
                peachpuff: 16767673,
                peru: 13468991,
                pink: 16761035,
                plum: 14524637,
                powderblue: 11591910,
                purple: 8388736,
                rebeccapurple: 6697881,
                red: 16711680,
                rosybrown: 12357519,
                royalblue: 4286945,
                saddlebrown: 9127187,
                salmon: 16416882,
                sandybrown: 16032864,
                seagreen: 3050327,
                seashell: 16774638,
                sienna: 10506797,
                silver: 12632256,
                skyblue: 8900331,
                slateblue: 6970061,
                slategray: 7372944,
                slategrey: 7372944,
                snow: 16775930,
                springgreen: 65407,
                steelblue: 4620980,
                tan: 13808780,
                teal: 32896,
                thistle: 14204888,
                tomato: 16737095,
                turquoise: 4251856,
                violet: 15631086,
                wheat: 16113331,
                white: 16777215,
                whitesmoke: 16119285,
                yellow: 16776960,
                yellowgreen: 10145074
            };

        function y() {
            return this.rgb().formatHex()
        }

        function m() {
            return P(this).formatHsl()
        }

        function w() {
            return this.rgb().formatRgb()
        }

        function k(e) {
            var t, r;
            return e = (e + "").trim().toLowerCase(), (t = h.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), 6 === r ? x(t) : 3 === r ? new O(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | 240 & t, (15 & t) << 4 | 15 & t, 1) : 8 === r ? new O(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (255 & t) / 255) : 4 === r ? new O(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | 240 & t, ((15 & t) << 4 | 15 & t) / 255) : null) : (t = u.exec(e)) ? new O(t[1], t[2], t[3], 1) : (t = g.exec(e)) ? new O(255 * t[1] / 100, 255 * t[2] / 100, 255 * t[3] / 100, 1) : (t = c.exec(e)) ? v(t[1], t[2], t[3], t[4]) : (t = d.exec(e)) ? v(255 * t[1] / 100, 255 * t[2] / 100, 255 * t[3] / 100, t[4]) : (t = p.exec(e)) ? E(t[1], t[2] / 100, t[3] / 100, 1) : (t = f.exec(e)) ? E(t[1], t[2] / 100, t[3] / 100, t[4]) : b.hasOwnProperty(e) ? x(b[e]) : "transparent" === e ? new O(NaN, NaN, NaN, 0) : null
        }

        function x(e) {
            return new O(e >> 16 & 255, e >> 8 & 255, 255 & e, 1)
        }

        function v(e, t, r, n) {
            return n <= 0 && (e = t = r = NaN), new O(e, t, r, n)
        }

        function M(e) {
            return e instanceof n || (e = k(e)), e ? new O((e = e.rgb()).r, e.g, e.b, e.opacity) : new O
        }

        function N(e, t, r, n) {
            return 1 === arguments.length ? M(e) : new O(e, t, r, null == n ? 1 : n)
        }

        function O(e, t, r, n) {
            this.r = +e, this.g = +t, this.b = +r, this.opacity = +n
        }

        function j() {
            return "#" + R(this.r) + R(this.g) + R(this.b)
        }

        function q() {
            var e = this.opacity;
            return (1 === (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === e ? ")" : ", " + e + ")")
        }

        function R(e) {
            return ((e = Math.max(0, Math.min(255, Math.round(e) || 0))) < 16 ? "0" : "") + e.toString(16)
        }

        function E(e, t, r, n) {
            return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new H(e, t, r, n)
        }

        function P(e) {
            if (e instanceof H) return new H(e.h, e.s, e.l, e.opacity);
            if (e instanceof n || (e = k(e)), !e) return new H;
            if (e instanceof H) return e;
            var t = (e = e.rgb()).r / 255,
                r = e.g / 255,
                i = e.b / 255,
                a = Math.min(t, r, i),
                o = Math.max(t, r, i),
                s = NaN,
                l = o - a,
                h = (o + a) / 2;
            return l ? (s = t === o ? (r - i) / l + 6 * (r < i) : r === o ? (i - t) / l + 2 : (t - r) / l + 4, l /= h < .5 ? o + a : 2 - o - a, s *= 60) : l = h > 0 && h < 1 ? 0 : s, new H(s, l, h, e.opacity)
        }

        function $(e, t, r, n) {
            return 1 === arguments.length ? P(e) : new H(e, t, r, null == n ? 1 : n)
        }

        function H(e, t, r, n) {
            this.h = +e, this.s = +t, this.l = +r, this.opacity = +n
        }

        function C(e, t, r) {
            return 255 * (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t)
        }(0, e.default)(n, k, {
            copy: function(e) {
                return Object.assign(new this.constructor, this, e)
            },
            displayable: function() {
                return this.rgb().displayable()
            },
            hex: y,
            formatHex: y,
            formatHsl: m,
            formatRgb: w,
            toString: w
        }), (0, e.default)(O, N, (0, e.extend)(n, {
            brighter: function(e) {
                return e = null == e ? a : Math.pow(a, e), new O(this.r * e, this.g * e, this.b * e, this.opacity)
            },
            darker: function(e) {
                return e = null == e ? i : Math.pow(i, e), new O(this.r * e, this.g * e, this.b * e, this.opacity)
            },
            rgb: function() {
                return this
            },
            displayable: function() {
                return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
            },
            hex: j,
            formatHex: j,
            formatRgb: q,
            toString: q
        })), (0, e.default)(H, $, (0, e.extend)(n, {
            brighter: function(e) {
                return e = null == e ? a : Math.pow(a, e), new H(this.h, this.s, this.l * e, this.opacity)
            },
            darker: function(e) {
                return e = null == e ? i : Math.pow(i, e), new H(this.h, this.s, this.l * e, this.opacity)
            },
            rgb: function() {
                var e = this.h % 360 + 360 * (this.h < 0),
                    t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
                    r = this.l,
                    n = r + (r < .5 ? r : 1 - r) * t,
                    i = 2 * r - n;
                return new O(C(e >= 240 ? e - 240 : e + 120, i, n), C(e, i, n), C(e < 120 ? e + 240 : e - 120, i, n), this.opacity)
            },
            displayable: function() {
                return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
            },
            formatHsl: function() {
                var e = this.opacity;
                return (1 === (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e))) ? "hsl(" : "hsla(") + (this.h || 0) + ", " + 100 * (this.s || 0) + "%, " + 100 * (this.l || 0) + "%" + (1 === e ? ")" : ", " + e + ")")
            }
        }));
    }, {
        "./define.js": "fV2I"
    }],
    "XzID": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.rad2deg = exports.deg2rad = void 0;
        var e = Math.PI / 180;
        exports.deg2rad = e;
        var r = 180 / Math.PI;
        exports.rad2deg = r;
    }, {}],
    "f7Av": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.gray = b, exports.default = y, exports.Lab = w, exports.lch = N, exports.hcl = x, exports.Hcl = O;
        var t = i(require("./define.js")),
            n = require("./color.js"),
            e = require("./math.js");

        function r() {
            if ("function" != typeof WeakMap) return null;
            var t = new WeakMap;
            return r = function() {
                return t
            }, t
        }

        function i(t) {
            if (t && t.__esModule) return t;
            if (null === t || "object" != typeof t && "function" != typeof t) return {
                default: t
            };
            var n = r();
            if (n && n.has(t)) return n.get(t);
            var e = {},
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in t)
                if (Object.prototype.hasOwnProperty.call(t, o)) {
                    var u = i ? Object.getOwnPropertyDescriptor(t, o) : null;
                    u && (u.get || u.set) ? Object.defineProperty(e, o, u) : e[o] = t[o]
                } return e.default = t, n && n.set(t, e), e
        }
        var o = 18,
            u = .96422,
            a = 1,
            c = .82521,
            s = 4 / 29,
            l = 6 / 29,
            h = 3 * l * l,
            f = l * l * l;

        function p(t) {
            if (t instanceof w) return new w(t.l, t.a, t.b, t.opacity);
            if (t instanceof O) return P(t);
            t instanceof n.Rgb || (t = (0, n.rgbConvert)(t));
            var e, r, i = M(t.r),
                o = M(t.g),
                s = M(t.b),
                l = d((.2225045 * i + .7168786 * o + .0606169 * s) / a);
            return i === o && o === s ? e = r = l : (e = d((.4360747 * i + .3850649 * o + .1430804 * s) / u), r = d((.0139322 * i + .0971045 * o + .7141733 * s) / c)), new w(116 * l - 16, 500 * (e - l), 200 * (l - r), t.opacity)
        }

        function b(t, n) {
            return new w(t, 0, 0, null == n ? 1 : n)
        }

        function y(t, n, e, r) {
            return 1 === arguments.length ? p(t) : new w(t, n, e, null == r ? 1 : r)
        }

        function w(t, n, e, r) {
            this.l = +t, this.a = +n, this.b = +e, this.opacity = +r
        }

        function d(t) {
            return t > f ? Math.pow(t, 1 / 3) : t / h + s
        }

        function g(t) {
            return t > l ? t * t * t : h * (t - s)
        }

        function v(t) {
            return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
        }

        function M(t) {
            return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
        }

        function j(t) {
            if (t instanceof O) return new O(t.h, t.c, t.l, t.opacity);
            if (t instanceof w || (t = p(t)), 0 === t.a && 0 === t.b) return new O(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity);
            var n = Math.atan2(t.b, t.a) * e.rad2deg;
            return new O(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
        }

        function N(t, n, e, r) {
            return 1 === arguments.length ? j(t) : new O(e, n, t, null == r ? 1 : r)
        }

        function x(t, n, e, r) {
            return 1 === arguments.length ? j(t) : new O(t, n, e, null == r ? 1 : r)
        }

        function O(t, n, e, r) {
            this.h = +t, this.c = +n, this.l = +e, this.opacity = +r
        }

        function P(t) {
            if (isNaN(t.h)) return new w(t.l, 0, 0, t.opacity);
            var n = t.h * e.deg2rad;
            return new w(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity)
        }(0, t.default)(w, y, (0, t.extend)(n.Color, {
            brighter: function(t) {
                return new w(this.l + o * (null == t ? 1 : t), this.a, this.b, this.opacity)
            },
            darker: function(t) {
                return new w(this.l - o * (null == t ? 1 : t), this.a, this.b, this.opacity)
            },
            rgb: function() {
                var t = (this.l + 16) / 116,
                    e = isNaN(this.a) ? t : t + this.a / 500,
                    r = isNaN(this.b) ? t : t - this.b / 200;
                return e = u * g(e), t = a * g(t), r = c * g(r), new n.Rgb(v(3.1338561 * e - 1.6168667 * t - .4906146 * r), v(-.9787684 * e + 1.9161415 * t + .033454 * r), v(.0719453 * e - .2289914 * t + 1.4052427 * r), this.opacity)
            }
        })), (0, t.default)(O, x, (0, t.extend)(n.Color, {
            brighter: function(t) {
                return new O(this.h, this.c, this.l + o * (null == t ? 1 : t), this.opacity)
            },
            darker: function(t) {
                return new O(this.h, this.c, this.l - o * (null == t ? 1 : t), this.opacity)
            },
            rgb: function() {
                return P(this).rgb()
            }
        }));
    }, {
        "./define.js": "fV2I",
        "./color.js": "LIaf",
        "./math.js": "XzID"
    }],
    "CMX9": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = d, exports.Cubehelix = b;
        var t = i(require("./define.js")),
            e = require("./color.js"),
            r = require("./math.js");

        function n() {
            if ("function" != typeof WeakMap) return null;
            var t = new WeakMap;
            return n = function() {
                return t
            }, t
        }

        function i(t) {
            if (t && t.__esModule) return t;
            if (null === t || "object" != typeof t && "function" != typeof t) return {
                default: t
            };
            var e = n();
            if (e && e.has(t)) return e.get(t);
            var r = {},
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in t)
                if (Object.prototype.hasOwnProperty.call(t, o)) {
                    var s = i ? Object.getOwnPropertyDescriptor(t, o) : null;
                    s && (s.get || s.set) ? Object.defineProperty(r, o, s) : r[o] = t[o]
                } return r.default = t, e && e.set(t, r), r
        }
        var o = -.14861,
            s = 1.78277,
            a = -.29227,
            u = -.90649,
            h = 1.97294,
            c = h * u,
            f = h * s,
            l = s * a - u * o;

        function p(t) {
            if (t instanceof b) return new b(t.h, t.s, t.l, t.opacity);
            t instanceof e.Rgb || (t = (0, e.rgbConvert)(t));
            var n = t.r / 255,
                i = t.g / 255,
                o = t.b / 255,
                s = (l * o + c * n - f * i) / (l + c - f),
                p = o - s,
                d = (h * (i - s) - a * p) / u,
                y = Math.sqrt(d * d + p * p) / (h * s * (1 - s)),
                g = y ? Math.atan2(d, p) * r.rad2deg - 120 : NaN;
            return new b(g < 0 ? g + 360 : g, y, s, t.opacity)
        }

        function d(t, e, r, n) {
            return 1 === arguments.length ? p(t) : new b(t, e, r, null == n ? 1 : n)
        }

        function b(t, e, r, n) {
            this.h = +t, this.s = +e, this.l = +r, this.opacity = +n
        }(0, t.default)(b, d, (0, t.extend)(e.Color, {
            brighter: function(t) {
                return t = null == t ? e.brighter : Math.pow(e.brighter, t), new b(this.h, this.s, this.l * t, this.opacity)
            },
            darker: function(t) {
                return t = null == t ? e.darker : Math.pow(e.darker, t), new b(this.h, this.s, this.l * t, this.opacity)
            },
            rgb: function() {
                var t = isNaN(this.h) ? 0 : (this.h + 120) * r.deg2rad,
                    n = +this.l,
                    i = isNaN(this.s) ? 0 : this.s * n * (1 - n),
                    c = Math.cos(t),
                    f = Math.sin(t);
                return new e.Rgb(255 * (n + i * (o * c + s * f)), 255 * (n + i * (a * c + u * f)), 255 * (n + i * (h * c)), this.opacity)
            }
        }));
    }, {
        "./define.js": "fV2I",
        "./color.js": "LIaf",
        "./math.js": "XzID"
    }],
    "Peej": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), Object.defineProperty(exports, "color", {
            enumerable: !0,
            get: function() {
                return e.default
            }
        }), Object.defineProperty(exports, "rgb", {
            enumerable: !0,
            get: function() {
                return e.rgb
            }
        }), Object.defineProperty(exports, "hsl", {
            enumerable: !0,
            get: function() {
                return e.hsl
            }
        }), Object.defineProperty(exports, "lab", {
            enumerable: !0,
            get: function() {
                return r.default
            }
        }), Object.defineProperty(exports, "hcl", {
            enumerable: !0,
            get: function() {
                return r.hcl
            }
        }), Object.defineProperty(exports, "lch", {
            enumerable: !0,
            get: function() {
                return r.lch
            }
        }), Object.defineProperty(exports, "gray", {
            enumerable: !0,
            get: function() {
                return r.gray
            }
        }), Object.defineProperty(exports, "cubehelix", {
            enumerable: !0,
            get: function() {
                return t.default
            }
        });
        var e = o(require("./color.js")),
            r = o(require("./lab.js")),
            t = n(require("./cubehelix.js"));

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function u() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return u = function() {
                return e
            }, e
        }

        function o(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var r = u();
            if (r && r.has(e)) return r.get(e);
            var t = {},
                n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (Object.prototype.hasOwnProperty.call(e, o)) {
                    var c = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                    c && (c.get || c.set) ? Object.defineProperty(t, o, c) : t[o] = e[o]
                } return t.default = e, r && r.set(e, t), t
        }
    }, {
        "./color.js": "LIaf",
        "./lab.js": "f7Av",
        "./cubehelix.js": "CMX9"
    }],
    "ElXH": [function(require, module, exports) {
        "use strict";

        function e(e, r, t, n, o) {
            var u = e * e,
                s = u * e;
            return ((1 - 3 * e + 3 * u - s) * r + (4 - 6 * u + 3 * s) * t + (1 + 3 * e + 3 * u - 3 * s) * n + s * o) / 6
        }

        function r(r) {
            var t = r.length - 1;
            return function(n) {
                var o = n <= 0 ? n = 0 : n >= 1 ? (n = 1, t - 1) : Math.floor(n * t),
                    u = r[o],
                    s = r[o + 1],
                    a = o > 0 ? r[o - 1] : 2 * u - s,
                    f = o < t - 1 ? r[o + 2] : 2 * s - u;
                return e((n - o / t) * t, a, u, s, f)
            }
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.basis = e, exports.default = r;
    }, {}],
    "hnXz": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = r;
        var e = require("./basis");

        function r(r) {
            var t = r.length;
            return function(s) {
                var u = Math.floor(((s %= 1) < 0 ? ++s : s) * t),
                    a = r[(u + t - 1) % t],
                    n = r[u % t],
                    o = r[(u + 1) % t],
                    i = r[(u + 2) % t];
                return (0, e.basis)((s - u / t) * t, a, n, o, i)
            }
        }
    }, {
        "./basis": "ElXH"
    }],
    "RhzI": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.hue = u, exports.gamma = o, exports.default = a;
        var t = e(require("./constant"));

        function e(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function n(t, e) {
            return function(n) {
                return t + n * e
            }
        }

        function r(t, e, n) {
            return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n,
                function(r) {
                    return Math.pow(t + r * e, n)
                }
        }

        function u(e, r) {
            var u = r - e;
            return u ? n(e, u > 180 || u < -180 ? u - 360 * Math.round(u / 360) : u) : (0, t.default)(isNaN(e) ? r : e)
        }

        function o(e) {
            return 1 == (e = +e) ? a : function(n, u) {
                return u - n ? r(n, u, e) : (0, t.default)(isNaN(n) ? u : n)
            }
        }

        function a(e, r) {
            var u = r - e;
            return u ? n(e, u) : (0, t.default)(isNaN(e) ? r : e)
        }
    }, {
        "./constant": "aCvo"
    }],
    "rvVK": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.rgbBasisClosed = exports.rgbBasis = exports.default = void 0;
        var r = require("d3-color"),
            e = a(require("./basis")),
            t = a(require("./basisClosed")),
            n = u(require("./color"));

        function o() {
            if ("function" != typeof WeakMap) return null;
            var r = new WeakMap;
            return o = function() {
                return r
            }, r
        }

        function u(r) {
            if (r && r.__esModule) return r;
            if (null === r || "object" != typeof r && "function" != typeof r) return {
                default: r
            };
            var e = o();
            if (e && e.has(r)) return e.get(r);
            var t = {},
                n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var u in r)
                if (Object.prototype.hasOwnProperty.call(r, u)) {
                    var a = n ? Object.getOwnPropertyDescriptor(r, u) : null;
                    a && (a.get || a.set) ? Object.defineProperty(t, u, a) : t[u] = r[u]
                } return t.default = r, e && e.set(r, t), t
        }

        function a(r) {
            return r && r.__esModule ? r : {
                default: r
            }
        }
        var i = function e(t) {
            var o = (0, n.gamma)(t);

            function u(e, t) {
                var u = o((e = (0, r.rgb)(e)).r, (t = (0, r.rgb)(t)).r),
                    a = o(e.g, t.g),
                    i = o(e.b, t.b),
                    f = (0, n.default)(e.opacity, t.opacity);
                return function(r) {
                    return e.r = u(r), e.g = a(r), e.b = i(r), e.opacity = f(r), e + ""
                }
            }
            return u.gamma = e, u
        }(1);

        function f(e) {
            return function(t) {
                var n, o, u = t.length,
                    a = new Array(u),
                    i = new Array(u),
                    f = new Array(u);
                for (n = 0; n < u; ++n) o = (0, r.rgb)(t[n]), a[n] = o.r || 0, i[n] = o.g || 0, f[n] = o.b || 0;
                return a = e(a), i = e(i), f = e(f), o.opacity = 1,
                    function(r) {
                        return o.r = a(r), o.g = i(r), o.b = f(r), o + ""
                    }
            }
        }
        exports.default = i;
        var s = f(e.default);
        exports.rgbBasis = s;
        var c = f(t.default);
        exports.rgbBasisClosed = c;
    }, {
        "d3-color": "Peej",
        "./basis": "ElXH",
        "./basisClosed": "hnXz",
        "./color": "RhzI"
    }],
    "TYZM": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = t;
        var e = r(require("./value"));

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function t(r, t) {
            var n, u = t ? t.length : 0,
                o = r ? Math.min(u, r.length) : 0,
                a = new Array(o),
                f = new Array(u);
            for (n = 0; n < o; ++n) a[n] = (0, e.default)(r[n], t[n]);
            for (; n < u; ++n) f[n] = t[n];
            return function(e) {
                for (n = 0; n < o; ++n) f[n] = a[n](e);
                return f
            }
        }
    }, {
        "./value": "gzcD"
    }],
    "jEDF": [function(require, module, exports) {
        "use strict";

        function e(e, t) {
            var r = new Date;
            return t -= e = +e,
                function(n) {
                    return r.setTime(e + t * n), r
                }
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "YNf8": [function(require, module, exports) {
        "use strict";

        function e(e, t) {
            return t -= e = +e,
                function(r) {
                    return e + t * r
                }
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "iJdZ": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = r;
        var e = t(require("./value"));

        function t(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(t, r) {
            var u, n = {},
                o = {};
            for (u in null !== t && "object" == typeof t || (t = {}), null !== r && "object" == typeof r || (r = {}), r) u in t ? n[u] = (0, e.default)(t[u], r[u]) : o[u] = r[u];
            return function(e) {
                for (u in n) o[u] = n[u](e);
                return o
            }
        }
    }, {
        "./value": "gzcD"
    }],
    "nK0E": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = l;
        var e = n(require("./number"));

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var r = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
            t = new RegExp(r.source, "g");

        function u(e) {
            return function() {
                return e
            }
        }

        function i(e) {
            return function(n) {
                return e(n) + ""
            }
        }

        function l(n, l) {
            var o, c, d, f = r.lastIndex = t.lastIndex = 0,
                s = -1,
                x = [],
                a = [];
            for (n += "", l += "";
                (o = r.exec(n)) && (c = t.exec(l));)(d = c.index) > f && (d = l.slice(f, d), x[s] ? x[s] += d : x[++s] = d), (o = o[0]) === (c = c[0]) ? x[s] ? x[s] += c : x[++s] = c : (x[++s] = null, a.push({
                i: s,
                x: (0, e.default)(o, c)
            })), f = t.lastIndex;
            return f < l.length && (d = l.slice(f), x[s] ? x[s] += d : x[++s] = d), x.length < 2 ? a[0] ? i(a[0].x) : u(l) : (l = a.length, function(e) {
                for (var n, r = 0; r < l; ++r) x[(n = a[r]).i] = n.x(e);
                return x.join("")
            })
        }
    }, {
        "./number": "YNf8"
    }],
    "gzcD": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = l;
        var e = require("d3-color"),
            r = i(require("./rgb")),
            t = i(require("./array")),
            u = i(require("./date")),
            a = i(require("./number")),
            o = i(require("./object")),
            n = i(require("./string")),
            f = i(require("./constant"));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function l(i, l) {
            var d, c = typeof l;
            return null == l || "boolean" === c ? (0, f.default)(l) : ("number" === c ? a.default : "string" === c ? (d = (0, e.color)(l)) ? (l = d, r.default) : n.default : l instanceof e.color ? r.default : l instanceof Date ? u.default : Array.isArray(l) ? t.default : "function" != typeof l.valueOf && "function" != typeof l.toString || isNaN(l) ? o.default : a.default)(i, l)
        }
    }, {
        "d3-color": "Peej",
        "./rgb": "rvVK",
        "./array": "TYZM",
        "./date": "jEDF",
        "./number": "YNf8",
        "./object": "iJdZ",
        "./string": "nK0E",
        "./constant": "aCvo"
    }],
    "B1w8": [function(require, module, exports) {
        "use strict";

        function t(t) {
            var e = t.length;
            return function(r) {
                return t[Math.max(0, Math.min(e - 1, Math.floor(r * e)))]
            }
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = t;
    }, {}],
    "ZrPS": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = r;
        var e = require("./color");

        function r(r, t) {
            var o = (0, e.hue)(+r, +t);
            return function(e) {
                var r = o(e);
                return r - 360 * Math.floor(r / 360)
            }
        }
    }, {
        "./color": "RhzI"
    }],
    "nXvs": [function(require, module, exports) {
        "use strict";

        function e(e, t) {
            return t -= e = +e,
                function(r) {
                    return Math.round(e + t * r)
                }
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "UXwK": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = a, exports.identity = void 0;
        var t = 180 / Math.PI,
            e = {
                translateX: 0,
                translateY: 0,
                rotate: 0,
                skewX: 0,
                scaleX: 1,
                scaleY: 1
            };

        function a(e, a, r, s, n, l) {
            var o, i, c;
            return (o = Math.sqrt(e * e + a * a)) && (e /= o, a /= o), (c = e * r + a * s) && (r -= e * c, s -= a * c), (i = Math.sqrt(r * r + s * s)) && (r /= i, s /= i, c /= i), e * s < a * r && (e = -e, a = -a, c = -c, o = -o), {
                translateX: n,
                translateY: l,
                rotate: Math.atan2(a, e) * t,
                skewX: Math.atan(c) * t,
                scaleX: o,
                scaleY: i
            }
        }
        exports.identity = e;
    }, {}],
    "LVjk": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.parseCss = i, exports.parseSvg = l;
        var e, t, r, n, o = a(require("./decompose"));

        function u() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return u = function() {
                return e
            }, e
        }

        function a(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var t = u();
            if (t && t.has(e)) return t.get(e);
            var r = {},
                n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o]
                } return r.default = e, t && t.set(e, r), r
        }

        function i(n) {
            return "none" === n ? o.identity : (e || (e = document.createElement("DIV"), t = document.documentElement, r = document.defaultView), e.style.transform = n, n = r.getComputedStyle(t.appendChild(e), null).getPropertyValue("transform"), t.removeChild(e), n = n.slice(7, -1).split(","), (0, o.default)(+n[0], +n[1], +n[2], +n[3], +n[4], +n[5]))
        }

        function l(e) {
            return null == e ? o.identity : (n || (n = document.createElementNS("http://www.w3.org/2000/svg", "g")), n.setAttribute("transform", e), (e = n.transform.baseVal.consolidate()) ? (e = e.matrix, (0, o.default)(e.a, e.b, e.c, e.d, e.e, e.f)) : o.identity)
        }
    }, {
        "./decompose": "UXwK"
    }],
    "v4Xl": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.interpolateTransformSvg = exports.interpolateTransformCss = void 0;
        var e = r(require("../number")),
            t = require("./parse");

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function s(t, r, s, n) {
            function a(e) {
                return e.length ? e.pop() + " " : ""
            }
            return function(u, l) {
                var o = [],
                    p = [];
                return u = t(u), l = t(l),
                    function(t, n, a, u, l, o) {
                        if (t !== a || n !== u) {
                            var p = l.push("translate(", null, r, null, s);
                            o.push({
                                i: p - 4,
                                x: (0, e.default)(t, a)
                            }, {
                                i: p - 2,
                                x: (0, e.default)(n, u)
                            })
                        } else(a || u) && l.push("translate(" + a + r + u + s)
                    }(u.translateX, u.translateY, l.translateX, l.translateY, o, p),
                    function(t, r, s, u) {
                        t !== r ? (t - r > 180 ? r += 360 : r - t > 180 && (t += 360), u.push({
                            i: s.push(a(s) + "rotate(", null, n) - 2,
                            x: (0, e.default)(t, r)
                        })) : r && s.push(a(s) + "rotate(" + r + n)
                    }(u.rotate, l.rotate, o, p),
                    function(t, r, s, u) {
                        t !== r ? u.push({
                            i: s.push(a(s) + "skewX(", null, n) - 2,
                            x: (0, e.default)(t, r)
                        }) : r && s.push(a(s) + "skewX(" + r + n)
                    }(u.skewX, l.skewX, o, p),
                    function(t, r, s, n, u, l) {
                        if (t !== s || r !== n) {
                            var o = u.push(a(u) + "scale(", null, ",", null, ")");
                            l.push({
                                i: o - 4,
                                x: (0, e.default)(t, s)
                            }, {
                                i: o - 2,
                                x: (0, e.default)(r, n)
                            })
                        } else 1 === s && 1 === n || u.push(a(u) + "scale(" + s + "," + n + ")")
                    }(u.scaleX, u.scaleY, l.scaleX, l.scaleY, o, p), u = l = null,
                    function(e) {
                        for (var t, r = -1, s = p.length; ++r < s;) o[(t = p[r]).i] = t.x(e);
                        return o.join("")
                    }
            }
        }
        var n = s(t.parseCss, "px, ", "px)", "deg)");
        exports.interpolateTransformCss = n;
        var a = s(t.parseSvg, ", ", ")", ")");
        exports.interpolateTransformSvg = a;
    }, {
        "../number": "YNf8",
        "./parse": "LVjk"
    }],
    "jU1v": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = M;
        var t = Math.SQRT2,
            e = 2,
            r = 4,
            n = 1e-12;

        function a(t) {
            return ((t = Math.exp(t)) + 1 / t) / 2
        }

        function u(t) {
            return ((t = Math.exp(t)) - 1 / t) / 2
        }

        function o(t) {
            return ((t = Math.exp(2 * t)) - 1) / (t + 1)
        }

        function M(M, h) {
            var i, f, s = M[0],
                c = M[1],
                l = M[2],
                p = h[0],
                x = h[1],
                v = h[2],
                d = p - s,
                g = x - c,
                q = d * d + g * g;
            if (q < n) f = Math.log(v / l) / t, i = function(e) {
                return [s + e * d, c + e * g, l * Math.exp(t * e * f)]
            };
            else {
                var _ = Math.sqrt(q),
                    b = (v * v - l * l + r * q) / (2 * l * e * _),
                    j = (v * v - l * l - r * q) / (2 * v * e * _),
                    y = Math.log(Math.sqrt(b * b + 1) - b),
                    O = Math.log(Math.sqrt(j * j + 1) - j);
                f = (O - y) / t, i = function(r) {
                    var n = r * f,
                        M = a(y),
                        h = l / (e * _) * (M * o(t * n + y) - u(y));
                    return [s + h * d, c + h * g, l * M / a(t * n + y)]
                }
            }
            return i.duration = 1e3 * f, i
        }
    }, {}],
    "LdeI": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.hslLong = exports.default = void 0;
        var e = require("d3-color"),
            t = o(require("./color"));

        function r() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return r = function() {
                return e
            }, e
        }

        function o(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var t = r();
            if (t && t.has(e)) return t.get(e);
            var o = {},
                n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var u in e)
                if (Object.prototype.hasOwnProperty.call(e, u)) {
                    var a = n ? Object.getOwnPropertyDescriptor(e, u) : null;
                    a && (a.get || a.set) ? Object.defineProperty(o, u, a) : o[u] = e[u]
                } return o.default = e, t && t.set(e, o), o
        }

        function n(r) {
            return function(o, n) {
                var u = r((o = (0, e.hsl)(o)).h, (n = (0, e.hsl)(n)).h),
                    a = (0, t.default)(o.s, n.s),
                    f = (0, t.default)(o.l, n.l),
                    l = (0, t.default)(o.opacity, n.opacity);
                return function(e) {
                    return o.h = u(e), o.s = a(e), o.l = f(e), o.opacity = l(e), o + ""
                }
            }
        }
        var u = n(t.hue);
        exports.default = u;
        var a = n(t.default);
        exports.hslLong = a;
    }, {
        "d3-color": "Peej",
        "./color": "RhzI"
    }],
    "rghB": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = u;
        var e = require("d3-color"),
            t = r(require("./color"));

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function u(r, u) {
            var a = (0, t.default)((r = (0, e.lab)(r)).l, (u = (0, e.lab)(u)).l),
                l = (0, t.default)(r.a, u.a),
                o = (0, t.default)(r.b, u.b),
                c = (0, t.default)(r.opacity, u.opacity);
            return function(e) {
                return r.l = a(e), r.a = l(e), r.b = o(e), r.opacity = c(e), r + ""
            }
        }
    }, {
        "d3-color": "Peej",
        "./color": "RhzI"
    }],
    "dxPN": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.hclLong = exports.default = void 0;
        var e = require("d3-color"),
            t = o(require("./color"));

        function r() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return r = function() {
                return e
            }, e
        }

        function o(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var t = r();
            if (t && t.has(e)) return t.get(e);
            var o = {},
                n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var u in e)
                if (Object.prototype.hasOwnProperty.call(e, u)) {
                    var c = n ? Object.getOwnPropertyDescriptor(e, u) : null;
                    c && (c.get || c.set) ? Object.defineProperty(o, u, c) : o[u] = e[u]
                } return o.default = e, t && t.set(e, o), o
        }

        function n(r) {
            return function(o, n) {
                var u = r((o = (0, e.hcl)(o)).h, (n = (0, e.hcl)(n)).h),
                    c = (0, t.default)(o.c, n.c),
                    a = (0, t.default)(o.l, n.l),
                    f = (0, t.default)(o.opacity, n.opacity);
                return function(e) {
                    return o.h = u(e), o.c = c(e), o.l = a(e), o.opacity = f(e), o + ""
                }
            }
        }
        var u = n(t.hue);
        exports.default = u;
        var c = n(t.default);
        exports.hclLong = c;
    }, {
        "d3-color": "Peej",
        "./color": "RhzI"
    }],
    "X3VV": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.cubehelixLong = exports.default = void 0;
        var e = require("d3-color"),
            t = n(require("./color"));

        function r() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return r = function() {
                return e
            }, e
        }

        function n(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var t = r();
            if (t && t.has(e)) return t.get(e);
            var n = {},
                o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var u in e)
                if (Object.prototype.hasOwnProperty.call(e, u)) {
                    var a = o ? Object.getOwnPropertyDescriptor(e, u) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, u, a) : n[u] = e[u]
                } return n.default = e, t && t.set(e, n), n
        }

        function o(r) {
            return function n(o) {
                function u(n, u) {
                    var a = r((n = (0, e.cubehelix)(n)).h, (u = (0, e.cubehelix)(u)).h),
                        i = (0, t.default)(n.s, u.s),
                        c = (0, t.default)(n.l, u.l),
                        f = (0, t.default)(n.opacity, u.opacity);
                    return function(e) {
                        return n.h = a(e), n.s = i(e), n.l = c(Math.pow(e, o)), n.opacity = f(e), n + ""
                    }
                }
                return o = +o, u.gamma = n, u
            }(1)
        }
        var u = o(t.hue);
        exports.default = u;
        var a = o(t.default);
        exports.cubehelixLong = a;
    }, {
        "d3-color": "Peej",
        "./color": "RhzI"
    }],
    "xtkP": [function(require, module, exports) {
        "use strict";

        function e(e, r) {
            for (var t = 0, n = r.length - 1, a = r[0], o = new Array(n < 0 ? 0 : n); t < n;) o[t] = e(a, a = r[++t]);
            return function(e) {
                var r = Math.max(0, Math.min(n - 1, Math.floor(e *= n)));
                return o[r](e - r)
            }
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "Oe1t": [function(require, module, exports) {
        "use strict";

        function e(e, r) {
            for (var t = new Array(r), o = 0; o < r; ++o) t[o] = e(o / (r - 1));
            return t
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "k9aH": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), Object.defineProperty(exports, "interpolate", {
            enumerable: !0,
            get: function() {
                return e.default
            }
        }), Object.defineProperty(exports, "interpolateArray", {
            enumerable: !0,
            get: function() {
                return r.default
            }
        }), Object.defineProperty(exports, "interpolateBasis", {
            enumerable: !0,
            get: function() {
                return t.default
            }
        }), Object.defineProperty(exports, "interpolateBasisClosed", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }), Object.defineProperty(exports, "interpolateDate", {
            enumerable: !0,
            get: function() {
                return u.default
            }
        }), Object.defineProperty(exports, "interpolateDiscrete", {
            enumerable: !0,
            get: function() {
                return o.default
            }
        }), Object.defineProperty(exports, "interpolateHue", {
            enumerable: !0,
            get: function() {
                return i.default
            }
        }), Object.defineProperty(exports, "interpolateNumber", {
            enumerable: !0,
            get: function() {
                return a.default
            }
        }), Object.defineProperty(exports, "interpolateObject", {
            enumerable: !0,
            get: function() {
                return l.default
            }
        }), Object.defineProperty(exports, "interpolateRound", {
            enumerable: !0,
            get: function() {
                return f.default
            }
        }), Object.defineProperty(exports, "interpolateString", {
            enumerable: !0,
            get: function() {
                return p.default
            }
        }), Object.defineProperty(exports, "interpolateTransformCss", {
            enumerable: !0,
            get: function() {
                return c.interpolateTransformCss
            }
        }), Object.defineProperty(exports, "interpolateTransformSvg", {
            enumerable: !0,
            get: function() {
                return c.interpolateTransformSvg
            }
        }), Object.defineProperty(exports, "interpolateZoom", {
            enumerable: !0,
            get: function() {
                return b.default
            }
        }), Object.defineProperty(exports, "interpolateRgb", {
            enumerable: !0,
            get: function() {
                return s.default
            }
        }), Object.defineProperty(exports, "interpolateRgbBasis", {
            enumerable: !0,
            get: function() {
                return s.rgbBasis
            }
        }), Object.defineProperty(exports, "interpolateRgbBasisClosed", {
            enumerable: !0,
            get: function() {
                return s.rgbBasisClosed
            }
        }), Object.defineProperty(exports, "interpolateHsl", {
            enumerable: !0,
            get: function() {
                return d.default
            }
        }), Object.defineProperty(exports, "interpolateHslLong", {
            enumerable: !0,
            get: function() {
                return d.hslLong
            }
        }), Object.defineProperty(exports, "interpolateLab", {
            enumerable: !0,
            get: function() {
                return g.default
            }
        }), Object.defineProperty(exports, "interpolateHcl", {
            enumerable: !0,
            get: function() {
                return y.default
            }
        }), Object.defineProperty(exports, "interpolateHclLong", {
            enumerable: !0,
            get: function() {
                return y.hclLong
            }
        }), Object.defineProperty(exports, "interpolateCubehelix", {
            enumerable: !0,
            get: function() {
                return O.default
            }
        }), Object.defineProperty(exports, "interpolateCubehelixLong", {
            enumerable: !0,
            get: function() {
                return O.cubehelixLong
            }
        }), Object.defineProperty(exports, "piecewise", {
            enumerable: !0,
            get: function() {
                return j.default
            }
        }), Object.defineProperty(exports, "quantize", {
            enumerable: !0,
            get: function() {
                return m.default
            }
        });
        var e = q(require("./value")),
            r = q(require("./array")),
            t = q(require("./basis")),
            n = q(require("./basisClosed")),
            u = q(require("./date")),
            o = q(require("./discrete")),
            i = q(require("./hue")),
            a = q(require("./number")),
            l = q(require("./object")),
            f = q(require("./round")),
            p = q(require("./string")),
            c = require("./transform/index"),
            b = q(require("./zoom")),
            s = P(require("./rgb")),
            d = P(require("./hsl")),
            g = q(require("./lab")),
            y = P(require("./hcl")),
            O = P(require("./cubehelix")),
            j = q(require("./piecewise")),
            m = q(require("./quantize"));

        function x() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return x = function() {
                return e
            }, e
        }

        function P(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var r = x();
            if (r && r.has(e)) return r.get(e);
            var t = {},
                n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var u in e)
                if (Object.prototype.hasOwnProperty.call(e, u)) {
                    var o = n ? Object.getOwnPropertyDescriptor(e, u) : null;
                    o && (o.get || o.set) ? Object.defineProperty(t, u, o) : t[u] = e[u]
                } return t.default = e, r && r.set(e, t), t
        }

        function q(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    }, {
        "./value": "gzcD",
        "./array": "TYZM",
        "./basis": "ElXH",
        "./basisClosed": "hnXz",
        "./date": "jEDF",
        "./discrete": "B1w8",
        "./hue": "ZrPS",
        "./number": "YNf8",
        "./object": "iJdZ",
        "./round": "nXvs",
        "./string": "nK0E",
        "./transform/index": "v4Xl",
        "./zoom": "jU1v",
        "./rgb": "rvVK",
        "./hsl": "LdeI",
        "./lab": "rghB",
        "./hcl": "dxPN",
        "./cubehelix": "X3VV",
        "./piecewise": "xtkP",
        "./quantize": "Oe1t"
    }],
    "FNaI": [function(require, module, exports) {
        "use strict";

        function e(e) {
            return +e
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "CjJ5": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.identity = i, exports.copy = s, exports.transformer = p, exports.default = m;
        var n = require("d3-array"),
            r = require("d3-interpolate"),
            e = u(require("./constant.js")),
            t = u(require("./number.js"));

        function u(n) {
            return n && n.__esModule ? n : {
                default: n
            }
        }
        var o = [0, 1];

        function i(n) {
            return n
        }

        function a(n, r) {
            return (r -= n = +n) ? function(e) {
                return (e - n) / r
            } : (0, e.default)(isNaN(r) ? NaN : .5)
        }

        function c(n, r) {
            var e;
            return n > r && (e = n, n = r, r = e),
                function(e) {
                    return Math.max(n, Math.min(r, e))
                }
        }

        function f(n, r, e) {
            var t = n[0],
                u = n[1],
                o = r[0],
                i = r[1];
            return u < t ? (t = a(u, t), o = e(i, o)) : (t = a(t, u), o = e(o, i)),
                function(n) {
                    return o(t(n))
                }
        }

        function l(r, e, t) {
            var u = Math.min(r.length, e.length) - 1,
                o = new Array(u),
                i = new Array(u),
                c = -1;
            for (r[u] < r[0] && (r = r.slice().reverse(), e = e.slice().reverse()); ++c < u;) o[c] = a(r[c], r[c + 1]), i[c] = t(e[c], e[c + 1]);
            return function(e) {
                var t = (0, n.bisect)(r, e, 1, u) - 1;
                return i[t](o[t](e))
            }
        }

        function s(n, r) {
            return r.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())
        }

        function p() {
            var n, e, u, a, s, p, m = o,
                d = o,
                g = r.interpolate,
                h = i;

            function v() {
                var n = Math.min(m.length, d.length);
                return h !== i && (h = c(m[0], m[n - 1])), a = n > 2 ? l : f, s = p = null, y
            }

            function y(r) {
                return isNaN(r = +r) ? u : (s || (s = a(m.map(n), d, g)))(n(h(r)))
            }
            return y.invert = function(t) {
                    return h(e((p || (p = a(d, m.map(n), r.interpolateNumber)))(t)))
                }, y.domain = function(n) {
                    return arguments.length ? (m = Array.from(n, t.default), v()) : m.slice()
                }, y.range = function(n) {
                    return arguments.length ? (d = Array.from(n), v()) : d.slice()
                }, y.rangeRound = function(n) {
                    return d = Array.from(n), g = r.interpolateRound, v()
                }, y.clamp = function(n) {
                    return arguments.length ? (h = !!n || i, v()) : h !== i
                }, y.interpolate = function(n) {
                    return arguments.length ? (g = n, v()) : g
                }, y.unknown = function(n) {
                    return arguments.length ? (u = n, y) : u
                },
                function(r, t) {
                    return n = r, e = t, v()
                }
        }

        function m() {
            return p()(i, i)
        }
    }, {
        "d3-array": "K0bd",
        "d3-interpolate": "k9aH",
        "./constant.js": "aCvo",
        "./number.js": "FNaI"
    }],
    "qjRa": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = a;
        var e = require("d3-array"),
            r = require("d3-format");

        function a(a, i, s, t) {
            var c, n = (0, e.tickStep)(a, i, s);
            switch ((t = (0, r.formatSpecifier)(null == t ? ",f" : t)).type) {
                case "s":
                    var o = Math.max(Math.abs(a), Math.abs(i));
                    return null != t.precision || isNaN(c = (0, r.precisionPrefix)(n, o)) || (t.precision = c), (0, r.formatPrefix)(t, o);
                case "":
                case "e":
                case "g":
                case "p":
                case "r":
                    null != t.precision || isNaN(c = (0, r.precisionRound)(n, Math.max(Math.abs(a), Math.abs(i)))) || (t.precision = c - ("e" === t.type));
                    break;
                case "f":
                case "%":
                    null != t.precision || isNaN(c = (0, r.precisionFixed)(n)) || (t.precision = c - 2 * ("%" === t.type))
            }
            return (0, r.format)(t)
        }
    }, {
        "d3-array": "K0bd",
        "d3-format": "VuZR"
    }],
    "LIJk": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.linearish = a, exports.default = c;
        var e = require("d3-array"),
            t = o(require("./continuous.js")),
            r = require("./init.js"),
            n = u(require("./tickFormat.js"));

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return i = function() {
                return e
            }, e
        }

        function o(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var t = i();
            if (t && t.has(e)) return t.get(e);
            var r = {},
                n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var u in e)
                if (Object.prototype.hasOwnProperty.call(e, u)) {
                    var o = n ? Object.getOwnPropertyDescriptor(e, u) : null;
                    o && (o.get || o.set) ? Object.defineProperty(r, u, o) : r[u] = e[u]
                } return r.default = e, t && t.set(e, r), r
        }

        function a(t) {
            var r = t.domain;
            return t.ticks = function(t) {
                var n = r();
                return (0, e.ticks)(n[0], n[n.length - 1], null == t ? 10 : t)
            }, t.tickFormat = function(e, t) {
                var u = r();
                return (0, n.default)(u[0], u[u.length - 1], null == e ? 10 : e, t)
            }, t.nice = function(n) {
                null == n && (n = 10);
                var u, i = r(),
                    o = 0,
                    a = i.length - 1,
                    c = i[o],
                    l = i[a];
                return l < c && (u = c, c = l, l = u, u = o, o = a, a = u), (u = (0, e.tickIncrement)(c, l, n)) > 0 ? (c = Math.floor(c / u) * u, l = Math.ceil(l / u) * u, u = (0, e.tickIncrement)(c, l, n)) : u < 0 && (c = Math.ceil(c * u) / u, l = Math.floor(l * u) / u, u = (0, e.tickIncrement)(c, l, n)), u > 0 ? (i[o] = Math.floor(c / u) * u, i[a] = Math.ceil(l / u) * u, r(i)) : u < 0 && (i[o] = Math.ceil(c * u) / u, i[a] = Math.floor(l * u) / u, r(i)), t
            }, t
        }

        function c() {
            var e = (0, t.default)();
            return e.copy = function() {
                return (0, t.copy)(e, c())
            }, r.initRange.apply(e, arguments), a(e)
        }
    }, {
        "d3-array": "K0bd",
        "./continuous.js": "CjJ5",
        "./init.js": "buZa",
        "./tickFormat.js": "qjRa"
    }],
    "FKHe": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = t;
        var e = require("./linear.js"),
            n = r(require("./number.js"));

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function t(r) {
            var u;

            function i(e) {
                return isNaN(e = +e) ? u : e
            }
            return i.invert = i, i.domain = i.range = function(e) {
                return arguments.length ? (r = Array.from(e, n.default), i) : r.slice()
            }, i.unknown = function(e) {
                return arguments.length ? (u = e, i) : u
            }, i.copy = function() {
                return t(r).unknown(u)
            }, r = arguments.length ? Array.from(r, n.default) : [0, 1], (0, e.linearish)(i)
        }
    }, {
        "./linear.js": "LIJk",
        "./number.js": "FNaI"
    }],
    "eMTM": [function(require, module, exports) {
        "use strict";

        function e(e, t) {
            var r, l = 0,
                o = (e = e.slice()).length - 1,
                s = e[l],
                u = e[o];
            return u < s && (r = l, l = o, o = r, r = s, s = u, u = r), e[l] = t.floor(s), e[o] = t.ceil(u), e
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "ea59": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.loggish = p, exports.default = g;
        var t = require("d3-array"),
            n = require("d3-format"),
            r = o(require("./nice.js")),
            e = require("./continuous.js"),
            u = require("./init.js");

        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function i(t) {
            return Math.log(t)
        }

        function a(t) {
            return Math.exp(t)
        }

        function f(t) {
            return -Math.log(-t)
        }

        function c(t) {
            return -Math.exp(-t)
        }

        function l(t) {
            return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t
        }

        function h(t) {
            return 10 === t ? l : t === Math.E ? Math.exp : function(n) {
                return Math.pow(t, n)
            }
        }

        function s(t) {
            return t === Math.E ? Math.log : 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t), function(n) {
                return Math.log(n) / t
            })
        }

        function M(t) {
            return function(n) {
                return -t(-n)
            }
        }

        function p(e) {
            var u, o, l = e(i, a),
                p = l.domain,
                g = 10;

            function d() {
                return u = s(g), o = h(g), p()[0] < 0 ? (u = M(u), o = M(o), e(f, c)) : e(i, a), l
            }
            return l.base = function(t) {
                return arguments.length ? (g = +t, d()) : g
            }, l.domain = function(t) {
                return arguments.length ? (p(t), d()) : p()
            }, l.ticks = function(n) {
                var r, e = p(),
                    i = e[0],
                    a = e[e.length - 1];
                (r = a < i) && (h = i, i = a, a = h);
                var f, c, l, h = u(i),
                    s = u(a),
                    M = null == n ? 10 : +n,
                    d = [];
                if (!(g % 1) && s - h < M) {
                    if (h = Math.floor(h), s = Math.ceil(s), i > 0) {
                        for (; h <= s; ++h)
                            for (c = 1, f = o(h); c < g; ++c)
                                if (!((l = f * c) < i)) {
                                    if (l > a) break;
                                    d.push(l)
                                }
                    } else
                        for (; h <= s; ++h)
                            for (c = g - 1, f = o(h); c >= 1; --c)
                                if (!((l = f * c) < i)) {
                                    if (l > a) break;
                                    d.push(l)
                                } 2 * d.length < M && (d = (0, t.ticks)(i, a, M))
                } else d = (0, t.ticks)(h, s, Math.min(s - h, M)).map(o);
                return r ? d.reverse() : d
            }, l.tickFormat = function(t, r) {
                if (null == r && (r = 10 === g ? ".0e" : ","), "function" != typeof r && (r = (0, n.format)(r)), t === 1 / 0) return r;
                null == t && (t = 10);
                var e = Math.max(1, g * t / l.ticks().length);
                return function(t) {
                    var n = t / o(Math.round(u(t)));
                    return n * g < g - .5 && (n *= g), n <= e ? r(t) : ""
                }
            }, l.nice = function() {
                return p((0, r.default)(p(), {
                    floor: function(t) {
                        return o(Math.floor(u(t)))
                    },
                    ceil: function(t) {
                        return o(Math.ceil(u(t)))
                    }
                }))
            }, l
        }

        function g() {
            var t = p((0, e.transformer)()).domain([1, 10]);
            return t.copy = function() {
                return (0, e.copy)(t, g()).base(t.base())
            }, u.initRange.apply(t, arguments), t
        }
    }, {
        "d3-array": "K0bd",
        "d3-format": "VuZR",
        "./nice.js": "eMTM",
        "./continuous.js": "CjJ5",
        "./init.js": "buZa"
    }],
    "nanU": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.symlogish = i, exports.default = o;
        var n = require("./linear.js"),
            t = require("./continuous.js"),
            r = require("./init.js");

        function e(n) {
            return function(t) {
                return Math.sign(t) * Math.log1p(Math.abs(t / n))
            }
        }

        function u(n) {
            return function(t) {
                return Math.sign(t) * Math.expm1(Math.abs(t)) * n
            }
        }

        function i(t) {
            var r = 1,
                i = t(e(r), u(r));
            return i.constant = function(n) {
                return arguments.length ? t(e(r = +n), u(r)) : r
            }, (0, n.linearish)(i)
        }

        function o() {
            var n = i((0, t.transformer)());
            return n.copy = function() {
                return (0, t.copy)(n, o()).constant(n.constant())
            }, r.initRange.apply(n, arguments)
        }
    }, {
        "./linear.js": "LIJk",
        "./continuous.js": "CjJ5",
        "./init.js": "buZa"
    }],
    "xeRN": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.powish = o, exports.default = p, exports.sqrt = s;
        var t = require("./linear.js"),
            n = require("./continuous.js"),
            e = require("./init.js");

        function r(t) {
            return function(n) {
                return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t)
            }
        }

        function i(t) {
            return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t)
        }

        function u(t) {
            return t < 0 ? -t * t : t * t
        }

        function o(e) {
            var o = e(n.identity, n.identity),
                p = 1;
            return o.exponent = function(t) {
                return arguments.length ? 1 === (p = +t) ? e(n.identity, n.identity) : .5 === p ? e(i, u) : e(r(p), r(1 / p)) : p
            }, (0, t.linearish)(o)
        }

        function p() {
            var t = o((0, n.transformer)());
            return t.copy = function() {
                return (0, n.copy)(t, p()).exponent(t.exponent())
            }, e.initRange.apply(t, arguments), t
        }

        function s() {
            return p.apply(null, arguments).exponent(.5)
        }
    }, {
        "./linear.js": "LIJk",
        "./continuous.js": "CjJ5",
        "./init.js": "buZa"
    }],
    "mhod": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = o;
        var n = u(require("./continuous.js")),
            r = require("./init.js"),
            e = require("./linear.js"),
            t = u(require("./number.js"));

        function u(n) {
            return n && n.__esModule ? n : {
                default: n
            }
        }

        function i(n) {
            return Math.sign(n) * n * n
        }

        function a(n) {
            return Math.sign(n) * Math.sqrt(Math.abs(n))
        }

        function o() {
            var u, c = (0, n.default)(),
                l = [0, 1],
                f = !1;

            function s(n) {
                var r = a(c(n));
                return isNaN(r) ? u : f ? Math.round(r) : r
            }
            return s.invert = function(n) {
                return c.invert(i(n))
            }, s.domain = function(n) {
                return arguments.length ? (c.domain(n), s) : c.domain()
            }, s.range = function(n) {
                return arguments.length ? (c.range((l = Array.from(n, t.default)).map(i)), s) : l.slice()
            }, s.rangeRound = function(n) {
                return s.range(n).round(!0)
            }, s.round = function(n) {
                return arguments.length ? (f = !!n, s) : f
            }, s.clamp = function(n) {
                return arguments.length ? (c.clamp(n), s) : c.clamp()
            }, s.unknown = function(n) {
                return arguments.length ? (u = n, s) : u
            }, s.copy = function() {
                return o(c.domain(), l).round(f).clamp(c.clamp()).unknown(u)
            }, r.initRange.apply(s, arguments), (0, e.linearish)(s)
        }
    }, {
        "./continuous.js": "CjJ5",
        "./init.js": "buZa",
        "./linear.js": "LIJk",
        "./number.js": "FNaI"
    }],
    "AGCd": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = r;
        var n = require("d3-array"),
            e = require("./init.js");

        function r() {
            var t, i = [],
                u = [],
                a = [];

            function o() {
                var e = 0,
                    r = Math.max(1, u.length);
                for (a = new Array(r - 1); ++e < r;) a[e - 1] = (0, n.quantile)(i, e / r);
                return l
            }

            function l(e) {
                return isNaN(e = +e) ? t : u[(0, n.bisect)(a, e)]
            }
            return l.invertExtent = function(n) {
                var e = u.indexOf(n);
                return e < 0 ? [NaN, NaN] : [e > 0 ? a[e - 1] : i[0], e < a.length ? a[e] : i[i.length - 1]]
            }, l.domain = function(e) {
                if (!arguments.length) return i.slice();
                i = [];
                for (let n of e) null == n || isNaN(n = +n) || i.push(n);
                return i.sort(n.ascending), o()
            }, l.range = function(n) {
                return arguments.length ? (u = Array.from(n), o()) : u.slice()
            }, l.unknown = function(n) {
                return arguments.length ? (t = n, l) : t
            }, l.quantiles = function() {
                return a.slice()
            }, l.copy = function() {
                return r().domain(i).range(u).unknown(t)
            }, e.initRange.apply(l, arguments)
        }
    }, {
        "d3-array": "K0bd",
        "./init.js": "buZa"
    }],
    "d6Xk": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = t;
        var n = require("d3-array"),
            r = require("./linear.js"),
            e = require("./init.js");

        function t() {
            var i, u = 0,
                o = 1,
                a = 1,
                c = [.5],
                f = [0, 1];

            function l(r) {
                return r <= r ? f[(0, n.bisect)(c, r, 0, a)] : i
            }

            function s() {
                var n = -1;
                for (c = new Array(a); ++n < a;) c[n] = ((n + 1) * o - (n - a) * u) / (a + 1);
                return l
            }
            return l.domain = function(n) {
                return arguments.length ? ([u, o] = n, u = +u, o = +o, s()) : [u, o]
            }, l.range = function(n) {
                return arguments.length ? (a = (f = Array.from(n)).length - 1, s()) : f.slice()
            }, l.invertExtent = function(n) {
                var r = f.indexOf(n);
                return r < 0 ? [NaN, NaN] : r < 1 ? [u, c[0]] : r >= a ? [c[a - 1], o] : [c[r - 1], c[r]]
            }, l.unknown = function(n) {
                return arguments.length ? (i = n, l) : l
            }, l.thresholds = function() {
                return c.slice()
            }, l.copy = function() {
                return t().domain([u, o]).range(f).unknown(i)
            }, e.initRange.apply((0, r.linearish)(l), arguments)
        }
    }, {
        "d3-array": "K0bd",
        "./linear.js": "LIJk",
        "./init.js": "buZa"
    }],
    "I63C": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = r;
        var n = require("d3-array"),
            e = require("./init.js");

        function r() {
            var t, i = [.5],
                u = [0, 1],
                o = 1;

            function a(e) {
                return e <= e ? u[(0, n.bisect)(i, e, 0, o)] : t
            }
            return a.domain = function(n) {
                return arguments.length ? (i = Array.from(n), o = Math.min(i.length, u.length - 1), a) : i.slice()
            }, a.range = function(n) {
                return arguments.length ? (u = Array.from(n), o = Math.min(i.length, u.length - 1), a) : u.slice()
            }, a.invertExtent = function(n) {
                var e = u.indexOf(n);
                return [i[e - 1], i[e]]
            }, a.unknown = function(n) {
                return arguments.length ? (t = n, a) : t
            }, a.copy = function() {
                return r().domain(i).range(u).unknown(t)
            }, e.initRange.apply(a, arguments)
        }
    }, {
        "d3-array": "K0bd",
        "./init.js": "buZa"
    }],
    "QFUQ": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = t;
        var e = new Date,
            n = new Date;

        function t(r, o, u, f) {
            function i(e) {
                return r(e = 0 === arguments.length ? new Date : new Date(+e)), e
            }
            return i.floor = function(e) {
                return r(e = new Date(+e)), e
            }, i.ceil = function(e) {
                return r(e = new Date(e - 1)), o(e, 1), r(e), e
            }, i.round = function(e) {
                var n = i(e),
                    t = i.ceil(e);
                return e - n < t - e ? n : t
            }, i.offset = function(e, n) {
                return o(e = new Date(+e), null == n ? 1 : Math.floor(n)), e
            }, i.range = function(e, n, t) {
                var u, f = [];
                if (e = i.ceil(e), t = null == t ? 1 : Math.floor(t), !(e < n && t > 0)) return f;
                do {
                    f.push(u = new Date(+e)), o(e, t), r(e)
                } while (u < e && e < n);
                return f
            }, i.filter = function(e) {
                return t(function(n) {
                    if (n >= n)
                        for (; r(n), !e(n);) n.setTime(n - 1)
                }, function(n, t) {
                    if (n >= n)
                        if (t < 0)
                            for (; ++t <= 0;)
                                for (; o(n, -1), !e(n););
                        else
                            for (; --t >= 0;)
                                for (; o(n, 1), !e(n););
                })
            }, u && (i.count = function(t, o) {
                return e.setTime(+t), n.setTime(+o), r(e), r(n), Math.floor(u(e, n))
            }, i.every = function(e) {
                return e = Math.floor(e), isFinite(e) && e > 0 ? e > 1 ? i.filter(f ? function(n) {
                    return f(n) % e == 0
                } : function(n) {
                    return i.count(0, n) % e == 0
                }) : i : null
            }), i
        }
    }, {}],
    "WVmH": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.milliseconds = exports.default = void 0;
        var e = t(require("./interval.js"));

        function t(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var n = (0, e.default)(function() {}, function(e, t) {
            e.setTime(+e + t)
        }, function(e, t) {
            return t - e
        });
        n.every = function(t) {
            return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? (0, e.default)(function(e) {
                e.setTime(Math.floor(e / t) * t)
            }, function(e, n) {
                e.setTime(+e + n * t)
            }, function(e, n) {
                return (n - e) / t
            }) : n : null
        };
        var r = n;
        exports.default = r;
        var i = n.range;
        exports.milliseconds = i;
    }, {
        "./interval.js": "QFUQ"
    }],
    "Vnta": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.durationWeek = exports.durationDay = exports.durationHour = exports.durationMinute = exports.durationSecond = void 0;
        var e = 1e3;
        exports.durationSecond = e;
        var r = 6e4;
        exports.durationMinute = r;
        var o = 36e5;
        exports.durationHour = o;
        var t = 864e5;
        exports.durationDay = t;
        var a = 6048e5;
        exports.durationWeek = a;
    }, {}],
    "AYLw": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.seconds = exports.default = void 0;
        var e = r(require("./interval.js")),
            t = require("./duration.js");

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var n = (0, e.default)(function(e) {
                e.setTime(e - e.getMilliseconds())
            }, function(e, r) {
                e.setTime(+e + r * t.durationSecond)
            }, function(e, r) {
                return (r - e) / t.durationSecond
            }, function(e) {
                return e.getUTCSeconds()
            }),
            o = n;
        exports.default = o;
        var u = n.range;
        exports.seconds = u;
    }, {
        "./interval.js": "QFUQ",
        "./duration.js": "Vnta"
    }],
    "etD9": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.minutes = exports.default = void 0;
        var e = n(require("./interval.js")),
            t = require("./duration.js");

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var r = (0, e.default)(function(e) {
                e.setTime(e - e.getMilliseconds() - e.getSeconds() * t.durationSecond)
            }, function(e, n) {
                e.setTime(+e + n * t.durationMinute)
            }, function(e, n) {
                return (n - e) / t.durationMinute
            }, function(e) {
                return e.getMinutes()
            }),
            u = r;
        exports.default = u;
        var i = r.range;
        exports.minutes = i;
    }, {
        "./interval.js": "QFUQ",
        "./duration.js": "Vnta"
    }],
    "py4n": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.hours = exports.default = void 0;
        var e = r(require("./interval.js")),
            t = require("./duration.js");

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var u = (0, e.default)(function(e) {
                e.setTime(e - e.getMilliseconds() - e.getSeconds() * t.durationSecond - e.getMinutes() * t.durationMinute)
            }, function(e, r) {
                e.setTime(+e + r * t.durationHour)
            }, function(e, r) {
                return (r - e) / t.durationHour
            }, function(e) {
                return e.getHours()
            }),
            o = u;
        exports.default = o;
        var n = u.range;
        exports.hours = n;
    }, {
        "./interval.js": "QFUQ",
        "./duration.js": "Vnta"
    }],
    "LWrz": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.days = exports.default = void 0;
        var e = r(require("./interval.js")),
            t = require("./duration.js");

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var u = (0, e.default)(function(e) {
                e.setHours(0, 0, 0, 0)
            }, function(e, t) {
                e.setDate(e.getDate() + t)
            }, function(e, r) {
                return (r - e - (r.getTimezoneOffset() - e.getTimezoneOffset()) * t.durationMinute) / t.durationDay
            }, function(e) {
                return e.getDate() - 1
            }),
            n = u;
        exports.default = n;
        var o = u.range;
        exports.days = o;
    }, {
        "./interval.js": "QFUQ",
        "./duration.js": "Vnta"
    }],
    "Dweu": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.saturdays = exports.fridays = exports.thursdays = exports.wednesdays = exports.tuesdays = exports.mondays = exports.sundays = exports.saturday = exports.friday = exports.thursday = exports.wednesday = exports.tuesday = exports.monday = exports.sunday = void 0;
        var e = s(require("./interval.js")),
            r = require("./duration.js");

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function t(s) {
            return (0, e.default)(function(e) {
                e.setDate(e.getDate() - (e.getDay() + 7 - s) % 7), e.setHours(0, 0, 0, 0)
            }, function(e, r) {
                e.setDate(e.getDate() + 7 * r)
            }, function(e, s) {
                return (s - e - (s.getTimezoneOffset() - e.getTimezoneOffset()) * r.durationMinute) / r.durationWeek
            })
        }
        var a = t(0);
        exports.sunday = a;
        var o = t(1);
        exports.monday = o;
        var d = t(2);
        exports.tuesday = d;
        var n = t(3);
        exports.wednesday = n;
        var u = t(4);
        exports.thursday = u;
        var p = t(5);
        exports.friday = p;
        var y = t(6);
        exports.saturday = y;
        var x = a.range;
        exports.sundays = x;
        var i = o.range;
        exports.mondays = i;
        var v = d.range;
        exports.tuesdays = v;
        var f = n.range;
        exports.wednesdays = f;
        var g = u.range;
        exports.thursdays = g;
        var c = p.range;
        exports.fridays = c;
        var l = y.range;
        exports.saturdays = l;
    }, {
        "./interval.js": "QFUQ",
        "./duration.js": "Vnta"
    }],
    "gOAO": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.months = exports.default = void 0;
        var t = e(require("./interval.js"));

        function e(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var r = (0, t.default)(function(t) {
                t.setDate(1), t.setHours(0, 0, 0, 0)
            }, function(t, e) {
                t.setMonth(t.getMonth() + e)
            }, function(t, e) {
                return e.getMonth() - t.getMonth() + 12 * (e.getFullYear() - t.getFullYear())
            }, function(t) {
                return t.getMonth()
            }),
            n = r;
        exports.default = n;
        var o = r.range;
        exports.months = o;
    }, {
        "./interval.js": "QFUQ"
    }],
    "kReM": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.years = exports.default = void 0;
        var e = t(require("./interval.js"));

        function t(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var r = (0, e.default)(function(e) {
            e.setMonth(0, 1), e.setHours(0, 0, 0, 0)
        }, function(e, t) {
            e.setFullYear(e.getFullYear() + t)
        }, function(e, t) {
            return t.getFullYear() - e.getFullYear()
        }, function(e) {
            return e.getFullYear()
        });
        r.every = function(t) {
            return isFinite(t = Math.floor(t)) && t > 0 ? (0, e.default)(function(e) {
                e.setFullYear(Math.floor(e.getFullYear() / t) * t), e.setMonth(0, 1), e.setHours(0, 0, 0, 0)
            }, function(e, r) {
                e.setFullYear(e.getFullYear() + r * t)
            }) : null
        };
        var u = r;
        exports.default = u;
        var l = r.range;
        exports.years = l;
    }, {
        "./interval.js": "QFUQ"
    }],
    "O6lW": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.utcMinutes = exports.default = void 0;
        var e = u(require("./interval.js")),
            t = require("./duration.js");

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var r = (0, e.default)(function(e) {
                e.setUTCSeconds(0, 0)
            }, function(e, u) {
                e.setTime(+e + u * t.durationMinute)
            }, function(e, u) {
                return (u - e) / t.durationMinute
            }, function(e) {
                return e.getUTCMinutes()
            }),
            n = r;
        exports.default = n;
        var i = r.range;
        exports.utcMinutes = i;
    }, {
        "./interval.js": "QFUQ",
        "./duration.js": "Vnta"
    }],
    "qnVA": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.utcHours = exports.default = void 0;
        var e = t(require("./interval.js")),
            r = require("./duration.js");

        function t(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var u = (0, e.default)(function(e) {
                e.setUTCMinutes(0, 0, 0)
            }, function(e, t) {
                e.setTime(+e + t * r.durationHour)
            }, function(e, t) {
                return (t - e) / r.durationHour
            }, function(e) {
                return e.getUTCHours()
            }),
            o = u;
        exports.default = o;
        var n = u.range;
        exports.utcHours = n;
    }, {
        "./interval.js": "QFUQ",
        "./duration.js": "Vnta"
    }],
    "HXiV": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.utcDays = exports.default = void 0;
        var e = r(require("./interval.js")),
            t = require("./duration.js");

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var u = (0, e.default)(function(e) {
                e.setUTCHours(0, 0, 0, 0)
            }, function(e, t) {
                e.setUTCDate(e.getUTCDate() + t)
            }, function(e, r) {
                return (r - e) / t.durationDay
            }, function(e) {
                return e.getUTCDate() - 1
            }),
            a = u;
        exports.default = a;
        var n = u.range;
        exports.utcDays = n;
    }, {
        "./interval.js": "QFUQ",
        "./duration.js": "Vnta"
    }],
    "CRXo": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.utcSaturdays = exports.utcFridays = exports.utcThursdays = exports.utcWednesdays = exports.utcTuesdays = exports.utcMondays = exports.utcSundays = exports.utcSaturday = exports.utcFriday = exports.utcThursday = exports.utcWednesday = exports.utcTuesday = exports.utcMonday = exports.utcSunday = void 0;
        var t = r(require("./interval.js")),
            e = require("./duration.js");

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function a(r) {
            return (0, t.default)(function(t) {
                t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - r) % 7), t.setUTCHours(0, 0, 0, 0)
            }, function(t, e) {
                t.setUTCDate(t.getUTCDate() + 7 * e)
            }, function(t, r) {
                return (r - t) / e.durationWeek
            })
        }
        var s = a(0);
        exports.utcSunday = s;
        var u = a(1);
        exports.utcMonday = u;
        var o = a(2);
        exports.utcTuesday = o;
        var d = a(3);
        exports.utcWednesday = d;
        var n = a(4);
        exports.utcThursday = n;
        var c = a(5);
        exports.utcFriday = c;
        var p = a(6);
        exports.utcSaturday = p;
        var y = s.range;
        exports.utcSundays = y;
        var x = u.range;
        exports.utcMondays = x;
        var v = o.range;
        exports.utcTuesdays = v;
        var i = d.range;
        exports.utcWednesdays = i;
        var T = n.range;
        exports.utcThursdays = T;
        var g = c.range;
        exports.utcFridays = g;
        var f = p.range;
        exports.utcSaturdays = f;
    }, {
        "./interval.js": "QFUQ",
        "./duration.js": "Vnta"
    }],
    "EphR": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.utcMonths = exports.default = void 0;
        var t = e(require("./interval.js"));

        function e(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var r = (0, t.default)(function(t) {
                t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0)
            }, function(t, e) {
                t.setUTCMonth(t.getUTCMonth() + e)
            }, function(t, e) {
                return e.getUTCMonth() - t.getUTCMonth() + 12 * (e.getUTCFullYear() - t.getUTCFullYear())
            }, function(t) {
                return t.getUTCMonth()
            }),
            n = r;
        exports.default = n;
        var o = r.range;
        exports.utcMonths = o;
    }, {
        "./interval.js": "QFUQ"
    }],
    "Abfv": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.utcYears = exports.default = void 0;
        var e = t(require("./interval.js"));

        function t(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var r = (0, e.default)(function(e) {
            e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0)
        }, function(e, t) {
            e.setUTCFullYear(e.getUTCFullYear() + t)
        }, function(e, t) {
            return t.getUTCFullYear() - e.getUTCFullYear()
        }, function(e) {
            return e.getUTCFullYear()
        });
        r.every = function(t) {
            return isFinite(t = Math.floor(t)) && t > 0 ? (0, e.default)(function(e) {
                e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0)
            }, function(e, r) {
                e.setUTCFullYear(e.getUTCFullYear() + r * t)
            }) : null
        };
        var u = r;
        exports.default = u;
        var l = r.range;
        exports.utcYears = l;
    }, {
        "./interval.js": "QFUQ"
    }],
    "hQYG": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), Object.defineProperty(exports, "timeInterval", {
            enumerable: !0,
            get: function() {
                return e.default
            }
        }), Object.defineProperty(exports, "timeMillisecond", {
            enumerable: !0,
            get: function() {
                return t.default
            }
        }), Object.defineProperty(exports, "timeMilliseconds", {
            enumerable: !0,
            get: function() {
                return t.milliseconds
            }
        }), Object.defineProperty(exports, "utcMillisecond", {
            enumerable: !0,
            get: function() {
                return t.default
            }
        }), Object.defineProperty(exports, "utcMilliseconds", {
            enumerable: !0,
            get: function() {
                return t.milliseconds
            }
        }), Object.defineProperty(exports, "timeSecond", {
            enumerable: !0,
            get: function() {
                return r.default
            }
        }), Object.defineProperty(exports, "timeSeconds", {
            enumerable: !0,
            get: function() {
                return r.seconds
            }
        }), Object.defineProperty(exports, "utcSecond", {
            enumerable: !0,
            get: function() {
                return r.default
            }
        }), Object.defineProperty(exports, "utcSeconds", {
            enumerable: !0,
            get: function() {
                return r.seconds
            }
        }), Object.defineProperty(exports, "timeMinute", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }), Object.defineProperty(exports, "timeMinutes", {
            enumerable: !0,
            get: function() {
                return n.minutes
            }
        }), Object.defineProperty(exports, "timeHour", {
            enumerable: !0,
            get: function() {
                return u.default
            }
        }), Object.defineProperty(exports, "timeHours", {
            enumerable: !0,
            get: function() {
                return u.hours
            }
        }), Object.defineProperty(exports, "timeDay", {
            enumerable: !0,
            get: function() {
                return o.default
            }
        }), Object.defineProperty(exports, "timeDays", {
            enumerable: !0,
            get: function() {
                return o.days
            }
        }), Object.defineProperty(exports, "timeWeek", {
            enumerable: !0,
            get: function() {
                return i.sunday
            }
        }), Object.defineProperty(exports, "timeWeeks", {
            enumerable: !0,
            get: function() {
                return i.sundays
            }
        }), Object.defineProperty(exports, "timeSunday", {
            enumerable: !0,
            get: function() {
                return i.sunday
            }
        }), Object.defineProperty(exports, "timeSundays", {
            enumerable: !0,
            get: function() {
                return i.sundays
            }
        }), Object.defineProperty(exports, "timeMonday", {
            enumerable: !0,
            get: function() {
                return i.monday
            }
        }), Object.defineProperty(exports, "timeMondays", {
            enumerable: !0,
            get: function() {
                return i.mondays
            }
        }), Object.defineProperty(exports, "timeTuesday", {
            enumerable: !0,
            get: function() {
                return i.tuesday
            }
        }), Object.defineProperty(exports, "timeTuesdays", {
            enumerable: !0,
            get: function() {
                return i.tuesdays
            }
        }), Object.defineProperty(exports, "timeWednesday", {
            enumerable: !0,
            get: function() {
                return i.wednesday
            }
        }), Object.defineProperty(exports, "timeWednesdays", {
            enumerable: !0,
            get: function() {
                return i.wednesdays
            }
        }), Object.defineProperty(exports, "timeThursday", {
            enumerable: !0,
            get: function() {
                return i.thursday
            }
        }), Object.defineProperty(exports, "timeThursdays", {
            enumerable: !0,
            get: function() {
                return i.thursdays
            }
        }), Object.defineProperty(exports, "timeFriday", {
            enumerable: !0,
            get: function() {
                return i.friday
            }
        }), Object.defineProperty(exports, "timeFridays", {
            enumerable: !0,
            get: function() {
                return i.fridays
            }
        }), Object.defineProperty(exports, "timeSaturday", {
            enumerable: !0,
            get: function() {
                return i.saturday
            }
        }), Object.defineProperty(exports, "timeSaturdays", {
            enumerable: !0,
            get: function() {
                return i.saturdays
            }
        }), Object.defineProperty(exports, "timeMonth", {
            enumerable: !0,
            get: function() {
                return c.default
            }
        }), Object.defineProperty(exports, "timeMonths", {
            enumerable: !0,
            get: function() {
                return c.months
            }
        }), Object.defineProperty(exports, "timeYear", {
            enumerable: !0,
            get: function() {
                return s.default
            }
        }), Object.defineProperty(exports, "timeYears", {
            enumerable: !0,
            get: function() {
                return s.years
            }
        }), Object.defineProperty(exports, "utcMinute", {
            enumerable: !0,
            get: function() {
                return a.default
            }
        }), Object.defineProperty(exports, "utcMinutes", {
            enumerable: !0,
            get: function() {
                return a.utcMinutes
            }
        }), Object.defineProperty(exports, "utcHour", {
            enumerable: !0,
            get: function() {
                return d.default
            }
        }), Object.defineProperty(exports, "utcHours", {
            enumerable: !0,
            get: function() {
                return d.utcHours
            }
        }), Object.defineProperty(exports, "utcDay", {
            enumerable: !0,
            get: function() {
                return f.default
            }
        }), Object.defineProperty(exports, "utcDays", {
            enumerable: !0,
            get: function() {
                return f.utcDays
            }
        }), Object.defineProperty(exports, "utcWeek", {
            enumerable: !0,
            get: function() {
                return y.utcSunday
            }
        }), Object.defineProperty(exports, "utcWeeks", {
            enumerable: !0,
            get: function() {
                return y.utcSundays
            }
        }), Object.defineProperty(exports, "utcSunday", {
            enumerable: !0,
            get: function() {
                return y.utcSunday
            }
        }), Object.defineProperty(exports, "utcSundays", {
            enumerable: !0,
            get: function() {
                return y.utcSundays
            }
        }), Object.defineProperty(exports, "utcMonday", {
            enumerable: !0,
            get: function() {
                return y.utcMonday
            }
        }), Object.defineProperty(exports, "utcMondays", {
            enumerable: !0,
            get: function() {
                return y.utcMondays
            }
        }), Object.defineProperty(exports, "utcTuesday", {
            enumerable: !0,
            get: function() {
                return y.utcTuesday
            }
        }), Object.defineProperty(exports, "utcTuesdays", {
            enumerable: !0,
            get: function() {
                return y.utcTuesdays
            }
        }), Object.defineProperty(exports, "utcWednesday", {
            enumerable: !0,
            get: function() {
                return y.utcWednesday
            }
        }), Object.defineProperty(exports, "utcWednesdays", {
            enumerable: !0,
            get: function() {
                return y.utcWednesdays
            }
        }), Object.defineProperty(exports, "utcThursday", {
            enumerable: !0,
            get: function() {
                return y.utcThursday
            }
        }), Object.defineProperty(exports, "utcThursdays", {
            enumerable: !0,
            get: function() {
                return y.utcThursdays
            }
        }), Object.defineProperty(exports, "utcFriday", {
            enumerable: !0,
            get: function() {
                return y.utcFriday
            }
        }), Object.defineProperty(exports, "utcFridays", {
            enumerable: !0,
            get: function() {
                return y.utcFridays
            }
        }), Object.defineProperty(exports, "utcSaturday", {
            enumerable: !0,
            get: function() {
                return y.utcSaturday
            }
        }), Object.defineProperty(exports, "utcSaturdays", {
            enumerable: !0,
            get: function() {
                return y.utcSaturdays
            }
        }), Object.defineProperty(exports, "utcMonth", {
            enumerable: !0,
            get: function() {
                return p.default
            }
        }), Object.defineProperty(exports, "utcMonths", {
            enumerable: !0,
            get: function() {
                return p.utcMonths
            }
        }), Object.defineProperty(exports, "utcYear", {
            enumerable: !0,
            get: function() {
                return b.default
            }
        }), Object.defineProperty(exports, "utcYears", {
            enumerable: !0,
            get: function() {
                return b.utcYears
            }
        });
        var e = j(require("./interval.js")),
            t = m(require("./millisecond.js")),
            r = m(require("./second.js")),
            n = m(require("./minute.js")),
            u = m(require("./hour.js")),
            o = m(require("./day.js")),
            i = require("./week.js"),
            c = m(require("./month.js")),
            s = m(require("./year.js")),
            a = m(require("./utcMinute.js")),
            d = m(require("./utcHour.js")),
            f = m(require("./utcDay.js")),
            y = require("./utcWeek.js"),
            p = m(require("./utcMonth.js")),
            b = m(require("./utcYear.js"));

        function l() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return l = function() {
                return e
            }, e
        }

        function m(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var t = l();
            if (t && t.has(e)) return t.get(e);
            var r = {},
                n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var u in e)
                if (Object.prototype.hasOwnProperty.call(e, u)) {
                    var o = n ? Object.getOwnPropertyDescriptor(e, u) : null;
                    o && (o.get || o.set) ? Object.defineProperty(r, u, o) : r[u] = e[u]
                } return r.default = e, t && t.set(e, r), r
        }

        function j(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    }, {
        "./interval.js": "QFUQ",
        "./millisecond.js": "WVmH",
        "./second.js": "AYLw",
        "./minute.js": "etD9",
        "./hour.js": "py4n",
        "./day.js": "LWrz",
        "./week.js": "Dweu",
        "./month.js": "gOAO",
        "./year.js": "kReM",
        "./utcMinute.js": "O6lW",
        "./utcHour.js": "qnVA",
        "./utcDay.js": "HXiV",
        "./utcWeek.js": "CRXo",
        "./utcMonth.js": "EphR",
        "./utcYear.js": "Abfv"
    }],
    "UbHU": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = u;
        var n = require("d3-time");

        function t(n) {
            if (0 <= n.y && n.y < 100) {
                var t = new Date(-1, n.m, n.d, n.H, n.M, n.S, n.L);
                return t.setFullYear(n.y), t
            }
            return new Date(n.y, n.m, n.d, n.H, n.M, n.S, n.L)
        }

        function e(n) {
            if (0 <= n.y && n.y < 100) {
                var t = new Date(Date.UTC(-1, n.m, n.d, n.H, n.M, n.S, n.L));
                return t.setUTCFullYear(n.y), t
            }
            return new Date(Date.UTC(n.y, n.m, n.d, n.H, n.M, n.S, n.L))
        }

        function r(n, t, e) {
            return {
                y: n,
                m: t,
                d: e,
                H: 0,
                M: 0,
                S: 0,
                L: 0
            }
        }

        function u(u) {
            var i = u.dateTime,
                o = u.date,
                a = u.time,
                f = u.periods,
                l = u.days,
                mn = u.shortDays,
                Cn = u.months,
                Dn = u.shortMonths,
                Tn = g(f),
                Mn = s(f),
                xn = g(l),
                Un = s(l),
                wn = g(mn),
                Yn = s(mn),
                Hn = g(Cn),
                Ln = s(Cn),
                pn = g(Dn),
                Sn = s(Dn),
                Zn = {
                    a: function(n) {
                        return mn[n.getDay()]
                    },
                    A: function(n) {
                        return l[n.getDay()]
                    },
                    b: function(n) {
                        return Dn[n.getMonth()]
                    },
                    B: function(n) {
                        return Cn[n.getMonth()]
                    },
                    c: null,
                    d: V,
                    e: V,
                    f: X,
                    H: W,
                    I: j,
                    j: q,
                    L: Q,
                    m: b,
                    M: B,
                    p: function(n) {
                        return f[+(n.getHours() >= 12)]
                    },
                    q: function(n) {
                        return 1 + ~~(n.getMonth() / 3)
                    },
                    Q: dn,
                    s: vn,
                    S: I,
                    u: _,
                    U: O,
                    V: P,
                    w: $,
                    W: z,
                    x: null,
                    X: null,
                    y: E,
                    Y: R,
                    Z: k,
                    "%": yn
                },
                An = {
                    a: function(n) {
                        return mn[n.getUTCDay()]
                    },
                    A: function(n) {
                        return l[n.getUTCDay()]
                    },
                    b: function(n) {
                        return Dn[n.getUTCMonth()]
                    },
                    B: function(n) {
                        return Cn[n.getUTCMonth()]
                    },
                    c: null,
                    d: G,
                    e: G,
                    f: tn,
                    H: J,
                    I: K,
                    j: N,
                    L: nn,
                    m: en,
                    M: rn,
                    p: function(n) {
                        return f[+(n.getUTCHours() >= 12)]
                    },
                    q: function(n) {
                        return 1 + ~~(n.getUTCMonth() / 3)
                    },
                    Q: dn,
                    s: vn,
                    S: un,
                    u: cn,
                    U: on,
                    V: an,
                    w: fn,
                    W: ln,
                    x: null,
                    X: null,
                    y: gn,
                    Y: sn,
                    Z: hn,
                    "%": yn
                },
                Fn = {
                    a: function(n, t, e) {
                        var r = wn.exec(t.slice(e));
                        return r ? (n.w = Yn[r[0].toLowerCase()], e + r[0].length) : -1
                    },
                    A: function(n, t, e) {
                        var r = xn.exec(t.slice(e));
                        return r ? (n.w = Un[r[0].toLowerCase()], e + r[0].length) : -1
                    },
                    b: function(n, t, e) {
                        var r = pn.exec(t.slice(e));
                        return r ? (n.m = Sn[r[0].toLowerCase()], e + r[0].length) : -1
                    },
                    B: function(n, t, e) {
                        var r = Hn.exec(t.slice(e));
                        return r ? (n.m = Ln[r[0].toLowerCase()], e + r[0].length) : -1
                    },
                    c: function(n, t, e) {
                        return jn(n, i, t, e)
                    },
                    d: U,
                    e: U,
                    f: S,
                    H: Y,
                    I: Y,
                    j: w,
                    L: p,
                    m: x,
                    M: H,
                    p: function(n, t, e) {
                        var r = Tn.exec(t.slice(e));
                        return r ? (n.p = Mn[r[0].toLowerCase()], e + r[0].length) : -1
                    },
                    q: M,
                    Q: A,
                    s: F,
                    S: L,
                    u: y,
                    U: d,
                    V: v,
                    w: h,
                    W: m,
                    x: function(n, t, e) {
                        return jn(n, o, t, e)
                    },
                    X: function(n, t, e) {
                        return jn(n, a, t, e)
                    },
                    y: D,
                    Y: C,
                    Z: T,
                    "%": Z
                };

            function Vn(n, t) {
                return function(e) {
                    var r, u, i, o = [],
                        a = -1,
                        f = 0,
                        l = n.length;
                    for (e instanceof Date || (e = new Date(+e)); ++a < l;) 37 === n.charCodeAt(a) && (o.push(n.slice(f, a)), null != (u = c[r = n.charAt(++a)]) ? r = n.charAt(++a) : u = "e" === r ? " " : "0", (i = t[r]) && (r = i(e, u)), o.push(r), f = a + 1);
                    return o.push(n.slice(f, a)), o.join("")
                }
            }

            function Wn(u, c) {
                return function(i) {
                    var o, a, f = r(1900, void 0, 1);
                    if (jn(f, u, i += "", 0) != i.length) return null;
                    if ("Q" in f) return new Date(f.Q);
                    if ("s" in f) return new Date(1e3 * f.s + ("L" in f ? f.L : 0));
                    if (!c || "Z" in f || (f.Z = 0), "p" in f && (f.H = f.H % 12 + 12 * f.p), void 0 === f.m && (f.m = "q" in f ? f.q : 0), "V" in f) {
                        if (f.V < 1 || f.V > 53) return null;
                        "w" in f || (f.w = 1), "Z" in f ? (a = (o = e(r(f.y, 0, 1))).getUTCDay(), o = a > 4 || 0 === a ? n.utcMonday.ceil(o) : (0, n.utcMonday)(o), o = n.utcDay.offset(o, 7 * (f.V - 1)), f.y = o.getUTCFullYear(), f.m = o.getUTCMonth(), f.d = o.getUTCDate() + (f.w + 6) % 7) : (a = (o = t(r(f.y, 0, 1))).getDay(), o = a > 4 || 0 === a ? n.timeMonday.ceil(o) : (0, n.timeMonday)(o), o = n.timeDay.offset(o, 7 * (f.V - 1)), f.y = o.getFullYear(), f.m = o.getMonth(), f.d = o.getDate() + (f.w + 6) % 7)
                    } else("W" in f || "U" in f) && ("w" in f || (f.w = "u" in f ? f.u % 7 : "W" in f ? 1 : 0), a = "Z" in f ? e(r(f.y, 0, 1)).getUTCDay() : t(r(f.y, 0, 1)).getDay(), f.m = 0, f.d = "W" in f ? (f.w + 6) % 7 + 7 * f.W - (a + 5) % 7 : f.w + 7 * f.U - (a + 6) % 7);
                    return "Z" in f ? (f.H += f.Z / 100 | 0, f.M += f.Z % 100, e(f)) : t(f)
                }
            }

            function jn(n, t, e, r) {
                for (var u, i, o = 0, a = t.length, f = e.length; o < a;) {
                    if (r >= f) return -1;
                    if (37 === (u = t.charCodeAt(o++))) {
                        if (u = t.charAt(o++), !(i = Fn[u in c ? t.charAt(o++) : u]) || (r = i(n, e, r)) < 0) return -1
                    } else if (u != e.charCodeAt(r++)) return -1
                }
                return r
            }
            return Zn.x = Vn(o, Zn), Zn.X = Vn(a, Zn), Zn.c = Vn(i, Zn), An.x = Vn(o, An), An.X = Vn(a, An), An.c = Vn(i, An), {
                format: function(n) {
                    var t = Vn(n += "", Zn);
                    return t.toString = function() {
                        return n
                    }, t
                },
                parse: function(n) {
                    var t = Wn(n += "", !1);
                    return t.toString = function() {
                        return n
                    }, t
                },
                utcFormat: function(n) {
                    var t = Vn(n += "", An);
                    return t.toString = function() {
                        return n
                    }, t
                },
                utcParse: function(n) {
                    var t = Wn(n += "", !0);
                    return t.toString = function() {
                        return n
                    }, t
                }
            }
        }
        var c = {
                "-": "",
                _: " ",
                0: "0"
            },
            i = /^\s*\d+/,
            o = /^%/,
            a = /[\\^$*+?|[\]().{}]/g;

        function f(n, t, e) {
            var r = n < 0 ? "-" : "",
                u = (r ? -n : n) + "",
                c = u.length;
            return r + (c < e ? new Array(e - c + 1).join(t) + u : u)
        }

        function l(n) {
            return n.replace(a, "\\$&")
        }

        function g(n) {
            return new RegExp("^(?:" + n.map(l).join("|") + ")", "i")
        }

        function s(n) {
            for (var t = {}, e = -1, r = n.length; ++e < r;) t[n[e].toLowerCase()] = e;
            return t
        }

        function h(n, t, e) {
            var r = i.exec(t.slice(e, e + 1));
            return r ? (n.w = +r[0], e + r[0].length) : -1
        }

        function y(n, t, e) {
            var r = i.exec(t.slice(e, e + 1));
            return r ? (n.u = +r[0], e + r[0].length) : -1
        }

        function d(n, t, e) {
            var r = i.exec(t.slice(e, e + 2));
            return r ? (n.U = +r[0], e + r[0].length) : -1
        }

        function v(n, t, e) {
            var r = i.exec(t.slice(e, e + 2));
            return r ? (n.V = +r[0], e + r[0].length) : -1
        }

        function m(n, t, e) {
            var r = i.exec(t.slice(e, e + 2));
            return r ? (n.W = +r[0], e + r[0].length) : -1
        }

        function C(n, t, e) {
            var r = i.exec(t.slice(e, e + 4));
            return r ? (n.y = +r[0], e + r[0].length) : -1
        }

        function D(n, t, e) {
            var r = i.exec(t.slice(e, e + 2));
            return r ? (n.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1
        }

        function T(n, t, e) {
            var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(e, e + 6));
            return r ? (n.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1
        }

        function M(n, t, e) {
            var r = i.exec(t.slice(e, e + 1));
            return r ? (n.q = 3 * r[0] - 3, e + r[0].length) : -1
        }

        function x(n, t, e) {
            var r = i.exec(t.slice(e, e + 2));
            return r ? (n.m = r[0] - 1, e + r[0].length) : -1
        }

        function U(n, t, e) {
            var r = i.exec(t.slice(e, e + 2));
            return r ? (n.d = +r[0], e + r[0].length) : -1
        }

        function w(n, t, e) {
            var r = i.exec(t.slice(e, e + 3));
            return r ? (n.m = 0, n.d = +r[0], e + r[0].length) : -1
        }

        function Y(n, t, e) {
            var r = i.exec(t.slice(e, e + 2));
            return r ? (n.H = +r[0], e + r[0].length) : -1
        }

        function H(n, t, e) {
            var r = i.exec(t.slice(e, e + 2));
            return r ? (n.M = +r[0], e + r[0].length) : -1
        }

        function L(n, t, e) {
            var r = i.exec(t.slice(e, e + 2));
            return r ? (n.S = +r[0], e + r[0].length) : -1
        }

        function p(n, t, e) {
            var r = i.exec(t.slice(e, e + 3));
            return r ? (n.L = +r[0], e + r[0].length) : -1
        }

        function S(n, t, e) {
            var r = i.exec(t.slice(e, e + 6));
            return r ? (n.L = Math.floor(r[0] / 1e3), e + r[0].length) : -1
        }

        function Z(n, t, e) {
            var r = o.exec(t.slice(e, e + 1));
            return r ? e + r[0].length : -1
        }

        function A(n, t, e) {
            var r = i.exec(t.slice(e));
            return r ? (n.Q = +r[0], e + r[0].length) : -1
        }

        function F(n, t, e) {
            var r = i.exec(t.slice(e));
            return r ? (n.s = +r[0], e + r[0].length) : -1
        }

        function V(n, t) {
            return f(n.getDate(), t, 2)
        }

        function W(n, t) {
            return f(n.getHours(), t, 2)
        }

        function j(n, t) {
            return f(n.getHours() % 12 || 12, t, 2)
        }

        function q(t, e) {
            return f(1 + n.timeDay.count((0, n.timeYear)(t), t), e, 3)
        }

        function Q(n, t) {
            return f(n.getMilliseconds(), t, 3)
        }

        function X(n, t) {
            return Q(n, t) + "000"
        }

        function b(n, t) {
            return f(n.getMonth() + 1, t, 2)
        }

        function B(n, t) {
            return f(n.getMinutes(), t, 2)
        }

        function I(n, t) {
            return f(n.getSeconds(), t, 2)
        }

        function _(n) {
            var t = n.getDay();
            return 0 === t ? 7 : t
        }

        function O(t, e) {
            return f(n.timeSunday.count((0, n.timeYear)(t) - 1, t), e, 2)
        }

        function P(t, e) {
            var r = t.getDay();
            return t = r >= 4 || 0 === r ? (0, n.timeThursday)(t) : n.timeThursday.ceil(t), f(n.timeThursday.count((0, n.timeYear)(t), t) + (4 === (0, n.timeYear)(t).getDay()), e, 2)
        }

        function $(n) {
            return n.getDay()
        }

        function z(t, e) {
            return f(n.timeMonday.count((0, n.timeYear)(t) - 1, t), e, 2)
        }

        function E(n, t) {
            return f(n.getFullYear() % 100, t, 2)
        }

        function R(n, t) {
            return f(n.getFullYear() % 1e4, t, 4)
        }

        function k(n) {
            var t = n.getTimezoneOffset();
            return (t > 0 ? "-" : (t *= -1, "+")) + f(t / 60 | 0, "0", 2) + f(t % 60, "0", 2)
        }

        function G(n, t) {
            return f(n.getUTCDate(), t, 2)
        }

        function J(n, t) {
            return f(n.getUTCHours(), t, 2)
        }

        function K(n, t) {
            return f(n.getUTCHours() % 12 || 12, t, 2)
        }

        function N(t, e) {
            return f(1 + n.utcDay.count((0, n.utcYear)(t), t), e, 3)
        }

        function nn(n, t) {
            return f(n.getUTCMilliseconds(), t, 3)
        }

        function tn(n, t) {
            return nn(n, t) + "000"
        }

        function en(n, t) {
            return f(n.getUTCMonth() + 1, t, 2)
        }

        function rn(n, t) {
            return f(n.getUTCMinutes(), t, 2)
        }

        function un(n, t) {
            return f(n.getUTCSeconds(), t, 2)
        }

        function cn(n) {
            var t = n.getUTCDay();
            return 0 === t ? 7 : t
        }

        function on(t, e) {
            return f(n.utcSunday.count((0, n.utcYear)(t) - 1, t), e, 2)
        }

        function an(t, e) {
            var r = t.getUTCDay();
            return t = r >= 4 || 0 === r ? (0, n.utcThursday)(t) : n.utcThursday.ceil(t), f(n.utcThursday.count((0, n.utcYear)(t), t) + (4 === (0, n.utcYear)(t).getUTCDay()), e, 2)
        }

        function fn(n) {
            return n.getUTCDay()
        }

        function ln(t, e) {
            return f(n.utcMonday.count((0, n.utcYear)(t) - 1, t), e, 2)
        }

        function gn(n, t) {
            return f(n.getUTCFullYear() % 100, t, 2)
        }

        function sn(n, t) {
            return f(n.getUTCFullYear() % 1e4, t, 4)
        }

        function hn() {
            return "+0000"
        }

        function yn() {
            return "%"
        }

        function dn(n) {
            return +n
        }

        function vn(n) {
            return Math.floor(+n / 1e3)
        }
    }, {
        "d3-time": "hQYG"
    }],
    "csjH": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = p, exports.utcParse = exports.utcFormat = exports.timeParse = exports.timeFormat = void 0;
        var e, t, r, a, o, s = u(require("./locale.js"));

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function p(u) {
            return e = (0, s.default)(u), exports.timeFormat = t = e.format, exports.timeParse = r = e.parse, exports.utcFormat = a = e.utcFormat, exports.utcParse = o = e.utcParse, e
        }
        exports.timeFormat = t, exports.timeParse = r, exports.utcFormat = a, exports.utcParse = o, p({
            dateTime: "%x, %X",
            date: "%-m/%-d/%Y",
            time: "%-I:%M:%S %p",
            periods: ["AM", "PM"],
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        });
    }, {
        "./locale.js": "UbHU"
    }],
    "PKKZ": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = exports.isoSpecifier = void 0;
        var e = require("./defaultLocale.js"),
            t = "%Y-%m-%dT%H:%M:%S.%LZ";

        function r(e) {
            return e.toISOString()
        }
        exports.isoSpecifier = t;
        var o = Date.prototype.toISOString ? r : (0, e.utcFormat)(t),
            i = o;
        exports.default = i;
    }, {
        "./defaultLocale.js": "csjH"
    }],
    "d4jk": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        var e = require("./isoFormat.js"),
            r = require("./defaultLocale.js");

        function t(e) {
            var r = new Date(e);
            return isNaN(r) ? null : r
        }
        var a = +new Date("2000-01-01T00:00:00.000Z") ? t : (0, r.utcParse)(e.isoSpecifier),
            s = a;
        exports.default = s;
    }, {
        "./isoFormat.js": "PKKZ",
        "./defaultLocale.js": "csjH"
    }],
    "UYpZ": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), Object.defineProperty(exports, "timeFormatDefaultLocale", {
            enumerable: !0,
            get: function() {
                return e.default
            }
        }), Object.defineProperty(exports, "timeFormat", {
            enumerable: !0,
            get: function() {
                return e.timeFormat
            }
        }), Object.defineProperty(exports, "timeParse", {
            enumerable: !0,
            get: function() {
                return e.timeParse
            }
        }), Object.defineProperty(exports, "utcFormat", {
            enumerable: !0,
            get: function() {
                return e.utcFormat
            }
        }), Object.defineProperty(exports, "utcParse", {
            enumerable: !0,
            get: function() {
                return e.utcParse
            }
        }), Object.defineProperty(exports, "timeFormatLocale", {
            enumerable: !0,
            get: function() {
                return t.default
            }
        }), Object.defineProperty(exports, "isoFormat", {
            enumerable: !0,
            get: function() {
                return r.default
            }
        }), Object.defineProperty(exports, "isoParse", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        });
        var e = a(require("./defaultLocale.js")),
            t = o(require("./locale.js")),
            r = o(require("./isoFormat.js")),
            n = o(require("./isoParse.js"));

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function u() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return u = function() {
                return e
            }, e
        }

        function a(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var t = u();
            if (t && t.has(e)) return t.get(e);
            var r = {},
                n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o]
                } return r.default = e, t && t.set(e, r), r
        }
    }, {
        "./defaultLocale.js": "csjH",
        "./locale.js": "UbHU",
        "./isoFormat.js": "PKKZ",
        "./isoParse.js": "d4jk"
    }],
    "kVXt": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.calendar = g, exports.default = M;
        var e = require("d3-array"),
            t = require("d3-time"),
            r = require("d3-time-format"),
            n = c(require("./continuous.js")),
            i = require("./init.js"),
            u = o(require("./nice.js"));

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return a = function() {
                return e
            }, e
        }

        function c(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var t = a();
            if (t && t.has(e)) return t.get(e);
            var r = {},
                n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
                if (Object.prototype.hasOwnProperty.call(e, i)) {
                    var u = n ? Object.getOwnPropertyDescriptor(e, i) : null;
                    u && (u.get || u.set) ? Object.defineProperty(r, i, u) : r[i] = e[i]
                } return r.default = e, t && t.set(e, r), r
        }
        var f = 1e3,
            l = 60 * f,
            p = 60 * l,
            s = 24 * p,
            d = 7 * s,
            m = 30 * s,
            y = 365 * s;

        function v(e) {
            return new Date(e)
        }

        function b(e) {
            return e instanceof Date ? +e : +new Date(+e)
        }

        function g(t, r, i, o, a, c, M, h, j) {
            var w = (0, n.default)(),
                D = w.invert,
                O = w.domain,
                k = j(".%L"),
                q = j(":%S"),
                P = j("%I:%M"),
                _ = j("%I %p"),
                x = j("%a %d"),
                S = j("%b %d"),
                W = j("%B"),
                F = j("%Y"),
                I = [
                    [M, 1, f],
                    [M, 5, 5 * f],
                    [M, 15, 15 * f],
                    [M, 30, 30 * f],
                    [c, 1, l],
                    [c, 5, 5 * l],
                    [c, 15, 15 * l],
                    [c, 30, 30 * l],
                    [a, 1, p],
                    [a, 3, 3 * p],
                    [a, 6, 6 * p],
                    [a, 12, 12 * p],
                    [o, 1, s],
                    [o, 2, 2 * s],
                    [i, 1, d],
                    [r, 1, m],
                    [r, 3, 3 * m],
                    [t, 1, y]
                ];

            function Y(e) {
                return (M(e) < e ? k : c(e) < e ? q : a(e) < e ? P : o(e) < e ? _ : r(e) < e ? i(e) < e ? x : S : t(e) < e ? W : F)(e)
            }

            function A(r, n, i) {
                if (null == r && (r = 10), "number" == typeof r) {
                    var u, o = Math.abs(i - n) / r,
                        a = (0, e.bisector)(function(e) {
                            return e[2]
                        }).right(I, o);
                    return a === I.length ? (u = (0, e.tickStep)(n / y, i / y, r), r = t) : a ? (u = (a = I[o / I[a - 1][2] < I[a][2] / o ? a - 1 : a])[1], r = a[0]) : (u = Math.max((0, e.tickStep)(n, i, r), 1), r = h), r.every(u)
                }
                return r
            }
            return w.invert = function(e) {
                return new Date(D(e))
            }, w.domain = function(e) {
                return arguments.length ? O(Array.from(e, b)) : O().map(v)
            }, w.ticks = function(e) {
                var t, r = O(),
                    n = r[0],
                    i = r[r.length - 1],
                    u = i < n;
                return u && (t = n, n = i, i = t), t = (t = A(e, n, i)) ? t.range(n, i + 1) : [], u ? t.reverse() : t
            }, w.tickFormat = function(e, t) {
                return null == t ? Y : j(t)
            }, w.nice = function(e) {
                var t = O();
                return (e = A(e, t[0], t[t.length - 1])) ? O((0, u.default)(t, e)) : w
            }, w.copy = function() {
                return (0, n.copy)(w, g(t, r, i, o, a, c, M, h, j))
            }, w
        }

        function M() {
            return i.initRange.apply(g(t.timeYear, t.timeMonth, t.timeWeek, t.timeDay, t.timeHour, t.timeMinute, t.timeSecond, t.timeMillisecond, r.timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
        }
    }, {
        "d3-array": "K0bd",
        "d3-time": "hQYG",
        "d3-time-format": "UYpZ",
        "./continuous.js": "CjJ5",
        "./init.js": "buZa",
        "./nice.js": "eMTM"
    }],
    "WrbA": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = i;
        var e = require("./time.js"),
            t = require("d3-time-format"),
            r = require("d3-time"),
            u = require("./init.js");

        function i() {
            return u.initRange.apply((0, e.calendar)(r.utcYear, r.utcMonth, r.utcWeek, r.utcDay, r.utcHour, r.utcMinute, r.utcSecond, r.utcMillisecond, t.utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
        }
    }, {
        "./time.js": "kVXt",
        "d3-time-format": "UYpZ",
        "d3-time": "hQYG",
        "./init.js": "buZa"
    }],
    "J7VY": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.copy = p, exports.default = l, exports.sequentialLog = c, exports.sequentialSymlog = s, exports.sequentialPow = f, exports.sequentialSqrt = y;
        var n = require("d3-interpolate"),
            t = require("./continuous.js"),
            r = require("./init.js"),
            e = require("./linear.js"),
            o = require("./log.js"),
            i = require("./symlog.js"),
            u = require("./pow.js");

        function a() {
            var r, e, o, i, u, a = 0,
                p = 1,
                l = t.identity,
                c = !1;

            function s(n) {
                return isNaN(n = +n) ? u : l(0 === o ? .5 : (n = (i(n) - r) * o, c ? Math.max(0, Math.min(1, n)) : n))
            }

            function f(n) {
                return function(t) {
                    var r, e;
                    return arguments.length ? ([r, e] = t, l = n(r, e), s) : [l(0), l(1)]
                }
            }
            return s.domain = function(n) {
                    return arguments.length ? ([a, p] = n, r = i(a = +a), e = i(p = +p), o = r === e ? 0 : 1 / (e - r), s) : [a, p]
                }, s.clamp = function(n) {
                    return arguments.length ? (c = !!n, s) : c
                }, s.interpolator = function(n) {
                    return arguments.length ? (l = n, s) : l
                }, s.range = f(n.interpolate), s.rangeRound = f(n.interpolateRound), s.unknown = function(n) {
                    return arguments.length ? (u = n, s) : u
                },
                function(n) {
                    return i = n, r = n(a), e = n(p), o = r === e ? 0 : 1 / (e - r), s
                }
        }

        function p(n, t) {
            return t.domain(n.domain()).interpolator(n.interpolator()).clamp(n.clamp()).unknown(n.unknown())
        }

        function l() {
            var n = (0, e.linearish)(a()(t.identity));
            return n.copy = function() {
                return p(n, l())
            }, r.initInterpolator.apply(n, arguments)
        }

        function c() {
            var n = (0, o.loggish)(a()).domain([1, 10]);
            return n.copy = function() {
                return p(n, c()).base(n.base())
            }, r.initInterpolator.apply(n, arguments)
        }

        function s() {
            var n = (0, i.symlogish)(a());
            return n.copy = function() {
                return p(n, s()).constant(n.constant())
            }, r.initInterpolator.apply(n, arguments)
        }

        function f() {
            var n = (0, u.powish)(a());
            return n.copy = function() {
                return p(n, f()).exponent(n.exponent())
            }, r.initInterpolator.apply(n, arguments)
        }

        function y() {
            return f.apply(null, arguments).exponent(.5)
        }
    }, {
        "d3-interpolate": "k9aH",
        "./continuous.js": "CjJ5",
        "./init.js": "buZa",
        "./linear.js": "LIJk",
        "./log.js": "ea59",
        "./symlog.js": "nanU",
        "./pow.js": "xeRN"
    }],
    "XYTZ": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
        var n = require("d3-array"),
            r = require("./continuous.js"),
            t = require("./init.js");

        function e() {
            var i = [],
                u = r.identity;

            function o(r) {
                if (!isNaN(r = +r)) return u(((0, n.bisect)(i, r, 1) - 1) / (i.length - 1))
            }
            return o.domain = function(r) {
                if (!arguments.length) return i.slice();
                i = [];
                for (let n of r) null == n || isNaN(n = +n) || i.push(n);
                return i.sort(n.ascending), o
            }, o.interpolator = function(n) {
                return arguments.length ? (u = n, o) : u
            }, o.range = function() {
                return i.map((n, r) => u(r / (i.length - 1)))
            }, o.quantiles = function(r) {
                return Array.from({
                    length: r + 1
                }, (t, e) => (0, n.quantile)(i, e / r))
            }, o.copy = function() {
                return e(u).domain(i)
            }, t.initInterpolator.apply(o, arguments)
        }
    }, {
        "d3-array": "K0bd",
        "./continuous.js": "CjJ5",
        "./init.js": "buZa"
    }],
    "CLse": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = c, exports.divergingLog = l, exports.divergingSymlog = s, exports.divergingPow = g, exports.divergingSqrt = f;
        var n = require("d3-interpolate"),
            r = require("./continuous.js"),
            t = require("./init.js"),
            e = require("./linear.js"),
            i = require("./log.js"),
            o = require("./sequential.js"),
            u = require("./symlog.js"),
            p = require("./pow.js");

        function a() {
            var t, e, i, o, u, p, a, c = 0,
                l = .5,
                s = 1,
                g = 1,
                f = r.identity,
                y = !1;

            function d(n) {
                return isNaN(n = +n) ? a : (n = .5 + ((n = +p(n)) - e) * (g * n < g * e ? o : u), f(y ? Math.max(0, Math.min(1, n)) : n))
            }

            function v(r) {
                return function(t) {
                    var e, i, o;
                    return arguments.length ? ([e, i, o] = t, f = (0, n.piecewise)(r, [e, i, o]), d) : [f(0), f(.5), f(1)]
                }
            }
            return d.domain = function(n) {
                    return arguments.length ? ([c, l, s] = n, t = p(c = +c), e = p(l = +l), i = p(s = +s), o = t === e ? 0 : .5 / (e - t), u = e === i ? 0 : .5 / (i - e), g = e < t ? -1 : 1, d) : [c, l, s]
                }, d.clamp = function(n) {
                    return arguments.length ? (y = !!n, d) : y
                }, d.interpolator = function(n) {
                    return arguments.length ? (f = n, d) : f
                }, d.range = v(n.interpolate), d.rangeRound = v(n.interpolateRound), d.unknown = function(n) {
                    return arguments.length ? (a = n, d) : a
                },
                function(n) {
                    return p = n, t = n(c), e = n(l), i = n(s), o = t === e ? 0 : .5 / (e - t), u = e === i ? 0 : .5 / (i - e), g = e < t ? -1 : 1, d
                }
        }

        function c() {
            var n = (0, e.linearish)(a()(r.identity));
            return n.copy = function() {
                return (0, o.copy)(n, c())
            }, t.initInterpolator.apply(n, arguments)
        }

        function l() {
            var n = (0, i.loggish)(a()).domain([.1, 1, 10]);
            return n.copy = function() {
                return (0, o.copy)(n, l()).base(n.base())
            }, t.initInterpolator.apply(n, arguments)
        }

        function s() {
            var n = (0, u.symlogish)(a());
            return n.copy = function() {
                return (0, o.copy)(n, s()).constant(n.constant())
            }, t.initInterpolator.apply(n, arguments)
        }

        function g() {
            var n = (0, p.powish)(a());
            return n.copy = function() {
                return (0, o.copy)(n, g()).exponent(n.exponent())
            }, t.initInterpolator.apply(n, arguments)
        }

        function f() {
            return g.apply(null, arguments).exponent(.5)
        }
    }, {
        "d3-interpolate": "k9aH",
        "./continuous.js": "CjJ5",
        "./init.js": "buZa",
        "./linear.js": "LIJk",
        "./log.js": "ea59",
        "./sequential.js": "J7VY",
        "./symlog.js": "nanU",
        "./pow.js": "xeRN"
    }],
    "zL2z": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), Object.defineProperty(exports, "scaleBand", {
            enumerable: !0,
            get: function() {
                return e.default
            }
        }), Object.defineProperty(exports, "scalePoint", {
            enumerable: !0,
            get: function() {
                return e.point
            }
        }), Object.defineProperty(exports, "scaleIdentity", {
            enumerable: !0,
            get: function() {
                return t.default
            }
        }), Object.defineProperty(exports, "scaleLinear", {
            enumerable: !0,
            get: function() {
                return r.default
            }
        }), Object.defineProperty(exports, "scaleLog", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }), Object.defineProperty(exports, "scaleSymlog", {
            enumerable: !0,
            get: function() {
                return u.default
            }
        }), Object.defineProperty(exports, "scaleOrdinal", {
            enumerable: !0,
            get: function() {
                return i.default
            }
        }), Object.defineProperty(exports, "scaleImplicit", {
            enumerable: !0,
            get: function() {
                return i.implicit
            }
        }), Object.defineProperty(exports, "scalePow", {
            enumerable: !0,
            get: function() {
                return o.default
            }
        }), Object.defineProperty(exports, "scaleSqrt", {
            enumerable: !0,
            get: function() {
                return o.sqrt
            }
        }), Object.defineProperty(exports, "scaleRadial", {
            enumerable: !0,
            get: function() {
                return a.default
            }
        }), Object.defineProperty(exports, "scaleQuantile", {
            enumerable: !0,
            get: function() {
                return l.default
            }
        }), Object.defineProperty(exports, "scaleQuantize", {
            enumerable: !0,
            get: function() {
                return c.default
            }
        }), Object.defineProperty(exports, "scaleThreshold", {
            enumerable: !0,
            get: function() {
                return f.default
            }
        }), Object.defineProperty(exports, "scaleTime", {
            enumerable: !0,
            get: function() {
                return s.default
            }
        }), Object.defineProperty(exports, "scaleUtc", {
            enumerable: !0,
            get: function() {
                return p.default
            }
        }), Object.defineProperty(exports, "scaleSequential", {
            enumerable: !0,
            get: function() {
                return d.default
            }
        }), Object.defineProperty(exports, "scaleSequentialLog", {
            enumerable: !0,
            get: function() {
                return d.sequentialLog
            }
        }), Object.defineProperty(exports, "scaleSequentialPow", {
            enumerable: !0,
            get: function() {
                return d.sequentialPow
            }
        }), Object.defineProperty(exports, "scaleSequentialSqrt", {
            enumerable: !0,
            get: function() {
                return d.sequentialSqrt
            }
        }), Object.defineProperty(exports, "scaleSequentialSymlog", {
            enumerable: !0,
            get: function() {
                return d.sequentialSymlog
            }
        }), Object.defineProperty(exports, "scaleSequentialQuantile", {
            enumerable: !0,
            get: function() {
                return b.default
            }
        }), Object.defineProperty(exports, "scaleDiverging", {
            enumerable: !0,
            get: function() {
                return g.default
            }
        }), Object.defineProperty(exports, "scaleDivergingLog", {
            enumerable: !0,
            get: function() {
                return g.divergingLog
            }
        }), Object.defineProperty(exports, "scaleDivergingPow", {
            enumerable: !0,
            get: function() {
                return g.divergingPow
            }
        }), Object.defineProperty(exports, "scaleDivergingSqrt", {
            enumerable: !0,
            get: function() {
                return g.divergingSqrt
            }
        }), Object.defineProperty(exports, "scaleDivergingSymlog", {
            enumerable: !0,
            get: function() {
                return g.divergingSymlog
            }
        }), Object.defineProperty(exports, "tickFormat", {
            enumerable: !0,
            get: function() {
                return j.default
            }
        });
        var e = P(require("./band.js")),
            t = y(require("./identity.js")),
            r = y(require("./linear.js")),
            n = y(require("./log.js")),
            u = y(require("./symlog.js")),
            i = P(require("./ordinal.js")),
            o = P(require("./pow.js")),
            a = y(require("./radial.js")),
            l = y(require("./quantile.js")),
            c = y(require("./quantize.js")),
            f = y(require("./threshold.js")),
            s = y(require("./time.js")),
            p = y(require("./utcTime.js")),
            d = P(require("./sequential.js")),
            b = y(require("./sequentialQuantile.js")),
            g = P(require("./diverging.js")),
            j = y(require("./tickFormat.js"));

        function y(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function m() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return m = function() {
                return e
            }, e
        }

        function P(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var t = m();
            if (t && t.has(e)) return t.get(e);
            var r = {},
                n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var u in e)
                if (Object.prototype.hasOwnProperty.call(e, u)) {
                    var i = n ? Object.getOwnPropertyDescriptor(e, u) : null;
                    i && (i.get || i.set) ? Object.defineProperty(r, u, i) : r[u] = e[u]
                } return r.default = e, t && t.set(e, r), r
        }
    }, {
        "./band.js": "BAgl",
        "./identity.js": "FKHe",
        "./linear.js": "LIJk",
        "./log.js": "ea59",
        "./symlog.js": "nanU",
        "./ordinal.js": "GjLX",
        "./pow.js": "xeRN",
        "./radial.js": "mhod",
        "./quantile.js": "AGCd",
        "./quantize.js": "d6Xk",
        "./threshold.js": "I63C",
        "./time.js": "kVXt",
        "./utcTime.js": "WrbA",
        "./sequential.js": "J7VY",
        "./sequentialQuantile.js": "XYTZ",
        "./diverging.js": "CLse",
        "./tickFormat.js": "qjRa"
    }],
    "YeOr": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = exports.xhtml = void 0;
        var t = "http://www.w3.org/1999/xhtml";
        exports.xhtml = t;
        var w = {
            svg: "http://www.w3.org/2000/svg",
            xhtml: t,
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace",
            xmlns: "http://www.w3.org/2000/xmlns/"
        };
        exports.default = w;
    }, {}],
    "U3j5": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = t;
        var e = r(require("./namespaces"));

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function t(r) {
            var t = r += "",
                s = t.indexOf(":");
            return s >= 0 && "xmlns" !== (t = r.slice(0, s)) && (r = r.slice(s + 1)), e.default.hasOwnProperty(t) ? {
                space: e.default[t],
                local: r
            } : r
        }
    }, {
        "./namespaces": "YeOr"
    }],
    "z8hd": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = a;
        var e = n(require("./namespace")),
            t = require("./namespaces");

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e) {
            return function() {
                var n = this.ownerDocument,
                    r = this.namespaceURI;
                return r === t.xhtml && n.documentElement.namespaceURI === t.xhtml ? n.createElement(e) : n.createElementNS(r, e)
            }
        }

        function u(e) {
            return function() {
                return this.ownerDocument.createElementNS(e.space, e.local)
            }
        }

        function a(t) {
            var n = (0, e.default)(t);
            return (n.local ? u : r)(n)
        }
    }, {
        "./namespace": "U3j5",
        "./namespaces": "YeOr"
    }],
    "vXaf": [function(require, module, exports) {
        "use strict";

        function e() {}

        function t(t) {
            return null == t ? e : function() {
                return this.querySelector(t)
            }
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = t;
    }, {}],
    "LlPS": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = _;
        var e = require("./index"),
            t = r(require("../selector"));

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function _(r) {
            "function" != typeof r && (r = (0, t.default)(r));
            for (var _ = this._groups, a = _.length, n = new Array(a), u = 0; u < a; ++u)
                for (var o, i, l = _[u], d = l.length, s = n[u] = new Array(d), f = 0; f < d; ++f)(o = l[f]) && (i = r.call(o, o.__data__, f, l)) && ("__data__" in o && (i.__data__ = o.__data__), s[f] = i);
            return new e.Selection(n, this._parents)
        }
    }, {
        "./index": "G2fv",
        "../selector": "vXaf"
    }],
    "t3Ja": [function(require, module, exports) {
        "use strict";

        function e() {
            return []
        }

        function t(t) {
            return null == t ? e : function() {
                return this.querySelectorAll(t)
            }
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = t;
    }, {}],
    "VXfp": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = u;
        var e = require("./index"),
            t = r(require("../selectorAll"));

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function u(r) {
            "function" != typeof r && (r = (0, t.default)(r));
            for (var u = this._groups, l = u.length, n = [], o = [], s = 0; s < l; ++s)
                for (var a, f = u[s], i = f.length, _ = 0; _ < i; ++_)(a = f[_]) && (n.push(r.call(a, a.__data__, _, f)), o.push(a));
            return new e.Selection(n, o)
        }
    }, {
        "./index": "G2fv",
        "../selectorAll": "t3Ja"
    }],
    "oB3r": [function(require, module, exports) {
        "use strict";

        function e(e) {
            return function() {
                return this.matches(e)
            }
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "SSab": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = n;
        var e = require("./index"),
            r = t(require("../matcher"));

        function t(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function n(t) {
            "function" != typeof t && (t = (0, r.default)(t));
            for (var n = this._groups, u = n.length, a = new Array(u), o = 0; o < u; ++o)
                for (var i, l = n[o], s = l.length, f = a[o] = [], _ = 0; _ < s; ++_)(i = l[_]) && t.call(i, i.__data__, _, l) && f.push(i);
            return new e.Selection(a, this._parents)
        }
    }, {
        "./index": "G2fv",
        "../matcher": "oB3r"
    }],
    "CH7j": [function(require, module, exports) {
        "use strict";

        function e(e) {
            return new Array(e.length)
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "Bnlt": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = n, exports.EnterNode = o;
        var e = r(require("./sparse")),
            t = require("./index");

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function n() {
            return new t.Selection(this._enter || this._groups.map(e.default), this._parents)
        }

        function o(e, t) {
            this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t
        }
        o.prototype = {
            constructor: o,
            appendChild: function(e) {
                return this._parent.insertBefore(e, this._next)
            },
            insertBefore: function(e, t) {
                return this._parent.insertBefore(e, t)
            },
            querySelector: function(e) {
                return this._parent.querySelector(e)
            },
            querySelectorAll: function(e) {
                return this._parent.querySelectorAll(e)
            }
        };
    }, {
        "./sparse": "CH7j",
        "./index": "G2fv"
    }],
    "qO0c": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = l;
        var e = require("./index"),
            r = require("./enter"),
            n = t(require("../constant"));

        function t(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var a = "$";

        function o(e, n, t, a, o, _) {
            for (var l, i = 0, u = n.length, f = _.length; i < f; ++i)(l = n[i]) ? (l.__data__ = _[i], a[i] = l) : t[i] = new r.EnterNode(e, _[i]);
            for (; i < u; ++i)(l = n[i]) && (o[i] = l)
        }

        function _(e, n, t, o, _, l, i) {
            var u, f, c, s = {},
                d = n.length,
                h = l.length,
                w = new Array(d);
            for (u = 0; u < d; ++u)(f = n[u]) && (w[u] = c = a + i.call(f, f.__data__, u, n), c in s ? _[u] = f : s[c] = f);
            for (u = 0; u < h; ++u)(f = s[c = a + i.call(e, l[u], u, l)]) ? (o[u] = f, f.__data__ = l[u], s[c] = null) : t[u] = new r.EnterNode(e, l[u]);
            for (u = 0; u < d; ++u)(f = n[u]) && s[w[u]] === f && (_[u] = f)
        }

        function l(r, t) {
            if (!r) return v = new Array(this.size()), d = -1, this.each(function(e) {
                v[++d] = e
            }), v;
            var a = t ? _ : o,
                l = this._parents,
                i = this._groups;
            "function" != typeof r && (r = (0, n.default)(r));
            for (var u = i.length, f = new Array(u), c = new Array(u), s = new Array(u), d = 0; d < u; ++d) {
                var h = l[d],
                    w = i[d],
                    y = w.length,
                    v = r.call(h, h && h.__data__, d, l),
                    g = v.length,
                    A = c[d] = new Array(g),
                    p = f[d] = new Array(g);
                a(h, w, A, p, s[d] = new Array(y), v, t);
                for (var x, q, E = 0, M = 0; E < g; ++E)
                    if (x = A[E]) {
                        for (E >= M && (M = E + 1); !(q = p[M]) && ++M < g;);
                        x._next = q || null
                    }
            }
            return (f = new e.Selection(f, l))._enter = c, f._exit = s, f
        }
    }, {
        "./index": "G2fv",
        "./enter": "Bnlt",
        "../constant": "aCvo"
    }],
    "sLhL": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = u;
        var e = r(require("./sparse")),
            t = require("./index");

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function u() {
            return new t.Selection(this._exit || this._groups.map(e.default), this._parents)
        }
    }, {
        "./sparse": "CH7j",
        "./index": "G2fv"
    }],
    "Rskg": [function(require, module, exports) {
        "use strict";

        function e(e, t, r) {
            var n = this.enter(),
                o = this,
                u = this.exit();
            return n = "function" == typeof e ? e(n) : n.append(e + ""), null != t && (o = t(o)), null == r ? u.remove() : r(u), n && o ? n.merge(o).order() : o
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "VSNx": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = r;
        var e = require("./index");

        function r(r) {
            for (var t = this._groups, n = r._groups, o = t.length, s = n.length, a = Math.min(o, s), i = new Array(o), u = 0; u < a; ++u)
                for (var l, f = t[u], h = n[u], p = f.length, g = i[u] = new Array(p), _ = 0; _ < p; ++_)(l = f[_] || h[_]) && (g[_] = l);
            for (; u < o; ++u) i[u] = t[u];
            return new e.Selection(i, this._parents)
        }
    }, {
        "./index": "G2fv"
    }],
    "z9O9": [function(require, module, exports) {
        "use strict";

        function e() {
            for (var e = this._groups, t = -1, r = e.length; ++t < r;)
                for (var o, n = e[t], s = n.length - 1, i = n[s]; --s >= 0;)(o = n[s]) && (i && 4 ^ o.compareDocumentPosition(i) && i.parentNode.insertBefore(o, i), i = o);
            return this
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "Vwkw": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
        var r = require("./index");

        function e(e) {
            function n(r, t) {
                return r && t ? e(r.__data__, t.__data__) : !r - !t
            }
            e || (e = t);
            for (var a = this._groups, o = a.length, u = new Array(o), _ = 0; _ < o; ++_) {
                for (var i, s = a[_], d = s.length, f = u[_] = new Array(d), c = 0; c < d; ++c)(i = s[c]) && (f[c] = i);
                f.sort(n)
            }
            return new r.Selection(u, this._parents).order()
        }

        function t(r, e) {
            return r < e ? -1 : r > e ? 1 : r >= e ? 0 : NaN
        }
    }, {
        "./index": "G2fv"
    }],
    "fuyN": [function(require, module, exports) {
        "use strict";

        function e() {
            var e = arguments[0];
            return arguments[0] = this, e.apply(null, arguments), this
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "x3ma": [function(require, module, exports) {
        "use strict";

        function e() {
            var e = new Array(this.size()),
                t = -1;
            return this.each(function() {
                e[++t] = this
            }), e
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "zOHW": [function(require, module, exports) {
        "use strict";

        function e() {
            for (var e = this._groups, r = 0, t = e.length; r < t; ++r)
                for (var u = e[r], n = 0, o = u.length; n < o; ++n) {
                    var l = u[n];
                    if (l) return l
                }
            return null
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "zFge": [function(require, module, exports) {
        "use strict";

        function e() {
            var e = 0;
            return this.each(function() {
                ++e
            }), e
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "ZnyY": [function(require, module, exports) {
        "use strict";

        function e() {
            return !this.node()
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "ntqp": [function(require, module, exports) {
        "use strict";

        function e(e) {
            for (var t = this._groups, r = 0, o = t.length; r < o; ++r)
                for (var s, a = t[r], l = 0, u = a.length; l < u; ++l)(s = a[l]) && e.call(s, s.__data__, l, a);
            return this
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "KUPz": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = l;
        var t = e(require("../namespace"));

        function e(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function n(t) {
            return function() {
                this.removeAttribute(t)
            }
        }

        function u(t) {
            return function() {
                this.removeAttributeNS(t.space, t.local)
            }
        }

        function r(t, e) {
            return function() {
                this.setAttribute(t, e)
            }
        }

        function i(t, e) {
            return function() {
                this.setAttributeNS(t.space, t.local, e)
            }
        }

        function o(t, e) {
            return function() {
                var n = e.apply(this, arguments);
                null == n ? this.removeAttribute(t) : this.setAttribute(t, n)
            }
        }

        function c(t, e) {
            return function() {
                var n = e.apply(this, arguments);
                null == n ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n)
            }
        }

        function l(e, l) {
            var a = (0, t.default)(e);
            if (arguments.length < 2) {
                var s = this.node();
                return a.local ? s.getAttributeNS(a.space, a.local) : s.getAttribute(a)
            }
            return this.each((null == l ? a.local ? u : n : "function" == typeof l ? a.local ? c : o : a.local ? i : r)(a, l))
        }
    }, {
        "../namespace": "U3j5"
    }],
    "iFwm": [function(require, module, exports) {
        "use strict";

        function e(e) {
            return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "WecP": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = o, exports.styleValue = l;
        var e = t(require("../window"));

        function t(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e) {
            return function() {
                this.style.removeProperty(e)
            }
        }

        function n(e, t, r) {
            return function() {
                this.style.setProperty(e, t, r)
            }
        }

        function u(e, t, r) {
            return function() {
                var n = t.apply(this, arguments);
                null == n ? this.style.removeProperty(e) : this.style.setProperty(e, n, r)
            }
        }

        function o(e, t, o) {
            return arguments.length > 1 ? this.each((null == t ? r : "function" == typeof t ? u : n)(e, t, null == o ? "" : o)) : l(this.node(), e)
        }

        function l(t, r) {
            return t.style.getPropertyValue(r) || (0, e.default)(t).getComputedStyle(t, null).getPropertyValue(r)
        }
    }, {
        "../window": "iFwm"
    }],
    "Tr0z": [function(require, module, exports) {
        "use strict";

        function t(t) {
            return function() {
                delete this[t]
            }
        }

        function e(t, e) {
            return function() {
                this[t] = e
            }
        }

        function n(t, e) {
            return function() {
                var n = e.apply(this, arguments);
                null == n ? delete this[t] : this[t] = n
            }
        }

        function u(u, i) {
            return arguments.length > 1 ? this.each((null == i ? t : "function" == typeof i ? n : e)(u, i)) : this.node()[u]
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = u;
    }, {}],
    "CVLA": [function(require, module, exports) {
        "use strict";

        function t(t) {
            return t.trim().split(/^|\s+/)
        }

        function n(t) {
            return t.classList || new e(t)
        }

        function e(n) {
            this._node = n, this._names = t(n.getAttribute("class") || "")
        }

        function i(t, e) {
            for (var i = n(t), s = -1, r = e.length; ++s < r;) i.add(e[s])
        }

        function s(t, e) {
            for (var i = n(t), s = -1, r = e.length; ++s < r;) i.remove(e[s])
        }

        function r(t) {
            return function() {
                i(this, t)
            }
        }

        function o(t) {
            return function() {
                s(this, t)
            }
        }

        function u(t, n) {
            return function() {
                (n.apply(this, arguments) ? i : s)(this, t)
            }
        }

        function f(e, i) {
            var s = t(e + "");
            if (arguments.length < 2) {
                for (var f = n(this.node()), c = -1, a = s.length; ++c < a;)
                    if (!f.contains(s[c])) return !1;
                return !0
            }
            return this.each(("function" == typeof i ? u : i ? r : o)(s, i))
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = f, e.prototype = {
            add: function(t) {
                this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
            },
            remove: function(t) {
                var n = this._names.indexOf(t);
                n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
            },
            contains: function(t) {
                return this._names.indexOf(t) >= 0
            }
        };
    }, {}],
    "wYBq": [function(require, module, exports) {
        "use strict";

        function t() {
            this.textContent = ""
        }

        function n(t) {
            return function() {
                this.textContent = t
            }
        }

        function e(t) {
            return function() {
                var n = t.apply(this, arguments);
                this.textContent = null == n ? "" : n
            }
        }

        function o(o) {
            return arguments.length ? this.each(null == o ? t : ("function" == typeof o ? e : n)(o)) : this.node().textContent
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = o;
    }, {}],
    "FDS0": [function(require, module, exports) {
        "use strict";

        function n() {
            this.innerHTML = ""
        }

        function t(n) {
            return function() {
                this.innerHTML = n
            }
        }

        function e(n) {
            return function() {
                var t = n.apply(this, arguments);
                this.innerHTML = null == t ? "" : t
            }
        }

        function i(i) {
            return arguments.length ? this.each(null == i ? n : ("function" == typeof i ? e : t)(i)) : this.node().innerHTML
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = i;
    }, {}],
    "AlDR": [function(require, module, exports) {
        "use strict";

        function e() {
            this.nextSibling && this.parentNode.appendChild(this)
        }

        function t() {
            return this.each(e)
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = t;
    }, {}],
    "wunq": [function(require, module, exports) {
        "use strict";

        function e() {
            this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
        }

        function t() {
            return this.each(e)
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = t;
    }, {}],
    "jPcQ": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = r;
        var e = t(require("../creator"));

        function t(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(t) {
            var r = "function" == typeof t ? t : (0, e.default)(t);
            return this.select(function() {
                return this.appendChild(r.apply(this, arguments))
            })
        }
    }, {
        "../creator": "z8hd"
    }],
    "NP4m": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = n;
        var e = r(require("../creator")),
            t = r(require("../selector"));

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function u() {
            return null
        }

        function n(r, n) {
            var l = "function" == typeof r ? r : (0, e.default)(r),
                o = null == n ? u : "function" == typeof n ? n : (0, t.default)(n);
            return this.select(function() {
                return this.insertBefore(l.apply(this, arguments), o.apply(this, arguments) || null)
            })
        }
    }, {
        "../creator": "z8hd",
        "../selector": "vXaf"
    }],
    "BhwP": [function(require, module, exports) {
        "use strict";

        function e() {
            var e = this.parentNode;
            e && e.removeChild(this)
        }

        function t() {
            return this.each(e)
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = t;
    }, {}],
    "C0rN": [function(require, module, exports) {
        "use strict";

        function e() {
            return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling)
        }

        function t() {
            return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling)
        }

        function n(n) {
            return this.select(n ? t : e)
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = n;
    }, {}],
    "dIrG": [function(require, module, exports) {
        "use strict";

        function e(e) {
            return arguments.length ? this.property("__data__", e) : this.node().__data__
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "pgiW": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = a, exports.customEvent = p, exports.event = void 0;
        var e = {},
            t = null;
        if (exports.event = t, "undefined" != typeof document) {
            var n = document.documentElement;
            "onmouseenter" in n || (e = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            })
        }

        function r(e, t, n) {
            return e = i(e, t, n),
                function(t) {
                    var n = t.relatedTarget;
                    n && (n === this || 8 & n.compareDocumentPosition(this)) || e.call(this, t)
                }
        }

        function i(e, n, r) {
            return function(i) {
                var o = t;
                exports.event = t = i;
                try {
                    e.call(this, this.__data__, n, r)
                } finally {
                    exports.event = t = o
                }
            }
        }

        function o(e) {
            return e.trim().split(/^|\s+/).map(function(e) {
                var t = "",
                    n = e.indexOf(".");
                return n >= 0 && (t = e.slice(n + 1), e = e.slice(0, n)), {
                    type: e,
                    name: t
                }
            })
        }

        function s(e) {
            return function() {
                var t = this.__on;
                if (t) {
                    for (var n, r = 0, i = -1, o = t.length; r < o; ++r) n = t[r], e.type && n.type !== e.type || n.name !== e.name ? t[++i] = n : this.removeEventListener(n.type, n.listener, n.capture);
                    ++i ? t.length = i : delete this.__on
                }
            }
        }

        function u(t, n, o) {
            var s = e.hasOwnProperty(t.type) ? r : i;
            return function(e, r, i) {
                var u, a = this.__on,
                    p = s(n, r, i);
                if (a)
                    for (var l = 0, v = a.length; l < v; ++l)
                        if ((u = a[l]).type === t.type && u.name === t.name) return this.removeEventListener(u.type, u.listener, u.capture), this.addEventListener(u.type, u.listener = p, u.capture = o), void(u.value = n);
                this.addEventListener(t.type, p, o), u = {
                    type: t.type,
                    name: t.name,
                    value: n,
                    listener: p,
                    capture: o
                }, a ? a.push(u) : this.__on = [u]
            }
        }

        function a(e, t, n) {
            var r, i, a = o(e + ""),
                p = a.length;
            if (!(arguments.length < 2)) {
                for (l = t ? u : s, null == n && (n = !1), r = 0; r < p; ++r) this.each(l(a[r], t, n));
                return this
            }
            var l = this.node().__on;
            if (l)
                for (var v, f = 0, c = l.length; f < c; ++f)
                    for (r = 0, v = l[f]; r < p; ++r)
                        if ((i = a[r]).type === v.type && i.name === v.name) return v.value
        }

        function p(e, n, r, i) {
            var o = t;
            e.sourceEvent = t, exports.event = t = e;
            try {
                return n.apply(r, i)
            } finally {
                exports.event = t = o
            }
        }
    }, {}],
    "YF1h": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = r;
        var t = e(require("../window"));

        function e(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function n(e, n, u) {
            var i = (0, t.default)(e),
                r = i.CustomEvent;
            "function" == typeof r ? r = new r(n, u) : (r = i.document.createEvent("Event"), u ? (r.initEvent(n, u.bubbles, u.cancelable), r.detail = u.detail) : r.initEvent(n, !1, !1)), e.dispatchEvent(r)
        }

        function u(t, e) {
            return function() {
                return n(this, t, e)
            }
        }

        function i(t, e) {
            return function() {
                return n(this, t, e.apply(this, arguments))
            }
        }

        function r(t, e) {
            return this.each(("function" == typeof e ? i : u)(t, e))
        }
    }, {
        "../window": "iFwm"
    }],
    "G2fv": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.Selection = B, exports.default = exports.root = void 0;
        var e = S(require("./select")),
            r = S(require("./selectAll")),
            t = S(require("./filter")),
            u = S(require("./data")),
            l = S(require("./enter")),
            a = S(require("./exit")),
            d = S(require("./join")),
            i = S(require("./merge")),
            o = S(require("./order")),
            f = S(require("./sort")),
            s = S(require("./call")),
            n = S(require("./nodes")),
            q = S(require("./node")),
            p = S(require("./size")),
            c = S(require("./empty")),
            m = S(require("./each")),
            x = S(require("./attr")),
            y = S(require("./style")),
            h = S(require("./property")),
            v = S(require("./classed")),
            _ = S(require("./text")),
            g = S(require("./html")),
            j = S(require("./raise")),
            w = S(require("./lower")),
            z = S(require("./append")),
            A = S(require("./insert")),
            M = S(require("./remove")),
            b = S(require("./clone")),
            E = S(require("./datum")),
            O = S(require("./on")),
            P = S(require("./dispatch"));

        function S(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var k = [null];

        function B(e, r) {
            this._groups = e, this._parents = r
        }

        function C() {
            return new B([
                [document.documentElement]
            ], k)
        }
        exports.root = k, B.prototype = C.prototype = {
            constructor: B,
            select: e.default,
            selectAll: r.default,
            filter: t.default,
            data: u.default,
            enter: l.default,
            exit: a.default,
            join: d.default,
            merge: i.default,
            order: o.default,
            sort: f.default,
            call: s.default,
            nodes: n.default,
            node: q.default,
            size: p.default,
            empty: c.default,
            each: m.default,
            attr: x.default,
            style: y.default,
            property: h.default,
            classed: v.default,
            text: _.default,
            html: g.default,
            raise: j.default,
            lower: w.default,
            append: z.default,
            insert: A.default,
            remove: M.default,
            clone: b.default,
            datum: E.default,
            on: O.default,
            dispatch: P.default
        };
        var D = C;
        exports.default = D;
    }, {
        "./select": "LlPS",
        "./selectAll": "VXfp",
        "./filter": "SSab",
        "./data": "qO0c",
        "./enter": "Bnlt",
        "./exit": "sLhL",
        "./join": "Rskg",
        "./merge": "VSNx",
        "./order": "z9O9",
        "./sort": "Vwkw",
        "./call": "fuyN",
        "./nodes": "x3ma",
        "./node": "zOHW",
        "./size": "zFge",
        "./empty": "ZnyY",
        "./each": "ntqp",
        "./attr": "KUPz",
        "./style": "WecP",
        "./property": "Tr0z",
        "./classed": "CVLA",
        "./text": "wYBq",
        "./html": "FDS0",
        "./raise": "AlDR",
        "./lower": "wunq",
        "./append": "jPcQ",
        "./insert": "NP4m",
        "./remove": "BhwP",
        "./clone": "C0rN",
        "./datum": "dIrG",
        "./on": "pgiW",
        "./dispatch": "YF1h"
    }],
    "RAQf": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = t;
        var e = require("./selection/index");

        function t(t) {
            return "string" == typeof t ? new e.Selection([
                [document.querySelector(t)]
            ], [document.documentElement]) : new e.Selection([
                [t]
            ], e.root)
        }
    }, {
        "./selection/index": "G2fv"
    }],
    "aaeJ": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = u;
        var e = r(require("./creator")),
            t = r(require("./select"));

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function u(r) {
            return (0, t.default)((0, e.default)(r).call(document.documentElement))
        }
    }, {
        "./creator": "z8hd",
        "./select": "RAQf"
    }],
    "iml1": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
        var t = 0;

        function e() {
            return new r
        }

        function r() {
            this._ = "@" + (++t).toString(36)
        }
        r.prototype = e.prototype = {
            constructor: r,
            get: function(t) {
                for (var e = this._; !(e in t);)
                    if (!(t = t.parentNode)) return;
                return t[e]
            },
            set: function(t, e) {
                return t[this._] = e
            },
            remove: function(t) {
                return this._ in t && delete t[this._]
            },
            toString: function() {
                return this._
            }
        };
    }, {}],
    "Tqn5": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = r;
        var e = require("./selection/on");

        function r() {
            for (var r, t = e.event; r = t.sourceEvent;) t = r;
            return t
        }
    }, {
        "./selection/on": "pgiW"
    }],
    "JEJ4": [function(require, module, exports) {
        "use strict";

        function e(e, t) {
            var n = e.ownerSVGElement || e;
            if (n.createSVGPoint) {
                var r = n.createSVGPoint();
                return r.x = t.clientX, r.y = t.clientY, [(r = r.matrixTransform(e.getScreenCTM().inverse())).x, r.y]
            }
            var i = e.getBoundingClientRect();
            return [t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop]
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "Y8Cy": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = t;
        var e = r(require("./sourceEvent")),
            u = r(require("./point"));

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function t(r) {
            var t = (0, e.default)();
            return t.changedTouches && (t = t.changedTouches[0]), (0, u.default)(r, t)
        }
    }, {
        "./sourceEvent": "Tqn5",
        "./point": "JEJ4"
    }],
    "zmwq": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = t;
        var e = require("./selection/index");

        function t(t) {
            return "string" == typeof t ? new e.Selection([document.querySelectorAll(t)], [document.documentElement]) : new e.Selection([null == t ? [] : t], e.root)
        }
    }, {
        "./selection/index": "G2fv"
    }],
    "SZFU": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = u;
        var e = t(require("./sourceEvent")),
            r = t(require("./point"));

        function t(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function u(t, u, n) {
            arguments.length < 3 && (n = u, u = (0, e.default)().changedTouches);
            for (var i, l = 0, o = u ? u.length : 0; l < o; ++l)
                if ((i = u[l]).identifier === n) return (0, r.default)(t, i);
            return null
        }
    }, {
        "./sourceEvent": "Tqn5",
        "./point": "JEJ4"
    }],
    "lhoo": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = u;
        var e = t(require("./sourceEvent")),
            r = t(require("./point"));

        function t(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function u(t, u) {
            null == u && (u = (0, e.default)().touches);
            for (var n = 0, o = u ? u.length : 0, l = new Array(o); n < o; ++n) l[n] = (0, r.default)(t, u[n]);
            return l
        }
    }, {
        "./sourceEvent": "Tqn5",
        "./point": "JEJ4"
    }],
    "ysDv": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), Object.defineProperty(exports, "create", {
            enumerable: !0,
            get: function() {
                return e.default
            }
        }), Object.defineProperty(exports, "creator", {
            enumerable: !0,
            get: function() {
                return t.default
            }
        }), Object.defineProperty(exports, "local", {
            enumerable: !0,
            get: function() {
                return r.default
            }
        }), Object.defineProperty(exports, "matcher", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }), Object.defineProperty(exports, "mouse", {
            enumerable: !0,
            get: function() {
                return u.default
            }
        }), Object.defineProperty(exports, "namespace", {
            enumerable: !0,
            get: function() {
                return o.default
            }
        }), Object.defineProperty(exports, "namespaces", {
            enumerable: !0,
            get: function() {
                return c.default
            }
        }), Object.defineProperty(exports, "clientPoint", {
            enumerable: !0,
            get: function() {
                return i.default
            }
        }), Object.defineProperty(exports, "select", {
            enumerable: !0,
            get: function() {
                return l.default
            }
        }), Object.defineProperty(exports, "selectAll", {
            enumerable: !0,
            get: function() {
                return f.default
            }
        }), Object.defineProperty(exports, "selection", {
            enumerable: !0,
            get: function() {
                return a.default
            }
        }), Object.defineProperty(exports, "selector", {
            enumerable: !0,
            get: function() {
                return s.default
            }
        }), Object.defineProperty(exports, "selectorAll", {
            enumerable: !0,
            get: function() {
                return p.default
            }
        }), Object.defineProperty(exports, "style", {
            enumerable: !0,
            get: function() {
                return d.styleValue
            }
        }), Object.defineProperty(exports, "touch", {
            enumerable: !0,
            get: function() {
                return b.default
            }
        }), Object.defineProperty(exports, "touches", {
            enumerable: !0,
            get: function() {
                return m.default
            }
        }), Object.defineProperty(exports, "window", {
            enumerable: !0,
            get: function() {
                return y.default
            }
        }), Object.defineProperty(exports, "event", {
            enumerable: !0,
            get: function() {
                return x.event
            }
        }), Object.defineProperty(exports, "customEvent", {
            enumerable: !0,
            get: function() {
                return x.customEvent
            }
        });
        var e = P(require("./create")),
            t = P(require("./creator")),
            r = P(require("./local")),
            n = P(require("./matcher")),
            u = P(require("./mouse")),
            o = P(require("./namespace")),
            c = P(require("./namespaces")),
            i = P(require("./point")),
            l = P(require("./select")),
            f = P(require("./selectAll")),
            a = P(require("./selection/index")),
            s = P(require("./selector")),
            p = P(require("./selectorAll")),
            d = require("./selection/style"),
            b = P(require("./touch")),
            m = P(require("./touches")),
            y = P(require("./window")),
            x = require("./selection/on");

        function P(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    }, {
        "./create": "aaeJ",
        "./creator": "z8hd",
        "./local": "iml1",
        "./matcher": "oB3r",
        "./mouse": "Y8Cy",
        "./namespace": "U3j5",
        "./namespaces": "YeOr",
        "./point": "JEJ4",
        "./select": "RAQf",
        "./selectAll": "zmwq",
        "./selection/index": "G2fv",
        "./selector": "vXaf",
        "./selectorAll": "t3Ja",
        "./selection/style": "WecP",
        "./touch": "SZFU",
        "./touches": "lhoo",
        "./window": "iFwm",
        "./selection/on": "pgiW"
    }],
    "ze2Z": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        const t = "http://www.w3.org/2000/svg";

        function e(t, e, s) {
            if (t && t.length) {
                const [n, i] = e, a = Math.PI / 180 * s, o = Math.cos(a), h = Math.sin(a);
                t.forEach(t => {
                    const [e, s] = t;
                    t[0] = (e - n) * o - (s - i) * h + n, t[1] = (e - n) * h + (s - i) * o + i
                })
            }
        }

        function s(t) {
            const e = t[0],
                s = t[1];
            return Math.sqrt(Math.pow(e[0] - s[0], 2) + Math.pow(e[1] - s[1], 2))
        }

        function n(t, e) {
            return t.type === e
        }
        const i = {
            A: 7,
            a: 7,
            C: 6,
            c: 6,
            H: 1,
            h: 1,
            L: 2,
            l: 2,
            M: 2,
            m: 2,
            Q: 4,
            q: 4,
            S: 4,
            s: 4,
            T: 4,
            t: 2,
            V: 1,
            v: 1,
            Z: 0,
            z: 0
        };
        class a {
            constructor(t) {
                this.COMMAND = 0, this.NUMBER = 1, this.EOD = 2, this.segments = [], this.parseData(t), this.processPoints()
            }
            tokenize(t) {
                const e = new Array;
                for (;
                    "" !== t;)
                    if (t.match(/^([ \t\r\n,]+)/)) t = t.substr(RegExp.$1.length);
                    else if (t.match(/^([aAcChHlLmMqQsStTvVzZ])/)) e[e.length] = {
                    type: this.COMMAND,
                    text: RegExp.$1
                }, t = t.substr(RegExp.$1.length);
                else {
                    if (!t.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) return [];
                    e[e.length] = {
                        type: this.NUMBER,
                        text: `${parseFloat(RegExp.$1)}`
                    }, t = t.substr(RegExp.$1.length)
                }
                return e[e.length] = {
                    type: this.EOD,
                    text: ""
                }, e
            }
            parseData(t) {
                const e = this.tokenize(t);
                let s = 0,
                    a = e[s],
                    o = "BOD";
                for (this.segments = new Array; !n(a, this.EOD);) {
                    let h;
                    const r = new Array;
                    if ("BOD" === o) {
                        if ("M" !== a.text && "m" !== a.text) return void this.parseData("M0,0" + t);
                        s++, h = i[a.text], o = a.text
                    } else n(a, this.NUMBER) ? h = i[o] : (s++, h = i[a.text], o = a.text);
                    if (s + h < e.length) {
                        for (let t = s; t < s + h; t++) {
                            const s = e[t];
                            if (!n(s, this.NUMBER)) return void console.error("Param not a number: " + o + "," + s.text);
                            r[r.length] = +s.text
                        }
                        if ("number" != typeof i[o]) return void console.error("Bad segment: " + o); {
                            const t = {
                                key: o,
                                data: r
                            };
                            this.segments.push(t), a = e[s += h], "M" === o && (o = "L"), "m" === o && (o = "l")
                        }
                    } else console.error("Path data ended short")
                }
            }
            get closed() {
                if (void 0 === this._closed) {
                    this._closed = !1;
                    for (const t of this.segments) "z" === t.key.toLowerCase() && (this._closed = !0)
                }
                return this._closed
            }
            processPoints() {
                let t = null,
                    e = [0, 0];
                for (let s = 0; s < this.segments.length; s++) {
                    const n = this.segments[s];
                    switch (n.key) {
                        case "M":
                        case "L":
                        case "T":
                            n.point = [n.data[0], n.data[1]];
                            break;
                        case "m":
                        case "l":
                        case "t":
                            n.point = [n.data[0] + e[0], n.data[1] + e[1]];
                            break;
                        case "H":
                            n.point = [n.data[0], e[1]];
                            break;
                        case "h":
                            n.point = [n.data[0] + e[0], e[1]];
                            break;
                        case "V":
                            n.point = [e[0], n.data[0]];
                            break;
                        case "v":
                            n.point = [e[0], n.data[0] + e[1]];
                            break;
                        case "z":
                        case "Z":
                            t && (n.point = [t[0], t[1]]);
                            break;
                        case "C":
                            n.point = [n.data[4], n.data[5]];
                            break;
                        case "c":
                            n.point = [n.data[4] + e[0], n.data[5] + e[1]];
                            break;
                        case "S":
                            n.point = [n.data[2], n.data[3]];
                            break;
                        case "s":
                            n.point = [n.data[2] + e[0], n.data[3] + e[1]];
                            break;
                        case "Q":
                            n.point = [n.data[2], n.data[3]];
                            break;
                        case "q":
                            n.point = [n.data[2] + e[0], n.data[3] + e[1]];
                            break;
                        case "A":
                            n.point = [n.data[5], n.data[6]];
                            break;
                        case "a":
                            n.point = [n.data[5] + e[0], n.data[6] + e[1]]
                    }
                    "m" !== n.key && "M" !== n.key || (t = null), n.point && (e = n.point, t || (t = n.point)), "z" !== n.key && "Z" !== n.key || (t = null)
                }
            }
        }
        class o {
            constructor(t) {
                this._position = [0, 0], this._first = null, this.bezierReflectionPoint = null, this.quadReflectionPoint = null, this.parsed = new a(t)
            }
            get segments() {
                return this.parsed.segments
            }
            get closed() {
                return this.parsed.closed
            }
            get linearPoints() {
                if (!this._linearPoints) {
                    const t = [];
                    let e = [];
                    for (const s of this.parsed.segments) {
                        const n = s.key.toLowerCase();
                        ("m" !== n && "z" !== n || (e.length && (t.push(e), e = []), "z" !== n)) && s.point && e.push(s.point)
                    }
                    e.length && (t.push(e), e = []), this._linearPoints = t
                }
                return this._linearPoints
            }
            get first() {
                return this._first
            }
            set first(t) {
                this._first = t
            }
            setPosition(t, e) {
                this._position = [t, e], this._first || (this._first = [t, e])
            }
            get position() {
                return this._position
            }
            get x() {
                return this._position[0]
            }
            get y() {
                return this._position[1]
            }
        }
        class h {
            constructor(t, e, s, n, i, a) {
                if (this._segIndex = 0, this._numSegs = 0, this._rx = 0, this._ry = 0, this._sinPhi = 0, this._cosPhi = 0, this._C = [0, 0], this._theta = 0, this._delta = 0, this._T = 0, this._from = t, t[0] === e[0] && t[1] === e[1]) return;
                const o = Math.PI / 180;
                this._rx = Math.abs(s[0]), this._ry = Math.abs(s[1]), this._sinPhi = Math.sin(n * o), this._cosPhi = Math.cos(n * o);
                const h = this._cosPhi * (t[0] - e[0]) / 2 + this._sinPhi * (t[1] - e[1]) / 2,
                    r = -this._sinPhi * (t[0] - e[0]) / 2 + this._cosPhi * (t[1] - e[1]) / 2;
                let c = 0;
                const l = this._rx * this._rx * this._ry * this._ry - this._rx * this._rx * r * r - this._ry * this._ry * h * h;
                if (l < 0) {
                    const t = Math.sqrt(1 - l / (this._rx * this._rx * this._ry * this._ry));
                    this._rx = this._rx * t, this._ry = this._ry * t, c = 0
                } else c = (i === a ? -1 : 1) * Math.sqrt(l / (this._rx * this._rx * r * r + this._ry * this._ry * h * h));
                const u = c * this._rx * r / this._ry,
                    p = -c * this._ry * h / this._rx;
                this._C = [0, 0], this._C[0] = this._cosPhi * u - this._sinPhi * p + (t[0] + e[0]) / 2, this._C[1] = this._sinPhi * u + this._cosPhi * p + (t[1] + e[1]) / 2, this._theta = this.calculateVectorAngle(1, 0, (h - u) / this._rx, (r - p) / this._ry);
                let d = this.calculateVectorAngle((h - u) / this._rx, (r - p) / this._ry, (-h - u) / this._rx, (-r - p) / this._ry);
                !a && d > 0 ? d -= 2 * Math.PI : a && d < 0 && (d += 2 * Math.PI), this._numSegs = Math.ceil(Math.abs(d / (Math.PI / 2))), this._delta = d / this._numSegs, this._T = 8 / 3 * Math.sin(this._delta / 4) * Math.sin(this._delta / 4) / Math.sin(this._delta / 2)
            }
            getNextSegment() {
                if (this._segIndex === this._numSegs) return null;
                const t = Math.cos(this._theta),
                    e = Math.sin(this._theta),
                    s = this._theta + this._delta,
                    n = Math.cos(s),
                    i = Math.sin(s),
                    a = [this._cosPhi * this._rx * n - this._sinPhi * this._ry * i + this._C[0], this._sinPhi * this._rx * n + this._cosPhi * this._ry * i + this._C[1]],
                    o = [this._from[0] + this._T * (-this._cosPhi * this._rx * e - this._sinPhi * this._ry * t), this._from[1] + this._T * (-this._sinPhi * this._rx * e + this._cosPhi * this._ry * t)],
                    h = [a[0] + this._T * (this._cosPhi * this._rx * i + this._sinPhi * this._ry * n), a[1] + this._T * (this._sinPhi * this._rx * i - this._cosPhi * this._ry * n)];
                return this._theta = s, this._from = [a[0], a[1]], this._segIndex++, {
                    cp1: o,
                    cp2: h,
                    to: a
                }
            }
            calculateVectorAngle(t, e, s, n) {
                const i = Math.atan2(e, t),
                    a = Math.atan2(n, s);
                return a >= i ? a - i : 2 * Math.PI - (i - a)
            }
        }
        class r {
            constructor(t, e) {
                this.sets = t, this.closed = e
            }
            fit(t) {
                const e = [];
                for (const n of this.sets) {
                    const s = n.length;
                    let i = Math.floor(t * s);
                    if (i < 5) {
                        if (s <= 5) continue;
                        i = 5
                    }
                    e.push(this.reduce(n, i))
                }
                let s = "";
                for (const n of e) {
                    for (let t = 0; t < n.length; t++) {
                        const e = n[t];
                        s += 0 === t ? "M" + e[0] + "," + e[1] : "L" + e[0] + "," + e[1]
                    }
                    this.closed && (s += "z ")
                }
                return s
            }
            reduce(t, e) {
                if (t.length <= e) return t;
                const n = t.slice(0);
                for (; n.length > e;) {
                    let t = -1,
                        e = -1;
                    for (let i = 1; i < n.length - 1; i++) {
                        const a = s([n[i - 1], n[i]]),
                            o = s([n[i], n[i + 1]]),
                            h = s([n[i - 1], n[i + 1]]),
                            r = (a + o + h) / 2,
                            c = Math.sqrt(r * (r - a) * (r - o) * (r - h));
                        (t < 0 || c < t) && (t = c, e = i)
                    }
                    if (!(e > 0)) break;
                    n.splice(e, 1)
                }
                return n
            }
        }

        function c(t, s) {
            const n = [0, 0],
                i = Math.round(s.hachureAngle + 90);
            i && e(t, n, i);
            const a = function(t, e) {
                const s = [...t];
                s[0].join(",") !== s[s.length - 1].join(",") && s.push([s[0][0], s[0][1]]);
                const n = [];
                if (s && s.length > 2) {
                    let t = e.hachureGap;
                    t < 0 && (t = 4 * e.strokeWidth), t = Math.max(t, .1);
                    const i = [];
                    for (let e = 0; e < s.length - 1; e++) {
                        const t = s[e],
                            n = s[e + 1];
                        if (t[1] !== n[1]) {
                            const e = Math.min(t[1], n[1]);
                            i.push({
                                ymin: e,
                                ymax: Math.max(t[1], n[1]),
                                x: e === t[1] ? t[0] : n[0],
                                islope: (n[0] - t[0]) / (n[1] - t[1])
                            })
                        }
                    }
                    if (i.sort((t, e) => t.ymin < e.ymin ? -1 : t.ymin > e.ymin ? 1 : t.x < e.x ? -1 : t.x > e.x ? 1 : t.ymax === e.ymax ? 0 : (t.ymax - e.ymax) / Math.abs(t.ymax - e.ymax)), !i.length) return n;
                    let a = [],
                        o = i[0].ymin;
                    for (; a.length || i.length;) {
                        if (i.length) {
                            let t = -1;
                            for (let e = 0; e < i.length && !(i[e].ymin > o); e++) t = e;
                            i.splice(0, t + 1).forEach(t => {
                                a.push({
                                    s: o,
                                    edge: t
                                })
                            })
                        }
                        if ((a = a.filter(t => !(t.edge.ymax <= o))).sort((t, e) => t.edge.x === e.edge.x ? 0 : (t.edge.x - e.edge.x) / Math.abs(t.edge.x - e.edge.x)), a.length > 1)
                            for (let t = 0; t < a.length; t += 2) {
                                const e = t + 1;
                                if (e >= a.length) break;
                                const s = a[t].edge,
                                    i = a[e].edge;
                                n.push([
                                    [Math.round(s.x), o],
                                    [Math.round(i.x), o]
                                ])
                            }
                        o += t, a.forEach(e => {
                            e.edge.x = e.edge.x + t * e.edge.islope
                        })
                    }
                }
                return n
            }(t, s);
            return i && (e(t, n, -i), function(t, s, n) {
                const i = [];
                a.forEach(t => i.push(...t)), e(i, s, n)
            }(0, n, -i)), a
        }
        class l {
            constructor(t) {
                this.helper = t
            }
            fillPolygon(t, e) {
                return this._fillPolygon(t, e)
            }
            _fillPolygon(t, e, s = !1) {
                const n = c(t, e);
                return {
                    type: "fillSketch",
                    ops: this.renderLines(n, e, s)
                }
            }
            renderLines(t, e, s) {
                let n = [],
                    i = null;
                for (const a of t) n = n.concat(this.helper.doubleLineOps(a[0][0], a[0][1], a[1][0], a[1][1], e)), s && i && (n = n.concat(this.helper.doubleLineOps(i[0], i[1], a[0][0], a[0][1], e))), i = a[1];
                return n
            }
        }
        class u extends l {
            fillPolygon(t, e) {
                return this._fillPolygon(t, e, !0)
            }
        }
        class p extends l {
            fillPolygon(t, e) {
                const s = this._fillPolygon(t, e),
                    n = Object.assign({}, e, {
                        hachureAngle: e.hachureAngle + 90
                    }),
                    i = this._fillPolygon(t, n);
                return s.ops = s.ops.concat(i.ops), s
            }
        }
        class d {
            constructor(t) {
                this.helper = t
            }
            fillPolygon(t, e) {
                const s = c(t, e = Object.assign({}, e, {
                    curveStepCount: 4,
                    hachureAngle: 0,
                    roughness: 1
                }));
                return this.dotsOnLines(s, e)
            }
            dotsOnLines(t, e) {
                let n = [],
                    i = e.hachureGap;
                i < 0 && (i = 4 * e.strokeWidth), i = Math.max(i, .1);
                let a = e.fillWeight;
                a < 0 && (a = e.strokeWidth / 2);
                for (const o of t) {
                    const t = s(o) / i,
                        h = Math.ceil(t) - 1,
                        r = Math.atan((o[1][1] - o[0][1]) / (o[1][0] - o[0][0]));
                    for (let s = 0; s < h; s++) {
                        const t = i * (s + 1),
                            h = t * Math.sin(r),
                            c = t * Math.cos(r),
                            l = [o[0][0] - c, o[0][1] + h],
                            u = this.helper.randOffsetWithRange(l[0] - i / 4, l[0] + i / 4, e),
                            p = this.helper.randOffsetWithRange(l[1] - i / 4, l[1] + i / 4, e),
                            d = this.helper.ellipse(u, p, a, a, e);
                        n = n.concat(d.ops)
                    }
                }
                return {
                    type: "fillSketch",
                    ops: n
                }
            }
        }
        class f {
            constructor(t) {
                this.helper = t
            }
            fillPolygon(t, e) {
                const s = c(t, e);
                return {
                    type: "fillSketch",
                    ops: this.dashedLine(s, e)
                }
            }
            dashedLine(t, e) {
                const n = e.dashOffset < 0 ? e.hachureGap < 0 ? 4 * e.strokeWidth : e.hachureGap : e.dashOffset,
                    i = e.dashGap < 0 ? e.hachureGap < 0 ? 4 * e.strokeWidth : e.hachureGap : e.dashGap;
                let a = [];
                return t.forEach(t => {
                    const o = s(t),
                        h = Math.floor(o / (n + i)),
                        r = (o + i - h * (n + i)) / 2;
                    let c = t[0],
                        l = t[1];
                    c[0] > l[0] && (c = t[1], l = t[0]);
                    const u = Math.atan((l[1] - c[1]) / (l[0] - c[0]));
                    for (let s = 0; s < h; s++) {
                        const t = s * (n + i),
                            o = t + n,
                            h = [c[0] + t * Math.cos(u) + r * Math.cos(u), c[1] + t * Math.sin(u) + r * Math.sin(u)],
                            l = [c[0] + o * Math.cos(u) + r * Math.cos(u), c[1] + o * Math.sin(u) + r * Math.sin(u)];
                        a = a.concat(this.helper.doubleLineOps(h[0], h[1], l[0], l[1], e))
                    }
                }), a
            }
        }
        class g {
            constructor(t) {
                this.helper = t
            }
            fillPolygon(t, e) {
                const s = e.hachureGap < 0 ? 4 * e.strokeWidth : e.hachureGap,
                    n = e.zigzagOffset < 0 ? s : e.zigzagOffset,
                    i = c(t, e = Object.assign({}, e, {
                        hachureGap: s + n
                    }));
                return {
                    type: "fillSketch",
                    ops: this.zigzagLines(i, n, e)
                }
            }
            zigzagLines(t, e, n) {
                let i = [];
                return t.forEach(t => {
                    const a = s(t),
                        o = Math.round(a / (2 * e));
                    let h = t[0],
                        r = t[1];
                    h[0] > r[0] && (h = t[1], r = t[0]);
                    const c = Math.atan((r[1] - h[1]) / (r[0] - h[0]));
                    for (let s = 0; s < o; s++) {
                        const t = 2 * s * e,
                            a = 2 * (s + 1) * e,
                            o = Math.sqrt(2 * Math.pow(e, 2)),
                            r = [h[0] + t * Math.cos(c), h[1] + t * Math.sin(c)],
                            l = [h[0] + a * Math.cos(c), h[1] + a * Math.sin(c)],
                            u = [r[0] + o * Math.cos(c + Math.PI / 4), r[1] + o * Math.sin(c + Math.PI / 4)];
                        i = (i = i.concat(this.helper.doubleLineOps(r[0], r[1], u[0], u[1], n))).concat(this.helper.doubleLineOps(u[0], u[1], l[0], l[1], n))
                    }
                }), i
            }
        }
        const y = {};
        class _ {
            constructor(t) {
                this.seed = t
            }
            next() {
                return this.seed ? (2 ** 31 - 1 & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31 : Math.random()
            }
        }
        const M = {
            randOffset: function(t, e) {
                return z(t, e)
            },
            randOffsetWithRange: function(t, e, s) {
                return C(t, e, s)
            },
            ellipse: function(t, e, s, n, i) {
                return w(t, e, i, P(s, n, i)).opset
            },
            doubleLineOps: function(t, e, s, n, i) {
                return A(t, e, s, n, i)
            }
        };

        function x(t, e, s, n, i) {
            return {
                type: "path",
                ops: A(t, e, s, n, i)
            }
        }

        function m(t, e, s) {
            const n = (t || []).length;
            if (n > 2) {
                let i = [];
                for (let e = 0; e < n - 1; e++) i = i.concat(A(t[e][0], t[e][1], t[e + 1][0], t[e + 1][1], s));
                return e && (i = i.concat(A(t[n - 1][0], t[n - 1][1], t[0][0], t[0][1], s))), {
                    type: "path",
                    ops: i
                }
            }
            return 2 === n ? x(t[0][0], t[0][1], t[1][0], t[1][1], s) : {
                type: "path",
                ops: []
            }
        }

        function k(t, e, s, n, i) {
            return function(t, e) {
                return m(t, !0, i)
            }([
                [t, e],
                [t + s, e],
                [t + s, e + n],
                [t, e + n]
            ])
        }

        function b(t, e) {
            const s = W(t, 1 * (1 + .2 * e.roughness), e),
                n = W(t, 1.5 * (1 + .22 * e.roughness), e);
            return {
                type: "path",
                ops: s.concat(n)
            }
        }

        function P(t, e, s) {
            const n = Math.sqrt(2 * Math.PI * Math.sqrt((Math.pow(t / 2, 2) + Math.pow(e / 2, 2)) / 2)),
                i = Math.max(s.curveStepCount, s.curveStepCount / Math.sqrt(200) * n),
                a = 2 * Math.PI / i;
            let o = Math.abs(t / 2),
                h = Math.abs(e / 2);
            const r = 1 - s.curveFitting;
            return {
                increment: a,
                rx: o += z(o * r, s),
                ry: h += z(h * r, s)
            }
        }

        function w(t, e, s, n) {
            const [i, a] = D(n.increment, t, e, n.rx, n.ry, 1, n.increment * C(.1, C(.4, 1, s), s), s), [o] = D(n.increment, t, e, n.rx, n.ry, 1.5, 0, s), h = R(i, null, s), r = R(o, null, s);
            return {
                estimatedPoints: a,
                opset: {
                    type: "path",
                    ops: h.concat(r)
                }
            }
        }

        function v(t, e, s, n, i, a, o, h, r) {
            const c = t,
                l = e;
            let u = Math.abs(s / 2),
                p = Math.abs(n / 2);
            u += z(.01 * u, r), p += z(.01 * p, r);
            let d = i,
                f = a;
            for (; d < 0;) d += 2 * Math.PI, f += 2 * Math.PI;
            f - d > 2 * Math.PI && (d = 0, f = 2 * Math.PI);
            const g = 2 * Math.PI / r.curveStepCount,
                y = Math.min(g / 2, (f - d) / 2),
                _ = I(y, c, l, u, p, d, f, 1, r),
                M = I(y, c, l, u, p, d, f, 1.5, r);
            let x = _.concat(M);
            return o && (h ? x = (x = x.concat(A(c, l, c + u * Math.cos(d), l + p * Math.sin(d), r))).concat(A(c, l, c + u * Math.cos(f), l + p * Math.sin(f), r)) : (x.push({
                op: "lineTo",
                data: [c, l]
            }), x.push({
                op: "lineTo",
                data: [c + u * Math.cos(d), l + p * Math.sin(d)]
            }))), {
                type: "path",
                ops: x
            }
        }

        function S(t, e) {
            const s = [];
            if (t.length) {
                const n = e.maxRandomnessOffset || 0,
                    i = t.length;
                if (i > 2) {
                    s.push({
                        op: "move",
                        data: [t[0][0] + z(n, e), t[0][1] + z(n, e)]
                    });
                    for (let a = 1; a < i; a++) s.push({
                        op: "lineTo",
                        data: [t[a][0] + z(n, e), t[a][1] + z(n, e)]
                    })
                }
            }
            return {
                type: "fillPath",
                ops: s
            }
        }

        function O(t, e) {
            return function(t, e) {
                let s = t.fillStyle || "hachure";
                if (!y[s]) switch (s) {
                    case "zigzag":
                        y[s] || (y[s] = new u(e));
                        break;
                    case "cross-hatch":
                        y[s] || (y[s] = new p(e));
                        break;
                    case "dots":
                        y[s] || (y[s] = new d(e));
                        break;
                    case "dashed":
                        y[s] || (y[s] = new f(e));
                        break;
                    case "zigzag-line":
                        y[s] || (y[s] = new g(e));
                        break;
                    case "hachure":
                    default:
                        y[s = "hachure"] || (y[s] = new l(e))
                }
                return y[s]
            }(e, M).fillPolygon(t, e)
        }

        function T(t) {
            return t.randomizer || (t.randomizer = new _(t.seed || 0)), t.randomizer.next()
        }

        function C(t, e, s) {
            return s.roughness * s.roughnessGain * (T(s) * (e - t) + t)
        }

        function z(t, e) {
            return C(-t, t, e)
        }

        function A(t, e, s, n, i) {
            const a = E(t, e, s, n, i, !0, !1),
                o = E(t, e, s, n, i, !0, !0);
            return a.concat(o)
        }

        function E(t, e, s, n, i, a, o) {
            const h = Math.pow(t - s, 2) + Math.pow(e - n, 2),
                r = Math.sqrt(h);
            i.roughnessGain = r < 200 ? 1 : r > 500 ? .4 : -.0016668 * r + 1.233334;
            let c = i.maxRandomnessOffset || 0;
            c * c * 100 > h && (c = r / 10);
            const l = c / 2,
                u = .2 + .2 * T(i);
            let p = i.bowing * i.maxRandomnessOffset * (n - e) / 200,
                d = i.bowing * i.maxRandomnessOffset * (t - s) / 200;
            p = z(p, i), d = z(d, i);
            const f = [],
                g = () => z(l, i),
                y = () => z(c, i);
            return a && (o ? f.push({
                op: "move",
                data: [t + g(), e + g()]
            }) : f.push({
                op: "move",
                data: [t + z(c, i), e + z(c, i)]
            })), o ? f.push({
                op: "bcurveTo",
                data: [p + t + (s - t) * u + g(), d + e + (n - e) * u + g(), p + t + 2 * (s - t) * u + g(), d + e + 2 * (n - e) * u + g(), s + g(), n + g()]
            }) : f.push({
                op: "bcurveTo",
                data: [p + t + (s - t) * u + y(), d + e + (n - e) * u + y(), p + t + 2 * (s - t) * u + y(), d + e + 2 * (n - e) * u + y(), s + y(), n + y()]
            }), f
        }

        function W(t, e, s) {
            const n = [];
            n.push([t[0][0] + z(e, s), t[0][1] + z(e, s)]), n.push([t[0][0] + z(e, s), t[0][1] + z(e, s)]);
            for (let i = 1; i < t.length; i++) n.push([t[i][0] + z(e, s), t[i][1] + z(e, s)]), i === t.length - 1 && n.push([t[i][0] + z(e, s), t[i][1] + z(e, s)]);
            return R(n, null, s)
        }

        function R(t, e, s) {
            const n = t.length;
            let i = [];
            if (n > 3) {
                const a = [],
                    o = 1 - s.curveTightness;
                i.push({
                    op: "move",
                    data: [t[1][0], t[1][1]]
                });
                for (let e = 1; e + 2 < n; e++) {
                    const s = t[e];
                    a[0] = [s[0], s[1]], a[1] = [s[0] + (o * t[e + 1][0] - o * t[e - 1][0]) / 6, s[1] + (o * t[e + 1][1] - o * t[e - 1][1]) / 6], a[2] = [t[e + 1][0] + (o * t[e][0] - o * t[e + 2][0]) / 6, t[e + 1][1] + (o * t[e][1] - o * t[e + 2][1]) / 6], a[3] = [t[e + 1][0], t[e + 1][1]], i.push({
                        op: "bcurveTo",
                        data: [a[1][0], a[1][1], a[2][0], a[2][1], a[3][0], a[3][1]]
                    })
                }
                if (e && 2 === e.length) {
                    const t = s.maxRandomnessOffset;
                    i.push({
                        op: "lineTo",
                        data: [e[0] + z(t, s), e[1] + z(t, s)]
                    })
                }
            } else 3 === n ? (i.push({
                op: "move",
                data: [t[1][0], t[1][1]]
            }), i.push({
                op: "bcurveTo",
                data: [t[1][0], t[1][1], t[2][0], t[2][1], t[2][0], t[2][1]]
            })) : 2 === n && (i = i.concat(A(t[0][0], t[0][1], t[1][0], t[1][1], s)));
            return i
        }

        function D(t, e, s, n, i, a, o, h) {
            const r = [],
                c = [],
                l = z(.5, h) - Math.PI / 2;
            c.push([z(a, h) + e + .9 * n * Math.cos(l - t), z(a, h) + s + .9 * i * Math.sin(l - t)]);
            for (let u = l; u < 2 * Math.PI + l - .01; u += t) {
                const t = [z(a, h) + e + n * Math.cos(u), z(a, h) + s + i * Math.sin(u)];
                r.push(t), c.push(t)
            }
            return c.push([z(a, h) + e + n * Math.cos(l + 2 * Math.PI + .5 * o), z(a, h) + s + i * Math.sin(l + 2 * Math.PI + .5 * o)]), c.push([z(a, h) + e + .98 * n * Math.cos(l + o), z(a, h) + s + .98 * i * Math.sin(l + o)]), c.push([z(a, h) + e + .9 * n * Math.cos(l + .5 * o), z(a, h) + s + .9 * i * Math.sin(l + .5 * o)]), [c, r]
        }

        function I(t, e, s, n, i, a, o, h, r) {
            const c = a + z(.1, r),
                l = [];
            l.push([z(h, r) + e + .9 * n * Math.cos(c - t), z(h, r) + s + .9 * i * Math.sin(c - t)]);
            for (let u = c; u <= o; u += t) l.push([z(h, r) + e + n * Math.cos(u), z(h, r) + s + i * Math.sin(u)]);
            return l.push([e + n * Math.cos(o), s + i * Math.sin(o)]), l.push([e + n * Math.cos(o), s + i * Math.sin(o)]), R(l, null, r)
        }

        function q(t, e, s, n, i, a, o, h) {
            const r = [],
                c = [h.maxRandomnessOffset || 1, (h.maxRandomnessOffset || 1) + .5];
            let l = [0, 0];
            for (let u = 0; u < 2; u++) 0 === u ? r.push({
                op: "move",
                data: [o.x, o.y]
            }) : r.push({
                op: "move",
                data: [o.x + z(c[0], h), o.y + z(c[0], h)]
            }), l = [i + z(c[u], h), a + z(c[u], h)], r.push({
                op: "bcurveTo",
                data: [t + z(c[u], h), e + z(c[u], h), s + z(c[u], h), n + z(c[u], h), l[0], l[1]]
            });
            return o.setPosition(l[0], l[1]), r
        }

        function $(t, e, s, n) {
            let i = [];
            switch (e.key) {
                case "M":
                case "m": {
                    const s = "m" === e.key;
                    if (e.data.length >= 2) {
                        let a = +e.data[0],
                            o = +e.data[1];
                        s && (a += t.x, o += t.y);
                        const h = 1 * (n.maxRandomnessOffset || 0);
                        a += z(h, n), o += z(h, n), t.setPosition(a, o), i.push({
                            op: "move",
                            data: [a, o]
                        })
                    }
                    break
                }
                case "L":
                case "l": {
                    const s = "l" === e.key;
                    if (e.data.length >= 2) {
                        let a = +e.data[0],
                            o = +e.data[1];
                        s && (a += t.x, o += t.y), i = i.concat(A(t.x, t.y, a, o, n)), t.setPosition(a, o)
                    }
                    break
                }
                case "H":
                case "h": {
                    const s = "h" === e.key;
                    if (e.data.length) {
                        let a = +e.data[0];
                        s && (a += t.x), i = i.concat(A(t.x, t.y, a, t.y, n)), t.setPosition(a, t.y)
                    }
                    break
                }
                case "V":
                case "v": {
                    const s = "v" === e.key;
                    if (e.data.length) {
                        let a = +e.data[0];
                        s && (a += t.y), i = i.concat(A(t.x, t.y, t.x, a, n)), t.setPosition(t.x, a)
                    }
                    break
                }
                case "Z":
                case "z":
                    t.first && (i = i.concat(A(t.x, t.y, t.first[0], t.first[1], n)), t.setPosition(t.first[0], t.first[1]), t.first = null);
                    break;
                case "C":
                case "c": {
                    const s = "c" === e.key;
                    if (e.data.length >= 6) {
                        let a = +e.data[0],
                            o = +e.data[1],
                            h = +e.data[2],
                            r = +e.data[3],
                            c = +e.data[4],
                            l = +e.data[5];
                        s && (a += t.x, h += t.x, c += t.x, o += t.y, r += t.y, l += t.y);
                        const u = q(a, o, h, r, c, l, t, n);
                        i = i.concat(u), t.bezierReflectionPoint = [c + (c - h), l + (l - r)]
                    }
                    break
                }
                case "S":
                case "s": {
                    const a = "s" === e.key;
                    if (e.data.length >= 4) {
                        let o = +e.data[0],
                            h = +e.data[1],
                            r = +e.data[2],
                            c = +e.data[3];
                        a && (o += t.x, r += t.x, h += t.y, c += t.y);
                        let l = o,
                            u = h;
                        const p = s ? s.key : "";
                        let d = null;
                        "c" !== p && "C" !== p && "s" !== p && "S" !== p || (d = t.bezierReflectionPoint), d && (l = d[0], u = d[1]);
                        const f = q(l, u, o, h, r, c, t, n);
                        i = i.concat(f), t.bezierReflectionPoint = [r + (r - o), c + (c - h)]
                    }
                    break
                }
                case "Q":
                case "q": {
                    const s = "q" === e.key;
                    if (e.data.length >= 4) {
                        let a = +e.data[0],
                            o = +e.data[1],
                            h = +e.data[2],
                            r = +e.data[3];
                        s && (a += t.x, h += t.x, o += t.y, r += t.y);
                        const c = 1 * (1 + .2 * n.roughness),
                            l = 1.5 * (1 + .22 * n.roughness);
                        i.push({
                            op: "move",
                            data: [t.x + z(c, n), t.y + z(c, n)]
                        });
                        let u = [h + z(c, n), r + z(c, n)];
                        i.push({
                            op: "qcurveTo",
                            data: [a + z(c, n), o + z(c, n), u[0], u[1]]
                        }), i.push({
                            op: "move",
                            data: [t.x + z(l, n), t.y + z(l, n)]
                        }), u = [h + z(l, n), r + z(l, n)], i.push({
                            op: "qcurveTo",
                            data: [a + z(l, n), o + z(l, n), u[0], u[1]]
                        }), t.setPosition(u[0], u[1]), t.quadReflectionPoint = [h + (h - a), r + (r - o)]
                    }
                    break
                }
                case "T":
                case "t": {
                    const a = "t" === e.key;
                    if (e.data.length >= 2) {
                        let o = +e.data[0],
                            h = +e.data[1];
                        a && (o += t.x, h += t.y);
                        let r = o,
                            c = h;
                        const l = s ? s.key : "";
                        let u = null;
                        "q" !== l && "Q" !== l && "t" !== l && "T" !== l || (u = t.quadReflectionPoint), u && (r = u[0], c = u[1]);
                        const p = 1 * (1 + .2 * n.roughness),
                            d = 1.5 * (1 + .22 * n.roughness);
                        i.push({
                            op: "move",
                            data: [t.x + z(p, n), t.y + z(p, n)]
                        });
                        let f = [o + z(p, n), h + z(p, n)];
                        i.push({
                            op: "qcurveTo",
                            data: [r + z(p, n), c + z(p, n), f[0], f[1]]
                        }), i.push({
                            op: "move",
                            data: [t.x + z(d, n), t.y + z(d, n)]
                        }), f = [o + z(d, n), h + z(d, n)], i.push({
                            op: "qcurveTo",
                            data: [r + z(d, n), c + z(d, n), f[0], f[1]]
                        }), t.setPosition(f[0], f[1]), t.quadReflectionPoint = [o + (o - r), h + (h - c)]
                    }
                    break
                }
                case "A":
                case "a": {
                    const s = "a" === e.key;
                    if (e.data.length >= 7) {
                        const a = +e.data[0],
                            o = +e.data[1],
                            r = +e.data[2],
                            c = +e.data[3],
                            l = +e.data[4];
                        let u = +e.data[5],
                            p = +e.data[6];
                        if (s && (u += t.x, p += t.y), u === t.x && p === t.y) break;
                        if (0 === a || 0 === o) i = i.concat(A(t.x, t.y, u, p, n)), t.setPosition(u, p);
                        else
                            for (let e = 0; e < 1; e++) {
                                const e = new h([t.x, t.y], [u, p], [a, o], r, !!c, !!l);
                                let s = e.getNextSegment();
                                for (; s;) {
                                    const a = q(s.cp1[0], s.cp1[1], s.cp2[0], s.cp2[1], s.to[0], s.to[1], t, n);
                                    i = i.concat(a), s = e.getNextSegment()
                                }
                            }
                    }
                    break
                }
            }
            return i
        }
        const N = "undefined" != typeof self,
            L = "none";
        class B {
            constructor(t, e) {
                this.defaultOptions = {
                    maxRandomnessOffset: 2,
                    roughness: 1,
                    bowing: 1,
                    stroke: "#000",
                    strokeWidth: 1,
                    curveTightness: 0,
                    curveFitting: .95,
                    curveStepCount: 9,
                    fillStyle: "hachure",
                    fillWeight: -1,
                    hachureAngle: -41,
                    hachureGap: -1,
                    dashOffset: -1,
                    dashGap: -1,
                    zigzagOffset: -1,
                    seed: 0,
                    roughnessGain: 1
                }, this.config = t || {}, this.surface = e, this.config.options && (this.defaultOptions = this._options(this.config.options))
            }
            static newSeed() {
                return Math.floor(Math.random() * 2 ** 31)
            }
            _options(t) {
                return t ? Object.assign({}, this.defaultOptions, t) : this.defaultOptions
            }
            _drawable(t, e, s) {
                return {
                    shape: t,
                    sets: e || [],
                    options: s || this.defaultOptions
                }
            }
            line(t, e, s, n, i) {
                const a = this._options(i);
                return this._drawable("line", [x(t, e, s, n, a)], a)
            }
            rectangle(t, e, s, n, i) {
                const a = this._options(i),
                    o = [],
                    h = k(t, e, s, n, a);
                if (a.fill) {
                    const i = [
                        [t, e],
                        [t + s, e],
                        [t + s, e + n],
                        [t, e + n]
                    ];
                    "solid" === a.fillStyle ? o.push(S(i, a)) : o.push(O(i, a))
                }
                return a.stroke !== L && o.push(h), this._drawable("rectangle", o, a)
            }
            ellipse(t, e, s, n, i) {
                const a = this._options(i),
                    o = [],
                    h = P(s, n, a),
                    r = w(t, e, a, h);
                if (a.fill)
                    if ("solid" === a.fillStyle) {
                        const s = w(t, e, a, h).opset;
                        s.type = "fillPath", o.push(s)
                    } else o.push(O(r.estimatedPoints, a));
                return a.stroke !== L && o.push(r.opset), this._drawable("ellipse", o, a)
            }
            circle(t, e, s, n) {
                const i = this.ellipse(t, e, s, s, n);
                return i.shape = "circle", i
            }
            linearPath(t, e) {
                const s = this._options(e);
                return this._drawable("linearPath", [m(t, !1, s)], s)
            }
            arc(t, e, s, n, i, a, o = !1, h) {
                const r = this._options(h),
                    c = [],
                    l = v(t, e, s, n, i, a, o, !0, r);
                if (o && r.fill)
                    if ("solid" === r.fillStyle) {
                        const o = v(t, e, s, n, i, a, !0, !1, r);
                        o.type = "fillPath", c.push(o)
                    } else c.push(function(t, e, s, n, i, a, o) {
                        const h = t,
                            r = e;
                        let c = Math.abs(s / 2),
                            l = Math.abs(n / 2);
                        c += z(.01 * c, o), l += z(.01 * l, o);
                        let u = i,
                            p = a;
                        for (; u < 0;) u += 2 * Math.PI, p += 2 * Math.PI;
                        p - u > 2 * Math.PI && (u = 0, p = 2 * Math.PI);
                        const d = (p - u) / o.curveStepCount,
                            f = [];
                        for (let g = u; g <= p; g += d) f.push([h + c * Math.cos(g), r + l * Math.sin(g)]);
                        return f.push([h + c * Math.cos(p), r + l * Math.sin(p)]), f.push([h, r]), O(f, o)
                    }(t, e, s, n, i, a, r));
                return r.stroke !== L && c.push(l), this._drawable("arc", c, r)
            }
            curve(t, e) {
                const s = this._options(e);
                return this._drawable("curve", [b(t, s)], s)
            }
            polygon(t, e) {
                const s = this._options(e),
                    n = [],
                    i = m(t, !0, s);
                return s.fill && ("solid" === s.fillStyle ? n.push(S(t, s)) : n.push(O(t, s))), s.stroke !== L && n.push(i), this._drawable("polygon", n, s)
            }
            path(t, e) {
                const s = this._options(e),
                    n = [];
                if (!t) return this._drawable("path", n, s);
                const i = function(t, e) {
                    t = (t || "").replace(/\n/g, " ").replace(/(-\s)/g, "-").replace("/(ss)/g", " ");
                    let s = new o(t);
                    if (e.simplification) {
                        const t = new r(s.linearPoints, s.closed).fit(e.simplification);
                        s = new o(t)
                    }
                    let n = [];
                    const i = s.segments || [];
                    for (let a = 0; a < i.length; a++) {
                        const t = $(s, i[a], a > 0 ? i[a - 1] : null, e);
                        t && t.length && (n = n.concat(t))
                    }
                    return {
                        type: "path",
                        ops: n
                    }
                }(t, s);
                if (s.fill)
                    if ("solid" === s.fillStyle) {
                        const e = {
                            type: "path2Dfill",
                            path: t,
                            ops: []
                        };
                        n.push(e)
                    } else {
                        const e = this.computePathSize(t),
                            i = O([
                                [0, 0],
                                [e[0], 0],
                                [e[0], e[1]],
                                [0, e[1]]
                            ], s);
                        i.type = "path2Dpattern", i.size = e, i.path = t, n.push(i)
                    } return s.stroke !== L && n.push(i), this._drawable("path", n, s)
            }
            computePathSize(e) {
                let s = [0, 0];
                if (N && self.document) try {
                    const n = self.document.createElementNS(t, "svg");
                    n.setAttribute("width", "0"), n.setAttribute("height", "0");
                    const i = self.document.createElementNS(t, "path");
                    i.setAttribute("d", e), n.appendChild(i), self.document.body.appendChild(n);
                    const a = i.getBBox();
                    a && (s[0] = a.width || 0, s[1] = a.height || 0), self.document.body.removeChild(n)
                } catch (t) {}
                const n = this.getCanvasSize();
                return s[0] * s[1] || (s = n), s
            }
            getCanvasSize() {
                const t = t => t && "object" == typeof t && t.baseVal && t.baseVal.value ? t.baseVal.value : t || 100;
                return this.surface ? [t(this.surface.width), t(this.surface.height)] : [100, 100]
            }
            opsToPath(t) {
                let e = "";
                for (const s of t.ops) {
                    const t = s.data;
                    switch (s.op) {
                        case "move":
                            e += `M${t[0]} ${t[1]} `;
                            break;
                        case "bcurveTo":
                            e += `C${t[0]} ${t[1]}, ${t[2]} ${t[3]}, ${t[4]} ${t[5]} `;
                            break;
                        case "qcurveTo":
                            e += `Q${t[0]} ${t[1]}, ${t[2]} ${t[3]} `;
                            break;
                        case "lineTo":
                            e += `L${t[0]} ${t[1]} `
                    }
                }
                return e.trim()
            }
            toPaths(t) {
                const e = t.sets || [],
                    s = t.options || this.defaultOptions,
                    n = [];
                for (const i of e) {
                    let t = null;
                    switch (i.type) {
                        case "path":
                            t = {
                                d: this.opsToPath(i),
                                stroke: s.stroke,
                                strokeWidth: s.strokeWidth,
                                fill: L
                            };
                            break;
                        case "fillPath":
                            t = {
                                d: this.opsToPath(i),
                                stroke: L,
                                strokeWidth: 0,
                                fill: s.fill || L
                            };
                            break;
                        case "fillSketch":
                            t = this.fillSketch(i, s);
                            break;
                        case "path2Dfill":
                            t = {
                                d: i.path || "",
                                stroke: L,
                                strokeWidth: 0,
                                fill: s.fill || L
                            };
                            break;
                        case "path2Dpattern": {
                            const e = i.size,
                                n = {
                                    x: 0,
                                    y: 0,
                                    width: 1,
                                    height: 1,
                                    viewBox: `0 0 ${Math.round(e[0])} ${Math.round(e[1])}`,
                                    patternUnits: "objectBoundingBox",
                                    path: this.fillSketch(i, s)
                                };
                            t = {
                                d: i.path,
                                stroke: L,
                                strokeWidth: 0,
                                pattern: n
                            };
                            break
                        }
                    }
                    t && n.push(t)
                }
                return n
            }
            fillSketch(t, e) {
                let s = e.fillWeight;
                return s < 0 && (s = e.strokeWidth / 2), {
                    d: this.opsToPath(t),
                    stroke: e.fill || L,
                    strokeWidth: s,
                    fill: L
                }
            }
        }
        const G = "undefined" != typeof document;
        class j {
            constructor(t, e) {
                this.canvas = t, this.ctx = this.canvas.getContext("2d"), this.gen = new B(e, this.canvas)
            }
            draw(t) {
                const e = t.sets || [],
                    s = t.options || this.getDefaultOptions(),
                    n = this.ctx;
                for (const i of e) switch (i.type) {
                    case "path":
                        n.save(), n.strokeStyle = "none" === s.stroke ? "transparent" : s.stroke, n.lineWidth = s.strokeWidth, this._drawToContext(n, i), n.restore();
                        break;
                    case "fillPath":
                        n.save(), n.fillStyle = s.fill || "", this._drawToContext(n, i), n.restore();
                        break;
                    case "fillSketch":
                        this.fillSketch(n, i, s);
                        break;
                    case "path2Dfill": {
                        this.ctx.save(), this.ctx.fillStyle = s.fill || "";
                        const t = new Path2D(i.path);
                        this.ctx.fill(t), this.ctx.restore();
                        break
                    }
                    case "path2Dpattern": {
                        const t = this.canvas.ownerDocument || G && document;
                        if (t) {
                            const e = i.size,
                                n = t.createElement("canvas"),
                                a = n.getContext("2d"),
                                o = this.computeBBox(i.path);
                            o && (o.width || o.height) ? (n.width = this.canvas.width, n.height = this.canvas.height, a.translate(o.x || 0, o.y || 0)) : (n.width = e[0], n.height = e[1]), this.fillSketch(a, i, s), this.ctx.save(), this.ctx.fillStyle = this.ctx.createPattern(n, "repeat");
                            const h = new Path2D(i.path);
                            this.ctx.fill(h), this.ctx.restore()
                        } else console.error("Pattern fill fail: No defs");
                        break
                    }
                }
            }
            computeBBox(e) {
                if (G) try {
                    const s = document.createElementNS(t, "svg");
                    s.setAttribute("width", "0"), s.setAttribute("height", "0");
                    const n = self.document.createElementNS(t, "path");
                    n.setAttribute("d", e), s.appendChild(n), document.body.appendChild(s);
                    const i = n.getBBox();
                    return document.body.removeChild(s), i
                } catch (t) {}
                return null
            }
            fillSketch(t, e, s) {
                let n = s.fillWeight;
                n < 0 && (n = s.strokeWidth / 2), t.save(), t.strokeStyle = s.fill || "", t.lineWidth = n, this._drawToContext(t, e), t.restore()
            }
            _drawToContext(t, e) {
                t.beginPath();
                for (const s of e.ops) {
                    const e = s.data;
                    switch (s.op) {
                        case "move":
                            t.moveTo(e[0], e[1]);
                            break;
                        case "bcurveTo":
                            t.bezierCurveTo(e[0], e[1], e[2], e[3], e[4], e[5]);
                            break;
                        case "qcurveTo":
                            t.quadraticCurveTo(e[0], e[1], e[2], e[3]);
                            break;
                        case "lineTo":
                            t.lineTo(e[0], e[1])
                    }
                }
                "fillPath" === e.type ? t.fill() : t.stroke()
            }
            get generator() {
                return this.gen
            }
            getDefaultOptions() {
                return this.gen.defaultOptions
            }
            line(t, e, s, n, i) {
                const a = this.gen.line(t, e, s, n, i);
                return this.draw(a), a
            }
            rectangle(t, e, s, n, i) {
                const a = this.gen.rectangle(t, e, s, n, i);
                return this.draw(a), a
            }
            ellipse(t, e, s, n, i) {
                const a = this.gen.ellipse(t, e, s, n, i);
                return this.draw(a), a
            }
            circle(t, e, s, n) {
                const i = this.gen.circle(t, e, s, n);
                return this.draw(i), i
            }
            linearPath(t, e) {
                const s = this.gen.linearPath(t, e);
                return this.draw(s), s
            }
            polygon(t, e) {
                const s = this.gen.polygon(t, e);
                return this.draw(s), s
            }
            arc(t, e, s, n, i, a, o = !1, h) {
                const r = this.gen.arc(t, e, s, n, i, a, o, h);
                return this.draw(r), r
            }
            curve(t, e) {
                const s = this.gen.curve(t, e);
                return this.draw(s), s
            }
            path(t, e) {
                const s = this.gen.path(t, e);
                return this.draw(s), s
            }
        }
        const V = "undefined" != typeof document;
        class Q {
            constructor(t, e) {
                this.svg = t, this.gen = new B(e, this.svg)
            }
            get defs() {
                const e = this.svg.ownerDocument || V && document;
                if (e && !this._defs) {
                    const s = e.createElementNS(t, "defs");
                    this.svg.firstChild ? this.svg.insertBefore(s, this.svg.firstChild) : this.svg.appendChild(s), this._defs = s
                }
                return this._defs || null
            }
            draw(e) {
                const s = e.sets || [],
                    n = e.options || this.getDefaultOptions(),
                    i = this.svg.ownerDocument || window.document,
                    a = i.createElementNS(t, "g");
                for (const o of s) {
                    let e = null;
                    switch (o.type) {
                        case "path":
                            (e = i.createElementNS(t, "path")).setAttribute("d", this.opsToPath(o)), e.style.stroke = n.stroke, e.style.strokeWidth = n.strokeWidth + "", e.style.fill = "none";
                            break;
                        case "fillPath":
                            (e = i.createElementNS(t, "path")).setAttribute("d", this.opsToPath(o)), e.style.stroke = "none", e.style.strokeWidth = "0", e.style.fill = n.fill || "";
                            break;
                        case "fillSketch":
                            e = this.fillSketch(i, o, n);
                            break;
                        case "path2Dfill":
                            (e = i.createElementNS(t, "path")).setAttribute("d", o.path || ""), e.style.stroke = "none", e.style.strokeWidth = "0", e.style.fill = n.fill || "";
                            break;
                        case "path2Dpattern":
                            if (this.defs) {
                                const s = o.size,
                                    a = i.createElementNS(t, "pattern"),
                                    h = `rough-${Math.floor(Math.random()*(Number.MAX_SAFE_INTEGER||999999))}`;
                                a.setAttribute("id", h), a.setAttribute("x", "0"), a.setAttribute("y", "0"), a.setAttribute("width", "1"), a.setAttribute("height", "1"), a.setAttribute("height", "1"), a.setAttribute("viewBox", `0 0 ${Math.round(s[0])} ${Math.round(s[1])}`), a.setAttribute("patternUnits", "objectBoundingBox");
                                const r = this.fillSketch(i, o, n);
                                a.appendChild(r), this.defs.appendChild(a), (e = i.createElementNS(t, "path")).setAttribute("d", o.path || ""), e.style.stroke = "none", e.style.strokeWidth = "0", e.style.fill = `url(#${h})`
                            } else console.error("Pattern fill fail: No defs")
                    }
                    e && a.appendChild(e)
                }
                return a
            }
            fillSketch(e, s, n) {
                let i = n.fillWeight;
                i < 0 && (i = n.strokeWidth / 2);
                const a = e.createElementNS(t, "path");
                return a.setAttribute("d", this.opsToPath(s)), a.style.stroke = n.fill || "", a.style.strokeWidth = i + "", a.style.fill = "none", a
            }
            get generator() {
                return this.gen
            }
            getDefaultOptions() {
                return this.gen.defaultOptions
            }
            opsToPath(t) {
                return this.gen.opsToPath(t)
            }
            line(t, e, s, n, i) {
                const a = this.gen.line(t, e, s, n, i);
                return this.draw(a)
            }
            rectangle(t, e, s, n, i) {
                const a = this.gen.rectangle(t, e, s, n, i);
                return this.draw(a)
            }
            ellipse(t, e, s, n, i) {
                const a = this.gen.ellipse(t, e, s, n, i);
                return this.draw(a)
            }
            circle(t, e, s, n) {
                const i = this.gen.circle(t, e, s, n);
                return this.draw(i)
            }
            linearPath(t, e) {
                const s = this.gen.linearPath(t, e);
                return this.draw(s)
            }
            polygon(t, e) {
                const s = this.gen.polygon(t, e);
                return this.draw(s)
            }
            arc(t, e, s, n, i, a, o = !1, h) {
                const r = this.gen.arc(t, e, s, n, i, a, o, h);
                return this.draw(r)
            }
            curve(t, e) {
                const s = this.gen.curve(t, e);
                return this.draw(s)
            }
            path(t, e) {
                const s = this.gen.path(t, e);
                return this.draw(s)
            }
        }
        var U = {
                canvas: (t, e) => new j(t, e),
                svg: (t, e) => new Q(t, e),
                generator: (t, e) => new B(t, e),
                newSeed: () => B.newSeed()
            },
            Z = U;
        exports.default = Z;
    }, {}],
    "ZEnN": [function(require, module, exports) {
        var t = "Expected a function",
            r = "__lodash_hash_undefined__",
            n = 1 / 0,
            e = "[object Function]",
            o = "[object GeneratorFunction]",
            i = "[object Symbol]",
            u = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            a = /^\w*$/,
            c = /^\./,
            f = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            l = /[\\^$.*+?()[\]{}|]/g,
            s = /\\(\\)?/g,
            p = /^\[object .+?Constructor\]$/,
            _ = "object" == typeof global && global && global.Object === Object && global,
            h = "object" == typeof self && self && self.Object === Object && self,
            y = _ || h || Function("return this")();

        function v(t, r) {
            return null == t ? void 0 : t[r]
        }

        function d(t) {
            var r = !1;
            if (null != t && "function" != typeof t.toString) try {
                r = !!(t + "")
            } catch (n) {}
            return r
        }
        var g = Array.prototype,
            b = Function.prototype,
            j = Object.prototype,
            m = y["__core-js_shared__"],
            O = function() {
                var t = /[^.]+$/.exec(m && m.keys && m.keys.IE_PROTO || "");
                return t ? "Symbol(src)_1." + t : ""
            }(),
            w = b.toString,
            $ = j.hasOwnProperty,
            S = j.toString,
            x = RegExp("^" + w.call($).replace(l, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            E = y.Symbol,
            F = g.splice,
            A = et(y, "Map"),
            C = et(Object, "create"),
            P = E ? E.prototype : void 0,
            k = P ? P.toString : void 0;

        function R(t) {
            var r = -1,
                n = t ? t.length : 0;
            for (this.clear(); ++r < n;) {
                var e = t[r];
                this.set(e[0], e[1])
            }
        }

        function T() {
            this.__data__ = C ? C(null) : {}
        }

        function G(t) {
            return this.has(t) && delete this.__data__[t]
        }

        function I(t) {
            var n = this.__data__;
            if (C) {
                var e = n[t];
                return e === r ? void 0 : e
            }
            return $.call(n, t) ? n[t] : void 0
        }

        function M(t) {
            var r = this.__data__;
            return C ? void 0 !== r[t] : $.call(r, t)
        }

        function q(t, n) {
            return this.__data__[t] = C && void 0 === n ? r : n, this
        }

        function z(t) {
            var r = -1,
                n = t ? t.length : 0;
            for (this.clear(); ++r < n;) {
                var e = t[r];
                this.set(e[0], e[1])
            }
        }

        function B() {
            this.__data__ = []
        }

        function D(t) {
            var r = this.__data__,
                n = X(r, t);
            return !(n < 0) && (n == r.length - 1 ? r.pop() : F.call(r, n, 1), !0)
        }

        function H(t) {
            var r = this.__data__,
                n = X(r, t);
            return n < 0 ? void 0 : r[n][1]
        }

        function J(t) {
            return X(this.__data__, t) > -1
        }

        function K(t, r) {
            var n = this.__data__,
                e = X(n, t);
            return e < 0 ? n.push([t, r]) : n[e][1] = r, this
        }

        function L(t) {
            var r = -1,
                n = t ? t.length : 0;
            for (this.clear(); ++r < n;) {
                var e = t[r];
                this.set(e[0], e[1])
            }
        }

        function N() {
            this.__data__ = {
                hash: new R,
                map: new(A || z),
                string: new R
            }
        }

        function Q(t) {
            return nt(this, t).delete(t)
        }

        function U(t) {
            return nt(this, t).get(t)
        }

        function V(t) {
            return nt(this, t).has(t)
        }

        function W(t, r) {
            return nt(this, t).set(t, r), this
        }

        function X(t, r) {
            for (var n = t.length; n--;)
                if (st(t[n][0], r)) return n;
            return -1
        }

        function Y(t, r) {
            for (var n = 0, e = (r = ot(r, t) ? [r] : rt(r)).length; null != t && n < e;) t = t[ct(r[n++])];
            return n && n == e ? t : void 0
        }

        function Z(t) {
            return !(!ht(t) || ut(t)) && (_t(t) || d(t) ? x : p).test(ft(t))
        }

        function tt(t) {
            if ("string" == typeof t) return t;
            if (vt(t)) return k ? k.call(t) : "";
            var r = t + "";
            return "0" == r && 1 / t == -n ? "-0" : r
        }

        function rt(t) {
            return pt(t) ? t : at(t)
        }

        function nt(t, r) {
            var n = t.__data__;
            return it(r) ? n["string" == typeof r ? "string" : "hash"] : n.map
        }

        function et(t, r) {
            var n = v(t, r);
            return Z(n) ? n : void 0
        }

        function ot(t, r) {
            if (pt(t)) return !1;
            var n = typeof t;
            return !("number" != n && "symbol" != n && "boolean" != n && null != t && !vt(t)) || (a.test(t) || !u.test(t) || null != r && t in Object(r))
        }

        function it(t) {
            var r = typeof t;
            return "string" == r || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== t : null === t
        }

        function ut(t) {
            return !!O && O in t
        }
        R.prototype.clear = T, R.prototype.delete = G, R.prototype.get = I, R.prototype.has = M, R.prototype.set = q, z.prototype.clear = B, z.prototype.delete = D, z.prototype.get = H, z.prototype.has = J, z.prototype.set = K, L.prototype.clear = N, L.prototype.delete = Q, L.prototype.get = U, L.prototype.has = V, L.prototype.set = W;
        var at = lt(function(t) {
            t = dt(t);
            var r = [];
            return c.test(t) && r.push(""), t.replace(f, function(t, n, e, o) {
                r.push(e ? o.replace(s, "$1") : n || t)
            }), r
        });

        function ct(t) {
            if ("string" == typeof t || vt(t)) return t;
            var r = t + "";
            return "0" == r && 1 / t == -n ? "-0" : r
        }

        function ft(t) {
            if (null != t) {
                try {
                    return w.call(t)
                } catch (r) {}
                try {
                    return t + ""
                } catch (r) {}
            }
            return ""
        }

        function lt(r, n) {
            if ("function" != typeof r || n && "function" != typeof n) throw new TypeError(t);
            var e = function() {
                var t = arguments,
                    o = n ? n.apply(this, t) : t[0],
                    i = e.cache;
                if (i.has(o)) return i.get(o);
                var u = r.apply(this, t);
                return e.cache = i.set(o, u), u
            };
            return e.cache = new(lt.Cache || L), e
        }

        function st(t, r) {
            return t === r || t != t && r != r
        }
        lt.Cache = L;
        var pt = Array.isArray;

        function _t(t) {
            var r = ht(t) ? S.call(t) : "";
            return r == e || r == o
        }

        function ht(t) {
            var r = typeof t;
            return !!t && ("object" == r || "function" == r)
        }

        function yt(t) {
            return !!t && "object" == typeof t
        }

        function vt(t) {
            return "symbol" == typeof t || yt(t) && S.call(t) == i
        }

        function dt(t) {
            return null == t ? "" : tt(t)
        }

        function gt(t, r, n) {
            var e = null == t ? void 0 : Y(t, r);
            return void 0 === e ? n : e
        }
        module.exports = gt;
    }, {}],
    "mEik": [function(require, module, exports) {
        const A = A => {
                A.append("defs").append("style").attr("type", "text/css").text("@font-face {\n    font-family: 'gaeguregular';\n    src: url(data:application/font-woff2;charset=utf-8;base64,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) format('woff2'),\n         url(data:application/font-woff;charset=utf-8;base64,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) format('woff');\n    font-weight: normal;\n    font-style: normal;\n}")
            },
            P = A => {
                A.append("defs").append("style").attr("type", "text/css").text("@font-face {\n    font-family: 'indie_flowerregular';\n    src: url(data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAKCMABEAAAABWhAAAKAiAAEAQgAAAAAAAAAAAAAAAAAAAAAAAAAAP0ZGVE0cGh4GYACDSghSCYRlEQgKhY9UhOU7ATYCJAOHFAuDTAAEIAWFGAeFMwyBQj93ZWJmBlv+QXEhOnfPVHLbIGje36iOtjIanLqdSLyYZLaAG0M9bBwGIHN3yP7/PyupjLH90nYAQNRM80krRi41ty7mUWbp3KOU7NSIlUcWGgjRFEIUsXBwR4dwMi57GX0rymVyDtw2iN7RpxkD2nJgJRofd/FXsaDHY8iRQ9CQIGheej8wDEHDScjG49ZXWw40uSTNcMTUs7q3LyqcFqn39MP7+19Egvrezc711PWY6eQLvdjX0N8rBhlGWMJp6L6g0abzc+TXZ94h8zd/p/ljO9OtMG7hhZSM7LSvD0+nvn9IUl1T6fqrlMqcqcZsXjbfYF1HJ5vP/2/u84UnM+HJZ3xLlF21BXRErrLCV7gqPTkV5itRYa6Q8f+zaV/VjHqm7fn2qEtGluUeC1rkMsr0CTBIFjDibEM++b3vlTzndOSFjCiJCDW7w3/b+seEwZoB2WhY3GLvIIOse4wEBxSQqgGpGSpFokx0caPxhvXir/ILX3787cf/y/q6g/NyHcQDdLSQNIV7OaP0iKjb3vdNII0nEEMAHHpU0w3ptJppZ1qB7WTh7gxHhMk9c72XxvpSbh1bFprEBpbNYWeBpZknaKr//Sunj1pLssCS9d4aAgYOOnrJbugFgP8vIs69t/Lh0tkCHzujMt7acwmoNd27T5zJxBtC4TIe0AjgAskqAFD1q7Hf/9MxPcLeLPgevyIqe6hNF+vMhUZpDzxqVU2RAGjgYNn2ROrElg5MCgKTBuADCH2pnUL/tIZuUro0QLJA8rkSni4Z2QpV62fzD6QeV6CDXn/vp7y6D24rqKUWVgGJQlAgCOIzxxb/C1E6VN0osWGEJIY3w4e9YyA3fT5tiCkRA5IgCcETTAsFrzhtt/ate2Z2+nL7l9s/sv3bzWz7Ng/m1EeWZVmWhSxkIQtZCCGEMLYxiqIIx7jGcVzHcYjjua7Dd1w3I4ymaZJ6nuuklLl3/pZejGWUpRk7L0YpZXw+O6+MpXkZZey8GOPzeB7fA/Sb5QcYARGVr4AgEL/4i05GgoS4iCMZyciOs5PZyeyEnWUJy3Isx87N8ngcR6l1Pc+zPstRn7U+n5fz0jRN05Ry1vqs521z37dN93nWWuul3jb3+6Vcns/6Uv9/nb7S/5vUcqDl6fNcoL1nd+KkALSV713vXR8IDLG+ZDvGgB0gFJxOY/+06bdqpTYIdohwtZqM52ePoOi+m3iuc4ruA1AIHcQHgTsuryjzf6Zapb8a1F411wGQ1lFr3FmXSzqfuZdfkG6IqmqYqmqSaANK3Q1SgpFpNKhRNyADgNQUIO0+kus0Wq9zTnN2rSFASm9IzuyJ0sx5F54PZy9yJow2NBfdpen9/2v96pv5ioglk9DoIlqKu8xysdmHefyaVB/ms5i+RaxZEpHUdklvGueHBKmxm3baQonERiwQiZV513xtUhiDnJxxn0gNlG+SuwIf/M8D5GsuyeHvgEHtTRFasdlZ1Y5YyQk54t8l7Q9kL54ehdJUt0b1Z8z193DX/ola4gEKKRK68/4Y6xpOr50Zc4ljSeDRR9afsfmNDRm/6jJMMFFxguID5G6RaYYMuZ2m7T/pCrcmayUHYdqS7FzHJHN2QTumvfvGLlCw2wWBBJKQMcH+8oEAEAC4lx1vBeBcZ9FYK5i0/T33QewBuA/AgIDgOQJu82QAlp2bb+LB8YvWFhAxXmavahfzjcM3HwGhA2RB9DcEE4eQT0P+7aAdP4uA2QAw7+c8YHpn2ZPpa14DJ7Hncb7DYQPAMPThD18DBwyjJo/T4+FhS3fqTUUaSA00llanzakR0A35q6ogOIDOivC4zFcH/VFP6ntEtT8W1aI+U2/1+v//741y9nL4sqcslKkSKG3FUv6oPP2kux9TXtvDSWrLJ8ENrC7JM0DjReS4nh+IUKooTtIscaWx8YnJqemZ2ejrjWar3en2+oOJyanpmdnhXErzC0ovLi2vrPLaejBXBl5yD4aH4GHvVWTEdw0d9b+MjeGvENfJV6kb9GvMzcDr7BvBc89OTc8U/uh/rn7py39y5+69+3/25w8e/sVfFktrX/nrv1n/282tr55LnQlHv3fpQ+/Gnj7yYB2PCT30hvYVWLR2aWLDemTrGAB0bT1qNWrs/OOHF5e3d1fXKxyDp88vgIE3D4xpj546afqMmdPmzsOcwdLFOHmaAzAIAM+cXRR9tNDdCGP0OlfuhH0bbZJhhmhnpaX6CZ78LjqYoLFZWpHMM8UuTQ1QX54sx80BtKAPB3wSIEBKJ3L6FFnrHuDaTGhKtNrTO7bn6RVWSmmmAxH6RlTiwEjngDazt+UCK6uZBFOf2mWk5R04uW6MZbutf4M7b2T21P/BvWELvkSRtu6ZuRBV43mJc4w5aOQwMNrQHKf7TSYMUEVDK4fBj7/INFknyUlUHnOwEdqrgd+i+yKwee1M4PI7gL6K0Da0pKSzzFjrTchMDdDaTFvDaokm0Spr2Ak9N6Vk70nEoC2ZUKJWbpldI6WFueupjHDQSpwtKdDWkDbLgYagugRXbMHkkbbRRz5MiwSRl4KW3ur3TGsNvYcuIFcstxMwbJa0IsuOwvRe81gm7Rw0FsRraMyF7RyCKGQuMStseDTyHfRDgArhdPM02cgZRIhK/Fo30wrqWC7SADuM77KxHQsctKA+rTKX3D1d5Rh1BDQ0RPWFPvITYCpolyqMKVKeI4AbjAOk5O1gGtAjUOSN1g1HhKJwKeg8vBZz9HhuAo7HQDjBGQUBUVWkOIgXYJHzp6s7gmkNVF49J0teMJgzvadTzBHy0pMlBdyYNMPK2snJtIxBmrHARIKqiqusE2Zg141VY6oJS+BjNI5IcRlD+QI1hmI74doZWWqWIlGgnsqNtpPhYGq01P8SP4T/IsddPzAmWH+rfaIJmioKMUl6QZLzzheHM0MwJLUzO5l5scIPA1ExRYG4ykyYgl8jG7scZLrrV8r2yK3eKne4uhq5V1k+o5PsV86Xs6/f8mp2SrqXV8t1vXcy4uwztyqUcvz1iqQtXaV/JV0SXA6d3tCjPzwuNhQ+HiL7FOdAEgVNL5y3WrquvSxL4ZuZYXBuWSh0PpXcOb/YMbpH7lvuPFcjjWWpAX3KPvUEv2ZReE5g/0Z49eGlh7Sv+1AUpCh9y46KUeGz+SNJlQANNkl/P0WhXWPFXWmXlnV3RaFBP+L3zy+d0+buuXcuCq8wyeZtW2rTU3a7isdSqauWKqjiUTjwpLDUgAaboHsUBVUgxihOX+rTc92+KBzRj7WjfeGdsFZtz0hS1WVZEqJHLAq/Fy3/r0e6DFRl8PRbqyvlr+cgjy8sY3abGoDG+EjSgT//IkTI6dcVDdlSFoCmOoisRECIAxB3tI25G4EX7dRFOcGpb03NjxM2CwdlnhsDhmBacsAiryXDXN+H9NAnbqJi2xiu3F80xGz7PkRdTyiIfcw5LB9OqUfZ1cMakAOQrysvFaQ5sgDdY3jkCZ807s2vt8cx080lAMiikyL4giPwhAgkJACRBdpLDrrmul97wt3OKbIY4Wzq6YIuI8ojcQThG9dt0oJYhBkbbeuF5n0qiCIiPmnwfv4AJU1j88hrAaIsFKCShUklDekHvt1QV3GrOB76YIeckUCjIl5mxKsh7sYh3wvGTfGSzZq8KUbC2U18Q5qmK+6MB1wMVvGpEtjEdFgQ2m62w3dHwdkSiRAhfELUIxzhdeSVZ79CqeSmBmVr8dqowdu6k1xANG6o/4v5TDfvZuqCWGcLIVzf05psk24lIKR6d+6VB4XwURb8D/ezQJqs+TGBxAnDQ2gB+BNvXC63zbGgF0qkPzkDWtNNRZTPBfaWlySdLnYu1JSTVFwqMQDK2raDrZxWt1d+gjlqJbEj4jFW9kBOZ34XYrU17Wjbym+l6UJ6zhlUFJ+fjzC+WKrRAHkwZ8bZtXafPhWgDoIKetZTLgApKZpkc1N1VgDIXOAgkR610kPzvdUTkDR9QqSWy1YTmq7L11qb635MeGPff4MChWKRjzqfgBNzprUxZ8sm0zmcNAGoaBJSU4lH6xjQsgRgfLTVO2dy8TarXNEnLE+GGCwGo+XU67VkeUfx/mzGJYP3ZbDNvC5ecYuOYrXP2+EQhiPKUPwiG4yMmShXTwwMw/R6c07TvQ/GALr7mW7cGSNLWR6nuGJYoXqEXaf+IUl52J0S871Pq5yvT2o6FwkQjXZ73a+wCt9BJaNpapFaUb5OVKsJD5oj/7YY2ogFtt8Zv3erH6GXzaEJQHIc9MiNgfosalWhzylzygOkyqlvLVZZkDmhDOPqPoKwsAoF/zt4uL2gHDEXc+zjXaN1iLTuNdinK5ivhi4HOnsHkpYHpAde7J/+/XJ6VCpJM0ePZGs5hmbUUEwZm+FAEMwyfnvVlz/r+0n4TF1UivzXuk95oo3ZZC1asTfHS1A9hxDmsiyJ7Cw4oeNn2fbaszXE2ZCw1+1pVCHScybosSiY7xaAyTEukHOvQ1NFEm1LJq6GcPZXDnOozSEyF7VeiTntsLxEwRA2LIOuCfR1w3wUMtvegAML2MFDxMJpbtFe4KgfgOUSfxYMY6CKBo2Xx/qYWQm+sSxYgjihACEZnvOy103IF9CZyIarmLlN06eb7jYlQ4TDulEuKrMhFKC1dLTnGmIu9CokK1oahVrewSAicTBA7xYm8lkjOeHJG25fKHY/NLXjuUUnLDmWN53fggFxw5HfVLGb+VEJap5rCs6eTn4/QmwHMgAgtDgXLYHRGk1puF8RjDkDRK1ExoKI7BgziuMZ1O5JfJkypcyFQDdntfL5FAsw254Zd//0jfvpxZTnuq+sv2Lmt4gCbJCztcS8s3/ojVi9OlwXzX7vWhuFJ6u3ZjlYL7Rpa1QRR+ow79dK5gJrY1E4sNNJiAMkIrWeA1HoUHGQ8YUSLap3DV1UME+acTcGDiOgv9xD/xbOMJcAOKj3p7taeXGqX6UTDyzaEMLmfgt3glgvGE6YYkV1GJrSDw/k9XUm6era5a+bLk13l4V56B2ELdwHNfLiKstIxnTG6tO0IkS4jFBRvFx0ON4pBhnBnU4dcs2h6beoMyw40L743GM0suTt5kzJ/KfnCInHYAFiRgsxZrFIJagjDRSBXMkQAPP0Ox4XN64u+4ELG2RpGLXySbX0YfXBCBGhMwjmJOjZhQfVBcgQjb+9gWi540nOItZOOtSrKxYQXVpeJlqas0YswhnY88yoT2RBFMKQc5/NB1RVoBMbzVyzEj1SgWwuJvz+oZkBoOja83DyVXvvY4+T/nt15ZqIEiTvpR4BM3bo8ZfJlsubzpVZOYAlSUoPEbc3/oAYloTMXcjjkzQmVybWp4TIQYj3KM+Gd+d/ZFsxzhlhHhyP8JsiG0o7u8oWE10GHUHt0tHyxuGVfiK9IpKIgsVp5CGGftIoqgNgXV7WZgz9UoEzyrwOsXnX17F+rQMZMmIGxBGi6/WxhfEVm6glqjOfUF3iFhGTVPvWb/u7weBW9dLeMkTjm3VeO7OXkyDqSvY8ZKU6CnuX3LtLRFAIs0m/1YAKKd9BocLCE4keITOB8S7q3fHtaBKQt8lzoz8Q54IbEtyc9QGOjSce27IT5oRxoMaLAEgduBc328Yos7Il6lmUWFrJ7SCIiFDRzDdmU/hunCD2niY7cOukbLNTshcuAjhfABCvRJlM/mJwpjiV4LvQjiU9neBjTYt0dSRafECeCFWSUpqebAS5KkQbz9P9bB+mAq9rZ0vpam8hiQMRhVRydx4NWUp2k1z3+RH6Vz8DOtnbQhr5mYsSHvcIxRZ1IzccxlGh4onb5J6bqLkqJQeTLwoa+WdmgwPb9qVuxKkUwRO+9/wQSqxt64CyeR8V317SmsSAurcT/Fm7EWI07JZ2WcPw/lvkUXhACSUOq4CXOayYhLBxcJjwk5XlcfSQkneaCyj0SU5SeJ7MLaxx9GVcfKD5TDQfA5fsC9QDUdAF+NEsSzL60oovLmgNwERITKkZiVaruoNK3M1dTE4Zc5KbFm+HZWxLdX4jYwOgYeXBbUmP/mjSVJ2TqgYhfXkOALYSoR1JEKIAFezbvmwbJnZT0ZlxeGzfsieWdjxozVSEP400AOMnA5sUm8/6U5sdUDHmF46ZObuZqlGxACDErpDyIqJRwrOIO3q1ai8dg6QtkiQNfKDj+6gj6iVuIhXYO/iyjZTNi0+E6UzqGtsJkbr3gokI4R1GIZ1OIkkNNZvmCDVJ6PN0/QcK4vZQCZP8g6j5MPwvN00qXyXelBwZZteaE5MHEK7WrODapxNLAnhwAzSESpMbul9y0jOEKOGmG/ZzuGK3bn8seoqfgrEtSZd7US/0hJ1OA3UjJnvL6g9MnPbrqjBg/xAPl+IrIiGqWkLEEBoQg6NJZE0mtmgFZ+4xCbw8F/iw5Dx5IFyfvI/NORmX1blf3TpbRoUwpzMZLaSCxQ193cMFhIJP9tjLjwpuY3+1yuxTQByCLHlnh8sYjVrmrYnqEkwuAmAKTwonVKPAuaZPXgUxqVU0tuaTTnLmVSChQZp/xzoGMwyqJuZVkKrwe9L1afq3xq0QRI6S4cneEZVVhVU8yyI2tlUu7CF6OyVLfs6ZTUxFKZHTWLz7xxdpt9sMnLoIbBGziTn0Hyf0sokE1ihPrAziokaSyuVs35GWmD9IBHl6eXeR8ct91BUAoBLx+jQQLXsJD9EpKJbrx7zWjZYycjQl/gRbMxAHxJvVHrKQRyivo+meHwUQFYPgf4pier6e7dNENBKlhO+bzXjFeS0TItEFOaOmqNZXSRKRFcOBR7Ea8XCuOVBNUrBcRIih8PbERtq03IH5/TMnWCI2HSHmTooDwk6fLSfN+zyAKEzVE8JqGOk7bGCOXdznShShhNmqH5gaEdkFAF/FpvOJDBSMA/Us/5hU4A6msFT1r+Yw0u8AA2I8HlQpmFqIhuAuXD6pFxGl5HRl/LckcSSiPYXwhKl8/VYkWiKiUGI/g//JWAXNIj2RrdXmj6ifkiXXK9Clb1uwLNF/lxhfdPqx3PE4jhYicyOIdOwR2HFLlkeTNWuApgh1qASycaGy2QSWZzgFzRU2LmKq43BzrTzQsJUEWBGR36dyEgncq3cVIyLiFfAe6ugx6kGEGr72OCsQ6ZUqOVUtENd8UO9yyr3P3e96uLsHAAnRtTOqWgmBTE7c1DYfpx5s62Eehq+8a6bbV9z4m3pS3Jf7siw2MSVD3nfKa0K6dj2VaITPzZao+zs6n7SKVJlddqGxCoBNsmwCOb0ppYXQhOKcmcPDKnrf5S8/0HzH9TyP4NlhzNnA+N04ihBFpCkBxAsFAA9NR7qPOZP1nxvMtt6nJCcbCKPPbRD1rrIzw2Z1qzI+RR1rqHnY60O8+3Jligdxo/zMKRIRnUk8TU+v6h6iPNhIk6p4qI5iAkzJIWvRcQBJEwBiOWPl8uDyxZGHXBdSkeW2z6qc0RHxcf15DC1Gw4KdHmDTNdslnCWLbjm/HYxxOYxQMwBmcv4kY1WUOiGQrlR5uvRMudfi7oujjTJbr/xLr+0HbhxWhU31iNZ+Vl2jL4gQqxrBk/0zeIm6cmLoVh2i0G6bkyJNqR2dum2iHdY0eBzFx0/yPVG4O44Xg4eaGx5+mE22B+NkeG8UzhBKlAXOAOGX6MoJyBP7Z+lFSmYlrfki2dg4wRCggojZjXdY81VGTc4vurijKJnI5nEfLZMjvtWLlzpa0hJ/Ky5R7leOoaaOiLP+xLR/q0mzAupH871vupPQ2xUvc5ivS/qdtFhdW6mUZFRm0oI0aHqd8JOET0A0QhljyImn25XXv21nAs+iXdH1/9PJqJPejdKpi4IiQF2lbcdd0L1e1/joc9sP8S7m1e2aSr0gC7DxiWGspQJLbundFWxY0O12jbSg1ywVJx6Rc7yHiZTor46mXeHagIclVF9qWQWYBbbasjUYAYERdUdyztUQ1jP7R32pGuLDM8RpNQSzQkMu3t5QuuhnJks6AoBFYLgRPr4zEG0AjIEaddHaqMOYHyhFJQbV7YfRF2SJwaDOiKjUPlGtTZHBgyO6qP71UCmAe1lsJxZyfiASnSdS0nU14JP8OdKWSC33nl14dMIHNzEZ5shWorvkE/S+depwdxMVv8WY39mPi/371wjxmrac8RzDim1rWaPsG4+82iMl0pZLnN+BjDrw/GpqaBOVGHryWaIPkStNohfthOmWwPhInlGbPFN/kq8uRKNk796O3HrvJjqZaXguiyWxOy+9fCaz1zNlDGJCVaXkOCGQBogoWLL/BZzw4tjUWr2barV3kLVguJGrFaUoH3sxInbv7Pw1l9ev1UoBLRoX/sacjmUiRSUpdR4EeTdnvs8+/VStXcV15G4YEMpTRbhRx+/E4kBIpd6YLg/qLLjGydEGcFjFyvnUIc44uguuALEyVjdWoUNDpoDORB+COL36jpnL5pMFuESobg1rX75R7mOuRDII6tcfSYvqT2A2AffLEgtAfFEG6xEoKLzG7a2v9pnYiX5d5zaIiYCkafRPBiYvKPWKcqcMOFhP/avhNFB53Xm0QPPNatkEVCvVk0r2Z2Z7P0WecY0yp3cPJ2oQ9ZaHdhFQ2zy3LFW5hyHQussptjBWtFlZ6O6XGhsAlkEv2FKVk5ZAxta5UPMlflci5gMPiYUPck1HNRPjQrmRwZxjJZtcxrflLhYgu2osS3Wh/Tgpp4YLqZXYkb+9m+ji7hxO8gum/r7AdnR9Fx1i7YGvtWIIrjwXP+0OE9fWABERM8eiCnLLlrgghAeuCcVSLoJ3pDYDcWECZO9KnFjxk6fRm1ZE7Cywdyf7sV7cmzaHUe/iMKNtmI/MksScnLzKx2IOLn7dVXsHgPesl/+E5xYx+74C0ZueSJpfGHkeKfOtjLW5NhpeO11nCg0cA+BmPp15TsH0qd3sRlH9CEORQsxJEO1YRqfZhNsvubvfLnHUhiMx1zhrg/o6D1sDItLUIhOPSd3g6rJDb2xi6bLc5rxFIV1smSufsLJuXveK2kV3dTRbvd4tFRy0hSQxA/ce5UUSaion01G5gZ+ubnhjlxELF8L6vYGbDKNrXUWszM63qF2n+1NnVsKazZ1ZdqLhtImIlkhdLGmrVfos1//G9vAWCaT5tVY5YuPbCTOTY0+71SDQ+e/cxXcZ5MnN2yZb+vSbXD/a9Uq0wZmT3UdzHO1mRvHc6Fju/VEaWbHOrwPvb0cO2/nPaPrXwLadINyzvHRKvjLczIkQObEYQhKAjzM2R2Rh/3GMOJjg7PtHToMQwEm8QyVVzRtKDkMNDfG2zzKVUBwxi1BQb9shKiU98qv2V/GyGGDnXTns+21eu/kxGgDHGSOaejoCKLuV3/a/938Q0Mdse4bPtOP5FrCjsJxPZUHa0fsd19cVNponKrufXxnuCKojsya2MThdmHKCXdVeXWfsRGjTI2JdVKSpOUj0US2+sklCFxuauXU0zQ21+HjcALC4OLZK63Qqzu3msDTi+uPB4Pymp81o7+nRvWjNf/HC5Q/Oq+V4u75rVFhKv1k9drtoGAr+eW02pjeSjY2X/YQiN3MAQBF8LPxa1DHXEV/H4ku3HVnT0dj4afPAgMANHZglBh7ur0XMsfnONVKB6yGsWuaYJMQHmpl52jRF+eOVVbnULsdD7zI9Xm81wwwTu83YzkE0xFdeRj96suh2K8oQDh2Om60OmYm6KDypWo3XGR2JechDyKCeWcVieNS8B8neG7/3yrXFiKPDtlF/wSraqj4TANlZUTaeAS18vvwDD7Yv8yQTMa/6lJ9CJF9aW1Ceyqhy9hj+DPNNxEbv7WwKx5EAmHpPfjHOgCIRdvDjtL5voo+5eRMVB7450qF5Oxi5MPrBeh9SqXnWSNS0yMn3IBZJIt4su98YOyc/uhqChLfpzE9ldXSJhhRY7T+wWJ5nP0m8r/5M+TiUpJ/EektCRXXCbdzMa5wdWzMxWwevnB4XAGYfDghz4O6AU3VOVS0AO8Bj5kKgPfJhu11+/+JSk8fkqaRpS/+ZNle6GrqJtVMblg/2iOiMnIdt091WehcGbqq44RmNmvokqvF8XhsY/F3AQnYXqMQac5wDCxNqNfq0FijknXniY2KERLDlJv2Tv/asol46KtpOFfoawYb9AvAblgMvLh7a+wXW+jRf27bJkE4LKiVbzpR53d6J1aQ8VBKRmDPxiKpQ1VF4urORNjtJLIGvh9RqhXbgsKXVaN+WjlPVmO8t2vZ8O2j3SNC4iK5kE2tofLnMVAf3V/3L5XijFyLJwI/en+z5A/dY1U1mppO/+bk9sSmPFn1e2I8Jgg2EEEKGrojMrbXSZs1KHhGHrO0kFW1/jIjcoarVGSkek1KerfNTJWEJtjEvWqeoPSBtX3eI+iXKYEgqj7wp0qlM8uQzw5UeGxSVuYV3tNfvDJdLiwhRwSRuJEbWMbVM9f6zbWD1amhh+s/byxDMbiV7CZDcbxvM2vr9jffpaLbBhVQnq+gXTTTWH1QTAYBGKLRvLpRLAH6IJUASB8BwY4fsNlZME8sYyHXe3qty7q2zf/ISfXi2BlI+lHO1+RGrVegmkzefUvDs8obiPrkQUHwj1og6sREfEEDKsild6oVSppDSL4xPfpRBlUUMU+//t4v/b1mjXW5rjhx/x1cXXMWYlYIjPy9TRkY/i32IaUQKVM5Xin6R1+nLi5kllYoWrbzpgvGShRYJbO2AxMPj8vlnCt4DffHFOBfuOSWD1gcWDRU0S+z94xTYdo/pMaYlB3O9wBRcfp2xBcbspTvvCkztq/yrmYrjzoGbKt+38erCnZhM55wfL7jm0kTONxstXnJOMxpeIcry5cXIo8IasiwZdg9XVsbS+LJF+WnTeZdOmL3EdmKJ5nDJlmBi8MZeg+b7G+kQw8v16nsf3+bzkO8PW7mf5bxZ2Izlr2D7dtulKtp0rwgWb+//e4v16Tp/7EPWp8fZs6zPoyi/igWHXd0f0N3p22ZZ/Q7yU3bE/XMW6+sDIsZH/8AqoZH4WGhxTdxgX9pDjsRd05L1cxyNu9rKRvZC37fNa35XJ7QXm/HPCcjcOwaYD2BiE1aLdonlRFMVSjEHTu2gFOtRjDQszboVMTJ4ip6dGVbcaiJ4jCGX/EGJ/YxSDAG7SrwIbio5Wy6kDjB3uZdpyWbDlvboMEuP3ARyx1ijEnpXY/qrInDj7eMdOPcFE4Z2WpmzHdjOw16icf8V38xuES5IgTzzlht3N8iiyv8RFB9H5532XZG/g1wJ+j2LvmBVZjTlwapMeDUJqzIWI8Ry/WisjDIOSn5rx5NqBo4RzphirTrLmPEvWKoVxX63sjZhj+0PK/sQ9Ihv5L4YP85zSk0kdb1wZ2e6d4+8XI/yNgilzSFL1J1+oMrynoyutXfX2vyOX+pfXpjZzcdkY34q234K67fuqozNw+UvpxeE6xUp0p/TGqu3xCF9ykCar79WrALiuvqWnSLicK8dBaTzlV03R3F8kzexzMh2I+zwJ6HERmL23RsyF69Mad5fZSJzVwLuo4KRUKHE1aqpU00LZqWA1aHa0PyZw+OS2sEHX1flZc/IYSu3qxfNbKl061Ud+cDFLrhh4oDh66+VkXUZuv64VLIuo1771k4WZi6k5Y/9n0+ok8d+XV44eOyBybmDUk/pqxyjP7tVmc+PnTOLLAgTVR/eCPWAIayRxaRuv5R24tf0lxVCDsXUjvKD9JQ011quaf5BWB9ObBv4CGUyivAJBNoVeJwZ5pTL4uBYXAKGPDZEJv5LFgxZaZIjkrrWypWQXe0DRWLd2sWHJJs1ay9uSTNf5bceWDBx3mWLm7ApQeXOeD7zldN6cZJAS1Ds8tQ98/HVVMGp54pSSFkDIi36uVFGGe4xwn/fNv6M4SdbuCXBRWb7Xv3QjxSfieMK2E2NOYaQP2QJCD+WYXuYCv7rgK/q/T5FiDh0zYASbiO1ZTeDwHAAcPLazlKT3abOb7/HRm/6jfRHVnk0CIZcieaECpHN/Kimu+5VLWcesjzvObCMAqY5yAqNT9L+HPxFZqRQZ1xdozMYTgKF5xzJajLg/TJPyPQ6y5rdXeBdixLOliby23oPtWvr7RmsA/59baWbEnG3n3OGpXYPhsOQoZ1cD4WpSXZSwhNyY6LpCVOU0w5yqAY9x8Gh/2YlSvFwA5Rpe6FtLfLy45d7LMH+jdoV+zF3TVVX3gyqLs4bvnnP6Vp1s4AHFsDVj4vmgDgN1DWYpAoD5dfXlNOliiKwB/z0jZOnrgmu2tm0XHNizDOJpxCzawvVOtO2EKIzOAexqGCUTGmQWBjTor4JpRPoJJy8RzqsPVlLp4AaRt0yimA4AYaB0PeJp52UOikvspMUhcvl0mf5KalVgqA+3Fs43W+V7U+ocs3aDlHQmEqtgByw1OI0SXssVw3K1HRKDAiF0qOgQyws3J4kgOStbZNMBpUmy8pnieQOcbDZ6gVYf1ejTSPVzmuATHEYxufnAUClUQO9WroXEAJiCEpVCBCQvUC9MA4jJco9Kf658QWRXjfqXUv76HU7sGPgFrAqCmvmuUWLXFNqBozCELUhBXHuWlItfJ8S7jSpgKGnmrK+pHixbnstaXITKei+KNXp5ACgVjUIdU+MnzUckfYX57Q+e+bajcYwCkN6TU1eJoZPwhkg4gA0dRphKeE87Y4dEKvFPd6rLG5wCCJkyE3MWtOX3cJMwG4XKuq0YkBZpwGWqXqAM5gEBIYGXF0XAhv1Cas0SWQ2JRg/cxyor9eJC2epQNDDj313/VffRaHeg5rDiBupQkoJLzgkMO4dqunYAnEQHS/57CF/NEiGXIvftRnWihRhP1glTvZTjnqFNHlrz6LXQovmkFMUXXQA1SSRIwtkDqWMKvu+Xa3O8hPCTOyFMaeelGSYxGEGICmbHshv5c3AkSEDw/mXWsUis1ltFkOHinQw53TRbHz/u6MF2r0seCkWjYERT5fpnBAvX2yJRPCNk76eoOQPg/T+S52hBBrs7uuiJSTUTZScqoB/u7yOqRF3Q6N5vbbotOYKjspHna0Dc8Nrk4+vfv/qEjdHkHJpkTBIgR7s3Hgzv4Xm2pg5KBabwuZ9mf0Fm35//kPNWsZF63TU42/v6PL7nD6B7rrsyAyFOfeVLh/N8HChvVF3lnZ04YIn4HB2aYrj7vouLOwM8JGOL5ELb0MeMLep20rG2NzaCGgqIlASCjdLl9ezs8ew3AZPpZoH8bAYUIIMYASsSi/rFeFaq3+LlcDBi/KlLATJ9c7iUqtmZ2KivLM1sagNEDjj3xUDaqmpE/eTAXSOV5ShT33bCAjruPLhfOx8L6AvFoHTkp4pumQ7obWtUtbpjztxp9kIy14ZmeEbekg5zDOE9xXh5JEhsVyVrR/IGbV+NADTAOowgaC13qilkdgjbVMDrvujxal7hUm0HZOHm3Is16TYtNe42FzN8BUkk4osorc7F/vfCKcTSP48jjxXraZFnWt8/XmCmey+q+kUR4V8nA9MuedPjHZOxbPBOLu/kD6pMTvrr0T9dAHJgDkm09vbWUjcCd6LT3LERbllP9clDB3QDYANu4s2xWY1IxcLldChsXk54nSnyc0yIGyuKIXAdtGpzFGqoXcFOQKziAsLEL61lbRCU0o6UN/RZnGKU5nsK1q9eWPIdbrpd9fLoAFuYQNyNVELyw3VOEHS8G1VuLhEOqAU73hGq8+1xQlAmgkpANMZy5s0SRJSScE9uXaqpXhrK4UzRPe1PDGhVYmtW/VCwSq2b2YYoQc4FwIQU4kqe1mbQ4PoM1OZqjaKT2gV6LuRSZ660gQA1NGqXmdsqPSgvpUGjc2PojiKtprZ3JkP4epVs1SIDHWc9DoNUFxQ2LY8Nl01Cvgdiko/FqJjPKXX1bwoM7vcL3vXY+dplAUYADqXNz3j06dnvNbc0drloy5c5jAe7yRfG1pRrIieQo1to6BG2/Sbk1ADGFKu1qOpYacBlyjZP68JPctUESTGw1PqMsPKzU3Lwb3UHlVv/LfBeXfCVn/2lLR12LeYHC+Q1y7QLiKK0PYgF+wedS9lxyeIGzdXvKm0ZzUYlXjlTIZNOa62kPmFbdcBv71vyJVJsrzz2n5G82Y6w8eM21ZoZXYZilfPamBe1EvvNsuhgFGj1QillVFihf4O95h9xC+wAasmvwCoftarRoTCATjSDBzoa5bricsL5dT4qSucgVS9BvVucP6aXXWBZkmJ4no7EN1Juzk2hgdaTLUxMeL393Qs0T4KruzOOG0N3jJq7Lg6TAxkuJkHKjAC5fHKwbiat2nml2DJ1g2TBizrPSRBUgTZNfKM9loXSfhcds+adGZtZ9prnMhpahp5vRlBMqHW6+nYuHehKceTrAmAhJ1PA4RhAYrlMZez1fx8LwzZUMCHZK1dF1wXNKyeaWq84Hc5PBzR3UGFOzNtQqV673yCDC2lh1+y0xl7lO1TDzUpvTPDYUYdkX5+CI0wITFKwypUDIF9LTF3XOIOdmhDXiLmuDh83kNP17R3h1ZWgN6zjU2bMkRH8HB3bxWLs2igx3Zsa9F6kNA7BCHc07Qd7UZlP0Udj5KecePcdovgsPgyBgxi7SBGsySBPTcPXdHFg/DI6HUXP4zmOqeZKXxxCP0MAcS6nBf3Bdx4VRlQHC6pUXjBVow0UBgFooDJxoIsQoglg1Yo3an5TYCdpAAA3xxsqunaUYTFVBPuIji/E9BJ48TjxEcy7NrvStBoNhkoODzghTSYJdNSIORkV6W7x8Fi9n5mJZ+9jRMS0HmsbpHTi8oaoEjt75QstqArGg8GsHBPsEu2Ur993mp7+SmIzTvGT9wkxiex1aZXTo37iFTLwuk2Q+b5VEzSnyAZ1Ukdbu4mIgje3TxyxRBRnfgIEPprYYkYr1qAloCyueOCTXqDvHuPfiRS/bzLvt6iWSpl6qR1wsBi2qKoT5aNcfejC4fmqq5Qd7ZiAA5cq5zTOETKvoAigB8kSeKsKAFGwCyw+qjS40MiMAqxuXJrlkGVQqmrDyIiGIR66vLbaGgAzTP976xsvTO2giTT9hWG9utc23LDTAAI16M961VHkGCmts82aGXhGdgIGrQHE10eHqQD7X3tgRgS6LykcS/t6A+C8UGGRU6EuBHQ7PBeCh4XwP891JZM0DFouC/s8sd6Qn1KnNoitqG194hCVf1mR10tAWah+ScrydUYOk3HAp6LHNes9S0/77AXeK2OZUM0btbsXq/bzuTTf9MyYcs1q3RcCQKBzQooFCsWCB544HDV6Q8dJqK1GLNQpHSIJ12oi1iGGiRwiJtWkt3WqgjNSZyXWbDWHBqHnZBLt3iH5HeI1dKcyfVb7WcmU5OTYDo3kEhyWASh3Gw1nYYalGekoZxQ6CCu7WeXg042zCBOB4jgOOZDKXNhtDbC+1Vbb59mZYKHyhgcQ7N4hogxO9JHuyk2jeXBJWC4ONL6ckxr6QKelBuUHGMNkcHrukLoPPZDqAjrywLKuGMkoXE4BaaB0bYEzEEB8RSVv9fCr+8ldVjxBsPxLJkiooQLCdQPODBKJV0pLRSAA0uGBqDefqxvOyzfWRxte+Yv1Z6UHfxYMUAtMHCamQ4mCdwhbTxoFrS+pFMD1uySp9Y0Whzwj7RlD42Cq4PLZN7lKFV9tfuWs3m2QapaLuNyM4YgnLrrSktCj4VielzkB95OhN+yleaIorbiXzs22q0bzronrTb6svCW5XVt+/TD6cXVxKbn7cG5lvnwHJULRqNul45CaYBuvVCd5FIKF6NOTgac3ObGVinpoweC0sWRoh3Ld6YOvYVsjxfWqHesKY7XqcFekz076/Yn7Cx35bV3oUymZ+l4rw7fxYQ+Gy76/TsbvBYcBBG2rO47PoURnjVDxdJ6OZeMQONMrkuUiJXScyvRe/473ScZ+OfjC1vxXz72oPuouHpjcWv2o+TD12YtM9IMP6KcxnzL4hr5AUBDq5Gq7yyBseBZSIoZaw41B21QqKRiQEIgW8yadreQK6Dv3pgl4rP4huMjaZfchlf2t16hC+nn2tb6g+bGKi/uRZGOfklu9zs++Rc/nKxN4VdUL6dE6rKQGqgGjVp8WZmkElML/ZrDTSnKxLHxhkVL5eWranp8K+soJLbbxMriAnRZO+9eiS6wqSzy8isJ0jvdch+/DyzUP2x4//UrGkSMCxNcmmRRRXMIj/NRhQgtXOvta6c07zU94JfSkZlQOo3Njl33JXjPbMP7IxVhjKcwAmSmNqEkYcnw53+px4PHvuqlc8Nb+pPMrVkKwI3fInXhQNm+2/SP+z36yrblSCfLsJjNBl7hEcoFYXe/GR5fZEoDS0JnYnXUHURJjEJcRwe6euB4D0m39qfoM1lqH1Mf5O5nlxZSRBMhXO/tQTz1alj2cGbNmlJqNh00A3IpwIgPy1OL2MYnhg23Q9PnmVeGJw2T3CQ9bDvWWLKBM+WHp41589BZO55xclIGz/zM8P7jUtNCxhghaHjP8NYfvB9nf/jEjbuBjy5dgB+mJlboUvtXh7Rau9FQr8jbZTjFsgytlN2Y8xRSgeWbI47pfC4bmyHnXB5UkJOeSjtIKHULl9cvFhRHOzgHLiH38FUC1qtQEme8Gy99RhmmD2gQFAJC5bhqXHj6+1LTKLVw3Oqql0MD0P9qO/qYer5KLrgHZ4DfvJw9pydZqF58pLDSBCHFJ6WfmGEFE2iByVELC5BYyW2Ke6OBFX6DuI2mJt3bCGbWSAGpVWrraBXzpefFTfnwlerJgwvDVrCsS5cAMDm/m62EkuMWsBnoVuPYZSMedrjOBoy3jso2r3Zu8xx8y/QWVv2phrUX72uZcWYwbcnIWX7YtvOwRWZ+9oWYsug0Q43NKkGdjt0GNHo9EIJR6eNTECYGim1hqx8J8woRDYenuS2JH0TnnjWS0BqKDPXqJL4ytZU/OHBq6QAaAAgGCPq0F3v1kFSqqIHg89udLZqCuTXfKYUOFUAIOpcAaLP+pfDcDXQ1l7+TLtElux/+oqXh7lHHC5tzAMw4R2baF5PT8ejEwMKJfgeVdoa43huLlQsKe+5NudNwdsG2cnmrRsF1ZXNA6q5e0Y3YwA1V8VsoBILQwEF53dqxSyOg3ynGjf1JhmfbryB46foVJzsKzX7BsteysjffOoYu4Svo8nGxyVwPsFm5bHfOht0AjhSpjKullN2ROUryDeuLyrhcxTjFL0iz7kKH9M9gAr1LVoZRHo1qgJsPKeVi6IVxF1gLqHHdYRHqRCQUg2MIG4p4dV6BcYW8tNvHH4vmTFulY0MYiUIpKvT+3xhwrZqojwZ+cH/1uOe89560LXxIl/CZDrnerlSXypkDstJH3MZXEQwhUCTfEGI5il/uTHZsjRWZQIaX9dnTmVSC48k42KXfI3E0CFBtVrmsQ2sWRv92khIqwnJYusd/QH8DWw5ZIMBcqxRW8UzSF4i7+nB8diid5Cft8NbxTI0y3LoE4LNGqUqXVxw5mELCSCS15GWIWCDBUv/xbY/kya0QtDURjLCRwsqSw//85FKKgAgNU1MhrbKgFXZD4QSawmIYgfI3rPJqa3UED51wm0xNGJmBC08LQja3coaaw2f+3RIBvUgRL5J32MwmGChVbnYqBEIPfZd6CL8ah+olmicV3l2XF5WEpXldl+ZvdklvThtjcVf2vcJbX+6wXYQDEOGLhAnSNWiphP94LEy3R3mada2lmQ2ddJSaPv6W8VvSd7hvnbHxOxpr/VIVklBoDE2jcYSkIONKlkHa5uSxR5JzUiqklguWrDs6abGSfuv71NnTXWfB9fo5f/q+qk1iA2KgwKk+LbtPBpKlUgHQ1CLatxI/Hv3hlQ8RvWM9ISPwUsDl8nGh/peDk7HMQOaIadtp9cRcCXVanqL49lf12ZHorPPV++aRJEfn3JwXaaznZy7VDNLxu2qYtZVmzfI2XW7plslR2tOCDieRJoQn4XlKGbv5iaeO4BkyMpa662FrWQxDP3MzdW2O/Ch/BaigOtEu7KnUKoZXmRgkRsUlWnP6eqtD+aWp1AqxBMKwup+4NRjrxgniWeH7R+rmo0aM8mELluH52g9cW9FCuAfxeu8310JLjuRQwTPT8p5Qa/6npqv01N1S8CitFqVl5j6+MHajzl4HyIVJmIMSUyn1MdFR7rssRELe/OXBdHACXXEsChN4s/zZACOvfiMmcRl25283AUIQdLCBs4+pPaY3ouuZuXvUraHb7jvnl2fTi77F4UtNtN83OLBpb16s+eTyLrlx3Af6Un703lWbeMyseIav6rsmKed4PWuJy3evszsXK0rltZXzL1cThOUa96qpQtVhZFqTKiYjyyUrHIMDLw6njCBgwgRUdXjaOoy427/CbZ1pStEyYKDnhUJQLFQKjwOlinFYqTb+97g7yrxJQmqYJjLdMTxzXTC8z8RVnmVqQZxCaKC/P0PkRM5Pp6DooctINuXOu/PC6VlmePrRymcmZnDKsb2y+2u25rfcE6lCem5iPLddTUvzU5EGuRR0uHg+KhaEO+xDYuXpTQ6nnPV23dLspqN0vjrHTIoxnzdkA7TiXAkbb5lDX+mfAOI8kh5TrStrb8oh+4uNsbrfy83fxiLVESwFcU8IUszyY06RyOTa4Y9SkWdrsof2dYym2LRzlr5iopAQGeRRBfR4tq9vH8My87pF9sXOFMxxeLD/Ejo0jt/23fEvE8mQdGa/QlGJjEZWnEHzbq/91mjlh/rdfCr72rkzv239w++Cv4R/jR9RD4Sw26RZd/jAOXFOuGYSKF1/dUp7yD2VnhIhf37ZrVeAa20y2xFNwkygNk4/Jh5jO3DiufaWKUoNbrFnPnDCqmqo8OH+veP25pSSmlE9z/WL+yRTdN47F09GMJ/oXfPF3/ro3BCdHJRWE1yCYjB2oILh6F0HG4VGDlzRaIztc+qcNvXTSVauH+uw5RaPjx32bLQH1ykfw/e+WsWZiYF74gP89v3CW8a6A1urm9KSrmS9sYh6Iwrni/D+3KaB4sbZRW6Zz/OJ9e3br87YK2WCIXbd+4H/UWQGTpxxirCgBvV4NcdvgLHAZLCgTfLRvwCwXXwNJTbBtpoqFEmhS9gqs+RKB32eZo+cWiM3EQRSi85BL82nuKUVaCkzmaFf6QqIvlAP0TvqmwvM+maPskag9yfBkL7svm25erVRXDEamjofm3WP9nMxmvIgCqFQCFDJGHWyZho9T/qmuh/Q95GF5ew1/yp3J7NwahX8Kh4gVVzwd+j3W/KFbkQh3H5/Wl0ZbJmp8PxhzP3OHVb6LkntzA5Pc7nUAUGOB3NMMlqjFmucGuWf6Mw5gqPiBxZ58rbi9XlrruqyxSdi1V3HTpfQ2ypU4hPyfV8oGiGCAX+4+1IT5gqU0gPOjPkZudb0Sd83YkvYhuuRNZro8SDeeU6jKc6LzY1m8avEJJdzT9KEUQuAfjERngjFJ6x4i+e46vuG5hvWPq/O8kHQenPOMp0m5j5p3bx13SnLzHtFm1MaoVC9r3JjCun8taT05SJK8ciUDiAN1mLryPOWadGLIfhwy2GzfnMp1ylwfNbcWuwUW3r8+y66qBjhwrtl6kAQAjS4XXiZo6+YGg7DZBJncT/FiwHYf8QbjA3kmMu9BI1yHroR2JoWvv+4VGM/oYTdxFrwiesNE3Sqs0ihIyNBbHi31I0gLihUVT4KZ3yrsqQ9yO4t7+nf8Tv6PfOl/AGZJeAUKgFoKZW/JygBBEiAS0aqRAHgc93EhPCIpHbFur4KD4CCHkVmWMZIPCy9Kfcr2ZTDDtSdvRsY7lcsWwFvPJGaWSk8nHkYX/akm+XFfKnsmC8ln9uTw8FMbDqY9Yd0mZCdkMkGoPMzZb8yCqTxOIGjNV4Mj3aHri8c0RWzyAa6hx4imtbhOapZQa4c19T3rXmkNS6ANSlc0lvgKaCubGiosv/URayEdVlynIyyMP+PpuFLPOZmJQJHQnmraYMrze5NrOytlXXNRUwpmI2uAU+GJQN+0IO2OB60PTcfmWhAYJV0dxCiQT9YsEgvX7v32mVp3dI25NDM2/uW4U30I+JbdImd5nHh7CHDrZPMOtLETxELPHQK2A52ncbSOOxMbndJONFEJQje83L13d6OH55BMz6hStnniuXJmP2i5nD2hgoQKpXQoaG5sDHRhsH5VDrD3B54gFCne9pgA8gV8+2BUT7soQxrrThMkbTg9bV7PL1oONaewBv7Y2gUj6B9ImHUm4DnulVuxNggR5N+THF9ybgUD08kBNf/R5K8dgyhCWyWWMRzU0t8s5e2XZmiJt3ZaIBxpI7cpOMzDhwm4JEzEyCR7eTJaXgeRrnaIJXEQ1wltf5dWVhDQJ9q7W39dTk1WvvPXsvThKW0bQwfAKkkHAajfISwDUXRf5C2TsJ3krkl9IaNJjAZ8uyTrtQz5tdHs7dGU25stH388E1XatQ31YRCE/5WFPCC4u0U7KNU6ra3UNgH9cvfW4TGzyP3sJZvHJVWUzNZ+mYvy4bVePTAY+6bxK67V735abZe25u8TPnzjm3xgD7CdvEilr3TduTQbO3s7AZswI6BGAmmfZOdw8e4kH+mZWlMq0b4mBfe7Bt40ZfhselBcbM4OlqkvecMBrjHDY+e3X1S8kDSvR3cKs/dI9/1SIL6AH5rrn8kzef8hfZBx8Vc1SoLzBdLx6azUjyADbbaDP7A+X9ol74breBC2Ehn5nCfKMKE/Mx5793uDBSmTydZM5QQw3vf+37i+jT9jbcR3Y1lGPdBXECAN9Z44RGE8t7LTE0Qb1zKafEsEu+/YDuMxFFX7/BFFzbclhnQNDVAdj8yjoagFgsAaMnXU06xxNMwiI9GJ4gUkuivP153aJ7kdvbraxlMJiVsY6+QKdCbGblMsfb2qs4Me0pNtAGA7u88vnQSnnFMyM4T/T6vChJcFI+CoXZFBYkm8BQZKcg11PV1U3/M50/0RPpuRNfTC3fY1xE1/Tz4EfVCIql4gUZ6KrP0hGs8Eg4ODO7P08vqUiITRNP18M87tJ7JJ51vncXaUocFXt2Uqi5Zhy76/PHO8XoK+MbbzdKBpWvSlpB3mg2hcFUEFyLu69D/wbxnPeZg1b0ilIwEZ4IC5qsi+UYvYPyhKklACSDmGRT5CBkGrzpTxWzuOaAVdinz5DJZ6AH0Rr14k9PzNIrOIR8S5fOEZW5HObhX5akfg+9/Wr/VvHNrg9SVZeZUqhDeM3dZuqSV57Fv0ZTmGhp8luHGN6QtYfsBk66xvoVmp8m7yCKYXjkSdY6y+oZC6qnQRDoWQ4br9gnKZu4Zx3PUX4QY4f6gAbsf1Czr+oFu3lfy/VA+NYJA2vOpDiAqzTf/hVx5u2B4WJlZZb6BRog7r0kPJ+bpdElDkEsLXz4n/Ra/7E6476Sg8FEUvQzVAbZtzaeSOhIBu0xFai2G4ATODJAurLXLiQy5Eq4Epzu2ku4aM5O7rOni9Gg4k1FYAzDCmes32wAwpUgbjb16m8EsrGCEx9KHwqM/q+tO0Yzh5n091YqMTbWhzVurGkRfBdjpetF7RGKBgtSzXY5No0arAtSnakvjcbltU7tKNl8O0Kj3ebkuTBmE9rWkh3IwUtfwWQeRdyXlLJHZrxEEibDs71C94B01YrVGahRTVafUaZzyT2TZK5eSWjhzrO03O6mAVW9pbO4mpHFXITg+RFy9RHjtKMfuG6MWj5u22uv2lI2QudNaLfQiWSRXt/V739+lWrTJl0JZiwlzB9Sou2+46KV595x7npzdr6pAMGRbbwTt+2bp6IaIAiA+m/ywVBl6KSZjie7Y47osl6VzA/1ornuOKRVbFi6wq0uJD7Q399MSHnaTXoYOeN5KrkzF7ztfO7Xo5Ebdi6fjL3VzKSIBDt4vbYg1Bv10yhU8Y6xqd77/VJBvH3q+hU+g/HBLxe9k7+cjH/g+ce9tR24Ynbs55gqPOrP00MBkVcKNZMc6/AIm5VJd1igaEODAheFAqOBJNV2R7icJivFJZ60ObYUP9FUAt3qSvsOts3eoibwoH3uhGrA/qalWTafPm/Wuuh+K99kCFqv7Sx+fCX5QmbrHfMLGspjqwPa7SierH+APsIf3mqG6ZmuWDIE5cGKeSDS07lSBUGoLePNdPirTvpL3X26KR4gT54CHwdI3KmbRAl1gvO1ECa61jlYYcqp78dPnT9UzS/AcEpIA4CkUQAU/h5GtpsL0i5PaNdOwCf0HqH7vk3mjYUGWSnYqk+W/UiQSnS4qRYUoG9E0W85OLLTp3mbWQF/jG8Kz02s2FXhQq9HaYQgGL3X8JVThqHwt4bwiAuy/aoiLM1gBn+USIZ1OQK2EydlurMEIjm4N2emcALZU1QenDaBTSZbRTv3zJtLzdMDynWc5ALjiDSea8vgiNsfwAXjklZfc9GkXz75dFqTRDBPViPRPyVNpwPaYkPjuutBQU62voAGkcZsmTPIVfcNam/yMZAw2xr/Cpe0lXixWDdp6i1ZRDCxAd8FZIGQaJTTP/lIYxx40GJzGS7UCJKQYy1R7+beF7zzUCf3dqZsnf2jR0DoIucUdtZyQUdMxNuDqb2aieNAZ6dAImAcOV5pK8xr9GTkM85lqGg8uSCExwPrtZmO99ejmGK97dhCOwx68Z/AIP0Cf9Uy2z1LTj6u/RXGr65baV0Z7AdwbkZMKF4k5jU2clw9mZGRroXy6vNc+7JvSCnr6E/MGgcDkzWBT2G3fysBks7pKLKEcr7TcCHlrkKZvfFLHIh31VX6KEknFu9zaGHCRISfWVSUSnzI6YFIjKIfnXNwkP+oTUH53t0MkkjUkldjtUPaWIj6ODzkyjegkpK8T+2I5XxsFvYtUdj09vJDcTSdjYx0jnUPmN44A44XAnHNtTPA0tLILmpR0kqBwIpkMeWNUhP6bz5qEop1ZSyDpDsUCsN9jXyhGEslAhuRT+suyEgnkImw0FNhx7i1LPn57Dm/ud4XjtMvfJlQLLVSaDrCu7sZDrEatAkut0hUsTE2IU+pEIhx1D3tYiQzYHXapS+QHGRBnpaL0fBvl/kjSylbNn79abxB8WYKIv12ZDIlscS6hxmMkYWd6auq5ckmxkz+bCk2gwxxmd1BiguKRWBaqDCCcV6Y/b7qo8zgaURlXCNk2Oj4QGcYm7XPM3EDNmCH0HuthQqAICvVBmv4gDwfbqIPNp65ao2GvuKgaPxSL6VXDHnnqCge8PrhyAsNdYTzCsiJR4+3mbLYpxkZxGtabcNzPQa2N7UQQD/myEol0SVEIVeBx0aoAWTSBBhFo3Y9PNisY5tDxH3WF1T2rJknpOWH4odfCK8upDe91kwfHtWbLPpn8KLNiIuHZYHzEP6nG7uqhk96IvNTmsGt9ntGeNt8diYbJFBqm4PCwKq0iERBnL8p92Cw92n4U4yichL2ACsESfvRs2/jBa6FogYr5WNzNDgAqpQKAjveNcltEiqsBNWusEdbvO4zV59JWrp3SkPA8Vp0eIjLt+Rnhrd9a1Rpgxyjev5NWZ4OW802V7RUFkk2BQFcuZJOBL9S8AIMZkLCJGGAZWkSXCAaHKXQolnt+YkquslINdXN8Zd1wtHHL6McXpOSQb3Ks0cC4glpID6io30WF/QhIDbS6zZrS6oK9dXEZ8aZWlGb5FZc31xRDLtYf3NkuTtO2TafZoL+WxoatfFiNgj6gZJVd5BwmqRL3DyAie2AwEB6io34adWG9esfhXGrn0NHBnaUberlFUX6WgEgQhRVqvqRldU/U50ZCxTyaGshJk8duuQulyCJ4szxVm1GO1r9tmHhfNblHaB0gXs+Vn5Nzp3xFmC5wKwV1Elq4Dmk1vgWlSJ8P8RdKAbUHgEsbuW7hV/7Te+2bB9XfPfeBGtUv3oeqejKGO9JNq8ksCACfBieviN5rOEmKVDqduFo51qGr/rfkoxVzwANg6/Mj6MstWyeciyPZKRyrCoRqJOhy8WQbh7OEX+uRlz2a9taPxXikthbDCuAyQAEkECFdDg84Du5SxZNeCtRyyF6mBpatcvAJabAoH6OP14prJ7zxJEpAh7wgYhMh3Kf7K5IFjyQcRUJN6RH1gw47cbPF5gHKEXhPh4v2SWGyVwPubdmczV7UiyNosxg6pFT2J+puFMNIBN+1O7xBkJbi7rgeyeDZntcOJiQyDkUG9FRZrwD5ddIn9I0Ve7A0lKZ8OlswGuyvNZ6WKJnp1Govl3m7wqrQjA13D2BChEuJOY5Lp0U8HvSWt89WXRx5l25kPyXiPlK8ZMNJj6sTfgsAaOSRlEpzasoDwn43FvhO8O2+sLJe8jk3bhBrPlSX8U70vVu463eAaBZNrvVmKYW5OJ4NtX3y5RiyDnrn2SLe3Ot2W8D27LHBpsR6PRzJpo++eld3PEUqCL6kJLdjqdTAPD87yRcMmgFZchBNvmrJpw9HoTnQB1Ti2iOKl+eVlVFI9jRSiDIpKRmM60YoGU6zjEu80L4dOI9AwTmsKs+eKIwv9soKKLyPVWbavTCeyqX8bTOAFrtacZ66LqovLTeYxGdAicwXf796Gtbpyx94Y08LAo9UfAQ+hya2mLoLxmCT4DI/9OSwINer6NFgECVgXu1thpAN1DNKIuqzZFEQnCHJbM8CvMjNBbmwx0Iu6NSe0NGwxOM8SLO4chmO8E1z2AKeZzn/LDt8a3Z1igtEQmOX253qG/2cZMUHK4jSFKgVd0+TGuFl2aHuFBCjLvE71+EspdU6vCrKkrxMxeZTWUkq2sMwCXiwO/lr5Ne8TTef1u6XwWU0jC3M7b3HvPoTs7tQ27Ra91ZuN8kHTnB7nT17M1QltezetpjXNn4Q9WCi6dw8FG1znh8P5NJ8iOEc/MXqXXFzaGkutmF/AmcxOBVO+mZ78sI0ST22k5rKk48LzwiY1PJE+g6KVZni2CQ/506FfIO9ldnBD5+fXotuOAlw/LcDVfW5XYSX4WgCmyUFHiEbiydp0mijccwFeXplK5uE5fWg+1aiAY81EQCzT+L3kvE2FkjAGRQGpVsUACgbnxMEAagS8CIVCTmSV5s/R1pGnxqtCVo3AJnM9C/rQUPlj+68hggF5wZJQP33J76L37q70zXkobjXk2Oo4A++2Ns71CN6sNr43qeLBthRD0ffVhi9fXX1wsrbiPBTTrHkv134zb2stJ1pROVe5LSNPj6fryTdXP1QgZyaVC4OuRODqfnm3FopliHesqMKy4MKhZNdL2+xzmAkFYdDiRBEOiPVUcGvdFha57K8AdkWqj7h6jQZo8+uRj4w2lMrMhr4fJM7kJVl5k8d+oquXsxUpoBJiINQYMhHqjTOmFleL57o9BSSYTruKPAb4dcdiSMpZBZMOkWmHvvINrmkUaKFkDFU9RzHGPLF+mmY9ZHIhkHL9OsoXa0Mklk003dpewdfOjYa3TwH2ckAJOxhc7SJxGOSZ7N9NgpCmPIFq+tZ3mLdv12bD0vWZpv7Jyjehyb7Lw54850cHUSUYD4He0BYDcbPls/i7duMtTKTfHx1ej267hCwnUndOl2Gp1sm6yYj/OrVAYKMgZQBlJo8IF7NKM1d6HmEYB4Mwb4AiEbiXe/ErzFNFwx/mvvpsf9tGJaiIV+qpaNrRLJ7ubB3xKVFRwfN//70jY+zgyYvfTU4eM465HhTHD3ecNaSLe97v6WXXniWT0FaYPDldrH9iSIGlZEbyXUCRdVaNYNRSXbonFV84E8vAr31UtxkCgNB1Cc062waFCAAP1B3mcOf3Mau2LcLlknSC6uVMre4yMjKAEJ57F9kDuu5Rqfyn07NyQy/+dGvWuqCv6OHGwevKJTSwZ5fMbrr33/9G7V7Cf3Jrx9vbsXbruFEqGcZ+NpI7sK/IvKAqU+CE/I/G6vW/8uba3QbYrXV/culb9c5ZBPWXlZJfq6NeEA1edOjhzqHDndgFEx+rUmoFKo+bv/CJ6qbFr+kVy38p4l6t/xt2KTfdMpLPVeRP3ZM3/5NS33R/b9J4Tn2PvDmz+a6W9d/8jCb3/79+JUbhhTQ9Gq3Gx2CX2ztFKZ8aCrk8ZihjoZcQ+Robcydvjm7p+jvIjRgRMXojt2NROGw0w+TRMKHBCA3JFo42vYt5x9bJtr6SFYSFiqF8Ow5PYNtgN8A1/B5lq2szVesAmvQxiup5At+haxk0A3o4SsVGQjz1z1pq1PiYBbMAzmE2DrOgySMQDkWuRg6tKR2jdbWtGbR1PBVrd6UWb3VAz1ctCusa2Ok2dofyPc2qDPRKhRHGE4gAa9qLK7o1JrUwF6OjqGMa4C6txdCEt0B2nYZFeYV74fMPzA3fmLsbeV//Oenv33jnV9BaqXf7RNV11QLxGIvGsUn7Z9rGqdueaU1xpxB/qMXvZrzfuPwfdZaae0AOXJ7+IFkJuKQn9eIsQ44+hB/ezDL0cuxu8l0tA3bAs/SSTmlBQPexHEtQr2DL21PSk7LPH5acvCXiyy1TsNp+kwmCuFLksboubcbf737qW89P15qrZV+0BSlQiasqBhGI/jvkZ8lfsf+pkdSI8uBVciH6vOjxqG8pUaquOI984UyeD96tF0nt9aUBzgVwd5wYs/UPH35mJTExmiv/OjVgEluMXzRcxAQDhqH/tW/2MNZ1W/811/bch7DINK5tLnYba338HDLcEf9L5ouNoNY12Cg56p14q2ipnufVBr+nn/Q0vDpL0+b9Ocb1MfvxEx/ivnYt5/7shNVezCS+n+2YXW4sin2wicaq6G/3fhE5Xs5W+W/HRQpBAqhWHzdmiNuU/+R1Qg3/1c7itS89CmwVqEQKroqrkGvQGi3UqbGsm/9Ffl139cffKi6SdEka9C84rzRij1Tu/ve/srrjWOO4b5/nEuY5Ob6L/r+OSSAwaubV17v5TDN727clKpWjFUN758LW+r/WRxiCQJDhu2aSqx5NN5Q/+e/++nvel6nzI1tvzV6ftnJNL01ePlu/0+uTJCAvPbhyTv0vLb27z+Am26e8JsuEHiP4Z1ftP3nu/TfmutcKskv+0a8MiHdHr2jc/hwF0ZH/qBJ5Lr6YzH/yermP37VoP6jvUOUR75tTtJa/ZUeJISf//nvWGPJ8yElOJe9lzbemHfbNn5aLPR/vQ6+JlQSTQ3TF5Z2jj1Ts/vBgPTVRry5bUL00YSp2mz4kucwALjFnn/3f7nnU2j9VXko2ykexj1271+5my/RnU11V5mR5muyUT702pfN7Z5u+6A82uI5c13UMP1ulVHmaRw2Dzmtn5yJm41fdyg+hDyD58LXZbLln//tHt//a83YXt8TXQYdQ/t//y1TTJa49LUbx6s9pqrqLzFGSe3mtfFq63XzKIN29tneOHjz8M3Lr3eG9NcqVLzj+7+68NUP2hWA8e6OFzPjl+xEtj0G9H2NPLa6+VbL047GnWEHLnUz5QqCAZgqUDGNP3gIMgldzu4zughT02cvFJ8bHrEY4HcCXfrG+cIkt5pWyrljnzOqce43qryhS321A/BAj/69mGlQv3kzyQGuf3/5WrZ3NtSGUU+bJ9zppzqseGlzW29zr9VOKjWvK/5ieZ4o66PX9m0f2Jm5ccg70prJsHj57OX1KPV9uI2Ria9adwIh8B50Aj8EHYVdokV8lCq0jBNSvCh9Z+aNiep5JkutLUBiNdHuCpgEX0UTOIG/21Ij8vKtZqlaredLuxONhzLnwYctoFq3ZwRf3CKf94v4NHhx6MSTAL1FFMv/taWZelX05fz/DV/O1vJiyaF62QylBiKD3Yc1t7Y3MjXWvTFtsG9AbavCBNCVwud7UESJd7mBzrE+1QmzSe60iBbZHPAQqAXgY8Jei9J6L0zi8vYxtijV8MOTtrzv5glP9Q/enKTljXKKqWb4n5PZiowb/sQoDGDdF11Bl/MDsPl7LQeGFZKvklWT97O1DMaRmS73m1i4qUbAtj6WgVDi4/qbMX/x7VavrHNE7isGJBhMwP7gQGM5b2zoAvB6s82w4m5voweC+PqRktHFOn6/VvyMgPt8bbiSqL5s04KOdAmsQnEKD5IEm3YAtzs16CDqOr8H6eq/G4wIKF7s/ftUB/txu6VbRGkL/qYrIWBSK7TUqL6OxNCrHgFn8/PFCUjtQ0FHCwIRmUHD5lTxsLyxvdn88gHmNx+RgCfxc6N+d3rr1Lw+c5YvJ73dx+zsSd6m9fr8gZ0pLadyi+zxdiENbuuOYnnFCS/JFnI75oaTEwb+XEZaf9FXhj7SRELqzOwAjYLzHlvaeUNblvlYhoqDZCRKlG6IG0m1i5aZYFhoAHangWAX5+EmIuEjHlfXKdi1Efr5M5SfOS5n+AnhqIPbF2sH127L2aGzyMrO1/xcxfCTPbQ9mgdwsuJsGPUQVT60NbTk8U7+AonNoaYnBYPUngw9eST4gUHsvR/oUYOb7Uoxu0SKLsez6t9vi6fsYxP81wsgUQSTNCQIwRl4EoyRau/GN68ZZXAe4XfppfOdwkePmQZEDMhNfIOkgrkyvmhZoDwa/R0HgPfBOTeba0Px1hAe22HGrSfupFTvPIdZTu9dPzKYtOe5PO4BYKBLUdqyTHclgd8drw4LBz3BYtEXtXAOcMq7vSXY+wtlPVLrhCw0/RH0hH0qPhE+OuRCuoqWjd+h3UeLOsogmBg10DEM5fyIq0UoH70kDnL+JkNY5KsvDFq9ZhOvGP7lpVXO3+cXT43on6afGVPjs+3C3PHmVstjVcNom5UvputtTZ4xV2FicxlpYz/zJ7iS18hwc83zrPbp+/cV9+/MXj/ki5rJma6csTW65914Lt1AFVzIp4h3PRJWc+NsrH8kw+dQnxalBh3P/JTbECemc9g2YeuCBrxikfiJj7RnDzW7K+Bc18L24fkYQiHExhbj2AXnxAe9IDW5jBlYnnPQVz7nSrn16kLK7XA2BFB9mBf4MhfQBZC6Z7K9lqjlCWhxYM02hWTLkxxlyy803t5IG0e65tJmaz5KnI1Wodh9mBMoAKbJiIHZQT5R9uTG4RVLRIwt9IpMZJbLUwAoyztm38sNZHVNljGbYQEPOmEZ8318Cvj6p8fWuiVdcvOgpB6abMWwu7k75v1qa51FY816NKW5igj3ged36w8KQv9q3jhZOODiUM49dwUhVtMPi5vDTCKLBJkBF6aW6bzSb2QC2O6IAAaePr6aUuuPiYePlHbW2xa8ceR48eMriWrn79VHxAVrXd15/Yew7/q0V9XkEJntHukslrcCMhsUrDK+lrNSntSVMhvz6lKsB3GduuxSbuPmwg4gP5sfkunP5mklX9ARMje5Ujio+zfLil4uLzpOoXMiRyX2jYjTg7GM59XRRUsmhvHR6EsOf6bH4ewLw9Nn1YmUHSmAOWqoze/yhDrRJ1y7V1S5KFZTWPT+vDUjC67gzcggR5bEokqUqHIcGvUsEKkLFPcGuE5kCwL/eiyzcKMw2OrbncRC8gATOpQYHlyKhy5DZGO0IeN9lOTffydkbkGk3fjQ07hllf83K5Nc5PexaNsL5hbpXdWZI6RKLp+l1nMe7olzAj+b0pMqqDIzjZaTlRXWiPDocKI0/V9WJxM/1VNoye0YVKyYW5MpuOeFc4Xq9qtPDtTn85w9/x1nlXH0TFfld0u9nNnPFSggPBZ9Zv8gN5Dv/m48MPuHLMB84qc91Z59SdosSGDH+FWtRUCfT/yKQBk4TARqb7fRhfZapuJD7I5HL4g+XZFHMtWB7dM6e2HvYXCb2GQKQ+zSe2Ou6KgzSw55csAEkmM2QBKYANJgBvBTAMRp5QIZe6bnmKcSRAhvDqIJ6++NDKfOJ3+QxCnWJ37rDgn+rRqAubfcXU2nJMicp2F+DiElKJqSKW3Am/2M/mBoWHAPPIVKgD1LMnYgWQJYdgqT4jNizeJpKCcZIkdQCHiqcUJs2h+mx4kpZAKKwjCiW5y2WK16jcKiUOQKz4rWz+GWz1m5RQjUASZCGqcX0Wmgb/DBfBOrkOKWZ2m/yOp5j9hXvYriVTaPtxtnkkfUhaH1VHBK50H3BqPdGEHVYySw21z1FFIb0D1X7DPkJ3W7Lm6cjbLLjXKIZ1tfKxZ0141jARwlY/SziFjg+G0KlPGi+wnbt0xJd/z0eS+hJekVR2Qhjt+qP0wMwvPt3vqNN3Tp7ul2iQ9ctEGF+iYvn2fYb4J7x+KsP57z0PR3/ws/hs79Rb93B0kiClCXoSRlTmvu4uha2ItjU77F/bKH9E9zd9AV8HOqUCk1wf6jdQzNye9KWxKagRfQWTgFtQonH7CZCCPVA9lHbiXqgbvklsDmYa6mS6IsTB3Tm3g/ippBp/MZ2tiVoqbF4IkOvECdSbeTrNHIMBwdT7C3NqOJysMBn14ojXjLeR/NYZMQDxCS0Q9TDUqvBYm4txYYjO/hKkuPp7KuuOR3gR4GbdO7kpGmRtvSstajsTQ2/JD2Jk65/qVSsahfVLg3W/fM2mZhhxPteJzrJfq9IZ6ZBqeBFOaEvbnKTGzBd7MP0y9rXMpDJbC2ZAcKaQsr4y7GVlcYUYYxxg2vVbNjlwH2+cznPhzg59q2UKZ5vq/p+xgJjrQxfXX55ossFiKCaJ8mXwJ3aoukqTBX3k+iFDq1sDy3qS61jrLjETbueOXEnYZVaZV7uYtoqSPcE+JtfpEaR63/ZcJP8E2TBE/4m0enDGNvOTeX39uetYN7c7eNxRsgi6lPZVIp7gB6A9hxa/7zToPvt21fXIMElSfErxiMhFTfVieqEgmRJEVRPzzUFhVofS2d2bBJR2k3ieVb4nf4AhR26iyuNkNXchXG1zYjv/KOB4tUZ0dZ1Zp0EV275cXbsb1MSdM8Ao45+8hvIJKJXb2y463+34LayZyyIam3rNMvgjizP2Uddv9/GWDu0qQAWTw01EDy2//X3JazF5u2iCfkUbliKRKAbLCYipXIV+WCJph8KKJiSVjkmLgQKnam1tcmPTCEzeb/3ux0TsneOxCBICmIRRwgROhfBqnp4tJlrVIhFDMmfUkCg0gCYlUE1fH8cdtYD1ReDh8ZDsAYoWIjYaZhN9RpVIhlK2qH+WO7n/+l+A07rizePE9FgP4WffF4/ih3XmgSDZqB8mGaJdWDY9ffW7GYzbV7RX/c9qJOHFQ2IvGpE3Bsxhdthtg1WluHdzYCN8oykSB/l3ntWoaNhK/ZKN7pK0uxLSCOjYmQCAABnF7Q2/A2ejE88eG7cW+skjiFoXLeaR6nBb1hj/nia7ryFf76I1ZJzbh7EmuTNOM1lN6JAWQn7EuwjAQGwhp82hOgxqHbGHearzq3xMVmwsCF7a0sE9hsZAXFZyv0ArwAjBO04YwDaf8h6TarrgGmKX4rPvUWcbqTfi6YyAt7Qn+6dwxs5LtvAJ5ah/bSfTLwxqvPzMvu3evuPMAe5ND26f0GWyBnlkC6qM57LZxOIPNQ94TVLCNZtUXFm6qiMuAzm1NWnz+uy0ZKRxEM8aThIE0TYaRTSKBidayUXpnxQlSOT4zjYsfLY6eTjslPPexYllZX6GhuS9G22cl4YEu+B8DY3oKIwXYSR6A+yJrNBeF9Fw4BydR9g9SGo4CXD4WuQ2WEpi7hzDebgnT0wCc2eF/JVQ+f/oK++aWIaFeFI2KfE3PaYAWyCq7anx8JJppuiRqisOrtB2pLTdABIWU5JGhZiATC+40AJ4IZxBIA+z7okwQ7N5Pp623zqNNmaPrhtyxC9n2iZnMJA4G5kUKgkCN0qjAmdw2Nopz44iPH+wWWmcXFMhFQoAaYhUX3FzXq+m9WXAt1IPdYr0T6pPEHaDL6CIsRSMTZWG0kjuVd4OEjxgxQAmBcRK6LozIosE8KOWBZUNZmtmBakhKo0i7s0pPAloIIgYqpvwKKaLez2Zv5l3mCOFtp8IotoJo/JQFDVyR3v/TvVQ2DrfS2cG0FcRwqqDw2QQoFuLDV1gJIWPTcJ7N5t3KO+3tszlYPZ+y0bZOswToUgwGiZKcandP7UTQpG+KFiwwUUPCsVtLnnjYf7/ORy0gbZuBf7ZrFINJRwPHSlTzoAPohW42UwK0oR1uXXwLQ02ptylYNcxFQn+IIrbZltcqmQac3MztsOUtSdck8arSaGlkq1EbMexrII+VymqMJ4eAxpcYbUYXi3NZUTljGc5gUmjLyDTzcecVf9AjeFTMK/ibxJgIGRfPPuQ93Zv9UBSETLjuCFegwDyZLY+YvzbCf5k2n9SMurm4bSCTC62+tUFcKnA29SRGSPizGjyVZ6wQyI4nCuTd8VhpeLXEEooWvxVI0dCC9truEH8xqXgbtPyQT92i3ouyudLCLILMkXuK3ruTY+sZqHMuMEM3IiYBVdH1JK867o9n99T++z13O+jHaLN1k0MEDOs0Us3EFPND0zGYplazaERcPnWSbla0JefqCTvabiZ1rJq6P11YbR8cvgVsuMrvUNgwdnJPS6pGPRz1MM9zkrQgSItpetOoQs5HK09mujsUJoZAxE0gG7jiLzQs0ER1OfXgaWxlSUw3Vxn/6+EFnH5ZDb45OuBV2glBDw917MxEqiMI6UM6LIUKx9SQpIkl1OaMYGAwVAI+DAz2RvrJh8iGuFZQ02Axmexzi0MynI1AaUrsX7E0KDFKgzkSllKoLo3wT9YqwCoJ0Udds9QGXYrWLeC4LS13gxXuf/s2qZ2v1rAn4QqlThmzsh1tTWPYeHqrRW2+U3DbmCsxVUkIPJvJQk/QAriRALp93855zPRwFzo6Ggr6yvNi5XggFdBwCAnI7uOeHexodxDjr8qX9nvm39820eGi3njO8OL0AFNA05ssxeA702ef72KmQKmUgNGtJZTS4DZDjyl9nBeIBNxGCY6PZMk3eQ6nsy8AZnkdVgk/cH1RsWvfk6MBBtz8k9kavHzITmCMnzYkqUOEd4BlwSCX+1CvWOukJujsYhNZGnVTwzuoWBGY/eiQQ5rkW56HKe0E0dxxkO60KuI/3OUby4Moho6BpuJoeZpkYCTJx/XKCZUhoZeiqNu+HXEefHpUwKvG9O3HK1Bf31wtJKKQ+8B4AKRxFq66c0u3hMI/iluBnDIL+13EEFYe2Dx6YA5NfbAr4MCVUy2finRydOEwZPGpt/Rm7Jo/UVr0vYps9VRlHYhIbw8v+XtZU2T8nJgmh1Aiy9SsyVcGmDyZSMR2KXJtYwiNIyc3uz/5xvisgHEjsIbhA2kREDuBm0lNbBKuA5AzRlZfhUzcO1kwphhlYbdcFqmdIglxCYMMvN5kc4MQDVYQoO8JQAD3arlhi2w1Ip5gPBF0tyMSa1UewWHlDFhtAAEZQXzH2Ni4By0AUmSv6WKVmsidYAAvQCQXAzKZ7lex//nLjyxwZEEDgsOzmTN5b/TePCIQAviVfGnCwJu/s/rkfKyjwVlJ4BSjmSZ1yCZGn4eMYxhgelJPFAPMA4VvypYTb/jImMnDcUKoscaXqnW0XPqss0muvYzU7DjFMJNlb3WAkY10vo6J8LYygbbNJbO3Zi580PByBOgQ4Xm6ljSZ6rE0mYSqVcjSXiNW0vNokZSVJVbUal6tU9taZZKQYDuMjRXQRqlBJltkk3jT/aV9ns/K3+q6r3r3BdkWxN9ZDAiJVdCUZe4rjNsa4ow5rh4yylIkVESNO1uQcMzKZuMCU3NxWxzivoEiR3qUVpIIa8GeDCeo70yQzW+Q1hJZrUowWJSKqh8EQ8oiqU4BOd+mpxVIjdqJWREltkyk8e6WM8ys2bLYUibzWA7iJOhC5qIRC2dfbgr6ayJf6m+874AMlJ4IPL4QJ247hd5O/DntM8mizEIdJ19Gf8UxePyl37W75sfxw684b0r18o687wV05D4F5rrxw34mzran9mT760X9ZbNh7Ftu8dc5glGpbHoKO/ZSYYSOd3yjaWoBRzqTa94ugnq7Vq1wK1Lr3CkBYKhFf1PlCsVrDXbmRWlcHWDk/qQetavvXP2vCua366fMh4c6s1ozuE2MvrbDkJ2+rLD35hvYnzJuaOrC6hn1vV7lqczA2lGix0BK+gBfKU/r1gtJIWHLUS4BGDYkrlgev73aQSfuKwwCMlAxvmgnvL0c4AODvaQUI/pQ8PaT+ITArgoxS6tpEFd+ouOYj23+jaQHaj60M56i0hkmzV/zjUIgyyNWjcdkyx3nQWGeBakJqqwejfGP5/hulMErvHuC2jsEY7IPuXavYqTDUKoYx2ZIzlwrUIvBI1UNUJExm99xafJ3uo0rPZEsq9Sra4nzm7J5X6OmItnb//SDMHSjGFYJmZvcRFxKl8muBBqkZCM3FpX5LjeHhk8vtBmphk7snriWBJ1UfeyeGfMV30X1XWyYv4AcsvwjLFOiqzPIVibA01sGuwhgIlLOZGgs885eNWF9Fd/XQv8VRLvChhAdh98jIm41P7tzGCin9hZhdK7hbtGAIpXRxoRblj9b924wKhkF6Z1ea4PCQ8W/4dA5D0NHDY6fCNFBHbC5liqk+k/D0eLSR/WXRKj3OLw4BPKaEoCcE8JjcUvHJ7uA0wUqRO4/kXHmGMNkArp0WY+7Ntq/VoIxTHjjbp1aGo8DEy6HAUygDo6vZlXhgWJBwkQWWKRqE/IgFvMWVYkGknaFOLtpaOHZvABEOsFzanwB6O5LJt1/UQAk4aXdyy9Y05JKqZNWZZrODqYp0dzJYLOsJDGCx00t0xXuDnbi4QKc8SEwat028UhLcuzbO+ZTmxRxm+wr6oLIvsIYerkay2g9TPu0kLXuJaTF16vLw5q5lLdptDYy5VBXQe9RfaJZS7I4rPpx3dAi1ERe2KpkQmkSfBkPGDpszXMiaxwu1V7Frdr2sI+jV7TsW2TjoJU6Y6YPmmn3OLlZasXKX3sFDD1wpEXPWIY2fYOdNWTQOVlqRvtcyWhblGP7HgQxYcRaUZkIwACCdp0fY8aedEE/OFzrCDPblzUGmqYypAtLAZmXAXwaZqwxk7JObfU0K6bQ3ve1HlZnbmp1GOfKn3dBV0EzX1jq21gEXMbWiCJeCS+psujnDlVt2hI53//buoV6aVZKO2yHGdE7tDNu/v2YcPodxlxtGGQNw9s4gjWoDDeFq59iqt2947OamoT53TI9ZXGo0QxnFrhwq1CFcOHS0wg8S825+vknlU8JtZo6HWjElt71vwM80VvgZoRz0/bXRANp4XO5eGnmz6inHRGAFkxPtXcbczt0E+kZ+1O1MKn7sKXB5xDBjI9gZGUg9s/u3Y9qgnY0eMzn45vMg6GS6m0ekCrpK65W1/7DYafmaTk6WElilp5f4+XzTml/2MWt2wWZrIHnHnh210Ba2LiGXuoZYfBC9UP3b4++EyxUGtLxQ9QY9FjMwqcefiTjssnGhKjn7NzJ4IN6sNB59IHn/uVfxfWYRay5Z+6yNXvxYYdSfhnGBOS0EogxeWJ25D0qy6pjqzC1ezlrwgA3hSV6xLKSbugmlvxsKoyS5NcOD2lh0gSsfrIjXRXz1In+gzwd3K52n+RaWB4LL6Eo2ToE3zMeI496trlwlUNtW2umqOLq7zUktDJgGpoIkG/nCVNelJwQSvwN+bUL9GiB3N4D6gQiwpuwXMFvFtp6vleUsox9oWoU5bsathpLm5VfdsNZrnc1NHzr2SSEGgI0GC/K0y/am11jmKSop5sCG48YqwGOnkepTJPB1qijkBVZdq0seJ7KVKrerlra1PonjGHT/fhnkAUgdakdcyqq020NYyhjtmIsIfdrHEeOAsc8maad9v743EEtZ+L+WfQP07iPaEXpPF7c7+QxzdNkNeab91Fhe2mOlo3h03iZKBIRfB1IfqPJYsAo5NOHpmR40HSVkDC/GDVVbsjGNQwUVxkqkFGFK0uTRNmW6f4RLwR4iQ2IIbKL05PRfEl+05xeknnzu8LSoZOgVC9goZq6xyhEUPYwVsMoJQQ8MlERYIHk/3gSz8hOEmFK+GsI2l1geDsG7DUDtRbrN7ALyWgWvIJOlIO7lEjthBeNVM8VGqHtVle3M7s1YpgVmRhAdrXjLRI35D64gYJRv8rWfLCSZI6kkRWsMpSPe/EKBxCLhIqKiDagYzWBY8unsjgs2CdOH+CBOXlvnjQrjfQxrT3nr31ARdqo3jtAAQ7unhZvq8kfkumOoUm7c0t2CIleRIGwSwfqwAuXboZrNW+CdH93hafUjsw2kgTkbGNhOgzlXccQR8lrgu23b7vBlsW5Rihl7LIQBmBU2J1mnXXj13JFFXcBh/zQz9yNkupOPT2gT0AcuQ7Ckp8m+CAqKRmAMtRrXp2sK1O+EFkzlPmluLlh+EjsyIYrTY8msyTdl6lEU79F2jAlefVQvFmSifPPCUsz+IerHmkv1G7Th0xJk05lhpcTlxQSE0OKayMIo3xRqFQnIXI6WDwpVSGk+l4pUdJFcJWMjx0Wau4XFpb+qX7FQGgmH2Gy6QbPRnf4F94jBR8Lo24ZsdxTF2pSXQ0u1b4XbjSpsDssJ4GGM+z4Mp0w/JhGC3n5M5v6Dsm/lJ6RPgMcQwTFMKeriXsvKXTkegX32h3UxgOT3ekYuqq9XsZXGXMFy9x1FlbDNdSrWxKeDp+2tE+wUfAobKLi2YjwwAQMyrvHuWikVrPa0E8T71aqd+PLKY9HdITAB+OQ2ea9kCKq5ugkY63mhsxbvhU8SjULDa/sVnJHlHiGThZLCDiXUb3O+3t+9w/8p3N+OGaejjAwvatscnyBVkxu1EkhDCvvj3GZl9z/pVOvpiTjYcxTHsFIaSDGTP6ntEoMKFt0o3yx/6rUElXR0aXEifFBLrZRSpic/WldneuM92QlPTzfLnS4XkzO7zRZpGf2MFthahs38P38f9ZvD+Na7R1KbMaHpnIirxBcrMywWE5hA05e1h66PF5dXDObvnDVbOleRHG/Fasev33wJvTMIFBZaqjXmlmyzBZ9Bw508FNMJc+xRb0Vyex0Yz821RbYudsZ3fJhH8SW+7qfmSw34tmDeheAOeHEJqQB+FY9/eyVxtz06PO99E0/quAJ3KOnJ90D6cSFDuLn2MKsgQSHlurcQm92eE394v6zU8fj9+DsX7zJ28E2H5zbSzWzZ173hgXGoLc/YeMxroz5cr2kD5M/uE8/Ug+bmq8UGS6AJdZwZtfKGiGtjbaeUCh6y17w6k+74XfWFIVC0+/gaxPSf4JN9Zax1LjeXprWPgo8I+glwkpFeufB1r6HcxrmjpuMc2bkDAC2aEi58WswOnTrCUAgQiuJGYDY8FXy4hWOPHNf2FYjx1erBA71DhMeGX7DfCdoHCBPgN3bwnuTUizNFhYHpWWGTvauDM18JA5nZpPi6S9bXE4gwkM6qv78/QBV44GCpyNVo5ViMCCpVJqMF0nJ1Oso3x6zGTiGUdJkeSp8dZzg7OOZpFXgZd6Ys0rDwBi3tqvc2J1+aml2ZNBesthRSrZohSljX8FVv85goHr1RrmylHWJtf+7rv2VFpUy5ouZosSQnF0oHxX49YC4ADiX4wWl3zlonABkJvEDC/kb5rDknGNoJ4qS2flbnq0nsA703rcNj4p1LNkOAoh+GEN7sfP2fP1UtsMBju1Qyne2+/99LYnJAwpZXisFcFdgqB67f93icgMPdj/x7ZxFOOypATRxHux1jgZqdxU1u5YCdtrpLXOSKtpwWBIZYgfljy6DHlDGcXE8uu+6swUHiwOwn2qEGGzsHj4ihFMO4130hz5AK55CJOr7JmIb12frsBQ4ezNQfdAYnGC1OIExjvtKp4rATZ6Cnjw0M9AhVA87CInthXG6H1Aeja5fMetMWYz9ZdRHtpgf3LK80ESoHzLSMW4PR9nWaJ+BKsGEuJk6E0T0Jbi7pM2MRXHlBmDoVpwYol3TTLKMZ2kfPwQSGBVQC0ZhJdFn1r2fJyyafjlI0iCLgxpgHS3+11qMfac41avZ/3/uPIQ9aSOulVLBK+ERiyLGUe5yer9bqoFQfxpRRKpxzJ9Gb9R4mSnJBGh1AWCofPexgrwjVYIrUuncr2HaLDuOwEoeFn3eeyvN5yQq84DfE4eIpM9cOmRdW5P5xZs5GJnu0Eg8/+MgCu6U2OGoiHsfsEeLC7N5IULV14AGKex7HNI6QYNmorCeumPIGwp4+Va26kkHrP6y/XTsoZVuzntFH3HSdZk/FnD0TUZlUUwXVco4MNwzcRluZSuwtpBXf5I9+ualdAQQIltxuweSbKU/X5sEFzJ2I3wpnqN/fj5VXtLMYbDb58WGKiYawL0pfqLAb6JRrkjAwKJIXOo2oYjpccQlK5biEp2JAVZRvpj5dWp8QSUcbS7bGINHo69ETtVV5nKROUqepM+2ci7iK7xAjOfRpwjnjlHHCONZju0yK+fst6hx5/dX4j082Ru8W7ch5z9sg9NkQq6SkT6MNYRdYatEbbTlyaCPCdLqIpgmGJZf1Kn/x/9juvkMZfAwmAAf/5YP1nellFRdSQ/WVkOmQ7euUi4szeLZC2Sh/4u8nqINyOljMuGC1BZAPClqe/5pPHmxks6wlYHp6BQiGjGCEH4HyxhcqXpMdMJXF7s4vFOMmKox7wrSYpOXUPpLxRSZ0C9P1osNDVzRTRGdPz/7XJdeCxBzcCM/dlsn/v9nBG5NisZSJTkz7kdS+kl5o/LfeZ/eKKf5UFnX+v9NbzRtEBbGjKNSwEpcQb9OwEjHSE3hh8TN2EedBVGTBzP9FqBX7gij/r2NuLEEibfeXbY1DLppV9kJoEtVgs+hXyS6GMggWJYbBzfcDj8Wyo5EZkTTga9fc4ltH8eRCYcacrsSB1spZ7EGd8SgnLinVg0mEQ4Hsk7CEnNnEqYsuko48ZPRErBMHZjieKBs3bJtwn04Dpas9ArL6LH8kRFyAKR2jH8jsBaZnfQZv3/JxqMAFxuiJiHvrZNRR8kMXhUBIha5rzmA/jPojJJxRMiwodUd2TAZ0liVfp7ysuv9JF5wHF5IY9j3MbGMJYZRvOnCpkUw0nf1ooUSurqmpdaczhVwK1NogXLUO7uawOW5+CFcbZWTj1R1ayFcuHq00aFd9FMA84fFdNOqGdOm8kypTE58pR65KvEtTJ/IgmZHECTRXUzhxlFYizuCRQNIrosCyMw5CqRj6fZWZswh5PCvVVTxxXR1qfJ5LPuoYa7WSIXhca0uPhLOjsvLmeQoNVB+fK6WCh8wbUzK3z5zMzM6BoQwDT6Xu6MTR6nuPOQag+ayW9iRa0y/nZTjNSvsPSTAIpCYOW9uNDhmqJouMVA/lzJxibhK9+CDNucQJW9mtCqzDHQlUPnqkUIjRbUGh0rGUfOqV3mSKkwfFkbBoGzhQKm0W4wSBARZZobEsLnqnYmOdZxwQS7AV+Jycr0Uvbuq148hBBRZFly5IkmCwMVGoR36i3OmQ4H8qSZxt5k0CYAEP4r7KHHEYBbucE3l8NssZVn2dSjPd/Pdq3mUjOyDiut/dNPlG/MFFSJu0bzir3ibgGwlU61ZUCUTBXevr19euDhq9QxhpQzUWHdlmCf7azOdiqF6klDohtKEUr+1ckfIE4ibxzSOcCaOX5rKmTqYaZwh/1DlLdC/cGmaqB4gL/KB28JDog5NyTwJO5TFDmIwTCQ+R2LIChnpmZU4YQoZYPmkrwRG4zHGEG4QMuIP95lY2sEIq4dDiEGPFXtBqKvSAo9hIGczB9bVIxYIF42eL4sOFrNJRMNgxIFIe8FaZ86stbzpxuOrNZq+Cdyswazx+9gHXgDiox0YONlU04AER3vcBdG4rNS2ucqqWI+uJ1ugpMAMdn8rWYgKifFPDU98mpmkz8ryklonFpS4l4VKPkhmDGqPOaLBcZ/jf2f+xRI9NiR2R0shJgIy8X8kjR5y7Z94AlfEC9453Y7DsPeJIbs57am5WJJ81ch0uMp9SgQE3HhfJPGJcrs4RhIyRQEPr2c1gItVccFGMWx/+ytIUmt2bigvro5p101IfY524rPZKBS2dtrpptkY8KcEqEIfvFa9uVrVZViIcKZ9XJBBdkwyOCsY8iJlOICwyT2zZIegZeRG6oQ4Z6aGYewpkELHVsOKGSKg0Ml5K+/u03VnlgtWGIjmMguY2n3ihXEiGMhSs7HwtcULMHbB8KPxoCU223PTMmsDGaSzwIkI5NU8tKeZvOVXBiFt3RYxjyzCUK5iEopirpPnIM1MIG01hgVF3TcgVYkYnNDwk9QsW/uxcnivm8xE+EC5sQxO0HG8eFQCHScWMTxO/G8dle6bq6olhprJ2cDF4FGw+K6VhMpWaLoFY+gvTfocuQlrEOythZgi1YodVd7wqoWYrpiXBy61rH2zv9SAVgJeBN5FHDQVOJg4Gdjo+9c7H1jQfx+6P6hZO4MiZJU7bxt/t+fuxnTI9P1XauoBR/nh45FYMnKSPH3RcCtTu6C1YWEN4SXqCK1/pLyYjsgzg65ck8IAZPINmOt0TM1cOPk/H9aDufGV2716NJ0pH2EEAM02HYgUSUXc0JI0FWsJWOxs7qLIwjQrXP9MWublrxhWloEubKEofp8zIInCGKUklIdUtiw0HJxeB6pummeW8KYYgIzJrWleMTz+QQiWcqn54Qui9kWnEpbOPQYLGtNUYoqbI1pJdWxofG8Llx2OhQilunRUUFUrDjzheaZ6AX7zZ+kRGC5jiQjNZM4UuUhdzsyes4Xb5aUcDmCqnKlq1iNf5KRFUgIPANByrMKosRXRRzARwGjlN4wXX3eunYpPjzNPCUWwUl6xtkWHEsM+45dperDAddGSjdL1IIEQL2Z2w5ZgUJ+Y9yQOjFZzqIxdcTSOXOqGgYPcyG+nA4nHou3cGmkS/hUuNRNlosNDS4HKnCk43Xjg/XbSFP7NtxdpUU6DenpUtQpXB+leWtdLE4R1qsIBIO+HbLV3XjnEpDiy9rbC1XTGy4Xk7cMCMNlCEhhOqGbq9T4nF/KkDzWggsoyqZAD6hnaKWVe4X+12XRc+JPDEhwmqo5JTAmWlfRDD6/I3n4q+3YrBhAiet6yVIeoabc/bASgsYy6zOFOJJeCSqs3uLVkk6FM9yub9D9DW3t9HbmyXjKFD0K8Ttit9pqVYcX/YTpMlqaz0Tz0/oYw4YaMLiVPAvn5UPkYBixxg/JIOo7IDPsJgYjEiNDKi8UXWlhMoSrLcTvBw0UKj2S3fNEaWMBuLuxaWuSG8PqKySwOdSFhsE3OJMQv16Y009TTR24Acu6h+I1gEeEU2FAxoiNCL7erMXJx6ZCO3LCO48RehI/tH94Mq0lnznsWZxCFgo7chUSzlOcmv7PtcjoRkes2HS7Juf1GRIWZ1fXTsK+Uph400JtMoLSd9YtuA5e0EFsQ0tOVydAVp6zRj4USWweD5fdjz9SruzyenTuGlM/2OOT10DVvSyeqfMGLC04nrbyeDo4dX4zch0DlRgUpPk4ohcSTY4Jqygg99a4TNDBMhWWLX1PopkUUb3IfFFslAbwQzeR536xun8fEzSe0fAHb1MQORot84rpiHci5pDIfL1vROxq7XRt2RcCXsGXHs28XrA1vuCCfZAIDpk8h/kELQBUPRtX3kA+LIlTzyYdBSc2bbr3OvKVJres9wI3EiHSjYyVtUJvowvGrush27RYviWLldBbN2+EXiWYs4kXs0CeGJUKHFu7rTgNyvWl7SYFPBUr/AY2woiYTxSF/eWbJlysz6qc41yFhnz173TGRwFs5UfmQhjjKN6OFmxno+ceLsSEFOkn8mk5lTnWIXFx4BzDRlF3gvZtrh9bsxwGggUYKlhWluI07KJjMiEWLdLsNEJBmLeB7h/L2ux47l8xNpoH7YD1cshijCiELPibMbasQjB86vsAxHEBfdQVNZ/rDH8dtazVv3147rCKyBYiH8Nvinf27w7XT/bat/q+uP1YU9nexjDxpvP0UEMrnywcLAWoYXXxavfbXv+nuQETtfjuF5ZOJl8ctHkv6Tvizb24lDCx99+Dbhjo2AV0RwOti7yVADWzKlDbFS6ylhpsuLaDoWeqrLdFPMB5eKSvkZ8x0SbYyChpktSQ+8B4YSGlmhJJh2KgTUX9G84f3Q0HpT5+bQs472eAxSMTcIrJ56Lct7++rE3IoPWrfpL32ptw6PepOaKiVxr9B14NmOg8Tp7HtD9yCtSilHEb0sRYLvu5ozJy5NPvXQ+uuVDNZmpdFhHu9j4ieCDd09dWSes82C+oZg30O1MdP1MhnidKAYtGDILAH6cH26voWns8sand6+z+0olLwcoFwcvhG3LAMZgrxC+m90OoeTdx0yO442NrIMHeDMhaUzLAtLp9iDrc8MLR0LBxSVOkv0H2/Geurh3k/vPKi3AAv36SQUjZbW6qVUG5Dwatpef4AU8+SSq3Nxwe8LJSH642y2oSXQyLUXZ3h3M4Yac3EadxYYIYS79VJqW2Anwplsx6mRAvR6wNbycyIuQr3EVpfC9rzSxBhGte/CXwxyx8wfjQ4fjgkbLJ4jwJnaKGyqPOXlbRtxutZxGYFLohDoeaEJAHDwBEPsMfXY1dv1vXuNZhd9ariMjPnYM9/R/qLM8s6pjdOdXgVZKth73kXNKXvw0fRgXGgFSKil/PmSJW3ghNIBEbzshFiGtoN5EzuMY67VFAmZEbvMzS1ndyS8ccENmHuC4iGes5F8OajCggZz0CjVc9GTgjEdimdXlpYM4I4xQhHMWB5T27Y8Hm+OD58xCWvGCeKIMeVUdDukaZs12PAC06ZlbRxR6Obo3bvl/tYpxB0vmEaQqzesKsDffH1jje4d4rBgMHgfLW6z+xBVHKnz0TKDFlvWhcxdHAlyP2VP2/w3QwZGrG0m7gzgbUt3i6N4AExLvHwCU+Pa0zgIWJ2El5QukFpLuTUP0VLTRCaGZDJJpbT09Y4AImrzFhE2CIhL9QSNhwtgDcAN4AFyPV2EFCS2TwITrdxsd16LJZKjgfzujj9mx/ebx5tKZ9C7N4P9iGEtxUPoDQioQiDPtc5CJ7CZVO+S8CMGXEgHBCISIEKsMi4bKpadMaBx7rhbSQRZk7AhFl5keO2Gva9qAtlwg7WNOf3YcHIA1+QDmiYFligAtIwyPilUSOBISWgVpBTy5dlFsBTKTroIdKKa4qjIQccoRohEM4iqhZeJA3a87ttuBuduOGpdcIRq0KYjFez2ClrwxlvLaAM/6HTmd+WsYPvhVlyEVtjQqpps2jn1xovuPiJu8yCBhbCLNxRL8cjtOERQoVJKCiFZl5jhS2PLfhXfrmJa9bPQSbW3V+jqhA/wdnK4fYyr1tT1ccbL7cSpN/9JOnMnrnYRFyr8uNnfEhkXXwlq8raElYiV7subKwEQkrbIka0m5SkzldsZ/M3tR32AKaQUYK2TMTwlAbcvYgcqVONYKUSi1hAI7b1dHq/GK87rkNQioDvjTkL+Oc1R0KULg4Iawcx0LdxEksxQ4NDU97X+d07USIXjmR6x5cqewmxi+22qWSSvUM2AcHEACcC1a7hCIQTBjXWYXZFkxTeV20rBS9sV3o4nO9i9vPPYUIqLFBDwqjKQLoD4XpLRv6qBsAfLLcduwzM1MvnMi2ScZo5lLkEiUEOjHH1Se8orxTB6WKZXF+o4rkDXT7FIicsJl3LD8c41oCxcOoM1EVdbCFFiDOl5TcIPXuBKldXWGgeF9PJK8hc9ZtBrmWL1yq20wpyOu1ouFvEGMqUf42gNiLjjdbPRrr5mR4dqbquiMAARCvoBdBrO3zSyoNYgqIibcvOj+mf+Sb3fW3TsL9czkdVOFTVbFB+6Kf3L3wICdgVpW8uwGlWlOFt1XD+GHmh3+6CUisBwzB0XFr31GtWv/hWcCbYIjSezBwvFRFfr22gMDgNeXW38JMCiRDby9xYsrf4cAFOuKFJSLgumZoeBiFhRwJbzPwvghkwFGDM3NDPGzAlToM6eNTp9eQ/yi9n5jYMEoNBxTOUPakLWYkm3FBuNM9THFxC1vCKGl7tgwi2YSnqIEHQV4cgkDBooyQexAxdGuPRBRoVke2ffu5KSvvbfMudGYRg0pIHqUDo8TYBAhZ9CltsVgk1ZhiMoayqlnWV7aAKRKe+hIEVJv0VLkqVTUTL/ZK1hFkIYgJE/g9VgU3RYNECLxcpcPajGVH5E3iqPiB62ho3IwL7DftACJGSAgahnJkP2kwAnFz5a464EFpvd47YZwVyFCY4ALlhtWSSHAj5WMXRqvc0YBmizGlX2bigkPONVopE/kPFZRPlkQYMuWHe2LB4Q7wQbCo1RKgx0CfhOb0mVqR6nJob3c6MRa1b2oL9bjwcFW/5iW20Uu/iKruZacHhhh7bbU3gBeL/A4c4nBnfwdTc/fLevwtuvn36b+JdRcdn/fvqTumy66ShjYz4ZHUj7Ru4997+JnBEN+YQXXTPq/d5BeNryI7dM+wD6Cr7AP/Thl0Y3/l58A910b+tuR/tQ2zGj4Y6A01XabolLMAq0cZT3vvW/GZ+EfW9xvUyd6Ra/VxjY0wcPq44ewtSRdhzlm28W9nVQX9T8em1zIg+snznQTO83G7Y+g1yMUalPbA5gAYgSmgJ9TAugAaJTJSeiSs0QBepnx+wDE/Fk5qi39Hltxv97+/6p1Tcb+8+acmLr0snibO9/xFXeen1Tg0yZJSRDH178TSCAQA74zIs4Rl8Az62HidNsqbJLe/Dk07FwY2vxtVfkKgwi2nE97QoVFKtYpNmCvD0cDCWta+HVCSl1cEOcX7iTmQIbfuk0lQYipj49iB45v2QI0BLT2wN4MMsZDl42k3G9gwnLgxnKpOoVnmNZNfzVtmlnpng51f19PPaf5hSv+efeurICteADdwO8+P6a/vVfunzPi///xY9KPf+F5NO/+UsvXOuLcMPqcb/o3bKPrVS7mmlHD6H2vBstWD+2PuDb64TMiAIFxHEI8BzIiqx+jIlwgmPvD3fz8PmLDx+nR1ybVb/V9Jy8ES1txOrrs6nngj5crT9k+zLwGErbr/TGSwdH+6kj2AGG80vE8eAV8Ix7RS+9sfh+OlPbCetUuS13pZbYgB1EzBbHveYv9sI3kxwvhu8Ax5kdUduF8MBE8wI9Ggw+jJhuS5nZOtAz+5DDzjs3VDPbVTBUYWb7OBQuoAiF2FmHgMcnz/2m3onj7546SrYwHMF4uTR10DgQhpe3FX43SOPQle9lZAQCh68A2Zx977854kQ27uTVSUZN0khwv3j6/T+r57IoKujpwyzmn6rATF3tvP0pbq/ix+Vi5+2CrREfPjRmZv/6FSwEY8ZkJKQZalZSTxJWu83JTldpjhKXYBRoRJTPXt4hPgmk7yHdpC388yifmfvrNwGEM1SYlAGYCmqhOFKwplNZUmRAM5/61R8PrAaVdKlStLUMorz9zf/uFMGH9McPrZ4C57CenB8XirOEi8kqKUuzKExqoSkIxQIAFBDDVOInOlXgZYDURp+gTKofGnfqRZ7Lfu7kGMLp9pBUIBgKv6ldK5bKlfn98z4+OTtH75J2vPqczWQ+JueTbo//o7+AUvnDx/OZtWrg2fFY6GUN3dpwHwMGBAsAwAnv4COQKqsJtPF+Cgh8AGcsbn8LeLxD2PyyQD86HvcGGJAKcay+9C/qRkR+0GymSmxSHwp44orHOfob+twmLrOb94Oq28NdfHznAzcJP3yZ7p48e3oGcR1h8nyEmE7AAczk3y5c8/MjLwL/X7BfXnjYKo56Go21GG/SeApVUIESzcH89JxKn8PbCqsCxr7GKueqrEElXA7M1580yqUg8yjEWP9iQKDPIi9hRejsCMcLiyhDGQJn+GYahFUhI+jBi7O84AlmjgfsPQzHRuw+plvVxBJa9QngVTAKzKJ6zv24bVjfQMKq52c/bk3ra6hYoKlIKXPUIPpcSiWq67k5YbDt9V0niVneZFqgWrGqoMjSJ1NDZa5JGIo/6On5w/PWSs7t7voNVh7MoglxmPB4nPSg/SqdV4K5naa3iVETJU5pY4hslVUloBRj+cbMsRPXd7kj6WJlul5IldsKeSEOxSE+EXTDtzDL6yoIgnrIjBiBDKykGx7XRmr+EL2xVsMgQBBJyQdnWHzS8h4VhB52PLvBApa+S5Rfrr2QspVMFYxRygOiWKBIej2XZTq6BUnof3j3tWGBknx6gLnQDSzAkPUZKyTJeTvCcGW/QWPAwW7OTxKBUQsBOky0zqzTtZa6E0ZvmiJyupfUeqVWVazQPSA+37TMWx55i+gxwFQ2F/3HFWZ8ZiMC2TXdUUY0hYAmBAyw6mhWGwPLTPh9MekqAnQZvc4oDEDHwzwHYUeEoQIYyJYCqUAFmCRVD0P94ilh/bfSJ2/2kddwR9v2xVN30KNRwtU6+xdLbLCyS4EFHGATCVdWz9NDW9b6LYfFhmWkkp1eJFWnqYVsf+HRSVmmF/et4E4ZcbxVSl8tNkvSFNnyRogbSzSiXUX3xOB3/h1Kf2oXJZ1m7xca21QdsadxYBCHs/LdNxKedf8etVwAW3Daa/mxEK1P+PjysQ/6PQ4xabayWG++mW2lPZz6aMKTm3UqGag43ZcfFIwmfHt+Yfe3hUiKg2CjNZtBUKSJiGG4JoKxIDMnWN7wJ3kAfUTvtUN4OQPp2tszV6QnK9FLTgxvmLnEFLKe8enRqgM5J1GrN0p0gzbmqOTmM/RfXQ4c1shMHu7KKVebVvIMHGaeH74UL6CMjzIfPr4nDBXgBdlSILpVABFRZeSeLTDlTZjzb6K1f2QAeT/Bxu97Fnw7Irfy+rvl2T2ocx0dJLfZKkAXfhuRwcp3QOLIsSQTK549Knv5ENqnIMEDb2hJxDGUBB4OhIQrHiiz+kqpKbM32NBxhijt4+/6IfBp7acsvZvHnGWsh6FAXDYBCiFN3RCTIgVPmrQQidlRUeSFKR8gmzhENljsQR+GRZgc3kOcmnBO+c2mYjN//93FovqR5IIHA/DM2vG5Nu3Zm/DK4rb8X4cX8XAW9EiVDXW6iAGktb19ZELT9WieNCuYQ94XST76rGaZ2c+aNuqmQkbpXi6oYSqr0voHbayLKzMb3b37+PVinITs+MVGH38aL6pGMK0hJ52k47JFPWuXAmpBjwlygW8UtCF88xoO0pjCjFGvC/7/2j3tPnpwNdJCZMWWAikZmj/2POKleDpv6lhFxAcR8DUJiI56APzsyNqmuLe29b6jCJBksHZDiIGLmCoIlwISL0rWGzwlBOxt+y+DULg0Wgje1JR9++RCV9jBjIQv2Zkrta+jBPw2Jn/x4kJL6uR/TmlL872RG0tU+vbb/Z/TnsUzSRsNcQg1rN+GCpaUP2yWwxN6a9vXwSHeyIY4z2dSW/+n8XksB+AlRxMY9yFO4XMnXpP+5PIIHIm+WENCRCiVRoOI7ktsKOEuQ+6KgobSbsHgNfkCSMPVImUUZDyqyAykslqOi6AqwIAI4VKADGQ1L9ht1/7mESNIPAjKXzvsUOH1mNXCM1DSvjErcA6mbOiAIEv21JQjZEsKRgCSgEeWdEZ5nbBk10hJ6tIdpWNP4qaZSCW0JBfBYYmWGkQWLt2AeD3BsCMUzNbLvBojlKIJyl877DCB5AaRYnVyUSkEUyMwCmj1DQah6D0yLUDFMGXHPKPOxJYvXVdLk7yaVtfbSNZEqq41uAiqAlxIE66C7BNVEVz7vX9AxQiq6jfIXsvCgMSCASMEH6c+NxJ2pFguN5rIRKLA7HiORxS+uphVKAIqciEPakYbm5e6qxll5GXS6ab0IJXRslwEVQE6GIRr7KG6yLRjGmp7q/qPtxhJMjPLvHbYYaHEQeE2ivPey3BSnJy0ic8B+5zEIopoItYaQVMtzvTETcRBDCuYyKeCNG2624IDE+puHggDzciajFABG9YxTJ1qLwxVWI2d7Gd5NCCI4pHqQZjj2yJYQY7D7cG//g3BLBl0CGpta8Dh8niI7Esff7u+jD/gGJ8YCiPW2aLAG2/sDHz1Pkr6w4enco3B8w15r9jS0KNn58KySV0kuoRXrisjTGiBrHZu4SshItFg6HkKxKofQxnuhX3ggtJ5Tx2jSCLrm8gwWXDjATP2hDtWg/Qh0JUDHCx66ow3kNXX+F0RqaUH514iVhaAhLMqiQEcdnYOfGdoO2m7YqguP9tqaMWruoS+tuziym7mmDsNDGDA0DhgUBSMTKS+QPAQTEeaPoNz34vgwDW5+OsMBK+E7W7mn8SyIXnx+da1ROHMmRA9YN4Pn29HFi+HZEwq4bDQrFur/UHRDaeog8+py2B5/XTefntccIq1menQ28I96lhZLvyICmZzy2Y25bXlnofOoPksjU2nvBlTIN7Z0pbJZSZFGNfV04bYgGYSJ3ixJEAKsTQn7YMlilP1gSpzNXPb2MmS0C+uPwXWAqY4snOCgwG+Ge+FCObSon8txfmSBZq1IhlvXP6iXmLqcFKpCHeE0jO1aNaC1RsgpDDQnbnE0d9oR6LBE/hM+BhxfbQ6tX9sPJ3rbneKhF+sRYjGVPJu4Uyz8ua5v5B15LVvYU+jRcfq2u7huWaFla1FltaOfn7tF9VW920qi1wT9KE+iN4yqDFU8a05+fZVzqekaND6veQeWZ5fHuOFZzDf/joiXG1udDgt3s6L6tXfpXjt7WDXDQe53Dx4c/Q63kUu9ZZ8fv44QHTP1tsMXEaqLYyotaAwcZnJPvC8uk+BhOuYU5Rxc6YKmYZ5awwyoNnZ7VIqeAThFoksM0uJsn8yx7JTJu+wHIiTblqcKaZK1NbC4qlUgwPXn4Jj9qQy57t0WyhSoYHYI8uvbzvDVYRiWXOmq2kWQqbwRMoTwC4zXFcg+5ZSPZELARYK7QwScxxxpDXjUSiFbfhDzWg08rJytwqsS06WZRqLSXueRElVlin6yKZKnwM5jsDYs+AgTnItcQw3qmb0pi6ucvVk/ciCror7YBgRS2ZCKJ9Yf/oSz9EQFzSGFEIKg1cnA7o0awBFDI26iOHZIo8bWlJ16eYjAi5rxbPKDKKiq2eNjBkGY9unoE5+GOmivc//nKDr6hl+qdS+Xn8EvuCRlubKxodf+RbzX/AKFnIsIyAO+V3+66tHwgGgJXVD+d3/82EzSl4vW+x3bA0UM9r7b1J1qV3EjF5eR/io+onpqVHBwyOZ1Pr/CtZDiz3mHg5d957rEecNYIZbo5B+Wk/pestsnO0LdoYxW7k+ddbU4XceqkrS8CJ1Sq3v3YIa8c1IPQ8RngGJeqhi5QgB+LFkgH/vS7iM0MMAeIFEd731MKHzH0bDdUQQzAzrYOnQw6VW7a7rqa3XAIYTTHsMsXA96pUIDdtrr0dAXy9WXbSs9yFontI2lLJqhye9yB39AYHlRTJAsoykNr0jMqzqSJOru9T3gqPD8mXEDQ1d0MN3192Ndt6tboeMApiu+YLYxgT7j/qHuC+gTkBb0HY6f2OwP8r/8r9fqq9A49Z7jd2EI9sRkwEj9Hi95kb2Rk9vU+fuXmVk3rDOtWAJi+nJUK5/mAdexyqi/I3P6ERqyTwiUqrrU3mmyWW5zySqKCev2npIvS/RKmrNfmKi3i6LYErM4l3L3BC1uc58uoRtdbIwtFA9X4LYIhX2M1gz0wZRXsEHpVfJ0NEXKNHyhJIv/nf0A07hGJcnuqpGK4udmZDpk0d6LqQaM4RmhYt82Gr+CaLSYQ+z8XpkCwwZPsrOkb1d1C37kGwc3kdbpWfO9cZeLYo0clvgpQAVsDgeFVjKzz6Y9ynO6Pgm7lg/athal+dsiQWxD3Nvf4SnHcMMhKC7f89bKst0ErWytNUoIzC+2qCdXN+T2T0ZnFRtz/mq0qI+TsOjCmcjTgZn1d4P3wT6EpfzxSEQs7CiNyL0sKy393Croh1tN8hvDtp6mGy5c5OgqFypS+rh8Cb1kFoVCtum3Q8iY4LC14o+90bzFnFSe7xGQkfxZatrGUgmBhbWgCFwGuviMmjIXLAUxqW5uWdZsc0wLdVDnG24niGQgjVb465BvC+3+KSOWKshzsKiK37QmrUe2UfYeZMVa90cPx5hZk0D9Y4FUW+8HGUQpEyOxGFBUbYSNKSAbscb52UoMurorNDcMuIydm+ZMFQAjWwZUD29RZYrgoY2GWAZmwyV/fFcMHrLOF/qrUzFAppm0oTrQlZpFVQEykIB1aAC2UxuWBN5t4yaTHWlTRgqQJ5sGVCzAyfbnS4MbTLAmcF5hfzh5uD2fApnBb7J5LtGR4mO7JnbUYSieUnieCvGSrFFTGmuORUn1K4vMIopYUAxsJEHLsQyZmtFWK5Cd0YYqu1ZLNtrEp+tmx1mu0qIoLsiitAZNUkqprGi2Vx0gUrOOGqCi9ISnb7YQM9UTY5E+cYfK1E0HZyjsB8UXQXTAJVGP7IgucUV3obCsnuqusb7IabvFoPG7RMRx6mlUHYeOMPR2Dyr6ynR6nz0Zi17HZXUSktq9x4iUPROnbBubTqyprdyn4Tq/CFgUfEP3E/SfyrwWB+z7U7fBZWsDs4UxkVMQVrHwDOTPFdHvXqGDgk24HIJdUJTs1Xme5RmLcorKrgFENy1SuNkGAVWfL65AnEnfcmgy31Niq+3Zh9V/9bWF0o5dZ6inR30G9/i4qjlt/YQ5UlrbwiLzKDPXBhKyT+n8BpIxnDxmv1XQCdivx6FowkWXnDuo93eCj/G3++kZGfbJ02boQ6NknXjSr3lUUcobZarmSybr3XD1LNmGgC6U8XdxQEm0HtMcZht6C0Hq0osOsIp0QPuA6pyywW64pIhGWEzvaVmyKmJyrIBy4a/IhhLnITqZVQoY8jSi8uTcgwOAbB4edsGSQQXkQojSgfYmvRywWHhQm1J1h/aWd1yYHT4bMeN2vh53Fm21gmzc/SZg7eh0fVKffdYnW3usFPmojZqsT4xUDRTrUUR9GmmgdsLI2HDln16jQAPYQbBxI0LbZuI7WJ/Ig696BXpQMc4oAwJ+yHs+MEjNhSxtRjQ60ezZjTmEuGFGLVQ3IWOz60QlYwv+iDsyzjnk9m9aN5dRHu5t6puvz7wmk1HXDTvreWDynfBC11lXwBVnrJchCbPUi51OCjye3+ofCdr2eY25C/ou2FR6GHBTzNTN3BzU6ng5yNf6uwjQszT1i1CeUP2Bok3qhzYuQtNVYyteSxJYi0vcyLVf9l7zhe4lTtSVkyTtG7tTYyxMV9JnGTV0YvdkUJMGSEpyqG23hVkHAzqxJItLSInAwDidzM6zDLEgaAvO6CB0U4MyGs7qiIUfKYyNvAoX6mmNGb4yJAAyoitjiOGvnUEq2rcPFgciJPDvP1hmKsD2xZiiM/zrJrfELVWXYnSFsQymptYCwW2S8ZDICXYpGnjRUQcPCn5Vq1jMcX2vJu6T7uI9AKiTXVwSHogCQss/lAJU0Qnlwcqj2SS9S2wwrXZg3N2cXubuUnMMpzxOaeYeDc3gDUFKywr3cGR5KmA3eT1goHfepo1EoibgS9lK3NZwL27016YUS16bPYG4qa4mDtZUCk5S7e2u8zQePiDS0pWBhBdymMMOUUpDDNavAUdm41hMLzk52TY5vxFpkqNN6V7ay6v3KrZagOOej04wa2SeN4eS/rYPRnpstbj9bU0w6tUIyAJkktkuIzOLojiPdWNdsUQ3VmE4frGk8hO8pMqL3UVsEIsYGT4mJG+2kSRgh2drptKF4YFXBQKr+9GemkAWbsXABRpuQLngody5mGpDJeL6cdxBbrUKWumxxDtw0QS+p/sHxLcrYDA6fWlo/v36eBlRorO/CI6+NqJ7yVKM5+j1kWUhUHi0dN8wU/PL4xw7NUlEERNyIaIf5GJwB03oHycVulMQkxI07DPyOxEbI6mo2ybTdFZUzE5HB2+JgwxySZ9+Au8XpKTr7wwAlCGSaPjqspuQgSMvQCINngeA4lNb9vtyalCs966bQeidR7rL+0PlfUQh2EGEZuAh/gd6ISEJ4k8wAYSP9i4QwMBYH+hAglIVofLjDRJDABxKB4o2pmIOVioNEULgcFYqT9h2ziZjjJ7w/6sFYYD0u4IR2F51FmrNi3M8tkVK0J3vrk8McR2wBTYH/ISQeICHFWtejjcPrSDcglNAB/koA1sWATFbzWw+ufmoRLUCJ3IB0Q41qkkwdELtgCTJ/ZQpiYzVPtpg/X61Oj0ylXTlTosqNuAKvg13SLOVwKRvMYNs6w59I9OE6svsVLQA69ANc2ygwCp2CFtfIz8GBW3DO9PpAJPjAvE+KEGQMt3myTNGi40QXxmxG5vdxjHTIDplhgwHIYAFLGUkHwkxYeFQ5udonuF3/WI/u/4SkHceQyS/wMBF1PbDRgwvdIGT/kc4ELcVAMpOYNBicN+/oaBWkHM/TLNBha2WCaSOxi2YJTV5cwS5i5exJR2SIreYq7OKnRZjoT8PMkdhpma6V6G2UFhQLEDs9jdwAAT3838379rG1dDEz6vGO16vTvlwaXM8f5QDjGP/uCQM3gsD3xesquxTpDqcvgvPz7eDH025m4RnxXJjbYIHkZBtJG7GpPPlLjmY7p3HkndTR9vp6U0/+dYD+ha8J7udvl2gfViDr2SRoWdtHQHd1TmaktxFGE1Fg2kNEHKnLJoVnKTNfX7KCRIUUZSJp6MiQSI6KlaYfg1Urvanh9VY8HlsZrDYA+kUmbcn9SRx+nXLQAmPUdcTB/60B03+qjHeSSQeumPMXFgEn6Ou7K6810n6F+97FF+MhZPTDGoOdO+u/QgL721veG7sjZuOOa+r8Mn209gslDc2d1roJ+NnbMINOkGwgAlhM4ceuTpwAEo30cc5xZHwaoQNHFGW9EI3aSJDiSxS27IDGcsJGjNX6pVxZl2ivVwL5v9wCZtYaVf1g/IYK4y95x9KMQbQtIdD7pZpkbS4mXCbT8Oc+evVpq1MRSMZOO7Rb1/KAEhxwpPBSkAMQgjGydY2e/+t6+BsFgotqXYKWGRI7to2JVMzvol0enGdJN312OGOrG+Oy2YcWXEjIQq3DbFL2h1ZQcpwKuARVU+Ttjd2m3Ze23YJV76hRpb2yqxN6ONYBgrrDarvQwOinWENkLh2DzBWDgkSHyPcCIEsUwkFhZRXBDQoq7GxAqWiJNcsIpItSoQJTQixg191CuUqu2XIs/zErV6o9nq/ufV3udQOBqLo4e6HdlVSWoX3TckMcu8LjmfTuLS+28k9+UUXaPKKM6fPH3K+bLEZL/L4hRr8s9P/zsSAAT18uuK7M0daz7w//Affrvj//d/Pf1d208Aun9h2WYE0I5//wHdx3+weo7+h4q92xfxvQb+PW+/DyQBReF6Bs5dx5735OwGrnNdmC2EpSjbmyPYbfTYp/cLiKzSKA7iai+GTOHrb/0Dkek0dJZAx8GFcQLe6QDPtjHoVIV92Y/DHr5edcbE0N8dOoJhPworjUlRrWJlFbxeOo5SQXSMKI/q4af5PO2UUVSfHLIahG2wpK7qe4uYzjVluNHk0LAruMpFYVYXaA5ti+xlbs6VQJu0iZFWcO2J6Z6bC1Kql9NsjVM/Mr33R8B26Qdpx5NFFa3ev7AmHWB0m+q+ZGhEe4lJicCKAqMvzsFHkavq0NV5/S3DA2VzwMCxVjkOWKOwfheROq1zLpP5WjO0xecYNftpkMSYlH5WvRgo5OzVv8y/6J0AcTdJizkaRFvoVY4R04IDWVUradN9lYOzecLYpU0yI63MaZXM2E1jXA7BncDh1PJMjIQ+vya4T2o/6wcVvYiKXqFzNJCZcTLGYMNA1HCeNikZhyFEgM6TVpuUzNTn17TwE5i1AYUX0o6v3j80ig88Eec2uOVLBqhFkhXzYLTOGRFo0UZIsba88wIfA4NAm7Hwn8IyKiCLmbdvfwHJPln4ie42FdANWEAEnBxcb7pU8iDilhKFF+WgOa3bqZcalaNzn857qnIb/mN/3V9oWPcluwovPMID/607iwHPIpA0rK0dsAoLwtkA6BPQ1CPw9Az4YgYCpnwxizSLvphD2ChfzCMY3Rdr4E7UFwtIoR4/yzsw4IvPiWPaF58nkMOvvkDPxd/Xewu8efgJ34gn8qkgFcjceeB9eAcbFY0+hv2sBKMefyqSv4M/eOkcDoKxEhuFi9dTboh64278oSLms5A/WorELS+lwx89lY24U9pGuHwCrkvF2gmzr6t4ozuapIkTpYPxlkQidLT8NdWMcGmPxTOJCeExSHt7kifcII2q208Ejaco4eqS0rwJPKSm+YwXGgJZL9L7ExyJ4cz4BJJIjDKMGQQ+P+luAdVEe9dLJRDPZuaXFPfqk9lg6rjoj7zEeR+VImPU4a/+C4DEkAAZQUxgZggLlBWmEc7G8WFBlGRF1XQjEo2Zlh1PJFOOm/Yy2Vy+YPr/x/ygXKnW6o1mq93p9vogBCMohhMkRTMsxwuiJCuqphumZTuux+vzpz5ijLEOmef1d6aZbKmN1mS92/2vzS5b4RrRYqr5JjjhcdBhmU0s362rbHXOGdu00toMbVzQ1lnnXXHRJZe90c4NV12zXXufZ7rtpls6eOeDiTrpqLOuuuhmhe566jG//v721Uc//b01wCADDTbUEPusNNwwI4z03kcyidld94INsSV2xJ44EIE4En2c4hyXuMYt7nbYaY+9Ttplt1PG2xwmHXYkTMXLlLAzr137GsknAqLr32LB0Waexc8+Hs1nKycYHBBrgGPCeTjQOJAdaB5oHWgf6BzoHtgpqJo6rjTqsG1j+EuQyqb8Pnc6sH9Wdndn++7u59lUHOW+7m/xZx1f7zQa8THg3KA3lu9vib/rb47/RXtxsE9a+Z5wl/wmvnhSA/DsixaaAdvn3wNnz74Htc9/AP507yWBQs+GthD8bPCZCHkWfLXYYdArEY7RD9QIHq17CDuOb5NAXPYLwP/zdcDJ3OcS15xCzyE3Jli/J8ya+2fhxy8BAAAA) format('woff2'),\n         url(data:application/font-woff;charset=utf-8;base64,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) format('woff');\n    font-weight: normal;\n    font-style: normal;\n\t}")
            };
        module.exports = {
            addFontGaegu: A,
            addFontIndieFlower: P
        };
    }, {}],
    "Zxo0": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        var t = require("d3-selection"),
            i = o(require("lodash.get")),
            e = require("./utils/addFonts");

        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        class s {
            constructor(t) {
                this.el = t.element, this.element = t.element, this.title = t.title, this.titleFontSize = t.titleFontSize, this.font = (0, i.default)(t, "font", 0), this.fillStyle = t.fillStyle, this.tooltipFontSize = (0, i.default)(t, "tooltipFontSize", "0.95rem"), this.bowing = (0, i.default)(t, "bowing", 0), this.simplification = (0, i.default)(t, "simplification", .2), this.interactive = !1 !== t.interactive, this.dataFormat = "object" == typeof t.data ? "object" : "file"
            }
            setSvg() {
                this.svg = (0, t.select)(this.el).append("svg").attr("width", this.width + this.margin.left + this.margin.right).attr("height", this.height + this.margin.top + this.margin.bottom).append("g").attr("id", this.roughId).attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")")
            }
            resolveFont() {
                0 === this.font || void 0 === this.font || "gaegu" === this.font.toString().toLowerCase() ? ((0, e.addFontGaegu)(this.svg), this.fontFamily = "gaeguregular") : 1 === this.font || "indie flower" === this.font.toString().toLowerCase() ? ((0, e.addFontIndieFlower)(this.svg), this.fontFamily = "indie_flowerregular") : this.fontFamily = this.font
            }
        }
        var a = s;
        exports.default = a;
    }, {
        "d3-selection": "ysDv",
        "lodash.get": "ZEnN",
        "./utils/addFonts": "mEik"
    }],
    "r4B0": [function(require, module, exports) {
        const e = 20,
            o = 1,
            u = ({
                roughness: e,
                ceiling: o = 20,
                defaultValue: u = 1
            }) => void 0 === e || "number" != typeof e ? u : e > o ? o : e;
        module.exports = {
            roughCeiling: u,
            DEFAULT_CEILING: 20,
            DEFAULT_VALUE: 1
        };
    }, {}],
    "BINh": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        var t = require("d3-array"),
            i = require("d3-axis"),
            s = require("d3-fetch"),
            e = require("d3-format"),
            a = require("d3-scale"),
            h = require("d3-selection"),
            l = d(require("roughjs/bundled/rough.esm.js")),
            r = d(require("lodash.get")),
            o = d(require("./Chart")),
            n = require("./utils/roughCeiling");

        function d(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        class c extends o.default {
            constructor(t) {
                super(t), this.data = t.data, this.margin = t.margin || {
                    top: 50,
                    right: 20,
                    bottom: 70,
                    left: 100
                }, this.color = (0, r.default)(t, "color", "skyblue"), this.highlight = (0, r.default)(t, "highlight", "coral"), this.roughness = (0, n.roughCeiling)({
                    roughness: t.roughness
                }), this.stroke = (0, r.default)(t, "stroke", "black"), this.strokeWidth = (0, r.default)(t, "strokeWidth", 1), this.axisStrokeWidth = (0, r.default)(t, "axisStrokeWidth", .5), this.axisRoughness = (0, r.default)(t, "axisRoughness", .5), this.innerStrokeWidth = (0, r.default)(t, "innerStrokeWidth", 1), this.fillWeight = (0, r.default)(t, "fillWeight", .5), this.axisFontSize = t.axisFontSize, this.labels = "object" === this.dataFormat ? "labels" : t.labels, this.values = "object" === this.dataFormat ? "values" : t.values, this.xValueFormat = t.xValueFormat, this.yValueFormat = t.yValueFormat, this.padding = (0, r.default)(t, "padding", .1), this.xLabel = (0, r.default)(t, "xLabel", ""), this.yLabel = (0, r.default)(t, "yLabel", ""), this.labelFontSize = (0, r.default)(t, "labelFontSize", "1rem"), this.initChartValues(t), this.resolveFont(), this.drawChart = this.resolveData(t.data), this.drawChart(), "undefined" !== t.title && this.setTitle(t.title)
            }
            initChartValues(t) {
                const i = t.width ? t.width : 350,
                    s = t.height ? t.height : 450;
                this.width = i - this.margin.left - this.margin.right, this.height = s - this.margin.top - this.margin.bottom, this.roughId = this.el + "_svg", this.graphClass = this.el.substring(1, this.el.length), this.interactionG = "g." + this.graphClass, this.setSvg()
            }
            resolveData(t) {
                return "string" != typeof t ? () => {
                    this.data = t, this.drawFromObject()
                } : t.includes(".csv") ? () => {
                    (0, s.csv)(t).then(t => {
                        this.data = t, this.drawFromFile()
                    })
                } : t.includes(".tsv") ? () => {
                    (0, s.tsv)(t).then(t => {
                        this.data = t, this.drawFromFile()
                    })
                } : void 0
            }
            addScales() {
                const i = this;
                this.xScale = (0, a.scaleBand)().rangeRound([0, this.width]).padding(this.padding).domain("file" === this.dataFormat ? this.data.map(t => t[i.labels]) : this.data[i.labels]), this.yScale = (0, a.scaleLinear)().rangeRound([this.height, 0]).domain("file" === this.dataFormat ? [0, (0, t.max)(this.data, t => +t[i.values])] : [0, (0, t.max)(this.data[i.values])])
            }
            addLabels() {
                "" !== this.xLabel && this.svg.append("text").attr("x", this.width / 2).attr("y", this.height + this.margin.bottom / 2).attr("dx", "1em").attr("class", "labelText").style("text-anchor", "middle").style("font-family", this.fontFamily).style("font-size", this.labelFontSize).text(this.xLabel), "" !== this.yLabel && this.svg.append("text").attr("transform", "rotate(-90)").attr("y", 0 - this.margin.left / 1.4).attr("x", 0 - this.height / 2).attr("dy", "1em").attr("class", "labelText").style("text-anchor", "middle").style("font-family", this.fontFamily).style("font-size", this.labelFontSize).text(this.yLabel)
            }
            addAxes() {
                const t = (0, i.axisBottom)(this.xScale).tickSize(0).tickFormat(t => this.xValueFormat ? (0, e.format)(this.xValueFormat)(t) : t),
                    s = (0, i.axisLeft)(this.yScale).tickSize(0).tickFormat(t => this.yValueFormat ? (0, e.format)(this.yValueFormat)(t) : t);
                this.svg.append("g").attr("transform", "translate(0," + this.height + ")").call(t).attr("class", `xAxis${this.graphClass}`).selectAll("text").attr("transform", "translate(-10,0)rotate(-45)").style("text-anchor", "end").style("font-family", this.fontFamily).style("font-size", void 0 === this.axisFontSize ? `${Math.min(.8,Math.min(this.width,this.height)/140)}rem` : this.axisFontSize).style("opacity", .9), this.svg.append("g").call(s).attr("class", `yAxis${this.graphClass}`).selectAll("text").style("font-family", this.fontFamily).style("font-size", void 0 === this.axisFontSize ? `${Math.min(.95,Math.min(this.width,this.height)/140)}rem` : this.axisFontSize).style("opacity", .9), (0, h.selectAll)("path.domain").attr("stroke", "transparent")
            }
            makeAxesRough(t, i) {
                const s = `xAxis${this.graphClass}`,
                    e = `yAxis${this.graphClass}`,
                    a = `rough-${s}`,
                    l = `rough-${e}`;
                (0, h.select)(`.${s}`).selectAll("path.domain").each(function(s, e) {
                    const l = (0, h.select)(this).node().getAttribute("d"),
                        r = i.path(l, {
                            fillStyle: "hachure"
                        });
                    r.setAttribute("class", a), t.appendChild(r)
                }), (0, h.selectAll)(`.${a}`).attr("transform", `translate(0, ${this.height})`), (0, h.select)(`.${e}`).selectAll("path.domain").each(function(s, e) {
                    const a = (0, h.select)(this).node().getAttribute("d"),
                        r = i.path(a, {
                            fillStyle: "hachure"
                        });
                    r.setAttribute("class", l), t.appendChild(r)
                })
            }
            setTitle(t) {
                this.svg.append("text").attr("x", this.width / 2).attr("y", 0 - this.margin.top / 2).attr("class", "title").attr("text-anchor", "middle").style("font-size", void 0 === this.titleFontSize ? `${Math.min(40,Math.min(this.width,this.height)/5)}px` : this.titleFontSize).style("font-family", this.fontFamily).style("opacity", .8).text(t)
            }
            addInteraction() {
                (0, h.selectAll)(this.interactionG).data("file" === this.dataFormat ? this.data : this.data.values).append("rect").attr("x", (t, i) => "file" === this.dataFormat ? this.xScale(t[this.labels]) : this.xScale(this.data[this.labels][i])).attr("y", (t, i) => "file" === this.dataFormat ? this.yScale(+t[this.values]) : this.yScale(this.data[this.values][i])).attr("width", this.xScale.bandwidth()).attr("height", (t, i) => "file" === this.dataFormat ? this.height - this.yScale(+t[this.values]) : this.height - this.yScale(this.data[this.values][i])).attr("fill", "transparent");
                const t = (0, h.select)(this.el).append("div").style("opacity", 0).attr("class", "tooltip").style("position", "absolute").style("background-color", "white").style("border", "solid").style("border-width", "1px").style("border-radius", "5px").style("padding", "3px").style("font-family", this.fontFamily).style("font-size", this.tooltipFontSize).style("pointer-events", "none");
                const i = this;
                (0, h.selectAll)(this.interactionG).on("mouseover", function() {
                    t.style("opacity", 1), (0, h.select)(this).select("path").style("stroke", i.highlight), (0, h.select)(this).selectAll("path:nth-child(2)").style("stroke-width", i.strokeWidth + 1.2)
                }), (0, h.selectAll)(this.interactionG).on("mouseout", function() {
                    t.style("opacity", 0), (0, h.select)(this).select("path").style("stroke", i.color), (0, h.select)(this).selectAll("path:nth-child(2)").style("stroke-width", i.strokeWidth)
                }), (0, h.selectAll)(this.interactionG).on("mousemove", function(s) {
                    const e = (0, h.select)(this).attr("attrX"),
                        a = (0, h.select)(this).attr("attrY"),
                        l = (0, h.mouse)(this);
                    t.html(`<b>${e}</b>: ${a}`).style("opacity", .95).attr("class", function(t) {}).style("transform", `translate(${l[0]+i.margin.left}px, \n          ${l[1]-(i.height+i.margin.top+i.margin.bottom)}px)`)
                })
            }
            initRoughObjects() {
                this.roughSvg = document.getElementById(this.roughId), this.rcAxis = l.default.svg(this.roughSvg, {
                    options: {
                        strokeWidth: this.axisStrokeWidth,
                        roughness: this.axisRoughness
                    }
                }), this.rc = l.default.svg(this.roughSvg, {
                    options: {
                        fill: this.color,
                        stroke: "none" === this.stroke ? void 0 : this.stroke,
                        strokeWidth: this.innerStrokeWidth,
                        roughness: this.roughness,
                        bowing: this.bowing,
                        fillStyle: this.fillStyle
                    }
                })
            }
            drawFromObject() {
                this.initRoughObjects(), this.addScales(), this.addAxes(), this.makeAxesRough(this.roughSvg, this.rcAxis), this.addLabels(), this.data.values.forEach((t, i) => {
                    const s = this.rc.rectangle(this.xScale(this.data[this.labels][i]), this.yScale(+t), this.xScale.bandwidth(), this.height - this.yScale(+t), {
                            simplification: this.simplification,
                            fillWeight: this.fillWeight
                        }),
                        e = this.roughSvg.appendChild(s);
                    e.setAttribute("class", this.graphClass), e.setAttribute("attrX", this.data[this.labels][i]), e.setAttribute("attrY", +t)
                }), (0, h.selectAll)(this.interactionG).selectAll("path:nth-child(2)").style("stroke-width", this.strokeWidth), !0 === this.interactive && this.addInteraction()
            }
            drawFromFile() {
                this.initRoughObjects(), this.addScales(), this.addAxes(), this.makeAxesRough(this.roughSvg, this.rcAxis), this.addLabels(), this.data.forEach(t => {
                    const i = this.rc.rectangle(this.xScale(t[this.labels]), this.yScale(+t[this.values]), this.xScale.bandwidth(), this.height - this.yScale(+t[this.values]), {
                            simplification: this.simplification,
                            fillWeight: this.fillWeight
                        }),
                        s = this.roughSvg.appendChild(i);
                    s.setAttribute("class", this.graphClass), s.setAttribute("attrX", t[this.labels]), s.setAttribute("attrY", +t[this.values])
                }), (0, h.selectAll)(this.interactionG).selectAll("path:nth-child(2)").style("stroke-width", this.strokeWidth), !0 === this.interactive && this.addInteraction()
            }
        }
        var u = c;
        exports.default = u;
    }, {
        "d3-array": "K0bd",
        "d3-axis": "mp0m",
        "d3-fetch": "grWT",
        "d3-format": "VuZR",
        "d3-scale": "zL2z",
        "d3-selection": "ysDv",
        "roughjs/bundled/rough.esm.js": "ze2Z",
        "lodash.get": "ZEnN",
        "./Chart": "Zxo0",
        "./utils/roughCeiling": "r4B0"
    }],
    "fuO1": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        var t = require("d3-array"),
            i = require("d3-axis"),
            s = require("d3-fetch"),
            e = require("d3-format"),
            a = require("d3-scale"),
            h = require("d3-selection"),
            l = d(require("roughjs/bundled/rough.esm.js")),
            r = d(require("lodash.get")),
            o = d(require("./Chart")),
            n = require("./utils/roughCeiling");

        function d(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        class c extends o.default {
            constructor(t) {
                super(t), this.margin = t.margin || {
                    top: 50,
                    right: 20,
                    bottom: 50,
                    left: 100
                }, this.color = (0, r.default)(t, "color", "skyblue"), this.highlight = (0, r.default)(t, "highlight", "coral"), this.roughness = (0, n.roughCeiling)({
                    roughness: t.roughness
                }), this.stroke = (0, r.default)(t, "stroke", "black"), this.strokeWidth = (0, r.default)(t, "strokeWidth", 1), this.axisStrokeWidth = (0, r.default)(t, "axisStrokeWidth", .5), this.axisRoughness = (0, r.default)(t, "axisRoughness", .5), this.innerStrokeWidth = (0, r.default)(t, "innerStrokeWidth", 1), this.fillWeight = (0, r.default)(t, "fillWeight", .5), this.axisFontSize = t.axisFontSize, this.labels = "object" === this.dataFormat ? "labels" : t.labels, this.values = "object" === this.dataFormat ? "values" : t.values, this.xValueFormat = t.xValueFormat, this.yValueFormat = t.yValueFormat, this.padding = (0, r.default)(t, "padding", .1), this.xLabel = (0, r.default)(t, "xLabel", ""), this.yLabel = (0, r.default)(t, "yLabel", ""), this.labelFontSize = (0, r.default)(t, "labelFontSize", "1rem"), this.initChartValues(t), this.resolveFont(), this.drawChart = this.resolveData(t.data), this.drawChart(), "undefined" !== t.title && this.setTitle(t.title)
            }
            initChartValues(t) {
                const i = t.width ? t.width : 350,
                    s = t.height ? t.height : 450;
                this.width = i - this.margin.left - this.margin.right, this.height = s - this.margin.top - this.margin.bottom, this.roughId = this.el + "_svg", this.graphClass = this.el.substring(1, this.el.length), this.interactionG = "g." + this.graphClass, this.setSvg()
            }
            resolveData(t) {
                return "string" != typeof t ? () => {
                    this.data = t, this.drawFromObject()
                } : t.includes(".csv") ? () => {
                    (0, s.csv)(t).then(t => {
                        console.log(t), this.data = t, this.drawFromFile()
                    })
                } : t.includes(".tsv") ? () => {
                    (0, s.tsv)(t).then(t => {
                        this.data = t, this.drawFromFile()
                    })
                } : void 0
            }
            addScales() {
                const i = this;
                this.yScale = (0, a.scaleBand)().rangeRound([0, this.height]).padding(this.padding).domain("file" === this.dataFormat ? this.data.map(t => t[i.labels]) : this.data[i.labels]), this.xScale = (0, a.scaleLinear)().rangeRound([0, this.width]).domain("file" === this.dataFormat ? [0, (0, t.max)(this.data, t => +t[i.values])] : [0, (0, t.max)(this.data[i.values])])
            }
            addLabels() {
                "" !== this.xLabel && this.svg.append("text").attr("x", this.width / 2).attr("y", this.height + this.margin.bottom / 2.4).attr("dx", "1em").attr("class", "labelText").style("text-anchor", "middle").style("font-family", this.fontFamily).style("font-size", this.labelFontSize).text(this.xLabel), "" !== this.yLabel && this.svg.append("text").attr("transform", "rotate(-90)").attr("y", 0 - this.margin.left / 1.5).attr("x", 0 - this.height / 2).attr("dy", "1em").attr("class", "labelText").style("text-anchor", "middle").style("font-family", this.fontFamily).style("font-size", this.labelFontSize).text(this.yLabel)
            }
            addAxes() {
                const t = (0, i.axisBottom)(this.xScale).tickSize(0).tickFormat(t => this.xValueFormat ? (0, e.format)(this.xValueFormat)(t) : t),
                    s = (0, i.axisLeft)(this.yScale).tickSize(0).tickFormat(t => this.yValueFormat ? (0, e.format)(this.yValueFormat)(t) : t);
                this.svg.append("g").attr("transform", `translate(0, ${this.height})`).call(t).attr("class", `xAxis${this.graphClass}`).selectAll("text").attr("transform", "translate(-10,0)rotate(-45)").style("text-anchor", "end").style("font-family", this.fontFamily).style("font-size", void 0 === this.axisFontSize ? `${Math.min(.95,Math.min(this.width,this.height)/140)}rem` : this.axisFontSize).style("opacity", .85), this.svg.append("g").call(s).attr("class", `yAxis${this.graphClass}`).selectAll("text").style("font-family", this.fontFamily).style("font-size", void 0 === this.axisFontSize ? `${Math.min(.95,Math.min(this.width,this.height)/140)}rem` : this.axisFontSize).style("opacity", .85), (0, h.selectAll)("path.domain").attr("stroke", "transparent")
            }
            makeAxesRough(t, i) {
                const s = `xAxis${this.graphClass}`,
                    e = `yAxis${this.graphClass}`,
                    a = `rough-${s}`,
                    l = `rough-${e}`;
                (0, h.select)(`.${s}`).selectAll("path.domain").each(function(s, e) {
                    const l = (0, h.select)(this).node().getAttribute("d"),
                        r = i.path(l, {
                            stroke: "black",
                            fillStyle: "hachure"
                        });
                    r.setAttribute("class", a), t.appendChild(r)
                }), (0, h.selectAll)(`.${a}`).attr("transform", `translate(0, ${this.height})`), (0, h.select)(`.${e}`).selectAll("path.domain").each(function(s, e) {
                    const a = (0, h.select)(this).node().getAttribute("d"),
                        r = i.path(a, {
                            stroke: "black",
                            fillStyle: "hachure"
                        });
                    r.setAttribute("class", l), t.appendChild(r)
                })
            }
            setTitle(t) {
                this.svg.append("text").attr("x", this.width / 2).attr("y", 0 - this.margin.top / 2).attr("class", "title").attr("text-anchor", "middle").style("font-size", void 0 === this.titleFontSize ? `${Math.min(40,Math.min(this.width,this.height)/5)}px` : this.titleFontSize).style("font-family", this.fontFamily).style("opacity", .8).text(t)
            }
            addInteraction() {
                (0, h.selectAll)(this.interactionG).data("file" === this.dataFormat ? this.data : this.data.values).append("rect").attr("x", 0).attr("y", (t, i) => "file" === this.dataFormat ? this.yScale(t[this.labels]) : this.yScale(this.data[this.labels][i])).attr("width", (t, i) => "file" === this.dataFormat ? this.xScale(+t[this.values]) : this.xScale(this.data[this.values][i])).attr("height", this.yScale.bandwidth()).attr("fill", "transparent");
                const t = (0, h.select)(this.el).append("div").style("opacity", 0).attr("class", "tooltip").style("position", "absolute").style("background-color", "white").style("border", "solid").style("border-width", "1px").style("border-radius", "5px").style("padding", "3px").style("font-family", this.fontFamily).style("font-size", this.tooltipFontSize).style("pointer-events", "none");
                const i = this;
                (0, h.selectAll)(this.interactionG).on("mouseover", function() {
                    t.style("opacity", 1), (0, h.select)(this).select("path").style("stroke", i.highlight), (0, h.select)(this).selectAll("path:nth-child(2)").style("stroke-width", i.strokeWidth + 1.2)
                }), (0, h.selectAll)(this.interactionG).on("mouseout", function() {
                    t.style("opacity", 0), (0, h.select)(this).select("path").style("stroke", i.color), (0, h.select)(this).selectAll("path:nth-child(2)").style("stroke-width", i.strokeWidth)
                }), (0, h.selectAll)(this.interactionG).on("mousemove", function(s) {
                    const e = (0, h.select)(this).attr("attrX"),
                        a = (0, h.select)(this).attr("attrY"),
                        l = (0, h.mouse)(this);
                    t.html(`<b>${e}</b>: ${a}`).style("opacity", .95).attr("class", function(t) {}).style("transform", `translate(${l[0]+i.margin.left}px, \n              ${l[1]-(i.height+i.margin.top+i.margin.bottom)}px)`)
                })
            }
            initRoughObjects() {
                this.roughSvg = document.getElementById(this.roughId), this.rcAxis = l.default.svg(this.roughSvg, {
                    options: {
                        strokeWidth: this.axisStrokeWidth,
                        roughness: this.axisRoughness
                    }
                }), this.rc = l.default.svg(this.roughSvg, {
                    options: {
                        fill: this.color,
                        stroke: "none" === this.stroke ? void 0 : this.stroke,
                        strokeWidth: this.innerStrokeWidth,
                        roughness: this.roughness,
                        bowing: this.bowing,
                        fillStyle: this.fillStyle
                    }
                })
            }
            drawFromObject() {
                this.initRoughObjects(), this.addScales(), this.addAxes(), this.makeAxesRough(this.roughSvg, this.rcAxis), this.addLabels(), this.data.values.forEach((t, i) => {
                    const s = this.rc.rectangle(0, this.yScale(this.data[this.labels][i]), this.xScale(t), this.yScale.bandwidth(), {
                            simplification: this.simplification,
                            fillWeight: this.fillWeight
                        }),
                        e = this.roughSvg.appendChild(s);
                    e.setAttribute("class", this.graphClass), e.setAttribute("attrX", this.data[this.labels][i]), e.setAttribute("attrY", +t)
                }), (0, h.selectAll)(this.interactionG).selectAll("path:nth-child(2)").style("stroke-width", this.strokeWidth), !0 === this.interactive && this.addInteraction()
            }
            drawFromFile() {
                this.initRoughObjects(), this.addScales(), this.addAxes(), this.makeAxesRough(this.roughSvg, this.rcAxis), this.addLabels(), this.data.forEach(t => {
                    const i = this.rc.rectangle(0, this.yScale(t[this.labels]), this.xScale(+t[this.values]), this.yScale.bandwidth(), {
                            simplification: this.simplification,
                            fillWeight: this.fillWeight
                        }),
                        s = this.roughSvg.appendChild(i);
                    s.setAttribute("class", this.graphClass), s.setAttribute("attrX", t[this.labels]), s.setAttribute("attrY", +t[this.values])
                }), (0, h.selectAll)(this.interactionG).selectAll("path:nth-child(2)").style("stroke-width", this.strokeWidth), !0 === this.interactive && this.addInteraction()
            }
        }
        var u = c;
        exports.default = u;
    }, {
        "d3-array": "K0bd",
        "d3-axis": "mp0m",
        "d3-fetch": "grWT",
        "d3-format": "VuZR",
        "d3-scale": "zL2z",
        "d3-selection": "ysDv",
        "roughjs/bundled/rough.esm.js": "ze2Z",
        "lodash.get": "ZEnN",
        "./Chart": "Zxo0",
        "./utils/roughCeiling": "r4B0"
    }],
    "hMob": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        var t = Math.PI,
            i = 2 * t,
            s = 1e-6,
            h = i - s;

        function _() {
            this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = ""
        }

        function n() {
            return new _
        }
        _.prototype = n.prototype = {
            constructor: _,
            moveTo: function(t, i) {
                this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +i)
            },
            closePath: function() {
                null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z")
            },
            lineTo: function(t, i) {
                this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +i)
            },
            quadraticCurveTo: function(t, i, s, h) {
                this._ += "Q" + +t + "," + +i + "," + (this._x1 = +s) + "," + (this._y1 = +h)
            },
            bezierCurveTo: function(t, i, s, h, _, n) {
                this._ += "C" + +t + "," + +i + "," + +s + "," + +h + "," + (this._x1 = +_) + "," + (this._y1 = +n)
            },
            arcTo: function(i, h, _, n, e) {
                i = +i, h = +h, _ = +_, n = +n, e = +e;
                var r = this._x1,
                    o = this._y1,
                    a = _ - i,
                    u = n - h,
                    x = r - i,
                    c = o - h,
                    y = x * x + c * c;
                if (e < 0) throw new Error("negative radius: " + e);
                if (null === this._x1) this._ += "M" + (this._x1 = i) + "," + (this._y1 = h);
                else if (y > s)
                    if (Math.abs(c * a - u * x) > s && e) {
                        var f = _ - r,
                            M = n - o,
                            l = a * a + u * u,
                            v = f * f + M * M,
                            d = Math.sqrt(l),
                            p = Math.sqrt(y),
                            b = e * Math.tan((t - Math.acos((l + y - v) / (2 * d * p))) / 2),
                            w = b / p,
                            T = b / d;
                        Math.abs(w - 1) > s && (this._ += "L" + (i + w * x) + "," + (h + w * c)), this._ += "A" + e + "," + e + ",0,0," + +(c * f > x * M) + "," + (this._x1 = i + T * a) + "," + (this._y1 = h + T * u)
                    } else this._ += "L" + (this._x1 = i) + "," + (this._y1 = h);
                else;
            },
            arc: function(_, n, e, r, o, a) {
                _ = +_, n = +n, a = !!a;
                var u = (e = +e) * Math.cos(r),
                    x = e * Math.sin(r),
                    c = _ + u,
                    y = n + x,
                    f = 1 ^ a,
                    M = a ? r - o : o - r;
                if (e < 0) throw new Error("negative radius: " + e);
                null === this._x1 ? this._ += "M" + c + "," + y : (Math.abs(this._x1 - c) > s || Math.abs(this._y1 - y) > s) && (this._ += "L" + c + "," + y), e && (M < 0 && (M = M % i + i), M > h ? this._ += "A" + e + "," + e + ",0,1," + f + "," + (_ - u) + "," + (n - x) + "A" + e + "," + e + ",0,1," + f + "," + (this._x1 = c) + "," + (this._y1 = y) : M > s && (this._ += "A" + e + "," + e + ",0," + +(M >= t) + "," + f + "," + (this._x1 = _ + e * Math.cos(o)) + "," + (this._y1 = n + e * Math.sin(o))))
            },
            rect: function(t, i, s, h) {
                this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +i) + "h" + +s + "v" + +h + "h" + -s + "Z"
            },
            toString: function() {
                return this._
            }
        };
        var e = n;
        exports.default = e;
    }, {}],
    "OTyq": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), Object.defineProperty(exports, "path", {
            enumerable: !0,
            get: function() {
                return e.default
            }
        });
        var e = t(require("./path"));

        function t(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    }, {
        "./path": "hMob"
    }],
    "kIKs": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.acos = h, exports.asin = M, exports.tau = exports.halfPi = exports.pi = exports.epsilon = exports.sqrt = exports.sin = exports.min = exports.max = exports.cos = exports.atan2 = exports.abs = void 0;
        var t = Math.abs;
        exports.abs = t;
        var r = Math.atan2;
        exports.atan2 = r;
        var s = Math.cos;
        exports.cos = s;
        var a = Math.max;
        exports.max = a;
        var e = Math.min;
        exports.min = e;
        var o = Math.sin;
        exports.sin = o;
        var p = Math.sqrt;
        exports.sqrt = p;
        var x = 1e-12;
        exports.epsilon = x;
        var n = Math.PI;
        exports.pi = n;
        var i = n / 2;
        exports.halfPi = i;
        var v = 2 * n;

        function h(t) {
            return t > 1 ? 0 : t < -1 ? n : Math.acos(t)
        }

        function M(t) {
            return t >= 1 ? i : t <= -1 ? -i : Math.asin(t)
        }
        exports.tau = v;
    }, {}],
    "BL7I": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = f;
        var n = require("d3-path"),
            t = a(require("./constant")),
            e = require("./math");

        function a(n) {
            return n && n.__esModule ? n : {
                default: n
            }
        }

        function i(n) {
            return n.innerRadius
        }

        function r(n) {
            return n.outerRadius
        }

        function o(n) {
            return n.startAngle
        }

        function c(n) {
            return n.endAngle
        }

        function u(n) {
            return n && n.padAngle
        }

        function l(n, t, a, i, r, o, c, u) {
            var l = a - n,
                s = i - t,
                f = c - r,
                p = u - o,
                y = p * l - f * s;
            if (!(y * y < e.epsilon)) return [n + (y = (f * (t - o) - p * (n - r)) / y) * l, t + y * s]
        }

        function s(n, t, a, i, r, o, c) {
            var u = n - a,
                l = t - i,
                s = (c ? o : -o) / (0, e.sqrt)(u * u + l * l),
                f = s * l,
                p = -s * u,
                y = n + f,
                x = t + p,
                d = a + f,
                h = i + p,
                v = (y + d) / 2,
                g = (x + h) / 2,
                m = d - y,
                q = h - x,
                T = m * m + q * q,
                A = r - o,
                R = y * h - d * x,
                P = (q < 0 ? -1 : 1) * (0, e.sqrt)((0, e.max)(0, A * A * T - R * R)),
                _ = (R * q - m * P) / T,
                b = (-R * m - q * P) / T,
                M = (R * q + m * P) / T,
                j = (-R * m + q * P) / T,
                O = _ - v,
                k = b - g,
                w = M - v,
                z = j - g;
            return O * O + k * k > w * w + z * z && (_ = M, b = j), {
                cx: _,
                cy: b,
                x01: -f,
                y01: -p,
                x11: _ * (r / A - 1),
                y11: b * (r / A - 1)
            }
        }

        function f() {
            var a = i,
                f = r,
                p = (0, t.default)(0),
                y = null,
                x = o,
                d = c,
                h = u,
                v = null;

            function g() {
                var t, i, r = +a.apply(this, arguments),
                    o = +f.apply(this, arguments),
                    c = x.apply(this, arguments) - e.halfPi,
                    u = d.apply(this, arguments) - e.halfPi,
                    g = (0, e.abs)(u - c),
                    m = u > c;
                if (v || (v = t = (0, n.path)()), o < r && (i = o, o = r, r = i), o > e.epsilon)
                    if (g > e.tau - e.epsilon) v.moveTo(o * (0, e.cos)(c), o * (0, e.sin)(c)), v.arc(0, 0, o, c, u, !m), r > e.epsilon && (v.moveTo(r * (0, e.cos)(u), r * (0, e.sin)(u)), v.arc(0, 0, r, u, c, m));
                    else {
                        var q, T, A = c,
                            R = u,
                            P = c,
                            _ = u,
                            b = g,
                            M = g,
                            j = h.apply(this, arguments) / 2,
                            O = j > e.epsilon && (y ? +y.apply(this, arguments) : (0, e.sqrt)(r * r + o * o)),
                            k = (0, e.min)((0, e.abs)(o - r) / 2, +p.apply(this, arguments)),
                            w = k,
                            z = k;
                        if (O > e.epsilon) {
                            var B = (0, e.asin)(O / r * (0, e.sin)(j)),
                                C = (0, e.asin)(O / o * (0, e.sin)(j));
                            (b -= 2 * B) > e.epsilon ? (P += B *= m ? 1 : -1, _ -= B) : (b = 0, P = _ = (c + u) / 2), (M -= 2 * C) > e.epsilon ? (A += C *= m ? 1 : -1, R -= C) : (M = 0, A = R = (c + u) / 2)
                        }
                        var D = o * (0, e.cos)(A),
                            E = o * (0, e.sin)(A),
                            F = r * (0, e.cos)(_),
                            G = r * (0, e.sin)(_);
                        if (k > e.epsilon) {
                            var H, I = o * (0, e.cos)(R),
                                J = o * (0, e.sin)(R),
                                K = r * (0, e.cos)(P),
                                L = r * (0, e.sin)(P);
                            if (g < e.pi && (H = l(D, E, K, L, I, J, F, G))) {
                                var N = D - H[0],
                                    Q = E - H[1],
                                    S = I - H[0],
                                    U = J - H[1],
                                    V = 1 / (0, e.sin)((0, e.acos)((N * S + Q * U) / ((0, e.sqrt)(N * N + Q * Q) * (0, e.sqrt)(S * S + U * U))) / 2),
                                    W = (0, e.sqrt)(H[0] * H[0] + H[1] * H[1]);
                                w = (0, e.min)(k, (r - W) / (V - 1)), z = (0, e.min)(k, (o - W) / (V + 1))
                            }
                        }
                        M > e.epsilon ? z > e.epsilon ? (q = s(K, L, D, E, o, z, m), T = s(I, J, F, G, o, z, m), v.moveTo(q.cx + q.x01, q.cy + q.y01), z < k ? v.arc(q.cx, q.cy, z, (0, e.atan2)(q.y01, q.x01), (0, e.atan2)(T.y01, T.x01), !m) : (v.arc(q.cx, q.cy, z, (0, e.atan2)(q.y01, q.x01), (0, e.atan2)(q.y11, q.x11), !m), v.arc(0, 0, o, (0, e.atan2)(q.cy + q.y11, q.cx + q.x11), (0, e.atan2)(T.cy + T.y11, T.cx + T.x11), !m), v.arc(T.cx, T.cy, z, (0, e.atan2)(T.y11, T.x11), (0, e.atan2)(T.y01, T.x01), !m))) : (v.moveTo(D, E), v.arc(0, 0, o, A, R, !m)) : v.moveTo(D, E), r > e.epsilon && b > e.epsilon ? w > e.epsilon ? (q = s(F, G, I, J, r, -w, m), T = s(D, E, K, L, r, -w, m), v.lineTo(q.cx + q.x01, q.cy + q.y01), w < k ? v.arc(q.cx, q.cy, w, (0, e.atan2)(q.y01, q.x01), (0, e.atan2)(T.y01, T.x01), !m) : (v.arc(q.cx, q.cy, w, (0, e.atan2)(q.y01, q.x01), (0, e.atan2)(q.y11, q.x11), !m), v.arc(0, 0, r, (0, e.atan2)(q.cy + q.y11, q.cx + q.x11), (0, e.atan2)(T.cy + T.y11, T.cx + T.x11), m), v.arc(T.cx, T.cy, w, (0, e.atan2)(T.y11, T.x11), (0, e.atan2)(T.y01, T.x01), !m))) : v.arc(0, 0, r, _, P, m) : v.lineTo(F, G)
                    }
                else v.moveTo(0, 0);
                if (v.closePath(), t) return v = null, t + "" || null
            }
            return g.centroid = function() {
                var n = (+a.apply(this, arguments) + +f.apply(this, arguments)) / 2,
                    t = (+x.apply(this, arguments) + +d.apply(this, arguments)) / 2 - e.pi / 2;
                return [(0, e.cos)(t) * n, (0, e.sin)(t) * n]
            }, g.innerRadius = function(n) {
                return arguments.length ? (a = "function" == typeof n ? n : (0, t.default)(+n), g) : a
            }, g.outerRadius = function(n) {
                return arguments.length ? (f = "function" == typeof n ? n : (0, t.default)(+n), g) : f
            }, g.cornerRadius = function(n) {
                return arguments.length ? (p = "function" == typeof n ? n : (0, t.default)(+n), g) : p
            }, g.padRadius = function(n) {
                return arguments.length ? (y = null == n ? null : "function" == typeof n ? n : (0, t.default)(+n), g) : y
            }, g.startAngle = function(n) {
                return arguments.length ? (x = "function" == typeof n ? n : (0, t.default)(+n), g) : x
            }, g.endAngle = function(n) {
                return arguments.length ? (d = "function" == typeof n ? n : (0, t.default)(+n), g) : d
            }, g.padAngle = function(n) {
                return arguments.length ? (h = "function" == typeof n ? n : (0, t.default)(+n), g) : h
            }, g.context = function(n) {
                return arguments.length ? (v = null == n ? null : n, g) : v
            }, g
        }
    }, {
        "d3-path": "OTyq",
        "./constant": "aCvo",
        "./math": "kIKs"
    }],
    "L3Qx": [function(require, module, exports) {
        "use strict";

        function t(t) {
            this._context = t
        }

        function i(i) {
            return new t(i)
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = i, t.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._point = 0
            },
            lineEnd: function() {
                (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function(t, i) {
                switch (t = +t, i = +i, this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, i) : this._context.moveTo(t, i);
                        break;
                    case 1:
                        this._point = 2;
                    default:
                        this._context.lineTo(t, i)
                }
            }
        };
    }, {}],
    "LnI9": [function(require, module, exports) {
        "use strict";

        function e(e) {
            return e[0]
        }

        function t(e) {
            return e[1]
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.x = e, exports.y = t;
    }, {}],
    "KhHE": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = l;
        var n = require("d3-path"),
            e = r(require("./constant")),
            t = r(require("./curve/linear")),
            u = require("./point");

        function r(n) {
            return n && n.__esModule ? n : {
                default: n
            }
        }

        function l() {
            var r = u.x,
                l = u.y,
                f = (0, e.default)(!0),
                i = null,
                o = t.default,
                c = null;

            function a(e) {
                var t, u, a, d = e.length,
                    p = !1;
                for (null == i && (c = o(a = (0, n.path)())), t = 0; t <= d; ++t) !(t < d && f(u = e[t], t, e)) === p && ((p = !p) ? c.lineStart() : c.lineEnd()), p && c.point(+r(u, t, e), +l(u, t, e));
                if (a) return c = null, a + "" || null
            }
            return a.x = function(n) {
                return arguments.length ? (r = "function" == typeof n ? n : (0, e.default)(+n), a) : r
            }, a.y = function(n) {
                return arguments.length ? (l = "function" == typeof n ? n : (0, e.default)(+n), a) : l
            }, a.defined = function(n) {
                return arguments.length ? (f = "function" == typeof n ? n : (0, e.default)(!!n), a) : f
            }, a.curve = function(n) {
                return arguments.length ? (o = n, null != i && (c = o(i)), a) : o
            }, a.context = function(n) {
                return arguments.length ? (null == n ? i = c = null : c = o(i = n), a) : i
            }, a
        }
    }, {
        "d3-path": "OTyq",
        "./constant": "aCvo",
        "./curve/linear": "L3Qx",
        "./point": "LnI9"
    }],
    "IYvJ": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = f;
        var n = require("d3-path"),
            e = r(require("./constant")),
            t = r(require("./curve/linear")),
            u = r(require("./line")),
            l = require("./point");

        function r(n) {
            return n && n.__esModule ? n : {
                default: n
            }
        }

        function f() {
            var r = l.x,
                f = null,
                i = (0, e.default)(0),
                o = l.y,
                c = (0, e.default)(!0),
                a = null,
                d = t.default,
                y = null;

            function p(e) {
                var t, u, l, p, h, x = e.length,
                    g = !1,
                    s = new Array(x),
                    v = new Array(x);
                for (null == a && (y = d(h = (0, n.path)())), t = 0; t <= x; ++t) {
                    if (!(t < x && c(p = e[t], t, e)) === g)
                        if (g = !g) u = t, y.areaStart(), y.lineStart();
                        else {
                            for (y.lineEnd(), y.lineStart(), l = t - 1; l >= u; --l) y.point(s[l], v[l]);
                            y.lineEnd(), y.areaEnd()
                        } g && (s[t] = +r(p, t, e), v[t] = +i(p, t, e), y.point(f ? +f(p, t, e) : s[t], o ? +o(p, t, e) : v[t]))
                }
                if (h) return y = null, h + "" || null
            }

            function h() {
                return (0, u.default)().defined(c).curve(d).context(a)
            }
            return p.x = function(n) {
                return arguments.length ? (r = "function" == typeof n ? n : (0, e.default)(+n), f = null, p) : r
            }, p.x0 = function(n) {
                return arguments.length ? (r = "function" == typeof n ? n : (0, e.default)(+n), p) : r
            }, p.x1 = function(n) {
                return arguments.length ? (f = null == n ? null : "function" == typeof n ? n : (0, e.default)(+n), p) : f
            }, p.y = function(n) {
                return arguments.length ? (i = "function" == typeof n ? n : (0, e.default)(+n), o = null, p) : i
            }, p.y0 = function(n) {
                return arguments.length ? (i = "function" == typeof n ? n : (0, e.default)(+n), p) : i
            }, p.y1 = function(n) {
                return arguments.length ? (o = null == n ? null : "function" == typeof n ? n : (0, e.default)(+n), p) : o
            }, p.lineX0 = p.lineY0 = function() {
                return h().x(r).y(i)
            }, p.lineY1 = function() {
                return h().x(r).y(o)
            }, p.lineX1 = function() {
                return h().x(f).y(i)
            }, p.defined = function(n) {
                return arguments.length ? (c = "function" == typeof n ? n : (0, e.default)(!!n), p) : c
            }, p.curve = function(n) {
                return arguments.length ? (d = n, null != a && (y = d(a)), p) : d
            }, p.context = function(n) {
                return arguments.length ? (null == n ? a = y = null : y = d(a = n), p) : a
            }, p
        }
    }, {
        "d3-path": "OTyq",
        "./constant": "aCvo",
        "./curve/linear": "L3Qx",
        "./line": "KhHE",
        "./point": "LnI9"
    }],
    "bAZU": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = l;
        var t = r(require("./constant")),
            n = r(require("./descending")),
            e = r(require("./identity")),
            u = require("./math");

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function l() {
            var r = e.default,
                l = n.default,
                a = null,
                f = (0, t.default)(0),
                o = (0, t.default)(u.tau),
                i = (0, t.default)(0);

            function d(t) {
                var n, e, d, c, s, h = t.length,
                    p = 0,
                    g = new Array(h),
                    y = new Array(h),
                    A = +f.apply(this, arguments),
                    v = Math.min(u.tau, Math.max(-u.tau, o.apply(this, arguments) - A)),
                    M = Math.min(Math.abs(v) / h, i.apply(this, arguments)),
                    m = M * (v < 0 ? -1 : 1);
                for (n = 0; n < h; ++n)(s = y[g[n] = n] = +r(t[n], n, t)) > 0 && (p += s);
                for (null != l ? g.sort(function(t, n) {
                        return l(y[t], y[n])
                    }) : null != a && g.sort(function(n, e) {
                        return a(t[n], t[e])
                    }), n = 0, d = p ? (v - h * m) / p : 0; n < h; ++n, A = c) e = g[n], c = A + ((s = y[e]) > 0 ? s * d : 0) + m, y[e] = {
                    data: t[e],
                    index: n,
                    value: s,
                    startAngle: A,
                    endAngle: c,
                    padAngle: M
                };
                return y
            }
            return d.value = function(n) {
                return arguments.length ? (r = "function" == typeof n ? n : (0, t.default)(+n), d) : r
            }, d.sortValues = function(t) {
                return arguments.length ? (l = t, a = null, d) : l
            }, d.sort = function(t) {
                return arguments.length ? (a = t, l = null, d) : a
            }, d.startAngle = function(n) {
                return arguments.length ? (f = "function" == typeof n ? n : (0, t.default)(+n), d) : f
            }, d.endAngle = function(n) {
                return arguments.length ? (o = "function" == typeof n ? n : (0, t.default)(+n), d) : o
            }, d.padAngle = function(n) {
                return arguments.length ? (i = "function" == typeof n ? n : (0, t.default)(+n), d) : i
            }, d
        }
    }, {
        "./constant": "aCvo",
        "./descending": "fBAz",
        "./identity": "NNW9",
        "./math": "kIKs"
    }],
    "LARK": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = i, exports.curveRadialLinear = void 0;
        var e = t(require("./linear"));

        function t(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var r = i(e.default);

        function n(e) {
            this._curve = e
        }

        function i(e) {
            function t(t) {
                return new n(e(t))
            }
            return t._curve = e, t
        }
        exports.curveRadialLinear = r, n.prototype = {
            areaStart: function() {
                this._curve.areaStart()
            },
            areaEnd: function() {
                this._curve.areaEnd()
            },
            lineStart: function() {
                this._curve.lineStart()
            },
            lineEnd: function() {
                this._curve.lineEnd()
            },
            point: function(e, t) {
                this._curve.point(t * Math.sin(e), t * -Math.cos(e))
            }
        };
    }, {
        "./linear": "L3Qx"
    }],
    "faWF": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.lineRadial = a, exports.default = i;
        var e = u(require("./curve/radial")),
            r = t(require("./line"));

        function t(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function n() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return n = function() {
                return e
            }, e
        }

        function u(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var r = n();
            if (r && r.has(e)) return r.get(e);
            var t = {},
                u = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if (Object.prototype.hasOwnProperty.call(e, a)) {
                    var i = u ? Object.getOwnPropertyDescriptor(e, a) : null;
                    i && (i.get || i.set) ? Object.defineProperty(t, a, i) : t[a] = e[a]
                } return t.default = e, r && r.set(e, t), t
        }

        function a(r) {
            var t = r.curve;
            return r.angle = r.x, delete r.x, r.radius = r.y, delete r.y, r.curve = function(r) {
                return arguments.length ? t((0, e.default)(r)) : t()._curve
            }, r
        }

        function i() {
            return a((0, r.default)().curve(e.curveRadialLinear))
        }
    }, {
        "./curve/radial": "LARK",
        "./line": "KhHE"
    }],
    "T5gn": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = u;
        var e = l(require("./curve/radial")),
            n = r(require("./area")),
            t = require("./lineRadial");

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return i = function() {
                return e
            }, e
        }

        function l(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var n = i();
            if (n && n.has(e)) return n.get(e);
            var t = {},
                r = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var l in e)
                if (Object.prototype.hasOwnProperty.call(e, l)) {
                    var u = r ? Object.getOwnPropertyDescriptor(e, l) : null;
                    u && (u.get || u.set) ? Object.defineProperty(t, l, u) : t[l] = e[l]
                } return t.default = e, n && n.set(e, t), t
        }

        function u() {
            var r = (0, n.default)().curve(e.curveRadialLinear),
                i = r.curve,
                l = r.lineX0,
                u = r.lineX1,
                a = r.lineY0,
                d = r.lineY1;
            return r.angle = r.x, delete r.x, r.startAngle = r.x0, delete r.x0, r.endAngle = r.x1, delete r.x1, r.radius = r.y, delete r.y, r.innerRadius = r.y0, delete r.y0, r.outerRadius = r.y1, delete r.y1, r.lineStartAngle = function() {
                return (0, t.lineRadial)(l())
            }, delete r.lineX0, r.lineEndAngle = function() {
                return (0, t.lineRadial)(u())
            }, delete r.lineX1, r.lineInnerRadius = function() {
                return (0, t.lineRadial)(a())
            }, delete r.lineY0, r.lineOuterRadius = function() {
                return (0, t.lineRadial)(d())
            }, delete r.lineY1, r.curve = function(n) {
                return arguments.length ? i((0, e.default)(n)) : i()._curve
            }, r
        }
    }, {
        "./curve/radial": "LARK",
        "./area": "IYvJ",
        "./lineRadial": "faWF"
    }],
    "vzjT": [function(require, module, exports) {
        "use strict";

        function e(e, t) {
            return [(t = +t) * Math.cos(e -= Math.PI / 2), t * Math.sin(e)]
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "npGN": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.linkHorizontal = s, exports.linkVertical = d, exports.linkRadial = y;
        var e = require("d3-path"),
            t = require("../array"),
            n = i(require("../constant")),
            r = require("../point"),
            u = i(require("../pointRadial"));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function l(e) {
            return e.source
        }

        function o(e) {
            return e.target
        }

        function a(u) {
            var i = l,
                a = o,
                f = r.x,
                c = r.y,
                p = null;

            function s() {
                var n, r = t.slice.call(arguments),
                    l = i.apply(this, r),
                    o = a.apply(this, r);
                if (p || (p = n = (0, e.path)()), u(p, +f.apply(this, (r[0] = l, r)), +c.apply(this, r), +f.apply(this, (r[0] = o, r)), +c.apply(this, r)), n) return p = null, n + "" || null
            }
            return s.source = function(e) {
                return arguments.length ? (i = e, s) : i
            }, s.target = function(e) {
                return arguments.length ? (a = e, s) : a
            }, s.x = function(e) {
                return arguments.length ? (f = "function" == typeof e ? e : (0, n.default)(+e), s) : f
            }, s.y = function(e) {
                return arguments.length ? (c = "function" == typeof e ? e : (0, n.default)(+e), s) : c
            }, s.context = function(e) {
                return arguments.length ? (p = null == e ? null : e, s) : p
            }, s
        }

        function f(e, t, n, r, u) {
            e.moveTo(t, n), e.bezierCurveTo(t = (t + r) / 2, n, t, u, r, u)
        }

        function c(e, t, n, r, u) {
            e.moveTo(t, n), e.bezierCurveTo(t, n = (n + u) / 2, r, n, r, u)
        }

        function p(e, t, n, r, i) {
            var l = (0, u.default)(t, n),
                o = (0, u.default)(t, n = (n + i) / 2),
                a = (0, u.default)(r, n),
                f = (0, u.default)(r, i);
            e.moveTo(l[0], l[1]), e.bezierCurveTo(o[0], o[1], a[0], a[1], f[0], f[1])
        }

        function s() {
            return a(f)
        }

        function d() {
            return a(c)
        }

        function y() {
            var e = a(p);
            return e.angle = e.x, delete e.x, e.radius = e.y, delete e.y, e
        }
    }, {
        "d3-path": "OTyq",
        "../array": "KXlw",
        "../constant": "aCvo",
        "../point": "LnI9",
        "../pointRadial": "vzjT"
    }],
    "zjv7": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        var e = require("../math"),
            t = {
                draw: function(t, r) {
                    var a = Math.sqrt(r / e.pi);
                    t.moveTo(a, 0), t.arc(0, 0, a, 0, e.tau)
                }
            };
        exports.default = t;
    }, {
        "../math": "kIKs"
    }],
    "PTh9": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        var e = {
            draw: function(e, o) {
                var l = Math.sqrt(o / 5) / 2;
                e.moveTo(-3 * l, -l), e.lineTo(-l, -l), e.lineTo(-l, -3 * l), e.lineTo(l, -3 * l), e.lineTo(l, -l), e.lineTo(3 * l, -l), e.lineTo(3 * l, l), e.lineTo(l, l), e.lineTo(l, 3 * l), e.lineTo(-l, 3 * l), e.lineTo(-l, l), e.lineTo(-3 * l, l), e.closePath()
            }
        };
        exports.default = e;
    }, {}],
    "fuDX": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        var e = Math.sqrt(1 / 3),
            t = 2 * e,
            o = {
                draw: function(o, r) {
                    var a = Math.sqrt(r / t),
                        s = a * e;
                    o.moveTo(0, -a), o.lineTo(s, 0), o.lineTo(0, a), o.lineTo(-s, 0), o.closePath()
                }
            };
        exports.default = o;
    }, {}],
    "L5Ql": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        var t = require("../math"),
            a = .8908130915292852,
            e = Math.sin(t.pi / 10) / Math.sin(7 * t.pi / 10),
            o = Math.sin(t.tau / 10) * e,
            r = -Math.cos(t.tau / 10) * e,
            i = {
                draw: function(e, i) {
                    var s = Math.sqrt(i * a),
                        n = o * s,
                        u = r * s;
                    e.moveTo(0, -s), e.lineTo(n, u);
                    for (var h = 1; h < 5; ++h) {
                        var l = t.tau * h / 5,
                            M = Math.cos(l),
                            v = Math.sin(l);
                        e.lineTo(v * s, -M * s), e.lineTo(M * n - v * u, v * n + M * u)
                    }
                    e.closePath()
                }
            };
        exports.default = i;
    }, {
        "../math": "kIKs"
    }],
    "bj9s": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        var e = {
            draw: function(e, t) {
                var r = Math.sqrt(t),
                    a = -r / 2;
                e.rect(a, a, r, r)
            }
        };
        exports.default = e;
    }, {}],
    "owZx": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        var e = Math.sqrt(3),
            t = {
                draw: function(t, o) {
                    var r = -Math.sqrt(o / (3 * e));
                    t.moveTo(0, 2 * r), t.lineTo(-e * r, -r), t.lineTo(e * r, -r), t.closePath()
                }
            };
        exports.default = t;
    }, {}],
    "UZQY": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        var e = -.5,
            o = Math.sqrt(3) / 2,
            t = 1 / Math.sqrt(12),
            l = 3 * (t / 2 + 1),
            i = {
                draw: function(i, r) {
                    var n = Math.sqrt(r / l),
                        a = n / 2,
                        s = n * t,
                        T = a,
                        d = n * t + n,
                        u = -T,
                        v = d;
                    i.moveTo(a, s), i.lineTo(T, d), i.lineTo(u, v), i.lineTo(e * a - o * s, o * a + e * s), i.lineTo(e * T - o * d, o * T + e * d), i.lineTo(e * u - o * v, o * u + e * v), i.lineTo(e * a + o * s, e * s - o * a), i.lineTo(e * T + o * d, e * d - o * T), i.lineTo(e * u + o * v, e * v - o * u), i.closePath()
                }
            };
        exports.default = i;
    }, {}],
    "bBhM": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = d, exports.symbols = void 0;
        var e = require("d3-path"),
            t = s(require("./symbol/circle")),
            r = s(require("./symbol/cross")),
            u = s(require("./symbol/diamond")),
            l = s(require("./symbol/star")),
            n = s(require("./symbol/square")),
            o = s(require("./symbol/triangle")),
            a = s(require("./symbol/wye")),
            i = s(require("./constant"));

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var f = [t.default, r.default, u.default, n.default, l.default, o.default, a.default];

        function d() {
            var r = (0, i.default)(t.default),
                u = (0, i.default)(64),
                l = null;

            function n() {
                var t;
                if (l || (l = t = (0, e.path)()), r.apply(this, arguments).draw(l, +u.apply(this, arguments)), t) return l = null, t + "" || null
            }
            return n.type = function(e) {
                return arguments.length ? (r = "function" == typeof e ? e : (0, i.default)(e), n) : r
            }, n.size = function(e) {
                return arguments.length ? (u = "function" == typeof e ? e : (0, i.default)(+e), n) : u
            }, n.context = function(e) {
                return arguments.length ? (l = null == e ? null : e, n) : l
            }, n
        }
        exports.symbols = f;
    }, {
        "d3-path": "OTyq",
        "./symbol/circle": "zjv7",
        "./symbol/cross": "PTh9",
        "./symbol/diamond": "fuDX",
        "./symbol/star": "L5Ql",
        "./symbol/square": "bj9s",
        "./symbol/triangle": "owZx",
        "./symbol/wye": "UZQY",
        "./constant": "aCvo"
    }],
    "Hgxp": [function(require, module, exports) {
        "use strict";

        function e() {}
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "cx05": [function(require, module, exports) {
        "use strict";

        function t(t, i, s) {
            t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + i) / 6, (t._y0 + 4 * t._y1 + s) / 6)
        }

        function i(t) {
            this._context = t
        }

        function s(t) {
            return new i(t)
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.point = t, exports.Basis = i, exports.default = s, i.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
            },
            lineEnd: function() {
                switch (this._point) {
                    case 3:
                        t(this, this._x1, this._y1);
                    case 2:
                        this._context.lineTo(this._x1, this._y1)
                }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function(i, s) {
                switch (i = +i, s = +s, this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(i, s) : this._context.moveTo(i, s);
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
                    default:
                        t(this, i, s)
                }
                this._x0 = this._x1, this._x1 = i, this._y0 = this._y1, this._y1 = s
            }
        };
    }, {}],
    "FS5M": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = _;
        var t = s(require("../noop")),
            i = require("./basis");

        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function h(t) {
            this._context = t
        }

        function _(t) {
            return new h(t)
        }
        h.prototype = {
            areaStart: t.default,
            areaEnd: t.default,
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0
            },
            lineEnd: function() {
                switch (this._point) {
                    case 1:
                        this._context.moveTo(this._x2, this._y2), this._context.closePath();
                        break;
                    case 2:
                        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
                        break;
                    case 3:
                        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4)
                }
            },
            point: function(t, s) {
                switch (t = +t, s = +s, this._point) {
                    case 0:
                        this._point = 1, this._x2 = t, this._y2 = s;
                        break;
                    case 1:
                        this._point = 2, this._x3 = t, this._y3 = s;
                        break;
                    case 2:
                        this._point = 3, this._x4 = t, this._y4 = s, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + s) / 6);
                        break;
                    default:
                        (0, i.point)(this, t, s)
                }
                this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = s
            }
        };
    }, {
        "../noop": "Hgxp",
        "./basis": "cx05"
    }],
    "feGb": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = s;
        var t = require("./basis");

        function i(t) {
            this._context = t
        }

        function s(t) {
            return new i(t)
        }
        i.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
            },
            lineEnd: function() {
                (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function(i, s) {
                switch (i = +i, s = +s, this._point) {
                    case 0:
                        this._point = 1;
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3;
                        var e = (this._x0 + 4 * this._x1 + i) / 6,
                            n = (this._y0 + 4 * this._y1 + s) / 6;
                        this._line ? this._context.lineTo(e, n) : this._context.moveTo(e, n);
                        break;
                    case 3:
                        this._point = 4;
                    default:
                        (0, t.point)(this, i, s)
                }
                this._x0 = this._x1, this._x1 = i, this._y0 = this._y1, this._y1 = s
            }
        };
    }, {
        "./basis": "cx05"
    }],
    "iAgm": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        var t = require("./basis");

        function i(i, s) {
            this._basis = new t.Basis(i), this._beta = s
        }
        i.prototype = {
            lineStart: function() {
                this._x = [], this._y = [], this._basis.lineStart()
            },
            lineEnd: function() {
                var t = this._x,
                    i = this._y,
                    s = t.length - 1;
                if (s > 0)
                    for (var e, n = t[0], a = i[0], r = t[s] - n, h = i[s] - a, u = -1; ++u <= s;) e = u / s, this._basis.point(this._beta * t[u] + (1 - this._beta) * (n + e * r), this._beta * i[u] + (1 - this._beta) * (a + e * h));
                this._x = this._y = null, this._basis.lineEnd()
            },
            point: function(t, i) {
                this._x.push(+t), this._y.push(+i)
            }
        };
        var s = function s(e) {
            function n(s) {
                return 1 === e ? new t.Basis(s) : new i(s, e)
            }
            return n.beta = function(t) {
                return s(+t)
            }, n
        }(.85);
        exports.default = s;
    }, {
        "./basis": "cx05"
    }],
    "DORS": [function(require, module, exports) {
        "use strict";

        function t(t, i, s) {
            t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - i), t._y2 + t._k * (t._y1 - s), t._x2, t._y2)
        }

        function i(t, i) {
            this._context = t, this._k = (1 - i) / 6
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.point = t, exports.Cardinal = i, exports.default = void 0, i.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
            },
            lineEnd: function() {
                switch (this._point) {
                    case 2:
                        this._context.lineTo(this._x2, this._y2);
                        break;
                    case 3:
                        t(this, this._x1, this._y1)
                }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function(i, s) {
                switch (i = +i, s = +s, this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(i, s) : this._context.moveTo(i, s);
                        break;
                    case 1:
                        this._point = 2, this._x1 = i, this._y1 = s;
                        break;
                    case 2:
                        this._point = 3;
                    default:
                        t(this, i, s)
                }
                this._x0 = this._x1, this._x1 = this._x2, this._x2 = i, this._y0 = this._y1, this._y1 = this._y2, this._y2 = s
            }
        };
        var s = function t(s) {
            function _(t) {
                return new i(t, s)
            }
            return _.tension = function(i) {
                return t(+i)
            }, _
        }(0);
        exports.default = s;
    }, {}],
    "FUQi": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.CardinalClosed = h, exports.default = void 0;
        var t = s(require("../noop")),
            i = require("./cardinal");

        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function h(t, i) {
            this._context = t, this._k = (1 - i) / 6
        }
        h.prototype = {
            areaStart: t.default,
            areaEnd: t.default,
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0
            },
            lineEnd: function() {
                switch (this._point) {
                    case 1:
                        this._context.moveTo(this._x3, this._y3), this._context.closePath();
                        break;
                    case 2:
                        this._context.lineTo(this._x3, this._y3), this._context.closePath();
                        break;
                    case 3:
                        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
                }
            },
            point: function(t, s) {
                switch (t = +t, s = +s, this._point) {
                    case 0:
                        this._point = 1, this._x3 = t, this._y3 = s;
                        break;
                    case 1:
                        this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = s);
                        break;
                    case 2:
                        this._point = 3, this._x5 = t, this._y5 = s;
                        break;
                    default:
                        (0, i.point)(this, t, s)
                }
                this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = s
            }
        };
        var e = function t(i) {
            function s(t) {
                return new h(t, i)
            }
            return s.tension = function(i) {
                return t(+i)
            }, s
        }(0);
        exports.default = e;
    }, {
        "../noop": "Hgxp",
        "./cardinal": "DORS"
    }],
    "iWbK": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.CardinalOpen = i, exports.default = void 0;
        var t = require("./cardinal");

        function i(t, i) {
            this._context = t, this._k = (1 - i) / 6
        }
        i.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
            },
            lineEnd: function() {
                (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function(i, s) {
                switch (i = +i, s = +s, this._point) {
                    case 0:
                        this._point = 1;
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                        break;
                    case 3:
                        this._point = 4;
                    default:
                        (0, t.point)(this, i, s)
                }
                this._x0 = this._x1, this._x1 = this._x2, this._x2 = i, this._y0 = this._y1, this._y1 = this._y2, this._y2 = s
            }
        };
        var s = function t(s) {
            function n(t) {
                return new i(t, s)
            }
            return n.tension = function(i) {
                return t(+i)
            }, n
        }(0);
        exports.default = s;
    }, {
        "./cardinal": "DORS"
    }],
    "oFi9": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.point = i, exports.default = void 0;
        var _ = require("../math"),
            t = require("./cardinal");

        function i(t, i, a) {
            var s = t._x1,
                h = t._y1,
                l = t._x2,
                n = t._y2;
            if (t._l01_a > _.epsilon) {
                var e = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
                    o = 3 * t._l01_a * (t._l01_a + t._l12_a);
                s = (s * e - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / o, h = (h * e - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / o
            }
            if (t._l23_a > _.epsilon) {
                var r = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
                    c = 3 * t._l23_a * (t._l23_a + t._l12_a);
                l = (l * r + t._x1 * t._l23_2a - i * t._l12_2a) / c, n = (n * r + t._y1 * t._l23_2a - a * t._l12_2a) / c
            }
            t._context.bezierCurveTo(s, h, l, n, t._x2, t._y2)
        }

        function a(_, t) {
            this._context = _, this._alpha = t
        }
        a.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
            },
            lineEnd: function() {
                switch (this._point) {
                    case 2:
                        this._context.lineTo(this._x2, this._y2);
                        break;
                    case 3:
                        this.point(this._x2, this._y2)
                }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function(_, t) {
                if (_ = +_, t = +t, this._point) {
                    var a = this._x2 - _,
                        s = this._y2 - t;
                    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(a * a + s * s, this._alpha))
                }
                switch (this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(_, t) : this._context.moveTo(_, t);
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3;
                    default:
                        i(this, _, t)
                }
                this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = _, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t
            }
        };
        var s = function _(i) {
            function s(_) {
                return i ? new a(_, i) : new t.Cardinal(_, 0)
            }
            return s.alpha = function(t) {
                return _(+t)
            }, s
        }(.5);
        exports.default = s;
    }, {
        "../math": "kIKs",
        "./cardinal": "DORS"
    }],
    "AW0P": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        var t = require("./cardinalClosed"),
            i = _(require("../noop")),
            s = require("./catmullRom");

        function _(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function h(t, i) {
            this._context = t, this._alpha = i
        }
        h.prototype = {
            areaStart: i.default,
            areaEnd: i.default,
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
            },
            lineEnd: function() {
                switch (this._point) {
                    case 1:
                        this._context.moveTo(this._x3, this._y3), this._context.closePath();
                        break;
                    case 2:
                        this._context.lineTo(this._x3, this._y3), this._context.closePath();
                        break;
                    case 3:
                        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
                }
            },
            point: function(t, i) {
                if (t = +t, i = +i, this._point) {
                    var _ = this._x2 - t,
                        h = this._y2 - i;
                    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(_ * _ + h * h, this._alpha))
                }
                switch (this._point) {
                    case 0:
                        this._point = 1, this._x3 = t, this._y3 = i;
                        break;
                    case 1:
                        this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = i);
                        break;
                    case 2:
                        this._point = 3, this._x5 = t, this._y5 = i;
                        break;
                    default:
                        (0, s.point)(this, t, i)
                }
                this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = i
            }
        };
        var e = function i(s) {
            function _(i) {
                return s ? new h(i, s) : new t.CardinalClosed(i, 0)
            }
            return _.alpha = function(t) {
                return i(+t)
            }, _
        }(.5);
        exports.default = e;
    }, {
        "./cardinalClosed": "FUQi",
        "../noop": "Hgxp",
        "./catmullRom": "oFi9"
    }],
    "PGVM": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        var t = require("./cardinalOpen"),
            i = require("./catmullRom");

        function _(t, i) {
            this._context = t, this._alpha = i
        }
        _.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
            },
            lineEnd: function() {
                (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function(t, _) {
                if (t = +t, _ = +_, this._point) {
                    var s = this._x2 - t,
                        h = this._y2 - _;
                    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(s * s + h * h, this._alpha))
                }
                switch (this._point) {
                    case 0:
                        this._point = 1;
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                        break;
                    case 3:
                        this._point = 4;
                    default:
                        (0, i.point)(this, t, _)
                }
                this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = _
            }
        };
        var s = function i(s) {
            function h(i) {
                return s ? new _(i, s) : new t.CardinalOpen(i, 0)
            }
            return h.alpha = function(t) {
                return i(+t)
            }, h
        }(.5);
        exports.default = s;
    }, {
        "./cardinalOpen": "iWbK",
        "./catmullRom": "oFi9"
    }],
    "c2vC": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = o;
        var t = e(require("../noop"));

        function e(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function n(t) {
            this._context = t
        }

        function o(t) {
            return new n(t)
        }
        n.prototype = {
            areaStart: t.default,
            areaEnd: t.default,
            lineStart: function() {
                this._point = 0
            },
            lineEnd: function() {
                this._point && this._context.closePath()
            },
            point: function(t, e) {
                t = +t, e = +e, this._point ? this._context.lineTo(t, e) : (this._point = 1, this._context.moveTo(t, e))
            }
        };
    }, {
        "../noop": "Hgxp"
    }],
    "DNx2": [function(require, module, exports) {
        "use strict";

        function t(t) {
            return t < 0 ? -1 : 1
        }

        function i(i, n, e) {
            var o = i._x1 - i._x0,
                s = n - i._x1,
                h = (i._y1 - i._y0) / (o || s < 0 && -0),
                _ = (e - i._y1) / (s || o < 0 && -0),
                c = (h * s + _ * o) / (o + s);
            return (t(h) + t(_)) * Math.min(Math.abs(h), Math.abs(_), .5 * Math.abs(c)) || 0
        }

        function n(t, i) {
            var n = t._x1 - t._x0;
            return n ? (3 * (t._y1 - t._y0) / n - i) / 2 : i
        }

        function e(t, i, n) {
            var e = t._x0,
                o = t._y0,
                s = t._x1,
                h = t._y1,
                _ = (s - e) / 3;
            t._context.bezierCurveTo(e + _, o + _ * i, s - _, h - _ * n, s, h)
        }

        function o(t) {
            this._context = t
        }

        function s(t) {
            this._context = new h(t)
        }

        function h(t) {
            this._context = t
        }

        function _(t) {
            return new o(t)
        }

        function c(t) {
            return new s(t)
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.monotoneX = _, exports.monotoneY = c, o.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
            },
            lineEnd: function() {
                switch (this._point) {
                    case 2:
                        this._context.lineTo(this._x1, this._y1);
                        break;
                    case 3:
                        e(this, this._t0, n(this, this._t0))
                }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function(t, o) {
                var s = NaN;
                if (o = +o, (t = +t) !== this._x1 || o !== this._y1) {
                    switch (this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, o) : this._context.moveTo(t, o);
                            break;
                        case 1:
                            this._point = 2;
                            break;
                        case 2:
                            this._point = 3, e(this, n(this, s = i(this, t, o)), s);
                            break;
                        default:
                            e(this, this._t0, s = i(this, t, o))
                    }
                    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = o, this._t0 = s
                }
            }
        }, (s.prototype = Object.create(o.prototype)).point = function(t, i) {
            o.prototype.point.call(this, i, t)
        }, h.prototype = {
            moveTo: function(t, i) {
                this._context.moveTo(i, t)
            },
            closePath: function() {
                this._context.closePath()
            },
            lineTo: function(t, i) {
                this._context.lineTo(i, t)
            },
            bezierCurveTo: function(t, i, n, e, o, s) {
                this._context.bezierCurveTo(i, t, e, n, s, o)
            }
        };
    }, {}],
    "qyH2": [function(require, module, exports) {
        "use strict";

        function t(t) {
            this._context = t
        }

        function e(t) {
            var e, i, n = t.length - 1,
                o = new Array(n),
                r = new Array(n),
                s = new Array(n);
            for (o[0] = 0, r[0] = 2, s[0] = t[0] + 2 * t[1], e = 1; e < n - 1; ++e) o[e] = 1, r[e] = 4, s[e] = 4 * t[e] + 2 * t[e + 1];
            for (o[n - 1] = 2, r[n - 1] = 7, s[n - 1] = 8 * t[n - 1] + t[n], e = 1; e < n; ++e) i = o[e] / r[e - 1], r[e] -= i, s[e] -= i * s[e - 1];
            for (o[n - 1] = s[n - 1] / r[n - 1], e = n - 2; e >= 0; --e) o[e] = (s[e] - o[e + 1]) / r[e];
            for (r[n - 1] = (t[n] + o[n - 1]) / 2, e = 0; e < n - 1; ++e) r[e] = 2 * t[e + 1] - o[e + 1];
            return [o, r]
        }

        function i(e) {
            return new t(e)
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = i, t.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x = [], this._y = []
            },
            lineEnd: function() {
                var t = this._x,
                    i = this._y,
                    n = t.length;
                if (n)
                    if (this._line ? this._context.lineTo(t[0], i[0]) : this._context.moveTo(t[0], i[0]), 2 === n) this._context.lineTo(t[1], i[1]);
                    else
                        for (var o = e(t), r = e(i), s = 0, h = 1; h < n; ++s, ++h) this._context.bezierCurveTo(o[0][s], r[0][s], o[1][s], r[1][s], t[h], i[h]);
                (this._line || 0 !== this._line && 1 === n) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
            },
            point: function(t, e) {
                this._x.push(+t), this._y.push(+e)
            }
        };
    }, {}],
    "SIad": [function(require, module, exports) {
        "use strict";

        function t(t, i) {
            this._context = t, this._t = i
        }

        function i(i) {
            return new t(i, .5)
        }

        function e(i) {
            return new t(i, 0)
        }

        function n(i) {
            return new t(i, 1)
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = i, exports.stepBefore = e, exports.stepAfter = n, t.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x = this._y = NaN, this._point = 0
            },
            lineEnd: function() {
                0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line)
            },
            point: function(t, i) {
                switch (t = +t, i = +i, this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, i) : this._context.moveTo(t, i);
                        break;
                    case 1:
                        this._point = 2;
                    default:
                        if (this._t <= 0) this._context.lineTo(this._x, i), this._context.lineTo(t, i);
                        else {
                            var e = this._x * (1 - this._t) + t * this._t;
                            this._context.lineTo(e, this._y), this._context.lineTo(e, i)
                        }
                }
                this._x = t, this._y = i
            }
        };
    }, {}],
    "jW6Y": [function(require, module, exports) {
        "use strict";

        function e(e, t) {
            if ((f = e.length) > 1)
                for (var r, o, f, s = 1, i = e[t[0]], l = i.length; s < f; ++s)
                    for (o = i, i = e[t[s]], r = 0; r < l; ++r) i[r][1] += i[r][0] = isNaN(o[r][1]) ? o[r][0] : o[r][1]
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "NTwk": [function(require, module, exports) {
        "use strict";

        function e(e) {
            for (var r = e.length, t = new Array(r); --r >= 0;) t[r] = r;
            return t
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "k9Ur": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = l;
        var e = require("./array"),
            t = u(require("./constant")),
            n = u(require("./offset/none")),
            r = u(require("./order/none"));

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function f(e, t) {
            return e[t]
        }

        function l() {
            var u = (0, t.default)([]),
                l = r.default,
                o = n.default,
                a = f;

            function i(e) {
                var t, n, r = u.apply(this, arguments),
                    f = e.length,
                    i = r.length,
                    c = new Array(i);
                for (t = 0; t < i; ++t) {
                    for (var d, s = r[t], y = c[t] = new Array(f), p = 0; p < f; ++p) y[p] = d = [0, +a(e[p], s, p, e)], d.data = e[p];
                    y.key = s
                }
                for (t = 0, n = l(c); t < i; ++t) c[n[t]].index = t;
                return o(c, n), c
            }
            return i.keys = function(n) {
                return arguments.length ? (u = "function" == typeof n ? n : (0, t.default)(e.slice.call(n)), i) : u
            }, i.value = function(e) {
                return arguments.length ? (a = "function" == typeof e ? e : (0, t.default)(+e), i) : a
            }, i.order = function(n) {
                return arguments.length ? (l = null == n ? r.default : "function" == typeof n ? n : (0, t.default)(e.slice.call(n)), i) : l
            }, i.offset = function(e) {
                return arguments.length ? (o = null == e ? n.default : e, i) : o
            }, i
        }
    }, {
        "./array": "KXlw",
        "./constant": "aCvo",
        "./offset/none": "jW6Y",
        "./order/none": "NTwk"
    }],
    "WOsM": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = t;
        var e = r(require("./none"));

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function t(r, t) {
            if ((o = r.length) > 0) {
                for (var f, o, u, n = 0, l = r[0].length; n < l; ++n) {
                    for (u = f = 0; f < o; ++f) u += r[f][n][1] || 0;
                    if (u)
                        for (f = 0; f < o; ++f) r[f][n][1] /= u
                }(0, e.default)(r, t)
            }
        }
    }, {
        "./none": "jW6Y"
    }],
    "PS7K": [function(require, module, exports) {
        "use strict";

        function e(e, t) {
            if ((s = e.length) > 0)
                for (var r, o, f, l, n, s, u = 0, i = e[t[0]].length; u < i; ++u)
                    for (l = n = 0, r = 0; r < s; ++r)(f = (o = e[t[r]][u])[1] - o[0]) >= 0 ? (o[0] = l, o[1] = l += f) : f < 0 ? (o[1] = n, o[0] = n += f) : o[0] = l
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = e;
    }, {}],
    "UGaf": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = t;
        var e = r(require("./none"));

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function t(r, t) {
            if ((u = r.length) > 0) {
                for (var u, n = 0, o = r[t[0]], f = o.length; n < f; ++n) {
                    for (var l = 0, a = 0; l < u; ++l) a += r[l][n][1] || 0;
                    o[n][1] += o[n][0] = -a / 2
                }(0, e.default)(r, t)
            }
        }
    }, {
        "./none": "jW6Y"
    }],
    "zv8R": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = t;
        var e = r(require("./none"));

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function t(r, t) {
            if ((f = r.length) > 0 && (u = (o = r[t[0]]).length) > 0) {
                for (var o, u, f, n = 0, a = 1; a < u; ++a) {
                    for (var l = 0, d = 0, i = 0; l < f; ++l) {
                        for (var s = r[t[l]], v = s[a][1] || 0, c = (v - (s[a - 1][1] || 0)) / 2, _ = 0; _ < l; ++_) {
                            var p = r[t[_]];
                            c += (p[a][1] || 0) - (p[a - 1][1] || 0)
                        }
                        d += v, i += c * v
                    }
                    o[a - 1][1] += o[a - 1][0] = n, d && (n -= i / d)
                }
                o[a - 1][1] += o[a - 1][0] = n, (0, e.default)(r, t)
            }
        }
    }, {
        "./none": "jW6Y"
    }],
    "Uz9Z": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = t;
        var e = r(require("./none"));

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function t(r) {
            var t = r.map(n);
            return (0, e.default)(r).sort(function(e, r) {
                return t[e] - t[r]
            })
        }

        function n(e) {
            for (var r, t = -1, n = 0, u = e.length, o = -1 / 0; ++t < u;)(r = +e[t][1]) > o && (o = r, n = t);
            return n
        }
    }, {
        "./none": "NTwk"
    }],
    "Z1jP": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = t, exports.sum = u;
        var e = r(require("./none"));

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function t(r) {
            var t = r.map(u);
            return (0, e.default)(r).sort(function(e, r) {
                return t[e] - t[r]
            })
        }

        function u(e) {
            for (var r, t = 0, u = -1, n = e.length; ++u < n;)(r = +e[u][1]) && (t += r);
            return t
        }
    }, {
        "./none": "NTwk"
    }],
    "oyxb": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = t;
        var e = r(require("./ascending"));

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function t(r) {
            return (0, e.default)(r).reverse()
        }
    }, {
        "./ascending": "Z1jP"
    }],
    "cmz2": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = t;
        var e = u(require("./appearance")),
            r = require("./ascending");

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function t(u) {
            var t, a, n = u.length,
                s = u.map(r.sum),
                o = (0, e.default)(u),
                c = 0,
                p = 0,
                d = [],
                f = [];
            for (t = 0; t < n; ++t) a = o[t], c < p ? (c += s[a], d.push(a)) : (p += s[a], f.push(a));
            return f.reverse().concat(d)
        }
    }, {
        "./appearance": "Uz9Z",
        "./ascending": "Z1jP"
    }],
    "MoW7": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = t;
        var e = r(require("./none"));

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function t(r) {
            return (0, e.default)(r).reverse()
        }
    }, {
        "./none": "NTwk"
    }],
    "maww": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), Object.defineProperty(exports, "arc", {
            enumerable: !0,
            get: function() {
                return e.default
            }
        }), Object.defineProperty(exports, "area", {
            enumerable: !0,
            get: function() {
                return r.default
            }
        }), Object.defineProperty(exports, "line", {
            enumerable: !0,
            get: function() {
                return t.default
            }
        }), Object.defineProperty(exports, "pie", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }), Object.defineProperty(exports, "areaRadial", {
            enumerable: !0,
            get: function() {
                return u.default
            }
        }), Object.defineProperty(exports, "radialArea", {
            enumerable: !0,
            get: function() {
                return u.default
            }
        }), Object.defineProperty(exports, "lineRadial", {
            enumerable: !0,
            get: function() {
                return o.default
            }
        }), Object.defineProperty(exports, "radialLine", {
            enumerable: !0,
            get: function() {
                return o.default
            }
        }), Object.defineProperty(exports, "pointRadial", {
            enumerable: !0,
            get: function() {
                return i.default
            }
        }), Object.defineProperty(exports, "linkHorizontal", {
            enumerable: !0,
            get: function() {
                return a.linkHorizontal
            }
        }), Object.defineProperty(exports, "linkVertical", {
            enumerable: !0,
            get: function() {
                return a.linkVertical
            }
        }), Object.defineProperty(exports, "linkRadial", {
            enumerable: !0,
            get: function() {
                return a.linkRadial
            }
        }), Object.defineProperty(exports, "symbol", {
            enumerable: !0,
            get: function() {
                return l.default
            }
        }), Object.defineProperty(exports, "symbols", {
            enumerable: !0,
            get: function() {
                return l.symbols
            }
        }), Object.defineProperty(exports, "symbolCircle", {
            enumerable: !0,
            get: function() {
                return f.default
            }
        }), Object.defineProperty(exports, "symbolCross", {
            enumerable: !0,
            get: function() {
                return c.default
            }
        }), Object.defineProperty(exports, "symbolDiamond", {
            enumerable: !0,
            get: function() {
                return d.default
            }
        }), Object.defineProperty(exports, "symbolSquare", {
            enumerable: !0,
            get: function() {
                return s.default
            }
        }), Object.defineProperty(exports, "symbolStar", {
            enumerable: !0,
            get: function() {
                return p.default
            }
        }), Object.defineProperty(exports, "symbolTriangle", {
            enumerable: !0,
            get: function() {
                return b.default
            }
        }), Object.defineProperty(exports, "symbolWye", {
            enumerable: !0,
            get: function() {
                return m.default
            }
        }), Object.defineProperty(exports, "curveBasisClosed", {
            enumerable: !0,
            get: function() {
                return y.default
            }
        }), Object.defineProperty(exports, "curveBasisOpen", {
            enumerable: !0,
            get: function() {
                return O.default
            }
        }), Object.defineProperty(exports, "curveBasis", {
            enumerable: !0,
            get: function() {
                return g.default
            }
        }), Object.defineProperty(exports, "curveBundle", {
            enumerable: !0,
            get: function() {
                return j.default
            }
        }), Object.defineProperty(exports, "curveCardinalClosed", {
            enumerable: !0,
            get: function() {
                return P.default
            }
        }), Object.defineProperty(exports, "curveCardinalOpen", {
            enumerable: !0,
            get: function() {
                return x.default
            }
        }), Object.defineProperty(exports, "curveCardinal", {
            enumerable: !0,
            get: function() {
                return q.default
            }
        }), Object.defineProperty(exports, "curveCatmullRomClosed", {
            enumerable: !0,
            get: function() {
                return v.default
            }
        }), Object.defineProperty(exports, "curveCatmullRomOpen", {
            enumerable: !0,
            get: function() {
                return k.default
            }
        }), Object.defineProperty(exports, "curveCatmullRom", {
            enumerable: !0,
            get: function() {
                return C.default
            }
        }), Object.defineProperty(exports, "curveLinearClosed", {
            enumerable: !0,
            get: function() {
                return R.default
            }
        }), Object.defineProperty(exports, "curveLinear", {
            enumerable: !0,
            get: function() {
                return M.default
            }
        }), Object.defineProperty(exports, "curveMonotoneX", {
            enumerable: !0,
            get: function() {
                return w.monotoneX
            }
        }), Object.defineProperty(exports, "curveMonotoneY", {
            enumerable: !0,
            get: function() {
                return w.monotoneY
            }
        }), Object.defineProperty(exports, "curveNatural", {
            enumerable: !0,
            get: function() {
                return B.default
            }
        }), Object.defineProperty(exports, "curveStep", {
            enumerable: !0,
            get: function() {
                return S.default
            }
        }), Object.defineProperty(exports, "curveStepAfter", {
            enumerable: !0,
            get: function() {
                return S.stepAfter
            }
        }), Object.defineProperty(exports, "curveStepBefore", {
            enumerable: !0,
            get: function() {
                return S.stepBefore
            }
        }), Object.defineProperty(exports, "stack", {
            enumerable: !0,
            get: function() {
                return _.default
            }
        }), Object.defineProperty(exports, "stackOffsetExpand", {
            enumerable: !0,
            get: function() {
                return A.default
            }
        }), Object.defineProperty(exports, "stackOffsetDiverging", {
            enumerable: !0,
            get: function() {
                return D.default
            }
        }), Object.defineProperty(exports, "stackOffsetNone", {
            enumerable: !0,
            get: function() {
                return h.default
            }
        }), Object.defineProperty(exports, "stackOffsetSilhouette", {
            enumerable: !0,
            get: function() {
                return W.default
            }
        }), Object.defineProperty(exports, "stackOffsetWiggle", {
            enumerable: !0,
            get: function() {
                return L.default
            }
        }), Object.defineProperty(exports, "stackOrderAppearance", {
            enumerable: !0,
            get: function() {
                return N.default
            }
        }), Object.defineProperty(exports, "stackOrderAscending", {
            enumerable: !0,
            get: function() {
                return z.default
            }
        }), Object.defineProperty(exports, "stackOrderDescending", {
            enumerable: !0,
            get: function() {
                return H.default
            }
        }), Object.defineProperty(exports, "stackOrderInsideOut", {
            enumerable: !0,
            get: function() {
                return V.default
            }
        }), Object.defineProperty(exports, "stackOrderNone", {
            enumerable: !0,
            get: function() {
                return X.default
            }
        }), Object.defineProperty(exports, "stackOrderReverse", {
            enumerable: !0,
            get: function() {
                return Y.default
            }
        });
        var e = T(require("./arc")),
            r = T(require("./area")),
            t = T(require("./line")),
            n = T(require("./pie")),
            u = T(require("./areaRadial")),
            o = T(require("./lineRadial")),
            i = T(require("./pointRadial")),
            a = require("./link/index"),
            l = I(require("./symbol")),
            f = T(require("./symbol/circle")),
            c = T(require("./symbol/cross")),
            d = T(require("./symbol/diamond")),
            s = T(require("./symbol/square")),
            p = T(require("./symbol/star")),
            b = T(require("./symbol/triangle")),
            m = T(require("./symbol/wye")),
            y = T(require("./curve/basisClosed")),
            O = T(require("./curve/basisOpen")),
            g = T(require("./curve/basis")),
            j = T(require("./curve/bundle")),
            P = T(require("./curve/cardinalClosed")),
            x = T(require("./curve/cardinalOpen")),
            q = T(require("./curve/cardinal")),
            v = T(require("./curve/catmullRomClosed")),
            k = T(require("./curve/catmullRomOpen")),
            C = T(require("./curve/catmullRom")),
            R = T(require("./curve/linearClosed")),
            M = T(require("./curve/linear")),
            w = require("./curve/monotone"),
            B = T(require("./curve/natural")),
            S = I(require("./curve/step")),
            _ = T(require("./stack")),
            A = T(require("./offset/expand")),
            D = T(require("./offset/diverging")),
            h = T(require("./offset/none")),
            W = T(require("./offset/silhouette")),
            L = T(require("./offset/wiggle")),
            N = T(require("./order/appearance")),
            z = T(require("./order/ascending")),
            H = T(require("./order/descending")),
            V = T(require("./order/insideOut")),
            X = T(require("./order/none")),
            Y = T(require("./order/reverse"));

        function E() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return E = function() {
                return e
            }, e
        }

        function I(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var r = E();
            if (r && r.has(e)) return r.get(e);
            var t = {},
                n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var u in e)
                if (Object.prototype.hasOwnProperty.call(e, u)) {
                    var o = n ? Object.getOwnPropertyDescriptor(e, u) : null;
                    o && (o.get || o.set) ? Object.defineProperty(t, u, o) : t[u] = e[u]
                } return t.default = e, r && r.set(e, t), t
        }

        function T(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    }, {
        "./arc": "BL7I",
        "./area": "IYvJ",
        "./line": "KhHE",
        "./pie": "bAZU",
        "./areaRadial": "T5gn",
        "./lineRadial": "faWF",
        "./pointRadial": "vzjT",
        "./link/index": "npGN",
        "./symbol": "bBhM",
        "./symbol/circle": "zjv7",
        "./symbol/cross": "PTh9",
        "./symbol/diamond": "fuDX",
        "./symbol/square": "bj9s",
        "./symbol/star": "L5Ql",
        "./symbol/triangle": "owZx",
        "./symbol/wye": "UZQY",
        "./curve/basisClosed": "FS5M",
        "./curve/basisOpen": "feGb",
        "./curve/basis": "cx05",
        "./curve/bundle": "iAgm",
        "./curve/cardinalClosed": "FUQi",
        "./curve/cardinalOpen": "iWbK",
        "./curve/cardinal": "DORS",
        "./curve/catmullRomClosed": "AW0P",
        "./curve/catmullRomOpen": "PGVM",
        "./curve/catmullRom": "oFi9",
        "./curve/linearClosed": "c2vC",
        "./curve/linear": "L3Qx",
        "./curve/monotone": "DNx2",
        "./curve/natural": "qyH2",
        "./curve/step": "SIad",
        "./stack": "k9Ur",
        "./offset/expand": "WOsM",
        "./offset/diverging": "PS7K",
        "./offset/none": "jW6Y",
        "./offset/silhouette": "UGaf",
        "./offset/wiggle": "zv8R",
        "./order/appearance": "Uz9Z",
        "./order/ascending": "Z1jP",
        "./order/descending": "oyxb",
        "./order/insideOut": "cmz2",
        "./order/none": "NTwk",
        "./order/reverse": "MoW7"
    }],
    "OZEo": [function(require, module, exports) {
        const a = ["coral", "skyblue", "#66c2a5", "tan", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "coral", "skyblue", "tan", "orange"];
        module.exports = {
            colors: a
        };
    }, {}],
    "CSG0": [function(require, module, exports) {
        "use strict";
        var t = require("d3-selection");
        const e = (e, i, r, n, l) => {
            e.svg.append("svg").attr("x", "left" === e.legendPosition ? 5 : e.width - (r + 2)).attr("y", 0);
            const a = void 0 === l ? 5 - e.margin.left : l,
                o = e.rc.rectangle("left" === e.legendPosition ? a : e.width + e.margin.right - 2 - r, -e.margin.top / 3, r, n, {
                    fill: "white",
                    fillWeight: .1,
                    strokeWidth: .75,
                    roughness: 2
                }),
                s = e.roughSvg.appendChild(o),
                g = "rough" + e.el.substring(1, e.el.length);
            s.setAttribute("class", g), i.forEach((i, n) => {
                const l = (0, t.select)("." + g).append("g").attr("transform", `translate(\n        ${"left"===e.legendPosition?5:e.width-(r+2)},\n        0)`);
                l.append("rect").style("fill", e.colors[n]).attr("width", 20).attr("height", 8).attr("x", "left" === e.legendPosition ? a : e.margin.right + 5).attr("y", 6 + 11 * n - e.margin.top / 3), l.append("text").style("font-size", ".8rem").style("font-family", e.fontFamily).attr("x", "left" === e.legendPosition ? a + 25 : e.margin.right + 30).attr("y", 6 + 11 * n + 8 - e.margin.top / 3).text(i.text)
            })
        };
        module.exports = {
            addLegend: e
        };
    }, {
        "d3-selection": "ysDv"
    }],
    "OMfA": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        var t = require("d3-fetch"),
            i = require("d3-selection"),
            s = require("d3-shape"),
            e = n(require("roughjs/bundled/rough.esm.js")),
            h = n(require("lodash.get")),
            l = n(require("./Chart")),
            a = require("./utils/colors"),
            r = require("./utils/addLegend"),
            o = require("./utils/roughCeiling");

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        class d extends l.default {
            constructor(t) {
                super(t), this.margin = t.margin || {
                    top: 50,
                    right: 20,
                    bottom: 10,
                    left: 20
                }, this.colors = (0, h.default)(t, "colors", a.colors), this.highlight = t.highlight, this.roughness = (0, o.roughCeiling)({
                    roughness: t.roughness,
                    ceiling: 30
                }), this.strokeWidth = (0, h.default)(t, "strokeWidth", .75), this.innerStrokeWidth = (0, h.default)(t, "innerStrokeWidth", .75), this.fillWeight = (0, h.default)(t, "fillWeight", .85), this.labels = "object" === this.dataFormat ? "labels" : t.labels, this.values = "object" === this.dataFormat ? "values" : t.values, void 0 !== this.labels && void 0 !== this.values ? (this.legend = !1 !== t.legend, this.legendPosition = (0, h.default)(t, "legendPosition", "right"), this.initChartValues(t), this.resolveFont(), this.drawChart = this.resolveData(t.data), this.drawChart(), "undefined" !== t.title && this.setTitle(t.title)) : console.log(`Error for ${this.el}: Must include labels and values when        instantiating Donut chart. Skipping chart.`)
            }
            initChartValues(t) {
                const i = t.width ? t.width : 300,
                    s = t.height ? t.height : 300;
                this.width = i - this.margin.left - this.margin.right, this.height = s - this.margin.top - this.margin.bottom, this.roughId = this.el + "_svg", this.graphClass = this.el.substring(1, this.el.length), this.interactionG = "g." + this.graphClass, this.radius = Math.min(this.width, this.height) / 2, this.setSvg()
            }
            resolveData(i) {
                return "string" != typeof i ? () => {
                    this.data = i, this.drawFromObject()
                } : i.includes(".csv") ? () => {
                    (0, t.csv)(i).then(t => {
                        this.data = t, this.drawFromFile()
                    })
                } : i.includes(".tsv") ? () => {
                    (0, t.tsv)(i).then(t => {
                        this.data = t, this.drawFromFile()
                    })
                } : i.includes(".json") ? () => {
                    (0, t.json)(i).then(t => {
                        this.data = t, this.drawFromFile()
                    })
                } : void 0
            }
            setTitle(t) {
                this.svg.append("text").attr("x", this.width / 2).attr("y", 0 - this.margin.top / 3).attr("class", "title").attr("text-anchor", "middle").style("font-size", void 0 === this.titleFontSize ? `${Math.min(40,Math.min(this.width,this.height)/4)}px` : this.titleFontSize).style("font-family", this.fontFamily).style("opacity", .8).text(t)
            }
            addInteraction() {
                (0, i.selectAll)(this.interactionG).append("g").attr("transform", `translate(${this.width/2}, ${this.height/2})`).data("object" === this.dataFormat ? this.makePie(this.data[this.values]) : this.makePie(this.data)).append("path").attr("d", this.makeArc).attr("stroke-width", "0px").attr("fill", "transparent");
                const t = (0, i.select)(this.el).append("div").style("opacity", 0).attr("class", "tooltip").style("position", "absolute").style("background-color", "white").style("border", "solid").style("border-width", "1px").style("border-radius", "5px").style("padding", "3px").style("font-family", this.fontFamily).style("font-size", this.tooltipFontSize).style("pointer-events", "none");
                const s = this;
                let e;
                (0, i.selectAll)(this.interactionG).on("mouseover", function() {
                    t.style("opacity", 1), e = (0, i.select)(this).selectAll("path").style("stroke"), void 0 === s.highlight ? (0, i.select)(this).selectAll("path").style("opacity", .5) : (0, i.select)(this).selectAll("path").style("stroke", s.highlight)
                }), (0, i.selectAll)(this.interactionG).on("mouseout", function() {
                    t.style("opacity", 0), (0, i.select)(this).selectAll("path").style("stroke", e), (0, i.select)(this).selectAll("path").style("opacity", 1)
                }), (0, i.selectAll)(this.interactionG).on("mousemove", function(e) {
                    const h = (0, i.select)(this).attr("attrX"),
                        l = (0, i.select)(this).attr("attrY"),
                        a = (0, i.mouse)(this);
                    t.html(`<b>${h}</b>: ${l}`).style("opacity", .95).attr("class", function(t) {}).style("transform", `translate(${a[0]+s.margin.left}px, \n                            ${a[1]-s.height-s.margin.bottom}px)`)
                })
            }
            initRoughObjects() {
                this.roughSvg = document.getElementById(this.roughId), this.rcAxis = e.default.svg(this.roughSvg, {
                    options: {
                        strokeWidth: this.strokeWidth >= 3 ? 3 : this.strokeWidth
                    }
                }), this.rc = e.default.svg(this.roughSvg, {
                    options: {
                        fill: this.color,
                        strokeWidth: this.innerStrokeWidth,
                        roughness: this.roughness,
                        bowing: this.bowing,
                        fillStyle: this.fillStyle,
                        fillWeight: this.fillWeight
                    }
                })
            }
            drawFromObject() {
                this.initRoughObjects(), this.makePie = (0, s.pie)(), this.makeArc = (0, s.arc)().innerRadius(0).outerRadius(this.radius), this.arcs = this.makePie(this.data[this.values]), this.arcs.forEach((t, i) => {
                    if (0 !== t.value) {
                        const s = this.rc.arc(this.width / 2, this.height / 2, 2 * this.radius, 2 * this.radius, t.startAngle - Math.PI / 2, t.endAngle - Math.PI / 2, !0, {
                            fill: this.colors[i],
                            stroke: this.colors[i]
                        });
                        s.setAttribute("class", this.graphClass);
                        const e = this.roughSvg.appendChild(s);
                        e.setAttribute("attrY", this.data[this.values][i]), e.setAttribute("attrX", this.data[this.labels][i])
                    }
                });
                const t = this.rc.circle(this.width / 2, this.height / 2, this.radius, {
                    fill: "white",
                    strokeWidth: .05,
                    fillWeight: 10,
                    fillStyle: "solid"
                });
                this.roughSvg.appendChild(t), (0, i.selectAll)(this.interactionG).selectAll("path:nth-child(2)").style("stroke-width", this.strokeWidth);
                const e = this.data.labels.map((t, i) => ({
                        color: this.colors[i],
                        text: t
                    })),
                    h = 6 * e.reduce((t, i) => t > i.text.length ? t : i.text.length, 0) + 35,
                    l = 11 * e.length + 8;
                !0 === this.legend && (0, r.addLegend)(this, e, h, l), !0 === this.interactive && this.addInteraction()
            }
            drawFromFile() {
                this.initRoughObjects(), this.makePie = (0, s.pie)().value(t => t[this.values]).sort(null);
                const t = [];
                this.makeArc = (0, s.arc)().innerRadius(0).outerRadius(this.radius), this.arcs = this.makePie(this.data), this.arcs.forEach((i, s) => {
                    if (0 !== i.value) {
                        const t = this.rc.arc(this.width / 2, this.height / 2, 2 * this.radius, 2 * this.radius, i.startAngle - Math.PI / 2, i.endAngle - Math.PI / 2, !0, {
                            fill: this.colors[s],
                            stroke: this.colors[s]
                        });
                        t.setAttribute("class", this.graphClass);
                        const e = this.roughSvg.appendChild(t);
                        e.setAttribute("attrY", i.data[this.values]), e.setAttribute("attrX", i.data[this.labels])
                    }
                    t.push(i.data[this.labels])
                });
                const e = this.rc.circle(this.width / 2, this.height / 2, this.radius, {
                    fill: "white",
                    strokeWidth: .05,
                    fillWeight: 10,
                    fillStyle: "solid"
                });
                this.roughSvg.appendChild(e), (0, i.selectAll)(this.interactionG).selectAll("path:nth-child(2)").style("stroke-width", this.strokeWidth);
                const h = t.map((t, i) => ({
                        color: this.colors[i],
                        text: t
                    })),
                    l = 6 * h.reduce((t, i) => t > i.text.length ? t : i.text.length, 0) + 35,
                    a = 11 * h.length + 8;
                !0 === this.legend && (0, r.addLegend)(this, h, l, a), !0 === this.interactive && this.addInteraction()
            }
        }
        var c = d;
        exports.default = c;
    }, {
        "d3-fetch": "grWT",
        "d3-selection": "ysDv",
        "d3-shape": "maww",
        "roughjs/bundled/rough.esm.js": "ze2Z",
        "lodash.get": "ZEnN",
        "./Chart": "Zxo0",
        "./utils/colors": "OZEo",
        "./utils/addLegend": "CSG0",
        "./utils/roughCeiling": "r4B0"
    }],
    "CmSo": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        var t = require("d3-array"),
            s = require("d3-axis"),
            e = require("d3-fetch"),
            i = require("d3-format"),
            a = require("d3-scale"),
            h = require("d3-selection"),
            l = require("d3-shape"),
            o = u(require("roughjs/bundled/rough.esm.js")),
            r = u(require("lodash.get")),
            n = u(require("./Chart")),
            d = require("./utils/addLegend"),
            c = require("./utils/colors"),
            g = require("./utils/roughCeiling");

        function u(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        const x = s => {
            const e = Object.keys(s).map(e => (0, t.extent)(s[e]));
            return [(0, t.min)(e, t => t[0]), (0, t.max)(e, t => t[1])]
        };
        class m extends n.default {
            constructor(t) {
                super(t), this.margin = t.margin || {
                    top: 50,
                    right: 20,
                    bottom: 50,
                    left: 100
                }, this.roughness = (0, g.roughCeiling)({
                    roughness: t.roughness,
                    defaultValue: 2.2
                }), this.axisStrokeWidth = (0, r.default)(t, "axisStrokeWidth", .4), this.axisRoughness = (0, r.default)(t, "axisRoughness", .9), this.stroke = (0, r.default)(t, "stroke", "black"), this.fillWeight = (0, r.default)(t, "fillWeight", .85), this.colors = t.colors, this.strokeWidth = (0, r.default)(t, "strokeWidth", 8), this.axisFontSize = t.axisFontSize, this.x = t.x, this.y = "object" === this.dataFormat ? "y" : t.y, this.xValueFormat = t.xValueFormat, this.yValueFormat = t.yValueFormat, this.legend = !1 !== t.legend, this.legendPosition = (0, r.default)(t, "legendPosition", "right"), this.circle = !1 !== t.circle, this.circleRadius = (0, r.default)(t, "circleRadius", 10), this.circleRoughness = (0, g.roughCeiling)({
                    roughness: t.circleRoughness,
                    defaultValue: 2
                }), this.xLabel = (0, r.default)(t, "xLabel", ""), this.yLabel = (0, r.default)(t, "yLabel", ""), this.labelFontSize = (0, r.default)(t, "labelFontSize", "1rem"), "file" === this.dataFormat && (this.dataSources = [], this.yKeys = Object.keys(t).filter(t => /y/.test(t)), this.yKeys.map((s, e) => {
                    "yLabel" !== s && this.dataSources.push(t[s])
                })), this.initChartValues(t), this.resolveFont(), this.drawChart = this.resolveData(t.data), this.drawChart(), "undefined" !== t.title && this.setTitle(t.title)
            }
            initChartValues(t) {
                const s = t.width ? t.width : 300,
                    e = t.height ? t.height : 400;
                this.width = s - this.margin.left - this.margin.right, this.height = e - this.margin.top - this.margin.bottom, this.roughId = this.el + "_svg", this.graphClass = this.el.substring(1, this.el.length), this.interactionG = "g." + this.graphClass, this.setSvg()
            }
            resolveData(t) {
                return "string" != typeof t ? () => {
                    this.data = t, this.drawFromObject()
                } : t.includes(".csv") ? () => {
                    (0, e.csv)(t).then(t => {
                        this.data = t, this.drawFromFile()
                    })
                } : t.includes(".tsv") ? () => {
                    (0, e.tsv)(t).then(t => {
                        this.data = t, this.drawFromFile()
                    })
                } : void 0
            }
            addScales() {
                let s, e;
                if ("file" !== this.dataFormat) s = x(this.data);
                else {
                    const e = this.dataSources.map(s => (0, t.extent)(this.data, t => +t[s]));
                    s = [(0, t.min)(e, t => t[0]), (0, t.max)(e, t => t[1])]
                }
                if (void 0 === this.x) {
                    const s = Object.keys(this.data).map(t => this.data[t].length),
                        i = (0, t.max)(s);
                    e = "file" === this.dataFormat ? [0, this.data.length] : [0, i]
                } else e = (0, t.extent)(this.x);
                const i = s,
                    h = i[1] - i[0];
                this.xScale = void 0 === this.x ? (0, a.scalePoint)().range([0, this.width]).domain([...Array(e[1]).keys()]) : (0, a.scalePoint)().range([0, this.width]).domain(this.x), this.yScale = (0, a.scaleLinear)().range([this.height, 0]).domain([0, i[1] + .05 * h])
            }
            addLabels() {
                "" !== this.xLabel && this.svg.append("text").attr("x", this.width / 2).attr("y", this.height + this.margin.bottom / 1.3).attr("dx", "1em").attr("class", "labelText").style("text-anchor", "middle").style("font-family", this.fontFamily).style("font-size", this.labelFontSize).text(this.xLabel), "" !== this.yLabel && this.svg.append("text").attr("transform", "rotate(-90)").attr("y", 0 - this.margin.left / 2).attr("x", 0 - this.height / 2).attr("dy", "1em").attr("class", "labelText").style("text-anchor", "middle").style("font-family", this.fontFamily).style("font-size", this.labelFontSize).text(this.yLabel)
            }
            addAxes() {
                const t = (0, s.axisBottom)(this.xScale).tickSize(0).tickFormat(t => this.xValueFormat ? (0, i.format)(this.xValueFormat)(t) : t),
                    e = (0, s.axisLeft)(this.yScale).tickSize(0).tickFormat(t => this.yValueFormat ? (0, i.format)(this.yValueFormat)(t) : t);
                this.svg.append("g").attr("transform", "translate(0," + this.height + ")").call(t).attr("class", `xAxis${this.graphClass}`).selectAll("text").attr("transform", "translate(-10, 0)rotate(-45)").style("text-anchor", "end").style("font-family", this.fontFamily).style("font-size", void 0 === this.axisFontSize ? `${Math.min(.95,Math.min(this.width,this.height)/140)}rem` : this.axisFontSize), this.svg.append("g").call(e).attr("class", `yAxis${this.graphClass}`).selectAll("text").style("font-family", this.fontFamily).style("font-size", void 0 === this.axisFontSize ? `${Math.min(.95,Math.min(this.width,this.height)/140)}rem` : this.axisFontSize), (0, h.selectAll)("path.domain").attr("stroke", "transparent"), (0, h.selectAll)("g.tick").style("opacity", 1)
            }
            makeAxesRough(t, s) {
                const e = `xAxis${this.graphClass}`,
                    i = `yAxis${this.graphClass}`,
                    a = `rough-${e}`,
                    l = `rough-${i}`;
                (0, h.select)(`.${e}`).selectAll("path.domain").each(function(e, i) {
                    const l = (0, h.select)(this).node().getAttribute("d"),
                        o = s.path(l, {
                            stroke: "black",
                            fillStyle: "hachure"
                        });
                    o.setAttribute("class", a), t.appendChild(o)
                }), (0, h.selectAll)(`.${a}`).attr("transform", `translate(0, ${this.height})`), (0, h.select)(`.${i}`).selectAll("path.domain").each(function(e, i) {
                    const a = (0, h.select)(this).node().getAttribute("d"),
                        o = s.path(a, {
                            stroke: "black",
                            fillStyle: "hachure"
                        });
                    o.setAttribute("class", l), t.appendChild(o)
                })
            }
            setTitle(t) {
                this.svg.append("text").attr("x", this.width / 2).attr("y", 0 - this.margin.top / 2).attr("text-anchor", "middle").style("font-size", void 0 === this.titleFontSize ? `${Math.min(20,Math.min(this.width,this.height)/4)}px` : this.titleFontSize).style("font-family", this.fontFamily).style("opacity", .8).text(t)
            }
            addInteraction() {
                const s = this;
                this.chartScreen = this.svg.append("g").attr("pointer-events", "all"), this.dataSources.map((t, s) => {
                    const e = this.data[t].map((s, e) => void 0 === this.x ? [this.xScale(e), this.yScale(s[t])] : [this.xScale(this.x[e]), this.yScale(+s[t])]).filter(t => void 0 !== t[0]),
                        i = (0, l.line)().x(t => t[0]).y(t => t[1]);
                    this.svg.append("path").datum(e).attr("fill", "none").attr("stroke", "blue").attr("stroke-width", 1.5).attr("d", i).attr("visibility", "hidden");
                    const a = t + "class";
                    this.svg.append("g").attr("class", a + "text").append("text").style("font-size", this.tooltipFontSize).style("opacity", 0).style("font-family", this.fontFamily).attr("text-anchor", "middle").attr("alignment-baseline", "middle")
                });
                this.chartScreen.append("rect").attr("width", this.width).attr("height", this.height).attr("fill", "none").on("mousemove", function(e) {
                    const i = (0, h.mouse)(this)[0],
                        a = s.xScale.domain(),
                        l = s.xScale.range(),
                        o = (0, t.range)(l[0], l[1] + 1, s.xScale.step()),
                        r = (0, t.bisect)(o, i),
                        n = a[r];
                    s.dataSources.map((t, e) => {
                        const i = "file" === s.dataFormat ? void 0 === s.x ? s.data[n] : s.data[r] : s.data[t][r],
                            a = "." + t + "classtext";
                        "file" === s.dataFormat ? (0, h.select)(a).selectAll("text").style("opacity", 1).html(void 0 === s.x ? `(${r},${i[t]})` : `(${s.x[r]}, ${i[t]})`).attr("x", void 0 === s.x ? s.xScale(r) : s.xScale(s.x[r])).attr("y", s.yScale(i[t]) - 6) : (0, h.select)(a).selectAll("text").style("opacity", 1).html(void 0 === s.x ? `(${r}, ${i})` : `(${s.x[r]}, ${i})`).attr("x", void 0 === s.x ? s.xScale(r) : s.xScale(s.x[r])).attr("y", s.yScale(i))
                    })
                }).on("mouseout", () => {
                    s.dataSources.map(t => {
                        const s = "." + t + "class" + "text";
                        (0, h.select)(s).selectAll("text").style("opacity", 0)
                    })
                })
            }
            initRoughObjects() {
                this.roughSvg = document.getElementById(this.roughId), this.rcAxis = o.default.svg(this.roughSvg, {
                    options: {
                        strokeWidth: this.axisStrokeWidth,
                        roughness: this.axisRoughness
                    }
                }), this.rc = o.default.svg(this.roughSvg, {
                    options: {
                        stroke: "none" === this.stroke ? void 0 : this.stroke,
                        strokeWidth: this.strokeWidth,
                        roughness: this.roughness,
                        bowing: this.bowing,
                        fillStyle: this.fillStyle
                    }
                })
            }
            drawFromObject() {
                void 0 === this.colors && (this.colors = c.colors), this.dataSources = Object.keys(this.data), this.initRoughObjects(), this.addScales(), this.dataSources.map((t, s) => {
                    const e = this.data[t].map((t, s) => void 0 === this.x ? [this.xScale(s), this.yScale(+t)] : [this.xScale(this.x[s]), this.yScale(t)]),
                        i = e.filter(t => void 0 !== t[0]),
                        a = this.rc.curve(i, {
                            stroke: 1 === this.colors.length ? this.colors[0] : this.colors[s],
                            roughness: this.roughness,
                            bowing: this.bowing
                        });
                    this.roughSvg.appendChild(a).setAttribute("class", this.graphClass), !0 === this.circle && e.forEach((t, e) => {
                        const i = this.rc.circle(t[0], t[1], this.circleRadius, {
                            stroke: this.colors[s],
                            fill: this.colors[s],
                            fillStyle: "solid",
                            strokeWidth: 1,
                            roughness: this.circleRoughness
                        });
                        this.roughSvg.appendChild(i)
                    })
                });
                const t = this.dataSources.map((t, s) => ({
                        color: this.colors[s],
                        text: t
                    })),
                    s = 6 * t.reduce((t, s) => t > s.text.length ? t : s.text.length, 0) + 35,
                    e = 11 * t.length + 8;
                !0 === this.legend && (0, d.addLegend)(this, t, s, e, 2), this.addAxes(), this.addLabels(), this.makeAxesRough(this.roughSvg, this.rcAxis), !0 === this.interactive && this.addInteraction()
            }
            drawFromFile() {
                void 0 === this.colors && (this.colors = c.colors), this.initRoughObjects(), this.addScales(), this.dataSources.map((t, s) => {
                    const e = this.data.map((s, e) => void 0 === this.x ? [this.xScale(e), this.yScale(s[t])] : [this.xScale(this.x[e]), this.yScale(+s[t])]).filter(t => void 0 !== t[0]),
                        i = this.rc.curve(e, {
                            stroke: this.colors[s],
                            strokeWidth: this.strokeWidth,
                            roughness: 1,
                            bowing: 10
                        });
                    this.roughSvg.appendChild(i), !0 === this.circle && e.forEach((t, e) => {
                        const i = this.rc.circle(t[0], t[1], this.circleRadius, {
                            stroke: this.colors[s],
                            fill: this.colors[s],
                            fillStyle: "solid",
                            strokeWidth: 1,
                            roughness: this.circleRoughness
                        });
                        this.roughSvg.appendChild(i)
                    })
                });
                const t = this.dataSources.map((t, s) => ({
                        color: this.colors[s],
                        text: t
                    })),
                    s = 6 * t.reduce((t, s) => t > s.text.length ? t : s.text.length, 0) + 35,
                    e = 11 * t.length + 8;
                !0 === this.legend && (0, d.addLegend)(this, t, s, e, 2), this.addAxes(), this.addLabels(), this.makeAxesRough(this.roughSvg, this.rcAxis), !0 === this.interactive && this.addInteraction()
            }
        }
        var y = m;
        exports.default = y;
    }, {
        "d3-array": "K0bd",
        "d3-axis": "mp0m",
        "d3-fetch": "grWT",
        "d3-format": "VuZR",
        "d3-scale": "zL2z",
        "d3-selection": "ysDv",
        "d3-shape": "maww",
        "roughjs/bundled/rough.esm.js": "ze2Z",
        "lodash.get": "ZEnN",
        "./Chart": "Zxo0",
        "./utils/addLegend": "CSG0",
        "./utils/colors": "OZEo",
        "./utils/roughCeiling": "r4B0"
    }],
    "D7TA": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        var t = require("d3-fetch"),
            s = require("d3-selection"),
            i = require("d3-shape"),
            e = n(require("roughjs/bundled/rough.esm.js")),
            h = n(require("lodash.get")),
            l = n(require("./Chart")),
            a = require("./utils/colors"),
            r = require("./utils/addLegend"),
            o = require("./utils/roughCeiling");

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        class d extends l.default {
            constructor(t) {
                super(t), this.margin = t.margin || {
                    top: 50,
                    right: 20,
                    bottom: 10,
                    left: 20
                }, this.colors = (0, h.default)(t, "colors", a.colors), this.highlight = t.highlight, this.roughness = (0, o.roughCeiling)({
                    roughness: t.roughness,
                    ceiling: 30,
                    defaultValue: 0
                }), this.strokeWidth = (0, h.default)(t, "strokeWidth", .75), this.innerStrokeWidth = (0, h.default)(t, "innerStrokeWidth", 1), this.fillWeight = (0, h.default)(t, "fillWeight", .5), this.labels = "object" === this.dataFormat ? "labels" : t.labels, this.values = "object" === this.dataFormat ? "values" : t.values, void 0 !== this.labels && void 0 !== this.values ? (this.legend = !1 !== t.legend, this.legendPosition = (0, h.default)(t, "legendPosition", "right"), this.initChartValues(t), this.resolveFont(), this.drawChart = this.resolveData(t.data), this.drawChart(), "undefined" !== t.title && this.setTitle(t.title)) : console.log(`Error for ${this.el}: Must include labels and values when        instantiating Donut chart. Skipping chart.`)
            }
            initChartValues(t) {
                const s = t.width ? t.width : 350,
                    i = t.height ? t.height : 450;
                this.width = s - this.margin.left - this.margin.right, this.height = i - this.margin.top - this.margin.bottom, this.roughId = this.el + "_svg", this.graphClass = this.el.substring(1, this.el.length), this.interactionG = "g." + this.graphClass, this.radius = Math.min(this.width, this.height) / 2, this.setSvg()
            }
            resolveData(s) {
                return "string" != typeof s ? () => {
                    this.data = s, this.drawFromObject()
                } : s.includes(".csv") ? () => {
                    (0, t.csv)(s).then(t => {
                        console.log(t), this.data = t, this.drawFromFile()
                    })
                } : s.includes(".tsv") ? () => {
                    (0, t.tsv)(s).then(t => {
                        console.log(t), this.data = t, this.drawFromFile()
                    })
                } : s.includes(".json") ? () => {
                    (0, t.json)(s).then(t => {
                        console.log(t), this.data = t, this.drawFromFile()
                    })
                } : void 0
            }
            setTitle(t) {
                this.svg.append("text").attr("x", this.width / 2).attr("y", 0 - this.margin.top / 3).attr("class", "title").attr("text-anchor", "middle").style("font-size", void 0 === this.titleFontSize ? `${Math.min(40,Math.min(this.width,this.height)/4)}px` : this.titleFontSize).style("font-family", this.fontFamily).style("opacity", .8).text(t)
            }
            addInteraction() {
                (0, s.selectAll)(this.interactionG).append("g").attr("transform", `translate(${this.width/2}, ${this.height/2})`).data("object" === this.dataFormat ? this.makePie(this.data[this.values]) : this.makePie(this.data)).append("path").attr("d", this.makeArc).attr("stroke-width", "0px").attr("fill", "transparent");
                const t = (0, s.select)(this.el).append("div").style("opacity", 0).attr("class", "tooltip").style("position", "absolute").style("background-color", "white").style("border", "solid").style("border-width", "1px").style("border-radius", "5px").style("padding", "3px").style("font-family", this.fontFamily).style("font-size", this.tooltipFontSize).style("pointer-events", "none");
                const i = this;
                let e;
                (0, s.selectAll)(this.interactionG).on("mouseover", function() {
                    t.style("opacity", 1), e = (0, s.select)(this).selectAll("path").style("stroke"), void 0 === i.highlight ? (0, s.select)(this).selectAll("path").style("opacity", .5) : (0, s.select)(this).selectAll("path").style("stroke", i.highlight)
                }), (0, s.selectAll)(this.interactionG).on("mouseout", function() {
                    t.style("opacity", 0), (0, s.select)(this).selectAll("path").style("stroke", e), (0, s.select)(this).selectAll("path").style("opacity", 1)
                }), (0, s.selectAll)(this.interactionG).on("mousemove", function(e) {
                    const h = (0, s.select)(this).attr("attrX"),
                        l = ((0, s.select)(this).attr("attrY"), (0, s.mouse)(this));
                    t.html(`<b>${h}</b>`).style("opacity", .95).attr("class", function(t) {}).style("transform", `translate(${l[0]+i.margin.left}px, \n                            ${l[1]-i.height-i.margin.bottom}px)`)
                })
            }
            initRoughObjects() {
                this.roughSvg = document.getElementById(this.roughId), this.rcAxis = e.default.svg(this.roughSvg, {
                    options: {
                        strokeWidth: this.strokeWidth >= 3 ? 3 : this.strokeWidth
                    }
                }), this.rc = e.default.svg(this.roughSvg, {
                    options: {
                        fill: this.color,
                        strokeWidth: this.innerStrokeWidth,
                        roughness: this.roughness,
                        bowing: this.bowing,
                        fillStyle: this.fillStyle
                    }
                })
            }
            drawFromObject() {
                this.initRoughObjects(), this.makePie = (0, i.pie)(), this.makeArc = (0, i.arc)().innerRadius(0).outerRadius(this.radius), this.arcs = this.makePie(this.data[this.values]), this.arcs.forEach((t, s) => {
                    if (0 !== t.value) {
                        const i = this.rc.arc(this.width / 2, this.height / 2, 2 * this.radius, 2 * this.radius, t.startAngle - Math.PI / 2, t.endAngle - Math.PI / 2, !0, {
                            fill: this.colors[s],
                            stroke: this.colors[s]
                        });
                        i.setAttribute("class", this.graphClass);
                        const e = this.roughSvg.appendChild(i);
                        e.setAttribute("attrY", this.data[this.values][s]), e.setAttribute("attrX", this.data[this.labels][s])
                    }
                }), (0, s.selectAll)(this.interactionG).selectAll("path:nth-child(2)").style("stroke-width", this.strokeWidth);
                const t = this.data.labels.map((t, s) => ({
                        color: this.colors[s],
                        text: t
                    })),
                    e = 6 * t.reduce((t, s) => t > s.text.length ? t : s.text.length, 0) + 35,
                    h = 11 * t.length + 8;
                !0 === this.legend && (0, r.addLegend)(this, t, e, h), !0 === this.interactive && this.addInteraction()
            }
            drawFromFile() {
                this.initRoughObjects(), this.makePie = (0, i.pie)().value(t => t[this.values]).sort(null);
                const t = [];
                this.makeArc = (0, i.arc)().innerRadius(0).outerRadius(this.radius), this.arcs = this.makePie(this.data), this.arcs.forEach((s, i) => {
                    if (0 !== s.value) {
                        const t = this.rc.arc(this.width / 2, this.height / 2, 2 * this.radius, 2 * this.radius, s.startAngle - Math.PI / 2, s.endAngle - Math.PI / 2, !0, {
                            fill: this.colors[i],
                            stroke: this.colors[i]
                        });
                        t.setAttribute("class", this.graphClass);
                        const e = this.roughSvg.appendChild(t);
                        e.setAttribute("attrY", s.data[this.values]), e.setAttribute("attrX", s.data[this.labels])
                    }
                    t.push(s.data[this.labels])
                }), (0, s.selectAll)(this.interactionG).selectAll("path:nth-child(2)").style("stroke-width", this.strokeWidth);
                const e = t.map((t, s) => ({
                        color: this.colors[s],
                        text: t
                    })),
                    h = 6 * e.reduce((t, s) => t > s.text.length ? t : s.text.length, 0) + 35,
                    l = 11 * e.length + 8;
                !0 === this.legend && (0, r.addLegend)(this, e, h, l), !0 === this.interactive && this.addInteraction()
            }
        }
        var c = d;
        exports.default = c;
    }, {
        "d3-fetch": "grWT",
        "d3-selection": "ysDv",
        "d3-shape": "maww",
        "roughjs/bundled/rough.esm.js": "ze2Z",
        "lodash.get": "ZEnN",
        "./Chart": "Zxo0",
        "./utils/colors": "OZEo",
        "./utils/addLegend": "CSG0",
        "./utils/roughCeiling": "r4B0"
    }],
    "AiRz": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        var t = require("d3-array"),
            i = require("d3-axis"),
            s = require("d3-fetch"),
            e = require("d3-format"),
            h = require("d3-scale"),
            a = require("d3-selection"),
            l = d(require("roughjs/bundled/rough.esm.js")),
            r = d(require("lodash.get")),
            o = d(require("./Chart")),
            n = require("./utils/roughCeiling");

        function d(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        const c = ["pink", "skyblue", "coral", "gold", "teal", "grey", "darkgreen", "pink", "brown", "slateblue", "grey1", "orange"];
        class g extends o.default {
            constructor(t) {
                super(t), this.margin = t.margin || {
                    top: 50,
                    right: 20,
                    bottom: 50,
                    left: 100
                }, this.colorVar = t.colorVar, this.roughness = (0, n.roughCeiling)({
                    roughness: t.roughness
                }), this.highlight = t.highlight, this.highlightLabel = (0, r.default)(t, "highlightLabel", "xy"), this.radius = (0, r.default)(t, "radius", 8), this.axisStrokeWidth = (0, r.default)(t, "axisStrokeWidth", .4), this.axisRoughness = (0, r.default)(t, "axisRoughness", .9), this.curbZero = !0 === t.curbZero, this.innerStrokeWidth = (0, r.default)(t, "innerStrokeWidth", 1), this.stroke = (0, r.default)(t, "stroke", "black"), this.fillWeight = (0, r.default)(t, "fillWeight", .85), this.colors = t.colors, this.strokeWidth = (0, r.default)(t, "strokeWidth", 1), this.axisFontSize = t.axisFontSize, this.x = "object" === this.dataFormat ? "x" : t.x, this.y = "object" === this.dataFormat ? "y" : t.y, this.xValueFormat = t.xValueFormat, this.yValueFormat = t.yValueFormat, this.xLabel = (0, r.default)(t, "xLabel", ""), this.yLabel = (0, r.default)(t, "yLabel", ""), this.labelFontSize = (0, r.default)(t, "labelFontSize", "1rem"), this.initChartValues(t), this.resolveFont(), this.drawChart = this.resolveData(t.data), this.drawChart(), "undefined" !== t.title && this.setTitle(t.title)
            }
            initChartValues(t) {
                const i = t.width ? t.width : 300,
                    s = t.height ? t.height : 400;
                this.width = i - this.margin.left - this.margin.right, this.height = s - this.margin.top - this.margin.bottom, this.roughId = this.el + "_svg", this.graphClass = this.el.substring(1, this.el.length), this.interactionG = "g." + this.graphClass, this.setSvg()
            }
            resolveData(t) {
                return "string" != typeof t ? () => {
                    this.data = t, this.drawFromObject()
                } : t.includes(".csv") ? () => {
                    (0, s.csv)(t).then(t => {
                        console.log(t), this.data = t, this.drawFromFile()
                    })
                } : t.includes(".tsv") ? () => {
                    (0, s.tsv)(t).then(t => {
                        this.data = t, this.drawFromFile()
                    })
                } : void 0
            }
            addScales() {
                const i = "file" === this.dataFormat ? (0, t.extent)(this.data, t => +t[this.x]) : (0, t.extent)(this.data[this.x]),
                    s = i[1] - i[0],
                    e = "file" === this.dataFormat ? (0, t.extent)(this.data, t => +t[this.y]) : (0, t.extent)(this.data[this.y]),
                    a = e[1] - e[0],
                    l = "file" === this.dataFormat ? (0, t.extent)(this.data, t => t[this.colorVar]) : [1, 1];
                if ("file" === this.dataFormat) {
                    const i = (0, t.extent)(this.data, t => +t[this.radius]),
                        s = Math.min(this.width, this.height) / 2 / 2;
                    this.radiusScale = (0, h.scaleLinear)().range([8, s]).domain(i)
                }!0 === this.curbZero && (e[0] > 0 && (e[0] = 0), i[0] > 0 && (i[0] = 0)), this.xScale = (0, h.scaleLinear)().range([0, this.width]).domain([i[0] - .05 * s, i[1] + .05 * s]), this.yScale = (0, h.scaleLinear)().range([this.height, 0]).domain([e[0] - .05 * a, e[1] + .05 * a]), this.colorScale = (0, h.scaleOrdinal)().range(this.colors).domain(l)
            }
            addLabels() {
                "" !== this.xLabel && this.svg.append("text").attr("x", this.width / 2).attr("y", this.height + this.margin.bottom / 1.3).attr("dx", "1em").attr("class", "labelText").style("text-anchor", "middle").style("font-family", this.fontFamily).style("font-size", this.labelFontSize).text(this.xLabel), "" !== this.yLabel && this.svg.append("text").attr("transform", "rotate(-90)").attr("y", 0 - this.margin.left / 2).attr("x", 0 - this.height / 2).attr("dy", "1em").attr("class", "labelText").style("text-anchor", "middle").style("font-family", this.fontFamily).style("font-size", this.labelFontSize).text(this.yLabel)
            }
            addAxes() {
                const t = (0, i.axisBottom)(this.xScale).tickSize(0).tickFormat(t => this.xValueFormat ? (0, e.format)(this.xValueFormat)(t) : t),
                    s = (0, i.axisLeft)(this.yScale).tickSize(0).tickFormat(t => this.yValueFormat ? (0, e.format)(this.yValueFormat)(t) : t);
                this.svg.append("g").attr("transform", "translate(0," + this.height + ")").call(t).attr("class", `xAxis${this.graphClass}`).selectAll("text").attr("transform", "translate(-10, 0)rotate(-45)").style("text-anchor", "end").style("font-family", this.fontFamily).style("font-size", void 0 === this.axisFontSize ? `${Math.min(.95,Math.min(this.width,this.height)/140)}rem` : this.axisFontSize), this.svg.append("g").call(s).attr("class", `yAxis${this.graphClass}`).selectAll("text").style("font-family", this.fontFamily).style("font-size", void 0 === this.axisFontSize ? `${Math.min(.95,Math.min(this.width,this.height)/140)}rem` : this.axisFontSize), (0, a.selectAll)("path.domain").attr("stroke", "transparent"), (0, a.selectAll)("g.tick").style("opacity", 1)
            }
            makeAxesRough(t, i) {
                const s = `xAxis${this.graphClass}`,
                    e = `yAxis${this.graphClass}`,
                    h = `rough-${s}`,
                    l = `rough-${e}`;
                (0, a.select)(`.${s}`).selectAll("path.domain").each(function(s, e) {
                    const l = (0, a.select)(this).node().getAttribute("d"),
                        r = i.path(l, {
                            stroke: "black",
                            fillStyle: "hachure"
                        });
                    r.setAttribute("class", h), t.appendChild(r)
                }), (0, a.selectAll)(`.${h}`).attr("transform", `translate(0, ${this.height})`), (0, a.select)(`.${e}`).selectAll("path.domain").each(function(s, e) {
                    const h = (0, a.select)(this).node().getAttribute("d"),
                        r = i.path(h, {
                            stroke: "black",
                            fillStyle: "hachure"
                        });
                    r.setAttribute("class", l), t.appendChild(r)
                })
            }
            setTitle(t) {
                this.svg.append("text").attr("x", this.width / 2).attr("y", 0 - this.margin.top / 2).attr("text-anchor", "middle").style("font-size", void 0 === this.titleFontSize ? `${Math.min(20,Math.min(this.width,this.height)/4)}px` : this.titleFontSize).style("font-family", this.fontFamily).style("opacity", .8).text(t)
            }
            addInteraction() {
                const t = (0, a.selectAll)(this.interactionG).data("file" === this.dataFormat ? this.data : this.data.x).append("circle").attr("cx", (t, i) => "file" === this.dataFormat ? this.xScale(+t[this.x]) : this.xScale(+this.data[this.x][i])).attr("cy", (t, i) => "file" === this.dataFormat ? this.yScale(+t[this.y]) : this.yScale(+this.data[this.y][i]));
                "file" === this.dataFormat ? t.attr("r", t => "number" == typeof this.radius ? .7 * this.radius : .6 * this.radiusScale(+t[this.radius])).attr("fill", "transparent") : t.attr("r", (t, i) => "number" == typeof this.radius ? .7 * this.radius : .6 * this.radius[i]).attr("fill", "transparent");
                var i = (0, a.select)(this.el).append("div").style("opacity", 0).attr("class", "tooltip").style("position", "absolute").style("background-color", "white").style("border", "solid").style("border-width", "1px").style("border-radius", "5px").style("padding", "3px").style("font-family", this.fontFamily).style("font-size", this.tooltipFontSize).style("pointer-events", "none");
                const s = this;
                let e;
                (0, a.selectAll)(this.interactionG).on("mouseover", function() {
                    i.style("opacity", 1), e = (0, a.select)(this).selectAll("path").style("stroke"), void 0 === s.highlight ? (0, a.select)(this).selectAll("path:nth-child(1)").style("opacity", .4) : (0, a.select)(this).selectAll("path:nth-child(1)").style("stroke", s.highlight), (0, a.select)(this).selectAll("path:nth-child(2)").style("stroke-width", s.strokeWidth + 1.2)
                }), (0, a.selectAll)(this.interactionG).on("mouseout", function() {
                    i.style("opacity", 0), (0, a.select)(this).selectAll("path").style("opacity", 1), (0, a.select)(this).selectAll("path:nth-child(1)").style("stroke", e), (0, a.select)(this).selectAll("path:nth-child(2)").style("stroke", s.stroke), (0, a.select)(this).selectAll("path:nth-child(2)").style("stroke-width", s.strokeWidth)
                }), (0, a.selectAll)(this.interactionG).on("mousemove", function(t) {
                    const e = (0, a.select)(this).attr("attrX"),
                        h = (0, a.select)(this).attr("attrY"),
                        l = (0, a.select)(this).attr("attrHighlightLabel"),
                        r = (0, a.mouse)(this);
                    i.html("xy" === s.highlightLabel ? `<b>x</b>: ${e} <br><b>y</b>: ${h}` : `<b>${l}</b>`).attr("class", function(t) {}).style("transform", `translate(${r[0]+s.margin.left}px, \n          ${r[1]-(s.height+s.margin.top+s.margin.bottom)}px)`)
                })
            }
            initRoughObjects() {
                this.roughSvg = document.getElementById(this.roughId), this.rcAxis = l.default.svg(this.roughSvg, {
                    options: {
                        strokeWidth: this.axisStrokeWidth,
                        roughness: this.axisRoughness
                    }
                }), this.rc = l.default.svg(this.roughSvg, {
                    options: {
                        stroke: "none" === this.stroke ? void 0 : this.stroke,
                        strokeWidth: this.innerStrokeWidth,
                        roughness: this.roughness,
                        bowing: this.bowing,
                        fillStyle: this.fillStyle
                    }
                })
            }
            drawFromObject() {
                void 0 === this.colors && (this.colors = c[0]), this.initRoughObjects(), this.addScales(), this.addAxes(), this.makeAxesRough(this.roughSvg, this.rcAxis), this.addLabels(), this.data.x.forEach((t, i) => {
                    const s = this.rc.circle(this.xScale(+t), this.yScale(+this.data[this.y][i]), "number" == typeof this.radius ? this.radius : this.radius[i], {
                            fill: "string" == typeof this.colors ? this.colors : 1 === this.colors.length ? this.colors[0] : this.colors[i],
                            simplification: this.simplification,
                            fillWeight: this.fillWeight
                        }),
                        e = this.roughSvg.appendChild(s);
                    e.setAttribute("class", this.graphClass), e.setAttribute("attrX", t), e.setAttribute("attrY", this.data[this.y][i]), e.setAttribute("attrHighlightLabel", this.data[this.highlightLabel])
                }), (0, a.selectAll)(this.interactionG).selectAll("path:nth-child(2)").style("stroke-width", this.strokeWidth), !0 === this.interactive && this.addInteraction()
            }
            drawFromFile() {
                void 0 === this.colors && (this.colors = c), this.initRoughObjects(), this.addScales(), this.addAxes(), this.makeAxesRough(this.roughSvg, this.rcAxis), this.addLabels(), this.data.forEach((t, i) => {
                    const s = this.rc.circle(this.xScale(+t[this.x]), this.yScale(+t[this.y]), "number" == typeof this.radius ? this.radius : this.radiusScale(+t[this.radius]), {
                            fill: void 0 === this.colorVar ? this.colors[0] : this.colorScale(t[this.colorVar]),
                            simplification: this.simplification,
                            fillWeight: this.fillWeight
                        }),
                        e = this.roughSvg.appendChild(s);
                    e.setAttribute("class", this.graphClass), e.setAttribute("attrX", t[this.x]), e.setAttribute("attrY", t[this.y]), e.setAttribute("attrHighlightLabel", t[this.highlightLabel])
                }), (0, a.selectAll)(this.interactionG).selectAll("path:nth-child(2)").style("stroke-width", this.strokeWidth), !0 === this.interactive && this.addInteraction()
            }
        }
        var u = g;
        exports.default = u;
    }, {
        "d3-array": "K0bd",
        "d3-axis": "mp0m",
        "d3-fetch": "grWT",
        "d3-format": "VuZR",
        "d3-scale": "zL2z",
        "d3-selection": "ysDv",
        "roughjs/bundled/rough.esm.js": "ze2Z",
        "lodash.get": "ZEnN",
        "./Chart": "Zxo0",
        "./utils/roughCeiling": "r4B0"
    }],
    "LH4o": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        var t = require("d3-array"),
            s = require("d3-axis"),
            e = require("d3-fetch"),
            i = require("d3-scale"),
            a = require("d3-selection"),
            h = d(require("roughjs/bundled/rough.esm.js")),
            l = d(require("lodash.get")),
            o = d(require("./Chart")),
            r = require("./utils/colors"),
            n = require("./utils/roughCeiling");

        function d(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        class c extends o.default {
            constructor(t) {
                super(t), this.data = t.data, this.margin = t.margin || {
                    top: 50,
                    right: 20,
                    bottom: 70,
                    left: 100
                }, this.colors = (0, l.default)(t, "colors", r.colors), this.highlight = (0, l.default)(t, "highlight", "coral"), this.roughness = (0, n.roughCeiling)({
                    roughness: t.roughness
                }), this.stroke = (0, l.default)(t, "stroke", "black"), this.strokeWidth = (0, l.default)(t, "strokeWidth", 1), this.axisStrokeWidth = (0, l.default)(t, "axisStrokeWidth", .5), this.axisRoughness = (0, l.default)(t, "axisRoughness", .5), this.innerStrokeWidth = (0, l.default)(t, "innerStrokeWidth", 1), this.fillWeight = (0, l.default)(t, "fillWeight", .5), this.axisFontSize = t.axisFontSize, this.labels = t.labels, this.values = t.values, this.stackColorMapping = {}, this.padding = (0, l.default)(t, "padding", .1), this.xLabel = (0, l.default)(t, "xLabel", ""), this.yLabel = (0, l.default)(t, "yLabel", ""), this.labelFontSize = (0, l.default)(t, "labelFontSize", "1rem"), this.initChartValues(t), this.resolveFont(), this.drawChart = this.resolveData(t.data), this.drawChart(), "undefined" !== t.title && this.setTitle(t.title)
            }
            initChartValues(t) {
                const s = t.width ? t.width : 350,
                    e = t.height ? t.height : 450;
                this.width = s - this.margin.left - this.margin.right, this.height = e - this.margin.top - this.margin.bottom, this.roughId = this.el + "_svg", this.graphClass = this.el.substring(1, this.el.length), this.interactionG = "g." + this.graphClass, this.setSvg()
            }
            getTotal(t) {
                for (let s = 0; s < t.length; s++) {
                    let e = 0;
                    for (let i = 0; i < t.columns.length; ++i) t.columns[i] !== this.labels && (e += t[s][t.columns[i]] = +t[s][t.columns[i]]);
                    t[s].total = e
                }
                return t
            }
            updateColorMapping(t) {
                this.stackColorMapping[t] || (this.stackColorMapping[t] = r.colors[Object.keys(this.stackColorMapping).length])
            }
            resolveData(t) {
                return "string" != typeof t ? () => {
                    this.data = t;
                    for (let s = 0; s < t.length; ++s) {
                        let e = 0;
                        Object.keys(t[s]).forEach(i => {
                            i !== this.labels && (this.updateColorMapping(i), e += t[s][i], t[s].total = e)
                        })
                    }
                    this.drawFromObject()
                } : t.includes(".csv") ? () => {
                    (0, e.csv)(t).then(t => {
                        this.getTotal(t), this.data = t, this.drawFromFile()
                    })
                } : t.includes(".tsv") ? () => {
                    (0, e.tsv)(t).then(t => {
                        this.getTotal(t), this.data = t, this.drawFromFile()
                    })
                } : void 0
            }
            addScales() {
                this.xScale = (0, i.scaleBand)().rangeRound([0, this.width]).padding(this.padding).domain(this.data.map(t => t[this.labels])), this.data.sort(function(t, s) {
                    return s.total - t.total
                }), this.yScale = (0, i.scaleLinear)().rangeRound([this.height, 0]).domain([0, (0, t.max)(this.data, t => t.total)]).nice();
                const s = "object" === this.dataFormat ? this.data.map(t => t[this.labels]) : this.data.columns;
                this.zScale = (0, i.scaleOrdinal)().range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]).domain(s)
            }
            addLabels() {
                "" !== this.xLabel && this.svg.append("text").attr("x", this.width / 2).attr("y", this.height + this.margin.bottom / 2).attr("dx", "1em").attr("class", "labelText").style("text-anchor", "middle").style("font-family", this.fontFamily).style("font-size", this.labelFontSize).text(this.xLabel), "" !== this.yLabel && this.svg.append("text").attr("transform", "rotate(-90)").attr("y", 0 - this.margin.left / 1.4).attr("x", 0 - this.height / 2).attr("dy", "1em").attr("class", "labelText").style("text-anchor", "middle").style("font-family", this.fontFamily).style("font-size", this.labelFontSize).text(this.yLabel)
            }
            addAxes() {
                const t = (0, s.axisBottom)(this.xScale).tickSize(0);
                this.svg.append("g").attr("transform", "translate(0," + this.height + ")").call(t).attr("class", `xAxis${this.graphClass}`).selectAll("text").attr("transform", "translate(-10,0)rotate(-45)").style("text-anchor", "end").style("font-family", this.fontFamily).style("font-size", void 0 === this.axisFontSize ? `${Math.min(.8,Math.min(this.width,this.height)/140)}rem` : this.axisFontSize).style("opacity", .9);
                const e = (0, s.axisLeft)(this.yScale).tickSize(0);
                this.svg.append("g").call(e).attr("class", `yAxis${this.graphClass}`).selectAll("text").style("font-family", this.fontFamily).style("font-size", void 0 === this.axisFontSize ? `${Math.min(.95,Math.min(this.width,this.height)/140)}rem` : this.axisFontSize).style("opacity", .9), (0, a.selectAll)("path.domain").attr("stroke", "transparent")
            }
            makeAxesRough(t, s) {
                const e = `xAxis${this.graphClass}`,
                    i = `yAxis${this.graphClass}`,
                    h = `rough-${e}`,
                    l = `rough-${i}`;
                (0, a.select)(`.${e}`).selectAll("path.domain").each(function(e, i) {
                    const l = (0, a.select)(this).node().getAttribute("d"),
                        o = s.path(l, {
                            fillStyle: "hachure"
                        });
                    o.setAttribute("class", h), t.appendChild(o)
                }), (0, a.selectAll)(`.${h}`).attr("transform", `translate(0, ${this.height})`), (0, a.select)(`.${i}`).selectAll("path.domain").each(function(e, i) {
                    const h = (0, a.select)(this).node().getAttribute("d"),
                        o = s.path(h, {
                            fillStyle: "hachure"
                        });
                    o.setAttribute("class", l), t.appendChild(o)
                })
            }
            setTitle(t) {
                this.svg.append("text").attr("x", this.width / 2).attr("y", 0 - this.margin.top / 2).attr("class", "title").attr("text-anchor", "middle").style("font-size", void 0 === this.titleFontSize ? `${Math.min(40,Math.min(this.width,this.height)/5)}px` : this.titleFontSize).style("font-family", this.fontFamily).style("opacity", .8).text(t)
            }
            addInteraction() {
                (0, a.selectAll)(this.interactionG).each(function(t, s) {
                    const e = this.attributes;
                    (0, a.select)(this).append("rect").attr("x", e.x.value).attr("y", e.y.value).attr("width", e.width.value).attr("height", e.height.value).attr("fill", "transparent")
                });
                const t = (0, a.select)(this.el).append("div").style("opacity", 0).attr("class", "tooltip").style("position", "absolute").style("background-color", "white").style("border", "solid").style("border-width", "1px").style("border-radius", "5px").style("padding", "3px").style("font-family", this.fontFamily).style("font-size", this.tooltipFontSize).style("pointer-events", "none"),
                    s = this;
                let e;
                (0, a.selectAll)(this.interactionG).on("mouseover", function() {
                    t.style("opacity", 1), e = (0, a.select)(this).selectAll("path").style("stroke"), (0, a.select)(this).select("path").style("stroke", s.highlight), (0, a.select)(this).selectAll("path:nth-child(2)").style("stroke-width", s.strokeWidth + 1.2)
                }), (0, a.selectAll)(this.interactionG).on("mouseout", function() {
                    t.style("opacity", 0), (0, a.select)(this).select("path").style("stroke", e), (0, a.select)(this).selectAll("path:nth-child(2)").style("stroke-width", s.strokeWidth)
                }), (0, a.selectAll)(this.interactionG).on("mousemove", function(e) {
                    const i = (0, a.select)(this).attr("attrX"),
                        h = (0, a.select)(this).attr("attrY"),
                        l = (0, a.select)(this).attr("keyY"),
                        o = (0, a.mouse)(this);
                    t.html(`<h4>${i}</h4> <b>${l}</b>: ${h}`).style("opacity", .95).attr("class", function(t) {}).style("transform", `translate(${o[0]+s.margin.left}px, \n          ${o[1]-(s.height+s.margin.top+s.margin.bottom)}px)`)
                })
            }
            initRoughObjects() {
                this.roughSvg = document.getElementById(this.roughId), this.rcAxis = h.default.svg(this.roughSvg, {
                    options: {
                        strokeWidth: this.axisStrokeWidth,
                        roughness: this.axisRoughness
                    }
                }), this.rc = h.default.svg(this.roughSvg, {
                    options: {
                        stroke: "none" === this.stroke ? void 0 : this.stroke,
                        strokeWidth: this.innerStrokeWidth,
                        roughness: this.roughness,
                        bowing: this.bowing,
                        fillStyle: this.fillStyle
                    }
                })
            }
            stacking() {
                this.data.forEach(t => {
                    const s = Object.keys(t);
                    let e = 0;
                    s.forEach((s, i) => {
                        if (i > 0 && "total" !== s) {
                            e += parseInt(t[s], 10);
                            const a = this.xScale(t[this.labels]),
                                h = this.yScale(e),
                                l = this.xScale.bandwidth(),
                                o = this.height - this.yScale(+t[s]),
                                r = this.rc.rectangle(a, h, l, o, {
                                    fill: this.stackColorMapping[s] || this.colors[i],
                                    stroke: this.stackColorMapping[s] || this.colors[i],
                                    simplification: this.simplification,
                                    fillWeight: this.fillWeight
                                }),
                                n = this.roughSvg.appendChild(r);
                            n.setAttribute("class", this.graphClass), n.setAttribute("attrX", t[this.labels]), n.setAttribute("keyY", s), n.setAttribute("attrY", +t[s]), n.setAttribute("x", a), n.setAttribute("y", h), n.setAttribute("width", l), n.setAttribute("height", o)
                        }
                    })
                })
            }
            drawFromObject() {
                this.initRoughObjects(), this.addScales(), this.addAxes(), this.makeAxesRough(this.roughSvg, this.rcAxis), this.addLabels(), this.stacking(), (0, a.selectAll)(this.interactionG).selectAll("path:nth-child(2)").style("stroke-width", this.strokeWidth), !0 === this.interactive && this.addInteraction()
            }
            drawFromFile() {
                this.initRoughObjects(), this.addScales(), this.addAxes(), this.makeAxesRough(this.roughSvg, this.rcAxis), this.addLabels(), this.stacking(), (0, a.selectAll)(this.interactionG).selectAll("path:nth-child(2)").style("stroke-width", this.strokeWidth), !0 === this.interactive && this.addInteraction()
            }
        }
        var g = c;
        exports.default = g;
    }, {
        "d3-array": "K0bd",
        "d3-axis": "mp0m",
        "d3-fetch": "grWT",
        "d3-scale": "zL2z",
        "d3-selection": "ysDv",
        "roughjs/bundled/rough.esm.js": "ze2Z",
        "lodash.get": "ZEnN",
        "./Chart": "Zxo0",
        "./utils/colors": "OZEo",
        "./utils/roughCeiling": "r4B0"
    }],
    "Focm": [function(require, module, exports) {
        "use strict";
        var e = l(require("./Bar")),
            r = l(require("./BarH")),
            u = l(require("./Donut")),
            t = l(require("./Line")),
            a = l(require("./Pie")),
            i = l(require("./Scatter")),
            d = l(require("./StackedBar"));

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        module.exports = {
            Bar: e.default,
            BarH: r.default,
            Donut: u.default,
            Line: t.default,
            Pie: a.default,
            Scatter: i.default,
            StackedBar: d.default
        };
    }, {
        "./Bar": "BINh",
        "./BarH": "fuO1",
        "./Donut": "OMfA",
        "./Line": "CmSo",
        "./Pie": "D7TA",
        "./Scatter": "AiRz",
        "./StackedBar": "LH4o"
    }]
}, {}, ["Focm"], null)