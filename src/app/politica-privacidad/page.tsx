import Link from "next/link";

export default function PoliticaPrivacidad() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="hero-gradient text-white sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-4xl font-bold text-white">Consorcio Neptuno</h1>
              <p className="text-blue-100 text-lg">Constructora & Inmobiliaria S.a.C.</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-white">📞 998 994 969</p>
              <p className="text-blue-100">Teléfono</p>
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
                <Link href="/politica-privacidad" className="nav-link nav-link-active flex items-center space-x-2">
                  <span>🔒</span>
                  <span>Privacidad</span>
                </Link>
              </li>
              <li>
                <Link href="/terminos-condiciones" className="nav-link flex items-center space-x-2">
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
            Política de Privacidad
          </h1>

          <div className="prose max-w-none text-gray-700">
            <p className="text-lg mb-6">
              <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-PE')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">1. Introducción</h2>
              <p className="mb-4">
                En <strong>Consorcio Neptuno Constructora & Inmobiliaria S.a.C.</strong> (en adelante, &quot;la Empresa&quot;,
                &quot;nosotros&quot; o &quot;nuestro&quot;), respetamos su privacidad y nos comprometemos a proteger sus datos personales.
                Esta Política de Privacidad explica cómo recopilamos, utilizamos, divulgamos y salvaguardamos su
                información cuando visita nuestro sitio web, utiliza nuestros servicios o interactúa con nosotros.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">2. Información que Recopilamos</h2>
              <h3 className="text-xl font-medium mb-3">2.1 Información Personal</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Nombre completo</li>
                <li>Número de documento de identidad (DNI, RUC)</li>
                <li>Dirección de correo electrónico</li>
                <li>Números de teléfono</li>
                <li>Dirección postal</li>
                <li>Información financiera (para transacciones)</li>
                <li>Detalles de propiedades (en caso de servicios inmobiliarios)</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">2.2 Información Técnica</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Dirección IP</li>
                <li>Tipo de navegador y versión</li>
                <li>Sistema operativo</li>
                <li>Páginas visitadas y tiempo de permanencia</li>
                <li>Fuente de referencia</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">3. Cómo Utilizamos su Información</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Procesar consultas y solicitudes de servicios</li>
                <li>Proporcionar servicios de construcción e inmobiliarios</li>
                <li>Comunicarnos con usted sobre proyectos y actualizaciones</li>
                <li>Mejorar nuestros servicios y sitio web</li>
                <li>Cumplir con obligaciones legales y contractuales</li>
                <li>Prevenir fraudes y actividades ilegales</li>
                <li>Enviar información relevante sobre nuestros servicios</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">4. Compartir Información con Terceros</h2>
              <p className="mb-4">
                No vendemos, alquilamos ni compartimos su información personal con terceros para fines de marketing,
                excepto en los siguientes casos:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Proveedores de servicios:</strong> Empresas que nos ayudan a operar nuestro negocio (contabilidad, servicios legales, etc.)</li>
                <li><strong>Obligaciones legales:</strong> Cuando lo exija la ley o autoridades competentes</li>
                <li><strong>WhatsApp Business:</strong> Utilizamos WhatsApp para comunicación directa con clientes, respetando siempre su consentimiento</li>
                <li><strong>Meta (Facebook):</strong> Podemos utilizar herramientas de Meta para análisis y publicidad, siempre cumpliendo con las políticas de privacidad</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">5. Cookies y Tecnologías Similares</h2>
              <p className="mb-4">
                Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio web:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Cookies esenciales para el funcionamiento del sitio</li>
                <li>Cookies de análisis para entender el uso del sitio</li>
                <li>Cookies de funcionalidad para recordar sus preferencias</li>
              </ul>
              <p className="mb-4">
                Puede gestionar sus preferencias de cookies a través de la configuración de su navegador.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">6. Seguridad de los Datos</h2>
              <p className="mb-4">
                Implementamos medidas de seguridad técnicas, administrativas y físicas apropiadas para proteger su
                información personal contra acceso no autorizado, alteración, divulgación o destrucción, incluyendo:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Cifrado de datos sensibles</li>
                <li>Acceso restringido a información personal</li>
                <li>Monitoreo y auditoría de sistemas</li>
                <li>Capacitación regular del personal</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">7. Sus Derechos</h2>
              <p className="mb-4">
                De acuerdo con la legislación peruana y las normas internacionales de protección de datos,
                usted tiene los siguientes derechos:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Derecho de acceso:</strong> Conocer qué datos personales tenemos sobre usted</li>
                <li><strong>Derecho de rectificación:</strong> Corregir datos inexactos o incompletos</li>
                <li><strong>Derecho de cancelación:</strong> Eliminar sus datos personales</li>
                <li><strong>Derecho de oposición:</strong> Oponerse al procesamiento de sus datos</li>
                <li><strong>Derecho a la portabilidad:</strong> Recibir sus datos en formato estructurado</li>
                <li><strong>Derecho a la limitación:</strong> Limitar el procesamiento de sus datos</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">8. Contacto</h2>
              <p className="mb-4">
                Si tiene preguntas sobre esta Política de Privacidad o desea ejercer sus derechos,
                puede contactarnos:
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <p><strong>Consorcio Neptuno Constructora & Inmobiliaria S.a.C.</strong></p>
                <p>Dirección: Av. José Gálvez Nro. 1344 Int. 103, Santa Beatriz, Lima</p>
                <p>Teléfono: 998 994 969</p>
                <p>Email: info@consorcioneptuno.com</p>
                <p>RUC: 20600187121</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">9. Cambios a esta Política</h2>
              <p className="mb-4">
                Podemos actualizar esta Política de Privacidad periódicamente. Le notificaremos sobre cambios
                importantes publicando la nueva política en nuestro sitio web con una fecha de actualización.
              </p>
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
