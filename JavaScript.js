function WorkedTime(entry_time, leaving_time){

    //getting the values
    var entry_time = document.getElementById('entry_time').value;
    var leaving_time = document.getElementById('leaving_time').value;

    if(leaving_time>entry_time){
   
        //turning values given in HH:MM to minutes
        entry_time = entry_time.split(':');
        entry_time = parseInt(entry_time[0]*60) + parseInt(entry_time[1]);
    
        leaving_time = leaving_time.split(':');
        leaving_time = parseInt(leaving_time[0]*60) + parseInt(leaving_time[1])
    
         
        //getting the worked time from minutes back the HH:MM format
        var formated_hours = Math.floor((leaving_time - entry_time)/60);
        var formated_minutes = (leaving_time - entry_time)%60;
    
        //formating times, i.e.: 3:7 -> 03:07
        if(formated_hours<10){
            formated_hours="0"+formated_hours;
        }
    
        if(formated_minutes<10){
            formated_minutes="0"+formated_minutes;
        }

        formated_hours = formated_hours || '00';
        formated_minutes = formated_minutes || '00';

        //returning formated worked time
        document.getElementById('result').innerHTML = formated_hours + ':' + formated_minutes;
        
        //document.getElementById('result').innerHTML = eTime;
                
    }else{
        console.log("invalid time");
        document.getElementById('result').innerHTML = "00:00";
    }    

}