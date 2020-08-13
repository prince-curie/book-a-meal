import UserService from '../services/user.service';

class User {

  async login(req, res) {
    try {
      const data = req.body;
      const result = await UserService.login(data);

      return res.status(result.status).json(result);
    } catch (error) {
      console.log('login Error', error);
      res.status(500).json({
        status: 500,
        message: 'System error',
      });
    }
  }

  async signUp(req, res) {
    try {
      const data = req.body;
      const result = await UserService.signUp(data);

      return res.status(result.status).json(result);
    } catch (error) {
      console.log('signUp Error', error);
      res.status(500).json({
        status: 500,
        message: 'System error',
      });
    }
  }
}

export default User;
