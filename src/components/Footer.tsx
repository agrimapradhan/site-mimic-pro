
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-dark">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-1">
            <div className="mb-6">
              <img src="/placeholder.svg" alt="Crenovent Logo" className="h-8" />
            </div>
            <button className="bg-black text-white px-6 py-3 rounded-full mb-8 font-medium">
              Book a demo
            </button>
            <div>
              <h4 className="font-semibold mb-4">FOLLOW US</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-primary hover:text-primary-dark">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-dark">WHY CRENOVENT</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-primary">• Unified experience to overcome silos of process and data</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">• Bridge the gap between strategy and execution</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">• Capture and control stuffs beyond CRMs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">• Advanced AI That Understands and Predicts Business Needs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-dark">PRODUCT</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-primary">• Rev AI</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">• Cruxx</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">• Tell Me</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">• Lets Meet</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">• Just in time</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">• RevOps Max</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-dark">SOLUTIONS</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-primary">• From boardroom to field</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">• Optimize revenue capture</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">• Orbital shift framework</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">• Move away from trailing to leading indicators</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">• Remove manual overload</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">• Increase Customer lifetime value</a></li>
            </ul>
          </div>
          
          <div>
            <div className="mb-8">
              <h4 className="font-semibold mb-4 text-dark">INDUSTRIES</h4>
              <div className="mb-4">
                <h5 className="font-semibold text-gray-700 mb-2">High tech</h5>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-primary">• Software / SaaS</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-primary">• IT Services</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-primary">• E-Commerce / Digital Natives</a></li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-700 mb-2">Financial Services</h5>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-primary">• Banks</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-primary">• Insurance</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-primary">• Financial Services / FinTech</a></li>
                </ul>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-dark">ABOUT US</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-primary">• Contact Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">• Join Our Team</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-200">
        <div className="container py-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">Crenovent 2025 © All rights reserved</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-primary text-sm">Terms of Use</a>
            <a href="#" className="text-gray-600 hover:text-primary text-sm">Cookie Policy</a>
            <a href="#" className="text-gray-600 hover:text-primary text-sm">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
