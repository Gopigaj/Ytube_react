import React from "react";
import "./video.css";

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      link: "",
      i: ""
    };
    this.playVideo = this.playVideo.bind(this);
  }

  playVideo() {
    this.props.onChange(
      this.props.link,
      this.props.index,
      this.props.title,
      this.props.description
    );
    console.log("clicked", this.props.link, this.props.index, this.props.title);
  }
  render() {
    //console.log(this.props.resu);
    return (
      <div onClick={this.playVideo} className="videoThumbnail">
        <div className="row pb-3 pt-1 pl-3">
          <div className="col-md-2">
            <img src={this.props.image} />
          </div>
          <div className="col-md-8 pl-5">
            <p>{this.props.title}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Video;
