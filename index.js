function isLeap(year) {
    
    /**************Don't change the code above****************/    
        
        //Write your code here.
        if (year % 4 == 0){
            
            if (year % 100 == 0){
                
                if (year % 400 == 0){
                    var result = "Leap year."
                }
                else {
                    var result = "Not leap year."
                }
            }
            else {
                var result = "Leap year."
            }
        }
        else {
            var result = "Not leap year."
        }
    
    
        return result
    
    /**************Don't change the code below****************/    
    
    }