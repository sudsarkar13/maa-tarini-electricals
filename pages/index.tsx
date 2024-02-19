/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Head from "next/head";
import Image from "next/image";
import Hero from "@/components/Hero";

const HomePage = () => {
	return (
		<div>
			<Head>
				<title>Maa Tarini Electricals</title>
			</Head>
			<div className='background'>
				{/* Hero Page */}
				<Hero />
			</div>
		</div>
	);
};

export default HomePage;
