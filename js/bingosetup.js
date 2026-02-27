var conferenceName;
var boardImage = "./images/skaifoBoop.png";
var boardExists = false;

function newbingo() {
  var e = document.getElementById("conference");
  conferenceName = e.options[e.selectedIndex].value;
  var shortname = conferenceName.split(' ').join('');
  var bingoList = 'bingoList' + shortname;

  Generic();
  Nuzlocke();

  if (boardExists === false){
    initBoard();
    boardExists = true;
  }

  srl.bingo(window[bingoList], 5, conferenceName);

  switch (conferenceName) {
    case "Nuzlocke":
      $('#FreeSpace').attr('src',"./images/skaifoBoop.png");
      break;
    default:
      $('#FreeSpace').attr('src',"./images/skaifoBoop.png");
      break;
  }
}

