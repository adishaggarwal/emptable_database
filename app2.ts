

export interface CRUD<T>
{
    getdata():void;
}

export class emp
{
    firstname: string;
  middlename: string;
  lastname: string;
  email: string;
  phoneno: any;
  role: number;
  address: string;
  customer_id:number;
  role_name:number;
  

  constructor(firstname:string,middlename:string,lastname:string,email:string,phoneno:number,address:string,customer_id:number,role_name:number)
  {
    this.firstname = firstname;
    this.middlename = middlename;
    this.lastname = lastname;
    this.email= email;
    this.phoneno=phoneno;
    this.address = address;
    this.customer_id=customer_id;
    this.role_name= role_name;
  }
}

export class emp2
{
    firstname: string;
  middlename: string;
  lastname: string;
  email: string;
  phoneno: any;
  role: number;
  address: string;
  customer_id:number;
  role_name:number;
  empid:number;
  

  constructor(firstname:string,middlename:string,lastname:string,email:string,phoneno:number,address:string,customer_id:number,role_name:number,empid:number)
  {
    this.firstname = firstname;
    this.middlename = middlename;
    this.lastname = lastname;
    this.email= email;
    this.phoneno=phoneno;
    this.address = address;
    this.customer_id=customer_id;
    this.role_name= role_name;
    this.empid=empid;
  }
}

export class fetchjsondata{
    async fetch()
    {
        let browserdata= await fetch("http://localhost:3000/fetchuserdata");
        let data = await browserdata.json();
        return(data);
    }
}

export class rolesrows {
  async fetchroles(){
    let jsonResponse=await fetch('http://localhost:3000/getroles');
    let rolesrow=await jsonResponse.json();
    return rolesrow;
  }
} 

export class websiterows {
  async fetchwebsites(){
    let jsonResponse=await fetch('http://localhost:3000/getwebsites');
    let websitesrow=await jsonResponse.json();
    return websitesrow;
  }
} 
