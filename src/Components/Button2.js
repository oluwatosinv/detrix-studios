import { Link } from "react-router-dom";

const Button2 = () => {
  return (
    <div className='text-center '>
      <Link to='/ContactUs'>
        <button
          type='button'
          className='btn gradient-button-1'
          data-mdb-toggle='button'
          autoComplete='off'
        >
          Contact Us
        </button>
      </Link>
    </div>
  );
};

export default Button2;
