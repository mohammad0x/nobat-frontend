import Footer from "@/app/components/footer/page";
import React from "react";
import HeaderHair from "@/app/hairStyle/header";

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
                <HeaderHair />

            </body>
        </html>
    )
}

function collapse() {
    return (
        <section>

        </section>
    )
}