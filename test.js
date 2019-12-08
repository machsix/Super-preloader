let delay = time => new Promise(resolve => setTimeout(resolve, time))

async function sleepRandom(time) {
  await delay(time * 1e3);
  return 0 | Math.random() * 1e3;
}

async function sleepError(time, msg) {
  await delay(time * 1e3);
  throw Error(msg);
}

(async () => {
  try {
    console.log('Run');                // => Run
    console.log(await sleepRandom(5)); // => 936, after 5 sec.
    let [a, b, c] = await Promise.all([
      sleepRandom(5),
      sleepRandom(15),
      sleepRandom(10)
    ]);
    console.log(a, b, c);              // => 210 445 71, after 15 sec.
    await sleepError(5, 'Error!');
    console.log('Will not be displayed');
  } catch (e) {
    console.log(e);                    // => Error: 'Error!', after 5 sec.
  }
})();
