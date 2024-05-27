function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data fetched');
      }, 2000);
    });
  }
  
  async function getData() {
    const data = await fetchData();
    console.log(data);
  }
  
  getData();