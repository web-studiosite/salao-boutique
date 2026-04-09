/* ============================================
   Mira Beauty — Script Principal
   Lê todos os dados de dados.js
   ============================================ */

(function () {
    "use strict";

    // ── Estado ──
    var lang = "pt";
    var produtosVisiveis = 12;
    var PRODUTOS_POR_CARGA = 8;
    var modalItem = null;
    var modalSelectedOption = null;
    var modalSelectedColor = null;
    var modalSelectedSize = null;

    // ── Elementos ──
    var $ = function (sel) { return document.querySelector(sel); };
    var $$ = function (sel) { return document.querySelectorAll(sel); };

    // ── Inicialização ──
    document.addEventListener("DOMContentLoaded", function () {
        renderServicos();
        renderProdutos();
        renderPrecario();
        setupNav();
        setupModal();
        setupLang();
        setupReveal();
        checkDeepLink();
    });

    // ============================================
    // RENDERIZAÇÃO DOS SERVIÇOS
    // ============================================
    function renderServicos() {
        var grid = $("#servicesGrid");
        if (!grid) return;
        var html = "";
        SERVICOS.forEach(function (s) {
            html += '<div class="service-card reveal" data-type="servico" data-id="' + s.id + '">' +
                '<div class="service-icon">' + s.icon + '</div>' +
                '<h3 class="service-name">' + s["nome_" + lang] + '</h3>' +
                '<p class="service-price">' + s.preco + '</p>' +
                '<p class="service-desc">' + s["descricao_" + lang] + '</p>' +
                '</div>';
        });
        grid.innerHTML = html;
        // Reactivar reveals
        activateReveals();
    }

    // ============================================
    // RENDERIZAÇÃO DOS PRODUTOS
    // ============================================
    function renderProdutos() {
        var grid = $("#productsGrid");
        if (!grid) return;
        var visiveis = PRODUTOS.slice(0, produtosVisiveis);
        var html = "";
        visiveis.forEach(function (p) {
            var imgSrc = p.imagens && p.imagens[0] ? p.imagens[0] : "";
            var placeholder = imgSrc ? '<img src="' + imgSrc + '" alt="' + p["nome_" + lang] + '" onerror="this.parentNode.innerHTML=\'🛍️\'">' : "🛍️";
            html += '<div class="product-card" data-type="produto" data-id="' + p.id + '">' +
                '<div class="product-img">' + placeholder + '</div>' +
                '<div class="product-body">' +
                '<h3 class="product-name">' + p["nome_" + lang] + '</h3>' +
                '<p class="product-price">' + p.preco + '</p>' +
                '</div></div>';
        });
        grid.innerHTML = html;

        // Mostrar/esconder botão "Carregar mais"
        var wrap = $("#loadMoreWrap");
        if (wrap) {
            wrap.style.display = produtosVisiveis >= PRODUTOS.length ? "none" : "block";
        }
    }

    // Carregar mais produtos
    document.addEventListener("click", function (e) {
        if (e.target.id === "btnLoadMore" || e.target.closest("#btnLoadMore")) {
            produtosVisiveis = Math.min(produtosVisiveis + PRODUTOS_POR_CARGA, PRODUTOS.length);
            renderProdutos();
        }
    });

    // ============================================
    // RENDERIZAÇÃO DO PREÇÁRIO
    // ============================================
    function renderPrecario() {
        var grid = $("#pricingGrid");
        if (!grid) return;
        var html = "";
        PRECARIO.forEach(function (cat) {
            html += '<div class="pricing-category reveal">' +
                '<h3 class="pricing-cat-title">' + cat["categoria_" + lang] + '</h3>';
            cat.items.forEach(function (item) {
                html += '<div class="pricing-item">' +
                    '<span class="pricing-item-name">' + item["nome_" + lang] + '</span>' +
                    '<span class="pricing-item-price">' + item.preco + '</span>' +
                    '</div>';
            });
            html += '</div>';
        });
        grid.innerHTML = html;
        activateReveals();
    }

    // ============================================
    // NAVEGAÇÃO
    // ============================================
    function setupNav() {
        var nav = $("#nav");
        var toggle = $("#navToggle");
        var mobile = $("#mobileMenu");

        // Scroll effect
        window.addEventListener("scroll", function () {
            if (window.scrollY > 80) {
                nav.classList.add("scrolled");
            } else {
                nav.classList.remove("scrolled");
            }
        });

        // Mobile toggle
        if (toggle) {
            toggle.addEventListener("click", function () {
                toggle.classList.toggle("active");
                mobile.classList.toggle("active");
                document.body.style.overflow = mobile.classList.contains("active") ? "hidden" : "";
            });
        }

        // Close mobile on link click
        $$(".mobile-link").forEach(function (link) {
            link.addEventListener("click", function () {
                toggle.classList.remove("active");
                mobile.classList.remove("active");
                document.body.style.overflow = "";
            });
        });

        // Active nav link on scroll
        var sections = ["servicos", "boutique", "galeria", "contacto"];
        window.addEventListener("scroll", function () {
            var scrollPos = window.scrollY + 200;
            sections.forEach(function (id) {
                var section = document.getElementById(id);
                if (section) {
                    var top = section.offsetTop;
                    var bottom = top + section.offsetHeight;
                    var links = $$('.nav-link[href="#' + id + '"]');
                    links.forEach(function (link) {
                        if (scrollPos >= top && scrollPos < bottom) {
                            link.classList.add("active");
                        } else {
                            link.classList.remove("active");
                        }
                    });
                }
            });
        });
    }

    // ============================================
    // IDIOMA
    // ============================================
    function setupLang() {
        var btn = $("#langToggle");
        if (!btn) return;
        btn.addEventListener("click", function () {
            lang = lang === "pt" ? "en" : "pt";
            btn.textContent = lang.toUpperCase();
            applyLang();
            renderServicos();
            renderProdutos();
            renderPrecario();
        });
    }

    function applyLang() {
        $$("[data-i18n]").forEach(function (el) {
            var key = el.getAttribute("data-i18n");
            if (TRADUCOES[key] && TRADUCOES[key][lang]) {
                el.textContent = TRADUCOES[key][lang];
            }
        });
    }

    // ============================================
    // MODAL
    // ============================================
    function setupModal() {
        var overlay = $("#modalOverlay");
        var closeBtn = $("#modalClose");

        // Abrir modal ao clicar em serviço ou produto
        document.addEventListener("click", function (e) {
            var card = e.target.closest("[data-type]");
            if (!card) return;
            var type = card.getAttribute("data-type");
            var id = card.getAttribute("data-id");
            var item = null;

            if (type === "servico") {
                item = SERVICOS.find(function (s) { return s.id === id; });
            } else if (type === "produto") {
                item = PRODUTOS.find(function (p) { return p.id === id; });
            }
            if (item) {
                openModal(item, type);
            }
        });

        // Fechar modal
        if (closeBtn) {
            closeBtn.addEventListener("click", closeModal);
        }
        if (overlay) {
            overlay.addEventListener("click", function (e) {
                if (e.target === overlay) closeModal();
            });
        }
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape") closeModal();
        });
    }

    function openModal(item, type) {
        modalItem = item;
        modalSelectedOption = null;
        modalSelectedColor = null;
        modalSelectedSize = null;

        var isServico = type === "servico";
        var overlay = $("#modalOverlay");

        // Imagem principal
        var mainImg = $("#modalMainImg");
        if (item.imagens && item.imagens[0]) {
            mainImg.src = item.imagens[0];
            mainImg.alt = item["nome_" + lang];
            mainImg.style.display = "block";
            mainImg.onerror = function () {
                mainImg.style.display = "none";
                mainImg.parentNode.innerHTML = '<div style="font-size:4rem;opacity:0.3">' + (isServico ? item.icon || "✨" : "🛍️") + '</div>';
            };
        } else {
            mainImg.style.display = "none";
            mainImg.parentNode.innerHTML = '<div style="font-size:4rem;opacity:0.3">' + (isServico ? item.icon || "✨" : "🛍️") + '</div>';
        }

        // Thumbnails
        var thumbsContainer = $("#modalThumbs");
        thumbsContainer.innerHTML = "";
        if (item.imagens && item.imagens.length > 1) {
            item.imagens.forEach(function (src, i) {
                var img = document.createElement("img");
                img.src = src;
                img.alt = "Miniatura " + (i + 1);
                if (i === 0) img.classList.add("active");
                img.addEventListener("click", function () {
                    var mi = $("#modalMainImg");
                    if (mi) {
                        mi.src = src;
                        mi.style.display = "block";
                    }
                    thumbsContainer.querySelectorAll("img").forEach(function (t) { t.classList.remove("active"); });
                    img.classList.add("active");
                });
                img.onerror = function () { img.style.display = "none"; };
                thumbsContainer.appendChild(img);
            });
        }

        // Info
        $("#modalCategory").textContent = item["categoria_" + lang] || "";
        $("#modalTitle").textContent = item["nome_" + lang];
        $("#modalPrice").textContent = item.preco;
        $("#modalDesc").textContent = item["descricao_" + lang] || "";

        // Duração (só serviços)
        var durationEl = $("#modalDuration");
        if (isServico && item["duracao_" + lang]) {
            durationEl.innerHTML = "<strong>" + t("modal_duracao") + "</strong> " + item["duracao_" + lang];
            durationEl.style.display = "block";
        } else {
            durationEl.style.display = "none";
        }

        // Opções (serviços) ou Tamanhos (produtos)
        var optionsContainer = $("#modalOptions");
        optionsContainer.innerHTML = "";
        var opcoes = isServico ? (item["opcoes_" + lang] || []) : (item["tamanhos_" + lang] || []);
        if (opcoes.length > 0) {
            var label = isServico ? t("modal_opcao") : t("modal_tamanho");
            optionsContainer.innerHTML = '<span style="font-size:0.8rem;color:var(--text-secondary);margin-right:8px">' + label + '</span>';
            opcoes.forEach(function (op) {
                var btn = document.createElement("button");
                btn.className = "opt-btn";
                btn.textContent = op;
                btn.addEventListener("click", function () {
                    optionsContainer.querySelectorAll(".opt-btn").forEach(function (b) { b.classList.remove("active"); });
                    btn.classList.add("active");
                    if (isServico) {
                        modalSelectedOption = op;
                    } else {
                        modalSelectedSize = op;
                    }
                    updateModalWhatsapp(item, type);
                });
                optionsContainer.appendChild(btn);
            });
        }

        // Cores
        var colorsContainer = $("#modalColors");
        colorsContainer.innerHTML = "";
        if (item.cores && item.cores.length > 0) {
            colorsContainer.innerHTML = '<span style="font-size:0.8rem;color:var(--text-secondary);margin-right:8px">' + t("modal_cor") + '</span>';
            item.cores.forEach(function (cor) {
                var dot = document.createElement("span");
                dot.className = "color-dot";
                dot.style.backgroundColor = cor;
                dot.title = cor;
                dot.addEventListener("click", function () {
                    colorsContainer.querySelectorAll(".color-dot").forEach(function (d) { d.classList.remove("active"); });
                    dot.classList.add("active");
                    modalSelectedColor = cor;
                    updateModalWhatsapp(item, type);
                });
                colorsContainer.appendChild(dot);
            });
        }

        // WhatsApp links
        updateModalWhatsapp(item, type);

        // URL hash
        window.location.hash = (isServico ? "servico/" : "produto/") + item.slug;

        // Show
        overlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        var overlay = $("#modalOverlay");
        if (overlay) {
            overlay.classList.remove("active");
            document.body.style.overflow = "";
            // Restaurar img main container caso tenha sido substituído
            var mainContainer = overlay.querySelector(".modal-img-main");
            if (mainContainer && !mainContainer.querySelector("#modalMainImg")) {
                mainContainer.innerHTML = '<img id="modalMainImg" src="" alt="">';
            }
        }
        if (window.location.hash) {
            history.pushState("", document.title, window.location.pathname + window.location.search);
        }
        modalItem = null;
    }

    function updateModalWhatsapp(item, type) {
        var isServico = type === "servico";
        var link = window.location.origin + window.location.pathname + "#" + (isServico ? "servico/" : "produto/") + item.slug;
        var nome = item["nome_" + lang];

        // Mensagem principal
        var msgTemplate = isServico ? TRADUCOES.wa_servico[lang] : TRADUCOES.wa_produto[lang];
        var msg = msgTemplate.replace("{nome}", nome).replace("{link}", link);

        // Extras
        if (isServico && modalSelectedOption) {
            msg += TRADUCOES.wa_servico_opcao[lang].replace("{opcao}", modalSelectedOption);
        }
        if (!isServico && modalSelectedSize) {
            msg += TRADUCOES.wa_produto_tamanho[lang].replace("{tamanho}", modalSelectedSize);
        }
        if (modalSelectedColor) {
            var corTemplate = isServico ? TRADUCOES.wa_servico_cor[lang] : TRADUCOES.wa_produto_cor[lang];
            msg += corTemplate.replace("{cor}", modalSelectedColor);
        }

        var waUrl = "https://wa.me/" + LOJA.telefone + "?text=" + encodeURIComponent(msg);
        var waBtn = $("#modalWhatsapp");
        if (waBtn) waBtn.href = waUrl;

        // Info button
        var infoMsg = TRADUCOES.wa_info[lang].replace("{nome}", nome).replace("{link}", link);
        var infoUrl = "https://wa.me/" + LOJA.telefone + "?text=" + encodeURIComponent(infoMsg);
        var infoBtn = $("#modalInfo");
        if (infoBtn) infoBtn.href = infoUrl;
    }

    // ============================================
    // DEEP LINK (abrir produto/serviço via URL)
    // ============================================
    function checkDeepLink() {
        var hash = window.location.hash.replace("#", "");
        if (!hash) return;

        var parts = hash.split("/");
        if (parts.length !== 2) return;

        var type = parts[0]; // "servico" ou "produto"
        var slug = parts[1];
        var item = null;

        if (type === "servico") {
            item = SERVICOS.find(function (s) { return s.slug === slug; });
            if (item) setTimeout(function () { openModal(item, "servico"); }, 500);
        } else if (type === "produto") {
            item = PRODUTOS.find(function (p) { return p.slug === slug; });
            if (item) setTimeout(function () { openModal(item, "produto"); }, 500);
        }
    }

    // Back/forward browser navigation
    window.addEventListener("hashchange", function () {
        var hash = window.location.hash.replace("#", "");
        if (!hash) {
            closeModal();
            return;
        }
        var parts = hash.split("/");
        if (parts.length === 2) {
            var type = parts[0];
            var slug = parts[1];
            var item = null;
            if (type === "servico") {
                item = SERVICOS.find(function (s) { return s.slug === slug; });
                if (item) openModal(item, "servico");
            } else if (type === "produto") {
                item = PRODUTOS.find(function (p) { return p.slug === slug; });
                if (item) openModal(item, "produto");
            }
        }
    });

    // ============================================
    // SCROLL REVEAL
    // ============================================
    function setupReveal() {
        if ("IntersectionObserver" in window) {
            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    }
                });
            }, { threshold: 0.1 });

            $$(".reveal").forEach(function (el) { observer.observe(el); });
        } else {
            // Fallback: mostrar tudo
            $$(".reveal").forEach(function (el) { el.classList.add("active"); });
        }
    }

    function activateReveals() {
        // Re-observe novos elementos .reveal após render
        setTimeout(function () {
            if ("IntersectionObserver" in window) {
                var observer = new IntersectionObserver(function (entries) {
                    entries.forEach(function (entry) {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("active");
                        }
                    });
                }, { threshold: 0.1 });
                $$(".reveal:not(.active)").forEach(function (el) { observer.observe(el); });
            } else {
                $$(".reveal").forEach(function (el) { el.classList.add("active"); });
            }
        }, 50);
    }

    // ============================================
    // HELPER — tradução rápida
    // ============================================
    function t(key) {
        return TRADUCOES[key] && TRADUCOES[key][lang] ? TRADUCOES[key][lang] : key;
    }

})();
