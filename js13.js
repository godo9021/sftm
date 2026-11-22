/* js13: +57 тривиальных названий в игру "Названия" (формула ⇄ название), похожие неверные варианты */
(function () {
  var T = "Pb3O4|сурик;MnO2|пиролюзит;K2CO3|поташ;Na2CO3|кальцинированная сода;NaHCO3|питьевая сода;NaOH|едкий натр;KOH|едкое кали;CaO|негашёная известь;Ca(OH)2|гашёная известь;CaCO3|мел (известняк, мрамор);CaSO4·2H2O|гипс;2CaSO4·H2O|алебастр;CuSO4·5H2O|медный купорос;FeSO4·7H2O|железный купорос;Na2SO4·10H2O|глауберова соль;MgSO4·7H2O|горькая соль;Na2B4O7·10H2O|бура;NH4Cl|нашатырь;NH4NO3|аммиачная селитра;KNO3|калийная селитра;NaNO3|чилийская селитра;HgCl2|сулема;Hg2Cl2|каломель;FeS2|пирит;Cu2(OH)2CO3|малахит;Fe3O4|магнетит (железная окалина);Fe2O3|гематит;PbS|галенит;HgS|киноварь;Al2O3|корунд (глинозём);SiO2|кремнезём (кварц);SiC|карборунд;N2O|веселящий газ;CaOCl2|хлорная известь;KClO3|бертолетова соль;K2Cr2O7|хромпик;K4[Fe(CN)6]|жёлтая кровяная соль;K3[Fe(CN)6]|красная кровяная соль;AgNO3|ляпис (адский камень);Na3[AlF6]|криолит;CaF2|плавиковый шпат;BaSO4|тяжёлый шпат;KAl(SO4)2·12H2O|алюмокалиевые квасцы;CO|угарный газ;CO2|углекислый газ;H2O2|перекись водорода;NaCl|поваренная соль;CaC2|карбид кальция;HCl|соляная кислота;MgCO3|магнезит;FeCO3|сидерит;Na2SiO3|жидкое стекло;CH4|болотный газ;CH3OH|древесный спирт;C6H5OH|карболовая кислота;C6H12O6|виноградный сахар;C12H22O11|тростниковый сахар";
  T.split(";").forEach(function (p) { var q = p.split("|"); if (!FM.some(function (x) { return x[0] === q[0] && x[2] === "t"; })) FM.push([q[0], q[1], "t"]); });
  function els(f) { var m = f.match(/[A-Z][a-z]?/g) || [], o = []; m.forEach(function (x) { if (o.indexOf(x) < 0) o.push(x); }); return o; }
  function sim(a, b) {
    var ea = els(a[0]), eb = els(b[0]), sh = ea.filter(function (x) { return eb.indexOf(x) >= 0; }).length, un = ea.length + eb.length - sh,
      org = (/^C/.test(a[0]) && !/[a-z]/.test(a[0].charAt(1))) === (/^C/.test(b[0]) && !/[a-z]/.test(b[0].charAt(1))) ? 0.5 : 0,
      hyd = (a[0].indexOf("·") >= 0) === (b[0].indexOf("·") >= 0) ? 0.7 : 0,
      w = a[1].split(" ").filter(function (x) { return b[1].indexOf(x) >= 0; }).length;
    return 3 * sh / (un || 1) + (ea[0] === eb[0] ? 1.5 : 0) + org + hyd + 1.2 * w + Math.random() * 0.6;
  }
  window.qFm = function () {
    var triv = Math.random() < 0.5, p = FM.filter(function (x) { return (x[2] === "t") === triv; }), a = pickAny(p),
      rev = triv && Math.random() < 0.5, i = rev ? 0 : 1, r = [];
    p.filter(function (x) { return x[0] !== a[0] && x[1] !== a[1]; }).map(function (x) { return [sim(a, x), x[i]]; })
      .sort(function (u, w) { return w[0] - u[0]; }).forEach(function (s) { if (r.length < 3 && r.indexOf(s[1]) < 0 && s[1] !== a[i]) r.push(s[1]); });
    return mkq(rev ? "Формула вещества: «" + a[1] + "»" : (triv ? "Тривиальное название: " : "Название вещества: ") + a[0], a[i], r, a[0] + " — " + a[1]);
  };
})();
