/* ============================================
   DADOS DO SITE — EDITE AQUI
   Mira Beauty — Salão de Beleza & Boutique
   ============================================
   
   Para alterar qualquer informação do site,
   edite apenas este ficheiro. O resto funciona
   automaticamente.

   DICAS:
   - slug: usado no URL (sem espaços, sem acentos)
   - imagens: coloque na pasta /images/
   - cores: use nomes em inglês ou códigos hex
   ============================================ */

// ── INFORMAÇÕES DA LOJA ──
var LOJA = {
    nome: "Mira Beauty",
    slogan_pt: "A Sua Beleza, O Nosso Cuidado",
    slogan_en: "Your Beauty, Our Care",
    telefone: "+258872221549",
    telefone_display: "+258 87 222 1549",
    endereco: "Matola Liberdade, Rua de Maputo n° 333",
    horario_semana: "Seg–Sex: 08h–19h",
    horario_sabado: "Sáb: 09h–18h",
    horario_domingo_pt: "Dom: Fechado",
    horario_domingo_en: "Sun: Closed",
    mpesa: "87 222 1549",
    conta_bim: "12345678901",
    facebook: "https://facebook.com/mirabeatuy",
    instagram: "https://instagram.com/mirabeauty.mz"
};

// ── SERVIÇOS ──
// Estes aparecem como cards clicáveis na secção "Serviços"
// Ao clicar, abre popup com detalhes e botão WhatsApp
var SERVICOS = [
    {
        id: "s1",
        slug: "corte-feminino",
        icon: "✂️",
        nome_pt: "Corte Feminino",
        nome_en: "Women's Haircut",
        preco: "800 MT",
        descricao_pt: "Corte personalizado com lavagem e secagem. Consulta de estilo incluída.",
        descricao_en: "Custom cut with wash and blow-dry. Style consultation included.",
        categoria_pt: "Cabelo",
        categoria_en: "Hair",
        duracao_pt: "45 min",
        duracao_en: "45 min",
        imagens: ["images/servicos/corte-feminino-1.jpg", "images/servicos/corte-feminino-2.jpg"],
        cores: [],
        opcoes_pt: [],
        opcoes_en: []
    },
    {
        id: "s2",
        slug: "corte-masculino",
        icon: "💈",
        nome_pt: "Corte Masculino",
        nome_en: "Men's Haircut",
        preco: "500 MT",
        descricao_pt: "Corte clássico ou moderno com acabamento profissional.",
        descricao_en: "Classic or modern cut with professional finishing.",
        categoria_pt: "Cabelo",
        categoria_en: "Hair",
        duracao_pt: "30 min",
        duracao_en: "30 min",
        imagens: ["images/servicos/corte-masculino-1.jpg"],
        cores: [],
        opcoes_pt: [],
        opcoes_en: []
    },
    {
        id: "s3",
        slug: "tranças",
        icon: "🎀",
        nome_pt: "Tranças",
        nome_en: "Braids",
        preco: "1.500 MT",
        descricao_pt: "Tranças tradicionais e modernas. Box braids, twist, cornrows e mais.",
        descricao_en: "Traditional and modern braids. Box braids, twist, cornrows and more.",
        categoria_pt: "Cabelo",
        categoria_en: "Hair",
        duracao_pt: "2–4 horas",
        duracao_en: "2–4 hours",
        imagens: ["images/servicos/trancas-1.jpg", "images/servicos/trancas-2.jpg"],
        cores: [],
        opcoes_pt: ["Box Braids", "Twist", "Cornrows", "Goddess Locs"],
        opcoes_en: ["Box Braids", "Twist", "Cornrows", "Goddess Locs"]
    },
    {
        id: "s4",
        slug: "alisamento",
        icon: "🪮",
        nome_pt: "Alisamento",
        nome_en: "Hair Straightening",
        preco: "2.000 MT",
        descricao_pt: "Alisamento profissional com produtos de qualidade. Duração de até 6 meses.",
        descricao_en: "Professional straightening with quality products. Lasts up to 6 months.",
        categoria_pt: "Cabelo",
        categoria_en: "Hair",
        duracao_pt: "2–3 horas",
        duracao_en: "2–3 hours",
        imagens: ["images/servicos/alisamento-1.jpg"],
        cores: [],
        opcoes_pt: ["Progressiva", "Definitiva", "Botox Capilar"],
        opcoes_en: ["Progressive", "Permanent", "Hair Botox"]
    },
    {
        id: "s5",
        slug: "coloracao",
        icon: "🎨",
        nome_pt: "Coloração",
        nome_en: "Hair Coloring",
        preco: "1.800 MT",
        descricao_pt: "Coloração completa ou mechas. Variedade de tons disponíveis.",
        descricao_en: "Full color or highlights. Variety of tones available.",
        categoria_pt: "Cabelo",
        categoria_en: "Hair",
        duracao_pt: "1–2 horas",
        duracao_en: "1–2 hours",
        imagens: ["images/servicos/coloracao-1.jpg"],
        cores: ["#2C1810", "#8B4513", "#DAA520", "#C41E3A", "#1A1A2E"],
        opcoes_pt: ["Completa", "Mechas", "Balayage", "Ombré"],
        opcoes_en: ["Full Color", "Highlights", "Balayage", "Ombré"]
    },
    {
        id: "s6",
        slug: "manicure-pedicure",
        icon: "💅",
        nome_pt: "Manicure & Pedicure",
        nome_en: "Manicure & Pedicure",
        preco: "600 MT",
        descricao_pt: "Cuidado completo das unhas com esmalte à escolha. Gel e acrílico disponíveis.",
        descricao_en: "Complete nail care with polish of choice. Gel and acrylic available.",
        categoria_pt: "Unhas",
        categoria_en: "Nails",
        duracao_pt: "1 hora",
        duracao_en: "1 hour",
        imagens: ["images/servicos/manicure-1.jpg", "images/servicos/manicure-2.jpg"],
        cores: ["#E74C3C", "#FF69B4", "#8B0000", "#FFD700", "#F5F5DC", "#000000"],
        opcoes_pt: ["Simples", "Gel", "Acrílico", "Nail Art"],
        opcoes_en: ["Simple", "Gel", "Acrylic", "Nail Art"]
    },
    {
        id: "s7",
        slug: "unhas-gel",
        icon: "💎",
        nome_pt: "Unhas de Gel",
        nome_en: "Gel Nails",
        preco: "1.200 MT",
        descricao_pt: "Aplicação de unhas de gel com design personalizado. Duração de 3–4 semanas.",
        descricao_en: "Gel nail application with custom design. Lasts 3–4 weeks.",
        categoria_pt: "Unhas",
        categoria_en: "Nails",
        duracao_pt: "1h30",
        duracao_en: "1h30",
        imagens: ["images/servicos/gel-1.jpg"],
        cores: ["#FF1493", "#FF69B4", "#FFC0CB", "#E6E6FA", "#F0F0F0", "#000000"],
        opcoes_pt: ["Francesinha", "Decoradas", "Efeito Espelho", "Glitter"],
        opcoes_en: ["French Tips", "Decorated", "Mirror Effect", "Glitter"]
    },
    {
        id: "s8",
        slug: "maquilhagem-social",
        icon: "💄",
        nome_pt: "Maquilhagem Social",
        nome_en: "Social Makeup",
        preco: "1.500 MT",
        descricao_pt: "Maquilhagem profissional para eventos, festas e ocasiões especiais.",
        descricao_en: "Professional makeup for events, parties and special occasions.",
        categoria_pt: "Maquilhagem",
        categoria_en: "Makeup",
        duracao_pt: "1 hora",
        duracao_en: "1 hour",
        imagens: ["images/servicos/maquilhagem-1.jpg"],
        cores: [],
        opcoes_pt: ["Natural", "Glam", "Noiva", "Editorial"],
        opcoes_en: ["Natural", "Glam", "Bridal", "Editorial"]
    },
    {
        id: "s9",
        slug: "maquilhagem-noiva",
        icon: "👰",
        nome_pt: "Maquilhagem de Noiva",
        nome_en: "Bridal Makeup",
        preco: "3.500 MT",
        descricao_pt: "Pacote completo para noivas: prova + dia do casamento. Produtos de longa duração.",
        descricao_en: "Complete bridal package: trial + wedding day. Long-lasting products.",
        categoria_pt: "Maquilhagem",
        categoria_en: "Makeup",
        duracao_pt: "2 horas",
        duracao_en: "2 hours",
        imagens: ["images/servicos/noiva-1.jpg"],
        cores: [],
        opcoes_pt: ["Com Prova", "Sem Prova", "Pacote Madrinhas"],
        opcoes_en: ["With Trial", "Without Trial", "Bridesmaids Package"]
    },
    {
        id: "s10",
        slug: "limpeza-facial",
        icon: "🧖‍♀️",
        nome_pt: "Limpeza de Pele",
        nome_en: "Facial Cleansing",
        preco: "1.000 MT",
        descricao_pt: "Limpeza profunda com extração, hidratação e máscara facial.",
        descricao_en: "Deep cleansing with extraction, hydration and facial mask.",
        categoria_pt: "Tratamentos",
        categoria_en: "Treatments",
        duracao_pt: "1 hora",
        duracao_en: "1 hour",
        imagens: ["images/servicos/facial-1.jpg"],
        cores: [],
        opcoes_pt: [],
        opcoes_en: []
    },
    {
        id: "s11",
        slug: "massagem-relaxante",
        icon: "💆‍♀️",
        nome_pt: "Massagem Relaxante",
        nome_en: "Relaxing Massage",
        preco: "1.200 MT",
        descricao_pt: "Massagem corporal completa com óleos essenciais. Relaxamento total.",
        descricao_en: "Full body massage with essential oils. Total relaxation.",
        categoria_pt: "Tratamentos",
        categoria_en: "Treatments",
        duracao_pt: "1 hora",
        duracao_en: "1 hour",
        imagens: ["images/servicos/massagem-1.jpg"],
        cores: [],
        opcoes_pt: ["Relaxante", "Desportiva", "Pedras Quentes"],
        opcoes_en: ["Relaxing", "Sports", "Hot Stones"]
    },
    {
        id: "s12",
        slug: "depilacao",
        icon: "✨",
        nome_pt: "Depilação",
        nome_en: "Waxing",
        preco: "400 MT",
        descricao_pt: "Depilação com cera quente ou fria. Várias zonas disponíveis.",
        descricao_en: "Hot or cold wax hair removal. Various areas available.",
        categoria_pt: "Tratamentos",
        categoria_en: "Treatments",
        duracao_pt: "30–60 min",
        duracao_en: "30–60 min",
        imagens: ["images/servicos/depilacao-1.jpg"],
        cores: [],
        opcoes_pt: ["Pernas", "Axilas", "Buço", "Completa"],
        opcoes_en: ["Legs", "Underarms", "Upper Lip", "Full Body"]
    }
];

