export default (res, code, data, success = true) => {
  return res.status(code).json({
    ok: success,
    data
  });
};
