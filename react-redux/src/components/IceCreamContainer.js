import React from 'react'
import {connect} from 'react-redux';
import { buyIceCream } from '../redux'

function IceCreamContainer(props) {
    return (
        <div>
            <h2>No of Ice Cream - {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>ICE CREAM</button>
        </div>
    )
}



const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)
