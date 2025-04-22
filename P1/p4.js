function menor2(a,b)
 {
    if(a<b)
        return a;
    else
        return b;
 }
function menor3(a,b,c)
{
    if (menor2(a,b)<c )
        return menor2(a.b);
    else
    return c;

}
function menor4(a,b,c,d)
{
    let m1= menor2(a,b);
    let m2=menor2(c,d);
    
    return menor2(m1,m2);
}


function menor15(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o)
{
let n1=menor4(a,b,c,d);
let n2=menor4(e,f,g,h);
let n3=menor4(i,j,k,l);
let n5=menor4(m,n,o,m);

return menor4(n1,n2,n3,n4);
}
