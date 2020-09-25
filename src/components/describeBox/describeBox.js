import React from 'react'

const DescribeBox = (props) => (

    <div class="jumbotron jumbotron-fluid" style={{padding:'2%',marginTop:'0.2rem'}}>
  <div class="container">
    <h1 class="display-4">{props.title}</h1>
    <p class="lead">{props.desc}</p>
  </div>
</div>

)

export default DescribeBox;

