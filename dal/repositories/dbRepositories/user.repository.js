
class UserRepository {
    constructor({ db }) {
        this._db = db.UserEntity;
    }

    getUsers() {
        return this._db.findAll();
    }
    createUser(user) {

        return this._db.create(user);
    }
    getUser(id) {
        return this._db.findOne(id);
    }
}

module.exports = UserRepository;
