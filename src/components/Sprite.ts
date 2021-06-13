import Component from '../ecs/Component';

class Sprite extends Component {
  public texturePath: string;

  constructor(texturePath: string) {
    super();
    this.texturePath = texturePath;
  }
}

export default Sprite;
