
import { ShowToastEvent } from 'lightning/platformShowToastEvent'



export function customToast (title, customMessage, variant)  {
    try{
    console.log('5/26 in toast utils this customMessage',customMessage);
   
    
    const toastMessage = new ShowToastEvent({
        title: title,
        message: customMessage,
        variant: variant,
    });
    return toastMessage;
    //this.dispatchEvent(toastMessage);
}catch(err){
    console.log('In utils err==>',err);
}
   /* this.dispatchEvent(toastMessage);*/

   //return 'testing';
}


