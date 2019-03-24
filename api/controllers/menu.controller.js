import menuService from '../services/menu.service';

const { addMenuDB } = menuService;
const controllerReturns = (res, statusNo, dataFn) => res.json({
  status: statusNo,
  data: dataFn,
}).status(statusNo);

const menuController = {
  addMenu(req, res) {
    return controllerReturns(res, 201, [addMenuDB(req)]);
  },
};

export default menuController;
