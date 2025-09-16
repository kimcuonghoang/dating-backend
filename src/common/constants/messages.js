const MESSAGES = {
  AUTH: {
    REGISTER_SUCCESS: "Đăng ký thành công",
    LOGIN_SUCCESS: "Đăng nhập thành công",
    LOGOUT_SUCCESS: "Đăng xuất thành công",
    REGISTER_FAIL: "Đăng ký thất bại",
    LOGIN_FAIL: "Đăng nhập thất bại",
    LOGOUT_FAIL: "Đăng xuất thất bại",
    INVALID_CREDENTIALS: "Thông tin đăng nhập không hợp lệ",
    EMAIL_EXISTS: "Email đã tồn tại",
    USER_NOT_FOUND: "Người dùng không tồn tại",
  },
  USER: {
    GET_PROFILE_SUCCESS: "Lấy hồ sơ thành công",
    GET_PROFILE_FAIL: "Lấy hồ sơ thất bại",
    PROFILE_UPDATE_SUCCESS: "Cập nhật hồ sơ thành công",
    PROFILE_UPDATE_FAIL: "Cập nhật hồ sơ thất bại",
    USER_NOT_FOUND: "Người dùng không tồn tại",
  },
  LIKE: {
    LIKE_SUCCESS: "Thích thành công",
    UNLIKE_SUCCESS: "Bỏ thích thành công",
    ALREADY_LIKED: "Bạn đã thích bài viết này",
    NOT_LIKED: "Bạn chưa thích bài viết này",
  },
  MATCH: {
    MATCH_SUCCESS: "Ghép đôi thành công",
    UNMATCH_SUCCESS: "Hủy ghép đôi thành công",
    ALREADY_MATCHED: "Bạn đã ghép đôi với người này",
    NOT_MATCHED: "Bạn chưa ghép đôi với người này",
  },
  BLOCK: {
    BLOCK_SUCCESS: "Chặn thành công",
    UNBLOCK_SUCCESS: "Bỏ chặn thành công",
  },
  REPORT: {
    REPORT_SUCCESS: "Báo cáo thành công",
    ALREADY_REPORTED: "Bạn đã báo cáo người dùng này",
    NOT_REPORTED: "Bạn chưa báo cáo người dùng này",
  },
  MESSAGE: {
    SEND_SUCCESS: "Gửi tin nhắn thành công",
    DELETE_SUCCESS: "Xóa tin nhắn thành công",
    NOT_FOUND: "Tin nhắn không tồn tại",
  },
};

export default MESSAGES;
