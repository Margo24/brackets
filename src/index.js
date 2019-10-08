module.exports = function check(str, bracketsConfig) {
  // your solution
    //let string="([()])";
    let same = [];
    for (i=0; i<bracketsConfig.length;i++) {
        if (bracketsConfig[i][0]==bracketsConfig[i][1]) {
            same.push(bracketsConfig[i][0])
        }
    }
    let arr=str.split('');
    let stack=[];
    let position=0;
    let controlString = [].concat(...bracketsConfig).join('');
    for (i=0;i<arr.length;i++) {
        position = controlString.indexOf(arr[i]);
        if (same.indexOf(arr[i])>=0) {
            if (stack.indexOf(position)>=0){
                //console.log(stack.indexOf(arr[i]));
                stack.pop();
            }else{
                stack.push(position);
                //console.log(stack);
            }
        } else {
            //position = controlString.indexOf(arr[i]);
            //console.log(position);
            if (position % 2 == 0) {
                stack.push(position + 1);
                //console.log(stack);
            } else if (stack.pop() !== position) {
                //console.log(stack);
                //console.log(false);
                return false;
            }
        }
    }
    return (stack.length == 0) ? true:false;
};
