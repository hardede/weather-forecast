import ChooseCity from "./components/ChooseCity/ChooseCity";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Forecast from "./components/Forecast/Forecast";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <Layout>
      <ChooseCity />
      <CurrentWeather />
      <Forecast />
    </Layout>
  );
};

export default App;
