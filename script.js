

function startquiz() {
    const name = document.getElementById('name').value;
    const rollNo = document.getElementById('rollNo').value;
    const branch = document.getElementById('branch').value;
    const division = document.getElementById('division').value;

    if (name && rollNo && branch && division) {
        document.getElementById('userForm').classList.add('hidden');
        document.getElementById('quiz').classList.remove('hidden');
        localStorage.setItem('userDetails', JSON.stringify({ name, rollNo, branch, division }));
    } else {
        alert('Please fill in all Details.');
    }
}



function submitQuiz() {
    const answers = {
        q1: 'b', q2: 'b', q3: 'c', q4: 'a', q5: 'a',
        q6: 'b', q7: 'a', q8: 'a', q9: 'b', q10: 'b'
    };
    let score = 0;
    for (let i = 1; i <= 10; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected && selected.value === answers[`q${i}`]) {
            score++;
        }
    };
 
    // \n is for next line
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    document.getElementById('userInfo').innerText =` Name : ${userDetails.name}\nRoll No : ${userDetails.rollNo}\nBranch : ${userDetails.branch}\n Division : ${userDetails.division}`;
    document.getElementById('score').innerText = `Your Score = ${score}/10`;
    document.getElementById('quiz').classList.add('hidden')
    document.getElementById('result').classList.remove('hidden')
}

function restartQuiz(){
    document.getElementById('result').classList.add('hidden')
    document.getElementById('userForm').classList.remove('hidden')
    document.getElementById('userDetails').reset();
    document.getElementById('quizForm').reset();
    
}


















//     let score = 0;
//     for (let i = 1; i <= 10; i++) {
//         const selected = document.querySelector(`input[name="q${i}"]:checked`);
//         if (selected && selected.value === answers[`q${i}`]) {
//             score++;
//         }
//     }

//     const userDetails = JSON.parse(localStorage.getItem('userDetails'));
//     document.getElementById('userInfo').innerText = `Name: ${userDetails.name}, Roll No: ${userDetails.rollNo}, Branch: ${userDetails.branch}, Division: ${userDetails.division}`;
//     document.getElementById('score').innerText = `Your Score: ${score}/10`;
//     document.getElementById('quiz').classList.add('hidden');
//     document.getElementById('result').classList.remove('hidden');
// }

// function restartQuiz() {
//     document.getElementById('result').classList.add('hidden');
//     document.getElementById('userForm').classList.remove('hidden');
//     document.getElementById('userDetails').reset();
//     document.getElementById('quizForm').reset();
