const URL = "http://localhost:8080/tweets";

const onEnter = (e) => {
  if (e.key == "Enter") {
    getTwitterData();
  }
};

/**
 * Retrive Twitter Data from API
 */
const getTwitterData = () => {
  const query = document.getElementById("user-search-input").value;
  const count = 10;
  if (!query) return;
  const encodedQuery = encodeURIComponent(query);
  const fullURL = `${URL}?q=${encodedQuery}&count=${count}`;
  fetch(fullURL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
};

/**
 * Save the next page data
 */
const saveNextPage = (metadata) => {};

/**
 * Handle when a user clicks on a trend
 */
const selectTrend = (e) => {};

/**
 * Set the visibility of next page based on if there is data on next page
 */
const nextPageButtonVisibility = (metadata) => {};

/**
 * Build Tweets HTML based on Data from API
 */
const buildTweets = (tweets, nextPage) => {};

/**
 * Build HTML for Tweets Images
 */
const buildImages = (mediaList) => {};

/**
 * Build HTML for Tweets Video
 */
const buildVideo = (mediaList) => {};
