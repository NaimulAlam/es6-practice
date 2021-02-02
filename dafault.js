function add(num1, num2 = 20){ //3rd way the backup way
    // num2 = num2 || 20; //2nd way
    // if (num2 == undefined){ //1st way
    //     num2 =0;
    // }
    return num1 + num2;
}

const total = add(15);
console.log(total);