!(function () {
  if ("function" != typeof window.CustomEvent) {
    var e = function (e, t) {
      t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
      var i = document.createEvent("CustomEvent");
      return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
    };
    (e.prototype = window.Event.prototype), (window.CustomEvent = e);
  }
  function t() {
    return (t =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = arguments[t];
          for (var n in i)
            Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
        }
        return e;
      }).apply(this, arguments);
  }
  window.NodeList &&
    !NodeList.prototype.forEach &&
    (NodeList.prototype.forEach = function (e, t) {
      t = t || window;
      for (var i = 0; i < this.length; i++) e.call(t, this[i], i, this);
    });
  var i = (function () {
      function e() {
        (this.figcaptionId = 0), (this.userSettings = null);
      }
      var t = e.prototype;
      return (
        (t.init = function (e, t, i) {
          this.userSettings = i;
          var n = document.createElement("figure"),
            r = document.createElement("figcaption"),
            o = document.createElement("img"),
            a = e.querySelector("img"),
            s = document.createElement("div");
          (n.style.opacity = "0"),
            a && (o.alt = a.alt || ""),
            o.setAttribute("src", ""),
            o.setAttribute("data-src", e.href),
            e.hasAttribute("data-srcset") &&
              o.setAttribute("data-srcset", e.getAttribute("data-srcset")),
            n.appendChild(o),
            this.userSettings.captions &&
              ("function" == typeof this.userSettings.captionText
                ? (r.textContent = this.userSettings.captionText(e))
                : "self" === this.userSettings.captionsSelector &&
                  e.getAttribute(this.userSettings.captionAttribute)
                ? (r.textContent = e.getAttribute(
                    this.userSettings.captionAttribute
                  ))
                : "img" === this.userSettings.captionsSelector &&
                  a &&
                  a.getAttribute(this.userSettings.captionAttribute) &&
                  (r.textContent = a.getAttribute(
                    this.userSettings.captionAttribute
                  )),
              r.textContent &&
                ((r.id = "tobii-figcaption-" + this.figcaptionId),
                n.appendChild(r),
                o.setAttribute("aria-labelledby", r.id),
                ++this.figcaptionId)),
            t.appendChild(n),
            (s.className = "tobii__loader"),
            s.setAttribute("role", "progressbar"),
            s.setAttribute(
              "aria-label",
              this.userSettings.loadingIndicatorLabel
            ),
            t.appendChild(s),
            t.setAttribute("data-type", "image"),
            t.classList.add("tobii-image");
        }),
        (t.onPreload = function (e) {
          this.onLoad(e);
        }),
        (t.onLoad = function (e) {
          var t = e.querySelector("img");
          if (t.hasAttribute("data-src")) {
            var i = e.querySelector("figure"),
              n = e.querySelector(".tobii__loader");
            t.addEventListener("load", function () {
              e.removeChild(n), (i.style.opacity = "1");
            }),
              t.addEventListener("error", function () {
                e.removeChild(n), (i.style.opacity = "1");
              }),
              t.setAttribute("src", t.getAttribute("data-src")),
              t.removeAttribute("data-src"),
              t.hasAttribute("data-srcset") &&
                t.setAttribute("srcset", t.getAttribute("data-srcset"));
          }
        }),
        (t.onLeave = function (e) {}),
        (t.onCleanup = function (e) {}),
        (t.onReset = function () {
          this.figcaptionId = 0;
        }),
        e
      );
    })(),
    n = (function () {
      function e() {
        this.userSettings = null;
      }
      var t = e.prototype;
      return (
        (t.init = function (e, t, i) {
          this.userSettings = i;
          var n = e.hasAttribute("data-target")
            ? e.getAttribute("data-target")
            : e.getAttribute("href");
          t.setAttribute("data-HREF", n),
            e.getAttribute("data-allow") &&
              t.setAttribute("data-allow", e.getAttribute("data-allow")),
            e.hasAttribute("data-width") &&
              t.setAttribute("data-width", "" + e.getAttribute("data-width")),
            e.hasAttribute("data-height") &&
              t.setAttribute("data-height", "" + e.getAttribute("data-height")),
            t.setAttribute("data-type", "iframe"),
            t.classList.add("tobii-iframe");
        }),
        (t.onPreload = function (e) {}),
        (t.onLoad = function (e) {
          var t = e.querySelector("iframe"),
            i = document.createElement("div");
          if (
            ((i.className = "tobii__loader"),
            i.setAttribute("role", "progressbar"),
            i.setAttribute(
              "aria-label",
              this.userSettings.loadingIndicatorLabel
            ),
            e.appendChild(i),
            null == t)
          ) {
            t = document.createElement("iframe");
            var n = e.getAttribute("data-href");
            t.setAttribute("frameborder", "0"),
              t.setAttribute("src", n),
              t.setAttribute("allowfullscreen", ""),
              n.indexOf("youtube.com") > -1
                ? t.setAttribute(
                    "allow",
                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  )
                : n.indexOf("vimeo.com") > -1
                ? t.setAttribute("allow", "autoplay; picture-in-picture")
                : e.hasAttribute("data-allow") &&
                  t.setAttribute("allow", e.getAttribute("data-allow")),
              e.getAttribute("data-width") &&
                (t.style.maxWidth = "" + e.getAttribute("data-width")),
              e.getAttribute("data-height") &&
                (t.style.maxHeight = "" + e.getAttribute("data-height")),
              (t.style.opacity = "0"),
              e.appendChild(t),
              t.addEventListener("load", function () {
                t.style.opacity = "1";
                var i = e.querySelector(".tobii__loader");
                i && e.removeChild(i);
              }),
              t.addEventListener("error", function () {
                t.style.opacity = "1";
                var i = e.querySelector(".tobii__loader");
                i && e.removeChild(i);
              });
          } else t.setAttribute("src", e.getAttribute("data-href"));
        }),
        (t.onLeave = function (e) {}),
        (t.onCleanup = function (e) {
          var t = e.querySelector("iframe");
          t.setAttribute("src", ""), (t.style.opacity = "0");
        }),
        (t.onReset = function () {}),
        e
      );
    })(),
    r = (function () {
      function e() {
        this.userSettings = null;
      }
      var t = e.prototype;
      return (
        (t.init = function (e, t, i) {
          this.userSettings = i;
          var n = e.hasAttribute("data-target")
              ? e.getAttribute("data-target")
              : e.getAttribute("href"),
            r = document.querySelector(n).cloneNode(!0);
          if (!r) throw new Error("Ups, I can't find the target " + n + ".");
          t.appendChild(r),
            t.setAttribute("data-type", "html"),
            t.classList.add("tobii-html");
        }),
        (t.onPreload = function (e) {}),
        (t.onLoad = function (e) {
          var t = e.querySelector("video");
          t &&
            (t.hasAttribute("data-time") &&
              t.readyState > 0 &&
              (t.currentTime = t.getAttribute("data-time")),
            this.userSettings.autoplayVideo && t.play());
        }),
        (t.onLeave = function (e) {
          var t = e.querySelector("video");
          t &&
            (t.paused || t.pause(),
            t.readyState > 0 && t.setAttribute("data-time", t.currentTime));
        }),
        (t.onCleanup = function (e) {
          var t = e.querySelector("video");
          if (
            t &&
            t.readyState > 0 &&
            t.readyState < 3 &&
            t.duration !== t.currentTime
          ) {
            var i = t.cloneNode(!0);
            this._removeSources(t),
              t.load(),
              t.parentNode.removeChild(t),
              e.appendChild(i);
          }
        }),
        (t.onReset = function () {}),
        (t._removeSources = function (e) {
          var t = e.querySelectorAll("src");
          t &&
            t.forEach(function (e) {
              e.setAttribute("src", "");
            });
        }),
        e
      );
    })(),
    o = (function () {
      function e() {
        (this.playerId = 0), (this.PLAYER = []), (this.userSettings = null);
      }
      var t = e.prototype;
      return (
        (t.init = function (e, t, i) {
          this.userSettings = i;
          var n = document.createElement("div");
          t.appendChild(n),
            (this.PLAYER[this.playerId] = new window.YT.Player(n, {
              host: "https://www.youtube-nocookie.com",
              height: e.getAttribute("data-height") || "360",
              width: e.getAttribute("data-width") || "640",
              videoId: e.getAttribute("data-id"),
              playerVars: {
                controls: e.getAttribute("data-controls") || 1,
                rel: 0,
                playsinline: 1,
              },
            })),
            t.setAttribute("data-player", this.playerId),
            t.setAttribute("data-type", "youtube"),
            t.classList.add("tobii-youtube"),
            this.playerId++;
        }),
        (t.onPreload = function (e) {}),
        (t.onLoad = function (e) {
          this.userSettings.autoplayVideo &&
            this.PLAYER[e.getAttribute("data-player")].playVideo();
        }),
        (t.onLeave = function (e) {
          1 === this.PLAYER[e.getAttribute("data-player")].getPlayerState() &&
            this.PLAYER[e.getAttribute("data-player")].pauseVideo();
        }),
        (t.onCleanup = function (e) {
          1 === this.PLAYER[e.getAttribute("data-player")].getPlayerState() &&
            this.PLAYER[e.getAttribute("data-player")].pauseVideo();
        }),
        (t.onReset = function () {}),
        e
      );
    })();
  function a(e) {
    var s = {
        image: new i(),
        html: new r(),
        iframe: new n(),
        youtube: new o(),
      },
      d = [
        'a[href]:not([tabindex^="-"]):not([inert])',
        'area[href]:not([tabindex^="-"]):not([inert])',
        "input:not([disabled]):not([inert])",
        "select:not([disabled]):not([inert])",
        "textarea:not([disabled]):not([inert])",
        "button:not([disabled]):not([inert])",
        'iframe:not([tabindex^="-"]):not([inert])',
        'audio:not([tabindex^="-"]):not([inert])',
        'video:not([tabindex^="-"]):not([inert])',
        '[contenteditable]:not([tabindex^="-"]):not([inert])',
        '[tabindex]:not([tabindex^="-"]):not([inert])',
      ],
      l = {},
      u = [],
      c = {
        gallery: [],
        slider: null,
        sliderElements: [],
        elementsLength: 0,
        currentIndex: 0,
        x: 0,
      },
      p = null,
      b = null,
      h = null,
      f = null,
      m = null,
      g = {},
      v = !1,
      y = !1,
      w = !1,
      A = null,
      E = null,
      L = null,
      x = !1,
      _ = !1,
      I = {},
      S = null,
      C = null,
      T = function (e) {
        if (null === document.querySelector('[data-type="youtube"]') || _) N(e);
        else {
          if (null === document.getElementById("iframe_api")) {
            var t = document.createElement("script"),
              i = document.getElementsByTagName("script")[0];
            (t.id = "iframe_api"),
              (t.src = "https://www.youtube.com/iframe_api"),
              i.parentNode.insertBefore(t, i);
          }
          -1 === u.indexOf(e) && u.push(e),
            (window.onYouTubePlayerAPIReady = function () {
              u.forEach(function (e) {
                N(e);
              }),
                (_ = !0);
            });
        }
      },
      P = function (e) {
        return e.hasAttribute("data-group")
          ? e.getAttribute("data-group")
          : "default";
      },
      N = function (e) {
        if (
          ((S = P(e)),
          Object.prototype.hasOwnProperty.call(I, S) ||
            ((I[S] = JSON.parse(JSON.stringify(c))), Y()),
          -1 !== I[S].gallery.indexOf(e))
        )
          throw new Error("Ups, element already added.");
        if (
          (I[S].gallery.push(e),
          I[S].elementsLength++,
          (l.zoom &&
            e.querySelector("img") &&
            "false" !== e.getAttribute("data-zoom")) ||
            "true" === e.getAttribute("data-zoom"))
        ) {
          var t = document.createElement("div");
          (t.className = "tobii-zoom__icon"),
            (t.innerHTML = l.zoomText),
            e.classList.add("tobii-zoom"),
            e.appendChild(t);
        }
        e.addEventListener("click", J),
          O(e),
          ce() && S === C && (de(), le(null));
      },
      q = function (e) {
        var t = P(e);
        if (-1 === I[t].gallery.indexOf(e))
          throw new Error(
            "Ups, I can't find a slide for the element " + e + "."
          );
        var i = I[t].gallery.indexOf(e),
          n = I[t].sliderElements[i];
        if (ce() && t === C && i === I[t].currentIndex) {
          if (1 === I[t].elementsLength)
            throw (
              (X(),
              new Error("Ups, I've closed. There are no slides more to show."))
            );
          0 === I[t].currentIndex ? H() : M();
        }
        if (
          (I[t].elementsLength--,
          l.zoom && e.querySelector(".tobii-zoom__icon"))
        ) {
          var r = e.querySelector(".tobii-zoom__icon");
          r.parentNode.classList.remove("tobii-zoom"),
            r.parentNode.removeChild(r);
        }
        e.removeEventListener("click", J), n.parentNode.removeChild(n);
      },
      Y = function () {
        (I[S].slider = document.createElement("div")),
          (I[S].slider.className = "tobii__slider"),
          I[S].slider.setAttribute("aria-hidden", "true"),
          p.appendChild(I[S].slider);
      },
      O = function (e) {
        var t = k(e),
          i = document.createElement("div"),
          n = document.createElement("div");
        (i.className = "tobii__slide"),
          (i.style.position = "absolute"),
          (i.style.left = 100 * I[S].x + "%"),
          i.setAttribute("aria-hidden", "true"),
          t.init(e, n, l),
          i.appendChild(n),
          I[S].slider.appendChild(i),
          I[S].sliderElements.push(i),
          ++I[S].x;
      },
      k = function (e) {
        var t = e.getAttribute("data-type");
        return void 0 !== s[t]
          ? s[t]
          : (e.hasAttribute("data-type") &&
              console.log("Unknown lightbox element type: " + t),
            s.image);
      },
      U = function (e) {
        if (((C = null !== C ? C : S), ce()))
          throw new Error("Ups, I'm aleady open.");
        if (!ce() && (e || (e = 0), -1 === e || e >= I[C].elementsLength))
          throw new Error("Ups, I can't find slide " + e + ".");
        document.documentElement.classList.add("tobii-is-open"),
          document.body.classList.add("tobii-is-open"),
          document.body.classList.add("tobii-is-open-" + C),
          de(),
          l.close || ((f.disabled = !1), f.setAttribute("aria-hidden", "true")),
          (A = document.activeElement);
        var t = window.location.href;
        window.history.pushState({ tobii: "close" }, "Image", t),
          (I[C].currentIndex = e),
          W(),
          ae(),
          R(I[C].currentIndex),
          I[C].slider.setAttribute("aria-hidden", "false"),
          p.setAttribute("aria-hidden", "false"),
          le(null),
          z(I[C].currentIndex + 1),
          z(I[C].currentIndex - 1),
          I[C].slider.classList.add("tobii__slider--animate");
        var i = new window.CustomEvent("open", { detail: { group: C } });
        p.dispatchEvent(i);
      },
      X = function () {
        if (!ce()) throw new Error("Ups, I'm already closed.");
        document.documentElement.classList.remove("tobii-is-open"),
          document.body.classList.remove("tobii-is-open"),
          document.body.classList.remove("tobii-is-open-" + C),
          se(),
          null !== window.history.state &&
            "close" === window.history.state.tobii &&
            window.history.back(),
          A.focus(),
          B(I[C].currentIndex),
          V(I[C].currentIndex),
          p.setAttribute("aria-hidden", "true"),
          I[C].slider.setAttribute("aria-hidden", "true"),
          (I[C].currentIndex = 0),
          I[C].slider.classList.remove("tobii__slider--animate");
        var e = new window.CustomEvent("close", { detail: { group: C } });
        p.dispatchEvent(e);
      },
      z = function (e) {
        if (void 0 !== I[C].sliderElements[e]) {
          var t = I[C].sliderElements[e].querySelector("[data-type]");
          k(t).onPreload(t);
        }
      },
      R = function (e) {
        if (void 0 !== I[C].sliderElements[e]) {
          var t = I[C].sliderElements[e].querySelector("[data-type]"),
            i = k(t);
          I[C].sliderElements[e].classList.add("tobii__slide--is-active"),
            I[C].sliderElements[e].setAttribute("aria-hidden", "false"),
            i.onLoad(t);
        }
      },
      M = function () {
        if (!ce()) throw new Error("Ups, I'm closed.");
        I[C].currentIndex > 0 &&
          (B(I[C].currentIndex),
          R(--I[C].currentIndex),
          le("left"),
          V(I[C].currentIndex + 1),
          z(I[C].currentIndex - 1));
        var e = new window.CustomEvent("previous", { detail: { group: C } });
        p.dispatchEvent(e);
      },
      H = function () {
        if (!ce()) throw new Error("Ups, I'm closed.");
        I[C].currentIndex < I[C].elementsLength - 1 &&
          (B(I[C].currentIndex),
          R(++I[C].currentIndex),
          le("right"),
          V(I[C].currentIndex - 1),
          z(I[C].currentIndex + 1));
        var e = new window.CustomEvent("next", { detail: { group: C } });
        p.dispatchEvent(e);
      },
      D = function (e) {
        if (ce()) throw new Error("Ups, I'm open.");
        if (!e) throw new Error("Ups, no group specified.");
        if (e && !Object.prototype.hasOwnProperty.call(I, e))
          throw new Error("Ups, I don't have a group called \"" + e + '".');
        C = e;
      },
      B = function (e) {
        if (void 0 !== I[C].sliderElements[e]) {
          var t = I[C].sliderElements[e].querySelector("[data-type]"),
            i = k(t);
          I[C].sliderElements[e].classList.remove("tobii__slide--is-active"),
            I[C].sliderElements[e].setAttribute("aria-hidden", "true"),
            i.onLeave(t);
        }
      },
      V = function (e) {
        if (void 0 !== I[C].sliderElements[e]) {
          var t = I[C].sliderElements[e].querySelector("[data-type]");
          k(t).onCleanup(t);
        }
      },
      j = function () {
        (I[(C = null !== C ? C : S)].slider.style.transform =
          "translate3d(" +
          (E = -I[C].currentIndex * p.offsetWidth) +
          "px, 0, 0)"),
          (L = E);
      },
      W = function () {
        g = { startX: 0, endX: 0, startY: 0, endY: 0 };
      },
      F = function () {
        var e = g.endX - g.startX,
          t = g.endY - g.startY,
          i = Math.abs(e),
          n = Math.abs(t);
        e > 0 && i > l.threshold && I[C].currentIndex > 0
          ? M()
          : e < 0 &&
            i > l.threshold &&
            I[C].currentIndex !== I[C].elementsLength - 1
          ? H()
          : t < 0 && n > l.threshold && l.swipeClose
          ? X()
          : j();
      },
      G = function () {
        x ||
          ((x = !0),
          window.requestAnimationFrame(function () {
            j(), (x = !1);
          }));
      },
      J = function (e) {
        e.preventDefault(),
          (C = P(e.currentTarget)),
          U(I[C].gallery.indexOf(e.currentTarget));
      },
      K = function (e) {
        e.target === b
          ? M()
          : e.target === h
          ? H()
          : (e.target === f ||
              (!1 === v &&
                !1 === y &&
                e.target.classList.contains("tobii__slide") &&
                l.docClose)) &&
            X(),
          e.stopPropagation();
      },
      Q = function (e) {
        var t = Array.prototype.slice
            .call(
              p.querySelectorAll(
                ".tobii__btn:not([disabled]), .tobii__slide--is-active " +
                  d.join(", .tobii__slide--is-active ")
              )
            )
            .filter(function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
          i = t.indexOf(document.activeElement);
        9 === e.keyCode || "Tab" === e.code
          ? e.shiftKey && 0 === i
            ? (t[t.length - 1].focus(), e.preventDefault())
            : e.shiftKey ||
              i !== t.length - 1 ||
              (t[0].focus(), e.preventDefault())
          : 27 === e.keyCode || "Escape" === e.code
          ? (e.preventDefault(), X())
          : 37 === e.keyCode || "ArrowLeft" === e.code
          ? (e.preventDefault(), M())
          : (39 !== e.keyCode && "ArrowRight" !== e.code) ||
            (e.preventDefault(), H());
      },
      Z = function (e) {
        be(e.target) ||
          (e.stopPropagation(),
          (v = !1),
          (y = !1),
          (w = !0),
          (g.startX = e.touches[0].pageX),
          (g.startY = e.touches[0].pageY),
          pe() && I[C].slider.classList.add("tobii__slider--is-dragging"));
      },
      $ = function (e) {
        e.stopPropagation(),
          w &&
            ((g.endX = e.touches[0].pageX),
            (g.endY = e.touches[0].pageY),
            oe());
      },
      ee = function (e) {
        e.stopPropagation(),
          (w = !1),
          I[C].slider.classList.remove("tobii__slider--is-dragging"),
          g.endX && F(),
          W();
      },
      te = function (e) {
        be(e.target) ||
          (e.preventDefault(),
          e.stopPropagation(),
          (v = !1),
          (y = !1),
          (w = !0),
          (g.startX = e.pageX),
          (g.startY = e.pageY),
          pe() && I[C].slider.classList.add("tobii__slider--is-dragging"));
      },
      ie = function (e) {
        e.preventDefault(), w && ((g.endX = e.pageX), (g.endY = e.pageY), oe());
      },
      ne = function (e) {
        e.stopPropagation(),
          (w = !1),
          I[C].slider.classList.remove("tobii__slider--is-dragging"),
          g.endX && F(),
          W();
      },
      re = function () {
        w = !1;
      },
      oe = function () {
        Math.abs(g.startX - g.endX) > 0 && !y && I[C].elementsLength > 1
          ? ((I[C].slider.style.transform =
              "translate3d(" +
              (L - Math.round(g.startX - g.endX)) +
              "px, 0, 0)"),
            (v = !0),
            (y = !1))
          : Math.abs(g.startY - g.endY) > 0 &&
            !v &&
            l.swipeClose &&
            ((I[C].slider.style.transform =
              "translate3d(" +
              L +
              "px, -" +
              Math.round(g.startY - g.endY) +
              "px, 0)"),
            (v = !1),
            (y = !0));
      },
      ae = function () {
        l.keyboard && window.addEventListener("keydown", Q),
          window.addEventListener("resize", G),
          window.addEventListener("popstate", X),
          p.addEventListener("click", K),
          l.draggable &&
            pe() &&
            (p.addEventListener("touchstart", Z),
            p.addEventListener("touchmove", $),
            p.addEventListener("touchend", ee),
            p.addEventListener("mousedown", te),
            p.addEventListener("mouseup", ne),
            p.addEventListener("mousemove", ie),
            p.addEventListener("contextmenu", re));
      },
      se = function () {
        l.keyboard && window.removeEventListener("keydown", Q),
          window.removeEventListener("resize", G),
          window.removeEventListener("popstate", X),
          p.removeEventListener("click", K),
          l.draggable &&
            pe() &&
            (p.removeEventListener("touchstart", Z),
            p.removeEventListener("touchmove", $),
            p.removeEventListener("touchend", ee),
            p.removeEventListener("mousedown", te),
            p.removeEventListener("mouseup", ne),
            p.removeEventListener("mousemove", ie),
            p.removeEventListener("contextmenu", re));
      },
      de = function () {
        ((l.draggable &&
          l.swipeClose &&
          pe() &&
          !I[C].slider.classList.contains("tobii__slider--is-draggable")) ||
          (l.draggable &&
            I[C].elementsLength > 1 &&
            !I[C].slider.classList.contains("tobii__slider--is-draggable"))) &&
          I[C].slider.classList.add("tobii__slider--is-draggable"),
          !l.nav || 1 === I[C].elementsLength || ("auto" === l.nav && pe())
            ? (b.setAttribute("aria-hidden", "true"),
              (b.disabled = !0),
              h.setAttribute("aria-hidden", "true"),
              (h.disabled = !0))
            : (b.setAttribute("aria-hidden", "false"),
              (b.disabled = !1),
              h.setAttribute("aria-hidden", "false"),
              (h.disabled = !1)),
          m.setAttribute(
            "aria-hidden",
            l.counter && 1 !== I[C].elementsLength ? "false" : "true"
          );
      },
      le = function (e) {
        j(),
          (m.textContent = I[C].currentIndex + 1 + "/" + I[C].elementsLength),
          (function (e) {
            (!0 === l.nav || "auto" === l.nav) &&
            !pe() &&
            I[C].elementsLength > 1
              ? (b.setAttribute("aria-hidden", "true"),
                (b.disabled = !0),
                h.setAttribute("aria-hidden", "true"),
                (h.disabled = !0),
                1 === I[C].elementsLength
                  ? l.close && f.focus()
                  : 0 === I[C].currentIndex
                  ? (h.setAttribute("aria-hidden", "false"),
                    (h.disabled = !1),
                    h.focus())
                  : I[C].currentIndex === I[C].elementsLength - 1
                  ? (b.setAttribute("aria-hidden", "false"),
                    (b.disabled = !1),
                    b.focus())
                  : (b.setAttribute("aria-hidden", "false"),
                    (b.disabled = !1),
                    h.setAttribute("aria-hidden", "false"),
                    (h.disabled = !1),
                    "left" === e ? b.focus() : h.focus()))
              : l.close && f.focus();
          })(e);
      },
      ue = function () {
        ce() && X();
        var e = Object.entries(I);
        for (var t in (e.forEach(function (e) {
          e[1].gallery.forEach(function (e) {
            q(e);
          });
        }),
        (I = {}),
        (S = C = null),
        s))
          s[t].onReset();
      },
      ce = function () {
        return "false" === p.getAttribute("aria-hidden");
      },
      pe = function () {
        return "ontouchstart" in window;
      },
      be = function (e) {
        return (
          -1 !==
            ["TEXTAREA", "OPTION", "INPUT", "SELECT"].indexOf(e.nodeName) ||
          e === b ||
          e === h ||
          e === f
        );
      };
    return (
      (function (e) {
        if (document.querySelector("div.tobii"))
          console.log("Multiple lightbox instances not supported.");
        else {
          (l = (function (e) {
            return t(
              {},
              {
                selector: ".lightbox",
                captions: !0,
                captionsSelector: "img",
                captionAttribute: "alt",
                captionText: null,
                nav: "auto",
                navText: [
                  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z"/><polyline points="15 6 9 12 15 18" /></svg>',
                  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z"/><polyline points="9 6 15 12 9 18" /></svg>',
                ],
                navLabel: ["Previous image", "Next image"],
                close: !0,
                closeText:
                  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z"/><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>',
                closeLabel: "Close lightbox",
                loadingIndicatorLabel: "Image loading",
                counter: !0,
                download: !1,
                downloadText: "",
                downloadLabel: "Download image",
                keyboard: !0,
                zoom: !0,
                zoomText:
                  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z"/><polyline points="16 4 20 4 20 8" /><line x1="14" y1="10" x2="20" y2="4" /><polyline points="8 20 4 20 4 16" /><line x1="4" y1="20" x2="10" y2="14" /><polyline points="16 20 20 20 20 16" /><line x1="14" y1="14" x2="20" y2="20" /><polyline points="8 4 4 4 4 8" /><line x1="4" y1="4" x2="10" y2="10" /></svg>',
                docClose: !0,
                swipeClose: !0,
                hideScrollbar: !0,
                draggable: !0,
                threshold: 100,
                rtl: !1,
                loop: !1,
                autoplayVideo: !1,
                modal: !1,
                theme: "tobii--theme-default",
              },
              e
            );
          })(e)),
            p ||
              ((p = document.createElement("div")).setAttribute(
                "role",
                "dialog"
              ),
              p.setAttribute("aria-hidden", "true"),
              p.classList.add("tobii"),
              p.classList.add(l.theme),
              ((b = document.createElement("button")).className =
                "tobii__btn tobii__btn--previous"),
              b.setAttribute("type", "button"),
              b.setAttribute("aria-label", l.navLabel[0]),
              (b.innerHTML = l.navText[0]),
              p.appendChild(b),
              ((h = document.createElement("button")).className =
                "tobii__btn tobii__btn--next"),
              h.setAttribute("type", "button"),
              h.setAttribute("aria-label", l.navLabel[1]),
              (h.innerHTML = l.navText[1]),
              p.appendChild(h),
              ((f = document.createElement("button")).className =
                "tobii__btn tobii__btn--close"),
              f.setAttribute("type", "button"),
              f.setAttribute("aria-label", l.closeLabel),
              (f.innerHTML = l.closeText),
              p.appendChild(f),
              ((m = document.createElement("div")).className =
                "tobii__counter"),
              p.appendChild(m),
              document.body.appendChild(p));
          var i = document.querySelectorAll(l.selector);
          if (!i)
            throw new Error(
              "Ups, I can't find the selector " +
                l.selector +
                " on this website."
            );
          var n = [];
          i.forEach(function (e) {
            var t = e.hasAttribute("data-group")
                ? e.getAttribute("data-group")
                : "default",
              i = e.href;
            e.hasAttribute("data-target") &&
              (i = e.getAttribute("data-target")),
              void 0 !== n[(i += "__" + t)]
                ? e.addEventListener("click", function (e) {
                    D(t), U(), e.preventDefault();
                  })
                : ((n[i] = 1), T(e));
          });
        }
      })(e),
      (a.open = U),
      (a.previous = M),
      (a.next = H),
      (a.close = X),
      (a.add = T),
      (a.remove = q),
      (a.reset = ue),
      (a.destroy = function () {
        ue(), p.parentNode.removeChild(p);
      }),
      (a.isOpen = ce),
      (a.slidesIndex = function () {
        return I[C].currentIndex;
      }),
      (a.select = function (e) {
        var t = I[C].currentIndex;
        if (!ce()) throw new Error("Ups, I'm closed.");
        if (ce()) {
          if (!e && 0 !== e) throw new Error("Ups, no slide specified.");
          if (e === I[C].currentIndex)
            throw new Error("Ups, slide " + e + " is already selected.");
          if (-1 === e || e >= I[C].elementsLength)
            throw new Error("Ups, I can't find slide " + e + ".");
        }
        (I[C].currentIndex = e),
          B(t),
          R(e),
          e < t && (le("left"), V(t), z(e - 1)),
          e > t && (le("right"), V(t), z(e + 1));
      }),
      (a.slidesCount = function () {
        return I[C].elementsLength;
      }),
      (a.selectGroup = D),
      (a.currentGroup = function () {
        return null !== C ? C : S;
      }),
      (a.on = function (e, t) {
        p.addEventListener(e, t);
      }),
      (a.off = function (e, t) {
        p.removeEventListener(e, t);
      }),
      a
    );
  }
  typeof module < "u" ? (module.exports = a) : (self.Tobii = a);
})();
