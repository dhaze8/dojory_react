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

    axios.all([
      axios.get('https://marketplace-api.live.aurory.io/v1/programs/marketplace/listings?attr[Type]=Egg&price[min]=0&price[max]=&status=listed&limit=12&order=unit_price&orderDirection=asc&name=genesis'), 
      axios.get('https://marketplace-api.live.aurory.io/v1/programs/marketplace/listings?attr%5BOrigin%5D=Everglade&attr%5BType%5D=Egg&price%5Bmin%5D=0&price%5Bmax%5D=&status=listed&limit=12&order=unit_price&orderDirection=asc'),
      axios.get('https://marketplace-api.live.aurory.io/v1/programs/marketplace/listings?attr%5BType%5D=Key&price%5Bmin%5D=0&price%5Bmax%5D=&status=listed&limit=12&order=unit_price&orderDirection=asc')
    ])
    .then(axios.spread((obj1, obj2, obj3) => {
      // Above requests are now complete
      // console.log(obj1.data[0]);
      // console.log(obj2.data[0]);
      // console.log(obj3.data[0]);

      const newNFTObject = {
        egg_genesis_price: new BigNumber(obj1.data[0].unit_price).dividedBy(1e9).toNumber(),
        egg_everglade_price: new BigNumber(obj2.data[0].unit_price).dividedBy(1e9).toNumber(),
        kitty_key_price: new BigNumber(obj3.data[0].unit_price).dividedBy(1e9).toNumber(),
      };
      responseArray.push(newNFTObject);

      res.status(200).json({ data: responseArray });
    }));
  } catch (e) {
    res.status(500).json({ error: "failed to load data" });
  }
}
