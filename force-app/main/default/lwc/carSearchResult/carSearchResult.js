import {LightningElement,api, wire, track} from 'lwc';
import carsByType from '@salesforce/apex/carListByType.getCarsByType';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CarSearchResult extends LightningElement {
    @api cartypeid;
    @track carList;
    @track carIdSelected;
    carCount=1;

    @wire(carsByType, {carTypeId : '$cartypeid'})  
    wiredCarType( {data, error } ) {

        if (data) {
            console.log('data===',data);
            this.carList = data;
            this.carCount = data.length;
           /* this.carList = [];
            data.forEach(element =>{
                const car = {};
                car.Name = element.Name;
                car.Id = element.Id;
                car.picture = element.Picture__c;
                this.carList.push(car);
            });
            console.log('carlist====',this.carList.length);
            console.log('carlist====',this.carList);*/
        } else if ( error ) {
                console.log('There was an error===',error);
                this.showError('ERROR', error.body.message, 'error');
            //this.error = error;
           // this.initialRecords = undefined;
            //this.records = undefined;
        }
    } 
    
    showError(title, message, variant) {
        const errorMessage = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
        });
        this.dispatchEvent(errorMessagevt);
    }

    get foundCars(){
        if(this.carCount > 0){
            return true;
        }
        return false;
    }

    carSelectedId(event){
        const carId = event.detail;
        this.carIdSelected = carId;
    }
}