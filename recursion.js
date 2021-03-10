exports.countDigits=countDigits;
exports.reverse=reverse;
exports.power=power;

function countDigits(n)
{
    if(n===0)
    {
        return 0;
    }
    else
    {
        return 1+countDigits(Math.floor(n/10))
    }
}

function reverse (str) {
    if (str === "") {
        return "";
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
}

function power(x,n)
{
    if(n==1){
        return x;
    }

        else
        {
            return x*power(x,n-1);
        }
    }

