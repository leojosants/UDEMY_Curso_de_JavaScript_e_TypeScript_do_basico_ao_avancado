export class Car {

  private readonly motor: Motor = new Motor();

  public toConnect(): void { this.motor.toConnect(); }
  public toSpeed(): void { this.motor.toSpeed(); }
  public toStop(): void { this.motor.toStop(); }
  public toSwitchOff(): void { this.motor.toSwitchOff(); }
}

export class Motor {

  public toConnect(): void {
    console.log('Motor ligado!');
  }

  public toSpeed(): void {
    console.log('Motor acelerando!');
  }

  public toStop(): void {
    console.log('Motor parado!');
  }

  public toSwitchOff(): void {
    console.log('Motor desligado!');
  }
}

const car = new Car();
car.toConnect();
car.toSpeed();
car.toStop();
car.toSwitchOff()
