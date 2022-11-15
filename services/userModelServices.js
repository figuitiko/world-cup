const UserModel = require('../models/user/model');
const bcrypt = require('bcrypt');
const jsonWebToken = require('jsonwebtoken');

class UserModelServices{
  constructor() {
    this.userModel = UserModel;
    this.bcrypt = bcrypt;
    this.jsonWebToken = jsonWebToken;
  }
  async getUser(id) {
    const user = await this.userModel.findById(id);
    return user;
  }

  async signUp(email,name, password) {
    
    try {
      const user = await this.userModel.findOne({ email });
      if (user) {
        return false;
      };
      const salt = await this.bcrypt.genSalt(10);
      const hashedPassword = await this.bcrypt.hash(password, salt);
      const newUser = await this.userModel.create({
        email,
        name,
        password: hashedPassword,
        roles: ["user"]
      });
    return newUser;
    } catch (error) {
      console.log(error)
    }    
  }

  async signIn(email, password) {
    try {
      const user = await this.userModel.findOne({ email });
      if (!user) {
        throw new Error("User does not exist");
      };
      const isPasswordValid = await this.bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw new Error("Invalid password");
      };
      const token = this.jsonWebToken.sign({ id: user._id }, process.env.SECRET_JWT_CODE, {});
      return { user, token };
    } catch (error) {
      console.log(error);
    }    
  }
  async updateUser(id, data) {
    try {
      const user = await this.userModel.findByIdAndUpdate(id, data, { new: true });
      return user;
    } catch (error) {
      console.log(error);
    }     
  }
  async deleteUser(id) {
    try {
      const user = await this.userModel.findByIdAndDelete(id);
      return user;      
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UserModelServices;