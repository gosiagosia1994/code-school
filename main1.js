function start()
{
    document.getElementById("mainText").innerText = "hello world 2";
    document.getElementById("mainText").style.color = "blue";
}

function changeColor(id)
{
    document.getElementById(id).style.backgroundColor = "darkgray";

}
// function setMark(id){
//     document.getElementById(id).className = "col-sm item circle"
// }
//  var markTable=[];
//   for( var i=0;i<3;i++){
//       for( var j=0;j<3;j++){
//         markTable[i][j]=0;
//       }
//  }
// function fillingTable(id){
//     if( id=="1"||id=="2"||id=="3"){
//         marTable[0][id]=player;  
//     }
//     if( id=="4"||id=="5"||id=="6"){
//         marTable[1][id]=player;  
//     }
//     if( id=="7"||id=="8"||id=="9"){
//         marTable[2][id]=player;  
//     }
// }
var marTable=[[0,0,0],[0,0,0],[0,0,0]];
var player = 1;
function setMark(id){ 
    if ( player == 1 )
    {
        document.getElementById(id).className="col-sm item cross";
        // fillingTable(id);
        // console.log(markTable);
        if( id=="1"||id=="2"||id=="3"){
            marTable[0][parseInt(id)-1]=1;  
        }
        if( id=="4"||id=="d5"||id=="d6"){
            marTable[1][parseInt(id)-4]=1;  
        }
        if( id=="7"||id=="8"||id=="9"){
            marTable[2][parseInt(id)-7]=1;  
        }
        console.log(marTable)
        win(1);
        player = 0;
    } else
     {
        document.getElementById(id).className = "col-sm item circle";  
        //fillingTable(id);  
        //console.log(markTable);
        if( id=="1"||id=="2"||id=="3"){
            marTable[0][1]=2;  
        }
        if( id=="4"||id=="5"||id=="6"){
            marTable[1][parseInt(id)-4]=2;  
        }
        if( id=="7"||id=="8"||id=="9"){
            marTable[2][parseInt(id)-7]=2;  
        }
        console.log(marTable);
        win(2);
        player = 1;
    }   
}
function win(i){
     if(marTable[0]==[i,i,i]||marTable[1]==[i,i,i]||marTable[1]==[i,i,i]|
        (marTable[0][0]==i & marTable[1][1]==i&marTable[2][2]==i)||
        (marTable[0][2]==i & marTable[1][1]==i&marTable[2][0]==i)||
        (marTable[0][0]==i & marTable[0][1]==i&marTable[0][2]==i)||
        (marTable[1][0]==i & marTable[1][1]==i&marTable[1][2]==i)||
        (marTable[2][0]==i & marTable[2][1]==i&marTable[2][2]==i)){
         alert("wygrał gracz"+ i);  
    }
}
function reset(id)
{
    document.getElementById(id).style.backgroundColor = "lightgrey";
}
