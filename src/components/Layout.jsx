import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="header">
      <div className="brand">Meu Site React</div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/user/1">Perfil #1</Link>
      </nav>
    </header>
  );
}

export function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Atalhos</h3>
      <ul>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>
        <li>
          <Link to="/user/10">Usuário 10</Link>
        </li>
        <li>
          <Link to="/user/42">Usuário 42</Link>
        </li>
        <li>
          <Link to="/rota-inexistente">Testar 404</Link>
        </li>
      </ul>
    </aside>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <p>Atividade Prática - React Router, Layout e Performance</p>
    </footer>
  );
}

export function Layout({ children }) {
  return (
    <div className="app-shell">
      <Header />
      <div className="content-area">
        <Sidebar />
        <main className="main-panel">{children}</main>
      </div>
      <Footer />
    </div>
  );
}