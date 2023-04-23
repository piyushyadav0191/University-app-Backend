export const sendToken = (res, user, statusCode, message) => {
  const token = user.getJWToken();

  const options = {
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
  };

  const userData = {
    _id: user._id,
    name: user.name,
    email: user.email,
    avatar: user.avatar,
    tasks: user.tasks,
    verified: user.verified,
  };

  res
    .status(statusCode)
    .cookie("token", token, options)
    .json({ success: true, message, user: userData });
};
