import { Link } from 'react-router';
import { useSelector } from 'react-redux';

function Header({ title, slogan }) {
    const cartCount = useSelector((state) => state.cart.cartCount);

    return (
        <header className="text-center flex items-center justiy-center ">
            <div className="flex flex-col items-center justify-center w-full -mr-30">
                <Link to="/">
                    <h2 className="text-white pt-5 pb-2 text-3xl font-bold">
                        {title}
                    </h2>
                </Link>

                <p className="text-gray-400 text-opacity-80 text-base leading-relaxed xl:w-1/2 lg:w-3/4 mx-auto">
                    {slogan}
                </p>
                <div className="flex mt-6 justify-center">
                    <hr className="my-[25px] mx-auto w-[100px] border-0 border-t-[6px] border-primary opacity-100 rounded" />
                </div>
            </div>
            <div>
                <div className="indicator mr-5 mb-5">
                    <span className="indicator-item badge badge-secondary text-xs w-4">{cartCount}</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        className="w-8 h-8 fill-current text-white hover:text-blue-500 text-sm"
                    >
                        <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                    </svg>
                </div>
            </div>
        </header>
    );
}

export default Header;
