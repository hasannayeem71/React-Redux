import React from 'react';
import { connect } from 'react-redux';
const Control = (props) => {
    return (
        <div>
            <button onClick={()=>props.INCREMENT()}>+ADD</button>
            <button onClick={()=>props.DECREMENT()}>-SUB</button>
        </div>
    );
};
const  mapDispatchToProps=(dispatch)=>{
    return {
        INCREMENT:()=>{
            dispatch({type:"INCREMENT"})
        }
        ,
        DECREMENT:()=>{
            dispatch({type:"DECREMENT"})
        }
    };
}

export default connect(null,mapDispatchToProps)(Control);