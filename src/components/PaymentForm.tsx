"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export default function PaymentForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    confirmEmail: "",
    phone: "",
    address: "",
    addressLine2: "",
    zipCode: "",
    city: "",
    state: "",
    coupon: "",
    cardNumber: "",
    cardHolder: "",
    cardMonth: "",
    cardYear: "",
    cardCvv: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName) newErrors.fullName = "El nombre es requerido";
    if (!formData.email) newErrors.email = "El email es requerido";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email inválido";

    if (formData.email !== formData.confirmEmail)
      newErrors.confirmEmail = "Los emails no coinciden";

    if (!formData.phone) newErrors.phone = "El teléfono es requerido";
    if (!formData.address) newErrors.address = "La dirección es requerida";
    if (!formData.zipCode) newErrors.zipCode = "El código postal es requerido";
    if (!formData.city) newErrors.city = "La ciudad es requerida";
    if (!formData.state) newErrors.state = "El estado es requerido";

    if (!formData.cardNumber) newErrors.cardNumber = "El número de tarjeta es requerido";
    else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, "")))
      newErrors.cardNumber = "Número de tarjeta inválido";

    if (!formData.cardHolder) newErrors.cardHolder = "El nombre del titular es requerido";
    if (!formData.cardMonth) newErrors.cardMonth = "El mes es requerido";
    if (!formData.cardYear) newErrors.cardYear = "El año es requerido";
    if (!formData.cardCvv) newErrors.cardCvv = "El CVV es requerido";
    else if (!/^\d{3,4}$/.test(formData.cardCvv)) newErrors.cardCvv = "CVV inválido";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API call with timeout
      setTimeout(() => {
        setIsSubmitting(false);
        setFormSubmitted(true);
        // Scroll to top after form submission for better UX
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 1500);
    }
  };

  if (formSubmitted) {
    return (
      <div className="bg-white rounded-lg p-4 sm:p-6 text-black mb-6 sm:mb-10 text-center animate-fadeIn">
        <div className="mx-auto w-16 h-16 mb-4 bg-green-100 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="font-bold text-xl mb-4">¡Gracias por tu compra!</h2>
        <p className="mb-4 text-sm sm:text-base">Hemos recibido tu pago correctamente.</p>
        <p className="mb-4 text-sm sm:text-base">Recibirás un email con los detalles de acceso a tus productos.</p>
        <p className="text-green-600 font-bold text-sm sm:text-base">¡Disfruta de tu compra!</p>
      </div>
    );
  }

  return (
    <div id="payment-form" className="bg-white rounded-lg p-4 sm:p-6 text-black mb-6 sm:mb-5">
      <h2 className="font-bold text-xl mb-3 sm:mb-4">PROMO 2X1 - Ragnarok y Hombre Alfa</h2>
      <p className="text-xs sm:text-sm mb-3 sm:mb-4">Author: Hombres Peligrosos</p>
      <p className="font-bold text-green-700 mb-4 sm:mb-6">$199.00</p>
      <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">Esta promoción estará activa solo por estos días, no la dejes pasar.</p>


      <Button
          className={`buy-button w-full mb-4 sm:mb-6 h-12 text-base transition-all ${
            isSubmitting ? 'btn-loading opacity-90' : 'active:scale-[0.98]'
          }`}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Procesando..." : "Buy Now"}
        </Button>
    </div>
  );
}
