"use client";

import PepeHero from '@/components/sections/layouts/hero/PepeHero';
import SimpleKPIBento from '@/components/bento/SimpleKPIBento';
import SideAccordion from '@/components/accordions/SideAccordion';
import ContentTextbox from '@/components/textbox/ContentTextbox';
import { GradientText } from '@/components/text/GradientText';
import { SlideButton } from '@/components/buttons/SlideButton';

export default function Home() {
  return (
    <>
      <section id="hero" className="bg-gradient-to-b from-blue-500 to-blue-300 p-8">
        <PepeHero style={{ section: { className: 'flex flex-col items-center', backgroundColor: '#e7f0ff', }, heading: { text: 'Welcome to NimbusFlow', className: 'text-white' }, ctaStyle: { containerClassName: 'mt-4', addressText: 'Learn more!', buttonText: 'Get Started', buttonClassName: 'bg-white text-black p-2 rounded' } }} onMenuClick={() => {}} onContactClick={() => {}}/>
      </section>

      <section id="features" className="bg-white p-8">
        <SimpleKPIBento items={[
          { value: 'Fast Performance', description: 'Experience lightning-fast loading.', icon: '' },
          { value: 'Secure Transactions', description: 'Your data is safe with us.', icon: '' },
          { value: '24/7 Support', description: 'We are here to help you.', icon: '' },
        ]} className="grid gap-6" gridClassName="grid-cols-1 md:grid-cols-3" itemClassName="border rounded p-4 shadow" valueClassName="font-bold text-xl" descriptionClassName="text-gray-600"/>
      </section>

      <section id="how-it-works" className="bg-gray-100 p-8">
        <SideAccordion title="How It Works" description="Understanding our process." items={[
          { title: 'Step 1', content: 'Sign up for an account.' },
          { title: 'Step 2', content: 'Choose your plan.' },
          { title: 'Step 3', content: 'Start enjoying your NimbusFlow experience!' },
        ]} className="p-4" titleClassName="text-lg font-semibold"/>
      </section>

      <section id="testimonials" className="bg-white p-8">
        <ContentTextbox title={<GradientText text="What Our Customers Say" className="text-xl font-bold" color1="#2563EB" color2="#0F172A" color3="#22C55E" />} description={<p className="text-gray-700">"NimbusFlow transformed our workflow!" - Jane D.</p>} className="text-center"/>
      </section>

      <section id="faq" className="bg-gray-100 p-8">
        <SideAccordion title="Frequently Asked Questions" description="Your questions answered." items={[
          { title: 'What is NimbusFlow?', content: 'A SaaS solution for efficient workflows.' },
          { title: 'How do I subscribe?', content: 'Simply sign up through our website.' },
          { title: 'Is there a trial period?', content: 'Yes, you can try it for free for 14 days.' },
        ]} className="p-4" titleClassName="text-lg font-semibold"/>
      </section>

      <section id="cta" className="bg-white p-8">
        <SlideButton text="Join Us Now!" onClick={() => {}} className="bg-blue-500 text-white p-2 rounded" bgColor="#22C55E" hoverBgColor="#1DAE6A" textColor="#FFFFFF" hoverTextColor="#FFFFFF"/>
      </section>
    </>
  );
}