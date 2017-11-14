import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({

  emailAddress: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  actions:{

    saveInvitation() {
      alert(`Saving of the following email address in in progress: ${this.get('emailAddress')}`);
      this.set('responseMessage', `Thank you!  We've just saved your email address: ${this.get('emailAddress')}`);
      this.set('emailAddress');
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
