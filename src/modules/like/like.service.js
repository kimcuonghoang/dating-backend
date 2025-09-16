import User from "../user/user.model.js";
import Match from "../match/match.model.js"; // file match bạn đã viết

/**
 * User A like User B
 * @param {String} userId - ID của người đang like
 * @param {String} targetUserId - ID của người bị like
 */
export const likeUserService = async (userId, targetUserId) => {
  if (userId === targetUserId) {
    throw new Error("Không thể like chính mình");
  }

  // Thêm targetUserId vào danh sách likes của userId (ko trùng lặp)
  await User.findByIdAndUpdate(userId, {
    $addToSet: { likes: targetUserId },
  });

  // Kiểm tra xem targetUser đã like userId trước đó chưa
  const targetUser = await User.findOne({
    _id: targetUserId,
    likes: userId,
  });

  if (targetUser) {
    // Nếu đã like thì tạo Match (nếu chưa tồn tại)
    const users = [userId, targetUserId].sort(); // đảm bảo thứ tự cố định

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
