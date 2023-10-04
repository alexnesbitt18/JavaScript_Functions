console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count){
    if(count == 0){
        count = 1;
    }

    if(count < 0){
        count *= -1;
    }

    for(let i = 1; i <= count; i++){
        if(i % != 0){
            console.log(i);
        }
        else{
            continue;
        }
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName , age){
    aboveSixteen = `Congrats ${userName}, you can drive!`;
    belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
    
    if(age < 16){
        console.log(belowSixteen);
    }
    else{
        console.log(aboveSixteen);
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function whichQuadrant(x , y){
    if(x > 0 && y > 0){
        return "Quadrant 1";
    }
    else if(x < 0 && y > 0){
        return "Quadrant 2";
    }
    else if(x < 0 && y < 0){
        return "Quadrant 3";
    }
    else if(x > 0 && y < 0){
        return "Quadrant 4";
    }
    else if(x == 0 && y != 0){
        return "X-Axis";
    }
    else if(x != 0 && y == 0){
        return "Y-Axis";
    }
    else if(x == 0 && y == 0){
        return "Origin";
    }
}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function isTriangle(a , b, c){
    return a + b > c && a + c > b && b + c > a;
}

function checkTriangle(a , b , c){
    let isValid = isTriangle(a, b, c);
    if(isValid){
        if(a == b && b == c){
            return "Equilateral Triangle";
        }
        else if(a == b || b == c || a == c){
            return "Isosceles Triangle";
        }
        else{
            return "Scalene Triangle";
        }
    }
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function dataPlanStatus(planlimit, day, usage){
    let periodLength = 30;
    let currentAvg = usage / day;
    let projectedAvg = planlimit / periodLength;
    let remainingData = planlimit - usage;
    let remainingDays = periodLength - day;
    let projectedUsage = remainingDays * currentAvg;
    let remainingAvg = remainingData / remainingDays;
    let statusMSG = ""

    if(currentAvg > projectedAvg){
        statusMSG = "UNDER";
    }
    else if(currentAvg < projectedAvg){
        statusMSG = "OVER";
    }
    else{
        statusMSG = "AT";
    }

    console.log(`${day} day(s) used, ${remainingDays} day(s) remaining.`);
    console.log(`Average projected use: ${projectedAvg.toFixed(2)} GB/day.`);
    console.log(`You are ${statusMSG} your average daily use (${currentAvg.toFixed(2)} GB/day),
    continuing this usage, you'll end up using ${planlimit - (usage + projectedUsage).toFixed(2)} GB from your data limit.`);
    console.log(`To stay below your data plan, use no more than ${remainingAvg} GB/day.`);
}