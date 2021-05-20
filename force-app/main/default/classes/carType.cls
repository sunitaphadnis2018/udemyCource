public with sharing class carType {
    @AuraEnabled (cacheable=true)
    public static List<Car_Type__c> getCarTypes(){
        return [SELECT id, Name FROM Car_Type__c];        
    }
}

