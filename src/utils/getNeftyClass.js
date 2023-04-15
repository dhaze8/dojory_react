const getHpScore = (nefty) => {
    switch (nefty) {
      case "Blockchoy":
        return 5;
      case "Bitebit":
        return 4;
      case "Dipking":
        return 4;
      case "Dinobit":
        return 4;
      case "Zzoo":
        return 4;
      case "Shiba Ignite":
        return 5;
    }
  };
  
  const getAtkScore = (nefty) => {
    switch (nefty) {
      case "Blockchoy":
        return 1;
      case "Bitebit":
        return 5;
      case "Dipking":
        return 1;
      case "Dinobit":
        return 3;
      case "Zzoo":
        return 5;
      case "Shiba Ignite":
        return 4;
    }
  };
  
  const getDefScore = (nefty) => {
    switch (nefty) {
      case "Blockchoy":
        return 4;
      case "Bitebit":
        return 4;
      case "Dipking":
        return 2;
      case "Dinobit":
        return 4;
      case "Zzoo":
        return 3;
      case "Shiba Ignite":
        return 5;
    }
  };
  
  const getethAtkScore = (nefty) => {
    switch (nefty) {
      case "Blockchoy":
        return 5;
      case "Bitebit":
        return 1;
      case "Dipking":
        return 5;
      case "Dinobit":
        return 2;
      case "Zzoo":
        return 5;
      case "Shiba Ignite":
        return 3;
    }
  };
  
  const getethDefScore = (nefty) => {
    switch (nefty) {
      case "Blockchoy":
        return 4;
      case "Bitebit":
        return 4;
      case "Dipking":
        return 3;
      case "Dinobit":
        return 4;
      case "Zzoo":
        return 3;
      case "Shiba Ignite":
        return 2;
    }
  };
  
  const getethIniScore = (nefty) => {
    switch (nefty) {
      case "Blockchoy":
        return 3;
      case "Bitebit":
        return 3;
      case "Dipking":
        return 3;
      case "Dinobit":
        return 2;
      case "Zzoo":
        return 3;
      case "Shiba Ignite":
        return 4;
    }
  };
  
  export const getNeftyClass = (nft) => {
    // Each stat has a score rated from 1 to 5 for that type of Nefty.
    const hpScore = getHpScore(nft.name);
    const atkScore = getAtkScore(nft.name);
    const defScore = getDefScore(nft.name);
    const ethAtkScore = getethAtkScore(nft.name);
    const ethDefScore = getethDefScore(nft.name);
    const iniScore = getethIniScore(nft.name);
  
    const scoreTotal =
      hpScore + atkScore + defScore + ethAtkScore + ethDefScore + iniScore;
  
    const hpWeight = hpScore / scoreTotal;
  
    const atkScoreWeight = atkScore / scoreTotal;
    const defScoreWeight = defScore / scoreTotal;
    const ethAtkScoreWeight = ethAtkScore / scoreTotal;
    const ethDefScoreWeight = ethDefScore / scoreTotal;
    const iniScoreWeight = iniScore / scoreTotal;
  
    const sumWeight =
      hpWeight +
      atkScoreWeight +
      defScoreWeight +
      ethAtkScoreWeight +
      ethDefScoreWeight +
      iniScoreWeight;
  
    const score =
      (nft.attributes.hp * hpWeight +
        nft.attributes.atk * atkScoreWeight +
        nft.attributes.def * defScoreWeight +
        nft.attributes.eatk * ethAtkScoreWeight +
        nft.attributes.edef * ethDefScoreWeight +
        nft.attributes.initiative * iniScoreWeight) /
      sumWeight;
  
    const averageStats = (score / 255) * 100;
    //   console.log("score ---> ", score);
    //   console.log("averageStats score ---> ", averageStats);
    //   console.log("mint --> ", nft.mint);
  
    // Then get the sum of the scores, and then we use it to calculate the weighted stats
  
    //   // Gummer, here's the current score system of each Nefty. Based on feedback from the the pros!
  
    return Math.round(averageStats);

    // Score System
    // if (averageStats > 95) {
    //   return "S+";
    // } else if (averageStats > 90) {
    //   return "S";
    // } else if (averageStats > 85) {
    //   return "A+";
    // } else if (averageStats > 80) {
    //   return "A";
    // } else if (averageStats > 75) {
    //   return "B+";
    // } else if (averageStats > 70) {
    //   return "B";
    // } else if (averageStats > 65) {
    //   return "C+";
    // } else if (averageStats > 60) {
    //   return "C";
    // } else if (averageStats > 55) {
    //   return "D+";
    // } else {
    //   return "E";
    // }
  };
  