import React from "react";

class Video extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default Video;
