/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

function App() {
  const [cells,setCells] = useState(["","","","","","","","",""])
  const [turn,setTurn] = useState("X")
  const [winMsg,setWinMsg]=useState("")
  useEffect(()=>{
    checkWinning.forEach((row)=>{
    const xWinner = row.every(cell=>cells[cell]=="X")
    const oWinner = row.every(cell=>cells[cell]=="O")
    const draw = cells.every(c=>(c!=""))
    if(xWinner){
      setWinMsg("X Wins !")}
    else if(oWinner){
      setWinMsg("O Wins !")
    }else if(draw){
      setWinMsg("Draw !")
    }
   })
  },[turn])
  const checkWinning = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]
  function handelCell(e){
    if(!winMsg){
    let copy = cells
    let cellId = e.target.id
    if(copy[cellId]==""){
    if(turn == "X"){
      copy[cellId]="X"
      setCells(copy)
      setTurn("O")
    }else{
      copy[cellId]="O"
      setCells(copy)
      setTurn("X")
    }
    console.log(cells)
  }
}
  }
  return ( 
    <>
    <div className="main d-flex align-items-center justify-content-center">
    <h1 className="winnerMsg my-3">
      {winMsg}
    </h1>
    <div className="contain d-flex">
      {cells.map((cell,index)=>(
        <div id={index} key={index} className=" playing-msg text-white playing-cell d-flex align-items-center justify-content-center fw-bold" onClick={handelCell}>
           {cells[index]}
          </div>
      ))}
    </div>
    <button className="px-4 py-1 my-3 reset-button rounded-4" onClick={e=>{
      setCells(["","","","","","","","",""])
      setWinMsg("")
    }}>
      Restart
    </button>
    </div>
      

    </>
   );
}

export default App;