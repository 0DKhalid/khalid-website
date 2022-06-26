const { getPlaylistsData } = require("./utl");

exports.sourceNodes = async (
  { actions, createContentDigest, createNodeId, getNodesByType },
  { apiKey, channelId, maxResult = 50 }
) => {
  const { createNode } = actions;

  const playListsData = await getPlaylistsData(channelId, maxResult, apiKey);

  playListsData.forEach((item) => {
    createNode({
      ...item,
      id: createNodeId(`YtbPlaylist-${item.id}`),
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

exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    apiKey: Joi.string()
      .required()
      .description(`You most define youtube apiKey to use this plugin`),
    channelId: Joi.string()
      .required()
      .description(`You must provide a youtube array playlist ids`),
    optionB: Joi.number().description(`set maxresult return from youtube api`),
  });
};
