export default (req, res) => {
  if (req.method === "POST") {
    res.json({
      msg: "post request"
    });
  } else {
    res.json({
      msg: "get request"
    });
  }
};
