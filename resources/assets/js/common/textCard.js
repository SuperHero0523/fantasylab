import React from 'react'
import PropTypes from 'prop-types'
import ReactHoverObserver from 'react-hover-observer';

class TextCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hoverStyle: {
                borderBottom: '2px solid',
                cursor: 'pointer',
                borderColor: this.props.color
            }
        }
    }

    render() {
        const {hoverStyle} = this.state;
        return (
            <ReactHoverObserver className='text-card-observer'>
                {({ isHovering }) => (
                    <div className="text-card" style={isHovering?hoverStyle:{}}>
                        <div className="title">
                            <p>{this.props.title}</p>
                        </div>
                        <div className="description">
                            <p>{this.props.description}</p>
                        </div>
                    </div>
                )}
            </ReactHoverObserver>
        );
    }
}

TextCard.propTypes = {
    color: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string
};
export default TextCard;