import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section>
      <h1>404 - Página não encontrada</h1>
      <p>A rota acessada não existe nesta aplicação.</p>
      <div className="page-links">
        <Link to="/">Voltar para o início</Link>
      </div>
    </section>
  );
}