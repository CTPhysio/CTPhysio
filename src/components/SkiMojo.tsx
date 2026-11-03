import React, { useState } from 'react';
import { Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import Seo from './Seo';

const SkiMojo: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', weight: '', boots: 'yes', holiday: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const update = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(previous => ({ ...previous, [event.target.name]: event.target.value }));
  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus('sending');
    const data = new URLSearchParams({ 'form-name': 'ski-mojo-enquiry', ...form });
    try {
      const response = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: data.toString() });
      if (!response.ok) throw new Error('Submission failed');
      setStatus('success');
      setForm({ name: '', email: '', phone: '', weight: '', boots: 'yes', holiday: '', message: '' });
    } catch {
      setStatus('error');
    }
  };
  const field = 'w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500';
  return (
    <div className="bg-gray-50">
      <Seo title="Ski Mojo Fitting in Birmingham | Chris Tiley Physiotherapy" description="Ski Mojo fitting in Harborne, Birmingham with physiotherapist Chris Tiley. Personalised setup with your ski boots. £594 including fitting, or £50 without purchase." canonicalPath="/ski-mojo" />
      <section className="bg-navy-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3"><p className="text-sky-300 font-semibold mb-3">Ski Mojo retailer and fitting service in Harborne, Birmingham</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Ski Mojo fitting in Birmingham</h1>
          <p className="text-xl max-w-3xl leading-relaxed mb-7">Get your Ski Mojo fitted and adjusted before your skiing holiday. We'll set it up with your own ski boots, show you how to use it and help you head for the slopes with confidence in your setup.</p>
          <a href="#enquiry" className="inline-block rounded-md bg-sky-500 hover:bg-sky-600 px-7 py-4 font-semibold">Enquire about a fitting</a>
          <p className="text-sm text-gray-300 mt-4">No obligation to purchase. Fittings are arranged after an initial phone conversation.</p></div>
          <div className="md:col-span-2"><img src="/assets/images/ski-mojo-brace.webp" alt="Ski Mojo wearable leg support worn over ski clothing" className="w-full rounded-xl bg-white object-contain" fetchPriority="high" /></div>
        </div>
      </section>
      <section className="container mx-auto px-4 max-w-5xl py-14">
        <img src="/assets/images/ski-mojo-logo.webp" alt="Ski Mojo logo" className="w-40 h-auto object-contain mb-6" loading="lazy" />
        <h2 className="text-3xl font-bold text-navy-700 mb-5">What is a Ski Mojo?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">The Ski Mojo is a wearable support system designed to reduce some of the load on your legs while skiing. People often enquire about it because of knee discomfort, tired legs or a desire to keep enjoying longer days on the mountain.</p>
        <p className="text-gray-700 leading-relaxed">It's not the right solution for everyone. For example, if your main concern is an unstable ACL-deficient knee, a brace designed specifically for stability may be more appropriate. We can discuss whether a fitting sounds suitable before arranging an appointment.</p>
      </section>
      <section className="bg-white py-14">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8 items-center mb-8"><div className="md:col-span-2"><h2 className="text-3xl font-bold text-navy-700 mb-4">What happens at your fitting?</h2><p className="text-gray-700">Your Ski Mojo is ordered for you ahead of the appointment, then fitted and adjusted at the clinic.</p></div><img src="/assets/images/ski-mojo-fitting-box.webp" alt="Ski Mojo product box photographed at the clinic" className="w-full rounded-lg object-cover max-h-64" loading="lazy" /></div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-lg border p-6"><h3 className="font-bold text-xl text-navy-700 mb-3">1. A conversation first</h3><p>Chris will call to discuss your skiing needs and whether the Ski Mojo is likely to be the right option for you. He'll also confirm your weight to select the appropriate model and check that you have your own ski boots. Once everything is agreed, we'll arrange your fitting and order your Ski Mojo.</p></div>
            <div className="rounded-lg border p-6"><h3 className="font-bold text-xl text-navy-700 mb-3">2. Personalised setup</h3><p>Chris will fit and adjust the Ski Mojo to suit you, showing you how to put it on, take it off and make adjustments. You'll be able to wear it with your own ski boots, walk around and try some movements in the clinic to get a feel for the support it provides.</p></div>
            <div className="rounded-lg border p-6"><h3 className="font-bold text-xl text-navy-700 mb-3">3. Decide without pressure</h3><p>You'll have the opportunity to see how it feels before deciding whether to buy. If you purchase, you can take your fitted Ski Mojo home that day.</p></div>
          </div>
          <p className="text-gray-600 mt-6">We allow up to an hour for your appointment, although most fittings take around 30–40 minutes. Please also bring your ski trousers if you'd like to check how the Ski Mojo fits underneath them.</p>
        </div>
      </section>
      <section className="container mx-auto px-4 max-w-5xl py-14">
        <h2 className="text-3xl font-bold text-navy-700 mb-5">Fitting and purchase costs</h2>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-white rounded-lg p-7 border"><h3 className="font-bold text-navy-700 text-xl">Ski Mojo with fitting</h3><p className="text-4xl font-bold text-navy-700 my-3">£594</p><p>Same retail price as buying online, with your personalised fitting included.</p></div>
          <div className="bg-white rounded-lg p-7 border"><h3 className="font-bold text-navy-700 text-xl">Fitting without purchase</h3><p className="text-4xl font-bold text-navy-700 my-3">£50</p><p>If you decide not to purchase, this fee covers the time spent fitting and adjusting the Ski Mojo.</p></div>
        </div>
        <p className="mt-4 text-gray-600">Payment for a purchased Ski Mojo is by card at the clinic. Ski Mojo handles product warranty, repairs and returns.</p>
      </section>
      <section className="bg-white py-14">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-navy-700 mb-5">Why arrange your fitting with Chris?</h2>
          <p className="mb-4 leading-relaxed">Chris is a chartered physiotherapist with experience working in skiing, including with GB Para Snowsport. He has been fitting Ski Mojos for several years and has been a recommended retailer since 2019.</p>
          <p className="mb-4 leading-relaxed">The fitting is a product fitting rather than a full physiotherapy assessment. Chris will ask about your needs and help you understand how to use and adjust the Ski Mojo before your trip.</p>
          <p className="leading-relaxed">A Ski Mojo may be one part of the solution, but building and maintaining leg strength also matters if you want to keep skiing for years to come. We can discuss strengthening options where appropriate. For a starting point, <a href="/advice/ski-fitness-exercises/" className="text-sky-700 underline">read our guide to building strength for skiing</a>.</p>
        </div>
      </section>
      <section id="enquiry" className="container mx-auto px-4 max-w-5xl py-14">
        <h2 className="text-3xl font-bold text-navy-700 mb-3">Enquire about a Ski Mojo fitting</h2>
        <p className="text-gray-700 mb-7">Send your details and Chris will contact you to discuss whether a fitting is suitable and arrange a date once the correct Ski Mojo can be ordered. This form does not book an appointment.</p>
        <div className="grid lg:grid-cols-5 gap-10">
          <form name="ski-mojo-enquiry" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={submit} className="lg:col-span-3 bg-white p-6 md:p-8 rounded-lg shadow space-y-5">
            <input type="hidden" name="form-name" value="ski-mojo-enquiry" />
            <p className="hidden"><label>Leave blank: <input name="bot-field" /></label></p>
            <div><label htmlFor="ski-name" className="block font-medium mb-1">Full name *</label><input id="ski-name" name="name" value={form.name} onChange={update} required className={field} /></div>
            <div><label htmlFor="ski-email" className="block font-medium mb-1">Email *</label><input id="ski-email" type="email" name="email" value={form.email} onChange={update} required className={field} /></div>
            <div><label htmlFor="ski-phone" className="block font-medium mb-1">Phone *</label><input id="ski-phone" type="tel" name="phone" value={form.phone} onChange={update} required className={field} /></div>
            <div><label htmlFor="ski-weight" className="block font-medium mb-1">Weight in kg (for selecting the Ski Mojo model) *</label><input id="ski-weight" type="number" min="30" max="250" step="0.1" name="weight" value={form.weight} onChange={update} required className={field} /></div>
            <div><label htmlFor="ski-boots" className="block font-medium mb-1">Do you have your own ski boots? *</label><select id="ski-boots" name="boots" value={form.boots} onChange={update} required className={field}><option value="yes">Yes</option><option value="no">No</option></select></div>
            <div><label htmlFor="ski-holiday" className="block font-medium mb-1">When is your next skiing holiday? (optional)</label><input id="ski-holiday" name="holiday" value={form.holiday} onChange={update} placeholder="e.g. February 2027" className={field} /></div>
            <div><label htmlFor="ski-message" className="block font-medium mb-1">Any questions? (optional)</label><textarea id="ski-message" name="message" value={form.message} onChange={update} rows={3} className={field} /></div>
            <button type="submit" disabled={status === 'sending'} className="w-full rounded-md bg-navy-700 hover:bg-navy-800 text-white font-semibold py-3 disabled:opacity-60">{status === 'sending' ? 'Sending…' : 'Send Ski Mojo enquiry'}</button>
            {status === 'success' && <p role="status" className="text-green-700 flex gap-2 items-center"><CheckCircle size={20}/>Thanks, your enquiry has been submitted. We'll be in touch.</p>}
            {status === 'error' && <p role="alert" className="text-red-700 flex gap-2 items-center"><AlertCircle size={20}/>Sorry, the form couldn't be sent. Please call us on 0121 517 0806.</p>}
          </form>
          <aside className="lg:col-span-2 space-y-5">
            <div className="bg-white p-6 rounded-lg border"><h3 className="font-bold text-xl text-navy-700 mb-3">What to bring</h3><p>Your own ski boots are essential. You can also bring ski trousers to check the fit underneath.</p></div>
            <div className="bg-white p-6 rounded-lg border"><h3 className="font-bold text-xl text-navy-700 mb-3">Where to find us</h3><p className="flex gap-2"><MapPin className="text-sky-500 shrink-0"/>24 Earls Ct Rd, Harborne, Birmingham B17 9AH</p><p className="mt-3">Parking is available beside the clinic and on Earls Court Road.</p></div>
            <div className="bg-white p-6 rounded-lg border"><h3 className="font-bold text-xl text-navy-700 mb-3">Prefer to call?</h3><a href="tel:01215170806" className="text-navy-700 font-semibold flex items-center gap-2"><Phone size={20}/>0121 517 0806</a></div>
          </aside>
        </div>
      </section>
    </div>
  );
};
export default SkiMojo;
