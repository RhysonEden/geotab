import axios from "axios";

export async function getSomething() {
  try {
    const { data } = await axios.get("/api/geotab");
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getSomethingElse(id) {
  try {
    console.log(id);
    const { data } = await axios.get(`/api/geotab/${id}`);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}
