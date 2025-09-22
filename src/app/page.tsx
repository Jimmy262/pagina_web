import Link from "next/link";

export default function Home() {
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
                <Link href="/" className="nav-link nav-link-active flex items-center space-x-2">
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
                <Link href="/terminos-condiciones" className="nav-link flex items-center space-x-2">
                  <span>📋</span>
                  <span>Términos</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-10">
              <div className="flex justify-center items-center space-x-3 mb-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent-orange text-2xl drop-shadow-lg">★</span>
                  ))}
                </div>
                <span className="text-white font-bold text-2xl hero-text-shadow">4.9</span>
                <div className="h-6 w-px bg-white bg-opacity-50"></div>
                <span className="text-white font-semibold text-lg hero-text-shadow">200+ Clientes Satisfechos</span>
              </div>
            </div>

            <h2 className="text-6xl md:text-7xl font-black mb-8 leading-tight hero-text-shadow">
              Construyendo un Futuro de
              <span className="text-gradient block mt-4 text-7xl md:text-8xl">Excelencia</span>
            </h2>

            <p className="text-2xl text-white font-medium mb-10 max-w-3xl mx-auto hero-text-shadow leading-relaxed">
              Con precisión, innovación y artesanía incomparable, transformamos visiones en realidades
              constructivas que perduran en el tiempo y trascienden expectativas.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contacto" className="btn-primary text-lg">
                🚀 Solicitar Cotización
              </Link>
              <Link href="/quienes-somos" className="btn-secondary text-lg">
                👁️ Ver Nuestro Trabajo
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent-orange bg-opacity-20 rounded-full blur-2xl"></div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestros Logros en Números</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Más de 8 años construyendo confianza y excelencia en cada proyecto
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="modern-card text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">👥</span>
              </div>
              <div className="stat-number">200+</div>
              <div className="stat-label">Clientes Satisfechos</div>
            </div>

            <div className="modern-card text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-orange to-accent-orange-light rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🏆</span>
              </div>
              <div className="stat-number">9</div>
              <div className="stat-label">Años de Experiencia</div>
            </div>

            <div className="modern-card text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🏗️</span>
              </div>
              <div className="stat-number">150+</div>
              <div className="stat-label">Proyectos Completados</div>
            </div>

            <div className="modern-card text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">⚡</span>
              </div>
              <div className="stat-number">24/7</div>
              <div className="stat-label">Soporte Técnico</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-96 flex items-center justify-center shadow-2xl">
                <div className="text-center text-gray-600">
                  <div className="text-8xl mb-6">🏗️</div>
                  <p className="text-2xl font-bold mb-2">Nuestros Proyectos</p>
                  <p className="text-lg">Construcción de Excelencia</p>
                  <p className="text-base text-gray-500 mt-2">Av. José Gálvez Nro. 1344</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-orange bg-opacity-20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500 bg-opacity-20 rounded-full blur-2xl"></div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  Construyendo el Futuro con
                  <span className="text-gradient block mt-2">Excelencia</span>
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-accent-orange to-accent-orange-light rounded-full mb-6"></div>
              </div>

              <p className="text-gray-700 text-xl leading-relaxed">
                En <strong className="text-blue-600">Consorcio Neptuno</strong>, creemos que la gran construcción va más allá de
                ladrillos y cemento — es crear espacios que inspiren, perduren y transformen vidas.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="modern-card text-center bg-white border-2 border-blue-100 hover:border-blue-300">
                  <div className="text-3xl font-bold text-blue-600 mb-2">#2</div>
                  <div className="text-gray-700 font-semibold">En Construcción en Lima</div>
                </div>

                <div className="modern-card text-center bg-white border-2 border-accent-orange border-opacity-30 hover:border-opacity-50">
                  <div className="text-3xl font-bold text-gradient mb-2">4.9</div>
                  <div className="text-gray-700 font-semibold">Calificación Promedio</div>
                </div>
              </div>

              <Link href="/quienes-somos" className="btn-primary inline-block">
                Conoce Más Sobre Nosotros →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Nuestros Servicios</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ofrecemos soluciones integrales de construcción e inmobiliarios con los más altos estándares de calidad y excelencia
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-accent-orange rounded-full mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="modern-card text-center group hover:border-blue-300">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🏗️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Construcción de Edificios Completos
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Especialistas en la construcción integral de edificios residenciales, comerciales e institucionales
                con los más altos estándares de calidad y seguridad.
              </p>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <span className="text-sm font-semibold text-blue-600">CIIU: 45207</span>
              </div>
            </div>

            <div className="modern-card text-center group hover:border-accent-orange">
              <div className="w-20 h-20 bg-gradient-to-br from-accent-orange to-accent-orange-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🏢</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Servicios Inmobiliarios
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Asesoramiento experto en compra, venta y alquiler de propiedades. Gestión completa de transacciones
                inmobiliarias con transparencia y profesionalismo.
              </p>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <span className="text-sm font-semibold text-accent-orange">100% Transparente</span>
              </div>
            </div>

            <div className="modern-card text-center group hover:border-green-400">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">📋</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Proyectos Especiales
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Desarrollo y ejecución de proyectos especiales, incluyendo contrataciones con el Estado Peruano
                a través del Registro Nacional de Proveedores.
              </p>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <span className="text-sm font-semibold text-green-600">RNP Registrada</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 text-lg mb-6">
              ¿Necesitas un servicio específico? Contáctanos para una consulta personalizada.
            </p>
            <Link href="/contacto" className="btn-secondary">
              💬 Consultar Servicio Personalizado
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="hero-gradient text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-black mb-6 hero-text-shadow">¿Listo para Construir tu Proyecto?</h2>
          <p className="text-2xl text-white font-medium mb-10 max-w-3xl mx-auto hero-text-shadow leading-relaxed">
            Contáctanos hoy mismo y descubre cómo podemos hacer realidad tu visión constructiva
            con excelencia y profesionalismo.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contacto" className="btn-primary text-lg px-8 py-3">
              📞 Solicitar Información
            </Link>
            <a href="tel:998994969" className="btn-secondary text-lg px-8 py-3">
              📱 Llamar: 998 994 969
            </a>
          </div>

          <div className="mt-10 pt-6 border-t border-white border-opacity-30">
            <p className="text-white font-semibold mb-3">Información de Contacto</p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-base">
              <span className="flex items-center space-x-2">
                <span>📍</span>
                <span>Av. José Gálvez Nro. 1344 Int. 103</span>
              </span>
              <span className="flex items-center space-x-2">
                <span>✉️</span>
                <span>info@consorcioneptuno.com</span>
              </span>
              <span className="flex items-center space-x-2">
                <span>🏢</span>
                <span>RUC: 20600187121</span>
              </span>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-accent-orange bg-opacity-20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-white bg-opacity-10 rounded-full blur-3xl"></div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Consorcio Neptuno</h3>
              <p className="text-gray-300 mb-6 text-lg">
                Constructora & Inmobiliaria S.a.C.
              </p>
              <div className="space-y-3 text-gray-300">
                <p className="flex items-center space-x-2">
                  <span>🏢</span>
                  <span>RUC: 20600187121</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span>✅</span>
                  <span>Activo desde 2015</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span>🏆</span>
                  <span>Registro Nacional de Proveedores</span>
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Servicios</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#servicios" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                    <span>🏗️</span>
                    <span>Construcción de Edificios</span>
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                    <span>🏢</span>
                    <span>Servicios Inmobiliarios</span>
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                    <span>📋</span>
                    <span>Proyectos Especiales</span>
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                    <span>🛠️</span>
                    <span>Consultoría Técnica</span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Contacto</h4>
              <div className="space-y-4">
                <p className="text-gray-300 flex items-start space-x-3">
                  <span>📍</span>
                  <span>Av. José Gálvez Nro. 1344 Int. 103<br />Santa Beatriz, Lima</span>
                </p>
                <p className="text-gray-300 flex items-center space-x-3">
                  <span>📞</span>
                  <span>998 994 969</span>
                </p>
                <p className="text-gray-300 flex items-center space-x-3">
                  <span>✉️</span>
                  <span>info@consorcioneptuno.com</span>
                </p>
                <p className="text-gray-300 flex items-center space-x-3">
                  <span>🕒</span>
                  <span>Lun-Vie: 8:00-18:00</span>
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Legal</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/politica-privacidad" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                    <span>🔒</span>
                    <span>Política de Privacidad</span>
                  </Link>
                </li>
                <li>
                  <Link href="/terminos-condiciones" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                    <span>📋</span>
                    <span>Términos y Condiciones</span>
                  </Link>
                </li>
                <li>
                  <Link href="/quienes-somos" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                    <span>👥</span>
                    <span>Quiénes Somos</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                    <span>📞</span>
                    <span>Contacto</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-lg mb-2">
              &copy; 2025 Consorcio Neptuno Constructora & Inmobiliaria S.a.C.
            </p>
            <p className="text-gray-500 text-sm">
              Todos los derechos reservados | RUC: 20600187121
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
