import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeOne'
})
export class PipeOnePipe implements PipeTransform {

  transform(value: number, args?: any): string {
    let money:any = value;
    const cnNums = new Array('零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖');
    const cnIntRadice = new Array('', '拾', '佰', '仟');
    const cnDecUnits = new Array('角', '分');
    const cnInteger = '整';
    const cnIntLast = '元';
    const cnIntMinus = '负';
    let cash;
    let parts;
    let integerNum;
    let decimalNum;
    let chineseStr = '';
    let err = "false";

    if (money == "") {
      return "空";
    }if (money == "."){
      return err;
    }if (money >= 1000){
      return err;
    }
    if(money.charAt(0) === "-"){
      cash = money.slice(1);
    }else{
      cash = money;
    }
    cash = parseFloat(cash);
    if (cash == 0) {
      chineseStr = cnNums[0] + cnIntLast + cnInteger;
      return chineseStr;
    }

    cash = cash.toString();
    if (cash.indexOf('.') == -1) {
      integerNum = cash;
      decimalNum = '';
    } else {
      parts = cash.split(".");
      integerNum = parts[0];
      decimalNum = parts[1].substr(0, 2);
    }

    if (integerNum != '-' && parseInt(integerNum, 10) > 0) {
      let intLen = integerNum.length;
      let zero = 0;
      for (let i = 0; i < intLen; i++) {
        let intChar = integerNum.substr(i, 1);
        let intSlen = intLen - i - 1;
        let divided = intSlen / 4;
        let remain = intSlen % 4;

        if (intChar == "0") {
          zero++;
        } else {
          if (zero > 0) {
            chineseStr += cnNums[0];
          }
          zero = 0;
          chineseStr += cnNums[parseInt(intChar)] + cnIntRadice[remain];
        }
        if (remain === 0 && divided > 0) {
          return err;
        }
      }
      chineseStr += cnIntLast;
    }

    if (decimalNum != ''){
      let decLen = decimalNum.length;
      for(let i=0; i<decLen; i++){
        let decChar = decimalNum.substr(i,1);
        if(decChar != '0'){
          chineseStr += cnNums[parseInt(decChar)] + cnDecUnits[i];
        }
        if (decChar == '0' && parseInt(integerNum, 10) > 0){
          chineseStr += cnNums[parseInt(decChar)] + cnDecUnits[i];
        }
      }
    }else{
      chineseStr;
    }
    return chineseStr;
  }
}
