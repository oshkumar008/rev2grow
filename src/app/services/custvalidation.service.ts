import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustvalidationService {

  constructor() { }

  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
      let config = {
          'required': 'Required',
          'invalidCreditCard': 'Is invalid credit card number',
          'invalidEmailAddress': 'Invalid email address',
          'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
          'invalidUsername': 'Invalid username. Username must be at least 6 characters long, and contain a number and underscore.',
          'invalidPhone': 'Invalid Mobile Number. Mobile Number must be at least 10 digit number.',
          'invalidName':'Please enter correct input',
          'minlength': `Minimum length ${validatorValue.requiredLength}`,
          'maxlength': `Maximum length ${validatorValue.requiredLength}`,
          'invalidPrice': 'Invalid cost'


      };

      return config[validatorName];
  }

    static creditCardValidator(control) {
      // Visa, MasterCard, American Express, Diners Club, Discover, JCB
      if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
          return null;
      } else {
          return { 'invalidCreditCard': true };
      }
  }

  static emailValidator(control) {
      // RFC 2822 compliant regex
      if (control.value.match(/[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[A-Za-z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/)) {
          return null;
      } else {
          return { 'invalidEmailAddress': true };
      }
  }

  static minlenghtValidator(control) {
      // {6,100}           - Assert password is between 6 and 100 characters
      // (?=.*[0-9])       - Assert a string has at least one number
      if (control.value.length >= 6) {
          return null;
      } else {
          return { 'minlength': true };
      }
  }

  static maxlenghtValidator(control) {
      // {6,100}           - Assert password is between 6 and 100 characters
      // (?=.*[0-9])       - Assert a string has at least one number
      if (control.value.length < 50) {
          return null;
      } else {
          return { 'maxlength': true };
      }
  }


  static passwordValidator(control) {
      // {6,100}           - Assert password is between 6 and 100 characters
      // (?=.*[0-9])       - Assert a string has at least one number
      if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
          return null;
      } else {
          return { 'invalidPassword': true };
      }
  }


  static passwordMatch(password, cnfpassword){
      if(password === cnfpassword){
          return true;
      }else{
          return false;
      }
  }

  static phoneValidator(control) {
      // {6,100}           - Assert password is between 6 and 100 characters
      // (?=.*[0-9])       - Assert a string has at least one number
      if (control.value.match(/^(?=.*[0-9])[0-9]{10,15}$/)) {
          return null;
      } else {
          return { 'invalidPhone': true };
      }
  }

  static usernameValidator(control){
      if (control.value.match(/^(?=.*[0-9])[a-z0-9_]{6,100}$/)) {
          return null;
      } else {
          return { 'invalidUsername': true };
      }
  }

  static nameValidator(control){
      if (control.value.match(/^([a-zA-Z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/)) {
          return null;
      } else {
          return { 'invalidName': true };
      }
  }

  static noSpaceValidator(control) {
      if (control.value.match(/^[^\s]+(\s+[^\s]+)*$/)) {
          return null;
      } else {
          return { 'noSpace': true };
      }
  }


  static priceValidator(control) {
      if (control.value.match(/^[0-9]+(\.[0-9]{2})?$/)) {
          return null;
      } else {
          return { 'noSpace': true };
      }
  }
}