// ── PRODUTOS DA BOUTIQUE ──
// Estes aparecem na secção "Boutique" com sistema "Carregar mais"
var PRODUTOS = [
    {
        id: "p1",
        slug: "oleo-argan",
        nome_pt: "Óleo de Argan",
        nome_en: "Argan Oil",
        preco: "450 MT",
        descricao_pt: "Óleo puro de argan para cabelos secos e danificados. Hidratação profunda.",
        descricao_en: "Pure argan oil for dry and damaged hair. Deep hydration.",
        categoria_pt: "Cabelo",
        categoria_en: "Hair",
        imagens: ["images/produtos/oleo-argan-1.jpg"],
        cores: [],
        tamanhos_pt: ["100ml", "200ml"],
        tamanhos_en: ["100ml", "200ml"]
    },
    {
        id: "p2",
        slug: "shampoo-reparador",
        nome_pt: "Shampoo Reparador",
        nome_en: "Repair Shampoo",
        preco: "350 MT",
        descricao_pt: "Shampoo com queratina para cabelos danificados. Limpeza suave.",
        descricao_en: "Keratin shampoo for damaged hair. Gentle cleansing.",
        categoria_pt: "Cabelo",
        categoria_en: "Hair",
        imagens: ["images/produtos/shampoo-1.jpg"],
        cores: [],
        tamanhos_pt: ["250ml", "500ml"],
        tamanhos_en: ["250ml", "500ml"]
    },
    {
        id: "p3",
        slug: "mascara-capilar",
        nome_pt: "Máscara Capilar",
        nome_en: "Hair Mask",
        preco: "550 MT",
        descricao_pt: "Máscara de tratamento intensivo. Reparação e brilho em 5 minutos.",
        descricao_en: "Intensive treatment mask. Repair and shine in 5 minutes.",
        categoria_pt: "Cabelo",
        categoria_en: "Hair",
        imagens: ["images/produtos/mascara-1.jpg"],
        cores: [],
        tamanhos_pt: ["200ml", "500ml"],
        tamanhos_en: ["200ml", "500ml"]
    },
    {
        id: "p4",
        slug: "extensoes-cabelo",
        nome_pt: "Extensões de Cabelo",
        nome_en: "Hair Extensions",
        preco: "2.500 MT",
        descricao_pt: "Extensões naturais de alta qualidade. Vários comprimentos e texturas.",
        descricao_en: "High quality natural extensions. Various lengths and textures.",
        categoria_pt: "Cabelo",
        categoria_en: "Hair",
        imagens: ["images/produtos/extensoes-1.jpg", "images/produtos/extensoes-2.jpg"],
        cores: ["#1A1A1A", "#2C1810", "#8B4513", "#DAA520"],
        tamanhos_pt: ["40cm", "50cm", "60cm"],
        tamanhos_en: ["40cm", "50cm", "60cm"]
    },
    {
        id: "p5",
        slug: "kit-unhas-gel",
        nome_pt: "Kit Unhas de Gel",
        nome_en: "Gel Nail Kit",
        preco: "1.800 MT",
        descricao_pt: "Kit completo para unhas de gel em casa. Inclui lâmpada UV e 6 cores.",
        descricao_en: "Complete gel nail kit for home use. Includes UV lamp and 6 colors.",
        categoria_pt: "Unhas",
        categoria_en: "Nails",
        imagens: ["images/produtos/kit-gel-1.jpg"],
        cores: ["#FF1493", "#FF69B4", "#E6E6FA", "#FFD700", "#FF0000", "#000000"],
        tamanhos_pt: [],
        tamanhos_en: []
    },
    {
        id: "p6",
        slug: "esmalte-luxo",
        nome_pt: "Esmalte de Luxo",
        nome_en: "Luxury Nail Polish",
        preco: "250 MT",
        descricao_pt: "Esmalte de longa duração com acabamento brilhante. Fórmula 5-free.",
        descricao_en: "Long-lasting nail polish with glossy finish. 5-free formula.",
        categoria_pt: "Unhas",
        categoria_en: "Nails",
        imagens: ["images/produtos/esmalte-1.jpg"],
        cores: ["#E74C3C", "#FF69B4", "#8B0000", "#FFD700", "#000000", "#F5F5DC"],
        tamanhos_pt: [],
        tamanhos_en: []
    },
    {
        id: "p7",
        slug: "base-maquilhagem",
        nome_pt: "Base Líquida HD",
        nome_en: "HD Liquid Foundation",
        preco: "700 MT",
        descricao_pt: "Base de alta cobertura com acabamento natural. FPS 15.",
        descricao_en: "High coverage foundation with natural finish. SPF 15.",
        categoria_pt: "Maquilhagem",
        categoria_en: "Makeup",
        imagens: ["images/produtos/base-1.jpg"],
        cores: ["#F5DEB3", "#DEB887", "#D2B48C", "#C4A882", "#8B6914", "#4A3728"],
        tamanhos_pt: [],
        tamanhos_en: []
    },
    {
        id: "p8",
        slug: "batom-matte",
        nome_pt: "Batom Matte",
        nome_en: "Matte Lipstick",
        preco: "350 MT",
        descricao_pt: "Batom de longa duração com acabamento matte aveludado.",
        descricao_en: "Long-lasting lipstick with velvety matte finish.",
        categoria_pt: "Maquilhagem",
        categoria_en: "Makeup",
        imagens: ["images/produtos/batom-1.jpg"],
        cores: ["#8B0000", "#C41E3A", "#FF1493", "#FF69B4", "#A0522D", "#800020"],
        tamanhos_pt: [],
        tamanhos_en: []
    },
    {
        id: "p9",
        slug: "paleta-sombras",
        nome_pt: "Paleta de Sombras",
        nome_en: "Eyeshadow Palette",
        preco: "900 MT",
        descricao_pt: "Paleta com 12 tons neutros e glitter. Pigmentação intensa.",
        descricao_en: "Palette with 12 neutral and glitter shades. Intense pigmentation.",
        categoria_pt: "Maquilhagem",
        categoria_en: "Makeup",
        imagens: ["images/produtos/paleta-1.jpg"],
        cores: [],
        tamanhos_pt: [],
        tamanhos_en: []
    },
    {
        id: "p10",
        slug: "creme-hidratante",
        nome_pt: "Creme Hidratante Facial",
        nome_en: "Facial Moisturizer",
        preco: "600 MT",
        descricao_pt: "Creme hidratante com vitamina E e ácido hialurónico. Para todos os tipos de pele.",
        descricao_en: "Moisturizer with vitamin E and hyaluronic acid. For all skin types.",
        categoria_pt: "Cuidado de Pele",
        categoria_en: "Skincare",
        imagens: ["images/produtos/creme-1.jpg"],
        cores: [],
        tamanhos_pt: ["50ml", "100ml"],
        tamanhos_en: ["50ml", "100ml"]
    },
    {
        id: "p11",
        slug: "serum-vitamina-c",
        nome_pt: "Sérum Vitamina C",
        nome_en: "Vitamin C Serum",
        preco: "800 MT",
        descricao_pt: "Sérum antioxidante para luminosidade e uniformidade da pele.",
        descricao_en: "Antioxidant serum for skin radiance and even tone.",
        categoria_pt: "Cuidado de Pele",
        categoria_en: "Skincare",
        imagens: ["images/produtos/serum-1.jpg"],
        cores: [],
        tamanhos_pt: ["30ml"],
        tamanhos_en: ["30ml"]
    },
    {
        id: "p12",
        slug: "protetor-solar",
        nome_pt: "Protetor Solar FPS 50",
        nome_en: "Sunscreen SPF 50",
        preco: "500 MT",
        descricao_pt: "Proteção solar de amplo espectro. Textura leve e sem resíduo branco.",
        descricao_en: "Broad spectrum sun protection. Light texture, no white cast.",
        categoria_pt: "Cuidado de Pele",
        categoria_en: "Skincare",
        imagens: ["images/produtos/protetor-1.jpg"],
        cores: [],
        tamanhos_pt: ["50ml", "100ml"],
        tamanhos_en: ["50ml", "100ml"]
    },
    {
        id: "p13",
        slug: "oleo-corporal",
        nome_pt: "Óleo Corporal Relaxante",
        nome_en: "Relaxing Body Oil",
        preco: "650 MT",
        descricao_pt: "Óleo de massagem com lavanda e camomila. Hidratação e relaxamento.",
        descricao_en: "Massage oil with lavender and chamomile. Hydration and relaxation.",
        categoria_pt: "Corpo",
        categoria_en: "Body",
        imagens: ["images/produtos/oleo-corporal-1.jpg"],
        cores: [],
        tamanhos_pt: ["200ml"],
        tamanhos_en: ["200ml"]
    },
    {
        id: "p14",
        slug: "brincos-perola",
        nome_pt: "Brincos de Pérola",
        nome_en: "Pearl Earrings",
        preco: "400 MT",
        descricao_pt: "Brincos elegantes com pérolas artificiais. Perfeitos para qualquer ocasião.",
        descricao_en: "Elegant earrings with faux pearls. Perfect for any occasion.",
        categoria_pt: "Acessórios",
        categoria_en: "Accessories",
        imagens: ["images/produtos/brincos-1.jpg"],
        cores: ["#FFFFF0", "#FFD700", "#C0C0C0"],
        tamanhos_pt: [],
        tamanhos_en: []
    },
    {
        id: "p15",
        slug: "faixa-cabelo",
        nome_pt: "Faixa de Cabelo Seda",
        nome_en: "Silk Headband",
        preco: "300 MT",
        descricao_pt: "Faixa de seda para proteger o cabelo. Suave e antifrizz.",
        descricao_en: "Silk headband for hair protection. Soft and anti-frizz.",
        categoria_pt: "Acessórios",
        categoria_en: "Accessories",
        imagens: ["images/produtos/faixa-1.jpg"],
        cores: ["#000000", "#FF69B4", "#800020", "#FFFFF0"],
        tamanhos_pt: [],
        tamanhos_en: []
    },
    {
        id: "p16",
        slug: "necessaire",
        nome_pt: "Nécessaire Mira Beauty",
        nome_en: "Mira Beauty Cosmetic Bag",
        preco: "550 MT",
        descricao_pt: "Nécessaire exclusiva com compartimentos internos. Ideal para viagem.",
        descricao_en: "Exclusive cosmetic bag with internal compartments. Ideal for travel.",
        categoria_pt: "Acessórios",
        categoria_en: "Accessories",
        imagens: ["images/produtos/necessaire-1.jpg"],
        cores: ["#000000", "#FFC0CB", "#C4917B"],
        tamanhos_pt: ["Pequena", "Grande"],
        tamanhos_en: ["Small", "Large"]
    }
];

