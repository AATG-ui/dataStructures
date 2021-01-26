Student_Name_Array = [];

function submit() {

    for(var i = 1;i<=4;i++){
        var temp = document.getElementById("name_of_the_student_"+i).value;
        console.log(temp);
        Student_Name_Array.push(temp);
    }
    
    console.log(Student_Name_Array);

    var length=Student_Name_Array.length;

    Display_Student_Name_Array = [];

    for(var k = 0;k<length;k++){
        Display_Student_Name_Array.push("<h1>"+Student_Name_Array[k]+"</h1>");
    }

    console.log(Display_Student_Name_Array);
    document.getElementById("display_name_with_commas").innerHTML = Display_Student_Name_Array;

    var remove = Display_Student_Name_Array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML = remove;
}