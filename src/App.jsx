import { useState, useEffect } from "react";
import "./App.css";

function App() {

  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    const tarefasSalvas = localStorage.getItem("tarefas");

    if (tarefasSalvas) {
      setTarefas(JSON.parse(tarefasSalvas));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  function adicionarTarefa() {

    if (tarefa === "") return;

    const novaLista = [...tarefas, tarefa];

    setTarefas(novaLista);
    setTarefa("");
  }

  function removerTarefa(index) {

    const novaLista = tarefas.filter((_, i) => i !== index);

    setTarefas(novaLista);
  }

  return (
    <div className="container">

      <h1>Lista de Tarefas</h1>

      <div className="input-area">

        <input
          type="text"
          placeholder="Digite uma tarefa..."
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
        />

        <button onClick={adicionarTarefa}>
          Adicionar
        </button>

      </div>

      <ul>

        {tarefas.map((item, index) => (

          <li key={index}>

            {item}

            <button onClick={() => removerTarefa(index)}>
              Remover
            </button>

          </li>

        ))}

      </ul>

    </div>
  );
}

export default App;