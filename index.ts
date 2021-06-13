import EntityManager from './src/components/EntityManager';
import Sprite from './src/components/Sprite';
import Transform from './src/components/Transform';

const entityManager = new EntityManager();

entityManager.createEntity("Joris");
const entity = entityManager.getEntityByName('Joris');

entity.assignComponent(Transform, 1, 2);
entity.assignComponent(Sprite, 'lol');

entityManager.createEntity('Roger');
const entity2 = entityManager.getEntityByName('Roger');

entity2.assignComponent(Transform, 20, 10);

entityManager.applyToEach((entity, transform: Transform) => {
  console.log('first apply to each');
  console.log(entity.name, transform);
}, Transform);

entityManager.applyToEach((entity, transform: Transform, sprite: Sprite) => {
  console.log('second apply to each');
  console.log(entity.name, transform, sprite);
}, Transform, Sprite);
