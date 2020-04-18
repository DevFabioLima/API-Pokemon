import axios from 'axios';

class WeatherController {
  async getCity(req, res) {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=APPID`
      );
    } catch (err) {
      console.log(err);
    }
  }
  // Pegar a cidade do parms
  // Buscar na API
  // Regra de negocio
}
export default new WeatherController();
