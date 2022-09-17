const Intern = require("../lib/Intern");

it("can get role via getRole() method",() => {
    const me = new Intern(1, "andrew@gmail.com", "andrew")

    expect(me.getRole()).toEqual("Intern"); 
})

it("can set a school via constructor",() => {
    const me = new Intern(1, "andrew@gmail.com", "andrew", "UCLA")

    expect(me.school).toEqual("UCLA"); 
})

it("can get school via getSchool() method", () => {
    const me = new Intern(1, "andrew@gmail.com", "andrew", "UCLA")

    expect(me.getSchool()).toEqual("UCLA"); 
})