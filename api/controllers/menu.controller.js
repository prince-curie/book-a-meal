import menuService from '../services/menu.service';
import functions from '../functions/function';

const { addMenuDB, fetchAllMenuDB } = menuService;
const { controllerReturns } = functions;

const menuController = {
  addMenu(req, res) {
    return controllerReturns(res, 201, [addMenuDB(req)]);
  },
  fetchAllMenu(req, res) {
    return controllerReturns(res, 200, fetchAllMenuDB());
  },
};

export default menuController;
