import React , {useEffect, useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  
    const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=68f4bec107164e3584b98c2c6cac958e&page=${page}&pageSize=9`;
    setLoading(true );
    let data = await fetch(url);
    props.setProgress(40);
    let parseData = await data.json();
    props.setProgress(70);
    setArticles(parseData.articles);
    setLoading(false);
    setTotalResults(parseData.totalResults);
  
    props.setProgress(100);
  }

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, [])
  
 

  const fetchMoreData = async () => {
    // if (articles.length === totalResults) {
    //   setLoading(false); 
    // }
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=68f4bec107164e3584b98c2c6cac958e&page=${page+1}&pageSize=9`;
    setPage(page + 1);
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
  };

 
    return (
      <>
        /<h2 className="text-center" style={{marginTop: '90px'}}>Trending News</h2>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container my-3">
            <div className="row">
              {articles.map((element,index) => {
                return (
                  <div className="col-md-4" key={index}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description
                          ? element.description
                          : "The description is now available right now.Sorry for the inconvenience!"
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
}

News.defaultProps = {
  country: "in",
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
};

export default News;
