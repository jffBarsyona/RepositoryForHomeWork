function delay(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

async function onePromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, delay(1000, 5000));
  });
}

async function twoPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, delay(1000, 5000));
  });
}

async function threePromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(3);
    }, delay(1000, 5000));
  });
}

async function run() {
  const result = await Promise.race([onePromise(), twoPromise(), threePromise()]);
  console.log(result);
}

run();
