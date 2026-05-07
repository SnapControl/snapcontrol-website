import React, { useEffect, useState } from "react";

const services = [
  {
    icon: "✓",
    title: "Pest Removal",
    description: "Fast, effective treatments for common pests. We take out the problem at the source.",
  },
  {
    icon: "🛡️",
    title: "Prevention",
    description: "Proactive solutions to help stop pests coming back and protect your property.",
  },
  {
    icon: "♡",
    title: "Aftercare",
    description: "Ongoing support and advice to keep your space pest-free long term.",
  },
  {
    icon: "🏢",
    title: "Routine contract inspections",
    description: "Regular routine inspections for commercial and residential properties.",
  },
];

const trustItems = [
  { icon: "🌿", title: "Safe Treatments", text: "People, pets and environment first." },
  { icon: "🏷️", title: "Clear Pricing", text: "Upfront, honest pricing with no hidden costs." },
  { icon: "👷", title: "Local Technicians", text: "Trained, experienced and local to you." },
  { icon: "🛡️", title: "Results You Can Trust", text: "Proven methods for lasting results." },
];

export default function PestControlWebsite() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = ["home", "services", "about", "guides", "gallery"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      let currentSection = "home";

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white shadow-sm">
        <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative flex h-16 w-16 items-center justify-center rounded-xl bg-white shadow-sm ring-2 ring-blue-700">
              <div className="absolute left-1 top-1 h-4 w-4 border-l-4 border-t-4 border-slate-950" />
              <div className="absolute right-1 top-1 h-4 w-4 border-r-4 border-t-4 border-blue-700" />
              <div className="absolute bottom-1 left-1 h-4 w-4 border-b-4 border-l-4 border-blue-700" />
              <div className="absolute bottom-1 right-1 h-4 w-4 border-b-4 border-r-4 border-slate-950" />
              <div className="text-4xl font-black leading-none">
                <span className="text-slate-950">S</span><span className="-ml-2 text-blue-700">C</span>
              </div>
            </div>
            <div>
              <div className="text-2xl font-black tracking-tight sm:text-3xl">
                <span className="text-slate-950">Snap</span><span className="text-blue-700">Control</span>
              </div>
              
            </div>
          </div>

          <nav className="hidden items-center justify-center gap-8 text-sm font-semibold text-slate-900 lg:flex">
            <a onClick={() => handleNavClick("home")} className={`${activeSection === "home" ? "border-b-2 border-blue-700 pb-1 text-blue-700" : "hover:text-blue-700"}`} href="#home">Home</a>
            <a onClick={() => handleNavClick("services")} className={`${activeSection === "services" ? "border-b-2 border-blue-700 pb-1 text-blue-700" : "hover:text-blue-700"}`} href="#services">Services</a>
            <a onClick={() => handleNavClick("about")} className={`${activeSection === "about" ? "border-b-2 border-blue-700 pb-1 text-blue-700" : "hover:text-blue-700"}`} href="#about">About Us</a>
            <a onClick={() => handleNavClick("guides")} className={`${activeSection === "guides" ? "border-b-2 border-blue-700 pb-1 text-blue-700" : "hover:text-blue-700"}`} href="#guides">Pest Guides</a>
            <a onClick={() => handleNavClick("gallery")} className={`${activeSection === "gallery" ? "border-b-2 border-blue-700 pb-1 text-blue-700" : "hover:text-blue-700"}`} href="#gallery">Gallery</a>
            <a onClick={() => handleNavClick("home")} className={`${activeSection === "home" ? "border-b-2 border-blue-700 pb-1 text-blue-700" : "hover:text-blue-700"}`} href="#contact">Contact Us</a>
          </nav>

          {mobileMenuOpen && (
<div className="relative mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-4 sm:px-6">              <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>About Us</a>
              <a href="#guides" onClick={() => setMobileMenuOpen(false)}>Pest Guides</a>
              <a href="#gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>

              <div className="mt-4 flex flex-col gap-2 border-t border-slate-200 pt-4 text-sm">
                <a href="mailto:Snapservicesuk@gmail.com">📧 Snapservicesuk@gmail.com</a>
                <a href="tel:07399359299">📞 07399 359299</a>
              </div>
            </div>
          )}

          <div className="hidden flex-col items-end text-sm font-semibold text-slate-800 lg:flex">
            <a href="mailto:Snapservicesuk@gmail.com" className="flex items-center gap-2 hover:text-blue-700">
              📧 Snapservicesuk@gmail.com
            </a>
            <a href="tel:07399359299" className="mt-1 flex items-center gap-2 hover:text-blue-700">
              📞 07399 359299
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-3xl lg:hidden"
            aria-label="Open menu"
            type="button"
          >
            ☰
          </button>
        </div>
      </header>

      <main>
        <div className="bg-red-600 px-6 py-3 text-center text-sm font-bold uppercase tracking-wider text-white shadow-lg sm:text-base">
          🚨 24/7 Emergency Pest Control • Fast Response Times • Commercial & Residential Callouts
        </div>
        <section id="home" className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white">
          <div className="absolute right-0 top-0 hidden h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.12),transparent_55%)] lg:block" />
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-[1fr_0.9fr] lg:py-20">
            <div className="relative z-10 lg:pt-10">
              <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                Have no doubt,<br />
                <span className="text-blue-700">We take out</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-800 sm:text-xl sm:leading-9">
                Professional pest services, prevention, and aftercare from trained local technicians. Clear pricing, safe treatments, and results you can trust.
              </p>

              <div className="mt-10 flex max-w-2xl items-start gap-4 border-l-2 border-blue-700 pl-4 sm:gap-5 sm:pl-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-700 text-2xl text-white"></div>
                <p className="text-base font-bold leading-7 text-slate-950 sm:text-lg sm:leading-8">
                  Speak with the on call team today and get practical next steps before we arrive.
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-4">
                <div>
                  <a href="tel:447399359299" className="inline-flex items-center justify-center gap-3 rounded-xl border-2 border-blue-700 bg-white px-9 py-5 text-lg font-bold text-blue-700 hover:bg-blue-50">
                    Call Now
                  </a>
                </div>

                <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm max-w-xl">
                  <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
                    Areas We Cover
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-3 text-base font-semibold text-slate-800 sm:grid-cols-3">
                    <div className="rounded-xl bg-blue-50 px-4 py-3 text-center">Kent</div>
                    <div className="rounded-xl bg-blue-50 px-4 py-3 text-center">London</div>
                    <div className="rounded-xl bg-blue-50 px-4 py-3 text-center">Surrey</div>
                    <div className="rounded-xl bg-blue-50 px-4 py-3 text-center">Essex</div>
                    <div className="rounded-xl bg-blue-50 px-4 py-3 text-center">East Sussex</div>
                    <div className="rounded-xl bg-blue-50 px-4 py-3 text-center">West Sussex</div>
                  </div>
                </div>
              </div>
            </div>

            <div id="contact" className="rounded-[2rem] border border-blue-100 bg-white p-8 shadow-2xl lg:p-10">
              <p className="font-bold uppercase tracking-widest text-blue-700">Get help today</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
                Request a callback
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                Tell us what you’ve seen, where it is, and how urgent it feels. We’ll recommend the next best step.
              </p>

              <form
                className="mt-8 grid gap-4"
                onSubmit={(event) => {
                  event.preventDefault();

                  const form = event.target;
                  const name = form.name.value;
                  const phone = form.phone.value;
                  const email = form.email.value;
                  const pest = form.pest.value;
                  const issue = form.issue.value;

                  const message = `New SnapControl enquiry%0A%0AName: ${name}%0APhone: ${phone}%0AEmail: ${email}%0APest: ${pest}%0AIssue: ${issue}`;

                  window.open(`https://wa.me/447399359299?text=${message}`, "_blank");
                }}
              >
                <input name="name" className="rounded-xl border border-slate-200 bg-white px-4 py-4 outline-none focus:border-blue-700" placeholder="Your name" required />
                <input
                  name="phone"
                  type="tel"
                  className="rounded-xl border border-slate-200 bg-white px-4 py-4 outline-none focus:border-blue-700"
                  placeholder="Phone number"
                  required
                />

                <input
                  name="email"
                  type="email"
                  className="rounded-xl border border-slate-200 bg-white px-4 py-4 outline-none focus:border-blue-700"
                  placeholder="Email address"
                  required
                />
                <select name="pest" className="rounded-xl border border-slate-200 bg-white px-4 py-4 text-slate-900 outline-none focus:border-blue-700" defaultValue="" required>
                  <option value="" disabled>What pest are you dealing with?</option>
                  <option>Rats or mice</option>
                  <option>Wasps</option>
                  <option>Cockroaches</option>
                  <option>Ants</option>
                  <option>Other</option>
                </select>
                <textarea name="issue" className="min-h-28 rounded-xl border border-slate-200 bg-white px-4 py-4 outline-none focus:border-blue-700" placeholder="Briefly describe the issue (optional)" />

                <label className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-5 w-5 rounded border-slate-300 text-blue-700 focus:ring-blue-700"
                  />
                  <span>
                    I hereby agree that this data will be stored and processed for the purpose of establishing contact. I am aware that I can revoke my consent at any time.*
                  </span>
                </label>
                <button className="rounded-xl bg-blue-700 px-6 py-4 text-lg font-bold text-white hover:bg-blue-800" type="submit">
                  Request a Callback
                </button>
              </form>
            </div>
          </div>
        </section>

        <section id="services" className="bg-blue-50/70 px-6 pb-12 pt-6">
          <div className="mx-auto grid max-w-7xl gap-7 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="rounded-2xl bg-white p-8 text-center shadow-lg ring-1 ring-blue-100">
                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl text-5xl text-blue-700">
                  {service.icon}
                </div>
                <h3 className="text-lg font-black text-slate-950">{service.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-700">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="services-highlights" className="bg-blue-50/70 px-6 pb-14">
          <div className="mx-auto grid max-w-7xl gap-0 overflow-hidden rounded-2xl bg-blue-700 text-white shadow-xl md:grid-cols-4">
            {trustItems.map((item, index) => (
              <div key={item.title} className={`flex gap-5 p-7 ${index !== 0 ? "md:border-l md:border-white/35" : ""}`}>
                <div className="text-4xl">{item.icon}</div>
                <div>
                  <h3 className="font-black">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-blue-50">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="bg-white px-6 py-16">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="font-bold uppercase tracking-widest text-blue-700">About SnapControl</p>
              <h2 className="mt-4 text-5xl font-black leading-tight text-slate-950">
                Professional pest control you can rely on.
              </h2>
              <p className="mt-6 text-lg leading-9 text-slate-700">
                SnapControl provides professional pest services for residential and commercial properties. Our experienced technicians focus on fast response times, safe treatments, and long-term prevention solutions.
              </p>
              <p className="mt-5 text-lg leading-9 text-slate-700">
                From emergency pest removal to routine contract inspections, we work with homeowners, landlords, restaurants, offices, and commercial properties to keep spaces protected and pest-free.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 sm:col-span-2">
                  <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
                    Trusted & Certified
                  </p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-xl bg-white px-4 py-4 text-center font-semibold text-slate-900 shadow-sm">
                      ✓ Fully Insured
                    </div>

                    <div className="rounded-xl bg-white px-4 py-4 text-center font-semibold text-slate-900 shadow-sm">
                      ✓ DBS Checked
                    </div>

                    <div className="rounded-xl bg-white px-4 py-4 text-center font-semibold text-slate-900 shadow-sm">
                      ✓ BPCA Trained
                    </div>

                    <div className="rounded-xl bg-white px-4 py-4 text-center font-semibold text-slate-900 shadow-sm">
                      ✓ Licensed Technicians
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
                  <p className="text-3xl font-black text-blue-700">24/7</p>
                  <p className="mt-2 font-semibold text-slate-900">Emergency callouts available</p>
                </div>

                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
                  <p className="text-3xl font-black text-blue-700">100%</p>
                  <p className="mt-2 font-semibold text-slate-900">Committed to customer satisfaction</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 to-blue-800 p-10 text-white shadow-2xl">
              <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-blue-500/20 blur-3xl" />
              <div className="relative z-10">
                <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-5xl shadow-xl">
                  🛡️
                </div>

                <h3 className="text-3xl font-black leading-tight">
                  Reliable protection for homes and businesses.
                </h3>

                <div className="mt-8 space-y-5 text-lg text-slate-100">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">✓</span>
                    <p>Qualified and experienced technicians</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-2xl">✓</span>
                    <p>Safe and effective treatment methods</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-2xl">✓</span>
                    <p>Commercial and residential pest solutions</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-2xl">✓</span>
                    <p>Routine inspections and prevention plans</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="guides" className="bg-blue-50/60 px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <p className="font-bold uppercase tracking-widest text-blue-700">Pest Guides</p>
              <h2 className="mt-4 text-5xl font-black text-slate-950">
                Learn how to spot and prevent common pests.
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-700">
                Helpful advice and practical prevention tips for homes, businesses, and commercial properties.
              </p>
            </div>

            <div className="space-y-5">
              <details className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
                <summary className="cursor-pointer list-none text-2xl font-black text-slate-950">
                  🐀 Rodent Guide
                </summary>
                <div className="mt-5 text-lg leading-8 text-slate-700">
                  <p>
                    Rats and mice are commonly attracted to food sources, warmth, and hidden shelter areas. Common signs include scratching noises, droppings, damaged packaging, and strong odours.
                  </p>
                  <p className="mt-4">
                    To help prevent infestations, seal entry points, remove food waste promptly, and schedule regular inspections for your property.
                  </p>
                </div>
              </details>

              <details className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
                <summary className="cursor-pointer list-none text-2xl font-black text-slate-950">
                  🪳 Cockroach Guide
                </summary>
                <div className="mt-5 text-lg leading-8 text-slate-700">
                  <p>
                    Cockroaches thrive in warm and damp environments such as kitchens, storage rooms, and commercial food areas. They can spread bacteria and contaminate surfaces.
                  </p>
                  <p className="mt-4">
                    Keeping areas clean, reducing moisture, and professional treatments are the most effective ways to prevent cockroach infestations.
                  </p>
                </div>
              </details>

              <details className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
                <summary className="cursor-pointer list-none text-2xl font-black text-slate-950">
                  🐜 Ant Prevention
                </summary>
                <div className="mt-5 text-lg leading-8 text-slate-700">
                  <p>
                    Ants are usually attracted to sweet foods, crumbs, and moisture around kitchens and gardens. Small colonies can quickly become larger infestations if left untreated.
                  </p>
                  <p className="mt-4">
                    Wiping surfaces regularly, storing food correctly, and blocking entry points can help reduce ant activity around your property.
                  </p>
                </div>
              </details>

              <details className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
                <summary className="cursor-pointer list-none text-2xl font-black text-slate-950">
                  🕊️ Bird Prevention
                </summary>
                <div className="mt-5 text-lg leading-8 text-slate-700">
                  <p>
                    Birds such as pigeons and gulls can create nesting problems, property damage, noise issues, and health risks for homes and businesses.
                  </p>
                  <p className="mt-4">
                    Professional bird proofing solutions including spikes, netting, and deterrent systems can help protect roofs, signage, solar panels, and commercial buildings.
                  </p>
                </div>
              </details>

              <details className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
                <summary className="cursor-pointer list-none text-2xl font-black text-slate-950">
                  🪰 Fly Prevention
                </summary>
                <div className="mt-5 text-lg leading-8 text-slate-700">
                  <p>
                    Flies are commonly attracted to food waste, drains, bins, and warm environments. They can quickly become a nuisance in homes, restaurants, kitchens, and commercial properties.
                  </p>
                  <p className="mt-4">
                    Regular cleaning, proper waste management, fly screens, and professional treatments can help reduce fly activity and prevent infestations.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>

        <section id="gallery" className="bg-white px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="font-bold uppercase tracking-widest text-blue-700">Gallery</p>
                <h2 className="mt-4 text-5xl font-black leading-tight text-slate-950">
                  Follow our latest work on Instagram.
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-700">
                  View recent pest prevention work, treatment updates, behind-the-scenes photos, and helpful tips from the SnapControl team.
                </p>
                <a
                  href="https://www.instagram.com/snapcontroluk/"
                  className="mt-8 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-8 py-4 text-lg font-bold text-white shadow-lg hover:opacity-90"
                >
                  View Our Instagram
                </a>
              </div>

              <div className="rounded-3xl bg-blue-50 p-8 shadow-sm ring-1 ring-blue-100">
                <div className="flex min-h-72 flex-col items-center justify-center rounded-2xl bg-white p-8 text-center">
                  <div className="mb-5 text-6xl">📸</div>
                  <h3 className="text-3xl font-black text-slate-950">Recent Posts</h3>
                  <p className="mt-4 max-w-md text-lg leading-8 text-red-600 font-semibold">
                    Warning: Instagram posts may contain images of deceased animals and pest control treatments.
                  </p>
                  

                  <a
                    href="https://www.instagram.com/snapcontroluk/"
                    className="mt-6 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-6 py-3 font-bold text-white shadow-lg hover:opacity-90"
                  >
                    Open Recent Posts
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-10">
          <div className="mx-auto max-w-7xl rounded-[2rem] bg-slate-950 p-10 text-white shadow-2xl">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
              <div>
                <p className="font-bold uppercase tracking-widest text-blue-400">Customer Reviews</p>
                <h2 className="mt-3 text-4xl font-black leading-tight">Trusted by homeowners and businesses.</h2>
              </div>

              <div>
                <div className="mb-4 text-3xl text-yellow-400">★★★★★</div>
                <blockquote className="text-2xl font-bold leading-10 text-white">
                  “Fantastic service from start to finish. The team arrived quickly, explained everything clearly, and completely solved our rodent issue. Highly recommend SnapControl.”
                </blockquote>
                <p className="mt-5 text-lg font-semibold text-blue-300">— Michael R., Commercial Property Owner</p>
              </div>
            </div>
          </div>
        </section>

        
      </main>

      <footer className="bg-slate-950 px-6 py-8 text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm md:flex-row">
          <p>© 2024 SnapControl. All rights reserved.</p>
          <p>Serving homes and businesses across your local area.</p>
        </div>
      </footer>

      <a
        href="https://wa.me/447399359299?text=Your%20name:%0A%0AEmail:%0A%0AWhat%20pest%20are%20you%20dealing%20with:%0A%0ABriefly%20describe%20the%20issue:"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition hover:scale-110 hover:bg-green-600"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="h-9 w-9">
          <path d="M19.11 17.21c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.5-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35z" />
          <path d="M16.02 3C8.83 3 3 8.82 3 16c0 2.53.74 4.98 2.13 7.08L3 29l6.13-2.02A12.93 12.93 0 0016.02 29C23.2 29 29 23.18 29 16S23.2 3 16.02 3zm0 23.64c-2.08 0-4.12-.56-5.9-1.63l-.42-.25-3.64 1.2 1.19-3.55-.27-.45a10.6 10.6 0 01-1.64-5.66c0-5.89 4.79-10.68 10.68-10.68 2.85 0 5.53 1.11 7.54 3.13a10.6 10.6 0 013.12 7.55c0 5.89-4.79 10.68-10.66 10.68z" />
        </svg>
      </a>
    </div>
  );
}
