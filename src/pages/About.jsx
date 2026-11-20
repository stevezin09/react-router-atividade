import { Link } from "react-router-dom";

export default function About() {
  return (
    <section>
      <h1>About</h1>
      <p>
        Esta página demonstra navegação entre rotas, layout compartilhado e
        carregamento sob demanda com Suspense.
      </p>
      <div className="page-links">
        <Link to="/">Voltar para Home</Link>
        <Link to="/contact">Ir para Contact</Link>
      </div>
    </section>
  );
}