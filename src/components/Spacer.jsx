import React from 'react'
const Spacer = (props) => {
    const style = {
        width: '100%',
        height: props.height
    }

    return <div style={style}></div>
}
export default Spacer;