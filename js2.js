var RX = [
  ["Cu + конц. HNO3: какой газ выделяется?","NO₂ (бурый)",["NO (бесцветный)","N₂O","H₂"],"Конц. HNO₃ с малоактивными металлами даёт NO₂."],
  ["Cu + разб. HNO3: основной газ?","NO (на воздухе буреет)",["NO₂ сразу","H₂","NH₃"],"Разб. HNO₃ + Cu → NO; затем 2NO + O₂ → 2NO₂."],
  ["Fe + конц. H2SO4 на холоде","пассивация (реакция почти не идёт)",["выделяется H₂","бурно выделяется SO₂","образуется H₂S"],"Fe, Al, Cr пассивируются конц. H₂SO₄ и HNO₃ на холоде."],
  ["Al + NaOH (р-р) + H2O: газ?","H₂ (образуется Na[Al(OH)₄])",["O₂","NH₃","газа нет"],"2Al + 2NaOH + 6H₂O → 2Na[Al(OH)₄] + 3H₂"],
  ["KMnO4 в кислой среде восстанавливается до","Mn²⁺ (почти бесцветный)",["MnO₂ (бурый осадок)","MnO₄²⁻ (зелёный)","Mn₂O₇"],"Кислая: Mn²⁺; нейтральная: MnO₂; щелочная: MnO₄²⁻."],
  ["KMnO4 в нейтральной среде даёт","MnO₂ (бурый осадок)",["Mn²⁺","MnO₄²⁻","Mn₂O₇"],"Кислая: Mn²⁺; нейтральная: MnO₂; щелочная: MnO₄²⁻."],
  ["KMnO4 в сильнощелочной среде даёт","K₂MnO₄ (зелёный раствор)",["MnO₂","Mn²⁺","не восстанавливается"],"Кислая: Mn²⁺; нейтральная: MnO₂; щелочная: MnO₄²⁻."],
  ["Цвет хромат-иона CrO₄²⁻","жёлтый",["оранжевый","зелёный","фиолетовый"],"CrO₄²⁻ (жёлт.) ⇌ Cr₂O₇²⁻ (оранж.): кислая среда сдвигает к дихромату."],
  ["K2Cr2O7 + восстановитель в кислой среде: цвет раствора меняется на","зелёный (Cr³⁺)",["жёлтый","бесцветный","розовый"],"Cr⁶⁺ восстанавливается до Cr³⁺ в кислой среде."],
  ["Качественная реакция на Fe³⁺","KSCN — кроваво-красный раствор",["BaCl₂ — белый осадок","AgNO₃ — жёлтый осадок","фенолфталеин — малиновый"],"Fe³⁺ + SCN⁻ → [Fe(SCN)]²⁺ и другие красные комплексы."],
  ["Реактив на Fe²⁺","K₃[Fe(CN)₆] — синий осадок (турнбулева синь)",["KSCN — кроваво-красный раствор","AgNO₃ — белый осадок","K₄[Fe(CN)₆] — синий осадок"],"K₄[Fe(CN)₆] даёт берлинскую лазурь с Fe³⁺, а K₃[Fe(CN)₆] — турнбулеву синь с Fe²⁺."],
  ["Осадок AgCl + избыток NH3·H2O","растворяется ([Ag(NH₃)₂]⁺)",["не меняется","чернеет","жёлтеет"],"AgCl + 2NH₃ → [Ag(NH₃)₂]Cl"],
  ["Cu²⁺ + избыток NH3·H2O","ярко-синий раствор [Cu(NH₃)₄]²⁺",["бурый осадок","белый осадок","зелёный осадок"],"Сначала голубой осадок Cu(OH)₂, затем он растворяется."],
  ["Раствор крахмала + I₂","синее окрашивание",["красное","жёлтый осадок","обесцвечивание"],"Качественная реакция на крахмал."],
  ["Глицерин + свежий Cu(OH)₂","ярко-синий раствор",["красный осадок Cu₂O","чёрный осадок","газ без запаха"],"Реакция на многоатомные спирты."],
  ["Альдегид + [Ag(NH₃)₂]OH, нагрев","«серебряное зеркало»",["красный осадок","синий раствор","белый осадок"],"R-CHO окисляется до кислоты, Ag⁺ восстанавливается до Ag."],
  ["Фенол + FeCl₃","фиолетовое окрашивание",["красный осадок","выделение газа","жёлтый осадок"],"Качественная реакция на фенолы."],
  ["Алкен + бромная вода","обесцвечивание",["жёлтый осадок","фиолетовое окрашивание","газ без запаха"],"Присоединение брома по двойной связи."],
  ["NH₄⁺ + щёлочь, нагрев","NH₃ (запах, синеет лакмус)",["H₂ (хлопок)","белый осадок","бурый газ"],"NH₄⁺ + OH⁻ → NH₃↑ + H₂O"],
  ["SO₄²⁻: реагент и признак","Ba²⁺ — белый осадок, нерастворимый в кислотах",["Ag⁺ — белый творожистый осадок","Ba²⁺ — осадок растворяется в HCl","Cu²⁺ — голубой осадок"],"BaSO₄ не растворяется в кислотах."],
  ["H₂S + Pb(NO₃)₂","чёрный осадок PbS",["белый осадок","жёлтый осадок","газа нет, осадка нет"],"Качественная реакция на сульфид-ион."],
  ["CaC₂ + H₂O","C₂H₂ (ацетилен) и Ca(OH)₂",["CH₄ и CaO","C₂H₆ и Ca(OH)₂","H₂ и CaCO₃"],"CaC₂ + 2H₂O → C₂H₂ + Ca(OH)₂"]
];
var CB = [
  ["Смешали равные объёмы 0,3 М HCl и 0,1 М NaOH. Какой pH смеси?","1",["2","13","0,5"],"Избыток H⁺: (0,3 − 0,1) / 2 = 0,1 моль/л → pH = 1"],
  ["pH раствора Ba(OH)2 с C = 0,005 моль/л (полная диссоциация)?","12",["11","2","10"],"[OH⁻] = 2 · 0,005 = 0,01 → pOH = 2 → pH = 12"],
  ["Сколько атомов содержится в 18 г воды?","1,8·10²⁴",["6,02·10²³","6,02·10²⁴","9·10²³"],"n(H2O) = 1 моль, в молекуле 3 атома → 3 · 6,02·10²³ ≈ 1,8·10²⁴"],
  ["Плотность газа по водороду равна 22. Молярная масса газа?","44 г/моль",["22 г/моль","11 г/моль","66 г/моль"],"M = 2 · D(H2) = 44 г/моль"],
  ["Молярная концентрация 36,5%-й HCl с ρ = 1,18 г/мл?","11,8 моль/л",["36,5 моль/л","1,18 моль/л","4,3 моль/л"],"C = 10 · ω · ρ / M = 10 · 36,5 · 1,18 / 36,5 = 11,8"],
  ["Масса H2SO4 для 500 мл 0,2 М раствора?","9,8 г",["98 г","19,6 г","4,9 г"],"n = 0,5 · 0,2 = 0,1 моль; m = 0,1 · 98 = 9,8 г"],
  ["Плотность газа при н.у. 1,25 г/л. Его молярная масса?","28 г/моль",["22,4 г/моль","44 г/моль","32 г/моль"],"M = ρ · Vm = 1,25 · 22,4 = 28"],
  ["Сколько воды добавить к 100 г 20%-го раствора, чтобы получить 10%-й?","100 г",["50 г","200 г","10 г"],"m(в-ва) = 20 г; m(р-ра) = 20 / 0,1 = 200 г; добавить 100 г"],
  ["Как изменится скорость реакции при нагревании на 30 °C, если γ = 2?","возрастёт в 8 раз",["возрастёт в 6 раз","возрастёт в 4 раза","возрастёт в 16 раз"],"v2 / v1 = γ^(ΔT/10) = 2³ = 8"],
  ["N2 + 3H2 ⇌ 2NH3: давление повысили. Равновесие...","сместится вправо",["сместится влево","не сместится","сначала вправо, затем влево"],"Слева 4 моль газа, справа 2: рост давления смещает равновесие к меньшему числу моль."],
  ["Сколько воды содержится в 25 г CuSO4·5H2O?","9 г",["5 г","25 г","18 г"],"M(CuSO4·5H2O) = 250; воды 5 · 18 = 90 → 25 · 90 / 250 = 9 г"]
];
window.onerror = function(m, src, l) {
  var d = document.getElementById("err");
  if (d) { d.style.display = "block"; d.textContent = "⚠️ Ошибка: " + m + " (строка " + l + "). Пришли этот текст Claude."; }
};
var $ = function(i) { return document.getElementById(i); };
var storeOK = true;
try { localStorage.setItem("_t", "1"); if (localStorage.getItem("_t") !== "1") storeOK = false; localStorage.removeItem("_t"); } catch (e) { storeOK = false; }
if (!storeOK) {
  window.addEventListener("load", function() {
    var d = document.getElementById("err");
    if (d) { d.style.display = "block"; d.textContent = "⚠️ Браузер не даёт сохранять данные (приватный режим или встроенный браузер). Открой сайт в обычном Safari/Chrome по ссылке github.io — иначе расписание будет пропадать."; }
  });
}
try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist(); } catch (e) {}
function ld(k, d) { try { var v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } }
function sv(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
function p2(n) { return ("0" + n).slice(-2); }


var tasks = ld("st", []);
if (!Array.isArray(tasks)) tasks = [];
tasks = tasks.filter(function(t) { return t && typeof t.t === "string" && typeof t.x === "string"; });
if (!tasks.length && !ld("st_seeded", false)) { tasks = [{t: "12:00", x: "Сесть за химию", d: false}]; sv("st_seeded", true); }
var notes = ld("sn_sec", ["", "", ""]);
if (!Array.isArray(notes)) notes = ["", "", ""];
var dis = ld("sdis", {});
var S = ld("hl_state", {xp: 0, streak: 0, last: "", boss: 100, max: 100, bossN: 1, best: 0});
var curSec = 0, tmr = null, alIdx = null, mute = false, wantW = false, wl = null;
$("nb").value = notes[0] || "";

/* ---------- звук, вибро ---------- */
var AC;
function beep(f, d, t) {
  if (mute) return;
  try {
    AC = AC || new (window.AudioContext || window.webkitAudioContext)();
    var o = AC.createOscillator(), g = AC.createGain();
    o.type = t || "square"; o.frequency.value = f; g.gain.value = 0.08;
    o.connect(g); g.connect(AC.destination); o.start();
    g.gain.exponentialRampToValueAtTime(0.001, AC.currentTime + d);
    o.stop(AC.currentTime + d);
  } catch (e) {}
}
function vib(p) { try { if (navigator.vibrate) navigator.vibrate(p); } catch (e) {} }
function snd() { mute = !mute; $("sb").textContent = mute ? "🔇" : "🔊"; }
function lock() {
  try {
    if (navigator.wakeLock) navigator.wakeLock.request("screen").then(function(l) { wl = l; }).catch(function() {});
  } catch (e) {}
}
function wk() {
  wantW = !wantW;
  $("wb").style.opacity = wantW ? 1 : 0.4;
  if (wantW) { lock(); toast("💡 Экран не гаснет"); } else if (wl) { wl.release(); wl = null; }
}
document.addEventListener("visibilitychange", function() { if (!document.hidden && wantW) lock(); });
function toast(m) { var t = $("toast"); t.textContent = m; t.className = ""; void t.offsetWidth; t.className = "show"; }

/* ---------- эффекты: конфетти и формулы ---------- */
var cv = $("fx"), cx = cv.getContext("2d"), P = [], raf = 0;
var bg = $("bg"), bx = bg.getContext("2d"), dr = [];
var EM = ["⚗️", "🧪", "☢️", "💥", "⚛️", "🔥", "🧬"];
var CH = "HCONSPFeNaKCaClMg⁺⁻₂₃→⇌↑↓Δ0123456789".split("");
function rs() {
  cv.width = bg.width = innerWidth; cv.height = bg.height = innerHeight;
  dr = [];
  for (var i = 0; i < Math.floor(bg.width / 16); i++) dr.push(Math.random() * bg.height / 16);
}
rs(); addEventListener("resize", rs);
function boom(n) {
  var x = innerWidth / 2, y = innerHeight / 2;
  for (var i = 0; i < n; i++) P.push({x: x, y: y, vx: (Math.random() - 0.5) * 16, vy: -Math.random() * 14 - 2, e: EM[i % EM.length], l: 70 + Math.random() * 40, s: 16 + Math.random() * 18});
  if (!raf) loop();
}
function loop() {
  cx.clearRect(0, 0, cv.width, cv.height);
  for (var i = P.length - 1; i >= 0; i--) {
    var p = P[i];
    p.x += p.vx; p.y += p.vy; p.vy += 0.45; p.l--;
    cx.globalAlpha = Math.min(1, p.l / 30);
    cx.font = p.s + "px sans-serif";
    cx.fillText(p.e, p.x, p.y);
    if (p.l <= 0) P.splice(i, 1);
  }
  cx.globalAlpha = 1;
  raf = P.length ? requestAnimationFrame(loop) : 0;
  if (!raf) cx.clearRect(0, 0, cv.width, cv.height);
}
var rainOn = false;
function rain() {
  rainOn = !rainOn;
  document.body.classList.toggle("rain", rainOn);
  $("rb").style.opacity = rainOn ? 1 : 0.4;
  sv("hl_rain", rainOn);
}
setInterval(function() {
  if (document.hidden || !rainOn) return;
  bx.fillStyle = "rgba(6,13,11,.12)"; bx.fillRect(0, 0, bg.width, bg.height);
  bx.fillStyle = "#10b98155"; bx.font = "14px monospace";
  for (var i = 0; i < dr.length; i++) {
    bx.fillText(CH[Math.floor(Math.random() * CH.length)], i * 16, dr[i] * 16);
    if (dr[i] * 16 > bg.height && Math.random() > 0.975) dr[i] = 0;
    dr[i]++;
  }
}, 80);

var tc = 0;
$("ttl").onclick = function() {
  tc++;
  if (tc >= 7) {
    tc = 0;
    document.body.classList.toggle("crazy");
    boom(80); vib([100, 50, 100, 50, 300]); beep(220, 0.2, "sawtooth"); beep(440, 0.3, "sawtooth");
    toast("☢️ РЕЖИМ БЕЗУМИЯ");
  }
};

/* ---------- XP, уровни, босс ---------- */
var RK = ["Пробирка", "Лаборант", "Студент-хим", "Колбовод", "Титратор", "Синтезатор", "Кандидат наук", "Профессор", "Менделеев", "НОБЕЛЕВКА"];
function day() {
  var t = new Date().toDateString();
  if (S.last !== t) {
    S.streak = (S.last === new Date(Date.now() - 864e5).toDateString()) ? S.streak + 1 : 1;
    S.last = t;
  }
}
function hud() {
  var lvl = Math.floor(S.xp / 100);
  $("lv").textContent = "Ур. " + (lvl + 1) + " · " + RK[Math.min(lvl, 9)];
  $("xpb").style.width = (S.xp % 100) + "%";
  $("bn").textContent = "👹 Босс «Лень» ур. " + S.bossN + " · " + Math.max(0, S.boss) + "/" + S.max + " HP";
  $("bb").style.width = Math.max(0, S.boss / S.max * 100) + "%";
  $("stk").textContent = "🔥" + S.streak;
}
function addXP(n) {
  var old = Math.floor(S.xp / 100);
  S.xp += n; S.boss -= n; day();
  toast("+" + n + " XP");
  if (S.boss <= 0) {
    S.bossN++; S.max = 100 + S.bossN * 60; S.boss = S.max;
    boom(60); vib([200, 80, 200, 80, 400]);
    document.body.classList.add("shake");
    setTimeout(function() { document.body.classList.remove("shake"); }, 700);
    toast("👹 Босс повержен! Лень ур. " + S.bossN);
  }
  if (Math.floor(S.xp / 100) > old) {
    boom(50); beep(523, 0.15); beep(659, 0.15); beep(784, 0.3);
    toast("⬆️ Новый ранг: " + RK[Math.min(Math.floor(S.xp / 100), 9)]);
  }
  sv("hl_state", S); hud();
}

/* ---------- вкладки ---------- */
function tab(n) {
  for (var i = 0; i < 5; i++) {
    $("v" + i).style.display = (i === n) ? "block" : "none";
    $("tb" + i).className = "tab" + (i === n ? " active" : "");
  }
  if (n !== 1 && qtm) { clearInterval(qtm); qtm = null; }
  if (n === 1) qz();
  if (n === 4) lib();
}
function subTab(s) {
  curSec = s;
  for (var i = 0; i < 4; i++) $("st" + i).className = "sub-tab" + (i === s ? " active" : "");
  $("nb").style.display = (s === 3) ? "none" : "block";
  $("cb").style.display = (s === 3) ? "block" : "none";
  if (s < 3) $("nb").value = notes[s] || "";
}
function saveNote() {
  if (curSec < 3) { notes[curSec] = $("nb").value; sv("sn_sec", notes); }
}

