import MenuModel from '../models/menu.model';
import functions from '../functions/function';

const { newMenuFn, fetchAllMealDB, addMeal } = functions;
const fetchAllMenuDB = () => fetchAllMealDB(newMenuFn);

const menuService = {
  fetchAllMenuDB,
  addMenuDB(req) {
    addMeal(req, MenuModel);
  },
};

export default menuService;
