import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  try {
    const URL = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`;
    const options = {
      url: URL,
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng
      },
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com"
      }
    };

    const {
      data: { data }
    } = await axios.get(URL, options);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    const URL = "https://community-open-weather-map.p.rapidapi.com/find";
    const options = {
      params: {
        lon: lng,
        lat: lat
      },
      headers: {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY
      }
    };

    const { data } = await axios.get(URL, options);

    return data;
  } catch (error) {
    console.log(error);
  }
};
