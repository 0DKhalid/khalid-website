const { createRemoteFileNode } = require('gatsby-source-filesystem');
const { getPlaylistsData } = require('./service');

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type YtbPlayList implements Node {
      thumnailData: File @link(from: "fields.localFile")
    }
  `;
  createTypes(typeDefs);
};

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
        type: 'YtbPlayList',
        content: JSON.stringify(item),
        contentDigest: createContentDigest(item),
      },
    });
  });

  return;
};

exports.onCreateNode = async ({ node, actions, createNodeId, getCache }) => {
  const { createNode, createNodeField } = actions;

  if (node.internal.type === 'YtbPlayList' && node.thumbnail !== null) {
    const fileNode = await createRemoteFileNode({
      url: node.thumbnail,
      parentNodeId: node.id,
      createNode,
      createNodeId,
      getCache,
    });

    if (fileNode) {
      createNodeField({
        node,
        name: 'localFile',
        value: fileNode.id,
      });
    }
  }
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
