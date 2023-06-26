import Footer from "@/app/components/footer/page";
import React from "react";

export default function HairStyle() {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8"/>
                <meta name="viewport"
                      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                <meta content="ie=edge"/>
                <title> Document < /title>
            </head>
            <body>


            </body>
        </html>
    )
}

function Tabs() {
    return (
        <div>
            <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab"
                    data-tabs-toggle="#myTabContent" role="tablist">
                    <li className="mr-2" role="presentation">
                        <button className="inline-block p-4 border-b-2 rounded-t-lg" id="service-tab"
                                data-tabs-target="#service" type="button" role="tab" aria-controls="service"
                                aria-selected="false">service
                        </button>
                    </li>
                    <li className="mr-2" role="presentation">
                        <button
                            className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                            id="post-tab" data-tabs-target="#post" type="button" role="tab"
                            aria-controls="post" aria-selected="false">Dashboard
                        </button>
                    </li>
                    <li className="mr-2" role="presentation">
                        <button
                            className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                            id="review-tab" data-tabs-target="#review" type="button" role="tab"
                            aria-controls="review" aria-selected="false">review
                        </button>
                    </li>
                </ul>
            </div>
            <div id="myTabContent">
                <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="service" role="tabpanel"
                     aria-labelledby="service-tab">
                    <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong
                        className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>.
                        Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript
                        swaps classes to control the content visibility and styling.</p>
                </div>
                <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="post" role="tabpanel"
                     aria-labelledby="post-tab">
                    <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong
                        className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated
                        content</strong>. Clicking another tab will toggle the visibility of this one for the next. The
                        tab JavaScript swaps classes to control the content visibility and styling.</p>
                </div>
                <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="review" role="tabpanel"
                     aria-labelledby="review-tab">
                    <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong
                        className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>.
                        Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript
                        swaps classes to control the content visibility and styling.</p>
                </div>
            </div>
        </div>
    )
}