import Header from "./components/Header";
import Routes from "./routes";
import GlobalStyle from "./global";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <GlobalStyle />
    </div>
  );
}
