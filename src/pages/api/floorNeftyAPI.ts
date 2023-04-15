// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import BigNumber from "bignumber.js";
import { getNeftyClass } from "../../utils/getNeftyClass";
import { getNeftyMaxStat } from "../../utils/getNeftyMaxStat";

export default function handler(req, res) {
  try {
    const responseArray = [];
    let param = req.query.filter

    console.log(param)

    axios({
      method: "get",
      url: `https://marketplace-api.live.aurory.io/v1/programs/marketplace/listings?attr%5BType%5D=Nefty&price%5Bmin%5D=0&price%5Bmax%5D=&status=listed&limit=100&order=unit_price&orderDirection=asc&name=${param}`,
    }).then(function (response) {
      for (const data of response.data) {
        const nft = data.nft;
        const neftyClass = getNeftyClass(data.nft);

        const hp = (nft.attributes.hp / 255) * 100;
        const atk = (nft.attributes.atk / 255) * 100;
        const def = (nft.attributes.def / 255) * 100;
        const eatk = (nft.attributes.eatk / 255) * 100;
        const edef = (nft.attributes.edef / 255) * 100;
        const initiative = (nft.attributes.initiative / 255) * 100;

        const average = Math.round((hp + atk + def + eatk + edef + initiative)/6)

        const newNFTObject = {
          name: nft.name,
          mint: nft.mint,
          class: neftyClass,
          price: new BigNumber(data.unit_price).dividedBy(1e9).toNumber(),
          picture: nft.file,
          average: average,
          hp: hp,
          hpPct: (hp / getNeftyMaxStat(nft, "hp")) * 100,
          atk: atk,
          atkPct: (atk / getNeftyMaxStat(nft, "atk")) * 100,
          def: def,
          defPct: (def / getNeftyMaxStat(nft, "def")) * 100,
          eatk: eatk,
          eatkPct: (eatk / getNeftyMaxStat(nft, "eatk")) * 100,
          edef: edef,
          edefPct: (edef / getNeftyMaxStat(nft, "edef")) * 100,
          initiative: initiative,
          initiativePct: (initiative / getNeftyMaxStat(nft, "initiative")) * 100,
        };
        responseArray.push(newNFTObject);
      }
      res.status(200).json({ data: responseArray });
    });
    
  } catch (e) {
    res.status(500).json({ error: "failed to load data" });
  }
}
