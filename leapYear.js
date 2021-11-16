function leaapYear(year)
{
    return (year%100===0)?(yera%400===0):(year%4===0);
}
console.log(leaapYear(2016))
console.log(leaapYear(2014))
