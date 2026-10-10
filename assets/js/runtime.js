/* PAWCARE static runtime — renders each page's template with its component state.
   Small self-contained replacement for the design tool's runtime. No dependencies. */
(function () {
  'use strict';

  function DCLogic(props) { this.props = props || {}; }
  DCLogic.prototype.setState = function (s) {
    if (!this.state) this.state = {};
    Object.assign(this.state, s);
    if (this.__render) this.__render();
  };
  window.DCLogic = DCLogic;

  function ev(e, scope) {
    e = e.trim();
    if (e === 'false') return false;
    if (e === 'true') return true;
    return e.split('.').reduce(function (o, k) { return o == null ? o : o[k]; }, scope);
  }
  function interp(s, scope) {
    var w = s.match(/^\{\{([^}]*)\}\}$/);
    if (w) return ev(w[1], scope);
    return s.replace(/\{\{([^}]*)\}\}/g, function (m, e) {
      var v = ev(e, scope);
      return v == null ? '' : v;
    });
  }

  function addHandler(el, type) {
    el.__l = el.__l || {};
    if (el.__l[type]) return;
    el.__l[type] = true;
    el.addEventListener(type, function (e) {
      var f = el.__h && el.__h[type];
      if (typeof f === 'function') f(e);
    });
  }

  function build(node, scope, parent) {
    if (node.nodeType === 3) {
      parent.appendChild(document.createTextNode(interp(node.nodeValue, scope)));
      return;
    }
    if (node.nodeType !== 1) return;
    var tag = node.localName;
    if (tag === 'helmet') return;
    var c, i;
    if (tag === 'sc-if') {
      if (interp(node.getAttribute('value'), scope)) {
        for (c = node.firstChild; c; c = c.nextSibling) build(c, scope, parent);
      }
      return;
    }
    if (tag === 'sc-for') {
      var list = interp(node.getAttribute('list'), scope) || [];
      var as = node.getAttribute('as');
      list.forEach(function (it) {
        var s = Object.create(scope);
        s[as] = it;
        for (var ch = node.firstChild; ch; ch = ch.nextSibling) build(ch, s, parent);
      });
      return;
    }
    var el = document.createElementNS(node.namespaceURI, node.localName);
    el.__h = {};
    for (i = 0; i < node.attributes.length; i++) {
      var a = node.attributes[i], n = a.name;
      if (n.indexOf('on') === 0) {
        var fn = interp(a.value, scope);
        if (typeof fn === 'function') { el.__h[n.slice(2)] = fn; addHandler(el, n.slice(2)); }
        continue;
      }
      var v = interp(a.value, scope);
      if (v === false || v == null) {
        if (n.indexOf('aria-') === 0) el.setAttribute(n, 'false');
        continue;
      }
      el.setAttribute(n, String(v));
    }
    for (c = node.firstChild; c; c = c.nextSibling) build(c, scope, el);
    parent.appendChild(el);
  }

  /* Patch the live DOM to match a freshly built tree, keeping existing elements
     (so form values, focus and scroll position survive re-renders). */
  function morph(live, fresh) {
    var lc = live.firstChild, fc = fresh.firstChild, nextF;
    while (fc) {
      nextF = fc.nextSibling;
      if (!lc) {
        live.appendChild(fc);
      } else if (lc.nodeType === 3 && fc.nodeType === 3) {
        if (lc.nodeValue !== fc.nodeValue) lc.nodeValue = fc.nodeValue;
        lc = lc.nextSibling;
      } else if (lc.nodeType === 1 && fc.nodeType === 1 &&
                 lc.localName === fc.localName && lc.namespaceURI === fc.namespaceURI) {
        syncAttrs(lc, fc);
        morph(lc, fc);
        lc = lc.nextSibling;
      } else {
        live.replaceChild(fc, lc);
        lc = fc.nextSibling;
      }
      fc = nextF;
    }
    while (lc) { var nx = lc.nextSibling; live.removeChild(lc); lc = nx; }
  }
  function syncAttrs(live, fresh) {
    var i, a;
    for (i = live.attributes.length - 1; i >= 0; i--) {
      a = live.attributes[i];
      if (!fresh.hasAttribute(a.name)) live.removeAttribute(a.name);
    }
    for (i = 0; i < fresh.attributes.length; i++) {
      a = fresh.attributes[i];
      if (live.getAttribute(a.name) !== a.value) live.setAttribute(a.name, a.value);
    }
    live.__h = fresh.__h || {};
    for (var t in live.__h) addHandler(live, t);
  }

  window.DC = {
    mount: function (Comp) {
      var tpl = document.getElementById('dc-template');
      var app = document.getElementById('app');
      var inst = new Comp({});
      inst.__render = function () {
        var vals = inst.renderVals();
        var frag = document.createDocumentFragment();
        for (var c = tpl.content.firstChild; c; c = c.nextSibling) build(c, vals, frag);
        morph(app, frag);
      };
      inst.__render();
      if (inst.componentDidMount) inst.componentDidMount();
      window.__pawcare = inst;
    }
  };
})();
