import * as imp from "./app2.js";
import * as valid from "./app3.js";
let fetchdata=new imp.fetchjsondata();
let validate=new valid.validation();
let rolesrow=new imp.rolesrows();
let websitesrow=new imp.websiterows();


class actions implements imp.CRUD<imp.emp>
{
    numrows:number;
    delarray:string[];
    temp:any[];
    nrow:number;
    newid:number;


constructor()
{   
    this.nrow=1;
    this.numrows=0;
    this.temp=[];
     let load= document.getElementById("load")!;
     load.addEventListener("click",this.getdata);

     let add= document.getElementById("add")!;
     add.addEventListener("click",this.addrow);
}

getdata()
{
    fetchdata.fetch().then(data => p1.create(data));
}

create(data:any)
{
    this.numrows=data.length;
    let tbody=document.getElementById("tbody")!;
    tbody.innerHTML=``;
    for(let i=0;i<this.numrows;i++)
    {
       let newrow= tbody.insertRow(-1);
       newrow.setAttribute("id","row"+data[i].empid);
       newrow.innerHTML=`
       <td><input type="text" placeholder="${data[i].firstname}" disabled></td>
       <td><input type="text" placeholder="${data[i].middlename}" disabled></td>
       <td><input type="text" placeholder="${data[i].lastname}" disabled></td>
       <td><input type="email" placeholder="${data[i].email}" disabled></td>
       <td><input type="number" placeholder="${data[i].phoneno}" disabled></td>
       <td><input type="text" placeholder="${data[i].address}" disabled></td>
       <td><input type="number" placeholder="${data[i].website}" disabled></td>
       <td><input type="number" placeholder="${data[i].role_name}" disabled></td>
       <td><button class="btn btn-primary" id="${data[i].empid}${data[i].empid}">EDIT</button></td>
      <td><button class="btn btn-danger" id="${data[i].empid}">DELETE</button></td>`;
      

         let n=""+data[i].empid;
       let editb=document.getElementById(""+n+""+n)!;
       editb!.onclick = () => {
        this.editrow(""+n);
      }
      let delb=document.getElementById(""+data[i].empid)!;
      delb!.onclick = () => {
       this.deleterow(""+n);
     }
    }

}


editrow(val:any)
{
    var fid:any;
        var yo;
        var kid=1;
        var lol=7;
        
            fid= ""+val
            yo=""+val+""+val;
       
      
       if(kid==1)
       {
        if(document.getElementById(""+fid+""+fid)!.innerHTML=="SAVE" )
        {
            let recordarr:any[];
            recordarr=[];
            
    
            let b6="row"+ fid;
    
            var xx6= document.getElementById(b6)!.getElementsByTagName("input")!;
            var xe6= document.getElementById(b6)!.getElementsByTagName("td")!;
            //var xs61= document.getElementById("selectroles"+fid)!;
            //var xs62= document.getElementById("selectwebsites"+fid)!;
            let sel6=document.getElementById("selectroles"+fid)!;
            let sel7=document.getElementById("selectwebsites"+fid)!;
            let text6 = sel6!.options[sel6!.selectedIndex].value;
            let text7 = sel7!.options[sel7!.selectedIndex].value;

            
            var q6;
            for (q6 = 0; q6 < xe6.length-2; q6++) 
            {
                var index = xx6[q6];
                if(q6==6)
                {
                    let x:any;
                    x = text7;
                    recordarr[q6]=x;
                }
                else if(q6==7)
                {
                    let x:any;
                    x = text6;
                    recordarr[q6]=x;
                    
                }
                else
                {
                    index.placeholder = index.value;
                    recordarr[q6]=index.value;
                }
                    
            }
            let allrows=document.getElementById("tbody")!.getElementsByTagName("tr")!;
            let cells=document.getElementById("row"+fid)!.getElementsByTagName("td")!;

            
            if(!validate.phone(`${recordarr[4]}`))
            {
                cells[4].innerHTML +='<span class="alertspan" style="color:red,display:block">Please fill in valid phone number</span>';
            }
            if(!validate.email(`${recordarr[3]}`))
            {
                cells[3].innerHTML +='<span class="alertspan" style="color:red,display:block">Please fill in valid email</span>';
            }
            if(!validate.notempty(`${recordarr[0]}`))
            {
                cells[0].innerHTML +='<span class="alertspan" style="color:red,display:block">Please enter your First name</span>';
            }
            if(!validate.notempty(`${recordarr[2]}`))
            {
                cells[2].innerHTML +='<span class="alertspan" style="color:red,display:block">Please enter your Last Name</span>';
            }
            if(!validate.address(`${recordarr[5]}`))
            {
                cells[5].innerHTML +='<span class="alertspan" style="color:red,display:block">Please enter your address</span>';
            }

           if(validate.phone(`${recordarr[4]}`)&&validate.email(`${recordarr[3]}`)&&validate.notempty(`${recordarr[0]}`)&&validate.notempty(`${recordarr[2]}`)&&validate.address(`${recordarr[5]}`))
           {
            let newemp= new imp.emp(recordarr[0],recordarr[1],recordarr[2],recordarr[3],recordarr[4],recordarr[5],recordarr[6],recordarr[7]);
           let alerts= document.getElementsByClassName("alertspan")!;
           for(let i=0;i<alerts.length;i++)
           {
               alerts[i].style.display="none";
           }
           /*
            if(lol==99 || p1.nrow==0)
            {
                p1.nrow=1;
                fetch(`http://localhost:3000/addnewrow/${recordarr[6]}`,{
                    method:"post",
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify(newemp)
                }).then(res=>{
                    let kalesh1=document.getElementById("tbody")!.getElementsByTagName("button")!;
    
                    for(let i=1;i<kalesh1.length;i=i+2)
                    { 
                            let num2=kalesh1[i].id;
                            let b25=""+num2;
                            let b35=""+num2+ "" +num2;
                            var xx15= document.getElementById(""+b25)!;
                            var xx25= document.getElementById(""+b35)!;
                           
        
                            if(b35==""+fid+""+fid)
                            {
                                    xx25.innerHTML="EDIT";
                                    xx15.innerHTML="DELETE";
                                    let b="row"+ fid;
        
                                   

                                    var sel=document.getElementById(b)!.getElementsByTagName("td");
                                    console.log(imp.ROLES[recordarr[7]]);
                                    sel[7].innerHTML=`<input type="number" placeholder="${imp.ROLES[recordarr[7]]}" disabled>`;

                                    var xx5=document.getElementById(b)!.getElementsByTagName("input")!;
        
                                    var q5;
                                    for(q5=0;q5<xx5.length;q5++)
                                    {
                                        var index=xx5[q5];
                                        index.disabled=true;   
                                    }
                            }
                            else
                            {
                                xx15.style.display="block";
                                xx25.style.display="block";
                            } 
                     }
                });
            }*/
          //  {
                console.log(newemp);
                fetch(`http://localhost:3000/updateUser/${fid}`, {
                    method: "put",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newemp)
                }).then(res => {
                let kalesh1=document.getElementById("tbody")!.getElementsByTagName("button")!;
    
                for(let i=1;i<kalesh1.length;i=i+2)
                { 
                        let num2=kalesh1[i].id;
                        let b25=""+num2;
                        let b35=""+num2+ "" +num2;
                        var xx15= document.getElementById(""+b25)!;
                        var xx25= document.getElementById(""+b35)!;
                       
    
                        if(b35==""+fid+""+fid)
                        {
                                xx25.innerHTML="EDIT";
                                xx15.innerHTML="DELETE";
                                let b="row"+ fid;
    
                                var xx5= document.getElementById(b)!.getElementsByTagName("input")!;

                                var sel=document.getElementById(b)!.getElementsByTagName("td");

                                let sel6=document.getElementById("selectroles"+fid);
                                let sel7=document.getElementById("selectwebsites"+fid);
                                let text6 = sel6!.options[sel6!.selectedIndex].text;
                                let text7 = sel7!.options[sel7!.selectedIndex].text;

                                sel[6].innerHTML=`<input type="number" placeholder="${text7}" disabled>`;
                                sel[7].innerHTML=`<input type="number" placeholder="${text6}" disabled>`;

                                
    
                                var q5;
                                for(q5=0;q5<xx5.length;q5++)
                                {
                                    var index=xx5[q5];
                                    index.disabled=true;   
                                }
                        }
                        else
                        {
                            xx15.style.display="block";
                            xx25.style.display="block";
                        } 
                 }
            });
           // }
           }
        }
        
    
                    else
                    {
                        
                            let b6="row"+ fid;
    
                            var xx6= document.getElementById(b6)!.getElementsByTagName("input")!;
    
                            var q60;
                            for(q60=0;q60<xx6.length;q60++)
                            {
                                    var index=xx6[q60];  
                                    index.value=index.placeholder;
                                    p1.temp[q60]=index.placeholder;
                            }
    
                            let kalesh2=document.getElementById("tbody")!.getElementsByTagName("button")!;
    
                                    for(let i=1;i<kalesh2.length;i=i+2)
                                    { 
                                                let num2=kalesh2[i].id;
                        
                                                if(num2==fid)
                                                {
                                        
                                                    let b2=""+fid+""+fid;
                                                    
                                                    let b3="row"+ fid;
                                    
                                                
                                                        var xx1= document.getElementById(""+fid)!;
                                                        var xx2= document.getElementById(b2)!;
                                                        var xx3= document.getElementById(b3)!.getElementsByTagName("input")!;
                                                        var xh5= document.getElementById(b3)!.getElementsByTagName("td")!;
                                                
                                                        xx1.innerHTML="CANCEL";
                                                        xx2.innerHTML="SAVE";
                                                        
                                                        
                                                        var qq;
                                                        for(qq=0;qq<xx3.length;qq++)
                                                        {
                                                           
                                                            if(qq==7)
                                                                {
                                                                    rolesrow.fetchroles().then(data =>{
                                                                        xh5[7].innerHTML=` <select id="selectroles${fid}" class="form-control">
                                                                      </select>
                                                                        `;
                                                                        let select=document.getElementById("selectroles"+fid);
                                                                        for(let i=0;i<data.length;i++)
                                                                        {
                                                                            let opt=data[i];
                                                                            let optelement=document.createElement("option");
                                                                            optelement.textContent=opt.role_name;
                                                                            let str=""+opt.role_key;
                                                                            optelement.value=str;
                                                                            select!.appendChild(optelement);
                                                                        }
                                                                    });
                                                                   
                                                                }
                                                                else if(qq==6)
                                                                {
                                                                    websitesrow.fetchwebsites().then(data =>{
                                                                        xh5[6].innerHTML=` <select id="selectwebsites${fid}" class="form-control">
                                                                      </select>
                                                                        `;
                                                                        let select=document.getElementById("selectwebsites"+fid);
                                                                        for(let i=0;i<data.length;i++)
                                                                        {
                                                                            let opt=data[i];
                                                                            let optelement=document.createElement("option");
                                                                            optelement.textContent=opt.website;
                                                                            let str=""+opt.customer_id;
                                                                            optelement.value=str;
                                                                            select!.appendChild(optelement);
                                                                        }
                                                                    });
                                                                }
                                                                else
                                                                {
                                                                    var index=xx3[qq];
                                                                     index.disabled=false; 
                                                                }
                                                            
                                                        }
                                                 }
                                                    else
                                                    {
                                                        
                                                        let b22=""+num2;
                                                        let b33=""+num2+ "" +num2;
                                                        var xx11= document.getElementById(""+b22)!;
                                                        var xx22= document.getElementById(""+b33)!;
                                                        xx11.style.display="none";
                                                        xx22.style.display="none";
                                                    }
                                    }
            
                    }
       }
   
}


