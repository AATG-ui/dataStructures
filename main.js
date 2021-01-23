Student_Name_Array=[];
function submit()
{
    var Name_1=document.getElementById("Student_Name_1").value;
    var Name_2=document.getElementById("Student_Name_2").value;
    var Name_3=document.getElementById("Student_Name_3").value;
    var Name_4=document.getElementById("Student_Name_4").value;

    Student_Name_Array.push(Name_1);
    Student_Name_Array.push(Name_2);
    Student_Name_Array.push(Name_3);
    Student_Name_Array.push(Name_4);

    document.getElementById("Display_Name").innerHTML=Student_Name_Array;
    document.getElementById("Submit_Button").style.display="none";
    document.getElementById("Sort_Button").style.display="inline-block";
}

function sort()
{
Student_Name_Array.sort();

document.getElementById("Display_Name").innerHTML=Student_Name_Array;
document.getElementById("Submit_Button").style.display="inline-block";
document.getElementById("Sort_Button").style.display="none";
}