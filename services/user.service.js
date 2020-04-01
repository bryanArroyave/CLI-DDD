
  const { toDomainEntity } = require("../domain/mappers/user.mapper")
  const { toDBEntity } = require("../dal/mappers/user.mapper")
  
  class UserService {
  
      constructor({ UserRepository }) {
  
          this.userRepository = UserRepository;
      }
      async getUsers() {
  
          
          const users = await this.userRepository.getUsers();
          return users.map(toDomainEntity);
      }
      async createUser(user) {
  
  
          user = toDBEntity(user);
  
  
          const createdUser = await this.userRepository.createUser(user);
  
  
          return createdUser;
      }
      async getUser(user) {
  
          const { id } = user;
          user = await this.userRepository.getUser(id);
  
          return toDomainEntity(user);
      }
  }
  
  module.exports = UserService;

