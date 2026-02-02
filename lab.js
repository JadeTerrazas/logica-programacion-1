let mayor, centro, menor;

let a = Number(prompt("Ingresa el primer número:"));
let b = Number(prompt("Ingresa el segundo número:"));
let c = Number(prompt("Ingresa el tercer número:"));

if((a===b)&&(c===b))
{
    alert("Los números ingresados son iguales.");
}
else
{

if((c>=a)&&(b>=a))
{
    menor = a;
    if(c>=b)
    {
        centro = b;
        mayor = c;
    }
    else
    {
        centro = c;
        mayor = b;
    }
}

if((c>=b)&&(a>=b))
{
    menor = b;
    if(c>=a)
    {
        centro = a;
        mayor = c;
    }
    else
    {
        centro = c;
        mayor = a;
    }
}

if((b>=c)&&(a>=c))
{
    menor = c;
    if(a>=b)
    {
        centro = b;
        mayor = a;
    }
    else
    {
        centro = a;
        mayor = b;
    }
}

alert(`
Mayor: ${mayor}. Centro: ${centro}. Menor: ${menor}.
Menor: ${menor}. Centro: ${centro}. Mayor: ${mayor}.`)

}
