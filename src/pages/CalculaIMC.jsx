import { useState } from "react";
import Header from "../components/Header";
import Result from "../components/Result";

export default function CalculaIMC() {
  const [result, setResult] = useState("");
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [sexo, setSexo] = useState("");

  function handleCalcluaIMC(event) {
    event.preventDefault();
    const imc = parseFloat(peso / (altura * altura));

    if (sexo === "1") {
      if (imc < 20.7) setResult("down");
      if (imc >= 20.7 && imc < 26.5) setResult("ok");
      if (imc >= 26.5) setResult("up");
    } else if (sexo === "2") {
      if (imc < 19.1) setResult("down");
      if (imc >= 19.1 && imc < 25.9) setResult("ok");
      if (imc >= 25.9) setResult("up");
    }
  }

  return (
    <div className="container page-content">
      <Header>Calcula IMC</Header>
      <main>
        <div className="row">
          <div className="input-field col s12">
            <label htmlFor="altura">Informe sua altura</label>
            <input
              id="altura"
              value={altura}
              type="number"
              step="0.1"
              onChange={(event) => {
                setAltura(event.target.value);
              }}
            />
          </div>
          <div className="input-field col s12">
            <label htmlFor="peso">Informe seu peso</label>
            <input
              id="peso"
              value={peso}
              type="number"
              onChange={(event) => {
                setPeso(event.target.value);
              }}
            />
          </div>
          <div className="input-field col s12">
            <select
              defaultValue=""
              onChange={(event) => {
                setSexo(event.target.value);
              }}
              id="sexo"
            >
              <option value="" disabled>
                Selecione o sexo
              </option>
              <option value="1">Masculino</option>
              <option value="2">Feminino</option>
            </select>
            <label>Sexo</label>
          </div>

          <div className="input-field col s3">
            <button
              className="btn waves-effect waves-light"
              onClick={handleCalcluaIMC}
            >
              Calcular
            </button>
          </div>
        </div>
      </main>
      <Result type={result} />
    </div>
  );
}
