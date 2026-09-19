const host = "seedancehk.com";
const key = "cdd6cc31311c9aae1cf9b712218dd870";
const urlList = [`https://${host}/`];

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host,
    key,
    keyLocation: `https://${host}/${key}.txt`,
    urlList,
  }),
});

if (!response.ok && response.status !== 202) {
  throw new Error(`IndexNow submission failed with HTTP ${response.status}`);
}

console.log(`IndexNow accepted ${urlList.length} URL(s): HTTP ${response.status}`);
