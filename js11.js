/* js11: вкладка "Схемы" — реакции органики в виде структурных формул (SVG) */
(function () {
  var SC = [
    ["Алкен + HBr (Марковников)", ["S:C=C-C", "T:+ HBr", "A:", "S:C-C|Br-C"], "H идёт к более гидрированному атому C, Br — ко второму."],
    ["Алкен + KMnO₄ → диол (Вагнер)", ["S:C=C-C", "A:KMnO4, H2O, 0 °C", "S:OH-C-C|OH-C"], "Раствор обесцвечивается, выпадает бурый MnO₂."],
    ["Кучеров: алкин → кетон", ["S:C-C#C", "A:H2O, HgSO4, H⁺", "S:C-C|=O-C"], "Ацетилен даёт альдегид CH₃CHO, остальные алкины — кетоны."],
    ["Тримеризация ацетилена", ["T:3 HC≡CH", "A:C акт, 600 °C", "S:@benz"], "Бензол. С Ni(CO)₄ получается циклооктатетраен (не ароматический)."],
    ["Дегидратация этанола", ["S:C-C-OH", "A:H2SO4 конц, 170 °C", "S:C=C", "T:+ H₂O"], "При t < 140 °C получится простой эфир."],
    ["Дегидрогалогенирование", ["S:C-C|Br-C", "A:KOH спирт., t", "S:C=C-C", "T:+ KBr + H₂O"], "Спиртовая щёлочь — отщепление (Зайцев), водная — замещение."],
    ["Гидролиз галогеналкана", ["S:C-C|Br-C", "A:KOH водн.", "S:C-C|OH-C", "T:+ KBr"], "Водная щёлочь: Br замещается на OH."],
    ["Окисление вторичного спирта", ["S:C-C|OH-C", "A:CuO, t", "S:C-C|=O-C", "T:+ Cu + H₂O"], "Вторичные спирты → кетоны, окисление дальше не идёт."],
    ["Первичный спирт → альдегид → кислота", ["S:C-C-C-OH", "A:CuO, t", "S:C-C-C|=O", "A:Ag2O, NH3", "S:C-C-C|=O|OH"], "Мягкое окисление останавливается на альдегиде."],
    ["Серебряное зеркало", ["S:C-C|=O", "A:[Ag(NH3)2]OH, t", "S:C-C|=O|OH", "T:+ 2Ag↓"], "Качественная на альдегиды. С Cu(OH)₂ выпадает красный Cu₂O."],
    ["Этерификация", ["S:C-C|=O|OH", "T:+", "S:C-C-OH", "A:H⁺, t", "S:C-C|=O-O-C-C", "T:+ H₂O"], "Обратимая. Щелочной гидролиз эфира необратим (омыление)."],
    ["Йодоформная реакция", ["S:C-C|=O-C", "A:I2, NaOH", "T:CH₃COONa + CHI₃↓"], "Жёлтый осадок иодоформа: качественная на CH₃–C(O)– и CH₃–CH(OH)–."],
    ["Бензол → нитробензол → анилин", ["S:@benz", "A:HNO3, H2SO4", "S:@benz|NO2", "A:Fe, HCl (Зинин)", "S:@benz|NH2"], "Нитрование, затем восстановление нитрогруппы."],
    ["Толуол → бензойная кислота", ["S:@benz|CH3", "A:KMnO4, H⁺, t", "S:@benz|COOH"], "Любая боковая цепь с C–H у кольца окисляется до COOH."],
    ["Анилин + бромная вода", ["S:@benz|NH2", "A:Br2 (водн.)", "S:@benz|0:NH2|1:Br|3:Br|5:Br", "T:+ 3HBr"], "Белый осадок 2,4,6-триброманилина: качественная реакция."],
    ["Фенол + бромная вода", ["S:@benz|OH", "A:Br2 (водн.)", "S:@benz|0:OH|1:Br|3:Br|5:Br", "T:+ 3HBr"], "Белый осадок 2,4,6-трибромфенола. С FeCl₃ — фиолетовый."]
  ];
  var z = 1.2, NS = "http://www.w3.org/2000/svg";
  function T(x, y, s, f) { return '<text x="' + x + '" y="' + y + '" text-anchor="middle" font-size="' + f + '" fill="currentColor" stroke="none">' + s + "</text>"; }
  function L(a, b, c, d, o) { var l = Math.hypot(c - a, d - b) || 1, nx = -(d - b) / l * o, ny = (c - a) / l * o; return '<line x1="' + (a + nx) + '" y1="' + (b + ny) + '" x2="' + (c + nx) + '" y2="' + (d + ny) + '"/>'; }
  function wrap(W, H, body) { return '<svg xmlns="' + NS + '" width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + " " + H + '" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" fill="none" font-family="sans-serif">' + body + "</svg>"; }
  function chain(sp) {
    var tk = sp.split(/([-=#])/), at = [], bd = [], i, j, o = "";
    for (i = 0; i < tk.length; i++) if (i % 2) bd.push(tk[i]); else at.push(tk[i].split("|"));
    var n = at.length, dx = 36 * z, U = 30 * z, Dn = 54 * z;
    function P(k) { return [25 * z + k * dx, k % 2 ? U : Dn]; }
    for (i = 0; i < n - 1; i++) {
      var a = P(i), b = P(i + 1), l = Math.hypot(b[0] - a[0], b[1] - a[1]), ux = (b[0] - a[0]) / l, uy = (b[1] - a[1]) / l, s1 = at[i][0] !== "C" ? 10 * z : 0, s2 = at[i + 1][0] !== "C" ? 10 * z : 0, c = { "-": 1, "=": 2, "#": 3 }[bd[i]];
      for (j = 0; j < c; j++) o += L(a[0] + ux * s1, a[1] + uy * s1, b[0] - ux * s2, b[1] - uy * s2, (j - (c - 1) / 2) * 4.5 * z);
    }
    for (i = 0; i < n; i++) {
      var p = P(i);
      if (at[i][0] !== "C") o += T(p[0], p[1] + 5 * z, at[i][0], 15 * z);
      for (j = 1; j < at[i].length; j++) {
        var lab = at[i][j], dir = (i % 2 ? -1 : 1) * (j === 1 ? 1 : -1), y2 = p[1] + dir * 16 * z, db = lab.charAt(0) === "=";
        if (db) { o += L(p[0], p[1], p[0], y2, 2.5 * z) + L(p[0], p[1], p[0], y2, -2.5 * z); } else o += L(p[0], p[1], p[0], y2, 0);
        o += T(p[0], y2 + dir * 9 * z + 5 * z, lab.replace("=", ""), 15 * z);
      }
    }
    return wrap(Math.round((n - 1) * dx + 50 * z), Math.round(90 * z), o);
  }
  function ring(sp) {
    var ps = sp.split("|").slice(1), cx = 58 * z, cy = 48 * z, R = 22 * z, pts = [], o = "", k, v = [];
    for (k = 0; k < 6; k++) { var an = (-90 + 60 * k) * Math.PI / 180; v.push([Math.cos(an), Math.sin(an)]); pts.push((cx + R * v[k][0]).toFixed(1) + "," + (cy + R * v[k][1]).toFixed(1)); }
    o += '<polygon points="' + pts.join(" ") + '"/><circle cx="' + cx + '" cy="' + cy + '" r="' + (R * 0.6) + '"/>';
    ps.forEach(function (s, idx) {
      var m = s.match(/^(\d):(.+)$/), pos = m ? +m[1] : idx, lab = m ? m[2] : s, ux = v[pos][0], uy = v[pos][1], vx = cx + R * ux, vy = cy + R * uy;
      o += L(vx, vy, vx + ux * 12 * z, vy + uy * 12 * z, 0) + T(vx + ux * (12 * z + 4.5 * z * lab.length + 2), vy + uy * 19 * z + 5 * z, lab, 15 * z);
    });
    return wrap(Math.round(116 * z), Math.round(96 * z), o);
  }
  var host = document.getElementById("tb4"), v = document.createElement("div");
  var b = document.createElement("button"); b.className = "tab"; b.id = "tb9"; b.textContent = "🎨 Схемы"; b.onclick = function () { tab(9); };
  host.parentNode.appendChild(b); b.style.flex = "1 0 23%";
  v.id = "v9"; v.style.display = "none";
  var sl = document.createElement("input"); sl.type = "range"; sl.min = 0.7; sl.max = 2; sl.step = 0.1; sl.value = z; sl.style.cssText = "width:100%;padding:0;margin:4px 0";
  var lab = document.createElement("div"); lab.className = "lab"; lab.innerHTML = "<span>Размер схем (ползунок)</span>";
  var box = document.createElement("div"); v.appendChild(lab); v.appendChild(sl); v.appendChild(box);
  function draw() {
    box.innerHTML = "";
    SC.forEach(function (s) {
      var c = document.createElement("div"); c.className = "kb";
      var h = "<b>" + s[0] + '</b><div style="display:flex;flex-wrap:wrap;align-items:center;gap:4px;margin:8px 0;color:#ecfdf5;overflow-x:auto">';
      s[1].forEach(function (it) {
        var t = it.charAt(0), x = it.slice(2);
        if (t === "S") h += x.indexOf("@") === 0 ? ring(x) : chain(x);
        else if (t === "T") h += '<span style="font-size:' + 15 * z + 'px;padding:0 4px">' + x + "</span>";
        else h += '<span style="text-align:center;color:#6ee7b7;font-size:' + 11 * z + 'px;max-width:' + 120 * z + 'px"><div>' + x + '</div><div style="font-size:' + 22 * z + 'px;line-height:1">→</div></span>';
      });
      c.innerHTML = h + '</div><div style="color:#a7f3d0;font-size:12px">' + s[2] + "</div>";
      box.appendChild(c);
    });
  }
  sl.oninput = function () { z = +sl.value; draw(); };
  draw();
  document.getElementById("v4").parentNode.insertBefore(v, document.getElementById("v3"));
  var _t = tab;
  tab = function (n) { _t(n); v.style.display = n === 9 ? "block" : "none"; b.className = "tab" + (n === 9 ? " active" : ""); if (n === 9) for (var i = 0; i < 9; i++) { var e = document.getElementById("v" + i), g = document.getElementById("tb" + i); if (e) e.style.display = "none"; if (g) g.className = "tab"; } };
})();
