function WorkedTime(entry_time, leaving_time){

    var entry_time = document.getElementById('entry_time').value;
    var leaving_time = document.getElementById('leaving_time').value;

    if(leaving_time>entry_time){
   
        entry_time = entry_time.split(':');
        entry_time = parseInt(entry_time[0]*60) + parseInt(entry_time[1]);
        
        leaving_time = leaving_time.split(':');
        leaving_time = parseInt(leaving_time[0]*60) + parseInt(leaving_time[1])
    
        var formated_hours = Math.floor((leaving_time - entry_time)/60);
        var formated_minutes = (leaving_time - entry_time)%60;
    
        if(formated_hours<10){
            formated_hours="0"+formated_hours;
        }
    
        if(formated_minutes<10){
            formated_minutes="0"+formated_minutes;
        }

        formated_hours = formated_hours || '00';
        formated_minutes = formated_minutes || '00';

        document.getElementById('result').innerHTML = formated_hours + ':' + formated_minutes;
        
                
    } else{
        console.log("invalid time");
        document.getElementById('result').innerHTML = "00:00";
    }    

}