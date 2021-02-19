const initialState = {
    targetTime: null,
    timeDifference:0,
    days:0,
    minutes:0,
    hours:0,
    seconds:0,
    startCountdown:false
}

const reducer = (state = initialState, action) => {
    if (action.type === 'HANDLE_INPUT_VALUES') {
        let seldate=document.getElementById('dateselector');
        let date=seldate.options[seldate.selectedIndex].value;
        let selmon=document.getElementById('monthselector');
        let month=selmon.options[selmon.selectedIndex].value;
        let current=new Date();
        let currentyear=current.getFullYear();
        if((current.getTime()-new Date(month+' '+date+' '+currentyear).getTime())>=0){
            currentyear++;
        }
        let target=new Date(month+' '+date+' '+currentyear).getTime();
        return {
            ...state,
            startCountdown:true,
            targetTime:target
        }
    }

    if (action.type === 'SHOW_COUNTDOWN') {

        let distance=0;
        
        if(state.startCountdown)
        {  
          distance=state.targetTime-(new Date().getTime());
        }
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        return {
            ...state,
            timeDifference:distance,
            days:days, 
            hours:hours, 
            minutes:minutes, 
            seconds:seconds,       }
    }

    return state;
};

export default reducer;