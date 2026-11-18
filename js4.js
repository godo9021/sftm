/* ---------- калькулятор молярной массы ---------- */
var AW = {H:1.008,He:4,Li:6.94,Be:9.01,B:10.81,C:12.01,N:14.01,O:16,F:19,Ne:20.18,Na:22.99,Mg:24.31,Al:26.98,Si:28.09,P:30.97,S:32.06,Cl:35.45,K:39.1,Ca:40.08,Cr:52,Mn:54.94,Fe:55.85,Co:58.93,Ni:58.69,Cu:63.55,Zn:65.38,Br:79.9,Ag:107.87,Sn:118.71,I:126.9,Ba:137.33,Au:197,Hg:200.59,Pb:207.2};
function mm(f) {
  var t = f.match(/[A-Z][a-z]?|\(|\)|\d+/g) || [], st = [0], i, x, n, g;
  if (t.join("").length !== f.replace(/\s/g, "").length) return null;
  for (i = 0; i < t.length; i++) {
    x = t[i];
    if (x === "(") st.push(0);
    else if (x === ")") {
      if (st.length < 2) return null;
      g = st.pop();
      n = /^\d+$/.test(t[i + 1] || "") ? +t[++i] : 1;
      st[st.length - 1] += g * n;
    } else if (/^\d+$/.test(x)) continue;
    else {
      if (AW[x] === undefined) return null;
      n = /^\d+$/.test(t[i + 1] || "") ? +t[++i] : 1;
      st[st.length - 1] += AW[x] * n;
    }
  }
  return (st.length === 1 && st[0] > 0) ? st[0] : null;
}
function calc() {
  var f = $("cf").value.replace(/[₀-₉]/g, function(c) { return c.charCodeAt(0) - 8320; }).trim(),
      m = parseFloat($("cm").value.replace(",", ".")), r = $("cr");
  if (!f) { r.textContent = "Введи формулу — посчитаю M. Добавь массу — найду n, V и N."; return; }
  var M = mm(f);
  if (M === null) { r.textContent = "⚠️ Не понял формулу. Регистр важен: Co ≠ CO."; return; }
  var s = "M(" + f + ") = " + M.toFixed(2) + " г/моль";
  if (m > 0) {
    var n = m / M;
    s += "\nn = " + n.toFixed(4) + " моль\nV (н.у.) = " + (n * 22.4).toFixed(2) + " л\nN = " + (n * 6.02e23).toExponential(2) + " частиц";
  }
  r.textContent = s;
}

document.addEventListener("visibilitychange", function() {
  if (!strict || !tmr) return;
  if (document.hidden) { lostAt = Date.now(); return; }
  if (!lostAt) return;
  var away = Math.round((Date.now() - lostAt) / 1000);
  lostAt = 0;
  if (away < 3) return;
  fails++;
  S.xp = Math.max(0, S.xp - 15); sv("hl_state", S); hud();
  $("q").textContent = "📵 Ты выходил на " + away + " с. Штраф −15 XP. " + GUILT[Math.floor(Math.random() * GUILT.length)];
  vib([500, 100, 500]); beep(120, 0.4, "sawtooth");
});

function mkCard(it) {
  var d = document.createElement("div"), h = document.createElement("b"), t = document.createElement("div");
  d.className = "kb"; h.textContent = it[0]; t.textContent = it[1];
  t.style.display = "none";
  h.onclick = function() { t.style.display = (t.style.display === "none") ? "block" : "none"; vib(10); };
  d.appendChild(h); d.appendChild(t);
  return d;
}
function lib() {
  var box = $("kl");
  if (box.childNodes.length) return;
  for (var i = 0; i < LIB.length; i++) box.appendChild(mkCard(LIB[i]));
}

if (ld("hl_rain", false) === true) rain();
hud(); render(); chk();
setInterval(chk, 5000);
