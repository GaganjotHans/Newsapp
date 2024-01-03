import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }
async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=68f4bec107164e3584b98c2c6cac958e";
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({articles: parseData.articles})

}

  render() {
    return (
      <div className="container my-3">
        <h2>Treding News</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem  title={element.title?element.title:""} description={element.description?element.description:"The description is now available right now.Sorry for the inconvenience!"} imageUrl={
                element.urlToImage} newsUrl={element.url}/>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
