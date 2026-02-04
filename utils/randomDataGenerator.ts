import {faker} from '@faker-js/faker';

export class RandomDataGenerator {

    static getFirstName(): string {
        return faker.person.firstName();    
    }

    static getLastName(): string {
        return faker.person.lastName();    
    }

    static getFullName(): string {
        return faker.person.fullName();    
    }

    static getEmail(): string {
        return faker.internet.email();    
    }

    static getPhoneNumber(): string {
        return faker.phone.number();    
    }   
    static getAddress(): string {
        return faker.location.streetAddress();    
    }

    static getCity(): string {
        return faker.location.city();    
    }

    static getCountry(): string {
        return faker.location.country();    
    }

    static getRandomNumber(min: 10, max: 100): number {
        return faker.number.int({min, max});    
    }

}