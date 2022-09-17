const Engineer = require("../lib/Engineer");

it("can get role via getRole() method",() => {
    const me = new Engineer (1, "andrew@gmail.com", "andrew")

    expect(me.getRole()).toEqual("Engineer"); 
})

it("can set a github username via constructor",() => {
    const me = new Engineer(1, "andrew@gmail.com", "andrew", "andrew23")

    expect(me.github).toEqual("andrew23"); 
})

it("can get github username via getGithub() method", () => {
    const me = new Engineer(1, "andrew@gmail.com", "andrew", "andrew23")

    expect(me.getGitHub()).toEqual("andrew23"); 
})