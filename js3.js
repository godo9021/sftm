/* ---------- мотивация и таймеры ---------- */
function mood(i) {
  stopT();
  var a = rep[i];
  $("q").textContent = a[Math.floor(Math.random() * a.length)];
  $("trow").style.display = "flex";
  vib(15);
}
var strict = false, fails = 0, lostAt = 0, strictW = false, lastQ = 0;
function pickQ() {
  var c = rep[Math.floor(Math.random() * 3)];
  return c[Math.floor(Math.random() * c.length)];
}
function timer(s, st) {
  stopT();
  strict = !!st; fails = 0; lastQ = Date.now();
  var r = $("trow"), end = Date.now() + s * 1000;
  $("q").textContent = st ? "🔒 СТРОГИЙ РЕЖИМ: телефон лежит, ты учишься. Выход из приложения = штраф!" : ((s === 1500) ? "☢️ Синтез: 25 мин фокуса!" : "🔥 Энергия активации: 5 мин!");
  r.innerHTML = '<button class="t-btn" id="at" onclick="stopT()"></button>';
  if (st) {
    if (!wantW) { wantW = true; strictW = true; $("wb").style.opacity = 1; }
    lock();
  }
  updT(s);
  tmr = setInterval(function() {
    var left = Math.ceil((end - Date.now()) / 1000);
    updT(left);
    if (strict && Date.now() - lastQ > 45000 && left > 5) { lastQ = Date.now(); $("q").textContent = "🔒 " + pickQ(); }
    if (left <= 0) {
      var was = strict, clean = (fails === 0);
      stopT();
      var xp = (s === 1500) ? 50 : ((s === 2700) ? 80 : 15);
      if (was && clean) xp += 50;
      $("q").textContent = (was && clean) ? "🏆 45 минут без срывов! Это уровень чемпиона." : (was ? "✅ Досидел до конца. Срывов: " + fails : "🏆 Реакция прошла на 100%!");
      addXP(xp);
      boom(70); vib([300, 100, 300, 100, 600]); beep(784, 0.2); beep(988, 0.2); beep(1318, 0.4);
    }
  }, 500);
}
function updT(s) {
  var b = $("at");
  if (b) b.textContent = "⏳ " + p2(Math.floor(Math.max(s, 0) / 60)) + ":" + p2(Math.max(s, 0) % 60) + " (стоп)";
}
function stopT() {
  if (tmr) { clearInterval(tmr); tmr = null; }
  strict = false;
  if (strictW) {
    strictW = false; wantW = false; $("wb").style.opacity = 0.4;
    try { if (wl) { wl.release(); wl = null; } } catch (e) {}
  }
  $("trow").innerHTML = '<button class="t-btn" onclick="timer(300)">🔥 5 мин</button><button class="t-btn" style="background:#38bdf8" onclick="timer(1500)">☢️ 25 мин</button><button class="t-btn" style="background:#f87171" onclick="timer(2700, true)">🔒 45 мин</button>';
}
stopT();

