import Link from "next/link";

export default function TerminosCondiciones() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-3xl font-bold">Consorcio Neptuno</h1>
              <p className="text-blue-100">Constructora & Inmobiliaria S.a.C.</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold">📞 998 994 969</p>
              <p className="text-sm text-blue-100">Teléfono</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="border-t border-blue-700 pt-4 pb-2">
            <ul className="flex flex-wrap justify-center space-x-4 text-sm">
              <li>
                <Link href="/" className="nav-link flex items-center space-x-2">
                  <span>🏠</span>
                  <span>Inicio</span>
                </Link>
              </li>
              <li>
                <Link href="/quienes-somos" className="nav-link flex items-center space-x-2">
                  <span>👥</span>
                  <span>Quiénes Somos</span>
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="nav-link flex items-center space-x-2">
                  <span>📞</span>
                  <span>Contacto</span>
                </Link>
              </li>
              <li>
                <Link href="/politica-privacidad" className="nav-link flex items-center space-x-2">
                  <span>🔒</span>
                  <span>Privacidad</span>
                </Link>
              </li>
              <li>
                <Link href="/terminos-condiciones" className="nav-link nav-link-active flex items-center space-x-2">
                  <span>📋</span>
                  <span>Términos</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Términos y Condiciones
          </h1>

          <div className="prose max-w-none text-gray-700">
            <p className="text-lg mb-6">
              <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-PE')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">1. Aceptación de los Términos</h2>
              <p className="mb-4">
                Al acceder y utilizar los servicios de <strong>Consorcio Neptuno Constructora & Inmobiliaria S.a.C.</strong>
                (en adelante, &quot;la Empresa&quot; o &quot;nosotros&quot;), usted acepta estar sujeto a estos Términos y Condiciones
                (en adelante, &quot;los Términos&quot;). Si no está de acuerdo con alguno de estos términos, le solicitamos
                que no utilice nuestros servicios.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">2. Descripción de los Servicios</h2>
              <p className="mb-4">
                <strong>Consorcio Neptuno</strong> ofrece servicios de:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Construcción de edificios completos residenciales y comerciales</li>
                <li>Servicios inmobiliarios de compra, venta y alquiler de propiedades</li>
                <li>Consultoría y asesoramiento en proyectos de construcción</li>
                <li>Gestión de proyectos especiales y contrataciones con el Estado</li>
                <li>Servicios de venta por menor relacionados con la construcción</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">3. Uso Aceptable</h2>
              <p className="mb-4">
                Al utilizar nuestros servicios, usted se compromete a:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Proporcionar información veraz y precisa</li>
                <li>Utilizar los servicios únicamente para fines legítimos</li>
                <li>Respetar los derechos de propiedad intelectual</li>
                <li>No interferir con el funcionamiento normal de nuestros sistemas</li>
                <li>Cumplir con todas las leyes y regulaciones aplicables</li>
                <li>No realizar actividades fraudulentas o engañosas</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">4. Proceso de Contratación</h2>
              <h3 className="text-xl font-medium mb-3">4.1 Cotizaciones</h3>
              <p className="mb-4">
                Todas las cotizaciones proporcionadas por la Empresa tienen una validez de 30 días calendario,
                salvo indicación expresa en contrario. Los precios pueden variar según cambios en costos de
                materiales o modificaciones en el proyecto.
              </p>

              <h3 className="text-xl font-medium mb-3">4.2 Contratos</h3>
              <p className="mb-4">
                La aceptación de una cotización genera un contrato vinculante entre las partes. Los términos
                específicos del proyecto se detallan en el contrato correspondiente, que prevalece sobre estos
                términos generales.
              </p>

              <h3 className="text-xl font-medium mb-3">4.3 Pagos</h3>
              <p className="mb-4">
                Los pagos se realizan según el cronograma establecido en cada contrato. Se aceptan diversos
                métodos de pago incluyendo transferencias bancarias, efectivo y otros medios acordados.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">5. Propiedad Intelectual</h2>
              <p className="mb-4">
                Todo el contenido de nuestro sitio web, incluyendo pero no limitándose a textos, imágenes,
                diseños, logos, planos y especificaciones técnicas, son propiedad exclusiva de
                <strong>Consorcio Neptuno</strong> o se utilizan bajo licencia autorizada.
              </p>
              <p className="mb-4">
                Está prohibida la reproducción, distribución o modificación no autorizada de cualquier
                material protegido por derechos de autor.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">6. Limitación de Responsabilidad</h2>
              <p className="mb-4">
                <strong>Consorcio Neptuno</strong> se esforzará por proporcionar servicios de la más alta calidad,
                sin embargo:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>No garantizamos que nuestros servicios sean ininterrumpidos o libres de errores</li>
                <li>No nos hacemos responsables por daños indirectos, incidentales o consecuentes</li>
                <li>La responsabilidad máxima se limita al monto pagado por los servicios específicos</li>
                <li>No asumimos responsabilidad por retrasos causados por factores fuera de nuestro control</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">7. Confidencialidad</h2>
              <p className="mb-4">
                Toda la información proporcionada por el cliente se trata con estricta confidencialidad.
                No divulgaremos información confidencial sin el consentimiento previo por escrito del cliente,
                excepto cuando sea requerido por ley o autoridad competente.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">8. Resolución de Conflictos</h2>
              <p className="mb-4">
                Cualquier disputa relacionada con estos términos o nuestros servicios se resolverá mediante:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Negociación directa entre las partes</li>
                <li>Mediación, si no se llega a un acuerdo</li>
                <li>Arbitraje en Lima, Perú, como última instancia</li>
              </ul>
              <p className="mb-4">
                Se aplicará la legislación peruana a cualquier disputa.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">9. Modificaciones</h2>
              <p className="mb-4">
                Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento.
                Los cambios entrarán en vigor inmediatamente después de su publicación en nuestro sitio web.
                El uso continuado de nuestros servicios después de la publicación de cambios constituye
                la aceptación de los nuevos términos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">10. Terminación</h2>
              <p className="mb-4">
                Podemos terminar o suspender su acceso a nuestros servicios inmediatamente, sin previo aviso,
                por cualquier violación a estos términos o por cualquier otra razón que consideremos necesaria
                para proteger nuestros intereses o los de terceros.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">11. Información de Contacto</h2>
              <div className="bg-gray-50 p-4 rounded">
                <p><strong>Consorcio Neptuno Constructora & Inmobiliaria S.a.C.</strong></p>
                <p>Dirección: Av. José Gálvez Nro. 1344 Int. 103, Santa Beatriz, Lima</p>
                <p>Teléfono: 998 994 969</p>
                <p>Email: info@consorcioneptuno.com</p>
                <p>RUC: 20600187121</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">12. Disposiciones Generales</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Si alguna disposición de estos términos es inválida, las demás disposiciones permanecerán en vigor</li>
                <li>La falta de ejercicio de cualquier derecho no constituye una renuncia a ese derecho</li>
                <li>Estos términos constituyen el acuerdo completo entre las partes</li>
                <li>Ningún tercero tiene derechos bajo estos términos</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 mt-8">
        <p>&copy; 2025 Consorcio Neptuno Constructora & Inmobiliaria S.a.C.</p>
        <p className="text-gray-400 text-sm mt-2">
          RUC: 20600187121 | Todos los derechos reservados
        </p>
      </footer>
    </div>
  );
}
