import response from "../../utils/sendResponse";

class Controller {
  constructor(model) {
    this.model = model;

    this.all = this.all.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
  }
  async all(_, res) {
    try {
      const data = await this.model.findAll();
      response(res, 200, data);
    } catch (err) {
      response(res, 404, err, false);
    }
  }

  async create(req, res) {
    try {
      const data = await this.model.create({
        ...req.body
      });
      response(res, 201, data);
    } catch (err) {
      response(res, 400, err, false);
    }
  }

  async update(req, res) {
    try {
      const [_, data] = await this.model.update(
        { ...req.body },
        { where: { id: req.body.id }, returning: true, plain: true }
      );
      if (data === 0) response(res, 404, {}, false);
      response(res, 201, data);
    } catch (err) {
      response(res, 400, err, false);
    }
  }
}

export default Controller;
