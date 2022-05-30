import React, {useState} from "react";

const Incrementar = ()=>{
  const [contador, setContador] = useState(0);
  return(
    <div>
      <p> El valor actual del contador es: {contador}</p>
      <button onClick={()=>{
        setContador(contador + 1)
      }}
      > Incrementar </button>
    </div>
  )
}
export {Incrementar};