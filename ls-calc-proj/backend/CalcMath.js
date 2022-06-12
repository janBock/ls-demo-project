import { create, all } from 'mathjs'

const config = { }
const math = create(all, config)

class CalcMath {
  // num1;
  // num2;
  // operator;
  result;

  getResult = () => {
    return this.result;
  }

  // cleanData = (receivedData) => {
  //   this.num1 = receivedData[0][0];
  //   this.num2 = receivedData[0][1];
  //   this.operator = receivedData[1];
  // };

  handleMath = (receivedData) => {
    //cleanData handles data separation for us and assigns it to the class's 
    // this.cleanData(receivedData);

    //use mathjs to evaluate the expression; round to 2 decimal places where necessary
    this.result = Math.round((math.evaluate(receivedData)) * 100) / 100;
    console.log("final data to send back is", this.result);
    return this.result;

    // switch (this.operator) {
    //   case "/":
    //     this.result = this.num1 / this.num2;
    //     break;
    //   case "+":
    //     this.result = this.num1 + this.num2;
    //     break;
    //   case "*":
    //     this.result = this.num1 * this.num2;
    //     break;
    //   case "-":
    //     this.result = this.num1 - this.num2;
    //     break;
    // }
  };
}

export default CalcMath;