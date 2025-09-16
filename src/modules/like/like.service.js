import User from "../user/user.model.js";
import Match from "../match/match.model.js";

export const likeUserService = async (userId, targetUserId) => {
  if (userId === targetUserId) {
    throw new Error("Không thể like chính mình");
  }

  await User.findByIdAndUpdate(userId, {
    $addToSet: { likes: targetUserId },
  });

  const targetUser = await User.findOne({
    _id: targetUserId,
    likes: userId,
  });

  if (targetUser) {
    const users = [userId, targetUserId].sort();

    const existingMatch = await Match.findOne({
      users: { $all: users, $size: 2 },
    });

    if (!existingMatch) {
      await Match.create({
        users,
        isConnected: true,
        matchDate: new Date(),
      });
    }

    return { isMatch: true, message: "It's a Match!" };
  }

  return { isMatch: false, message: "Đã like thành công" };
};
