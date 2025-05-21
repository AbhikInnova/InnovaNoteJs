class user {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(this.username);
  }
  static createId() {
    return `123`;
  }
}


class user1 extends user{
    constructor(user){
        super(user)
    }
}
const obj = new user1("hi");

// console.log(obj.createId());//if static not accessable
// console.log(user.createId());
