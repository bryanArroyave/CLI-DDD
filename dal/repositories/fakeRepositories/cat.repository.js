

    function Cat(id, name, lastname) {

        return { id, name, lastname }
    }
    
    
    
    class CatRepository {
        constructor() {
            this.cats = [];
    
            this.cats.push(new Cat("1", "name1", "lastname1"));
            this.cats.push(new Cat("2", "name2", "lastname2"));
            this.cats.push(new Cat("3", "name3", "lastname3"));
            this.cats.push(new Cat("4", "name4", "lastname4"));
    
        }
    
    
        getCats() {
    
            let c = this.cats;
            return this.cats;
        }
        createCat(cat) {
            this.cats.push(cat)
            return { msg: "201", cat };
        }
        getCat(id) {
    
            this.cats.forEach(catador => {
                if (catador.id === id) {
                    return { msg: "200", catador };
                }
    
            });
            return { msg: "404" };
        }
    }
    
    module.exports = CatRepository;