// ── PREÇÁRIO ──
// Tabela organizada por categoria para a secção de preços
var PRECARIO = [
    {
        categoria_pt: "Cabelo",
        categoria_en: "Hair",
        items: [
            { nome_pt: "Corte Feminino",   nome_en: "Women's Haircut",       preco: "800 MT"   },
            { nome_pt: "Corte Masculino",   nome_en: "Men's Haircut",        preco: "500 MT"   },
            { nome_pt: "Lavagem + Secagem", nome_en: "Wash + Blow Dry",      preco: "300 MT"   },
            { nome_pt: "Tranças",           nome_en: "Braids",               preco: "1.500 MT" },
            { nome_pt: "Alisamento",        nome_en: "Straightening",        preco: "2.000 MT" },
            { nome_pt: "Coloração",         nome_en: "Hair Coloring",        preco: "1.800 MT" },
            { nome_pt: "Mechas / Balayage", nome_en: "Highlights / Balayage",preco: "2.200 MT" },
            { nome_pt: "Hidratação",        nome_en: "Deep Conditioning",    preco: "600 MT"   }
        ]
    },
    {
        categoria_pt: "Unhas",
        categoria_en: "Nails",
        items: [
            { nome_pt: "Manicure Simples",  nome_en: "Simple Manicure",  preco: "300 MT"   },
            { nome_pt: "Pedicure Simples",  nome_en: "Simple Pedicure",  preco: "350 MT"   },
            { nome_pt: "Mani + Pedi",       nome_en: "Mani + Pedi",     preco: "600 MT"   },
            { nome_pt: "Unhas de Gel",      nome_en: "Gel Nails",       preco: "1.200 MT" },
            { nome_pt: "Unhas Acrílicas",   nome_en: "Acrylic Nails",   preco: "1.500 MT" },
            { nome_pt: "Nail Art",          nome_en: "Nail Art",        preco: "+200 MT"  }
        ]
    },
    {
        categoria_pt: "Maquilhagem",
        categoria_en: "Makeup",
        items: [
            { nome_pt: "Maquilhagem Social",  nome_en: "Social Makeup",  preco: "1.500 MT" },
            { nome_pt: "Maquilhagem Noiva",   nome_en: "Bridal Makeup",  preco: "3.500 MT" },
            { nome_pt: "Curso de Auto-Maquilhagem", nome_en: "Self-Makeup Course", preco: "2.000 MT" }
        ]
    },
    {
        categoria_pt: "Tratamentos",
        categoria_en: "Treatments",
        items: [
            { nome_pt: "Limpeza de Pele",       nome_en: "Facial Cleansing",    preco: "1.000 MT" },
            { nome_pt: "Massagem Relaxante",     nome_en: "Relaxing Massage",   preco: "1.200 MT" },
            { nome_pt: "Massagem Desportiva",    nome_en: "Sports Massage",     preco: "1.500 MT" },
            { nome_pt: "Depilação (zona)",       nome_en: "Waxing (area)",      preco: "400 MT"   },
            { nome_pt: "Depilação Completa",     nome_en: "Full Body Waxing",   preco: "1.800 MT" }
        ]
    }
];

