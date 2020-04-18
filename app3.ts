
export class validation
{

    email(m:string)    {
                let rexmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(m.match(rexmail))
        {
        return true;  
        }
        else{
            return false;
        }
    }

    phone(n:string)
    {
        var phoneno = /^\d{10}$/;
        if(n.match(phoneno))
        {
            return true;
        }
        else{
            return false;
        }
    }

    id(x:string , arr:any)
    {
        let temp=1;
        let len=arr.length;
        for(let i=0;i<len;i++)
        {
            let newrowid="row"+x;
            if(newrowid==arr.id)
            {
                temp=99;
            }
        }
        if(temp==1)
        {
            return true;
        }
        else
        {
            return false;
        }

    }
    
    notempty(s:string)
    {
        var letters = /^[A-Za-z]+$/;
        if(s.match(letters))
          {
           return true;
          }
        else
          {
           return false;
          }
    }

    address(a:string)
    {
        if(a)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}