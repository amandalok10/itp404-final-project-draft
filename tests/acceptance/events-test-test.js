import { module, test } from 'qunit';
import { visit, currentURL, click, fillIn } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | events test', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('create', async function(assert) {
    await visit('/event/new');
    await fillIn('#name', 'Name');
    await fillIn('#date', 'Date');
    await fillIn('#location', 'Location');
    await fillIn('#contact', 'Contact');

    await click('[data-test="save"]');

assert.equal(currentURL(), '/');
assert.dom('[data-test="event"]').exists({ count: 1 });
  });

  test('read', async function(assert) {
  server.create('post', {
    name: 'View event',
    date: 'View event',
    location: 'View event',
    contact: 'View event',

  });

  await visit('/');
 assert.dom('[data-test="name"]').exists({ count:1 });
  assert.dom('[data-test="date"]').exists({ count:1 });
   assert.dom('[data-test="location"]').exists({ count:1 });
    assert.dom('[data-test="contact"]').exists({ count:1 });


});


test('update', async function(assert) {
server.create('post', {
  name: 'View event',
  date: 'View event',
  location: 'View event',
  contact: 'View event',

});

await visit('/event/1/edit');
fillIn('#name', 'Edit Name');
 await click('[data-test="update"]');
assert.equal('name', 'Edit Name');


});



  test('delete', async function(assert) {
    server.create('post', {
          name: 'event 4',
          date: 'event 4',
          location: 'event 4',
          contact: 'event 4',

        });
        server.create('post', {
          name: 'event 4',
          date: 'event 4',
          location: 'event 4',
          contact: 'event 4',
            });
await visit('/event/1');

await click('[data-test="delete"]');

assert.equal(currentURL(), '/');
assert.dom('[data-test="event"]').exists({ count: 1 });

  });
  });
