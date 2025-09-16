import Match from "./match.model.js";

export const getMatchUserService = async (userId) => {
  const matches = await Match.find({
    $or: [{ user1: userId }, { user2: userId }],
  });

  return matches;
};
