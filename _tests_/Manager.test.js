const Manager = require("../lib/Manager");

it("can get role via getRole() method",() => {
    const me = new Manager(1, "andrew@gmail.com", "andrew")

    expect(me.getRole()).toEqual("Manager"); 
})

it("can set a office number via constructor",() => {
    const me = new Manager(1, "andrew@gmail.com", "andrew", "23")

    expect(me.officeNumber).toEqual("23"); 
})

it("can get office number via getOfficeNumber() method", () => {
    const me = new Manager(1, "andrew@gmail.com", "andrew", "23")

    expect(me.getOfficeNumber()).toEqual("23"); 
})