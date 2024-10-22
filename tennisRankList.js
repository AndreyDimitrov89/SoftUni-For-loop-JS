function tennisRankList(input) {
    let tournamentCount = Number(input[0]);
    let initialPoints = Number(input[1]);
    let pointsWon = 0;
    let winCount = 0;
    for (let i = 2; tournamentCount + 2; i++) {
        let tournamentResult = input[i];
        if ( tournamentResult === "W") {
            pointsWon += 2000;
            winCount++;
        } else if (tournamentResult === "F") {
            pointsWon += 1200;
        } else if (tournamentResult === "SF") {
            pointsWon += 720; 
        }
    }
    let avgPoints = pointsWon / tournamentCount;
    let winPercent = (winCount / tournamentCount) * 100;
    console.log(`Final points: ${initialPoints + pointsWon}`);
    console.log(`Average point: ${Math.floor(avgPoints)}`);
    console.log(`${winPercent.toFixed(2)}%`);
    
    
}
tennisRankList([5, 1400], "F", "SF", "W", "W", "SF")
    