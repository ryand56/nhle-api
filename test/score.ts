import { getScores } from "../src";

(async () => {
    const data = await getScores();
    console.log(data);
})();