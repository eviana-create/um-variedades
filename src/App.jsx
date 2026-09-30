import "./App.css";

const categorias = [
  { nome: "Mercearia", emoji: "🛒" },
  { nome: "Bebidas", emoji: "🥤" },
  { nome: "Carnes", emoji: "🥩" },
  { nome: "Hortifruti", emoji: "🥬" },
  { nome: "Laticínios", emoji: "🥛" },
  { nome: "Limpeza", emoji: "🧹" },
  { nome: "Higiene", emoji: "🧴" },
  { nome: "Padaria", emoji: "🥖" },
];

const ofertas = [
  {
    id: 1,
    nome: "Arroz Branco 5kg",
    descricao: "Arroz tipo 1",
    preco: "29,90",
    promocional: "24,99",
    imagem:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 2,
    nome: "Café Torrado 500g",
    descricao: "Café tradicional",
    preco: "19,90",
    promocional: "15,99",
    imagem:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 3,
    nome: "Leite Integral 1L",
    descricao: "Leite integral",
    preco: "6,49",
    promocional: "4,99",
    imagem:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 4,
    nome: "Óleo de Soja 900ml",
    descricao: "Óleo vegetal",
    preco: "8,99",
    promocional: "6,99",
    imagem:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=700&q=80",
  },
];

const produtos = [
  {
    id: 5,
    nome: "Feijão Carioca 1kg",
    preco: "7,99",
    imagem:
      "https://images.unsplash.com/photo-1551462147-ff29053bfc14?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 6,
    nome: "Açúcar Cristal 5kg",
    preco: "18,90",
    imagem:
      "https://images.unsplash.com/photo-1581268491718-50f44d6c1d2c?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 7,
    nome: "Macarrão Espaguete 500g",
    preco: "4,99",
    imagem:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 8,
    nome: "Molho de Tomate 300g",
    preco: "2,99",
    imagem:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80",
  },
];

function App() {
  return (
    <div className="app">
      {/* TOPO */}
      <header className="header">
        <div className="header-container">
          <a href="/" className="logo-link">
            <img
              src="/um-variedades.jpg"
              alt="um variedades"
              className="logo"
            />
          </a>

          <div className="search">
            <input
              type="text"
              placeholder="O que você está procurando?"
            />
            <button type="button" aria-label="Buscar">
              🔍
            </button>
          </div>

          <button className="menu-button" type="button">
            ☰
          </button>
        </div>

        <nav className="navigation">
          <div className="navigation-container">
            <a href="#inicio">Início</a>
            <a href="#categorias">Categorias</a>
            <a href="#ofertas">Ofertas</a>
            <a href="#produtos">Produtos</a>
          </div>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="inicio">
          <div className="hero-container">
            <div className="hero-content">
              <span className="hero-label">🔥 OFERTAS DO DIA</span>

              <h1>
                Preços baixos de verdade.
                <strong> Todo dia.</strong>
              </h1>

              <p>
                Encontre produtos, ofertas e promoções especiais no
                Rasga-Preço.
              </p>

              <a href="#ofertas" className="hero-button">
                Ver ofertas
                <span>→</span>
              </a>
            </div>

            <div className="hero-decoration">
              <div className="price-badge">
                <small>PROMOÇÕES E</small>
                <strong>MUITAS OFERTAS</strong>
              </div>

              <div className="sale-text">RASGA!</div>
            </div>
          </div>
        </section>

        {/* CATEGORIAS */}
        <section className="categories section" id="categorias">
          <div className="section-header">
            <div>
              <span className="section-label">ENCONTRE O QUE PRECISA</span>
              <h2>Categorias</h2>
            </div>

            <button type="button" className="see-all">
              Ver todas →
            </button>
          </div>

          <div className="category-grid">
            {categorias.map((categoria) => (
              <button
                className="category-card"
                key={categoria.nome}
                type="button"
              >
                <span className="category-icon">{categoria.emoji}</span>
                <strong>{categoria.nome}</strong>
              </button>
            ))}
          </div>
        </section>

        {/* OFERTAS */}
        <section className="offers section" id="ofertas">
          <div className="section-header">
            <div>
              <span className="section-label">SÓ NO RASGA-PREÇO</span>
              <h2>Ofertas do dia 🔥</h2>
            </div>

            <button type="button" className="see-all">
              Ver todas →
            </button>
          </div>

          <div className="product-grid">
            {ofertas.map((produto) => (
              <article className="product-card" key={produto.id}>
                <div className="product-image">
                  <span className="offer-tag">OFERTA</span>

                  <button
                    className="favorite"
                    type="button"
                    aria-label={`Favoritar ${produto.nome}`}
                  >
                    ♡
                  </button>

                  <img src={produto.imagem} alt={produto.nome} />
                </div>

                <div className="product-info">
                  <span className="product-description">
                    {produto.descricao}
                  </span>

                  <h3>{produto.nome}</h3>

                  <div className="product-price">
                    <span>De R$ {produto.preco}</span>
                    <strong>R$ {produto.promocional}</strong>
                  </div>

                  <button className="product-button" type="button">
                    Ver produto
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* BANNER */}
        <section className="promotion-banner">
          <div>
            <span>Um Variedades</span>
            <h2>Promoções que cabem no seu bolso.</h2>
            <p>
              Confira nossas ofertas e economize nas suas compras.
            </p>
          </div>

          <strong className="discount">ATÉ 50% OFF</strong>
        </section>

        {/* PRODUTOS */}
        <section className="products section" id="produtos">
          <div className="section-header">
            <div>
              <span className="section-label">QUALIDADE E ECONOMIA</span>
              <h2>Produtos</h2>
            </div>

            <button type="button" className="see-all">
              Ver todos →
            </button>
          </div>

          <div className="product-grid">
            {produtos.map((produto) => (
              <article className="product-card" key={produto.id}>
                <div className="product-image">
                  <button
                    className="favorite"
                    type="button"
                    aria-label={`Favoritar ${produto.nome}`}
                  >
                    ♡
                  </button>

                  <img src={produto.imagem} alt={produto.nome} />
                </div>

                <div className="product-info">
                  <span className="product-description">
                    Produto selecionado
                  </span>

                  <h3>{produto.nome}</h3>

                  <div className="product-price single-price">
                    <strong>R$ {produto.preco}</strong>
                  </div>

                  <button className="product-button" type="button">
                    Ver produto
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <img
              src="/um-variedades.jpg"
              alt="Um Variedades"
            />

            <p>
              Promoções diárias e preços que fazem a diferença.
            </p>
          </div>

          <div className="footer-column">
            <h3>Rasga-Preço</h3>
            <a href="#inicio">Início</a>
            <a href="#categorias">Categorias</a>
            <a href="#ofertas">Ofertas</a>
            <a href="#produtos">Produtos</a>
          </div>

          <div className="footer-column">
            <h3>Atendimento</h3>
            <span>Segunda a sábado</span>
            <span>Consulte nossos horários</span>
            <span>📱 WhatsApp</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Rasga-Preço. Todos os direitos
            reservados.
          </span>

          <span>Desenvolvido com tecnologia PWA</span>
        </div>
      </footer>
    </div>
  );
}

export default App;