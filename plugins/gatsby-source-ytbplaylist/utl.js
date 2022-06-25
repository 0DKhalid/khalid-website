const axios = require("axios");

const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";

exports.getPlaylistsData = async (playListIds, maxResult, apiKey) => {
  const urls = playListIds.map(
    (playListId) =>
      `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=${maxResult}&playlistId=${playListId}&key=${apiKey}`
  );

  const playListsData = await Promise.all(urls.map(axios.get)).then((res) =>
    res.map((item) => item.data)
  );
  return playListsData;
};