/* ---------- план ---------- */
function row(i) {
  var k = tasks[i], li = document.createElement("li"), d = document.createElement("div"),
      b = document.createElement("b"), s = document.createElement("span"), x = document.createElement("button");
  if (k.d) li.className = "done";
  d.className = "t-info"; b.style.color = "#10b981";
  b.textContent = k.t; s.textContent = k.x;
  d.appendChild(b); d.appendChild(s);
  d.onclick = function() { tog(i); };
  x.className = "del"; x.textContent = "✕";
  x.onclick = function() { del(i); };
  li.appendChild(d); li.appendChild(x);
  return li;
}
function render() {
  var ul = $("list"), dn = 0;
  ul.innerHTML = "";
  tasks.sort(function(a, b) { return a.t.localeCompare(b.t); });
  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].d) dn++;
    ul.appendChild(row(i));
  }
  $("prog").textContent = dn + "/" + tasks.length;
  sv("st", tasks);
}
function add() {
  var t = $("tt").value.trim(), x = $("ti").value.trim();
  if (!x) return;
  if (t.length === 4 && t.indexOf(":") === -1) t = t.slice(0, 2) + ":" + t.slice(2);
  if (t.length === 4 && t.charAt(1) === ":") t = "0" + t;
  tasks.push({t: t || "12:00", x: x, d: false});
  $("ti").value = "";
  vib(20); render(); chk();
}
function tog(i) {
  tasks[i].d = !tasks[i].d;
  if (tasks[i].d) { addXP(20); boom(25); beep(660, 0.1); beep(990, 0.15); vib(40); }
  render(); chk();
}
function del(i) { tasks.splice(i, 1); render(); chk(); }
function toMin(s) {
  var p = s.split(":");
  if (p.length !== 2) return -1;
  var h = parseInt(p[0], 10), m = parseInt(p[1], 10);
  return (isNaN(h) || isNaN(m)) ? -1 : h * 60 + m;
}
function resetAl() {
  alIdx = null;
  $("mbox").className = "box";
  $("abtn").style.display = "none";
  $("mbtns").style.display = "flex";
}
function chk() {
  var n = new Date(), h = n.getHours(), m = n.getMinutes(), nowM = h * 60 + m, td = n.toDateString();
  $("clk").textContent = p2(h) + ":" + p2(m);
  if (ld("hl_day", "") !== td) {
    sv("hl_day", td);
    for (var j = 0; j < tasks.length; j++) tasks[j].d = false;
    dis = {}; sv("sdis", dis); render();
  }
  var f = null;
  for (var i = 0; i < tasks.length; i++) {
    var tm = toMin(tasks[i].t), k = tasks[i].t + tasks[i].x;
    if (!tasks[i].d && tm !== -1 && !dis[k] && nowM >= (tm - 15) && nowM <= (tm + 120)) { f = i; break; }
  }
  if (tmr) f = null;
  if (f !== null) {
    if (alIdx !== f) {
      alIdx = f; stopT();
      $("q").textContent = "🚨 ПОРА (" + tasks[f].t + ")! Запускай: " + tasks[f].x;
      $("mbox").className = "box alarm";
      $("abtn").style.display = "block";
      $("mbtns").style.display = "none";
      $("trow").style.display = "none";
    }
    vib([300, 150, 300]); beep(880, 0.15); beep(660, 0.15);
  } else if (alIdx !== null) {
    resetAl();
    $("q").textContent = "Жми на колбу!";
  }
}
function ack() {
  if (alIdx !== null && tasks[alIdx]) { dis[tasks[alIdx].t + tasks[alIdx].x] = true; sv("sdis", dis); }
  resetAl();
  $("q").textContent = "Катализатор сработал!";
  addXP(10); boom(20);
}

