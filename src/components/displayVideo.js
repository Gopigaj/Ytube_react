import React from "react";
import "./video.css";
class DisplayVideo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log("display video", this.props.link, this.props.i);
    console.log("display video", this.props.title);
    return (
      <div className="youtube container " key={this.props.i}>
        <iframe
          width="560"
          height="315"
          src={this.props.link}
          title={this.props.title}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

        <p>{this.props.title}</p>

        <p>{this.props.description}</p>
      </div>
    );
  }
}
export default DisplayVideo;
