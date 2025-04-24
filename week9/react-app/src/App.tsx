import React, { useState } from 'react';
import ListGroup from './components/ListGroup';
import Alert from './components/Alert';

function App() {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [showAlert, setShowAlert] = useState(false);

  const cities = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setShowAlert(true);
  };

  return (
    <div className="container mt-3">
      <ListGroup
        items={cities}
        heading="City List"
        onSelectItem={handleCitySelect}
      />

      {showAlert && selectedCity && (
        <Alert onClose={() => setShowAlert(false)}>
          You selected: <strong>{selectedCity}</strong>
        </Alert>
      )}
    </div>
  );
}

export default App;
