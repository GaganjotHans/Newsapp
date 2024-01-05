import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: false,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=68f4bec107164e3584b98c2c6cac958e&page=1&pageSize=9";
      this.setState({loading: true});
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading:false
    });
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=68f4bec107164e3584b98c2c6cac958e&page=${
      this.state.page - 1
    }&pageSize=9`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
      loading: false
    });
  };

  handleNextClick = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 9))) {
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=68f4bec107164e3584b98c2c6cac958e&page=${
        this.state.page + 1
      }&pageSize=9`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles,
        loading:false
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h2>Treding News</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={
                    element.description
                      ? element.description
                      : "The description is now available right now.Sorry for the inconvenience!"
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
          disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 9)}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
