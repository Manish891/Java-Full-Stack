function countOfEvenDigits(num) {
        let rem   
        let count = 0; 
        while (num > 0)
        {
            rem = num % 10;
            if(rem % 2 == 0){
                count++;
            }
            num = parseInt(num / 10);
        }
        return count
    }
    console.log(countOfEvenDigits(2458));
   
    