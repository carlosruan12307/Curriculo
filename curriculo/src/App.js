import "./App.css";
import unifor from "./assets/unifor-logo.png";

function App() {
  return (
    <div className="main d-flex">
      <div className="dados">
        <section className="foto-conteudo">
          <i class="fa-solid fa-user fa-10x foto"></i>
          <h1 className="nome">Carlos Ruan Araujo</h1>
          <h1 className="sou">Desenvolvedor Web</h1>
          <hr></hr>
        </section>
        <section className="conteiner-c">
          <h1>Contatos</h1>
          <h5 className="contato">
            <i class="fa-solid fa-phone me-2 "></i>+55 (85) 988556401
          </h5>
          <h5 className="contato">
            <i class="fa-solid fa-envelope me-2 "></i>
            carlosruanaraujo789@gmail.com
          </h5>
          <a
            href="https://www.linkedin.com/in/ruan-araujo-2aa28425a/"
            className="h5 contato"
          >
            <i class="fa-brands fa-linkedin  me-2"></i>
            linkedin.com/in/ruan-araujo-2aa28425a/
          </a>
          <a href="https://github.com/carlosruan12307" className="h5 contato">
            <i class="fa-brands fa-github  me-2"></i>github.com/carlosruan12307
          </a>
        </section>
        <section className="conteiner-c mt-5">
          <h1>Formacação Acadêmica</h1>
          <div className="conteiner-flex-logo">
            <img alt="" className="logo-unifor" src={unifor}></img>
            <h5 className="mt-2 text-white">Unifor -&gt; 2019 - Atual</h5>
          </div>
        </section>
      </div>
      <div className="aprofundado border border-danger">
        <section className="sobre-min">a</section>
      </div>
    </div>
  );
}

export default App;
