import React, { useState } from 'react';
import { Send, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xzdddrja', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side: Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Let's make<br/><span className="text-zinc-500 italic">something cool.</span></h2>
            <p className="text-lg text-zinc-400 max-w-md leading-relaxed">
              Based in San Francisco. Down to travel, but that might cost extra.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a href="https://www.instagram.com/zachkysar/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group">
              <div className="p-3 bg-zinc-900 rounded-full group-hover:bg-zinc-800">
                <Instagram className="w-5 h-5" />
              </div>
              <span className="text-lg">@zachkysar</span>
            </a>
          </div>
        </div>

        {/* Right Side: Standard Form */}
        <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 backdrop-blur-sm">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white">Drop me a line</h3>
            <p className="text-zinc-500 text-sm mt-1">What are you working on? When do you need it?</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-zinc-200 focus:border-zinc-600 outline-none transition-colors" 
                      placeholder="Jane Doe"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Email</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-zinc-200 focus:border-zinc-600 outline-none transition-colors" 
                      placeholder="jane@example.com"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full h-40 bg-zinc-950 border border-zinc-800 rounded-lg p-4 text-zinc-200 focus:outline-none focus:border-zinc-600 resize-none transition-colors"
                  placeholder="I'm looking for a videographer for my wedding in June..."
                />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-black py-4 rounded-xl font-bold text-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send size={18} />
            </button>
          </form>

          {submitted && (
            <div className="mt-6 p-4 bg-green-900/30 border border-green-800 rounded-lg text-green-400 text-center">
              Thanks for reaching out! I'll get back to you soon.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;