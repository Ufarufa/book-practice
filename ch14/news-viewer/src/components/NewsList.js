import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";

const NewListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

function NewsList({ category }) {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const query = category === "all" ? "" : `&category=${category}`;

      try {
        const res = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=06aea1682c37435ab4a9849acf73118a`
        );

        setArticle(res.data.articles);
      } catch (error) {}

      setLoading(false);
    };

    fetchData();
  }, [category]);

  if (loading) return <NewListBlock> 로딩중</NewListBlock>;
  if (!article) return null;

  return (
    <NewListBlock>
      {article.map((article) => {
        return <NewsItem key={article.url} article={article}></NewsItem>;
      })}
    </NewListBlock>
  );
}

export default NewsList;
