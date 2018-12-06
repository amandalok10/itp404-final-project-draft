import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';





const Validations = buildValidations({
  name: validator('presence', true),
  date: validator('presence', true),
  location: validator('presence', true),
  contact: validator('presence', true),
}

);

export default DS.Model.extend(Validations,{
  name: DS.attr('string'),
  date: DS.attr('string'),
  location: DS.attr('string'),
  contact: DS.attr('string'),

});
