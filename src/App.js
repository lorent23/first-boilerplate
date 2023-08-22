import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Hero from './components/views/Hero/Hero';
import About from "./components/views/About/About";
import NotFound from "./components/views/404/404page";
import ServicesSection from "./components/views/Services/ServicesSection";
import PartnersSection from "./components/views/PartnersSection/PartnersSection";
import Contact from "./components/reusable-components/Contact/Contact";

function App() {
    return (
        <BrowserRouter>
        <Layout>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/partners" element={<PartnersSection />} />
                    <Route path="/services" element={<ServicesSection />} />
                    <Route path="/contact-us" element={<Contact />} />
                    <Route path="*" element={<NotFound />} /> {/* This route will catch all unknown routes */}
                </Routes>
            </div>
        </Layout>
    </BrowserRouter>
    );
}

export default App;