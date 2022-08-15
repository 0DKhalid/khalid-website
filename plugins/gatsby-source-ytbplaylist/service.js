const axios = require("axios");
const moment = require("moment");

const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";

const YOUTUBE_PLAYLISTS_API = `https://www.googleapis.com/youtube/v3/playlists`;

const YOUTUBE_VIDEO_API = `https://www.googleapis.com/youtube/v3/videos`;

exports.getPlaylistsData = async (channelId, maxResult, apiKey) => {
  const playLists = await getPlaylsits(channelId, maxResult, apiKey);

  const urls = playLists.map(
    (plaList) =>
      `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=${maxResult}&playlistId=${plaList.id}&key=${apiKey}`
  );

  const playListsData = await Promise.all(urls.map(axios.get)).then((res) => {
    return res.map((item, i) => {
      return {
        playlist: item.data,
        id: playLists[i].id,
        title: playLists[i].title,
        description: playLists[i].description,
        thumbnail: playLists[i].thumbnail,
        publishedAt: playLists[i].publishedAt,
      };
    });
  });

  const playlistWithDuration = playListsData.map(async (item) => {
    const vidIds = item.playlist.items
      .map((item) => item.snippet.resourceId.videoId)
      .join(",");
    const videosDuration = await getVideosDuration(vidIds, apiKey);

    const playlistTotalTime = videosDuration.reduce((prev, cur) =>
      moment.duration(cur).add(prev)
    );

    return {
      ...item,
      playlist: {
        totalTime: totalTime(playlistTotalTime),
        ...item.playlist,
        items: item.playlist.items.map((item, itemIndex) => ({
          ...item,
          snippet: {
            ...item.snippet,
            resourceId: {
              ...item.snippet.resourceId,
              duration:moment.duration(videosDuration[itemIndex]).minutes()+ ":"+ moment.duration(videosDuration[itemIndex]).seconds(),
            },
          },
        })),
      },
    };
  });
    
  const finalPlaylistData = Promise.all(playlistWithDuration).then(
    (data) => data
  );

  return finalPlaylistData;
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
      publishedAt: item.snippet.publishedAt,
    }));
    return filterPlaylistsData;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

const getVideosDuration = async (videoIds, apiKey) => {
  try {
    const response = await axios.get(
      `${YOUTUBE_VIDEO_API}?id=${videoIds}&part=contentDetails&key=${apiKey}`
    );

    return response.data.items.map((video) => video.contentDetails.duration);
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

const totalTime = (totalTime) => {
  if (totalTime.hours()) {
    return `${totalTime.hours()}س :${totalTime.minutes()}د`;
  } else {
    return `${totalTime.minutes()}د :${totalTime.seconds()}ث`;
  }
};
