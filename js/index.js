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
      buildTweets(data.statuses);
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
const buildTweets = (tweets, nextPage) => {
  let twitterContent = "";
  tweets.map((tweet) => {
    twitterContent += `
    <div class="tweet-user-info">
        <div class="tweet-user-profile">
        </div>
        <div class="tweet-user-name-container">
            <div class="tweet-user-fullname">
                Lorem ipsum
            </div>
            <div class="tweet-user-username">
                @realloremipsum
            </div>
        </div>
    </div>
    <div class="tweet-images-container">
        <div class="tweet-image"></div>
    </div>
    <div class="tweet-text-container">
        ${tweet.full_text}
    </div>
    <div class="tweet-date-container">
        20 hours ago
    </div>`;
  });

  document.querySelector(".tweets-list").innerHTML = twitterContent;
};

/**
 * Build HTML for Tweets Images
 */
const buildImages = (mediaList) => {};

/**
 * Build HTML for Tweets Video
 */
const buildVideo = (mediaList) => {};
