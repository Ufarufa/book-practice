import Categories from "./Categories";
import NewsList from "./NewsList";

function NewsPage({ match }) {
  const category = match.params.category || "all";
  return (
    <>
      <Categories category={category}></Categories>
      <NewsList category={category}></NewsList>
    </>
  );
}

export default NewsPage;
