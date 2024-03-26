import Card from "./components/card/Card";
import data from "./data";
function App() {
  console.log(data);
  return (
    <>
      <h1>LANGUAGES</h1>
      {data.map(({ id, language, img, btnName }) => (
        <Card key={id} lang={language} img={img} btn={btnName} />
      ))}
    </>
  );
}

export default App;