/* ---------- игра: уровни от школьного до олимпиадного ---------- */
var qmode = "el", qcur = null, qdl = 0, qtm = null, cmb = 0;
var QM = ["el", "fm", "ox", "rx", "cb", "ol"];
var QX = {el: 3, fm: 8, ox: 8, rx: 8, cb: 10, ol: 15};
function pickAny(a) { return a[Math.floor(Math.random() * a.length)]; }
function shuf(a) { return a.sort(function() { return Math.random() - 0.5; }); }
function dist(pool, ans, n) {
  var r = [], g = 0, x;
  while (r.length < n && g < 300) { g++; x = pickAny(pool); if (x !== ans && r.indexOf(x) < 0) r.push(x); }
  return r;
}
function mkq(q, a, d, e) { return {q: q, a: a, d: d, e: e || ""}; }
function num(x) { return String(Math.round(x * 100) / 100).replace(".", ","); }
function qEl() { var a = pickAny(E); return mkq(a[0], a[1], dist(EN, a[1], 3), ""); }
function qFm() { var a = pickAny(FM); return mkq("Название вещества: " + a[0], a[1], dist(FMN, a[1], 3), a[0] + " — " + a[1]); }
function qOx() { var a = pickAny(OX); return mkq("Степень окисления " + a[0] + " в " + a[1] + "?", a[2], dist(OS, a[2], 3), ""); }
function qRx() { var a = pickAny(RX); return mkq(a[0], a[1], a[2].slice(), a[3]); }
function gen() {
  var t = Math.floor(Math.random() * 5), k, c, m, v, w, r;
  if (t === 0) {
    c = pickAny([["H2SO4", 98], ["NaOH", 40], ["CaCO3", 100], ["Na2CO3", 106], ["KMnO4", 158], ["CuSO4", 160], ["NaCl", 58.5], ["HCl", 36.5]]);
    k = pickAny([0.5, 2, 3, 5]);
    m = k * c[1];
    return mkq("Сколько моль вещества в " + num(m) + " г " + c[0] + "? (M = " + c[1] + " г/моль)", num(k) + " моль", [num(k * 2) + " моль", num(k / 2) + " моль", num(k * 10) + " моль"], "n = m / M = " + num(m) + " / " + c[1] + " = " + num(k) + " моль");
  }
  if (t === 1) {
    k = pickAny([0.5, 1, 2, 5]);
    v = 22.4 * k;
    return mkq("Сколько литров CO2 (н.у.) выделится при полном разложении " + num(k * 100) + " г CaCO3? (CaCO3 → CaO + CO2)", num(v) + " л", [num(v * 2) + " л", num(v / 2) + " л", num(k * 100 / 22.4) + " л"], "n(CaCO3) = " + num(k) + " моль = n(CO2); V = n · 22,4 = " + num(v) + " л");
  }
  if (t === 2) {
    w = pickAny([5, 10, 12.5, 20, 25, 40]); r = pickAny([80, 160, 200, 400]);
    return mkq("В " + r + " г раствора содержится " + num(w * r / 100) + " г соли. Массовая доля соли?", num(w) + "%", [num(w * 2) + "%", num(w / 2) + "%", num(100 - w) + "%"], "ω = m(соли) / m(р-ра) · 100% = " + num(w * r / 100) + " / " + r + " · 100% = " + num(w) + "%");
  }
  if (t === 3) {
    c = pickAny([[20, 80], [10, 40], [25, 75], [30, 120], [15, 85], [50, 150], [40, 160]]);
    v = c[0] / (c[0] + c[1]) * 100;
    return mkq(c[0] + " г соли растворили в " + c[1] + " г воды. Массовая доля соли?", num(v) + "%", [num(c[0] / c[1] * 100) + "%", num(v / 2) + "%", num(100 - v) + "%"], "m(р-ра) = " + c[0] + " + " + c[1] + " = " + (c[0] + c[1]) + " г; ω = " + c[0] + " / " + (c[0] + c[1]) + " = " + num(v) + "%");
  }
  c = pickAny([[40, 30], [50, 40], [80, 60], [25, 20], [200, 150], [60, 45]]);
  v = c[1] / c[0] * 100;
  return mkq("Теоретически можно получить " + c[0] + " г продукта, практически получили " + c[1] + " г. Выход реакции?", num(v) + "%", [num(c[0] / c[1] * 100) + "%", num(100 - v) + "%", num(v / 2) + "%"], "η = m(практ) / m(теор) · 100% = " + c[1] + " / " + c[0] + " · 100% = " + num(v) + "%");
}
function qCb() {
  if (Math.random() < 0.55) return gen();
  var a = pickAny(CB);
  return mkq(a[0], a[1], a[2].slice(), a[3]);
}
function qBuild() {
  if (qmode === "fm") return qFm();
  if (qmode === "ox") return qOx();
  if (qmode === "rx") return qRx();
  if (qmode === "cb") return qCb();
  if (qmode === "ol") return pickAny([qFm, qOx, qRx, qCb, qRx, qCb])();
  return qEl();
}
function qsetMode(i) {
  qmode = QM[i]; cmb = 0;
  for (var j = 0; j < QM.length; j++) $("qm" + j).className = "sub-tab" + (j === i ? " active" : "");
  $("ex").textContent = "";
  qz();
}
function mkOpt(t) {
  var b = document.createElement("button");
  b.className = "m-btn qo"; b.textContent = t;
  b.onclick = function() { pk(t); };
  return b;
}
function qz() {
  if (qtm) { clearInterval(qtm); qtm = null; }
  qcur = qBuild();
  var o = shuf([qcur.a].concat(qcur.d)), box = $("qo"), lg = false, i;
  box.innerHTML = "";
  for (i = 0; i < o.length; i++) { if (o[i].length > 14) lg = true; box.appendChild(mkOpt(o[i])); }
  box.style.gridTemplateColumns = lg ? "1fr" : "1fr 1fr";
  $("qs").textContent = qcur.q;
  $("qs").style.fontSize = (qmode === "el") ? "46px" : "15px";
  $("qs").style.textAlign = (qmode === "el") ? "center" : "left";
  $("xl").textContent = "+" + QX[qmode] + " XP и комбо";
  $("cmb").textContent = "Комбо ×" + cmb + " · рекорд " + S.best;
  if (qmode === "ol") { qdl = Date.now() + 25000; qtm = setInterval(qtick, 250); }
}
function qtick() {
  var l = Math.ceil((qdl - Date.now()) / 1000);
  $("cmb").textContent = "⏱ " + Math.max(l, 0) + " с · комбо ×" + cmb;
  if (l <= 0) { clearInterval(qtm); qtm = null; qres(false, "⏱ Время вышло. "); }
}
function pk(t) { if (qcur) qres(t === qcur.a, ""); }
function qres(ok, pre) {
  var prev = qcur;
  if (qtm) { clearInterval(qtm); qtm = null; }
  if (!prev) return;
  if (ok) {
    cmb++; if (cmb > S.best) S.best = cmb;
    beep(660, 0.1); beep(880, 0.15); vib(30);
    $("ex").textContent = "✅ " + prev.e;
    addXP(QX[qmode] + Math.min(cmb, 10));
    if (cmb % 5 === 0) boom(30);
  } else {
    cmb = 0; beep(150, 0.3, "sawtooth"); vib([80, 40, 80]);
    $("ex").textContent = "❌ " + pre + "Верно: " + prev.a + (prev.e ? ". " + prev.e : "");
  }
  qz();
}

