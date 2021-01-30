import axios from "axios";

export async function getSomething() {
  try {
    const { data } = await axios.get("/api/geotab");
    return data;
  } catch (error) {
    throw error;
  }
}

//Device Search
export async function getSomethingElse(id) {
  try {
    // let id = "b187";
    const { data } = await axios.get(`/api/geotab/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getSomeInfo(driver) {
  try {
    const { data } = await axios.get(`api/geotab/info/driver/${driver}`);
    console.log("123456", data);
    localStorage.setItem("driver", JSON.stringify(data));
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getGroupInfo(group) {
  try {
    const { data } = await axios.get(`/api/geotab/info/${group}`);
    localStorage.setItem("group", 1);
    return data;
  } catch (error) {
    throw error;
  }
}
