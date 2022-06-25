const axios = require("axios");

const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";

exports.sourceNodes = async (
  { actions, createContentDigest, createNodeId, getNodesByType },
  { apiKey, playListIds, maxResult = 50 }
) => {
  const { createNode } = actions;

  const playListsData = await getPlaylistsData(playListIds, maxResult, apiKey);

  playListsData.forEach((item) => {
    createNode({
      ...item,
      id: createNodeId(`YtbPlaylist-${item.etag}`),
      parent: null,
      children: [],
      internal: {
        type: "YtbPlayList",
        content: JSON.stringify(item),
        contentDigest: createContentDigest(item),
      },
    });
  });

  return;
};

const getPlaylistsData = async (playListIds, maxResult, apiKey) => {
  const urls = playListIds.map(
    (playListId) =>
      `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=${maxResult}&playlistId=${playListId}&key=${apiKey}`
  );

  const playListsData = await Promise.all(urls.map(axios.get)).then((res) =>
    res.map((item) => item.data)
  );
  return playListsData;
};
