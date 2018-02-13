let tickButtonImgPath = "img\\tickButton.png";
let editButtonImgPath = "img\\editButton.png";

// adding applyButtons on page
let $tickButtonImgCommon = document.createElement('img');
let $tickButtonImgPrior = document.createElement('img');

$tickButtonImgCommon.src = tickButtonImgPath;
$tickButtonImgPrior.src = tickButtonImgPath;

document.getElementById("applyButtonCommon").appendChild($tickButtonImgCommon);
document.getElementById("applyButtonPrior").appendChild($tickButtonImgPrior);