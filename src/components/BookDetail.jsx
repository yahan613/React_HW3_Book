import books_reviews from '../json/books_reviews.json';
import { useState } from "react";

export default function BookDetail({ book }) {
    const item = books_reviews.find((item) => item.ID === book.ID);


    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count > 1 ? count - 1 : 1); // 最小值為 1

    const handleBuy = () => {
        setCount(0);  // 按下 "Buy" 按鈕時，將 count 設為 0
    };

    const BuyingWindow = () => {
        document.getElementById('my_modal_1').showModal();
        setCount(0);
    }

    

    return (
        <div className="book-detail">
            <div className="card bg-[#DCDDDF] lg:card-side shadow-sm flex justify-evenly pb-40">
                <figure>
                    <img src={item.cover} alt={item.title} className="rounded-xl w-full h-98 object-cover" />
                </figure>
                <div className="card-body pl-20">
                    <h1 className="card-title text-2xl">{item.title}</h1>
                    <p className="text-xl text-gray-800 text-left">{item.author}</p>
                    <p className="text-xl text-left flex-wrap w-200">{item.summary.substring(0, 300)}</p>

                    <button className="btn btn-primary" onClick={BuyingWindow}>Buy Now</button>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box h-80 flex flex-col justify-evenly">
                            <h1 className="font-bold text-lg">I want to buy：{item.title}</h1>
                            <div className="card-actions w-full flex justify-center pt-15">
                                <button className="btn btn-primary" onClick={decrement}>
                                    -
                                </button>
                                <span className="text-lg font-bold bg-gray-200 px-2 py-1 rounded w-22">{count}</span>
                                <button className="btn btn-primary" onClick={increment}>
                                    +
                                </button>
                            </div>

                            <div className="modal-action flex justify-center">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn center" onclick={handleBuy}>Buy</button>

                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
            <ul className="list bg-base-100 rounded-box shadow-md mt-10">

                <ul>
                    <li className="p-4 pb-2 text-L text-gray-800 font-semibold tracking-wide">Reviews</li>
                    {item.reviews.map((review, index) => (
                        <li key={index} className="list-row">
                            <div>
                                <img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" alt="Profile" />
                            </div>

                            <div className="flex items-center space-x-4 justify-between">
                                <div className="font-semibold ">{review.reviewer}</div>
                                <div className="text-xs opacity-80 w-100 text-left">{review.comment}</div>
                                <div className="text-sm text-yellow-500 w-40">
                                    {Array.from({ length: review.rating }).map((_, i) => (
                                        <span key={i}>⭐</span>
                                    ))}
                                </div>
                            </div>

                        </li>
                    ))}
                </ul>

            </ul>
        </div>
    )
}