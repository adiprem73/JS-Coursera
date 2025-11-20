let top3=["tajmahal", "jamamasjid", "redfort"];


function show(place1, place2, place3){
    console.log(place1," ",place2," ",place3);
}

show(top3[0], top3[1], top3[2]);

show(...top3);