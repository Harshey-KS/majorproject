
// import React from 'react';
// import '../../pages/Home.css';


// const Form = () => {
//   return (
//     <div className="form-container">
//       <form className="form">
//         <input placeholder="Enter your name" className="input" type="text" />
//         <input placeholder="Enter your email" className="input" type="text" />
//         {/* <input placeholder="*********" className="input" type="password" /> */}
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Form;

import React from 'react';
import '../../pages/Home.css';


const Form = () => {
 

  return (
    <div className="form-container">
      <form className="form" > {/* Pass handleSubmit */}
        <input placeholder="Enter your name" name="name" className="input" type="text" />
        <input placeholder="Enter your email" name="email" className="input" type="text" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;