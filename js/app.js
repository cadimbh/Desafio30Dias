(function () {
  "use strict";

  var CONFIG = window.LANDING_CONFIG || {};
  var STORAGE_KEY = "almoco-surpresa-caixa-v1";
  var IMAGE_ROOT = "assets/food/generated/";

  var meals = [
    [1, "Arroz cremoso de frango e milho", "15 min", "Muito fácil", "Arroz, frango, milho, requeijão e cenoura.", "dia_01_arroz_cremoso_frango_milho.png"],
    [2, "Macarrão de panela com carne e legumes", "25 min", "Fácil", "Massa, carne moída, abobrinha e molho de tomate.", "dia_02_macarrao_carne_legumes.png"],
    [3, "Bolinho de arroz com salada crocante", "20 min", "Fácil", "Arroz, ovo, farinha, cheiro-verde e salada.", "dia_03_bolinho_arroz_salada.png"],
    [4, "Escondidinho rápido de carne e mandioca", "45 min", "Fácil", "Carne moída, mandioca, tomate e queijo.", "dia_04_escondidinho_mandioca.png"],
    [5, "Omelete de forno com arroz e feijão", "35 min", "Muito fácil", "Ovos, tomate, cebola, queijo, arroz e feijão.", "dia_05_omelete_forno_arroz_feijao.png"],
    [6, "Caldo de feijão com couve e torradinhas", "20 min", "Muito fácil", "Feijão, couve, alho e pão tostado.", "dia_06_caldo_feijao_couve.png"],
    [7, "Frango xadrez simplificado", "20 min", "Fácil", "Frango, pimentão, cenoura, cebola e arroz.", "dia_07_frango_xadrez.png"],
    [8, "Cuscuz recheado com ovos mexidos", "25 min", "Muito fácil", "Flocão, ovos, tomate e queijo.", "dia_08_cuscuz_ovos.png"],
    [9, "Nhoque de frigideira ao molho de lentilha", "20 min", "Fácil", "Nhoque, lentilha, molho de tomate e cebola.", "dia_09_nhoque_lentilha.png"],
    [10, "Torta de liquidificador de atum", "40 min", "Fácil", "Atum, ovo, leite, farinha e tomate.", "dia_10_torta_atum.png"],
    [11, "Picadinho de carne com abóbora", "30 min", "Fácil", "Carne em cubos, abóbora, cebola e arroz.", "dia_11_picadinho_abobora.png"],
    [12, "Wrap de feijão temperado e salada", "15 min", "Muito fácil", "Tortilla, feijão, tomate, alface e iogurte.", "dia_12_wrap_feijao.png"],
    [13, "Purê de abóbora com frango desfiado", "25 min", "Muito fácil", "Abóbora, frango, milho e arroz.", "dia_13_pure_abobora_frango.png"],
    [14, "Panqueca de frango e espinafre", "30 min", "Fácil", "Ovo, leite, farinha, frango e espinafre.", "dia_14_panqueca_frango_espinafre.png"],
    [15, "Arroz de forno com legumes e queijo", "35 min", "Muito fácil", "Arroz, cenoura, ervilha, queijo e ovos.", "dia_15_arroz_forno_legumes.png"],
    [16, "Strogonoff econômico de frango", "20 min", "Muito fácil", "Frango, creme de leite, molho e arroz.", "dia_16_strogonoff_frango.png"],
    [17, "Arroz biro-biro de geladeira", "15 min", "Muito fácil", "Arroz, ovos, cenoura, milho e cheiro-verde.", "dia_17_arroz_biro_biro.png"],
    [18, "Feijão tropeiro leve com banana", "20 min", "Fácil", "Feijão, ovos, couve, banana e farinha.", "dia_18_feijao_tropeiro.png"],
    [19, "Polenta cremosa com molho de carne", "30 min", "Fácil", "Fubá, carne moída, molho e queijo.", "dia_19_polenta_carne.png"],
    [20, "Pizza de pão com legumes", "15 min", "Muito fácil", "Pão, molho, tomate, cebola e queijo.", "dia_20_pizza_pao_legumes.png"],
    [21, "Arroz com linguiça e repolho", "20 min", "Muito fácil", "Linguiça, arroz, repolho e cenoura.", "dia_21_arroz_linguica_repolho.png"],
    [22, "Macarrão alho e óleo com brócolis e ovo", "20 min", "Muito fácil", "Massa, brócolis, ovos e alho.", "dia_22_macarrao_brocolis_ovo.png"],
    [23, "Hambúrguer caseiro no prato", "40 min", "Fácil", "Carne moída, batata assada, alface e tomate.", "dia_23_hamburguer_prato.png"],
    [24, "Lentilha com legumes e arroz", "30 min", "Muito fácil", "Lentilha, cenoura, abobrinha e arroz.", "dia_24_lentilha_legumes_arroz.png"],
    [25, "Salpicão morno de frango", "25 min", "Muito fácil", "Frango, cenoura, milho, batata e iogurte.", "dia_25_salpicao_frango.png"],
    [26, "Cuscuz de sardinha e tomate", "25 min", "Muito fácil", "Flocão, sardinha, tomate, cebola e milho.", "dia_26_cuscuz_sardinha.png"],
    [27, "Fricassê de milho com arroz", "25 min", "Fácil", "Frango, milho, creme de leite, queijo e arroz.", "dia_27_fricasse_milho.png"],
    [28, "Batata recheada com carne e feijão", "20 min", "Muito fácil", "Batata, carne, feijão e queijo.", "dia_28_batata_carne_feijao.png"],
    [29, "Risoto de cenoura e queijo", "25 min", "Fácil", "Arroz, cenoura, queijo e cebola.", "dia_29_risoto_cenoura.png"],
    [30, "Mexidão final de semana", "15 min", "Muito fácil", "Arroz, feijão, ovos, legumes e farofa.", "dia_30_mexidao.png"]
  ].map(function (item) {
    return { day: item[0], title: item[1], time: item[2], level: item[3], preview: item[4], image: IMAGE_ROOT + item[5] };
  });

  var freeSample = Object.assign({}, meals[3], {
    image: "assets/food/featured/dia-04-escondidinho.webp",
    ingredients: "Para 2 pessoas: 1 xícara de carne moída pronta, 450 g de mandioca, 1 tomate e queijo. Para 4 pessoas, dobre as quantidades.",
    steps: [
      "Cozinhe a mandioca em água com sal por 20 a 25 minutos, até desmanchar ao garfo.",
      "Aqueça a carne com o tomate por 5 minutos.",
      "Escorra e amasse a mandioca ainda quente; ajuste o sal e a cremosidade.",
      "Monte as camadas, cubra com queijo e gratine por 12 a 15 minutos."
    ]
  });

  var grid = document.getElementById("mystery-grid");
  var reveal = document.getElementById("revelacao");
  var toast = document.getElementById("toast");
  var selectedDay = readSelection();
  var toastTimer;

  if (isLocalPreview() && new URLSearchParams(window.location.search).get("resetBoxes") === "1") {
    localStorage.removeItem(STORAGE_KEY);
    selectedDay = null;
  }

  buildGrid();
  applyConfig();
  configureCheckoutButtons();
  configureViewTracking();
  configureMobileCta();

  if (selectedDay) {
    lockGrid(selectedDay);
    showMeal(freeSample, false);
  }

  function buildGrid() {
    var fragment = document.createDocumentFragment();
    meals.forEach(function (meal) {
      var button = document.createElement("button");
      button.className = "mystery-box";
      button.type = "button";
      button.dataset.day = meal.day;
      button.setAttribute("aria-label", "Abrir caixinha " + String(meal.day).padStart(2, "0"));
      button.innerHTML = "<span class=\"box-number\">" + String(meal.day).padStart(2, "0") + "</span><span class=\"box-label\">SURPRESA</span>";
      button.addEventListener("click", onBoxClick);
      fragment.appendChild(button);
    });
    grid.appendChild(fragment);
  }

  function onBoxClick(event) {
    var day = Number(event.currentTarget.dataset.day);
    if (selectedDay) {
      if (day === selectedDay) {
        reveal.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.trackLandingEvent("LockedBoxClick", { box_number: day, opened_box: selectedDay });
        showToast("🔒 Sua escolha já foi feita. Desbloqueie o desafio para abrir as outras 29.");
        window.setTimeout(function () { document.getElementById("oferta").scrollIntoView({ behavior: "smooth" }); }, 850);
      }
      return;
    }

    selectedDay = day;
    saveSelection(day);
    window.trackLandingEvent("BoxSelected", { box_number: day });
    lockGrid(day);
    var selectedButton = event.currentTarget;
    selectedButton.setAttribute("aria-busy", "true");

    window.setTimeout(function () {
      selectedButton.removeAttribute("aria-busy");
      showMeal(freeSample, true);
      window.trackLandingEvent("MealRevealed", { box_number: day, meal_id: "free_sample_day_04" });
    }, prefersReducedMotion() ? 20 : 520);
  }

  function lockGrid(openDay) {
    grid.querySelectorAll(".mystery-box").forEach(function (button) {
      var day = Number(button.dataset.day);
      var isOpen = day === openDay;
      button.classList.toggle("is-open", isOpen);
      button.classList.toggle("is-locked", !isOpen);
      button.setAttribute("aria-label", isOpen ? "Caixinha " + day + " aberta" : "Caixinha " + day + " bloqueada");
    });
    document.getElementById("choice-counter").textContent = "1 de 1 aberta";
    document.getElementById("progress-fill").style.width = "100%";
    document.getElementById("box-hint").textContent = "Sua receita-amostra foi liberada. Os outros 29 dias fazem parte do desafio completo.";
  }

  function showMeal(meal, shouldScroll) {
    if (!meal) return;
    document.getElementById("reveal-day").textContent = "RECEITA GRÁTIS";
    document.getElementById("reveal-title").textContent = "Receita completa liberada!";
    document.getElementById("reveal-meal").textContent = meal.title;
    document.getElementById("reveal-time").textContent = meal.time;
    document.getElementById("reveal-level").textContent = meal.level;
    document.getElementById("reveal-ingredients").textContent = meal.ingredients;
    var stepsList = document.getElementById("reveal-steps");
    stepsList.innerHTML = "";
    meal.steps.forEach(function (step) {
      var item = document.createElement("li");
      item.textContent = step;
      stepsList.appendChild(item);
    });
    var image = document.getElementById("reveal-image");
    image.src = meal.image;
    image.alt = meal.title;
    updateCuriosityGallery(meal);
    reveal.hidden = false;
    updateMobileCtaAfterReveal();
    if (shouldScroll) window.setTimeout(function () { reveal.scrollIntoView({ behavior: "smooth", block: "start" }); }, 80);
  }

  function updateCuriosityGallery(meal) {
    var card = document.getElementById("featured-gallery-card");
    var image = document.getElementById("featured-gallery-image");
    card.classList.remove("is-pending");
    image.src = meal.image;
    image.alt = meal.title;
    document.getElementById("featured-gallery-day").textContent = "DIA " + String(meal.day).padStart(2, "0");
    document.getElementById("featured-gallery-title").textContent = meal.title;
  }

  function readSelection() {
    try {
      var value = Number(localStorage.getItem(STORAGE_KEY));
      return value >= 1 && value <= 30 ? value : null;
    } catch (error) {
      return null;
    }
  }

  function saveSelection(day) {
    try {
      localStorage.setItem(STORAGE_KEY, String(day));
    } catch (error) {
      // A experiência continua funcionando quando o arquivo é aberto diretamente
      // ou quando o navegador bloqueia o armazenamento local.
    }
  }

  function configureCheckoutButtons() {
    document.querySelectorAll("[data-checkout]").forEach(function (button) {
      button.addEventListener("click", function () {
        window.trackLandingEvent("CheckoutClick", {
          content_name: "Desafio 30 Dias - Almoço Surpresa",
          content_ids: ["desafio-30-dias"],
          currency: CONFIG.currency || "BRL",
          value: numericPrice(CONFIG.price)
        });

        if (!String(CONFIG.checkoutUrl || "").trim()) {
          showToast("O checkout está pronto para integração. Adicione sua URL da Cakto em js/config.js.");
          return;
        }
        window.location.href = withAttribution(CONFIG.checkoutUrl);
      });
    });
  }

  function withAttribution(url) {
    var target = new URL(url, window.location.href);
    var current = new URLSearchParams(window.location.search);
    ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid", "sck"].forEach(function (key) {
      if (current.has(key) && !target.searchParams.has(key)) target.searchParams.set(key, current.get(key));
    });
    return target.toString();
  }

  function applyConfig() {
    if (String(CONFIG.price || "").trim()) {
      document.querySelectorAll("[data-price-block]").forEach(function (el) { el.hidden = false; });
      document.querySelectorAll("[data-price]").forEach(function (el) { el.textContent = CONFIG.price; });
      document.querySelectorAll("[data-installments]").forEach(function (el) { el.textContent = CONFIG.installments || ""; });
    }
    if (Number(CONFIG.guaranteeDays) > 0) {
      document.querySelectorAll("[data-guarantee], [data-faq-guarantee]").forEach(function (el) { el.hidden = false; });
      document.querySelectorAll("[data-guarantee-days]").forEach(function (el) { el.textContent = CONFIG.guaranteeDays; });
    }
    if (String(CONFIG.producerName || "").trim()) {
      document.querySelectorAll("[data-producer]").forEach(function (el) { el.textContent = "© " + new Date().getFullYear() + " " + CONFIG.producerName; });
    }
    if (String(CONFIG.supportEmail || "").trim()) {
      document.querySelectorAll("[data-support-link]").forEach(function (el) { el.href = "mailto:" + CONFIG.supportEmail; });
      document.querySelectorAll("[data-support-text]").forEach(function (el) { el.textContent = CONFIG.supportEmail; });
    }
  }

  function configureViewTracking() {
    var offer = document.getElementById("oferta");
    if (!("IntersectionObserver" in window) || !offer) return;
    var fired = false;
    var observer = new IntersectionObserver(function (entries) {
      if (!fired && entries.some(function (entry) { return entry.isIntersecting; })) {
        fired = true;
        window.trackLandingEvent("ViewContent", {
          content_name: "Desafio 30 Dias - Almoço Surpresa",
          content_ids: ["desafio-30-dias"],
          content_type: "product",
          currency: CONFIG.currency || "BRL",
          value: numericPrice(CONFIG.price)
        }, { standard: true });
        observer.disconnect();
      }
    }, { threshold: .25 });
    observer.observe(offer);
  }

  function configureMobileCta() {
    var action = document.getElementById("mobile-cta-action");
    action.addEventListener("click", function (event) {
      if (!selectedDay) return;
      event.preventDefault();
      document.querySelector("#oferta [data-checkout]").click();
    });
  }

  function updateMobileCtaAfterReveal() {
    document.getElementById("mobile-cta-label").textContent = "29 almoços bloqueados";
    var action = document.getElementById("mobile-cta-action");
    action.textContent = "Desbloquear agora";
    action.href = "#oferta";
  }

  function showToast(message) {
    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add("is-visible");
    toastTimer = window.setTimeout(function () { toast.classList.remove("is-visible"); }, 3600);
  }

  function numericPrice(price) {
    var value = String(price || "").replace(/[^\d,.-]/g, "").replace(".", "").replace(",", ".");
    var number = Number(value);
    return Number.isFinite(number) ? number : 0;
  }

  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function isLocalPreview() {
    return ["localhost", "127.0.0.1"].indexOf(window.location.hostname) !== -1;
  }
})();
