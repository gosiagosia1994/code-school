function start()
{
    document.getElementById("mainText").innerText = "hello world 2";
    document.getElementById("mainText").style.color = "blue";
}

function changeColor(id)
{
    document.getElementById(id).style.backgroundColor = "darkgray";

}

function setMark(id)
{
    document.getElementById(id).className = "col-sm item cross";
}


function reset(id)
{
    document.getElementById(id).style.backgroundColor = "lightgrey";
}