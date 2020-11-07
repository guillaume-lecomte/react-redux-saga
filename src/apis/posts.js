import postData from "../data/postsData.json";

// Fake api call with hard coded json and setTimeOut to simulate network
async function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const getPosts = async () => {
  await wait(1000);
  return postData;
};

export default { getPosts };
