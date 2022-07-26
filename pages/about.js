import styles from "../styles/About.module.css"
import Head from "next/head"
const About = () => {

    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <title>About-NIT</title>
                <meta name="description" content={"meta_description"} />
                <meta name="keywords" content={"meta_keyword"} />
                <meta property="og:title" content={"mata_title"} />
                <meta property="og:description" content={"meta_description"} />
                {/* <meta property="og:image" content={Config.imagePath + meta_image} />
                <meta property="og:url" content={meta_url} /> */}
            </Head>
            <div className={styles.header}>

            </div>
            <h1>About page</h1>
        </div>
    )
}

export const getServerSideProps = async (context) => {
	return {
		props: {
			mata_title: 'Checkout & payment',
			resolvedUrl: context.resolvedUrl,
			mata_title: "My shopping bag"
		},
	};
};

export default About