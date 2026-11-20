import { Link, useParams } from "react-router-dom";

export default function UserProfile() {
  const { id } = useParams();

  return (
    <section>
      <h1>Perfil do Usuário</h1>
      <p>
        Exibindo conteúdo dinâmico para o parâmetro de URL:{" "}
        <strong>ID #{id}</strong>
      </p>
      <div className="page-links">
        <Link to="/user/1">Usuário #1</Link>
        <Link to="/user/2">Usuário #2</Link>
        <Link to="/">Voltar para Home</Link>
      </div>
    </section>
  );
}