/**
 * Created by hzuellig on 09.09.17.
 */
/*
 * onScreen 0.0.0
 * Checks if matched elements are inside the viewport.
 * Built on Mon Mar 09 2015 12:00:07
 *
 * Copyright 2015 Silvestre Herrera <silvestre.herrera@gmail.com> and contributors, Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * You can find a list of contributors at:
 * https://github.com/silvestreh/onScreen/graphs/contributors
 */


!function(a) {
    a.fn.onScreen = function(b) {
        var c = {
            container: window,
            direction: "vertical",
            toggleClass: null,
            doIn: null,
            doOut: null,
            tolerance: 0,
            throttle: null,
            lazyAttr: null,
            lazyPlaceholder: "data:image/gif;base64,R0lGODlhEAAFAIAAAP///////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCQAAACwAAAAAEAAFAAACCIyPqcvtD00BACH5BAkJAAIALAAAAAAQAAUAgfT29Pz6/P///wAAAAIQTGCiywKPmjxUNhjtMlWrAgAh+QQJCQAFACwAAAAAEAAFAIK8urzc2tzEwsS8vrzc3tz///8AAAAAAAADFEiyUf6wCEBHvLPemIHdTzCMDegkACH5BAkJAAYALAAAAAAQAAUAgoSChLS2tIyKjLy+vIyOjMTCxP///wAAAAMUWCQ09jAaAiqQmFosdeXRUAkBCCUAIfkECQkACAAsAAAAABAABQCDvLq83N7c3Nrc9Pb0xMLE/P78vL68/Pr8////AAAAAAAAAAAAAAAAAAAAAAAAAAAABCEwkCnKGbegvQn4RjGMx8F1HxBi5Il4oEiap2DcVYlpZwQAIfkECQkACAAsAAAAABAABQCDvLq85OLkxMLE9Pb0vL685ObkxMbE/Pr8////AAAAAAAAAAAAAAAAAAAAAAAAAAAABCDwnCGHEcIMxPn4VAGMQNBx0zQEZHkiYNiap5RaBKG9EQAh+QQJCQAJACwAAAAAEAAFAIOEgoTMysyMjozs6uyUlpSMiozMzsyUkpTs7uz///8AAAAAAAAAAAAAAAAAAAAAAAAEGTBJiYgoBM09DfhAwHEeKI4dGKLTIHzCwEUAIfkECQkACAAsAAAAABAABQCDvLq85OLkxMLE9Pb0vL685ObkxMbE/Pr8////AAAAAAAAAAAAAAAAAAAAAAAAAAAABCAQSTmMEGaco8+UBSACwWBqHxKOJYd+q1iaXFoRRMbtEQAh+QQJCQAIACwAAAAAEAAFAIO8urzc3tzc2tz09vTEwsT8/vy8vrz8+vz///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAEIhBJWc6wJZAtJh3gcRBAaXiIZV2kiRbgNZbA6VXiUAhGL0QAIfkECQkABgAsAAAAABAABQCChIKEtLa0jIqMvL68jI6MxMLE////AAAAAxRoumxFgoxGCbiANos145e3DJcQJAAh+QQJCQAFACwAAAAAEAAFAIK8urzc2tzEwsS8vrzc3tz///8AAAAAAAADFFi6XCQwtCmAHbPVm9kGWKcEQxkkACH5BAkJAAIALAAAAAAQAAUAgfT29Pz6/P///wAAAAIRlI8SAZsPYnuJMUCRnNksWwAAOw==",
            debug: !1
        };
        return "remove" !== b && a.extend(c, b), "check" !== b && a.extend(c, b), this.each(function() {
            function d() {
                a(l).off("scroll.onScreen resize.onScreen"), a(window).off("resize.onScreen")
            }
            function e() {
                return z ? v < r - c.tolerance && m < v + t - c.tolerance : v < p - c.tolerance && v>-t + c.tolerance
            }
            function f() {
                return z ? v + (t - c.tolerance) < m || v > r - c.tolerance : v > p - c.tolerance||-t + c.tolerance > v
            }
            function g() {
                return z ? w < s - c.tolerance && n < w + u - c.tolerance : w < q - c.tolerance && w>-u + c.tolerance
            }
            function h() {
                return z ? w + (u - c.tolerance) < n || w > s - c.tolerance : w > q - c.tolerance||-u + c.tolerance > w
            }
            function i() {
                return x?!1 : "horizontal" === c.direction ? g() : e()
            }
            function j() {
                return x ? "horizontal" === c.direction ? h() : f() : !1
            }
            function k(a, b, c) {
                var d, e, f;
                return function() {
                    e = arguments, f=!0, c = c || this, d ||!function() {
                        f ? (a.apply(c, e), f=!1, d = setTimeout(arguments.callee, b)) : d = null
                    }()
                }
            }
            var l = this;
            if ("remove" === b)
                return void d();
            var m, n, o, p, q, r, s, t, u, v, w, x=!1, y = a(this), z = a.isWindow(c.container), A = function() {
                if (z || "static" !== a(c.container).css("position") || a(c.container).css("position", "relative"), o = a(c.container), p = o.height(), q = o.width(), r = o.scrollTop() + p, s = o.scrollLeft() + q, t = y.outerHeight(!0), u = y.outerWidth(!0), z) {
                    var d = y.offset();
                    v = d.top, w = d.left
                } else {
                    var e = y.position();
                    v = e.top, w = e.left
                }
                if (m = o.scrollTop(), n = o.scrollLeft(), c.debug, i()) {
                    if (c.toggleClass && y.addClass(c.toggleClass), a.isFunction(c.doIn) && c.doIn.call(y[0]), c.lazyAttr && "IMG" === y.prop("tagName")) {
                        var f = y.attr(c.lazyAttr);
                        f !== y.prop("src") && (y.css({
                            background: "url(" + c.lazyPlaceholder + ") 50% 50% no-repeat",
                            minHeight: "5px",
                            minWidth: "16px"
                        }), y.prop("src", f).load(function() {
                            a(this).css({
                                background: "none"
                            })
                        }))
                    }
                    x=!0
                } else
                    j() && (c.toggleClass && y.removeClass(c.toggleClass), a.isFunction(c.doOut) && c.doOut.call(y[0]), x=!1);
                return "check" === b ? x : void 0
            };
            window.location.hash ? k(A, 50) : A(), c.throttle && (A = k(A, c.throttle)), a(c.container).on("scroll.onScreen resize.onScreen", A), z || a(window).on("resize.onScreen", A), "object" == typeof module && module && "object" == typeof module.exports ? module.exports = jQuery : "function" == typeof define && define.amd && define("jquery-onscreen", [], function() {
                    return jQuery
                })
        })
    }
}(jQuery);




// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
