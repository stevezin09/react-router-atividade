import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section>
      <h1>Home</h1>
      <p>Bem-vindo à página inicial da aplicação com React Router.</p>
      <div className="page-links">
        <Link to="/about">Ir para About</Link>
        <Link to="/contact">Ir para Contact</Link>
        <Link to="/user/7">Ver Usuário 7</Link>
      </div>
    </section>
  );
}