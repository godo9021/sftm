/* js8: вкладка "Справ." — поиск по справочнику + таблица растворимости */
(function () {
  var N = "Сурик|Pb3O4|оранжевый; + CH3COOH → Pb(Ac)4 + 2Pb(Ac)2;Пиролюзит|MnO2|+ HCl конц → Cl2; катализатор разложения H2O2;Поташ|K2CO3|;Кальцинированная сода|Na2CO3|;Питьевая сода|NaHCO3|при t → Na2CO3 + CO2 + H2O;Едкий натр, каустик|NaOH|;Едкое кали|KOH|;Негашёная известь|CaO|+ H2O → Ca(OH)2;Гашёная известь|Ca(OH)2|известковая вода — её раствор;Мел, мрамор, известняк|CaCO3|t → CaO + CO2;Гипс|CaSO4·2H2O|алебастр — 2CaSO4·H2O;Медный купорос|CuSO4·5H2O|голубой; безводный — белый;Железный купорос|FeSO4·7H2O|светло-зелёный;Глауберова соль|Na2SO4·10H2O|;Горькая соль|MgSO4·7H2O|;Бура|Na2B4O7·10H2O|;Нашатырь|NH4Cl|с щёлочью → NH3;Аммиачная селитра|NH4NO3|t → N2O + 2H2O;Калийная селитра|KNO3|t → KNO2 + O2;Сулема|HgCl2|;Каломель|Hg2Cl2|;Пирит|FeS2|;Малахит|(CuOH)2CO3|зелёный;Магнетит|Fe3O4|железная окалина;Гематит|Fe2O3|красно-бурый;Галенит|PbS|чёрный;Киноварь|HgS|красный;Корунд|Al2O3|;Кварц, кремнезём|SiO2|+ HF → SiF4/H2[SiF6];Карборунд|SiC|;Веселящий газ|N2O|;Царская водка|HNO3 + 3HCl|растворяет Au, Pt;Хлорная известь|CaOCl2|;Бертолетова соль|KClO3|t, MnO2 → KCl + O2;Жавелевая вода|NaClO + NaCl|Cl2 + NaOH на холоде;Хромпик|K2Cr2O7|оранжевый, окислитель;Жёлтая кровяная соль|K4[Fe(CN)6]|+ Fe³⁺ → берлинская лазурь;Красная кровяная соль|K3[Fe(CN)6]|+ Fe²⁺ → турнбулева синь;Ляпис|AgNO3|;Криолит|Na3[AlF6]|;Плавиковый шпат|CaF2|;Тяжёлый шпат|BaSO4|;Квасцы|KAl(SO4)2·12H2O|;Фосфин|PH3|самовоспламеняется, запах чеснока";
  var D = [];
  N.split(";").forEach(function (s) { var p = s.split("|"); D.push(["Названия", p[0] + " = " + p[1], p[2]]); });
  var X = [
    ["Цвета", "Зелёный раствор", "Cr³⁺ (CrCl3), Ni²⁺, MnO4²⁻ (манганат), Fe²⁺ (бледно), [Cr(OH)4]⁻, Cu²⁺ в конц. HCl"],
    ["Цвета", "Голубой / синий раствор", "Cu²⁺ (aq) голубой; [Cu(NH3)4]²⁺ тёмно-синий"],
    ["Цвета", "Жёлтый / оранжевый раствор", "CrO4²⁻ жёлтый; Cr2O7²⁻ оранжевый; Fe³⁺ жёлто-бурый; Br2 водн. жёлто-оранж.; I2 водн. бурый"],
    ["Цвета", "Фиолетовый / малиновый раствор", "MnO4⁻ фиолетовый; [Cr(H2O)6]³⁺ серо-фиолетовый; FeO4²⁻ тёмно-малиновый"],
    ["Цвета", "Розовый раствор", "Co²⁺ (aq) розовый (безводный CoCl2 синий); Mn²⁺ бледно-розовый"],
    ["Цвета", "Бурый осадок", "Fe(OH)3, MnO2, Ag2O (тёмно-бурый), MnO(OH)2"],
    ["Цвета", "Жёлтый осадок", "AgI, Ag3PO4, PbI2, BaCrO4, PbCrO4, сера S, CHI3 (иодоформ)"],
    ["Цвета", "Чёрный осадок", "CuS, Ag2S, PbS, FeS, NiS, CoS, CuO"],
    ["Цвета", "Белый осадок", "AgCl (творожистый), BaSO4, CaCO3, Zn(OH)2, Al(OH)3, PbCl2, Mg(OH)2, Fe(OH)2 (на воздухе бурее)"],
    ["Цвета", "Зелёный / серо-зелёный осадок", "Cr(OH)3 серо-зелёный, Ni(OH)2 зелёный, (CuOH)2CO3 зелёный"],
    ["Цвета", "Синий / голубой осадок", "Cu(OH)2 голубой; Co(OH)2 синий; Fe²⁺ + K3[Fe(CN)6] — турнбулева синь; Fe³⁺ + K4[Fe(CN)6] — берлинская лазурь"],
    ["Цвета", "Красный / кирпичный осадок", "Cu2O (кирпично-красный); Fe2O3 красно-бурый; Fe³⁺ + SCN⁻ — кроваво-красный раствор"],
    ["Цвета", "Окраска пламени", "Li — карминово-красный; Na — жёлтый; K — фиолетовый; Ca — кирпично-красный; Sr — карминово-красный; Ba — жёлто-зелёный; Cu — зелёный; эфиры борной кислоты — зелёный"],
    ["Цвета", "Газы: цвет и запах", "Cl2 жёлто-зелёный; NO2 бурый (NO на воздухе → NO2); H2S тухлые яйца; NH3 резкий, синит лакмус; SO2 резкий; PH3 чеснок; CO без запаха, горит синим; I2 пары фиолетовые"],
    ["Триггеры", "Осадок растворился в избытке щёлочи", "Амфотерный: Al, Zn, Cr(III), Be, Pb, Sn → гидроксокомплексы [M(OH)4]⁻"],
    ["Триггеры", "Осадок растворился в избытке NH3", "Аммиакаты: Cu²⁺, Ag⁺ (AgCl), Zn²⁺, Ni²⁺, Co²⁺. Al и Fe — не растворяются"],
    ["Триггеры", "Белый осадок чернеет на свету", "AgCl, AgBr, AgI → разложение до Ag"],
    ["Триггеры", "Газ и осадок при смешивании двух солей", "Совместный гидролиз: Al³⁺, Cr³⁺, Fe³⁺ + CO3²⁻, S²⁻, SO3²⁻ → гидроксид ↓ + CO2/H2S/SO2 ↑"],
    ["Триггеры", "Раствор мутнеет с кислотой, запах SO2", "Тиосульфат: S2O3²⁻ + 2H⁺ → S↓ + SO2 + H2O"],
    ["Триггеры", "Синеет с крахмалом", "Свободный I2 (напр. 2I⁻ + Cl2, Cu²⁺ + I⁻, Fe³⁺ + I⁻)"],
    ["Триггеры", "Нагрели соль — выделился газ, остался оксид", "Разложение нитратов (Mg…Cu), карбонатов, гидроксидов; NH4⁺-соли → NH3 или ОВР (NH4NO2, (NH4)2Cr2O7)"],
    ["Триггеры", "Дана массовая доля элементов", "ν = ω/Ar → делим на меньшее → целые индексы (простейшая формула; потом M)"],
    ["ОВР", "Метод", "1) с.о. у меняющихся; 2) ē отдано = принято; 3) НОК; 4) остальные атомы; 5) проверь O. Среда определяет продукт."],
    ["ОВР", "KMnO4 (по среде)", "H⁺ → Mn²⁺ (бесцветный); H2O/нейтр. → MnO2↓ бурый; OH⁻ → MnO4²⁻ зелёный"],
    ["ОВР", "K2Cr2O7 / соединения хрома", "H⁺: Cr2O7²⁻ → Cr³⁺. В щёлочи Cr(III) → CrO4²⁻ (окислители Br2, H2O2, Cl2). CrO4²⁻ ⇄ Cr2O7²⁻ (H⁺ ← → OH⁻)"],
    ["ОВР", "HNO3", "Конц → NO2; разб → NO (активные металлы — N2O, N2); очень разб + Zn/Mg/Al → NH4NO3. Пассивирует Fe, Al, Cr на холоде"],
    ["ОВР", "H2SO4 конц.", "Малоактивные (Cu, Ag) → SO2; активные (Zn, Mg) → S, H2S. Пассивирует Fe, Al, Cr. Разбавленная — кислота-неокислитель (даёт H2)"],
    ["ОВР", "H2O2", "Окислитель (→ H2O): I⁻→I2, Fe²⁺→Fe³⁺, Cr(III)→CrO4²⁻ в щёлочи. Восстановитель (→ O2): с KMnO4, PbO2, Cl2"],
    ["ОВР", "Типичные восстановители", "H2S → S; SO2, SO3²⁻ → SO4²⁻; I⁻ → I2; Fe²⁺ → Fe³⁺; NH3 → N2; HCl конц → Cl2 (с KMnO4, MnO2, PbO2); Mn²⁺ → MnO4⁻ (PbO2, NaBiO3, H⁺)"],
    ["ОВР", "Диспропорционирование", "Cl2/Br2/I2 + щёлочь (холод → ClO⁻; t → ClO3⁻); NO2 + H2O; P4 + NaOH → PH3 + NaH2PO2; S + щёлочь; Cu⁺ → Cu + Cu²⁺"],
    ["ОВР", "Сопропорционирование", "SO2 + 2H2S → 3S + 2H2O; NH4NO2 → N2 + 2H2O; 5I⁻ + IO3⁻ + 6H⁺ → 3I2 + 3H2O"],
    ["Орг", "KMnO4 в органике", "Холодный р-р → диол (алкен); H⁺, t → разрыв C=C; боковая цепь аренов → COOH; спирты, альдегиды окисляются"],
    ["Орг", "SOCl2, PCl5", "ROH → RCl (замещение спиртовой OH на галоген)"],
    ["Орг", "NaBH4 и LiAlH4", "NaBH4: альдегид/кетон → спирт. LiAlH4 сильнее: ещё кислоты и эфиры → спирты"],
    ["Орг", "Pd/CaCO3, Pb(OAc)2 (Линдлар)", "Алкин + H2 → цис-алкен (остановка на алкене)"],
    ["Орг", "HgSO4, H2SO4, H2O (Кучеров)", "Алкин → карбонил: ацетилен → CH3CHO, остальные → кетоны"],
    ["Орг", "I2 + NaOH (иодоформная)", "CH3–C(O)–R → CHI3 (жёлтый осадок) + RCOONa. Только в щёлочи"],
    ["Орг", "Ag(NH3)2OH / Cu(OH)2 свежий", "Качественные на альдегиды: «серебряное зеркало» Ag / красный Cu2O. Многоатомные спирты + Cu(OH)2 → ярко-синий"],
    ["Орг", "Реактив Гриньяра RMgBr", "Получение: R–Br + Mg (эфир). + карбонил → спирт; + CO2 → RCOOH; + H2O → R–H"],
    ["Орг", "KOH водный и спиртовой", "Водный → замещение (получаем спирт). Спиртовой → отщепление HHal (алкен, правило Зайцева)"],
    ["Орг", "Правила", "Марковников: H к более гидрированному C. Зайцев: образуется более замещённый алкен. o/p-ориентанты: OH, NH2, алкил, Hal; m-ориентанты: NO2, COOH, CHO"],
    ["Орг", "Получение алканов", "Вюрц 2RBr + 2Na → R–R; Дюма RCOONa + NaOH (сплав) → R–H; Кольбе (электролиз RCOONa) → R–R; Al4C3 + H2O → CH4"],
    ["Орг", "Получение алкинов и аренов", "CaC2 + H2O → C2H2; 2CH4 (1500 °C) → C2H2; 3C2H2 (C акт, 600 °C) → бензол; 3 ацетона (H2SO4) → мезитилен"]
  ];
  D = X.concat(D); window.REF = D;
  var CA = [["Li⁺", "PPPPPPPMPNPP"], ["Na⁺", "PPPPPPPPPPPP"], ["K⁺", "PPPPPPPPPPPP"], ["NH₄⁺", "PPPPDPPPPPPP"], ["Mg²⁺", "NPPPDMPMNNPP"], ["Ca²⁺", "MPPPDMMNNNPP"], ["Sr²⁺", "PPPPDNNNNNPP"], ["Ba²⁺", "PPPPPNNNNNPP"], ["Al³⁺", "NPPPDDPDDNPP"], ["Cr³⁺", "NPPPDDPDDNPP"], ["Mn²⁺", "NPPPNNPNNNPP"], ["Fe²⁺", "NPPPNNPNNNPP"], ["Fe³⁺", "NPPDDDPDDNPP"], ["Co²⁺", "NPPPNNPNNNPP"], ["Ni²⁺", "NPPPNNPNNNPP"], ["Cu²⁺", "NPPDNNPNNNPP"], ["Zn²⁺", "NPPPNNPNNNPP"], ["Ag⁺", "DNNNNNMNNNPM"], ["Pb²⁺", "NMMNNNNNNNPP"]];
  var AN = ["OH⁻", "Cl⁻", "Br⁻", "I⁻", "S²⁻", "SO₃²⁻", "SO₄²⁻", "CO₃²⁻", "SiO₃²⁻", "PO₄³⁻", "NO₃⁻", "CH₃COO⁻"];
  var NT = { "17,1": "белый творожистый; р. в NH3(р-р); темнеет на свету", "17,2": "бледно-жёлтый", "17,3": "жёлтый", "17,4": "чёрный", "17,9": "жёлтый", "17,0": "Ag2O тёмно-бурый", "18,1": "белый; р. в горячей воде", "18,3": "золотисто-жёлтый", "18,4": "чёрный", "18,6": "белый", "15,0": "голубой; t → CuO чёрный; р. в избытке NH3 (тёмно-синий)", "15,4": "чёрный", "15,3": "ОВР: 2Cu²⁺ + 4I⁻ → 2CuI↓ (белый) + I2", "15,7": "основный (CuOH)2CO3, зелёный", "11,0": "белый → зеленоватый → бурый Fe(OH)3 на воздухе", "11,4": "чёрный", "12,0": "бурый", "12,3": "ОВР: 2Fe³⁺ + 2I⁻ → 2Fe²⁺ + I2", "12,4": "2Fe³⁺ + 3S²⁻ → 2FeS + S (ОВР)", "12,7": "совместный гидролиз → Fe(OH)3 + CO2", "8,0": "амфотерный; р. в избытке щёлочи [Al(OH)4]⁻", "8,4": "совместный гидролиз → Al(OH)3 + H2S", "8,7": "совместный гидролиз → Al(OH)3 + CO2", "16,0": "белый, амфотерный; р. в NH3 и в избытке щёлочи", "16,4": "белый", "9,0": "серо-зелёный, амфотерный", "10,0": "белый → бурый на воздухе", "10,4": "телесный", "13,0": "синий → розовый", "14,0": "зелёный", "14,4": "чёрный", "7,6": "белый; НЕ р. в кислотах (кач. на SO₄²⁻)", "7,5": "белый; р. в HCl", "7,7": "белый; р. в кислотах", "5,7": "р. в CO2 + H2O → Ca(HCO3)2", "5,6": "малорастворим (гипс)", "0,7": "Li — исключение среди щелочных", "0,9": "Li — исключение среди щелочных", "3,0": "NH3·H2O (р-р аммиака)" };
  var host = document.getElementById("tb4"), v = document.createElement("div");
  var b = document.createElement("button"); b.className = "tab"; b.id = "tb8"; b.textContent = "📚 Справ."; b.onclick = function () { tab(8); };
  host.parentNode.appendChild(b); b.style.flex = "1 0 23%";
  v.id = "v8"; v.style.display = "none";
  var nav = document.createElement("div"); nav.className = "row"; v.appendChild(nav);
  var p1 = document.createElement("div"), p2 = document.createElement("div"); p2.style.display = "none";
  ["🔎 Справочник", "🧊 Растворимость"].forEach(function (n, i) { var t = document.createElement("button"); t.className = "sub-tab" + (i ? "" : " active"); t.textContent = n; t.onclick = function () { p1.style.display = i ? "none" : "block"; p2.style.display = i ? "block" : "none"; nav.children[0].className = "sub-tab" + (i ? "" : " active"); nav.children[1].className = "sub-tab" + (i ? " active" : ""); }; nav.appendChild(t); });
  v.appendChild(p1); v.appendChild(p2);
  var q = document.createElement("input"); q.placeholder = "Поиск: сурик, зелёный осадок, KMnO4, Кучеров…"; q.style.cssText = "width:100%;margin:6px 0"; q.autocomplete = "off";
  var chips = document.createElement("div"); chips.className = "row"; chips.style.flexWrap = "wrap";
  var res = document.createElement("div"), cat = "Все";
  p1.appendChild(q); p1.appendChild(chips); p1.appendChild(res);
  function draw() {
    var w = q.value.toLowerCase().split(/\s+/).filter(Boolean), n = 0; res.innerHTML = "";
    D.forEach(function (d) {
      if (n >= 60 || (cat !== "Все" && d[0] !== cat)) return;
      var s = (d[1] + " " + d[2] + " " + d[0]).toLowerCase();
      if (!w.every(function (x) { return s.indexOf(x) >= 0; })) return;
      n++; var c = document.createElement("div"); c.className = "kb"; var h = document.createElement("b"); h.textContent = d[1]; var t = document.createElement("div"); t.textContent = d[2]; t.style.cssText = "white-space:pre-line;color:#a7f3d0;font-size:12px;margin-top:3px"; c.appendChild(h); c.appendChild(t); res.appendChild(c);
    });
    if (!n) res.textContent = "Ничего не найдено.";
  }
  ["Все", "Названия", "Цвета", "Триггеры", "ОВР", "Орг", "Неорг", "Физ"].forEach(function (k) { var t = document.createElement("button"); t.className = "sub-tab" + (k === "Все" ? " active" : ""); t.textContent = k; t.style.cssText = "flex:none;padding:5px 9px;font-size:11px"; t.onclick = function () { cat = k; Array.prototype.forEach.call(chips.children, function (e) { e.className = "sub-tab" + (e === t ? " active" : ""); }); draw(); }; chips.appendChild(t); });
  q.oninput = draw; draw(); window.refDraw = draw;
  var wrap = document.createElement("div"); wrap.style.cssText = "overflow-x:auto;margin:6px 0"; var tb = document.createElement("table"); tb.style.cssText = "border-collapse:collapse;font-size:11px;color:#ecfdf5";
  var info = document.createElement("div"); info.style.cssText = "min-height:48px;padding:8px;background:#060d0b;border-radius:6px;font-size:13px;color:#a7f3d0;margin-top:6px"; info.textContent = "Тапни по клетке таблицы.";
  var CL = { P: "#10b981", M: "#f59e0b", N: "#ef4444", D: "#64748b" }, WD = { P: "растворим", M: "малорастворим", N: "нерастворим", D: "разлагается водой / не существует" };
  var hr = document.createElement("tr"); hr.appendChild(document.createElement("th")); AN.forEach(function (a) { var th = document.createElement("th"); th.textContent = a; th.style.cssText = "padding:3px;font-weight:600"; hr.appendChild(th); }); tb.appendChild(hr);
  CA.forEach(function (c, ci) {
    var r = document.createElement("tr"), th = document.createElement("th"); th.textContent = c[0]; th.style.cssText = "padding:3px 6px;text-align:left"; r.appendChild(th);
    c[1].split("").forEach(function (s, ai) {
      var td = document.createElement("td"); td.textContent = s === "D" ? "—" : s === "P" ? "Р" : s === "M" ? "М" : "Н";
      td.style.cssText = "background:" + CL[s] + ";color:#06130f;text-align:center;font-weight:700;min-width:26px;height:24px;border:1px solid #0b1512";
      td.onclick = function () { info.textContent = c[0] + " + " + AN[ai] + ": " + WD[s] + (NT[ci + "," + ai] ? "\n" + NT[ci + "," + ai] : ""); info.style.whiteSpace = "pre-line"; };
      r.appendChild(td);
    }); tb.appendChild(r);
  });
  wrap.appendChild(tb); p2.appendChild(wrap); p2.appendChild(info);
  var lg = document.createElement("div"); lg.style.cssText = "font-size:11px;color:#6ee7b7;margin-top:6px"; lg.textContent = "Р — растворим · М — малорастворим · Н — нерастворим · — разлагается водой / не существует"; p2.appendChild(lg);
  document.getElementById("v4").parentNode.insertBefore(v, document.getElementById("v3"));
  var _t = tab;
  tab = function (n) { _t(n); v.style.display = n === 8 ? "block" : "none"; b.className = "tab" + (n === 8 ? " active" : ""); if (n === 8) for (var i = 0; i < 8; i++) { var e = document.getElementById("v" + i), g = document.getElementById("tb" + i); if (e) e.style.display = "none"; if (g) g.className = "tab"; } };
})();
