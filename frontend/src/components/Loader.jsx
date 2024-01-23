import { Spinner } from "react-bootstrap";

import React from 'react'

const Loader = () => {
  return (
    <Spinner
        animation="border"
        role="status"
        style={{
            
            height: "50px",
            width: "50px",
            margin: "auto",
            display: "block",
            color: "black",
            borderWidth: "10px"
        }}
    >

    </Spinner>

  )
}

export default Loader