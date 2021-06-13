import Component from '../ecs/Component';
import Entity from '../ecs/Entity';

class EntityManager {
  public entities: Entity[] = [];

  createEntity(name: string) {
    this.entities.push(new Entity(name));
  }

  getEntityByName(name: string): Entity {
    return this.entities.filter((elem) => elem.name === name)[0];
  }

  applyToEach(callback: (entity: Entity, ...components: any[]) => void, ...args: any[]) {
    const entitiesToApply = this.entities.filter((entity) => entity.hasComponents(...args));

    entitiesToApply.forEach((entity) => {
      callback(entity, ...entity.getComponents(...args));
    });
  }
}

export default EntityManager;
