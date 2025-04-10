/**
 * The strategy design pattern is very used when we have similar tasks and we need to change between tasks in the runtime
 * This pattern help us to eliminate a lot of if-else sentences, to do that simply
 * we have to encapsulate the tasks in small chunks and use an object literal to access our concrete strategy
 * 
 * --> ADVANCED OF IF ELSE
 * 
 * 
 * 
 * useForm (Strategy A)
 * AdminForm (Strategy B -------> FormManage ----------> FormComponent
 * GuestForm (Strategy C) 
 * 
 * 
 * Use Case: Imagine that we have a dropdown with different user types (normal user, admin, and guest)
 * We will display a form based on the use types
 * Here is the example with React, and you can implement in other JS frameworks
 */

// React Components section
import React from 'react';
import UserForm from './userForm';
import AdminForm from './adminForm';
import GuestForm from './guestForm';
import { number, string } from 'prop-types';

/**
 * This object literal will help to encapsulate all the forms that could we have.
 */

const FormsMange = {
  user: {
    render(props) {
      return <UserForm {...props} />
    }
  },
  admin: {
    render(props) {
      return <Admin {...props} />
    }
  },
  guest: {
    render(props) {
      return <Guest {...props} />
    }
  },
}


/**
 * Main form component
 */
const Form = (props) => {
  // here we are getting the form by type
  const userForm = FormsMange[props.type];
  return userForm.render(props);
}

export default Form;




/**
 * Another use case is the payment process
 * You could have a shopping cart that only lets customers checkout with their credit cards,
 * but you will lose customers that want to use other payment methods
 * The strategy design pattern let us decouple the payment methods from the checkout process which means 
 * we can add or update strategies without changing any code in the shopping cart or checkout process
 */

class PaymentMethodStrategy {
  const customerInfoType = {
    contry: string,
    emailAddress: string,
    name: string,
    accountNumber?: number,
    address?: string,
    cardNumber?: number,
    city?: string,
    routingNumber?: number,
    state?: string,
  }

  static BankAccount(customerInfo: customerInfoType) {
    const {name, accountNumber, routingNumber} = customerInfo
  }
  static Bitcoin(customerInfo: customerInfoType) {
    const {emailAddress, accountNumber} = customerInfo

  }

  static CreditCard(customerInfo: customerInfoType) {
    const {name, cardNumber, emailAddress} = customerInfo
  }

  static MailIn(customerInfo: customerInfoType) {
    const { name, address, city, state, country } = customerInfo
  }
}