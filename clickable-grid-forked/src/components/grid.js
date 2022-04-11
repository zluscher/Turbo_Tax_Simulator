import React from "react";

function CustomAlert(){
  this.alert = function(message,title){
    document.body.innerHTML = document.body.innerHTML + '<div id="dialogoverlay"></div><div id="dialogbox" class="slit-in-vertical"><div><div id="dialogboxhead"></div><div id="dialogboxbody"></div><div id="dialogboxfoot"></div></div></div>';

    let dialogoverlay = document.getElementById('dialogoverlay');
    let dialogbox = document.getElementById('dialogbox');
    
    let winH = window.innerHeight;
    dialogoverlay.style.height = winH+"px";
    
    dialogbox.style.top = "100px";

    dialogoverlay.style.display = "block";
    dialogbox.style.display = "block";
    
    document.getElementById('dialogboxhead').style.display = 'block';

    if(typeof title === 'undefined') {
      document.getElementById('dialogboxhead').style.display = 'none';
    } else {
      document.getElementById('dialogboxhead').innerHTML = '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> '+ title;
    }
    document.getElementById('dialogboxbody').innerHTML = message;
  }
  
  this.ok = function(){
    document.getElementById('dialogbox').style.display = "none";
    document.getElementById('dialogoverlay').style.display = "none";
  }
}

let customAlert = new CustomAlert();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


let Number = getRandomInt(-10000);
const Grid = ({
  grid,
  handleGridSize,
  inputCells,
  setCells,
  inputRows,
  setRows
}) => {
  const cells = new Array(grid.cells).fill(0);
  const rows = new Array(grid.rows).fill(0);

  const handleClick = (e) => {
    const item = e.target;
    if (inputRows > 8){ customAlert.alert('','You\'re Going to Jail')}
    else{
      if (item.classList.contains("selected")) {
        item.classList.remove("selected");
        Number = getRandomInt(10000)
        inputRows -= 1;
        inputCells -= 1;
        setRows(inputRows);
        setCells(inputCells);
      } else {
        item.classList.add("selected");
        Number = getRandomInt(-10000)
        inputRows += 1;
        inputCells += 1;
        setRows(inputRows);
        setCells(inputCells);
      }
    }
  };

  return (
    <main>
      <h1>Turbo Tax</h1>
      <h2>Expected Return ${Number}</h2>
      {rows.map((row, index) => (
        <ul className="row" key={index}>
          {cells.map((cell, index) => (
            <li key={index} className="item" onClick={handleClick} />
          ))}
        </ul>
      ))}

      {/* <div>
        <label htmlFor="cells">Define cells in the row</label>
        <input
          type="text"
          placeholder="Define cells in the row"
          id="cells"
          value={inputCells}
          onChange={(e) => setCells(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="rows">Define rows</label>
        <input
          type="text"
          placeholder="Define rows"
          id="rows"
          value={inputRows}
          onChange={(e) => setRows(e.target.value)}
        />
      </div> */}

      <button onClick={handleGridSize}>Proceed</button>
    </main>
  );
};

export default Grid;
