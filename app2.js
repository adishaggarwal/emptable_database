export class emp {
    constructor(firstname, middlename, lastname, email, phoneno, address, customer_id, role_name) {
        this.firstname = firstname;
        this.middlename = middlename;
        this.lastname = lastname;
        this.email = email;
        this.phoneno = phoneno;
        this.address = address;
        this.customer_id = customer_id;
        this.role_name = role_name;
    }
}
export class emp2 {
    constructor(firstname, middlename, lastname, email, phoneno, address, customer_id, role_name, empid) {
        this.firstname = firstname;
        this.middlename = middlename;
        this.lastname = lastname;
        this.email = email;
        this.phoneno = phoneno;
        this.address = address;
        this.customer_id = customer_id;
        this.role_name = role_name;
        this.empid = empid;
    }
}
export class fetchjsondata {
    async fetch() {
        let browserdata = await fetch("http://localhost:3000/fetchuserdata");
        let data = await browserdata.json();
        return (data);
    }
}
export class rolesrows {
    async fetchroles() {
        let jsonResponse = await fetch('http://localhost:3000/getroles');
        let rolesrow = await jsonResponse.json();
        return rolesrow;
    }
}
export class websiterows {
    async fetchwebsites() {
        let jsonResponse = await fetch('http://localhost:3000/getwebsites');
        let websitesrow = await jsonResponse.json();
        return websitesrow;
    }
}
