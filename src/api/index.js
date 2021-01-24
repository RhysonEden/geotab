import axios from "axios";

export async function getSomething() {
  try {
    const { data } = await axios.get("/api/geotab");
    console.log("Populate List Data", data);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getSomethingElse(id) {
  try {
    console.log(id);
    const { data } = await axios.get(`/api/geotab/${id}`);
    console.log("device data", data);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getSomeInfo(id) {
  try {
    console.log(id);
    const { data } = await axios.get(`/api/geotab/info/${id}`);
    console.log("device data", data);
    return data;
  } catch (error) {
    throw error;
  }
}
