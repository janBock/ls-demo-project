class CalcMath {
  num1;
  num2;
  operator;
  result;

  getResult = () => {
    return this.result;
  }

  cleanData = (receivedData) => {
    this.num1 = receivedData[0][0];
    this.num2 = receivedData[0][1];
    this.operator = receivedData[1];
  };

  handleMath = (receivedData) => {
    //cleanData handles data separation for us and assigns it to the class's 
    this.cleanData(receivedData);

    switch (this.operator) {
      case "/":
        this.result = this.num1 / this.num2;
        break;
      case "+":
        this.result = this.num1 + this.num2;
        break;
      case "*":
        this.result = this.num1 * this.num2;
        break;
      case "-":
        this.result = this.num1 - this.num2;
        break;
    }

    return this.result;
  };
}

module.exports = CalcMath;
