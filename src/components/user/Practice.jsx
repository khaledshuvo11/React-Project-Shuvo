import React, { useState } from 'react'

export default function Practice() {
    const [name, setName] = useState("Shuvo");
  return (
    <>
        <h1>My name is {name}</h1>
        <button type="button" onClick={() => setName("Rifat")}>Rifat</button>
        <button type="button" onClick={() => setName("Shamim")}>Shamim</button>
        <button type="button" onClick={() => setName("Borhan")}>Borhan</button>
    </>
  )
}
