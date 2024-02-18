/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Head from "next/head";
import Hero from "@/components/Hero";

const HomePage = () => {
	return (
    <Head>
      <title>Maa Tarini Electricals</title>
    </Head>
		<div>
			HomePage
			{/* Hero Page */}
			<Hero />
		</div>
	);
};

export default HomePage;
