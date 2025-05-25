
const Index = () => {
  const people = [
    { name: "Carlos Obiols de Cara", date: "24 de Gener" },
    { name: "Alejandro Piqueras", date: "13 de Febrer" },
    { name: "Matias Balzamo", date: "11 de Mayo" },
    { name: "Daniel Ulied", date: "19 de Mayo" },
    { name: "Pau Enjuanes", date: "7 de Juliol" },
    { name: "Marc Vergara", date: "12 de Octubre" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Dates Importants
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Una col·lecció de dates especials per recordar
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {people.map((person, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-gray-100"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">
                    {person.name.split(' ')[0][0]}{person.name.split(' ')[1] ? person.name.split(' ')[1][0] : ''}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {person.name}
                </h2>
                <div className="bg-gray-50 rounded-lg py-3 px-4">
                  <p className="text-lg font-medium text-blue-600">
                    {person.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-block bg-white rounded-lg shadow-md px-6 py-4">
            <p className="text-gray-600 text-sm">
              ✨ Recordeu aquestes dates especials ✨
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