deleterow(val:any)
{
    var num:any;
        var kya=1;
            num=""+val;
        
        if(kya==1)
        {
            if((document.getElementById(""+num)!.innerHTML=="DELETE" ))
            {
                fetch(`http://localhost:3000/deleterow/${num}`,{
                    method : "delete"}).then(res =>{
                        let rowid = document.getElementById("row"+num)!;
                        let theedit = document.getElementById(""+num+""+num)!;
                        let thedel = document.getElementById(""+num)!;
                        theedit.removeAttribute("id");
                        thedel.removeAttribute("id");
                        rowid.id="fake";
                        document.getElementById("fake")!.remove();
                        console.log(num);
                    });
            }
            
                else
                {    
                    let h2= "row"+ num;
                    let nh1=num;
                               
                                var h22= document.getElementById(h2)!;
        
                                h22.innerHTML=`
                                <td><input type="text" placeholder="${p1.temp[0]}" disabled></td>
                                <td><input type="text" placeholder="${p1.temp[1]}" disabled></td>
                                <td><input type="text" placeholder="${p1.temp[2]}" disabled></td>
                                <td><input type="email" placeholder="${p1.temp[3]}" disabled></td>
                                <td><input type="number" placeholder="${p1.temp[4]}" disabled></td>
                                <td><input type="text" placeholder="${p1.temp[5]}" disabled></td>
                                <td><input type="number" placeholder="${p1.temp[6]}" disabled></td>
                                <td><input type="number" placeholder="${p1.temp[7]}" disabled></td>
                                <td><button id="${nh1}${nh1}" class="btn btn-primary">EDIT</button></td>
                                <td><button id="${nh1}" class="btn btn-danger">DELETE</button></td>`;
        
                                
                                let r=""+ num + "" + num;
                                let de = document.getElementById(""+nh1)!;
                                de!.onclick = () => {
                                    this.deleterow(num);
                                  }
                         
                         let pe = document.getElementById(r)!;
                         pe!.onclick = () => {
                            this.editrow(num);
                          }    
                    let kalesh3=document.getElementById("tbody")!.getElementsByTagName("button")!;
        
                    for(let i=1;i<kalesh3.length;i=i+2)
                    {
                        let num2=kalesh3[i].id;
                        let b25=""+num2;
                        let b35=""+num2+ "" +num2;
                        var xx15= document.getElementById(""+b25)!;
                        var xx25= document.getElementById(""+b35)!;
                            xx15.style.display="block";
                            xx25.style.display="block";
                    }
                }
                
        }
   
       
}


