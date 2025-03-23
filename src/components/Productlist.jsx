import bookItem from "../json/books.json";

export default function Productlist() {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {bookItem.map((item) => (
        <div key={item.ID} className="card bg-[#DCDDDF] bg-base-100 w-96 shadow-sm">
          <figure className="px-10 pt-10">
            <img src={item.cover} alt={item.title} className="rounded-xl w-full h-98 object-cover" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{item.title}</h2>
            <p className="text-sm text-gray-500">{item.author}</p>
            <p className="mt-2">{item.summary.substring(0, 100)}...</p>
            <p className="font-bold mt-2">${item.price}</p>
            <div className="card-actions">
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
