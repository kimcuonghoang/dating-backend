import Match from "./match.model.js";

export const getMatchesService = async (userId) => {
  const matches = await Match.find({
    isConnected: true,
    users: userId, // users là array chứa cả 2 id
  })
    .populate("users", "username photos") // populate cả 2 user
    .lean();

  // Trả về thông tin của "người còn lại" để client hiển thị
  const result = matches.map((m) => {
    const otherUser = m.users.find(
      (u) => u._id.toString() !== userId.toString()
    );
    return {
      matchId: m._id,
      user: otherUser,
      matchDate: m.matchDate,
    };
  });

  return result;
};
