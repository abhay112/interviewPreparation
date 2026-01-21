const profile = {
  userName: 'Vasanth',
  greet: () => {
    console.log(`Hi, I'm ${this.userName}`);
  },

  welcome: function () {
    console.log(`Welcome, ${this.userName}`);
  }

};

const friend = { userName: 'Candidate' };

profile.greet.call(friend);
profile.welcome.call(friend);


////////////////////////

for normal fn  who calles the fn become this..
but in case of arrow fn this is lexically scoped 
here arrow fn is written in top level of profile obj scope that why it is refring the global object.


profile.greet.call(friend);
Hi, I'm undefined


profile.welcome.call(friend);
welcome Candidate





