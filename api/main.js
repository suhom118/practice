const API_KEY =
  "Vbl%2F2ISGC%2BufMUcn0aUtEHMPqNZJ7cKXQiUEi5CPOoCagVdG9GA%2BMlcvGe9uJDYVMMYZ17zI3DgKEhjhrjGMBw%3D%3D";
async function getData() {
  const url =
    "http://apis.data.go.kr/B552061/frequentzoneBicycle/getRestFrequentzoneBicycle?ServiceKey=$(API_KEY)&searchYearCd=20&siDo=30&guGun=200&type=json&numOfRows=10&pageNo=1";
  const response = await fetch(url);
  const data = await response.json();
  console.log("data", data);
}
getData();
