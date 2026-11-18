import React, { useEffect } from 'react';
import { Gift, Phone, Mail, CalendarDays } from 'lucide-react';

const CHECKOUT_URL = 'https://checkout.vaocher.app/?id=a32537ac-fee5-4f82-9f59-baacaaebd004';
const EMBED_URL = 'https://vaocher.app/resources/embed/embed.js?3.65.1';

const GiftVouchers: React.FC = () => {
  useEffect(() => {
    const oldTitle = document.title;
    const meta = document.querySelector('meta[name="description"]');
    const oldDescription = meta?.getAttribute('content');
    document.title = 'Physiotherapy Gift Vouchers in Birmingham | Chris Tiley Physiotherapy';
    meta?.setAttribute('content', 'Give the gift of moving better and feeling stronger. Buy physiotherapy and strength class gift vouchers for Chris Tiley Physiotherapy in Harborne, Birmingham.');

    // The vendor script is loaded on mount: React does not execute scripts inserted as JSX.
    // Keep a single script instance to avoid duplicate checkout initialisation.
    let script = document.querySelector<HTMLScriptElement>('script[data-vaocher-embed="true"]');
    if (!script) {
      script = document.createElement('script');
      script.src = EMBED_URL;
      script.async = true;
      script.defer = true;
      script.dataset.vaocherEmbed = 'true';
      document.head.appendChild(script);
    }
    return () => {
      document.title = oldTitle;
      if (oldDescription !== null && oldDescription !== undefined) meta?.setAttribute('content', oldDescription);
      // Remove script so the vendor can initialise again on subsequent client-side visits.
      script?.remove();
    };
  }, []);

  return (
    <div className="bg-white">
      <section className="relative bg-navy-800 overflow-hidden rounded-b-[48px]">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-navy-700" />
        <div className="relative container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sky-300 text-sm font-semibold mb-4"><Gift size={20} /> A thoughtful gift</div>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5">Give the gift of moving better and feeling stronger</h1>
            <p className="text-gray-200 text-base md:text-lg leading-relaxed">Treat someone to physiotherapy or help them take the next step towards getting stronger. Choose a specific gift voucher or an amount that suits you.</p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mb-3">Choose a gift voucher</h2>
          <p className="text-gray-600 mb-7 max-w-3xl">Choose from a £25 contribution, a £60 follow-up appointment, an £80 initial assessment, or your own gift amount. All vouchers have a monetary value and can be used towards eligible clinic services.</p>
          <div className="rounded-2xl border border-gray-200 shadow-sm p-3 sm:p-6 bg-white">
            <div className="vaocher-form-container" data-site-id="a32537ac-fee5-4f82-9f59-baacaaebd004" data-platform="other" data-embed-mode="full" />
            <noscript><p className="text-gray-700">JavaScript is needed for the embedded checkout. <a className="text-sky-700 underline" href={CHECKOUT_URL}>Purchase a gift voucher here</a>.</p></noscript>
          </div>
          <p className="text-sm text-gray-500 mt-4">If the checkout does not appear, <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="text-sky-700 underline">open our secure gift voucher checkout</a>.</p>
        </div>
      </section>

      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mb-8">How it works</h2>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-white rounded-xl border border-gray-100 p-6"><Gift className="text-sky-600 mb-3" size={28}/><h3 className="font-bold text-navy-700 mb-2">1. Choose your gift</h3><p className="text-gray-600 text-sm leading-relaxed">Select a voucher and add a personal message. The recipient receives a downloadable gift voucher.</p></div>
            <div className="bg-white rounded-xl border border-gray-100 p-6"><Phone className="text-sky-600 mb-3" size={28}/><h3 className="font-bold text-navy-700 mb-2">2. Get in touch</h3><p className="text-gray-600 text-sm leading-relaxed">The recipient contacts the clinic with their voucher code so we can arrange an appropriate appointment or discuss classes.</p></div>
            <div className="bg-white rounded-xl border border-gray-100 p-6"><CalendarDays className="text-sky-600 mb-3" size={28}/><h3 className="font-bold text-navy-700 mb-2">3. Use your voucher</h3><p className="text-gray-600 text-sm leading-relaxed">We'll apply the voucher towards the cost. Any remaining credit can be used again before the expiry date.</p></div>
          </div>
          <p className="text-gray-600 mt-8 leading-relaxed">Vouchers are valid for 12 months from purchase. Appointments and class places are subject to availability; a free Discovery Visit is required before joining strength classes. Please contact us before booking online, as our online booking system normally takes payment in advance.</p>
          <div className="flex flex-wrap gap-5 mt-6">
            <a href="tel:01215170806" className="inline-flex items-center gap-2 text-navy-700 font-semibold hover:text-sky-600"><Phone size={18}/>0121 517 0806</a>
            <a href="mailto:info@christileyphysiotherapy.com" className="inline-flex items-center gap-2 text-navy-700 font-semibold hover:text-sky-600"><Mail size={18}/>info@christileyphysiotherapy.com</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GiftVouchers;
