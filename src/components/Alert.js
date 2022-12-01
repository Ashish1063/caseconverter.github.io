import React from 'react'

export default function Alert(props) {


    return (
        <div style={{height:'50px'}}> 
       { props.alert && <div className="Alert">
            <div class="alert alert-primary" role="alert">
                <strong>  {props.alert.msg}</strong>
            </div>
            </div>}
        </div>
    )
}
