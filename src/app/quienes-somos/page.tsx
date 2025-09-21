export default function QuienesSomos() {
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
                <a href="/" className="nav-link flex items-center space-x-2">
                  <span>🏠</span>
                  <span>Inicio</span>
                </a>
              </li>
              <li>
                <a href="/quienes-somos" className="nav-link nav-link-active flex items-center space-x-2">
                  <span>👥</span>
                  <span>Quiénes Somos</span>
                </a>
              </li>
              <li>
                <a href="/contacto" className="nav-link flex items-center space-x-2">
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
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            ¿Quiénes Somos?
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Somos una empresa constructora e inmobiliaria líder en el Perú, comprometida con la excelencia
            en la construcción de edificios y el desarrollo de proyectos inmobiliarios que transforman comunidades.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="modern-card text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Misión</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Construir espacios de calidad que mejoren la vida de las personas y contribuyan al desarrollo
              sostenible de nuestras comunidades, ofreciendo servicios integrales de construcción e inmobiliarios
              con los más altos estándares de excelencia y responsabilidad.
            </p>
          </div>

          <div className="modern-card text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-accent-orange to-accent-orange-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">👁️</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Visión</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Ser la empresa constructora e inmobiliaria de referencia en el Perú, reconocida por nuestra
              innovación, calidad y compromiso con la satisfacción del cliente, expandiendo nuestro impacto
              positivo en el desarrollo urbano y la creación de valor para todos nuestros stakeholders.
            </p>
          </div>

          <div className="modern-card text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">⭐</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Valores</h3>
            <ul className="text-gray-700 text-lg space-y-3">
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span><strong>Excelencia:</strong> Calidad superior en todos nuestros proyectos</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span><strong>Integridad:</strong> Transparencia y honestidad en todas las operaciones</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span><strong>Innovación:</strong> Búsqueda constante de mejores soluciones</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span><strong>Responsabilidad:</strong> Compromiso con el medio ambiente y la sociedad</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span><strong>Compromiso:</strong> Dedicación total a la satisfacción del cliente</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Our Story */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Nuestra Historia</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Desde 2015 Construyendo Sueños</h3>
              <p className="text-gray-600 mb-4">
                <strong>Consorcio Neptuno</strong> nació en el año 2015 con la visión de transformar el panorama
                de la construcción en el Perú. Desde nuestros inicios, nos hemos dedicado a ofrecer servicios
                integrales de construcción e inmobiliarios que no solo cumplen con los más altos estándares
                de calidad, sino que también generan un impacto positivo en las comunidades donde operamos.
              </p>
              <p className="text-gray-600 mb-4">
                Nuestro crecimiento ha sido constante y sostenible, basado en la confianza de nuestros clientes
                y en nuestro compromiso inquebrantable con la excelencia. Hoy, después de años de experiencia,
                nos enorgullece ser una empresa empadronada en el Registro Nacional de Proveedores, lo que
                nos permite participar en contrataciones con el Estado Peruano.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-3">Datos de la Empresa</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">RUC:</span>
                  <span className="font-medium">20600187121</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Fundación:</span>
                  <span className="font-medium">22 de Mayo de 2015</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Estado:</span>
                  <span className="font-medium text-green-600">Activo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">RNP:</span>
                  <span className="font-medium text-blue-600">Registrada</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">CIIU:</span>
                  <span className="font-medium">45207</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Nuestros Servicios</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="text-5xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Construcción de Edificios Completos
              </h3>
              <p className="text-gray-600">
                Especialistas en la construcción integral de edificios residenciales, comerciales e institucionales
                con los más altos estándares de calidad y seguridad.
              </p>
            </div>

            <div className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Servicios Inmobiliarios
              </h3>
              <p className="text-gray-600">
                Asesoramiento experto en compra, venta y alquiler de propiedades. Gestión completa de transacciones
                inmobiliarias con transparencia y profesionalismo.
              </p>
            </div>

            <div className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Proyectos Especiales
              </h3>
              <p className="text-gray-600">
                Desarrollo y ejecución de proyectos especiales, incluyendo contrataciones con el Estado Peruano
                a través del Registro Nacional de Proveedores.
              </p>
            </div>

            <div className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="text-5xl mb-4">🛠️</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Consultoría Técnica
              </h3>
              <p className="text-gray-600">
                Asesoramiento especializado en proyectos de construcción, evaluación de estructuras y
                planificación técnica para optimizar resultados.
              </p>
            </div>

            <div className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="text-5xl mb-4">🏪</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Venta por Menor
              </h3>
              <p className="text-gray-600">
                Comercialización de materiales y servicios relacionados con la construcción,
                ofreciendo productos de calidad a precios competitivos.
              </p>
            </div>

            <div className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Gestión de Proyectos
              </h3>
              <p className="text-gray-600">
                Administración integral de proyectos desde la concepción hasta la entrega final,
                garantizando cumplimiento de plazos y presupuestos.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-center">¿Por qué elegir Consorcio Neptuno?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">📅</div>
              <h3 className="font-semibold mb-2">+8 Años de Experiencia</h3>
              <p className="text-blue-100 text-sm">
                Operando exitosamente desde 2015
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="font-semibold mb-2">Empresa Habida</h3>
              <p className="text-blue-100 text-sm">
                Estado verificado y domicilio confirmado
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="font-semibold mb-2">Registro Nacional</h3>
              <p className="text-blue-100 text-sm">
                Empadronados para contrataciones estatales
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="font-semibold mb-2">Compromiso Total</h3>
              <p className="text-blue-100 text-sm">
                Satisfacción del cliente como prioridad
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            ¿Listo para construir tu proyecto con nosotros?
          </h2>
          <p className="text-gray-600 mb-6">
            Contáctanos hoy mismo y descubre cómo podemos hacer realidad tu visión constructiva.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              📞 Solicitar Contacto
            </a>
            <a
              href="tel:998994969"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors"
            >
              📱 Llamar Ahora: 998 994 969
            </a>
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
