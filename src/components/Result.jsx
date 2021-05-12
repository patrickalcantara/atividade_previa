export default function Result({ type }) {
  let text = "";
  let styleClas = "";
  if (type === "ok") {
    text = "Você está no peso ideal";
    styleClas = "result-ok";
  } else if (type === "up") {
    text = "Você está acima do peso";
    styleClas = "result-danger";
  } else if (type === "down") {
    text = "Você está abaixo do peso";
    styleClas = "result-warning";
  }

  return (
    <div>
      <p>Resultado:</p>
      <h5 className={styleClas}>{text}</h5>
    </div>
  );
}
