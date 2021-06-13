import Component from './Component';

class Entity {
  public name: string;
  public components: Component[] = [];

  constructor(name: string) {
    this.name = name;
  }

  public assignComponent<T extends Component>(type: { new(...args): T; }, ...args: any[]) {
    this.components.push(new type(...args));
  }

  public getComponent(type: any): Component {
    return this.components.filter((component) => component instanceof type)[0];
  }

  public getComponents(...types: any): Component[] {
    const retComponents: Component[] = [];

    types.forEach((type) => {
      retComponents.push(this.getComponent(type));
    });
    return retComponents;
  }

  public hasComponent(type: any): boolean {
    return this.components.filter((component) => component instanceof type).length > 0;
  }

  public hasComponents(...types: any[]): boolean {
    for (const type of types) {
      if (!this.hasComponent(type)) {
        return false;
      }
    }
    return true;
  }
}

export default Entity;
