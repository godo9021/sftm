/* js5: полная таблица элементов + вкладка "Олимп-тулс" */
(function () {
  var T = "He4.0026 Li6.94 Be9.012 B10.81 C12.011 N14.007 O15.999 F18.998 Ne20.18 Na22.99 Mg24.305 Al26.982 Si28.085 P30.974 S32.06 Cl35.45 Ar39.95 K39.098 Ca40.078 Sc44.956 Ti47.867 V50.942 Cr51.996 Mn54.938 Fe55.845 Co58.933 Ni58.693 Cu63.546 Zn65.38 Ga69.723 Ge72.63 As74.922 Se78.971 Br79.904 Kr83.798 Rb85.468 Sr87.62 Y88.906 Zr91.224 Nb92.906 Mo95.95 Tc98 Ru101.07 Rh102.91 Pd106.42 Ag107.87 Cd112.41 In114.82 Sn118.71 Sb121.76 Te127.6 I126.9 Xe131.29 Cs132.91 Ba137.33 La138.91 Ce140.12 Pr140.91 Nd144.24 Pm145 Sm150.36 Eu151.96 Gd157.25 Tb158.93 Dy162.5 Ho164.93 Er167.26 Tm168.93 Yb173.05 Lu174.97 Hf178.49 Ta180.95 W183.84 Re186.21 Os190.23 Ir192.22 Pt195.08 Au196.97 Hg200.59 Tl204.38 Pb207.2 Bi208.98 Po209 At210 Rn222 Fr223 Ra226 Ac227 Th232.04 Pa231.04 U238.03 Np237 Pu244";
  T.split(" ").forEach(function (s) { var m = s.match(/^([A-Z][a-z]?)([\d.]+)$/); if (AW[m[1]] === undefined) AW[m[1]] = +m[2]; });
  AW.H = AW.H || 1.008;

  function cnt(f) {
    var t = f.match(/[A-Z][a-z]?|\(|\)|\d+/g) || [], st = [{}], i, x, n, g, k;
    if (t.join("").length !== f.length) return null;
    for (i = 0; i < t.length; i++) {
      x = t[i];
      if (x === "(") st.push({});
      else if (x === ")") {
        if (st.length < 2) return null;
        g = st.pop(); n = /^\d+$/.test(t[i + 1] || "") ? +t[++i] : 1;
        for (k in g) st[st.length - 1][k] = (st[st.length - 1][k] || 0) + g[k] * n;
      } else if (/^\d+$/.test(x)) return null;
      else {
        if (AW[x] === undefined) return null;
        n = /^\d+$/.test(t[i + 1] || "") ? +t[++i] : 1;
        st[st.length - 1][x] = (st[st.length - 1][x] || 0) + n;
      }
    }
    return st.length === 1 ? st[0] : null;
  }
  function M(f) { var c = cnt(f), s = 0, k; if (!c) return null; for (k in c) s += AW[k] * c[k]; return s; }
  function F(x) { return (+x.toPrecision(4)).toString(); }
  function num(s) { return parseFloat(String(s).replace(",", ".")); }

  function balance(eq) {
    var p = eq.replace(/\s/g, "").split(/=|->|→/);
    if (p.length !== 2) return "Формат: A+B=C+D";
    var L = p[0].split("+"), R = p[1].split("+"), sp = L.concat(R), cs = [], els = {}, i, j, k;
    for (i = 0; i < sp.length; i++) { var c = cnt(sp[i]); if (!c) return "⚠️ Не понял: " + sp[i]; cs.push(c); for (k in c) els[k] = 1; }
    var ks = Object.keys(els), A = ks.map(function (e) { return cs.map(function (c, j) { return (c[e] || 0) * (j < L.length ? 1 : -1); }); });
    var n = sp.length, r = 0, piv = [], c2, q, t, v;
    for (c2 = 0; c2 < n && r < A.length; c2++) {
      q = r; for (i = r; i < A.length; i++) if (Math.abs(A[i][c2]) > Math.abs(A[q][c2])) q = i;
      if (Math.abs(A[q][c2]) < 1e-9) continue;
      t = A[q]; A[q] = A[r]; A[r] = t; v = A[r][c2];
      for (j = 0; j < n; j++) A[r][j] /= v;
      for (i = 0; i < A.length; i++) if (i !== r) { v = A[i][c2]; for (j = 0; j < n; j++) A[i][j] -= v * A[r][j]; }
      piv.push(c2); r++;
    }
    var fr = []; for (j = 0; j < n; j++) if (piv.indexOf(j) < 0) fr.push(j);
    if (fr.length !== 1) return "⚠️ Не удалось однозначно уравнять (проверь формулы или реакция не одна).";
    var x = []; for (j = 0; j < n; j++) x[j] = 0; x[fr[0]] = 1;
    piv.forEach(function (pc, i) { x[pc] = -A[i][fr[0]]; });
    if (x.some(function (a) { return a < -1e-9; })) { if (x.every(function (a) { return a <= 1e-9; })) x = x.map(function (a) { return -a; }); else return "⚠️ Нет положительных коэффициентов — проверь стороны."; }
    for (k = 1; k <= 120; k++) if (x.every(function (a) { return Math.abs(a * k - Math.round(a * k)) < 1e-6; })) break;
    var co = x.map(function (a) { return Math.round(a * k); }), str = function (a, b) { var o = []; for (var i = a; i < b; i++) o.push((co[i] > 1 ? co[i] : "") + sp[i]); return o.join(" + "); };
    return str(0, L.length) + " → " + str(L.length, n);
  }

  var modes = [
    ["⚖️ Уравнять реакцию", ["Реакция: KMnO4+HCl=KCl+MnCl2+Cl2+H2O", "", "", ""], function (a) { return balance(a[0]); }],
    ["pH сильной кислоты", ["C, моль/л", "число H⁺ (1)", "", ""], function (a) { var C = num(a[0]) * (num(a[1]) || 1); return C > 0 ? "pH = " + F(-Math.log10(C)) : "Введи C"; }],
    ["pH сильного основания", ["C, моль/л", "число OH⁻ (1; Ba(OH)2 → 2)", "", ""], function (a) { var C = num(a[0]) * (num(a[1]) || 1); return C > 0 ? "pOH = " + F(-Math.log10(C)) + "\npH = " + F(14 + Math.log10(C)) : "Введи C"; }],
    ["pH слабой кислоты", ["C, моль/л", "Ka (1.8e-5)", "", ""], function (a) { var C = num(a[0]), K = num(a[1]); if (!(C > 0 && K > 0)) return "Введи C и Ka"; var x = (-K + Math.sqrt(K * K + 4 * K * C)) / 2; return "[H⁺] = " + x.toExponential(3) + "\npH = " + F(-Math.log10(x)) + "\nα = " + F(100 * x / C) + " %"; }],
    ["pH слабого основания", ["C, моль/л", "Kb (1.8e-5)", "", ""], function (a) { var C = num(a[0]), K = num(a[1]); if (!(C > 0 && K > 0)) return "Введи C и Kb"; var x = (-K + Math.sqrt(K * K + 4 * K * C)) / 2; return "[OH⁻] = " + x.toExponential(3) + "\npH = " + F(14 + Math.log10(x)) + "\nα = " + F(100 * x / C) + " %"; }],
    ["pV = nRT (пусто = найти)", ["p, кПа", "V, л", "n, моль", "T, K"], function (a) { var v = a.map(num), e = [], i, R = 8.314; v.forEach(function (x, i) { if (isNaN(x)) e.push(i); }); if (e.length !== 1) return "Оставь пустым ровно одно поле."; var p = v[0], V = v[1], n = v[2], T = v[3]; return ["p = " + F(n * R * T / V) + " кПа", "V = " + F(n * R * T / p) + " л", "n = " + F(p * V / (R * T)) + " моль", "T = " + F(p * V / (n * R)) + " K"][e[0]]; }],
    ["Плотность газа", ["Формула газа: Ar, CO2, NH3", "", "", ""], function (a) { var m = M(a[0].trim()); return m ? "M = " + F(m) + " г/моль\nD(H2) = " + F(m / 2.016) + "\nD(возд.) = " + F(m / 29) + "\nρ(н.у.) = " + F(m / 22.4) + " г/л" : "⚠️ Не понял формулу"; }],
    ["C ⇄ ω (плотность)", ["ω, %", "ρ, г/мл", "Формула вещества", ""], function (a) { var w = num(a[0]), r = num(a[1]), m = M(a[2].trim()); return (w > 0 && r > 0 && m) ? "C = " + F(10 * w * r / m) + " моль/л\nm(1 л р-ра) = " + F(1000 * r) + " г" : "Введи ω, ρ и формулу"; }],
    ["Разбавление C₁V₁=C₂V₂", ["C₁ (исх.)", "C₂ (нужная)", "V₂ (нужный объём)", ""], function (a) { var c1 = num(a[0]), c2 = num(a[1]), v2 = num(a[2]); return (c1 > 0 && c2 > 0 && v2 > 0) ? "V₁ = " + F(c2 * v2 / c1) + "\nДобавить воды: " + F(v2 - c2 * v2 / c1) : "Введи три значения"; }],
    ["Правило креста", ["ω₁, % (крепкий)", "ω₂, % (слабый)", "ω нужная, %", ""], function (a) { var x = num(a[0]), y = num(a[1]), z = num(a[2]); if (!(x > z && z > y)) return "Нужно ω₁ > ω > ω₂"; return "m₁ : m₂ = " + F(z - y) + " : " + F(x - z) + "\n(" + F((z - y) / (x - y) * 100) + " % крепкого)"; }],
    ["Формула по ω", ["Напр.: C 40 H 6.7 O 53.3", "", "", ""], function (a) { var t = a[0].trim().split(/\s+/), r = [], i, mn = 1e9; for (i = 0; i + 1 < t.length; i += 2) { var w = num(t[i + 1]); if (AW[t[i]] === undefined || !(w > 0)) return "⚠️ Формат: элемент % элемент %"; r.push([t[i], w / AW[t[i]]]); mn = Math.min(mn, w / AW[t[i]]); } if (!r.length) return "Введи данные"; var s = "Соотношение: " + r.map(function (q) { return q[0] + F(q[1] / mn); }).join(" "); for (var k = 1; k <= 6; k++) if (r.every(function (q) { return Math.abs(q[1] / mn * k - Math.round(q[1] / mn * k)) < 0.06; })) { s += "\nПростейшая: " + r.map(function (q) { var c = Math.round(q[1] / mn * k); return q[0] + (c > 1 ? c : ""); }).join(""); break; } return s; }]
  ];

  var host = document.getElementById("tb4"), v = document.createElement("div"), cur = 0, ins = [];
  var b = document.createElement("button"); b.className = "tab"; b.id = "tb5"; b.textContent = "🏅 Тулс"; b.onclick = function () { tab(5); };
  host.parentNode.appendChild(b);
  v.id = "v5"; v.style.display = "none";
  var sel = document.createElement("select"); sel.style.cssText = "width:100%;background:#060d0b;color:#ecfdf5;border:1px solid #1e3a32;border-radius:6px;padding:8px;font-size:13px;margin-bottom:6px";
  modes.forEach(function (m, i) { var o = document.createElement("option"); o.value = i; o.textContent = m[0]; sel.appendChild(o); });
  v.appendChild(sel);
  for (var i = 0; i < 4; i++) { var e = document.createElement("input"); e.style.cssText = "width:100%;margin-bottom:5px"; e.autocomplete = "off"; e.autocapitalize = "off"; e.oninput = go; ins.push(e); v.appendChild(e); }
  var out = document.createElement("div"); out.style.cssText = "white-space:pre-line;font-size:14px;line-height:1.6;color:#a7f3d0;padding:6px 0;min-height:60px";
  v.appendChild(out); document.getElementById("v4").parentNode.insertBefore(v, document.getElementById("v3"));
  function go() { var a = ins.map(function (x) { return x.value; }); out.textContent = a.some(function (s) { return s.trim(); }) ? modes[cur][2](a) : ""; }
  function setM() { cur = +sel.value; ins.forEach(function (x, i) { var h = modes[cur][1][i]; x.style.display = h ? "block" : "none"; x.placeholder = h; x.value = ""; }); out.textContent = ""; }
  sel.onchange = setM; setM();

  var _tab = tab;
  tab = function (n) { _tab(n); v.style.display = n === 5 ? "block" : "none"; b.className = "tab" + (n === 5 ? " active" : ""); if (n === 5) for (var i = 0; i < 5; i++) { document.getElementById("v" + i).style.display = "none"; document.getElementById("tb" + i).className = "tab"; } };
})();
