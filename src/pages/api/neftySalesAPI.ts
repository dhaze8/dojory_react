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
      url: `https://marketplace-api.live.aurory.io/v1/programs/marketplace/listings?attr%5BType%5D=Nefty&status=sold&limit=50&order=sold_at&orderDirection=desc`,
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
        const date = new Date(data.sold_at);

        const newNFTObject = {
          name: nft.name,
          mint: nft.mint,
          time: date,
          average: average,
          price: new BigNumber(data.unit_price).dividedBy(1e9).toNumber(),
          class: neftyClass,
        };
        responseArray.push(newNFTObject);
      }
      res.status(200).json({ data: responseArray });
    });
    
  } catch (e) {
    res.status(500).json({ error: "failed to load data" });
  }
}
