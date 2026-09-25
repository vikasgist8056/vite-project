import './style.css'
import {students} from './student.js'

document.querySelector('#app').innerHTML = `

    <div class="min-h-screen bg-gray-100 p-8">

        <div class="bg-white rounded-xl shadow-md p-6">

            <h1 class="text-3xl font-bold text-gray-900">
                Student Management
            </h1>

            <p class="mt-2 text-gray-600">
                Manage student records
            </p>
            <button
            class="mt-5
           px-5 py-2.5
           rounded-lg
           bg-blue-600
           text-white
           hover:bg-blue-700"
>
    Add Student
</button>

        </div>
          <h1 class="text-xl font-bold text-gray-900">
            Student List
        </h1>
         <div class="mt-6">

            <ul class="space-y-3">

                ${students.map(student => `
                    
                    <li class="bg-white rounded-lg shadow-sm p-4">

                        <p class="font-semibold text-gray-900">
                            ${student.name}
                        </p>

                        <p class="text-gray-600">
                            Marks: ${student.marks}%
                        </p>
                        <p class="text-gray-600">
                            Result: ${student.marks>=40?'<span class="text-green-500">Pass</span>':'<span class="text-red-800">Fail</span>'}
                        </p>

                    </li>

                `).join('')}

            </ul>

        </div>

    </div>`;

const totalStudents = students.length;

const passedStudents = students.filter(
    student => student.marks >= 40
);

const failedStudents = students.filter(
    student => student.marks < 40
);

const totalMarks = students.reduce(
    (total, student) => total + student.marks,
    0
);

const averageMarks =
    totalMarks / totalStudents;
    
const resultSummary = `<div class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

    <div class="bg-white rounded-xl shadow-sm p-5">
        <p class="text-sm text-gray-500">
            Total Students
        </p>

        <p class="mt-2 text-3xl font-bold">
            ${totalStudents}
        </p>
    </div>


    <div class="bg-white rounded-xl shadow-sm p-5">
        <p class="text-sm text-gray-500">
            Passed
        </p>

        <p class="mt-2 text-3xl font-bold text-green-600">
            ${passedStudents.length}
        </p>
    </div>


    <div class="bg-white rounded-xl shadow-sm p-5">
        <p class="text-sm text-gray-500">
            Failed
        </p>

        <p class="mt-2 text-3xl font-bold text-red-600">
            ${failedStudents.length}
        </p>
    </div>


    <div class="bg-white rounded-xl shadow-sm p-5">
        <p class="text-sm text-gray-500">
            Average
        </p>

        <p class="mt-2 text-3xl font-bold text-blue-600">
            ${averageMarks.toFixed(2)}%
        </p>
    </div>

</div>
`
document.querySelector('#app').innerHTML += resultSummary;
document.querySelector('#app').innerHTML += `</div>`;