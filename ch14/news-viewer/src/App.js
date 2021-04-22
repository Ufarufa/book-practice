import "./App.css";
import { useCallback, useState } from "react";

import NewsList from "./components/NewsList";
import Categories from "./components/Categories";
import NewsPage from "./components/NewsPage";
import { Route } from "react-router";

function App() {
  //const [data, setData] = useState(null);
  /* const onClick = async () => {
      try {
        const res = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=kr&apiKey=06aea1682c37435ab4a9849acf73118a"
        );
  
        setData(res.data);
      } catch (error) {}
    }; */

  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => {
    setCategory(category);
  }, []);

  return (
    <div>
      <Route path="/:category?" component={NewsPage} />
      {/* <Categories category={category} onSelect={onSelect}></Categories>
      <NewsList category={category} /> */}
      {/*  <button onClick={onClick}>불러오기</button>
      <div>
        {" "}
        {data && (
          <textarea
            name=""
            id=""
            rows="40"
            value={JSON.stringify(data, null, 2)}
            style={{ width: "100%", height: "100%" }}
          ></textarea>
        )}
      </div> */}
    </div>
  );
}

export default App;
