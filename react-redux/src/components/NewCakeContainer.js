import React,{useState} from 'react'
import {connect} from 'react-redux';
import { buyCake } from '../redux'

function NewCakeContainer(props) {
    
    const [number,setNumber] = useState(1);
    return (
        <div>
            <h2>No of Cake - {props.numOfCakes}</h2>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={() => props.buyCake(number)}>Buy Number of Cake</button>
        </div>
    )
}



const mapDispatchToProps = dispatch => {
    return {
        buyCake: number => dispatch(buyCake(number))
    }
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer)
