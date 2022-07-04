module.exports = function toReadable (number) {
  let result='';
  let string=number.toString();
  if (number==0) {
    result='zero';
  } else if (number<=19) {
    switch (number) {
      case 1: result='one';
      break;
      case 2: result='two';
      break;
      case 3: result='three';
      break;
      case 4: result='four';
      break;
      case 5: result='five';
      break;
      case 6: result='six';
      break;
      case 7: result='seven';
      break;
      case 8: result='eight';
      break;
      case 9: result='nine';
      break;
      case 10: result='ten';
      break;
      case 11: result='eleven';
      break;
      case 12: result='twelve';
      break;
      case 13: result='thirteen';
      break;
      case 14: result='fourteen';
      break;
      case 15: result='fifteen';
      break;
      case 16: result='sixteen';
      break;
      case 17: result='seventeen';
      break;
      case 18: result='eighteen';
      break;
      case 19: result='nineteen';
      break;
      default: result='';
    } 
  } else if (number<=99) {
    switch (Number(string[0])) {
      case 2: result='twenty';
      break;
      case 3: result='thirty';
      break;
      case 4: result='forty';
      break;
      case 5: result='fifty';
      break;
      case 6: result='sixty';
      break;
      case 7: result='seventy';
      break;
      case 8: result='eighty';
      break;
      case 9: result='ninety';
      break;
      default: result=result;
    }
    switch (Number(string[1])) {
      case 1: result=result+' one';
      break;
      case 2: result=result+' two';
      break;
      case 3: result=result+' three';
      break;
      case 4: result=result+' four';
      break;
      case 5: result=result+' five';
      break;
      case 6: result=result+' six';
      break;
      case 7: result=result+' seven';
      break;
      case 8: result=result+' eight';
      break;
      case 9: result=result+' nine';
      break;
      default: result=result;
    }
  } else if (number<=999) {
    switch (Number((String(number))[0])) {
      case 1: result='one hundred';
      break;
      case 2: result='two hundred';
      break;
      case 3: result='three hundred';
      break;
      case 4: result='four hundred';
      break;
      case 5: result='five hundred';
      break;
      case 6: result='six hundred';
      break;
      case 7: result='seven hundred';
      break;
      case 8: result='eight hundred';
      break;
      case 9: result='nine hundred';
      break;
      default: result=result;
    }
    if (Number(((String(number))[1]+(String(number))[2]))==0) {
      result=result;
      } else if (Number(((String(number))[1]+(String(number))[2]))<=19) {
        switch (Number(((String(number))[1]+(String(number))[2]))) {
          case 1: result=result+' one';
          break;
          case 2: result=result+' two';
          break;
          case 3: result=result+' three';
          break;
          case 4: result=result+' four';
          break;
          case 5: result=result+' five';
          break;
          case 6: result=result+' six';
          break;
          case 7: result=result+' seven';
          break;
          case 8: result=result+' eight';
          break;
          case 9: result=result+' nine';
          break;
          case 10: result=result+' ten';
          break;
          case 11: result=result+' eleven';
          break;
          case 12: result=result+' twelve';
          break;
          case 13: result=result+' thirteen';
          break;
          case 14: result=result+' fourteen';
          break;
          case 15: result=result+' fifteen';
          break;
          case 16: result=result+' sixteen';
          break;
          case 17: result=result+' seventeen';
          break;
          case 18: result=result+' eighteen';
          break;
          case 19: result=result+' nineteen';
          break;
          default: result=result;
        } 
      } else if (Number(((String(number))[1]+(String(number))[2]))<=99) {
        switch (Number((String(number))[1])) {
          case 2: result=result+' twenty';
          break;
          case 3: result=result+' thirty';
          break;
          case 4: result=result+' forty';
          break;
          case 5: result=result+' fifty';
          break;
          case 6: result=result+' sixty';
          break;
          case 7: result=result+' seventy';
          break;
          case 8: result=result+' eighty';
          break;
          case 9: result=result+' ninety';
          break;
          default: result=result;
        }
        switch (Number((String(number))[2])) {
          case 1: result=result+' one';
          break;
          case 2: result=result+' two';
          break;
          case 3: result=result+' three';
          break;
          case 4: result=result+' four';
          break;
          case 5: result=result+' five';
          break;
          case 6: result=result+' six';
          break;
          case 7: result=result+' seven';
          break;
          case 8: result=result+' eight';
          break;
          case 9: result=result+' nine';
          break;
          default: result=result;
        }
      } else {result=result;}
    }
    return(result);
  }
