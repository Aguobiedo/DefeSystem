import React, { useState, useRef, useEffect } from 'react';
import { personasDB, Persona } from './PersonaData';
import './App.css';
import { BrowserMultiFormatReader } from '@zxing/library';
import QRCode from 'react-qr-code';

function App() {
  const [id, setId] = useState<number>(0);
  const [persona, setPersona] = useState<Persona | null>(null);
  const [error, setError] = useState<string>('');
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [scanner, setScanner] = useState<BrowserMultiFormatReader | null>(null);
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [lastScannedId, setLastScannedId] = useState<number | null>(null); // para evitar escaneos repetidos

  const buscarPersonaPorId = (idBuscado: number) => {
    const personaEncontrada = personasDB.find((p) => p.id === idBuscado);
    if (personaEncontrada) {
      setPersona(personaEncontrada);
      setError('');
      setShowModal(true); // Mostrar el modal
    } else {
      setError('Persona no encontrada');
      setPersona(null);
    }
  };

  const handleScan = (result: string) => {
    const idEscaneado = parseInt(result);
    if (!isNaN(idEscaneado) && idEscaneado !== lastScannedId) {
      setLastScannedId(idEscaneado); // Evita escaneos repetidos
      setId(idEscaneado);
      buscarPersonaPorId(idEscaneado);
    }
  };

  const handleError = (error: any) => {
    console.error('Error al escanear', error);
    setError('Error al escanear el código QR');
  };

  useEffect(() => {
    if (videoRef.current && !scanner) {
      const newScanner = new BrowserMultiFormatReader();
      setScanner(newScanner);

      newScanner
        .decodeFromVideoDevice(null, videoRef.current, (result, error) => {
          if (result) {
            handleScan(result.getText());
          }
          if (error && !(error instanceof DOMException)) {
            handleError(error);
          }
        })
        .then(() => setIsScanning(true))
        .catch((err) => handleError(err));
    }

    return () => {
      if (scanner) {
        scanner.reset();
        setIsScanning(false);
      }
    };
  }, [scanner]);

  const closeModal = () => {
    setShowModal(false);
    setLastScannedId(null); // permite volver a escanear el mismo QR
  };

  return (
    <div className="App">
      <h1>Buscar Persona por ID</h1>

      <input
        type="number"
        placeholder="Ingresa el ID"
        value={id}
        onChange={(e) => setId(Number(e.target.value))}
      />
      <button onClick={() => buscarPersonaPorId(id)}>Buscar</button>

      <div style={{ marginTop: '20px' }}>
        <h2>Escanea el código QR para obtener el ID</h2>
        <video ref={videoRef} width="100%" height="auto" style={{ border: '1px solid black' }} />
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {persona && (
        <div style={{ marginTop: '20px' }}>
          <h3>Generar QR de la persona</h3>
          <QRCode value={String(persona.id)} />
        </div>
      )}

      {/* Modal */}
      {showModal && persona && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Persona identificada</h2>
            <p><strong>ID:</strong> {persona.id}</p>
            <p><strong>Nombre:</strong> {persona.nombre}</p>
            <p><strong>Apellido:</strong> {persona.apellido}</p>
            <p><strong>DNI:</strong> {persona.dni}</p>
            <p><strong>Fecha de Nacimiento:</strong> {persona.fechaNacimiento}</p>
            <p><strong>Condición:</strong> {persona.condicion}</p>
            <p><strong>Deporte:</strong> {persona.deporte}</p>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  ); 
}

export default App;
