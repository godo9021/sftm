/* js7: вкладка "Задачи" — тренажёр расчётных задач МЭ (неорг / орг / физхим) */
(function () {
  var SEC = [
    ["🧪 Неорганика", "Алгоритм: 1) все данные → моли; 2) пиши ТОЛЬКО реакции, которые идут; 3) смесь → x и y; 4) пропорция по коэффициентам; 5) проверь сумму масс.", [
      ["Al + Fe, 11,0 г. С HCl → 8,96 л H2, со щёлочью → 6,72 л H2 (н.у.). Найди массы металлов.", ["Со щёлочью реагирует только Al: 2Al + 2NaOH + 6H2O = 2Na[Al(OH)4] + 3H2.", "n(H2) = 6,72/22,4 = 0,3 моль → n(Al) = 0,3·2/3 = 0,2 моль → m(Al) = 5,4 г.", "С HCl: Al даёт 0,3 моль H2, всего 8,96/22,4 = 0,4 → Fe даёт 0,1 моль (Fe + 2HCl = FeCl2 + H2).", "n(Fe) = 0,1 → m = 5,6 г. Проверка: 5,4 + 5,6 = 11,0 ✓", "Ответ: Al 5,4 г (49,1 %), Fe 5,6 г."]],
      ["18,75 г Cu(NO3)2 прокалили, газы целиком поглотили 200 г воды. Найди ω(HNO3).", ["2Cu(NO3)2 = 2CuO + 4NO2 + O2. n(Cu(NO3)2) = 18,75/187,5 = 0,1 моль.", "n(NO2) = 0,2; n(O2) = 0,05 (по коэффициентам 2 : 4 : 1).", "4NO2 + O2 + 2H2O = 4HNO3: соотношение 0,2 : 0,05 = 4 : 1 — без избытка. n(HNO3) = 0,2 → m = 12,6 г.", "m(р-ра) = 200 + 0,2·46 + 0,05·32 = 210,8 г (газы целиком ушли в раствор).", "Ответ: ω = 12,6/210,8 ≈ 5,98 %."]],
      ["6,72 л Cl2 пропустили через горячий р-р KOH. Сколько KClO3, KCl и 20 % KOH нужно?", ["3Cl2 + 6KOH = 5KCl + KClO3 + 3H2O (горячий р-р → хлорат). n(Cl2) = 0,3 моль.", "Множитель: 0,3/3 = 0,1. n(KClO3) = 0,1; n(KCl) = 0,5; n(KOH) = 0,6.", "m(KClO3) = 12,25 г; m(KCl) = 37,25 г; m(KOH) = 33,6 г → р-ра 33,6/0,2 = 168 г.", "Лайфхак: нашёл «множитель» = n/коэффициент, дальше всё умножением."]]
    ]],
    ["🧬 Органика", "Алгоритм: 1) n(CO2) → C, n(H2O)·2 → H; 2) делим на n(в-ва) → формула; 3) M = D·M(газа); 4) выбирай изомер по реакции; 5) выход: m(практ) = η·m(теор).", [
      ["Углеводород, D(H2) = 21. Из 4,2 г получили 13,2 г CO2 и 5,4 г H2O. Формула? Сколько 5 % бромной воды нужно?", ["M = 21·2 = 42; n(УВ) = 4,2/42 = 0,1 моль.", "n(CO2) = 13,2/44 = 0,3 → C: 0,3/0,1 = 3. n(H2O) = 0,3 → n(H) = 0,6 → H: 6. C3H6.", "Обесцвечивает бромную воду → пропен: C3H6 + Br2 = C3H6Br2.", "n(Br2) = 0,1 → 16 г → 16/0,05 = 320 г.", "Ответ: C3H6 (пропен), 320 г бромной воды."]],
      ["6,0 г насыщенного одноатомного спирта + Na → 1,12 л H2. Спирт даёт «зеркало». Формула, масса Ag при выходе 80 %.", ["2ROH + 2Na = 2RONa + H2. n(H2) = 0,05 → n(ROH) = 0,1 моль.", "M = 6,0/0,1 = 60 → CnH2n+2O: 14n + 18 = 60 → n = 3. C3H8O.", "«Зеркало» даёт альдегид → спирт первичный: пропанол-1 (пропанол-2 даёт кетон, без зеркала).", "RCHO + 2[Ag(NH3)2]OH → RCOONH4 + 2Ag: n(Ag) теор = 0,2 моль = 21,6 г.", "Ответ: C3H7OH; m(Ag) = 21,6·0,8 = 17,28 г."]],
      ["6,4 г CaC2 → C2H2 → бензол (выход тримеризации 80 %). Масса бензола?", ["CaC2 + 2H2O = C2H2 + Ca(OH)2. n(CaC2) = 6,4/64 = 0,1 моль = n(C2H2).", "3C2H2 → C6H6 (C акт, 600 °C): n(C6H6) теор = 0,1/3 = 0,0333 моль.", "С учётом выхода: 0,0333·0,8 = 0,02667 моль.", "Ответ: m = 0,02667·78 = 2,08 г."]]
    ]],
    ["⚗️ Физхимия", "Алгоритм: равновесие — таблица «было / прореагировало / стало»; термохимия — продукты минус реагенты; электролиз — через n(e) = It/F; pH — сначала моли H⁺ и OH⁻, потом разность.", [
      ["N2 + 3H2 ⇌ 2NH3, сосуд 2 л. Было 2 моль N2 и 6 моль H2, к равновесию 2 моль NH3. Kc, выход, p2/p1.", ["Таблица (моль): NH3 +2 → N2 −1, H2 −3. Стало: N2 1; H2 3; NH3 2.", "Концентрации (÷2 л): 0,5; 1,5; 1,0.", "Kc = [NH3]² / ([N2][H2]³) = 1/(0,5·3,375) ≈ 0,593.", "Выход по N2: 1/2 = 50 %. Всего моль: 8 → 6, при T, V = const p2/p1 = 6/8 = 0,75."]],
      ["ΔHобр: C2H4 +52, CO2 −394, H2O(ж) −286 кДж/моль. Тепло при сгорании 5,6 л C2H4 (н.у.).", ["C2H4 + 3O2 = 2CO2 + 2H2O.", "ΔH = [2·(−394) + 2·(−286)] − 52 = −1412 кДж/моль (простые вещества = 0).", "n = 5,6/22,4 = 0,25 моль.", "Ответ: Q = 0,25·1412 = 353 кДж."]],
      ["Электролиз CuSO4 (инертные электроды), I = 4,825 А, t = 2000 с. Масса Cu, объём O2, сколько H⁺?", ["Q = It = 9650 Кл; n(e) = 9650/96500 = 0,1 моль.", "Катод: Cu²⁺ + 2e = Cu → n(Cu) = 0,05 → 3,2 г.", "Анод: 2H2O − 4e = O2 + 4H⁺ → n(O2) = 0,025 → 0,56 л; n(H⁺) = 0,1 моль.", "Проверка: электронов отдали = приняли = 0,1 ✓"]],
      ["Смешали 100 мл HCl с pH = 1 и 150 мл 0,1 М NaOH. Найди pH.", ["[H⁺] = 0,1 → n(H⁺) = 0,1·0,1 = 0,01 моль. n(OH⁻) = 0,15·0,1 = 0,015 моль.", "Избыток щёлочи: 0,005 моль в 0,25 л → [OH⁻] = 0,02 М.", "pOH = −lg0,02 = 1,7; pH = 14 − 1,7 = 12,3.", "Ловушка: объёмы складываем, и считаем ИЗБЫТОК, а не каждый по отдельности."]]
    ]]
  ];
  var host = document.getElementById("tb4"), v = document.createElement("div"), cur = 0, boxes = [];
  var b = document.createElement("button"); b.className = "tab"; b.id = "tb7"; b.textContent = "🎯 Задачи"; b.onclick = function () { tab(7); };
  host.parentNode.appendChild(b); host.parentNode.style.flexWrap = "wrap";
  Array.prototype.forEach.call(host.parentNode.children, function (e) { e.style.flex = "1 0 23%"; });
  v.id = "v7"; v.style.display = "none";
  var pr = mkCard(["📐 Пропорции без боли (тапни)", "1) Всё переведи в МОЛИ: n = m/M = V/22,4 = C·V.\n2) Над формулой пиши n, под — коэффициент.\n3) n(A)/коэфф(A) = n(B)/коэфф(B) — одно число («множитель»), потом умножай.\n4) Из молей в нужное: m = n·M, V = n·22,4, ω = m(в-ва)/m(р-ра).\n5) Крест: a/b = c/x → x = b·c/a.\n6) Проверка: ω < 100 %, сумма масс сходится, порядок величины разумный.\nГлавное: НИКОГДА не делай пропорцию в граммах, пока не переведёшь в моли."]);
  pr.lastChild.style.whiteSpace = "pre-line"; v.appendChild(pr);
  var tabs = document.createElement("div"); tabs.className = "row"; v.appendChild(tabs);
  var al = document.createElement("div"); al.className = "quote"; al.style.margin = "6px 0"; v.appendChild(al);
  SEC.forEach(function (s, si) {
    var t = document.createElement("button"); t.className = "sub-tab" + (si ? "" : " active"); t.textContent = s[0];
    t.onclick = function () { show(si); }; tabs.appendChild(t);
    var bx = document.createElement("div"); bx.style.display = si ? "none" : "block"; boxes.push(bx);
    s[2].forEach(function (k, ki) {
      var c = document.createElement("div"); c.className = "kb";
      var h = document.createElement("b"); h.textContent = "№" + (ki + 1) + ". " + k[0];
      var body = document.createElement("div"), box = document.createElement("div"), nx = document.createElement("button"), i = 0;
      body.style.display = "none"; box.style.cssText = "white-space:pre-line;color:#a7f3d0";
      nx.className = "t-btn"; nx.style.cssText = "margin-top:6px;width:100%;flex:none"; nx.textContent = "▶ Подсказка / шаг 1";
      nx.onclick = function () {
        box.textContent += (i ? "\n" : "") + (i + 1) + ") " + k[1][i]; i++; vib(10);
        if (i >= k[1].length) { nx.style.display = "none"; addXP(5); } else nx.textContent = "▶ Следующий шаг (" + (i + 1) + "/" + k[1].length + ")";
      };
      h.onclick = function () { body.style.display = body.style.display === "none" ? "block" : "none"; };
      body.appendChild(box); body.appendChild(nx); c.appendChild(h); c.appendChild(body); bx.appendChild(c);
    });
    v.appendChild(bx);
  });
  function show(n) { cur = n; boxes.forEach(function (x, i) { x.style.display = i === n ? "block" : "none"; tabs.children[i].className = "sub-tab" + (i === n ? " active" : ""); }); al.textContent = SEC[n][1]; }
  show(0);
  document.getElementById("v4").parentNode.insertBefore(v, document.getElementById("v3"));
  var _t = tab;
  tab = function (n) { _t(n); v.style.display = n === 7 ? "block" : "none"; b.className = "tab" + (n === 7 ? " active" : ""); if (n === 7) for (var i = 0; i < 7; i++) { var e = document.getElementById("v" + i), g = document.getElementById("tb" + i); if (e) e.style.display = "none"; if (g) g.className = "tab"; } };
})();
