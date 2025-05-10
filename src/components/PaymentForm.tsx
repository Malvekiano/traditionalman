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

      <form onSubmit={handleSubmit}>
        <div className="mb-4 sm:mb-6">
          <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Buyer's details</h3>
          <div className="space-y-3 sm:space-y-4">
            <div>
              <Input
                placeholder="Your full name"
                className={`w-full ${errors.fullName ? 'border-red-500' : ''} text-sm`}
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
              />
              {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <Input
                placeholder="Your email address"
                className={`w-full ${errors.email ? 'border-red-500' : ''} text-sm`}
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                type="email"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            {/*
            <div>
              <Input
                placeholder="Confirm your email"
                className={`w-full ${errors.confirmEmail ? 'border-red-500' : ''} text-sm`}
                name="confirmEmail"
                value={formData.confirmEmail}
                onChange={handleInputChange}
                type="email"
              />
              {errors.confirmEmail && <p className="text-red-500 text-xs mt-1">{errors.confirmEmail}</p>}
            </div>
           

            <div>
              <Input
                placeholder="Phone number"
                className={`w-full ${errors.phone ? 'border-red-500' : ''} text-sm`}
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                type="tel"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>
             */}
          </div>
        </div>
      {/*
        <div className="mb-4 sm:mb-6">
          <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Address</h3>
          <div className="space-y-3 sm:space-y-4">
            <div>
              <Input
                placeholder="Address"
                className={`w-full ${errors.address ? 'border-red-500' : ''} text-sm`}
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
              {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
            </div>

            <Input
              placeholder="Address line 2 (optional)"
              className="w-full text-sm"
              name="addressLine2"
              value={formData.addressLine2}
              onChange={handleInputChange}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <Input
                  placeholder="Zip Code"
                  className={`w-full ${errors.zipCode ? 'border-red-500' : ''} text-sm`}
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                />
                {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
              </div>

              <div>
                <Input
                  placeholder="City"
                  className={`w-full ${errors.city ? 'border-red-500' : ''} text-sm`}
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                />
                {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
              </div>
            </div>

            <div>
              <Input
                placeholder="State"
                className={`w-full ${errors.state ? 'border-red-500' : ''} text-sm`}
                name="state"
                value={formData.state}
                onChange={handleInputChange}
              />
              {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
            </div>
          </div>
        </div>
        */}

        <div className="mb-4 sm:mb-8">
          <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Do you have a coupon?</h3>
          <div className="flex items-center space-x-2">
            <Input
              placeholder="Enter coupon code"
              className="w-full text-sm"
              name="coupon"
              value={formData.coupon}
              onChange={handleInputChange}
            />
            <Button variant="outline" className="whitespace-nowrap text-xs sm:text-sm h-9 sm:h-10" type="button">Apply</Button>
          </div>
        </div>

        <div className="mb-4 sm:mb-6">
          <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Payment methods</h3>
          <div className="grid grid-cols-1 gap-4">
            <Card className="p-3 sm:p-4 border-2 border-blue-500">
              <div className="flex items-center">
                <div className="checkbox-wrapper">
                  <Checkbox id="card" className="mr-2" checked />
                </div>
                <label htmlFor="card" className="text-sm sm:text-base">Credit/Debit Card</label>
              </div>
              <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-gray-100 rounded">
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <Input
                      placeholder="Card number"
                      className={`w-full ${errors.cardNumber ? 'border-red-500' : ''} text-sm`}
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      type="text"
                      inputMode="numeric"
                      maxLength={19}
                    />
                    {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
                  </div>

                  <div>
                    <Input
                      placeholder="Account holder name"
                      className={`w-full ${errors.cardHolder ? 'border-red-500' : ''} text-sm`}
                      name="cardHolder"
                      value={formData.cardHolder}
                      onChange={handleInputChange}
                    />
                    {errors.cardHolder && <p className="text-red-500 text-xs mt-1">{errors.cardHolder}</p>}
                  </div>

                  <div className="grid grid-cols-3 gap-2 sm:gap-4">
                    <div>
                      <Input
                        placeholder="Month"
                        className={`w-full ${errors.cardMonth ? 'border-red-500' : ''} text-sm`}
                        name="cardMonth"
                        value={formData.cardMonth}
                        onChange={handleInputChange}
                        maxLength={2}
                        inputMode="numeric"
                      />
                      {errors.cardMonth && <p className="text-red-500 text-xs mt-1">{errors.cardMonth}</p>}
                    </div>

                    <div>
                      <Input
                        placeholder="Year"
                        className={`w-full ${errors.cardYear ? 'border-red-500' : ''} text-sm`}
                        name="cardYear"
                        value={formData.cardYear}
                        onChange={handleInputChange}
                        maxLength={2}
                        inputMode="numeric"
                      />
                      {errors.cardYear && <p className="text-red-500 text-xs mt-1">{errors.cardYear}</p>}
                    </div>

                    <div>
                      <Input
                        placeholder="CVV"
                        className={`w-full ${errors.cardCvv ? 'border-red-500' : ''} text-sm`}
                        name="cardCvv"
                        value={formData.cardCvv}
                        onChange={handleInputChange}
                        maxLength={4}
                        inputMode="numeric"
                        type="password"
                      />
                      {errors.cardCvv && <p className="text-red-500 text-xs mt-1">{errors.cardCvv}</p>}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="mb-4 sm:mb-8">
          <div className="flex justify-between items-center p-3 sm:p-4 bg-gray-100 rounded mb-3 sm:mb-4 text-sm">
            <span>PROMO 2X1 - Ragnarok y Hombre Alfa</span>
            <span>$199.00</span>
          </div>
          <div className="flex justify-between items-center font-bold">
            <span>Total of</span>
            <span>$199.00</span>
          </div>
        </div>

        <Button
          className={`buy-button w-full mb-4 sm:mb-6 h-12 text-base transition-all ${
            isSubmitting ? 'btn-loading opacity-90' : 'active:scale-[0.98]'
          }`}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Procesando..." : "Buy Now"}
        </Button>

        <p className="text-xs text-gray-500 mb-3 sm:mb-4">
          By clicking 'Buy Now' I declare that I (i) understand that Hotmart is processing this order on behalf of Hombres Peligrosos and has 
          no responsibility for the content and/or control over it; (ii) agree to Hotmarts Terms of Use, Privacy Policy and other company policies and (iii) am of legal age or authorized and accompanied by a legal guardian.
        </p>
      </form>
    </div>
  );
}
