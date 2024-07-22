const tictacgrid = document.querySelectorAll('.cell')
let tictactoearray = []
let previousturnofx
let winner=false
let winningoutcomes
let gameover=false


let message = document.getElementById('message')
const resetbutton = document.getElementById('reset-btn')

function ResetButton(ticgrid,arr){
  
  ticgrid.forEach((cell)=>{
    
    cell.innerText=""
    
    
    
  })
  arr.length=0
  console.log(arr)
  
  
  
}

function CheckWinner(arr){
  let winningoutcomes=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
  for(i=0;i<winningoutcomes.length;i++){
    const[a,b,c]=winningoutcomes[i]
    if(arr[a]&&arr[a]===arr[b]&&arr[a]===arr[c]){
      
      message.innerText=`${arr[a]} Wins`
      winner=true
      gameover=true
      return
      
      
      
     
    }
    
  }
  if(arr.length===9 && !arr.includes(undefined)){
    console.log(winner)
    message.innerText="Game is Draw"
   
    
    
  }
}

tictacgrid.forEach((cell, index) => {
  
  resetbutton.addEventListener('click', () => {
    tictactoearray = []
    cell.innerText = ""
    gameover=false
    message.innerText=''
  })
  
  cell.addEventListener('click', function()  {
    
    if(cell.innerText!=""||gameover ){
      return
    }else{
     
    if (!tictactoearray.includes('X') && !tictactoearray.includes('O')) {
      tictactoearray[index]='X'
      previousturnofx=true
      console.log(tictactoearray,index)
      cell.innerText = "X"





    } 
     else if (previousturnofx) {
      
      tictactoearray[index]='O'
      previousturnofx=false
      console.log(tictactoearray,index)
      cell.innerText = "O"
       CheckWinner(tictactoearray)
       

    } else {
       
      tictactoearray[index]='X'
      previousturnofx=true
      console.log(tictactoearray,index)
      cell.innerText = "X"
       CheckWinner(tictactoearray)

    }
     
    }
    })
})

