import { LightningElement, wire, track } from 'lwc';
import getCarTypes from '@salesforce/apex/carType.getCarTypes';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CarSearchForm extends NavigationMixin(LightningElement) {
    @track carTypes;
    value;

    @wire(getCarTypes)  
    wiredCarType( {data, error } ) {

        if (data) {
            console.log('data===',data);
            this.carTypes = [{value:'',label:'All Types'}];
            data.forEach(element =>{
                const car = {};
                car.label = element.Name;
                car.value = element.Id;
                this.carTypes.push(car);
            });
        } else if ( error ) {
            console.log('There was an error===',error);
            this.showError('ERROR', error.body.message, 'error');
        }
    }   
    
    handleChange(event){
        this.value = event.detail.value;
        const carTypeId = event.detail.value;
        const selectedEvent = new CustomEvent('cartypeselect', {detail : {carTypeId :carTypeId}});
        this.dispatchEvent(selectedEvent);
    }

    handleClickNew(event){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Car_Type__c',
                actionName: 'new'
            }
        });
    }

    showError(title, message, variant) {
        const errorMessage = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
        });
        this.dispatchEvent(errorMessagevt);
    }

}