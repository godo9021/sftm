/* js12: умные неправильные варианты в "Названия" + вкладка "Карточки" (как Quizlet) */
(function () {
  "KOH|гидроксид калия;NaOH|гидроксид натрия;LiOH|гидроксид лития;Ca(OH)2|гидроксид кальция;Ba(OH)2|гидроксид бария;Al(OH)3|гидроксид алюминия;Fe(OH)3|гидроксид железа(III);Fe(OH)2|гидроксид железа(II);Cu(OH)2|гидроксид меди(II);Zn(OH)2|гидроксид цинка;Na2O|оксид натрия;K2O|оксид калия;KO2|надпероксид калия;CaO|оксид кальция;BaO2|пероксид бария;Li2O|оксид лития;Na2CO3|карбонат натрия;NaHCO3|гидрокарбонат натрия;K2CO3|карбонат калия;Na2SO4|сульфат натрия;K2SO4|сульфат калия;Na2S|сульфид натрия;K2S|сульфид калия;NaNO3|нитрат натрия;KNO3|нитрат калия;NaNO2|нитрит натрия;KNO2|нитрит калия;Na3PO4|фосфат натрия;Na2HPO4|гидрофосфат натрия;NaH2PO4|дигидрофосфат натрия;H3PO4|ортофосфорная кислота;H3PO2|фосфорноватистая кислота;H2SO3|сернистая кислота;H2SO4|серная кислота;HNO2|азотистая кислота;HNO3|азотная кислота;HClO|хлорноватистая кислота;HClO2|хлористая кислота;HClO3|хлорноватая кислота;HClO4|хлорная кислота;NaClO|гипохлорит натрия;NaClO2|хлорит натрия;NaClO3|хлорат натрия;NaH2PO2|гипофосфит натрия;Na2SiO3|силикат натрия;CuSO4|сульфат меди(II);FeSO4|сульфат железа(II);Fe2(SO4)3|сульфат железа(III);FeCl2|хлорид железа(II);FeCl3|хлорид железа(III);K2MnO4|манганат калия;K3[Fe(CN)6]|гексацианоферрат(III) калия;K4[Fe(CN)6]|гексацианоферрат(II) калия;Na2[Zn(OH)4]|тетрагидроксоцинкат натрия;NH4Cl|хлорид аммония;NH4NO3|нитрат аммония;(NH4)2SO4|сульфат аммония;H2O2|пероксид водорода".split(";").forEach(function (p) { var q = p.split("|"); if (!FM.some(function (x) { return x[0] === q[0]; })) FM.push(q); });
  function els(f) { var m = f.match(/[A-Z][a-z]?/g) || [], o = []; m.forEach(function (x) { if (o.indexOf(x) < 0) o.push(x); }); return o; }
  function toks(n) { return n.toLowerCase().replace(/[()]/g, "").split(/\s+/).filter(Boolean); }
  function sim(a, b) {
    var ea = els(a[0]), eb = els(b[0]), sh = ea.filter(function (x) { return eb.indexOf(x) >= 0; }).length, un = ea.length + eb.length - sh,
      ta = toks(a[1]), tb = toks(b[1]), st = ta.filter(function (x) { return tb.indexOf(x) >= 0; }).length,
      end = ta[0].slice(-4) === tb[0].slice(-4) ? 1 : 0;
    return 3 * sh / (un || 1) + 1.5 * st + end + Math.random() * 0.5;
  }
  window.qFm = function () {
    var a = pickAny(FM), c = FM.filter(function (x) { return x[1] !== a[1] && x[0] !== a[0]; }), sc = c.map(function (x) { return [sim(a, x), x[1]]; }), r = [];
    sc.sort(function (p, q) { return q[0] - p[0]; });
    sc.forEach(function (s) { if (r.length < 3 && r.indexOf(s[1]) < 0) r.push(s[1]); });
    return mkq("Название вещества: " + a[0], a[1], r, a[0] + " — " + a[1]);
  };

  var deck = [], st = ld("fc", {}), grp = 0, dir = 0, cur = null, open = false;
  function build() {
    deck = [];
    (window.REF || []).forEach(function (d) { if (d[0] === "Названия") { var p = d[1].split(" = "); deck.push({ k: "t:" + p[0], a: p[0], b: p[1], n: d[2], g: 1 }); } });
    FM.forEach(function (f) { if (f[2] === "t") return; deck.push({ k: "f:" + f[0], a: f[0], b: f[1], n: "", g: 2 }); });
  }
  var host = document.getElementById("tb4"), v = document.createElement("div");
  var b0 = document.createElement("button"); b0.className = "tab"; b0.id = "tb10"; b0.textContent = "🃏 Карточки"; b0.onclick = function () { tab(10); };
  host.parentNode.appendChild(b0); b0.style.flex = "1 0 23%";
  v.id = "v10"; v.style.display = "none";
  var nav = document.createElement("div"); nav.className = "row"; nav.style.flexWrap = "wrap"; v.appendChild(nav);
  ["Все", "Тривиальные", "Формулы", "🔄 Обратно"].forEach(function (t, i) {
    var x = document.createElement("button"); x.className = "sub-tab" + (i === 0 ? " active" : ""); x.textContent = t; x.style.cssText = "flex:none;padding:6px 10px;font-size:12px";
    x.onclick = function () { if (i < 3) { grp = i; for (var j = 0; j < 3; j++) nav.children[j].className = "sub-tab" + (j === i ? " active" : ""); } else { dir = 1 - dir; x.className = "sub-tab" + (dir ? " active" : ""); } next(); };
    nav.appendChild(x);
  });
  var pg = document.createElement("div"); pg.className = "lab"; var bar = document.createElement("div"); bar.className = "bar"; bar.innerHTML = '<i id="fcb" style="background:linear-gradient(90deg,#38bdf8,#10b981)"></i>';
  var card = document.createElement("div"); card.style.cssText = "min-height:170px;margin:10px 0;padding:18px;background:#060d0b;border:1px solid #1e3a32;border-radius:14px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;font-size:24px;color:#ecfdf5;white-space:pre-line";
  var ans = document.createElement("div"); ans.style.cssText = "display:none;grid-template-columns:1fr 1fr;gap:8px";
  var no = document.createElement("button"), yes = document.createElement("button");
  no.className = yes.className = "m-btn"; no.textContent = "❌ Не знаю"; yes.textContent = "✅ Знаю";
  ans.appendChild(no); ans.appendChild(yes);
  [pg, bar, card, ans].forEach(function (e) { v.appendChild(e); });
  function pool() { return deck.filter(function (d) { return !grp || d.g === grp; }); }
  function prog() { var p = pool(), n = p.filter(function (d) { return (st[d.k] || 0) >= 3; }).length; pg.innerHTML = "<span>Выучено: " + n + " / " + p.length + "</span><span>карточка вперёд = " + (dir ? "название → формула" : "формула → название") + "</span>"; document.getElementById("fcb").style.width = (100 * n / (p.length || 1)) + "%"; }
  function next() {
    if (!deck.length) build();
    var p = pool(), W = [4, 2.5, 1.2, 0.3], tot = 0, i, r;
    p.forEach(function (d) { tot += W[Math.min(st[d.k] || 0, 3)]; });
    r = Math.random() * tot; cur = p[p.length - 1];
    for (i = 0; i < p.length; i++) { r -= W[Math.min(st[p[i].k] || 0, 3)]; if (r <= 0) { cur = p[i]; break; } }
    open = false; ans.style.display = "none"; show(); prog();
  }
  function show() {
    var f = dir ? cur.b : cur.a, bk = dir ? cur.a : cur.b;
    card.innerHTML = ""; var m = document.createElement("div"); m.textContent = open ? bk : f; m.style.fontWeight = "700"; card.appendChild(m);
    if (open && cur.n) { var n = document.createElement("div"); n.textContent = cur.n; n.style.cssText = "font-size:13px;color:#6ee7b7;margin-top:10px"; card.appendChild(n); }
    if (!open) { var h = document.createElement("div"); h.textContent = "тапни, чтобы перевернуть"; h.style.cssText = "font-size:11px;color:#4b7a6a;margin-top:12px"; card.appendChild(h); }
  }
  card.onclick = function () { if (!cur) return; open = !open; ans.style.display = open ? "grid" : "none"; show(); };
  function rate(ok) { st[cur.k] = ok ? Math.min((st[cur.k] || 0) + 1, 3) : 0; sv("fc", st); if (ok) { addXP(2); vib(15); } next(); }
  yes.onclick = function () { rate(true); }; no.onclick = function () { rate(false); };
  document.getElementById("v4").parentNode.insertBefore(v, document.getElementById("v3"));
  var _t = tab;
  tab = function (n) { _t(n); v.style.display = n === 10 ? "block" : "none"; b0.className = "tab" + (n === 10 ? " active" : ""); if (n === 10) { for (var i = 0; i < 10; i++) { var e = document.getElementById("v" + i), g = document.getElementById("tb" + i); if (e) e.style.display = "none"; if (g) g.className = "tab"; } if (!cur) next(); } };
})();
