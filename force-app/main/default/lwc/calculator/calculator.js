import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {

    @track filedName='';
    number1;
    number2;

    assignNumber(event){
        this.number2 = event.target.value;
    }
}