import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleRice } from '../store/singleRiceReducer';
import {putCart} from '../store/cartReducer'

class SingleRice extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const {singleRice} = this.props
    this.props.putCart(singleRice)
  }
	componentDidMount() {
		this.props.fetchSingleRice(this.props.match.params.riceId);
	}

	render() {
		const { singleRice } = this.props;
		return (
			<div className="singleProduct-page" key={singleRice.id}>
				<div className="product">
					<img className="riceIMG" src={singleRice.img} />
				</div>
				<div className="content">
					<div>
						<h2>{singleRice.name}</h2>
						<h3>Type: {singleRice.type}</h3>
						<h4>Description: {singleRice.description}</h4>
						<h3>Price: ${singleRice.price}</h3>
					</div>
					<button type="submit" onClick={() => this.handleClick()} id="addCart">ADD TO CART</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		singleRice: state.singleRiceReducer
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
    fetchSingleRice: (riceId) => dispatch(fetchSingleRice(riceId)),
    putCart: (item) => dispatch(putCart(item))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleRice);
