import Component from '../ecs/Component';

class Transform extends Component {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    super();
    this.x = x;
    this.y = y;
  }
}

export default Transform;
