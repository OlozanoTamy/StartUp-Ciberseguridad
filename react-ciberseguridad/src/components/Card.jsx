function Card({ title, description }) {
    return (
      <div className="border rounded-lg shadow-md p-4 bg-white">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }
  
  export default Card;