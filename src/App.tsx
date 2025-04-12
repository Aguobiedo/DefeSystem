import { useState, useRef, useEffect } from 'react';
import { personasDB, Persona } from './PersonaData';
import './App.css';
import { BrowserMultiFormatReader } from '@zxing/library';
import QRCode from 'react-qr-code';
import { renderToStaticMarkup } from 'react-dom/server';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';


function App() {
  // Búsqueda por DNI (texto)
  const [dni, setDni] = useState<string>('');
  const [persona, setPersona] = useState<Persona | null>(null);
  const [error, setError] = useState<string>('');
  
  // Modal para resultados y para el escáner
  const [showPersonaModal, setShowPersonaModal] = useState<boolean>(false);
  const [showScannerModal, setShowScannerModal] = useState<boolean>(false);

  // Refs para QR y video del escáner
  const qrRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  
  // Scanner (QR) – se inicializa cuando se abre el modal
  const [scanner, setScanner] = useState<BrowserMultiFormatReader | null>(null);

  // Función de búsqueda por DNI
  const buscarPersonaPorDni = (dniBuscado: string) => {
    const encontrada = personasDB.find((p) => p.dni === dniBuscado);
    if (encontrada) {
      setPersona(encontrada);
      setError('');
      setShowPersonaModal(true);
    } else {
      setError('Persona no encontrada');
      setPersona(null);
    }
  };

  // Manejo del resultado del escaneo
  const handleScan = (resultText: string) => {
    // Se asume que el contenido del QR es el dni
    setDni(resultText);
    buscarPersonaPorDni(resultText);
    // Cerrar el modal del escáner y liberar el scanner
    closeScannerModal();
  };

  const handleError = (error: any) => {
    console.error('Error al escanear', error);
    setError('Error al escanear el código QR');
  };

  // Inicializar o resetear el scanner cuando se abre o cierra el modal
  useEffect(() => {
    if (showScannerModal && videoRef.current) {
      const newScanner = new BrowserMultiFormatReader();
      setScanner(newScanner);
      newScanner
        .decodeFromVideoDevice(
          null,
          videoRef.current,
          (result, error) => {
            if (result) {
              handleScan(result.getText());
            }
            if (error && !(error instanceof DOMException)) {
              handleError(error);
            }
          }
        )
        .catch((err) => handleError(err));
    }
    return () => {
      if (scanner) {
        scanner.reset();
        setScanner(null);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showScannerModal]);

  // Función para cerrar modal del escáner
  const closeScannerModal = () => {
    setShowScannerModal(false);
    if (scanner) {
      scanner.reset();
      setScanner(null);
    }
  };

  // Función para cerrar el modal de persona
  const closePersonaModal = () => {
    setShowPersonaModal(false);
  };

  // Descargar el QR del persona actual (como SVG)
  const downloadPersonQR = () => {
    if (qrRef.current && persona) {
      const svgElement = qrRef.current.querySelector('svg');
      if (svgElement) {
        const serializer = new XMLSerializer();
        const svgString = serializer.serializeToString(svgElement);
        const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `qr_${persona.dni}.svg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }
    }
  };

  // Descargar todos los QRs en un ZIP
  const downloadAllQRs = async () => {
    const zip = new JSZip();
    // Para cada persona, se genera el contenido SVG a partir de renderToStaticMarkup
    personasDB.forEach((p) => {
      const qrSvgString = renderToStaticMarkup(<QRCode value={p.dni} />);
      zip.file(`qr_${p.dni}.svg`, qrSvgString);
    });
    const blob = await zip.generateAsync({ type: 'blob' });
    saveAs(blob, 'all_qrs.zip');
  };

  return (
    <div className="App">
      <h1>Buscar Persona por DNI</h1>

      <div className="input-group">
        <input
          type="text"
          placeholder="Ingresa el DNI"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
        />
        <button className="boton" onClick={() => buscarPersonaPorDni(dni)}>Buscar</button>
      </div>

      <div className="button-group">
        <button onClick={() => setShowScannerModal(true)}>Escanear QR</button>
        <button onClick={downloadAllQRs}>Descargar Todos los QRs</button>
      </div>

      {error && <p className="error">{error}</p>}

      {showPersonaModal && persona && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Persona Identificada</h2>
            <p>
              <strong>DNI:</strong> {persona.dni}
            </p>
            <p>
              <strong>Nombre:</strong> {persona.nombre}
            </p>
            <p>
              <strong>Apellido:</strong> {persona.apellido}
            </p>
            <p>
              <strong>Fecha de Nacimiento:</strong> {persona.fechaNacimiento}
            </p>
            <p>
              <strong>Condición:</strong>{' '}
              {persona.condicion === 'Deportista' ? (
                <span className="deportista">Deportista</span>
              ) : persona.condicion === 'Socio' ? (
                <span className="socio">
                  Socio - Al día como socio
                </span>
              ) : (
                persona.condicion
              )}
            </p>
            <p>
              <strong>Deporte:</strong> {persona.deporte}
            </p>
            <div className="qr-container" ref={qrRef}>
              <h3>QR de la persona</h3>
              <QRCode value={persona.dni} />
            </div>
            <div className="button-group">
              <button onClick={downloadPersonQR}>Descargar QR</button>
              <button onClick={closePersonaModal}>Cerrar</button>
            </div>
          </div>
        </div>
      )}

      {showScannerModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Escanear Código QR</h2>
            <video
              ref={videoRef}
              width="100%"
              height="auto"
              style={{ border: '1px solid black' }}
            />
            <div className="button-group">
              <button onClick={closeScannerModal}>Cerrar Escáner</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
