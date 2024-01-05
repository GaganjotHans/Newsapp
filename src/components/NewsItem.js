import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              !imageUrl
                ? "https://images.foxweather.com/static.foxweather.com/www.foxweather.com/content/uploads/2023/06/1024/512/GettyImages-1242931997.jpg?ve=1&tl=1"
                : imageUrl
            }
            className="card-img-top" style={{ height: "16rem" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-dark btn-sm"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
