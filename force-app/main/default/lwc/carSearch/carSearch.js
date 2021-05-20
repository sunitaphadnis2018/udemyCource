import { LightningElement, track } from 'lwc';

export default class CarSearch extends LightningElement {
    @track carTypeRecordId;

    showValue(event){
        this.carTypeRecordId = event.detail.carTypeId;
        console.log('Testing', event.detail.carTypeId);
    }
}