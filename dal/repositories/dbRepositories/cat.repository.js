
class CatRepository {
    constructor({ db }) {
        this._db = db.CatEntity;
    }

    getCats() {
        return this._db.findAll();
    }
    createCat(user) {

        return this._db.create(user);
    }
    getCat(id) {
        return this._db.findOne(id);
    }
}

module.exports = CatRepository;
