import React from 'react';

export default function Contact() {
    return (
        <div className="container my-24 mx-auto md:px-6">
            {/* Section: Design Block */}
            <section className="mb-32 text-center">
                <div className="py-12 md:px-12">
                    <div className="container mx-auto xl:px-32">
                        <div className="grid items-center lg:grid-cols-2">
                            <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                                <div
                                    className="relative z-[1] block rounded-lg px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] bg-[hsla(0,0%,5%,0.7)] shadow-black/20 md:px-12 lg:-mr-14">
                                    <h2 className="mb-12 text-3xl font-bold">Contact us</h2>
                                    <form>
                                        {/* ... form fields */}
                                        <div
                                            className="relative mb-6"
                                            data-te-input-wrapper-init="data-te-input-wrapper-init">
                                            <input
                                                type="text"
                                                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-neutral-200 placeholder:text-neutral-200 peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                id="exampleInput90"
                                                placeholder="Name"/>
                                            <label
                                                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-neutral-200 peer-focus:text-primary"
                                                htmlFor="exampleInput90">Name
                                            </label>
                                        </div>
                                        <div
                                            className="relative mb-6"
                                            data-te-input-wrapper-init="data-te-input-wrapper-init">
                                            <input
                                                type="email"
                                                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-neutral-200 placeholder:text-neutral-200 peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                id="exampleInput91"
                                                placeholder="Email address"/>
                                            <label
                                                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-neutral-200 peer-focus:text-primary"
                                                htmlFor="exampleInput91">Email address
                                            </label>
                                        </div>
                                        <div
                                            className="relative mb-6"
                                            data-te-input-wrapper-init="data-te-input-wrapper-init">
                                            <textarea
                                                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                id="exampleFormControlTextarea1"
                                                rows="3"
                                                placeholder="Your message"></textarea>
                                            <label
                                                htmlFor="exampleFormControlTextarea1"
                                                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-neutral-200 peer-focus:text-primary">Message</label >
                                        </div>
                                        <button
                                            type="button"
                                            data-te-ripple-init="data-te-ripple-init"
                                            data-te-ripple-color="light"
                                            className="inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out
                                            hover:bg-primary-600 focus:bg-primary-600
                                            focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)]
                                            hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] lg:mb-0">
                                            Send
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="md:mb-12 lg:mb-0">
                                <div className="relative h-[700px] rounded-lg shadow-lg dark:shadow-black/20">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d5992.629688305711!2d19.812879797587648!3d41.32376659250103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sIsmail%20Qemali%20Street%2C%20No.2%2C%20Tirana%2C%20Albania!5e0!3m2!1sen!2sus!4v1692105837547!5m2!1sen!2sus"
                                        className="absolute left-0 top-0 h-full w-full rounded-lg"
                                        allowFullScreen="allowFullScreen"
                                        alt="map"
                                        title='map'></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section: Design Block */}
        </div>
    );
}
