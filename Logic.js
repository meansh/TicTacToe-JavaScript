function winOrLoss(pos[x]){
if (pos[0] != "0" && pos[0] == pos[1] && pos[1] == pos[2]) print("Player wins");
else if (pos[3] != "0" && pos[3] == pos[4] && pos[4] == pos[5]) print("Win");
else if (pos[6] != "0" && pos[6] == pos[7] && pos[7] == pos[8]) print("Win");
else if (pos[0] != "0" && pos[0] == pos[3] && pos[3] == pos[6]) print("Win");
else if (pos[1] != "0" && pos[1] == pos[4] && pos[4] == pos[7]) print("Win");
else if (pos[2] != "0" && pos[2] == pos[5] && pos[5] == pos[8]) print("Win");
//ANCHOR
else if (pos[0] != "0" && pos[0] == pos[4] && pos[4] == pos[8]) print("Win");
else if (pos[2] != "0" && pos[2] == pos[4] && pos[4] == pos[6]) print("Win");
else print("loss");
}
