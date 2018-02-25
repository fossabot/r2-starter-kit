/* global setTimeout */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FadeOutImage extends Component {
    static propTypes = {
        url: PropTypes.string,
        placeholderUrl: PropTypes.string
    }
    constructor(props) {
        super();
        this.state = { url: props.placeholderUrl };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ url: nextProps.placeholderUrl });
    }
    handleImageOnload = (url) => {
        this.setState({ url });
        this.component.style.filter = 'blur(0)';
    }
    render() {
        const { url } = this.state;
        const { url: selfUrl } = this.props;
        return (
            <div>
                <img
                  ref={c => this.component = c}
                  src={url}
                  style={{ filter: 'blur(5px)' }}
                />
                <img
                  id="preload_image"
                  src={selfUrl}
                  onLoad={() => setTimeout(() =>
                    this.handleImageOnload(selfUrl),
                    500
                  )}
                  style={{ display: "none" }}
                />
            </div>
        );
    }
}