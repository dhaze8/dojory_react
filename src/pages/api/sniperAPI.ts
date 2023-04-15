// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import BigNumber from "bignumber.js";
import { getNeftyClass } from "../../utils/getNeftyClass";

export default function handler(req, res) {
  try {
    const responseArray = [];
    axios({
      method: "get",
      url: "https://marketplace-api.live.aurory.io/v1/programs/marketplace/listings?attr%5BType%5D=Nefty&price%5Bmin%5D=0&price%5Bmax%5D=&status=listed&limit=10000&offset=0&order=unit_price&orderDirection=asc&from=2022-09-25T14%3A56%3A31.798Z",
    }).then(function (response) {
      for (const data of response.data) {
        const nft = data.nft;
        const neftyClass = getNeftyClass(data.nft);
        const newNFTObject = {
          name: nft.name,
          mint: nft.mint,
          class: neftyClass,
          price: new BigNumber(data.unit_price).dividedBy(1e9).toNumber(),
          picture: nft.file,
        };
        responseArray.push(newNFTObject);

      }
      res.status(200).json({ data: responseArray });
    });



    
  } catch (e) {
    res.status(500).json({ error: "failed to load data" });
  }
}
