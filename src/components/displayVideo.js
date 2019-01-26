import React from "react";

class DisplayVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      link: this.props.link,
      i: this.props.i
    };
  }
  render() {
    console.log("display video", this.state.link, this.state.i);
    return (
      <div className="youtube container-fluid" key={this.state.i}>
        <iframe
          width="560"
          height="315"
          src={this.state.link}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
}
export default DisplayVideo;
