"use client";

import { useRef } from "react";
import Image from "next/image";
import CountdownTimer from "@/components/CountdownTimer";
import PaymentForm from "@/components/PaymentForm";
import StickyHeader from "@/components/StickyHeader";
import FloatingBuyButton from "@/components/FloatingBuyButton";
import BookCarousel from "@/components/BookCarousel";
import { SectionTransition } from "@/components/PageTransition";
import TermsBanner from "@/components/Termsbanner";

export default function Home() {
  const paymentFormRef = useRef<HTMLDivElement>(null);

  const scrollToPaymentForm = () => {
    if (paymentFormRef.current) {
      paymentFormRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const books = [
    {
      id: 1,
      title: "RAGNAROK",
      subtitle: "El camino de la libertad",
      imageUrl: "/images/ragnarok-book.png"
    },
    {
      id: 2,
      title: "LEGADO",
      subtitle: "Lecciones y secretos para generar respeto y poder hombre",
      imageUrl: "/images/hombre-alfa-book.png"
    }
  ];

  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Sticky Header */}
      <StickyHeader onBuyClick={scrollToPaymentForm} />

      {/* Floating Buy Button */}
      <FloatingBuyButton onBuyClick={scrollToPaymentForm} price="$199.00" />

      {/* Countdown Timer */}
      <div className="promo-timer w-full flex items-center justify-center space-x-2 sm:space-x-2 py-2">
        <CountdownTimer />
        <span className="text-xs sm:text-sm text-center">PROMO 2x1 con BONOS EXTRA por tiempo limitado...</span>
      </div>

      {/* Hero Banner */}
      <div className="w-full flex justify-center bg-black py-2 sm:py-4">
        <Image
          src="/images/promo-banner.png"
          alt="PROMO 2X1"
          width={800}
          height={200}
          className="max-w-full h-auto px-2 sm:px-0"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6">
        <SectionTransition>
          <h1 className="text-center text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">PROMO 2X1</h1>
          <div className="flex justify-center">
              <Image
                src="/images/promo1.png"
                alt="Bonus Content"
                width={836}
                height={455}
                className="max-w-full h-auto"
              />
            </div>
        </SectionTransition>

        {/* Book Images Section - Now using Carousel */}
        <SectionTransition>
          <BookCarousel books={books} />
        </SectionTransition>

        {/* Price Section */}
        <SectionTransition>
          <div className="flex flex-col items-center mb-6 sm:mb-10">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <span className="price-strike text-xl sm:text-2xl">$220.00</span>
              <span className="text-red-500">&gt;</span>
              <span className="price-new">$199.00</span>
            </div>
            <div className="mt-2">
              <span className="discount-tag text-xs sm:text-sm">¡HAS ACCEDIDO A UN DESCUENTO!</span>
            </div>
          </div>
        </SectionTransition>

        {/* Features Section */}
        <SectionTransition>
          <div className="features-section mb-6 sm:mb-10">
            <h2 className="text-center text-lg sm:text-xl font-bold mb-4 sm:mb-6">DESARROLLA TUS CUALIDADES COMO HOMBRE Y TUS HABILIDADES SOCIALES SEDUCTORAS</h2>
            <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
              Si quieres mejorar en todo aspecto... debes aprender primero a desarrollarte en toda área de tu vida como hombre: tu mentalidad, tu filosofía, tu físico, tu dinero y más.
            </p>
            <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
              Y no olvides desarrollar tus habilidades sociales que te ayudarán a moverte en la sociedad de forma eficaz ya sea en tu trabajo o con las mujeres.
            </p>
            <p className="text-gray-300 text-sm sm:text-base">
              Estoy seguro... más que nunca que todo hombre debe leer estos libros.
            </p>
          </div>
        </SectionTransition>

        {/* Book Topics Section */}
        <SectionTransition>
          <div className="mb-6 sm:mb-10">
            <h2 className="text-center text-lg sm:text-xl font-bold mb-4 sm:mb-6">LOS TEMAS DE LOS LIBROS:</h2>
            <div className="bg-zinc-900 p-3 sm:p-4 rounded-md book-content">
              <h3 className="text-center font-bold mb-3 sm:mb-4 text-base sm:text-lg">CONTENIDO RAGNAROK</h3>
              <ul className="space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
              
                <li className="flex justify-between border-b border-gray-700 pb-1">
                  <span>Desarrollo Físico</span>
                </li>
                <li className="flex justify-between border-b border-gray-700 pb-1">
                  <span>Desarrollo Mental</span>
                </li>
                <li className="flex justify-between border-b border-gray-700 pb-1">
                  <span>Desarrollo Financiero</span>
                </li>
                <li className="flex justify-between border-b border-gray-700 pb-1">
                  <span>Habilidades Sociales</span>
                </li>
              </ul>
            </div>
            <div className="bg-zinc-900 p-3 sm:p-4 rounded-md mt-4 sm:mt-6 book-content">
              <h3 className="text-center font-bold mb-3 sm:mb-4 text-base sm:text-lg">Contenido Legado</h3>
              <ul className="space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
                <li className="flex justify-between border-b border-gray-700 pb-1">
                  <span>Lideres de la Historia</span>
                </li>
                <li className="flex justify-between border-b border-gray-700 pb-1">
                  <span>Legado del Rey Salomón</span>
                </li>
                <li className="flex justify-between border-b border-gray-700 pb-1">
                  <span>Legado de Lao Tse</span>
                </li>
                <li className="flex justify-between border-b border-gray-700 pb-1">
                  <span>Legado de Sun Tzu</span>
                </li>
                <li className="flex justify-between border-b border-gray-700 pb-1">
                  <span>Legado del rey Leonidas</span>
                </li>
                <li className="flex justify-between border-b border-gray-700 pb-1">
                  <span>Legado de Confucio</span>
                </li>
                <li className="flex justify-between border-b border-gray-700 pb-1">
                  <span>Legado de Sócrates</span>
                </li>
                <li className="flex justify-between border-b border-gray-700 pb-1">
                  <span>Legado de Platón y Aristóteles</span>
                </li>
                <li className="flex justify-between border-b border-gray-700 pb-1">
                  <span>Legado de Alejandro Magno</span>
                </li>
                <li className="flex justify-between border-b border-gray-700 pb-1">
                  <span>Legado de Julio César</span>
                </li>
                <li className="flex justify-between border-b border-gray-700 pb-1">
                  <span>Legado de Jesús de Nazaret</span>
                </li>
                <li className="flex justify-between border-b border-gray-700 pb-1">
                  <span>Legado de Séneca</span>
                </li>
                <li className="flex justify-between border-b border-gray-700 pb-1">
                  <span>Legado de Epitecto</span>
                </li>
                <li className="flex justify-between border-b border-gray-700 pb-1">
                  <span>Legado de Marco Aurelio</span>
                </li>
              </ul>
            </div>
          </div>
        </SectionTransition>

        {/* Access Information */}
        <SectionTransition>
          <div className="bg-zinc-900 p-3 sm:p-4 rounded-md mb-6 sm:mb-10">
            <p className="text-xs sm:text-sm text-yellow-400 text-center mb-3 sm:mb-4">
              Acceso totalmente <strong>GRATIS</strong> a los grupos privados de WhatsApp, Facebook y Telegram si adquieres la promo hoy mismo.
            </p>
            <p className="text-xs sm:text-sm text-gray-300 text-center mb-2">
              Esta oferta está sólo disponible en esta página.
            </p>
            <p className="text-xs sm:text-sm text-gray-300 text-center">
              El pago es 100% garantizado y una vez hecho el pago tendrás acceso inmediatamente y contacto directo con el autor.
            </p>
            <p className="text-center font-bold text-yellow-400 mt-3 sm:mt-4 text-sm sm:text-base">
              PROMOCIÓN POR TIEMPO LIMITADO!
            </p>
          </div>
        </SectionTransition>

        {/* Payment Form */}
        <div id="payment-form" ref={paymentFormRef}>
          <PaymentForm />
        </div>

        {/* Guarantee Section */}
        <SectionTransition>
          <div className="text-center mb-6 sm:mb-10">
            <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">100% Sin riesgo GARANTIZADO!</h2>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              Una vez que hagas tu pago, te enviaremos el acceso al grupo privado de whatsapp para cualquier problema o duda que tengas con la promo.
            </p>
            <div className="bg-yellow-500 text-black font-bold py-2 sm:py-3 px-4 sm:px-6 rounded mb-6 sm:mb-8 mx-auto max-w-2xl text-sm sm:text-base">
              Solo por <strong>HOY</strong> llevate la promo con estos BONOS EXTRA!*
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="flex items-center p-3 sm:p-4 bg-zinc-900 rounded-lg">
                <Image
                  src="/images/privacidad.png"
                  alt="Privacy"
                  width={20}
                  height={20}
                  className="mr-2 sm:mr-3 w-5 h-5"
                />
                <div className="text-left">
                  <h3 className="font-bold text-sm sm:text-base">Privacy</h3>
                  <p className="text-xs sm:text-sm text-gray-400">Your information is 100% secure</p>
                </div>
              </div>
              <div className="flex items-center p-3 sm:p-4 bg-zinc-900 rounded-lg">
                <Image
                  src="/images/verificado.png"
                  alt="Safe purchase"
                  width={20}
                  height={20}
                  className="mr-2 sm:mr-3 w-5 h-5"
                />
                <div className="text-left">
                  <h3 className="font-bold text-sm sm:text-base">Safe purchase</h3>
                  <p className="text-xs sm:text-sm text-gray-400">Secure and authenticated environment</p>
                </div>
              </div>
              <div className="flex items-center p-3 sm:p-4 bg-zinc-900 rounded-lg">
                <Image
                  src="/images/email.png"
                  alt="Delivery via E-mail"
                  width={20}
                  height={20}
                  className="mr-2 sm:mr-3 w-5 h-5"
                />
                <div className="text-left">
                  <h3 className="font-bold text-sm sm:text-base">Delivery via E-mail</h3>
                  <p className="text-xs sm:text-sm text-gray-400">Access to product delivered by email</p>
                </div>
              </div>
            </div>
          </div>
        </SectionTransition>

        {/* Testimonials Section */}
        <SectionTransition>
          <div className="mb-6 sm:mb-10">
            <h2 className="text-center text-lg sm:text-xl font-bold mb-4 sm:mb-6">RESEÑAS SOBRE LOS LIBROS</h2>
            <div className="flex justify-center flex-col items-center space-y-4">
              <Image
                src="/images/testimonio1.png"
                alt="Testimonials"
                width={703}
                height={243}
                className="max-w-full h-auto"
              />
              <Image
                src="/images/testimonio2.png"
                alt="Testimonials"
                width={703}
                height={243}
                className="max-w-full h-auto"
              />
              <Image
                src="/images/testimonio3.png"
                alt="Testimonials"
                width={703}
                height={243}
                className="max-w-full h-auto"
              />
            </div>
            
          </div>
        </SectionTransition>

        {/* Why Trust Section */}
        <SectionTransition>
          <div className="mb-6 sm:mb-10">
            <h2 className="text-center text-lg sm:text-xl font-bold mb-4 sm:mb-6">¿Por qué Confiar en este Libro?</h2>
            <div className="bg-zinc-900 p-3 sm:p-4 rounded-md">
              <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                Nosotros somos una marca de desarrollo personal masculino.
              </p>
              <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                Encuéntranos como @HombresPeligrosos en Instagram con temas de masculinidad, seducción y habilidades sociales. En toda Latinoamérica somos una de las mejores comunidades. A través de este libro contamos los resultados de historias y experiencias personales, experimentos sociales y vivencias de varios hombres con los que hemos hablado. Cada una de ellas, cargadas de enseñanzas y lecciones realmente útiles en el día a día.
              </p>
              <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                Además si obtienes los libros, <strong className="text-yellow-400">te vamos a brindar un acceso exclusivo a un Grupo Privado de WhatsApp</strong> donde te podremos ayudar y acompañar en tu camino a la mejora personal, así podrás forjar tus virtudes y tu propia filosofía de vida de la mejor manera... tambien podemos activarte una carpeta privada con <strong className="text-yellow-400">BONOS EXTRA</strong> para complementar tu lectura, sin olvidar que en el grupo privado también se comparten libros extras para apoyarte.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                No esperes más, logra el cambio en tu vida y nos vemos dentro del grupo.
              </p>
            </div>
          </div>
        </SectionTransition>

        {/* Bonus Content */}
        <SectionTransition>
          <div className="mb-6 sm:mb-10">
            <div className="bg-yellow-500 text-black font-bold py-2 sm:py-3 px-4 sm:px-6 rounded mb-4 sm:mb-6 mx-auto max-w-2xl text-center text-sm sm:text-base">
              Solo por <strong>HOY</strong> llevate la promo con estos BONOS EXTRA!*
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/bonus-content.svg"
                alt="Bonus Content"
                width={836}
                height={455}
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </SectionTransition>

        {/* WhatsApp Contact */}
        <SectionTransition>
          <div className="flex justify-center mb-6 sm:mb-10">
            <div className="bg-white text-black p-3 sm:p-4 rounded-lg max-w-xl flex items-center">
              <span className="mr-2 text-lg">🟢</span>
              <p className="text-xs sm:text-sm">
                Si quieres pagar en efectivo en tiendas Oxxo o en Efecty solo da clic en el logo de abajo para escribirnos un WhatsApp
              </p>
            </div>
          </div>
        </SectionTransition>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-xs sm:text-sm pb-6 sm:pb-8">
          
          <p>Linio - Hombres Tradicionales © 2025 - Todos los derechos reservados</p>
          <p></p>
        </footer>
      </div>
      <TermsBanner />
    </main>
  );
}
