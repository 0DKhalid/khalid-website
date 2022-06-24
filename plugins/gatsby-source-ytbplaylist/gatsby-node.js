const axios = require("axios");

const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";

//youtube.com/playlist?list=PLy2vwCvAbFKScg8nZRzgCkxl3x8n9ABhD

https: exports.sourceNodes = async (
  { actions, createContentDigest, createNodeId, getNodesByType },
  { apiKey, playListID, maxResult = 50 }
) => {
  const { createNode } = actions;

  const response = await axios.get(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=${maxResult}&playlistId=${playListID}&key=${apiKey}`
  );

  response.data.items.forEach((video) => {
    createNode({
      ...video,
      id: createNodeId(`YtbPlaylist-${video.id}`),
      parent: null,
      children: [],
      internal: {
        type: "YtbPlayList",
        content: JSON.stringify(video),
        contentDigest: createContentDigest(video),
      },
    });
  });

  return;
};
