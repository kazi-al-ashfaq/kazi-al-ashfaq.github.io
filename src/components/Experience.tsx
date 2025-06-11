"use client";
import React from "react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full max-w-2xl mx-auto py-10 px-4 bg-dgrees-bg text-dgrees-text rounded-xl shadow-lg"
      aria-labelledby="experience-heading"
    >
      <h2 className="text-3xl font-bold mb-8 text-dgrees-secondary">Experience Timeline</h2>
      <div className="relative pl-8 bg-dgrees-bg/80">
        <div className="mb-8 relative">
          <span className="absolute -left-6 top-1 w-4 h-4 bg-dgrees-primary rounded-full border-4 border-dgrees-bg" />
          <span className="text-sm text-dgrees-muted">Sep 2023 – Present</span>
          <h3 className="text-2xl font-semibold text-dgrees-text">Senior Lecturer (Cyber Security)</h3>
          <p className="text-dgrees-muted">World University of Bangladesh</p>
          <p className="text-dgrees-muted text-sm mt-2">Led lectures, research, and academic advising while managing labs, committees, and curriculum development in cybersecurity.</p>
        </div>
        <div className="mb-8 relative">
          <span className="absolute -left-6 top-1 w-4 h-4 bg-dgrees-secondary rounded-full border-4 border-dgrees-bg" />
          <span className="text-sm text-dgrees-muted">Oct 2022 – May 2023</span>
          <h3 className="text-2xl font-semibold text-dgrees-text">Site Inspector</h3>
          <p className="text-dgrees-muted">Oversaw MRT Line 6 CBTC, SCADA, AFC, and telecom systems.</p>
        </div>
        <div className="mb-8 relative">
          <span className="absolute -left-6 top-1 w-4 h-4 bg-dgrees-secondary rounded-full border-4 border-dgrees-bg" />
          <span className="text-sm text-dgrees-muted">Jan 2021</span>
          <h3 className="text-2xl font-semibold text-dgrees-text">IT Support Specialist</h3>
          <p className="text-dgrees-muted">Provided technical support, troubleshooting, and network maintenance.</p>
        </div>
        <div className="mb-8 relative">
          <span className="absolute -left-6 top-1 w-4 h-4 bg-dgrees-primary rounded-full border-4 border-dgrees-bg" />
          <span className="text-sm text-dgrees-muted">Nov 2020 – Dec 2020</span>
          <h3 className="text-2xl font-semibold text-dgrees-text">Cyber Security Analyst Intern</h3>
          <p className="text-dgrees-muted">Assisted in vulnerability assessments and security gap analysis.</p>
        </div>
        <div className="mb-8 relative">
          <span className="absolute -left-6 top-1 w-4 h-4 bg-dgrees-secondary rounded-full border-4 border-dgrees-bg" />
          <span className="text-sm text-dgrees-muted">Sep 2020 – Nov 2020</span>
          <h3 className="text-2xl font-semibold text-dgrees-text">Cybersecurity Intern</h3>
          <p className="text-dgrees-muted">Performed network scans, vulnerability audits, and documentation.</p>
        </div>
        <div className="mb-8 relative">
          <span className="absolute -left-6 top-1 w-4 h-4 bg-dgrees-primary rounded-full border-4 border-dgrees-bg" />
          <span className="text-sm text-dgrees-muted">Jul 2020 – Sep 2020</span>
          <h3 className="text-2xl font-semibold text-dgrees-text">Networking Intern</h3>
          <p className="text-dgrees-muted">Redesigned networks, configured routing, DHCP, NAT, and ACLs.</p>
        </div>
        <div className="mb-10 relative">
          <span className="absolute -left-6 top-1 w-4 h-4 bg-dgrees-primary rounded-full border-4 border-dgrees-bg" />
          <span className="text-sm text-dgrees-muted">Jan 2020 – Jun 2020</span>
          <h3 className="text-2xl font-semibold text-dgrees-text">Freelance Research Assistant (Part-Time)</h3>
          <p className="text-dgrees-muted">Supported research on cybersecurity and network protocols.</p>
        </div>
        <div className="mb-10 relative">
          <span className="absolute -left-6 top-1 w-4 h-4 bg-dgrees-primary rounded-full border-4 border-dgrees-bg" />
          <span className="text-sm text-dgrees-muted">Jul 2018 – Jan 2019</span>
          <h3 className="text-2xl font-semibold text-dgrees-text">Web Developer</h3>
          <p className="text-dgrees-muted">Created website layouts and developed database-driven websites.</p>
        </div>
        <div className="mb-10 relative">
          <span className="absolute -left-6 top-1 w-4 h-4 bg-dgrees-secondary rounded-full border-4 border-dgrees-bg" />
          <span className="text-sm text-dgrees-muted">Apr 2015 – Jan 2016</span>
          <h3 className="text-2xl font-semibold text-dgrees-text">Front End Developer (Part-Time)</h3>
          <p className="text-dgrees-muted">Developed interactive and responsive designs for mobile sites.</p>
        </div>
        <div className="mb-10 relative">
          <span className="absolute -left-6 top-1 w-4 h-4 bg-dgrees-primary rounded-full border-4 border-dgrees-bg" />
          <span className="text-sm text-dgrees-muted">Mar 2014 – Mar 2015</span>
          <h3 className="text-2xl font-semibold text-dgrees-text">Trainer (Part-Time)</h3>
          <p className="text-dgrees-muted">Conducted training on computer software applications for communities.</p>
        </div>
        <div className="mb-10 relative">
          <span className="absolute -left-6 top-1 w-4 h-4 bg-dgrees-secondary rounded-full border-4 border-dgrees-bg" />
          <span className="text-sm text-dgrees-muted">Mar 2013 – Dec 2013</span>
          <h3 className="text-2xl font-semibold text-dgrees-text">Freelance Web Developer</h3>
          <p className="text-dgrees-muted">Co-designed and developed websites, ensuring user-friendly interfaces.</p>
        </div>
      </div>
    </section>
  );
}