export default function Contacto() {
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
                <a href="/" className="nav-link flex items-center space-x-2">
                  <span>🏠</span>
                  <span>Inicio</span>
                </a>
              </li>
              <li>
                <a href="/quienes-somos" className="nav-link flex items-center space-x-2">
                  <span>👥</span>
                  <span>Quiénes Somos</span>
                </a>
              </li>
              <li>
                <a href="/contacto" className="nav-link nav-link-active flex items-center space-x-2">
                  <span>📞</span>
                  <span>Contacto</span>
                </a>
              </li>
              <li>
                <a href="/politica-privacidad" className="nav-link flex items-center space-x-2">
                  <span>🔒</span>
                  <span>Privacidad</span>
                </a>
              </li>
              <li>
                <a href="/terminos-condiciones" className="nav-link flex items-center space-x-2">
                  <span>📋</span>
                  <span>Términos</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Contacto
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-blue-900 mb-6">
                Información de Contacto
              </h2>

              <div className="space-y-6">
                {/* Dirección */}
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Dirección Física</h3>
                    <p className="text-gray-600">
                      Av. José Gálvez Nro. 1344 Int. 103<br />
                      Urbanización: Santa Beatriz<br />
                      Distrito: Lima<br />
                      Departamento: Lima, Perú
                    </p>
                    <p className="text-sm text-green-600 font-medium mt-2">
                      ✅ Domicilio Habido (Verificado)
                    </p>
                  </div>
                </div>

                {/* Teléfono */}
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📞</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Teléfono</h3>
                    <p className="text-gray-600">998 994 969</p>
                    <p className="text-sm text-gray-500">Llamadas y WhatsApp</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">✉️</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Correo Electrónico</h3>
                    <p className="text-gray-600">info@consorcioneptuno.com</p>
                    <p className="text-sm text-gray-500">Respuesta en 24-48 horas</p>
                  </div>
                </div>

                {/* Horario */}
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">🕒</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Horario de Atención</h3>
                    <div className="text-gray-600">
                      <p><strong>Lunes - Viernes:</strong> 8:00 AM - 6:00 PM</p>
                      <p><strong>Sábados:</strong> 8:00 AM - 12:00 PM</p>
                      <p><strong>Domingos:</strong> Cerrado</p>
                    </div>
                  </div>
                </div>

                {/* Información Legal */}
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📋</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Información Legal</h3>
                    <div className="text-gray-600">
                      <p><strong>RUC:</strong> 20600187121</p>
                      <p><strong>Razón Social:</strong> CONSORCIO NEPTUNO CONSTRUCTORA & INMOBILIARIA S.A.C.</p>
                      <p><strong>Estado:</strong> Activo</p>
                      <p><strong>Inicio de Actividades:</strong> 22 de Mayo de 2015</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold text-blue-900 mb-6">
                Envíanos un Mensaje
              </h2>

              <form className="space-y-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ingrese su nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="correo@ejemplo.com"
                  />
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="998 994 969"
                  />
                </div>

                <div>
                  <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-1">
                    Asunto *
                  </label>
                  <select
                    id="asunto"
                    name="asunto"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Seleccione un asunto</option>
                    <option value="cotizacion">Solicitud de Cotización</option>
                    <option value="consulta">Consulta General</option>
                    <option value="reclamo">Reclamo o Queja</option>
                    <option value="sugerencia">Sugerencia</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={5}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe tu consulta o solicitud..."
                  ></textarea>
                </div>

                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="acepto"
                    name="acepto"
                    required
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="acepto" className="text-sm text-gray-600">
                    Acepto la{' '}
                    <a href="/politica-privacidad" className="text-blue-600 hover:underline">
                      Política de Privacidad
                    </a>{' '}
                    y los{' '}
                    <a href="/terminos-condiciones" className="text-blue-600 hover:underline">
                      Términos y Condiciones
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map and Additional Info */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Map Placeholder */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Ubicación</h3>
            <div className="bg-gray-200 h-64 rounded flex items-center justify-center">
              <div className="text-center text-gray-600">
                <div className="text-4xl mb-2">🗺️</div>
                <p>Mapa de ubicación</p>
                <p className="text-sm">Av. José Gálvez Nro. 1344 Int. 103</p>
                <p className="text-sm">Santa Beatriz, Lima</p>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Información Adicional</h3>

            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium text-gray-800">Registro Nacional de Proveedores</h4>
                <p className="text-gray-600 text-sm">
                  ✅ Empadronada para contrataciones con el Estado Peruano
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-medium text-gray-800">Estado de la Empresa</h4>
                <p className="text-gray-600 text-sm">
                  ✅ Empresa activa y operando desde 2015
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-medium text-gray-800">Actividades Principales</h4>
                <ul className="text-gray-600 text-sm list-disc list-inside">
                  <li>Construcción de edificios completos (CIIU: 45207)</li>
                  <li>Servicios inmobiliarios</li>
                  <li>Venta por menor relacionada con construcción</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-medium text-gray-800">Atención Especializada</h4>
                <p className="text-gray-600 text-sm">
                  Contamos con personal capacitado para atender consultas sobre:
                </p>
                <ul className="text-gray-600 text-sm list-disc list-inside mt-1">
                  <li>Proyectos de construcción</li>
                  <li>Servicios inmobiliarios</li>
                  <li>Contrataciones estatales</li>
                  <li>Consultoría técnica</li>
                </ul>
              </div>
            </div>
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
