export const getNeftyMaxStat = (nefty, stat) => {

    switch (nefty.name) {
        case "Blockchoy":
          return getBlockchoyMaxStat(stat);
        case "Bitebit":
          return getBitebitMaxStat(stat);
        case "Dipking":
            return getDipkingMaxStat(stat);
        case "Dinobit":
            return getDinobitMaxStat(stat);
        case "Zzoo":
            return getZzooMaxStat(stat);
        case "Shiba Ignite":
            return getShibaMaxStat(stat);
      }
  };


const getBlockchoyMaxStat = (stat) => {
    switch (stat) {
      case "hp":
        return 480;
      case "atk":
        return 48;
      case "def":
        return 24;
      case "eatk":
        return 72;
      case "edef":
        return 60;
      case "initiative":
        return 115;
    }
};
  
const getBitebitMaxStat = (stat) => {
    switch (stat) {
      case "hp":
        return 600;
      case "atk":
        return 84;
      case "def":
        return 48;
      case "eatk":
        return 36;
      case "edef":
        return 36;
      case "initiative":
        return 115;
    }
};

const getDipkingMaxStat = (stat) => {
    switch (stat) {
      case "hp":
        return 420;
      case "atk":
        return 36;
      case "def":
        return 24;
      case "eatk":
        return 84;
      case "edef":
        return 48;
      case "initiative":
        return 115;
    }
};

const getDinobitMaxStat = (stat) => {
    switch (stat) {
      case "hp":
        return 960;
      case "atk":
        return 60;
      case "def":
        return 72;
      case "eatk":
        return 24;
      case "edef":
        return 48;
      case "initiative":
        return 115;
    }
};

const getZzooMaxStat = (stat) => {
    switch (stat) {
      case "hp":
        return 420;
      case "atk":
        return 72;
      case "def":
        return 24;
      case "eatk":
        return 60;
      case "edef":
        return 40;
      case "initiative":
        return 115;
    }
};

const getShibaMaxStat = (stat) => {
    switch (stat) {
      case "hp":
        return 840;
      case "atk":
        return 60;
      case "def":
        return 60;
      case "eatk":
        return 36;
      case "edef":
        return 48;
      case "initiative":
        return 115;
    }
};





