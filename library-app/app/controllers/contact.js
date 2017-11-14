import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({

  emailAddress: '',
  message: '',
  responseMessage: '',

  isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isValidText: Ember.computed.gte('message', 5),
  isDisabled: !Ember.computed.and('isValidEmail', 'isValidText'),

  actions:{

    send() {
      alert(`Saving of the following email address and msg is in progress: ${this.get('emailAddress')}, ${this.get('message')}`);
      this.set('responseMessage', `Thank you!  We've just saved your email address: ${this.get('emailAddress')} and msg: ${this.get('message')}`);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }
  /*actualEmailAddress: Ember.computed('emailAddress', function(){
    console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
  }),

  emailAddressChanged: Ember.observer('emailAddress', function(){
    console.log('observer is called ', this.get('emailAddress'));
  })*/

  //fullName: Ember.computed('firstName', 'lastName', function(){
  //  return `${this.get('firstName')} ${this.get('lastName')}`;
  //})
});