// ── TRADUÇÕES DA INTERFACE ──
// Todos os textos fixos do site em PT e EN
var TRADUCOES = {
    // Nav
    nav_servicos:     { pt: "Serviços",      en: "Services"    },
    nav_boutique:     { pt: "Boutique",       en: "Boutique"    },
    nav_galeria:      { pt: "Galeria",        en: "Gallery"     },
    nav_contacto:     { pt: "Contacto",       en: "Contact"     },
    nav_agendar:      { pt: "Agendar",        en: "Book Now"    },

    // Hero
    hero_label:       { pt: "SALÃO DE BELEZA & BOUTIQUE", en: "BEAUTY SALON & BOUTIQUE" },
    hero_subtitle:    { pt: "Transforme o seu visual com os melhores profissionais de Matola", en: "Transform your look with the best professionals in Matola" },
    hero_btn_agendar: { pt: "Agendar via WhatsApp",  en: "Book via WhatsApp"  },
    hero_btn_servicos:{ pt: "Ver Serviços",           en: "View Services"      },

    // Sections
    sec_servicos_label: { pt: "O QUE FAZEMOS",  en: "WHAT WE DO"     },
    sec_servicos_title: { pt: "Nossos Serviços", en: "Our Services"   },
    sec_boutique_label: { pt: "LOJA",            en: "SHOP"           },
    sec_boutique_title: { pt: "Boutique",        en: "Boutique"       },
    sec_galeria_label:  { pt: "PORTFÓLIO",       en: "PORTFOLIO"      },
    sec_galeria_title:  { pt: "Galeria",         en: "Gallery"        },
    sec_precos_label:   { pt: "TABELA",          en: "PRICING"        },
    sec_precos_title:   { pt: "Preçário",        en: "Price List"     },
    sec_contacto_label: { pt: "FALE CONNOSCO",   en: "GET IN TOUCH"   },
    sec_contacto_title: { pt: "Contacto",        en: "Contact"        },

    // Buttons
    btn_carregar_mais:  { pt: "Carregar mais",   en: "Load more"      },

    // Modal
    modal_btn_whatsapp: { pt: "Agendar via WhatsApp",   en: "Book via WhatsApp"      },
    modal_btn_info:     { pt: "Pedir informações",      en: "Request information"    },
    modal_duracao:      { pt: "Duração:",                en: "Duration:"              },
    modal_tamanho:      { pt: "Tamanho:",                en: "Size:"                  },
    modal_cor:          { pt: "Cor:",                    en: "Color:"                 },
    modal_opcao:        { pt: "Opção:",                  en: "Option:"                },

    // Contact
    contact_loc_title:  { pt: "Localização",     en: "Location"       },
    contact_tel_title:  { pt: "Telefone",        en: "Phone"          },
    contact_hor_title:  { pt: "Horário",         en: "Hours"          },
    contact_pag_title:  { pt: "Pagamento",       en: "Payment"        },
    contact_horario:    { pt: "Seg–Sáb: 08h–19h | Dom: Fechado", en: "Mon–Sat: 8am–7pm | Sun: Closed" },

    // Footer
    footer_tagline:     { pt: "Salão de beleza e boutique em Matola. A sua beleza, o nosso cuidado.", en: "Beauty salon and boutique in Matola. Your beauty, our care." },
    footer_nav:         { pt: "NAVEGAÇÃO",       en: "NAVIGATION"     },
    footer_horario:     { pt: "HORÁRIO",         en: "HOURS"          },
    footer_dom:         { pt: "Dom: Fechado",    en: "Sun: Closed"    },
    footer_contacto:    { pt: "CONTACTO",        en: "CONTACT"        },

    // WhatsApp messages
    wa_servico:         { pt: "Olá, gostaria de agendar este serviço:\nServiço: {nome}\nLink: {link}", en: "Hello, I would like to book this service:\nService: {nome}\nLink: {link}" },
    wa_servico_opcao:   { pt: "\nOpção: {opcao}", en: "\nOption: {opcao}" },
    wa_servico_cor:     { pt: "\nCor: {cor}",     en: "\nColor: {cor}"    },
    wa_produto:         { pt: "Olá, gostaria de encomendar este produto:\nProduto: {nome}\nLink: {link}", en: "Hello, I would like to order this product:\nProduct: {nome}\nLink: {link}" },
    wa_produto_tamanho: { pt: "\nTamanho: {tamanho}", en: "\nSize: {tamanho}" },
    wa_produto_cor:     { pt: "\nCor: {cor}",          en: "\nColor: {cor}"    },
    wa_info:            { pt: "Olá, gostaria de mais informações sobre: {nome}\nLink: {link}", en: "Hello, I would like more information about: {nome}\nLink: {link}" }
};
