const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const correction = () => {
    let total = 0;
    for (let index = 0; index < RIGHT_ANSWERS.length; index += 1 ) {
        if(RIGHT_ANSWERS[index] === STUDENT_ANSWERS[index]) {
            total += 1;
        }
    }
    // console.log(total);
    return total;
}


const checkUp = (RIGHT_ANSWERS, STUDENT_ANSWERS, callback) => {
  console.log(callback());
  return callback();
};

checkUp(RIGHT_ANSWERS, STUDENT_ANSWERS, correction);
