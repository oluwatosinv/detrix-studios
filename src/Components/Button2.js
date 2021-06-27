import { Link } from "react-router-dom";

const Button2 = () => {
  return (
    <div className='text-center '>
      <Link to='/ContactUs'>
        <button
          type='button'
          class='btn gradient-button-1'
          data-mdb-toggle='button'
          autocomplete='off'
        >
          Contact Us
        </button>
      </Link>
    </div>
  );
};

export default Button2;
