// src/layouts/index.js
import React from "react"

export default ({children})=>
    <div style={{margin:'0 auto', maxWidth:800, padding:'0 1rem'}}>
        <h1>Gatsby test site</h1>
        <hr />
        {children()}
    </div>
