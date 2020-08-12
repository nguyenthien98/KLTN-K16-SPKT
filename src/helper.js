const helper = {
  showServerError(res, error) {
    return res.status(500).json({ message: error });
  },
  showServerSuccess(res, obj) {
    return res.status(200).json({ obj });
  },
};

export default helper;
