import sleep from "../index.js";

describe("es7-sleep", () => {
    it("should delay 1000ms", async () => {
            let start = new Date();
            await sleep(1000);
            let end = new Date();

            return (end-start) > 1000;
    });
});