async addrow()
{
   await fetchdata.fetch().then(data => {
        var len=data.length;
        let ind=data[len-1].empid+1;
         p1.newid=ind;
    }
        );
            console.log(p1.newid);
         let kalesh=await document.getElementById("tbody")!.getElementsByTagName("button")!;
        let thebody= document.getElementById("tbody")!;
        p1.nrow=0;
        let newemp = new imp.emp2("","","","dummy@gmail.com",9999999999,"",1,1,p1.newid);

        let newlen=kalesh.length;
        fetch(`http://localhost:3000/addnewrow`,{
            method: "POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(newemp)}
            ).then((res)=>res.json())
            .then(res=>{

        let newrow= thebody.insertRow(-1);
        newrow.setAttribute("id","row"+p1.newid);
       newrow.innerHTML=`
       <td><input type="text" placeholder="firstname"></td>
       <td><input type="text" placeholder="middlename"></td>
       <td><input type="text" placeholder="lastname"></td>
       <td><input type="email" placeholder="email"></td>
       <td><input type="number" placeholder=""></td>
       <td><input type="text" placeholder="address"></td>`;

       newrow.innerHTML +=` <td><select id="selectwebsites${p1.newid}" class="form-control">
       </select></td>
         `;
         newrow.innerHTML +=`<td><select id="selectroles${p1.newid}" class="form-control">
              </select></td>
                `;

      
       
        websitesrow.fetchwebsites().then (data =>{
           
            let select=document.getElementById("selectwebsites"+p1.newid);
            for(let i=0;i<data.length;i++)
            {
                let opt=data[i];
                let optelement=document.createElement("option");
                optelement.textContent=opt.website;
                let str=""+opt.customer_id;
                optelement.value=str;
                select!.appendChild(optelement);
            }
        
        });
    
        
            rolesrow.fetchroles().then(data =>{
                
                let select=document.getElementById("selectroles"+p1.newid);
                for(let i=0;i<data.length;i++)
                {
                    let opt=data[i];
                    let optelement=document.createElement("option");
                    optelement.textContent=opt.role_name;
                    let str=""+opt.role_key;
                    optelement.value=str;
                    select!.appendChild(optelement);
                }
            
            });

            
       

      
      
        newrow.innerHTML +=`<td><button class="btn btn-primary" id="${p1.newid}${p1.newid}">SAVE</button></td>
        <td><button class="btn btn-danger" id="${p1.newid}">DELETE</button></td>`;

        let dnew = document.getElementById(""+p1.newid)!;
        dnew!.onclick = () => {
            p1.deleterow(p1.newid);
          }
      
        
        let pnew = document.getElementById(""+p1.newid+""+p1.newid)!;
        pnew!.onclick = () => {
            p1.editrow(p1.newid);
          }
      

       

       

          

            for(let i=1;i<newlen;i=i+2)
            { 
                let a=""+kalesh[i].id;
                let b=""+kalesh[i].id+""+kalesh[i].id;

                    let d = document.getElementById("" + a)!;
                    d!.onclick = () => {
                        p1.deleterow(a);
                      }
                   
                    let p = document.getElementById("" + b)!;
                    p!.onclick = () => {
                        p1.editrow(a);
                      }
               
             }
            


});

}
}
  
let p1=new actions();
