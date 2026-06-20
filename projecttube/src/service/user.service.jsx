import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    relatedToVideoId: "7ghhRHRP6t4",

    type: "video",
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": "56ee3a4cf2msh371ba5c4ec784aep157d59jsna87afa1c0952",
    "x-rapidapi-host": "youtube-v3-alternative.p.rapidapi.com",
    "Content-Type": "application/json",
  },
};

export const ApiService = {
  async fetching(url) {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    // console.log(response);
    const arr = Object.entries(response.data.items);
    console.log(arr);
    return arr;
  },
};

// try {
//   const response = await axios.request(options);
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }
