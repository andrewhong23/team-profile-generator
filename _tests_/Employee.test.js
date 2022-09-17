const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Test Employee Class", () => {
    it("should create a new employee object", () => {
        const me = new Employee(1, "andrew@gmail.com", "andrew");

        expect(typeof me).toBe("object");
    })

    it("can set a name via constructor",() => {
        const me = new Employee(1, "andrew@gmail.com", "andrew")

        expect(me.name).toEqual("andrew"); 
    })

    it("can set a id via constructor",() => {
        const me = new Employee(1, "andrew@gmail.com", "andrew")

        expect(me.id).toEqual(1); 
    })

    it("can set a email via constructor",() => {
        const me = new Employee(1, "andrew@gmail.com", "andrew")

        expect(me.email).toEqual("andrew@gmail.com"); 
    })

    it("can get email via getEmail() method",() => {
        const me = new Employee(1, "andrew@gmail.com", "andrew")

        expect(me.getEmail()).toEqual("andrew@gmail.com"); 
    })

    it("can get name via getName() method",() => {
        const me = new Employee(1, "andrew@gmail.com", "andrew")

        expect(me.getName()).toEqual("andrew"); 
    })

    it("can get id via getId() method",() => {
        const me = new Employee(1, "andrew@gmail.com", "andrew")

        expect(me.getId()).toEqual(1); 
    })

    it("can get role via getRole() method",() => {
        const me = new Employee(1, "andrew@gmail.com", "andrew")

        expect(me.getRole()).toEqual("Employee"); 
    })

    

})