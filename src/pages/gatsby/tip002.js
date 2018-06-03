// src/pages/gatsby/tip002.js
import React from "react"
import Link from "gatsby-link"

export default ()=>
    <div>
        <h1>ページの追加MEMO</h1>
        <p>
            src/pages/gatsby/tip001.jsを追加しました. 
        </p>

        <Link to="/gatsby/tip001/">先頭へ</Link> &nbsp; 
        <Link to="/gatsby/tip003/">次へ</Link>
    </div>

