import React from "react";

class DisplayVideo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("display video", this.props.link, this.props.i);
    return (
      <div className="youtube container-fluid" key={this.props.i}>
        <iframe
          width="560"
          height="315"
          src={this.props.link}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
}
export default DisplayVideo;
