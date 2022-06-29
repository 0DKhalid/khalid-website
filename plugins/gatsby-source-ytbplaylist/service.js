const axios = require("axios");

const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";

const YOUTUBE_PLAYLISTS_API = `https://www.googleapis.com/youtube/v3/playlists`;

exports.getPlaylistsData = async (channelId, maxResult, apiKey) => {
  const playLists = await getPlaylsits(channelId, maxResult, apiKey);

  const urls = playLists.map(
    (plaList) =>
      `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=${maxResult}&playlistId=${plaList.id}&key=${apiKey}`
  );

  const playListsData = await Promise.all(urls.map(axios.get)).then((res) =>
    res.map((item, i) => ({
      playlist: item.data,
      id: playLists[i].id,
      title: playLists[i].title,
      description: playLists[i].description,
      thumbnail: playLists[i].thumbnail,
      publishedAt: playLists[i].publishedAt,
    }))
  );

  return playListsData;
};

const getPlaylsits = async (channelId, maxResult, apiKey) => {
  try {
    const playlistsData = await axios.get(
      `${YOUTUBE_PLAYLISTS_API}?&part=snippet&maxResults=${maxResult}&channelId=${channelId}&key=${apiKey}`
    );

    const filterPlaylistsData = playlistsData.data.items.map((item) => ({
      id: item.id,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.medium.url,
    }));
    return filterPlaylistsData;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
