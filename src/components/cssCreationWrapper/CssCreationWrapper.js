import React from 'react';
import IntersectionVisible from 'react-intersection-visible';
import './cssCreationWrapper.scss';

class CssCreationWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.onHide = this.onHide.bind(this);
    this.onShow = this.onShow.bind(this);
  }

  onHide(entries) {
    this.ref.current.style.setProperty('--animation-play-state', 'paused');
  }

  onShow(entries) {
    this.ref.current.style.setProperty('--animation-play-state', 'running');
  }

  render() {
    return (
      <IntersectionVisible onHide={this.onHide} onShow={this.onShow}>
        <article className="css-creation" ref={this.ref}>
          <h3 className="css-creation__heading">{this.props.heading}</h3>
          {this.props.children}
        </article>
      </IntersectionVisible>
    );
  }
}

export default CssCreationWrapper;
