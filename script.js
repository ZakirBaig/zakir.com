//menu
let whichProject = prompt("Enter 1 to see grade book\nEnter 2 to see tables\nEnter 3 to see grade to persentage\nEnter 4 to to identify your number is even or odd");
switch (whichProject) {
    case '1':
        let studentName = prompt("Enter student name:");

        let marks = prompt("Enter student marks:");

        marks = Number.parseInt(marks);

        if (marks <= 100 && marks >= 90) {

            console.log(studentName + "'s grade is " + "A+");

        } else if (marks <= 89 && marks >= 80) {

            console.log(studentName + "'s grade is " + "A");

        } else if (marks <= 79 && marks >= 70) {

            console.log(studentName + "'s grade is " + "B");

        } else if (marks <= 69 && marks >= 60) {

            console.log(studentName + "'s grade is " + "C");

        } else if (marks <= 59 && marks >= 50) {

            console.log(studentName + "'s grade is " + "D");

        } else if (marks > 100) {

            console.log(" Numbers should be from 0 to 100");

        } else if (marks <= 49) {

            console.log("Fail");
        } else {

            alert("    !!!!!Error!!!!!\nInput value is invalid!!!");

        }
        break;
    case '2':
        let x = prompt("Enter any number:");
        console.log("Table of " + x);
        console.log(x + " x 1 = " + x * 1);
        console.log(x + " x 2 = " + x * 2);
        console.log(x + " x 3 = " + x * 3);
        console.log(x + " x 4 = " + x * 4);
        console.log(x + " x 5 = " + x * 5);
        console.log(x + " x 6 = " + x * 6);
        console.log(x + " x 7 = " + x * 7);
        console.log(x + " x 8 = " + x * 8);
        console.log(x + " x 9 = " + x * 9);
        console.log(x + " x 10 = " + x * 10);
        break;
    case '3':
        let y = prompt("Enter your grade :");
        switch (y) {
            case 'A':
                console.log("your persentage is 95");
                break;
            case 'B':
                console.log("your persentage is 85");
                break;
            case 'C':
                console.log("your persentage is 75");
                break;
            case 'D':
                console.log("your persentage is 65");
                break;
            case 'E':
                console.log("your persentage is 55");
                break;
            case 'F':
                console.log("your persentage is 45");
                break;
            default:
                alert("Grade should be from capital 'A' to capital 'F' ");
                break;
        }
        break;
    case '4':
        let z = prompt("Enter any number");
        z % 2 === 0 ? console.log("This is an even number") : console.log("This is an odd number");
        break;

    default:
        alert("    !!!!!Error!!!!!\nInput value is invalid!!!");
        break;
}