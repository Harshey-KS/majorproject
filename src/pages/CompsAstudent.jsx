import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import Heading from '../components/ui/Heading';
import Todo from '../components/ui/Todo';
import axios from "axios";
import Nav from '../components/ui/Nav';
import ListAssignment from '../components/ui/ListAssignment';
import SyllabusStudent from '../components/ui/SyllabusStudent';
import TodoStudent from '../components/ui/TodoStudent';
import AssignmentStudent from '../components/ui/AssignmentStudent';


const CompsAstudent = () => {
  
  return (
    <div className="flex flex-col bg-gray-200"> {/* Add bg-gray-200 class for light gray background */}
      <Nav />
      <div className="flex flex-row-reverse"> {/* Container for both components */}
        <div className="w-9/12 margin-right:15%"> {/* Width set to 1/4 of the container */}
          <AssignmentStudent />
        </div>
        <div className="flex-grow"> {/* Takes remaining space */}
          <TodoStudent />
          <SyllabusStudent /> {/* Insert Syllabus component here */}
          <div className="mt-4 ml-16"> {/* Margin top to provide space */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompsAstudent;