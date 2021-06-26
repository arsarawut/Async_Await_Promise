const loadData = async () => {
  try {
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      console.log(res.status);
    } else {
      console.log(res.status);
    }
  } catch (err) {
    console.log(err);
  }
};

loadData();

//Promise All
const loadData2 = async () => {
  try {
    const url1 = "https://jsonplaceholder.typicode.com/todos/1";
    const url2 = "https://jsonplaceholder.typicode.com/todos/2";
    const url3 = "https://jsonplaceholder.typicode.com/todos/3";
    const results = await Promise.all([fetch(url1), fetch(url2), fetch(url3)]);
    const dataPromises = await results.map((result) => result.json());
    const finalData = Promise.all(dataPromises);
    return finalData;
  } catch (err) {
    console.log(err);
  }
};

const data = loadData2().then((data) => console.log(data));
