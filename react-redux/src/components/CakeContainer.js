import React from 'react'
import {connect} from 'react-redux';
import { buyCake } from '../redux'

function CakeContainer(props) {
    return (
        <div>
            <h2>No of Cake - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>CAKE</button>
        </div>
    )
}



const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)
