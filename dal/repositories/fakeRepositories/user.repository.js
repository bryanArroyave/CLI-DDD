

    function User(id, name, lastname) {

        return { id, name, lastname }
    }
    
    
    
    class UserRepository {
        constructor() {
            this.users = [];
    
            this.users.push(new User("1", "name1", "lastname1"));
            this.users.push(new User("2", "name2", "lastname2"));
            this.users.push(new User("3", "name3", "lastname3"));
            this.users.push(new User("4", "name4", "lastname4"));
    
        }
    
    
        getUsers() {
    
            let c = this.users;
            return this.users;
        }
        createUser(user) {
            this.users.push(user)
            return { msg: "201", user };
        }
        getUser(id) {
    
            this.users.forEach(catador => {
                if (catador.id === id) {
                    return { msg: "200", catador };
                }
    
            });
            return { msg: "404" };
        }
    }
    
    module.exports = UserRepository;
